import { w as generateUtilityClasses, t as generateUtilityClass, F as createSvgIcon, n as jsx, x as styled, P as Paper, I as capitalize, N as darken, M as lighten, y as _extends, r as reactExports, z as useThemeProps, A as _objectWithoutPropertiesLoose, aW as IconButton, cZ as ClearIcon, C as jsxs, o as clsx, q as composeClasses, Z as SvgIcon, c_ as FormControl, c$ as InputLabel, d0 as Select, aS as mergeSx, cE as MenuItem, bk as CircularProgress, bn as FormHelperText, bo as RenderErrorsDefault, d1 as CreateBovineDocument, d2 as EditBovineDocument, d3 as DeleteBovineDocument, bR as useCosva, d4 as usePagination, aD as useMutation, d5 as BOVINES_QUERY, a5 as produce, cT as writeBovine, d6 as GetBovinePurposeTypesDocument, d7 as GetBovineReproductiveStatesDocument, d8 as BovineReproductiveStateConfigurationsDocument, d9 as GetBovineProgenitorsDocument, da as GetAnimalGendersDocument, db as GetAnimalBreedsDocument, dc as GetAnimalDevelopmentStagesDocument, aG as useQuery, c6 as CategoryGroupTypes, dd as AnimalGendersTypes, de as TypesStagesBovineDevelopment, cW as BovinePurposeTypes, az as requireCreateSvgIcon, aA as interopRequireDefaultExports, aB as require$$2, O as alpha, G as emphasize, as as React, u as useTranslation, c2 as getCode, cG as Zoom, cI as Checkbox, a0 as Box, T as Typography, bh as observer, a2 as Grid, df as Fade, bi as TransformLabel, bl as MessagesTranslate, dg as parseCode, dh as AutoCompleteSingleBase, di as AutoCompleteBase, bz as ObserverComponent, aT as Button, E as ButtonBase, a3 as Avatar, bf as default_1$4, dj as red, dk as DialogLoading, dl as useMediaQuery, bQ as default_1$5, aU as MuiDialog, dm as DialogAppBar, bw as DialogTitle, aY as DialogContent, bx as DialogContentText, b2 as TextField, aV as DialogActions, dn as DIALOG_BREAKPOINT, dp as TableRow, dq as TableCell, dr as Table, ds as TableHead, dt as TableBody, at as Fragment, bL as Autocomplete, du as CosvaTable, dv as OrderTypes, bF as ListItemText, ax as DialogSimple, bO as FieldsBuilder, bI as FieldsRender, au as Snackbar, bP as useFields } from "./index-60a9ad09.js";
import { d as default_1$3 } from "./ErrorOutline-27089ca2.js";
import { e as Card, f as CardActionArea, l as CardMedia, m as CardContent, c as createAPIImageRoute, L as ListItem, n as ListItemAvatar } from "./index-9ab0c8c5.js";
import { u as useField } from "./Save-95d94cd2.js";
function getAlertUtilityClass(slot) {
  return generateUtilityClass("MuiAlert", slot);
}
const alertClasses = generateUtilityClasses("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
const alertClasses$1 = alertClasses;
const SuccessOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined");
const ReportProblemOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined");
const ErrorOutlineIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline");
const InfoOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined");
const _excluded$1 = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `${variant}${capitalize(color || severity)}`, `${variant}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return composeClasses(slots, getAlertUtilityClass, classes);
};
const AlertRoot = styled(Paper, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color || ownerState.severity)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const getColor = theme.palette.mode === "light" ? darken : lighten;
  const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
  const color = ownerState.color || ownerState.severity;
  return _extends({}, theme.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, color && ownerState.variant === "standard" && {
    color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
    backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, 0.9),
    [`& .${alertClasses$1.icon}`]: theme.vars ? {
      color: theme.vars.palette.Alert[`${color}IconColor`]
    } : {
      color: theme.palette[color].main
    }
  }, color && ownerState.variant === "outlined" && {
    color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
    border: `1px solid ${(theme.vars || theme).palette[color].light}`,
    [`& .${alertClasses$1.icon}`]: theme.vars ? {
      color: theme.vars.palette.Alert[`${color}IconColor`]
    } : {
      color: theme.palette[color].main
    }
  }, color && ownerState.variant === "filled" && _extends({
    fontWeight: theme.typography.fontWeightMedium
  }, theme.vars ? {
    color: theme.vars.palette.Alert[`${color}FilledColor`],
    backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
  } : {
    backgroundColor: theme.palette.mode === "dark" ? theme.palette[color].dark : theme.palette[color].main,
    color: theme.palette.getContrastText(theme.palette[color].main)
  }));
});
const AlertIcon = styled("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (props, styles) => styles.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
});
const AlertMessage = styled("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (props, styles) => styles.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
});
const AlertAction = styled("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
});
const defaultIconMapping = {
  success: /* @__PURE__ */ jsx(SuccessOutlinedIcon, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ jsx(ReportProblemOutlinedIcon, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ jsx(ErrorOutlineIcon, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ jsx(InfoOutlinedIcon, {
    fontSize: "inherit"
  })
};
const Alert = /* @__PURE__ */ reactExports.forwardRef(function Alert2(inProps, ref) {
  var _ref, _slots$closeButton, _ref2, _slots$closeIcon, _slotProps$closeButto, _slotProps$closeIcon;
  const props = useThemeProps({
    props: inProps,
    name: "MuiAlert"
  });
  const {
    action,
    children,
    className,
    closeText = "Close",
    color,
    components = {},
    componentsProps = {},
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = "alert",
    severity = "success",
    slotProps = {},
    slots = {},
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const ownerState = _extends({}, props, {
    color,
    severity,
    variant
  });
  const classes = useUtilityClasses$1(ownerState);
  const AlertCloseButton = (_ref = (_slots$closeButton = slots.closeButton) != null ? _slots$closeButton : components.CloseButton) != null ? _ref : IconButton;
  const AlertCloseIcon = (_ref2 = (_slots$closeIcon = slots.closeIcon) != null ? _slots$closeIcon : components.CloseIcon) != null ? _ref2 : ClearIcon;
  const closeButtonProps = (_slotProps$closeButto = slotProps.closeButton) != null ? _slotProps$closeButto : componentsProps.closeButton;
  const closeIconProps = (_slotProps$closeIcon = slotProps.closeIcon) != null ? _slotProps$closeIcon : componentsProps.closeIcon;
  return /* @__PURE__ */ jsxs(AlertRoot, _extends({
    role,
    elevation: 0,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: [icon !== false ? /* @__PURE__ */ jsx(AlertIcon, {
      ownerState,
      className: classes.icon,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /* @__PURE__ */ jsx(AlertMessage, {
      ownerState,
      className: classes.message,
      children
    }), action != null ? /* @__PURE__ */ jsx(AlertAction, {
      ownerState,
      className: classes.action,
      children: action
    }) : null, action == null && onClose ? /* @__PURE__ */ jsx(AlertAction, {
      ownerState,
      className: classes.action,
      children: /* @__PURE__ */ jsx(AlertCloseButton, _extends({
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose
      }, closeButtonProps, {
        children: /* @__PURE__ */ jsx(AlertCloseIcon, _extends({
          fontSize: "small"
        }, closeIconProps))
      }))
    }) : null]
  }));
});
const Alert$1 = Alert;
function getTableContainerUtilityClass(slot) {
  return generateUtilityClass("MuiTableContainer", slot);
}
generateUtilityClasses("MuiTableContainer", ["root"]);
const _excluded = ["className", "component"];
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableContainerUtilityClass, classes);
};
const TableContainerRoot = styled("div", {
  name: "MuiTableContainer",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  width: "100%",
  overflowX: "auto"
});
const TableContainer = /* @__PURE__ */ reactExports.forwardRef(function TableContainer2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTableContainer"
  });
  const {
    className,
    component = "div"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsx(TableContainerRoot, _extends({
    ref,
    as: component,
    className: clsx(classes.root, className),
    ownerState
  }, other));
});
const TableContainer$1 = TableContainer;
const CosvaMeat = (props) => /* @__PURE__ */ jsxs(SvgIcon, { color: "inherit", fontSize: "inherit", viewBox: "0 0 24 24", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M9.9,19.69c2.65-1.16.5-4.19,4.27-6,3.35-1.59,6.84-2.07,6.23-6.88S11.21-.56,6.16,4.24C.89,9.25,3.85,22.32,9.9,19.69Z", fill: "#ff7b8b" }),
  /* @__PURE__ */ jsx("path", { d: "M9.57,18.46c1.34-.58.75-4.81,4.23-6C17,11.3,19.57,9.91,19.41,7.3c-.23-3.55-8-6.29-12.38-2S4.81,20.52,9.57,18.46Z", fill: "#ff4755" }),
  /* @__PURE__ */ jsx("path", { d: "M14.17,13.71c-3.77,1.79-1.62,4.82-4.27,6-3.85,1.68-6.46-3-6.47-8h0v2h0c.06,4.47,2.39,9,6.41,8.48,2.84-.32,2.68-5.22,4.32-6.22,2.94-1.78,6.32-2,6.29-5.92h0V8.08c-.11,3.66-3.27,4.19-6.3,5.63Z", fill: "#994e37" }),
  /* @__PURE__ */ jsx("path", { d: "M13.8,15.31c-2.15,1.47-1.49,5.89-4.33,6.22-2.23.26-4-1-5-3,1.05,2.37,2.9,4,5.42,3.71,2.84-.32,2.68-5.22,4.32-6.22,2.94-1.78,6.32-2,6.29-5.92h0V8.08C20.47,13.25,16.64,13.36,13.8,15.31Z", fill: "#8c4534" }),
  /* @__PURE__ */ jsx("ellipse", { cx: "12.3", cy: "7.6", rx: "1.73", ry: "1.13", fill: "rgb(244, 233, 211)" }),
  /* @__PURE__ */ jsx("path", { d: "M12.32,8a1.84,1.84,0,0,1-1.63-.76.71.71,0,0,0-.1.37c0,.63.78,1.14,1.73,1.14s1.74-.51,1.74-1.14a.82.82,0,0,0-.1-.37A1.86,1.86,0,0,1,12.32,8Z", fill: "#e5d6be" })
] });
const CosvaMilk = (props) => /* @__PURE__ */ jsxs(SvgIcon, { color: "inherit", fontSize: "inherit", viewBox: "0 0 24 24", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M14.2 4.3L16 8.1s.8 1.6.8 3v8.8s.1 2-1.5 2H8.7c-1.7 0-1.5-2-1.5-2v-8.8c0-1.4.8-3 .8-3l1.8-3.8h4.4z", fill: "#f4f5f7" }),
  /* @__PURE__ */ jsx("path", { d: "M8.7 19.9v-8.8l.8-3 1.8-3.8H9.8L8 8.1s-.8 1.6-.8 3v8.8s-.1 2 1.5 2h1.5c-1.7 0-1.5-2-1.5-2z", fill: "#fff" }),
  /* @__PURE__ */ jsx("path", { d: "M7.3 11.8h9.5v4.5H7.3z", fill: "#50c1e9" }),
  /* @__PURE__ */ jsx("path", { d: "M7.3 11.8h1.3v4.5H7.3z", fill: "#87d3e8" }),
  /* @__PURE__ */ jsx("path", { d: "M15.3,3.2c0,0.6-0.5,1.1-1.1,1.1H9.8c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h4.4C14.8,2.1,15.3,2.6,15.3,3.2z ", fill: "#ffce55" }),
  /* @__PURE__ */ jsx("path", { d: "M10.4,3.2c0-0.6,0.5-1.1,1.1-1.1H9.8c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h1.7C10.9,4.3,10.4,3.8,10.4,3.2z ", fill: "#ffde94" }),
  /* @__PURE__ */ jsx("path", { d: "M17.2 11.1c0-1.4-.8-3.1-.9-3.2l-1.6-3.3c.6-.2 1-.8 1-1.4a1.54 1.54 0 0 0-1.5-1.5H9.8a1.54 1.54 0 0 0-1.5 1.5c0 .6.4 1.2 1 1.4L7.7 7.9c0 .1-.9 1.7-.9 3.2v8.8s-.1 1.2.6 1.9c.3.4.8.5 1.3.5h6.6c.5 0 1-.2 1.3-.5.6-.7.6-1.8.6-1.9v-8.8zM9 3.2c0-.4.3-.8.8-.8h4.4c.4 0 .8.3.8.8s-.4.8-.8.8H9.8c-.4 0-.8-.3-.8-.8zm-1.5 7.9c0-1.2.8-2.8.8-2.9L10 4.7h4l1.7 3.6s.8 1.6.8 2.8v.3h-9v-.3zm0 1.1h8.9v3.7H7.5v-3.7zm8.6 9.1c-.2.2-.4.3-.8.3H8.7c-.3 0-.6-.1-.8-.3-.4-.5-.4-1.3-.4-1.4v-3.3h8.9v3.3c.1.1.1.9-.3 1.4h0zm-6.2-8.4l-.3.8c-.1.3-.2.6-.2.9 0-.3-.1-.6-.2-.9l-.2-.8h-.8l-.1 2.4h.5v-1.9c0 .3.1.6.2.9l.3.9h.4l.6-1.8v1.9h.5l-.1-2.4h-.6zm1.2 0h.5v2.4h-.5zm1.6 0h-.6v2.3h1.5v-.4h-.9zm3.2 0h-.7l-.5.8c0 .1-.1.2-.2.3v-1H14v2.4h.5v-.8l.2-.3.6 1h.6l-.8-1.4.8-1z", fill: "#56596a" })
] });
const CosvaDNA = (props) => /* @__PURE__ */ jsxs(SvgIcon, { color: "inherit", fontSize: "inherit", ...props, children: [
  /* @__PURE__ */ jsx("g", { fill: "#ff4c4c", children: /* @__PURE__ */ jsx("path", { d: "M20 8.6c-.1 0-.1 0-.2-.1l-4-5.3c-.1-.1-.1-.4 0-.5s.3-.1.4 0l4 5.3c.1.1.1.4 0 .5-.1 0-.2.1-.2.1z" }) }),
  /* @__PURE__ */ jsx("path", { d: "M12.9 15.8c-.1 0-.1 0-.2-.1l-4.4-4.4c-.1-.1-.1-.3 0-.4s.3-.1.4 0l4.4 4.4c.1.1.1.3 0 .4s-.2.1-.2.1z", fill: "#8ac129" }),
  /* @__PURE__ */ jsx("path", { d: "M14.8 15c-.1 0-.1 0-.2-.1L9 9.4c-.1-.1-.1-.3 0-.4s.3-.1.4 0l5.5 5.5c.1.1.1.3 0 .4 0 .1-.1.1-.1.1z", fill: "#ff4c4c" }),
  /* @__PURE__ */ jsx("path", { d: "M15.5 13.2c-.1 0-.1 0-.2-.1l-4.4-4.4c-.1-.1-.1-.3 0-.4s.3-.1.4 0l4.4 4.4c.1.1.1.3 0 .4 0 0-.1.1-.2.1z", fill: "#8ac129" }),
  /* @__PURE__ */ jsx("path", { d: "M7.7 14.6c-1.8-.3-3.7-.4-5.2 1.1-.3.3-.3.7 0 .9s.7.3.9 0c1.2-1.2 2.8-1 4.6-.6l-.3-1.4z", fill: "#ffbf14" }),
  /* @__PURE__ */ jsx("path", { d: "M7.7 14.6c-.3-.1-.5-.1-.8-.1l.3 1.3c.3 0 .5.1.8.2l-.3-1.4z", fill: "#e0a812" }),
  /* @__PURE__ */ jsx("path", { d: "M16.6 3.5c.3-.3.3-.7 0-.9-.3-.3-.7-.3-.9 0-3.6 3.6 1.6 8.9-1.3 11.9-1.4 1.4-3.2 1-5.3.5l.3 1.4c2 .4 4.2.8 5.9-1 3.6-3.7-1.6-9 1.3-11.9z", fill: "#ffbf14" }),
  /* @__PURE__ */ jsx("path", { d: "M9.4 16.3c.2.1.5.1.7.2l-.3-1.4c-.2-.1-.5-.1-.7-.2l.3 1.4z", fill: "#e0a812" }),
  /* @__PURE__ */ jsx("path", { d: "M14.9 9.1l-.3-1.4c-2-.4-4.2-.8-5.9 1-3.6 3.6 1.6 8.9-1.3 11.9-.3.3-.3.7 0 .9.3.3.7.3.9 0 3.6-3.6-1.6-8.9 1.3-11.9 1.4-1.4 3.2-1 5.3-.5z", fill: "#45748c" }),
  /* @__PURE__ */ jsx("path", { d: "M14.6 7.7c-.2-.1-.5-.1-.7-.2 0 .5.1 1 .2 1.4.3.1.5.1.8.2l-.3-1.4z", fill: "#3a6175" }),
  /* @__PURE__ */ jsx("path", { d: "M21.4 7.4c-.3-.3-.7-.3-.9 0-1.2 1.2-2.8 1-4.6.6l.3 1.4c2 .4 3.7.3 5.2-1.1.3-.3.3-.7 0-.9z", fill: "#45748c" }),
  /* @__PURE__ */ jsx("path", { d: "M16.7 8.2c-.2 0-.5-.1-.7-.1l.3 1.4c.2 0 .5.1.7.1l-.3-1.4z", fill: "#3a6175" }),
  /* @__PURE__ */ jsxs("defs", { children: [
    /* @__PURE__ */ jsx("path", { id: "B", d: "M8.3 20.2c-.1 0-.1 0-.2-.1l-4.2-4.2c-.1-.1-.1-.3 0-.4s.3-.1.4 0l4.2 4.2c.1.1.1.3 0 .4s-.2.1-.2.1z" }),
    /* @__PURE__ */ jsx("path", { id: "C", d: "M19.9 8.6c-.1 0-.1 0-.2-.1l-4.2-4.2c-.1-.1-.1-.3 0-.4s.3-.1.4 0l4.2 4.2c.1.1.1.3 0 .4 0 0-.1.1-.2.1z" })
  ] })
] });
function ReproductiveCalendar(props) {
  return /* @__PURE__ */ jsxs(SvgIcon, { color: "inherit", fontSize: "inherit", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M22.9 22.9H5.2C4.1 22.3.5 19.3.5 19V4.4c0-1.1.9-1.9 1.9-1.9h19.1c1.1 0 1.9.9 1.9 1.9v17.9c.1.3-.2.6-.5.6z", fill: "#e1fffa" }),
    /* @__PURE__ */ jsx("path", { d: "M5.2 19.7v3.2C4.1 22.3.5 19.3.5 19h3.9c.5 0 .8.3.8.7z", fill: "#66c6b6" }),
    /* @__PURE__ */ jsx("path", { d: "M12.7 10.6c1.2 1.2 1.5 2.9.9 4.5l-2.4 2.4c-2 .8-4.3-.1-5.3-2.2-.6-1.2-.5-2.8.2-3.9 1.6-2.4 4.8-2.7 6.6-.8h0z", fill: "#ffbdd8" }),
    /* @__PURE__ */ jsxs("g", { fill: "#ff8fb8", children: [
      /* @__PURE__ */ jsx("path", { d: "M12.7 10.6c1.2 1.2 1.5 2.9.9 4.5l-1.2 1.2-5.6-5.7a4.23 4.23 0 0 1 5.9 0h0z" }),
      /* @__PURE__ */ jsx("path", { d: "M8.4 12.2c-.4.4-.5 1.2 0 1.6.4.4 1.2.5 1.6 0 .4-.4.5-1.2 0-1.6-.4-.4-1.2-.4-1.6 0z" })
    ] }),
    /* @__PURE__ */ jsx("path", { d: "M10 12.2c.4.4.4 1.2 0 1.6l-1.6-1.6c.4-.4 1.2-.4 1.6 0z", fill: "#ff5f96" }),
    /* @__PURE__ */ jsx("path", { d: "M13.8 17.2c0 .5.4.8.8.9.8.1 1.5.7 1.6 1.6 0 .5.4.8.8.9.6 0 1.1.4 1.4 1l-.6.3h-.1c-.1-.3-.4-.5-.8-.5-.8-.1-1.5-.7-1.6-1.6 0-.4-.4-.8-.8-.9-.8-.1-1.5-.7-1.6-1.6h.3l.6-.1z", fill: "#f2e8e4" }),
    /* @__PURE__ */ jsx("path", { d: "M13.8 17.2c0 .5.4.8.8.9.8.1 1.5.7 1.6 1.6 0 .5.4.8.8.9.6 0 1.1.4 1.4 1l-.6.3-4.4-4.5.4-.2z", fill: "#dfd7d5" }),
    /* @__PURE__ */ jsx("path", { d: "M10.5 14.4c-.9.8-.4 2.3.5 3.2s1.8.9 2.7 0 .9-1.7 0-2.7c-.8-.9-2.3-1.4-3.2-.5z", fill: "#fff5f5" }),
    /* @__PURE__ */ jsx("path", { d: "M13.7 14.9c.9.9.8 1.8 0 2.7l-3.2-3.2c.9-.9 2.4-.4 3.2.5z", fill: "#f2e8e4" }),
    /* @__PURE__ */ jsx("path", { d: "M23.5 4.4v2.9H.5V4.4c0-1.1.9-1.9 1.9-1.9h19.1c1.1 0 2 .8 2 1.9z", fill: "#ef6f6f" }),
    /* @__PURE__ */ jsx("path", { d: "M4.6 4h-.7a.47.47 0 0 1-.5-.5V1.6a.47.47 0 0 1 .5-.5h.7a.47.47 0 0 1 .5.5v1.8c0 .4-.2.6-.5.6zm5 0h-.7a.47.47 0 0 1-.5-.5V1.6a.47.47 0 0 1 .5-.5h.7a.47.47 0 0 1 .5.5v1.8c.1.4-.2.6-.5.6zm5 0h-.7a.47.47 0 0 1-.5-.5V1.6a.47.47 0 0 1 .5-.5h.7a.47.47 0 0 1 .5.5v1.8c.1.4-.2.6-.5.6zm5 0H19a.47.47 0 0 1-.5-.5V1.6a.47.47 0 0 1 .5-.5h.7a.47.47 0 0 1 .5.5v1.8c0 .4-.3.6-.6.6z", fill: "#ffbd47" })
  ] });
}
const MilkCanteen = (props) => /* @__PURE__ */ jsxs(SvgIcon, { viewBox: "0 0 512 512", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M415.9 221.85V467.5c0 19.05-15.44 34.5-34.5 34.5H130.6c-19.05 0-34.5-15.44-34.5-34.5V221.85c0-10.42 3.07-20.6 8.8-29.28l51.03-77.16a30.98 30.98 0 0 0 5.13-17.08v-35.5h189.84v35.5a30.99 30.99 0 0 0 5.14 17.08l51.03 77.16c5.74 8.68 8.8 18.86 8.8 29.28z", fill: "#e7e7ef" }),
  /* @__PURE__ */ jsx("path", { d: "M361.705 62.84h-211.41a11.93 11.93 0 0 1-11.927-11.927V21.927A11.93 11.93 0 0 1 150.296 10h211.41a11.93 11.93 0 0 1 11.927 11.927v28.988a11.93 11.93 0 0 1-11.927 11.926z", fill: "#f9f5f3" }),
  /* @__PURE__ */ jsx("path", { d: "M329.343 221.284H183.237c-9.432 0-17.078-7.77-17.078-17.356V179.64c0-9.585 7.646-17.356 17.078-17.356h146.106c9.432 0 17.078 7.77 17.078 17.356v24.287c0 9.586-7.646 17.356-17.078 17.356z", fill: "#868eaf" }),
  /* @__PURE__ */ jsx("path", { d: "M292.56 346.432l-33.73-62.12-33.144 60.407c-3.674 6.695-5.317 14.17-4.596 21.79 1.737 18.336 16.777 32.94 35.155 34.16 27.91 1.85 50.16-28.738 36.316-54.236z", fill: "#f9f5f3" }),
  /* @__PURE__ */ jsx("path", { d: "M130.6 512h86.306a10 10 0 1 0 0-20H130.6c-13.504 0-24.5-10.986-24.5-24.5V221.85a42.97 42.97 0 0 1 7.15-23.764l10.383-15.7c9.132 8.728 21.297 15.425 32.515 18.104v3.438c0 15.084 12.147 27.356 27.078 27.356h146.106c14.93 0 27.078-12.272 27.078-27.356V200.5c11.075-2.645 23.073-9.205 32.165-17.77l10.163 15.367a42.96 42.96 0 0 1 7.141 23.764V467.5c0 13.504-10.985 24.5-24.5 24.5H304.83c-5.522 0-10 4.477-10 10s4.478 10 10 10h76.57c24.53 0 44.5-19.958 44.5-44.5V221.85a62.89 62.89 0 0 0-10.459-34.796l-13.505-20.42c13.33-19.65 20.546-43.248 20.546-67.894V52.196c0-14.212-11.45-25.775-25.523-25.775h-13.317v-4.494C383.63 9.836 373.795 0 361.704 0H150.296c-12.1 0-21.926 9.836-21.926 21.926v4.494h-12.737C101.56 26.42 90.1 37.983 90.1 52.195v46.543c0 24.468 7.1 47.905 20.255 67.47L96.58 187.053a62.92 62.92 0 0 0-10.47 34.796v245.66C86.1 492.042 106.068 512 130.6 512zm205.82-308.072c0 4.056-3.175 7.356-7.078 7.356H183.237c-3.903 0-7.078-3.3-7.078-7.356V179.64c0-4.056 3.175-7.356 7.078-7.356h146.106c3.903 0 7.078 3.3 7.078 7.356zm20-24.306c-.01-15.075-12.154-27.336-27.078-27.336H183.237c-14.925 0-27.067 12.26-27.078 27.336-7.524-2.834-15.732-8.15-21.06-14.1-.058-.065-.112-.134-.17-.2l29.365-44.4c4.44-6.72 6.787-14.532 6.787-22.592v-25.5h169.84v25.5a40.87 40.87 0 0 0 6.799 22.596l29.604 44.763c-5.332 5.88-13.45 11.125-20.903 13.933zm27.2-128.707V46.42h13.317c3.046 0 5.523 2.6 5.523 5.775v46.543c0 17.694-4.438 34.702-12.704 49.5l-25.365-38.353c-2.28-3.45-3.483-7.448-3.483-11.567V72.84h.784c12.092 0 21.928-9.836 21.928-21.926zm-235.25-28.99A1.93 1.93 0 0 1 150.295 20h211.4a1.93 1.93 0 0 1 1.927 1.926v28.988a1.93 1.93 0 0 1-1.927 1.927H350.95c-.01 0-.02-.001-.03-.001H161.08c-.01 0-.02.001-.03.001h-10.756a1.93 1.93 0 0 1-1.926-1.927zM110.1 98.74V52.196c0-3.185 2.478-5.775 5.523-5.775h12.737v4.494c0 12.1 9.836 21.927 21.926 21.927h.785V98.33c0 4.128-1.2 8.128-3.47 11.563l-25.06 37.893c-8.098-14.698-12.44-31.538-12.44-49.047zm143.783 396.73a10.09 10.09 0 0 0-1.123 11.454c4.572 8.1 17.217 5.726 18.585-3.458.666-4.474-1.9-8.98-6.074-10.697-3.926-1.633-8.614-.525-11.388 2.7zm52.85-132.65a44.66 44.66 0 0 0-5.395-21.16l-33.73-62.12a10 10 0 0 0-8.767-5.228h-.02a10 10 0 0 0-8.767 5.19l-33.144 60.406c-2.52 4.593-4.247 9.246-5.133 13.828a48.13 48.13 0 0 0-.65 13.714c2.188 23.1 21.296 41.66 44.45 43.194 27.286 1.8 51.16-20.437 51.16-47.824zm-28.845 20.405c-5.697 5.333-13.145 7.983-21 7.464-13.47-.894-24.588-11.694-25.86-25.124-.538-5.673.68-11.067 3.407-16.036l24.33-44.345 25 46.02c5.735 10.564 2.725 23.972-5.875 32.022z" })
] });
const CosvaBull = (props) => /* @__PURE__ */ jsxs(SvgIcon, { color: "inherit", fontSize: "inherit", viewBox: "0 0 512 512", ...props, children: [
  /* @__PURE__ */ jsx("path", { fill: "#57555C", d: "M163.921 217.727c-19.805-28.374-43.86-43.505-69.7-45.028-50.99-3.179-89.603 48.705-91.244 50.902a14.985 14.985 0 000 17.93c1.553 2.095 38.627 51.034 87.025 51.034 33.735 0 62.742-23.467 77.361-38.7l-3.442-36.138z" }),
  /* @__PURE__ */ jsx("path", { fill: "#3C3A41", d: "M509.023 223.601c-1.611-2.153-39.008-52.558-89.589-50.99-26.484.952-51.126 16.113-71.37 45.116l-14.092 23.804c1.553 2.095 39.627 51.034 88.025 51.034s85.473-48.939 87.025-51.034a14.987 14.987 0 00.001-17.93z" }),
  /* @__PURE__ */ jsx("g", { fill: "#FEC478", children: /* @__PURE__ */ jsx("path", { d: "M507.489 49.909c-4.135-14.652-25.272-13.622-28.865 1.172-7.163 29.496-25.507 56.26-53.624 73.643-32.644 20.206-75.159 24.217-115.886 6.943l-12.832 24.58c28.29 36.316 75.246 53.536 122.216 43.486 42.351-9.062 77.365-42.22 88.938-83.955 6.197-22.347 5.944-44.991.053-65.869zM4.51 49.909c4.135-14.652 25.272-13.622 28.865 1.172 7.163 29.496 25.507 56.26 53.624 73.643 32.644 20.206 75.159 24.217 115.886 6.943l12.832 24.58c-28.29 36.316-75.246 53.536-122.216 43.486-42.351-9.062-77.365-42.22-88.938-83.955-6.196-22.347-5.944-44.991-.053-65.869z" }) }),
  /* @__PURE__ */ jsx("path", { fill: "#787780", d: "M349.599 376.263c-2.999 4.801-7.8 7.2-12.9 7.2L256 382.864l-80.098-.3c-5.101 0-10.201-2.701-12.9-7.2-74.999-126.299-30-215.997 2.699-235.198 27.9-16.5 59.1-24.901 90.299-24.901s61.799 8.401 89.699 24.6c43.198 25.502 74.099 119.1 3.9 236.398z" }),
  /* @__PURE__ */ jsxs("g", { fill: "#57555C", children: [
    /* @__PURE__ */ jsx("path", { d: "M349.599 376.263c-2.999 4.801-7.8 7.2-12.9 7.2L256 382.864V115.266c31.199 0 61.799 8.401 89.699 24.6 43.198 25.501 74.099 119.099 3.9 236.397z" }),
    /* @__PURE__ */ jsx("circle", { cx: "195.997", cy: "247.566", r: "15" })
  ] }),
  /* @__PURE__ */ jsx("circle", { cx: "315.995", cy: "247.566", r: "15", fill: "#3C3A41" }),
  /* @__PURE__ */ jsx("path", { fill: "#8B8892", d: "M360.999 412.563c0 16.5-6.599 31.5-17.701 42.298-10.8 11.1-25.8 17.701-42.298 17.701h-89.999c-32.999 0-59.999-27.001-59.999-59.999 0-16.5 6.599-31.5 17.701-42.3 10.8-11.1 25.8-17.699 42.298-17.699H301c32.998 0 59.999 26.999 59.999 59.999z" }),
  /* @__PURE__ */ jsx("path", { fill: "#787780", d: "M360.999 412.563c0 16.5-6.599 31.5-17.701 42.298-10.8 11.1-25.8 17.701-42.298 17.701h-45V352.564h44.999c32.999 0 60 26.999 60 59.999z" }),
  /* @__PURE__ */ jsx("circle", { cx: "225.996", cy: "412.564", r: "15", fill: "#57555C" }),
  /* @__PURE__ */ jsx("circle", { cx: "285.996", cy: "412.564", r: "15", fill: "#3C3A41" })
] });
const CosvaCow = (props) => /* @__PURE__ */ jsxs(SvgIcon, { color: "inherit", fontSize: "inherit", viewBox: "0 0 512 512", ...props, children: [
  /* @__PURE__ */ jsx("path", { fill: "#424242", d: "M121.069 118.312C85.063 80.325 40.697 89.197 8.033 96.706c-32.664 7.508 40.65 107.983 105.399 69.202l18.921-8.065-11.284-39.531z" }),
  /* @__PURE__ */ jsx("path", { fill: "#EF999A", d: "M119.688 137.299c-15.499-13.527-33.094-19.44-54.798-18.529-5.173.217-10.379.805-15.579 1.649-5.866.953-8.235 8.085-4.129 12.381a109.683 109.683 0 007.874 7.453c15.624 13.411 32.983 20.751 47.626 20.138h.003c7.859-.33 15.092-2.843 22.112-7.684l1.459-1.006-4.568-14.402z" }),
  /* @__PURE__ */ jsx("path", { fill: "#424242", d: "M390.931 118.312c36.007-37.987 80.372-29.114 113.036-21.606 32.664 7.508-40.65 107.983-105.399 69.202l-18.921-8.065 11.284-39.531z" }),
  /* @__PURE__ */ jsx("path", { fill: "#EF999A", d: "M392.311 137.299c15.499-13.527 33.094-19.44 54.798-18.529 5.173.217 10.379.805 15.579 1.649 5.866.953 8.235 8.085 4.129 12.381a109.683 109.683 0 01-7.874 7.453c-15.624 13.411-32.983 20.751-47.626 20.138h-.004c-7.859-.33-15.092-2.843-22.112-7.684l-1.459-1.006 4.569-14.402z" }),
  /* @__PURE__ */ jsx("path", { fill: "#E6E1D7", d: "M374.844 326.729a1.455 1.455 0 00-.02-.035l.025-.021-31.301-266.831C321.786 46.696 293.029 38.969 256 38.969c-36.46 0-64.894 7.499-86.533 20.279l-1.015.594.826.964-32.123 265.923h.001v.001c.801 9.146 1.366 17.76 1.932 25.885h233.819l.004.002.019-.278c.561-8.059 1.123-16.601 1.919-25.664a.901.901 0 01-.005.054z" }),
  /* @__PURE__ */ jsx("path", { d: "M132.353 157.842l-11.284-39.531c-8.208-8.66-16.852-14.878-25.692-19.239-4.783 11.001-8.437 22.855-10.898 35.479-2.494 12.794-3.746 26.259-3.778 40.199 10.792.23 21.881-2.344 32.731-8.842l18.921-8.066z", enableBackground: "new", opacity: "0.1" }),
  /* @__PURE__ */ jsx("path", { fill: "#424242", d: "M122.647 247.036c8.94 30.171 12.484 56.599 14.509 79.693 26.203-48.167 71.533-50.531 75.271-100.194 4.895-65.032-55.242-69.228-29.369-149.644l-14.605-17.049c-60.828 36.743-66.943 115.857-45.806 187.194z" }),
  /* @__PURE__ */ jsx("path", { fill: "#212121", d: "M159.577 200.272a20.744 20.744 0 00-11.326 2.035c-2.025.996-3.479 2.928-3.714 5.174l-.003.034c-1.237 12.019 7.244 22.738 18.943 23.942a20.744 20.744 0 0011.326-2.035c2.026-.996 3.479-2.928 3.714-5.174l.003-.034c1.237-12.018-7.244-22.737-18.943-23.942z" }),
  /* @__PURE__ */ jsx("path", { fill: "#D98B8C", d: "M341.82 435.375c5.758 39.369-12.375 56.873-85.822 56.873h.004c-73.448 0-91.58-17.503-85.822-56.873h171.64z" }),
  /* @__PURE__ */ jsx("path", { fill: "#EF999A", d: "M341.82 435.374c25.849-18.752 28.497-45.536 31.092-82.758-30.026-14.916-71.327-24.128-116.914-24.128-45.586 0-86.883 9.211-116.91 24.126 2.595 37.222 5.243 64.006 31.092 82.76 34.977 19.731 85.819 18.834 85.819 18.834s50.843.897 85.821-18.834z" }),
  /* @__PURE__ */ jsx("ellipse", { cx: "197.588", cy: "384.881", fill: "#212121", rx: "28.929", ry: "19.677", transform: "scale(-1) rotate(74.062 510.155 -261.901)" }),
  /* @__PURE__ */ jsx("path", { d: "M427.521 134.552c-2.461-12.625-6.115-24.478-10.898-35.479-8.84 4.361-17.483 10.579-25.692 19.239l-11.284 39.531 18.921 8.066c10.85 6.498 21.939 9.072 32.731 8.842-.032-13.94-1.284-27.405-3.778-40.199z", enableBackground: "new", opacity: "0.1" }),
  /* @__PURE__ */ jsx("path", { fill: "#424242", d: "M389.353 247.036c-8.94 30.171-12.484 56.599-14.509 79.693-26.203-48.167-71.533-50.531-75.271-100.194-4.895-65.032 55.242-69.228 29.369-149.644l14.605-17.049c60.828 36.743 66.943 115.857 45.806 187.194z" }),
  /* @__PURE__ */ jsxs("g", { fill: "#212121", children: [
    /* @__PURE__ */ jsx("path", { d: "M352.423 200.272a20.744 20.744 0 0111.326 2.035c2.025.996 3.479 2.928 3.714 5.174l.003.034c1.237 12.019-7.244 22.738-18.943 23.942a20.744 20.744 0 01-11.326-2.035c-2.026-.996-3.479-2.928-3.714-5.174l-.003-.034c-1.238-12.018 7.244-22.737 18.943-23.942z" }),
    /* @__PURE__ */ jsx("ellipse", { cx: "314.375", cy: "384.841", rx: "28.929", ry: "19.677", transform: "scale(-1) rotate(-74.062 -510.102 416.7)" })
  ] }),
  /* @__PURE__ */ jsx("path", { fill: "#FFCC80", d: "M204.042 81.052c-4.03 14.912-22.223 21.171-34.653 12.001-13.392-9.882-16.718-29.972-15.826-45.507.545-9.495 5.341-31.416 19.083-27.28 17.11 5.15 17.535 32.964 27.522 45.136 4.572 5.57 5.144 10.951 3.874 15.65z" }),
  /* @__PURE__ */ jsx("path", { d: "M179.69 72.449c-13.392-9.881-16.718-29.972-15.826-45.507.095-1.648.321-3.675.696-5.87-7.625 4.457-10.578 19.153-10.998 26.474-.892 15.535 2.433 35.627 15.826 45.507 12.43 9.171 30.622 2.911 34.652-12.001.635-2.347.809-4.862.255-7.488-7.341 4.324-17.038 4.467-24.605-1.115z", enableBackground: "new", opacity: "0.1" }),
  /* @__PURE__ */ jsx("path", { fill: "#FFCC80", d: "M307.958 81.052c4.03 14.912 22.223 21.171 34.653 12.001 13.392-9.882 16.718-29.972 15.826-45.507-.545-9.495-5.341-31.416-19.083-27.28-17.11 5.15-17.535 32.964-27.522 45.136-4.573 5.57-5.144 10.951-3.874 15.65z" }),
  /* @__PURE__ */ jsx("path", { d: "M332.308 72.449c13.392-9.881 16.718-29.972 15.826-45.507-.095-1.648-.321-3.675-.696-5.87 7.625 4.457 10.578 19.153 10.998 26.474.892 15.535-2.433 35.627-15.826 45.507-12.43 9.171-30.622 2.911-34.652-12.001-.635-2.347-.809-4.862-.255-7.488 7.342 4.324 17.04 4.467 24.605-1.115z", enableBackground: "new", opacity: "0.1" })
] });
const CosvaBovine = (props) => /* @__PURE__ */ jsx(SvgIcon, { color: "inherit", fontSize: "inherit", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ jsxs("g", { children: [
  /* @__PURE__ */ jsx("path", { d: "M256,496A240,240,0,0,0,425.705,86.294,240,240,0,1,0,86.3,425.706,238.426,238.426,0,0,0,256,496Zm158.392-81.608a222.761,222.761,0,0,1-96.934,57.1l-26.805-75.054a55.177,55.177,0,0,0-13.768-21.222,8,8,0,0,0-7.952-1.84A55.767,55.767,0,0,1,252,376a53.956,53.956,0,0,1-36.577-13.9,8,8,0,0,0-5.4-2.1h-94.18L90.55,328.381,246.458,160H272a8,8,0,0,0,6.51-3.35l35.762-50.067a10.4,10.4,0,0,1,6.446-4.168L344,97.758v29.025a10.486,10.486,0,0,1-4.174,8.347L315.2,153.6a8,8,0,0,0,2.27,13.989l29.835,9.945A125.757,125.757,0,0,0,387.148,184H468.22a224.545,224.545,0,0,1-53.828,230.392ZM199.428,157.029A8,8,0,0,0,192,152a52.6,52.6,0,0,1-46.675-28.271l4.154,2.493A68.735,68.735,0,0,0,184.8,136h.33a46.749,46.749,0,0,1,39.892,22.59l.369.613-17.524,18.925ZM97.608,97.608A224.235,224.235,0,0,1,462.1,168H387.148a109.8,109.8,0,0,1-34.784-5.645l-15.349-5.116,12.411-9.309A26.559,26.559,0,0,0,360,126.783V88a8,8,0,0,0-9.569-7.845L317.58,86.726a26.342,26.342,0,0,0-16.327,10.556L267.883,144h-24.92a8,8,0,0,0-5.87,2.565l-.47.507A62.861,62.861,0,0,0,185.13,120h-.33a52.727,52.727,0,0,1-27.093-7.5l-25.59-15.359a8,8,0,0,0-11.471,10.01l8.241,19.23a68.58,68.58,0,0,0,57.609,41.4l9.337,23.344L74.13,322.565A8,8,0,0,0,73.753,333l32,40A8,8,0,0,0,112,376h95.03A70.1,70.1,0,0,0,252,392a71.894,71.894,0,0,0,16.835-1.992,39.12,39.12,0,0,1,6.75,11.816l26.248,73.5A226.122,226.122,0,0,1,256,480,224,224,0,0,1,97.608,97.608Z" }),
  /* @__PURE__ */ jsx("path", { d: "M207.994,69.8a7.976,7.976,0,0,0,1.919-.234,193.769,193.769,0,0,1,84.5-1.724,8,8,0,0,0,3.184-15.68,209.754,209.754,0,0,0-91.5,1.869A8,8,0,0,0,207.994,69.8Z" }),
  /* @__PURE__ */ jsx("path", { d: "M172.8,446.689A206.548,206.548,0,0,0,256,464c2.764,0,5.562-.055,8.314-.164a8,8,0,1,0-.628-15.987c-2.545.1-5.131.151-7.686.151a190.644,190.644,0,0,1-76.8-15.973,8,8,0,1,0-6.406,14.662Z" }),
  /* @__PURE__ */ jsx("circle", { cx: "256", cy: "240", r: "16" })
] }) });
const SelectFormControl = ({
  label,
  loading,
  children,
  errors,
  invalid,
  ...props
}) => {
  const hasError = invalid ?? !!(errors == null ? void 0 : errors.length);
  const labelId = props.labelId || props.name + "-label";
  return /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, error: hasError, children: [
    /* @__PURE__ */ jsx(InputLabel, { id: labelId, children: label }),
    /* @__PURE__ */ jsxs(Select, { className: clsx(props.className), sx: mergeSx({
      width: "100%"
    }, props.sx), ...props, labelId, label, children: [
      loading && /* @__PURE__ */ jsx(MenuItem, { disabled: true, sx: {
        justifyContent: "center"
      }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 25 }) }),
      children
    ] }),
    !!errors && /* @__PURE__ */ jsx(FormHelperText, { children: /* @__PURE__ */ jsx(RenderErrorsDefault, { ...{
      errors
    } }) })
  ] });
};
const CREATE_BOVINE = CreateBovineDocument;
const EDIT_BOVINE = EditBovineDocument;
const DELETE_BOVINE = DeleteBovineDocument;
const useDeleteBovine = ({
  parentVariables
}) => {
  return useMutation(DELETE_BOVINE, {
    update: (proxy, newData) => {
      var _a;
      let data = proxy.readQuery({
        query: BOVINES_QUERY,
        variables: parentVariables
      });
      const deletedBovine = (_a = newData.data) == null ? void 0 : _a.deleteBovine;
      if (data && deletedBovine) {
        data = produce(data, (draft) => {
          const {
            bovines
          } = draft;
          const {
            edges
          } = bovines;
          bovines.edges = edges.filter((bovine) => deletedBovine.id !== bovine.id);
        });
        if (data)
          proxy.writeQuery({
            query: BOVINES_QUERY,
            data,
            variables: parentVariables
          });
      }
    }
  });
};
const useCreateBovine = () => {
  const cosva = useCosva();
  const {
    pagination
  } = usePagination();
  const farm = cosva.farm.value;
  const parentVariables = {
    farm,
    pagination
  };
  const createBovine = useMutation(CREATE_BOVINE, {
    update: (proxy, newData) => {
      let data = proxy.readQuery({
        query: BOVINES_QUERY,
        variables: parentVariables
      });
      data = produce(data, (draft) => {
        if (draft && newData.data) {
          draft.bovines.edges.unshift(newData.data.createBovine);
        }
      });
      proxy.writeQuery({
        query: BOVINES_QUERY,
        data,
        variables: parentVariables
      });
    }
  });
  return createBovine;
};
const useEditBovine = ({
  bovine
}) => {
  const cosva = useCosva();
  const {
    pagination
  } = usePagination();
  const farm = cosva.farm.value;
  const parentVariables = {
    farm,
    pagination
  };
  return useMutation(EDIT_BOVINE, {
    update: (proxy, newData) => {
      if (bovine) {
        try {
          let data = proxy.readQuery({
            query: BOVINES_QUERY,
            variables: parentVariables
          });
          data = produce(data, (draft) => {
            if (draft && newData.data) {
              const {
                editBovine
              } = newData.data;
              const bovines = draft.bovines.edges;
              const index = draft.bovines.edges.findIndex(({
                id
              }) => bovine.id === id);
              bovines[index] = {
                ...bovines[index],
                ...editBovine
              };
            }
          });
          proxy.writeQuery({
            query: BOVINES_QUERY,
            data,
            variables: parentVariables
          });
        } catch (error) {
        }
        writeBovine({
          proxy,
          variables: {
            id: bovine.id
          },
          recipe: (draft) => {
            if (newData.data)
              draft.bovine = {
                ...draft.bovine,
                ...newData.data.editBovine
              };
          }
        });
      }
    }
  });
};
const BOVINE_PURPOSE_TYPES = GetBovinePurposeTypesDocument;
const BOVINE_REPRODUCTIVE_STATES = GetBovineReproductiveStatesDocument;
const BOVINE_REPRODUCTIVE_STATE_CONFIGURATIONS = BovineReproductiveStateConfigurationsDocument;
const BOVINE_PROGENITORS = GetBovineProgenitorsDocument;
const ANIMAL_GENDERS = GetAnimalGendersDocument;
const ANIMAL_BREED = GetAnimalBreedsDocument;
const ANIMAL_DEVELOPMENT_STAGES = GetAnimalDevelopmentStagesDocument;
var BovineFields = /* @__PURE__ */ ((BovineFields2) => {
  BovineFields2["image"] = "image";
  BovineFields2["plaque"] = "plaque";
  BovineFields2["name"] = "name";
  BovineFields2["dateBirth"] = "dateBirth";
  BovineFields2["breed"] = "breed";
  BovineFields2["gender"] = "gender";
  BovineFields2["developmentStage"] = "developmentStage";
  BovineFields2["purposes"] = "purposes";
  BovineFields2["milkProductions"] = "milkProductions";
  BovineFields2["reproductiveControls"] = "reproductiveControls";
  BovineFields2["progenitors"] = "progenitors";
  BovineFields2["offsprings"] = "offsprings";
  return BovineFields2;
})(BovineFields || {});
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof$1(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
var formatters$2 = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
const lightFormatters = formatters$2;
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h2(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const formatters$1 = formatters;
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const longFormatters$1 = longFormatters;
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
const formatDistance$1 = formatDistance;
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const formatLong$1 = formatLong;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
const formatRelative$1 = formatRelative;
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
const localize$1 = localize;
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const match$1 = match;
var locale = {
  code: "en-US",
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const defaultLocale = locale;
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters$1[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
const DevelopmentStageDefaultValue = null;
const getField = (fieldsBuilder, fieldName) => {
  const field = fieldsBuilder && fieldsBuilder.get(fieldName);
  return field;
};
const getFieldValue = (fieldsBuilder, fieldName) => {
  const field = getField(fieldsBuilder, fieldName);
  const fieldValue = field && field.value;
  return fieldValue;
};
const getGender = (fieldsBuilder) => getFieldValue(fieldsBuilder, BovineFields.gender);
const getPurposes = (fieldsBuilder) => getFieldValue(fieldsBuilder, BovineFields.purposes);
const isFemale = (gender) => {
  return !!gender && gender.code === AnimalGendersTypes.Female;
};
const hasPurpose = (purposes, bovinePurposeTypes) => {
  return !!(purposes && purposes.find(({
    code
  }) => code === bovinePurposeTypes));
};
const hasPurposeMilk = (fieldsBuilder) => {
  const purposes = getPurposes(fieldsBuilder);
  return hasPurpose(purposes, BovinePurposeTypes.Milk);
};
const isAdult = (animalDevelopmentStage) => !!animalDevelopmentStage && animalDevelopmentStage.code === TypesStagesBovineDevelopment.Adult;
const useValidateDevelopmentStage = ({
  developmentStage,
  dateBirth,
  skip
}, validation) => {
  const {
    data
  } = useQuery(ANIMAL_DEVELOPMENT_STAGES, {
    variables: {
      animal: CategoryGroupTypes.Bovines
    },
    fetchPolicy: "cache-only",
    skip
  });
  if (!validation)
    return false;
  if (developmentStage)
    return validation(developmentStage);
  if (dateBirth && data) {
    const {
      animalDevelopmentStages
    } = data;
    const age = Date.now() - new Date(dateBirth).getTime();
    const animalDevelopmentStage = [...animalDevelopmentStages].sort((a3, b2) => b2.since - a3.since).find(({
      since
    }) => age >= since);
    return !!animalDevelopmentStage && validation(animalDevelopmentStage);
  }
  return false;
};
const getDevelopmentStagePropsFieldsBuilder = (fieldsBuilder) => {
  const developmentStage = getFieldValue(fieldsBuilder, BovineFields.developmentStage);
  const dateBirth = getFieldValue(fieldsBuilder, BovineFields.dateBirth);
  return {
    developmentStage,
    dateBirth
  };
};
const useIsAdult = (developmentStageProps) => useValidateDevelopmentStage(developmentStageProps, isAdult);
const useIsHeiferOrOlder = (developmentStageProps) => useValidateDevelopmentStage(developmentStageProps, (animalDevelopmentStage) => {
  const {
    Heifer,
    Adult
  } = TypesStagesBovineDevelopment;
  return !![Heifer, Adult].find((stage) => animalDevelopmentStage.code === stage);
});
const useStateReproductiveControls = (developmentStageProps) => {
  const isHeifer = useIsHeiferOrOlder(developmentStageProps);
  return isFemale(developmentStageProps.gender) && isHeifer;
};
var CheckCircleOutline = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(CheckCircleOutline, "__esModule", {
  value: true
});
var default_1$2 = CheckCircleOutline.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = require$$2;
var _default$2 = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "CheckCircleOutline");
default_1$2 = CheckCircleOutline.default = _default$2;
const iconsPurposeTypes = {
  [BovinePurposeTypes.Meat]: CosvaMeat,
  [BovinePurposeTypes.Milk]: CosvaMilk,
  [BovinePurposeTypes.Genetics]: CosvaDNA
};
const iconsTypesProgenitor = {
  [AnimalGendersTypes.Female]: CosvaCow,
  [AnimalGendersTypes.Male]: CosvaBull
};
const cardSx = {
  width: "100%",
  position: "relative"
};
const mediaSx = {
  height: 140,
  width: "140px",
  margin: "auto"
};
const iconSx$1 = {
  fontSize: 140
};
const checkCircleRootSx = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  display: "flex",
  background: (theme) => alpha(emphasize(theme.palette.background.paper, 0.15), 0.9)
};
const checkCircleSx = {
  margin: "auto"
};
const errorSx = {
  borderBottom: (theme) => `solid 2px ${theme.palette.error.main}`
};
const checkboxSx = {
  position: "absolute",
  left: "0",
  top: "0"
};
const CardPurpose = React.memo((props) => {
  const {
    bovinePurposeType,
    isSelect,
    error
  } = props;
  const {
    t: t2
  } = useTranslation("bovine");
  const cardActionAreaRef = React.useRef(null);
  const checkboxRef = React.useRef(null);
  const clickedCheckbox = React.useRef(false);
  const Icon = iconsPurposeTypes[bovinePurposeType.code];
  const code = getCode(bovinePurposeType);
  const title = t2(`purposeTypes.${code}`);
  const toggleSelect = () => {
    const cardActionArea = cardActionAreaRef.current;
    if (cardActionArea)
      if (!isSelect)
        cardActionArea && cardActionArea.blur();
      else
        clickedCheckbox.current = true;
    props.toggleSelect();
  };
  return /* @__PURE__ */ jsxs(Card, { sx: {
    ...cardSx,
    ...error && errorSx || null
  }, children: [
    /* @__PURE__ */ jsx(Zoom, { in: !isSelect, onEntered: () => {
      const checkbox = checkboxRef.current;
      if (clickedCheckbox.current)
        checkbox && checkbox.blur();
      clickedCheckbox.current = false;
    }, children: /* @__PURE__ */ jsx(Checkbox, { tabIndex: isSelect && -1 || void 0, inputRef: checkboxRef, sx: checkboxSx, checked: isSelect, onChange: toggleSelect }) }),
    /* @__PURE__ */ jsxs(CardActionArea, { component: "div", tabIndex: !isSelect && -1 || void 0, ref: (ref) => {
      cardActionAreaRef.current = ref;
    }, onClick: toggleSelect, children: [
      /* @__PURE__ */ jsx("div", { style: {
        padding: "10px 0px 10px 0"
      }, children: /* @__PURE__ */ jsx(CardMedia, { title, sx: mediaSx, children: Icon && /* @__PURE__ */ jsx(Icon, { sx: iconSx$1 }) || /* @__PURE__ */ jsx(default_1$3, { sx: iconSx$1 }) }) }),
      isSelect && /* @__PURE__ */ jsx(Box, { component: "div", sx: checkCircleRootSx, children: /* @__PURE__ */ jsx(Zoom, { in: true, children: /* @__PURE__ */ jsx(Typography, { sx: checkCircleSx, variant: "h1", align: "center", color: "primary", component: default_1$2 }) }) }),
      /* @__PURE__ */ jsx(CardContent, { style: {
        position: "relative"
      }, children: /* @__PURE__ */ jsx(Typography, { variant: "body1", children: title }) })
    ] })
  ] });
});
const Purposes = observer(({
  bovinePurposeTypes,
  field
}) => /* @__PURE__ */ jsx(Grid, { container: true, spacing: 4, children: bovinePurposeTypes.map((bovinePurposeType) => {
  const {
    id
  } = bovinePurposeType;
  const {
    value
  } = field;
  const error = !!field.invalid;
  const isSelect = !!value.find((type) => type.id === id);
  const toggleSelect = () => {
    const select = !isSelect;
    const newValue = select ? [...value, bovinePurposeType] : value.filter((type) => type.id !== id);
    field.setValue(newValue);
  };
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsx(CardPurpose, { error, ...{
    isSelect,
    bovinePurposeType,
    toggleSelect
  } }) }, id);
}) }));
const AddPurposes = observer(({
  field,
  requiresGender = true,
  dependsGender = true,
  ...props
}) => {
  var _a;
  const {
    t: t2
  } = useTranslation("bovine");
  const gridElement = React.useRef(null);
  const {
    fieldsBuilder
  } = field;
  const getGlobal = field.globalProps;
  const globalProps = getGlobal && getGlobal();
  const {
    gender = getGender(fieldsBuilder) || (globalProps == null ? void 0 : globalProps.gender)
  } = props;
  const genderId = dependsGender ? gender && gender.id : void 0;
  const show = !!genderId || !requiresGender;
  const {
    data
  } = useQuery(BOVINE_PURPOSE_TYPES, {
    skip: !props.skip ? !show : props.skip,
    variables: {
      gender: genderId
    }
  });
  if (!data)
    return null;
  const {
    bovinePurposeTypes
  } = data;
  const error = field.invalid;
  return /* @__PURE__ */ jsx(Fade, { in: show, mountOnEnter: true, timeout: 1500, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, ref: gridElement, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, error, children: [
    /* @__PURE__ */ jsx(InputLabel, { htmlFor: `${field.name}-bovine-form`, shrink: true, children: field.label && /* @__PURE__ */ jsx(TransformLabel, { label: field.label, name: field.name }) || t2("purposes") }),
    /* @__PURE__ */ jsx(Box, { sx: {
      width: "100%",
      padding: (theme) => theme.spacing(1),
      marginTop: (theme) => theme.spacing(2)
    }, id: "purposes-bovine-form", children: /* @__PURE__ */ jsx(Purposes, { ...{
      bovinePurposeTypes,
      field
    } }) }),
    error && !!((_a = field.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(FormHelperText, { children: /* @__PURE__ */ jsx(RenderErrorsDefault, { ...{
      errors: field.errors,
      field
    } }) })
  ] }) }) });
});
const SelectGender = observer(({
  field,
  displayEmpty,
  breakpoints
}) => {
  var _a, _b;
  const result = useQuery(ANIMAL_GENDERS);
  const {
    data
  } = result;
  const showLoading = result.loading && !data;
  const {
    t: t2
  } = useTranslation("animalGender");
  const animalGenders = data && data.animalGenders || [];
  const hasError = field.invalid;
  const defaultValue = displayEmpty ? "-" : "";
  const labelId = field.name + "-label";
  const label = field.label && /* @__PURE__ */ jsx(TransformLabel, { label: field.label, name: field.name }) || t2("gender");
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, ...breakpoints, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, error: hasError, hiddenLabel: true, variant: "outlined", children: [
    /* @__PURE__ */ jsx(InputLabel, { shrink: displayEmpty, children: label }),
    /* @__PURE__ */ jsxs(Select, { sx: {
      width: "100%"
    }, labelId, label, value: ((_a = field.value) == null ? void 0 : _a.id) || defaultValue, onChange: ({
      target: {
        value
      }
    }) => {
      if (displayEmpty && value === defaultValue) {
        field.setValue(null);
        return;
      }
      const animalGender = animalGenders.find(({
        id
      }) => id === value);
      field.setValue(animalGender);
    }, displayEmpty, children: [
      !showLoading && displayEmpty && /* @__PURE__ */ jsx(MenuItem, { value: defaultValue, children: /* @__PURE__ */ jsx("em", { children: /* @__PURE__ */ jsx(MessagesTranslate, { i18nKey: "filter.none", ns: "bovine" }) }) }),
      showLoading && /* @__PURE__ */ jsx(MenuItem, { disabled: true, sx: {
        justifyContent: "center"
      }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 25 }) }) || animalGenders.map(({
        id,
        code
      }) => /* @__PURE__ */ jsx(MenuItem, { value: id, children: t2(`options.${parseCode(code)}`) }, id))
    ] }),
    hasError && !!((_b = field.errors) == null ? void 0 : _b.length) && /* @__PURE__ */ jsx(FormHelperText, { children: /* @__PURE__ */ jsx(RenderErrorsDefault, { ...{
      errors: field.errors,
      field
    } }) })
  ] }) });
});
const SelectBreed = ({
  field
}) => {
  const [filter, setFilter] = React.useState("");
  const {
    data,
    loading
  } = useQuery(ANIMAL_BREED, {
    variables: {
      animal: CategoryGroupTypes.Bovines,
      filter
    }
  });
  const {
    t: t2
  } = useTranslation("animalBreed");
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(AutoCompleteSingleBase, { label: field.label && /* @__PURE__ */ jsx(TransformLabel, { label: field.label, name: field.name }) || t2("selectAnimalBreed"), field, loading, options: data && data.animalBreeds || [], getOptionLabel: ({
    title
  }) => title || "", isOptionEqualToValue: (option, value) => option.id === value.id, loadingText: t2("loadingAutocomplete"), textFieldProps: {
    onChange: ({
      target
    }) => {
      setFilter(target.value);
    },
    onBlur: () => {
      setFilter("");
    }
  }, onChange: () => {
    const {
      inputRef
    } = field;
    inputRef == null ? void 0 : inputRef.scrollIntoView({
      behavior: "smooth"
    });
  } }) });
};
const AutoCompleteMultipleBase = observer((props) => /* @__PURE__ */ jsx(AutoCompleteBase, { multiple: true, ...props }));
const SelectDevelopmentStage = React.forwardRef(({
  field,
  getOptionLabel: getOptionLabel2,
  animal,
  automatic = true
}, ref) => {
  const {
    data,
    loading
  } = useQuery(ANIMAL_DEVELOPMENT_STAGES, {
    variables: {
      animal
    }
  });
  const {
    t: t2
  } = useTranslation("animalDevelopmentStage");
  const options = [...(data == null ? void 0 : data.animalDevelopmentStages) || []].sort((a3, b2) => a3.since - b2.since);
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, ref, children: /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
    var _a;
    const valueId = (_a = field.value) == null ? void 0 : _a.id;
    const value = !!options.find(({
      id
    }) => id === valueId) && valueId || automatic && -1 || "";
    return /* @__PURE__ */ jsxs(SelectFormControl, { label: t2("title"), value, errors: field.errors, onChange: ({
      target
    }) => {
      const option = options.find(({
        id
      }) => String(id) === String(target.value));
      field.setValue(option || DevelopmentStageDefaultValue);
    }, invalid: field.invalid, loading, children: [
      automatic && /* @__PURE__ */ jsx(MenuItem, { value: -1, children: t2("calculateAutomatically") }),
      options.map((option) => /* @__PURE__ */ jsx(MenuItem, { value: option.id, children: getOptionLabel2 && getOptionLabel2(option) || option.code || "" }, option.id))
    ] });
  } }) });
});
const BovineDevelopmentStage = ({
  field
}) => {
  const {
    t: t2
  } = useTranslation("bovine");
  const {
    fieldsBuilder
  } = field;
  const selectElement = React.useRef(null);
  const gender = getGender(fieldsBuilder);
  const genderId = gender && gender.id;
  const initialGender = React.useRef(genderId);
  React.useEffect(() => {
    const element = selectElement.current;
    if (!!genderId && !initialGender.current)
      element && element.scrollIntoView({
        behavior: "smooth"
      });
  }, [genderId, selectElement]);
  let context;
  if (gender)
    context = getCode(gender);
  else
    return null;
  return /* @__PURE__ */ jsx(SelectDevelopmentStage, { field, getOptionLabel: (option) => t2(`developmentStages.${getCode(option)}`, {
    context
  }), animal: CategoryGroupTypes.Bovines, ref: selectElement });
};
var PermMedia = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(PermMedia, "__esModule", {
  value: true
});
var default_1$1 = PermMedia.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = require$$2;
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"
}), "PermMedia");
default_1$1 = PermMedia.default = _default$1;
const BlackButton = styled(Button)(({
  theme
}) => ({
  width: "100%",
  position: "absolute",
  background: "rgba(0,0,0,.6)",
  bottom: "0",
  left: "0",
  lineHeight: "9px",
  padding: theme.spacing(1, 6, 1, 6),
  marginBottom: "0"
}));
const ButtonAvatar = ({
  text,
  className
}) => {
  const {
    t: t2
  } = useTranslation("general");
  return /* @__PURE__ */ jsx(BlackButton, { className, children: /* @__PURE__ */ jsx(Typography, { variant: "caption", gutterBottom: true, noWrap: true, sx: {
    color: "common.white",
    textAlign: "center",
    fontWeight: 500
  }, children: text || t2("changeImage") }) });
};
const iconSx = {
  height: (theme) => theme.spacing(20),
  width: (theme) => theme.spacing(20),
  padding: 0
};
const buttonDeleteRootSx = {
  position: "absolute",
  backgroundColor: (theme) => theme.palette.action.active,
  top: 2,
  right: 2
};
const ImageForm = ({
  onAdd,
  onDelete,
  value,
  defaultAvatar,
  AvatarProps: avatarProps,
  textAvatar,
  loading
}) => {
  const setChangeField = (file) => {
    file && onAdd(file);
  };
  const inputFileRef = React.useRef(null);
  const isOpen = React.useRef(false);
  const src = React.useMemo(() => typeof value === "string" ? value : value && URL.createObjectURL(value), [value]);
  return /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, container: true, justifyContent: "center", children: [
    /* @__PURE__ */ jsx("input", { ref: inputFileRef, onChange: ({
      target: {
        files
      }
    }) => {
      files && setChangeField(files[0]);
      if (inputFileRef.current)
        inputFileRef.current.value = "";
    }, onClick: (e2) => {
      if (!isOpen.current) {
        setTimeout(() => {
          isOpen.current = false;
        });
        isOpen.current = true;
      } else
        e2.preventDefault();
    }, hidden: true, type: "file", accept: "image/*" }),
    /* @__PURE__ */ jsxs(Box, { position: "relative", children: [
      /* @__PURE__ */ jsxs(ButtonBase, { component: "div", sx: {
        overflow: "auto",
        borderRadius: "50%",
        padding: 0
      }, onClick: () => {
        const element = inputFileRef.current;
        element && element.click();
      }, children: [
        src && /* @__PURE__ */ jsx(Avatar, { ...avatarProps, className: clsx(avatarProps == null ? void 0 : avatarProps.className), sx: iconSx, src }) || defaultAvatar || /* @__PURE__ */ jsx(default_1$1, { sx: iconSx }),
        /* @__PURE__ */ jsx(ButtonAvatar, { text: textAvatar })
      ] }),
      src && /* @__PURE__ */ jsx(IconButton, { size: "small", sx: buttonDeleteRootSx, onClick: () => {
        onDelete == null ? void 0 : onDelete();
      }, children: /* @__PURE__ */ jsx(default_1$4, { sx: {
        color: red[300]
      } }) })
    ] }),
    loading && /* @__PURE__ */ jsx(DialogLoading, { background: true })
  ] });
};
const size = (theme) => theme.spacing(25);
const BovineImageForm = (props) => {
  var _a;
  const square = {
    height: size,
    width: size
  };
  return /* @__PURE__ */ jsx(ImageForm, { ...{
    defaultAvatar: /* @__PURE__ */ jsx(CosvaBovine, { sx: square }),
    ...props,
    AvatarProps: {
      ...props.AvatarProps,
      sx: {
        ...square,
        padding: (theme) => theme.spacing(2),
        ...(_a = props.AvatarProps) == null ? void 0 : _a.sx
      }
    }
  } });
};
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
function parseISO(argument, options) {
  var _options$additionalDi;
  requiredArgs(1, arguments);
  var additionalDigits = toInteger((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    var result = /* @__PURE__ */ new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  var captures = dateString.match(regex);
  if (!captures)
    return {
      year: NaN,
      restDateString: ""
    };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null)
    return /* @__PURE__ */ new Date(NaN);
  var captures = dateString.match(dateRegex);
  if (!captures)
    return /* @__PURE__ */ new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures)
    return NaN;
  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z")
    return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures)
    return 0;
  var sign = captures[1] === "+" ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}
const formatDatetimeLocal = (date) => format(date, `yyyy-MM-dd'T'hh:mm`);
function useLitersField(value, props) {
  return useField({
    name: "liters",
    type: "number",
    value: value && String(value) || "",
    ...props,
    validations: [{
      rule: "isNumeric",
      message: "numeric"
    }, ({
      field
    }) => {
      const min = 0;
      if (Number(field.value) < min)
        return {
          message: "min.numeric",
          props: {
            min: String(min)
          }
        };
    }, ({
      field
    }) => {
      const max = 100;
      if (Number(field.value) >= max)
        return {
          message: "max.numeric",
          props: {
            max: String(max)
          }
        };
    }, ...(props == null ? void 0 : props.validations) || []]
  });
}
const breakpoint = DIALOG_BREAKPOINT;
const BovineMilkProductionForm = ({
  className,
  onSave,
  showIcon = true,
  Icon = MilkCanteen,
  loading = false,
  onClose,
  onOpen,
  values,
  showButton = true,
  isEditing = false,
  open
}) => {
  const {
    t: t2
  } = useTranslation("milkProductivity");
  const [buttonLoading, setButtonLoading] = reactExports.useState(false);
  const milkProductionDate = useField(() => ({
    name: "milkProductionDate",
    value: "",
    type: "date",
    validations: [({
      value
    }) => {
      if (!value)
        return {
          rule: "isEmpty",
          message: "required"
        };
    }]
  }));
  const liters = useLitersField(values == null ? void 0 : values.value);
  const observation = useField({
    name: "observation",
    type: "text",
    value: (values == null ? void 0 : values.observation) || ""
  });
  React.useEffect(() => {
    if (values) {
      liters.setValue(String((values == null ? void 0 : values.value) || ""));
      milkProductionDate.setValue(formatDatetimeLocal(parseISO(values == null ? void 0 : values.date)));
      observation.setValue((values == null ? void 0 : values.observation) || "");
    }
  }, [values, liters, milkProductionDate, observation]);
  const handleClickOpen = () => {
    onOpen == null ? void 0 : onOpen();
  };
  const handleClose = () => {
    onClose();
  };
  const isWidthDown = useMediaQuery((theme) => theme.breakpoints.only(breakpoint));
  const isWidthEqual = useMediaQuery((theme) => theme.breakpoints.only(breakpoint));
  const isWidthDownOrEqual = isWidthDown || isWidthEqual;
  const fullScreen = isWidthDownOrEqual;
  return /* @__PURE__ */ jsxs(Grid, { className, container: true, justifyContent: "center", children: [
    showIcon && /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsx(IconButton, { onClick: handleClickOpen, size: "large", children: /* @__PURE__ */ jsx(Icon, { sx: {
      fontSize: (theme) => theme.typography.h1.fontSize
    } }) }) }) }),
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: true, sm: "auto", children: [
      showButton && /* @__PURE__ */ jsx(Button, { color: "primary", onClick: handleClickOpen, startIcon: /* @__PURE__ */ jsx(default_1$5, {}), fullWidth: true, children: /* @__PURE__ */ jsx(Typography, { variant: "inherit", noWrap: true, children: t2(isEditing ? "edit" : "add") }) }),
      /* @__PURE__ */ jsxs(MuiDialog, { open, onClose: handleClose, fullScreen, "aria-labelledby": "form-dialog-add-milk-production", children: [
        fullScreen && /* @__PURE__ */ jsx(DialogAppBar, { title: /* @__PURE__ */ jsx("span", { children: t2(isEditing ? "edit" : "add") }), onClose: handleClose }),
        !fullScreen && /* @__PURE__ */ jsx(DialogTitle, { id: "form-dialog-add-milk-production", children: t2(isEditing ? "edit" : "add") }),
        /* @__PURE__ */ jsxs(DialogContent, { sx: {
          position: "relative"
        }, children: [
          loading && /* @__PURE__ */ jsx(DialogLoading, { background: true }),
          /* @__PURE__ */ jsx(DialogContentText, { children: t2("formDescription") }),
          /* @__PURE__ */ jsxs(Box, { mt: 2, children: [
            /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
              var _a;
              return /* @__PURE__ */ jsx(TextField, { error: milkProductionDate.invalid, InputLabelProps: {
                shrink: true
              }, margin: "dense", label: t2("date"), type: "datetime-local", fullWidth: true, onChange: ({
                target: {
                  value
                }
              }) => {
                milkProductionDate.setValue(value);
              }, inputProps: {
                max: formatDatetimeLocal(Date.now())
              }, value: milkProductionDate.value, helperText: !!((_a = milkProductionDate.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(RenderErrorsDefault, { errors: milkProductionDate.errors }) });
            } }),
            /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
              var _a;
              return /* @__PURE__ */ jsx(TextField, { margin: "dense", label: t2("liters"), error: liters.invalid, type: liters.type, fullWidth: true, value: liters.value, onChange: ({
                target
              }) => {
                liters.setValue(target.value);
              }, helperText: !!((_a = liters.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(RenderErrorsDefault, { errors: liters.errors }) });
            } }),
            /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
              var _a;
              return /* @__PURE__ */ jsx(TextField, { label: t2(observation.name), value: observation.value, type: observation.type, error: observation.invalid, margin: "dense", multiline: true, rows: 3, fullWidth: true, autoComplete: "off", onChange: ({
                target
              }) => {
                observation.setValue(target.value);
              }, helperText: !!((_a = observation.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(RenderErrorsDefault, { errors: observation.errors }) });
            } })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsx(Button, { onClick: handleClose, color: "primary", children: /* @__PURE__ */ jsx(MessagesTranslate, { i18nKey: "close", ns: "general" }) }),
          /* @__PURE__ */ jsx(Button, { onClick: async () => {
            const dateValue = milkProductionDate.value;
            setButtonLoading(true);
            try {
              if (await milkProductionDate.validity() && await liters.validity() && dateValue) {
                const value = Number(liters.value);
                await onSave({
                  date: dateValue,
                  value,
                  observation: observation.value
                });
                milkProductionDate.reset();
                liters.reset();
              }
            } finally {
              setButtonLoading(false);
            }
          }, disabled: buttonLoading, color: "primary", children: /* @__PURE__ */ jsx(MessagesTranslate, { i18nKey: "save", ns: "general" }) })
        ] })
      ] })
    ] })
  ] });
};
const TableRowLoading = ({
  items,
  colSpan
}) => {
  return /* @__PURE__ */ jsx(TableRow, { style: {
    height: 53 * (items || 1)
  }, children: /* @__PURE__ */ jsx(TableCell, { align: "center", colSpan, sx: {
    padding: 2
  }, children: /* @__PURE__ */ jsx(CircularProgress, { color: "secondary", disableShrink: true, size: 40, thickness: 4 }) }) });
};
const formatMilkProductionDate = "yyyy-MM-dd h:m a";
const BovineMilkProduction = ({
  bovineMilkProduction,
  onRemoveBovineMilkProduction
}) => {
  const {
    value,
    date
  } = bovineMilkProduction;
  return /* @__PURE__ */ jsxs(TableRow, { children: [
    /* @__PURE__ */ jsx(TableCell, { component: "th", scope: "row", children: format(parseISO(date), formatMilkProductionDate) }),
    /* @__PURE__ */ jsx(TableCell, { align: "right", children: value }),
    /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(IconButton, { onClick: () => onRemoveBovineMilkProduction(bovineMilkProduction), size: "large", children: /* @__PURE__ */ jsx(default_1$4, {}) }) })
  ] });
};
const MilkProductionsField = observer(({
  field
}) => {
  var _a;
  const [openForm, setOpenForm] = React.useState(false);
  const onCloseForm = () => setOpenForm(false);
  const onOpenForm = () => setOpenForm(true);
  const {
    t: t2
  } = useTranslation("milkProductivity");
  const bovineMilkProductions = field.value || [];
  const headCells = [{
    title: t2("date")
  }, {
    title: t2("liters"),
    tableCellProps: {
      align: "right"
    }
  }, {
    title: t2("actions"),
    tableCellProps: {
      align: "center"
    }
  }];
  const colSpan = headCells.length;
  return /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
    /* @__PURE__ */ jsx(Typography, { children: t2("milkProduction") }),
    !!bovineMilkProductions.length && /* @__PURE__ */ jsx(TableContainer$1, { sx: {
      mt: 2
    }, children: /* @__PURE__ */ jsxs(Table, { size: "small", "aria-label": "a dense table", children: [
      /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsx(TableRow, { children: headCells.map(({
        title,
        tableCellProps
      }, i2) => {
        return /* @__PURE__ */ jsx(TableCell, { ...tableCellProps, children: title }, i2);
      }) }) }),
      /* @__PURE__ */ jsx(TableBody, { children: bovineMilkProductions.map((bovineMilkProduction, index) => {
        return /* @__PURE__ */ jsx(BovineMilkProduction, { onRemoveBovineMilkProduction: () => {
          field.setValue(field.value.filter((_item, currentIndex) => currentIndex !== index));
        }, ...{
          bovineMilkProduction
        } }, index);
      }) || /* @__PURE__ */ jsx(TableRowLoading, { items: bovineMilkProductions.length, colSpan }) })
    ] }) }),
    /* @__PURE__ */ jsx(BovineMilkProductionForm, { open: openForm, onClose: onCloseForm, onOpen: onOpenForm, onSave: (value) => {
      field.setValue([value, ...field.value]);
      onCloseForm();
    }, showIcon: !bovineMilkProductions.length }),
    !!((_a = field.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(FormHelperText, { error: field.invalid, children: /* @__PURE__ */ jsx(RenderErrorsDefault, { ...{
      errors: field.errors,
      field
    } }) })
  ] });
});
const BovineReproductiveStateField = (props) => {
  const {
    t: t2
  } = useTranslation("reproductiveControl");
  const [open, setOpen] = React.useState(false);
  const {
    bovineReproductiveStates,
    bovineReproductiveState,
    onChange
  } = props;
  const getLabel = (option) => t2(`types.${getCode(option)}`);
  const options = bovineReproductiveStates;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Autocomplete, { open, onOpen: () => setOpen(true), onClose: () => {
    setOpen(false);
  }, options, renderInput: (params) => /* @__PURE__ */ jsx(TextField, { ...params, label: t2("selectReproductiveStatus"), fullWidth: true, autoComplete: "off" }), onChange: (_event, option) => {
    onChange(option);
  }, value: bovineReproductiveState, getOptionLabel: getLabel, isOptionEqualToValue: (option, value) => option.id === value.id, groupBy: (option) => option.groupBy || "", noOptionsText: t2("noData") }) });
};
const BovineReproductiveControlForm = ({
  bovineReproductiveStates,
  onSave,
  showIcon = true,
  showButton = true,
  values,
  ...rest
}) => {
  const controlled = typeof rest.open === "boolean";
  const [open, setOpen] = React.useState(false);
  const [bovineReproductiveState, setBovineReproductiveState] = React.useState(null);
  const getBovineReproductiveState = React.useCallback((id) => bovineReproductiveStates.find((element) => element.id === id) || null, [bovineReproductiveStates]);
  const {
    t: t2
  } = useTranslation("reproductiveControl");
  const date = useField({
    name: "date",
    type: "datetime-local",
    value: (values == null ? void 0 : values.date) || "",
    validations: [{
      rule: "isEmpty",
      message: "required"
    }, ({
      field: {
        value
      }
    }) => {
      const max = Date.now();
      if (value && new Date(value).getTime() > max)
        return {
          message: "max.date",
          props: {
            max: format(max, `yyyy-MM-dd hh:mm`)
          }
        };
    }]
  });
  const notes = useField({
    name: "notes",
    type: "text",
    value: (values == null ? void 0 : values.notes) || ""
  });
  React.useEffect(() => {
    if (values) {
      date.setValue(String((values == null ? void 0 : values.date) || ""));
      notes.setValue(String((values == null ? void 0 : values.notes) || ""));
      setBovineReproductiveState(getBovineReproductiveState(values == null ? void 0 : values.bovineReproductiveState));
    }
  }, [values, getBovineReproductiveState, date.value, notes.value, date, notes]);
  const handleClickOpen = () => {
    if (!controlled)
      setOpen(true);
  };
  const handleClose = () => {
    if (!controlled)
      setOpen(false);
    rest.onClose && rest.onClose();
  };
  return /* @__PURE__ */ jsxs(Grid, { container: true, justifyContent: "center", children: [
    showIcon && /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsx(IconButton, { onClick: handleClickOpen, size: "large", children: /* @__PURE__ */ jsx(ReproductiveCalendar, { sx: {
      fontSize: (theme) => theme.typography.h1.fontSize
    } }) }) }) }),
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: true, sm: "auto", children: [
      showButton && /* @__PURE__ */ jsx(Button, { color: "primary", onClick: handleClickOpen, startIcon: /* @__PURE__ */ jsx(default_1$5, {}), fullWidth: true, children: /* @__PURE__ */ jsx(Typography, { variant: "inherit", noWrap: true, children: t2("add") }) }),
      /* @__PURE__ */ jsxs(MuiDialog, { open: controlled ? !!rest.open : open, onClose: handleClose, "aria-labelledby": "form-dialog-add-milk-production", children: [
        /* @__PURE__ */ jsx(DialogTitle, { id: "form-dialog-add-milk-production", children: t2("add") }),
        /* @__PURE__ */ jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsx(DialogContentText, { children: t2("addDescription") }),
          /* @__PURE__ */ jsx(BovineReproductiveStateField, { bovineReproductiveState, onChange: (newValue) => setBovineReproductiveState(newValue), bovineReproductiveStates }),
          /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
            var _a;
            return /* @__PURE__ */ jsx(TextField, { label: t2("date"), value: date.value, type: date.type, error: date.invalid, inputRef: (ref) => {
              date.inputRef = ref;
            }, InputLabelProps: {
              shrink: true
            }, margin: "dense", fullWidth: true, autoComplete: "off", onChange: ({
              target
            }) => {
              date.setValue(target.value);
            }, inputProps: {
              max: formatDatetimeLocal(Date.now())
            }, helperText: !!((_a = date.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(RenderErrorsDefault, { errors: date.errors }) });
          } }),
          /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
            var _a;
            return /* @__PURE__ */ jsx(TextField, { label: t2(notes.name), value: notes.value, type: notes.type, error: notes.invalid, inputRef: (ref) => {
              notes.inputRef = ref;
            }, margin: "dense", multiline: true, rows: 3, fullWidth: true, autoComplete: "off", onChange: ({
              target
            }) => {
              notes.setValue(target.value);
            }, helperText: !!((_a = notes.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(RenderErrorsDefault, { errors: notes.errors }) });
          } })
        ] }),
        /* @__PURE__ */ jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsx(Button, { onClick: () => handleClose(), color: "primary", children: /* @__PURE__ */ jsx(MessagesTranslate, { i18nKey: "close", ns: "general" }) }),
          /* @__PURE__ */ jsx(Button, { onClick: async () => {
            var _a;
            const fields = [date, notes];
            const allValid = (await Promise.all(fields.map((field) => field.validity()))).some((valid) => !valid);
            if (allValid && bovineReproductiveState) {
              onSave({
                bovineReproductiveState: bovineReproductiveState.id,
                date: new Date(date.value).toJSON(),
                notes: notes.value
              });
              setBovineReproductiveState(null);
              date.reset();
              notes.reset();
              handleClose();
            } else {
              for (const field of fields) {
                if (field.invalid && field.inputRef) {
                  (_a = field.inputRef) == null ? void 0 : _a.focus();
                  break;
                }
              }
            }
          }, color: "primary", children: /* @__PURE__ */ jsx(MessagesTranslate, { i18nKey: "save", ns: "general" }) })
        ] })
      ] })
    ] })
  ] });
};
observer(({
  field
}) => {
  var _a, _b;
  const {
    t: t2
  } = useTranslation("reproductiveControl");
  const gridElement = React.useRef(null);
  const {
    fieldsBuilder
  } = field;
  const gender = getGender(fieldsBuilder);
  const skip = !useStateReproductiveControls({
    ...getDevelopmentStagePropsFieldsBuilder(fieldsBuilder),
    gender
  });
  const bovineDevelopmentStage = (_a = fieldsBuilder == null ? void 0 : fieldsBuilder.get(BovineFields.developmentStage)) == null ? void 0 : _a.value;
  React.useEffect(() => {
    const element = gridElement.current;
    if (element && bovineDevelopmentStage && !skip) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [gender, bovineDevelopmentStage, gridElement, skip, field]);
  const {
    data
  } = useQuery(BOVINE_REPRODUCTIVE_STATES, {
    skip
  });
  if (skip)
    return null;
  const bovineReproductiveStates = data && data.bovineReproductiveStates;
  const bovineReproductiveControls = field.value || [];
  const columns = [{
    title: t2("reproductiveState"),
    field: "bovineReproductiveState",
    component: ({
      bovineReproductiveState
    }) => {
      const obj = bovineReproductiveStates == null ? void 0 : bovineReproductiveStates.find(({
        id
      }) => bovineReproductiveState === id);
      const code = getCode(obj);
      return /* @__PURE__ */ jsx(Fragment, { children: code && t2(`types.${code}`) || null });
    }
  }, {
    title: t2("date"),
    field: "date",
    tableCellProps: {
      align: "right"
    },
    component: ({
      date
    }) => {
      return /* @__PURE__ */ jsx(Fragment, { children: format(date, "yyyy-MM-dd h:m a") });
    }
  }];
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, ref: gridElement, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, error: !!field.errors, children: [
    /* @__PURE__ */ jsx(InputLabel, { htmlFor: `${field.name}-bovine-form`, shrink: true, children: t2("title") }),
    /* @__PURE__ */ jsx(Box, { mt: 2, children: !!bovineReproductiveControls.length && /* @__PURE__ */ jsx(TableContainer$1, { children: /* @__PURE__ */ jsx(CosvaTable, { toolbar: false, TableProps: {
      size: "small"
    }, columns, actions: [{
      icon: /* @__PURE__ */ jsx(default_1$4, {}),
      onClick: (_e, bovineReproductiveState) => {
        const newValue = field.value.filter((item) => bovineReproductiveState.bovineReproductiveState !== item.bovineReproductiveState);
        field.setValue(newValue);
      }
    }], data: bovineReproductiveControls, pager: false, numEmptyRows: 0 }) }) }),
    !!((_b = field.errors) == null ? void 0 : _b.length) && /* @__PURE__ */ jsx(FormHelperText, { children: /* @__PURE__ */ jsx(RenderErrorsDefault, { ...{
      errors: field.errors,
      field
    } }) }),
    /* @__PURE__ */ jsx(BovineReproductiveControlForm, { onSave: (value) => {
      field && field.setValue([value, ...field.value]);
    }, showIcon: !bovineReproductiveControls.length, bovineReproductiveStates: bovineReproductiveStates || [] })
  ] }) });
});
var AddCircle = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(AddCircle, "__esModule", {
  value: true
});
var default_1 = AddCircle.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
}), "AddCircle");
default_1 = AddCircle.default = _default;
const order = [{
  field: "name",
  direction: OrderTypes.Asc
}];
const getOptionLabel = ({
  name,
  plaque
}) => {
  const text = [name, plaque].filter((v) => v).join(" - ");
  return text;
};
const SelectBovine = ({
  label,
  field,
  filter: filterDefault,
  onChange,
  filterOptions,
  ...props
}) => {
  const {
    farm
  } = useCosva();
  const [filter, setFilter] = React.useState();
  const {
    data,
    loading,
    refetch
  } = useQuery(BOVINES_QUERY, {
    variables: {
      farm: farm.value,
      filter: {
        ...filterDefault,
        ...filter
      },
      pagination: {
        order,
        limit: 30
      }
    },
    fetchPolicy: "no-cache"
  });
  React.useEffect(() => {
    refetch();
  }, [filterDefault, refetch]);
  const {
    t: t2
  } = useTranslation("bovine");
  let options = data && data.bovines.edges || [];
  if (filterOptions)
    options = filterOptions(options);
  const labelAutoComplete = label || field.label && /* @__PURE__ */ jsx(TransformLabel, { label: field.label, name: field.name }) || t2("selectBovine");
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(AutoCompleteSingleBase, { label: labelAutoComplete, field, loading, options, getOptionLabel, renderOption: (props2, bovine) => {
    const text = getOptionLabel(bovine);
    const {
      image
    } = bovine;
    const src = image && createAPIImageRoute(`bovine/${image}`);
    return /* @__PURE__ */ jsxs(ListItem, { ...props2, children: [
      /* @__PURE__ */ jsx(ListItemAvatar, { children: src && /* @__PURE__ */ jsx(Avatar, { alt: `${text}`, src }) || /* @__PURE__ */ jsx(Avatar, { alt: `Avatar ${text}`, children: /* @__PURE__ */ jsx(CosvaBovine, {}) }) }),
      /* @__PURE__ */ jsx(ListItemText, { primary: text })
    ] }, bovine.id);
  }, isOptionEqualToValue: (option, value) => option.id === value.id, loadingText: t2("loadingAutocomplete"), textFieldProps: {
    onChange: ({
      target: {
        value
      }
    }) => {
      setFilter({
        ...filter,
        name: value,
        plaque: value
      });
    },
    onBlur: () => {
      setFilter(void 0);
    }
  }, onChange: (_, value) => {
    onChange == null ? void 0 : onChange(value);
  }, ...props }) });
};
function DialogProgenitor({
  open,
  onClose,
  gender,
  onChange
}) {
  const {
    t: t2
  } = useTranslation("bovine");
  const field = useField(() => ({
    name: "bovine",
    label: t2("selectBovine", {
      context: getCode(gender)
    }),
    value: null
  }));
  return /* @__PURE__ */ jsx(DialogSimple, { ns: "general", maxWidth: "md", breakpoint: "xs", fullWidth: true, ...{
    open,
    body: /* @__PURE__ */ jsx(Grid, { container: true, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: {
      marginTop: 2
    }, children: /* @__PURE__ */ jsx(SelectBovine, { ...{
      field,
      filter: {
        gender: gender == null ? void 0 : gender.id
      }
    } }) }) }),
    onClose: () => {
      onClose();
    },
    actions: [{
      color: "inherit",
      action: () => {
        onClose();
      },
      title: "close"
    }, {
      title: "save",
      color: "primary",
      action: async () => {
        onChange && await onChange(field.value && {
          bovine: field.value
        } || null);
        onClose();
      }
    }]
  } });
}
const CardProgenitor = React.memo((props) => {
  const {
    gender,
    onChange,
    progenitor
  } = props;
  const {
    code
  } = gender;
  const bovine = progenitor == null ? void 0 : progenitor.bovine;
  const isSelect = !!props.progenitor;
  const {
    t: t2
  } = useTranslation("animalProgenitor");
  const [open, setOpen] = React.useState(false);
  const Icon = iconsTypesProgenitor[code];
  const title = t2(`${code}`);
  const content = /* @__PURE__ */ jsx(CardContent, { style: {
    position: "relative"
  }, children: /* @__PURE__ */ jsx(Typography, { variant: "body1", children: title }) });
  const label = bovine && [bovine.plaque, bovine.name].join(" - ");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Card, { sx: {
      width: "100%",
      position: "relative",
      ...{}
    }, children: [
      content,
      /* @__PURE__ */ jsx("div", { style: {
        padding: "10px 0px 10px 0"
      }, children: /* @__PURE__ */ jsxs(CardMedia, { sx: {
        position: "relative",
        height: 140,
        width: "140px",
        margin: "auto"
      }, title, children: [
        /* @__PURE__ */ jsx(Box, { sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }, children: /* @__PURE__ */ jsx(IconButton, { sx: {
          flex: "unset",
          height: (theme) => theme.spacing(14),
          width: (theme) => theme.spacing(14)
        }, onClick: () => {
          setOpen(true);
        }, size: "large", children: bovine && bovine.image ? /* @__PURE__ */ jsx(Avatar, { sx: {
          width: (theme) => theme.spacing(9),
          height: (theme) => theme.spacing(9)
        }, alt: label, src: createAPIImageRoute(`bovine/${bovine.image}`, {
          width: 200
        }) }) : Icon && /* @__PURE__ */ jsx(Icon, { sx: {
          width: "100%",
          height: "100%"
        } }) || /* @__PURE__ */ jsx(default_1$3, { sx: {
          width: "100%",
          height: "100%"
        } }) }) }),
        bovine && /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", children: label }),
        /* @__PURE__ */ jsx(Zoom, { in: !isSelect, children: /* @__PURE__ */ jsx(IconButton, { sx: {
          position: "absolute",
          bottom: 0,
          right: 0
        }, onClick: () => {
          setOpen(true);
        }, size: "large", children: /* @__PURE__ */ jsx(default_1, { color: "primary", fontSize: "large" }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(DialogProgenitor, { onClose: () => {
      setOpen(false);
    }, onChange: (newValue) => {
      onChange && onChange(newValue);
    }, ...{
      open,
      gender
    } })
  ] });
});
const Progenitors = observer(({
  field
}) => {
  const {
    data
  } = useQuery(ANIMAL_GENDERS);
  const genders = (data == null ? void 0 : data.animalGenders) || [];
  return /* @__PURE__ */ jsx(Grid, { container: true, spacing: 4, children: genders.map((gender, key) => {
    const {
      code
    } = gender;
    const progenitorIndex = field.value.findIndex(({
      bovine: {
        gender: {
          code: genderCode
        }
      }
    }) => genderCode === code);
    const progenitor = field.value[progenitorIndex];
    return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, children: /* @__PURE__ */ jsx(CardProgenitor, { ...{
      gender,
      progenitor,
      onChange: (newValue) => {
        if (progenitor) {
          if (newValue)
            field.value[progenitorIndex] = newValue;
          else
            field.value.splice(progenitorIndex, 1);
        } else if (newValue)
          field.setValue([...field.value, newValue]);
      }
    } }) }, key);
  }) });
});
const AddProgenitors = observer(({
  field,
  ...props
}) => {
  var _a;
  const {
    t: t2
  } = useTranslation("bovine");
  const gridElement = React.useRef(null);
  const getGlobal = field.globalProps;
  const globalProps = getGlobal && getGlobal();
  const {
    bovine = globalProps == null ? void 0 : globalProps.bovine
  } = props;
  const show = !!bovine;
  useQuery(BOVINE_PROGENITORS, {
    skip: !props.skip ? !show : props.skip,
    variables: bovine && {
      bovine: bovine.id
    } || void 0,
    onCompleted: ({
      bovineProgenitors
    }) => {
      var _a2;
      if (!((_a2 = field.value) == null ? void 0 : _a2.length)) {
        const newValue = bovineProgenitors.map((progenitor) => ({
          bovine: progenitor
        }));
        field.setValue(newValue);
      }
    }
  });
  return /* @__PURE__ */ jsx(Fade, { in: show, mountOnEnter: true, timeout: 1500, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, ref: gridElement, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, error: field.invalid, children: [
    /* @__PURE__ */ jsx(InputLabel, { htmlFor: `${field.name}-bovine-form`, shrink: true, children: field.label && /* @__PURE__ */ jsx(TransformLabel, { label: field.label, name: field.name }) || t2("progenitors") }),
    /* @__PURE__ */ jsx(Box, { id: "progenitors-bovine-form", sx: {
      width: "100%",
      padding: (theme) => theme.spacing(1),
      marginTop: (theme) => theme.spacing(2)
    }, children: /* @__PURE__ */ jsx(Progenitors, { ...{
      field
    } }) }),
    !!((_a = field.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(FormHelperText, { children: /* @__PURE__ */ jsx(RenderErrorsDefault, { ...{
      errors: field.errors,
      field
    } }) })
  ] }) }) });
});
const BovineImageFormField = ({
  field
}) => {
  return /* @__PURE__ */ jsx(BovineImageForm, { value: field.value, onAdd: (file) => {
    field.setValue(file);
  }, onDelete: () => {
    field.setValue(null);
  } });
};
const getPurposesField = (props) => {
  return {
    name: BovineFields.purposes,
    type: "component",
    value: (props == null ? void 0 : props.value) || [],
    component: ({
      ...componentProps
    }) => /* @__PURE__ */ jsx(AddPurposes, { ...componentProps }),
    validations: [({
      value
    }) => {
      if (value && !value.length || !value)
        return /* @__PURE__ */ jsx(MessagesTranslate, { ns: "validations", i18nKey: "required" });
    }],
    async onSetValue({
      field
    }) {
      const {
        fieldsBuilder
      } = field;
      const milkProductions = fieldsBuilder == null ? void 0 : fieldsBuilder.getField(BovineFields.milkProductions);
      if (milkProductions)
        if (hasPurposeMilk(fieldsBuilder)) {
          milkProductions.enable();
          const dateBirth = getField(fieldsBuilder, BovineFields.dateBirth);
          if (dateBirth) {
            await dateBirth.validity();
            if (dateBirth.invalid)
              dateBirth.inputRef && dateBirth.inputRef.focus();
          }
        } else
          milkProductions.disable();
    }
  };
};
function getGenderField(props) {
  return {
    name: BovineFields.gender,
    value: (props == null ? void 0 : props.value) || null,
    type: "component",
    component: SelectGender,
    validations: [({
      value
    }) => !!value ? void 0 : {
      rule: "isEmpty",
      message: "required"
    }],
    onSetValue({
      field
    }) {
      const {
        fieldsBuilder
      } = field;
      const milkProductions = getField(fieldsBuilder, BovineFields.milkProductions);
      const purposes = getField(fieldsBuilder, BovineFields.purposes);
      if (milkProductions)
        milkProductions.setValue([]);
      if (purposes)
        purposes.setValue([]);
    }
  };
}
function getBreedField(props) {
  return {
    name: BovineFields.breed,
    value: (props == null ? void 0 : props.value) || null,
    type: "component",
    component: SelectBreed,
    validations: [({
      value
    }) => !!value ? void 0 : {
      rule: "isEmpty",
      message: "required"
    }]
  };
}
function getProgenitorsField(props) {
  return {
    name: BovineFields.progenitors,
    value: (props == null ? void 0 : props.value) || [],
    type: "component",
    component: ({
      field
    }) => /* @__PURE__ */ jsx(AddProgenitors, { field }),
    validations: [{
      rule: "isEmpty",
      message: "required"
    }]
  };
}
const getBasicFields = (props) => {
  const values = {
    ...props
  };
  return [{
    name: BovineFields.plaque,
    validations: [{
      rule: "isEmpty",
      message: "required"
    }],
    value: values[BovineFields.plaque] || ""
  }, {
    name: BovineFields.name,
    value: values[BovineFields.name] || ""
  }, {
    name: BovineFields.dateBirth,
    validations: [{
      rule: "isEmpty",
      message: "required"
    }, ({
      field
    }) => {
      if (field.value && new Date(field.value).getTime() > Date.now())
        return {
          message: "date"
        };
    }],
    type: "date",
    value: values[BovineFields.dateBirth] || "",
    InputProps: {
      inputProps: {
        max: format(Date.now(), "yyyy-MM-dd"),
        min: "1900-01-01"
      }
    }
  }, getBreedField({
    value: values[BovineFields.breed]
  }), getGenderField({
    value: values[BovineFields.gender]
  }), {
    name: BovineFields.developmentStage,
    value: values[BovineFields.developmentStage] || DevelopmentStageDefaultValue,
    type: "component",
    component: BovineDevelopmentStage,
    validations: []
  }, getPurposesField({
    value: values[BovineFields.purposes]
  }), getProgenitorsField({
    value: values[BovineFields.progenitors]
  })];
};
const getEditBovineFields = (values) => {
  return new FieldsBuilder({
    ns: "bovine",
    fields: [...getBasicFields(values)]
  });
};
const getInitialState = (originalValues) => {
  const values = {
    ...originalValues
  };
  return new FieldsBuilder({
    ns: "bovine",
    validate: false,
    fields: [{
      name: BovineFields.image,
      type: "component",
      component: BovineImageFormField,
      value: values[BovineFields.image] || void 0
    }, ...getBasicFields(originalValues), {
      name: BovineFields.milkProductions,
      type: "component",
      value: values[BovineFields.milkProductions] || [],
      disabled: true,
      component: (props) => {
        const {
          field
        } = props;
        const {
          fieldsBuilder
        } = field;
        const isAdult2 = useIsAdult(getDevelopmentStagePropsFieldsBuilder(fieldsBuilder));
        if (field.enabled && isAdult2 && hasPurposeMilk(fieldsBuilder))
          return /* @__PURE__ */ jsx(MilkProductionsField, { ...props });
        return null;
      }
    }]
  });
};
const ItemBovine = ({
  label,
  value,
  labelProps
}) => {
  const {
    bold = true
  } = {
    ...labelProps
  };
  return /* @__PURE__ */ jsxs(Typography, { variant: "body2", color: "textSecondary", component: "p", children: [
    bold ? /* @__PURE__ */ jsxs("b", { children: [
      label,
      ": "
    ] }) : label,
    value
  ] });
};
const PurposeTypes = ({
  bovine,
  itemBovineProps
}) => {
  const {
    t: t2
  } = useTranslation("bovine");
  let purposeTypes = bovine.purposeTypes.map(({
    code
  }) => iconsPurposeTypes[code]);
  if (bovine.gender.code === AnimalGendersTypes.Male && !purposeTypes.length)
    purposeTypes = [iconsPurposeTypes[BovinePurposeTypes.Meat]];
  return /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
    /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(ItemBovine, { label: t2("purposes"), ...itemBovineProps, labelProps: {
      ...itemBovineProps == null ? void 0 : itemBovineProps.labelProps
    } }) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 3, sm: "auto", children: /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", spacing: 2, children: purposeTypes.map((Icon, i2) => /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", sx: {
      display: "flex",
      alignItems: "center"
    }, children: /* @__PURE__ */ jsx(Icon, { fontSize: "small" }, i2) }, i2)) }) })
  ] });
};
const fullHeight = {
  display: "flex",
  flexDirection: "column",
  height: "100%"
};
const Gender = ({
  code
}) => {
  const {
    t: t2
  } = useTranslation("animalGender");
  return /* @__PURE__ */ jsx(ItemBovine, { label: t2("gender"), value: t2(`options.${parseCode(code)}`) });
};
const ReproductiveControl = ({
  reproductiveControls
}) => {
  const {
    farm
  } = useCosva();
  const {
    t: t2
  } = useTranslation("reproductiveControl");
  const reproductiveControlLast = reproductiveControls.reduce((previousValue, currentValue) => !previousValue ? currentValue : +parseISO(currentValue.date) > +parseISO(previousValue.date) ? currentValue : previousValue, null);
  const {
    data
  } = useQuery(BOVINE_REPRODUCTIVE_STATE_CONFIGURATIONS, {
    skip: !reproductiveControlLast,
    variables: {
      farm: farm.value
    }
  });
  const configurations = React.useMemo(() => (data == null ? void 0 : data.bovineReproductiveStateConfigurations) || [], [data]);
  const nextSteps = React.useMemo(() => configurations.reduce((previousValue, {
    bovineReproductiveState,
    nextStateType,
    time
  }) => {
    if (nextStateType)
      previousValue[bovineReproductiveState.code] = {
        code: nextStateType.code,
        time
      };
    return previousValue;
  }, {}), [configurations]);
  if (!reproductiveControlLast || !data)
    return null;
  const {
    code
  } = reproductiveControlLast.bovineReproductiveState;
  const nextStep = nextSteps[code];
  const keyPrediction = getCode(nextStep);
  return /* @__PURE__ */ jsx(Fragment, { children: nextStep && /* @__PURE__ */ jsx(ItemBovine, { label: t2(`predictions.${keyPrediction}`), value: format(addMilliseconds(new Date(reproductiveControlLast == null ? void 0 : reproductiveControlLast.date), nextStep.time), "yyyy-MM-dd") }) });
};
const EditBovineFieldsContext = React.createContext(/* @__PURE__ */ Object.create(null));
const EditBovineFieldsProvider = ({
  children,
  fieldsRender,
  isCreating: isCreatingBase = true
}) => {
  const [isCreating, setIsCreating] = React.useState(isCreatingBase);
  return /* @__PURE__ */ jsx(EditBovineFieldsContext.Provider, { value: {
    fieldsRender,
    isCreating,
    setIsCreating
  }, children });
};
const useEditBovineFields = () => React.useContext(EditBovineFieldsContext);
EditBovineFieldsContext.Consumer;
function EditFormBovineBovine({
  open,
  onClose,
  bovine
}) {
  const cosva = useCosva();
  const {
    fieldsRender
  } = useEditBovineFields();
  const farm = cosva.farm.value;
  const {
    t: t2
  } = useTranslation("bovine");
  const [editBovine, resEdit] = useEditBovine({
    bovine
  });
  const loading = resEdit.loading;
  const {
    ns,
    validate,
    fields,
    onChangeField
  } = fieldsRender;
  const globalProps = () => ({
    id: farm,
    isCreating: true,
    bovine
  });
  const [openAlert, setOpenAlert] = reactExports.useState(false);
  const showError = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(DialogSimple, { ns: "general", maxWidth: "md", breakpoint: "xs", fullWidth: true, title: /* @__PURE__ */ jsx(Fragment, { children: t2("editBovine") }), ...{
      open,
      loading,
      body: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Box, { sx: {
        padding: (theme) => theme.spacing(1)
      }, children: /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(DialogLoading, {}), children: /* @__PURE__ */ jsx(FieldsRender, { ns, ...{
        onChangeField,
        validate,
        fields,
        globalProps
      } }) }) }) }) }),
      onClose: () => {
        onClose();
      },
      actions: [{
        color: "inherit",
        action: () => {
          onClose();
        },
        title: "close"
      }, {
        disabled: loading,
        title: "save",
        color: "primary",
        action: async () => {
          if (!await fieldsRender.hasErrors({
            setErrors: true
          })) {
            if (bovine) {
              const {
                name,
                plaque,
                dateBirth,
                gender,
                purposes,
                breed,
                developmentStage
              } = fieldsRender.getValues();
              await editBovine({
                variables: {
                  id: bovine.id,
                  values: {
                    name,
                    plaque,
                    dateBirth: /* @__PURE__ */ new Date(`${dateBirth} 00:00:00`),
                    gender: gender.id,
                    bovinePurposeTypes: purposes.map(({
                      id
                    }) => id),
                    breed: breed == null ? void 0 : breed.id,
                    developmentStage: developmentStage == null ? void 0 : developmentStage.id
                  }
                }
              }).then(() => {
                fieldsRender.saveData();
                onClose();
              }).catch((e2) => {
                console.error(e2);
                showError();
              });
            } else
              console.warn("EditFormBovineBovine -> bovine property is required to edit");
          } else {
            fieldsRender.fields.some((field) => {
              var _a;
              if (field.invalid) {
                (_a = field.inputRef) == null ? void 0 : _a.focus();
                return true;
              }
              return false;
            });
          }
        }
      }]
    } }),
    /* @__PURE__ */ jsx(Snackbar, { open: !!openAlert, autoHideDuration: 6e3, anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    }, onClose: handleCloseAlert, children: /* @__PURE__ */ jsx(Alert$1, { elevation: 6, variant: "filled", color: "error", onClose: handleCloseAlert, children: t2(`errors.update`) }) })
  ] });
}
const EditBovine = ({
  bovine,
  open,
  onClose
}) => {
  const dateBirth = format(parseISO(bovine.dateBirth), "yyyy-MM-dd");
  const fieldsRender = useFields(() => {
    const {
      breed,
      developmentStage,
      gender,
      plaque,
      name,
      purposeTypes: purposes
    } = {
      ...bovine
    };
    return getEditBovineFields({
      dateBirth,
      breed,
      developmentStage,
      gender,
      plaque,
      name,
      purposes
    });
  });
  reactExports.useEffect(() => {
    const {
      breed,
      developmentStage,
      gender,
      plaque,
      name,
      purposeTypes: purposes
    } = bovine;
    fieldsRender.changeValues([{
      name: BovineFields.breed,
      value: breed
    }, {
      name: BovineFields.developmentStage,
      value: developmentStage
    }, {
      name: BovineFields.gender,
      value: gender
    }, {
      name: BovineFields.plaque,
      value: plaque
    }, {
      name: BovineFields.name,
      value: name
    }, {
      name: BovineFields.purposes,
      value: purposes
    }]);
  }, [bovine, fieldsRender]);
  return /* @__PURE__ */ jsx(EditBovineFieldsProvider, { fieldsRender, children: /* @__PURE__ */ jsx(EditFormBovineBovine, { open, onClose: () => {
    onClose && onClose();
  }, isCreating: false, bovine }) });
};
export {
  BOVINE_REPRODUCTIVE_STATES as $,
  ANIMAL_BREED as A,
  BovineImageForm as B,
  CosvaBovine as C,
  subMilliseconds as D,
  EditBovine as E,
  getTimezoneOffsetInMilliseconds as F,
  Gender as G,
  addMilliseconds as H,
  ItemBovine as I,
  addLeadingZeros as J,
  isValid as K,
  useLitersField as L,
  MilkCanteen as M,
  default_1 as N,
  getGenderField as O,
  PurposeTypes as P,
  SelectGender as Q,
  ReproductiveCalendar as R,
  SelectBovine as S,
  AddPurposes as T,
  useDeleteBovine as U,
  useCreateBovine as V,
  Alert$1 as W,
  getInitialState as X,
  BovineMilkProductionForm as Y,
  BovineReproductiveControlForm as Z,
  formatDatetimeLocal as _,
  ReproductiveControl as a,
  useIsAdult as b,
  fullHeight as c,
  AutoCompleteMultipleBase as d,
  ANIMAL_DEVELOPMENT_STAGES as e,
  format as f,
  toInteger as g,
  hasPurpose as h,
  millisecondsInMinute as i,
  millisecondsInSecond as j,
  getUTCWeekYear as k,
  startOfUTCISOWeek as l,
  millisecondsInHour as m,
  getUTCWeek as n,
  getUTCISOWeek as o,
  parseISO as p,
  getDefaultOptions as q,
  requiredArgs as r,
  startOfUTCWeek as s,
  toDate as t,
  useStateReproductiveControls as u,
  defaultLocale as v,
  longFormatters$1 as w,
  isProtectedWeekYearToken as x,
  throwProtectedError as y,
  isProtectedDayOfYearToken as z
};
