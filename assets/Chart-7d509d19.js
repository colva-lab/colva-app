import { r as reactExports, bc as reactDomExports, n as jsx, C as jsxs, at as Fragment, aK as getDefaultExportFromCjs, e3 as _baseGetTag, e4 as isArray_1, e5 as isObjectLike_1, e6 as _SetCache, e7 as _arrayMap, e8 as _cacheHas, e9 as _baseUnary, ea as _baseRest, eb as isArrayLikeObject_1, ec as _baseIsEqual, ed as _baseGet, ee as _baseSet, ef as _castPath, eg as hasIn_1, eh as _Symbol, ei as isArguments_1, ej as _arrayPush, ek as _overRest, el as _setToString, aF as K$2, em as Qe$1, en as we$1, eo as v$4, aR as b$5, ep as _e, eq as _Set, er as _setToArray, es as _baseIteratee, et as _baseOrderBy, eu as _isIterateeCall, ev as _nodeUtilExports, u as useTranslation } from "./index-60a9ad09.js";
import { p as parseISO, f as format$3 } from "./index-3848f05e.js";
import "./ErrorOutline-27089ca2.js";
import "./index-9ab0c8c5.js";
import "./Save-95d94cd2.js";
let updateQueue = makeQueue();
const raf = (fn2) => schedule(fn2, updateQueue);
let writeQueue = makeQueue();
raf.write = (fn2) => schedule(fn2, writeQueue);
let onStartQueue = makeQueue();
raf.onStart = (fn2) => schedule(fn2, onStartQueue);
let onFrameQueue = makeQueue();
raf.onFrame = (fn2) => schedule(fn2, onFrameQueue);
let onFinishQueue = makeQueue();
raf.onFinish = (fn2) => schedule(fn2, onFinishQueue);
let timeouts = [];
raf.setTimeout = (handler, ms) => {
  let time2 = raf.now() + ms;
  let cancel = () => {
    let i2 = timeouts.findIndex((t2) => t2.cancel == cancel);
    if (~i2)
      timeouts.splice(i2, 1);
    pendingCount -= ~i2 ? 1 : 0;
  };
  let timeout = {
    time: time2,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time2), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
let findTimeout = (time2) => ~(~timeouts.findIndex((t2) => t2.time > time2) || ~timeouts.length);
raf.cancel = (fn2) => {
  onStartQueue.delete(fn2);
  onFrameQueue.delete(fn2);
  updateQueue.delete(fn2);
  writeQueue.delete(fn2);
  onFinishQueue.delete(fn2);
};
raf.sync = (fn2) => {
  sync = true;
  raf.batchedUpdates(fn2);
  sync = false;
};
raf.throttle = (fn2) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn2(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn2;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
let nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : () => {
};
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn2) => fn2();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand");
  } else {
    update();
  }
};
let ts = -1;
let pendingCount = 0;
let sync = false;
function schedule(fn2, queue) {
  if (sync) {
    queue.delete(fn2);
    fn2(0);
  } else {
    queue.add(fn2);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);
  if (count) {
    eachSafely(timeouts.splice(0, count), (t2) => t2.handler());
    pendingCount -= count;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
  if (!pendingCount) {
    stop();
  }
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn2) {
      pendingCount += current == next && !next.has(fn2) ? 1 : 0;
      next.add(fn2);
    },
    delete(fn2) {
      pendingCount -= current == next && next.has(fn2) ? 1 : 0;
      return next.delete(fn2);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn2) => fn2(arg) && next.add(fn2));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e3) {
      raf.catch(e3);
    }
  });
}
function noop$3() {
}
const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});
const is = {
  arr: Array.isArray,
  obj: (a2) => !!a2 && a2.constructor.name === "Object",
  fun: (a2) => typeof a2 === "function",
  str: (a2) => typeof a2 === "string",
  num: (a2) => typeof a2 === "number",
  und: (a2) => a2 === void 0
};
function isEqual$1(a2, b2) {
  if (is.arr(a2)) {
    if (!is.arr(b2) || a2.length !== b2.length)
      return false;
    for (let i2 = 0; i2 < a2.length; i2++) {
      if (a2[i2] !== b2[i2])
        return false;
    }
    return true;
  }
  return a2 === b2;
}
const each = (obj, fn2) => obj.forEach(fn2);
function eachProp(obj, fn2, ctx2) {
  if (is.arr(obj)) {
    for (let i2 = 0; i2 < obj.length; i2++) {
      fn2.call(ctx2, obj[i2], `${i2}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn2.call(ctx2, obj[key], key);
    }
  }
}
const toArray = (a2) => is.und(a2) ? [] : is.arr(a2) ? a2 : [a2];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
const flushCalls = (queue, ...args) => flush(queue, (fn2) => fn2(...args));
const isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let createStringInterpolator$1;
let to$1;
let colors$1 = null;
let skipAnimation = false;
let willAdvance = noop$3;
const assign = (globals2) => {
  if (globals2.to)
    to$1 = globals2.to;
  if (globals2.now)
    raf.now = globals2.now;
  if (globals2.colors !== void 0)
    colors$1 = globals2.colors;
  if (globals2.skipAnimation != null)
    skipAnimation = globals2.skipAnimation;
  if (globals2.createStringInterpolator)
    createStringInterpolator$1 = globals2.createStringInterpolator;
  if (globals2.requestAnimationFrame)
    raf.use(globals2.requestAnimationFrame);
  if (globals2.batchedUpdates)
    raf.batchedUpdates = globals2.batchedUpdates;
  if (globals2.willAdvance)
    willAdvance = globals2.willAdvance;
  if (globals2.frameLoop)
    raf.frameLoop = globals2.frameLoop;
};
var globals = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return createStringInterpolator$1;
  },
  get to() {
    return to$1;
  },
  get colors() {
    return colors$1;
  },
  get skipAnimation() {
    return skipAnimation;
  },
  get willAdvance() {
    return willAdvance;
  },
  assign
});
const startQueue = /* @__PURE__ */ new Set();
let currentFrame = [];
let prevFrame = [];
let priority = 0;
const frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  advance,
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, (other) => other.priority > animation.priority), 0, animation);
}
function advance(dt) {
  const nextFrame = prevFrame;
  for (let i2 = 0; i2 < currentFrame.length; i2++) {
    const animation = currentFrame[i2];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}
const colors$2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
const NUMBER = "[-+]?\\d*\\.?\\d+";
const PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const rgb$2 = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
const rgba$1 = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl$1 = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla$1 = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color2) {
  let match;
  if (typeof color2 === "number") {
    return color2 >>> 0 === color2 && color2 >= 0 && color2 <= 4294967295 ? color2 : null;
  }
  if (match = hex6.exec(color2))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors$1 && colors$1[color2] !== void 0) {
    return colors$1[color2];
  }
  if (match = rgb$2.exec(color2)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
  }
  if (match = rgba$1.exec(color2)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }
  if (match = hex3.exec(color2)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
  }
  if (match = hex8.exec(color2))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color2)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }
  if (match = hsl$1.exec(color2)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
  }
  if (match = hsla$1.exec(color2)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }
  return null;
}
function hue2rgb(p2, q, t2) {
  if (t2 < 0)
    t2 += 1;
  if (t2 > 1)
    t2 -= 1;
  if (t2 < 1 / 6)
    return p2 + (q - p2) * 6 * t2;
  if (t2 < 1 / 2)
    return q;
  if (t2 < 2 / 3)
    return p2 + (q - p2) * (2 / 3 - t2) * 6;
  return p2;
}
function hslToRgb(h, s, l2) {
  const q = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
  const p2 = 2 * l2 - q;
  const r2 = hue2rgb(p2, q, h + 1 / 3);
  const g2 = hue2rgb(p2, q, h);
  const b2 = hue2rgb(p2, q, h - 1 / 3);
  return Math.round(r2 * 255) << 24 | Math.round(g2 * 255) << 16 | Math.round(b2 * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  let r2 = (int32Color & 4278190080) >>> 24;
  let g2 = (int32Color & 16711680) >>> 16;
  let b2 = (int32Color & 65280) >>> 8;
  let a2 = (int32Color & 255) / 255;
  return `rgba(${r2}, ${g2}, ${b2}, ${a2})`;
}
const createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }
  const config2 = range;
  const outputRange = config2.output;
  const inputRange = config2.range || [0, 1];
  const extrapolateLeft = config2.extrapolateLeft || config2.extrapolate || "extend";
  const extrapolateRight = config2.extrapolateRight || config2.extrapolate || "extend";
  const easing = config2.easing || ((t2) => t2);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate$1(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight, config2.map);
  };
};
function interpolate$1(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map2) {
  let result = map2 ? map2(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i2 = 1; i2 < inputRange.length - 1; ++i2)
    if (inputRange[i2] >= input)
      break;
  return i2 - 1;
}
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
const $get = Symbol.for("FluidValue.get");
const $observers = Symbol.for("FluidValue.observers");
const hasFluidValue = (arg) => Boolean(arg && arg[$get]);
const getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
const getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}
function callFluidObservers(target, event) {
  let observers = target[$observers];
  if (observers) {
    observers.forEach((observer) => {
      callFluidObserver(observer, event);
    });
  }
}
class FluidValue {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
}
const setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer)) {
      observers.add(observer);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }
  return observer;
}
function removeFluidObserver(target, observer) {
  let observers = target[$observers];
  if (observers && observers.has(observer)) {
    const count = observers.size - 1;
    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}
const setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});
const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
const variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
const parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
let namedColorRegex;
const rgbaRound = (_2, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
const createStringInterpolator = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/;
  const output = config2.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_2, i2) => keyframes.map((values) => {
    if (!(i2 in values)) {
      throw Error('The arity of each "output" value must be equal');
    }
    return values[i2];
  }));
  const interpolators = outputRanges.map((output2) => createInterpolator(_extends$2({}, config2, {
    output: output2
  })));
  return (input) => {
    var _output$find;
    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find((value) => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ""));
    let i2 = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i2++](input)}${missingUnit || ""}`).replace(rgbaRegex, rgbaRound);
  };
};
const prefix = "react-spring: ";
const once = (fn2) => {
  const func = fn2;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
const warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}
const useLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? reactExports.useLayoutEffect : reactExports.useEffect;
const useIsMounted = () => {
  const isMounted = reactExports.useRef(false);
  useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
function useForceUpdate() {
  const update2 = reactExports.useState()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update2(Math.random());
    }
  };
}
function useMemoOne(getResult, inputs) {
  const [initial] = reactExports.useState(() => ({
    inputs,
    result: getResult()
  }));
  const committed = reactExports.useRef();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  reactExports.useEffect(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i2 = 0; i2 < next.length; i2++) {
    if (next[i2] !== prev[i2]) {
      return false;
    }
  }
  return true;
}
const useOnce = (effect) => reactExports.useEffect(effect, emptyDeps);
const emptyDeps = [];
function usePrev(value) {
  const prevRef = reactExports.useRef();
  reactExports.useEffect(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}
const $node = Symbol.for("Animated:node");
const isAnimated = (value) => !!value && value[$node] === value;
const getAnimated = (owner) => owner && owner[$node];
const setAnimated = (owner, node) => defineHidden(owner, $node, node);
const getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
class Animated {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class AnimatedValue extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const {
      done
    } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
}
class AnimatedString extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
}
const TreeContext = {
  dependencies: null
};
class AnimatedObject extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
      }
    });
    return values;
  }
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
}
class AnimatedArray extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i2) => node.setValue(source[i2])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
}
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
const withAnimated = (Component, host2) => {
  const hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return reactExports.forwardRef((givenProps, givenRef) => {
    const instanceRef = reactExports.useRef(null);
    const ref = hasInstance && reactExports.useCallback((value) => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = reactExports.useRef();
    useLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(observerRef.current.deps, (dep) => removeFluidObserver(dep, observerRef.current));
          raf.cancel(observerRef.current.update);
        }
      };
    });
    reactExports.useEffect(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return reactExports.createElement(Component, _extends$1({}, usedProps, {
      ref
    }));
  });
};
class PropsObserver {
  constructor(update2, deps) {
    this.update = update2;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
}
function getAnimatedState(props, host2) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = _extends$1({}, props, {
      style: host2.createAnimatedStyle(props.style)
    });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
const cacheKey = Symbol.for("AnimatedComponent");
const createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps: _getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };
  const animated2 = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated2[key] = animated2(Component);
  });
  return {
    animated: animated2
  };
};
const getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
const matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
const resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
const noopTransform = (value) => value;
const getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
const DEFAULT_PROPS = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"];
const RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });
  if (count) {
    return forward;
  }
}
function inferTo(props) {
  const to2 = getForwardProps(props);
  if (to2) {
    const out = {
      to: to2
    };
    eachProp(props, (val, key) => key in to2 || (out[key] = val));
    return out;
  }
  return _extends({}, props);
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _2 in props)
    return true;
  return false;
}
function isAsyncTo(to2) {
  return is.fun(to2) || is.arr(to2) && is.obj(to2[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;
  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;
    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}
const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = 2 * Math.PI / 3;
const c5 = 2 * Math.PI / 4.5;
const bounceOut = (x2) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x2 < 1 / d1) {
    return n1 * x2 * x2;
  } else if (x2 < 2 / d1) {
    return n1 * (x2 -= 1.5 / d1) * x2 + 0.75;
  } else if (x2 < 2.5 / d1) {
    return n1 * (x2 -= 2.25 / d1) * x2 + 0.9375;
  } else {
    return n1 * (x2 -= 2.625 / d1) * x2 + 0.984375;
  }
};
const easings = {
  linear: (x2) => x2,
  easeInQuad: (x2) => x2 * x2,
  easeOutQuad: (x2) => 1 - (1 - x2) * (1 - x2),
  easeInOutQuad: (x2) => x2 < 0.5 ? 2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 2) / 2,
  easeInCubic: (x2) => x2 * x2 * x2,
  easeOutCubic: (x2) => 1 - Math.pow(1 - x2, 3),
  easeInOutCubic: (x2) => x2 < 0.5 ? 4 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 3) / 2,
  easeInQuart: (x2) => x2 * x2 * x2 * x2,
  easeOutQuart: (x2) => 1 - Math.pow(1 - x2, 4),
  easeInOutQuart: (x2) => x2 < 0.5 ? 8 * x2 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 4) / 2,
  easeInQuint: (x2) => x2 * x2 * x2 * x2 * x2,
  easeOutQuint: (x2) => 1 - Math.pow(1 - x2, 5),
  easeInOutQuint: (x2) => x2 < 0.5 ? 16 * x2 * x2 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 5) / 2,
  easeInSine: (x2) => 1 - Math.cos(x2 * Math.PI / 2),
  easeOutSine: (x2) => Math.sin(x2 * Math.PI / 2),
  easeInOutSine: (x2) => -(Math.cos(Math.PI * x2) - 1) / 2,
  easeInExpo: (x2) => x2 === 0 ? 0 : Math.pow(2, 10 * x2 - 10),
  easeOutExpo: (x2) => x2 === 1 ? 1 : 1 - Math.pow(2, -10 * x2),
  easeInOutExpo: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : x2 < 0.5 ? Math.pow(2, 20 * x2 - 10) / 2 : (2 - Math.pow(2, -20 * x2 + 10)) / 2,
  easeInCirc: (x2) => 1 - Math.sqrt(1 - Math.pow(x2, 2)),
  easeOutCirc: (x2) => Math.sqrt(1 - Math.pow(x2 - 1, 2)),
  easeInOutCirc: (x2) => x2 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x2, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x2 + 2, 2)) + 1) / 2,
  easeInBack: (x2) => c3 * x2 * x2 * x2 - c1 * x2 * x2,
  easeOutBack: (x2) => 1 + c3 * Math.pow(x2 - 1, 3) + c1 * Math.pow(x2 - 1, 2),
  easeInOutBack: (x2) => x2 < 0.5 ? Math.pow(2 * x2, 2) * ((c2 + 1) * 2 * x2 - c2) / 2 : (Math.pow(2 * x2 - 2, 2) * ((c2 + 1) * (x2 * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : -Math.pow(2, 10 * x2 - 10) * Math.sin((x2 * 10 - 10.75) * c4),
  easeOutElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : Math.pow(2, -10 * x2) * Math.sin((x2 * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : x2 < 0.5 ? -(Math.pow(2, 20 * x2 - 10) * Math.sin((20 * x2 - 11.125) * c5)) / 2 : Math.pow(2, -20 * x2 + 10) * Math.sin((20 * x2 - 11.125) * c5) / 2 + 1,
  easeInBounce: (x2) => 1 - bounceOut(1 - x2),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x2) => x2 < 0.5 ? (1 - bounceOut(1 - 2 * x2)) / 2 : (1 + bounceOut(2 * x2 - 1)) / 2
};
const defaults = _extends({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});
class AnimationConfig {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }
}
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends({}, defaultConfig, newConfig);
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let {
    mass,
    frequency,
    damping
  } = config2;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}
const emptyArray = [];
class Animation {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
}
function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;
    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps == null ? void 0 : defaultProps.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start(_extends({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result) => result.finished));
const getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
const getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
const getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});
function runAsync(to2, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;
  if (!parentId && to2 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to2;
    const defaultProps = getDefaultProps(props, (value, key) => key === "onRest" ? void 0 : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));
    const bailIfEnded = (bailSignal) => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
          to: arg1
        });
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (is.arr(to2)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to2);
      } else {
        animating = Promise.resolve(to2(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAniamtionSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t2) => t2.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
class BailSignal extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    this.result = void 0;
  }
}
class SkipAniamtionSignal extends Error {
  constructor() {
    super("SkipAnimationSignal");
    this.result = void 0;
  }
}
const isFrameValue = (value) => value instanceof FrameValue;
let nextId$1 = 1;
class FrameValue extends FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  to(...args) {
    return globals.to(this, args);
  }
  interpolate(...args) {
    deprecateInterpolate();
    return globals.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count) {
    if (count == 1)
      this._attach();
  }
  observerRemoved(count) {
    if (count == 0)
      this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
}
const $P = Symbol.for("SpringPhase");
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;
const hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
const isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
const isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
const setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
class SpringValue extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._pendingCalls = /* @__PURE__ */ new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
        from: arg1
      });
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  get hasAnimated() {
    return hasAnimated(this);
  }
  get isAnimating() {
    return isAnimating(this);
  }
  get isPaused() {
    return isPaused(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config: config2,
      toValues
    } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i2) => {
      if (node2.done)
        return;
      const to2 = node2.constructor == AnimatedString ? 1 : payload ? payload[i2].lastPosition : toValues[i2];
      let finished = anim.immediate;
      let position = to2;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt;
        const from = anim.fromValues[i2];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i2] : config2.velocity;
        let velocity;
        if (!is.und(config2.duration)) {
          let p2 = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt;
              }
            }
            p2 = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p2 = p2 > 1 ? 1 : p2 < 0 ? 0 : p2;
            node2.durationProgress = p2;
          }
          position = from + config2.easing(p2) * (to2 - from);
          velocity = (position - node2.lastPosition) / dt;
          finished = p2 == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e3 = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e3);
          finished = Math.abs(node2.lastPosition - position) < 0.1;
          velocity = v0 * e3;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const precision = config2.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3));
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to2 ? node2.v0 > 0 : from < to2;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);
          for (let n2 = 0; n2 < numSteps; ++n2) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to2 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to2 || position > to2 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to2;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to2);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i2].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  pause() {
    this._update({
      pause: true
    });
  }
  resume() {
    this._update({
      pause: false
    });
  }
  finish() {
    if (isAnimating(this)) {
      const {
        to: to2,
        config: config2
      } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to2, false);
        }
        this._stop();
      });
    }
    return this;
  }
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to2, arg2) {
    let queue;
    if (!is.und(to2)) {
      queue = [is.obj(to2) ? to2 : _extends({}, arg2, {
        to: to2
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(queue.map((props) => {
      const up = this._update(props);
      return up;
    })).then((results) => getCombinedResult(this, results));
  }
  stop(cancel) {
    const {
      to: to2
    } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to2, cancel));
    return this;
  }
  reset() {
    this._update({
      reset: true
    });
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  _prepareNode(props) {
    const key = this.key || "";
    let {
      to: to2,
      from
    } = props;
    to2 = is.obj(to2) ? to2[key] : to2;
    if (to2 == null || isAsyncTo(to2)) {
      to2 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = {
      to: to2,
      from
    };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to2, from] = [from, to2];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to2);
      }
    }
    return range;
  }
  _update(_ref, isLoop) {
    let props = _extends({}, _ref);
    const {
      key,
      defaultProps
    } = this;
    if (props.default)
      Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to: to2 = prevTo,
      from = prevFrom
    } = range;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to2))) {
      to2 = from;
    }
    if (props.reverse)
      [to2, from] = [from, to2];
    const hasFromChanged = !isEqual$1(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual$1(to2, prevTo);
    if (hasToChanged) {
      this._focus(to2);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config: config2
    } = anim;
    const {
      decay,
      velocity
    } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(config2, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }
    let node = getAnimated(this);
    if (!node || is.und(to2)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to2);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to2);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to2);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual$1(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual$1(anim.immediate, immediate) && !immediate || !isEqual$1(config2.decay, decay) || !isEqual$1(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to2) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const {
          onRest
        } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            anim.changed = !reset;
            onRest == null ? void 0 : onRest(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              anim.onStart == null ? void 0 : anim.onStart(result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority2 = 0;
    const {
      to: to2
    } = this.animation;
    if (hasFluidValue(to2)) {
      addFluidObserver(to2, this);
      if (isFrameValue(to2)) {
        priority2 = to2.priority + 1;
      }
    }
    this.priority = priority2;
  }
  _detach() {
    const {
      to: to2
    } = this.animation;
    if (hasFluidValue(to2)) {
      removeFluidObserver(to2, this);
    }
  }
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual$1(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
}
function checkFinished(target, to2) {
  const goal = computeGoal(to2);
  const value = computeGoal(target.get());
  return isEqual$1(value, goal);
}
function createLoopUpdate(props, loop2 = props.loop, to2 = props.to) {
  let loopRet = callProp(loop2);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends({}, props, {
      loop: loop2,
      default: false,
      pause: void 0,
      to: !reverse || isAsyncTo(to2) ? to2 : void 0,
      from: reset ? props.from : void 0,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to: to2,
    from
  } = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (is.obj(to2))
    findDefined(to2, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update2 = createUpdate(props);
  if (is.und(update2.default)) {
    update2.default = getDefaultProps(update2);
  }
  return update2;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
const ACTIVE_EVENTS = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;
  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}
const BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
let nextId = 1;
class Controller {
  constructor(props, flush2) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = /* @__PURE__ */ new Set();
    this._changed = /* @__PURE__ */ new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush2) {
      this._flush = flush2;
    }
    if (props) {
      this.start(_extends({
        default: true
      }, props));
    }
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  start(props) {
    let {
      queue
    } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  pause(keys) {
    if (is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  resume(keys) {
    if (is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
}
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then((results) => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to: to2,
    from,
    loop: loop2,
    onRest,
    onResolve
  } = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop2) {
    props.loop = false;
  }
  if (to2 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to2) || is.fun(to2) ? to2 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({
          finished,
          cancelled
        }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map((key) => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl["_lastAsyncId"], {
      props,
      state,
      actions: {
        pause: noop$3,
        resume: noop$3,
        start(props2, resolve) {
          if (cancel) {
            stopAsync(state, ctrl["_lastAsyncId"]);
            resolve(getCancelledResult(ctrl));
          } else {
            props2.onRest = onRest;
            resolve(runAsync(asyncTo, props2, state, ctrl));
          }
        }
      }
    }));
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop2, to2);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends({}, ctrl.springs);
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = _extends({}, props2, {
          to: void 0
        });
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
const _excluded$3 = ["children"];
const SpringContext = (_ref) => {
  let {
    children
  } = _ref, props = _objectWithoutPropertiesLoose$1(_ref, _excluded$3);
  const inherited = reactExports.useContext(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return reactExports.createElement(Provider, {
    value: props
  }, children);
};
const ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, reactExports.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
const SpringRef = () => {
  const current = [];
  const SpringRef2 = function SpringRef3(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i2) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update2 = _getProps(props, ctrl, i2);
        if (update2) {
          results.push(ctrl.start(update2));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i2 = current.indexOf(ctrl);
    if (~i2)
      current.splice(i2, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl) => ctrl.set(values));
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i2) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update2 = this._getProps(props, ctrl, i2);
        if (update2) {
          results.push(ctrl.start(update2));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i2) => ctrl.update(this._getProps(props, ctrl, i2)));
    return this;
  };
  const _getProps = function _getProps2(arg, ctrl, index) {
    return is.fun(arg) ? arg(index, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = reactExports.useMemo(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = reactExports.useRef(0);
  const forceUpdate = useForceUpdate();
  const state = reactExports.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(ctrl, updates2) {
      const springs2 = getSprings(ctrl, updates2);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
        setSprings(ctrl, springs2);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates2));
        });
        forceUpdate();
      });
    }
  }), []);
  const ctrls = reactExports.useRef([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  reactExports.useMemo(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  reactExports.useMemo(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i2 = startIndex; i2 < endIndex; i2++) {
      const ctrl = ctrls.current[i2] || (ctrls.current[i2] = new Controller(null, state.flush));
      const update2 = propsFn ? propsFn(i2, ctrl) : props[i2];
      if (update2) {
        updates[i2] = declareUpdate(update2);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i2) => getSprings(ctrl, updates[i2]));
  const context = reactExports.useContext(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i2) => {
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext) {
        ctrl.start({
          default: context
        });
      }
      const update2 = updates[i2];
      if (update2) {
        replaceRef(ctrl, update2.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update2);
        } else {
          ctrl.start(update2);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x2) => _extends({}, x2));
  return ref ? [values, ref] : values;
}
function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}
let TransitionPhase;
(function(TransitionPhase2) {
  TransitionPhase2["MOUNT"] = "mount";
  TransitionPhase2["ENTER"] = "enter";
  TransitionPhase2["UPDATE"] = "update";
  TransitionPhase2["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));
function useTransition(data, props, deps) {
  const propsFn = is.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = reactExports.useMemo(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = toArray(data);
  const transitions = [];
  const usedTransitions = reactExports.useRef(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useLayoutEffect(() => {
    usedTransitions.current = transitions;
  });
  useOnce(() => {
    each(usedTransitions.current, (t2) => {
      var _t$ctrl$ref;
      (_t$ctrl$ref = t2.ctrl.ref) == null ? void 0 : _t$ctrl$ref.add(t2.ctrl);
      const change = changes.get(t2);
      if (change) {
        t2.ctrl.start(change.payload);
      }
    });
    return () => {
      each(usedTransitions.current, (t2) => {
        if (t2.expired) {
          clearTimeout(t2.expirationId);
        }
        detachRefs(t2.ctrl, ref);
        t2.ctrl.stop(true);
      });
    };
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useLayoutEffect(() => each(expired, ({
    ctrl,
    item,
    key
  }) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions)
    each(prevTransitions, (t2, i2) => {
      if (t2.expired) {
        clearTimeout(t2.expirationId);
        expired.push(t2);
      } else {
        i2 = reused[i2] = keys.indexOf(t2.key);
        if (~i2)
          transitions[i2] = t2;
      }
    });
  each(items, (item, i2) => {
    if (!transitions[i2]) {
      transitions[i2] = {
        key: keys[i2],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i2].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i2 = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t2 = prevTransitions[prevIndex];
      if (~keyIndex) {
        i2 = transitions.indexOf(t2);
        transitions[i2] = _extends({}, t2, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i2, 0, t2);
      }
    });
  }
  if (is.fun(sort)) {
    transitions.sort((a2, b2) => sort(a2.item, b2.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = /* @__PURE__ */ new Map();
  const exitingTransitions = reactExports.useRef(/* @__PURE__ */ new Map());
  const forceChange = reactExports.useRef(false);
  each(transitions, (t2, i2) => {
    const key = t2.key;
    const prevPhase = t2.phase;
    const p2 = propsFn ? propsFn() : props;
    let to2;
    let phase;
    let propsDelay = callProp(p2.delay || 0, key);
    if (prevPhase == TransitionPhase.MOUNT) {
      to2 = p2.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to2 = p2.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to2 = p2.update) {
          phase = TransitionPhase.UPDATE;
        } else
          return;
      } else if (!isLeave) {
        to2 = p2.enter;
        phase = TransitionPhase.ENTER;
      } else
        return;
    }
    to2 = callProp(to2, t2.item, i2);
    to2 = is.obj(to2) ? inferTo(to2) : {
      to: to2
    };
    if (!to2.config) {
      const config2 = propsConfig || defaultProps.config;
      to2.config = callProp(config2, t2.item, i2, phase);
    }
    delay += trail;
    const payload = _extends({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p2.immediate,
      reset: false
    }, to2);
    if (phase == TransitionPhase.ENTER && is.und(payload.from)) {
      const _p = propsFn ? propsFn() : props;
      const from = is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t2.item, i2);
    }
    const {
      onResolve
    } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t3 = transitions2.find((t4) => t4.key === key);
      if (!t3)
        return;
      if (result.cancelled && t3.phase != TransitionPhase.UPDATE) {
        return;
      }
      if (t3.ctrl.idle) {
        const idle = transitions2.every((t4) => t4.ctrl.idle);
        if (t3.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t3.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t3.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t3.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t4) => t4.expired)) {
          exitingTransitions.current.delete(t3);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t2.ctrl, payload);
    if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
      exitingTransitions.current.set(t2, {
        phase,
        springs,
        payload
      });
    } else {
      changes.set(t2, {
        phase,
        springs,
        payload
      });
    }
  });
  const context = reactExports.useContext(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useLayoutEffect(() => {
    if (hasContext) {
      each(transitions, (t2) => {
        t2.ctrl.start({
          default: context
        });
      });
    }
  }, [context]);
  each(changes, (_2, t2) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t2.key);
      transitions.splice(ind, 1);
    }
  });
  useLayoutEffect(() => {
    each(exitingTransitions.current.size ? exitingTransitions.current : changes, ({
      phase,
      payload
    }, t2) => {
      const {
        ctrl
      } = t2;
      t2.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          default: context
        });
      }
      if (payload) {
        replaceRef(ctrl, payload.ref);
        if (ctrl.ref && !forceChange.current) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);
          if (forceChange.current) {
            forceChange.current = false;
          }
        }
      }
    });
  }, reset ? void 0 : deps);
  const renderTransitions = (render) => reactExports.createElement(reactExports.Fragment, null, transitions.map((t2, i2) => {
    const {
      springs
    } = changes.get(t2) || t2.ctrl;
    const elem = render(_extends({}, springs), t2.item, t2, i2);
    return elem && elem.type ? reactExports.createElement(elem.type, _extends({}, elem.props, {
      key: is.str(t2.key) || is.num(t2.key) ? t2.key : t2.ctrl.id,
      ref: elem.ref
    })) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
let nextKey = 1;
function getKeys(items, {
  key,
  keys = key
}, prevTransitions) {
  if (keys === null) {
    const reused = /* @__PURE__ */ new Set();
    return items.map((item) => {
      const t2 = prevTransitions && prevTransitions.find((t3) => t3.item === item && t3.phase !== TransitionPhase.LEAVE && !reused.has(t3));
      if (t2) {
        reused.add(t2);
        return t2.key;
      }
      return nextKey++;
    });
  }
  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}
class Interpolation extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = /* @__PURE__ */ new Set();
    this.source = source;
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual$1(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
    }
  }
}
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), (node) => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: "idle",
      parent: self
    });
  }
}
const to = (source, ...args) => new Interpolation(source, args);
globals.assign({
  createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
const _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
const isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
const attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const _ref = props, {
    style,
    children,
    scrollTop,
    scrollLeft
  } = _ref, attributes = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map((name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n2) => "-" + n2.toLowerCase())));
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i2) => {
    instance.setAttribute(name, values[i2]);
  });
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
}
let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
const prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
const prefixes$3 = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes$3.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
const _excluded$1 = ["x", "y", "z"];
const domTransforms = /^(matrix|translate|scale|rotate|skew)/;
const pxTransforms = /^(translate)/;
const degTransforms = /^(rotate|skew)/;
const addUnit = (value, unit2) => is.num(value) && value !== 0 ? value + unit2 : value;
const isValueIdentity = (value, id) => is.arr(value) ? value.every((v2) => isValueIdentity(v2, id)) : is.num(value) ? value === id : parseFloat(value) === id;
class AnimatedStyle extends AnimatedObject {
  constructor(_ref) {
    let {
      x: x2,
      y: y2,
      z: z2
    } = _ref, style = _objectWithoutPropertiesLoose(_ref, _excluded$1);
    const inputs = [];
    const transforms = [];
    if (x2 || y2 || z2) {
      inputs.push([x2 || 0, y2 || 0, z2 || 0]);
      transforms.push((xyz) => [`translate3d(${xyz.map((v2) => addUnit(v2, "px")).join(",")})`, isValueIdentity(xyz, 0)]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit2 = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(key === "rotate3d" ? ([x3, y3, z3, deg]) => [`rotate3d(${x3},${y3},${z3},${addUnit(deg, unit2)})`, isValueIdentity(deg, 0)] : (input) => [`${key}(${input.map((v2) => addUnit(v2, unit2)).join(",")})`, isValueIdentity(input, key.startsWith("scale") ? 1 : 0)]);
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
}
class FluidTransform extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity2 = true;
    each(this.inputs, (input, i2) => {
      const arg1 = getFluidValue(input[0]);
      const [t2, id] = this.transforms[i2](is.arr(arg1) ? arg1 : input.map(getFluidValue));
      transform += " " + t2;
      identity2 = identity2 && id;
    });
    return identity2 ? "none" : transform;
  }
  observerAdded(count) {
    if (count == 1)
      each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && addFluidObserver(value, this)));
  }
  observerRemoved(count) {
    if (count == 0)
      each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && removeFluidObserver(value, this)));
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
}
const primitives = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
const _excluded = ["scrollTop", "scrollLeft"];
globals.assign({
  batchedUpdates: reactDomExports.unstable_batchedUpdates,
  createStringInterpolator,
  colors: colors$2
});
const host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  getComponentProps: (_ref) => {
    let props = _objectWithoutPropertiesLoose(_ref, _excluded);
    return props;
  }
});
const animated = host.animated;
function v$3() {
  return v$3 = Object.assign || function(t2) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var o2 = arguments[i2];
      for (var n2 in o2)
        Object.prototype.hasOwnProperty.call(o2, n2) && (t2[n2] = o2[n2]);
    }
    return t2;
  }, v$3.apply(this, arguments);
}
var x$5 = { pointerEvents: "none", position: "absolute", zIndex: 10, top: 0, left: 0 }, m$1 = function(t2, i2) {
  return "translate(" + t2 + "px, " + i2 + "px)";
}, g$2 = reactExports.memo(function(t2) {
  var o2, n2 = t2.position, r2 = t2.anchor, e3 = t2.children, l2 = Vt(), u2 = tt(), p2 = u2.animate, f2 = u2.config, g2 = Ft(), b2 = g2[0], w2 = g2[1], T2 = reactExports.useRef(false), C2 = void 0, E2 = false, P2 = w2.width > 0 && w2.height > 0, N2 = Math.round(n2[0]), V2 = Math.round(n2[1]);
  P2 && ("top" === r2 ? (N2 -= w2.width / 2, V2 -= w2.height + 14) : "right" === r2 ? (N2 += 14, V2 -= w2.height / 2) : "bottom" === r2 ? (N2 -= w2.width / 2, V2 += 14) : "left" === r2 ? (N2 -= w2.width + 14, V2 -= w2.height / 2) : "center" === r2 && (N2 -= w2.width / 2, V2 -= w2.height / 2), C2 = { transform: m$1(N2, V2) }, T2.current || (E2 = true), T2.current = [N2, V2]);
  var j2 = useSpring({ to: C2, config: f2, immediate: !p2 || E2 }), O2 = v$3({}, x$5, l2.tooltip, { transform: null != (o2 = j2.transform) ? o2 : m$1(N2, V2) });
  return jsx(animated.div, { ref: b2, style: O2, children: e3 });
});
g$2.displayName = "TooltipWrapper";
var b$4 = reactExports.memo(function(t2) {
  var i2 = t2.size, o2 = void 0 === i2 ? 12 : i2, n2 = t2.color, r2 = t2.style;
  return jsx("span", { style: v$3({ display: "block", width: o2, height: o2, background: n2 }, void 0 === r2 ? {} : r2) });
}), w$3 = reactExports.memo(function(t2) {
  var i2, o2 = t2.id, n2 = t2.value, r2 = t2.format, e3 = t2.enableChip, l2 = void 0 !== e3 && e3, a2 = t2.color, c6 = t2.renderContent, s = Vt(), d = Xt(r2);
  if ("function" == typeof c6)
    i2 = c6();
  else {
    var f2 = n2;
    void 0 !== d && void 0 !== f2 && (f2 = d(f2)), i2 = jsxs("div", { style: s.tooltip.basic, children: [l2 && jsx(b$4, { color: a2, style: s.tooltip.chip }), void 0 !== f2 ? jsxs("span", { children: [o2, ": ", jsx("strong", { children: "" + f2 })] }) : o2] });
  }
  return jsx("div", { style: s.tooltip.container, children: i2 });
}), T$3 = { width: "100%", borderCollapse: "collapse" }, C$2 = reactExports.memo(function(t2) {
  var i2, o2 = t2.title, n2 = t2.rows, r2 = void 0 === n2 ? [] : n2, e3 = t2.renderContent, l2 = Vt();
  return r2.length ? (i2 = "function" == typeof e3 ? e3() : jsxs("div", { children: [o2 && o2, jsx("table", { style: v$3({}, T$3, l2.tooltip.table), children: jsx("tbody", { children: r2.map(function(t3, i3) {
    return jsx("tr", { children: t3.map(function(t4, i4) {
      return jsx("td", { style: l2.tooltip.tableCell, children: t4 }, i4);
    }) }, i3);
  }) }) })] }), jsx("div", { style: l2.tooltip.container, children: i2 })) : null;
});
C$2.displayName = "TableTooltip";
var E$1 = reactExports.memo(function(t2) {
  var i2 = t2.x0, n2 = t2.x1, r2 = t2.y0, e3 = t2.y1, l2 = Vt(), d = tt(), u2 = d.animate, p2 = d.config, f2 = reactExports.useMemo(function() {
    return v$3({}, l2.crosshair.line, { pointerEvents: "none" });
  }, [l2.crosshair.line]), x2 = useSpring({ x1: i2, x2: n2, y1: r2, y2: e3, config: p2, immediate: !u2 });
  return jsx(animated.line, v$3({}, x2, { fill: "none", style: f2 }));
});
E$1.displayName = "CrosshairLine";
var P$3 = reactExports.memo(function(t2) {
  var i2, o2, n2 = t2.width, r2 = t2.height, e3 = t2.type, l2 = t2.x, a2 = t2.y;
  return "cross" === e3 ? (i2 = { x0: l2, x1: l2, y0: 0, y1: r2 }, o2 = { x0: 0, x1: n2, y0: a2, y1: a2 }) : "top-left" === e3 ? (i2 = { x0: l2, x1: l2, y0: 0, y1: a2 }, o2 = { x0: 0, x1: l2, y0: a2, y1: a2 }) : "top" === e3 ? i2 = { x0: l2, x1: l2, y0: 0, y1: a2 } : "top-right" === e3 ? (i2 = { x0: l2, x1: l2, y0: 0, y1: a2 }, o2 = { x0: l2, x1: n2, y0: a2, y1: a2 }) : "right" === e3 ? o2 = { x0: l2, x1: n2, y0: a2, y1: a2 } : "bottom-right" === e3 ? (i2 = { x0: l2, x1: l2, y0: a2, y1: r2 }, o2 = { x0: l2, x1: n2, y0: a2, y1: a2 }) : "bottom" === e3 ? i2 = { x0: l2, x1: l2, y0: a2, y1: r2 } : "bottom-left" === e3 ? (i2 = { x0: l2, x1: l2, y0: a2, y1: r2 }, o2 = { x0: 0, x1: l2, y0: a2, y1: a2 }) : "left" === e3 ? o2 = { x0: 0, x1: l2, y0: a2, y1: a2 } : "x" === e3 ? i2 = { x0: l2, x1: l2, y0: 0, y1: r2 } : "y" === e3 && (o2 = { x0: 0, x1: n2, y0: a2, y1: a2 }), jsxs(Fragment, { children: [i2 && jsx(E$1, { x0: i2.x0, x1: i2.x1, y0: i2.y0, y1: i2.y1 }), o2 && jsx(E$1, { x0: o2.x0, x1: o2.x1, y0: o2.y0, y1: o2.y1 })] });
});
P$3.displayName = "Crosshair";
var N$2 = reactExports.createContext({ showTooltipAt: function() {
}, showTooltipFromEvent: function() {
}, hideTooltip: function() {
} }), V$1 = { isVisible: false, position: [null, null], content: null, anchor: null }, j$1 = reactExports.createContext(V$1), O$4 = function(t2) {
  var i2 = reactExports.useState(V$1), n2 = i2[0], l2 = i2[1], a2 = reactExports.useCallback(function(t3, i3, o2) {
    var n3 = i3[0], r2 = i3[1];
    void 0 === o2 && (o2 = "top"), l2({ isVisible: true, position: [n3, r2], anchor: o2, content: t3 });
  }, [l2]), c6 = reactExports.useCallback(function(i3, o2, n3) {
    void 0 === n3 && (n3 = "top");
    var r2 = t2.current.getBoundingClientRect(), e3 = t2.current.offsetWidth, a3 = e3 === r2.width ? 1 : e3 / r2.width, c7 = (o2.clientX - r2.left) * a3, h2 = (o2.clientY - r2.top) * a3;
    "left" !== n3 && "right" !== n3 || (n3 = c7 < r2.width / 2 ? "right" : "left"), l2({ isVisible: true, position: [c7, h2], anchor: n3, content: i3 });
  }, [t2, l2]), h = reactExports.useCallback(function() {
    l2(V$1);
  }, [l2]);
  return { actions: reactExports.useMemo(function() {
    return { showTooltipAt: a2, showTooltipFromEvent: c6, hideTooltip: h };
  }, [a2, c6, h]), state: n2 };
}, k$4 = function() {
  var t2 = reactExports.useContext(N$2);
  if (void 0 === t2)
    throw new Error("useTooltip must be used within a TooltipProvider");
  return t2;
}, z$3 = function() {
  var t2 = reactExports.useContext(j$1);
  if (void 0 === t2)
    throw new Error("useTooltipState must be used within a TooltipProvider");
  return t2;
}, A$3 = function(t2) {
  return t2.isVisible;
}, F = function() {
  var t2 = z$3();
  return A$3(t2) ? jsx(g$2, { position: t2.position, anchor: t2.anchor, children: t2.content }) : null;
}, M$1 = function(t2) {
  var i2 = t2.container, o2 = t2.children, n2 = O$4(i2), r2 = n2.actions, e3 = n2.state;
  return jsx(N$2.Provider, { value: r2, children: jsx(j$1.Provider, { value: e3, children: o2 }) });
};
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m2, l2;
  format2 = (format2 + "").trim().toLowerCase();
  return (m2 = reHex.exec(format2)) ? (l2 = m2[1].length, m2 = parseInt(m2[1], 16), l2 === 6 ? rgbn(m2) : l2 === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l2 === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l2 === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format2)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format2)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format2)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format2)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n2) {
  return new Rgb(n2 >> 16 & 255, n2 >> 8 & 255, n2 & 255, 1);
}
function rgba(r2, g2, b2, a2) {
  if (a2 <= 0)
    r2 = g2 = b2 = NaN;
  return new Rgb(r2, g2, b2, a2);
}
function rgbConvert(o2) {
  if (!(o2 instanceof Color))
    o2 = color(o2);
  if (!o2)
    return new Rgb();
  o2 = o2.rgb();
  return new Rgb(o2.r, o2.g, o2.b, o2.opacity);
}
function rgb$1(r2, g2, b2, opacity) {
  return arguments.length === 1 ? rgbConvert(r2) : new Rgb(r2, g2, b2, opacity == null ? 1 : opacity);
}
function Rgb(r2, g2, b2, opacity) {
  this.r = +r2;
  this.g = +g2;
  this.b = +b2;
  this.opacity = +opacity;
}
define(Rgb, rgb$1, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a2 = this.opacity;
  a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
  return (a2 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a2 === 1 ? ")" : ", " + a2 + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l2, a2) {
  if (a2 <= 0)
    h = s = l2 = NaN;
  else if (l2 <= 0 || l2 >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l2, a2);
}
function hslConvert(o2) {
  if (o2 instanceof Hsl)
    return new Hsl(o2.h, o2.s, o2.l, o2.opacity);
  if (!(o2 instanceof Color))
    o2 = color(o2);
  if (!o2)
    return new Hsl();
  if (o2 instanceof Hsl)
    return o2;
  o2 = o2.rgb();
  var r2 = o2.r / 255, g2 = o2.g / 255, b2 = o2.b / 255, min = Math.min(r2, g2, b2), max = Math.max(r2, g2, b2), h = NaN, s = max - min, l2 = (max + min) / 2;
  if (s) {
    if (r2 === max)
      h = (g2 - b2) / s + (g2 < b2) * 6;
    else if (g2 === max)
      h = (b2 - r2) / s + 2;
    else
      h = (r2 - g2) / s + 4;
    s /= l2 < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l2 > 0 && l2 < 1 ? 0 : h;
  }
  return new Hsl(h, s, l2, o2.opacity);
}
function hsl(h, s, l2, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l2, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l2, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l2;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l2 = this.l, m2 = l2 + (l2 < 0.5 ? l2 : 1 - l2) * s, m1 = 2 * l2 - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a2 = this.opacity;
    a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
    return (a2 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a2 === 1 ? ")" : ", " + a2 + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;
var A$2 = -0.14861, B$2 = 1.78277, C$1 = -0.29227, D = -0.90649, E = 1.97294, ED = E * D, EB = E * B$2, BC_DA = B$2 * C$1 - D * A$2;
function cubehelixConvert(o2) {
  if (o2 instanceof Cubehelix)
    return new Cubehelix(o2.h, o2.s, o2.l, o2.opacity);
  if (!(o2 instanceof Rgb))
    o2 = rgbConvert(o2);
  var r2 = o2.r / 255, g2 = o2.g / 255, b2 = o2.b / 255, l2 = (BC_DA * b2 + ED * r2 - EB * g2) / (BC_DA + ED - EB), bl = b2 - l2, k2 = (E * (g2 - l2) - C$1 * bl) / D, s = Math.sqrt(k2 * k2 + bl * bl) / (E * l2 * (1 - l2)), h = s ? Math.atan2(k2, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l2, o2.opacity);
}
function cubehelix$1(h, s, l2, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l2, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l2, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l2;
  this.opacity = +opacity;
}
define(Cubehelix, cubehelix$1, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l2 = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l2 * (1 - l2), cosh = Math.cos(h), sinh = Math.sin(h);
    return new Rgb(
      255 * (l2 + a2 * (A$2 * cosh + B$2 * sinh)),
      255 * (l2 + a2 * (C$1 * cosh + D * sinh)),
      255 * (l2 + a2 * (E * cosh)),
      this.opacity
    );
  }
}));
function basis(t12, v0, v1, v2, v3) {
  var t2 = t12 * t12, t3 = t2 * t12;
  return ((1 - 3 * t12 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t12 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis$1(values) {
  var n2 = values.length - 1;
  return function(t2) {
    var i2 = t2 <= 0 ? t2 = 0 : t2 >= 1 ? (t2 = 1, n2 - 1) : Math.floor(t2 * n2), v1 = values[i2], v2 = values[i2 + 1], v0 = i2 > 0 ? values[i2 - 1] : 2 * v1 - v2, v3 = i2 < n2 - 1 ? values[i2 + 2] : 2 * v2 - v1;
    return basis((t2 - i2 / n2) * n2, v0, v1, v2, v3);
  };
}
const constant$1 = (x2) => () => x2;
function linear$1(a2, d) {
  return function(t2) {
    return a2 + t2 * d;
  };
}
function exponential(a2, b2, y2) {
  return a2 = Math.pow(a2, y2), b2 = Math.pow(b2, y2) - a2, y2 = 1 / y2, function(t2) {
    return Math.pow(a2 + t2 * b2, y2);
  };
}
function hue(a2, b2) {
  var d = b2 - a2;
  return d ? linear$1(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$1(isNaN(a2) ? b2 : a2);
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a2, b2) {
    return b2 - a2 ? exponential(a2, b2, y2) : constant$1(isNaN(a2) ? b2 : a2);
  };
}
function nogamma(a2, b2) {
  var d = b2 - a2;
  return d ? linear$1(a2, d) : constant$1(isNaN(a2) ? b2 : a2);
}
const rgb = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start2, end) {
    var r2 = color2((start2 = rgb$1(start2)).r, (end = rgb$1(end)).r), g2 = color2(start2.g, end.g), b2 = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t2) {
      start2.r = r2(t2);
      start2.g = g2(t2);
      start2.b = b2(t2);
      start2.opacity = opacity(t2);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors2) {
    var n2 = colors2.length, r2 = new Array(n2), g2 = new Array(n2), b2 = new Array(n2), i2, color2;
    for (i2 = 0; i2 < n2; ++i2) {
      color2 = rgb$1(colors2[i2]);
      r2[i2] = color2.r || 0;
      g2[i2] = color2.g || 0;
      b2[i2] = color2.b || 0;
    }
    r2 = spline(r2);
    g2 = spline(g2);
    b2 = spline(b2);
    color2.opacity = 1;
    return function(t2) {
      color2.r = r2(t2);
      color2.g = g2(t2);
      color2.b = b2(t2);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis$1);
function numberArray(a2, b2) {
  if (!b2)
    b2 = [];
  var n2 = a2 ? Math.min(b2.length, a2.length) : 0, c6 = b2.slice(), i2;
  return function(t2) {
    for (i2 = 0; i2 < n2; ++i2)
      c6[i2] = a2[i2] * (1 - t2) + b2[i2] * t2;
    return c6;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}
function genericArray(a2, b2) {
  var nb = b2 ? b2.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c6 = new Array(nb), i2;
  for (i2 = 0; i2 < na; ++i2)
    x2[i2] = interpolate(a2[i2], b2[i2]);
  for (; i2 < nb; ++i2)
    c6[i2] = b2[i2];
  return function(t2) {
    for (i2 = 0; i2 < na; ++i2)
      c6[i2] = x2[i2](t2);
    return c6;
  };
}
function date$1(a2, b2) {
  var d = /* @__PURE__ */ new Date();
  return a2 = +a2, b2 = +b2, function(t2) {
    return d.setTime(a2 * (1 - t2) + b2 * t2), d;
  };
}
function interpolateNumber(a2, b2) {
  return a2 = +a2, b2 = +b2, function(t2) {
    return a2 * (1 - t2) + b2 * t2;
  };
}
function object(a2, b2) {
  var i2 = {}, c6 = {}, k2;
  if (a2 === null || typeof a2 !== "object")
    a2 = {};
  if (b2 === null || typeof b2 !== "object")
    b2 = {};
  for (k2 in b2) {
    if (k2 in a2) {
      i2[k2] = interpolate(a2[k2], b2[k2]);
    } else {
      c6[k2] = b2[k2];
    }
  }
  return function(t2) {
    for (k2 in i2)
      c6[k2] = i2[k2](t2);
    return c6;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b2) {
  return function() {
    return b2;
  };
}
function one(b2) {
  return function(t2) {
    return b2(t2) + "";
  };
}
function R(a2, b2) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i2 = -1, s = [], q = [];
  a2 = a2 + "", b2 = b2 + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b2))) {
    if ((bs = bm.index) > bi) {
      bs = b2.slice(bi, bs);
      if (s[i2])
        s[i2] += bs;
      else
        s[++i2] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i2])
        s[i2] += bm;
      else
        s[++i2] = bm;
    } else {
      s[++i2] = null;
      q.push({ i: i2, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b2.length) {
    bs = b2.slice(bi);
    if (s[i2])
      s[i2] += bs;
    else
      s[++i2] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b2) : (b2 = q.length, function(t2) {
    for (var i3 = 0, o2; i3 < b2; ++i3)
      s[(o2 = q[i3]).i] = o2.x(t2);
    return s.join("");
  });
}
function interpolate(a2, b2) {
  var t2 = typeof b2, c6;
  return b2 == null || t2 === "boolean" ? constant$1(b2) : (t2 === "number" ? interpolateNumber : t2 === "string" ? (c6 = color(b2)) ? (b2 = c6, rgb) : R : b2 instanceof color ? rgb : b2 instanceof Date ? date$1 : isNumberArray(b2) ? numberArray : Array.isArray(b2) ? genericArray : typeof b2.valueOf !== "function" && typeof b2.toString !== "function" || isNaN(b2) ? object : interpolateNumber)(a2, b2);
}
function interpolateRound(a2, b2) {
  return a2 = +a2, b2 = +b2, function(t2) {
    return Math.round(a2 * (1 - t2) + b2 * t2);
  };
}
function cubehelix(hue2) {
  return function cubehelixGamma(y2) {
    y2 = +y2;
    function cubehelix2(start2, end) {
      var h = hue2((start2 = cubehelix$1(start2)).h, (end = cubehelix$1(end)).h), s = nogamma(start2.s, end.s), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t2) {
        start2.h = h(t2);
        start2.s = s(t2);
        start2.l = l2(Math.pow(t2, y2));
        start2.opacity = opacity(t2);
        return start2 + "";
      };
    }
    cubehelix2.gamma = cubehelixGamma;
    return cubehelix2;
  }(1);
}
cubehelix(hue);
var cubehelixLong = cubehelix(nogamma);
var baseGetTag$1 = _baseGetTag, isArray$1 = isArray_1, isObjectLike$1 = isObjectLike_1;
var stringTag = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray$1(value) && isObjectLike$1(value) && baseGetTag$1(value) == stringTag;
}
var isString_1 = isString;
const x$4 = /* @__PURE__ */ getDefaultExportFromCjs(isString_1);
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last;
const e$1 = /* @__PURE__ */ getDefaultExportFromCjs(last_1);
function ascending(a2, b2) {
  return a2 < b2 ? -1 : a2 > b2 ? 1 : a2 >= b2 ? 0 : NaN;
}
function bisector(f2) {
  let delta = f2;
  let compare = f2;
  if (f2.length === 1) {
    delta = (d, x2) => f2(d) - x2;
    compare = ascendingComparator(f2);
  }
  function left(a2, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a2.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a2[mid], x2) < 0)
        lo = mid + 1;
      else
        hi = mid;
    }
    return lo;
  }
  function right(a2, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a2.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a2[mid], x2) > 0)
        hi = mid;
      else
        lo = mid + 1;
    }
    return lo;
  }
  function center(a2, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a2.length;
    const i2 = left(a2, x2, lo, hi - 1);
    return i2 > lo && delta(a2[i2 - 1], x2) > -delta(a2[i2], x2) ? i2 - 1 : i2;
  }
  return { left, center, right };
}
function ascendingComparator(f2) {
  return (d, x2) => ascending(f2(d), x2);
}
function number$2(x2) {
  return x2 === null ? NaN : +x2;
}
const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
const bisect = bisectRight;
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function ticks(start2, stop2, count) {
  var reverse, i2 = -1, n2, ticks2, step;
  stop2 = +stop2, start2 = +start2, count = +count;
  if (start2 === stop2 && count > 0)
    return [start2];
  if (reverse = stop2 < start2)
    n2 = start2, start2 = stop2, stop2 = n2;
  if ((step = tickIncrement(start2, stop2, count)) === 0 || !isFinite(step))
    return [];
  if (step > 0) {
    let r0 = Math.round(start2 / step), r1 = Math.round(stop2 / step);
    if (r0 * step < start2)
      ++r0;
    if (r1 * step > stop2)
      --r1;
    ticks2 = new Array(n2 = r1 - r0 + 1);
    while (++i2 < n2)
      ticks2[i2] = (r0 + i2) * step;
  } else {
    step = -step;
    let r0 = Math.round(start2 * step), r1 = Math.round(stop2 * step);
    if (r0 / step < start2)
      ++r0;
    if (r1 / step > stop2)
      --r1;
    ticks2 = new Array(n2 = r1 - r0 + 1);
    while (++i2 < n2)
      ticks2[i2] = (r0 + i2) / step;
  }
  if (reverse)
    ticks2.reverse();
  return ticks2;
}
function tickIncrement(start2, stop2, count) {
  var step = (stop2 - start2) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start2, stop2, count) {
  var step0 = Math.abs(stop2 - start2) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop2 < start2 ? -step1 : step1;
}
function sequence(start2, stop2, step) {
  start2 = +start2, stop2 = +stop2, step = (n2 = arguments.length) < 2 ? (stop2 = start2, start2 = 0, 1) : n2 < 3 ? 1 : +step;
  var i2 = -1, n2 = Math.max(0, Math.ceil((stop2 - start2) / step)) | 0, range = new Array(n2);
  while (++i2 < n2) {
    range[i2] = start2 + i2 * step;
  }
  return range;
}
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}
const implicit = Symbol("implicit");
function ordinal() {
  var index = /* @__PURE__ */ new Map(), domain = [], range = [], unknown = implicit;
  function scale(d) {
    var key = d + "", i2 = index.get(key);
    if (!i2) {
      if (unknown !== implicit)
        return unknown;
      index.set(key, i2 = domain.push(d));
    }
    return range[(i2 - 1) % range.length];
  }
  scale.domain = function(_2) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index = /* @__PURE__ */ new Map();
    for (const value of _2) {
      const key = value + "";
      if (index.has(key))
        continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };
  scale.range = function(_2) {
    return arguments.length ? (range = Array.from(_2), scale) : range.slice();
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n2 = domain().length, reverse = r1 < r0, start2 = reverse ? r1 : r0, stop2 = reverse ? r0 : r1;
    step = (stop2 - start2) / Math.max(1, n2 - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start2 += (stop2 - start2 - step * (n2 - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
    var values = sequence(n2).map(function(i2) {
      return start2 + step * i2;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function(_2) {
    return arguments.length ? (domain(_2), rescale()) : domain();
  };
  scale.range = function(_2) {
    return arguments.length ? ([r0, r1] = _2, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_2) {
    return [r0, r1] = _2, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_2) {
    return arguments.length ? (round = !!_2, rescale()) : round;
  };
  scale.padding = function(_2) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_2), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_2) {
    return arguments.length ? (paddingInner = Math.min(1, _2), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_2) {
    return arguments.length ? (paddingOuter = +_2, rescale()) : paddingOuter;
  };
  scale.align = function(_2) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _2)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy2 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy2());
  };
  return scale;
}
function point$4() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}
function constants(x2) {
  return function() {
    return x2;
  };
}
function number$1(x2) {
  return +x2;
}
var unit = [0, 1];
function identity$3(x2) {
  return x2;
}
function normalize(a2, b2) {
  return (b2 -= a2 = +a2) ? function(x2) {
    return (x2 - a2) / b2;
  } : constants(isNaN(b2) ? NaN : 0.5);
}
function clamper(a2, b2) {
  var t2;
  if (a2 > b2)
    t2 = a2, a2 = b2, b2 = t2;
  return function(x2) {
    return Math.max(a2, Math.min(b2, x2));
  };
}
function bimap(domain, range, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range, interpolate2) {
  var j2 = Math.min(domain.length, range.length) - 1, d = new Array(j2), r2 = new Array(j2), i2 = -1;
  if (domain[j2] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i2 < j2) {
    d[i2] = normalize(domain[i2], domain[i2 + 1]);
    r2[i2] = interpolate2(range[i2], range[i2 + 1]);
  }
  return function(x2) {
    var i3 = bisect(domain, x2, 1, j2) - 1;
    return r2[i3](d[i3](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate$12 = interpolate, transform, untransform, unknown, clamp = identity$3, piecewise, output, input;
  function rescale() {
    var n2 = Math.min(domain.length, range.length);
    if (clamp !== identity$3)
      clamp = clamper(domain[0], domain[n2 - 1]);
    piecewise = n2 > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$12)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y2)));
  };
  scale.domain = function(_2) {
    return arguments.length ? (domain = Array.from(_2, number$1), rescale()) : domain.slice();
  };
  scale.range = function(_2) {
    return arguments.length ? (range = Array.from(_2), rescale()) : range.slice();
  };
  scale.rangeRound = function(_2) {
    return range = Array.from(_2), interpolate$12 = interpolateRound, rescale();
  };
  scale.clamp = function(_2) {
    return arguments.length ? (clamp = _2 ? true : identity$3, rescale()) : clamp !== identity$3;
  };
  scale.interpolate = function(_2) {
    return arguments.length ? (interpolate$12 = _2, rescale()) : interpolate$12;
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  return function(t2, u2) {
    transform = t2, untransform = u2;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity$3, identity$3);
}
function formatDecimal$2(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts$2(x2, p2) {
  if ((i2 = (x2 = p2 ? x2.toExponential(p2 - 1) : x2.toExponential()).indexOf("e")) < 0)
    return null;
  var i2, coefficient = x2.slice(0, i2);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i2 + 1)
  ];
}
function exponent$2(x2) {
  return x2 = formatDecimalParts$2(Math.abs(x2)), x2 ? x2[1] : NaN;
}
function formatGroup$2(grouping, thousands) {
  return function(value, width) {
    var i2 = value.length, t2 = [], j2 = 0, g2 = grouping[0], length = 0;
    while (i2 > 0 && g2 > 0) {
      if (length + g2 + 1 > width)
        g2 = Math.max(1, width - length);
      t2.push(value.substring(i2 -= g2, i2 + g2));
      if ((length += g2 + 1) > width)
        break;
      g2 = grouping[j2 = (j2 + 1) % grouping.length];
    }
    return t2.reverse().join(thousands);
  };
}
function formatNumerals$2(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i2) {
      return numerals[+i2];
    });
  };
}
var re$2 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier$2(specifier) {
  if (!(match = re$2.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier$2({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier$2.prototype = FormatSpecifier$2.prototype;
function FormatSpecifier$2(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier$2.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim$2(s) {
  out:
    for (var n2 = s.length, i2 = 1, i0 = -1, i1; i2 < n2; ++i2) {
      switch (s[i2]) {
        case ".":
          i0 = i1 = i2;
          break;
        case "0":
          if (i0 === 0)
            i0 = i2;
          i1 = i2;
          break;
        default:
          if (!+s[i2])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent$2;
function formatPrefixAuto$2(x2, p2) {
  var d = formatDecimalParts$2(x2, p2);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent2 = d[1], i2 = exponent2 - (prefixExponent$2 = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n2 = coefficient.length;
  return i2 === n2 ? coefficient : i2 > n2 ? coefficient + new Array(i2 - n2 + 1).join("0") : i2 > 0 ? coefficient.slice(0, i2) + "." + coefficient.slice(i2) : "0." + new Array(1 - i2).join("0") + formatDecimalParts$2(x2, Math.max(0, p2 + i2 - 1))[0];
}
function formatRounded$2(x2, p2) {
  var d = formatDecimalParts$2(x2, p2);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes$2 = {
  "%": (x2, p2) => (x2 * 100).toFixed(p2),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal$2,
  "e": (x2, p2) => x2.toExponential(p2),
  "f": (x2, p2) => x2.toFixed(p2),
  "g": (x2, p2) => x2.toPrecision(p2),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p2) => formatRounded$2(x2 * 100, p2),
  "r": formatRounded$2,
  "s": formatPrefixAuto$2,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};
function identity$2(x2) {
  return x2;
}
var map$2 = Array.prototype.map, prefixes$2 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale$3(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$2 : formatGroup$2(map$2.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$2 : formatNumerals$2(map$2.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "−" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier$2(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes$2[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes$2[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix2, valueSuffix = suffix, i2, n2, c6;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim$2(value);
        if (valueNegative && +value === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes$2[8 + prefixExponent$2 / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i2 = -1, n2 = value.length;
          while (++i2 < n2) {
            if (c6 = value.charCodeAt(i2), 48 > c6 || c6 > 57) {
              valueSuffix = (c6 === 46 ? decimal + value.slice(i2 + 1) : value.slice(i2)) + valueSuffix;
              value = value.slice(0, i2);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f2 = newFormat((specifier = formatSpecifier$2(specifier), specifier.type = "f", specifier)), e3 = Math.max(-8, Math.min(8, Math.floor(exponent$2(value) / 3))) * 3, k2 = Math.pow(10, -e3), prefix2 = prefixes$2[8 + e3 / 3];
    return function(value2) {
      return f2(k2 * value2) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale$3;
var format$2;
var formatPrefix;
defaultLocale$3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale$3(definition) {
  locale$3 = formatLocale$3(definition);
  format$2 = locale$3.format;
  formatPrefix = locale$3.formatPrefix;
  return locale$3;
}
function precisionFixed(step) {
  return Math.max(0, -exponent$2(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent$2(value) / 3))) * 3 - exponent$2(Math.abs(step)));
}
function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent$2(max) - exponent$2(step)) + 1;
}
function tickFormat(start2, stop2, count, specifier) {
  var step = tickStep(start2, stop2, count), precision;
  specifier = formatSpecifier$2(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop2));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start2), Math.abs(stop2)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format$2(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start2 = d[i0];
    var stop2 = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop2 < start2) {
      step = start2, start2 = stop2, stop2 = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop2, count);
      if (step === prestep) {
        d[i0] = start2;
        d[i1] = stop2;
        return domain(d);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop2 = Math.ceil(stop2 / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop2 = Math.floor(stop2 * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t2;
  if (x1 < x0) {
    t2 = i0, i0 = i1, i1 = t2;
    t2 = x0, x0 = x1, x1 = t2;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}
function transformLog(x2) {
  return Math.log(x2);
}
function transformExp(x2) {
  return Math.exp(x2);
}
function transformLogn(x2) {
  return -Math.log(-x2);
}
function transformExpn(x2) {
  return -Math.exp(-x2);
}
function pow10(x2) {
  return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x2) {
    return Math.pow(base, x2);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x2) {
    return Math.log(x2) / base;
  });
}
function reflect(f2) {
  return function(x2) {
    return -f2(-x2);
  };
}
function loggish(transform) {
  var scale = transform(transformLog, transformExp), domain = scale.domain, base = 10, logs, pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_2) {
    return arguments.length ? (base = +_2, rescale()) : base;
  };
  scale.domain = function(_2) {
    return arguments.length ? (domain(_2), rescale()) : domain();
  };
  scale.ticks = function(count) {
    var d = domain(), u2 = d[0], v2 = d[d.length - 1], r2;
    if (r2 = v2 < u2)
      i2 = u2, u2 = v2, v2 = i2;
    var i2 = logs(u2), j2 = logs(v2), p2, k2, t2, n2 = count == null ? 10 : +count, z2 = [];
    if (!(base % 1) && j2 - i2 < n2) {
      i2 = Math.floor(i2), j2 = Math.ceil(j2);
      if (u2 > 0)
        for (; i2 <= j2; ++i2) {
          for (k2 = 1, p2 = pows(i2); k2 < base; ++k2) {
            t2 = p2 * k2;
            if (t2 < u2)
              continue;
            if (t2 > v2)
              break;
            z2.push(t2);
          }
        }
      else
        for (; i2 <= j2; ++i2) {
          for (k2 = base - 1, p2 = pows(i2); k2 >= 1; --k2) {
            t2 = p2 * k2;
            if (t2 < u2)
              continue;
            if (t2 > v2)
              break;
            z2.push(t2);
          }
        }
      if (z2.length * 2 < n2)
        z2 = ticks(u2, v2, n2);
    } else {
      z2 = ticks(i2, j2, Math.min(j2 - i2, n2)).map(pows);
    }
    return r2 ? z2.reverse() : z2;
  };
  scale.tickFormat = function(count, specifier) {
    if (specifier == null)
      specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function")
      specifier = format$2(specifier);
    if (count === Infinity)
      return specifier;
    if (count == null)
      count = 10;
    var k2 = Math.max(1, base * count / scale.ticks().length);
    return function(d) {
      var i2 = d / pows(Math.round(logs(d)));
      if (i2 * base < base - 0.5)
        i2 *= base;
      return i2 <= k2 ? specifier(d) : "";
    };
  };
  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x2) {
        return pows(Math.floor(logs(x2)));
      },
      ceil: function(x2) {
        return pows(Math.ceil(logs(x2)));
      }
    }));
  };
  return scale;
}
function log() {
  var scale = loggish(transformer()).domain([1, 10]);
  scale.copy = function() {
    return copy(scale, log()).base(scale.base());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function transformSymlog(c6) {
  return function(x2) {
    return Math.sign(x2) * Math.log1p(Math.abs(x2 / c6));
  };
}
function transformSymexp(c6) {
  return function(x2) {
    return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c6;
  };
}
function symlogish(transform) {
  var c6 = 1, scale = transform(transformSymlog(c6), transformSymexp(c6));
  scale.constant = function(_2) {
    return arguments.length ? transform(transformSymlog(c6 = +_2), transformSymexp(c6)) : c6;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}
var t0$1 = /* @__PURE__ */ new Date(), t1$1 = /* @__PURE__ */ new Date();
function newInterval$1(floori, offseti, count, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = function(date2) {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = function(date2) {
    var d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = function(date2, step) {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = function(start2, stop2, step) {
    var range = [], previous;
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop2) || !(step > 0))
      return range;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop2);
    return range;
  };
  interval.filter = function(test) {
    return newInterval$1(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count) {
    interval.count = function(start2, end) {
      t0$1.setTime(+start2), t1$1.setTime(+end);
      floori(t0$1), floori(t1$1);
      return Math.floor(count(t0$1, t1$1));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
        return field(d) % step === 0;
      } : function(d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }
  return interval;
}
var millisecond$1 = newInterval$1(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start2, end) {
  return end - start2;
});
millisecond$1.every = function(k2) {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0))
    return null;
  if (!(k2 > 1))
    return millisecond$1;
  return newInterval$1(function(date2) {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k2);
  }, function(start2, end) {
    return (end - start2) / k2;
  });
};
const millisecond$2 = millisecond$1;
millisecond$1.range;
const durationSecond$1 = 1e3;
const durationMinute$1 = durationSecond$1 * 60;
const durationHour$1 = durationMinute$1 * 60;
const durationDay = durationHour$1 * 24;
const durationWeek$1 = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;
var second$1 = newInterval$1(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond$1);
}, function(start2, end) {
  return (end - start2) / durationSecond$1;
}, function(date2) {
  return date2.getUTCSeconds();
});
const utcSecond = second$1;
second$1.range;
var minute$1 = newInterval$1(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond$1);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute$1);
}, function(start2, end) {
  return (end - start2) / durationMinute$1;
}, function(date2) {
  return date2.getMinutes();
});
const timeMinute = minute$1;
minute$1.range;
var hour$1 = newInterval$1(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond$1 - date2.getMinutes() * durationMinute$1);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour$1);
}, function(start2, end) {
  return (end - start2) / durationHour$1;
}, function(date2) {
  return date2.getHours();
});
const timeHour = hour$1;
hour$1.range;
var day = newInterval$1(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute$1) / durationDay,
  (date2) => date2.getDate() - 1
);
const timeDay = day;
day.range;
function weekday$1(i2) {
  return newInterval$1(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i2) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute$1) / durationWeek$1;
  });
}
var sunday$1 = weekday$1(0);
var monday$1 = weekday$1(1);
var tuesday$1 = weekday$1(2);
var wednesday$1 = weekday$1(3);
var thursday$1 = weekday$1(4);
var friday$1 = weekday$1(5);
var saturday$1 = weekday$1(6);
sunday$1.range;
monday$1.range;
tuesday$1.range;
wednesday$1.range;
thursday$1.range;
friday$1.range;
saturday$1.range;
var month$1 = newInterval$1(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
const timeMonth = month$1;
month$1.range;
var year$1 = newInterval$1(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year$1.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval$1(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
const timeYear = year$1;
year$1.range;
var utcMinute$1 = newInterval$1(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute$1);
}, function(start2, end) {
  return (end - start2) / durationMinute$1;
}, function(date2) {
  return date2.getUTCMinutes();
});
const utcMinute$2 = utcMinute$1;
utcMinute$1.range;
var utcHour$1 = newInterval$1(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour$1);
}, function(start2, end) {
  return (end - start2) / durationHour$1;
}, function(date2) {
  return date2.getUTCHours();
});
const utcHour$2 = utcHour$1;
utcHour$1.range;
var utcDay = newInterval$1(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCDate(date2.getUTCDate() + step);
}, function(start2, end) {
  return (end - start2) / durationDay;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
const utcDay$1 = utcDay;
utcDay.range;
function utcWeekday$1(i2) {
  return newInterval$1(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i2) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek$1;
  });
}
var utcSunday$1 = utcWeekday$1(0);
var utcMonday$1 = utcWeekday$1(1);
var utcTuesday$1 = utcWeekday$1(2);
var utcWednesday$1 = utcWeekday$1(3);
var utcThursday$1 = utcWeekday$1(4);
var utcFriday$1 = utcWeekday$1(5);
var utcSaturday$1 = utcWeekday$1(6);
utcSunday$1.range;
utcMonday$1.range;
utcTuesday$1.range;
utcWednesday$1.range;
utcThursday$1.range;
utcFriday$1.range;
utcSaturday$1.range;
var utcMonth$1 = newInterval$1(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
const utcMonth$2 = utcMonth$1;
utcMonth$1.range;
var utcYear$1 = newInterval$1(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear$1.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval$1(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
const utcYear$2 = utcYear$1;
utcYear$1.range;
function ticker(year2, month2, week, day2, hour2, minute2) {
  const tickIntervals = [
    [utcSecond, 1, durationSecond$1],
    [utcSecond, 5, 5 * durationSecond$1],
    [utcSecond, 15, 15 * durationSecond$1],
    [utcSecond, 30, 30 * durationSecond$1],
    [minute2, 1, durationMinute$1],
    [minute2, 5, 5 * durationMinute$1],
    [minute2, 15, 15 * durationMinute$1],
    [minute2, 30, 30 * durationMinute$1],
    [hour2, 1, durationHour$1],
    [hour2, 3, 3 * durationHour$1],
    [hour2, 6, 6 * durationHour$1],
    [hour2, 12, 12 * durationHour$1],
    [day2, 1, durationDay],
    [day2, 2, 2 * durationDay],
    [week, 1, durationWeek$1],
    [month2, 1, durationMonth],
    [month2, 3, 3 * durationMonth],
    [year2, 1, durationYear]
  ];
  function ticks2(start2, stop2, count) {
    const reverse = stop2 < start2;
    if (reverse)
      [start2, stop2] = [stop2, start2];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start2, stop2, count);
    const ticks3 = interval ? interval.range(start2, +stop2 + 1) : [];
    return reverse ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start2, stop2, count) {
    const target = Math.abs(stop2 - start2) / count;
    const i2 = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i2 === tickIntervals.length)
      return year2.every(tickStep(start2 / durationYear, stop2 / durationYear, count));
    if (i2 === 0)
      return millisecond$2.every(Math.max(tickStep(start2, stop2, count), 1));
    const [t2, step] = tickIntervals[target / tickIntervals[i2 - 1][2] < tickIntervals[i2][2] / target ? i2 - 1 : i2];
    return t2.every(step);
  }
  return [ticks2, tickInterval];
}
const [utcTicks, utcTickInterval] = ticker(utcYear$2, utcMonth$2, utcSunday$1, utcDay$1, utcHour$2, utcMinute$2);
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, sunday$1, timeDay, timeHour, timeMinute);
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m2, d) {
  return { y: y2, m: m2, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale$2(locale2) {
  var locale_dateTime = locale2.dateTime, locale_date = locale2.date, locale_time = locale2.time, locale_periods = locale2.periods, locale_weekdays = locale2.days, locale_shortWeekdays = locale2.shortDays, locale_months = locale2.months, locale_shortMonths = locale2.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i2 = -1, j2 = 0, n2 = specifier.length, c6, pad2, format2;
      if (!(date2 instanceof Date))
        date2 = /* @__PURE__ */ new Date(+date2);
      while (++i2 < n2) {
        if (specifier.charCodeAt(i2) === 37) {
          string.push(specifier.slice(j2, i2));
          if ((pad2 = pads[c6 = specifier.charAt(++i2)]) != null)
            c6 = specifier.charAt(++i2);
          else
            pad2 = c6 === "e" ? " " : "0";
          if (format2 = formats2[c6])
            c6 = format2(date2, pad2);
          string.push(c6);
          j2 = i2 + 1;
        }
      }
      string.push(specifier.slice(j2, i2));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i2 = parseSpecifier(d, specifier, string += "", 0), week, day2;
      if (i2 != string.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d))
        d.Z = 0;
      if ("p" in d)
        d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0)
        d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        if (!("w" in d))
          d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day2 = week.getUTCDay();
          week = day2 > 4 || day2 === 0 ? utcMonday$1.ceil(week) : utcMonday$1(week);
          week = utcDay$1.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day2 = week.getDay();
          week = day2 > 4 || day2 === 0 ? monday$1.ceil(week) : monday$1(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d))
          d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day2 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day2 + 5) % 7 : d.w + d.U * 7 - (day2 + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j2) {
    var i2 = 0, n2 = specifier.length, m2 = string.length, c6, parse;
    while (i2 < n2) {
      if (j2 >= m2)
        return -1;
      c6 = specifier.charCodeAt(i2++);
      if (c6 === 37) {
        c6 = specifier.charAt(i2++);
        parse = parses[c6 in pads ? specifier.charAt(i2++) : c6];
        if (!parse || (j2 = parse(d, string, j2)) < 0)
          return -1;
      } else if (c6 != string.charCodeAt(j2++)) {
        return -1;
      }
    }
    return j2;
  }
  function parsePeriod(d, string, i2) {
    var n2 = periodRe.exec(string.slice(i2));
    return n2 ? (d.p = periodLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseShortWeekday(d, string, i2) {
    var n2 = shortWeekdayRe.exec(string.slice(i2));
    return n2 ? (d.w = shortWeekdayLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseWeekday(d, string, i2) {
    var n2 = weekdayRe.exec(string.slice(i2));
    return n2 ? (d.w = weekdayLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseShortMonth(d, string, i2) {
    var n2 = shortMonthRe.exec(string.slice(i2));
    return n2 ? (d.m = shortMonthLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseMonth(d, string, i2) {
    var n2 = monthRe.exec(string.slice(i2));
    return n2 ? (d.m = monthLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i2) {
    return parseSpecifier(d, locale_dateTime, string, i2);
  }
  function parseLocaleDate(d, string, i2) {
    return parseSpecifier(d, locale_date, string, i2);
  }
  function parseLocaleTime(d, string, i2) {
    return parseSpecifier(d, locale_time, string, i2);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f2 = newFormat(specifier += "", formats);
      f2.toString = function() {
        return specifier;
      };
      return f2;
    },
    parse: function(specifier) {
      var p2 = newParse(specifier += "", false);
      p2.toString = function() {
        return specifier;
      };
      return p2;
    },
    utcFormat: function(specifier) {
      var f2 = newFormat(specifier += "", utcFormats);
      f2.toString = function() {
        return specifier;
      };
      return f2;
    },
    utcParse: function(specifier) {
      var p2 = newParse(specifier += "", true);
      p2.toString = function() {
        return specifier;
      };
      return p2;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" }, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i2) => [name.toLowerCase(), i2]));
}
function parseWeekdayNumberSunday(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 1));
  return n2 ? (d.w = +n2[0], i2 + n2[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 1));
  return n2 ? (d.u = +n2[0], i2 + n2[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.U = +n2[0], i2 + n2[0].length) : -1;
}
function parseWeekNumberISO(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.V = +n2[0], i2 + n2[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.W = +n2[0], i2 + n2[0].length) : -1;
}
function parseFullYear(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 4));
  return n2 ? (d.y = +n2[0], i2 + n2[0].length) : -1;
}
function parseYear(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.y = +n2[0] + (+n2[0] > 68 ? 1900 : 2e3), i2 + n2[0].length) : -1;
}
function parseZone(d, string, i2) {
  var n2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i2, i2 + 6));
  return n2 ? (d.Z = n2[1] ? 0 : -(n2[2] + (n2[3] || "00")), i2 + n2[0].length) : -1;
}
function parseQuarter(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 1));
  return n2 ? (d.q = n2[0] * 3 - 3, i2 + n2[0].length) : -1;
}
function parseMonthNumber(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.m = n2[0] - 1, i2 + n2[0].length) : -1;
}
function parseDayOfMonth(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.d = +n2[0], i2 + n2[0].length) : -1;
}
function parseDayOfYear(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 3));
  return n2 ? (d.m = 0, d.d = +n2[0], i2 + n2[0].length) : -1;
}
function parseHour24(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.H = +n2[0], i2 + n2[0].length) : -1;
}
function parseMinutes(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.M = +n2[0], i2 + n2[0].length) : -1;
}
function parseSeconds(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d.S = +n2[0], i2 + n2[0].length) : -1;
}
function parseMilliseconds(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 3));
  return n2 ? (d.L = +n2[0], i2 + n2[0].length) : -1;
}
function parseMicroseconds(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 6));
  return n2 ? (d.L = Math.floor(n2[0] / 1e3), i2 + n2[0].length) : -1;
}
function parseLiteralPercent(d, string, i2) {
  var n2 = percentRe.exec(string.slice(i2, i2 + 1));
  return n2 ? i2 + n2[0].length : -1;
}
function parseUnixTimestamp(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2));
  return n2 ? (d.Q = +n2[0], i2 + n2[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i2) {
  var n2 = numberRe.exec(string.slice(i2));
  return n2 ? (d.s = +n2[0], i2 + n2[0].length) : -1;
}
function formatDayOfMonth(d, p2) {
  return pad(d.getDate(), p2, 2);
}
function formatHour24(d, p2) {
  return pad(d.getHours(), p2, 2);
}
function formatHour12(d, p2) {
  return pad(d.getHours() % 12 || 12, p2, 2);
}
function formatDayOfYear(d, p2) {
  return pad(1 + timeDay.count(timeYear(d), d), p2, 3);
}
function formatMilliseconds(d, p2) {
  return pad(d.getMilliseconds(), p2, 3);
}
function formatMicroseconds(d, p2) {
  return formatMilliseconds(d, p2) + "000";
}
function formatMonthNumber(d, p2) {
  return pad(d.getMonth() + 1, p2, 2);
}
function formatMinutes(d, p2) {
  return pad(d.getMinutes(), p2, 2);
}
function formatSeconds(d, p2) {
  return pad(d.getSeconds(), p2, 2);
}
function formatWeekdayNumberMonday(d) {
  var day2 = d.getDay();
  return day2 === 0 ? 7 : day2;
}
function formatWeekNumberSunday(d, p2) {
  return pad(sunday$1.count(timeYear(d) - 1, d), p2, 2);
}
function dISO(d) {
  var day2 = d.getDay();
  return day2 >= 4 || day2 === 0 ? thursday$1(d) : thursday$1.ceil(d);
}
function formatWeekNumberISO(d, p2) {
  d = dISO(d);
  return pad(thursday$1.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p2, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p2) {
  return pad(monday$1.count(timeYear(d) - 1, d), p2, 2);
}
function formatYear(d, p2) {
  return pad(d.getFullYear() % 100, p2, 2);
}
function formatYearISO(d, p2) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p2, 2);
}
function formatFullYear(d, p2) {
  return pad(d.getFullYear() % 1e4, p2, 4);
}
function formatFullYearISO(d, p2) {
  var day2 = d.getDay();
  d = day2 >= 4 || day2 === 0 ? thursday$1(d) : thursday$1.ceil(d);
  return pad(d.getFullYear() % 1e4, p2, 4);
}
function formatZone(d) {
  var z2 = d.getTimezoneOffset();
  return (z2 > 0 ? "-" : (z2 *= -1, "+")) + pad(z2 / 60 | 0, "0", 2) + pad(z2 % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p2) {
  return pad(d.getUTCDate(), p2, 2);
}
function formatUTCHour24(d, p2) {
  return pad(d.getUTCHours(), p2, 2);
}
function formatUTCHour12(d, p2) {
  return pad(d.getUTCHours() % 12 || 12, p2, 2);
}
function formatUTCDayOfYear(d, p2) {
  return pad(1 + utcDay$1.count(utcYear$2(d), d), p2, 3);
}
function formatUTCMilliseconds(d, p2) {
  return pad(d.getUTCMilliseconds(), p2, 3);
}
function formatUTCMicroseconds(d, p2) {
  return formatUTCMilliseconds(d, p2) + "000";
}
function formatUTCMonthNumber(d, p2) {
  return pad(d.getUTCMonth() + 1, p2, 2);
}
function formatUTCMinutes(d, p2) {
  return pad(d.getUTCMinutes(), p2, 2);
}
function formatUTCSeconds(d, p2) {
  return pad(d.getUTCSeconds(), p2, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p2) {
  return pad(utcSunday$1.count(utcYear$2(d) - 1, d), p2, 2);
}
function UTCdISO(d) {
  var day2 = d.getUTCDay();
  return day2 >= 4 || day2 === 0 ? utcThursday$1(d) : utcThursday$1.ceil(d);
}
function formatUTCWeekNumberISO(d, p2) {
  d = UTCdISO(d);
  return pad(utcThursday$1.count(utcYear$2(d), d) + (utcYear$2(d).getUTCDay() === 4), p2, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p2) {
  return pad(utcMonday$1.count(utcYear$2(d) - 1, d), p2, 2);
}
function formatUTCYear(d, p2) {
  return pad(d.getUTCFullYear() % 100, p2, 2);
}
function formatUTCYearISO(d, p2) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p2, 2);
}
function formatUTCFullYear(d, p2) {
  return pad(d.getUTCFullYear() % 1e4, p2, 4);
}
function formatUTCFullYearISO(d, p2) {
  var day2 = d.getUTCDay();
  d = day2 >= 4 || day2 === 0 ? utcThursday$1(d) : utcThursday$1.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p2, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}
var locale$2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale$2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale$2(definition) {
  locale$2 = formatLocale$2(definition);
  timeFormat = locale$2.format;
  timeParse = locale$2.parse;
  utcFormat = locale$2.utcFormat;
  utcParse = locale$2.utcParse;
  return locale$2;
}
function date(t2) {
  return new Date(t2);
}
function number(t2) {
  return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
}
function calendar(ticks2, tickInterval, year2, month2, week, day2, hour2, minute2, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute2(date2) < date2 ? formatSecond : hour2(date2) < date2 ? formatMinute : day2(date2) < date2 ? formatHour : month2(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year2(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_2) {
    return arguments.length ? domain(Array.from(_2, number)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function")
      interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year2, month2, week, day2, hour2, minute2, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, sunday$1, timeDay, timeHour, timeMinute, utcSecond, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear$2, utcMonth$2, utcSunday$1, utcDay$1, utcHour$2, utcMinute$2, utcSecond, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function colors(specifier) {
  var n2 = specifier.length / 6 | 0, colors2 = new Array(n2), i2 = 0;
  while (i2 < n2)
    colors2[i2] = "#" + specifier.slice(i2 * 6, ++i2 * 6);
  return colors2;
}
const e = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
const r$1 = colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
const n$1 = colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
const t$1 = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
const o = colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
const i = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
const u$1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
const a$1 = colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
const l = colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
const ramp$1 = (scheme2) => rgbBasis(scheme2[scheme2.length - 1]);
var scheme$q = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors);
const b$3 = ramp$1(scheme$q);
var scheme$p = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors);
const v$2 = ramp$1(scheme$p);
var scheme$o = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors);
const _$1 = ramp$1(scheme$o);
var scheme$n = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors);
const w$2 = ramp$1(scheme$n);
var scheme$m = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors);
const O$3 = ramp$1(scheme$m);
var scheme$l = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors);
const k$3 = ramp$1(scheme$l);
var scheme$k = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors);
const z$2 = ramp$1(scheme$k);
var scheme$j = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors);
const A$1 = ramp$1(scheme$j);
var scheme$i = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors);
const j = ramp$1(scheme$i);
var scheme$h = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors);
const ue$1 = ramp$1(scheme$h);
var scheme$g = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors);
const ae$1 = ramp$1(scheme$g);
var scheme$f = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors);
const le$1 = ramp$1(scheme$f);
var scheme$e = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors);
const se$1 = ramp$1(scheme$e);
var scheme$d = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors);
const ce$1 = ramp$1(scheme$d);
var scheme$c = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors);
const fe$1 = ramp$1(scheme$c);
var scheme$b = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors);
const pe$1 = ramp$1(scheme$b);
var scheme$a = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors);
const de$1 = ramp$1(scheme$a);
var scheme$9 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors);
const me$1 = ramp$1(scheme$9);
var scheme$8 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors);
const he$1 = ramp$1(scheme$8);
var scheme$7 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors);
const ge$1 = ramp$1(scheme$7);
var scheme$6 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors);
const ye$1 = ramp$1(scheme$6);
var scheme$5 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors);
const J$1 = ramp$1(scheme$5);
var scheme$4 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors);
const K$1 = ramp$1(scheme$4);
var scheme$3 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors);
const L$1 = ramp$1(scheme$3);
var scheme$2 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors);
const Q$1 = ramp$1(scheme$2);
var scheme$1 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors);
const W$2 = ramp$1(scheme$1);
var scheme = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors);
const N$1 = ramp$1(scheme);
function ne$1(t2) {
  t2 = Math.max(0, Math.min(1, t2));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t2 * (35.34 - t2 * (2381.73 - t2 * (6402.7 - t2 * (7024.72 - t2 * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t2 * (170.73 + t2 * (52.82 - t2 * (131.46 - t2 * (176.58 - t2 * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t2 * (442.36 - t2 * (2482.43 - t2 * (6167.24 - t2 * (6614.94 - t2 * 2475.67))))))) + ")";
}
const ie$1 = cubehelixLong(cubehelix$1(300, 0.5, 0), cubehelix$1(-240, 0.5, 1));
var warm = cubehelixLong(cubehelix$1(-100, 0.75, 0.35), cubehelix$1(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix$1(260, 0.75, 0.35), cubehelix$1(80, 1.5, 0.8));
var c$1 = cubehelix$1();
function be$1(t2) {
  if (t2 < 0 || t2 > 1)
    t2 -= Math.floor(t2);
  var ts2 = Math.abs(t2 - 0.5);
  c$1.h = 360 * t2 - 100;
  c$1.s = 1.5 - 1.5 * ts2;
  c$1.l = 0.8 - 0.9 * ts2;
  return c$1 + "";
}
var c = rgb$1(), pi_1_3 = Math.PI / 3, pi_2_3 = Math.PI * 2 / 3;
function ve$1(t2) {
  var x2;
  t2 = (0.5 - t2) * Math.PI;
  c.r = 255 * (x2 = Math.sin(t2)) * x2;
  c.g = 255 * (x2 = Math.sin(t2 + pi_1_3)) * x2;
  c.b = 255 * (x2 = Math.sin(t2 + pi_2_3)) * x2;
  return c + "";
}
function X$3(t2) {
  t2 = Math.max(0, Math.min(1, t2));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t2 * (1172.33 - t2 * (10793.56 - t2 * (33300.12 - t2 * (38394.49 - t2 * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t2 * (557.33 + t2 * (1225.33 - t2 * (3574.96 - t2 * (1073.77 + t2 * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t2 * (3211.1 - t2 * (15327.97 - t2 * (27814 - t2 * (22569.18 - t2 * 6838.66))))))) + ")";
}
function ramp(range) {
  var n2 = range.length;
  return function(t2) {
    return range[Math.max(0, Math.min(n2 - 1, Math.floor(t2 * n2)))];
  };
}
const Y$3 = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$2(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
var _arrayIncludes = arrayIncludes$2;
function arrayIncludesWith$2(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$2;
var SetCache$1 = _SetCache, arrayIncludes$1 = _arrayIncludes, arrayIncludesWith$1 = _arrayIncludesWith, arrayMap = _arrayMap, baseUnary$1 = _baseUnary, cacheHas$1 = _cacheHas;
var LARGE_ARRAY_SIZE$1 = 200;
function baseDifference$1(array, values, iteratee, comparator) {
  var index = -1, includes = arrayIncludes$1, isCommon = true, length = array.length, result = [], valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary$1(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith$1;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE$1) {
    includes = cacheHas$1;
    isCommon = false;
    values = new SetCache$1(values);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var _baseDifference = baseDifference$1;
var baseDifference = _baseDifference, baseRest$1 = _baseRest, isArrayLikeObject = isArrayLikeObject_1;
var without = baseRest$1(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, values) : [];
});
var without_1 = without;
const Ze = /* @__PURE__ */ getDefaultExportFromCjs(without_1);
var pi = Math.PI, tau$1 = 2 * pi, epsilon$2 = 1e-6, tauEpsilon = tau$1 - epsilon$2;
function Path$1() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path$1();
}
Path$1.prototype = path.prototype = {
  constructor: Path$1,
  moveTo: function(x2, y2) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x2, y2) {
    this._ += "L" + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  quadraticCurveTo: function(x1, y1, x2, y2) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  arcTo: function(x1, y1, x2, y2, r2) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r2 = +r2;
    var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (r2 < 0)
      throw new Error("negative radius: " + r2);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else if (!(l01_2 > epsilon$2))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$2) || !r2) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else {
      var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l2 = r2 * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l2 / l01, t21 = l2 / l21;
      if (Math.abs(t01 - 1) > epsilon$2) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }
      this._ += "A" + r2 + "," + r2 + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x2, y2, r2, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r2 = +r2, ccw = !!ccw;
    var dx = r2 * Math.cos(a0), dy = r2 * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r2 < 0)
      throw new Error("negative radius: " + r2);
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } else if (Math.abs(this._x1 - x0) > epsilon$2 || Math.abs(this._y1 - y0) > epsilon$2) {
      this._ += "L" + x0 + "," + y0;
    }
    if (!r2)
      return;
    if (da < 0)
      da = da % tau$1 + tau$1;
    if (da > tauEpsilon) {
      this._ += "A" + r2 + "," + r2 + ",0,1," + cw + "," + (x2 - dx) + "," + (y2 - dy) + "A" + r2 + "," + r2 + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } else if (da > epsilon$2) {
      this._ += "A" + r2 + "," + r2 + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x2 + r2 * Math.cos(a1)) + "," + (this._y1 = y2 + r2 * Math.sin(a1));
    }
  },
  rect: function(x2, y2, w2, h) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2) + "h" + +w2 + "v" + +h + "h" + -w2 + "Z";
  },
  toString: function() {
    return this._;
  }
};
function constant(x2) {
  return function constant2() {
    return x2;
  };
}
var epsilon$1 = 1e-12;
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function dr(context) {
  return new Linear(context);
}
function x$3(p2) {
  return p2[0];
}
function y(p2) {
  return p2[1];
}
function H$1() {
  var x2 = x$3, y$1 = y, defined = constant(true), context = null, curve = dr, output = null;
  function line(data) {
    var i2, n2 = data.length, d, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path());
    for (i2 = 0; i2 <= n2; ++i2) {
      if (!(i2 < n2 && defined(d = data[i2], i2, data)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x2(d, i2, data), +y$1(d, i2, data));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line.x = function(_2) {
    return arguments.length ? (x2 = typeof _2 === "function" ? _2 : constant(+_2), line) : x2;
  };
  line.y = function(_2) {
    return arguments.length ? (y$1 = typeof _2 === "function" ? _2 : constant(+_2), line) : y$1;
  };
  line.defined = function(_2) {
    return arguments.length ? (defined = typeof _2 === "function" ? _2 : constant(!!_2), line) : defined;
  };
  line.curve = function(_2) {
    return arguments.length ? (curve = _2, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_2) {
    return arguments.length ? (_2 == null ? context = output = null : output = curve(context = _2), line) : context;
  };
  return line;
}
function I$1() {
  var x0 = x$3, x1 = null, y0 = constant(0), y1 = y, defined = constant(true), context = null, curve = dr, output = null;
  function area(data) {
    var i2, j2, k2, n2 = data.length, d, defined0 = false, buffer, x0z = new Array(n2), y0z = new Array(n2);
    if (context == null)
      output = curve(buffer = path());
    for (i2 = 0; i2 <= n2; ++i2) {
      if (!(i2 < n2 && defined(d = data[i2], i2, data)) === defined0) {
        if (defined0 = !defined0) {
          j2 = i2;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i2 - 1; k2 >= j2; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i2] = +x0(d, i2, data), y0z[i2] = +y0(d, i2, data);
        output.point(x1 ? +x1(d, i2, data) : x0z[i2], y1 ? +y1(d, i2, data) : y0z[i2]);
      }
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  function arealine() {
    return H$1().defined(defined).curve(curve).context(context);
  }
  area.x = function(_2) {
    return arguments.length ? (x0 = typeof _2 === "function" ? _2 : constant(+_2), x1 = null, area) : x0;
  };
  area.x0 = function(_2) {
    return arguments.length ? (x0 = typeof _2 === "function" ? _2 : constant(+_2), area) : x0;
  };
  area.x1 = function(_2) {
    return arguments.length ? (x1 = _2 == null ? null : typeof _2 === "function" ? _2 : constant(+_2), area) : x1;
  };
  area.y = function(_2) {
    return arguments.length ? (y0 = typeof _2 === "function" ? _2 : constant(+_2), y1 = null, area) : y0;
  };
  area.y0 = function(_2) {
    return arguments.length ? (y0 = typeof _2 === "function" ? _2 : constant(+_2), area) : y0;
  };
  area.y1 = function(_2) {
    return arguments.length ? (y1 = _2 == null ? null : typeof _2 === "function" ? _2 : constant(+_2), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_2) {
    return arguments.length ? (defined = typeof _2 === "function" ? _2 : constant(!!_2), area) : defined;
  };
  area.curve = function(_2) {
    return arguments.length ? (curve = _2, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_2) {
    return arguments.length ? (_2 == null ? context = output = null : output = curve(context = _2), area) : context;
  };
  return area;
}
function noop$2() {
}
function point$3(that, x2, y2) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x2) / 6,
    (that._y0 + 4 * that._y1 + y2) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point$3(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point$3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function $e$1(context) {
  return new Basis(context);
}
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point$3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function er(context) {
  return new BasisClosed(context);
}
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point$3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function rr(context) {
  return new BasisOpen(context);
}
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, j2 = x2.length - 1;
    if (j2 > 0) {
      var x0 = x2[0], y0 = y2[0], dx = x2[j2] - x0, dy = y2[j2] - y0, i2 = -1, t2;
      while (++i2 <= j2) {
        t2 = i2 / j2;
        this._basis.point(
          this._beta * x2[i2] + (1 - this._beta) * (x0 + t2 * dx),
          this._beta * y2[i2] + (1 - this._beta) * (y0 + t2 * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
const tr = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);
function point$2(that, x2, y2) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x2),
    that._y2 + that._k * (that._y1 - y2),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point$2(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        this._x1 = x2, this._y1 = y2;
        break;
      case 2:
        this._point = 3;
      default:
        point$2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
const ir = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point$2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
const nr = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point$2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
const or = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);
function point$1(that, x2, y2) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon$1) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n2 = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n2;
    y1 = (y1 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n2;
  }
  if (that._l23_a > epsilon$1) {
    var b2 = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m2 = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b2 + that._x1 * that._l23_2a - x2 * that._l12_2a) / m2;
    y22 = (y22 * b2 + that._y1 * that._l23_2a - y2 * that._l12_2a) / m2;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point$1(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
const ar = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point$1(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
const sr = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point$1(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
const lr = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point)
      this._context.lineTo(x2, y2);
    else
      this._point = 1, this._context.moveTo(x2, y2);
  }
};
function ur(context) {
  return new LinearClosed(context);
}
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p2 = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p2)) || 0;
}
function slope2(that, t2) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t2) / 2 : t2;
}
function point(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t12 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
        break;
      default:
        point(this, this._t0, t12 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n2 = x2.length;
    if (n2) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n2 === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n2; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n2 === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i2, n2 = x2.length - 1, m2, a2 = new Array(n2), b2 = new Array(n2), r2 = new Array(n2);
  a2[0] = 0, b2[0] = 2, r2[0] = x2[0] + 2 * x2[1];
  for (i2 = 1; i2 < n2 - 1; ++i2)
    a2[i2] = 1, b2[i2] = 4, r2[i2] = 4 * x2[i2] + 2 * x2[i2 + 1];
  a2[n2 - 1] = 2, b2[n2 - 1] = 7, r2[n2 - 1] = 8 * x2[n2 - 1] + x2[n2];
  for (i2 = 1; i2 < n2; ++i2)
    m2 = a2[i2] / b2[i2 - 1], b2[i2] -= m2, r2[i2] -= m2 * r2[i2 - 1];
  a2[n2 - 1] = r2[n2 - 1] / b2[n2 - 1];
  for (i2 = n2 - 2; i2 >= 0; --i2)
    a2[i2] = (r2[i2] - a2[i2 + 1]) / b2[i2];
  b2[n2 - 1] = (x2[n2] + a2[n2 - 1]) / 2;
  for (i2 = 0; i2 < n2 - 1; ++i2)
    b2[i2] = 2 * x2[i2 + 1] - a2[i2 + 1];
  return [a2, b2];
}
function pr$1(context) {
  return new Natural(context);
}
function Step(context, t2) {
  this._context = context;
  this._t = t2;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};
function hr(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}
function wr(series, order) {
  if (!((n2 = series.length) > 1))
    return;
  for (var i2 = 1, j2, s0, s1 = series[order[0]], n2, m2 = s1.length; i2 < n2; ++i2) {
    s0 = s1, s1 = series[order[i2]];
    for (j2 = 0; j2 < m2; ++j2) {
      s1[j2][1] += s1[j2][0] = isNaN(s0[j2][1]) ? s0[j2][0] : s0[j2][1];
    }
  }
}
function Rr(series) {
  var n2 = series.length, o2 = new Array(n2);
  while (--n2 >= 0)
    o2[n2] = n2;
  return o2;
}
function kr(series, order) {
  if (!((n2 = series.length) > 0))
    return;
  for (var i2, n2, j2 = 0, m2 = series[0].length, y2; j2 < m2; ++j2) {
    for (y2 = i2 = 0; i2 < n2; ++i2)
      y2 += series[i2][j2][1] || 0;
    if (y2)
      for (i2 = 0; i2 < n2; ++i2)
        series[i2][j2][1] /= y2;
  }
  wr(series, order);
}
function _r(series, order) {
  if (!((n2 = series.length) > 0))
    return;
  for (var i2, j2 = 0, d, dy, yp, yn2, n2, m2 = series[order[0]].length; j2 < m2; ++j2) {
    for (yp = yn2 = 0, i2 = 0; i2 < n2; ++i2) {
      if ((dy = (d = series[order[i2]][j2])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn2, d[0] = yn2 += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
}
function xr(series, order) {
  if (!((n2 = series.length) > 0))
    return;
  for (var j2 = 0, s0 = series[order[0]], n2, m2 = s0.length; j2 < m2; ++j2) {
    for (var i2 = 0, y2 = 0; i2 < n2; ++i2)
      y2 += series[i2][j2][1] || 0;
    s0[j2][1] += s0[j2][0] = -y2 / 2;
  }
  wr(series, order);
}
function Or(series, order) {
  if (!((n2 = series.length) > 0) || !((m2 = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y2 = 0, j2 = 1, s0, m2, n2; j2 < m2; ++j2) {
    for (var i2 = 0, s1 = 0, s2 = 0; i2 < n2; ++i2) {
      var si2 = series[order[i2]], sij0 = si2[j2][1] || 0, sij1 = si2[j2 - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k2 = 0; k2 < i2; ++k2) {
        var sk = series[order[k2]], skj0 = sk[j2][1] || 0, skj1 = sk[j2 - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j2 - 1][1] += s0[j2 - 1][0] = y2;
    if (s1)
      y2 -= s2 / s1;
  }
  s0[j2 - 1][1] += s0[j2 - 1][0] = y2;
  wr(series, order);
}
function appearance(series) {
  var peaks = series.map(peak);
  return Rr(series).sort(function(a2, b2) {
    return peaks[a2] - peaks[b2];
  });
}
function peak(series) {
  var i2 = -1, j2 = 0, n2 = series.length, vi, vj = -Infinity;
  while (++i2 < n2)
    if ((vi = +series[i2][1]) > vj)
      vj = vi, j2 = i2;
  return j2;
}
function br(series) {
  var sums = series.map(sum);
  return Rr(series).sort(function(a2, b2) {
    return sums[a2] - sums[b2];
  });
}
function sum(series) {
  var s = 0, i2 = -1, n2 = series.length, v2;
  while (++i2 < n2)
    if (v2 = +series[i2][1])
      s += v2;
  return s;
}
function yr(series) {
  return br(series).reverse();
}
function vr(series) {
  var n2 = series.length, i2, j2, sums = series.map(sum), order = appearance(series), top = 0, bottom = 0, tops = [], bottoms = [];
  for (i2 = 0; i2 < n2; ++i2) {
    j2 = order[i2];
    if (top < bottom) {
      top += sums[j2];
      tops.push(j2);
    } else {
      bottom += sums[j2];
      bottoms.push(j2);
    }
  }
  return bottoms.reverse().concat(tops);
}
function qr(series) {
  return Rr(series).reverse();
}
function formatDecimal$1(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts$1(x2, p2) {
  if ((i2 = (x2 = p2 ? x2.toExponential(p2 - 1) : x2.toExponential()).indexOf("e")) < 0)
    return null;
  var i2, coefficient = x2.slice(0, i2);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i2 + 1)
  ];
}
function exponent$1(x2) {
  return x2 = formatDecimalParts$1(Math.abs(x2)), x2 ? x2[1] : NaN;
}
function formatGroup$1(grouping, thousands) {
  return function(value, width) {
    var i2 = value.length, t2 = [], j2 = 0, g2 = grouping[0], length = 0;
    while (i2 > 0 && g2 > 0) {
      if (length + g2 + 1 > width)
        g2 = Math.max(1, width - length);
      t2.push(value.substring(i2 -= g2, i2 + g2));
      if ((length += g2 + 1) > width)
        break;
      g2 = grouping[j2 = (j2 + 1) % grouping.length];
    }
    return t2.reverse().join(thousands);
  };
}
function formatNumerals$1(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i2) {
      return numerals[+i2];
    });
  };
}
var re$1 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier$1(specifier) {
  if (!(match = re$1.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier$1({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier$1.prototype = FormatSpecifier$1.prototype;
function FormatSpecifier$1(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier$1.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim$1(s) {
  out:
    for (var n2 = s.length, i2 = 1, i0 = -1, i1; i2 < n2; ++i2) {
      switch (s[i2]) {
        case ".":
          i0 = i1 = i2;
          break;
        case "0":
          if (i0 === 0)
            i0 = i2;
          i1 = i2;
          break;
        default:
          if (!+s[i2])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent$1;
function formatPrefixAuto$1(x2, p2) {
  var d = formatDecimalParts$1(x2, p2);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent2 = d[1], i2 = exponent2 - (prefixExponent$1 = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n2 = coefficient.length;
  return i2 === n2 ? coefficient : i2 > n2 ? coefficient + new Array(i2 - n2 + 1).join("0") : i2 > 0 ? coefficient.slice(0, i2) + "." + coefficient.slice(i2) : "0." + new Array(1 - i2).join("0") + formatDecimalParts$1(x2, Math.max(0, p2 + i2 - 1))[0];
}
function formatRounded$1(x2, p2) {
  var d = formatDecimalParts$1(x2, p2);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes$1 = {
  "%": function(x2, p2) {
    return (x2 * 100).toFixed(p2);
  },
  "b": function(x2) {
    return Math.round(x2).toString(2);
  },
  "c": function(x2) {
    return x2 + "";
  },
  "d": formatDecimal$1,
  "e": function(x2, p2) {
    return x2.toExponential(p2);
  },
  "f": function(x2, p2) {
    return x2.toFixed(p2);
  },
  "g": function(x2, p2) {
    return x2.toPrecision(p2);
  },
  "o": function(x2) {
    return Math.round(x2).toString(8);
  },
  "p": function(x2, p2) {
    return formatRounded$1(x2 * 100, p2);
  },
  "r": formatRounded$1,
  "s": formatPrefixAuto$1,
  "X": function(x2) {
    return Math.round(x2).toString(16).toUpperCase();
  },
  "x": function(x2) {
    return Math.round(x2).toString(16);
  }
};
function identity$1(x2) {
  return x2;
}
var map$1 = Array.prototype.map, prefixes$1 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale$1(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$1 : formatGroup$1(map$1.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$1 : formatNumerals$1(map$1.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "-" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier$1(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes$1[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes$1[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix2, valueSuffix = suffix, i2, n2, c6;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim$1(value);
        if (valueNegative && +value === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes$1[8 + prefixExponent$1 / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i2 = -1, n2 = value.length;
          while (++i2 < n2) {
            if (c6 = value.charCodeAt(i2), 48 > c6 || c6 > 57) {
              valueSuffix = (c6 === 46 ? decimal + value.slice(i2 + 1) : value.slice(i2)) + valueSuffix;
              value = value.slice(0, i2);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f2 = newFormat((specifier = formatSpecifier$1(specifier), specifier.type = "f", specifier)), e3 = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3, k2 = Math.pow(10, -e3), prefix2 = prefixes$1[8 + e3 / 3];
    return function(value2) {
      return f2(k2 * value2) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale$1;
var format$1;
defaultLocale$1({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  format$1 = locale$1.format;
  locale$1.formatPrefix;
  return locale$1;
}
var baseIsEqual = _baseIsEqual;
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var isEqual_1 = isEqual;
const Mr = /* @__PURE__ */ getDefaultExportFromCjs(isEqual_1);
var baseGet = _baseGet, baseSet = _baseSet, castPath = _castPath;
function basePickBy$1(object2, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path2 = paths[index], value = baseGet(object2, path2);
    if (predicate(value, path2)) {
      baseSet(result, castPath(path2, object2), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
var basePickBy = _basePickBy, hasIn = hasIn_1;
function basePick$1(object2, paths) {
  return basePickBy(object2, paths, function(value, path2) {
    return hasIn(object2, path2);
  });
}
var _basePick = basePick$1;
var Symbol$1 = _Symbol, isArguments = isArguments_1, isArray = isArray_1;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$2(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$2(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$2;
var baseFlatten$1 = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten$1(array, 1) : [];
}
var flatten_1 = flatten$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$1(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$1;
var basePick = _basePick, flatRest = _flatRest;
var pick = flatRest(function(object2, paths) {
  return object2 == null ? {} : basePick(object2, paths);
});
var pick_1 = pick;
const Dr = /* @__PURE__ */ getDefaultExportFromCjs(pick_1);
function Gr() {
  return Gr = Object.assign || function(e3) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t2 = arguments[r2];
      for (var i2 in t2)
        Object.prototype.hasOwnProperty.call(t2, i2) && (e3[i2] = t2[i2]);
    }
    return e3;
  }, Gr.apply(this, arguments);
}
function Br(e3, r2) {
  return Br = Object.setPrototypeOf || function(e4, r3) {
    return e4.__proto__ = r3, e4;
  }, Br(e3, r2);
}
function Lr(e3, r2) {
  if (null == e3)
    return {};
  var t2, i2, n2 = {}, o2 = Object.keys(e3);
  for (i2 = 0; i2 < o2.length; i2++)
    t2 = o2[i2], r2.indexOf(t2) >= 0 || (n2[t2] = e3[t2]);
  return n2;
}
var Ir = { fill: K$2.string, fontSize: K$2.number, fontFamily: K$2.string }, Yr = K$2.shape({ domain: K$2.shape({ line: K$2.shape({ stroke: K$2.string.isRequired, strokeWidth: K$2.number.isRequired, strokeDasharray: K$2.string }).isRequired }).isRequired, ticks: K$2.shape({ line: K$2.shape({ stroke: K$2.string.isRequired, strokeWidth: K$2.number.isRequired, strokeDasharray: K$2.string }).isRequired, text: K$2.shape(Gr({}, Ir)).isRequired }).isRequired, legend: K$2.shape({ text: K$2.shape(Gr({}, Ir)).isRequired }).isRequired }), Ar = K$2.shape({ line: K$2.shape({ stroke: K$2.string.isRequired, strokeWidth: K$2.number.isRequired, strokeDasharray: K$2.string }).isRequired }), Fr = K$2.shape({ hidden: K$2.shape({ symbol: K$2.shape({ fill: K$2.string.isRequired, opacity: K$2.number }).isRequired, text: K$2.shape(Gr({}, Ir, { opacity: K$2.number })).isRequired }).isRequired, text: K$2.shape(Gr({}, Ir)).isRequired }), Er = K$2.shape({ text: K$2.shape(Gr({}, Ir)).isRequired }), Ur = K$2.shape({ text: K$2.shape(Gr({}, Ir)).isRequired }), Xr = K$2.shape({ text: K$2.shape(Gr({}, Ir)).isRequired }), Kr = K$2.shape({ line: K$2.shape({ stroke: K$2.string.isRequired, strokeWidth: K$2.number.isRequired, strokeDasharray: K$2.string }).isRequired }), Hr = K$2.shape({ text: K$2.shape(Gr({}, Ir, { outlineWidth: K$2.number.isRequired, outlineColor: K$2.string.isRequired })).isRequired, link: K$2.shape({ stroke: K$2.string.isRequired, strokeWidth: K$2.number.isRequired, outlineWidth: K$2.number.isRequired, outlineColor: K$2.string.isRequired }).isRequired, outline: K$2.shape({ stroke: K$2.string.isRequired, strokeWidth: K$2.number.isRequired, outlineWidth: K$2.number.isRequired, outlineColor: K$2.string.isRequired }).isRequired, symbol: K$2.shape({ fill: K$2.string.isRequired, outlineWidth: K$2.number.isRequired, outlineColor: K$2.string.isRequired }).isRequired });
K$2.shape({ background: K$2.string.isRequired, fontFamily: K$2.string.isRequired, fontSize: K$2.number.isRequired, textColor: K$2.string.isRequired, axis: Yr.isRequired, grid: Ar.isRequired, legends: Fr.isRequired, labels: Er.isRequired, dots: Ur.isRequired, markers: Xr, crosshair: Kr.isRequired, annotations: Hr.isRequired });
var Vr = { background: "transparent", fontFamily: "sans-serif", fontSize: 11, textColor: "#333333", axis: { domain: { line: { stroke: "transparent", strokeWidth: 1 } }, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: {} }, legend: { text: { fontSize: 12 } } }, grid: { line: { stroke: "#dddddd", strokeWidth: 1 } }, legends: { hidden: { symbol: { fill: "#333333", opacity: 0.6 }, text: { fill: "#333333", opacity: 0.6 } }, text: {}, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: { fontSize: 10 } }, title: { text: {} } }, labels: { text: {} }, markers: { lineColor: "#000000", lineStrokeWidth: 1, text: {} }, dots: { text: {} }, tooltip: { container: { background: "white", color: "inherit", fontSize: "inherit", borderRadius: "2px", boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)", padding: "5px 9px" }, basic: { whiteSpace: "pre", display: "flex", alignItems: "center" }, chip: { marginRight: 7 }, table: {}, tableCell: { padding: "3px 5px" }, tableCellValue: { fontWeight: "bold" } }, crosshair: { line: { stroke: "#000000", strokeWidth: 1, strokeOpacity: 0.75, strokeDasharray: "6 6" } }, annotations: { text: { fontSize: 13, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, link: { stroke: "#000000", strokeWidth: 1, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, outline: { fill: "none", stroke: "#000000", strokeWidth: 2, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, symbol: { fill: "#000000", outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 } } }, Jr = ["axis.ticks.text", "axis.legend.text", "legends.title.text", "legends.text", "legends.ticks.text", "legends.title.text", "labels.text", "dots.text", "markers.text", "annotations.text"], Qr = function(e3, r2) {
  var t2 = b$5({}, e3, r2);
  return Jr.forEach(function(e4) {
    void 0 === we$1(t2, e4 + ".fontFamily") && v$4(t2, e4 + ".fontFamily", t2.fontFamily), void 0 === we$1(t2, e4 + ".fontSize") && v$4(t2, e4 + ".fontSize", t2.fontSize), void 0 === we$1(t2, e4 + ".fill") && v$4(t2, e4 + ".fill", t2.textColor);
  }), t2;
}, Zr = reactExports.createContext(), $r = function(e3) {
  var t2 = e3.children, i2 = e3.animate, n2 = e3.stiffness, o2 = e3.damping, a2 = e3.config, s = reactExports.useMemo(function() {
    var e4 = x$4(a2) ? config[a2] : a2;
    return { animate: i2, springConfig: { stiffness: n2, damping: o2 }, config: e4 };
  }, [i2, n2, o2, a2]);
  return jsx(Zr.Provider, { value: s, children: t2 });
}, et = { animate: K$2.bool, motionStiffness: K$2.number, motionDamping: K$2.number, motionConfig: K$2.oneOfType([K$2.oneOf(Object.keys(config)), K$2.shape({ mass: K$2.number, tension: K$2.number, friction: K$2.number, clamp: K$2.bool, precision: K$2.number, velocity: K$2.number, duration: K$2.number, easing: K$2.func })]) };
$r.propTypes = { children: K$2.node.isRequired, animate: et.animate, stiffness: et.motionStiffness, damping: et.motionDamping, config: et.motionConfig };
var rt = { animate: true, stiffness: 90, damping: 15, config: "default" };
$r.defaultProps = rt;
var tt = function() {
  return reactExports.useContext(Zr);
}, it = function(e3) {
  var t2 = tt(), o2 = t2.animate, a2 = t2.config, s = function(e4) {
    var r2 = reactExports.useRef();
    return reactExports.useEffect(function() {
      r2.current = e4;
    }, [e4]), r2.current;
  }(e3), l2 = reactExports.useMemo(function() {
    return R(s, e3);
  }, [s, e3]), d = useSpring({ from: { value: 0 }, to: { value: 1 }, reset: true, config: a2, immediate: !o2 }).value;
  return to(d, l2);
}, nt = { nivo: ["#d76445", "#f47560", "#e8c1a0", "#97e3d5", "#61cdbb", "#00b0a7"], BrBG: e$1(scheme$q), PRGn: e$1(scheme$p), PiYG: e$1(scheme$o), PuOr: e$1(scheme$n), RdBu: e$1(scheme$m), RdGy: e$1(scheme$l), RdYlBu: e$1(scheme$k), RdYlGn: e$1(scheme$j), spectral: e$1(scheme$i), blues: e$1(scheme$5), greens: e$1(scheme$4), greys: e$1(scheme$3), oranges: e$1(scheme), purples: e$1(scheme$2), reds: e$1(scheme$1), BuGn: e$1(scheme$h), BuPu: e$1(scheme$g), GnBu: e$1(scheme$f), OrRd: e$1(scheme$e), PuBuGn: e$1(scheme$d), PuBu: e$1(scheme$c), PuRd: e$1(scheme$b), RdPu: e$1(scheme$a), YlGnBu: e$1(scheme$9), YlGn: e$1(scheme$8), YlOrBr: e$1(scheme$7), YlOrRd: e$1(scheme$6) }, ot = Object.keys(nt);
({ nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: e, accent: r$1, dark2: n$1, paired: t$1, pastel1: o, pastel2: i, set1: u$1, set2: a$1, set3: l, brown_blueGreen: e$1(scheme$q), purpleRed_green: e$1(scheme$p), pink_yellowGreen: e$1(scheme$o), purple_orange: e$1(scheme$n), red_blue: e$1(scheme$m), red_grey: e$1(scheme$l), red_yellow_blue: e$1(scheme$k), red_yellow_green: e$1(scheme$j), spectral: e$1(scheme$i), blues: e$1(scheme$5), greens: e$1(scheme$4), greys: e$1(scheme$3), oranges: e$1(scheme), purples: e$1(scheme$2), reds: e$1(scheme$1), blue_green: e$1(scheme$h), blue_purple: e$1(scheme$g), green_blue: e$1(scheme$f), orange_red: e$1(scheme$e), purple_blue_green: e$1(scheme$d), purple_blue: e$1(scheme$c), purple_red: e$1(scheme$b), red_purple: e$1(scheme$a), yellow_green_blue: e$1(scheme$9), yellow_green: e$1(scheme$8), yellow_orange_brown: e$1(scheme$7), yellow_orange_red: e$1(scheme$6) });
K$2.oneOfType([K$2.oneOf(ot), K$2.func, K$2.arrayOf(K$2.string)]);
var ht = { basis: $e$1, basisClosed: er, basisOpen: rr, bundle: tr, cardinal: ir, cardinalClosed: nr, cardinalOpen: or, catmullRom: ar, catmullRomClosed: sr, catmullRomOpen: lr, linear: dr, linearClosed: ur, monotoneX, monotoneY, natural: pr$1, step: hr, stepAfter, stepBefore }, gt = Object.keys(ht);
K$2.oneOf(gt);
gt.filter(function(e3) {
  return e3.endsWith("Closed");
});
Ze(gt, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
var vt = Ze(gt, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed"), Rt = K$2.oneOf(vt), qt = function(e3) {
  if (!ht[e3])
    throw new TypeError("'" + e3 + "', is not a valid curve interpolator identifier.");
  return ht[e3];
}, kt = { defs: K$2.arrayOf(K$2.shape({ id: K$2.string.isRequired })).isRequired, fill: K$2.arrayOf(K$2.shape({ id: K$2.string.isRequired, match: K$2.oneOfType([K$2.oneOf(["*"]), K$2.object, K$2.func]).isRequired })).isRequired }, _t = { ascending: br, descending: yr, insideOut: vr, none: Rr, reverse: qr }, wt = Object.keys(_t);
K$2.oneOf(wt);
var Ct = { expand: kr, diverging: _r, none: wr, silhouette: xr, wiggle: Or }, Wt = Object.keys(Ct);
K$2.oneOf(Wt);
K$2.shape({ top: K$2.number, right: K$2.number, bottom: K$2.number, left: K$2.number }).isRequired;
var Tt = ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Mt = K$2.oneOf(Tt);
ordinal(l);
var Yt = { top: 0, right: 0, bottom: 0, left: 0 }, At = function(e3, t2, i2) {
  return void 0 === i2 && (i2 = {}), reactExports.useMemo(function() {
    var r2 = Gr({}, Yt, i2);
    return { margin: r2, innerWidth: e3 - r2.left - r2.right, innerHeight: t2 - r2.top - r2.bottom, outerWidth: e3, outerHeight: t2 };
  }, [e3, t2, i2.top, i2.right, i2.bottom, i2.left]);
}, Ft = function() {
  var e3 = reactExports.useRef(null), r2 = reactExports.useState({ left: 0, top: 0, width: 0, height: 0 }), t2 = r2[0], a2 = r2[1], s = reactExports.useState(function() {
    return "undefined" != typeof window ? new ResizeObserver(function(e4) {
      var r3 = e4[0];
      return a2(r3.contentRect);
    }) : null;
  })[0];
  return reactExports.useEffect(function() {
    return e3.current && null !== s && s.observe(e3.current), function() {
      null !== s && s.disconnect();
    };
  }, []), [e3, t2];
}, Et = function(e3) {
  return reactExports.useMemo(function() {
    return Qr(Vr, e3);
  }, [e3]);
}, Ut = function(e3) {
  return "function" == typeof e3 ? e3 : "string" == typeof e3 ? 0 === e3.indexOf("time:") ? timeFormat(e3.slice("5")) : format$1(e3) : function(e4) {
    return "" + e4;
  };
}, Xt = function(e3) {
  return reactExports.useMemo(function() {
    return Ut(e3);
  }, [e3]);
}, Kt = reactExports.createContext(), Ht = {}, Nt = function(e3) {
  var r2 = e3.theme, t2 = void 0 === r2 ? Ht : r2, i2 = e3.children, n2 = Et(t2);
  return jsx(Kt.Provider, { value: n2, children: i2 });
};
Nt.propTypes = { children: K$2.node.isRequired, theme: K$2.object };
var Vt = function() {
  return reactExports.useContext(Kt);
}, Jt = function(e3) {
  var r2 = e3.children, t2 = e3.condition, i2 = e3.wrapper;
  return t2 ? reactExports.cloneElement(i2, {}, r2) : r2;
};
Jt.propTypes = { children: K$2.node.isRequired, condition: K$2.bool.isRequired, wrapper: K$2.element.isRequired };
var Qt = { position: "relative" }, Zt = function(e3) {
  var r2 = e3.children, t2 = e3.theme, n2 = e3.renderWrapper, o2 = void 0 === n2 || n2, a2 = e3.isInteractive, s = void 0 === a2 || a2, l2 = e3.animate, d = e3.motionStiffness, u2 = e3.motionDamping, f2 = e3.motionConfig, h = reactExports.useRef(null);
  return jsx(Nt, { theme: t2, children: jsx($r, { animate: l2, stiffness: d, damping: u2, config: f2, children: jsx(M$1, { container: h, children: jsxs(Jt, { condition: o2, wrapper: jsx("div", { style: Qt, ref: h }), children: [r2, s && jsx(F, {})] }) }) }) });
};
Zt.propTypes = { children: K$2.element.isRequired, isInteractive: K$2.bool, renderWrapper: K$2.bool, theme: K$2.object, animate: K$2.bool, motionStiffness: K$2.number, motionDamping: K$2.number, motionConfig: K$2.string };
({ children: K$2.func.isRequired, isInteractive: K$2.bool, renderWrapper: K$2.bool, theme: K$2.object.isRequired, animate: K$2.bool.isRequired, motionStiffness: K$2.number, motionDamping: K$2.number, motionConfig: K$2.string });
var ti = function(e3) {
  var r2 = e3.children, t2 = Ft(), i2 = t2[0], n2 = t2[1], o2 = n2.width > 0 && n2.height > 0;
  return jsx("div", { ref: i2, style: { width: "100%", height: "100%" }, children: o2 && r2({ width: n2.width, height: n2.height }) });
};
ti.propTypes = { children: K$2.func.isRequired };
var ii = ["id", "colors"], ni = function(e3) {
  var r2 = e3.id, t2 = e3.colors, i2 = Lr(e3, ii);
  return jsx("linearGradient", Gr({ id: r2, x1: 0, x2: 0, y1: 0, y2: 1 }, i2, { children: t2.map(function(e4) {
    var r3 = e4.offset, t3 = e4.color, i3 = e4.opacity;
    return jsx("stop", { offset: r3 + "%", stopColor: t3, stopOpacity: void 0 !== i3 ? i3 : 1 }, r3);
  }) }));
};
ni.propTypes = { id: K$2.string.isRequired, colors: K$2.arrayOf(K$2.shape({ offset: K$2.number.isRequired, color: K$2.string.isRequired, opacity: K$2.number })).isRequired, gradientTransform: K$2.string };
var ai = { linearGradient: ni }, si = reactExports.memo(function(e3) {
  var r2 = e3.id, t2 = e3.background, i2 = e3.color, n2 = e3.size, o2 = e3.padding, a2 = e3.stagger, s = n2 + o2, l2 = n2 / 2, d = o2 / 2;
  return true === a2 && (s = 2 * n2 + 2 * o2), jsxs("pattern", { id: r2, width: s, height: s, patternUnits: "userSpaceOnUse", children: [jsx("rect", { width: s, height: s, fill: t2 }), jsx("circle", { cx: d + l2, cy: d + l2, r: l2, fill: i2 }), a2 && jsx("circle", { cx: 1.5 * o2 + n2 + l2, cy: 1.5 * o2 + n2 + l2, r: l2, fill: i2 })] });
});
si.displayName = "PatternDots", si.propTypes = { id: K$2.string.isRequired, color: K$2.string.isRequired, background: K$2.string.isRequired, size: K$2.number.isRequired, padding: K$2.number.isRequired, stagger: K$2.bool.isRequired }, si.defaultProps = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: false };
var ui = function(e3) {
  return e3 * Math.PI / 180;
}, yi = { svg: { align: { left: "start", center: "middle", right: "end", start: "start", middle: "middle", end: "end" }, baseline: { top: "text-before-edge", center: "central", bottom: "alphabetic" } }, canvas: { align: { left: "left", center: "center", right: "right", start: "left", middle: "center", end: "right" }, baseline: { top: "top", center: "middle", bottom: "bottom" } } }, Ri = reactExports.memo(function(e3) {
  var r2 = e3.id, t2 = e3.spacing, i2 = e3.rotation, n2 = e3.background, o2 = e3.color, a2 = e3.lineWidth, s = Math.round(i2) % 360, l2 = Math.abs(t2);
  s > 180 ? s -= 360 : s > 90 ? s -= 180 : s < -180 ? s += 360 : s < -90 && (s += 180);
  var d, u2 = l2, f2 = l2;
  return 0 === s ? d = "\n                M 0 0 L " + u2 + " 0\n                M 0 " + f2 + " L " + u2 + " " + f2 + "\n            " : 90 === s ? d = "\n                M 0 0 L 0 " + f2 + "\n                M " + u2 + " 0 L " + u2 + " " + f2 + "\n            " : (u2 = Math.abs(l2 / Math.sin(ui(s))), f2 = l2 / Math.sin(ui(90 - s)), d = s > 0 ? "\n                    M 0 " + -f2 + " L " + 2 * u2 + " " + f2 + "\n                    M " + -u2 + " " + -f2 + " L " + u2 + " " + f2 + "\n                    M " + -u2 + " 0 L " + u2 + " " + 2 * f2 + "\n                " : "\n                    M " + -u2 + " " + f2 + " L " + u2 + " " + -f2 + "\n                    M " + -u2 + " " + 2 * f2 + " L " + 2 * u2 + " " + -f2 + "\n                    M 0 " + 2 * f2 + " L " + 2 * u2 + " 0\n                "), jsxs("pattern", { id: r2, width: u2, height: f2, patternUnits: "userSpaceOnUse", children: [jsx("rect", { width: u2, height: f2, fill: n2, stroke: "rgba(255, 0, 0, 0.1)", strokeWidth: 0 }), jsx("path", { d, strokeWidth: a2, stroke: o2, strokeLinecap: "square" })] });
});
Ri.displayName = "PatternLines", Ri.propTypes = { id: K$2.string.isRequired, spacing: K$2.number.isRequired, rotation: K$2.number.isRequired, background: K$2.string.isRequired, color: K$2.string.isRequired, lineWidth: K$2.number.isRequired }, Ri.defaultProps = { spacing: 5, rotation: 0, color: "#000000", background: "#ffffff", lineWidth: 2 };
var ki = reactExports.memo(function(e3) {
  var r2 = e3.id, t2 = e3.background, i2 = e3.color, n2 = e3.size, o2 = e3.padding, a2 = e3.stagger, s = n2 + o2, l2 = o2 / 2;
  return true === a2 && (s = 2 * n2 + 2 * o2), jsxs("pattern", { id: r2, width: s, height: s, patternUnits: "userSpaceOnUse", children: [jsx("rect", { width: s, height: s, fill: t2 }), jsx("rect", { x: l2, y: l2, width: n2, height: n2, fill: i2 }), a2 && jsx("rect", { x: 1.5 * o2 + n2, y: 1.5 * o2 + n2, width: n2, height: n2, fill: i2 })] });
});
ki.displayName = "PatternSquares", ki.propTypes = { id: K$2.string.isRequired, color: K$2.string.isRequired, background: K$2.string.isRequired, size: K$2.number.isRequired, padding: K$2.number.isRequired, stagger: K$2.bool.isRequired }, ki.defaultProps = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: false };
var wi = { patternDots: si, patternLines: Ri, patternSquares: ki }, xi = ["type"], Oi = Gr({}, ai, wi), Ci = function(e3) {
  var r2 = e3.defs;
  return !r2 || r2.length < 1 ? null : jsx("defs", { "aria-hidden": true, children: r2.map(function(e4) {
    var r3 = e4.type, t2 = Lr(e4, xi);
    return Oi[r3] ? reactExports.createElement(Oi[r3], Gr({ key: t2.id }, t2)) : null;
  }) });
};
Ci.propTypes = { defs: K$2.arrayOf(K$2.shape({ type: K$2.oneOf(Object.keys(Oi)).isRequired, id: K$2.string.isRequired })) };
var Wi = reactExports.memo(Ci), Si = function(e3) {
  var r2 = e3.width, t2 = e3.height, i2 = e3.margin, n2 = e3.defs, o2 = e3.children, a2 = e3.role, s = e3.ariaLabel, l2 = e3.ariaLabelledBy, d = e3.ariaDescribedBy, u2 = e3.isFocusable, f2 = Vt();
  return jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: r2, height: t2, role: a2, "aria-label": s, "aria-labelledby": l2, "aria-describedby": d, focusable: u2, tabIndex: u2 ? 0 : void 0, children: [jsx(Wi, { defs: n2 }), jsx("rect", { width: r2, height: t2, fill: f2.background }), jsx("g", { transform: "translate(" + i2.left + "," + i2.top + ")", children: o2 })] });
};
Si.propTypes = { width: K$2.number.isRequired, height: K$2.number.isRequired, margin: K$2.shape({ top: K$2.number.isRequired, left: K$2.number.isRequired }).isRequired, defs: K$2.array, children: K$2.oneOfType([K$2.arrayOf(K$2.node), K$2.node]).isRequired, role: K$2.string, isFocusable: K$2.bool, ariaLabel: K$2.string, ariaLabelledBy: K$2.string, ariaDescribedBy: K$2.string };
var zi = function(e3) {
  var r2 = e3.size, t2 = e3.color, i2 = e3.borderWidth, n2 = e3.borderColor;
  return jsx("circle", { r: r2 / 2, fill: t2, stroke: n2, strokeWidth: i2, style: { pointerEvents: "none" } });
};
zi.propTypes = { size: K$2.number.isRequired, color: K$2.string.isRequired, borderWidth: K$2.number.isRequired, borderColor: K$2.string.isRequired };
var Pi = reactExports.memo(zi), Ti = function(e3) {
  var r2 = e3.x, t2 = e3.y, i2 = e3.symbol, n2 = void 0 === i2 ? Pi : i2, o2 = e3.size, a2 = e3.datum, s = e3.color, l2 = e3.borderWidth, u2 = e3.borderColor, f2 = e3.label, c6 = e3.labelTextAnchor, p2 = void 0 === c6 ? "middle" : c6, h = e3.labelYOffset, g2 = void 0 === h ? -12 : h, m2 = Vt(), b2 = tt(), y2 = b2.animate, v2 = b2.config, R2 = useSpring({ transform: "translate(" + r2 + ", " + t2 + ")", config: v2, immediate: !y2 });
  return jsxs(animated.g, { transform: R2.transform, style: { pointerEvents: "none" }, children: [reactExports.createElement(n2, { size: o2, color: s, datum: a2, borderWidth: l2, borderColor: u2 }), f2 && jsx("text", { textAnchor: p2, y: g2, style: m2.dots.text, children: f2 })] });
};
Ti.propTypes = { x: K$2.number.isRequired, y: K$2.number.isRequired, datum: K$2.object.isRequired, size: K$2.number.isRequired, color: K$2.string.isRequired, borderWidth: K$2.number.isRequired, borderColor: K$2.string.isRequired, symbol: K$2.oneOfType([K$2.func, K$2.object]), label: K$2.oneOfType([K$2.string, K$2.number]), labelTextAnchor: K$2.oneOf(["start", "middle", "end"]), labelYOffset: K$2.number };
var Mi = reactExports.memo(Ti), ji = function(e3) {
  var r2 = e3.width, t2 = e3.height, i2 = e3.axis, n2 = e3.scale, o2 = e3.value, a2 = e3.lineStyle, s = e3.textStyle, l2 = e3.legend, d = e3.legendPosition, u2 = e3.legendOffsetX, f2 = e3.legendOffsetY, c6 = e3.legendOrientation, p2 = Vt(), h = 0, g2 = 0, m2 = 0, b2 = 0;
  "y" === i2 ? (m2 = n2(o2), g2 = r2) : (h = n2(o2), b2 = t2);
  var y2 = null;
  if (l2) {
    var v2 = function(e4) {
      var r3 = e4.axis, t3 = e4.width, i3 = e4.height, n3 = e4.position, o3 = e4.offsetX, a3 = e4.offsetY, s2 = e4.orientation, l3 = 0, d2 = 0, u3 = "vertical" === s2 ? -90 : 0, f3 = "start";
      if ("x" === r3)
        switch (n3) {
          case "top-left":
            l3 = -o3, d2 = a3, f3 = "end";
            break;
          case "top":
            d2 = -a3, f3 = "horizontal" === s2 ? "middle" : "start";
            break;
          case "top-right":
            l3 = o3, d2 = a3, f3 = "horizontal" === s2 ? "start" : "end";
            break;
          case "right":
            l3 = o3, d2 = i3 / 2, f3 = "horizontal" === s2 ? "start" : "middle";
            break;
          case "bottom-right":
            l3 = o3, d2 = i3 - a3, f3 = "start";
            break;
          case "bottom":
            d2 = i3 + a3, f3 = "horizontal" === s2 ? "middle" : "end";
            break;
          case "bottom-left":
            d2 = i3 - a3, l3 = -o3, f3 = "horizontal" === s2 ? "end" : "start";
            break;
          case "left":
            l3 = -o3, d2 = i3 / 2, f3 = "horizontal" === s2 ? "end" : "middle";
        }
      else
        switch (n3) {
          case "top-left":
            l3 = o3, d2 = -a3, f3 = "start";
            break;
          case "top":
            l3 = t3 / 2, d2 = -a3, f3 = "horizontal" === s2 ? "middle" : "start";
            break;
          case "top-right":
            l3 = t3 - o3, d2 = -a3, f3 = "horizontal" === s2 ? "end" : "start";
            break;
          case "right":
            l3 = t3 + o3, f3 = "horizontal" === s2 ? "start" : "middle";
            break;
          case "bottom-right":
            l3 = t3 - o3, d2 = a3, f3 = "end";
            break;
          case "bottom":
            l3 = t3 / 2, d2 = a3, f3 = "horizontal" === s2 ? "middle" : "end";
            break;
          case "bottom-left":
            l3 = o3, d2 = a3, f3 = "horizontal" === s2 ? "start" : "end";
            break;
          case "left":
            l3 = -o3, f3 = "horizontal" === s2 ? "end" : "middle";
        }
      return { x: l3, y: d2, rotation: u3, textAnchor: f3 };
    }({ axis: i2, width: r2, height: t2, position: d, offsetX: u2, offsetY: f2, orientation: c6 });
    y2 = jsx("text", { transform: "translate(" + v2.x + ", " + v2.y + ") rotate(" + v2.rotation + ")", textAnchor: v2.textAnchor, dominantBaseline: "central", style: s, children: l2 });
  }
  return jsxs("g", { transform: "translate(" + h + ", " + m2 + ")", children: [jsx("line", { x1: 0, x2: g2, y1: 0, y2: b2, stroke: p2.markers.lineColor, strokeWidth: p2.markers.lineStrokeWidth, style: a2 }), y2] });
};
ji.propTypes = { width: K$2.number.isRequired, height: K$2.number.isRequired, axis: K$2.oneOf(["x", "y"]).isRequired, scale: K$2.func.isRequired, value: K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]).isRequired, lineStyle: K$2.object, textStyle: K$2.object, legend: K$2.string, legendPosition: K$2.oneOf(["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"]), legendOffsetX: K$2.number.isRequired, legendOffsetY: K$2.number.isRequired, legendOrientation: K$2.oneOf(["horizontal", "vertical"]).isRequired }, ji.defaultProps = { legendPosition: "top-right", legendOffsetX: 14, legendOffsetY: 14, legendOrientation: "horizontal" };
var Di = reactExports.memo(ji), Gi = function(e3) {
  var r2 = e3.markers, t2 = e3.width, i2 = e3.height, n2 = e3.xScale, o2 = e3.yScale;
  return r2 && 0 !== r2.length ? r2.map(function(e4, r3) {
    return jsx(Di, Gr({}, e4, { width: t2, height: i2, scale: "y" === e4.axis ? o2 : n2 }), r3);
  }) : null;
};
Gi.propTypes = { width: K$2.number.isRequired, height: K$2.number.isRequired, xScale: K$2.func.isRequired, yScale: K$2.func.isRequired, markers: K$2.arrayOf(K$2.shape({ axis: K$2.oneOf(["x", "y"]).isRequired, value: K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]).isRequired, lineStyle: K$2.object, textStyle: K$2.object })) };
var Bi = reactExports.memo(Gi), Ai = ["theme", "renderWrapper", "animate", "motionStiffness", "motionDamping", "motionConfig"], Fi = function(e3) {
  return function(r2) {
    var t2, i2;
    function n2() {
      return r2.apply(this, arguments) || this;
    }
    return i2 = r2, (t2 = n2).prototype = Object.create(i2.prototype), t2.prototype.constructor = t2, Br(t2, i2), n2.prototype.render = function() {
      var r3 = this.props, t3 = r3.theme, i3 = r3.renderWrapper, n3 = r3.animate, o2 = r3.motionStiffness, a2 = r3.motionDamping, s = r3.motionConfig, l2 = Lr(r3, Ai);
      return jsx(Zt, { theme: t3, renderWrapper: i3, isInteractive: l2.isInteractive, animate: n3, motionStiffness: o2, motionDamping: a2, motionConfig: s, children: jsx(e3, Gr({}, l2)) });
    }, n2;
  }(reactExports.Component);
}, Ei = function(e3, r2) {
  var t2, i2 = Qe$1(e3) ? e3 : function(r3) {
    return we$1(r3, e3);
  };
  return r2 && (t2 = Qe$1(r2) ? r2 : format$1(r2)), t2 ? function(e4) {
    return t2(i2(e4));
  } : i2;
}, Ji = function(e3, r2, t2, i2, n2, o2) {
  return e3 <= n2 && n2 <= e3 + t2 && r2 <= o2 && o2 <= r2 + i2;
}, Qi = function(e3, r2) {
  var t2 = r2.clientX, i2 = r2.clientY, n2 = e3.getBoundingClientRect(), o2 = e3.getBBox(), a2 = o2.width === n2.width ? 1 : o2.width / n2.width;
  return [(t2 - n2.left) * a2, (i2 - n2.top) * a2];
}, Zi = Object.keys(ai), $i = Object.keys(wi), en$1 = function(e3, r2, t2) {
  if ("*" === e3)
    return true;
  if (Qe$1(e3))
    return e3(r2);
  if (_e(e3)) {
    var i2 = t2 ? we$1(r2, t2) : r2;
    return Mr(Dr(i2, Object.keys(e3)), e3);
  }
  return false;
}, rn$1 = function(e3, r2, t2, i2) {
  var n2 = void 0 === i2 ? {} : i2, o2 = n2.dataKey, a2 = n2.colorKey, s = void 0 === a2 ? "color" : a2, l2 = n2.targetKey, d = void 0 === l2 ? "fill" : l2, u2 = [], f2 = {};
  return e3.length && r2.length && (u2 = [].concat(e3), r2.forEach(function(r3) {
    for (var i3 = function(i4) {
      var n4 = t2[i4], a3 = n4.id, l3 = n4.match;
      if (en$1(l3, r3, o2)) {
        var c6 = e3.find(function(e4) {
          return e4.id === a3;
        });
        if (c6) {
          if ($i.includes(c6.type))
            if ("inherit" === c6.background || "inherit" === c6.color) {
              var p2 = we$1(r3, s), h = c6.background, g2 = c6.color, m2 = a3;
              "inherit" === c6.background && (m2 = m2 + ".bg." + p2, h = p2), "inherit" === c6.color && (m2 = m2 + ".fg." + p2, g2 = p2), v$4(r3, d, "url(#" + m2 + ")"), f2[m2] || (u2.push(Gr({}, c6, { id: m2, background: h, color: g2 })), f2[m2] = 1);
            } else
              v$4(r3, d, "url(#" + a3 + ")");
          else if (Zi.includes(c6.type)) {
            if (c6.colors.map(function(e4) {
              return e4.color;
            }).includes("inherit")) {
              var b2 = we$1(r3, s), R2 = a3, q = Gr({}, c6, { colors: c6.colors.map(function(e4, r4) {
                return "inherit" !== e4.color ? e4 : (R2 = R2 + "." + r4 + "." + b2, Gr({}, e4, { color: "inherit" === e4.color ? b2 : e4.color }));
              }) });
              q.id = R2, v$4(r3, d, "url(#" + R2 + ")"), f2[R2] || (u2.push(q), f2[R2] = 1);
            } else
              v$4(r3, d, "url(#" + a3 + ")");
          }
        }
        return "break";
      }
    }, n3 = 0; n3 < t2.length; n3++) {
      if ("break" === i3(n3))
        break;
    }
  })), u2;
};
function qe$1() {
  return qe$1 = Object.assign || function(e3) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var t2 in n2)
        Object.prototype.hasOwnProperty.call(n2, t2) && (e3[t2] = n2[t2]);
    }
    return e3;
  }, qe$1.apply(this, arguments);
}
function Se$1(e3, r2) {
  (null == r2 || r2 > e3.length) && (r2 = e3.length);
  for (var n2 = 0, t2 = new Array(r2); n2 < r2; n2++)
    t2[n2] = e3[n2];
  return t2;
}
function Re$1(e3, r2) {
  var n2 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
  if (n2)
    return (n2 = n2.call(e3)).next.bind(n2);
  if (Array.isArray(e3) || (n2 = function(e4, r3) {
    if (e4) {
      if ("string" == typeof e4)
        return Se$1(e4, r3);
      var n3 = Object.prototype.toString.call(e4).slice(8, -1);
      return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e4) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? Se$1(e4, r3) : void 0;
    }
  }(e3)) || r2 && e3 && "number" == typeof e3.length) {
    n2 && (e3 = n2);
    var t2 = 0;
    return function() {
      return t2 >= e3.length ? { done: true } : { done: false, value: e3[t2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var Ce$1 = { nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: e, accent: r$1, dark2: n$1, paired: t$1, pastel1: o, pastel2: i, set1: u$1, set2: a$1, set3: l }, Ge$1 = Object.keys(Ce$1), Ve$1 = { brown_blueGreen: scheme$q, purpleRed_green: scheme$p, pink_yellowGreen: scheme$o, purple_orange: scheme$n, red_blue: scheme$m, red_grey: scheme$l, red_yellow_blue: scheme$k, red_yellow_green: scheme$j, spectral: scheme$i }, Te$1 = Object.keys(Ve$1), Pe$1 = { brown_blueGreen: b$3, purpleRed_green: v$2, pink_yellowGreen: _$1, purple_orange: w$2, red_blue: O$3, red_grey: k$3, red_yellow_blue: z$2, red_yellow_green: A$1, spectral: j }, Ue = { blues: scheme$5, greens: scheme$4, greys: scheme$3, oranges: scheme, purples: scheme$2, reds: scheme$1, blue_green: scheme$h, blue_purple: scheme$g, green_blue: scheme$f, orange_red: scheme$e, purple_blue_green: scheme$d, purple_blue: scheme$c, purple_red: scheme$b, red_purple: scheme$a, yellow_green_blue: scheme$9, yellow_green: scheme$8, yellow_orange_brown: scheme$7, yellow_orange_red: scheme$6 }, De = Object.keys(Ue), Me$1 = { blues: J$1, greens: K$1, greys: L$1, oranges: N$1, purples: Q$1, reds: W$2, turbo: X$3, viridis: Y$3, inferno, magma, plasma, cividis: ne$1, warm, cool, cubehelixDefault: ie$1, blue_green: ue$1, blue_purple: ae$1, green_blue: le$1, orange_red: se$1, purple_blue_green: ce$1, purple_blue: fe$1, purple_red: pe$1, red_purple: de$1, yellow_green_blue: me$1, yellow_green: he$1, yellow_orange_brown: ge$1, yellow_orange_red: ye$1 }, $e = qe$1({}, Ce$1, Ve$1, Ue), Be$1 = Object.keys($e), Fe$1 = function(e3) {
  return Ge$1.includes(e3);
}, He = function(e3) {
  return Te$1.includes(e3);
}, Je = function(e3) {
  return De.includes(e3);
}, Ke = { rainbow: be$1, sinebow: ve$1 };
qe$1({}, Pe$1, Me$1, Ke);
var Qe = function(e3, r2) {
  if ("function" == typeof e3)
    return e3;
  if (_e(e3)) {
    if (function(e4) {
      return void 0 !== e4.theme;
    }(e3)) {
      if (void 0 === r2)
        throw new Error("Unable to use color from theme as no theme was provided");
      var n2 = we$1(r2, e3.theme);
      if (void 0 === n2)
        throw new Error("Color from theme is undefined at path: '" + e3.theme + "'");
      return function() {
        return n2;
      };
    }
    if (function(e4) {
      return void 0 !== e4.from;
    }(e3)) {
      var t2 = function(r3) {
        return we$1(r3, e3.from);
      };
      if (Array.isArray(e3.modifiers)) {
        for (var o2, i2 = [], u2 = function() {
          var e4 = o2.value, r3 = e4[0], n3 = e4[1];
          if ("brighter" === r3)
            i2.push(function(e6) {
              return e6.brighter(n3);
            });
          else if ("darker" === r3)
            i2.push(function(e6) {
              return e6.darker(n3);
            });
          else {
            if ("opacity" !== r3)
              throw new Error("Invalid color modifier: '" + r3 + "', must be one of: 'brighter', 'darker', 'opacity'");
            i2.push(function(e6) {
              return e6.opacity = n3, e6;
            });
          }
        }, a2 = Re$1(e3.modifiers); !(o2 = a2()).done; )
          u2();
        return 0 === i2.length ? t2 : function(e4) {
          return i2.reduce(function(e6, r3) {
            return r3(e6);
          }, rgb$1(t2(e4))).toString();
        };
      }
      return t2;
    }
    throw new Error("Invalid color spec, you should either specify 'theme' or 'from' when using a config object");
  }
  return function() {
    return e3;
  };
}, We$1 = function(e3, r2) {
  return reactExports.useMemo(function() {
    return Qe(e3, r2);
  }, [e3, r2]);
}, Xe = K$2.oneOfType([K$2.func, K$2.arrayOf(K$2.string), K$2.shape({ scheme: K$2.oneOf(Be$1).isRequired, size: K$2.number }), K$2.shape({ datum: K$2.string.isRequired }), K$2.string]);
K$2.oneOfType([K$2.string, K$2.func, K$2.shape({ theme: K$2.string.isRequired }), K$2.shape({ from: K$2.string.isRequired, modifiers: K$2.arrayOf(K$2.array) })]);
var fr = function(e3, r2) {
  if ("function" == typeof e3)
    return e3;
  var n2 = "function" == typeof r2 ? r2 : function(e4) {
    return we$1(e4, r2);
  };
  if (Array.isArray(e3)) {
    var t2 = ordinal(e3), o2 = function(e4) {
      return t2(n2(e4));
    };
    return o2.scale = t2, o2;
  }
  if (_e(e3)) {
    if (function(e4) {
      return void 0 !== e4.datum;
    }(e3))
      return function(r3) {
        return we$1(r3, e3.datum);
      };
    if (function(e4) {
      return void 0 !== e4.scheme;
    }(e3)) {
      if (Fe$1(e3.scheme)) {
        var i2 = ordinal($e[e3.scheme]), u2 = function(e4) {
          return i2(n2(e4));
        };
        return u2.scale = i2, u2;
      }
      if (He(e3.scheme)) {
        if (void 0 !== e3.size && (e3.size < 3 || e3.size > 11))
          throw new Error("Invalid size '" + e3.size + "' for diverging color scheme '" + e3.scheme + "', must be between 3~11");
        var a2 = ordinal($e[e3.scheme][e3.size || 11]), l2 = function(e4) {
          return a2(n2(e4));
        };
        return l2.scale = a2, l2;
      }
      if (Je(e3.scheme)) {
        if (void 0 !== e3.size && (e3.size < 3 || e3.size > 9))
          throw new Error("Invalid size '" + e3.size + "' for sequential color scheme '" + e3.scheme + "', must be between 3~9");
        var s = ordinal($e[e3.scheme][e3.size || 9]), c6 = function(e4) {
          return s(n2(e4));
        };
        return c6.scale = s, c6;
      }
    }
    throw new Error("Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property");
  }
  return function() {
    return e3;
  };
}, pr = function(e3, r2) {
  return reactExports.useMemo(function() {
    return fr(e3, r2);
  }, [e3, r2]);
};
function formatDecimal(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p2) {
  if ((i2 = (x2 = p2 ? x2.toExponential(p2 - 1) : x2.toExponential()).indexOf("e")) < 0)
    return null;
  var i2, coefficient = x2.slice(0, i2);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i2 + 1)
  ];
}
function exponent(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i2 = value.length, t2 = [], j2 = 0, g2 = grouping[0], length = 0;
    while (i2 > 0 && g2 > 0) {
      if (length + g2 + 1 > width)
        g2 = Math.max(1, width - length);
      t2.push(value.substring(i2 -= g2, i2 + g2));
      if ((length += g2 + 1) > width)
        break;
      g2 = grouping[j2 = (j2 + 1) % grouping.length];
    }
    return t2.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i2) {
      return numerals[+i2];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out:
    for (var n2 = s.length, i2 = 1, i0 = -1, i1; i2 < n2; ++i2) {
      switch (s[i2]) {
        case ".":
          i0 = i1 = i2;
          break;
        case "0":
          if (i0 === 0)
            i0 = i2;
          i1 = i2;
          break;
        default:
          if (!+s[i2])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x2, p2) {
  var d = formatDecimalParts(x2, p2);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent2 = d[1], i2 = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n2 = coefficient.length;
  return i2 === n2 ? coefficient : i2 > n2 ? coefficient + new Array(i2 - n2 + 1).join("0") : i2 > 0 ? coefficient.slice(0, i2) + "." + coefficient.slice(i2) : "0." + new Array(1 - i2).join("0") + formatDecimalParts(x2, Math.max(0, p2 + i2 - 1))[0];
}
function formatRounded(x2, p2) {
  var d = formatDecimalParts(x2, p2);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes = {
  "%": function(x2, p2) {
    return (x2 * 100).toFixed(p2);
  },
  "b": function(x2) {
    return Math.round(x2).toString(2);
  },
  "c": function(x2) {
    return x2 + "";
  },
  "d": formatDecimal,
  "e": function(x2, p2) {
    return x2.toExponential(p2);
  },
  "f": function(x2, p2) {
    return x2.toFixed(p2);
  },
  "g": function(x2, p2) {
    return x2.toPrecision(p2);
  },
  "o": function(x2) {
    return Math.round(x2).toString(8);
  },
  "p": function(x2, p2) {
    return formatRounded(x2 * 100, p2);
  },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x2) {
    return Math.round(x2).toString(16).toUpperCase();
  },
  "x": function(x2) {
    return Math.round(x2).toString(16);
  }
};
function identity(x2) {
  return x2;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "-" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix2, valueSuffix = suffix, i2, n2, c6;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim(value);
        if (valueNegative && +value === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i2 = -1, n2 = value.length;
          while (++i2 < n2) {
            if (c6 = value.charCodeAt(i2), 48 > c6 || c6 > 57) {
              valueSuffix = (c6 === 46 ? decimal + value.slice(i2 + 1) : value.slice(i2)) + valueSuffix;
              value = value.slice(0, i2);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f2 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e3 = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k2 = Math.pow(10, -e3), prefix2 = prefixes[8 + e3 / 3];
    return function(value2) {
      return f2(k2 * value2) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  locale.formatPrefix;
  return locale;
}
function noop$1() {
}
var noop_1 = noop$1;
var Set$1 = _Set, noop = noop_1, setToArray$1 = _setToArray;
var INFINITY = 1 / 0;
var createSet$1 = !(Set$1 && 1 / setToArray$1(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};
var _createSet = createSet$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, cacheHas = _cacheHas, createSet = _createSet, setToArray = _setToArray;
var LARGE_ARRAY_SIZE = 200;
function baseUniq$2(array, iteratee, comparator) {
  var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var _baseUniq = baseUniq$2;
var baseUniq$1 = _baseUniq;
function uniq(array) {
  return array && array.length ? baseUniq$1(array) : [];
}
var uniq_1 = uniq;
const n = /* @__PURE__ */ getDefaultExportFromCjs(uniq_1);
var baseIteratee = _baseIteratee, baseUniq = _baseUniq;
function uniqBy(array, iteratee) {
  return array && array.length ? baseUniq(array, baseIteratee(iteratee)) : [];
}
var uniqBy_1 = uniqBy;
const t = /* @__PURE__ */ getDefaultExportFromCjs(uniqBy_1);
var baseFlatten = _baseFlatten, baseOrderBy = _baseOrderBy, baseRest = _baseRest, isIterateeCall = _isIterateeCall;
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});
var sortBy_1 = sortBy;
const r = /* @__PURE__ */ getDefaultExportFromCjs(sortBy_1);
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var dateTag = "[object Date]";
function baseIsDate$1(value) {
  return isObjectLike(value) && baseGetTag(value) == dateTag;
}
var _baseIsDate = baseIsDate$1;
var baseIsDate = _baseIsDate, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsDate = nodeUtil && nodeUtil.isDate;
var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
var isDate_1 = isDate;
const a = /* @__PURE__ */ getDefaultExportFromCjs(isDate_1);
var t0 = /* @__PURE__ */ new Date(), t1 = /* @__PURE__ */ new Date();
function newInterval(floori, offseti, count, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = function(date2) {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = function(date2) {
    var d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = function(date2, step) {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = function(start2, stop2, step) {
    var range = [], previous;
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop2) || !(step > 0))
      return range;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop2);
    return range;
  };
  interval.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count) {
    interval.count = function(start2, end) {
      t0.setTime(+start2), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
        return field(d) % step === 0;
      } : function(d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }
  return interval;
}
var millisecond = newInterval(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start2, end) {
  return end - start2;
});
millisecond.every = function(k2) {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0))
    return null;
  if (!(k2 > 1))
    return millisecond;
  return newInterval(function(date2) {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k2);
  }, function(start2, end) {
    return (end - start2) / k2;
  });
};
const p$2 = millisecond;
millisecond.range;
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationWeek = 6048e5;
var second = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond);
}, function(start2, end) {
  return (end - start2) / durationSecond;
}, function(date2) {
  return date2.getUTCSeconds();
});
const g$1 = second;
second.range;
var minute = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getMinutes();
});
const x$2 = minute;
minute.range;
var hour = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getHours();
});
const T$2 = hour;
hour.range;
function weekday(i2) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i2) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
sunday.range;
monday.range;
tuesday.range;
wednesday.range;
thursday.range;
friday.range;
saturday.range;
var month = newInterval(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
const N = month;
month.range;
var year = newInterval(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
const I = year;
year.range;
var utcMinute = newInterval(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getUTCMinutes();
});
const k$2 = utcMinute;
utcMinute.range;
var utcHour = newInterval(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getUTCHours();
});
const M = utcHour;
utcHour.range;
function utcWeekday(i2) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i2) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
utcSunday.range;
utcMonday.range;
utcTuesday.range;
utcWednesday.range;
utcThursday.range;
utcFriday.range;
utcSaturday.range;
var utcMonth = newInterval(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
const z$1 = utcMonth;
utcMonth.range;
var utcYear = newInterval(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
const P$2 = utcYear;
utcYear.range;
function $() {
  return $ = Object.assign || function(n2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = arguments[t2];
      for (var e3 in r2)
        Object.prototype.hasOwnProperty.call(r2, e3) && (n2[e3] = r2[e3]);
    }
    return n2;
  }, $.apply(this, arguments);
}
var J = [function(n2) {
  return n2.setMilliseconds(0);
}, function(n2) {
  return n2.setSeconds(0);
}, function(n2) {
  return n2.setMinutes(0);
}, function(n2) {
  return n2.setHours(0);
}, function(n2) {
  return n2.setDate(1);
}, function(n2) {
  return n2.setMonth(0);
}], K = { millisecond: [], second: J.slice(0, 1), minute: J.slice(0, 2), hour: J.slice(0, 3), day: J.slice(0, 4), month: J.slice(0, 5), year: J.slice(0, 6) }, L = function(n2) {
  return function(t2) {
    return K[n2].forEach(function(n3) {
      n3(t2);
    }), t2;
  };
}, Q = function(n2) {
  var t2 = n2.format, r2 = void 0 === t2 ? "native" : t2, e3 = n2.precision, a2 = void 0 === e3 ? "millisecond" : e3, u2 = n2.useUTC, c6 = void 0 === u2 || u2, f2 = L(a2);
  return function(n3) {
    if (void 0 === n3)
      return n3;
    if ("native" === r2 || n3 instanceof Date)
      return f2(n3);
    var t3 = c6 ? utcParse(r2) : timeParse(r2);
    return f2(t3(n3));
  };
}, W$1 = function(n2, t2, r2, e3) {
  var a2, i2, o2, c6, f2 = n2.min, d = void 0 === f2 ? 0 : f2, s = n2.max, l2 = void 0 === s ? "auto" : s, m2 = n2.stacked, v2 = void 0 !== m2 && m2, y2 = n2.reverse, p2 = void 0 !== y2 && y2, h = n2.clamp, g2 = void 0 !== h && h, x2 = n2.nice, k2 = void 0 !== x2 && x2;
  "auto" === d ? a2 = true === v2 ? null != (i2 = t2.minStacked) ? i2 : 0 : t2.min : a2 = d;
  "auto" === l2 ? o2 = true === v2 ? null != (c6 = t2.maxStacked) ? c6 : 0 : t2.max : o2 = l2;
  var T2 = linear().rangeRound("x" === e3 ? [0, r2] : [r2, 0]).domain(p2 ? [o2, a2] : [a2, o2]).clamp(g2);
  return true === k2 ? T2.nice() : "number" == typeof k2 && T2.nice(k2), X$2(T2, v2);
}, X$2 = function(n2, t2) {
  void 0 === t2 && (t2 = false);
  var r2 = n2;
  return r2.type = "linear", r2.stacked = t2, r2;
}, Y$2 = function(n2, t2, r2) {
  var e3 = point$4().range([0, r2]).domain(t2.all);
  return e3.type = "point", e3;
}, _ = function(n2, t2, r2, e3) {
  var a2 = n2.round, i2 = void 0 === a2 || a2, o2 = band().range("x" === e3 ? [0, r2] : [r2, 0]).domain(t2.all).round(i2);
  return nn(o2);
}, nn = function(n2) {
  var t2 = n2;
  return t2.type = "band", t2;
}, tn = function(n2, t2, r2) {
  var e3, a2, i2 = n2.format, o2 = void 0 === i2 ? "native" : i2, u2 = n2.precision, c6 = void 0 === u2 ? "millisecond" : u2, f2 = n2.min, l2 = void 0 === f2 ? "auto" : f2, m2 = n2.max, v2 = void 0 === m2 ? "auto" : m2, y2 = n2.useUTC, p2 = void 0 === y2 || y2, h = n2.nice, g2 = void 0 !== h && h, x2 = Q({ format: o2, precision: c6, useUTC: p2 });
  e3 = "auto" === l2 ? x2(t2.min) : "native" !== o2 ? x2(l2) : l2, a2 = "auto" === v2 ? x2(t2.max) : "native" !== o2 ? x2(v2) : v2;
  var k2 = p2 ? utcTime() : time();
  k2.range([0, r2]), e3 && a2 && k2.domain([e3, a2]), true === g2 ? k2.nice() : "object" != typeof g2 && "number" != typeof g2 || k2.nice(g2);
  var T2 = k2;
  return T2.type = "time", T2.useUTC = p2, T2;
}, rn = function(n2, t2, r2, e3) {
  var a2, i2 = n2.base, o2 = void 0 === i2 ? 10 : i2, u2 = n2.min, c6 = void 0 === u2 ? "auto" : u2, f2 = n2.max, d = void 0 === f2 ? "auto" : f2;
  if (t2.all.some(function(n3) {
    return 0 === n3;
  }))
    throw new Error("a log scale domain must not include or cross zero");
  var s, m2, v2 = false;
  if (t2.all.filter(function(n3) {
    return null != n3;
  }).forEach(function(n3) {
    v2 || (void 0 === a2 ? a2 = Math.sign(n3) : Math.sign(n3) !== a2 && (v2 = true));
  }), v2)
    throw new Error("a log scale domain must be strictly-positive or strictly-negative");
  s = "auto" === c6 ? t2.min : c6, m2 = "auto" === d ? t2.max : d;
  var y2 = log().domain([s, m2]).rangeRound("x" === e3 ? [0, r2] : [r2, 0]).base(o2).nice();
  return y2.type = "log", y2;
}, en = function(n2, t2, r2, e3) {
  var a2, i2, o2 = n2.constant, u2 = void 0 === o2 ? 1 : o2, c6 = n2.min, f2 = void 0 === c6 ? "auto" : c6, d = n2.max, s = void 0 === d ? "auto" : d, l2 = n2.reverse, v2 = void 0 !== l2 && l2;
  a2 = "auto" === f2 ? t2.min : f2, i2 = "auto" === s ? t2.max : s;
  var y2 = symlog().constant(u2).rangeRound("x" === e3 ? [0, r2] : [r2, 0]).nice();
  true === v2 ? y2.domain([i2, a2]) : y2.domain([a2, i2]);
  var p2 = y2;
  return p2.type = "symlog", p2;
}, an = function(n2) {
  return "x" === n2 ? "y" : "x";
}, on = function(n2, t2) {
  return n2 === t2;
}, un = function(n2, t2) {
  return n2.getTime() === t2.getTime();
};
function cn(n2, t2, r2, e3) {
  switch (n2.type) {
    case "linear":
      return W$1(n2, t2, r2, e3);
    case "point":
      return Y$2(0, t2, r2);
    case "band":
      return _(n2, t2, r2, e3);
    case "time":
      return tn(n2, t2, r2);
    case "log":
      return rn(n2, t2, r2, e3);
    case "symlog":
      return en(n2, t2, r2, e3);
    default:
      throw new Error("invalid scale spec");
  }
}
var fn = function(n2, t2, r2) {
  var e3;
  if ("stacked" in r2 && r2.stacked) {
    var a2 = n2.data["x" === t2 ? "xStacked" : "yStacked"];
    return null == a2 ? null : r2(a2);
  }
  return null != (e3 = r2(n2.data[t2])) ? e3 : null;
}, dn = function(n2, t2, r2, e3, a2) {
  var i2 = n2.map(function(n3) {
    return function(n4) {
      return $({}, n4, { data: n4.data.map(function(n5) {
        return { data: $({}, n5) };
      }) });
    }(n3);
  }), o2 = sn(i2, t2, r2);
  "stacked" in t2 && true === t2.stacked && vn(o2, i2), "stacked" in r2 && true === r2.stacked && yn(o2, i2);
  var u2 = cn(t2, o2.x, e3, "x"), c6 = cn(r2, o2.y, a2, "y"), f2 = i2.map(function(n3) {
    return $({}, n3, { data: n3.data.map(function(n4) {
      return $({}, n4, { position: { x: fn(n4, "x", u2), y: fn(n4, "y", c6) } });
    }) });
  });
  return $({}, o2, { series: f2, xScale: u2, yScale: c6 });
}, sn = function(n2, t2, r2) {
  return { x: ln(n2, "x", t2), y: ln(n2, "y", r2) };
}, ln = function(a2, i2, o2, u2) {
  var c6 = void 0 === u2 ? {} : u2, f2 = c6.getValue, d = void 0 === f2 ? function(n2) {
    return n2.data[i2];
  } : f2, s = c6.setValue, l2 = void 0 === s ? function(n2, t2) {
    n2.data[i2] = t2;
  } : s;
  if ("linear" === o2.type)
    a2.forEach(function(n2) {
      n2.data.forEach(function(n3) {
        var t2 = d(n3);
        t2 && l2(n3, parseFloat(String(t2)));
      });
    });
  else if ("time" === o2.type && "native" !== o2.format) {
    var m2 = Q(o2);
    a2.forEach(function(n2) {
      n2.data.forEach(function(n3) {
        var t2 = d(n3);
        t2 && l2(n3, m2(t2));
      });
    });
  }
  var v2 = [];
  switch (a2.forEach(function(n2) {
    n2.data.forEach(function(n3) {
      v2.push(d(n3));
    });
  }), o2.type) {
    case "linear":
      var y2 = r(n(v2).filter(function(n2) {
        return null !== n2;
      }), function(n2) {
        return n2;
      });
      return { all: y2, min: Math.min.apply(Math, y2), max: Math.max.apply(Math, y2) };
    case "time":
      var p2 = t(v2, function(n2) {
        return n2.getTime();
      }).slice(0).sort(function(n2, t2) {
        return t2.getTime() - n2.getTime();
      }).reverse();
      return { all: p2, min: p2[0], max: e$1(p2) };
    default:
      var h = n(v2);
      return { all: h, min: h[0], max: e$1(h) };
  }
}, mn = function(n2, t2, r2) {
  var i2 = an(n2), o2 = [];
  t2[i2].all.forEach(function(t3) {
    var u2 = a(t3) ? un : on, c6 = [];
    r2.forEach(function(r3) {
      var a2 = r3.data.find(function(n3) {
        return u2(n3.data[i2], t3);
      }), f2 = null, d = null;
      if (void 0 !== a2) {
        if (null !== (f2 = a2.data[n2])) {
          var s = e$1(c6);
          void 0 === s ? d = f2 : null !== s && (d = s + f2);
        }
        a2.data["x" === n2 ? "xStacked" : "yStacked"] = d;
      }
      c6.push(d), null !== d && o2.push(d);
    });
  }), t2[n2].minStacked = Math.min.apply(Math, o2), t2[n2].maxStacked = Math.max.apply(Math, o2);
}, vn = function(n2, t2) {
  return mn("x", n2, t2);
}, yn = function(n2, t2) {
  return mn("y", n2, t2);
}, pn = function(n2) {
  var t2 = n2.bandwidth();
  if (0 === t2)
    return n2;
  var r2 = t2 / 2;
  return n2.round() && (r2 = Math.round(r2)), function(t3) {
    var e3;
    return (null != (e3 = n2(t3)) ? e3 : 0) + r2;
  };
}, hn = { millisecond: [p$2, p$2], second: [g$1, g$1], minute: [x$2, k$2], hour: [T$2, M], day: [newInterval(function(n2) {
  return n2.setHours(0, 0, 0, 0);
}, function(n2, t2) {
  return n2.setDate(n2.getDate() + t2);
}, function(n2, t2) {
  return (t2.getTime() - n2.getTime()) / 864e5;
}, function(n2) {
  return Math.floor(n2.getTime() / 864e5);
}), newInterval(function(n2) {
  return n2.setUTCHours(0, 0, 0, 0);
}, function(n2, t2) {
  return n2.setUTCDate(n2.getUTCDate() + t2);
}, function(n2, t2) {
  return (t2.getTime() - n2.getTime()) / 864e5;
}, function(n2) {
  return Math.floor(n2.getTime() / 864e5);
})], week: [sunday, utcSunday], sunday: [sunday, utcSunday], monday: [monday, utcMonday], tuesday: [tuesday, utcTuesday], wednesday: [wednesday, utcWednesday], thursday: [thursday, utcThursday], friday: [friday, utcFriday], saturday: [saturday, utcSaturday], month: [N, z$1], year: [I, P$2] }, gn = Object.keys(hn), xn = new RegExp("^every\\s*(\\d+)?\\s*(" + gn.join("|") + ")s?$", "i"), kn = function(n2, t2) {
  if (Array.isArray(t2))
    return t2;
  if ("string" == typeof t2 && "useUTC" in n2) {
    var r2 = t2.match(xn);
    if (r2) {
      var e3 = r2[1], a2 = r2[2], i2 = hn[a2][n2.useUTC ? 1 : 0];
      if ("day" === a2) {
        var o2, u2, c6 = n2.domain(), f2 = c6[0], d = c6[1], s = new Date(d);
        return s.setDate(s.getDate() + 1), null != (o2 = null == (u2 = i2.every(Number(null != e3 ? e3 : 1))) ? void 0 : u2.range(f2, s)) ? o2 : [];
      }
      if (void 0 === e3)
        return n2.ticks(i2);
      var l2 = i2.every(Number(e3));
      if (l2)
        return n2.ticks(l2);
    }
    throw new Error("Invalid tickValues: " + t2);
  }
  if ("ticks" in n2) {
    if (void 0 === t2)
      return n2.ticks();
    if ("number" == typeof (m2 = t2) && isFinite(m2) && Math.floor(m2) === m2)
      return n2.ticks(t2);
  }
  var m2;
  return n2.domain();
};
function v$1() {
  return v$1 = Object.assign || function(t2) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var i2 = arguments[e3];
      for (var n2 in i2)
        Object.prototype.hasOwnProperty.call(i2, n2) && (t2[n2] = i2[n2]);
    }
    return t2;
  }, v$1.apply(this, arguments);
}
var p$1 = function(t2) {
  var e3, i2 = t2.axis, n2 = t2.scale, r2 = t2.ticksPosition, a2 = t2.tickValues, o2 = t2.tickSize, s = t2.tickPadding, c6 = t2.tickRotation, f2 = t2.engine, x2 = void 0 === f2 ? "svg" : f2, u2 = kn(n2, a2), y2 = yi[x2], g2 = "bandwidth" in n2 ? pn(n2) : n2, k2 = { lineX: 0, lineY: 0 }, h = { textX: 0, textY: 0 }, p2 = "object" == typeof document && "rtl" === document.dir, b2 = y2.align.center, P2 = y2.baseline.center;
  return "x" === i2 ? (e3 = function(t3) {
    var e4;
    return { x: null != (e4 = g2(t3)) ? e4 : 0, y: 0 };
  }, k2.lineY = o2 * ("after" === r2 ? 1 : -1), h.textY = (o2 + s) * ("after" === r2 ? 1 : -1), P2 = "after" === r2 ? y2.baseline.top : y2.baseline.bottom, 0 === c6 ? b2 = y2.align.center : "after" === r2 && c6 < 0 || "before" === r2 && c6 > 0 ? (b2 = y2.align[p2 ? "left" : "right"], P2 = y2.baseline.center) : ("after" === r2 && c6 > 0 || "before" === r2 && c6 < 0) && (b2 = y2.align[p2 ? "right" : "left"], P2 = y2.baseline.center)) : (e3 = function(t3) {
    var e4;
    return { x: 0, y: null != (e4 = g2(t3)) ? e4 : 0 };
  }, k2.lineX = o2 * ("after" === r2 ? 1 : -1), h.textX = (o2 + s) * ("after" === r2 ? 1 : -1), b2 = "after" === r2 ? y2.align.left : y2.align.right), { ticks: u2.map(function(t3) {
    return v$1({ key: t3 instanceof Date ? "" + t3.valueOf() : "" + t3, value: t3 }, e3(t3), k2, h);
  }), textAlign: b2, textBaseline: P2 };
}, b$2 = function(t2, e3) {
  if (void 0 === t2 || "function" == typeof t2)
    return t2;
  if ("time" === e3.type) {
    var i2 = timeFormat(t2);
    return function(t3) {
      return i2(t3 instanceof Date ? t3 : new Date(t3));
    };
  }
  return format(t2);
}, P$1 = function(t2) {
  var e3, i2 = t2.width, n2 = t2.height, r2 = t2.scale, a2 = t2.axis, o2 = t2.values, l2 = (e3 = o2, Array.isArray(e3) ? o2 : void 0) || kn(r2, o2), s = "bandwidth" in r2 ? pn(r2) : r2, c6 = "x" === a2 ? l2.map(function(t3) {
    var e4, i3;
    return { key: t3 instanceof Date ? "" + t3.valueOf() : "" + t3, x1: null != (e4 = s(t3)) ? e4 : 0, x2: null != (i3 = s(t3)) ? i3 : 0, y1: 0, y2: n2 };
  }) : l2.map(function(t3) {
    var e4, n3;
    return { key: t3 instanceof Date ? "" + t3.valueOf() : "" + t3, x1: 0, x2: i2, y1: null != (e4 = s(t3)) ? e4 : 0, y2: null != (n3 = s(t3)) ? n3 : 0 };
  });
  return c6;
}, S$2 = reactExports.memo(function(t2) {
  var e3, n2 = t2.value, a2 = t2.format, o2 = t2.lineX, l2 = t2.lineY, c6 = t2.onClick, f2 = t2.textBaseline, x2 = t2.textAnchor, u2 = t2.animatedProps, d = Vt(), m2 = null != (e3 = null == a2 ? void 0 : a2(n2)) ? e3 : n2, k2 = reactExports.useMemo(function() {
    var t3 = { opacity: u2.opacity };
    return c6 ? { style: v$1({}, t3, { cursor: "pointer" }), onClick: function(t4) {
      return c6(t4, m2);
    } } : { style: t3 };
  }, [u2.opacity, c6, m2]);
  return jsxs(animated.g, v$1({ transform: u2.transform }, k2, { children: [jsx("line", { x1: 0, x2: o2, y1: 0, y2: l2, style: d.axis.ticks.line }), jsx(animated.text, { dominantBaseline: f2, textAnchor: x2, transform: u2.textTransform, style: d.axis.ticks.text, children: m2 })] }));
}), T$1 = reactExports.memo(function(e3) {
  var n2 = e3.axis, l2 = e3.scale, f2 = e3.x, x2 = void 0 === f2 ? 0 : f2, u2 = e3.y, d = void 0 === u2 ? 0 : u2, m2 = e3.length, k2 = e3.ticksPosition, h = e3.tickValues, P2 = e3.tickSize, T2 = void 0 === P2 ? 5 : P2, O2 = e3.tickPadding, w2 = void 0 === O2 ? 5 : O2, A2 = e3.tickRotation, X2 = void 0 === A2 ? 0 : A2, Y2 = e3.format, W2 = e3.renderTick, B2 = void 0 === W2 ? S$2 : W2, z2 = e3.legend, V2 = e3.legendPosition, C2 = void 0 === V2 ? "end" : V2, D2 = e3.legendOffset, R2 = void 0 === D2 ? 0 : D2, j2 = e3.onClick, E2 = e3.ariaHidden, q = Vt(), F2 = reactExports.useMemo(function() {
    return b$2(Y2, l2);
  }, [Y2, l2]), H2 = p$1({ axis: n2, scale: l2, ticksPosition: k2, tickValues: h, tickSize: T2, tickPadding: w2, tickRotation: X2 }), N2 = H2.ticks, I2 = H2.textAlign, G = H2.textBaseline, J2 = null;
  if (void 0 !== z2) {
    var K2, L2 = 0, M2 = 0, Q2 = 0;
    "y" === n2 ? (Q2 = -90, L2 = R2, "start" === C2 ? (K2 = "start", M2 = m2) : "middle" === C2 ? (K2 = "middle", M2 = m2 / 2) : "end" === C2 && (K2 = "end")) : (M2 = R2, "start" === C2 ? K2 = "start" : "middle" === C2 ? (K2 = "middle", L2 = m2 / 2) : "end" === C2 && (K2 = "end", L2 = m2)), J2 = jsx("text", { transform: "translate(" + L2 + ", " + M2 + ") rotate(" + Q2 + ")", textAnchor: K2, style: v$1({ dominantBaseline: "central" }, q.axis.legend.text), children: z2 });
  }
  var U = tt(), Z = U.animate, $2 = U.config, _2 = useSpring({ transform: "translate(" + x2 + "," + d + ")", lineX2: "x" === n2 ? m2 : 0, lineY2: "x" === n2 ? 0 : m2, config: $2, immediate: !Z }), tt$1 = useTransition(N2, { keys: function(t2) {
    return t2.key;
  }, initial: function(t2) {
    return { opacity: 1, transform: "translate(" + t2.x + "," + t2.y + ")", textTransform: "translate(" + t2.textX + "," + t2.textY + ") rotate(" + X2 + ")" };
  }, from: function(t2) {
    return { opacity: 0, transform: "translate(" + t2.x + "," + t2.y + ")", textTransform: "translate(" + t2.textX + "," + t2.textY + ") rotate(" + X2 + ")" };
  }, enter: function(t2) {
    return { opacity: 1, transform: "translate(" + t2.x + "," + t2.y + ")", textTransform: "translate(" + t2.textX + "," + t2.textY + ") rotate(" + X2 + ")" };
  }, update: function(t2) {
    return { opacity: 1, transform: "translate(" + t2.x + "," + t2.y + ")", textTransform: "translate(" + t2.textX + "," + t2.textY + ") rotate(" + X2 + ")" };
  }, leave: { opacity: 0 }, config: $2, immediate: !Z });
  return jsxs(animated.g, { transform: _2.transform, "aria-hidden": E2, children: [tt$1(function(e4, i2, n3, r2) {
    return reactExports.createElement(B2, v$1({ tickIndex: r2, format: F2, rotate: X2, textBaseline: G, textAnchor: I2, animatedProps: e4 }, i2, j2 ? { onClick: j2 } : {}));
  }), jsx(animated.line, { style: q.axis.domain.line, x1: 0, x2: _2.lineX2, y1: 0, y2: _2.lineY2 }), J2] });
}), O$2 = { ticksPosition: K$2.oneOf(["before", "after"]), tickValues: K$2.oneOfType([K$2.number, K$2.arrayOf(K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)])), K$2.string]), tickSize: K$2.number, tickPadding: K$2.number, tickRotation: K$2.number, format: K$2.oneOfType([K$2.func, K$2.string]), renderTick: K$2.func, legend: K$2.node, legendPosition: K$2.oneOf(["start", "middle", "end"]), legendOffset: K$2.number, ariaHidden: K$2.bool }, w$1 = K$2.shape(O$2), A = ["top", "right", "bottom", "left"], X$1 = reactExports.memo(function(t2) {
  var e3 = t2.xScale, i2 = t2.yScale, n2 = t2.width, r2 = t2.height, a2 = { top: t2.top, right: t2.right, bottom: t2.bottom, left: t2.left };
  return jsx(Fragment, { children: A.map(function(t3) {
    var o2 = a2[t3];
    if (!o2)
      return null;
    var l2 = "top" === t3 || "bottom" === t3;
    return jsx(T$1, v$1({}, o2, { axis: l2 ? "x" : "y", x: "right" === t3 ? n2 : 0, y: "bottom" === t3 ? r2 : 0, scale: l2 ? e3 : i2, length: l2 ? n2 : r2, ticksPosition: "top" === t3 || "left" === t3 ? "before" : "after" }), t3);
  }) });
}), Y$1 = reactExports.memo(function(t2) {
  var e3 = t2.animatedProps, i2 = Vt();
  return jsx(animated.line, v$1({}, e3, i2.grid.line));
}), W = reactExports.memo(function(t2) {
  var e3 = t2.lines, i2 = tt(), r2 = i2.animate, a2 = i2.config, l2 = useTransition(e3, { keys: function(t3) {
    return t3.key;
  }, initial: function(t3) {
    return { opacity: 1, x1: t3.x1, x2: t3.x2, y1: t3.y1, y2: t3.y2 };
  }, from: function(t3) {
    return { opacity: 0, x1: t3.x1, x2: t3.x2, y1: t3.y1, y2: t3.y2 };
  }, enter: function(t3) {
    return { opacity: 1, x1: t3.x1, x2: t3.x2, y1: t3.y1, y2: t3.y2 };
  }, update: function(t3) {
    return { opacity: 1, x1: t3.x1, x2: t3.x2, y1: t3.y1, y2: t3.y2 };
  }, leave: { opacity: 0 }, config: a2, immediate: !r2 });
  return jsx("g", { children: l2(function(t3, e4) {
    return reactExports.createElement(Y$1, v$1({}, e4, { key: e4.key, animatedProps: t3 }));
  }) });
}), B$1 = reactExports.memo(function(t2) {
  var e3 = t2.width, n2 = t2.height, r2 = t2.xScale, a2 = t2.yScale, o2 = t2.xValues, l2 = t2.yValues, s = reactExports.useMemo(function() {
    return !!r2 && P$1({ width: e3, height: n2, scale: r2, axis: "x", values: o2 });
  }, [r2, o2, e3, n2]), c6 = reactExports.useMemo(function() {
    return !!a2 && P$1({ width: e3, height: n2, scale: a2, axis: "y", values: l2 });
  }, [n2, e3, a2, l2]);
  return jsxs(Fragment, { children: [s && jsx(W, { lines: s }), c6 && jsx(W, { lines: c6 })] });
}), z = function(t2, e3) {
  var i2, n2 = e3.axis, r2 = e3.scale, a2 = e3.x, o2 = void 0 === a2 ? 0 : a2, l2 = e3.y, s = void 0 === l2 ? 0 : l2, c6 = e3.length, x2 = e3.ticksPosition, u2 = e3.tickValues, d = e3.tickSize, m2 = void 0 === d ? 5 : d, y2 = e3.tickPadding, g2 = void 0 === y2 ? 5 : y2, k2 = e3.tickRotation, h = void 0 === k2 ? 0 : k2, v2 = e3.format, b2 = e3.legend, P2 = e3.legendPosition, S2 = void 0 === P2 ? "end" : P2, T2 = e3.legendOffset, O2 = void 0 === T2 ? 0 : T2, w2 = e3.theme, A2 = p$1({ axis: n2, scale: r2, ticksPosition: x2, tickValues: u2, tickSize: m2, tickPadding: g2, tickRotation: h, engine: "canvas" }), X2 = A2.ticks, Y2 = A2.textAlign, W2 = A2.textBaseline;
  t2.save(), t2.translate(o2, s), t2.textAlign = Y2, t2.textBaseline = W2, t2.font = (w2.axis.ticks.text.fontWeight ? w2.axis.ticks.text.fontWeight + " " : "") + w2.axis.ticks.text.fontSize + "px " + w2.axis.ticks.text.fontFamily, (null != (i2 = w2.axis.domain.line.strokeWidth) ? i2 : 0) > 0 && (t2.lineWidth = Number(w2.axis.domain.line.strokeWidth), t2.lineCap = "square", w2.axis.domain.line.stroke && (t2.strokeStyle = w2.axis.domain.line.stroke), t2.beginPath(), t2.moveTo(0, 0), t2.lineTo("x" === n2 ? c6 : 0, "x" === n2 ? 0 : c6), t2.stroke());
  var B2 = "function" == typeof v2 ? v2 : function(t3) {
    return "" + t3;
  };
  if (X2.forEach(function(e4) {
    var i3;
    (null != (i3 = w2.axis.ticks.line.strokeWidth) ? i3 : 0) > 0 && (t2.lineWidth = Number(w2.axis.ticks.line.strokeWidth), t2.lineCap = "square", w2.axis.ticks.line.stroke && (t2.strokeStyle = w2.axis.ticks.line.stroke), t2.beginPath(), t2.moveTo(e4.x, e4.y), t2.lineTo(e4.x + e4.lineX, e4.y + e4.lineY), t2.stroke());
    var n3 = B2(e4.value);
    t2.save(), t2.translate(e4.x + e4.textX, e4.y + e4.textY), t2.rotate(ui(h)), w2.axis.ticks.text.fill && (t2.fillStyle = w2.axis.ticks.text.fill), t2.fillText(String(n3), 0, 0), t2.restore();
  }), void 0 !== b2) {
    var z2 = 0, V2 = 0, C2 = 0, D2 = "center";
    "y" === n2 ? (C2 = -90, z2 = O2, "start" === S2 ? (D2 = "start", V2 = c6) : "middle" === S2 ? (D2 = "center", V2 = c6 / 2) : "end" === S2 && (D2 = "end")) : (V2 = O2, "start" === S2 ? D2 = "start" : "middle" === S2 ? (D2 = "center", z2 = c6 / 2) : "end" === S2 && (D2 = "end", z2 = c6)), t2.translate(z2, V2), t2.rotate(ui(C2)), t2.font = (w2.axis.legend.text.fontWeight ? w2.axis.legend.text.fontWeight + " " : "") + w2.axis.legend.text.fontSize + "px " + w2.axis.legend.text.fontFamily, w2.axis.legend.text.fill && (t2.fillStyle = w2.axis.legend.text.fill), t2.textAlign = D2, t2.textBaseline = "middle", t2.fillText(b2, 0, 0);
  }
  t2.restore();
}, V = function(t2, e3) {
  var i2 = e3.xScale, n2 = e3.yScale, r2 = e3.width, a2 = e3.height, o2 = e3.top, l2 = e3.right, s = e3.bottom, c6 = e3.left, f2 = e3.theme, x2 = { top: o2, right: l2, bottom: s, left: c6 };
  A.forEach(function(e4) {
    var o3 = x2[e4];
    if (!o3)
      return null;
    var l3 = "top" === e4 || "bottom" === e4, s2 = "top" === e4 || "left" === e4 ? "before" : "after", c7 = l3 ? i2 : n2, u2 = b$2(o3.format, c7);
    z(t2, v$1({}, o3, { axis: l3 ? "x" : "y", x: "right" === e4 ? r2 : 0, y: "bottom" === e4 ? a2 : 0, scale: c7, format: u2, length: l3 ? r2 : a2, ticksPosition: s2, theme: f2 }));
  });
}, C = function(t2, e3) {
  var i2 = e3.width, n2 = e3.height, r2 = e3.scale, a2 = e3.axis, o2 = e3.values;
  P$1({ width: i2, height: n2, scale: r2, axis: a2, values: o2 }).forEach(function(e4) {
    t2.beginPath(), t2.moveTo(e4.x1, e4.y1), t2.lineTo(e4.x2, e4.y2), t2.stroke();
  });
};
var m = function(e3) {
  var i2 = e3.x, n2 = e3.y, o2 = e3.size, r2 = e3.fill, l2 = e3.opacity, a2 = void 0 === l2 ? 1 : l2, c6 = e3.borderWidth, s = void 0 === c6 ? 0 : c6, d = e3.borderColor;
  return jsx("circle", { r: o2 / 2, cx: i2 + o2 / 2, cy: n2 + o2 / 2, fill: r2, opacity: a2, strokeWidth: s, stroke: void 0 === d ? "transparent" : d, style: { pointerEvents: "none" } });
}, f = function(e3) {
  var i2 = e3.x, n2 = e3.y, o2 = e3.size, r2 = e3.fill, l2 = e3.opacity, a2 = void 0 === l2 ? 1 : l2, c6 = e3.borderWidth, s = void 0 === c6 ? 0 : c6, d = e3.borderColor;
  return jsx("g", { transform: "translate(" + i2 + "," + n2 + ")", children: jsx("path", { d: "\n                    M" + o2 / 2 + " 0\n                    L" + 0.8 * o2 + " " + o2 / 2 + "\n                    L" + o2 / 2 + " " + o2 + "\n                    L" + 0.2 * o2 + " " + o2 / 2 + "\n                    L" + o2 / 2 + " 0\n                ", fill: r2, opacity: a2, strokeWidth: s, stroke: void 0 === d ? "transparent" : d, style: { pointerEvents: "none" } }) });
}, u = function(e3) {
  var i2 = e3.x, n2 = e3.y, o2 = e3.size, r2 = e3.fill, l2 = e3.opacity, a2 = void 0 === l2 ? 1 : l2, c6 = e3.borderWidth, s = void 0 === c6 ? 0 : c6, d = e3.borderColor;
  return jsx("rect", { x: i2, y: n2, fill: r2, opacity: a2, strokeWidth: s, stroke: void 0 === d ? "transparent" : d, width: o2, height: o2, style: { pointerEvents: "none" } });
}, v = function(e3) {
  var i2 = e3.x, n2 = e3.y, o2 = e3.size, r2 = e3.fill, l2 = e3.opacity, a2 = void 0 === l2 ? 1 : l2, c6 = e3.borderWidth, s = void 0 === c6 ? 0 : c6, d = e3.borderColor;
  return jsx("g", { transform: "translate(" + i2 + "," + n2 + ")", children: jsx("path", { d: "\n                M" + o2 / 2 + " 0\n                L" + o2 + " " + o2 + "\n                L0 " + o2 + "\n                L" + o2 / 2 + " 0\n            ", fill: r2, opacity: a2, strokeWidth: s, stroke: void 0 === d ? "transparent" : d, style: { pointerEvents: "none" } }) });
};
function p() {
  return p = Object.assign || function(t2) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var i2 = arguments[e3];
      for (var n2 in i2)
        Object.prototype.hasOwnProperty.call(i2, n2) && (t2[n2] = i2[n2]);
    }
    return t2;
  }, p.apply(this, arguments);
}
var b$1 = { top: 0, right: 0, bottom: 0, left: 0 }, k$1 = function(t2) {
  var e3, i2 = t2.direction, n2 = t2.itemsSpacing, o2 = t2.padding, r2 = t2.itemCount, l2 = t2.itemWidth, a2 = t2.itemHeight;
  if ("number" != typeof o2 && ("object" != typeof (e3 = o2) || Array.isArray(e3) || null === e3))
    throw new Error("Invalid property padding, must be one of: number, object");
  var c6 = "number" == typeof o2 ? { top: o2, right: o2, bottom: o2, left: o2 } : p({}, b$1, o2), s = c6.left + c6.right, d = c6.top + c6.bottom, h = l2 + s, g2 = a2 + d, m2 = (r2 - 1) * n2;
  return "row" === i2 ? h = l2 * r2 + m2 + s : "column" === i2 && (g2 = a2 * r2 + m2 + d), { width: h, height: g2, padding: c6 };
}, x$1 = function(t2) {
  var e3 = t2.anchor, i2 = t2.translateX, n2 = t2.translateY, o2 = t2.containerWidth, r2 = t2.containerHeight, l2 = t2.width, a2 = t2.height, c6 = i2, s = n2;
  switch (e3) {
    case "top":
      c6 += (o2 - l2) / 2;
      break;
    case "top-right":
      c6 += o2 - l2;
      break;
    case "right":
      c6 += o2 - l2, s += (r2 - a2) / 2;
      break;
    case "bottom-right":
      c6 += o2 - l2, s += r2 - a2;
      break;
    case "bottom":
      c6 += (o2 - l2) / 2, s += r2 - a2;
      break;
    case "bottom-left":
      s += r2 - a2;
      break;
    case "left":
      s += (r2 - a2) / 2;
      break;
    case "center":
      c6 += (o2 - l2) / 2, s += (r2 - a2) / 2;
  }
  return { x: c6, y: s };
}, S$1 = function(t2) {
  var e3, i2, n2, o2, r2, l2, a2 = t2.direction, c6 = t2.justify, s = t2.symbolSize, d = t2.symbolSpacing, h = t2.width, g2 = t2.height;
  switch (a2) {
    case "left-to-right":
      e3 = 0, i2 = (g2 - s) / 2, o2 = g2 / 2, l2 = "central", c6 ? (n2 = h, r2 = "end") : (n2 = s + d, r2 = "start");
      break;
    case "right-to-left":
      e3 = h - s, i2 = (g2 - s) / 2, o2 = g2 / 2, l2 = "central", c6 ? (n2 = 0, r2 = "start") : (n2 = h - s - d, r2 = "end");
      break;
    case "top-to-bottom":
      e3 = (h - s) / 2, i2 = 0, n2 = h / 2, r2 = "middle", c6 ? (o2 = g2, l2 = "alphabetic") : (o2 = s + d, l2 = "text-before-edge");
      break;
    case "bottom-to-top":
      e3 = (h - s) / 2, i2 = g2 - s, n2 = h / 2, r2 = "middle", c6 ? (o2 = 0, l2 = "text-before-edge") : (o2 = g2 - s - d, l2 = "alphabetic");
  }
  return { symbolX: e3, symbolY: i2, labelX: n2, labelY: o2, labelAnchor: r2, labelAlignment: l2 };
}, O$1 = { circle: m, diamond: f, square: u, triangle: v }, B = function(i2) {
  var n2, r2, l2, c6, h, g2, m2, f2, u2, v2, y2, b2 = i2.x, k2 = i2.y, x2 = i2.width, A2 = i2.height, W2 = i2.data, z2 = i2.direction, C2 = void 0 === z2 ? "left-to-right" : z2, B2 = i2.justify, w2 = void 0 !== B2 && B2, X2 = i2.textColor, Y2 = i2.background, H2 = void 0 === Y2 ? "transparent" : Y2, E2 = i2.opacity, j2 = void 0 === E2 ? 1 : E2, T2 = i2.symbolShape, L2 = void 0 === T2 ? "square" : T2, M2 = i2.symbolSize, F2 = void 0 === M2 ? 16 : M2, P2 = i2.symbolSpacing, R2 = void 0 === P2 ? 8 : P2, q = i2.symbolBorderWidth, V2 = void 0 === q ? 0 : q, D2 = i2.symbolBorderColor, G = void 0 === D2 ? "transparent" : D2, I2 = i2.onClick, N2 = i2.onMouseEnter, _2 = i2.onMouseLeave, J2 = i2.toggleSerie, K2 = i2.effects, Q2 = reactExports.useState({}), U = Q2[0], Z = Q2[1], $2 = Vt(), tt2 = reactExports.useCallback(function(t2) {
    if (K2) {
      var e3 = K2.filter(function(t3) {
        return "hover" === t3.on;
      }).reduce(function(t3, e4) {
        return p({}, t3, e4.style);
      }, {});
      Z(e3);
    }
    null == N2 || N2(W2, t2);
  }, [N2, W2, K2]), et2 = reactExports.useCallback(function(t2) {
    if (K2) {
      var e3 = K2.filter(function(t3) {
        return "hover" !== t3.on;
      }).reduce(function(t3, e4) {
        return p({}, t3, e4.style);
      }, {});
      Z(e3);
    }
    null == _2 || _2(W2, t2);
  }, [_2, W2, K2]), it2 = S$1({ direction: C2, justify: w2, symbolSize: null != (n2 = U.symbolSize) ? n2 : F2, symbolSpacing: R2, width: x2, height: A2 }), nt2 = it2.symbolX, ot2 = it2.symbolY, rt2 = it2.labelX, lt = it2.labelY, at = it2.labelAnchor, ct = it2.labelAlignment, st = [I2, N2, _2, J2].some(function(t2) {
    return void 0 !== t2;
  }), dt = "function" == typeof L2 ? L2 : O$1[L2];
  return jsxs("g", { transform: "translate(" + b2 + "," + k2 + ")", style: { opacity: null != (r2 = U.itemOpacity) ? r2 : j2 }, children: [jsx("rect", { width: x2, height: A2, fill: null != (l2 = U.itemBackground) ? l2 : H2, style: { cursor: st ? "pointer" : "auto" }, onClick: function(t2) {
    null == I2 || I2(W2, t2), null == J2 || J2(W2.id);
  }, onMouseEnter: tt2, onMouseLeave: et2 }), reactExports.createElement(dt, p({ id: W2.id, x: nt2, y: ot2, size: null != (c6 = U.symbolSize) ? c6 : F2, fill: null != (h = null != (g2 = W2.fill) ? g2 : W2.color) ? h : "black", borderWidth: null != (m2 = U.symbolBorderWidth) ? m2 : V2, borderColor: null != (f2 = U.symbolBorderColor) ? f2 : G }, W2.hidden ? $2.legends.hidden.symbol : void 0)), jsx("text", { textAnchor: at, style: p({}, $2.legends.text, { fill: null != (u2 = null != (v2 = null != (y2 = U.itemTextColor) ? y2 : X2) ? v2 : $2.legends.text.fill) ? u2 : "black", dominantBaseline: ct, pointerEvents: "none", userSelect: "none" }, W2.hidden ? $2.legends.hidden.text : void 0), x: rt2, y: lt, children: W2.label })] });
}, w = function(e3) {
  var i2 = e3.data, n2 = e3.x, o2 = e3.y, r2 = e3.direction, l2 = e3.padding, a2 = void 0 === l2 ? 0 : l2, c6 = e3.justify, s = e3.effects, d = e3.itemWidth, h = e3.itemHeight, g2 = e3.itemDirection, m2 = void 0 === g2 ? "left-to-right" : g2, f2 = e3.itemsSpacing, u2 = void 0 === f2 ? 0 : f2, v2 = e3.itemTextColor, p2 = e3.itemBackground, y2 = void 0 === p2 ? "transparent" : p2, b2 = e3.itemOpacity, x2 = void 0 === b2 ? 1 : b2, S2 = e3.symbolShape, A2 = e3.symbolSize, W2 = e3.symbolSpacing, z2 = e3.symbolBorderWidth, C2 = e3.symbolBorderColor, O2 = e3.onClick, w2 = e3.onMouseEnter, X2 = e3.onMouseLeave, Y2 = e3.toggleSerie, H2 = k$1({ itemCount: i2.length, itemWidth: d, itemHeight: h, itemsSpacing: u2, direction: r2, padding: a2 }).padding, E2 = "row" === r2 ? d + u2 : 0, j2 = "column" === r2 ? h + u2 : 0;
  return jsx("g", { transform: "translate(" + n2 + "," + o2 + ")", children: i2.map(function(e4, i3) {
    return jsx(B, { data: e4, x: i3 * E2 + H2.left, y: i3 * j2 + H2.top, width: d, height: h, direction: m2, justify: c6, effects: s, textColor: v2, background: y2, opacity: x2, symbolShape: S2, symbolSize: A2, symbolSpacing: W2, symbolBorderWidth: z2, symbolBorderColor: C2, onClick: O2, onMouseEnter: w2, onMouseLeave: X2, toggleSerie: Y2 }, i3);
  }) });
}, X = function(e3) {
  var i2 = e3.data, n2 = e3.containerWidth, o2 = e3.containerHeight, r2 = e3.translateX, l2 = void 0 === r2 ? 0 : r2, a2 = e3.translateY, c6 = void 0 === a2 ? 0 : a2, s = e3.anchor, d = e3.direction, h = e3.padding, g2 = void 0 === h ? 0 : h, m2 = e3.justify, f2 = e3.itemsSpacing, u2 = void 0 === f2 ? 0 : f2, v2 = e3.itemWidth, p2 = e3.itemHeight, y2 = e3.itemDirection, b2 = e3.itemTextColor, S2 = e3.itemBackground, A2 = e3.itemOpacity, W2 = e3.symbolShape, z2 = e3.symbolSize, C2 = e3.symbolSpacing, O2 = e3.symbolBorderWidth, B2 = e3.symbolBorderColor, X2 = e3.onClick, Y2 = e3.onMouseEnter, H2 = e3.onMouseLeave, E2 = e3.toggleSerie, j2 = e3.effects, T2 = k$1({ itemCount: i2.length, itemsSpacing: u2, itemWidth: v2, itemHeight: p2, direction: d, padding: g2 }), L2 = T2.width, M2 = T2.height, F2 = x$1({ anchor: s, translateX: l2, translateY: c6, containerWidth: n2, containerHeight: o2, width: L2, height: M2 }), P2 = F2.x, R2 = F2.y;
  return jsx(w, { data: i2, x: P2, y: R2, direction: d, padding: g2, justify: m2, effects: j2, itemsSpacing: u2, itemWidth: v2, itemHeight: p2, itemDirection: y2, itemTextColor: b2, itemBackground: S2, itemOpacity: A2, symbolShape: W2, symbolSize: z2, symbolSpacing: C2, symbolBorderWidth: O2, symbolBorderColor: B2, onClick: X2, onMouseEnter: Y2, onMouseLeave: H2, toggleSerie: "boolean" == typeof E2 ? void 0 : E2 });
}, Y = { start: "left", middle: "center", end: "right" }, H = function(t2, e3) {
  var i2 = e3.data, n2 = e3.containerWidth, o2 = e3.containerHeight, r2 = e3.translateX, l2 = void 0 === r2 ? 0 : r2, a2 = e3.translateY, c6 = void 0 === a2 ? 0 : a2, s = e3.anchor, d = e3.direction, h = e3.padding, g2 = void 0 === h ? 0 : h, m2 = e3.justify, f2 = void 0 !== m2 && m2, u2 = e3.itemsSpacing, v2 = void 0 === u2 ? 0 : u2, p2 = e3.itemWidth, y2 = e3.itemHeight, b2 = e3.itemDirection, A2 = void 0 === b2 ? "left-to-right" : b2, W2 = e3.itemTextColor, z2 = e3.symbolSize, C2 = void 0 === z2 ? 16 : z2, O2 = e3.symbolSpacing, B2 = void 0 === O2 ? 8 : O2, w2 = e3.theme, X2 = k$1({ itemCount: i2.length, itemWidth: p2, itemHeight: y2, itemsSpacing: v2, direction: d, padding: g2 }), H2 = X2.width, E2 = X2.height, j2 = X2.padding, T2 = x$1({ anchor: s, translateX: l2, translateY: c6, containerWidth: n2, containerHeight: o2, width: H2, height: E2 }), L2 = T2.x, M2 = T2.y, F2 = "row" === d ? p2 + v2 : 0, P2 = "column" === d ? y2 + v2 : 0;
  t2.save(), t2.translate(L2, M2), t2.font = w2.legends.text.fontSize + "px " + (w2.legends.text.fontFamily || "sans-serif"), i2.forEach(function(e4, i3) {
    var n3, o3, r3 = i3 * F2 + j2.left, l3 = i3 * P2 + j2.top, a3 = S$1({ direction: A2, justify: f2, symbolSize: C2, symbolSpacing: B2, width: p2, height: y2 }), c7 = a3.symbolX, s2 = a3.symbolY, d2 = a3.labelX, h2 = a3.labelY, g3 = a3.labelAnchor, m3 = a3.labelAlignment;
    t2.fillStyle = null != (n3 = e4.color) ? n3 : "black", t2.fillRect(r3 + c7, l3 + s2, C2, C2), t2.textAlign = Y[g3], "central" === m3 && (t2.textBaseline = "middle"), t2.fillStyle = null != (o3 = null != W2 ? W2 : w2.legends.text.fill) ? o3 : "black", t2.fillText(String(e4.label), r3 + d2, l3 + h2);
  }), t2.restore();
}, T = { data: K$2.arrayOf(K$2.object), anchor: K$2.oneOf(["top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", "center"]).isRequired, translateX: K$2.number, translateY: K$2.number, direction: K$2.oneOf(["row", "column"]).isRequired, itemsSpacing: K$2.number, itemWidth: K$2.number.isRequired, itemHeight: K$2.number.isRequired, itemDirection: K$2.oneOf(["left-to-right", "right-to-left", "top-to-bottom", "bottom-to-top"]), itemTextColor: K$2.string, itemBackground: K$2.string, itemOpacity: K$2.number, symbolShape: K$2.oneOfType([K$2.oneOf(["circle", "diamond", "square", "triangle"]), K$2.func]), symbolSize: K$2.number, symbolSpacing: K$2.number, symbolBorderWidth: K$2.number, symbolBorderColor: K$2.string, onClick: K$2.func, onMouseEnter: K$2.func, onMouseLeave: K$2.func, effects: K$2.arrayOf(K$2.shape({ on: K$2.oneOfType([K$2.oneOf(["hover"])]).isRequired, style: K$2.shape({ itemTextColor: K$2.string, itemBackground: K$2.string, itemOpacity: K$2.number, symbolSize: K$2.number, symbolBorderWidth: K$2.number, symbolBorderColor: K$2.string }).isRequired })) };
const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);
class Delaunator {
  static from(points, getX = defaultGetX, getY = defaultGetY) {
    const n2 = points.length;
    const coords = new Float64Array(n2 * 2);
    for (let i2 = 0; i2 < n2; i2++) {
      const p2 = points[i2];
      coords[2 * i2] = getX(p2);
      coords[2 * i2 + 1] = getY(p2);
    }
    return new Delaunator(coords);
  }
  constructor(coords) {
    const n2 = coords.length >> 1;
    if (n2 > 0 && typeof coords[0] !== "number")
      throw new Error("Expected coords to contain numbers.");
    this.coords = coords;
    const maxTriangles = Math.max(2 * n2 - 5, 0);
    this._triangles = new Uint32Array(maxTriangles * 3);
    this._halfedges = new Int32Array(maxTriangles * 3);
    this._hashSize = Math.ceil(Math.sqrt(n2));
    this._hullPrev = new Uint32Array(n2);
    this._hullNext = new Uint32Array(n2);
    this._hullTri = new Uint32Array(n2);
    this._hullHash = new Int32Array(this._hashSize).fill(-1);
    this._ids = new Uint32Array(n2);
    this._dists = new Float64Array(n2);
    this.update();
  }
  update() {
    const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
    const n2 = coords.length >> 1;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i3 = 0; i3 < n2; i3++) {
      const x2 = coords[2 * i3];
      const y2 = coords[2 * i3 + 1];
      if (x2 < minX)
        minX = x2;
      if (y2 < minY)
        minY = y2;
      if (x2 > maxX)
        maxX = x2;
      if (y2 > maxY)
        maxY = y2;
      this._ids[i3] = i3;
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    let minDist = Infinity;
    let i0, i1, i2;
    for (let i3 = 0; i3 < n2; i3++) {
      const d = dist(cx, cy, coords[2 * i3], coords[2 * i3 + 1]);
      if (d < minDist) {
        i0 = i3;
        minDist = d;
      }
    }
    const i0x = coords[2 * i0];
    const i0y = coords[2 * i0 + 1];
    minDist = Infinity;
    for (let i3 = 0; i3 < n2; i3++) {
      if (i3 === i0)
        continue;
      const d = dist(i0x, i0y, coords[2 * i3], coords[2 * i3 + 1]);
      if (d < minDist && d > 0) {
        i1 = i3;
        minDist = d;
      }
    }
    let i1x = coords[2 * i1];
    let i1y = coords[2 * i1 + 1];
    let minRadius = Infinity;
    for (let i3 = 0; i3 < n2; i3++) {
      if (i3 === i0 || i3 === i1)
        continue;
      const r2 = circumradius(i0x, i0y, i1x, i1y, coords[2 * i3], coords[2 * i3 + 1]);
      if (r2 < minRadius) {
        i2 = i3;
        minRadius = r2;
      }
    }
    let i2x = coords[2 * i2];
    let i2y = coords[2 * i2 + 1];
    if (minRadius === Infinity) {
      for (let i3 = 0; i3 < n2; i3++) {
        this._dists[i3] = coords[2 * i3] - coords[0] || coords[2 * i3 + 1] - coords[1];
      }
      quicksort(this._ids, this._dists, 0, n2 - 1);
      const hull = new Uint32Array(n2);
      let j2 = 0;
      for (let i3 = 0, d0 = -Infinity; i3 < n2; i3++) {
        const id = this._ids[i3];
        if (this._dists[id] > d0) {
          hull[j2++] = id;
          d0 = this._dists[id];
        }
      }
      this.hull = hull.subarray(0, j2);
      this.triangles = new Uint32Array(0);
      this.halfedges = new Uint32Array(0);
      return;
    }
    if (orient(i0x, i0y, i1x, i1y, i2x, i2y)) {
      const i3 = i1;
      const x2 = i1x;
      const y2 = i1y;
      i1 = i2;
      i1x = i2x;
      i1y = i2y;
      i2 = i3;
      i2x = x2;
      i2y = y2;
    }
    const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
    this._cx = center.x;
    this._cy = center.y;
    for (let i3 = 0; i3 < n2; i3++) {
      this._dists[i3] = dist(coords[2 * i3], coords[2 * i3 + 1], center.x, center.y);
    }
    quicksort(this._ids, this._dists, 0, n2 - 1);
    this._hullStart = i0;
    let hullSize = 3;
    hullNext[i0] = hullPrev[i2] = i1;
    hullNext[i1] = hullPrev[i0] = i2;
    hullNext[i2] = hullPrev[i1] = i0;
    hullTri[i0] = 0;
    hullTri[i1] = 1;
    hullTri[i2] = 2;
    hullHash.fill(-1);
    hullHash[this._hashKey(i0x, i0y)] = i0;
    hullHash[this._hashKey(i1x, i1y)] = i1;
    hullHash[this._hashKey(i2x, i2y)] = i2;
    this.trianglesLen = 0;
    this._addTriangle(i0, i1, i2, -1, -1, -1);
    for (let k2 = 0, xp, yp; k2 < this._ids.length; k2++) {
      const i3 = this._ids[k2];
      const x2 = coords[2 * i3];
      const y2 = coords[2 * i3 + 1];
      if (k2 > 0 && Math.abs(x2 - xp) <= EPSILON && Math.abs(y2 - yp) <= EPSILON)
        continue;
      xp = x2;
      yp = y2;
      if (i3 === i0 || i3 === i1 || i3 === i2)
        continue;
      let start2 = 0;
      for (let j2 = 0, key = this._hashKey(x2, y2); j2 < this._hashSize; j2++) {
        start2 = hullHash[(key + j2) % this._hashSize];
        if (start2 !== -1 && start2 !== hullNext[start2])
          break;
      }
      start2 = hullPrev[start2];
      let e3 = start2, q;
      while (q = hullNext[e3], !orient(x2, y2, coords[2 * e3], coords[2 * e3 + 1], coords[2 * q], coords[2 * q + 1])) {
        e3 = q;
        if (e3 === start2) {
          e3 = -1;
          break;
        }
      }
      if (e3 === -1)
        continue;
      let t2 = this._addTriangle(e3, i3, hullNext[e3], -1, -1, hullTri[e3]);
      hullTri[i3] = this._legalize(t2 + 2);
      hullTri[e3] = t2;
      hullSize++;
      let n3 = hullNext[e3];
      while (q = hullNext[n3], orient(x2, y2, coords[2 * n3], coords[2 * n3 + 1], coords[2 * q], coords[2 * q + 1])) {
        t2 = this._addTriangle(n3, i3, q, hullTri[i3], -1, hullTri[n3]);
        hullTri[i3] = this._legalize(t2 + 2);
        hullNext[n3] = n3;
        hullSize--;
        n3 = q;
      }
      if (e3 === start2) {
        while (q = hullPrev[e3], orient(x2, y2, coords[2 * q], coords[2 * q + 1], coords[2 * e3], coords[2 * e3 + 1])) {
          t2 = this._addTriangle(q, i3, e3, -1, hullTri[e3], hullTri[q]);
          this._legalize(t2 + 2);
          hullTri[q] = t2;
          hullNext[e3] = e3;
          hullSize--;
          e3 = q;
        }
      }
      this._hullStart = hullPrev[i3] = e3;
      hullNext[e3] = hullPrev[n3] = i3;
      hullNext[i3] = n3;
      hullHash[this._hashKey(x2, y2)] = i3;
      hullHash[this._hashKey(coords[2 * e3], coords[2 * e3 + 1])] = e3;
    }
    this.hull = new Uint32Array(hullSize);
    for (let i3 = 0, e3 = this._hullStart; i3 < hullSize; i3++) {
      this.hull[i3] = e3;
      e3 = hullNext[e3];
    }
    this.triangles = this._triangles.subarray(0, this.trianglesLen);
    this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(x2, y2) {
    return Math.floor(pseudoAngle(x2 - this._cx, y2 - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(a2) {
    const { _triangles: triangles, _halfedges: halfedges, coords } = this;
    let i2 = 0;
    let ar2 = 0;
    while (true) {
      const b2 = halfedges[a2];
      const a0 = a2 - a2 % 3;
      ar2 = a0 + (a2 + 2) % 3;
      if (b2 === -1) {
        if (i2 === 0)
          break;
        a2 = EDGE_STACK[--i2];
        continue;
      }
      const b0 = b2 - b2 % 3;
      const al = a0 + (a2 + 1) % 3;
      const bl = b0 + (b2 + 2) % 3;
      const p0 = triangles[ar2];
      const pr2 = triangles[a2];
      const pl = triangles[al];
      const p1 = triangles[bl];
      const illegal = inCircle(
        coords[2 * p0],
        coords[2 * p0 + 1],
        coords[2 * pr2],
        coords[2 * pr2 + 1],
        coords[2 * pl],
        coords[2 * pl + 1],
        coords[2 * p1],
        coords[2 * p1 + 1]
      );
      if (illegal) {
        triangles[a2] = p1;
        triangles[b2] = p0;
        const hbl = halfedges[bl];
        if (hbl === -1) {
          let e3 = this._hullStart;
          do {
            if (this._hullTri[e3] === bl) {
              this._hullTri[e3] = a2;
              break;
            }
            e3 = this._hullPrev[e3];
          } while (e3 !== this._hullStart);
        }
        this._link(a2, hbl);
        this._link(b2, halfedges[ar2]);
        this._link(ar2, bl);
        const br2 = b0 + (b2 + 1) % 3;
        if (i2 < EDGE_STACK.length) {
          EDGE_STACK[i2++] = br2;
        }
      } else {
        if (i2 === 0)
          break;
        a2 = EDGE_STACK[--i2];
      }
    }
    return ar2;
  }
  _link(a2, b2) {
    this._halfedges[a2] = b2;
    if (b2 !== -1)
      this._halfedges[b2] = a2;
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(i0, i1, i2, a2, b2, c6) {
    const t2 = this.trianglesLen;
    this._triangles[t2] = i0;
    this._triangles[t2 + 1] = i1;
    this._triangles[t2 + 2] = i2;
    this._link(t2, a2);
    this._link(t2 + 1, b2);
    this._link(t2 + 2, c6);
    this.trianglesLen += 3;
    return t2;
  }
}
function pseudoAngle(dx, dy) {
  const p2 = dx / (Math.abs(dx) + Math.abs(dy));
  return (dy > 0 ? 3 - p2 : 1 + p2) / 4;
}
function dist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
function orientIfSure(px, py, rx, ry, qx, qy) {
  const l2 = (ry - py) * (qx - px);
  const r2 = (rx - px) * (qy - py);
  return Math.abs(l2 - r2) >= 33306690738754716e-32 * Math.abs(l2 + r2) ? l2 - r2 : 0;
}
function orient(rx, ry, qx, qy, px, py) {
  const sign2 = orientIfSure(px, py, rx, ry, qx, qy) || orientIfSure(rx, ry, qx, qy, px, py) || orientIfSure(qx, qy, px, py, rx, ry);
  return sign2 < 0;
}
function inCircle(ax, ay, bx, by, cx, cy, px, py) {
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;
  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;
  return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function circumradius(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x2 = (ey * bl - dy * cl) * d;
  const y2 = (dx * cl - ex * bl) * d;
  return x2 * x2 + y2 * y2;
}
function circumcenter(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x2 = ax + (ey * bl - dy * cl) * d;
  const y2 = ay + (dx * cl - ex * bl) * d;
  return { x: x2, y: y2 };
}
function quicksort(ids, dists, left, right) {
  if (right - left <= 20) {
    for (let i2 = left + 1; i2 <= right; i2++) {
      const temp = ids[i2];
      const tempDist = dists[temp];
      let j2 = i2 - 1;
      while (j2 >= left && dists[ids[j2]] > tempDist)
        ids[j2 + 1] = ids[j2--];
      ids[j2 + 1] = temp;
    }
  } else {
    const median = left + right >> 1;
    let i2 = left + 1;
    let j2 = right;
    swap(ids, median, i2);
    if (dists[ids[left]] > dists[ids[right]])
      swap(ids, left, right);
    if (dists[ids[i2]] > dists[ids[right]])
      swap(ids, i2, right);
    if (dists[ids[left]] > dists[ids[i2]])
      swap(ids, left, i2);
    const temp = ids[i2];
    const tempDist = dists[temp];
    while (true) {
      do
        i2++;
      while (dists[ids[i2]] < tempDist);
      do
        j2--;
      while (dists[ids[j2]] > tempDist);
      if (j2 < i2)
        break;
      swap(ids, i2, j2);
    }
    ids[left + 1] = ids[j2];
    ids[j2] = temp;
    if (right - i2 + 1 >= j2 - left) {
      quicksort(ids, dists, i2, right);
      quicksort(ids, dists, left, j2 - 1);
    } else {
      quicksort(ids, dists, left, j2 - 1);
      quicksort(ids, dists, i2, right);
    }
  }
}
function swap(arr, i2, j2) {
  const tmp = arr[i2];
  arr[i2] = arr[j2];
  arr[j2] = tmp;
}
function defaultGetX(p2) {
  return p2[0];
}
function defaultGetY(p2) {
  return p2[1];
}
const epsilon = 1e-6;
class Path {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
  }
  moveTo(x2, y2) {
    this._ += `M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x2, y2) {
    this._ += `L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  arc(x2, y2, r2) {
    x2 = +x2, y2 = +y2, r2 = +r2;
    const x0 = x2 + r2;
    const y0 = y2;
    if (r2 < 0)
      throw new Error("negative radius");
    if (this._x1 === null)
      this._ += `M${x0},${y0}`;
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon)
      this._ += "L" + x0 + "," + y0;
    if (!r2)
      return;
    this._ += `A${r2},${r2},0,1,1,${x2 - r2},${y2}A${r2},${r2},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
  }
  rect(x2, y2, w2, h) {
    this._ += `M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${+w2}v${+h}h${-w2}Z`;
  }
  value() {
    return this._ || null;
  }
}
class Polygon {
  constructor() {
    this._ = [];
  }
  moveTo(x2, y2) {
    this._.push([x2, y2]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x2, y2) {
    this._.push([x2, y2]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}
class Voronoi {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin)))
      throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const { delaunay: { points, hull, triangles }, vectors } = this;
    const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
    for (let i2 = 0, j2 = 0, n2 = triangles.length, x2, y2; i2 < n2; i2 += 3, j2 += 2) {
      const t12 = triangles[i2] * 2;
      const t2 = triangles[i2 + 1] * 2;
      const t3 = triangles[i2 + 2] * 2;
      const x12 = points[t12];
      const y12 = points[t12 + 1];
      const x22 = points[t2];
      const y22 = points[t2 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];
      const dx = x22 - x12;
      const dy = y22 - y12;
      const ex = x3 - x12;
      const ey = y3 - y12;
      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const ab = (dx * ey - dy * ex) * 2;
      if (!ab) {
        x2 = (x12 + x3) / 2 - 1e8 * ey;
        y2 = (y12 + y3) / 2 + 1e8 * ex;
      } else if (Math.abs(ab) < 1e-8) {
        x2 = (x12 + x3) / 2;
        y2 = (y12 + y3) / 2;
      } else {
        const d = 1 / ab;
        x2 = x12 + (ey * bl - dy * cl) * d;
        y2 = y12 + (dx * cl - ex * bl) * d;
      }
      circumcenters[j2] = x2;
      circumcenters[j2 + 1] = y2;
    }
    let h = hull[hull.length - 1];
    let p0, p1 = h * 4;
    let x0, x1 = points[2 * h];
    let y0, y1 = points[2 * h + 1];
    vectors.fill(0);
    for (let i2 = 0; i2 < hull.length; ++i2) {
      h = hull[i2];
      p0 = p1, x0 = x1, y0 = y1;
      p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
      vectors[p0 + 2] = vectors[p1] = y0 - y1;
      vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
    }
  }
  render(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { delaunay: { halfedges, inedges, hull }, circumcenters, vectors } = this;
    if (hull.length <= 1)
      return null;
    for (let i2 = 0, n2 = halfedges.length; i2 < n2; ++i2) {
      const j2 = halfedges[i2];
      if (j2 < i2)
        continue;
      const ti2 = Math.floor(i2 / 3) * 2;
      const tj = Math.floor(j2 / 3) * 2;
      const xi2 = circumcenters[ti2];
      const yi2 = circumcenters[ti2 + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi2, yi2, xj, yj, context);
    }
    let h0, h1 = hull[hull.length - 1];
    for (let i2 = 0; i2 < hull.length; ++i2) {
      h0 = h1, h1 = hull[i2];
      const t2 = Math.floor(inedges[h1] / 3) * 2;
      const x2 = circumcenters[t2];
      const y2 = circumcenters[t2 + 1];
      const v2 = h0 * 4;
      const p2 = this._project(x2, y2, vectors[v2 + 2], vectors[v2 + 3]);
      if (p2)
        this._renderSegment(x2, y2, p2[0], p2[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new Path() : void 0;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i2, context) {
    const buffer = context == null ? context = new Path() : void 0;
    const points = this._clip(i2);
    if (points === null || !points.length)
      return;
    context.moveTo(points[0], points[1]);
    let n2 = points.length;
    while (points[0] === points[n2 - 2] && points[1] === points[n2 - 1] && n2 > 1)
      n2 -= 2;
    for (let i3 = 2; i3 < n2; i3 += 2) {
      if (points[i3] !== points[i3 - 2] || points[i3 + 1] !== points[i3 - 1])
        context.lineTo(points[i3], points[i3 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const { delaunay: { points } } = this;
    for (let i2 = 0, n2 = points.length / 2; i2 < n2; ++i2) {
      const cell = this.cellPolygon(i2);
      if (cell)
        cell.index = i2, yield cell;
    }
  }
  cellPolygon(i2) {
    const polygon = new Polygon();
    this.renderCell(i2, polygon);
    return polygon.value();
  }
  _renderSegment(x0, y0, x1, y1, context) {
    let S2;
    const c0 = this._regioncode(x0, y0);
    const c12 = this._regioncode(x1, y1);
    if (c0 === 0 && c12 === 0) {
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    } else if (S2 = this._clipSegment(x0, y0, x1, y1, c0, c12)) {
      context.moveTo(S2[0], S2[1]);
      context.lineTo(S2[2], S2[3]);
    }
  }
  contains(i2, x2, y2) {
    if ((x2 = +x2, x2 !== x2) || (y2 = +y2, y2 !== y2))
      return false;
    return this.delaunay._step(i2, x2, y2) === i2;
  }
  *neighbors(i2) {
    const ci = this._clip(i2);
    if (ci)
      for (const j2 of this.delaunay.neighbors(i2)) {
        const cj = this._clip(j2);
        if (cj)
          loop:
            for (let ai2 = 0, li = ci.length; ai2 < li; ai2 += 2) {
              for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
                if (ci[ai2] == cj[aj] && ci[ai2 + 1] == cj[aj + 1] && ci[(ai2 + 2) % li] == cj[(aj + lj - 2) % lj] && ci[(ai2 + 3) % li] == cj[(aj + lj - 1) % lj]) {
                  yield j2;
                  break loop;
                }
              }
            }
      }
  }
  _cell(i2) {
    const { circumcenters, delaunay: { inedges, halfedges, triangles } } = this;
    const e0 = inedges[i2];
    if (e0 === -1)
      return null;
    const points = [];
    let e3 = e0;
    do {
      const t2 = Math.floor(e3 / 3);
      points.push(circumcenters[t2 * 2], circumcenters[t2 * 2 + 1]);
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i2)
        break;
      e3 = halfedges[e3];
    } while (e3 !== e0 && e3 !== -1);
    return points;
  }
  _clip(i2) {
    if (i2 === 0 && this.delaunay.hull.length === 1) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    const points = this._cell(i2);
    if (points === null)
      return null;
    const { vectors: V2 } = this;
    const v2 = i2 * 4;
    return V2[v2] || V2[v2 + 1] ? this._clipInfinite(i2, points, V2[v2], V2[v2 + 1], V2[v2 + 2], V2[v2 + 3]) : this._clipFinite(i2, points);
  }
  _clipFinite(i2, points) {
    const n2 = points.length;
    let P2 = null;
    let x0, y0, x1 = points[n2 - 2], y1 = points[n2 - 1];
    let c0, c12 = this._regioncode(x1, y1);
    let e0, e1;
    for (let j2 = 0; j2 < n2; j2 += 2) {
      x0 = x1, y0 = y1, x1 = points[j2], y1 = points[j2 + 1];
      c0 = c12, c12 = this._regioncode(x1, y1);
      if (c0 === 0 && c12 === 0) {
        e0 = e1, e1 = 0;
        if (P2)
          P2.push(x1, y1);
        else
          P2 = [x1, y1];
      } else {
        let S2, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S2 = this._clipSegment(x0, y0, x1, y1, c0, c12)) === null)
            continue;
          [sx0, sy0, sx1, sy1] = S2;
        } else {
          if ((S2 = this._clipSegment(x1, y1, x0, y0, c12, c0)) === null)
            continue;
          [sx1, sy1, sx0, sy0] = S2;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1)
            this._edge(i2, e0, e1, P2, P2.length);
          if (P2)
            P2.push(sx0, sy0);
          else
            P2 = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1)
          this._edge(i2, e0, e1, P2, P2.length);
        if (P2)
          P2.push(sx1, sy1);
        else
          P2 = [sx1, sy1];
      }
    }
    if (P2) {
      e0 = e1, e1 = this._edgecode(P2[0], P2[1]);
      if (e0 && e1)
        this._edge(i2, e0, e1, P2, P2.length);
    } else if (this.contains(i2, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P2;
  }
  _clipSegment(x0, y0, x1, y1, c0, c12) {
    while (true) {
      if (c0 === 0 && c12 === 0)
        return [x0, y0, x1, y1];
      if (c0 & c12)
        return null;
      let x2, y2, c6 = c0 || c12;
      if (c6 & 8)
        x2 = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y2 = this.ymax;
      else if (c6 & 4)
        x2 = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y2 = this.ymin;
      else if (c6 & 2)
        y2 = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x2 = this.xmax;
      else
        y2 = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x2 = this.xmin;
      if (c0)
        x0 = x2, y0 = y2, c0 = this._regioncode(x0, y0);
      else
        x1 = x2, y1 = y2, c12 = this._regioncode(x1, y1);
    }
  }
  _clipInfinite(i2, points, vx0, vy0, vxn, vyn) {
    let P2 = Array.from(points), p2;
    if (p2 = this._project(P2[0], P2[1], vx0, vy0))
      P2.unshift(p2[0], p2[1]);
    if (p2 = this._project(P2[P2.length - 2], P2[P2.length - 1], vxn, vyn))
      P2.push(p2[0], p2[1]);
    if (P2 = this._clipFinite(i2, P2)) {
      for (let j2 = 0, n2 = P2.length, c0, c12 = this._edgecode(P2[n2 - 2], P2[n2 - 1]); j2 < n2; j2 += 2) {
        c0 = c12, c12 = this._edgecode(P2[j2], P2[j2 + 1]);
        if (c0 && c12)
          j2 = this._edge(i2, c0, c12, P2, j2), n2 = P2.length;
      }
    } else if (this.contains(i2, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P2 = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P2;
  }
  _edge(i2, e0, e1, P2, j2) {
    while (e0 !== e1) {
      let x2, y2;
      switch (e0) {
        case 5:
          e0 = 4;
          continue;
        case 4:
          e0 = 6, x2 = this.xmax, y2 = this.ymin;
          break;
        case 6:
          e0 = 2;
          continue;
        case 2:
          e0 = 10, x2 = this.xmax, y2 = this.ymax;
          break;
        case 10:
          e0 = 8;
          continue;
        case 8:
          e0 = 9, x2 = this.xmin, y2 = this.ymax;
          break;
        case 9:
          e0 = 1;
          continue;
        case 1:
          e0 = 5, x2 = this.xmin, y2 = this.ymin;
          break;
      }
      if ((P2[j2] !== x2 || P2[j2 + 1] !== y2) && this.contains(i2, x2, y2)) {
        P2.splice(j2, 0, x2, y2), j2 += 2;
      }
    }
    if (P2.length > 4) {
      for (let i3 = 0; i3 < P2.length; i3 += 2) {
        const j3 = (i3 + 2) % P2.length, k2 = (i3 + 4) % P2.length;
        if (P2[i3] === P2[j3] && P2[j3] === P2[k2] || P2[i3 + 1] === P2[j3 + 1] && P2[j3 + 1] === P2[k2 + 1])
          P2.splice(j3, 2), i3 -= 2;
      }
    }
    return j2;
  }
  _project(x0, y0, vx, vy) {
    let t2 = Infinity, c6, x2, y2;
    if (vy < 0) {
      if (y0 <= this.ymin)
        return null;
      if ((c6 = (this.ymin - y0) / vy) < t2)
        y2 = this.ymin, x2 = x0 + (t2 = c6) * vx;
    } else if (vy > 0) {
      if (y0 >= this.ymax)
        return null;
      if ((c6 = (this.ymax - y0) / vy) < t2)
        y2 = this.ymax, x2 = x0 + (t2 = c6) * vx;
    }
    if (vx > 0) {
      if (x0 >= this.xmax)
        return null;
      if ((c6 = (this.xmax - x0) / vx) < t2)
        x2 = this.xmax, y2 = y0 + (t2 = c6) * vy;
    } else if (vx < 0) {
      if (x0 <= this.xmin)
        return null;
      if ((c6 = (this.xmin - x0) / vx) < t2)
        x2 = this.xmin, y2 = y0 + (t2 = c6) * vy;
    }
    return [x2, y2];
  }
  _edgecode(x2, y2) {
    return (x2 === this.xmin ? 1 : x2 === this.xmax ? 2 : 0) | (y2 === this.ymin ? 4 : y2 === this.ymax ? 8 : 0);
  }
  _regioncode(x2, y2) {
    return (x2 < this.xmin ? 1 : x2 > this.xmax ? 2 : 0) | (y2 < this.ymin ? 4 : y2 > this.ymax ? 8 : 0);
  }
}
const tau = 2 * Math.PI, pow = Math.pow;
function pointX(p2) {
  return p2[0];
}
function pointY(p2) {
  return p2[1];
}
function collinear(d) {
  const { triangles, coords } = d;
  for (let i2 = 0; i2 < triangles.length; i2 += 3) {
    const a2 = 2 * triangles[i2], b2 = 2 * triangles[i2 + 1], c6 = 2 * triangles[i2 + 2], cross = (coords[c6] - coords[a2]) * (coords[b2 + 1] - coords[a2 + 1]) - (coords[b2] - coords[a2]) * (coords[c6 + 1] - coords[a2 + 1]);
    if (cross > 1e-10)
      return false;
  }
  return true;
}
function jitter(x2, y2, r2) {
  return [x2 + Math.sin(x2 + y2) * r2, y2 + Math.cos(x2 - y2) * r2];
}
class Delaunay {
  static from(points, fx = pointX, fy = pointY, that) {
    return new Delaunay("length" in points ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
  }
  constructor(points) {
    this._delaunator = new Delaunator(points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d = this._delaunator, points = this.points;
    if (d.hull && d.hull.length > 2 && collinear(d)) {
      this.collinear = Int32Array.from({ length: points.length / 2 }, (_2, i2) => i2).sort((i2, j2) => points[2 * i2] - points[2 * j2] || points[2 * i2 + 1] - points[2 * j2 + 1]);
      const e3 = this.collinear[0], f2 = this.collinear[this.collinear.length - 1], bounds = [points[2 * e3], points[2 * e3 + 1], points[2 * f2], points[2 * f2 + 1]], r2 = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i2 = 0, n2 = points.length / 2; i2 < n2; ++i2) {
        const p2 = jitter(points[2 * i2], points[2 * i2 + 1], r2);
        points[2 * i2] = p2[0];
        points[2 * i2 + 1] = p2[1];
      }
      this._delaunator = new Delaunator(points);
    } else {
      delete this.collinear;
    }
    const halfedges = this.halfedges = this._delaunator.halfedges;
    const hull = this.hull = this._delaunator.hull;
    const triangles = this.triangles = this._delaunator.triangles;
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);
    for (let e3 = 0, n2 = halfedges.length; e3 < n2; ++e3) {
      const p2 = triangles[e3 % 3 === 2 ? e3 - 2 : e3 + 1];
      if (halfedges[e3] === -1 || inedges[p2] === -1)
        inedges[p2] = e3;
    }
    for (let i2 = 0, n2 = hull.length; i2 < n2; ++i2) {
      hullIndex[hull[i2]] = i2;
    }
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      this.triangles[1] = hull[1];
      this.triangles[2] = hull[1];
      inedges[hull[0]] = 1;
      if (hull.length === 2)
        inedges[hull[1]] = 0;
    }
  }
  voronoi(bounds) {
    return new Voronoi(this, bounds);
  }
  *neighbors(i2) {
    const { inedges, hull, _hullIndex, halfedges, triangles, collinear: collinear2 } = this;
    if (collinear2) {
      const l2 = collinear2.indexOf(i2);
      if (l2 > 0)
        yield collinear2[l2 - 1];
      if (l2 < collinear2.length - 1)
        yield collinear2[l2 + 1];
      return;
    }
    const e0 = inedges[i2];
    if (e0 === -1)
      return;
    let e3 = e0, p0 = -1;
    do {
      yield p0 = triangles[e3];
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i2)
        return;
      e3 = halfedges[e3];
      if (e3 === -1) {
        const p2 = hull[(_hullIndex[i2] + 1) % hull.length];
        if (p2 !== p0)
          yield p2;
        return;
      }
    } while (e3 !== e0);
  }
  find(x2, y2, i2 = 0) {
    if ((x2 = +x2, x2 !== x2) || (y2 = +y2, y2 !== y2))
      return -1;
    const i0 = i2;
    let c6;
    while ((c6 = this._step(i2, x2, y2)) >= 0 && c6 !== i2 && c6 !== i0)
      i2 = c6;
    return c6;
  }
  _step(i2, x2, y2) {
    const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
    if (inedges[i2] === -1 || !points.length)
      return (i2 + 1) % (points.length >> 1);
    let c6 = i2;
    let dc = pow(x2 - points[i2 * 2], 2) + pow(y2 - points[i2 * 2 + 1], 2);
    const e0 = inedges[i2];
    let e3 = e0;
    do {
      let t2 = triangles[e3];
      const dt = pow(x2 - points[t2 * 2], 2) + pow(y2 - points[t2 * 2 + 1], 2);
      if (dt < dc)
        dc = dt, c6 = t2;
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i2)
        break;
      e3 = halfedges[e3];
      if (e3 === -1) {
        e3 = hull[(_hullIndex[i2] + 1) % hull.length];
        if (e3 !== t2) {
          if (pow(x2 - points[e3 * 2], 2) + pow(y2 - points[e3 * 2 + 1], 2) < dc)
            return e3;
        }
        break;
      }
    } while (e3 !== e0);
    return c6;
  }
  render(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { points, halfedges, triangles } = this;
    for (let i2 = 0, n2 = halfedges.length; i2 < n2; ++i2) {
      const j2 = halfedges[i2];
      if (j2 < i2)
        continue;
      const ti2 = triangles[i2] * 2;
      const tj = triangles[j2] * 2;
      context.moveTo(points[ti2], points[ti2 + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r2 = 2) {
    const buffer = context == null ? context = new Path() : void 0;
    const { points } = this;
    for (let i2 = 0, n2 = points.length; i2 < n2; i2 += 2) {
      const x2 = points[i2], y2 = points[i2 + 1];
      context.moveTo(x2 + r2, y2);
      context.arc(x2, y2, r2, 0, tau);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { hull, points } = this;
    const h = hull[0] * 2, n2 = hull.length;
    context.moveTo(points[h], points[h + 1]);
    for (let i2 = 1; i2 < n2; ++i2) {
      const h2 = 2 * hull[i2];
      context.lineTo(points[h2], points[h2 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new Polygon();
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i2, context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { points, triangles } = this;
    const t02 = triangles[i2 *= 3] * 2;
    const t12 = triangles[i2 + 1] * 2;
    const t2 = triangles[i2 + 2] * 2;
    context.moveTo(points[t02], points[t02 + 1]);
    context.lineTo(points[t12], points[t12 + 1]);
    context.lineTo(points[t2], points[t2 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const { triangles } = this;
    for (let i2 = 0, n2 = triangles.length / 3; i2 < n2; ++i2) {
      yield this.trianglePolygon(i2);
    }
  }
  trianglePolygon(i2) {
    const polygon = new Polygon();
    this.renderTriangle(i2, polygon);
    return polygon.value();
  }
}
function flatArray(points, fx, fy, that) {
  const n2 = points.length;
  const array = new Float64Array(n2 * 2);
  for (let i2 = 0; i2 < n2; ++i2) {
    const p2 = points[i2];
    array[i2 * 2] = fx.call(that, p2, i2, points);
    array[i2 * 2 + 1] = fy.call(that, p2, i2, points);
  }
  return array;
}
function* flatIterable(points, fx, fy, that) {
  let i2 = 0;
  for (const p2 of points) {
    yield fx.call(that, p2, i2, points);
    yield fy.call(that, p2, i2, points);
    ++i2;
  }
}
var g = function(n2) {
  return "function" == typeof n2 ? n2 : function(e3) {
    return e3[n2];
  };
}, b = function(n2) {
  var e3 = n2.points, i2 = n2.x, o2 = void 0 === i2 ? "x" : i2, t2 = n2.y, r2 = void 0 === t2 ? "y" : t2, l2 = g(o2), u2 = g(r2);
  return e3.map(function(n3) {
    return [l2(n3), u2(n3)];
  });
}, k = function(n2) {
  var e3 = n2.points, i2 = n2.width, o2 = n2.height, t2 = n2.debug, r2 = Delaunay.from(e3), l2 = t2 ? r2.voronoi([0, 0, i2, o2]) : void 0;
  return { delaunay: r2, voronoi: l2 };
}, x = function(e3) {
  var i2 = e3.points, o2 = e3.x, t2 = e3.y, r2 = e3.width, l2 = e3.height, u2 = e3.debug, a2 = reactExports.useMemo(function() {
    return b({ points: i2, x: o2, y: t2 });
  }, [i2, o2, t2]);
  return reactExports.useMemo(function() {
    return k({ points: a2, width: r2, height: l2, debug: u2 });
  }, [a2, r2, l2, u2]);
}, P = function(e3) {
  var i2 = e3.nodes, l2 = e3.width, u2 = e3.height, a2 = e3.x, d = e3.y, c6 = e3.onMouseEnter, h = e3.onMouseMove, m2 = e3.onMouseLeave, y2 = e3.onClick, g2 = e3.debug, b2 = reactExports.useRef(null), k2 = reactExports.useState(null), C2 = k2[0], L2 = k2[1], w2 = x({ points: i2, x: a2, y: d, width: l2, height: u2, debug: g2 }), W2 = w2.delaunay, D2 = w2.voronoi, M2 = reactExports.useMemo(function() {
    if (g2 && D2)
      return D2.render();
  }, [g2, D2]), P2 = reactExports.useCallback(function(n2) {
    if (!b2.current)
      return [null, null];
    var e4 = Qi(b2.current, n2), o2 = e4[0], t2 = e4[1], r2 = W2.find(o2, t2);
    return [r2, void 0 !== r2 ? i2[r2] : null];
  }, [b2, W2]), O2 = reactExports.useCallback(function(n2) {
    var e4 = P2(n2), i3 = e4[0], o2 = e4[1];
    L2(i3), o2 && (null == c6 || c6(o2, n2));
  }, [P2, L2, c6]), S2 = reactExports.useCallback(function(n2) {
    var e4 = P2(n2), i3 = e4[0], o2 = e4[1];
    L2(i3), o2 && (null == h || h(o2, n2));
  }, [P2, L2, h]), j2 = reactExports.useCallback(function(n2) {
    if (L2(null), m2) {
      var e4 = void 0;
      null !== C2 && (e4 = i2[C2]), e4 && m2(e4, n2);
    }
  }, [L2, C2, m2, i2]), z2 = reactExports.useCallback(function(n2) {
    var e4 = P2(n2), i3 = e4[0], o2 = e4[1];
    L2(i3), o2 && (null == y2 || y2(o2, n2));
  }, [P2, L2, y2]);
  return jsxs("g", { ref: b2, children: [g2 && D2 && jsxs(Fragment, { children: [jsx("path", { d: M2, stroke: "red", strokeWidth: 1, opacity: 0.75 }), null !== C2 && jsx("path", { fill: "pink", opacity: 0.35, d: D2.renderCell(C2) })] }), jsx("rect", { width: l2, height: u2, fill: "red", opacity: 0, style: { cursor: "auto" }, onMouseEnter: O2, onMouseMove: S2, onMouseLeave: j2, onClick: z2 })] });
}, O = function(n2, e3) {
  n2.save(), n2.globalAlpha = 0.75, n2.beginPath(), e3.render(n2), n2.strokeStyle = "red", n2.lineWidth = 1, n2.stroke(), n2.restore();
}, S = function(n2, e3, i2) {
  n2.save(), n2.globalAlpha = 0.35, n2.beginPath(), e3.renderCell(i2, n2), n2.fillStyle = "red", n2.fill(), n2.restore();
};
function ie() {
  return ie = Object.assign || function(e3) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var i2 = arguments[r2];
      for (var n2 in i2)
        Object.prototype.hasOwnProperty.call(i2, n2) && (e3[n2] = i2[n2]);
    }
    return e3;
  }, ie.apply(this, arguments);
}
var ne = function(e3) {
  var r2 = e3.point;
  return jsx(w$3, { id: jsxs("span", { children: ["x: ", jsx("strong", { children: r2.data.xFormatted }), ", y:", " ", jsx("strong", { children: r2.data.yFormatted })] }), enableChip: true, color: r2.serieColor });
};
ne.propTypes = { point: K$2.object.isRequired };
var te = reactExports.memo(ne), oe = function(e3) {
  var r2 = e3.slice, i2 = e3.axis, n2 = Vt(), t2 = "x" === i2 ? "y" : "x";
  return jsx(C$2, { rows: r2.points.map(function(e4) {
    return [jsx(b$4, { color: e4.serieColor, style: n2.tooltip.chip }, "chip"), e4.serieId, jsx("span", { style: n2.tooltip.tableCellValue, children: e4.data[t2 + "Formatted"] }, "value")];
  }) });
};
oe.propTypes = { slice: K$2.object.isRequired, axis: K$2.oneOf(["x", "y"]).isRequired };
var ae = reactExports.memo(oe), se = { data: K$2.arrayOf(K$2.shape({ id: K$2.oneOfType([K$2.string, K$2.number]).isRequired, data: K$2.arrayOf(K$2.shape({ x: K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]), y: K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]) })).isRequired })).isRequired, xScale: K$2.object.isRequired, xFormat: K$2.oneOfType([K$2.func, K$2.string]), yScale: K$2.object.isRequired, yFormat: K$2.oneOfType([K$2.func, K$2.string]), layers: K$2.arrayOf(K$2.oneOfType([K$2.oneOf(["grid", "markers", "axes", "areas", "crosshair", "lines", "slices", "points", "mesh", "legends"]), K$2.func])).isRequired, curve: Rt.isRequired, axisTop: w$1, axisRight: w$1, axisBottom: w$1, axisLeft: w$1, enableGridX: K$2.bool.isRequired, enableGridY: K$2.bool.isRequired, gridXValues: K$2.oneOfType([K$2.number, K$2.arrayOf(K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]))]), gridYValues: K$2.oneOfType([K$2.number, K$2.arrayOf(K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]))]), enablePoints: K$2.bool.isRequired, pointSymbol: K$2.func, pointSize: K$2.number.isRequired, pointColor: K$2.any.isRequired, pointBorderWidth: K$2.number.isRequired, pointBorderColor: K$2.any.isRequired, enablePointLabel: K$2.bool.isRequired, pointLabel: K$2.oneOfType([K$2.string, K$2.func]).isRequired, markers: K$2.arrayOf(K$2.shape({ axis: K$2.oneOf(["x", "y"]).isRequired, value: K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]).isRequired, style: K$2.object })), colors: Xe.isRequired, enableArea: K$2.bool.isRequired, areaOpacity: K$2.number.isRequired, areaBlendMode: Mt.isRequired, areaBaselineValue: K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]).isRequired, lineWidth: K$2.number.isRequired, legends: K$2.arrayOf(K$2.shape(T)).isRequired, isInteractive: K$2.bool.isRequired, debugMesh: K$2.bool.isRequired, tooltip: K$2.oneOfType([K$2.func, K$2.object]).isRequired, enableSlices: K$2.oneOf(["x", "y", false]).isRequired, debugSlices: K$2.bool.isRequired, sliceTooltip: K$2.oneOfType([K$2.func, K$2.object]).isRequired, enableCrosshair: K$2.bool.isRequired, crosshairType: K$2.string.isRequired }, le = ie({}, se, { enablePointLabel: K$2.bool.isRequired, role: K$2.string.isRequired, useMesh: K$2.bool.isRequired }, et, kt), ue = ie({ pixelRatio: K$2.number.isRequired }, se), de = { curve: "linear", xScale: { type: "point" }, yScale: { type: "linear", min: 0, max: "auto" }, layers: ["grid", "markers", "axes", "areas", "crosshair", "lines", "points", "slices", "mesh", "legends"], axisBottom: {}, axisLeft: {}, enableGridX: true, enableGridY: true, enablePoints: true, pointSize: 6, pointColor: { from: "color" }, pointBorderWidth: 0, pointBorderColor: { theme: "background" }, enablePointLabel: false, pointLabel: "yFormatted", colors: { scheme: "nivo" }, enableArea: false, areaBaselineValue: 0, areaOpacity: 0.2, areaBlendMode: "normal", lineWidth: 2, legends: [], isInteractive: true, tooltip: te, enableSlices: false, debugSlices: false, sliceTooltip: ae, debugMesh: false, enableCrosshair: true, crosshairType: "bottom-left" }, ce = ie({}, de, { enablePointLabel: false, useMesh: false, animate: true, motionConfig: "gentle", defs: [], fill: [], role: "img" }), fe = ie({}, de, { pixelRatio: "undefined" != typeof window && window.devicePixelRatio || 1 }), pe = function(e3) {
  var i2 = e3.curve;
  return reactExports.useMemo(function() {
    return H$1().defined(function(e4) {
      return null !== e4.x && null !== e4.y;
    }).x(function(e4) {
      return e4.x;
    }).y(function(e4) {
      return e4.y;
    }).curve(qt(i2));
  }, [i2]);
}, he = function(e3) {
  var i2 = e3.curve, n2 = e3.yScale, t2 = e3.areaBaselineValue;
  return reactExports.useMemo(function() {
    return I$1().defined(function(e4) {
      return null !== e4.x && null !== e4.y;
    }).x(function(e4) {
      return e4.x;
    }).y1(function(e4) {
      return e4.y;
    }).curve(qt(i2)).y0(n2(t2));
  }, [i2, n2, t2]);
}, ye = function(e3) {
  var i2 = e3.enableSlices, n2 = e3.points, t2 = e3.width, o2 = e3.height;
  return reactExports.useMemo(function() {
    if (false === i2)
      return [];
    if ("x" === i2) {
      var e4 = /* @__PURE__ */ new Map();
      return n2.forEach(function(r3) {
        null !== r3.data.x && null !== r3.data.y && (e4.has(r3.x) ? e4.get(r3.x).push(r3) : e4.set(r3.x, [r3]));
      }), Array.from(e4.entries()).sort(function(e6, r3) {
        return e6[0] - r3[0];
      }).map(function(e6, r3, i3) {
        var n3, a2 = e6[0], s = e6[1], l2 = i3[r3 - 1], u2 = i3[r3 + 1];
        return { id: a2, x0: n3 = l2 ? a2 - (a2 - l2[0]) / 2 : a2, x: a2, y0: 0, y: 0, width: u2 ? a2 - n3 + (u2[0] - a2) / 2 : t2 - n3, height: o2, points: s.reverse() };
      });
    }
    if ("y" === i2) {
      var r2 = /* @__PURE__ */ new Map();
      return n2.forEach(function(e6) {
        null !== e6.data.x && null !== e6.data.y && (r2.has(e6.y) ? r2.get(e6.y).push(e6) : r2.set(e6.y, [e6]));
      }), Array.from(r2.entries()).sort(function(e6, r3) {
        return e6[0] - r3[0];
      }).map(function(e6, r3, i3) {
        var n3, a2, s = e6[0], l2 = e6[1], u2 = i3[r3 - 1], d = i3[r3 + 1];
        return n3 = u2 ? s - (s - u2[0]) / 2 : s, a2 = d ? s - n3 + (d[0] - s) / 2 : o2 - n3, { id: s, x0: 0, x: 0, y0: n3, y: s, width: t2, height: a2, points: l2.reverse() };
      });
    }
  }, [i2, n2]);
}, be = function(e3) {
  var t2 = e3.data, o2 = e3.xScale, a2 = void 0 === o2 ? ce.xScale : o2, s = e3.xFormat, l2 = e3.yScale, d = void 0 === l2 ? ce.yScale : l2, c6 = e3.yFormat, f2 = e3.width, p2 = e3.height, h = e3.colors, b2 = void 0 === h ? ce.colors : h, g2 = e3.curve, m2 = void 0 === g2 ? ce.curve : g2, v2 = e3.areaBaselineValue, x2 = void 0 === v2 ? ce.areaBaselineValue : v2, R2 = e3.pointColor, q = void 0 === R2 ? ce.pointColor : R2, O2 = e3.pointBorderColor, S2 = void 0 === O2 ? ce.pointBorderColor : O2, C2 = e3.enableSlices, T2 = void 0 === C2 ? ce.enableSlicesTooltip : C2, M2 = Xt(s), w2 = Xt(c6), W2 = pr(b2, "id"), G = Vt(), L2 = We$1(q, G), P2 = We$1(S2, G), j2 = reactExports.useState([]), F2 = j2[0], V2 = j2[1], E2 = reactExports.useMemo(function() {
    return dn(t2.filter(function(e4) {
      return -1 === F2.indexOf(e4.id);
    }), a2, d, f2, p2);
  }, [t2, F2, a2, d, f2, p2]), Y2 = E2.xScale, D2 = E2.yScale, X2 = E2.series, z2 = reactExports.useMemo(function() {
    var e4 = t2.map(function(e6) {
      return { id: e6.id, label: e6.id, color: W2(e6) };
    }), r2 = e4.map(function(e6) {
      return ie({}, X2.find(function(r3) {
        return r3.id === e6.id;
      }), { color: e6.color });
    }).filter(function(e6) {
      return Boolean(e6.id);
    });
    return { legendData: e4.map(function(e6) {
      return ie({}, e6, { hidden: !r2.find(function(r3) {
        return r3.id === e6.id;
      }) });
    }).reverse(), series: r2 };
  }, [t2, X2, W2]), A2 = z2.legendData, H2 = z2.series, I2 = reactExports.useCallback(function(e4) {
    V2(function(r2) {
      return r2.indexOf(e4) > -1 ? r2.filter(function(r3) {
        return r3 !== e4;
      }) : [].concat(r2, [e4]);
    });
  }, []), K2 = function(e4) {
    var i2 = e4.series, n2 = e4.getPointColor, t3 = e4.getPointBorderColor, o3 = e4.formatX, a3 = e4.formatY;
    return reactExports.useMemo(function() {
      return i2.reduce(function(e6, r2) {
        return [].concat(e6, r2.data.filter(function(e7) {
          return null !== e7.position.x && null !== e7.position.y;
        }).map(function(i3, s2) {
          var l3 = { id: r2.id + "." + s2, index: e6.length + s2, serieId: r2.id, serieColor: r2.color, x: i3.position.x, y: i3.position.y };
          return l3.color = n2(r2), l3.borderColor = t3(l3), l3.data = ie({}, i3.data, { xFormatted: o3(i3.data.x), yFormatted: a3(i3.data.y) }), l3;
        }));
      }, []);
    }, [i2, n2, t3, o3, a3]);
  }({ series: H2, getPointColor: L2, getPointBorderColor: P2, formatX: M2, formatY: w2 }), N2 = ye({ enableSlices: T2, points: K2, width: f2, height: p2 });
  return { legendData: A2, toggleSerie: I2, lineGenerator: pe({ curve: m2 }), areaGenerator: he({ curve: m2, yScale: D2, areaBaselineValue: x2 }), getColor: W2, series: H2, xScale: Y2, yScale: D2, slices: N2, points: K2 };
}, ge = function(e3) {
  var r2 = e3.areaBlendMode, i2 = e3.areaOpacity, n2 = e3.color, t2 = e3.fill, o2 = e3.path, a2 = tt(), s = a2.animate, l2 = a2.config, u2 = it(o2), d = useSpring({ color: n2, config: l2, immediate: !s });
  return jsx(animated.path, { d: u2, fill: t2 || d.color, fillOpacity: i2, strokeWidth: 0, style: { mixBlendMode: r2 } });
};
ge.propTypes = { areaBlendMode: Mt.isRequired, areaOpacity: K$2.number.isRequired, color: K$2.string, fill: K$2.string, path: K$2.string.isRequired };
var me = function(e3) {
  var r2 = e3.areaGenerator, i2 = e3.areaOpacity, n2 = e3.areaBlendMode, t2 = e3.lines.slice(0).reverse();
  return jsx("g", { children: t2.map(function(e4) {
    return jsx(ge, ie({ path: r2(e4.data.map(function(e6) {
      return e6.position;
    })) }, ie({ areaOpacity: i2, areaBlendMode: n2 }, e4)), e4.id);
  }) });
};
me.propTypes = { areaGenerator: K$2.func.isRequired, areaOpacity: K$2.number.isRequired, areaBlendMode: Mt.isRequired, lines: K$2.arrayOf(K$2.object).isRequired };
var ve = reactExports.memo(me), xe = function(e3) {
  var i2 = e3.lineGenerator, n2 = e3.points, t2 = e3.color, o2 = e3.thickness, a2 = reactExports.useMemo(function() {
    return i2(n2);
  }, [i2, n2]), s = it(a2);
  return jsx(animated.path, { d: s, fill: "none", strokeWidth: o2, stroke: t2 });
};
xe.propTypes = { points: K$2.arrayOf(K$2.shape({ x: K$2.oneOfType([K$2.string, K$2.number]), y: K$2.oneOfType([K$2.string, K$2.number]) })), lineGenerator: K$2.func.isRequired, color: K$2.string.isRequired, thickness: K$2.number.isRequired };
var Re = reactExports.memo(xe), qe = function(e3) {
  var r2 = e3.lines, i2 = e3.lineGenerator, n2 = e3.lineWidth;
  return r2.slice(0).reverse().map(function(e4) {
    var r3 = e4.id, t2 = e4.data, o2 = e4.color;
    return jsx(Re, { id: r3, points: t2.map(function(e6) {
      return e6.position;
    }), lineGenerator: i2, color: o2, thickness: n2 }, r3);
  });
};
qe.propTypes = { lines: K$2.arrayOf(K$2.shape({ id: K$2.oneOfType([K$2.string, K$2.number]).isRequired, color: K$2.string.isRequired, data: K$2.arrayOf(K$2.shape({ data: K$2.shape({ x: K$2.oneOfType([K$2.string, K$2.number, K$2.instanceOf(Date)]), y: K$2.oneOfType([K$2.string, K$2.number, K$2.instanceOf(Date)]) }).isRequired, position: K$2.shape({ x: K$2.number, y: K$2.number }).isRequired })).isRequired })).isRequired, lineWidth: K$2.number.isRequired, lineGenerator: K$2.func.isRequired };
var Oe = reactExports.memo(qe), Se = function(e3) {
  var r2 = e3.slice, i2 = e3.axis, o2 = e3.debug, a2 = e3.tooltip, s = e3.isCurrent, l2 = e3.setCurrent, u2 = k$4(), d = u2.showTooltipFromEvent, c6 = u2.hideTooltip, f2 = reactExports.useCallback(function(e4) {
    d(reactExports.createElement(a2, { slice: r2, axis: i2 }), e4, "right"), l2(r2);
  }, [d, a2, r2]), p2 = reactExports.useCallback(function(e4) {
    d(reactExports.createElement(a2, { slice: r2, axis: i2 }), e4, "right");
  }, [d, a2, r2]), h = reactExports.useCallback(function() {
    c6(), l2(null);
  }, [c6]);
  return jsx("rect", { x: r2.x0, y: r2.y0, width: r2.width, height: r2.height, stroke: "red", strokeWidth: o2 ? 1 : 0, strokeOpacity: 0.75, fill: "red", fillOpacity: s && o2 ? 0.35 : 0, onMouseEnter: f2, onMouseMove: p2, onMouseLeave: h });
};
Se.propTypes = { slice: K$2.object.isRequired, axis: K$2.oneOf(["x", "y"]).isRequired, debug: K$2.bool.isRequired, height: K$2.number.isRequired, tooltip: K$2.oneOfType([K$2.func, K$2.object]), isCurrent: K$2.bool.isRequired, setCurrent: K$2.func.isRequired };
var Ce = reactExports.memo(Se), Te = function(e3) {
  var r2 = e3.slices, i2 = e3.axis, n2 = e3.debug, t2 = e3.height, o2 = e3.tooltip, a2 = e3.current, s = e3.setCurrent;
  return r2.map(function(e4) {
    return jsx(Ce, { slice: e4, axis: i2, debug: n2, height: t2, tooltip: o2, setCurrent: s, isCurrent: null !== a2 && a2.id === e4.id }, e4.id);
  });
};
Te.propTypes = { slices: K$2.arrayOf(K$2.shape({ id: K$2.oneOfType([K$2.number, K$2.string, K$2.instanceOf(Date)]).isRequired, x: K$2.number.isRequired, y: K$2.number.isRequired, points: K$2.arrayOf(K$2.object).isRequired })).isRequired, axis: K$2.oneOf(["x", "y"]).isRequired, debug: K$2.bool.isRequired, height: K$2.number.isRequired, tooltip: K$2.oneOfType([K$2.func, K$2.object]).isRequired, current: K$2.object, setCurrent: K$2.func.isRequired };
var Me = reactExports.memo(Te), we = function(e3) {
  var r2 = e3.points, i2 = e3.symbol, n2 = e3.size, t2 = e3.borderWidth, o2 = e3.enableLabel, a2 = e3.label, s = e3.labelYOffset, l2 = Vt(), d = Ei(a2), c6 = r2.slice(0).reverse().map(function(e4) {
    return { id: e4.id, x: e4.x, y: e4.y, datum: e4.data, fill: e4.color, stroke: e4.borderColor, label: o2 ? d(e4.data) : null };
  });
  return jsx("g", { children: c6.map(function(e4) {
    return jsx(Mi, { x: e4.x, y: e4.y, datum: e4.datum, symbol: i2, size: n2, color: e4.fill, borderWidth: t2, borderColor: e4.stroke, label: e4.label, labelYOffset: s, theme: l2 }, e4.id);
  }) });
};
we.propTypes = { points: K$2.arrayOf(K$2.object), symbol: K$2.func, size: K$2.number.isRequired, color: K$2.func.isRequired, borderWidth: K$2.number.isRequired, borderColor: K$2.func.isRequired, enableLabel: K$2.bool.isRequired, label: K$2.oneOfType([K$2.string, K$2.func]).isRequired, labelYOffset: K$2.number };
var Be = reactExports.memo(we), ke = function(e3) {
  var r2 = e3.points, i2 = e3.width, o2 = e3.height, a2 = e3.margin, s = e3.setCurrent, l2 = e3.onMouseEnter, u2 = e3.onMouseMove, d = e3.onMouseLeave, c6 = e3.onClick, f2 = e3.tooltip, p2 = e3.debug, h = k$4(), y2 = h.showTooltipAt, b2 = h.hideTooltip, g2 = reactExports.useCallback(function(e4, r3) {
    y2(reactExports.createElement(f2, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), s(e4), l2 && l2(e4, r3);
  }, [s, y2, f2, l2, a2]), m2 = reactExports.useCallback(function(e4, r3) {
    y2(reactExports.createElement(f2, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), s(e4), u2 && u2(e4, r3);
  }, [s, y2, f2, u2]), v2 = reactExports.useCallback(function(e4, r3) {
    b2(), s(null), d && d(e4, r3);
  }, [b2, s, d]), x2 = reactExports.useCallback(function(e4, r3) {
    c6 && c6(e4, r3);
  }, [c6]);
  return jsx(P, { nodes: r2, width: i2, height: o2, onMouseEnter: g2, onMouseMove: m2, onMouseLeave: v2, onClick: x2, debug: p2 });
};
ke.propTypes = { points: K$2.arrayOf(K$2.object).isRequired, width: K$2.number.isRequired, height: K$2.number.isRequired, margin: K$2.object.isRequired, setCurrent: K$2.func.isRequired, onMouseEnter: K$2.func, onMouseMove: K$2.func, onMouseLeave: K$2.func, onClick: K$2.func, tooltip: K$2.oneOfType([K$2.func, K$2.object]).isRequired, debug: K$2.bool.isRequired };
var We = reactExports.memo(ke), Ge = function(e3) {
  var r2 = e3.data, n2 = e3.xScale, t2 = e3.xFormat, a2 = e3.yScale, s = e3.yFormat, l2 = e3.layers, d = e3.curve, c6 = e3.areaBaselineValue, f2 = e3.colors, p2 = e3.margin, h = e3.width, y2 = e3.height, b2 = e3.axisTop, g2 = e3.axisRight, m2 = e3.axisBottom, v2 = e3.axisLeft, x2 = e3.enableGridX, C2 = e3.enableGridY, T2 = e3.gridXValues, M2 = e3.gridYValues, w2 = e3.lineWidth, B2 = e3.enableArea, W2 = e3.areaOpacity, P2 = e3.areaBlendMode, j2 = e3.enablePoints, F2 = e3.pointSymbol, E2 = e3.pointSize, Y2 = e3.pointColor, D2 = e3.pointBorderWidth, X$22 = e3.pointBorderColor, z2 = e3.enablePointLabel, H2 = e3.pointLabel, I2 = e3.pointLabelYOffset, J2 = e3.defs, K2 = e3.fill, Q2 = e3.markers, U = e3.legends, Z = e3.isInteractive, $2 = e3.useMesh, _2 = e3.debugMesh, ee = e3.onMouseEnter, re2 = e3.onMouseMove, ne2 = e3.onMouseLeave, te2 = e3.onClick, oe2 = e3.tooltip, ae2 = e3.enableSlices, se2 = e3.debugSlices, le2 = e3.sliceTooltip, ue2 = e3.enableCrosshair, de2 = e3.crosshairType, ce2 = e3.role, fe2 = At(h, y2, p2), pe2 = fe2.margin, he2 = fe2.innerWidth, ye2 = fe2.innerHeight, ge2 = fe2.outerWidth, me2 = fe2.outerHeight, xe2 = be({ data: r2, xScale: n2, xFormat: t2, yScale: a2, yFormat: s, width: he2, height: ye2, colors: f2, curve: d, areaBaselineValue: c6, pointColor: Y2, pointBorderColor: X$22, enableSlices: ae2 }), Re2 = xe2.legendData, qe2 = xe2.toggleSerie, Se2 = xe2.lineGenerator, Ce2 = xe2.areaGenerator, Te2 = xe2.series, we2 = xe2.xScale, ke2 = xe2.yScale, Ge2 = xe2.slices, Le2 = xe2.points, Pe2 = Vt(), je2 = We$1(Y2, Pe2), Fe2 = We$1(X$22, Pe2), Ve2 = reactExports.useState(null), Ee = Ve2[0], Ye = Ve2[1], De2 = reactExports.useState(null), Xe2 = De2[0], ze = De2[1], Ae = { grid: jsx(B$1, { theme: Pe2, width: he2, height: ye2, xScale: x2 ? we2 : null, yScale: C2 ? ke2 : null, xValues: T2, yValues: M2 }, "grid"), markers: jsx(Bi, { markers: Q2, width: he2, height: ye2, xScale: we2, yScale: ke2, theme: Pe2 }, "markers"), axes: jsx(X$1, { xScale: we2, yScale: ke2, width: he2, height: ye2, theme: Pe2, top: b2, right: g2, bottom: m2, left: v2 }, "axes"), areas: null, lines: jsx(Oe, { lines: Te2, lineGenerator: Se2, lineWidth: w2 }, "lines"), slices: null, points: null, crosshair: null, mesh: null, legends: U.map(function(e4, r3) {
    return jsx(X, ie({}, e4, { containerWidth: he2, containerHeight: ye2, data: e4.data || Re2, theme: Pe2, toggleSerie: e4.toggleSerie ? qe2 : void 0 }), "legend." + r3);
  }) }, He2 = rn$1(J2, Te2, K2);
  return B2 && (Ae.areas = jsx(ve, { areaGenerator: Ce2, areaOpacity: W2, areaBlendMode: P2, lines: Te2 }, "areas")), Z && false !== ae2 && (Ae.slices = jsx(Me, { slices: Ge2, axis: ae2, debug: se2, height: ye2, tooltip: le2, current: Xe2, setCurrent: ze }, "slices")), j2 && (Ae.points = jsx(Be, { points: Le2, symbol: F2, size: E2, color: je2, borderWidth: D2, borderColor: Fe2, enableLabel: z2, label: H2, labelYOffset: I2 }, "points")), Z && ue2 && (null !== Ee && (Ae.crosshair = jsx(P$3, { width: he2, height: ye2, x: Ee.x, y: Ee.y, type: de2 }, "crosshair")), null !== Xe2 && (Ae.crosshair = jsx(P$3, { width: he2, height: ye2, x: Xe2.x, y: Xe2.y, type: ae2 }, "crosshair"))), Z && $2 && false === ae2 && (Ae.mesh = jsx(We, { points: Le2, width: he2, height: ye2, margin: pe2, current: Ee, setCurrent: Ye, onMouseEnter: ee, onMouseMove: re2, onMouseLeave: ne2, onClick: te2, tooltip: oe2, debug: _2 }, "mesh")), jsx(Si, { defs: He2, width: ge2, height: me2, margin: pe2, role: ce2, children: l2.map(function(r3, i2) {
    return "function" == typeof r3 ? jsx(reactExports.Fragment, { children: r3(ie({}, e3, { innerWidth: he2, innerHeight: ye2, series: Te2, slices: Ge2, points: Le2, xScale: we2, yScale: ke2, lineGenerator: Se2, areaGenerator: Ce2, currentPoint: Ee, setCurrentPoint: Ye, currentSlice: Xe2, setCurrentSlice: ze })) }, i2) : Ae[r3];
  }) });
};
Ge.propTypes = le, Ge.defaultProps = ce;
var Le = Fi(Ge), Pe = function(e3) {
  return jsx(ti, { children: function(r2) {
    var i2 = r2.width, n2 = r2.height;
    return jsx(Le, ie({ width: i2, height: n2 }, e3));
  } });
}, je = function(e3) {
  var r2 = e3.width, o2 = e3.height, a2 = e3.margin, d = e3.pixelRatio, c6 = e3.data, f2 = e3.xScale, p2 = e3.xFormat, h = e3.yScale, y2 = e3.yFormat, b2 = e3.curve, g2 = e3.layers, m2 = e3.colors, v2 = e3.lineWidth, x$12 = e3.enableArea, q = e3.areaBaselineValue, O$12 = e3.areaOpacity, S$12 = e3.enablePoints, C$12 = e3.pointSize, w2 = e3.pointColor, B2 = e3.pointBorderWidth, k2 = e3.pointBorderColor, W2 = e3.enableGridX, G = e3.gridXValues, L2 = e3.enableGridY, F2 = e3.gridYValues, V$12 = e3.axisTop, Y2 = e3.axisRight, D2 = e3.axisBottom, X2 = e3.axisLeft, A2 = e3.legends, H$12 = e3.isInteractive, I2 = e3.debugMesh, J2 = e3.onMouseLeave, K2 = e3.onClick, Q2 = e3.tooltip, U = e3.canvasRef, Z = reactExports.useRef(null), $2 = At(r2, o2, a2), ne2 = $2.margin, te2 = $2.innerWidth, oe2 = $2.innerHeight, ae2 = $2.outerWidth, se2 = $2.outerHeight, le2 = Vt(), ue2 = reactExports.useState(null), de2 = ue2[0], ce2 = ue2[1], fe2 = be({ data: c6, xScale: f2, xFormat: p2, yScale: h, yFormat: y2, width: te2, height: oe2, colors: m2, curve: b2, areaBaselineValue: q, pointColor: w2, pointBorderColor: k2 }), pe2 = fe2.lineGenerator, he2 = fe2.areaGenerator, ye2 = fe2.series, ge2 = fe2.xScale, me2 = fe2.yScale, ve2 = fe2.points, xe2 = x({ points: ve2, width: te2, height: oe2, debug: I2 }), Re2 = xe2.delaunay, qe2 = xe2.voronoi;
  reactExports.useEffect(function() {
    U && (U.current = Z.current), Z.current.width = ae2 * d, Z.current.height = se2 * d;
    var e4 = Z.current.getContext("2d");
    e4.scale(d, d), e4.fillStyle = le2.background, e4.fillRect(0, 0, ae2, se2), e4.translate(ne2.left, ne2.top), g2.forEach(function(r3) {
      if ("function" == typeof r3 && r3({ ctx: e4, innerWidth: te2, innerHeight: oe2, series: ye2, points: ve2, xScale: ge2, yScale: me2, lineWidth: v2, lineGenerator: pe2, areaGenerator: he2, currentPoint: de2, setCurrentPoint: ce2 }), "grid" === r3 && le2.grid.line.strokeWidth > 0 && (e4.lineWidth = le2.grid.line.strokeWidth, e4.strokeStyle = le2.grid.line.stroke, W2 && C(e4, { width: te2, height: oe2, scale: ge2, axis: "x", values: G }), L2 && C(e4, { width: te2, height: oe2, scale: me2, axis: "y", values: F2 })), "axes" === r3 && V(e4, { xScale: ge2, yScale: me2, width: te2, height: oe2, top: V$12, right: Y2, bottom: D2, left: X2, theme: le2 }), "areas" === r3 && true === x$12 && (e4.save(), e4.globalAlpha = O$12, he2.context(e4), ye2.forEach(function(r4) {
        e4.fillStyle = r4.color, e4.beginPath(), he2(r4.data.map(function(e6) {
          return e6.position;
        })), e4.fill();
      }), e4.restore()), "lines" === r3 && (pe2.context(e4), ye2.forEach(function(r4) {
        e4.strokeStyle = r4.color, e4.lineWidth = v2, e4.beginPath(), pe2(r4.data.map(function(e6) {
          return e6.position;
        })), e4.stroke();
      })), "points" === r3 && true === S$12 && C$12 > 0 && ve2.forEach(function(r4) {
        e4.fillStyle = r4.color, e4.beginPath(), e4.arc(r4.x, r4.y, C$12 / 2, 0, 2 * Math.PI), e4.fill(), B2 > 0 && (e4.strokeStyle = r4.borderColor, e4.lineWidth = B2, e4.stroke());
      }), "mesh" === r3 && true === I2 && (O(e4, qe2), de2 && S(e4, qe2, de2.index)), "legends" === r3) {
        var i2 = ye2.map(function(e6) {
          return { id: e6.id, label: e6.id, color: e6.color };
        }).reverse();
        A2.forEach(function(r4) {
          H(e4, ie({}, r4, { data: r4.data || i2, containerWidth: te2, containerHeight: oe2, theme: le2 }));
        });
      }
    });
  }, [Z, ae2, se2, g2, le2, pe2, ye2, ge2, me2, W2, G, L2, F2, V$12, Y2, D2, X2, A2, ve2, S$12, C$12, de2]);
  var Oe2 = reactExports.useCallback(function(e4) {
    var r3 = Qi(Z.current, e4), i2 = r3[0], n2 = r3[1];
    if (!Ji(ne2.left, ne2.top, te2, oe2, i2, n2))
      return null;
    var t2 = Re2.find(i2 - ne2.left, n2 - ne2.top);
    return ve2[t2];
  }, [Z, ne2, te2, oe2, Re2]), Se2 = k$4(), Ce2 = Se2.showTooltipFromEvent, Te2 = Se2.hideTooltip, Me2 = reactExports.useCallback(function(e4) {
    var r3 = Oe2(e4);
    ce2(r3), r3 ? Ce2(reactExports.createElement(Q2, { point: r3 }), e4) : Te2();
  }, [Oe2, ce2, Ce2, Te2, Q2]), we2 = reactExports.useCallback(function(e4) {
    Te2(), ce2(null), de2 && J2 && J2(de2, e4);
  }, [Te2, ce2, J2]), Be2 = reactExports.useCallback(function(e4) {
    if (K2) {
      var r3 = Oe2(e4);
      r3 && K2(r3, e4);
    }
  }, [Oe2, K2]);
  return jsx("canvas", { ref: Z, width: ae2 * d, height: se2 * d, style: { width: ae2, height: se2, cursor: H$12 ? "auto" : "normal" }, onMouseEnter: H$12 ? Me2 : void 0, onMouseMove: H$12 ? Me2 : void 0, onMouseLeave: H$12 ? we2 : void 0, onClick: H$12 ? Be2 : void 0 });
};
je.propTypes = ue, je.defaultProps = fe;
var Fe = Fi(je), Ve = reactExports.forwardRef(function(e3, r2) {
  return jsx(Fe, ie({}, e3, { canvasRef: r2 }));
});
reactExports.forwardRef(function(e3, r2) {
  return jsx(ti, { children: function(i2) {
    var n2 = i2.width, t2 = i2.height;
    return jsx(Ve, ie({ width: n2, height: t2 }, e3, { ref: r2 }));
  } });
});
const Chart = ({
  bovines
}) => {
  const {
    t: t2
  } = useTranslation("milkProductivity");
  const formatX = (x2) => format$3(x2, `yyyy-MM-dd hh:mm`);
  const data = [...bovines.map(({
    plaque,
    name,
    milkProductivities
  }) => {
    return {
      id: [plaque, name].join(" "),
      data: milkProductivities.map(({
        value,
        date: date2
      }) => ({
        x: parseISO(date2),
        y: value
      })).sort((a2, b2) => +a2.x - +b2.x)
    };
  })];
  const getValue = (cb) => cb(...data.map((item) => cb(...item.data.map(({
    y: y2
  }) => typeof y2 === "number" ? y2 : 0))));
  const yScaleMin = getValue(Math.min);
  const yScaleMax = getValue(Math.max);
  const inflation = 5;
  const yScale = {
    type: "linear",
    min: yScaleMin > inflation ? yScaleMin - inflation : yScaleMin,
    max: yScaleMax + inflation
  };
  const bottomLegend = t2("date");
  const leftLegend = t2("liters");
  return /* @__PURE__ */ jsx("div", { style: {
    height: "300px"
  }, children: /* @__PURE__ */ jsx(Pe, { data, margin: {
    top: 20,
    right: 60,
    bottom: 90,
    left: 60
  }, xScale: {
    type: "time",
    precision: "minute"
  }, yScale, axisTop: null, axisRight: null, axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: bottomLegend,
    legendOffset: 36,
    legendPosition: "middle",
    format: (x2) => format$3(x2, `yyyy-MM-dd`)
  }, axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: leftLegend,
    legendOffset: -40,
    legendPosition: "middle"
  }, tooltip: ({
    point: {
      data: {
        x: x2,
        y: y2
      },
      serieColor
    }
  }) => /* @__PURE__ */ jsx(w$3, { id: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: bottomLegend }),
    " ",
    formatX(x2),
    " ",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("b", { children: leftLegend }),
    " ",
    y2
  ] }) }), enableChip: true, color: serieColor }), colors: {
    scheme: "nivo"
  }, pointSize: 10, pointColor: {
    theme: "background"
  }, pointBorderWidth: 2, pointBorderColor: {
    from: "serieColor"
  }, pointLabel: "y", pointLabelYOffset: -12, useMesh: true, legends: data.length > 1 && [{
    anchor: "bottom-left",
    direction: "row",
    justify: false,
    translateX: 0,
    translateY: 70,
    itemsSpacing: 0,
    itemDirection: "left-to-right",
    itemWidth: 80,
    itemHeight: 20,
    itemOpacity: 0.75,
    symbolSize: 12,
    symbolShape: "circle",
    symbolBorderColor: "rgba(0, 0, 0, .5)",
    onClick: console.log,
    effects: [{
      on: "hover",
      style: {
        itemBackground: "rgba(0, 0, 0, .03)",
        itemOpacity: 1
      }
    }]
  }] || [] }) });
};
export {
  Chart,
  Chart as default
};
