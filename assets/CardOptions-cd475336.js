import { C as jsxs, at as Fragment, aT as Button, bT as Link, n as jsx, T as Typography, a0 as Box, aW as IconButton, cK as default_1 } from "./index-60a9ad09.js";
const moreVertIconButtonSx = {
  position: "absolute",
  right: 0,
  top: 0,
  padding: 2
};
const ghostMoreVertIconButtonSx = {
  padding: 2
};
const buttonLinkSx = {
  padding: (theme) => theme.spacing(2, 2, 1, 2)
};
const labelSx = {
  width: "100%",
  textTransform: "initial"
};
const CardOptions = ({
  label,
  onClickLabel,
  onClickOptions,
  to
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Button, { variant: "text", fullWidth: true, sx: buttonLinkSx, onClick: onClickLabel, ...to ? {
      to,
      component: Link
    } : {}, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h5", noWrap: true, align: "left", sx: labelSx, color: "text.primary", children: label || "" }),
      /* @__PURE__ */ jsx(Box, { sx: ghostMoreVertIconButtonSx })
    ] }),
    /* @__PURE__ */ jsx(IconButton, { sx: moreVertIconButtonSx, component: "div", onClick: onClickOptions, size: "large", children: /* @__PURE__ */ jsx(default_1, {}) })
  ] });
};
export {
  CardOptions as C
};
