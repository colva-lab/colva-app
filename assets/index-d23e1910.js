import { w as generateUtilityClasses, t as generateUtilityClass, x as styled, E as ButtonBase, I as capitalize, y as _extends, r as reactExports, z as useThemeProps, A as _objectWithoutPropertiesLoose, o as clsx, C as jsxs, q as composeClasses, cL as debounce, cM as ownerWindow, n as jsx, L as useTheme, cN as KeyboardArrowLeft, cO as KeyboardArrowRight, H as useSlotProps, cP as useEventCallback, cQ as ownerDocument, a5 as produce, cR as BovineMilkProductivityCreatedDocument, cS as BovineMilkProductivityDeletedDocument, aD as useMutation, cT as writeBovine, cU as CreateBovinePhotoDocument, cV as DeleteBovinePhotoDocument, as as React, b$ as __vitePreload, u as useTranslation, a0 as Box, aS as mergeSx, T as Typography, a2 as Grid, aT as Button, at as Fragment, cW as BovinePurposeTypes, bl as MessagesTranslate, cp as useNavigate, cX as useSearch, cY as AppBar, c2 as getCode, cw as useParams, aG as useQuery, bC as LoadingPage, b0 as parseImages, ca as BOVINE } from "./index-60a9ad09.js";
import { c as createAPIImageRoute, j as Skeleton, k as Stack, P as PaperAvatar } from "./index-9ab0c8c5.js";
import { B as BovineImageForm, h as hasPurpose, u as useStateReproductiveControls, M as MilkCanteen, R as ReproductiveCalendar, f as format, p as parseISO, I as ItemBovine, G as Gender, a as ReproductiveControl, P as PurposeTypes, b as useIsAdult, c as fullHeight, C as CosvaBovine, E as EditBovine } from "./index-3848f05e.js";
let cachedType;
function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }
  const dummy = document.createElement("div");
  const container = document.createElement("div");
  container.style.width = "10px";
  container.style.height = "1px";
  dummy.appendChild(container);
  dummy.dir = "rtl";
  dummy.style.fontSize = "14px";
  dummy.style.width = "4px";
  dummy.style.height = "1px";
  dummy.style.position = "absolute";
  dummy.style.top = "-1000px";
  dummy.style.overflow = "scroll";
  document.body.appendChild(dummy);
  cachedType = "reverse";
  if (dummy.scrollLeft > 0) {
    cachedType = "default";
  } else {
    dummy.scrollLeft = 1;
    if (dummy.scrollLeft === 0) {
      cachedType = "negative";
    }
  }
  document.body.removeChild(dummy);
  return cachedType;
}
function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft;
  if (direction !== "rtl") {
    return scrollLeft;
  }
  const type = detectScrollType();
  switch (type) {
    case "negative":
      return element.scrollWidth - element.clientWidth + scrollLeft;
    case "reverse":
      return element.scrollWidth - element.clientWidth - scrollLeft;
    default:
      return scrollLeft;
  }
}
function getTabUtilityClass(slot) {
  return generateUtilityClass("MuiTab", slot);
}
const tabClasses = generateUtilityClasses("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]);
const tabClasses$1 = tabClasses;
const _excluded$3 = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    textColor,
    fullWidth,
    wrapped,
    icon,
    label,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", icon && label && "labelIcon", `textColor${capitalize(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return composeClasses(slots, getTabUtilityClass, classes);
};
const TabRoot = styled(ButtonBase, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.label && ownerState.icon && styles2.labelIcon, styles2[`textColor${capitalize(ownerState.textColor)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.wrapped && styles2.wrapped];
  }
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center"
}, ownerState.label && {
  flexDirection: ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom" ? "column" : "row"
}, {
  lineHeight: 1.25
}, ownerState.icon && ownerState.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${tabClasses$1.iconWrapper}`]: _extends({}, ownerState.iconPosition === "top" && {
    marginBottom: 6
  }, ownerState.iconPosition === "bottom" && {
    marginTop: 6
  }, ownerState.iconPosition === "start" && {
    marginRight: theme.spacing(1)
  }, ownerState.iconPosition === "end" && {
    marginLeft: theme.spacing(1)
  })
}, ownerState.textColor === "inherit" && {
  color: "inherit",
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${tabClasses$1.selected}`]: {
    opacity: 1
  },
  [`&.${tabClasses$1.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.textColor === "primary" && {
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${tabClasses$1.selected}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${tabClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.textColor === "secondary" && {
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${tabClasses$1.selected}`]: {
    color: (theme.vars || theme).palette.secondary.main
  },
  [`&.${tabClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, ownerState.wrapped && {
  fontSize: theme.typography.pxToRem(12)
}));
const Tab = /* @__PURE__ */ reactExports.forwardRef(function Tab2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTab"
  });
  const {
    className,
    disabled = false,
    disableFocusRipple = false,
    // eslint-disable-next-line react/prop-types
    fullWidth,
    icon: iconProp,
    iconPosition = "top",
    // eslint-disable-next-line react/prop-types
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    // eslint-disable-next-line react/prop-types
    selected,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus,
    // eslint-disable-next-line react/prop-types
    textColor = "inherit",
    value,
    wrapped = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const ownerState = _extends({}, props, {
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    wrapped
  });
  const classes = useUtilityClasses$2(ownerState);
  const icon = iconProp && label && /* @__PURE__ */ reactExports.isValidElement(iconProp) ? /* @__PURE__ */ reactExports.cloneElement(iconProp, {
    className: clsx(classes.iconWrapper, iconProp.props.className)
  }) : iconProp;
  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleFocus = (event) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return /* @__PURE__ */ jsxs(TabRoot, _extends({
    focusRipple: !disableFocusRipple,
    className: clsx(classes.root, className),
    ref,
    role: "tab",
    "aria-selected": selected,
    disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    ownerState,
    tabIndex: selected ? 0 : -1
  }, other, {
    children: [iconPosition === "top" || iconPosition === "start" ? /* @__PURE__ */ jsxs(reactExports.Fragment, {
      children: [icon, label]
    }) : /* @__PURE__ */ jsxs(reactExports.Fragment, {
      children: [label, icon]
    }), indicator]
  }));
});
const Tab$1 = Tab;
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {
}) {
  const {
    ease = easeInOutSin,
    duration = 300
    // standard
  } = options;
  let start = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = (timestamp) => {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}
const _excluded$2 = ["onChange"];
const styles = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ScrollbarSize(props) {
  const {
    onChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const scrollbarHeight = reactExports.useRef();
  const nodeRef = reactExports.useRef(null);
  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  reactExports.useEffect(() => {
    const handleResize = debounce(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    const containerWindow = ownerWindow(nodeRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  reactExports.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /* @__PURE__ */ jsx("div", _extends({
    style: styles,
    ref: nodeRef
  }, other));
}
function getTabScrollButtonUtilityClass(slot) {
  return generateUtilityClass("MuiTabScrollButton", slot);
}
const tabScrollButtonClasses = generateUtilityClasses("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
const tabScrollButtonClasses$1 = tabScrollButtonClasses;
const _excluded$1 = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    orientation,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled"]
  };
  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};
const TabScrollButtonRoot = styled(ButtonBase, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.orientation && styles2[ownerState.orientation]];
  }
})(({
  ownerState
}) => _extends({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${tabScrollButtonClasses$1.disabled}`]: {
    opacity: 0
  }
}, ownerState.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
  }
}));
const TabScrollButton = /* @__PURE__ */ reactExports.forwardRef(function TabScrollButton2(inProps, ref) {
  var _slots$StartScrollBut, _slots$EndScrollButto;
  const props = useThemeProps({
    props: inProps,
    name: "MuiTabScrollButton"
  });
  const {
    className,
    slots = {},
    slotProps = {},
    direction
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends({
    isRtl
  }, props);
  const classes = useUtilityClasses$1(ownerState);
  const StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : KeyboardArrowLeft;
  const EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : KeyboardArrowRight;
  const startButtonIconProps = useSlotProps({
    elementType: StartButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  const endButtonIconProps = useSlotProps({
    elementType: EndButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  return /* @__PURE__ */ jsx(TabScrollButtonRoot, _extends({
    component: "div",
    className: clsx(classes.root, className),
    ref,
    role: null,
    ownerState,
    tabIndex: null
  }, other, {
    children: direction === "left" ? /* @__PURE__ */ jsx(StartButtonIcon, _extends({}, startButtonIconProps)) : /* @__PURE__ */ jsx(EndButtonIcon, _extends({}, endButtonIconProps))
  }));
});
const TabScrollButton$1 = TabScrollButton;
function getTabsUtilityClass(slot) {
  return generateUtilityClass("MuiTabs", slot);
}
const tabsClasses = generateUtilityClasses("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
const tabsClasses$1 = tabsClasses;
const _excluded = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
const nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list.firstChild;
};
const previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list.lastChild;
};
const moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
const useUtilityClasses = (ownerState) => {
  const {
    vertical,
    fixed,
    hideScrollbar,
    scrollableX,
    scrollableY,
    centered,
    scrollButtonsHideMobile,
    classes
  } = ownerState;
  const slots = {
    root: ["root", vertical && "vertical"],
    scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
    flexContainer: ["flexContainer", vertical && "flexContainerVertical", centered && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
    scrollableX: [scrollableX && "scrollableX"],
    hideScrollbar: [hideScrollbar && "hideScrollbar"]
  };
  return composeClasses(slots, getTabsUtilityClass, classes);
};
const TabsRoot = styled("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${tabsClasses$1.scrollButtons}`]: styles2.scrollButtons
    }, {
      [`& .${tabsClasses$1.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles2.scrollButtonsHideMobile
    }, styles2.root, ownerState.vertical && styles2.vertical];
  }
})(({
  ownerState,
  theme
}) => _extends({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, ownerState.vertical && {
  flexDirection: "column"
}, ownerState.scrollButtonsHideMobile && {
  [`& .${tabsClasses$1.scrollButtons}`]: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
const TabsScroller = styled("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.scroller, ownerState.fixed && styles2.fixed, ownerState.hideScrollbar && styles2.hideScrollbar, ownerState.scrollableX && styles2.scrollableX, ownerState.scrollableY && styles2.scrollableY];
  }
})(({
  ownerState
}) => _extends({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap"
}, ownerState.fixed && {
  overflowX: "hidden",
  width: "100%"
}, ownerState.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}, ownerState.scrollableX && {
  overflowX: "auto",
  overflowY: "hidden"
}, ownerState.scrollableY && {
  overflowY: "auto",
  overflowX: "hidden"
}));
const FlexContainer = styled("div", {
  name: "MuiTabs",
  slot: "FlexContainer",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.flexContainer, ownerState.vertical && styles2.flexContainerVertical, ownerState.centered && styles2.centered];
  }
})(({
  ownerState
}) => _extends({
  display: "flex"
}, ownerState.vertical && {
  flexDirection: "column"
}, ownerState.centered && {
  justifyContent: "center"
}));
const TabsIndicator = styled("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (props, styles2) => styles2.indicator
})(({
  ownerState,
  theme
}) => _extends({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: theme.transitions.create()
}, ownerState.indicatorColor === "primary" && {
  backgroundColor: (theme.vars || theme).palette.primary.main
}, ownerState.indicatorColor === "secondary" && {
  backgroundColor: (theme.vars || theme).palette.secondary.main
}, ownerState.vertical && {
  height: "100%",
  width: 2,
  right: 0
}));
const TabsScrollbarSize = styled(ScrollbarSize, {
  name: "MuiTabs",
  slot: "ScrollbarSize"
})({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
});
const defaultIndicatorStyle = {};
const Tabs = /* @__PURE__ */ reactExports.forwardRef(function Tabs2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTabs"
  });
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component = "div",
    allowScrollButtonsMobile = false,
    indicatorColor = "primary",
    onChange,
    orientation = "horizontal",
    ScrollButtonComponent = TabScrollButton$1,
    scrollButtons = "auto",
    selectionFollowsFocus,
    slots = {},
    slotProps = {},
    TabIndicatorProps = {},
    TabScrollButtonProps = {},
    textColor = "primary",
    value,
    variant = "standard",
    visibleScrollbar = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const scrollable = variant === "scrollable";
  const vertical = orientation === "vertical";
  const scrollStart = vertical ? "scrollTop" : "scrollLeft";
  const start = vertical ? "top" : "left";
  const end = vertical ? "bottom" : "right";
  const clientSize = vertical ? "clientHeight" : "clientWidth";
  const size = vertical ? "height" : "width";
  const ownerState = _extends({}, props, {
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    orientation,
    vertical,
    scrollButtons,
    textColor,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: scrollable && !vertical,
    scrollableY: scrollable && vertical,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile
  });
  const classes = useUtilityClasses(ownerState);
  const startScrollButtonIconProps = useSlotProps({
    elementType: slots.StartScrollButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    ownerState
  });
  const endScrollButtonIconProps = useSlotProps({
    elementType: slots.EndScrollButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    ownerState
  });
  const [mounted, setMounted] = reactExports.useState(false);
  const [indicatorStyle, setIndicatorStyle] = reactExports.useState(defaultIndicatorStyle);
  const [displayScroll, setDisplayScroll] = reactExports.useState({
    start: false,
    end: false
  });
  const [scrollerStyle, setScrollerStyle] = reactExports.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  });
  const valueToIndex = /* @__PURE__ */ new Map();
  const tabsRef = reactExports.useRef(null);
  const tabListRef = reactExports.useRef(null);
  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    let tabMeta;
    if (tabsNode && value !== false) {
      const children2 = tabListRef.current.children;
      if (children2.length > 0) {
        const tab = children2[valueToIndex.get(value)];
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  const updateIndicatorState = useEventCallback(() => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    let startValue = 0;
    let startIndicator;
    if (vertical) {
      startIndicator = "top";
      if (tabMeta && tabsMeta) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      }
    } else {
      startIndicator = isRtl ? "right" : "left";
      if (tabMeta && tabsMeta) {
        const correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
      }
    }
    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0
    };
    if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  const scroll = (scrollValue, {
    animation = true
  } = {}) => {
    if (animation) {
      animate(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };
  const moveTabsScroll = (delta) => {
    let scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
      scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
    }
    scroll(scrollValue);
  };
  const getScrollSize = () => {
    const containerSize = tabsRef.current[clientSize];
    let totalSize = 0;
    const children2 = Array.from(tabListRef.current.children);
    for (let i = 0; i < children2.length; i += 1) {
      const tab = children2[i];
      if (totalSize + tab[clientSize] > containerSize) {
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += tab[clientSize];
    }
    return totalSize;
  };
  const handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };
  const handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  };
  const handleScrollbarSizeChange = reactExports.useCallback((scrollbarWidth) => {
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, []);
  const getConditionalElements = () => {
    const conditionalElements2 = {};
    conditionalElements2.scrollbarSizeListener = scrollable ? /* @__PURE__ */ jsx(TabsScrollbarSize, {
      onChange: handleScrollbarSizeChange,
      className: clsx(classes.scrollableX, classes.hideScrollbar)
    }) : null;
    const scrollButtonsActive = displayScroll.start || displayScroll.end;
    const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
    conditionalElements2.scrollButtonStart = showScrollButtons ? /* @__PURE__ */ jsx(ScrollButtonComponent, _extends({
      slots: {
        StartScrollButtonIcon: slots.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: startScrollButtonIconProps
      },
      orientation,
      direction: isRtl ? "right" : "left",
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start
    }, TabScrollButtonProps, {
      className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    conditionalElements2.scrollButtonEnd = showScrollButtons ? /* @__PURE__ */ jsx(ScrollButtonComponent, _extends({
      slots: {
        EndScrollButtonIcon: slots.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: endScrollButtonIconProps
      },
      orientation,
      direction: isRtl ? "left" : "right",
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end
    }, TabScrollButtonProps, {
      className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    return conditionalElements2;
  };
  const scrollSelectedIntoView = useEventCallback((animation) => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start] < tabsMeta[start]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart, {
        animation
      });
    } else if (tabMeta[end] > tabsMeta[end]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart, {
        animation
      });
    }
  });
  const updateScrollButtonState = useEventCallback(() => {
    if (scrollable && scrollButtons !== false) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollWidth,
        clientWidth
      } = tabsRef.current;
      let showStartScroll;
      let showEndScroll;
      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        const scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction);
        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }
      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  reactExports.useEffect(() => {
    const handleResize = debounce(() => {
      if (tabsRef.current) {
        updateIndicatorState();
        updateScrollButtonState();
      }
    });
    const win = ownerWindow(tabsRef.current);
    win.addEventListener("resize", handleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    }
    return () => {
      handleResize.clear();
      win.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  const handleTabsScroll = reactExports.useMemo(() => debounce(() => {
    updateScrollButtonState();
  }), [updateScrollButtonState]);
  reactExports.useEffect(() => {
    return () => {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    updateIndicatorState();
    updateScrollButtonState();
  });
  reactExports.useEffect(() => {
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);
  reactExports.useImperativeHandle(action, () => ({
    updateIndicator: updateIndicatorState,
    updateScrollButtons: updateScrollButtonState
  }), [updateIndicatorState, updateScrollButtonState]);
  const indicator = /* @__PURE__ */ jsx(TabsIndicator, _extends({}, TabIndicatorProps, {
    className: clsx(classes.indicator, TabIndicatorProps.className),
    ownerState,
    style: _extends({}, indicatorStyle, TabIndicatorProps.style)
  }));
  let childIndex = 0;
  const children = reactExports.Children.map(childrenProp, (child) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return null;
    }
    const childValue = child.props.value === void 0 ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return /* @__PURE__ */ reactExports.cloneElement(child, _extends({
      fullWidth: variant === "fullWidth",
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue
    }, childIndex === 1 && value === false && !child.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  });
  const handleKeyDown = (event) => {
    const list = tabListRef.current;
    const currentFocus = ownerDocument(list).activeElement;
    const role = currentFocus.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (orientation === "horizontal" && isRtl) {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case "End":
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
    }
  };
  const conditionalElements = getConditionalElements();
  return /* @__PURE__ */ jsxs(TabsRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref,
    as: component
  }, other, {
    children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /* @__PURE__ */ jsxs(TabsScroller, {
      className: classes.scroller,
      ownerState,
      style: {
        overflow: scrollerStyle.overflow,
        [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
      },
      ref: tabsRef,
      onScroll: handleTabsScroll,
      children: [/* @__PURE__ */ jsx(FlexContainer, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-orientation": orientation === "vertical" ? "vertical" : null,
        className: classes.flexContainer,
        ownerState,
        onKeyDown: handleKeyDown,
        ref: tabListRef,
        role: "tablist",
        children
      }), mounted && indicator]
    }), conditionalElements.scrollButtonEnd]
  }));
});
const Tabs$1 = Tabs;
const BOVINE_MILK_PRODUCTIVITY_CREATED = BovineMilkProductivityCreatedDocument;
const BOVINE_MILK_PRODUCTIVITY_DELETED = BovineMilkProductivityDeletedDocument;
const subscribeToBovineMilkProductivityCreated = (subscribeToMore, variables) => subscribeToMore({
  document: BOVINE_MILK_PRODUCTIVITY_CREATED,
  variables,
  updateQuery: (previousResult, {
    subscriptionData
  }) => {
    const newResult = produce(previousResult, (draft) => {
      if (!subscriptionData.data) {
        return;
      }
      const {
        bovineMilkProductivityCreated
      } = subscriptionData.data;
      draft.bovine.milkProductivities.unshift(bovineMilkProductivityCreated.bovineMilkProductivity);
    });
    console.log("newResult", newResult);
    return newResult;
  }
});
const subscribeToBovineMilkProductivityDeleted = (subscribeToMore, variables) => subscribeToMore({
  document: BOVINE_MILK_PRODUCTIVITY_DELETED,
  variables,
  updateQuery: (previousResult, {
    subscriptionData
  }) => {
    const newResult = produce(previousResult, (draft) => {
      if (!subscriptionData.data) {
        return;
      }
      const {
        bovineMilkProductivityDeleted
      } = subscriptionData.data;
      const edges = draft.bovine.milkProductivities;
      const index2 = edges.findIndex(({
        id
      }) => String(bovineMilkProductivityDeleted.id) === String(id));
      if (index2 !== -1) {
        edges.splice(index2, 1);
      }
    });
    console.log("newResult", newResult);
    return newResult;
  }
});
const CREATE_BOVINE_PHOTO = CreateBovinePhotoDocument;
const useCreateBovinePhoto = ({
  id
}) => useMutation(CREATE_BOVINE_PHOTO, {
  update: (proxy, newData) => {
    writeBovine({
      proxy,
      variables: {
        id
      },
      recipe: (draft) => {
        var _a;
        draft.bovine.image = (_a = newData == null ? void 0 : newData.data) == null ? void 0 : _a.createBovinePhoto;
      }
    });
  }
});
const DELETE_BOVINE_PHOTO = DeleteBovinePhotoDocument;
const useDeleteBovinePhoto = ({
  id
}) => useMutation(DELETE_BOVINE_PHOTO, {
  update: (proxy) => {
    writeBovine({
      proxy,
      variables: {
        id
      },
      recipe: (draft) => {
        draft.bovine.image = null;
      }
    });
  }
});
const Icon404 = React.lazy(() => __vitePreload(() => import("./404-5f3a805f.js"), true ? ["assets/404-5f3a805f.js","assets/index-60a9ad09.js","assets/index-02c96895.css"] : void 0));
const ErrorInternet = (props) => {
  const {
    IconProps,
    onRetry
  } = props;
  const {
    t
  } = useTranslation("errors");
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Box, { sx: {
      position: "relative",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsx(Icon404, { ...IconProps, sx: mergeSx({
      height: "100%",
      maxHeight: "250px"
    }, IconProps == null ? void 0 : IconProps.sx) }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Typography, { color: "error", variant: "h5", align: "center", children: "Ooops!" }),
      /* @__PURE__ */ jsx(Typography, { color: "error", variant: "h6", align: "center", children: t("internet.title") }),
      /* @__PURE__ */ jsx(Typography, { color: "textPrimary", variant: "body2", align: "center", children: t("internet.description") })
    ] }),
    /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: "auto", children: /* @__PURE__ */ jsx(Box, { sx: {
      margin: 2
    }, children: /* @__PURE__ */ jsx(Button, { variant: "contained", color: "secondary", fullWidth: true, onClick: () => {
      onRetry && onRetry();
    }, children: t("internet.action") }) }) }) })
  ] });
};
const ChangeBovineImage = ({
  id,
  image
}) => {
  const [state, setState] = React.useState();
  const [createBovinePhoto, createBovinePhotoResult] = useCreateBovinePhoto({
    id
  });
  const [deleteBovinePhoto, deleteBovinePhotoResult] = useDeleteBovinePhoto({
    id
  });
  const getFileUrl = () => createAPIImageRoute(`bovine/${typeof image === "object" ? image == null ? void 0 : image.file : image}`, {
    width: 700
  });
  const loading = createBovinePhotoResult.loading || deleteBovinePhotoResult.loading;
  return /* @__PURE__ */ jsx(BovineImageForm, { value: state || image && getFileUrl(), loading, onAdd: (newValue) => {
    createBovinePhoto({
      variables: {
        bovineId: id,
        file: newValue
      }
    });
    setState(newValue);
  }, onDelete: () => {
    deleteBovinePhoto({
      variables: {
        bovineId: id
      }
    });
    setState(null);
  } });
};
const AvatarSkeleton = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Box, { display: "flex", justifyContent: "center", position: "relative", children: /* @__PURE__ */ jsx(Skeleton, { variant: "circular", width: "180px", height: "180px", sx: {
    position: "absolute",
    margin: "0 auto",
    top: "2px"
  } }) }),
  /* @__PURE__ */ jsx(Skeleton, { height: "200px", width: "100%", sx: {
    transform: "scale(1)"
  } })
] });
const DataSkeleton = () => /* @__PURE__ */ jsx(Skeleton, { sx: {
  marginTop: "10px"
}, animation: "wave", variant: "rectangular", height: "150px" });
const TabsSkeleton = () => /* @__PURE__ */ jsx(Box, { my: 2, children: /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: [6, 6].map((item, index2) => /* @__PURE__ */ jsx(Grid, { item: true, md: item, children: /* @__PURE__ */ jsx(Skeleton, { variant: "rectangular", height: "60px" }) }, index2)) }) });
const TabsContent = () => /* @__PURE__ */ jsxs(Stack, { spacing: 2, margin: 2, children: [
  /* @__PURE__ */ jsx(Skeleton, { variant: "text", sx: {
    fontSize: "1rem"
  } }),
  /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    justifyContent: "center"
  }, children: /* @__PURE__ */ jsx(Skeleton, { variant: "rounded", width: 100, height: 30 }) }),
  /* @__PURE__ */ jsx(Skeleton, { variant: "rectangular", height: 60 }),
  /* @__PURE__ */ jsx(Skeleton, { variant: "rectangular", height: 30 }),
  /* @__PURE__ */ jsx(Skeleton, { variant: "rectangular", height: 60 })
] });
const BovineSkeleton = () => /* @__PURE__ */ jsxs(Grid, { container: true, justifyContent: "center", children: [
  /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(AvatarSkeleton, {}) }),
  /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(DataSkeleton, {}) }),
  /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(TabsSkeleton, {}) }),
  /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(TabsContent, {}) })
] });
function TabPanel(props) {
  const {
    children,
    value,
    index: index2,
    ...other
  } = props;
  const show = value === index2;
  const [render, setRender] = React.useState(show);
  React.useEffect(() => {
    if (show)
      setRender(show);
  }, [show]);
  return /* @__PURE__ */ jsx(Box, { role: "tabpanel", id: `scrollable-force-tabpanel-${index2}`, "aria-labelledby": `scrollable-force-tab-${index2}`, ...other, sx: mergeSx({
    padding: 2,
    transition: (theme) => theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }, !show && {
    opacity: "0",
    height: "0px",
    padding: "0px",
    overflow: "hidden"
  }), children: render && children });
}
function a11yProps(index2) {
  return {
    id: `scrollable-force-tab-${index2}`,
    "aria-controls": `scrollable-force-tabpanel-${index2}`
  };
}
const MilkProductions = reactExports.lazy(() => __vitePreload(() => import("./index-1d337bb2.js"), true ? ["assets/index-1d337bb2.js","assets/index-60a9ad09.js","assets/index-02c96895.css","assets/mutations-a19b80cd.js","assets/index-3848f05e.js","assets/ErrorOutline-27089ca2.js","assets/index-9ab0c8c5.js","assets/Save-95d94cd2.js","assets/index-ceb7b8c1.css"] : void 0));
const ReproductiveControls = reactExports.lazy(() => __vitePreload(() => import("./ReproductiveControls-96cbed79.js"), true ? ["assets/ReproductiveControls-96cbed79.js","assets/index-60a9ad09.js","assets/index-02c96895.css","assets/index-3848f05e.js","assets/ErrorOutline-27089ca2.js","assets/index-9ab0c8c5.js","assets/Save-95d94cd2.js","assets/index-ceb7b8c1.css"] : void 0));
function useTabs(value, bovine) {
  const {
    gender,
    developmentStage,
    dateBirth,
    purposeTypes
  } = bovine;
  const hasPurposeMilk = hasPurpose(purposeTypes, BovinePurposeTypes.Milk);
  const stateStateReproductiveControls = useStateReproductiveControls({
    gender,
    developmentStage,
    dateBirth
  });
  const tabs = reactExports.useMemo(() => [{
    state: hasPurposeMilk,
    Tab: ({
      index: index2,
      onClick
    }) => /* @__PURE__ */ jsx(Tab$1, { onClick: () => onClick(), label: /* @__PURE__ */ jsx(MessagesTranslate, { ns: "milkProductivity", i18nKey: "milkProduction" }), icon: /* @__PURE__ */ jsx(MilkCanteen, {}), ...a11yProps(index2) }, index2),
    TabPanel: ({
      index: index2
    }) => /* @__PURE__ */ jsx(TabPanel, { value, index: index2, children: /* @__PURE__ */ jsx(MilkProductions, { ...{
      bovine
    } }) })
  }, {
    state: stateStateReproductiveControls,
    Tab: ({
      index: index2,
      onClick
    }) => /* @__PURE__ */ jsx(Tab$1, { label: /* @__PURE__ */ jsx(MessagesTranslate, { ns: "reproductiveControl", i18nKey: "title" }), icon: /* @__PURE__ */ jsx(ReproductiveCalendar, {}), onClick: () => onClick(), ...a11yProps(index2) }),
    TabPanel: ({
      index: index2
    }) => /* @__PURE__ */ jsx(TabPanel, { value, index: index2, children: /* @__PURE__ */ jsx(ReproductiveControls, { ...{
      bovine
    } }) })
  }], [bovine, hasPurposeMilk, stateStateReproductiveControls, value]);
  return reactExports.useMemo(() => tabs.filter(({
    state
  }) => state), [tabs]);
}
function TabsBovine({
  bovine
}) {
  const navigate = useNavigate();
  const {
    tab: searchTab
  } = useSearch(true);
  const [value, setValue] = React.useState(+searchTab || 0);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
    navigate({
      search: `?tab=${newValue}`
    }, {
      replace: true
    });
  };
  const taps = useTabs(value, bovine);
  if (!taps.length)
    return null;
  return /* @__PURE__ */ jsxs(Box, { sx: {
    marginTop: 2,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "background.paper"
  }, children: [
    /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(TabsSkeleton, {}), children: /* @__PURE__ */ jsx(AppBar, { position: "static", color: "default", children: /* @__PURE__ */ jsx(Tabs$1, { value, variant: "scrollable", scrollButtons: true, indicatorColor: "primary", textColor: "primary", "aria-label": "scrollable force tabs example", allowScrollButtonsMobile: true, children: taps.map(({
      Tab: Tab3
    }, index2) => /* @__PURE__ */ jsx(Tab3, { index: index2, onClick: () => handleChange(null, index2) }, index2)) }) }) }),
    taps.map(({
      TabPanel: TabPanel2
    }, index2) => /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(TabsContent, {}), children: /* @__PURE__ */ jsx(TabPanel2, { index: index2 }) }, index2))
  ] });
}
function PaperData({
  bovine
}) {
  const {
    t
  } = useTranslation("bovine");
  const dateBirth = (bovine == null ? void 0 : bovine.dateBirth) && format(parseISO(bovine == null ? void 0 : bovine.dateBirth), "yyyy-MM-dd");
  const {
    gender,
    developmentStage,
    breed
  } = bovine;
  const code = getCode(developmentStage);
  const genderCode = gender.code;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Grid, { container: true, alignItems: "center", spacing: 2, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 12, md: "auto" }) }),
    /* @__PURE__ */ jsx(ItemBovine, { label: t("dateBirth"), value: dateBirth }),
    /* @__PURE__ */ jsx(Gender, { code: genderCode }),
    code && /* @__PURE__ */ jsx(ItemBovine, { label: t("developmentStage"), value: t(`developmentStages.${code}`, {
      context: genderCode
    }) }),
    /* @__PURE__ */ jsx(ReproductiveControl, { reproductiveControls: bovine.reproductiveControls }),
    breed && /* @__PURE__ */ jsx(ItemBovine, { label: t("breed"), value: breed.title }),
    /* @__PURE__ */ jsx(PurposeTypes, { ...{
      bovine
    } })
  ] });
}
const Bovine = () => {
  var _a, _b;
  const params = useParams();
  const bovineId = +params.bovine;
  const [edit, setEdit] = React.useState(false);
  const {
    data,
    error,
    subscribeToMore,
    refetch,
    loading
  } = useQuery(BOVINE, {
    variables: {
      id: +bovineId
    }
  });
  React.useEffect(() => {
    const subscriptions = [subscribeToBovineMilkProductivityCreated(subscribeToMore, {
      bovine: +bovineId
    }), subscribeToBovineMilkProductivityDeleted(subscribeToMore, {
      bovine: +bovineId
    })];
    return () => {
      subscriptions.forEach((subscription) => subscription());
    };
  }, [bovineId, subscribeToMore]);
  const isAdult = useIsAdult({
    dateBirth: (_a = data == null ? void 0 : data.bovine) == null ? void 0 : _a.dateBirth,
    developmentStage: (_b = data == null ? void 0 : data.bovine) == null ? void 0 : _b.developmentStage,
    skip: !data || loading
  });
  const {
    bovine
  } = {
    ...data
  };
  if (error == null ? void 0 : error.networkError)
    return /* @__PURE__ */ jsx(ErrorInternet, { onRetry: () => refetch() });
  if (loading && !bovine)
    return /* @__PURE__ */ jsx(LoadingPage, {});
  if (!bovine)
    return null;
  const {
    id,
    plaque,
    name,
    image
  } = bovine;
  const hasMilkProductions = hasPurpose(bovine.purposeTypes, BovinePurposeTypes.Milk) && isAdult;
  return /* @__PURE__ */ jsx(Box, { sx: {
    ...fullHeight,
    pT: 2
  }, children: /* @__PURE__ */ jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(BovineSkeleton, {}), children: [
    /* @__PURE__ */ jsx(PaperAvatar, { avatarProps: {
      id,
      image: image || null,
      form: ChangeBovineImage,
      formProps: {
        id
      },
      sourceImages: (path) => createAPIImageRoute(`bovine/${path}`, {
        width: 700
      }),
      parseImages: (images) => parseImages(images, (path) => {
        return createAPIImageRoute(`bovine/${path}`, {
          width: 200
        });
      }),
      defaultIcon: /* @__PURE__ */ jsx(Box, { sx: {
        display: "flex",
        fontSize: (theme) => theme.typography.fontSize * 10
      }, children: /* @__PURE__ */ jsx(CosvaBovine, { fontSize: "inherit" }) })
    }, label: `${plaque} ${name}`, showEdit: true, onClickEdit: () => {
      setEdit(true);
    }, children: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(DataSkeleton, {}), children: /* @__PURE__ */ jsx(PaperData, { bovine }) }) }),
    /* @__PURE__ */ jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(TabsSkeleton, {}), children: [
      hasMilkProductions && /* @__PURE__ */ jsx(Box, { sx: {
        mT: 1,
        mB: 1
      } }),
      /* @__PURE__ */ jsx(TabsBovine, { bovine }),
      /* @__PURE__ */ jsx(EditBovine, { bovine, open: edit, onClose: () => {
        setEdit(false);
      } })
    ] })
  ] }) });
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bovine,
  default: Bovine
}, Symbol.toStringTag, { value: "Module" }));
export {
  Tabs$1 as T,
  Tab$1 as a,
  TabPanel as b,
  index as i
};
