const worker = self;
function humanFileSize(bytes, si = true) {
  const thresh = si ? 1e3 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }
  const units = si ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + " " + units[u];
}
async function resizeImage({
  image,
  quality,
  width,
  height,
  src
}) {
  const start = +/* @__PURE__ */ new Date();
  console.log(`Start resize file: ${image.name}`);
  const url = src || URL.createObjectURL(image);
  try {
    const JimpModule = await import("./index-147d5c4b.js").then(function(n) {
      return n.i;
    });
    const Jimp = JimpModule && JimpModule.default;
    const { lastModified, type } = image;
    const imageJimp = await Jimp.read(url);
    const res = await imageJimp.quality(quality).resize(width || Jimp.AUTO, height || Jimp.AUTO).getBufferAsync(type);
    const end = +/* @__PURE__ */ new Date();
    const newFile = new File([res], image.name, {
      lastModified,
      type
    });
    console.table({
      name: image.name,
      sizeOriginal: humanFileSize(image.size),
      newSize: humanFileSize(newFile.size),
      reduction: `${~~(image.size / newFile.size) * 100}%`,
      totalTime: `${(end - start) / 1e3} seg`
    });
    return newFile;
  } catch (error) {
    return image;
  }
}
worker.addEventListener("message", async (event) => {
  const data = event.data;
  const { payload, id } = data;
  const { image, src } = payload;
  const { images = [], width, height, quality = 80 } = payload;
  if (image) {
    worker.postMessage({
      image: await resizeImage({
        image,
        width,
        height,
        quality,
        src
      }),
      id
    });
  } else {
    const response = await Promise.all(
      images.map(
        async (img) => resizeImage({ image: img, width, height, quality })
      )
    );
    worker.postMessage({ image: response, id });
  }
});
