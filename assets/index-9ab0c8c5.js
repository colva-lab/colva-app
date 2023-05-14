import { g as getDisplayName, r as reactExports, _ as _objectWithoutProperties, u as useTranslation, a as _slicedToArray, b as _defineProperty, c as createTheme, s as systemStyled, d as useThemeProps, e as _extends, h as handleBreakpoints, f as resolveBreakpointValues, i as createUnarySpacing, j as deepmerge, m as mergeBreakpointsInOrder, k as extendSxProp, l as _objectWithoutPropertiesLoose, n as jsx, o as clsx, p as getValue, q as composeClasses, t as generateUtilityClass, v as lib$3, w as generateUtilityClasses, x as styled, P as Paper, y as _extends$1, z as useThemeProps$1, A as _objectWithoutPropertiesLoose$1, B as useControlled, C as jsxs, D as Collapse, E as ButtonBase, F as createSvgIcon, G as emphasize, T as Typography, H as useSlotProps, I as capitalize, J as keyframes, K as css, L as useTheme, M as lighten, N as darken, O as alpha, Q as listItemButtonClasses, R as ListContext, S as useEnhancedEffect, U as isMuiElement, V as useForkRef, W as isHostComponent, X as ListItemSecondaryAction, Y as slotShouldForwardProp, Z as SvgIcon, $ as isOptimistic, a0 as Box, a1 as styles$3, a2 as Grid, a3 as Avatar, a4 as Divider, a5 as produce, a6 as FarmCreatedDocument, a7 as FarmDeletedDocument, a8 as FarmUserCreatedDocument, a9 as FarmUserDeletedDocument, aa as CreateFarmDocument, ab as EditFarmDocument, ac as CreateFarmPhotosDocument, ad as FARMS_QUERY, ae as FARMS_NAV, af as FARM$1, ag as DeleteFarmPhotoDocument, ah as OrderFarmPhotoDocument, ai as DeleteFarmDocument, aj as orderImages, ak as arrayMoveImmutable, al as CreateFarmUserDocument, am as DeleteFarmUserDocument, an as GetFarmCategoriesDocument, ao as MessageDeletedDocument, ap as MessageCreatedDocument, aq as GetMessagesDocument, ar as GetCategoryByCodeDocument, as as React, at as Fragment, au as Snackbar, av as SnackBarVariant, aw as Variants, ax as DialogSimple, ay as FormLogin, az as requireCreateSvgIcon, aA as interopRequireDefaultExports, aB as require$$2, aC as gql, aD as useMutation, aE as withSession, aF as K, aG as useQuery, aH as Loading$1, aI as CssBaseline, aJ as propTypesExports, aK as getDefaultExportFromCjs, aL as getAugmentedNamespace, aM as classCallCheck$2, aN as createClass$2, aO as _typeof$1, aP as objectWithoutProperties$2, aQ as _extendsExports, aR as b, aS as mergeSx, aT as Button, aU as MuiDialog, aV as DialogActions, aW as IconButton, aX as default_1$a, aY as DialogContent, aZ as FieldBuilder, a_ as FieldRender, a$ as reactIsExports, b0 as parseImages, b1 as default_1$b, b2 as TextField, b3 as _arrayLikeToArray, b4 as _iterableToArray, b5 as _unsupportedIterableToArray, b6 as _createClass, b7 as _classCallCheck, b8 as _inherits, b9 as _possibleConstructorReturn, ba as _getPrototypeOf, bb as _assertThisInitialized, bc as reactDomExports, bd as _extends$2, be as Fab, bf as default_1$d, bg as Grow, bh as observer, bi as TransformLabel, bj as TranslationAnimated, bk as CircularProgress, bl as MessagesTranslate, bm as AnimationGrow, bn as FormHelperText, bo as RenderErrorsDefault, bp as useApolloClient, bq as resizeImageWorker, br as CREATE_USER_PHOTO, bs as DELETE_USER_PHOTO, bt as deleteUserPhotoUpdate, bu as ORDER_USER_PHOTO, bv as sortUserPhoto, bw as DialogTitle, bx as DialogContentText, by as getGlobalProps, bz as ObserverComponent, bA as EventEmitterErrors, bB as ApolloErrors, bC as LoadingPage, bD as default_1$e, bE as List, bF as ListItemText, bG as GET_ME_COMPLETE, bH as useWidth, bI as FieldsRender, bJ as client, bK as USERS_BY_EMAIL_OR_PHONE, bL as Autocomplete, bM as createFilterOptions, bN as default_1$f, bO as FieldsBuilder, bP as useFields, bQ as default_1$g, bR as useCosva, bS as RedirectFarms, bT as Link, bU as createRouteFarm, bV as isGraphQLErrors, bW as ListItemIcon, bX as ItemBodyAction, bY as defaultCosvaId, bZ as NavItem, b_ as ListItemButton, b$ as __vitePreload, c0 as NavItemPositions, c1 as PathRoutes, c2 as getCode, c3 as useIsWidthDown, c4 as createRouteFarmCategory, c5 as Navigate, c6 as CategoryGroupTypes, c7 as CATEGORY_GROUP_BY_CODE, c8 as useMatch, c9 as useLocation, ca as BOVINE, cb as matchPath, cc as Link$1, cd as LinkForwardRef, ce as createRouteFarmBovine, cf as createRouteFarmCategoryGroup, cg as FARM_BREADCRUMB, ch as generatePath, ci as CardActionAreaRef, cj as Routes, ck as Route, cl as LayoutProvider, cm as Layout, cn as useAuthorization, co as useSession, cp as useNavigate } from "./index-60a9ad09.js";
import { d as default_1$c, u as useField } from "./Save-95d94cd2.js";
var _excluded$g = ["forwardedRef"];
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(_ref) {
      var forwardedRef = _ref.forwardedRef, rest = _objectWithoutProperties(_ref, _excluded$g);
      var _useTranslation = useTranslation(ns, _objectSpread$1(_objectSpread$1({}, rest), {}, {
        keyPrefix: options.keyPrefix
      })), _useTranslation2 = _slicedToArray(_useTranslation, 3), t = _useTranslation2[0], i18n = _useTranslation2[1], ready = _useTranslation2[2];
      var passDownProps = _objectSpread$1(_objectSpread$1({}, rest), {}, {
        t,
        i18n,
        tReady: ready
      });
      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }
      return reactExports.createElement(WrappedComponent, passDownProps);
    }
    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat(getDisplayName(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    var forwardRef = function forwardRef2(props, ref) {
      return reactExports.createElement(I18nextWithTranslation, Object.assign({}, props, {
        forwardedRef: ref
      }));
    };
    return options.withRef ? reactExports.forwardRef(forwardRef) : I18nextWithTranslation;
  };
}
const _excluded$f = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
const defaultTheme = createTheme();
const defaultCreateStyledComponent = systemStyled("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
});
function useThemePropsDefault(props) {
  return useThemeProps({
    props,
    name: "MuiStack",
    defaultTheme
  });
}
function joinChildren(children, separator) {
  const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index2) => {
    output.push(child);
    if (index2 < childrenArray.length - 1) {
      output.push(/* @__PURE__ */ reactExports.cloneElement(separator, {
        key: `separator-${index2}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = (direction) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles2 = _extends({
    display: "flex",
    flexDirection: "column"
  }, handleBreakpoints({
    theme
  }, resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), (propValue) => ({
    flexDirection: propValue
  })));
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === "object") {
      Object.keys(directionValues).forEach((breakpoint, index2, breakpoints2) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index2 > 0 ? directionValues[breakpoints2[index2 - 1]] : "column";
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        "& > :not(style) + :not(style)": {
          margin: 0,
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
        }
      };
    };
    styles2 = deepmerge(styles2, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles2 = mergeBreakpointsInOrder(theme.breakpoints, styles2);
  return styles2;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps: useThemeProps2 = useThemePropsDefault,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses2 = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack2 = /* @__PURE__ */ reactExports.forwardRef(function Grid2(inProps, ref) {
    const themeProps = useThemeProps2(inProps);
    const props = extendSxProp(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses2();
    return /* @__PURE__ */ jsx(StackRoot, _extends({
      as: component,
      ownerState,
      ref,
      className: clsx(classes.root, className)
    }, other, {
      children: divider ? joinChildren(children, divider) : children
    }));
  });
  return Stack2;
}
const {
  VITE_API_IMAGES
} = { "VITE_API_URL": "https://api.cosva.app/graphql", "VITE_API_IMAGES": "https://files.cosva.app/files", "VITE_TRACKING_ID": "UA-163760631-1", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false };
const api = {
  API_IMAGES: VITE_API_IMAGES
};
const clearUrl = (url) => url.replace(/\/$/, "");
const createAPIImageRoute = (path, props) => {
  path = path.replace(/\?$/gm, "");
  const domain = clearUrl(api.API_IMAGES);
  return `${domain}/${path}?${lib$3.stringify(props || {})}`;
};
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function toUnitless(length) {
  return parseFloat(length);
}
const AccordionContext = /* @__PURE__ */ reactExports.createContext({});
const AccordionContext$1 = AccordionContext;
function getAccordionUtilityClass(slot) {
  return generateUtilityClass("MuiAccordion", slot);
}
const accordionClasses = generateUtilityClasses("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]);
const accordionClasses$1 = accordionClasses;
const _excluded$e = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"];
const useUtilityClasses$d = (ownerState) => {
  const {
    classes,
    square,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ["root", !square && "rounded", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
    region: ["region"]
  };
  return composeClasses(slots, getAccordionUtilityClass, classes);
};
const AccordionRoot = styled(Paper, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${accordionClasses$1.region}`]: styles2.region
    }, styles2.root, !ownerState.square && styles2.rounded, !ownerState.disableGutters && styles2.gutters];
  }
})(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: theme.transitions.create(["margin"], transition),
    overflowAnchor: "none",
    // Keep the same scrolling position
    "&:before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (theme.vars || theme).palette.divider,
      transition: theme.transitions.create(["opacity", "background-color"], transition)
    },
    "&:first-of-type": {
      "&:before": {
        display: "none"
      }
    },
    [`&.${accordionClasses$1.expanded}`]: {
      "&:before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&:before": {
          display: "none"
        }
      }
    },
    [`&.${accordionClasses$1.disabled}`]: {
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    }
  };
}, ({
  theme,
  ownerState
}) => _extends$1({}, !ownerState.square && {
  borderRadius: 0,
  "&:first-of-type": {
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius
  },
  "&:last-of-type": {
    borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    // Fix a rendering issue on Edge
    "@supports (-ms-ime-align: auto)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}, !ownerState.disableGutters && {
  [`&.${accordionClasses$1.expanded}`]: {
    margin: "16px 0"
  }
}));
const Accordion = /* @__PURE__ */ reactExports.forwardRef(function Accordion2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiAccordion"
  });
  const {
    children: childrenProp,
    className,
    defaultExpanded = false,
    disabled = false,
    disableGutters = false,
    expanded: expandedProp,
    onChange,
    square = false,
    TransitionComponent = Collapse,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$e);
  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "Accordion",
    state: "expanded"
  });
  const handleChange = reactExports.useCallback((event) => {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  const [summary, ...children] = reactExports.Children.toArray(childrenProp);
  const contextValue = reactExports.useMemo(() => ({
    expanded,
    disabled,
    disableGutters,
    toggle: handleChange
  }), [expanded, disabled, disableGutters, handleChange]);
  const ownerState = _extends$1({}, props, {
    square,
    disabled,
    disableGutters,
    expanded
  });
  const classes = useUtilityClasses$d(ownerState);
  return /* @__PURE__ */ jsxs(AccordionRoot, _extends$1({
    className: clsx(classes.root, className),
    ref,
    ownerState,
    square
  }, other, {
    children: [/* @__PURE__ */ jsx(AccordionContext$1.Provider, {
      value: contextValue,
      children: summary
    }), /* @__PURE__ */ jsx(TransitionComponent, _extends$1({
      in: expanded,
      timeout: "auto"
    }, TransitionProps, {
      children: /* @__PURE__ */ jsx("div", {
        "aria-labelledby": summary.props.id,
        id: summary.props["aria-controls"],
        role: "region",
        className: classes.region,
        children
      })
    }))]
  }));
});
const Accordion$1 = Accordion;
function getAccordionDetailsUtilityClass(slot) {
  return generateUtilityClass("MuiAccordionDetails", slot);
}
generateUtilityClasses("MuiAccordionDetails", ["root"]);
const _excluded$d = ["className"];
const useUtilityClasses$c = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
};
const AccordionDetailsRoot = styled("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme
}) => ({
  padding: theme.spacing(1, 2, 2)
}));
const AccordionDetails = /* @__PURE__ */ reactExports.forwardRef(function AccordionDetails2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiAccordionDetails"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$d);
  const ownerState = props;
  const classes = useUtilityClasses$c(ownerState);
  return /* @__PURE__ */ jsx(AccordionDetailsRoot, _extends$1({
    className: clsx(classes.root, className),
    ref,
    ownerState
  }, other));
});
const AccordionDetails$1 = AccordionDetails;
function getAccordionSummaryUtilityClass(slot) {
  return generateUtilityClass("MuiAccordionSummary", slot);
}
const accordionSummaryClasses = generateUtilityClasses("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]);
const accordionSummaryClasses$1 = accordionSummaryClasses;
const _excluded$c = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];
const useUtilityClasses$b = (ownerState) => {
  const {
    classes,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ["root", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", expanded && "expanded", !disableGutters && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", expanded && "expanded"]
  };
  return composeClasses(slots, getAccordionSummaryUtilityClass, classes);
};
const AccordionSummaryRoot = styled(ButtonBase, {
  name: "MuiAccordionSummary",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme,
  ownerState
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return _extends$1({
    display: "flex",
    minHeight: 48,
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(["min-height", "background-color"], transition),
    [`&.${accordionSummaryClasses$1.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${accordionSummaryClasses$1.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`&:hover:not(.${accordionSummaryClasses$1.disabled})`]: {
      cursor: "pointer"
    }
  }, !ownerState.disableGutters && {
    [`&.${accordionSummaryClasses$1.expanded}`]: {
      minHeight: 64
    }
  });
});
const AccordionSummaryContent = styled("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (props, styles2) => styles2.content
})(({
  theme,
  ownerState
}) => _extends$1({
  display: "flex",
  flexGrow: 1,
  margin: "12px 0"
}, !ownerState.disableGutters && {
  transition: theme.transitions.create(["margin"], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${accordionSummaryClasses$1.expanded}`]: {
    margin: "20px 0"
  }
}));
const AccordionSummaryExpandIconWrapper = styled("div", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (props, styles2) => styles2.expandIconWrapper
})(({
  theme
}) => ({
  display: "flex",
  color: (theme.vars || theme).palette.action.active,
  transform: "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${accordionSummaryClasses$1.expanded}`]: {
    transform: "rotate(180deg)"
  }
}));
const AccordionSummary = /* @__PURE__ */ reactExports.forwardRef(function AccordionSummary2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiAccordionSummary"
  });
  const {
    children,
    className,
    expandIcon,
    focusVisibleClassName,
    onClick
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$c);
  const {
    disabled = false,
    disableGutters,
    expanded,
    toggle
  } = reactExports.useContext(AccordionContext$1);
  const handleChange = (event) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const ownerState = _extends$1({}, props, {
    expanded,
    disabled,
    disableGutters
  });
  const classes = useUtilityClasses$b(ownerState);
  return /* @__PURE__ */ jsxs(AccordionSummaryRoot, _extends$1({
    focusRipple: false,
    disableRipple: true,
    disabled,
    component: "div",
    "aria-expanded": expanded,
    className: clsx(classes.root, className),
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    onClick: handleChange,
    ref,
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsx(AccordionSummaryContent, {
      className: classes.content,
      ownerState,
      children
    }), expandIcon && /* @__PURE__ */ jsx(AccordionSummaryExpandIconWrapper, {
      className: classes.expandIconWrapper,
      ownerState,
      children: expandIcon
    })]
  }));
});
const AccordionSummary$1 = AccordionSummary;
const MoreHorizIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz");
const _excluded$b = ["slots", "slotProps"];
const BreadcrumbCollapsedButton = styled(ButtonBase)(({
  theme
}) => _extends$1({
  display: "flex",
  marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
  marginRight: `calc(${theme.spacing(1)} * 0.5)`
}, theme.palette.mode === "light" ? {
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[700]
} : {
  backgroundColor: theme.palette.grey[700],
  color: theme.palette.grey[100]
}, {
  borderRadius: 2,
  "&:hover, &:focus": _extends$1({}, theme.palette.mode === "light" ? {
    backgroundColor: theme.palette.grey[200]
  } : {
    backgroundColor: theme.palette.grey[600]
  }),
  "&:active": _extends$1({
    boxShadow: theme.shadows[0]
  }, theme.palette.mode === "light" ? {
    backgroundColor: emphasize(theme.palette.grey[200], 0.12)
  } : {
    backgroundColor: emphasize(theme.palette.grey[600], 0.12)
  })
}));
const BreadcrumbCollapsedIcon = styled(MoreHorizIcon)({
  width: 24,
  height: 16
});
function BreadcrumbCollapsed(props) {
  const {
    slots = {},
    slotProps = {}
  } = props, otherProps = _objectWithoutPropertiesLoose$1(props, _excluded$b);
  const ownerState = props;
  return /* @__PURE__ */ jsx("li", {
    children: /* @__PURE__ */ jsx(BreadcrumbCollapsedButton, _extends$1({
      focusRipple: true
    }, otherProps, {
      ownerState,
      children: /* @__PURE__ */ jsx(BreadcrumbCollapsedIcon, _extends$1({
        as: slots.CollapsedIcon,
        ownerState
      }, slotProps.collapsedIcon))
    }))
  });
}
function getBreadcrumbsUtilityClass(slot) {
  return generateUtilityClass("MuiBreadcrumbs", slot);
}
const breadcrumbsClasses = generateUtilityClasses("MuiBreadcrumbs", ["root", "ol", "li", "separator"]);
const breadcrumbsClasses$1 = breadcrumbsClasses;
const _excluded$a = ["children", "className", "component", "slots", "slotProps", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"];
const useUtilityClasses$a = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  };
  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};
const BreadcrumbsRoot = styled(Typography, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    return [{
      [`& .${breadcrumbsClasses$1.li}`]: styles2.li
    }, styles2.root];
  }
})({});
const BreadcrumbsOl = styled("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol",
  overridesResolver: (props, styles2) => styles2.ol
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
const BreadcrumbsSeparator = styled("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (props, styles2) => styles2.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function insertSeparators(items, className, separator, ownerState) {
  return items.reduce((acc, current, index2) => {
    if (index2 < items.length - 1) {
      acc = acc.concat(current, /* @__PURE__ */ jsx(BreadcrumbsSeparator, {
        "aria-hidden": true,
        className,
        ownerState,
        children: separator
      }, `separator-${index2}`));
    } else {
      acc.push(current);
    }
    return acc;
  }, []);
}
const Breadcrumbs = /* @__PURE__ */ reactExports.forwardRef(function Breadcrumbs2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiBreadcrumbs"
  });
  const {
    children,
    className,
    component = "nav",
    slots = {},
    slotProps = {},
    expandText = "Show path",
    itemsAfterCollapse = 1,
    itemsBeforeCollapse = 1,
    maxItems = 8,
    separator = "/"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$a);
  const [expanded, setExpanded] = reactExports.useState(false);
  const ownerState = _extends$1({}, props, {
    component,
    expanded,
    expandText,
    itemsAfterCollapse,
    itemsBeforeCollapse,
    maxItems,
    separator
  });
  const classes = useUtilityClasses$a(ownerState);
  const collapsedIconSlotProps = useSlotProps({
    elementType: slots.CollapsedIcon,
    externalSlotProps: slotProps.collapsedIcon,
    ownerState
  });
  const listRef = reactExports.useRef(null);
  const renderItemsBeforeAndAfter = (allItems2) => {
    const handleClickExpand = () => {
      setExpanded(true);
      const focusable = listRef.current.querySelector("a[href],button,[tabindex]");
      if (focusable) {
        focusable.focus();
      }
    };
    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems2.length) {
      return allItems2;
    }
    return [...allItems2.slice(0, itemsBeforeCollapse), /* @__PURE__ */ jsx(BreadcrumbCollapsed, {
      "aria-label": expandText,
      slots: {
        CollapsedIcon: slots.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: collapsedIconSlotProps
      },
      onClick: handleClickExpand
    }, "ellipsis"), ...allItems2.slice(allItems2.length - itemsAfterCollapse, allItems2.length)];
  };
  const allItems = reactExports.Children.toArray(children).filter((child) => {
    return /* @__PURE__ */ reactExports.isValidElement(child);
  }).map((child, index2) => /* @__PURE__ */ jsx("li", {
    className: classes.li,
    children: child
  }, `child-${index2}`));
  return /* @__PURE__ */ jsx(BreadcrumbsRoot, _extends$1({
    ref,
    component,
    color: "text.secondary",
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx(BreadcrumbsOl, {
      className: classes.ol,
      ref: listRef,
      ownerState,
      children: insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator, ownerState)
    })
  }));
});
const Breadcrumbs$1 = Breadcrumbs;
function getCardUtilityClass(slot) {
  return generateUtilityClass("MuiCard", slot);
}
generateUtilityClasses("MuiCard", ["root"]);
const _excluded$9 = ["className", "raised"];
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardUtilityClass, classes);
};
const CardRoot = styled(Paper, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(() => {
  return {
    overflow: "hidden"
  };
});
const Card = /* @__PURE__ */ reactExports.forwardRef(function Card2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiCard"
  });
  const {
    className,
    raised = false
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$9);
  const ownerState = _extends$1({}, props, {
    raised
  });
  const classes = useUtilityClasses$9(ownerState);
  return /* @__PURE__ */ jsx(CardRoot, _extends$1({
    className: clsx(classes.root, className),
    elevation: raised ? 8 : void 0,
    ref,
    ownerState
  }, other));
});
const Card$1 = Card;
function getCardActionAreaUtilityClass(slot) {
  return generateUtilityClass("MuiCardActionArea", slot);
}
const cardActionAreaClasses = generateUtilityClasses("MuiCardActionArea", ["root", "focusVisible", "focusHighlight"]);
const cardActionAreaClasses$1 = cardActionAreaClasses;
const _excluded$8 = ["children", "className", "focusVisibleClassName"];
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    focusHighlight: ["focusHighlight"]
  };
  return composeClasses(slots, getCardActionAreaUtilityClass, classes);
};
const CardActionAreaRoot = styled(ButtonBase, {
  name: "MuiCardActionArea",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme
}) => ({
  display: "block",
  textAlign: "inherit",
  width: "100%",
  [`&:hover .${cardActionAreaClasses$1.focusHighlight}`]: {
    opacity: (theme.vars || theme).palette.action.hoverOpacity,
    "@media (hover: none)": {
      opacity: 0
    }
  },
  [`&.${cardActionAreaClasses$1.focusVisible} .${cardActionAreaClasses$1.focusHighlight}`]: {
    opacity: (theme.vars || theme).palette.action.focusOpacity
  }
}));
const CardActionAreaFocusHighlight = styled("span", {
  name: "MuiCardActionArea",
  slot: "FocusHighlight",
  overridesResolver: (props, styles2) => styles2.focusHighlight
})(({
  theme
}) => ({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit",
  opacity: 0,
  backgroundColor: "currentcolor",
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.short
  })
}));
const CardActionArea = /* @__PURE__ */ reactExports.forwardRef(function CardActionArea2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiCardActionArea"
  });
  const {
    children,
    className,
    focusVisibleClassName
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$8);
  const ownerState = props;
  const classes = useUtilityClasses$8(ownerState);
  return /* @__PURE__ */ jsxs(CardActionAreaRoot, _extends$1({
    className: clsx(classes.root, className),
    focusVisibleClassName: clsx(focusVisibleClassName, classes.focusVisible),
    ref,
    ownerState
  }, other, {
    children: [children, /* @__PURE__ */ jsx(CardActionAreaFocusHighlight, {
      className: classes.focusHighlight,
      ownerState
    })]
  }));
});
const CardActionArea$1 = CardActionArea;
function getCardContentUtilityClass(slot) {
  return generateUtilityClass("MuiCardContent", slot);
}
generateUtilityClasses("MuiCardContent", ["root"]);
const _excluded$7 = ["className", "component"];
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = styled("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(() => {
  return {
    padding: 16,
    "&:last-child": {
      paddingBottom: 24
    }
  };
});
const CardContent = /* @__PURE__ */ reactExports.forwardRef(function CardContent2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiCardContent"
  });
  const {
    className,
    component = "div"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$7);
  const ownerState = _extends$1({}, props, {
    component
  });
  const classes = useUtilityClasses$7(ownerState);
  return /* @__PURE__ */ jsx(CardContentRoot, _extends$1({
    as: component,
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other));
});
const CardContent$1 = CardContent;
function getCardMediaUtilityClass(slot) {
  return generateUtilityClass("MuiCardMedia", slot);
}
generateUtilityClasses("MuiCardMedia", ["root", "media", "img"]);
const _excluded$6 = ["children", "className", "component", "image", "src", "style"];
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes,
    isMediaComponent,
    isImageComponent
  } = ownerState;
  const slots = {
    root: ["root", isMediaComponent && "media", isImageComponent && "img"]
  };
  return composeClasses(slots, getCardMediaUtilityClass, classes);
};
const CardMediaRoot = styled("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      isMediaComponent,
      isImageComponent
    } = ownerState;
    return [styles2.root, isMediaComponent && styles2.media, isImageComponent && styles2.img];
  }
})(({
  ownerState
}) => _extends$1({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}, ownerState.isMediaComponent && {
  width: "100%"
}, ownerState.isImageComponent && {
  // ⚠️ object-fit is not supported by IE11.
  objectFit: "cover"
}));
const MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];
const IMAGE_COMPONENTS = ["picture", "img"];
const CardMedia = /* @__PURE__ */ reactExports.forwardRef(function CardMedia2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiCardMedia"
  });
  const {
    children,
    className,
    component = "div",
    image,
    src,
    style: style2
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$6);
  const isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
  const composedStyle = !isMediaComponent && image ? _extends$1({
    backgroundImage: `url("${image}")`
  }, style2) : style2;
  const ownerState = _extends$1({}, props, {
    component,
    isMediaComponent,
    isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
  });
  const classes = useUtilityClasses$6(ownerState);
  return /* @__PURE__ */ jsx(CardMediaRoot, _extends$1({
    className: clsx(classes.root, className),
    as: component,
    role: !isMediaComponent && image ? "img" : void 0,
    ref,
    style: composedStyle,
    ownerState,
    src: isMediaComponent ? image || src : void 0
  }, other, {
    children
  }));
});
const CardMedia$1 = CardMedia;
function getIconUtilityClass(slot) {
  return generateUtilityClass("MuiIcon", slot);
}
generateUtilityClasses("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const _excluded$5 = ["baseClassName", "className", "color", "component", "fontSize"];
const useUtilityClasses$5 = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getIconUtilityClass, classes);
};
const IconRoot = styled("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize(ownerState.color)}`], styles2[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
  // To remove at some point.
  overflow: "hidden",
  display: "inline-block",
  // allow overflow hidden to take action
  textAlign: "center",
  // support non-square icon
  flexShrink: 0,
  fontSize: {
    inherit: "inherit",
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36)
  }[ownerState.fontSize],
  // TODO v5 deprecate, v6 remove for sx
  color: {
    primary: (theme.vars || theme).palette.primary.main,
    secondary: (theme.vars || theme).palette.secondary.main,
    info: (theme.vars || theme).palette.info.main,
    success: (theme.vars || theme).palette.success.main,
    warning: (theme.vars || theme).palette.warning.main,
    action: (theme.vars || theme).palette.action.active,
    error: (theme.vars || theme).palette.error.main,
    disabled: (theme.vars || theme).palette.action.disabled,
    inherit: void 0
  }[ownerState.color]
}));
const Icon = /* @__PURE__ */ reactExports.forwardRef(function Icon2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiIcon"
  });
  const {
    baseClassName = "material-icons",
    className,
    color = "inherit",
    component: Component = "span",
    fontSize = "medium"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$5);
  const ownerState = _extends$1({}, props, {
    baseClassName,
    color,
    component: Component,
    fontSize
  });
  const classes = useUtilityClasses$5(ownerState);
  return /* @__PURE__ */ jsx(IconRoot, _extends$1({
    as: Component,
    className: clsx(
      baseClassName,
      // Prevent the translation of the text content.
      // The font relies on the exact text content to render the icon.
      "notranslate",
      classes.root,
      className
    ),
    ownerState,
    "aria-hidden": true,
    ref
  }, other));
});
Icon.muiName = "Icon";
const Icon$1 = Icon;
function getLinearProgressUtilityClass(slot) {
  return generateUtilityClass("MuiLinearProgress", slot);
}
generateUtilityClasses("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const _excluded$4 = ["className", "color", "value", "valueBuffer", "variant"];
let _$1 = (t) => t, _t$1, _t2$1, _t3$1, _t4$1, _t5, _t6;
const TRANSITION_DURATION = 4;
const indeterminate1Keyframe = keyframes(_t$1 || (_t$1 = _$1`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`));
const indeterminate2Keyframe = keyframes(_t2$1 || (_t2$1 = _$1`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`));
const bufferKeyframe = keyframes(_t3$1 || (_t3$1 = _$1`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`));
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, variant],
    dashed: ["dashed", `dashedColor${capitalize(color)}`],
    bar1: ["bar", `barColor${capitalize(color)}`, (variant === "indeterminate" || variant === "query") && "bar1Indeterminate", variant === "determinate" && "bar1Determinate", variant === "buffer" && "bar1Buffer"],
    bar2: ["bar", variant !== "buffer" && `barColor${capitalize(color)}`, variant === "buffer" && `color${capitalize(color)}`, (variant === "indeterminate" || variant === "query") && "bar2Indeterminate", variant === "buffer" && "bar2Buffer"]
  };
  return composeClasses(slots, getLinearProgressUtilityClass, classes);
};
const getColorShade = (theme, color) => {
  if (color === "inherit") {
    return "currentColor";
  }
  if (theme.vars) {
    return theme.vars.palette.LinearProgress[`${color}Bg`];
  }
  return theme.palette.mode === "light" ? lighten(theme.palette[color].main, 0.62) : darken(theme.palette[color].main, 0.5);
};
const LinearProgressRoot = styled("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`color${capitalize(ownerState.color)}`], styles2[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => _extends$1({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  zIndex: 0,
  // Fix Safari's bug during composition of different paint.
  "@media print": {
    colorAdjust: "exact"
  },
  backgroundColor: getColorShade(theme, ownerState.color)
}, ownerState.color === "inherit" && ownerState.variant !== "buffer" && {
  backgroundColor: "none",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "currentColor",
    opacity: 0.3
  }
}, ownerState.variant === "buffer" && {
  backgroundColor: "transparent"
}, ownerState.variant === "query" && {
  transform: "rotate(180deg)"
}));
const LinearProgressDashed = styled("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.dashed, styles2[`dashedColor${capitalize(ownerState.color)}`]];
  }
})(({
  ownerState,
  theme
}) => {
  const backgroundColor = getColorShade(theme, ownerState.color);
  return _extends$1({
    position: "absolute",
    marginTop: 0,
    height: "100%",
    width: "100%"
  }, ownerState.color === "inherit" && {
    opacity: 0.3
  }, {
    backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`,
    backgroundSize: "10px 10px",
    backgroundPosition: "0 -23px"
  });
}, css(_t4$1 || (_t4$1 = _$1`
    animation: ${0} 3s infinite linear;
  `), bufferKeyframe));
const LinearProgressBar1 = styled("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.bar, styles2[`barColor${capitalize(ownerState.color)}`], (ownerState.variant === "indeterminate" || ownerState.variant === "query") && styles2.bar1Indeterminate, ownerState.variant === "determinate" && styles2.bar1Determinate, ownerState.variant === "buffer" && styles2.bar1Buffer];
  }
})(({
  ownerState,
  theme
}) => _extends$1({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  backgroundColor: ownerState.color === "inherit" ? "currentColor" : (theme.vars || theme).palette[ownerState.color].main
}, ownerState.variant === "determinate" && {
  transition: `transform .${TRANSITION_DURATION}s linear`
}, ownerState.variant === "buffer" && {
  zIndex: 1,
  transition: `transform .${TRANSITION_DURATION}s linear`
}), ({
  ownerState
}) => (ownerState.variant === "indeterminate" || ownerState.variant === "query") && css(_t5 || (_t5 = _$1`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), indeterminate1Keyframe));
const LinearProgressBar2 = styled("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.bar, styles2[`barColor${capitalize(ownerState.color)}`], (ownerState.variant === "indeterminate" || ownerState.variant === "query") && styles2.bar2Indeterminate, ownerState.variant === "buffer" && styles2.bar2Buffer];
  }
})(({
  ownerState,
  theme
}) => _extends$1({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left"
}, ownerState.variant !== "buffer" && {
  backgroundColor: ownerState.color === "inherit" ? "currentColor" : (theme.vars || theme).palette[ownerState.color].main
}, ownerState.color === "inherit" && {
  opacity: 0.3
}, ownerState.variant === "buffer" && {
  backgroundColor: getColorShade(theme, ownerState.color),
  transition: `transform .${TRANSITION_DURATION}s linear`
}), ({
  ownerState
}) => (ownerState.variant === "indeterminate" || ownerState.variant === "query") && css(_t6 || (_t6 = _$1`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), indeterminate2Keyframe));
const LinearProgress = /* @__PURE__ */ reactExports.forwardRef(function LinearProgress2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiLinearProgress"
  });
  const {
    className,
    color = "primary",
    value: value2,
    valueBuffer,
    variant = "indeterminate"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$4);
  const ownerState = _extends$1({}, props, {
    color,
    variant
  });
  const classes = useUtilityClasses$4(ownerState);
  const theme = useTheme();
  const rootProps = {};
  const inlineStyles = {
    bar1: {},
    bar2: {}
  };
  if (variant === "determinate" || variant === "buffer") {
    if (value2 !== void 0) {
      rootProps["aria-valuenow"] = Math.round(value2);
      rootProps["aria-valuemin"] = 0;
      rootProps["aria-valuemax"] = 100;
      let transform = value2 - 100;
      if (theme.direction === "rtl") {
        transform = -transform;
      }
      inlineStyles.bar1.transform = `translateX(${transform}%)`;
    }
  }
  if (variant === "buffer") {
    if (valueBuffer !== void 0) {
      let transform = (valueBuffer || 0) - 100;
      if (theme.direction === "rtl") {
        transform = -transform;
      }
      inlineStyles.bar2.transform = `translateX(${transform}%)`;
    }
  }
  return /* @__PURE__ */ jsxs(LinearProgressRoot, _extends$1({
    className: clsx(classes.root, className),
    ownerState,
    role: "progressbar"
  }, rootProps, {
    ref
  }, other, {
    children: [variant === "buffer" ? /* @__PURE__ */ jsx(LinearProgressDashed, {
      className: classes.dashed,
      ownerState
    }) : null, /* @__PURE__ */ jsx(LinearProgressBar1, {
      className: classes.bar1,
      ownerState,
      style: inlineStyles.bar1
    }), variant === "determinate" ? null : /* @__PURE__ */ jsx(LinearProgressBar2, {
      className: classes.bar2,
      ownerState,
      style: inlineStyles.bar2
    })]
  }));
});
const LinearProgress$1 = LinearProgress;
function getListItemUtilityClass(slot) {
  return generateUtilityClass("MuiListItem", slot);
}
const listItemClasses = generateUtilityClasses("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]);
const listItemClasses$1 = listItemClasses;
const _excluded$3 = ["className"], _excluded2 = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"];
const overridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.dense && styles2.dense, ownerState.alignItems === "flex-start" && styles2.alignItemsFlexStart, ownerState.divider && styles2.divider, !ownerState.disableGutters && styles2.gutters, !ownerState.disablePadding && styles2.padding, ownerState.button && styles2.button, ownerState.hasSecondaryAction && styles2.secondaryAction];
};
const useUtilityClasses$3 = (ownerState) => {
  const {
    alignItems,
    button,
    classes,
    dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", !disableGutters && "gutters", !disablePadding && "padding", divider && "divider", disabled && "disabled", button && "button", alignItems === "flex-start" && "alignItemsFlexStart", hasSecondaryAction && "secondaryAction", selected && "selected"],
    container: ["container"]
  };
  return composeClasses(slots, getListItemUtilityClass, classes);
};
const ListItemRoot = styled("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends$1({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !ownerState.disablePadding && _extends$1({
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!ownerState.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!ownerState.secondaryAction && {
  [`& > .${listItemButtonClasses.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${listItemClasses$1.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${listItemClasses$1.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemClasses$1.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemClasses$1.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: "padding-box"
}, ownerState.button && {
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${listItemClasses$1.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  }
}, ownerState.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}));
const ListItemContainer = styled("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (props, styles2) => styles2.container
})({
  position: "relative"
});
const ListItem = /* @__PURE__ */ reactExports.forwardRef(function ListItem2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiListItem"
  });
  const {
    alignItems = "center",
    autoFocus = false,
    button = false,
    children: childrenProp,
    className,
    component: componentProp,
    components = {},
    componentsProps = {},
    ContainerComponent = "li",
    ContainerProps: {
      className: ContainerClassName
    } = {},
    dense = false,
    disabled = false,
    disableGutters = false,
    disablePadding = false,
    divider = false,
    focusVisibleClassName,
    secondaryAction,
    selected = false,
    slotProps = {},
    slots = {}
  } = props, ContainerProps = _objectWithoutPropertiesLoose$1(props.ContainerProps, _excluded$3), other = _objectWithoutPropertiesLoose$1(props, _excluded2);
  const context = reactExports.useContext(ListContext);
  const childContext = reactExports.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = reactExports.useRef(null);
  useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      }
    }
  }, [autoFocus]);
  const children = reactExports.Children.toArray(childrenProp);
  const hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ["ListItemSecondaryAction"]);
  const ownerState = _extends$1({}, props, {
    alignItems,
    autoFocus,
    button,
    dense: childContext.dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  });
  const classes = useUtilityClasses$3(ownerState);
  const handleRef = useForkRef(listItemRef, ref);
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = _extends$1({
    className: clsx(classes.root, rootProps.className, className),
    disabled
  }, other);
  let Component = componentProp || "li";
  if (button) {
    componentProps.component = componentProp || "div";
    componentProps.focusVisibleClassName = clsx(listItemClasses$1.focusVisible, focusVisibleClassName);
    Component = ButtonBase;
  }
  if (hasSecondaryAction) {
    Component = !componentProps.component && !componentProp ? "div" : Component;
    if (ContainerComponent === "li") {
      if (Component === "li") {
        Component = "div";
      } else if (componentProps.component === "li") {
        componentProps.component = "div";
      }
    }
    return /* @__PURE__ */ jsx(ListContext.Provider, {
      value: childContext,
      children: /* @__PURE__ */ jsxs(ListItemContainer, _extends$1({
        as: ContainerComponent,
        className: clsx(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState
      }, ContainerProps, {
        children: [/* @__PURE__ */ jsx(Root, _extends$1({}, rootProps, !isHostComponent(Root) && {
          as: Component,
          ownerState: _extends$1({}, ownerState, rootProps.ownerState)
        }, componentProps, {
          children
        })), children.pop()]
      }))
    });
  }
  return /* @__PURE__ */ jsx(ListContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxs(Root, _extends$1({}, rootProps, {
      as: Component,
      ref: handleRef
    }, !isHostComponent(Root) && {
      ownerState: _extends$1({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && /* @__PURE__ */ jsx(ListItemSecondaryAction, {
        children: secondaryAction
      })]
    }))
  });
});
const ListItem$1 = ListItem;
function getListItemAvatarUtilityClass(slot) {
  return generateUtilityClass("MuiListItemAvatar", slot);
}
generateUtilityClasses("MuiListItemAvatar", ["root", "alignItemsFlexStart"]);
const _excluded$2 = ["className"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
  };
  return composeClasses(slots, getListItemAvatarUtilityClass, classes);
};
const ListItemAvatarRoot = styled("div", {
  name: "MuiListItemAvatar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.alignItems === "flex-start" && styles2.alignItemsFlexStart];
  }
})(({
  ownerState
}) => _extends$1({
  minWidth: 56,
  flexShrink: 0
}, ownerState.alignItems === "flex-start" && {
  marginTop: 8
}));
const ListItemAvatar = /* @__PURE__ */ reactExports.forwardRef(function ListItemAvatar2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiListItemAvatar"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$2);
  const context = reactExports.useContext(ListContext);
  const ownerState = _extends$1({}, props, {
    alignItems: context.alignItems
  });
  const classes = useUtilityClasses$2(ownerState);
  return /* @__PURE__ */ jsx(ListItemAvatarRoot, _extends$1({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other));
});
const ListItemAvatar$1 = ListItemAvatar;
function getMobileStepperUtilityClass(slot) {
  return generateUtilityClass("MuiMobileStepper", slot);
}
generateUtilityClasses("MuiMobileStepper", ["root", "positionBottom", "positionTop", "positionStatic", "dots", "dot", "dotActive", "progress"]);
const _excluded$1 = ["activeStep", "backButton", "className", "LinearProgressProps", "nextButton", "position", "steps", "variant"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    position
  } = ownerState;
  const slots = {
    root: ["root", `position${capitalize(position)}`],
    dots: ["dots"],
    dot: ["dot"],
    dotActive: ["dotActive"],
    progress: ["progress"]
  };
  return composeClasses(slots, getMobileStepperUtilityClass, classes);
};
const MobileStepperRoot = styled(Paper, {
  name: "MuiMobileStepper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`position${capitalize(ownerState.position)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends$1({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background: (theme.vars || theme).palette.background.default,
  padding: 8
}, ownerState.position === "bottom" && {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: (theme.vars || theme).zIndex.mobileStepper
}, ownerState.position === "top" && {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: (theme.vars || theme).zIndex.mobileStepper
}));
const MobileStepperDots = styled("div", {
  name: "MuiMobileStepper",
  slot: "Dots",
  overridesResolver: (props, styles2) => styles2.dots
})(({
  ownerState
}) => _extends$1({}, ownerState.variant === "dots" && {
  display: "flex",
  flexDirection: "row"
}));
const MobileStepperDot = styled("div", {
  name: "MuiMobileStepper",
  slot: "Dot",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "dotActive",
  overridesResolver: (props, styles2) => {
    const {
      dotActive
    } = props;
    return [styles2.dot, dotActive && styles2.dotActive];
  }
})(({
  theme,
  ownerState,
  dotActive
}) => _extends$1({}, ownerState.variant === "dots" && _extends$1({
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: (theme.vars || theme).palette.action.disabled,
  borderRadius: "50%",
  width: 8,
  height: 8,
  margin: "0 2px"
}, dotActive && {
  backgroundColor: (theme.vars || theme).palette.primary.main
})));
const MobileStepperProgress = styled(LinearProgress$1, {
  name: "MuiMobileStepper",
  slot: "Progress",
  overridesResolver: (props, styles2) => styles2.progress
})(({
  ownerState
}) => _extends$1({}, ownerState.variant === "progress" && {
  width: "50%"
}));
const MobileStepper = /* @__PURE__ */ reactExports.forwardRef(function MobileStepper2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiMobileStepper"
  });
  const {
    activeStep = 0,
    backButton,
    className,
    LinearProgressProps,
    nextButton,
    position = "bottom",
    steps,
    variant = "dots"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$1);
  const ownerState = _extends$1({}, props, {
    activeStep,
    position,
    variant
  });
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxs(MobileStepperRoot, _extends$1({
    square: true,
    elevation: 0,
    className: clsx(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: [backButton, variant === "text" && /* @__PURE__ */ jsxs(reactExports.Fragment, {
      children: [activeStep + 1, " / ", steps]
    }), variant === "dots" && /* @__PURE__ */ jsx(MobileStepperDots, {
      ownerState,
      className: classes.dots,
      children: [...new Array(steps)].map((_2, index2) => /* @__PURE__ */ jsx(MobileStepperDot, {
        className: clsx(classes.dot, index2 === activeStep && classes.dotActive),
        ownerState,
        dotActive: index2 === activeStep
      }, index2))
    }), variant === "progress" && /* @__PURE__ */ jsx(MobileStepperProgress, _extends$1({
      ownerState,
      className: classes.progress,
      variant: "determinate",
      value: Math.ceil(activeStep / (steps - 1) * 100)
    }, LinearProgressProps)), nextButton]
  }));
});
const MobileStepper$1 = MobileStepper;
function getSkeletonUtilityClass(slot) {
  return generateUtilityClass("MuiSkeleton", slot);
}
generateUtilityClasses("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const _excluded = ["animation", "className", "component", "height", "style", "variant", "width"];
let _ = (t) => t, _t, _t2, _t3, _t4;
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  const slots = {
    root: ["root", variant, animation, hasChildren && "withChildren", hasChildren && !width && "fitContent", hasChildren && !height && "heightAuto"]
  };
  return composeClasses(slots, getSkeletonUtilityClass, classes);
};
const pulseKeyframe = keyframes(_t || (_t = _`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`));
const waveKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`));
const SkeletonRoot = styled("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], ownerState.animation !== false && styles2[ownerState.animation], ownerState.hasChildren && styles2.withChildren, ownerState.hasChildren && !ownerState.width && styles2.fitContent, ownerState.hasChildren && !ownerState.height && styles2.heightAuto];
  }
})(({
  theme,
  ownerState
}) => {
  const radiusUnit = getUnit(theme.shape.borderRadius) || "px";
  const radiusValue = toUnitless(theme.shape.borderRadius);
  return _extends$1({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : alpha(theme.palette.text.primary, theme.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em"
  }, ownerState.variant === "text" && {
    marginTop: 0,
    marginBottom: 0,
    height: "auto",
    transformOrigin: "0 55%",
    transform: "scale(1, 0.60)",
    borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
    "&:empty:before": {
      content: '"\\00a0"'
    }
  }, ownerState.variant === "circular" && {
    borderRadius: "50%"
  }, ownerState.variant === "rounded" && {
    borderRadius: (theme.vars || theme).shape.borderRadius
  }, ownerState.hasChildren && {
    "& > *": {
      visibility: "hidden"
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: "fit-content"
  }, ownerState.hasChildren && !ownerState.height && {
    height: "auto"
  });
}, ({
  ownerState
}) => ownerState.animation === "pulse" && css(_t3 || (_t3 = _`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `), pulseKeyframe), ({
  ownerState,
  theme
}) => ownerState.animation === "wave" && css(_t4 || (_t4 = _`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), waveKeyframe, (theme.vars || theme).palette.action.hover));
const Skeleton = /* @__PURE__ */ reactExports.forwardRef(function Skeleton2(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: "MuiSkeleton"
  });
  const {
    animation = "pulse",
    className,
    component = "span",
    height,
    style: style2,
    variant = "text",
    width
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded);
  const ownerState = _extends$1({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsx(SkeletonRoot, _extends$1({
    as: component,
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    style: _extends$1({
      width,
      height
    }, style2)
  }));
});
const Skeleton$1 = Skeleton;
const Stack = createStack({
  createStyledComponent: styled("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  }),
  useThemeProps: (inProps) => useThemeProps$1({
    props: inProps,
    name: "MuiStack"
  })
});
const Stack$1 = Stack;
const Farm = () => /* @__PURE__ */ jsxs(SvgIcon, { color: "inherit", children: [
  /* @__PURE__ */ jsx("path", { fill: "none", d: "M0,0h24v24H0V0z" }),
  /* @__PURE__ */ jsx("path", { d: "M12,2.3c-0.1,0-0.2,0-0.3,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0h0l0,0c0,0,0,0-0.1,0l0,0L4.8,4.9C4.5,5,4.3,5.1,4.2,5.4l0,0l-3.4,6c-0.1,0.1-0.1,0.3-0.1,0.4v0c0,0.5,0.4,0.9,0.9,0.9l0,0h0.9v8.7h3.5c0,0,0,0,0,0c0.2,0,0.3-0.1,0.5-0.1l0,0l5.6-3.6l5.6,3.6c0.1,0.1,0.3,0.1,0.5,0.1c0,0,0,0,0,0h0c0,0,0,0,0,0c0,0,0,0,0,0h3.5v-8.7h0.9c0.5,0,0.9-0.4,0.9-0.9l0,0c0-0.2,0-0.3-0.1-0.4l0,0c0,0,0,0,0-0.1l0,0l-3.4-5.9c-0.1-0.2-0.3-0.4-0.6-0.5l0,0l-6.9-2.6c0,0,0,0-0.1,0l0,0C12.2,2.3,12.1,2.3,12,2.3L12,2.3L12,2.3z M10.3,6.6h3.5v2.6h-3.5L10.3,6.6L10.3,6.6z M7.5,12.7h9L12,15.5L7.5,12.7L7.5,12.7z M5.9,13.7l4.5,2.9l-4.5,2.9L5.9,13.7L5.9,13.7z M18.1,13.7v5.7l-4.5-2.9L18.1,13.7z" })
] });
const CosvaFarm = (props) => /* @__PURE__ */ jsx(SvgIcon, { color: "inherit", fontSize: "inherit", ...props, children: /* @__PURE__ */ jsx("path", { d: "M20.7 17.3a11.67 11.67 0 0 0-8.2 3.4c-.1.1-.1.4 0 .5s.2.1.3.1.2 0 .3-.1c2-2 4.8-3.2 7.7-3.2.2 0 .4-.2.4-.4-.1-.1-.3-.3-.5-.3zm-7.6-.4c-.1-.2-.3-.2-.5-.1-1.6 1.1-2.9 2.4-3.9 3.9-.1.2-.1.4.1.5.1 0 .1.1.2.1s.2-.1.3-.2a13.04 13.04 0 0 1 3.7-3.7c.2-.1.2-.3.1-.5zm7.6-2.5c-1.6 0-3.2.3-4.8.8-.2.1-.3.3-.2.5.1.1.2.2.3.2h.1c1.5-.5 3-.8 4.6-.8.2 0 .4-.2.4-.4s-.2-.3-.4-.3zM7.6 18.8c2.4-3.1 5.9-5.3 9.7-6.1 1.1-.2 2.2-.4 3.4-.4.2 0 .4-.2.4-.4s-.2-.4-.4-.4a16.28 16.28 0 0 0-3.1.3V11c1.3-1.1 2-2.6 2-4.1 0-1.6-.8-3.1-2.2-4.2-.1-.1-.3-.1-.5 0-1.4 1.1-2.2 2.6-2.2 4.2s.7 3 2 4.1v.9l-2 .6v-2.1c0-.1 0-.2-.1-.3l-2-2.1c-.1-.1-.2-.1-.3-.1h-4c-.1 0-.2 0-.3.1l-2 2.1c-.1.1-.1.2-.1.3v1.4c-.3 0-.5-.1-.8-.1v-1.3c1-.9 1.5-2 1.5-3.2C6.6 6.1 6 4.9 5 4.1c-.1-.1-.3-.1-.5 0-1.1.9-1.7 2-1.7 3.3 0 1.2.5 2.3 1.5 3.2v1.2c-.5 0-1.1-.1-1.6-.1-.2 0-.4.2-.4.4s.2.4.4.4c2.9 0 5.8.8 8.3 2.2-.6.4-1.2.9-1.7 1.3-2-1-4.3-1.6-6.6-1.6-.2 0-.4.2-.4.4s.2.4.4.4c2.1 0 4.1.5 6 1.4-.6.5-1.1 1.1-1.6 1.7-1.4-.6-2.9-.9-4.4-.9-.2 0-.4.2-.4.4s.2.4.4.4c1.4 0 2.7.3 4 .8-.3.4-.5.7-.7 1.1l-.6.9c-.1.2-.1.4.1.5.1 0 .1.1.2.1s.2-.1.3-.2l.6-.9c.3-.7.6-1.2 1-1.7 0 .1 0 .1 0 0zm8-11.8c0-1.3.6-2.5 1.7-3.5C18.4 4.5 19 5.7 19 7c0 1.1-.5 2.2-1.3 3.1V7.3c0-.2-.2-.4-.4-.4s-.4.2-.4.4v2.8c-.9-.9-1.3-2-1.3-3.1zm-12.1.3c0-.9.4-1.8 1.2-2.5.8.7 1.2 1.6 1.2 2.5 0 .8-.3 1.5-.8 2.1V7c0-.2-.2-.4-.4-.4-.2.1-.3.2-.3.4v2.4c-.6-.6-.9-1.3-.9-2.1zm10.1 2.9h-3.1L9.1 8.8h3.1l1.4 1.4zM8.3 9l1.2 1.2H7.1L8.3 9zm-1.7 1.9H10v2.3c-.2-.1-.3-.2-.5-.2v-1.2c0-.2-.2-.4-.4-.4H7.5c-.2 0-.4.2-.4.4v.4c-.2 0-.3-.1-.5-.1v-1.2zm2.1 1.8l-.9-.3v-.3h.9v.6zm2 .9v-2.7h3.4V13l-2.4 1.2c-.3-.2-.7-.4-1-.6zm6.5-7.3c.1 0 .2 0 .3-.1s.1-.2.1-.3 0-.2-.1-.3-.2-.1-.3-.1-.2 0-.3.1-.1.2-.1.3 0 .2.1.3c.2.1.3.1.3.1zM14.1 16c-.1.1-.1.1-.1.2s0 .2.1.3.2.1.3.1.2 0 .3-.1.1-.2.1-.3 0-.2-.1-.3-.2-.1-.3-.1c-.2.1-.2.1-.3.2z" }) });
var SourceImageSizes = /* @__PURE__ */ ((SourceImageSizes2) => {
  SourceImageSizes2["full"] = "full";
  SourceImageSizes2["thumbnail"] = "thumbnail";
  return SourceImageSizes2;
})(SourceImageSizes || {});
function genericNavItemProps(arg) {
  return arg;
}
const getUrlImage = (image) => typeof image === "string" ? image : image.file;
const isOptimisticImage = (image) => typeof image !== "string" && isOptimistic(image.id);
const getSourceImages = (param, options) => {
  const {
    sourceImages,
    size: size2
  } = {
    ...options
  };
  const source = sourceImages && (typeof sourceImages === "function" ? sourceImages : size2 && sourceImages[size2] || sourceImages.thumbnail || sourceImages.full);
  return source && source(param) || `${param}`;
};
const ImageStepper = ({
  sourceImages,
  image,
  imgProps,
  sx
}) => {
  const url = getUrlImage(image);
  return /* @__PURE__ */ jsx(Box, { className: styles$3.imgParent, sx, children: /* @__PURE__ */ jsx(Box, { ...imgProps, component: "img", className: clsx(styles$3.img, imgProps && imgProps.className), src: isOptimisticImage(image) ? url : getSourceImages(url, {
    sourceImages,
    size: SourceImageSizes.thumbnail
  }), alt: typeof image !== "string" && image.label || url, width: 1 }) });
};
const imageSizeSx = {
  width: "60px",
  height: "60px"
};
const avatarSx = {
  color: "common.white",
  fontSize: "h2.fontSize"
};
const TitleSubPage = (props) => {
  return /* @__PURE__ */ jsx(Typography, { variant: "h5", children: /* @__PURE__ */ jsxs(Grid, { container: true, alignItems: "center", spacing: 2, children: [
    /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(Avatar, { color: "action", sx: [imageSizeSx, avatarSx], children: props.image && /* @__PURE__ */ jsx(ImageStepper, { sx: imageSizeSx, image: {
      file: createAPIImageRoute(`static/${props.image}`, {
        width: 100
      })
    } }) }) }),
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: true, children: [
      props.title,
      /* @__PURE__ */ jsx(Divider, {})
    ] })
  ] }) });
};
const FARM_CREATED = FarmCreatedDocument;
const FARM_DELETED = FarmDeletedDocument;
const FARM_USER_CREATED = FarmUserCreatedDocument;
const FARM_USER_DELETED = FarmUserDeletedDocument;
const subscribeToMoreMessage = (subscribeToMore) => subscribeToMore({
  document: FARM_CREATED,
  updateQuery: (previousResult, {
    subscriptionData
  }) => {
    return produce(previousResult, (draft) => {
      if (!subscriptionData.data) {
        return;
      }
      const {
        farmCreated
      } = subscriptionData.data;
      draft.farms.edges.unshift(farmCreated.farm);
    });
  }
});
const subscribeToDeletedMessage = (subscribeToMore) => subscribeToMore({
  document: FARM_DELETED,
  updateQuery: (previousResult, {
    subscriptionData
  }) => {
    return produce(previousResult, (draft) => {
      if (!subscriptionData.data) {
        return;
      }
      const {
        farmDeleted
      } = subscriptionData.data;
      const edges = draft.farms.edges;
      const index2 = edges.findIndex(({
        id
      }) => String(farmDeleted.id) === String(id));
      if (index2 !== -1) {
        edges.splice(index2, 1);
      }
    });
  }
});
const subscribeToFarmUserCreated = (subscribeToMore) => subscribeToMore({
  document: FARM_USER_CREATED,
  updateQuery: (previousResult, {
    subscriptionData
  }) => produce(previousResult, (draft) => {
    if (!subscriptionData.data) {
      return;
    }
    const {
      farm
    } = subscriptionData.data.farmUserCreated;
    draft.farms.edges.unshift(farm);
  })
});
const subscribeToDeleteFarmUser = (subscribeToMore) => subscribeToMore({
  document: FARM_USER_DELETED,
  updateQuery: (previousResult, {
    subscriptionData
  }) => produce(previousResult, (draft) => {
    if (!subscriptionData.data) {
      return;
    }
    const {
      farmId
    } = subscriptionData.data.farmUserDeleted;
    const edges = draft.farms.edges;
    const index2 = edges.findIndex(({
      id
    }) => String(farmId) === String(id));
    if (index2 !== -1) {
      edges.splice(index2, 1);
    }
  })
});
const CREATE_FARM = CreateFarmDocument;
const EDIT_FARM = EditFarmDocument;
const DELETE_FARM_PHOTO = DeleteFarmPhotoDocument;
const ORDER_FARM_PHOTO = OrderFarmPhotoDocument;
const CREATE_FARM_PHOTO = CreateFarmPhotosDocument;
const DELETE_FARM = DeleteFarmDocument;
const CREATE_FARM_USER = CreateFarmUserDocument;
const DELETE_FARM_USER = DeleteFarmUserDocument;
const createFarm = (proxy, newData) => {
  let success = false;
  function writeFarm(query) {
    let data = proxy.readQuery({
      query
    });
    const {
      createFarm: farm
    } = {
      ...newData.data
    };
    if (data && farm) {
      data = produce(data, (draft) => {
        draft.farms.edges.unshift(farm);
      });
      proxy.writeQuery({
        query,
        data
      });
    }
    success = true;
  }
  try {
    !success && writeFarm(FARMS_QUERY);
  } catch (e) {
  }
  try {
    !success && writeFarm(FARMS_NAV);
  } catch (e) {
  }
};
const createFarmPhotosUpdate = (farmId) => (proxy, newData) => {
  const farmPhotos = newData.data && newData.data.createFarmPhotos || [];
  let data = proxy.readQuery({
    query: FARM$1,
    variables: {
      id: farmId
    }
  });
  if (data) {
    data = produce(data, (draf) => {
      var _a2, _b;
      const images = ((_a2 = draf.farm) == null ? void 0 : _a2.images) || [];
      if ((_b = draf.farm) == null ? void 0 : _b.images)
        draf.farm.images = [...images, ...farmPhotos];
    });
    proxy.writeQuery({
      query: FARM$1,
      data,
      variables: {
        id: farmId
      }
    });
  }
};
const deleteFarmPhotoUpdate = ({
  farmId,
  farmPhoto
}) => (proxy) => {
  try {
    let data = proxy.readQuery({
      query: FARM$1,
      variables: {
        id: farmId
      }
    });
    if (data) {
      data = produce(data, (draft) => {
        const {
          farm
        } = draft;
        const images = (farm == null ? void 0 : farm.images) || [];
        if (farm)
          farm.images = images.filter(({
            id
          }) => id !== farmPhoto);
      });
      proxy.writeQuery({
        query: FARM$1,
        data,
        variables: {
          id: farmId
        }
      });
    }
  } catch {
  }
};
const sortFarmPhoto = ({
  farmId,
  sort: {
    oldIndex,
    newIndex
  }
}) => (proxy, res) => {
  var _a2;
  if ((_a2 = res.data) == null ? void 0 : _a2.orderFarmPhoto) {
    let data = proxy.readQuery({
      query: FARM$1,
      variables: {
        id: farmId
      }
    });
    if (data) {
      data = produce(data, ({
        farm
      }) => {
        const images = orderImages(farm == null ? void 0 : farm.images);
        if (images && farm) {
          farm.images = arrayMoveImmutable(images, oldIndex, newIndex).map((image, index2) => ({
            ...image,
            position: index2
          }));
        }
      });
      try {
        proxy.writeQuery({
          query: FARM$1,
          data,
          variables: {
            id: farmId
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
const initDataPaging = {
  edges: [],
  pageInfo: {
    hasNextPage: false,
    count: 0,
    pages: 0,
    __typename: "PageInfo"
  }
};
const farmCategoriesInit = {
  ...initDataPaging,
  __typename: "FarmCategoryConnection"
};
const FARM_CATEGORIES = GetFarmCategoriesDocument;
const MESSAGES = GetMessagesDocument;
const MESSAGE_DELETED = MessageDeletedDocument;
const MESSAGE_CREATED = MessageCreatedDocument;
const CATEGORY_BY_CODE = GetCategoryByCodeDocument;
const DialogLoginComponent = (props) => {
  const {
    onClose,
    onLogin,
    open,
    formLoginProps
  } = props;
  const [openSnackbar, setOpenSnackbar] = React.useState(true);
  if (!open)
    return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Snackbar, { anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    }, open: openSnackbar, autoHideDuration: 6e3, onClose: () => setOpenSnackbar(false), children: /* @__PURE__ */ jsx(SnackBarVariant, { onClose: () => setOpenSnackbar(false), variant: Variants.error, message: "You need to authenticate!" }) }),
    /* @__PURE__ */ jsx(DialogSimple, { open, onClose: () => {
      onClose && onClose();
    }, showTitle: (breakpoint) => {
      return breakpoint === "xs";
    }, fullContent: false, breakpoint: "xs", "aria-labelledby": "form-dialog-title", title: {
      message: "title",
      ns: "login"
    }, dialogProps: {
      style: {
        zIndex: 1301
      }
    }, children: /* @__PURE__ */ jsx(Box, { paddingY: "1em", display: "flex", height: "100%", width: "100%", justifyContent: "center", flexDirection: "column", children: /* @__PURE__ */ jsx(FormLogin, { onLogin, ...formLoginProps }) }) })
  ] });
};
const DialogLogin = DialogLoginComponent;
var Message = {};
var _interopRequireDefault$a = interopRequireDefaultExports;
Object.defineProperty(Message, "__esModule", {
  value: true
});
var default_1$9 = Message.default = void 0;
var _createSvgIcon$9 = _interopRequireDefault$a(requireCreateSvgIcon());
var _jsxRuntime$9 = require$$2;
var _default$9 = (0, _createSvgIcon$9.default)(/* @__PURE__ */ (0, _jsxRuntime$9.jsx)("path", {
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
}), "Message");
default_1$9 = Message.default = _default$9;
const CREATE_MESSAGE = gql`
  mutation ($text: String!) {
    createMessage(text: $text) {
      id
      text
      user {
        id
        firstName
        lastName
      }
    }
  }
`;
const MessageCreate = () => {
  const [state, setState] = React.useState({
    text: ""
  });
  const {
    text
  } = state;
  const [createMessage] = useMutation(CREATE_MESSAGE, {
    variables: {
      text
    }
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await createMessage();
      setState({
        text: ""
      });
    } catch (error) {
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: (event) => onSubmit(event), children: [
    /* @__PURE__ */ jsx("textarea", { name: "text", value: text, onChange: ({
      target: {
        value: value2
      }
    }) => setState({
      text: value2
    }), placeholder: "Your message ..." }),
    /* @__PURE__ */ jsx("button", { type: "submit", children: "Send" })
  ] });
};
const DELETE_MESSAGE = gql`
  mutation ($id: Int!) {
    deleteMessage(id: $id)
  }
`;
const MessageDelete = (props) => {
  const {
    message
  } = props;
  const [deleteMessage] = useMutation(DELETE_MESSAGE, {
    variables: {
      id: message.id
    }
  });
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => deleteMessage(), children: "Delete" });
};
class MessageItemBase extends React.PureComponent {
  render() {
    const {
      message,
      session
    } = this.props;
    const {
      firstName,
      lastName
    } = message.user;
    const fullName = `${firstName} ${lastName}`;
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { children: fullName }),
      /* @__PURE__ */ jsx("p", { children: message.text }),
      session && session.me && message.user.id === session.me.id && /* @__PURE__ */ jsx(MessageDelete, { message })
    ] });
  }
}
const MessageItem = withSession(MessageItemBase);
class MessageList extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.subscribeToMoreMessage = () => {
      this.props.subscribeToMore({
        document: MESSAGE_CREATED,
        updateQuery: (previousResult, {
          subscriptionData
        }) => {
          if (!subscriptionData.data) {
            return previousResult;
          }
          const {
            messageCreated
          } = subscriptionData.data;
          return {
            ...previousResult,
            messages: {
              ...previousResult.messages,
              edges: [messageCreated.message, ...previousResult.messages.edges]
            }
          };
        }
      });
    };
    this.subscribeToDeletedMessage = () => {
      this.props.subscribeToMore({
        document: MESSAGE_DELETED,
        updateQuery: (previousResult, {
          subscriptionData
        }) => {
          if (!subscriptionData.data) {
            return previousResult;
          }
          const {
            messageDeleted
          } = subscriptionData.data;
          const {
            messages
          } = previousResult;
          const {
            edges
          } = messages;
          const index2 = edges.map((obj) => obj.id).indexOf(messageDeleted.id);
          if (index2 !== -1) {
            edges.splice(index2, 1);
          }
          return {
            ...previousResult,
            messages: {
              ...messages,
              edges: [...edges]
            }
          };
        }
      });
    };
  }
  componentDidMount() {
    this.subscribeToMoreMessage();
    this.subscribeToDeletedMessage();
  }
  render() {
    const {
      messages
    } = this.props;
    return messages.map((message) => /* @__PURE__ */ jsx(MessageItem, { message }, message.id));
  }
}
MessageList.propTypes = {
  subscribeToMore: K.func.isRequired,
  messages: K.array.isRequired
};
const Messages = (props) => {
  const pagination = React.useRef({
    limit: props.limit,
    page: 0
  });
  const result = useQuery(MESSAGES, {
    variables: {
      pagination: {
        limit: props.limit,
        page: 0
      }
    }
  });
  const {
    data,
    loading,
    fetchMore,
    subscribeToMore
  } = result;
  if (!data) {
    return /* @__PURE__ */ jsx("div", { children: "There are no messages yet ... Try to create one by yourself." });
  }
  const {
    messages
  } = data;
  if (loading && !messages.edges.length) {
    return /* @__PURE__ */ jsx(Loading$1, {});
  }
  const {
    edges,
    pageInfo
  } = messages;
  return /* @__PURE__ */ jsxs(reactExports.Fragment, { children: [
    /* @__PURE__ */ jsx(MessageList, { messages: edges, subscribeToMore }),
    pageInfo.hasNextPage && /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
      pagination.current.page++;
      fetchMore({
        variables: {
          pagination: {
            ...pagination.current
          }
        },
        updateQuery: (previousResult, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return {
            messages: {
              ...fetchMoreResult.messages,
              edges: [...previousResult.messages.edges, ...fetchMoreResult.messages.edges]
            }
          };
        }
      });
    }, children: "More" })
  ] });
};
const Landing = ({
  session
}) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
  /* @__PURE__ */ jsx(CssBaseline, {}),
  /* @__PURE__ */ jsx("h2", { children: "Landing Page" }),
  session && session.me && /* @__PURE__ */ jsx(MessageCreate, {}),
  /* @__PURE__ */ jsx(Messages, { limit: 2 })
] });
const Landing$1 = withSession(Landing);
var GroupWork = {};
var _interopRequireDefault$9 = interopRequireDefaultExports;
Object.defineProperty(GroupWork, "__esModule", {
  value: true
});
var default_1$8 = GroupWork.default = void 0;
var _createSvgIcon$8 = _interopRequireDefault$9(requireCreateSvgIcon());
var _jsxRuntime$8 = require$$2;
var _default$8 = (0, _createSvgIcon$8.default)(/* @__PURE__ */ (0, _jsxRuntime$8.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
}), "GroupWork");
default_1$8 = GroupWork.default = _default$8;
var KeyboardArrowLeft = {};
var _interopRequireDefault$8 = interopRequireDefaultExports;
Object.defineProperty(KeyboardArrowLeft, "__esModule", {
  value: true
});
var default_1$7 = KeyboardArrowLeft.default = void 0;
var _createSvgIcon$7 = _interopRequireDefault$8(requireCreateSvgIcon());
var _jsxRuntime$7 = require$$2;
var _default$7 = (0, _createSvgIcon$7.default)(/* @__PURE__ */ (0, _jsxRuntime$7.jsx)("path", {
  d: "M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "KeyboardArrowLeft");
default_1$7 = KeyboardArrowLeft.default = _default$7;
var KeyboardArrowRight = {};
var _interopRequireDefault$7 = interopRequireDefaultExports;
Object.defineProperty(KeyboardArrowRight, "__esModule", {
  value: true
});
var default_1$6 = KeyboardArrowRight.default = void 0;
var _createSvgIcon$6 = _interopRequireDefault$7(requireCreateSvgIcon());
var _jsxRuntime$6 = require$$2;
var _default$6 = (0, _createSvgIcon$6.default)(/* @__PURE__ */ (0, _jsxRuntime$6.jsx)("path", {
  d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "KeyboardArrowRight");
default_1$6 = KeyboardArrowRight.default = _default$6;
var lib$2 = {};
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
var interopRequireWildcard$1 = _interopRequireWildcard;
var SwipeableViews$1 = {};
var interopRequireDefault$2;
var hasRequiredInteropRequireDefault$1;
function requireInteropRequireDefault$1() {
  if (hasRequiredInteropRequireDefault$1)
    return interopRequireDefault$2;
  hasRequiredInteropRequireDefault$1 = 1;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  interopRequireDefault$2 = _interopRequireDefault2;
  return interopRequireDefault$2;
}
var _extends_1$1;
var hasRequired_extends$1;
function require_extends$1() {
  if (hasRequired_extends$1)
    return _extends_1$1;
  hasRequired_extends$1 = 1;
  function _extends2() {
    _extends_1$1 = _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  _extends_1$1 = _extends2;
  return _extends_1$1;
}
var objectWithoutPropertiesLoose$1;
var hasRequiredObjectWithoutPropertiesLoose$1;
function requireObjectWithoutPropertiesLoose$1() {
  if (hasRequiredObjectWithoutPropertiesLoose$1)
    return objectWithoutPropertiesLoose$1;
  hasRequiredObjectWithoutPropertiesLoose$1 = 1;
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  objectWithoutPropertiesLoose$1 = _objectWithoutPropertiesLoose2;
  return objectWithoutPropertiesLoose$1;
}
var objectWithoutProperties$1;
var hasRequiredObjectWithoutProperties$1;
function requireObjectWithoutProperties$1() {
  if (hasRequiredObjectWithoutProperties$1)
    return objectWithoutProperties$1;
  hasRequiredObjectWithoutProperties$1 = 1;
  var objectWithoutPropertiesLoose2 = requireObjectWithoutPropertiesLoose$1();
  function _objectWithoutProperties2(source, excluded) {
    if (source == null)
      return {};
    var target = objectWithoutPropertiesLoose2(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  objectWithoutProperties$1 = _objectWithoutProperties2;
  return objectWithoutProperties$1;
}
var classCallCheck$1;
var hasRequiredClassCallCheck$1;
function requireClassCallCheck$1() {
  if (hasRequiredClassCallCheck$1)
    return classCallCheck$1;
  hasRequiredClassCallCheck$1 = 1;
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  classCallCheck$1 = _classCallCheck2;
  return classCallCheck$1;
}
var createClass$1;
var hasRequiredCreateClass$1;
function requireCreateClass$1() {
  if (hasRequiredCreateClass$1)
    return createClass$1;
  hasRequiredCreateClass$1 = 1;
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  createClass$1 = _createClass2;
  return createClass$1;
}
var _typeof_1$1;
var hasRequired_typeof$2;
function require_typeof$2() {
  if (hasRequired_typeof$2)
    return _typeof_1$1;
  hasRequired_typeof$2 = 1;
  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof22(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof22(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function _typeof3(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof_1$1 = _typeof3 = function _typeof4(obj2) {
        return _typeof2(obj2);
      };
    } else {
      _typeof_1$1 = _typeof3 = function _typeof4(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : _typeof2(obj2);
      };
    }
    return _typeof3(obj);
  }
  _typeof_1$1 = _typeof3;
  return _typeof_1$1;
}
var assertThisInitialized$2;
var hasRequiredAssertThisInitialized$2;
function requireAssertThisInitialized$2() {
  if (hasRequiredAssertThisInitialized$2)
    return assertThisInitialized$2;
  hasRequiredAssertThisInitialized$2 = 1;
  function _assertThisInitialized2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  assertThisInitialized$2 = _assertThisInitialized2;
  return assertThisInitialized$2;
}
var possibleConstructorReturn$2;
var hasRequiredPossibleConstructorReturn$2;
function requirePossibleConstructorReturn$2() {
  if (hasRequiredPossibleConstructorReturn$2)
    return possibleConstructorReturn$2;
  hasRequiredPossibleConstructorReturn$2 = 1;
  var _typeof2 = require_typeof$2();
  var assertThisInitialized2 = requireAssertThisInitialized$2();
  function _possibleConstructorReturn2(self, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized2(self);
  }
  possibleConstructorReturn$2 = _possibleConstructorReturn2;
  return possibleConstructorReturn$2;
}
var getPrototypeOf$2;
var hasRequiredGetPrototypeOf$2;
function requireGetPrototypeOf$2() {
  if (hasRequiredGetPrototypeOf$2)
    return getPrototypeOf$2;
  hasRequiredGetPrototypeOf$2 = 1;
  function _getPrototypeOf2(o) {
    getPrototypeOf$2 = _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  getPrototypeOf$2 = _getPrototypeOf2;
  return getPrototypeOf$2;
}
var setPrototypeOf$2;
var hasRequiredSetPrototypeOf$2;
function requireSetPrototypeOf$2() {
  if (hasRequiredSetPrototypeOf$2)
    return setPrototypeOf$2;
  hasRequiredSetPrototypeOf$2 = 1;
  function _setPrototypeOf(o, p) {
    setPrototypeOf$2 = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  setPrototypeOf$2 = _setPrototypeOf;
  return setPrototypeOf$2;
}
var inherits$2;
var hasRequiredInherits$2;
function requireInherits$2() {
  if (hasRequiredInherits$2)
    return inherits$2;
  hasRequiredInherits$2 = 1;
  var setPrototypeOf2 = requireSetPrototypeOf$2();
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      setPrototypeOf2(subClass, superClass);
  }
  inherits$2 = _inherits2;
  return inherits$2;
}
var warning_1;
var hasRequiredWarning;
function requireWarning() {
  if (hasRequiredWarning)
    return warning_1;
  hasRequiredWarning = 1;
  var warning = function() {
  };
  warning_1 = warning;
  return warning_1;
}
var lib$1 = {};
var interopRequireDefault$1;
var hasRequiredInteropRequireDefault;
function requireInteropRequireDefault() {
  if (hasRequiredInteropRequireDefault)
    return interopRequireDefault$1;
  hasRequiredInteropRequireDefault = 1;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  interopRequireDefault$1 = _interopRequireDefault2;
  return interopRequireDefault$1;
}
var checkIndexBounds = {};
var hasRequiredCheckIndexBounds;
function requireCheckIndexBounds() {
  if (hasRequiredCheckIndexBounds)
    return checkIndexBounds;
  hasRequiredCheckIndexBounds = 1;
  var _interopRequireDefault2 = requireInteropRequireDefault();
  Object.defineProperty(checkIndexBounds, "__esModule", {
    value: true
  });
  checkIndexBounds.default = void 0;
  var _react = _interopRequireDefault2(reactExports);
  _interopRequireDefault2(requireWarning());
  var checkIndexBounds$1 = function checkIndexBounds2(props) {
    props.index;
    var children = props.children;
    _react.default.Children.count(children);
  };
  var _default2 = checkIndexBounds$1;
  checkIndexBounds.default = _default2;
  return checkIndexBounds;
}
var computeIndex = {};
var constant = {};
var hasRequiredConstant;
function requireConstant() {
  if (hasRequiredConstant)
    return constant;
  hasRequiredConstant = 1;
  Object.defineProperty(constant, "__esModule", {
    value: true
  });
  constant.default = void 0;
  var _default2 = {
    RESISTANCE_COEF: 0.6,
    // This value is closed to what browsers are using internally to
    // trigger a native scroll.
    UNCERTAINTY_THRESHOLD: 3
    // px
  };
  constant.default = _default2;
  return constant;
}
var hasRequiredComputeIndex;
function requireComputeIndex() {
  if (hasRequiredComputeIndex)
    return computeIndex;
  hasRequiredComputeIndex = 1;
  var _interopRequireDefault2 = requireInteropRequireDefault();
  Object.defineProperty(computeIndex, "__esModule", {
    value: true
  });
  computeIndex.default = computeIndex$1;
  var _react = _interopRequireDefault2(reactExports);
  var _constant = _interopRequireDefault2(requireConstant());
  function computeIndex$1(params) {
    var children = params.children, startIndex = params.startIndex, startX = params.startX, pageX = params.pageX, viewLength = params.viewLength, resistance = params.resistance;
    var indexMax = _react.default.Children.count(children) - 1;
    var index2 = startIndex + (startX - pageX) / viewLength;
    var newStartX;
    if (!resistance) {
      if (index2 < 0) {
        index2 = 0;
        newStartX = (index2 - startIndex) * viewLength + pageX;
      } else if (index2 > indexMax) {
        index2 = indexMax;
        newStartX = (index2 - startIndex) * viewLength + pageX;
      }
    } else if (index2 < 0) {
      index2 = Math.exp(index2 * _constant.default.RESISTANCE_COEF) - 1;
    } else if (index2 > indexMax) {
      index2 = indexMax + 1 - Math.exp((indexMax - index2) * _constant.default.RESISTANCE_COEF);
    }
    return {
      index: index2,
      startX: newStartX
    };
  }
  return computeIndex;
}
var getDisplaySameSlide = {};
var hasRequiredGetDisplaySameSlide;
function requireGetDisplaySameSlide() {
  if (hasRequiredGetDisplaySameSlide)
    return getDisplaySameSlide;
  hasRequiredGetDisplaySameSlide = 1;
  var _interopRequireDefault2 = requireInteropRequireDefault();
  Object.defineProperty(getDisplaySameSlide, "__esModule", {
    value: true
  });
  getDisplaySameSlide.default = void 0;
  var _react = _interopRequireDefault2(reactExports);
  var getDisplaySameSlide$1 = function getDisplaySameSlide2(props, nextProps) {
    var displaySameSlide = false;
    var getChildrenKey = function getChildrenKey2(child) {
      return child ? child.key : "empty";
    };
    if (props.children.length && nextProps.children.length) {
      var oldKeys = _react.default.Children.map(props.children, getChildrenKey);
      var oldKey = oldKeys[props.index];
      if (oldKey !== null && oldKey !== void 0) {
        var newKeys = _react.default.Children.map(nextProps.children, getChildrenKey);
        var newKey = newKeys[nextProps.index];
        if (oldKey === newKey) {
          displaySameSlide = true;
        }
      }
    }
    return displaySameSlide;
  };
  var _default2 = getDisplaySameSlide$1;
  getDisplaySameSlide.default = _default2;
  return getDisplaySameSlide;
}
var mod = {};
var hasRequiredMod;
function requireMod() {
  if (hasRequiredMod)
    return mod;
  hasRequiredMod = 1;
  Object.defineProperty(mod, "__esModule", {
    value: true
  });
  mod.default = void 0;
  function mod$1(n, m) {
    var q = n % m;
    return q < 0 ? q + m : q;
  }
  var _default2 = mod$1;
  mod.default = _default2;
  return mod;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib)
    return lib$1;
  hasRequiredLib = 1;
  (function(exports) {
    var _interopRequireDefault2 = requireInteropRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "checkIndexBounds", {
      enumerable: true,
      get: function get() {
        return _checkIndexBounds.default;
      }
    });
    Object.defineProperty(exports, "computeIndex", {
      enumerable: true,
      get: function get() {
        return _computeIndex.default;
      }
    });
    Object.defineProperty(exports, "constant", {
      enumerable: true,
      get: function get() {
        return _constant.default;
      }
    });
    Object.defineProperty(exports, "getDisplaySameSlide", {
      enumerable: true,
      get: function get() {
        return _getDisplaySameSlide.default;
      }
    });
    Object.defineProperty(exports, "mod", {
      enumerable: true,
      get: function get() {
        return _mod.default;
      }
    });
    var _checkIndexBounds = _interopRequireDefault2(requireCheckIndexBounds());
    var _computeIndex = _interopRequireDefault2(requireComputeIndex());
    var _constant = _interopRequireDefault2(requireConstant());
    var _getDisplaySameSlide = _interopRequireDefault2(requireGetDisplaySameSlide());
    var _mod = _interopRequireDefault2(requireMod());
  })(lib$1);
  return lib$1;
}
var hasRequiredSwipeableViews;
function requireSwipeableViews() {
  if (hasRequiredSwipeableViews)
    return SwipeableViews$1;
  hasRequiredSwipeableViews = 1;
  var _interopRequireWildcard2 = interopRequireWildcard$1;
  var _interopRequireDefault2 = requireInteropRequireDefault$1();
  Object.defineProperty(SwipeableViews$1, "__esModule", {
    value: true
  });
  SwipeableViews$1.getDomTreeShapes = getDomTreeShapes;
  SwipeableViews$1.findNativeHandler = findNativeHandler;
  SwipeableViews$1.default = SwipeableViews$1.SwipeableViewsContext = void 0;
  var _extends2 = _interopRequireDefault2(require_extends$1());
  var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties$1());
  var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck$1());
  var _createClass2 = _interopRequireDefault2(requireCreateClass$1());
  var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn$2());
  var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf$2());
  var _inherits2 = _interopRequireDefault2(requireInherits$2());
  var React2 = _interopRequireWildcard2(reactExports);
  _interopRequireDefault2(propTypesExports);
  _interopRequireDefault2(requireWarning());
  var _reactSwipeableViewsCore = requireLib();
  function addEventListener(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return {
      remove: function remove() {
        node.removeEventListener(event, handler, options);
      }
    };
  }
  var styles2 = {
    container: {
      direction: "ltr",
      display: "flex",
      willChange: "transform"
    },
    slide: {
      width: "100%",
      WebkitFlexShrink: 0,
      flexShrink: 0,
      overflow: "auto"
    }
  };
  var axisProperties = {
    root: {
      x: {
        overflowX: "hidden"
      },
      "x-reverse": {
        overflowX: "hidden"
      },
      y: {
        overflowY: "hidden"
      },
      "y-reverse": {
        overflowY: "hidden"
      }
    },
    flexDirection: {
      x: "row",
      "x-reverse": "row-reverse",
      y: "column",
      "y-reverse": "column-reverse"
    },
    transform: {
      x: function x(translate) {
        return "translate(".concat(-translate, "%, 0)");
      },
      "x-reverse": function xReverse(translate) {
        return "translate(".concat(translate, "%, 0)");
      },
      y: function y(translate) {
        return "translate(0, ".concat(-translate, "%)");
      },
      "y-reverse": function yReverse(translate) {
        return "translate(0, ".concat(translate, "%)");
      }
    },
    length: {
      x: "width",
      "x-reverse": "width",
      y: "height",
      "y-reverse": "height"
    },
    rotationMatrix: {
      x: {
        x: [1, 0],
        y: [0, 1]
      },
      "x-reverse": {
        x: [-1, 0],
        y: [0, 1]
      },
      y: {
        x: [0, 1],
        y: [1, 0]
      },
      "y-reverse": {
        x: [0, -1],
        y: [1, 0]
      }
    },
    scrollPosition: {
      x: "scrollLeft",
      "x-reverse": "scrollLeft",
      y: "scrollTop",
      "y-reverse": "scrollTop"
    },
    scrollLength: {
      x: "scrollWidth",
      "x-reverse": "scrollWidth",
      y: "scrollHeight",
      "y-reverse": "scrollHeight"
    },
    clientLength: {
      x: "clientWidth",
      "x-reverse": "clientWidth",
      y: "clientHeight",
      "y-reverse": "clientHeight"
    }
  };
  function createTransition(property, options) {
    var duration = options.duration, easeFunction = options.easeFunction, delay = options.delay;
    return "".concat(property, " ").concat(duration, " ").concat(easeFunction, " ").concat(delay);
  }
  function applyRotationMatrix(touch, axis) {
    var rotationMatrix = axisProperties.rotationMatrix[axis];
    return {
      pageX: rotationMatrix.x[0] * touch.pageX + rotationMatrix.x[1] * touch.pageY,
      pageY: rotationMatrix.y[0] * touch.pageX + rotationMatrix.y[1] * touch.pageY
    };
  }
  function adaptMouse(event) {
    event.touches = [{
      pageX: event.pageX,
      pageY: event.pageY
    }];
    return event;
  }
  function getDomTreeShapes(element, rootNode) {
    var domTreeShapes = [];
    while (element && element !== rootNode && element !== document.body) {
      if (element.hasAttribute("data-swipeable")) {
        break;
      }
      var style2 = window.getComputedStyle(element);
      if (
        // Ignore the scroll children if the element is absolute positioned.
        style2.getPropertyValue("position") === "absolute" || // Ignore the scroll children if the element has an overflowX hidden
        style2.getPropertyValue("overflow-x") === "hidden"
      ) {
        domTreeShapes = [];
      } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
        domTreeShapes.push({
          element,
          scrollWidth: element.scrollWidth,
          scrollHeight: element.scrollHeight,
          clientWidth: element.clientWidth,
          clientHeight: element.clientHeight,
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        });
      }
      element = element.parentNode;
    }
    return domTreeShapes;
  }
  var nodeWhoClaimedTheScroll = null;
  function findNativeHandler(params) {
    var domTreeShapes = params.domTreeShapes, pageX = params.pageX, startX = params.startX, axis = params.axis;
    return domTreeShapes.some(function(shape) {
      var goingForward = pageX >= startX;
      if (axis === "x" || axis === "y") {
        goingForward = !goingForward;
      }
      var scrollPosition = Math.round(shape[axisProperties.scrollPosition[axis]]);
      var areNotAtStart = scrollPosition > 0;
      var areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];
      if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
        nodeWhoClaimedTheScroll = shape.element;
        return true;
      }
      return false;
    });
  }
  var SwipeableViewsContext = React2.createContext();
  SwipeableViews$1.SwipeableViewsContext = SwipeableViewsContext;
  var SwipeableViews2 = /* @__PURE__ */ function(_React$Component) {
    (0, _inherits2.default)(SwipeableViews3, _React$Component);
    function SwipeableViews3(props) {
      var _this;
      (0, _classCallCheck2.default)(this, SwipeableViews3);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SwipeableViews3).call(this, props));
      _this.rootNode = null;
      _this.containerNode = null;
      _this.ignoreNextScrollEvents = false;
      _this.viewLength = 0;
      _this.startX = 0;
      _this.lastX = 0;
      _this.vx = 0;
      _this.startY = 0;
      _this.isSwiping = void 0;
      _this.started = false;
      _this.startIndex = 0;
      _this.transitionListener = null;
      _this.touchMoveListener = null;
      _this.activeSlide = null;
      _this.indexCurrent = null;
      _this.firstRenderTimeout = null;
      _this.setRootNode = function(node) {
        _this.rootNode = node;
      };
      _this.setContainerNode = function(node) {
        _this.containerNode = node;
      };
      _this.setActiveSlide = function(node) {
        _this.activeSlide = node;
        _this.updateHeight();
      };
      _this.handleSwipeStart = function(event) {
        var axis = _this.props.axis;
        var touch = applyRotationMatrix(event.touches[0], axis);
        _this.viewLength = _this.rootNode.getBoundingClientRect()[axisProperties.length[axis]];
        _this.startX = touch.pageX;
        _this.lastX = touch.pageX;
        _this.vx = 0;
        _this.startY = touch.pageY;
        _this.isSwiping = void 0;
        _this.started = true;
        var computedStyle = window.getComputedStyle(_this.containerNode);
        var transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
        if (transform && transform !== "none") {
          var transformValues = transform.split("(")[1].split(")")[0].split(",");
          var rootStyle = window.getComputedStyle(_this.rootNode);
          var tranformNormalized = applyRotationMatrix({
            pageX: parseInt(transformValues[4], 10),
            pageY: parseInt(transformValues[5], 10)
          }, axis);
          _this.startIndex = -tranformNormalized.pageX / (_this.viewLength - parseInt(rootStyle.paddingLeft, 10) - parseInt(rootStyle.paddingRight, 10)) || 0;
        }
      };
      _this.handleSwipeMove = function(event) {
        if (!_this.started) {
          _this.handleTouchStart(event);
          return;
        }
        if (nodeWhoClaimedTheScroll !== null && nodeWhoClaimedTheScroll !== _this.rootNode) {
          return;
        }
        var _this$props = _this.props, axis = _this$props.axis, children = _this$props.children, ignoreNativeScroll = _this$props.ignoreNativeScroll, onSwitching = _this$props.onSwitching, resistance = _this$props.resistance;
        var touch = applyRotationMatrix(event.touches[0], axis);
        if (_this.isSwiping === void 0) {
          var dx = Math.abs(touch.pageX - _this.startX);
          var dy = Math.abs(touch.pageY - _this.startY);
          var isSwiping = dx > dy && dx > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD;
          if (!resistance && (axis === "y" || axis === "y-reverse") && (_this.indexCurrent === 0 && _this.startX < touch.pageX || _this.indexCurrent === React2.Children.count(_this.props.children) - 1 && _this.startX > touch.pageX)) {
            _this.isSwiping = false;
            return;
          }
          if (dx > dy) {
            event.preventDefault();
          }
          if (isSwiping === true || dy > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD) {
            _this.isSwiping = isSwiping;
            _this.startX = touch.pageX;
            return;
          }
        }
        if (_this.isSwiping !== true) {
          return;
        }
        event.preventDefault();
        _this.vx = _this.vx * 0.5 + (touch.pageX - _this.lastX) * 0.5;
        _this.lastX = touch.pageX;
        var _computeIndex = (0, _reactSwipeableViewsCore.computeIndex)({
          children,
          resistance,
          pageX: touch.pageX,
          startIndex: _this.startIndex,
          startX: _this.startX,
          viewLength: _this.viewLength
        }), index2 = _computeIndex.index, startX = _computeIndex.startX;
        if (nodeWhoClaimedTheScroll === null && !ignoreNativeScroll) {
          var domTreeShapes = getDomTreeShapes(event.target, _this.rootNode);
          var hasFoundNativeHandler = findNativeHandler({
            domTreeShapes,
            startX: _this.startX,
            pageX: touch.pageX,
            axis
          });
          if (hasFoundNativeHandler) {
            return;
          }
        }
        if (startX) {
          _this.startX = startX;
        } else if (nodeWhoClaimedTheScroll === null) {
          nodeWhoClaimedTheScroll = _this.rootNode;
        }
        _this.setIndexCurrent(index2);
        var callback = function callback2() {
          if (onSwitching) {
            onSwitching(index2, "move");
          }
        };
        if (_this.state.displaySameSlide || !_this.state.isDragging) {
          _this.setState({
            displaySameSlide: false,
            isDragging: true
          }, callback);
        }
        callback();
      };
      _this.handleSwipeEnd = function() {
        nodeWhoClaimedTheScroll = null;
        if (!_this.started) {
          return;
        }
        _this.started = false;
        if (_this.isSwiping !== true) {
          return;
        }
        var indexLatest = _this.state.indexLatest;
        var indexCurrent = _this.indexCurrent;
        var delta = indexLatest - indexCurrent;
        var indexNew;
        if (Math.abs(_this.vx) > _this.props.threshold) {
          if (_this.vx > 0) {
            indexNew = Math.floor(indexCurrent);
          } else {
            indexNew = Math.ceil(indexCurrent);
          }
        } else if (Math.abs(delta) > _this.props.hysteresis) {
          indexNew = delta > 0 ? Math.floor(indexCurrent) : Math.ceil(indexCurrent);
        } else {
          indexNew = indexLatest;
        }
        var indexMax = React2.Children.count(_this.props.children) - 1;
        if (indexNew < 0) {
          indexNew = 0;
        } else if (indexNew > indexMax) {
          indexNew = indexMax;
        }
        _this.setIndexCurrent(indexNew);
        _this.setState({
          indexLatest: indexNew,
          isDragging: false
        }, function() {
          if (_this.props.onSwitching) {
            _this.props.onSwitching(indexNew, "end");
          }
          if (_this.props.onChangeIndex && indexNew !== indexLatest) {
            _this.props.onChangeIndex(indexNew, indexLatest, {
              reason: "swipe"
            });
          }
          if (indexCurrent === indexLatest) {
            _this.handleTransitionEnd();
          }
        });
      };
      _this.handleTouchStart = function(event) {
        if (_this.props.onTouchStart) {
          _this.props.onTouchStart(event);
        }
        _this.handleSwipeStart(event);
      };
      _this.handleTouchEnd = function(event) {
        if (_this.props.onTouchEnd) {
          _this.props.onTouchEnd(event);
        }
        _this.handleSwipeEnd(event);
      };
      _this.handleMouseDown = function(event) {
        if (_this.props.onMouseDown) {
          _this.props.onMouseDown(event);
        }
        event.persist();
        _this.handleSwipeStart(adaptMouse(event));
      };
      _this.handleMouseUp = function(event) {
        if (_this.props.onMouseUp) {
          _this.props.onMouseUp(event);
        }
        _this.handleSwipeEnd(adaptMouse(event));
      };
      _this.handleMouseLeave = function(event) {
        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }
        if (_this.started) {
          _this.handleSwipeEnd(adaptMouse(event));
        }
      };
      _this.handleMouseMove = function(event) {
        if (_this.props.onMouseMove) {
          _this.props.onMouseMove(event);
        }
        if (_this.started) {
          _this.handleSwipeMove(adaptMouse(event));
        }
      };
      _this.handleScroll = function(event) {
        if (_this.props.onScroll) {
          _this.props.onScroll(event);
        }
        if (event.target !== _this.rootNode) {
          return;
        }
        if (_this.ignoreNextScrollEvents) {
          _this.ignoreNextScrollEvents = false;
          return;
        }
        var indexLatest = _this.state.indexLatest;
        var indexNew = Math.ceil(event.target.scrollLeft / event.target.clientWidth) + indexLatest;
        _this.ignoreNextScrollEvents = true;
        event.target.scrollLeft = 0;
        if (_this.props.onChangeIndex && indexNew !== indexLatest) {
          _this.props.onChangeIndex(indexNew, indexLatest, {
            reason: "focus"
          });
        }
      };
      _this.updateHeight = function() {
        if (_this.activeSlide !== null) {
          var child = _this.activeSlide.children[0];
          if (child !== void 0 && child.offsetHeight !== void 0 && _this.state.heightLatest !== child.offsetHeight) {
            _this.setState({
              heightLatest: child.offsetHeight
            });
          }
        }
      };
      _this.state = {
        indexLatest: props.index,
        // Set to true as soon as the component is swiping.
        // It's the state counter part of this.isSwiping.
        isDragging: false,
        // Help with SSR logic and lazy loading logic.
        renderOnlyActive: !props.disableLazyLoading,
        heightLatest: 0,
        // Let the render method that we are going to display the same slide than previously.
        displaySameSlide: true
      };
      _this.setIndexCurrent(props.index);
      return _this;
    }
    (0, _createClass2.default)(SwipeableViews3, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;
        this.transitionListener = addEventListener(this.containerNode, "transitionend", function(event) {
          if (event.target !== _this2.containerNode) {
            return;
          }
          _this2.handleTransitionEnd();
        });
        this.touchMoveListener = addEventListener(this.rootNode, "touchmove", function(event) {
          if (_this2.props.disabled) {
            return;
          }
          _this2.handleSwipeMove(event);
        }, {
          passive: false
        });
        if (!this.props.disableLazyLoading) {
          this.firstRenderTimeout = setTimeout(function() {
            _this2.setState({
              renderOnlyActive: false
            });
          }, 0);
        }
        if (this.props.action) {
          this.props.action({
            updateHeight: this.updateHeight
          });
        }
      }
      // eslint-disable-next-line camelcase,react/sort-comp
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var index2 = nextProps.index;
        if (typeof index2 === "number" && index2 !== this.props.index) {
          this.setIndexCurrent(index2);
          this.setState({
            // If true, we are going to change the children. We shoudn't animate it.
            displaySameSlide: (0, _reactSwipeableViewsCore.getDisplaySameSlide)(this.props, nextProps),
            indexLatest: index2
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.transitionListener.remove();
        this.touchMoveListener.remove();
        clearTimeout(this.firstRenderTimeout);
      }
    }, {
      key: "getSwipeableViewsContext",
      value: function getSwipeableViewsContext() {
        var _this3 = this;
        return {
          slideUpdateHeight: function slideUpdateHeight() {
            _this3.updateHeight();
          }
        };
      }
    }, {
      key: "setIndexCurrent",
      value: function setIndexCurrent(indexCurrent) {
        if (!this.props.animateTransitions && this.indexCurrent !== indexCurrent) {
          this.handleTransitionEnd();
        }
        this.indexCurrent = indexCurrent;
        if (this.containerNode) {
          var axis = this.props.axis;
          var transform = axisProperties.transform[axis](indexCurrent * 100);
          this.containerNode.style.WebkitTransform = transform;
          this.containerNode.style.transform = transform;
        }
      }
    }, {
      key: "handleTransitionEnd",
      value: function handleTransitionEnd() {
        if (!this.props.onTransitionEnd) {
          return;
        }
        if (this.state.displaySameSlide) {
          return;
        }
        if (!this.state.isDragging) {
          this.props.onTransitionEnd();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;
        var _this$props2 = this.props;
        _this$props2.action;
        var animateHeight = _this$props2.animateHeight, animateTransitions = _this$props2.animateTransitions, axis = _this$props2.axis, children = _this$props2.children, containerStyleProp = _this$props2.containerStyle, disabled = _this$props2.disabled;
        _this$props2.disableLazyLoading;
        var enableMouseEvents = _this$props2.enableMouseEvents;
        _this$props2.hysteresis;
        _this$props2.ignoreNativeScroll;
        _this$props2.index;
        _this$props2.onChangeIndex;
        _this$props2.onSwitching;
        _this$props2.onTransitionEnd;
        _this$props2.resistance;
        var slideStyleProp = _this$props2.slideStyle, slideClassName = _this$props2.slideClassName, springConfig = _this$props2.springConfig, style2 = _this$props2.style;
        _this$props2.threshold;
        var other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold"]);
        var _this$state = this.state, displaySameSlide = _this$state.displaySameSlide, heightLatest = _this$state.heightLatest, indexLatest = _this$state.indexLatest, isDragging = _this$state.isDragging, renderOnlyActive = _this$state.renderOnlyActive;
        var touchEvents = !disabled ? {
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        } : {};
        var mouseEvents = !disabled && enableMouseEvents ? {
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          onMouseMove: this.handleMouseMove
        } : {};
        var slideStyle = (0, _extends2.default)({}, styles2.slide, slideStyleProp);
        var transition;
        var WebkitTransition;
        if (isDragging || !animateTransitions || displaySameSlide) {
          transition = "all 0s ease 0s";
          WebkitTransition = "all 0s ease 0s";
        } else {
          transition = createTransition("transform", springConfig);
          WebkitTransition = createTransition("-webkit-transform", springConfig);
          if (heightLatest !== 0) {
            var additionalTranstion = ", ".concat(createTransition("height", springConfig));
            transition += additionalTranstion;
            WebkitTransition += additionalTranstion;
          }
        }
        var containerStyle = {
          height: null,
          WebkitFlexDirection: axisProperties.flexDirection[axis],
          flexDirection: axisProperties.flexDirection[axis],
          WebkitTransition,
          transition
        };
        if (!renderOnlyActive) {
          var transform = axisProperties.transform[axis](this.indexCurrent * 100);
          containerStyle.WebkitTransform = transform;
          containerStyle.transform = transform;
        }
        if (animateHeight) {
          containerStyle.height = heightLatest;
        }
        return React2.createElement(SwipeableViewsContext.Provider, {
          value: this.getSwipeableViewsContext()
        }, React2.createElement("div", (0, _extends2.default)({
          ref: this.setRootNode,
          style: (0, _extends2.default)({}, axisProperties.root[axis], style2)
        }, other, touchEvents, mouseEvents, {
          onScroll: this.handleScroll
        }), React2.createElement("div", {
          ref: this.setContainerNode,
          style: (0, _extends2.default)({}, containerStyle, styles2.container, containerStyleProp),
          className: "react-swipeable-view-container"
        }, React2.Children.map(children, function(child, indexChild) {
          if (renderOnlyActive && indexChild !== indexLatest) {
            return null;
          }
          var ref;
          var hidden = true;
          if (indexChild === indexLatest) {
            hidden = false;
            if (animateHeight) {
              ref = _this4.setActiveSlide;
              slideStyle.overflowY = "hidden";
            }
          }
          return React2.createElement("div", {
            ref,
            style: slideStyle,
            className: slideClassName,
            "aria-hidden": hidden,
            "data-swipeable": "true"
          }, child);
        }))));
      }
    }]);
    return SwipeableViews3;
  }(React2.Component);
  SwipeableViews2.displayName = "ReactSwipableView";
  SwipeableViews2.propTypes = {};
  SwipeableViews2.defaultProps = {
    animateHeight: false,
    animateTransitions: true,
    axis: "x",
    disabled: false,
    disableLazyLoading: false,
    enableMouseEvents: false,
    hysteresis: 0.6,
    ignoreNativeScroll: false,
    index: 0,
    threshold: 5,
    springConfig: {
      duration: "0.35s",
      easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
      delay: "0s"
    },
    resistance: false
  };
  var _default2 = SwipeableViews2;
  SwipeableViews$1.default = _default2;
  return SwipeableViews$1;
}
(function(exports) {
  var _interopRequireWildcard2 = interopRequireWildcard$1;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _SwipeableViews.default;
    }
  });
  Object.defineProperty(exports, "SwipeableViewsContext", {
    enumerable: true,
    get: function get() {
      return _SwipeableViews.SwipeableViewsContext;
    }
  });
  var _SwipeableViews = _interopRequireWildcard2(requireSwipeableViews());
})(lib$2);
const SwipeableViews = /* @__PURE__ */ getDefaultExportFromCjs(lib$2);
var lib = {};
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var interopRequireDefault = _interopRequireDefault$6;
var autoPlay = {};
var _extends_1;
var hasRequired_extends;
function require_extends() {
  if (hasRequired_extends)
    return _extends_1;
  hasRequired_extends = 1;
  function _extends2() {
    _extends_1 = _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  _extends_1 = _extends2;
  return _extends_1;
}
var objectWithoutPropertiesLoose;
var hasRequiredObjectWithoutPropertiesLoose;
function requireObjectWithoutPropertiesLoose() {
  if (hasRequiredObjectWithoutPropertiesLoose)
    return objectWithoutPropertiesLoose;
  hasRequiredObjectWithoutPropertiesLoose = 1;
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose2;
  return objectWithoutPropertiesLoose;
}
var objectWithoutProperties;
var hasRequiredObjectWithoutProperties;
function requireObjectWithoutProperties() {
  if (hasRequiredObjectWithoutProperties)
    return objectWithoutProperties;
  hasRequiredObjectWithoutProperties = 1;
  var objectWithoutPropertiesLoose2 = requireObjectWithoutPropertiesLoose();
  function _objectWithoutProperties2(source, excluded) {
    if (source == null)
      return {};
    var target = objectWithoutPropertiesLoose2(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  objectWithoutProperties = _objectWithoutProperties2;
  return objectWithoutProperties;
}
var classCallCheck;
var hasRequiredClassCallCheck;
function requireClassCallCheck() {
  if (hasRequiredClassCallCheck)
    return classCallCheck;
  hasRequiredClassCallCheck = 1;
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  classCallCheck = _classCallCheck2;
  return classCallCheck;
}
var createClass;
var hasRequiredCreateClass;
function requireCreateClass() {
  if (hasRequiredCreateClass)
    return createClass;
  hasRequiredCreateClass = 1;
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  createClass = _createClass2;
  return createClass;
}
var _typeof_1;
var hasRequired_typeof$1;
function require_typeof$1() {
  if (hasRequired_typeof$1)
    return _typeof_1;
  hasRequired_typeof$1 = 1;
  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof22(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof22(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function _typeof3(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof_1 = _typeof3 = function _typeof4(obj2) {
        return _typeof2(obj2);
      };
    } else {
      _typeof_1 = _typeof3 = function _typeof4(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : _typeof2(obj2);
      };
    }
    return _typeof3(obj);
  }
  _typeof_1 = _typeof3;
  return _typeof_1;
}
var assertThisInitialized$1;
var hasRequiredAssertThisInitialized$1;
function requireAssertThisInitialized$1() {
  if (hasRequiredAssertThisInitialized$1)
    return assertThisInitialized$1;
  hasRequiredAssertThisInitialized$1 = 1;
  function _assertThisInitialized2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  assertThisInitialized$1 = _assertThisInitialized2;
  return assertThisInitialized$1;
}
var possibleConstructorReturn$1;
var hasRequiredPossibleConstructorReturn$1;
function requirePossibleConstructorReturn$1() {
  if (hasRequiredPossibleConstructorReturn$1)
    return possibleConstructorReturn$1;
  hasRequiredPossibleConstructorReturn$1 = 1;
  var _typeof2 = require_typeof$1();
  var assertThisInitialized2 = requireAssertThisInitialized$1();
  function _possibleConstructorReturn2(self, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized2(self);
  }
  possibleConstructorReturn$1 = _possibleConstructorReturn2;
  return possibleConstructorReturn$1;
}
var getPrototypeOf$1;
var hasRequiredGetPrototypeOf$1;
function requireGetPrototypeOf$1() {
  if (hasRequiredGetPrototypeOf$1)
    return getPrototypeOf$1;
  hasRequiredGetPrototypeOf$1 = 1;
  function _getPrototypeOf2(o) {
    getPrototypeOf$1 = _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  getPrototypeOf$1 = _getPrototypeOf2;
  return getPrototypeOf$1;
}
var setPrototypeOf$1;
var hasRequiredSetPrototypeOf$1;
function requireSetPrototypeOf$1() {
  if (hasRequiredSetPrototypeOf$1)
    return setPrototypeOf$1;
  hasRequiredSetPrototypeOf$1 = 1;
  function _setPrototypeOf(o, p) {
    setPrototypeOf$1 = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  setPrototypeOf$1 = _setPrototypeOf;
  return setPrototypeOf$1;
}
var inherits$1;
var hasRequiredInherits$1;
function requireInherits$1() {
  if (hasRequiredInherits$1)
    return inherits$1;
  hasRequiredInherits$1 = 1;
  var setPrototypeOf2 = requireSetPrototypeOf$1();
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      setPrototypeOf2(subClass, superClass);
  }
  inherits$1 = _inherits2;
  return inherits$1;
}
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB) {
    return false;
  }
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var key = aKeys[i];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }
  return true;
}
function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }
  if (!arrA || !arrB) {
    return false;
  }
  var len = arrA.length;
  if (arrB.length !== len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
}
const index_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  shallowEqualArrays,
  shallowEqualObjects
}, Symbol.toStringTag, { value: "Module" }));
const require$$10 = /* @__PURE__ */ getAugmentedNamespace(index_esm);
var reactEventListener_cjs = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(classCallCheck$2);
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(createClass$2);
var possibleConstructorReturn = { exports: {} };
var _typeof = { exports: {} };
var hasRequired_typeof;
function require_typeof() {
  if (hasRequired_typeof)
    return _typeof.exports;
  hasRequired_typeof = 1;
  (function(module) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(obj);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(_typeof);
  return _typeof.exports;
}
var assertThisInitialized = { exports: {} };
var hasRequiredAssertThisInitialized;
function requireAssertThisInitialized() {
  if (hasRequiredAssertThisInitialized)
    return assertThisInitialized.exports;
  hasRequiredAssertThisInitialized = 1;
  (function(module) {
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(assertThisInitialized);
  return assertThisInitialized.exports;
}
var hasRequiredPossibleConstructorReturn;
function requirePossibleConstructorReturn() {
  if (hasRequiredPossibleConstructorReturn)
    return possibleConstructorReturn.exports;
  hasRequiredPossibleConstructorReturn = 1;
  (function(module) {
    var _typeof2 = require_typeof()["default"];
    var assertThisInitialized2 = requireAssertThisInitialized();
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return assertThisInitialized2(self);
    }
    module.exports = _possibleConstructorReturn2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(possibleConstructorReturn);
  return possibleConstructorReturn.exports;
}
var getPrototypeOf = { exports: {} };
var hasRequiredGetPrototypeOf;
function requireGetPrototypeOf() {
  if (hasRequiredGetPrototypeOf)
    return getPrototypeOf.exports;
  hasRequiredGetPrototypeOf = 1;
  (function(module) {
    function _getPrototypeOf2(o) {
      module.exports = _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _getPrototypeOf2(o);
    }
    module.exports = _getPrototypeOf2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(getPrototypeOf);
  return getPrototypeOf.exports;
}
var inherits = { exports: {} };
var setPrototypeOf = { exports: {} };
var hasRequiredSetPrototypeOf;
function requireSetPrototypeOf() {
  if (hasRequiredSetPrototypeOf)
    return setPrototypeOf.exports;
  hasRequiredSetPrototypeOf = 1;
  (function(module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(setPrototypeOf);
  return setPrototypeOf.exports;
}
var hasRequiredInherits;
function requireInherits() {
  if (hasRequiredInherits)
    return inherits.exports;
  hasRequiredInherits = 1;
  (function(module) {
    var setPrototypeOf2 = requireSetPrototypeOf();
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass)
        setPrototypeOf2(subClass, superClass);
    }
    module.exports = _inherits2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(inherits);
  return inherits.exports;
}
const require$$5 = /* @__PURE__ */ getAugmentedNamespace(_typeof$1);
const require$$6 = /* @__PURE__ */ getAugmentedNamespace(objectWithoutProperties$2);
var hasRequiredReactEventListener_cjs;
function requireReactEventListener_cjs() {
  if (hasRequiredReactEventListener_cjs)
    return reactEventListener_cjs;
  hasRequiredReactEventListener_cjs = 1;
  Object.defineProperty(reactEventListener_cjs, "__esModule", { value: true });
  function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
  }
  var _classCallCheck2 = _interopDefault(require$$0);
  var _createClass2 = _interopDefault(require$$1);
  var _possibleConstructorReturn2 = _interopDefault(requirePossibleConstructorReturn());
  var _getPrototypeOf2 = _interopDefault(requireGetPrototypeOf());
  var _inherits2 = _interopDefault(requireInherits());
  var _typeof2 = _interopDefault(require$$5);
  var _objectWithoutProperties2 = _interopDefault(require$$6);
  var _extends2 = _interopDefault(_extendsExports);
  var React2 = _interopDefault(reactExports);
  _interopDefault(propTypesExports);
  _interopDefault(requireWarning());
  function defineProperty(object, property, attr) {
    return Object.defineProperty(object, property, attr);
  }
  var passiveOption = function() {
    var cache = null;
    return function() {
      if (cache !== null) {
        return cache;
      }
      var supportsPassiveOption = false;
      try {
        window.addEventListener("test", null, defineProperty({}, "passive", {
          get: function get() {
            supportsPassiveOption = true;
          }
        }));
      } catch (err) {
      }
      cache = supportsPassiveOption;
      return supportsPassiveOption;
    }();
  }();
  var defaultEventOptions = {
    capture: false,
    passive: false
  };
  function mergeDefaultEventOptions(options) {
    return _extends2({}, defaultEventOptions, options);
  }
  function getEventListenerArgs(eventName, callback, options) {
    var args = [eventName, callback];
    args.push(passiveOption ? options : options.capture);
    return args;
  }
  function on(target, eventName, callback, options) {
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  }
  function off(target, eventName, callback, options) {
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  }
  function forEachListener(props, iteratee) {
    props.children;
    props.target;
    var eventProps = _objectWithoutProperties2(props, ["children", "target"]);
    Object.keys(eventProps).forEach(function(name) {
      if (name.substring(0, 2) !== "on") {
        return;
      }
      var prop = eventProps[name];
      var type = _typeof2(prop);
      var isObject = type === "object";
      var isFunction = type === "function";
      if (!isObject && !isFunction) {
        return;
      }
      var capture = name.substr(-7).toLowerCase() === "capture";
      var eventName = name.substring(2).toLowerCase();
      eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;
      if (isObject) {
        iteratee(eventName, prop.handler, prop.options);
      } else {
        iteratee(eventName, prop, mergeDefaultEventOptions({
          capture
        }));
      }
    });
  }
  function withOptions(handler, options) {
    return {
      handler,
      options: mergeDefaultEventOptions(options)
    };
  }
  var EventListener = /* @__PURE__ */ function(_React$PureComponent) {
    _inherits2(EventListener2, _React$PureComponent);
    function EventListener2() {
      _classCallCheck2(this, EventListener2);
      return _possibleConstructorReturn2(this, _getPrototypeOf2(EventListener2).apply(this, arguments));
    }
    _createClass2(EventListener2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.applyListeners(on);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this.applyListeners(off, prevProps);
        this.applyListeners(on);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.applyListeners(off);
      }
    }, {
      key: "applyListeners",
      value: function applyListeners(onOrOff) {
        var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.props;
        var target = props.target;
        if (target) {
          var element = target;
          if (typeof target === "string") {
            element = window[target];
          }
          forEachListener(props, onOrOff.bind(null, element));
        }
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children || null;
      }
    }]);
    return EventListener2;
  }(React2.PureComponent);
  EventListener.propTypes = {};
  reactEventListener_cjs.withOptions = withOptions;
  reactEventListener_cjs.default = EventListener;
  return reactEventListener_cjs;
}
var hasRequiredAutoPlay;
function requireAutoPlay() {
  if (hasRequiredAutoPlay)
    return autoPlay;
  hasRequiredAutoPlay = 1;
  var _interopRequireDefault2 = interopRequireDefault;
  Object.defineProperty(autoPlay, "__esModule", {
    value: true
  });
  autoPlay.default = autoPlay$1;
  var _extends2 = _interopRequireDefault2(require_extends());
  var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties());
  var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault2(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn$1());
  var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf$1());
  var _inherits2 = _interopRequireDefault2(requireInherits$1());
  var _react = _interopRequireDefault2(reactExports);
  _interopRequireDefault2(propTypesExports);
  var _shallowEqual = require$$10;
  var _reactEventListener = _interopRequireDefault2(requireReactEventListener_cjs());
  var _reactSwipeableViewsCore = requireLib();
  function autoPlay$1(MyComponent) {
    var AutoPlay = /* @__PURE__ */ function(_React$Component) {
      (0, _inherits2.default)(AutoPlay2, _React$Component);
      function AutoPlay2(props) {
        var _this;
        (0, _classCallCheck2.default)(this, AutoPlay2);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AutoPlay2).call(this, props));
        _this.timer = null;
        _this.state = {};
        _this.handleInterval = function() {
          var _this$props = _this.props, children = _this$props.children, direction = _this$props.direction, onChangeIndex = _this$props.onChangeIndex, slideCount = _this$props.slideCount;
          var indexLatest = _this.state.index;
          var indexNew = indexLatest;
          if (direction === "incremental") {
            indexNew += 1;
          } else {
            indexNew -= 1;
          }
          if (slideCount || children) {
            indexNew = (0, _reactSwipeableViewsCore.mod)(indexNew, slideCount || _react.default.Children.count(children));
          }
          if (_this.props.index === void 0) {
            _this.setState({
              index: indexNew
            });
          }
          if (onChangeIndex) {
            onChangeIndex(indexNew, indexLatest);
          }
        };
        _this.handleChangeIndex = function(index2, indexLatest, meta) {
          if (_this.props.index === void 0) {
            _this.setState({
              index: index2
            });
          }
          if (_this.props.onChangeIndex) {
            _this.props.onChangeIndex(index2, indexLatest, meta);
          }
        };
        _this.handleSwitching = function(index2, type) {
          if (_this.timer) {
            clearInterval(_this.timer);
            _this.timer = null;
          } else if (type === "end") {
            _this.startInterval();
          }
          if (_this.props.onSwitching) {
            _this.props.onSwitching(index2, type);
          }
        };
        _this.handleVisibilityChange = function(e) {
          if (e.target.hidden) {
            clearInterval(_this.timer);
          } else {
            _this.startInterval();
          }
        };
        _this.state.index = props.index || 0;
        return _this;
      }
      (0, _createClass2.default)(AutoPlay2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.startInterval();
        }
        // eslint-disable-next-line camelcase,react/sort-comp
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          var index2 = nextProps.index;
          if (typeof index2 === "number" && index2 !== this.props.index) {
            this.setState({
              index: index2
            });
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var shouldResetInterval = !(0, _shallowEqual.shallowEqualObjects)({
            index: prevProps.index,
            interval: prevProps.interval,
            autoplay: prevProps.autoplay
          }, {
            index: this.props.index,
            interval: this.props.interval,
            autoplay: this.props.autoplay
          });
          if (shouldResetInterval) {
            this.startInterval();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearInterval(this.timer);
        }
      }, {
        key: "startInterval",
        value: function startInterval() {
          var _this$props2 = this.props, autoplay = _this$props2.autoplay, interval = _this$props2.interval;
          clearInterval(this.timer);
          if (autoplay) {
            this.timer = setInterval(this.handleInterval, interval);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props3 = this.props, autoplay = _this$props3.autoplay;
          _this$props3.direction;
          _this$props3.index;
          _this$props3.interval;
          var onChangeIndex = _this$props3.onChangeIndex, other = (0, _objectWithoutProperties2.default)(_this$props3, ["autoplay", "direction", "index", "interval", "onChangeIndex"]);
          var index2 = this.state.index;
          if (!autoplay) {
            return _react.default.createElement(MyComponent, (0, _extends2.default)({
              index: index2,
              onChangeIndex
            }, other));
          }
          return _react.default.createElement(_reactEventListener.default, {
            target: "document",
            onVisibilityChange: this.handleVisibilityChange
          }, _react.default.createElement(MyComponent, (0, _extends2.default)({
            index: index2,
            onChangeIndex: this.handleChangeIndex,
            onSwitching: this.handleSwitching
          }, other)));
        }
      }]);
      return AutoPlay2;
    }(_react.default.Component);
    AutoPlay.propTypes = {};
    AutoPlay.defaultProps = {
      autoplay: true,
      direction: "incremental",
      interval: 3e3
    };
    return AutoPlay;
  }
  return autoPlay;
}
var bindKeyboard = {};
var keycode = { exports: {} };
var hasRequiredKeycode;
function requireKeycode() {
  if (hasRequiredKeycode)
    return keycode.exports;
  hasRequiredKeycode = 1;
  (function(module, exports) {
    function keyCode(searchInput) {
      if (searchInput && "object" === typeof searchInput) {
        var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
        if (hasKeyCode)
          searchInput = hasKeyCode;
      }
      if ("number" === typeof searchInput)
        return names[searchInput];
      var search = String(searchInput);
      var foundNamedKey = codes[search.toLowerCase()];
      if (foundNamedKey)
        return foundNamedKey;
      var foundNamedKey = aliases[search.toLowerCase()];
      if (foundNamedKey)
        return foundNamedKey;
      if (search.length === 1)
        return search.charCodeAt(0);
      return void 0;
    }
    keyCode.isEventKey = function isEventKey(event, nameOrCode) {
      if (event && "object" === typeof event) {
        var keyCode2 = event.which || event.keyCode || event.charCode;
        if (keyCode2 === null || keyCode2 === void 0) {
          return false;
        }
        if (typeof nameOrCode === "string") {
          var foundNamedKey = codes[nameOrCode.toLowerCase()];
          if (foundNamedKey) {
            return foundNamedKey === keyCode2;
          }
          var foundNamedKey = aliases[nameOrCode.toLowerCase()];
          if (foundNamedKey) {
            return foundNamedKey === keyCode2;
          }
        } else if (typeof nameOrCode === "number") {
          return nameOrCode === keyCode2;
        }
        return false;
      }
    };
    exports = module.exports = keyCode;
    var codes = exports.code = exports.codes = {
      "backspace": 8,
      "tab": 9,
      "enter": 13,
      "shift": 16,
      "ctrl": 17,
      "alt": 18,
      "pause/break": 19,
      "caps lock": 20,
      "esc": 27,
      "space": 32,
      "page up": 33,
      "page down": 34,
      "end": 35,
      "home": 36,
      "left": 37,
      "up": 38,
      "right": 39,
      "down": 40,
      "insert": 45,
      "delete": 46,
      "command": 91,
      "left command": 91,
      "right command": 93,
      "numpad *": 106,
      "numpad +": 107,
      "numpad -": 109,
      "numpad .": 110,
      "numpad /": 111,
      "num lock": 144,
      "scroll lock": 145,
      "my computer": 182,
      "my calculator": 183,
      ";": 186,
      "=": 187,
      ",": 188,
      "-": 189,
      ".": 190,
      "/": 191,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222
    };
    var aliases = exports.aliases = {
      "windows": 91,
      "⇧": 16,
      "⌥": 18,
      "⌃": 17,
      "⌘": 91,
      "ctl": 17,
      "control": 17,
      "option": 18,
      "pause": 19,
      "break": 19,
      "caps": 20,
      "return": 13,
      "escape": 27,
      "spc": 32,
      "spacebar": 32,
      "pgup": 33,
      "pgdn": 34,
      "ins": 45,
      "del": 46,
      "cmd": 91
    };
    /*!
     * Programatically add the following
     */
    for (i = 97; i < 123; i++)
      codes[String.fromCharCode(i)] = i - 32;
    for (var i = 48; i < 58; i++)
      codes[i - 48] = i;
    for (i = 1; i < 13; i++)
      codes["f" + i] = i + 111;
    for (i = 0; i < 10; i++)
      codes["numpad " + i] = i + 96;
    var names = exports.names = exports.title = {};
    for (i in codes)
      names[codes[i]] = i;
    for (var alias in aliases) {
      codes[alias] = aliases[alias];
    }
  })(keycode, keycode.exports);
  return keycode.exports;
}
var hasRequiredBindKeyboard;
function requireBindKeyboard() {
  if (hasRequiredBindKeyboard)
    return bindKeyboard;
  hasRequiredBindKeyboard = 1;
  var _interopRequireDefault2 = interopRequireDefault;
  Object.defineProperty(bindKeyboard, "__esModule", {
    value: true
  });
  bindKeyboard.default = bindKeyboard$1;
  var _extends2 = _interopRequireDefault2(require_extends());
  var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties());
  var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault2(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn$1());
  var _getPrototypeOf3 = _interopRequireDefault2(requireGetPrototypeOf$1());
  var _inherits2 = _interopRequireDefault2(requireInherits$1());
  var _react = _interopRequireDefault2(reactExports);
  _interopRequireDefault2(propTypesExports);
  var _keycode = _interopRequireDefault2(requireKeycode());
  var _reactEventListener = _interopRequireDefault2(requireReactEventListener_cjs());
  var _reactSwipeableViewsCore = requireLib();
  function bindKeyboard$1(MyComponent) {
    var BindKeyboard = /* @__PURE__ */ function(_React$Component) {
      (0, _inherits2.default)(BindKeyboard2, _React$Component);
      function BindKeyboard2() {
        var _getPrototypeOf2;
        var _this;
        (0, _classCallCheck2.default)(this, BindKeyboard2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BindKeyboard2)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {};
        _this.handleKeyDown = function(event) {
          var action;
          var _this$props = _this.props, _this$props$axis = _this$props.axis, axis = _this$props$axis === void 0 ? "x" : _this$props$axis, children = _this$props.children, onChangeIndex = _this$props.onChangeIndex, slideCount = _this$props.slideCount;
          switch ((0, _keycode.default)(event)) {
            case "page down":
            case "down":
              if (axis === "y") {
                action = "decrease";
              } else if (axis === "y-reverse") {
                action = "increase";
              }
              break;
            case "left":
              if (axis === "x") {
                action = "decrease";
              } else if (axis === "x-reverse") {
                action = "increase";
              }
              break;
            case "page up":
            case "up":
              if (axis === "y") {
                action = "increase";
              } else if (axis === "y-reverse") {
                action = "decrease";
              }
              break;
            case "right":
              if (axis === "x") {
                action = "increase";
              } else if (axis === "x-reverse") {
                action = "decrease";
              }
              break;
          }
          if (action) {
            var indexLatest = _this.state.index;
            var indexNew = indexLatest;
            if (action === "increase") {
              indexNew += 1;
            } else {
              indexNew -= 1;
            }
            if (slideCount || children) {
              indexNew = (0, _reactSwipeableViewsCore.mod)(indexNew, slideCount || _react.default.Children.count(children));
            }
            if (_this.props.index === void 0) {
              _this.setState({
                index: indexNew
              });
            }
            if (onChangeIndex) {
              onChangeIndex(indexNew, indexLatest);
            }
          }
        };
        _this.handleChangeIndex = function(index2, indexLatest, meta) {
          if (_this.props.index === void 0) {
            _this.setState({
              index: index2
            });
          }
          if (_this.props.onChangeIndex) {
            _this.props.onChangeIndex(index2, indexLatest, meta);
          }
        };
        return _this;
      }
      (0, _createClass2.default)(BindKeyboard2, [{
        key: "UNSAFE_componentWillMount",
        // eslint-disable-next-line camelcase,react/sort-comp
        value: function UNSAFE_componentWillMount() {
          this.setState({
            index: this.props.index || 0
          });
        }
        // eslint-disable-next-line camelcase,react/sort-comp
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          var index2 = nextProps.index;
          if (typeof index2 === "number" && index2 !== this.props.index) {
            this.setState({
              index: index2
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props;
          _this$props2.index;
          _this$props2.onChangeIndex;
          var other = (0, _objectWithoutProperties2.default)(_this$props2, ["index", "onChangeIndex"]);
          var index2 = this.state.index;
          return _react.default.createElement(_reactEventListener.default, {
            target: "window",
            onKeyDown: this.handleKeyDown
          }, _react.default.createElement(MyComponent, (0, _extends2.default)({
            index: index2,
            onChangeIndex: this.handleChangeIndex
          }, other)));
        }
      }]);
      return BindKeyboard2;
    }(_react.default.Component);
    BindKeyboard.propTypes = {};
    return BindKeyboard;
  }
  return bindKeyboard;
}
var virtualize = {};
var interopRequireWildcard;
var hasRequiredInteropRequireWildcard;
function requireInteropRequireWildcard() {
  if (hasRequiredInteropRequireWildcard)
    return interopRequireWildcard;
  hasRequiredInteropRequireWildcard = 1;
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  interopRequireWildcard = _interopRequireWildcard2;
  return interopRequireWildcard;
}
var hasRequiredVirtualize;
function requireVirtualize() {
  if (hasRequiredVirtualize)
    return virtualize;
  hasRequiredVirtualize = 1;
  var _interopRequireWildcard2 = requireInteropRequireWildcard();
  var _interopRequireDefault2 = interopRequireDefault;
  Object.defineProperty(virtualize, "__esModule", {
    value: true
  });
  virtualize.default = virtualize$1;
  var _extends2 = _interopRequireDefault2(require_extends());
  var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties());
  var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
  var _createClass2 = _interopRequireDefault2(requireCreateClass());
  var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn$1());
  var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf$1());
  var _inherits2 = _interopRequireDefault2(requireInherits$1());
  var _react = _interopRequireWildcard2(reactExports);
  _interopRequireDefault2(propTypesExports);
  var _reactSwipeableViewsCore = requireLib();
  function virtualize$1(MyComponent) {
    var Virtualize = /* @__PURE__ */ function(_PureComponent) {
      (0, _inherits2.default)(Virtualize2, _PureComponent);
      function Virtualize2(props) {
        var _this;
        (0, _classCallCheck2.default)(this, Virtualize2);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Virtualize2).call(this, props));
        _this.timer = null;
        _this.state = {};
        _this.handleChangeIndex = function(indexContainer, indexLatest, meta) {
          var _this$props = _this.props, slideCount = _this$props.slideCount, onChangeIndex = _this$props.onChangeIndex;
          var indexDiff = indexContainer - indexLatest;
          var index2 = _this.state.index + indexDiff;
          if (slideCount) {
            index2 = (0, _reactSwipeableViewsCore.mod)(index2, slideCount);
          }
          if (_this.props.index === void 0) {
            _this.setIndex(index2, indexContainer, indexDiff);
          }
          if (onChangeIndex) {
            onChangeIndex(index2, _this.state.index, meta);
          }
        };
        _this.handleTransitionEnd = function() {
          _this.timer = setTimeout(function() {
            _this.setWindow();
          }, 0);
          if (_this.props.onTransitionEnd) {
            _this.props.onTransitionEnd();
          }
        };
        _this.state.index = props.index || 0;
        return _this;
      }
      (0, _createClass2.default)(Virtualize2, [{
        key: "UNSAFE_componentWillMount",
        // eslint-disable-next-line camelcase,react/sort-comp
        value: function UNSAFE_componentWillMount() {
          this.setWindow(this.state.index);
        }
        // eslint-disable-next-line camelcase,react/sort-comp
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          var index2 = nextProps.index;
          if (typeof index2 === "number" && index2 !== this.props.index) {
            var indexDiff = index2 - this.props.index;
            this.setIndex(index2, this.state.indexContainer + indexDiff, indexDiff);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearInterval(this.timer);
        }
      }, {
        key: "setIndex",
        value: function setIndex(index2, indexContainer, indexDiff) {
          var nextState = {
            index: index2,
            indexContainer,
            indexStart: this.state.indexStart,
            indexStop: this.state.indexStop
          };
          if (indexDiff > 0 && (!this.props.slideCount || nextState.indexStop < this.props.slideCount - 1)) {
            nextState.indexStop += 1;
          }
          if (index2 > nextState.indexStop) {
            nextState.indexStop = index2;
          }
          var beforeAhead = nextState.indexStart - index2;
          if (beforeAhead > 0) {
            nextState.indexContainer += beforeAhead;
            nextState.indexStart -= beforeAhead;
          }
          this.setState(nextState);
        }
      }, {
        key: "setWindow",
        value: function setWindow() {
          var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.state.index;
          var slideCount = this.props.slideCount;
          var beforeAhead = this.props.overscanSlideBefore;
          var afterAhead = this.props.overscanSlideAfter;
          if (slideCount) {
            if (beforeAhead > index2) {
              beforeAhead = index2;
            }
            if (afterAhead + index2 > slideCount - 1) {
              afterAhead = slideCount - index2 - 1;
            }
          }
          this.setState({
            indexContainer: beforeAhead,
            indexStart: index2 - beforeAhead,
            indexStop: index2 + afterAhead
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props;
          _this$props2.children;
          _this$props2.index;
          _this$props2.onChangeIndex;
          _this$props2.onTransitionEnd;
          _this$props2.overscanSlideAfter;
          _this$props2.overscanSlideBefore;
          _this$props2.slideCount;
          var slideRenderer = _this$props2.slideRenderer, other = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "index", "onChangeIndex", "onTransitionEnd", "overscanSlideAfter", "overscanSlideBefore", "slideCount", "slideRenderer"]);
          var _this$state = this.state, indexContainer = _this$state.indexContainer, indexStart = _this$state.indexStart, indexStop = _this$state.indexStop;
          var slides = [];
          for (var slideIndex = indexStart; slideIndex <= indexStop; slideIndex += 1) {
            slides.push(slideRenderer({
              index: slideIndex,
              key: slideIndex
            }));
          }
          return _react.default.createElement(MyComponent, (0, _extends2.default)({
            index: indexContainer,
            onChangeIndex: this.handleChangeIndex,
            onTransitionEnd: this.handleTransitionEnd
          }, other), slides);
        }
      }]);
      return Virtualize2;
    }(_react.PureComponent);
    Virtualize.propTypes = {};
    Virtualize.defaultProps = {
      overscanSlideAfter: 2,
      // Render one more slide for going backward as it's more difficult to
      // keep the window up to date.
      overscanSlideBefore: 3
    };
    return Virtualize;
  }
  return virtualize;
}
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "autoPlay", {
    enumerable: true,
    get: function get() {
      return _autoPlay.default;
    }
  });
  Object.defineProperty(exports, "bindKeyboard", {
    enumerable: true,
    get: function get() {
      return _bindKeyboard.default;
    }
  });
  Object.defineProperty(exports, "virtualize", {
    enumerable: true,
    get: function get() {
      return _virtualize.default;
    }
  });
  var _autoPlay = _interopRequireDefault2(requireAutoPlay());
  var _bindKeyboard = _interopRequireDefault2(requireBindKeyboard());
  var _virtualize = _interopRequireDefault2(requireVirtualize());
})(lib);
const dots$1 = "_dots_kiwxe_1";
const dotsActive = "_dotsActive_kiwxe_5";
const styles$2 = {
  dots: dots$1,
  dotsActive
};
const AutoPlaySwipeableViews = lib.autoPlay((props) => /* @__PURE__ */ jsx(Box, { component: SwipeableViews, ...props }));
const mobileStepperSx = {
  padding: 0.5,
  width: "100%",
  position: "absolute",
  bottom: "0",
  background: (theme) => alpha(theme.palette.background.paper, 1)
};
const buttonImagesSx = {
  padding: "0px",
  height: "100%",
  width: "100%",
  userSelect: "none"
};
class ImagesStepper extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.switching = false;
    this.interval = 6e3;
    this.elemRef = React.createRef();
    this.state = {
      activeStep: 0
    };
    this.handleNext = (e) => {
      e.preventDefault();
      let activeStep = this.state.activeStep + 1;
      this.onChange(activeStep);
      if (activeStep >= this.props.images.length) {
        activeStep = 0;
      }
      this.setState({
        activeStep
      });
    };
    this.handleBack = (e) => {
      e.preventDefault();
      let activeStep = this.state.activeStep - 1;
      if (activeStep < 0) {
        activeStep = this.props.images.length - 1;
      }
      this.onChange(this.state.activeStep - 1);
      this.setState({
        activeStep
      });
    };
    this.handleStepChange = (activeStep) => {
      if (this.elemRef.current && this.visible(this.elemRef.current) && this.props.autoPlayImages) {
        this.onChange(activeStep);
        this.setState({
          activeStep
        });
      }
    };
    this.sourceImages = (path) => {
      const {
        sourceImages,
        sizeImages
      } = this.props;
      return getSourceImages(path, {
        sourceImages,
        size: sizeImages || SourceImageSizes.thumbnail
      });
    };
  }
  get maxSteps() {
    return this.props.images.length;
  }
  visible(element) {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
  }
  onChange(activeStep) {
    const {
      onChange
    } = this.props;
    onChange && onChange(this.props.images[activeStep]);
  }
  render() {
    const {
      theme,
      images,
      sourceImages,
      onClickImage,
      showButtons,
      classNames,
      sxs,
      onClick,
      imageStepperProps,
      autoPlayImages
    } = this.props;
    const {
      maxSteps,
      interval
    } = this;
    const {
      activeStep
    } = this.state;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Box, { component: "div", ref: this.elemRef, sx: buttonImagesSx, onClick: (e) => {
        if (this.switching) {
          e.preventDefault();
          e.stopPropagation();
        } else
          onClick == null ? void 0 : onClick();
      }, children: /* @__PURE__ */ jsx(AutoPlaySwipeableViews, { autoplay: autoPlayImages, axis: theme.direction === "rtl" ? "x-reverse" : "x", ...{
        interval
      }, index: activeStep, onChangeIndex: this.handleStepChange, enableMouseEvents: true, slideStyle: {
        overflow: "unset",
        width: "100%",
        height: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }, containerStyle: {
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }, style: {
        width: "100%",
        height: "100%",
        cursor: showButtons && maxSteps > 1 && "grab" || void 0
      }, className: classNames == null ? void 0 : classNames.swipeableView, onSwitching: () => {
        this.switching = true;
      }, onTransitionEnd: () => {
        this.switching = false;
      }, onClick: (e) => {
        if (this.switching) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, sx: sxs == null ? void 0 : sxs.swipeableView, children: images.map((image, key) => /* @__PURE__ */ jsx(ImageStepper, { image, sx: sxs == null ? void 0 : sxs.imageStepper, ...{
        interval,
        sourceImages,
        ...b({
          classes: {
            imgParent: classNames == null ? void 0 : classNames.imageStepper
          },
          imgProps: {
            onClick: onClickImage
          }
        }, imageStepperProps)
      } }, typeof image === "string" ? key : image.id)) }) }),
      showButtons && maxSteps > 1 && /* @__PURE__ */ jsx(MobileStepper$1, { steps: maxSteps, position: "static", classes: {
        dotActive: clsx(styles$2.dotActive, classNames == null ? void 0 : classNames.dotActive),
        dots: clsx(styles$2 == null ? void 0 : styles$2.dots, classNames == null ? void 0 : classNames.dots)
      }, activeStep, onClick: (e) => e.preventDefault(), className: classNames == null ? void 0 : classNames.mobileStepper, sx: mergeSx(mobileStepperSx, sxs == null ? void 0 : sxs.mobileStepper), nextButton: /* @__PURE__ */ jsx(Button, { size: "small", className: clsx(classNames == null ? void 0 : classNames.buttons, classNames == null ? void 0 : classNames.nextBottom), style: {
        minWidth: "30px"
      }, onClick: this.handleNext, component: "div", children: theme.direction === "rtl" ? /* @__PURE__ */ jsx(default_1$7, {}) : /* @__PURE__ */ jsx(default_1$6, {}) }), backButton: /* @__PURE__ */ jsx(Button, { size: "small", className: clsx(classNames == null ? void 0 : classNames.buttons, classNames == null ? void 0 : classNames.backBottom), sx: mergeSx(sxs == null ? void 0 : sxs.buttons), style: {
        minWidth: "30px"
      }, onClick: this.handleBack, component: "div", children: theme.direction === "rtl" ? /* @__PURE__ */ jsx(default_1$6, {}) : /* @__PURE__ */ jsx(default_1$7, {}) }), onKeyDown: (e) => {
        if (e.keyCode === 39)
          this.handleNext(e);
        if (e.keyCode === 37)
          this.handleBack(e);
      } })
    ] });
  }
}
ImagesStepper.defaultProps = {
  autoPlayImages: true,
  showButtons: true,
  backCaption: false
};
const ImagesStepper$1 = (props) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx(ImagesStepper, { ...props, theme });
};
const imageStepper = "_imageStepper_cc18r_1";
const styles$1 = {
  imageStepper
};
function ModalImages({
  images,
  sourceImages,
  handleClose,
  open
}) {
  return /* @__PURE__ */ jsxs(MuiDialog, { open, onClose: handleClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", fullWidth: true, children: [
    /* @__PURE__ */ jsx(DialogActions, { children: /* @__PURE__ */ jsx(IconButton, { onClick: handleClose, color: "default", size: "small", children: /* @__PURE__ */ jsx(default_1$a, {}) }) }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(Box, { position: "relative", height: "250px", children: /* @__PURE__ */ jsx(ImagesStepper$1, { ...{
      sizeImages: SourceImageSizes.full,
      images,
      sourceImages,
      classNames: {
        imageStepper: styles$1.imageStepper
      },
      disableRipple: false,
      sxs: {
        mobileStepper: {
          padding: "0px"
        },
        swipeableView: {
          paddingBottom: "32px"
        }
      }
    } }) }) })
  ] });
}
const ImagesStepperDialog = (props) => {
  const {
    images,
    sourceImages
  } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ImagesStepper$1, { ...props, onClick: () => {
      handleClickOpen();
    } }),
    /* @__PURE__ */ jsx(ModalImages, { ...{
      images,
      sourceImages,
      open,
      handleClickOpen,
      handleClose
    } })
  ] });
};
const size = 26;
const rootAvatarSx = {
  width: (theme) => theme.spacing(size),
  height: (theme) => theme.spacing(size),
  color: (theme) => theme.palette.common.white,
  fontSize: (theme) => theme.typography.h2.fontSize
};
const textAvatarSx = {
  color: (theme) => theme.palette.common.white,
  marginLeft: (theme) => theme.spacing(size / 3.5),
  marginRight: (theme) => theme.spacing(size / 3.5)
};
const buttonAvatarSx = {
  padding: (theme) => theme.spacing(1, 0)
};
const rootAvatar = "_rootAvatar_1s3oc_1";
const mobileStepper = "_mobileStepper_1s3oc_7";
const textAvatar = "_textAvatar_1s3oc_18";
const buttonAvatar = "_buttonAvatar_1s3oc_22";
const dots = "_dots_1s3oc_35";
const buttons = "_buttons_1s3oc_42";
const nextBottom = "_nextBottom_1s3oc_48";
const backBottom = "_backBottom_1s3oc_51";
const gridDialog = "_gridDialog_1s3oc_54";
const dialogContent = "_dialogContent_1s3oc_58";
const styles = {
  rootAvatar,
  mobileStepper,
  textAvatar,
  buttonAvatar,
  dots,
  buttons,
  nextBottom,
  backBottom,
  gridDialog,
  dialogContent
};
function isValidElementType(value2) {
  return reactIsExports.isValidElementType(value2);
}
const ChangeAvatar = (props) => {
  const {
    t
  } = useTranslation("general");
  const {
    id,
    image,
    form,
    sourceImages,
    parseImages: parseImages$1 = parseImages,
    dialogProps,
    children,
    defaultIcon,
    formProps
  } = props;
  const images = props.images ?? (image && [image] || []);
  const [open, setOpen] = React.useState(false);
  const field = reactExports.useMemo(() => {
    if (!isValidElementType(form)) {
      const newField = new FieldBuilder({
        ...form,
        value: props.images && parseImages$1(props.images) || image
      });
      newField.globalProps = () => ({
        id,
        isCreating: false
      });
      return newField;
    }
  }, [form, id, image, parseImages$1, props.images]);
  const Form2 = isValidElementType(form) ? form : void 0;
  const loading = false;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Avatar, { color: "action", className: clsx(props.className, styles.rootAvatar), sx: mergeSx(rootAvatarSx, props.sx), children: [
      images && !!images.length && /* @__PURE__ */ jsx(ImagesStepperDialog, { ...{
        images,
        showButtons: true,
        getPalette: true,
        classNames: {
          mobileStepper: styles.mobileStepper,
          dots: styles.dots,
          buttons: styles.buttons,
          nextBottom: styles.nextBottom,
          backBottom: styles.backBottom
        },
        imageStyles: {
          width: "260px",
          height: "200px",
          display: "flex"
        },
        sourceImages
      } }) || defaultIcon,
      /* @__PURE__ */ jsx(Button, { className: clsx(styles.buttonAvatar), sx: buttonAvatarSx, fullWidth: true, onClick: () => {
        setOpen(true);
      }, children: /* @__PURE__ */ jsx(Typography, { variant: "caption", className: styles.textAvatar, sx: textAvatarSx, gutterBottom: true, noWrap: true, children: t("changeImage") }) })
    ] }),
    /* @__PURE__ */ jsx(DialogSimple, { maxWidth: "md", breakpoint: "xs", fullWidth: true, title: dialogProps && dialogProps.title || {
      message: ""
    }, dialogContentProps: {
      className: styles.dialogContent
    }, ...{
      open,
      loading,
      body: /* @__PURE__ */ jsx(Box, { className: styles.gridDialog, children: /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
        children,
        field && /* @__PURE__ */ jsx(Box, { p: 1, children: /* @__PURE__ */ jsx(Grid, { container: true, spacing: 4, children: /* @__PURE__ */ jsx(FieldRender, { ...{
          field,
          onChangeField: ({
            value: value2
          }) => {
            field == null ? void 0 : field.setValue(value2);
          }
        } }) }) }) || Form2 && /* @__PURE__ */ jsx(Form2, { ...{
          image: props.image,
          images,
          onCloseDialog: () => setOpen(false),
          ...typeof formProps === "object" ? formProps : {}
        } })
      ] }) }),
      onClose: () => setOpen(false),
      actions: [{
        color: "inherit",
        action: () => {
          setOpen(false);
        },
        title: "close"
      }]
    } })
  ] });
};
const getLabel = (label) => {
  let labelObject = !reactIsExports.isElement(label) && typeof label === "object" ? label : void 0;
  if (!labelObject)
    labelObject = typeof label === "string" || typeof label === "number" ? {
      value: label
    } : void 0;
  return labelObject;
};
const PaperAvatar = (props) => {
  var _a2;
  const {
    t
  } = useTranslation("general");
  const {
    label,
    showEdit,
    onClickEdit
  } = props;
  const labelObject = getLabel(label);
  const [labelState, setLabelState] = React.useState((labelObject == null ? void 0 : labelObject.value) || "");
  React.useEffect(() => {
    var _a3;
    setLabelState(((_a3 = getLabel(label)) == null ? void 0 : _a3.value) || "");
  }, [label]);
  const [editLabel, setEditLabel] = React.useState(false);
  return /* @__PURE__ */ jsxs(Paper, { className: props.className, ...props.paperProps, sx: mergeSx((_a2 = props.paperProps) == null ? void 0 : _a2.sx, {
    marginTop: 10
  }), children: [
    /* @__PURE__ */ jsxs(Grid, { container: true, sx: {
      position: "relative"
    }, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(ChangeAvatar, { ...props.avatarProps, sx: (theme) => ({
        boxShadow: theme.shadows[12],
        marginBottom: "0px",
        marginRight: "auto",
        marginTop: theme.spacing(2)
      }) }) }),
      showEdit && /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "flex-end", children: /* @__PURE__ */ jsx(Grid, { sx: (theme) => ({
        margin: theme.spacing(2, 2),
        [theme.breakpoints.up("sm")]: {
          top: 0,
          right: 0,
          position: "absolute",
          margin: theme.spacing(1)
        }
      }), children: /* @__PURE__ */ jsx(Button, { startIcon: /* @__PURE__ */ jsx(default_1$b, {}), color: "secondary", size: "large", onClick: onClickEdit, children: t("edit") }) }) })
    ] }),
    /* @__PURE__ */ jsxs(Box, { sx: {
      padding: (theme) => theme.spacing(0, 3, 3, 3)
    }, children: [
      /* @__PURE__ */ jsx(Grid, { container: true, alignItems: "center", wrap: "nowrap", children: !!labelObject && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: {
          flexGrow: 1,
          paddingTop: 1
        }, zeroMinWidth: true, children: !editLabel && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Typography, { variant: "h4", noWrap: true, children: [
          labelState,
          /* @__PURE__ */ jsx(Divider, {})
        ] }) }) || /* @__PURE__ */ jsx(TextField, { name: "name", InputProps: {
          autoFocus: true,
          sx: {
            input: {
              fontSize: "h4.fontSize",
              padding: "0px",
              lineHeight: 1.3,
              marginTop: "-7px"
            }
          }
        }, value: labelState, fullWidth: true, onChange: (e) => setLabelState(e.target.value), variant: "standard" }) }),
        labelObject.onSave && /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(IconButton, { size: "medium", onClick: () => {
          if (editLabel && (labelObject == null ? void 0 : labelObject.onSave)) {
            labelObject.onSave(labelState).catch(() => {
              labelObject && setLabelState(labelObject.value);
            });
          }
          setEditLabel(!editLabel);
          setLabelState(labelObject.value);
        }, children: !editLabel && /* @__PURE__ */ jsx(default_1$b, {}) || /* @__PURE__ */ jsx(default_1$c, {}) }) })
      ] }) || reactIsExports.isElement(label) && label }),
      /* @__PURE__ */ jsx(Box, { sx: (theme) => ({
        [theme.breakpoints.down("md")]: {
          marginTop: theme.spacing(2)
        },
        marginBottom: theme.spacing(4)
      }) }),
      props.children
    ] })
  ] });
};
var CloudUpload = {};
var _interopRequireDefault$5 = interopRequireDefaultExports;
Object.defineProperty(CloudUpload, "__esModule", {
  value: true
});
var default_1$5 = CloudUpload.default = void 0;
var _createSvgIcon$5 = _interopRequireDefault$5(requireCreateSvgIcon());
var _jsxRuntime$5 = require$$2;
var _default$5 = (0, _createSvgIcon$5.default)(/* @__PURE__ */ (0, _jsxRuntime$5.jsx)("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
}), "CloudUpload");
default_1$5 = CloudUpload.default = _default$5;
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2.push.apply(ownKeys2, Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
var invariant = function(condition, format, a, b2, c, d, e, f) {
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    } else {
      var args = [a, b2, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() {
          return args[argIndex++];
        })
      );
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
var browser = invariant;
const invariant$1 = /* @__PURE__ */ getDefaultExportFromCjs(browser);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var Manager = function() {
  function Manager2() {
    _classCallCheck(this, Manager2);
    _defineProperty(this, "refs", {});
  }
  _createClass(Manager2, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }
      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index2 = this.getIndex(collection, ref);
      if (index2 !== -1) {
        this.refs[collection].splice(index2, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;
      return this.refs[this.active.collection].find(function(_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);
  return Manager2;
}();
function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
var events = {
  end: ["touchend", "touchcancel", "mouseup"],
  move: ["touchmove", "mousemove"],
  start: ["touchstart", "mousedown"]
};
var vendorPrefix = function() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return "";
  }
  var styles2 = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"];
  var pre = (Array.prototype.slice.call(styles2).join("").match(/-(moz|webkit|ms)-/) || styles2.OLink === "" && ["", "o"])[1];
  switch (pre) {
    case "ms":
      return "ms";
    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : "";
  }
}();
function setInlineStyles(node, styles2) {
  Object.keys(styles2).forEach(function(key) {
    node.style[key] = styles2[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? "" : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? "" : "".concat(duration, "ms");
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}
function limit(min, max, value2) {
  return Math.max(min, Math.min(value2, max));
}
function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === "px") {
    return parseFloat(stringValue);
  }
  return 0;
}
function getElementMargin(element) {
  var style2 = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style2.marginBottom),
    left: getPixelValue(style2.marginLeft),
    right: getPixelValue(style2.marginRight),
    top: getPixelValue(style2.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    left: 0,
    top: 0
  };
  if (!node) {
    return void 0;
  }
  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop
  };
  if (node.parentNode === parent) {
    return nodeOffset;
  }
  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset, width = _ref.width, height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = "px";
  if (typeof lockOffset === "string") {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant$1(match !== null, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }
  invariant$1(isFinite(offsetX) && isFinite(offsetY), "lockOffset value should be a finite. Given %s", lockOffset);
  if (unit === "%") {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }
  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height, width = _ref2.width, lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  invariant$1(offsets.length === 2, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", lockOffset);
  var _offsets = _slicedToArray(offsets, 2), minLockOffset = _offsets[0], maxLockOffset = _offsets[1];
  return [getLockPixelOffset({
    height,
    lockOffset: minLockOffset,
    width
  }), getLockPixelOffset({
    height,
    lockOffset: maxLockOffset,
    width
  })];
}
function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ["overflow", "overflowX", "overflowY"];
  return properties.find(function(property) {
    return overflowRegex.test(computedStyle[property]);
  });
}
function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style2 = window.getComputedStyle(element);
  if (style2.display === "grid") {
    return {
      x: getPixelValue(style2.gridColumnGap),
      y: getPixelValue(style2.gridRowGap)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: "A",
  Button: "BUTTON",
  Canvas: "CANVAS",
  Input: "INPUT",
  Option: "OPTION",
  Textarea: "TEXTAREA",
  Select: "SELECT"
};
function cloneNode(node) {
  var selector = "input, textarea, select, canvas, [contenteditable]";
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);
  var clonedFields = _toConsumableArray(clonedNode.querySelectorAll(selector));
  clonedFields.forEach(function(field, i) {
    if (field.type !== "file") {
      field.value = fields[i].value;
    }
    if (field.type === "radio" && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }
    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext("2d");
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}
var AutoScroller = function() {
  function AutoScroller2(container, onScrollCallback) {
    _classCallCheck(this, AutoScroller2);
    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }
  _createClass(AutoScroller2, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }
      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;
      var translate = _ref.translate, minTranslate = _ref.minTranslate, maxTranslate = _ref.maxTranslate, width = _ref.width, height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container, scrollTop = _this$container.scrollTop, scrollLeft = _this$container.scrollLeft, scrollHeight = _this$container.scrollHeight, scrollWidth = _this$container.scrollWidth, clientHeight = _this$container.clientHeight, clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;
      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }
      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }
      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function() {
          _this.isAutoScrolling = true;
          var offset = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset.top;
          _this.container.scrollLeft += offset.left;
          _this.onScrollCallback(offset);
        }, 5);
      }
    }
  }]);
  return AutoScroller2;
}();
function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}
function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];
  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }
  if (closest(event.target, function(el) {
    return el.contentEditable === "true";
  })) {
    return true;
  }
  return false;
}
var propTypes = {
  axis: K.oneOf(["x", "y", "xy"]),
  contentWindow: K.any,
  disableAutoscroll: K.bool,
  distance: K.number,
  getContainer: K.func,
  getHelperDimensions: K.func,
  helperClass: K.string,
  helperContainer: K.oneOfType([K.func, typeof HTMLElement === "undefined" ? K.any : K.instanceOf(HTMLElement)]),
  hideSortableGhost: K.bool,
  keyboardSortingTransitionDuration: K.number,
  lockAxis: K.string,
  lockOffset: K.oneOfType([K.number, K.string, K.arrayOf(K.oneOfType([K.number, K.string]))]),
  lockToContainerEdges: K.bool,
  onSortEnd: K.func,
  onSortMove: K.func,
  onSortOver: K.func,
  onSortStart: K.func,
  pressDelay: K.number,
  pressThreshold: K.number,
  keyCodes: K.shape({
    lift: K.arrayOf(K.number),
    drop: K.arrayOf(K.number),
    cancel: K.arrayOf(K.number),
    up: K.arrayOf(K.number),
    down: K.arrayOf(K.number)
  }),
  shouldCancelStart: K.func,
  transitionDuration: K.number,
  updateBeforeSortStart: K.func,
  useDragHandle: K.bool,
  useWindowAsScrollContainer: K.bool
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps = {
  axis: "y",
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: "50%",
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  invariant$1(!(props.distance && props.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.");
}
function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }
  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }
  return finalizer(false, value);
}
var SortableContext = reactExports.createContext({
  manager: {}
});
function sortableContainer(WrappedComponent) {
  var _class2, _temp;
  var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    withRef: false
  };
  return _temp = _class2 = function(_React$Component) {
    _inherits(WithSortableContainer, _React$Component);
    function WithSortableContainer(props) {
      var _this;
      _classCallCheck(this, WithSortableContainer);
      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithSortableContainer).call(this, props));
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStart", function(event) {
        var _this$props = _this.props, distance = _this$props.distance, shouldCancelStart = _this$props.shouldCancelStart;
        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }
        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function(el) {
          return el.sortableInfo != null;
        });
        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo, index2 = _node$sortableInfo.index, collection = _node$sortableInfo.collection, disabled = _node$sortableInfo.disabled;
          if (disabled) {
            return;
          }
          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }
          _this.manager.active = {
            collection,
            index: index2
          };
          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }
          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function() {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nodeIsChild", function(node) {
        return node.sortableInfo.manager === _this.manager;
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMove", function(event) {
        var _this$props2 = _this.props, distance = _this$props2.distance, pressThreshold = _this$props2.pressThreshold;
        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;
          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnd", function() {
        _this.touched = false;
        _this.cancel();
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancel", function() {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;
        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }
          _this.manager.active = null;
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePress", function(event) {
        try {
          var active = _this.manager.getActive();
          var _temp6 = function() {
            if (active) {
              var _temp7 = function _temp72() {
                var index2 = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);
                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();
                var dimensions = _getHelperDimensions({
                  index: index2,
                  node: _node,
                  collection: _collection
                });
                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index2;
                _this.newIndex = index2;
                _this.axis = {
                  x: _axis.indexOf("x") >= 0,
                  y: _axis.indexOf("y") >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);
                if (_isKeySorting) {
                  _this.initialOffset = getPosition(_objectSpread({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }
                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: "border-box",
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: "none",
                  position: "fixed",
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });
                if (_isKeySorting) {
                  _this.helper.focus();
                }
                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: "hidden"
                  });
                }
                _this.minTranslate = {};
                _this.maxTranslate = {};
                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight
                  } : _this.containerBoundingRect, containerTop = _ref.top, containerLeft = _ref.left, containerWidth = _ref.width, containerHeight = _ref.height;
                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;
                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }
                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }
                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }
                if (_helperClass) {
                  _helperClass.split(" ").forEach(function(className) {
                    return _this.helper.classList.add(className);
                  });
                }
                _this.listenerNode = event.touches ? event.target : _this.contentWindow;
                if (_isKeySorting) {
                  _this.listenerNode.addEventListener("wheel", _this.handleKeyEnd, true);
                  _this.listenerNode.addEventListener("mousedown", _this.handleKeyEnd, true);
                  _this.listenerNode.addEventListener("keydown", _this.handleKeyDown);
                } else {
                  events.move.forEach(function(eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function(eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }
                _this.setState({
                  sorting: true,
                  sortingIndex: index2
                });
                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index2,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }
                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };
              var _this$props3 = _this.props, _axis = _this$props3.axis, _getHelperDimensions = _this$props3.getHelperDimensions, _helperClass = _this$props3.helperClass, _hideSortableGhost = _this$props3.hideSortableGhost, updateBeforeSortStart = _this$props3.updateBeforeSortStart, _onSortStart = _this$props3.onSortStart, _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node, _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;
              var _temp8 = function() {
                if (typeof updateBeforeSortStart === "function") {
                  _this._awaitingUpdateBeforeSortStart = true;
                  var _temp9 = _finallyRethrows(function() {
                    var index2 = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index2,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function() {
                    });
                  }, function(_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown)
                      throw _result;
                    return _result;
                  });
                  if (_temp9 && _temp9.then)
                    return _temp9.then(function() {
                    });
                }
              }();
              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();
          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function() {
          }) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSortMove", function(event) {
        var onSortMove = _this.props.onSortMove;
        if (typeof event.preventDefault === "function" && event.cancelable) {
          event.preventDefault();
        }
        _this.updateHelperPosition(event);
        _this.animateNodes();
        _this.autoscroll();
        if (onSortMove) {
          onSortMove(event);
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSortEnd", function(event) {
        var _this$props4 = _this.props, hideSortableGhost = _this$props4.hideSortableGhost, onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager, collection = _this$manager.active.collection, isKeySorting = _this$manager.isKeySorting;
        var nodes = _this.manager.getOrderedRefs();
        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener("wheel", _this.handleKeyEnd, true);
            _this.listenerNode.removeEventListener("mousedown", _this.handleKeyEnd, true);
            _this.listenerNode.removeEventListener("keydown", _this.handleKeyDown);
          } else {
            events.move.forEach(function(eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function(eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }
        _this.helper.parentNode.removeChild(_this.helper);
        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: "",
            visibility: ""
          });
        }
        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }
        _this.autoScroller.clear();
        _this.manager.active = null;
        _this.manager.isKeySorting = false;
        _this.setState({
          sorting: false,
          sortingIndex: null
        });
        if (typeof onSortEnd === "function") {
          onSortEnd({
            collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting,
            nodes
          }, event);
        }
        _this.touched = false;
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autoscroll", function() {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;
        if (disableAutoscroll) {
          _this.autoScroller.clear();
          return;
        }
        if (isKeySorting) {
          var translate = _objectSpread({}, _this.translate);
          var scrollX = 0;
          var scrollY = 0;
          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }
          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }
          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }
        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAutoScroll", function(offset) {
        _this.translate.x += offset.left;
        _this.translate.y += offset.top;
        _this.animateNodes();
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function(event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props, shouldCancelStart = _this$props5.shouldCancelStart, _this$props5$keyCodes = _this$props5.keyCodes, customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;
        var keyCodes = _objectSpread({}, defaultKeyCodes, customKeyCodes);
        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();
        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;
          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyLift", function(event) {
        var target = event.target;
        var node = closest(target, function(el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo, index2 = _node$sortableInfo2.index, collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index2,
          collection
        };
        _this.handlePress(event);
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyMove", function(shift) {
        var nodes = _this.manager.getOrderedRefs();
        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;
        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }
        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function(_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };
        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyDrop", function(event) {
        _this.handleSortEnd(event);
        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyEnd", function(event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isValidSortingTarget", function(event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function(el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });
      var manager = new Manager();
      validateProps(props);
      _this.manager = manager;
      _this.wrappedInstance = reactExports.createRef();
      _this.sortableContextValue = {
        manager
      };
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }
    _createClass(WithSortableContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function(containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === "function" ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function(key) {
            return events[key].forEach(function(eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });
          _this2.container.addEventListener("keydown", _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;
        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }
        if (!this.container) {
          return;
        }
        Object.keys(this.events).forEach(function(key) {
          return events[key].forEach(function(eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener("keydown", this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props, lockAxis = _this$props6.lockAxis, lockOffset = _this$props6.lockOffset, lockToContainerEdges = _this$props6.lockToContainerEdges, transitionDuration = _this$props6.transitionDuration, _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration, keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset = getPosition(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;
        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
            height: this.height,
            lockOffset,
            width: this.width
          }), _getLockPixelOffsets2 = _slicedToArray(_getLockPixelOffsets, 2), minLockOffset = _getLockPixelOffsets2[0], maxLockOffset = _getLockPixelOffsets2[1];
          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }
        if (lockAxis === "x") {
          translate.y = 0;
        } else if (lockAxis === "y") {
          translate.x = 0;
        }
        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }
        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props, transitionDuration = _this$props7.transitionDuration, hideSortableGhost = _this$props7.hideSortableGhost, onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta, windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;
        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index2 = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index2 > this.index && index2 <= prevIndex;
          var mustShiftForward = isKeySorting && index2 < this.index && index2 >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;
          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;
            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }
          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];
          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);
            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }
          if (index2 === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: "hidden"
              });
            }
            continue;
          }
          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }
          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index2 < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;
                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }
                if (this.newIndex === null) {
                  this.newIndex = index2;
                }
              } else if (mustShiftBackward || index2 > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);
                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }
                this.newIndex = index2;
              }
            } else {
              if (mustShiftBackward || index2 > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index2;
              } else if (mustShiftForward || index2 < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;
                if (this.newIndex == null) {
                  this.newIndex = index2;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index2 > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index2;
            } else if (mustShiftForward || index2 < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;
              if (this.newIndex == null) {
                this.newIndex = index2;
              }
            }
          }
          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }
        if (this.newIndex == null) {
          this.newIndex = this.index;
        }
        if (isKeySorting) {
          this.newIndex = prevIndex;
        }
        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;
        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex,
            isKeySorting,
            nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant$1(config.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call");
        return this.wrappedInstance.current;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer2 = this.props.getContainer;
        if (typeof getContainer2 !== "function") {
          return reactDomExports.findDOMNode(this);
        }
        return getContainer2(config.withRef ? this.getWrappedInstance() : void 0);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? this.wrappedInstance : null;
        return reactExports.createElement(SortableContext.Provider, {
          value: this.sortableContextValue
        }, reactExports.createElement(WrappedComponent, _extends$2({
          ref
        }, omit(this.props, omittedProps))));
      }
    }, {
      key: "helperContainer",
      get: function get() {
        var helperContainer = this.props.helperContainer;
        if (typeof helperContainer === "function") {
          return helperContainer();
        }
        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }
        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);
    return WithSortableContainer;
  }(reactExports.Component), _defineProperty(_class2, "displayName", provideDisplayName("sortableList", WrappedComponent)), _defineProperty(_class2, "defaultProps", defaultProps), _defineProperty(_class2, "propTypes", propTypes), _temp;
}
var propTypes$1 = {
  index: K.number.isRequired,
  collection: K.oneOfType([K.number, K.string]),
  disabled: K.bool
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class2, _temp;
  var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    withRef: false
  };
  return _temp = _class2 = function(_React$Component) {
    _inherits(WithSortableElement, _React$Component);
    function WithSortableElement() {
      var _getPrototypeOf2;
      var _this;
      _classCallCheck(this, WithSortableElement);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithSortableElement)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrappedInstance", reactExports.createRef());
      return _this;
    }
    _createClass(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }
          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }
        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props, collection = _this$props.collection, disabled = _this$props.disabled, index2 = _this$props.index;
        var node = reactDomExports.findDOMNode(this);
        node.sortableInfo = {
          collection,
          disabled,
          index: index2,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant$1(config.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call");
        return this.wrappedInstance.current;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? this.wrappedInstance : null;
        return reactExports.createElement(WrappedComponent, _extends$2({
          ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);
    return WithSortableElement;
  }(reactExports.Component), _defineProperty(_class2, "displayName", provideDisplayName("sortableElement", WrappedComponent)), _defineProperty(_class2, "contextType", SortableContext), _defineProperty(_class2, "propTypes", propTypes$1), _defineProperty(_class2, "defaultProps", {
    collection: 0
  }), _temp;
}
var FileCopy = {};
var _interopRequireDefault$4 = interopRequireDefaultExports;
Object.defineProperty(FileCopy, "__esModule", {
  value: true
});
var default_1$4 = FileCopy.default = void 0;
var _createSvgIcon$4 = _interopRequireDefault$4(requireCreateSvgIcon());
var _jsxRuntime$4 = require$$2;
var _default$4 = (0, _createSvgIcon$4.default)(/* @__PURE__ */ (0, _jsxRuntime$4.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), "FileCopy");
default_1$4 = FileCopy.default = _default$4;
const DefaultFileThumbnail = () => /* @__PURE__ */ jsx(
  Typography,
  {
    style: {
      width: "100%"
    },
    color: "textPrimary",
    align: "center",
    component: default_1$4,
    variant: "h1"
  }
);
class GetThumbnail extends React.PureComponent {
  render() {
    const {
      value: value2,
      invalid,
      classes,
      sx
    } = this.props;
    if (invalid) {
      return /* @__PURE__ */ jsx(DefaultFileThumbnail, {});
    }
    let type;
    let fileUrl;
    if (value2 instanceof File) {
      type = value2.type;
      fileUrl = URL.createObjectURL(value2);
    } else if (typeof value2 === "object") {
      fileUrl = value2.url;
      type = value2.file && value2.file.type || value2.extra && value2.extra.type;
    } else {
      fileUrl = value2;
    }
    switch (type) {
      case "image/png":
      case "image/jpeg":
      case "image/svg+xml":
        return /* @__PURE__ */ jsx(Box, { component: "img", sx, className: classes && classes.img, alt: "complex", src: fileUrl });
    }
    return /* @__PURE__ */ jsx(DefaultFileThumbnail, {});
  }
}
const imageSx = {
  width: "auto",
  height: 125,
  margin: (theme) => theme.spacing(0, 3, 3, 3),
  alignItems: "center",
  display: "flex"
};
const imgSx = {
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  WebkitUserSelect: "none",
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
  OUserSelect: "none",
  userSelect: "none",
  WebkitUserDrag: "none"
};
const boxSx = {
  backgroundColor: (theme) => theme.palette.background.default,
  position: "relative",
  overflow: "hidden",
  width: "100%",
  padding: "1em"
};
const gridTextSx = {
  padding: (theme) => theme.spacing(2, 0, 1, 0)
};
const textSx = {
  zIndex: (theme) => theme.zIndex.modal * 1.5,
  maxWidth: (theme) => `${theme.spacing(4)}%`
};
const FileItem = React.forwardRef(({
  value: value2,
  renderThumbnail,
  deleteFile,
  showFileName
}, ref) => {
  const invalid = value2.invalid || false;
  const RenderThumbnail = renderThumbnail;
  return /* @__PURE__ */ jsxs(Paper, { component: "div", sx: boxSx, ref, children: [
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 4, style: {
      position: "relative"
    }, children: [
      showFileName && /* @__PURE__ */ jsx(Grid, { item: true, container: true, justifyContent: "center", sx: gridTextSx, children: /* @__PURE__ */ jsx(Typography, { sx: textSx, variant: "subtitle1", noWrap: true, children: value2 instanceof File && value2.name || value2.file && value2.file.name || "" }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, container: true, justifyContent: "center", children: /* @__PURE__ */ jsx(Box, { sx: imageSx, children: /* @__PURE__ */ jsx(RenderThumbnail, { ...{
        value: value2,
        invalid,
        sx: imgSx
      } }) }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, container: true, justifyContent: "center", bottom: "5px", position: "absolute", children: /* @__PURE__ */ jsx(Fab, { size: "medium", color: "default", onClick: (e) => {
        e.preventDefault();
        !invalid && deleteFile();
      }, "should-cancel-start": "true", "aria-label": "delete", children: /* @__PURE__ */ jsx(default_1$d, {}) }) })
    ] }),
    invalid && /* @__PURE__ */ jsx("div", { style: {
      top: 0,
      left: 0,
      cursor: "not-allowed",
      width: "100%",
      height: "100%",
      position: "absolute",
      margin: 0,
      alignItems: "stretch",
      opacity: 0.7,
      background: "#ffc8c8"
    } })
  ] });
});
const gridFileSx = {
  cursor: "move",
  position: "relative"
};
const loadingSx = {
  position: "absolute",
  top: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: (theme) => theme.palette.background.default + "b0",
  zIndex: (theme) => theme.zIndex.modal + 1
};
class FileContainer extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      loading: false,
      position: {
        x: 0,
        y: 0
      },
      bounds: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    };
  }
  get gridBoolean() {
    const {
      multiple,
      length: lengthProps
    } = this.props;
    return multiple && lengthProps > 1;
  }
  get grids() {
    const gridBoolean = this.gridBoolean;
    const grids2 = gridBoolean ? {
      xs: 12,
      sm: 6,
      md: 3,
      lg: 6,
      xl: 6
    } : {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12
    };
    return grids2;
  }
  render() {
    const {
      value: value2,
      onDeleteFile,
      position: id,
      showFileName
    } = this.props;
    const {
      loading
    } = this.state;
    return /* @__PURE__ */ jsxs(Grid, { item: true, container: true, ...this.grids, sx: mergeSx(gridFileSx), children: [
      /* @__PURE__ */ jsx(Grow, { in: true, children: /* @__PURE__ */ jsx(FileItem, { renderThumbnail: GetThumbnail, deleteFile: () => {
        this.setState({
          loading: true
        });
        onDeleteFile(id).catch(() => {
          this.setState({
            loading: false
          });
        });
      }, showFileName, ...{
        value: value2
      } }) }),
      loading && /* @__PURE__ */ jsx(Box, { sx: loadingSx, children: /* @__PURE__ */ jsx(Loading$1, { size: 40 }) })
    ] });
  }
}
FileContainer.propTypes = {
  position: K.number.isRequired,
  value: K.exact({
    url: K.string.isRequired,
    invalid: K.oneOfType([K.bool, K.any]),
    file: K.oneOfType([K.instanceOf(File), K.any]),
    extra: K.any
  }).isRequired,
  multiple: K.bool,
  length: K.number.isRequired,
  onDeleteFile: K.func.isRequired
};
const SortableItem = sortableElement((props) => /* @__PURE__ */ jsx(FileContainer, { ...props }));
const SortableList = sortableContainer(({
  files,
  onDeleteFile,
  multiple,
  showFileNames
}) => {
  return /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: files.map((value2, index2) => {
    let key = `${index2}`;
    if (value2.url) {
      key = value2.url;
    } else if (value2.file) {
      const {
        name,
        lastModified,
        size: size2
      } = value2.file;
      key = `${name}-${lastModified}-${size2}`;
    }
    return /* @__PURE__ */ jsx(SortableItem, { index: index2, showFileName: showFileNames, ...{
      position: index2,
      onDeleteFile,
      length: files.length,
      multiple,
      value: value2
    } }, `file-${key}`);
  }) });
});
var _a;
var _class;
const GridFileHelper = styled("div")(({
  theme
}) => ({
  zIndex: theme.zIndex.modal + 1,
  cursor: "move",
  position: "relative"
}));
const defaultPropsExtra$1 = {
  subLabel: {
    message: "",
    ns: "",
    props: {}
  }
};
let ListFiles = observer(_class = (_a = class extends React.Component {
  constructor() {
    super(...arguments);
    this.gridRef = React.createRef();
    this.gridFileHelperRef = React.createRef();
    this.state = {
      backgroundColor: ""
    };
    this.preventDefault = (callback) => {
      return (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        callback && callback(evt);
      };
    };
    this.setBackgroundColor = (color = "") => {
      if (this.gridRef.current)
        this.gridRef.current.style.backgroundColor = color;
    };
  }
  get backgroundColor() {
    if (this.gridRef.current)
      return this.gridRef.current.style.backgroundColor || "";
    return "";
  }
  render() {
    const {
      label,
      ns,
      name,
      subLabel,
      changeField,
      openFileDialog,
      onDeleteFile,
      multiple,
      children,
      invalid,
      showFileNames
    } = this.props;
    const files = this.props.value;
    const isEmpty = !files.length;
    return /* @__PURE__ */ jsx(Paper, { elevation: 0, sx: {
      position: "relative"
    }, children: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(GridFileHelper, { ref: this.gridFileHelperRef }),
      /* @__PURE__ */ jsxs(Grid, { ref: this.gridRef, onDragEnter: this.preventDefault(), onDragLeave: this.preventDefault(() => this.setBackgroundColor()), onDragOver: this.preventDefault(() => this.setBackgroundColor("rgba(0, 0, 0, 0.08)")), onDrop: this.preventDefault((e) => {
        const {
          files: filesTransfer
        } = e.dataTransfer;
        if (filesTransfer && filesTransfer.length > 0) {
          changeField({
            files: filesTransfer
          });
          e.dataTransfer.clearData();
        }
        this.setBackgroundColor("");
      }), container: true, component: isEmpty ? ButtonBase : void 0, onClick: isEmpty ? openFileDialog : void 0, style: {
        minHeight: "170px",
        padding: "20px",
        backgroundColor: this.backgroundColor
      }, alignContent: "center", alignItems: "center", children: [
        !isEmpty && /* @__PURE__ */ jsx(SortableList, { ...{
          axis: "xy",
          onDeleteFile,
          multiple,
          files,
          showFileNames,
          onSortEnd: (sort) => {
            const {
              oldIndex,
              newIndex
            } = sort;
            this.props.onSort && this.props.onSort({
              changedFiles: {
                oldFile: files[oldIndex],
                newFile: files[newIndex]
              },
              sort
            });
          },
          shouldCancelStart: (e) => {
            if (e.target instanceof Element) {
              let target = e.target;
              let i = 0;
              const iMax = 4;
              while (target) {
                const shouldCancelStart = target.attributes.getNamedItem("should-cancel-start");
                if (shouldCancelStart && shouldCancelStart.nodeValue === "true") {
                  return true;
                } else {
                  if (i >= iMax)
                    break;
                  if (target.parentElement) {
                    target = target.parentElement;
                  } else {
                    break;
                  }
                }
                i++;
              }
            }
            return false;
          },
          helperContainer: () => this.gridFileHelperRef.current
        } }),
        isEmpty && /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, sx: {
          color: "text.disabled"
        }, children: [
          /* @__PURE__ */ jsx(Typography, { style: {
            width: "100%"
          }, align: "center", variant: "h2", children: /* @__PURE__ */ jsx(default_1$5, { fontSize: "inherit" }) }),
          /* @__PURE__ */ jsx(Typography, { align: "center", variant: "h5", children: /* @__PURE__ */ jsx(TransformLabel, { ...{
            label,
            ns,
            name
          } }) }),
          invalid && /* @__PURE__ */ jsx(Typography, { align: "center", variant: "h6", children: React.isValidElement(subLabel) ? subLabel : /* @__PURE__ */ jsx(TranslationAnimated, { ...{
            message: ``,
            ns,
            styles: {
              top: "-8px",
              position: "absolute"
            },
            ...typeof subLabel === "string" ? {
              message: subLabel
            } : subLabel
          } }) })
        ] })
      ] }),
      children
    ] }) });
  }
}, _a.defaultProps = defaultPropsExtra$1, _a)) || _class;
const Loading = () => {
  return /* @__PURE__ */ jsx(Box, { sx: {
    width: "100%",
    position: "absolute",
    background: (theme) => alpha(theme.palette.background.default, 0.7),
    zIndex: 9,
    height: "100%",
    overflow: "hidden",
    inset: "0",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  }, children: /* @__PURE__ */ jsx(CircularProgress, { variant: "indeterminate" }) });
};
var Events = /* @__PURE__ */ ((Events2) => {
  Events2["sort"] = "order";
  Events2["delete"] = "remove";
  Events2["add"] = "add";
  return Events2;
})(Events || {});
const defaultPropsExtra = {
  validateExtensions: true,
  validateAccept: true,
  multiple: true,
  subLabel: void 0
};
class FileInput extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.inputOpenFileRef = React.createRef();
    this.isOpen = false;
    this.state = {
      inputValue: ""
    };
    this.callbacks = [];
    this.openFileDialog = () => {
      if (this.inputOpenFileRef)
        this.inputOpenFileRef.current.click();
    };
    this.onAnyChange = (value2, event) => {
      var _a2, _b;
      return (_b = (_a2 = this.props).onAnyChange) == null ? void 0 : _b.call(_a2, value2, event);
    };
    this.changeField = async ({
      files: inputFiles
    }) => {
      if (inputFiles && inputFiles.length) {
        const files = Array.from(inputFiles);
        const newValues = [];
        for (const file of files) {
          if (this.value.some(({
            file: tempFile
          }) => {
            if (!tempFile)
              return false;
            const {
              type,
              name,
              size: size2
            } = tempFile;
            return type === file.type && name === file.name && size2 === file.size;
          }))
            continue;
          const fileValue = {
            url: URL.createObjectURL(file),
            file,
            invalid: false
          };
          if (!this.validateFile(file)) {
            fileValue.invalid = true;
          }
          newValues.push(fileValue);
        }
        const {
          onAdd
        } = this.props;
        onAdd == null ? void 0 : onAdd(newValues);
        this.onAnyChange(newValues, Events.add);
      }
    };
    this.onSort = async ({
      changedFiles,
      sort
    }) => {
      const {
        oldIndex,
        newIndex
      } = sort;
      const {
        onSort
      } = this.props;
      const oldValue = this.value;
      if (oldIndex === newIndex)
        return;
      const files = (this.props.arrayMove || arrayMoveImmutable)([...oldValue], oldIndex, newIndex);
      this.onAnyChange(files, Events.sort);
      onSort == null ? void 0 : onSort({
        changedFiles,
        sort
      });
    };
    this.deleteFile = async (index2) => {
      const file = this.value[index2];
      const {
        onDelete
      } = this.props;
      if (file && onDelete)
        await onDelete(file, index2);
      const value2 = [...this.value];
      value2.splice(index2, 1);
      this.onAnyChange(value2, Events.delete);
    };
    this.validateFile = (file) => {
      const {
        accept: acceptFiles
      } = this.props;
      const {
        validateExtensions,
        validateAccept,
        extensions
      } = this.extraProps;
      const accept = this.convertAccept(acceptFiles);
      const acceptValidate = () => !!(accept.find((a) => {
        if (!file.type)
          return false;
        return !!(file.type || "").match(new RegExp(`${a.replace(/(\.\*|\.|\*)$/, "")}.*`));
      }) || "*" === acceptFiles || !acceptFiles);
      const hasExtensions = () => {
        const regex = this.getRegex(extensions);
        if (regex)
          return regex.test(file.name.toLowerCase());
        return true;
      };
      if (validateExtensions && validateAccept) {
        return hasExtensions() && acceptValidate();
      }
      if (validateExtensions && !validateAccept) {
        return hasExtensions();
      }
      if (!validateExtensions && validateAccept) {
        return acceptValidate();
      }
      return true;
    };
  }
  get value() {
    const {
      value: value2
    } = this.props;
    return value2;
  }
  componentDidUpdate() {
    this.callbacks.forEach((callback) => callback());
    this.callbacks = [];
  }
  get extraProps() {
    return {
      ...defaultPropsExtra,
      ...this.props.extraProps
    };
  }
  getRegex(extensions) {
    let regExp = void 0;
    try {
      return new RegExp(`(${(extensions || []).join("|").replace(/\./g, "\\.")})$`);
    } catch (e) {
      regExp = void 0;
    }
    return regExp;
  }
  convertToRegex(param) {
    return new RegExp(`${param}(?=(?:[^"]*"[^"]*")*(?![^"]*"))`);
  }
  convertAccept(param) {
    let accept = [];
    if (typeof param === "string") {
      if (this.convertToRegex(",").test(param)) {
        accept = [...param.split(",")];
      } else if (this.convertToRegex("|").test(param)) {
        if (Array.isArray(param)) {
          accept = [...accept.join("").split("|")];
        } else {
          accept = [...param.split("|")];
        }
      } else {
        accept = [param];
      }
    } else if (param) {
      accept = param;
    }
    return accept;
  }
  getExtension(fileName) {
    return fileName.split(".").pop() || "";
  }
  render() {
    const {
      value: value2,
      errors,
      label,
      name,
      invalid,
      ns,
      loading,
      showFileNames
    } = this.props;
    const {
      multiple,
      subLabel
    } = this.extraProps;
    const accept = this.convertAccept(this.props.accept);
    const {
      inputValue
    } = this.state;
    const files = value2;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(Paper, { elevation: !files.length ? 1 : 0, style: {
        position: "relative",
        padding: "1em",
        borderBottom: invalid ? "2px solid #f44336" : void 0
      }, children: [
        /* @__PURE__ */ jsx(ListFiles, { ...{
          label,
          ns,
          name,
          value: files,
          multiple,
          subLabel,
          invalid,
          changeField: this.changeField,
          openFileDialog: this.openFileDialog,
          onDeleteFile: this.deleteFile,
          onSort: this.onSort,
          showFileNames
        }, children: !!loading && /* @__PURE__ */ jsx(Loading, {}) }),
        /* @__PURE__ */ jsxs(Grid, { container: true, onClick: () => this.openFileDialog(), children: [
          /* @__PURE__ */ jsx("input", { ref: this.inputOpenFileRef, onChange: ({
            target
          }) => {
            this.changeField(target);
          }, onClick: (e) => {
            if (!this.isOpen) {
              setTimeout(() => {
                this.isOpen = false;
              });
              this.isOpen = true;
            } else {
              e.preventDefault();
            }
          }, accept: accept.join(","), style: {
            display: "none"
          }, value: inputValue, multiple, type: "file" }),
          /* @__PURE__ */ jsx(Button, { variant: "outlined", component: "span", fullWidth: true, style: {
            marginTop: "1em"
          }, children: /* @__PURE__ */ jsx(MessagesTranslate, { ns: "general", i18nKey: "buttons.uploadFile" }) })
        ] })
      ] }),
      invalid && (errors == null ? void 0 : errors.length) && /* @__PURE__ */ jsx(AnimationGrow, { children: /* @__PURE__ */ jsx(FormHelperText, { error: true, variant: "outlined", style: {
        margin: "0",
        marginTop: "8px"
      }, component: "div", children: /* @__PURE__ */ jsx(RenderErrorsDefault, { ...{
        errors
      } }) }) })
    ] });
  }
}
FileInput.defaultProps = {
  extraProps: defaultPropsExtra,
  onAdd: null,
  onDelete: null
};
const PhotoUserInput = ({
  userId,
  field
}) => {
  const client2 = useApolloClient();
  const [{
    state,
    callback
  }, setOpen] = React.useState({
    state: false,
    callback: void 0
  });
  function handleClose(value2 = false) {
    callback && callback(value2);
    setOpen({
      state: false,
      callback: void 0
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(FileInput, { errors: field.errors, name: field.name, value: field.value, invalid: field.invalid, label: field.label, ns: field.ns, ...{
      onAdd: async (imagesOriginal) => {
        const images = [];
        imagesOriginal.forEach((value2) => {
          if (!(value2 instanceof File) && value2.file instanceof File) {
            images.push(value2.file);
          }
        });
        const files = await resizeImageWorker({
          images,
          height: 480
        });
        const result = await client2.mutate({
          mutation: CREATE_USER_PHOTO,
          variables: {
            userId,
            files
          }
        });
        if (result.data) {
          const value2 = result.data.createUserPhotos.map(({
            file,
            id,
            mimetype: type
          }) => ({
            url: createAPIImageRoute(`users/${file}`, {
              width: 400
            }),
            extra: {
              id,
              type
            }
          }));
          console.log(value2);
        }
      },
      onDelete: async (file) => {
        const updateData = [];
        if (!(file instanceof File) && file) {
          const userPhoto = file.extra && file.extra.id;
          await client2.mutate({
            mutation: DELETE_USER_PHOTO,
            update: (_a2, result) => updateData.push({
              params: result,
              deleteUserPhotoUpdate: deleteUserPhotoUpdate({
                userPhoto
              })
            }),
            variables: {
              id: userPhoto,
              userId
            }
          });
          for (const data of updateData) {
            if (updateData)
              data.deleteUserPhotoUpdate(client2, data.params);
          }
        }
      },
      onSort: async ({
        changedFiles,
        sort
      }) => {
        const {
          newFile,
          oldFile
        } = changedFiles;
        if (!(newFile instanceof File) && !(oldFile instanceof File) && newFile.extra && oldFile.extra) {
          const extraNewFile = newFile.extra;
          const extraOldFile = oldFile.extra;
          const res = await client2.mutate({
            mutation: ORDER_USER_PHOTO,
            variables: {
              userId,
              newIndex: extraNewFile.id || "",
              oldIndex: extraOldFile.id || ""
            }
          }).then((response) => {
            const {
              data
            } = response;
            if (!data || data && !data.orderUserPhoto)
              throw new Error("");
            return response;
          });
          sortUserPhoto({
            sort
          })(client2, res);
        }
      }
    } }),
    /* @__PURE__ */ jsxs(MuiDialog, { open: state, onClose: () => handleClose(false), "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", children: [
      /* @__PURE__ */ jsx(DialogTitle, { id: "alert-dialog-title", children: "Use Google's location service?" }),
      /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(DialogContentText, { id: "alert-dialog-description", children: "Desea comprimir la imagen, esto va a tomar tiempo pero se optimiza su conexion." }) }),
      /* @__PURE__ */ jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsx(Button, { onClick: () => {
          handleClose(false);
        }, color: "primary", children: "Disagree" }),
        /* @__PURE__ */ jsx(Button, { onClick: () => {
          handleClose(true);
        }, color: "primary", children: "Agree" })
      ] })
    ] })
  ] });
};
const formImages = () => ({
  name: "files",
  label: "files",
  type: "component",
  component: observer(({
    field
  }) => {
    const {
      id,
      isCreating
    } = getGlobalProps(field.globalProps);
    const fileInputProps = {
      sort: (a, b2) => {
        if (!(a instanceof File) && !(b2 instanceof File)) {
          if (a.extra && b2.extra && typeof a.extra.position === "number" && typeof b2.extra.position === "number") {
            return a.extra.position - b2.extra.position;
          }
        }
      },
      arrayMove: (files, from, to) => {
        return arrayMoveImmutable(files, from, to).map((file, key) => !(file instanceof File) ? {
          ...file,
          extra: {
            ...file.extra,
            position: key
          }
        } : file);
      },
      extraProps: {
        multiple: true
      }
    };
    return /* @__PURE__ */ jsxs(Grid, { item: true, xs: true, children: [
      isCreating && /* @__PURE__ */ jsx(ObserverComponent, { children: () => /* @__PURE__ */ jsx(FileInput, { errors: field.errors, name: field.name, value: field.value, invalid: field.invalid, label: field.label, ns: field.ns, ...{
        ...fileInputProps
      } }) }),
      !isCreating && !!id && /* @__PURE__ */ jsx(PhotoUserInput, { ...{
        userId: id,
        field
      } })
    ] });
  }),
  value: []
});
const AccountPage = () => {
  const {
    loading,
    data,
    refetch
  } = useQuery(GET_ME_COMPLETE);
  const subscription = React.useRef();
  const user = data && data.me && data.me;
  if (!user) {
    subscription.current = EventEmitterErrors.on(ApolloErrors.UNAUTHENTICATED, (open) => {
      subscription.current && subscription.current();
      if (!open)
        refetch();
    });
    return loading ? /* @__PURE__ */ jsx(LoadingPage, {}) : null;
  }
  subscription.current && subscription.current();
  const {
    id,
    images,
    lastName,
    firstName,
    email,
    roles
  } = user;
  const fullName = `${firstName} ${lastName}`;
  return /* @__PURE__ */ jsxs(PaperAvatar, { avatarProps: {
    id,
    images: images || [],
    form: formImages(),
    sourceImages: (path) => createAPIImageRoute(`users/${path}`, {
      width: 700
    }),
    parseImages: (photos) => parseImages(photos, (path) => createAPIImageRoute(`users/${path}`, {
      width: 200
    })),
    defaultIcon: /* @__PURE__ */ jsx(Box, { sx: {
      display: "flex",
      fontSize: (theme) => theme.typography.fontSize * 10
    }, children: /* @__PURE__ */ jsx(default_1$e, { fontSize: "inherit" }) })
  }, label: fullName, sx: {
    height: (theme) => `calc(100% - ${theme.spacing(10)})`
  }, children: [
    /* @__PURE__ */ jsx(Grid, { container: true, alignItems: "center", spacing: 2, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 12, md: "auto" }) }),
    /* @__PURE__ */ jsx("h3", { children: fullName }),
    /* @__PURE__ */ jsx("h3", { children: email }),
    roles && !!roles.length && /* @__PURE__ */ jsx(List, { children: roles.map(({
      id: key,
      text,
      description
    }) => /* @__PURE__ */ jsxs(ListItem$1, { children: [
      /* @__PURE__ */ jsx(ListItemAvatar$1, { children: /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(default_1$8, { fontSize: "small" }) }) }),
      /* @__PURE__ */ jsx(ListItemText, { primary: text, secondary: description })
    ] }, key)) })
  ] });
};
function parsePx(param) {
  return Number.parseInt(param) * 14;
}
const sizes = {
  xs: {
    size: parsePx("4em"),
    breakpoint: 6
  },
  sm: {
    size: parsePx("5em"),
    breakpoint: 6
  },
  md: {
    size: parsePx("10em"),
    breakpoint: 6
  },
  lg: {
    size: parsePx("12em"),
    breakpoint: 4
  },
  xl: {
    size: parsePx("20em"),
    breakpoint: 4
  }
};
const grids = ({
  width,
  quanity
}) => [...Array(quanity).fill({
  width: "100%",
  height: `${sizes[width].size}px`,
  xs: sizes.xs.breakpoint,
  sm: sizes.sm.breakpoint,
  md: sizes.md.breakpoint,
  lg: sizes.lg.breakpoint,
  xl: sizes.xl.breakpoint
})];
function getHeight() {
  return document.documentElement.scrollHeight;
}
function getQuanity({
  breakpoint,
  size: size2,
  spacing,
  height,
  minHeight
}) {
  if (typeof size2 === "number" && height) {
    const mR = (num) => Math.round(num);
    const result = mR(mR((height < 400 ? 400 : height - (size2 + spacing * spacing * 2)) / size2) * (12 / breakpoint));
    return result;
  }
  return 3 * (12 / breakpoint);
}
class GridsSkeleton extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      a: false,
      height: getHeight()
    };
    this.updateHeigth = () => {
      this.setState({
        height: getHeight()
      });
    };
  }
  UNSAFE_componentWillMount() {
    window.addEventListener("resize", this.updateHeigth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeigth);
  }
  render() {
    const {
      height: windowHeight
    } = this.state;
    const {
      spacing,
      width: windowWidth,
      skeleton,
      minHeight,
      sx,
      skeletonProps
    } = this.props;
    let quanity = 1;
    ["lg", "md", "sm", "xs", "xl"].forEach((breakpoint) => {
      if (breakpoint === windowWidth) {
        quanity = getQuanity({
          ...sizes[breakpoint],
          spacing,
          height: windowHeight,
          minHeight
        });
      }
    });
    quanity = getQuanity({
      ...sizes[windowWidth],
      spacing,
      height: windowHeight,
      minHeight
    });
    const AllGrids = grids({
      quanity,
      width: windowWidth
    });
    const keyWidth = windowWidth;
    return /* @__PURE__ */ jsx(Fragment, { children: AllGrids.map(({
      width,
      height,
      ...rest
    }, key) => {
      return /* @__PURE__ */ reactExports.createElement(Grid, { item: true, ...rest, key: keyWidth + key }, /* @__PURE__ */ jsx(Box, { className: skeleton, style: {
        width,
        height
      }, ...skeletonProps, sx: mergeSx(skeletonProps == null ? void 0 : skeletonProps.sx, sx) }), /* @__PURE__ */ jsx(Box, { className: skeleton, sx, style: {
        width: "80%",
        height: "1em"
      } }), /* @__PURE__ */ jsx(Box, { className: skeleton, sx, style: {
        width: "100%",
        height: "1em"
      } }), /* @__PURE__ */ jsx(Box, { className: skeleton, sx, style: {
        width: "100%",
        height: "1em"
      } }));
    }) });
  }
}
const skeletonAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`;
const skeletonSX = {
  display: "inline-block",
  background: (theme) => {
    const background = theme.palette.background;
    return `linear-gradient(-90deg, ${background.paper} 0%, ${background.default} 50%, ${background.paper} 100%)`;
  },
  backgroundSize: "400% 400%",
  animation: `${skeletonAnimation} 1.2s ease-in-out infinite`,
  borderRadius: 5
};
const SkeletonFarms = () => {
  const theme = useTheme();
  const width = useWidth();
  const spacing = 4;
  return /* @__PURE__ */ jsx(Box, { sx: {
    backgroundColor: "background.default",
    flexGrow: 1,
    paddingBottom: 0,
    height: "100vh",
    overflow: "auto",
    display: "flex",
    flexDirection: "column"
  }, children: /* @__PURE__ */ jsx(Box, { position: "relative", style: {
    flex: "1",
    overflow: "hidden"
  }, children: /* @__PURE__ */ jsxs(Grid, { container: true, children: [
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(Box, { width: "30%", height: "2em", sx: skeletonSX }),
      /* @__PURE__ */ jsx(Divider, { variant: "fullWidth" }),
      /* @__PURE__ */ jsx(Box, { m: 2 })
    ] }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Grid, { container: true, spacing, sx: {
      position: "relative",
      "&:before": {
        content: '""',
        bottom: "10px",
        position: "absolute",
        display: "block",
        marginTop: "-150px",
        height: "70%",
        width: "100%",
        backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0) 0,${theme.palette.background.default} 100%)`
      }
    }, children: /* @__PURE__ */ jsx(GridsSkeleton, { sx: skeletonSX, width, spacing, minHeight: theme.mixins.toolbar.minHeight }) }) })
  ] }) }) });
};
const FarmFieldsContext = React.createContext(/* @__PURE__ */ Object.create(null));
const FarmFieldsProvider = ({
  children,
  fieldsRender,
  isCreating: isCreatingBase = true
}) => {
  const [isCreating, setIsCreating] = React.useState(isCreatingBase);
  return /* @__PURE__ */ jsx(FarmFieldsContext.Provider, { value: {
    fieldsRender,
    isCreating,
    setIsCreating
  }, children });
};
const useFarmFields = () => React.useContext(FarmFieldsContext);
const FarmFieldsConsumer = FarmFieldsContext.Consumer;
const Form = (props) => {
  const [{
    loading
  }, setState] = React.useState({
    loading: false
  });
  const {
    t
  } = useTranslation("farms");
  const {
    fieldsRender,
    isCreating
  } = useFarmFields();
  const {
    open,
    farm,
    handleDialog,
    loading: loadingProps
  } = props;
  const {
    ns,
    validate,
    fields,
    onChangeField,
    hasErrors,
    getValues,
    restore
  } = fieldsRender;
  const [createFarmMutation, {
    loading: loadingCreate
  }] = useMutation(CREATE_FARM, {
    update: (proxy, res) => {
      createFarm(proxy, res);
      handleDialog({
        open: false
      });
      restore();
    },
    onError: (err) => {
      console.log(err);
    }
  });
  const [editFarmMutation, {
    loading: loadingEdit
  }] = useMutation(EDIT_FARM, {
    onCompleted: () => {
      handleDialog({
        open: false
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
  const loadingAll = loading || loadingProps || loadingCreate || loadingEdit;
  const globalProps = () => ({
    id: farm == null ? void 0 : farm.id,
    isCreating
  });
  return /* @__PURE__ */ jsx(DialogSimple, { ns: "farms", maxWidth: "md", breakpoint: "xs", fullWidth: true, title: {
    state: true,
    message: "title"
  }, ...{
    open,
    loading: loadingAll,
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", color: "textPrimary", gutterBottom: true, children: isCreating ? t("newFarm") : t("editFarm") }),
      /* @__PURE__ */ jsx(Box, { sx: {
        padding: 1
      }, children: /* @__PURE__ */ jsx(Grid, { container: true, spacing: 4, children: /* @__PURE__ */ jsx(FieldsRender, { ns, ...{
        onChangeField,
        validate,
        fields,
        globalProps
      } }) }) })
    ] }),
    onClose: () => {
      handleDialog({
        open: false
      });
      !isCreating && fieldsRender.restore();
    },
    actions: [{
      color: "inherit",
      action: () => {
        handleDialog({
          open: false
        });
        !isCreating && fieldsRender.restore();
      },
      title: /* @__PURE__ */ jsx(MessagesTranslate, { i18nKey: "close", ns: "general" })
    }, {
      disabled: loadingAll,
      title: /* @__PURE__ */ jsx(MessagesTranslate, { i18nKey: "save", ns: "general" }),
      color: "primary",
      action: async () => {
        if (!await hasErrors({
          setErrors: true
        })) {
          const values = {
            name: "",
            files: [],
            users: [],
            ...getValues()
          };
          const {
            name,
            users
          } = values;
          const images = [];
          for (const {
            file
          } of values.files) {
            if (file instanceof File) {
              images.push(file);
            }
          }
          if (isCreating) {
            setState({
              loading: true
            });
            const files = await resizeImageWorker({
              images,
              height: 480
            });
            setState({
              loading: false
            });
            createFarmMutation({
              variables: {
                name,
                files,
                users: users.map(({
                  user,
                  permissions
                }) => ({
                  user: user.id,
                  permissions
                }))
              },
              optimisticResponse: {
                __typename: "Mutation",
                createFarm: {
                  id: -Date.now(),
                  name: values.name,
                  images: files.map((file, position) => ({
                    __typename: "FarmPhoto",
                    id: -Date.now(),
                    mimetype: file.type,
                    position: position + 1,
                    file: window.URL.createObjectURL(file)
                  })),
                  users: [],
                  farmCategories: farmCategoriesInit,
                  bovines: [],
                  __typename: "Farm",
                  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
                  updatedAt: (/* @__PURE__ */ new Date()).toISOString()
                }
              }
            });
          } else {
            farm && editFarmMutation({
              variables: {
                id: farm.id,
                name
              },
              optimisticResponse: {
                __typename: "Mutation",
                editFarm: {
                  id: farm.id,
                  name: values.name,
                  images: [],
                  users: [],
                  farmCategories: farmCategoriesInit,
                  bovines: [],
                  __typename: "Farm",
                  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
                  updatedAt: (/* @__PURE__ */ new Date()).toISOString()
                }
              }
            });
          }
        }
      }
    }]
  } });
};
const useFarmUsers = ({
  stepperRef,
  field
}) => {
  const [state, setState] = reactExports.useState({
    idsLoading: []
  });
  const onChange = reactExports.useCallback((value2) => {
    field.setValue(value2);
  }, [field]);
  const scrollElement = reactExports.useCallback((element, time = 50) => {
    setTimeout(() => {
      element.current && element.current.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }, time);
  }, []);
  const save = reactExports.useCallback(async ({
    user
  }) => {
    var _a2;
    const {
      globalProps
    } = field;
    const {
      isCreating,
      id: farmId
    } = getGlobalProps(globalProps);
    const permissions = null;
    const id = +/* @__PURE__ */ new Date();
    const valueTemp = [...field.value];
    const value2 = [...valueTemp].concat({
      id,
      permissions,
      user
    });
    scrollElement(stepperRef);
    onChange(value2);
    if (!isCreating) {
      setState((current) => ({
        ...current,
        idsLoading: [...current.idsLoading, id]
      }));
      await ((_a2 = client) == null ? void 0 : _a2.mutate({
        mutation: CREATE_FARM_USER,
        variables: {
          farmId,
          farmUser: {
            permissions,
            user: user.id
          }
        }
      }).then(({
        data
      }) => {
        if (data)
          onChange(value2.map((obj) => obj.id !== id ? obj : {
            ...obj,
            id: data.createFarmUser.id
          }));
      }).catch(() => {
        onChange(valueTemp);
      }));
      setState((current) => ({
        ...current,
        idsLoading: current.idsLoading.filter((idLoading) => idLoading !== id)
      }));
    }
  }, [field, onChange, scrollElement, stepperRef]);
  const deleteUser = reactExports.useCallback(async (key) => {
    var _a2;
    const {
      globalProps
    } = field;
    const value2 = [...field.value];
    let error = false;
    const {
      isCreating,
      id: farmId
    } = getGlobalProps(globalProps);
    if (!isCreating) {
      const id = value2[key] && value2[key].id;
      if (id) {
        setState((current) => ({
          ...current,
          idsLoading: [...current.idsLoading, id]
        }));
        await ((_a2 = client) == null ? void 0 : _a2.mutate({
          mutation: DELETE_FARM_USER,
          variables: {
            farmId,
            id
          }
        }).catch(() => {
          error = true;
        }));
        setState((current) => ({
          ...current,
          idsLoading: current.idsLoading.filter((idLoading) => idLoading !== id)
        }));
      }
    }
    if (!error) {
      value2.splice(key, 1);
      onChange(value2);
    }
  }, [field, onChange]);
  return {
    state,
    setState,
    onChange,
    save,
    deleteUser,
    scrollElement
  };
};
const listItemLoadingSx = {
  position: "absolute",
  inset: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "action.hover"
};
function FarmUser({
  user: {
    firstName,
    lastName,
    email,
    image
  },
  loading,
  onDelete
}) {
  return /* @__PURE__ */ jsxs(Box, { position: "relative", children: [
    /* @__PURE__ */ jsxs(ListItem$1, { children: [
      /* @__PURE__ */ jsx(ListItemAvatar$1, { children: /* @__PURE__ */ jsx(Avatar, { src: (image == null ? void 0 : image.file) && `users/${image.file}` || void 0 }) }),
      /* @__PURE__ */ jsx(ListItemText, { primaryTypographyProps: {
        noWrap: true
      }, primary: email, secondary: `${firstName} ${lastName}` }),
      /* @__PURE__ */ jsx(ListItemSecondaryAction, { children: /* @__PURE__ */ jsx(IconButton, { "aria-label": "Delete", onClick: () => onDelete(), size: "large", children: /* @__PURE__ */ jsx(default_1$d, {}) }) })
    ] }),
    loading && /* @__PURE__ */ jsx(Box, { sx: listItemLoadingSx, children: /* @__PURE__ */ jsx(Loading$1, {}) })
  ] });
}
var Person = {};
var _interopRequireDefault$3 = interopRequireDefaultExports;
Object.defineProperty(Person, "__esModule", {
  value: true
});
var default_1$3 = Person.default = void 0;
var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
var _jsxRuntime$3 = require$$2;
var _default$3 = (0, _createSvgIcon$3.default)(/* @__PURE__ */ (0, _jsxRuntime$3.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
default_1$3 = Person.default = _default$3;
const filterUser = createFilterOptions({
  stringify: ({
    email,
    phoneNumber
  }) => [email, phoneNumber].map((a) => a || "").join(" ")
});
const UserSearch = (props) => {
  const {
    t
  } = useTranslation("general");
  const [inputValue, setState] = React.useState("");
  const emailValidator = (email) => /\b[\w.-]+@/.test(String(email).toLowerCase());
  const {
    value: value2,
    onChange
  } = props;
  const validation = emailValidator(inputValue) || inputValue.length > 6;
  const res = useQuery(USERS_BY_EMAIL_OR_PHONE, {
    skip: !validation,
    variables: {
      email: inputValue,
      phoneNumber: inputValue,
      pagination: {
        page: 0,
        limit: 10
      }
    }
  });
  const edges = res && res.data && res.data.users && res.data.users.edges || [];
  return /* @__PURE__ */ jsx(Autocomplete, { renderInput: (params) => /* @__PURE__ */ jsx(TextField, { ...params, label: t("email_phone", {}), variant: "outlined", fullWidth: true, autoComplete: "off", value: inputValue }), onInputChange: (e) => {
    if ((e == null ? void 0 : e.target) instanceof HTMLInputElement) {
      setState(e.target.value);
    }
  }, clearOnBlur: false, getOptionLabel: ({
    email,
    phoneNumber
  }) => `${email || phoneNumber}`, options: props.filterOptions ? props.filterOptions(edges) : edges, onChange: (_event, option) => {
    onChange(option);
  }, value: value2, isOptionEqualToValue: (option, currentValue) => option.id === currentValue.id, filterOptions: filterUser });
};
function AddUser({
  field,
  onSave
}) {
  const stepperRef = React.useRef(null);
  const [expanded, setExpanded] = reactExports.useState(false);
  const [user, setUser] = React.useState(null);
  const filterOptions = reactExports.useCallback((options) => {
    const {
      value: value2
    } = field;
    return options.filter((option) => !(value2 == null ? void 0 : value2.some(({
      user: {
        email
      }
    }) => option.email === email)));
  }, [field]);
  return /* @__PURE__ */ jsxs(Accordion$1, { TransitionProps: {
    timeout: 50
  }, expanded, children: [
    /* @__PURE__ */ jsxs(AccordionSummary$1, { expandIcon: /* @__PURE__ */ jsx(default_1$f, {}), onClick: () => {
      setExpanded(!expanded);
    }, children: [
      /* @__PURE__ */ jsx(Icon$1, { color: "action", children: /* @__PURE__ */ jsx(default_1$3, {}) }),
      /* @__PURE__ */ jsx(Typography, { style: {
        width: "100%"
      }, display: "inline", noWrap: true, align: "center", children: /* @__PURE__ */ jsx(MessagesTranslate, { ns: "farms", i18nKey: "addUser" }) })
    ] }),
    /* @__PURE__ */ jsx(AccordionDetails$1, { ref: stepperRef, sx: {
      padding: 3
    }, children: /* @__PURE__ */ jsxs(Grid, { container: true, justifyContent: "center", spacing: 2, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(UserSearch, { onChange: (option) => {
        setUser(option);
      }, value: user, filterOptions }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(Button, { variant: "contained", disabled: !user, onClick: () => {
        if (user) {
          onSave(user);
          setUser(null);
          setExpanded(false);
        }
      }, children: /* @__PURE__ */ jsx(MessagesTranslate, { ns: "general", i18nKey: "save" }) }) })
    ] }) })
  ] });
}
const FarmUsers = (props) => {
  const {
    field
  } = props;
  const stepperRef = React.useRef(null);
  const listRef = React.useRef(null);
  const {
    state,
    deleteUser,
    scrollElement,
    save
  } = useFarmUsers({
    field,
    stepperRef
  });
  const {
    idsLoading
  } = state;
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Paper, { elevation: 0, children: /* @__PURE__ */ jsxs(Grid, { container: true, children: [
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, ref: listRef, children: !!field.value.length && /* @__PURE__ */ jsx(List, { children: field.value.map(({
      id,
      user
    }, key) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx(FarmUser, { user, loading: idsLoading.includes(id), onDelete: () => {
        deleteUser(key);
      } }),
      key < field.value.length - 1 && /* @__PURE__ */ jsx(Divider, { variant: "inset", component: "small" })
    ] }, id)) }) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(AddUser, { field, onSave: (user) => {
      save({
        user
      });
      scrollElement(stepperRef);
    } }) })
  ] }) }) });
};
const useOnAdd = ({
  farmId,
  onChange,
  value: value2
}) => {
  const client2 = useApolloClient();
  const onAdd = reactExports.useCallback(async (imagesOriginal) => {
    const newValue = [...value2 || [], ...imagesOriginal];
    onChange(newValue, Events.add);
    const images = [];
    imagesOriginal.forEach((imageOriginal) => {
      if (!(imageOriginal instanceof File) && imageOriginal.file instanceof File) {
        images.push(imageOriginal.file);
      }
    });
    const files = await resizeImageWorker({
      images,
      height: 480
    });
    await client2.mutate({
      mutation: CREATE_FARM_PHOTO,
      variables: {
        farmId,
        files
      },
      update: (proxy, data) => {
        createFarmPhotosUpdate(farmId)(proxy, data);
      }
    });
  }, [client2, farmId, onChange, value2]);
  return {
    onAdd
  };
};
const useOnDelete = ({
  farmId,
  onChange,
  value: value2
}) => {
  const client2 = useApolloClient();
  const onDelete = async (file, index2) => {
    const newValue = [...value2];
    newValue.splice(index2, 1);
    onChange(newValue, Events.delete);
    const farmPhoto = file.extra && file.extra.id;
    if (!farmPhoto)
      return;
    try {
      await client2.mutate({
        mutation: DELETE_FARM_PHOTO,
        update: (proxy, result) => deleteFarmPhotoUpdate({
          farmId,
          farmPhoto
        })(proxy, result),
        variables: {
          id: farmPhoto,
          farmId
        }
      });
    } catch (e) {
      onChange(value2, Events.delete);
    }
  };
  return {
    onDelete
  };
};
const useOnSort = ({
  farmId,
  onChange,
  value: value2
}) => {
  const client2 = useApolloClient();
  const onSort = async ({
    changedFiles,
    sort
  }) => {
    try {
      const {
        newFile,
        oldFile
      } = changedFiles;
      if (!(newFile instanceof File) && !(oldFile instanceof File) && newFile.extra && oldFile.extra) {
        const extraNewFile = newFile.extra;
        const extraOldFile = oldFile.extra;
        const newIndexExtra = {
          id: extraNewFile.id || ""
        };
        const oldIndexExtra = {
          id: extraOldFile.id || ""
        };
        const newValue = arrayMoveImmutable(value2, sort.oldIndex, sort.newIndex);
        onChange(newValue, Events.delete);
        await client2.mutate({
          mutation: ORDER_FARM_PHOTO,
          variables: {
            farmId,
            newIndex: newIndexExtra,
            oldIndex: oldIndexExtra
          },
          update: async (proxy, data) => {
            sortFarmPhoto({
              farmId,
              sort
            })(proxy, data);
          }
        });
      }
    } catch {
      onChange(value2, Events.delete);
    }
  };
  return {
    onSort
  };
};
const ImagesInput = observer(({
  farmId,
  field,
  onAnyChange
}) => {
  const [loading, setLoading] = React.useState(false);
  const {
    onAdd
  } = useOnAdd({
    farmId,
    onChange: onAnyChange,
    value: field.value
  });
  const {
    onDelete
  } = useOnDelete({
    farmId,
    onChange: onAnyChange,
    value: field.value
  });
  const {
    onSort
  } = useOnSort({
    farmId,
    onChange: onAnyChange,
    value: field.value
  });
  return /* @__PURE__ */ jsx(FileInput, { loading, errors: field.errors, name: field.name, value: field.value, invalid: field.invalid, label: field.label, ns: field.ns, accept: "image/*", onAdd: async (files) => {
    setLoading(true);
    try {
      await onAdd(files);
    } finally {
      setLoading(false);
    }
  }, onDelete: async (file, index2) => {
    setLoading(true);
    try {
      await onDelete(file, index2);
    } finally {
      setLoading(false);
    }
  }, onSort: async (event) => {
    setLoading(true);
    try {
      await onSort(event);
    } finally {
      setLoading(false);
    }
  } });
});
const extraProps = {
  subLabel: {
    message: "filesSubLabel"
  },
  validateAccept: true,
  accept: "image/*",
  multiple: true,
  sort: (a, b2) => {
    if (!(a instanceof File) && !(b2 instanceof File)) {
      if (a.extra && b2.extra && typeof a.extra.position === "number" && typeof b2.extra.position === "number") {
        return a.extra.position - b2.extra.position;
      }
    }
  }
};
const FarmImagesForm = observer(({
  id,
  isCreating,
  onAnyChange,
  field
}) => {
  const {
    sort,
    multiple
  } = {
    ...extraProps
  };
  if (isCreating)
    return /* @__PURE__ */ jsx(Grid, { item: true, xs: true, children: /* @__PURE__ */ jsx(FileInput, { ...{
      multiple,
      onAnyChange,
      sort,
      arrayMove: arrayMoveImmutable,
      field,
      name: field.name,
      value: field.value,
      errors: field.errors,
      invalid: field.invalid,
      label: field.label,
      ns: field.ns,
      renderErrors: field.renderErrors
    }, onAnyChange: (newValue, event) => {
      if (event === Events.add) {
        onAnyChange([...field.value || [], ...newValue], event);
        return;
      }
      onAnyChange(newValue, event);
    } }) });
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: true, children: !!id && /* @__PURE__ */ jsx(ImagesInput, { ...{
    farmId: id,
    field
  }, onAnyChange }) });
});
const farmImagesForm = () => ({
  ns: "farms",
  name: "files",
  label: "files",
  type: "component",
  component({
    field,
    onChangeField
  }) {
    const {
      id,
      isCreating
    } = getGlobalProps(field.globalProps);
    return /* @__PURE__ */ jsx(FarmImagesForm, { id, isCreating, field, ...{
      onAnyChange: (value2) => onChangeField == null ? void 0 : onChangeField({
        name: field.name,
        value: value2
      })
    } });
  },
  value: []
});
const nameFarmForm = () => ({
  name: "name",
  label: "name",
  value: "",
  validations: [{
    rule: "isEmpty",
    message: "required"
  }]
});
const initialState = () => new FieldsBuilder({
  ns: "farms",
  validate: false,
  fields: [nameFarmForm(), farmImagesForm(), {
    name: "users",
    label: "users",
    type: "component",
    component: FarmUsers,
    value: []
  }]
});
const AddFarm = () => {
  const {
    t
  } = useTranslation("general");
  const isMount = reactExports.useRef(true);
  const fieldsRender = useFields(() => initialState());
  reactExports.useEffect(() => {
    isMount.current = true;
    return () => {
      isMount.current = false;
    };
  }, [isMount]);
  const [{
    open,
    farm,
    loading
  }, change] = reactExports.useState({
    open: false,
    farm: void 0,
    loading: false
  });
  function setState(newState) {
    isMount.current && change((prev) => ({
      ...prev,
      ...newState
    }));
  }
  return /* @__PURE__ */ jsxs(Box, { padding: 1, children: [
    /* @__PURE__ */ jsxs(Fab, { variant: "extended", size: "small", "aria-label": "add", color: "primary", sx: {
      width: "100%"
    }, onClick: () => {
      fieldsRender.restoreLast();
      setState({
        open: true
      });
    }, children: [
      /* @__PURE__ */ jsx(default_1$g, { sx: {
        marginRight: 1
      } }),
      t("add")
    ] }),
    /* @__PURE__ */ jsx(FarmFieldsProvider, { fieldsRender, children: /* @__PURE__ */ jsx(Form, { ...{
      open,
      farm,
      loading
    }, handleDialog: (newState) => {
      setState({
        ...newState
      });
    } }) })
  ] });
};
var Adjust = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(Adjust, "__esModule", {
  value: true
});
var default_1$2 = Adjust.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = require$$2;
var _default$2 = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"
}), "Adjust");
default_1$2 = Adjust.default = _default$2;
function FarmNavItemIcon(props) {
  try {
    if (!React.isValidElement(props) && typeof props === "object" && props.icon) {
      const icon = Array.isArray(props.icon) ? orderImages(props.icon.map((item, key) => ({
        position: key,
        ...item
      })))[0] : props.icon;
      if (!icon)
        throw new Error();
      return /* @__PURE__ */ jsx(Avatar, { sx: {
        width: "25px",
        height: "25px"
      }, alt: "" + props.label, src: createAPIImageRoute(`farms/${typeof icon === "string" ? icon : icon.file}`, {
        width: 40
      }), sizes: "25px" });
    } else
      throw new Error();
  } catch (error) {
    return /* @__PURE__ */ jsx(Icon$1, { children: /* @__PURE__ */ jsx(default_1$2, {}) });
  }
}
const LinkFarmForwardRef = React.forwardRef(({
  children,
  ...rest
}, ref) => {
  const {
    farm
  } = useCosva();
  const farmId = farm.value;
  if (!farmId)
    return /* @__PURE__ */ jsx(RedirectFarms, {});
  return /* @__PURE__ */ jsx(Link, { ...rest, ref, to: createRouteFarm({
    id: farmId
  }), children });
});
const LinkFarmCategoryForwardRef = React.forwardRef(({
  className,
  children,
  onClick,
  to
}, ref) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { ref, className, to, onClick, children }) }));
const NavItemBody = ({
  handleCollapse,
  haveChildrens,
  open,
  id
}) => {
  var _a2;
  const {
    data,
    error
  } = useQuery(FARM$1, {
    variables: {
      id
    },
    errorPolicy: "all"
  });
  if (error && error.graphQLErrors && isGraphQLErrors({
    graphQLErrors: error.graphQLErrors,
    code: ApolloErrors.FORBIDDEN_FARM
  }))
    return /* @__PURE__ */ jsx(RedirectFarms, {});
  const name = data && ((_a2 = data.farm) == null ? void 0 : _a2.name) || "";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ListItemIcon, { style: {
      textAlign: "center"
    }, children: /* @__PURE__ */ jsx(FarmNavItemIcon, { ...{
      id,
      icon: data && data.farm && data.farm.images || [],
      label: name
    } }) }),
    /* @__PURE__ */ jsx(ListItemText, { primaryTypographyProps: {
      noWrap: true,
      sx: haveChildrens && {
        fontWeight: "fontWeightMedium"
      } || void 0
    }, primary: name }),
    haveChildrens && /* @__PURE__ */ jsx(ItemBodyAction, { open, handleCollapse })
  ] });
};
const NavItemBodyFarms = (props) => {
  const {
    farm
  } = useCosva();
  const farmId = farm.value;
  if (!farmId)
    return /* @__PURE__ */ jsx(RedirectFarms, {});
  return /* @__PURE__ */ jsx(NavItemBody, { ...{
    ...props,
    id: farmId
  } });
};
const NavItemRender = (props) => {
  const {
    value: id
  } = useCosva().farm;
  if (id === defaultCosvaId)
    return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavItem, { ...props }),
    id && /* @__PURE__ */ jsx(Divider, { sx: {
      backgroundColor: "secondary.dark",
      padding: 0.15
    } })
  ] });
};
const FarmNavListItem = (props) => {
  const {
    label,
    id,
    route
  } = props;
  const {
    farm
  } = useCosva();
  return /* @__PURE__ */ jsxs(ListItemButton, { selected: farm.value === id, component: Link, to: route, children: [
    /* @__PURE__ */ jsx(ListItemIcon, { style: {
      justifyContent: "center"
    }, children: /* @__PURE__ */ jsx(FarmNavItemIcon, { ...props }) }),
    /* @__PURE__ */ jsx(ListItemText, { primaryTypographyProps: {
      noWrap: true
    }, primary: label })
  ] });
};
const {
  FARMS,
  FARM
} = PathRoutes;
const Page = React.lazy(() => __vitePreload(() => import("./page-ed3a24f1.js"), true ? ["assets/page-ed3a24f1.js","assets/index-60a9ad09.js","assets/index-02c96895.css","assets/CardOptions-cd475336.js","assets/Save-95d94cd2.js"] : void 0));
const FarmsRoute = {
  path: FARMS,
  name: "farms",
  icon: /* @__PURE__ */ jsx(Farm, {}),
  end: true,
  component: Page,
  general: {
    navBar: false,
    header: true
  },
  navItemProps: {
    renderResponse: (data) => (data.farms || {
      edges: []
    }).edges || [],
    query: FARMS_NAV,
    subscribeToMore: (subscribeToMore) => [subscribeToMoreMessage(subscribeToMore), subscribeToDeletedMessage(subscribeToMore)],
    itemsProps: {
      path: FARM,
      value: [],
      componentChildren: FarmNavListItem
    },
    navItemsFixed: {
      value: [AddFarm]
    }
  },
  navItemPosition: NavItemPositions.bottom
};
const FarmCategoriesQueryHook = (query, props) => {
  const {
    farm: {
      value: id
    }
  } = useCosva();
  const res = useQuery(query, {
    ...props,
    variables: {
      farm: id
    }
  });
  return res;
};
function ComponentIconFarm({
  label,
  icon
}) {
  return /* @__PURE__ */ jsx(Avatar, { sx: {
    width: "25px",
    height: "25px"
  }, alt: `${label} category image`, src: createAPIImageRoute(`static/${icon}`, {
    height: 130
  }), sizes: "15px" });
}
const FarmCategoryNavListItem = (props) => {
  const {
    t
  } = useTranslation("farmCategory");
  const {
    route,
    childrenActive,
    icon,
    category
  } = props;
  const code = getCode(category);
  let label = t(`${code}.label`) || "";
  if (typeof label !== "string")
    label = "";
  return /* @__PURE__ */ jsxs(ListItemButton, { component: Link, to: route, selected: route === childrenActive, children: [
    /* @__PURE__ */ jsx(ListItemIcon, { style: {
      justifyContent: "center"
    }, children: /* @__PURE__ */ jsx(ComponentIconFarm, { ...{
      label,
      icon: icon || category.image || ""
    } }) }),
    /* @__PURE__ */ jsx(ListItemText, { primary: label })
  ] });
};
var Cancel = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(Cancel, "__esModule", {
  value: true
});
var default_1$1 = Cancel.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = require$$2;
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
default_1$1 = Cancel.default = _default$1;
const titleSx = {
  position: "relative",
  flexGrow: 1,
  paddingTop: 1
};
const titleDividerSx = {
  position: "absolute",
  width: "100%",
  bottom: 0
};
const textFieldSx = {
  fontSize: "h4.fontSize",
  padding: "0px",
  lineHeight: 1.3,
  marginTop: "-7px"
};
const LabelFarm = ({
  farm
}) => {
  const {
    id
  } = farm;
  const [editFarmMutation] = useMutation(EDIT_FARM);
  const [edit, setEdit] = React.useState(false);
  const name = farm.name;
  const fieldBuilder = useField(() => ({
    ...nameFarmForm(),
    value: name
  }));
  const cancel = () => {
    setEdit(false);
    fieldBuilder.setValue(name);
  };
  React.useEffect(() => {
    fieldBuilder.setValue(name);
  }, [id, name, fieldBuilder]);
  return /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
    var _a2;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Grid, { item: true, component: Grow, in: true, xs: true, sx: titleSx, zeroMinWidth: true, children: !edit && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Typography, { variant: "h4", noWrap: true, children: fieldBuilder.value }),
        /* @__PURE__ */ jsx(Divider, { sx: titleDividerSx })
      ] }) || /* @__PURE__ */ jsx(TextField, { name: "name", InputProps: {
        sx: {
          input: textFieldSx
        },
        autoFocus: true
      }, value: fieldBuilder.value, fullWidth: true, onChange: ({
        target: {
          value: value2
        }
      }) => {
        fieldBuilder.setValue(value2);
      }, onKeyUp: () => {
        fieldBuilder.validity();
      }, helperText: !!((_a2 = fieldBuilder.errors) == null ? void 0 : _a2.length) && /* @__PURE__ */ jsx(RenderErrorsDefault, { errors: fieldBuilder.errors }), error: !!fieldBuilder.invalid, variant: "standard" }) }),
      (!edit || edit && name !== fieldBuilder.value) && /* @__PURE__ */ jsx(Grid, { item: true, component: Grow, in: true, children: /* @__PURE__ */ jsx(IconButton, { size: "medium", onClick: async () => {
        if (!await fieldBuilder.hasErrors()) {
          setEdit(!edit);
          if (edit) {
            const newName = fieldBuilder.value;
            editFarmMutation({
              variables: {
                id,
                name: newName.toString()
              },
              optimisticResponse: {
                __typename: "Mutation",
                editFarm: {
                  ...farm,
                  name: newName.toString()
                }
              }
            });
          }
        }
      }, children: !edit && /* @__PURE__ */ jsx(default_1$b, {}) || /* @__PURE__ */ jsx(default_1$c, {}) }) }),
      edit && /* @__PURE__ */ jsx(Grid, { item: true, component: Grow, in: true, children: /* @__PURE__ */ jsx(IconButton, { size: "medium", onClick: () => cancel(), children: /* @__PURE__ */ jsx(default_1$1, {}) }) })
    ] });
  } });
};
function FarmCategory$1({
  text,
  image,
  category
}) {
  const {
    farm
  } = useCosva();
  const {
    t
  } = useTranslation("farmCategory");
  const isWidthDown = useIsWidthDown("sm");
  if (!farm.active) {
    return /* @__PURE__ */ jsx(RedirectFarms, {});
  }
  const route = createRouteFarmCategory({
    id: farm.value,
    category: category.code
  });
  const code = getCode(category);
  return /* @__PURE__ */ jsx(Card$1, { sx: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }, children: /* @__PURE__ */ jsxs(CardActionArea$1, { sx: {
    flex: 1
  }, component: Link, to: route, children: [
    /* @__PURE__ */ jsx(CardMedia$1, { sx: {
      height: 140
    }, image: createAPIImageRoute(`static/${image || ""}`, {
      height: isWidthDown ? 400 : 130
    }), title: text }),
    /* @__PURE__ */ jsxs(CardContent$1, { children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "h2", children: text }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", component: "p", children: t(`${code}.description`) })
    ] })
  ] }) });
}
const breakpoints = {
  xs: 12,
  sm: 12,
  md: 4,
  lg: 3,
  xl: 2
};
const FarmsCategories = React.memo(({
  categories = [],
  loading
}) => {
  const {
    t
  } = useTranslation("farmCategory");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !loading && categories.map((category) => {
      const code = getCode(category);
      return /* @__PURE__ */ jsx(Grid, { item: true, ...breakpoints, children: /* @__PURE__ */ jsx(FarmCategory$1, { ...{
        id: category.id,
        text: t(`${code}.label`) || "",
        image: category.image || "",
        category
      } }) }, category.id);
    }),
    loading && /* @__PURE__ */ jsx(LoadingPage, {})
  ] });
});
const FarmsCategories$1 = () => {
  const {
    farm: {
      value: id
    }
  } = useCosva();
  const {
    data,
    loading
  } = useQuery(FARM_CATEGORIES, {
    variables: {
      farm: id
    }
  });
  const categories = data && data.farmCategories.edges;
  return /* @__PURE__ */ jsx(Box, { padding: 2, children: /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", alignItems: "stretch", spacing: 4, children: /* @__PURE__ */ jsx(FarmsCategories, { ...{
    categories,
    loading
  } }) }) });
};
function parsePhotos(photos) {
  return parseImages(photos, (path) => createAPIImageRoute(`farms/${path}`, {
    width: 200
  }));
}
const FarmPage = () => {
  const {
    value: id
  } = useCosva().farm;
  const newLocal = {
    id
  };
  const {
    loading,
    data,
    error
  } = useQuery(FARM$1, {
    variables: newLocal
  });
  const field = useField({
    ns: "farms",
    name: "files",
    label: "files",
    value: []
  });
  const images = reactExports.useMemo(() => (data == null ? void 0 : data.farm.images) || [], [data]);
  reactExports.useEffect(() => {
    if (images)
      field.setValue(parsePhotos(images));
  }, [images, field]);
  if (error && error.graphQLErrors && isGraphQLErrors({
    graphQLErrors: error.graphQLErrors,
    code: ApolloErrors.FORBIDDEN_FARM
  }))
    return /* @__PURE__ */ jsx(Navigate, { to: PathRoutes.FARMS });
  if (!data || !data.farm)
    return loading && /* @__PURE__ */ jsx(LoadingPage, {}) || null;
  const {
    farm
  } = data;
  const {
    name
  } = farm;
  document.title = name;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PaperAvatar, { avatarProps: {
      id,
      images: images || [],
      form: () => /* @__PURE__ */ jsx(Grid, { item: true, xs: true, children: !!id && /* @__PURE__ */ jsx(ImagesInput, { ...{
        farmId: id,
        field
      }, onAnyChange: (value2) => {
        field.setValue(value2);
      } }) }),
      parseImages: parsePhotos,
      sourceImages: (path) => createAPIImageRoute(`farms/${path}`, {
        width: 900
      }),
      dialogProps: {
        title: {
          message: "farmImages",
          ns: "farms"
        }
      },
      children: /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", color: "textPrimary", gutterBottom: true, children: /* @__PURE__ */ jsx(TranslationAnimated, { ...{
        message: "editImages",
        ns: "farms"
      } }) }),
      defaultIcon: /* @__PURE__ */ jsx(Typography, { variant: "h1", children: /* @__PURE__ */ jsx(CosvaFarm, {}) })
    }, paperProps: {
      elevation: 0
    }, sx: {
      background: (theme) => `linear-gradient(0deg, transparent 0px, ${theme.palette.background.paper} 30%)`
    }, label: /* @__PURE__ */ jsx(LabelFarm, { ...{
      farm
    } }) }),
    /* @__PURE__ */ jsx(FarmsCategories$1, {})
  ] });
};
const FarmRoute = {
  path: PathRoutes.FARM,
  end: true,
  navItemProps: genericNavItemProps({
    renderResponse: (data) => data.farmCategories.edges.map((category) => {
      const {
        image
      } = category;
      const code = getCode(category);
      return {
        id: category.id,
        label: code || "",
        icon: image,
        category
      };
    }) || [],
    itemsProps: {
      generatePath: ({
        item,
        match
      }) => {
        var _a2, _b;
        const category = (_a2 = item == null ? void 0 : item.category) == null ? void 0 : _a2.code;
        const farm = (_b = match == null ? void 0 : match.params) == null ? void 0 : _b.id;
        if (category && typeof farm === "string")
          return createRouteFarmCategory({
            category,
            id: farm
          });
        else
          return "";
      },
      linkForwardRef: LinkFarmCategoryForwardRef,
      componentIcon: ComponentIconFarm,
      componentChildren: FarmCategoryNavListItem
    },
    query: FARM_CATEGORIES,
    componentNavItemBody: NavItemBodyFarms,
    componentNavItem: NavItemRender,
    queryHook: FarmCategoriesQueryHook,
    linkForwardRef: LinkFarmForwardRef
  }),
  component: FarmPage
};
var CalendarToday = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(CalendarToday, "__esModule", {
  value: true
});
var default_1 = CalendarToday.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
}), "CalendarToday");
default_1 = CalendarToday.default = _default;
const AvatarSkeleton = () => /* @__PURE__ */ jsxs(Box, { sx: {
  display: "flex",
  alignItems: "center"
}, children: [
  /* @__PURE__ */ jsx(Box, { sx: {
    marginRight: 2
  }, children: /* @__PURE__ */ jsx(Skeleton$1, { variant: "circular", children: /* @__PURE__ */ jsx(Avatar, { sx: {
    width: "60px",
    height: "60px"
  } }) }) }),
  /* @__PURE__ */ jsx(Box, { sx: {
    width: "100%"
  }, children: /* @__PURE__ */ jsx(Skeleton$1, { width: "100%" }) })
] });
const AddSkeleton = () => /* @__PURE__ */ jsx(Box, { sx: {
  display: "flex",
  justifyContent: "center",
  width: "100%"
}, children: /* @__PURE__ */ jsx(Skeleton$1, { variant: "rounded", width: "150px", height: 30 }) });
const DataSkeleton = () => /* @__PURE__ */ jsxs(Stack$1, { spacing: 2, children: [
  /* @__PURE__ */ jsx(Skeleton$1, { variant: "rectangular", height: 30 }),
  /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, justifyContent: "center", children: new Array(3).fill(0).map((_2, index2) => /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: [
    /* @__PURE__ */ jsx(AvatarSkeleton, {}),
    /* @__PURE__ */ jsx(Skeleton$1, { variant: "rectangular", sx: {
      marginTop: 2
    }, width: "100%", height: "200px" })
  ] }, index2)) })
] });
const AnimalsSkeletonPage = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Stack$1, { spacing: 2, children: [
    /* @__PURE__ */ jsx(AvatarSkeleton, {}),
    /* @__PURE__ */ jsx(AddSkeleton, {}),
    /* @__PURE__ */ jsx(DataSkeleton, {})
  ] }) });
};
const Bovines = reactExports.lazy(() => __vitePreload(() => import("./index-09470435.js"), true ? ["assets/index-09470435.js","assets/index-60a9ad09.js","assets/index-02c96895.css","assets/index-3848f05e.js","assets/ErrorOutline-27089ca2.js","assets/Save-95d94cd2.js","assets/mutations-a19b80cd.js","assets/CardOptions-cd475336.js"] : void 0));
const animalsComponents = {
  [CategoryGroupTypes.Bovines]: /* @__PURE__ */ jsx(Bovines, {})
};
const FarmCategoryGroup = () => {
  const cosva = useCosva();
  const categoryGroupCode = cosva.categoryGroup.code;
  const {
    t
  } = useTranslation("farmCategoryGroup");
  const {
    data,
    loading
  } = useQuery(CATEGORY_GROUP_BY_CODE, {
    variables: {
      code: categoryGroupCode
    },
    skip: !categoryGroupCode
  });
  if (!data) {
    if (!loading)
      return /* @__PURE__ */ jsx(Navigate, { to: createRouteFarmCategory({
        id: cosva.farm.value.toString(),
        category: cosva.category.value
      }) });
    else
      return null;
  }
  const {
    categoryGroupByCode
  } = data;
  const image = categoryGroupByCode.image;
  const key = getCode({
    code: categoryGroupCode
  });
  const title = t(`${key}.label`) || "";
  return /* @__PURE__ */ jsx(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }, children: /* @__PURE__ */ jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(AnimalsSkeletonPage, {}), children: [
    /* @__PURE__ */ jsx(TitleSubPage, { image, title }),
    animalsComponents[categoryGroupCode] || /* @__PURE__ */ jsxs(Box, { sx: {
      margin: "auto"
    }, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h4", gutterBottom: true, align: "center", children: "Will soon be available" }),
      /* @__PURE__ */ jsx(Typography, { variant: "h3", align: "center", children: /* @__PURE__ */ jsx(default_1, { fontSize: "inherit" }) })
    ] })
  ] }) });
};
const TextBovine = () => {
  const cosva = useCosva();
  const match = useMatch(PathRoutes.FARM_BOVINE);
  const bovineId = +(match == null ? void 0 : match.params.bovine);
  const {
    pathname
  } = useLocation();
  const farmId = cosva.farm.value;
  const categoryId = cosva.category.value;
  const categoryGroupCode = cosva.categoryGroup.code;
  const {
    data,
    loading
  } = useQuery(BOVINE, {
    variables: {
      id: +bovineId
    },
    fetchPolicy: "cache-first",
    skip: !bovineId
  });
  if (loading)
    return /* @__PURE__ */ jsx(AnimationGrow, { children: /* @__PURE__ */ jsx(Box, { display: "flex", justifyContent: "center", children: /* @__PURE__ */ jsx(Loading$1, { size: 15 }) }) });
  if (!data)
    return null;
  const {
    bovine
  } = data;
  const {
    plaque,
    name
  } = bovine;
  const title = `${plaque} ${name}`;
  if (!!matchPath({
    path: PathRoutes.FARM_BOVINE,
    end: true
  }, pathname))
    return /* @__PURE__ */ jsx(Typography, { color: "textPrimary", children: title });
  return /* @__PURE__ */ jsx(Link$1, { color: "inherit", component: LinkForwardRef, to: createRouteFarmBovine({
    id: farmId,
    category: categoryId,
    categoryGroup: categoryGroupCode,
    bovine: bovineId
  }), children: title });
};
const TextFarmCategoryGroup = () => {
  const cosva = useCosva();
  const {
    pathname
  } = useLocation();
  const farmId = cosva.farm.value;
  const categoryCode = cosva.category.value;
  const categoryGroupCode = cosva.categoryGroup.code;
  const categoryGroup = cosva.categoryGroup.value;
  const {
    t
  } = useTranslation("farmCategoryGroup");
  if (!categoryGroup)
    return null;
  const title = t(`${getCode(categoryGroup)}.label`);
  return !!matchPath({
    path: PathRoutes.FARM_BOVINE,
    end: false
  }, pathname) ? /* @__PURE__ */ jsx(Link$1, { color: "inherit", component: LinkForwardRef, to: createRouteFarmCategoryGroup({
    id: farmId,
    category: categoryCode,
    categoryGroup: categoryGroupCode
  }), children: title }) : /* @__PURE__ */ jsx(Typography, { color: "textPrimary", children: title });
};
const BreadcrumbsFarmCategory = ({
  title
}) => {
  const cosva = useCosva();
  const {
    pathname
  } = useLocation();
  const farmId = cosva.farm.value;
  const categoryCode = cosva.category.value;
  const {
    data
  } = useQuery(FARM_BREADCRUMB, {
    variables: {
      id: farmId
    }
  });
  return /* @__PURE__ */ jsxs(Breadcrumbs$1, { "aria-label": "breadcrumb", maxItems: 4, sx: {
    paddingBottom: 2
  }, children: [
    /* @__PURE__ */ jsx(Link$1, { color: "inherit", component: LinkForwardRef, to: createRouteFarm({
      id: farmId
    }), children: data && data.farm.name || "" }),
    matchPath({
      path: PathRoutes.FARM_CATEGORY,
      end: true
    }, pathname) && /* @__PURE__ */ jsx(Typography, { color: "textPrimary", children: title }),
    matchPath({
      path: PathRoutes.FARM_CATEGORY_GROUP,
      end: false
    }, pathname) && /* @__PURE__ */ jsx(Link$1, { color: "inherit", component: LinkForwardRef, to: createRouteFarmCategory({
      id: farmId,
      category: categoryCode
    }), children: title }),
    matchPath({
      path: PathRoutes.FARM_CATEGORY_GROUP,
      end: false
    }, pathname) && /* @__PURE__ */ jsx(TextFarmCategoryGroup, {}),
    matchPath({
      path: PathRoutes.FARM_BOVINE,
      end: false
    }, pathname) && /* @__PURE__ */ jsx(TextBovine, {})
  ] });
};
function FarmCategoryGroupCard({
  id,
  categoryGroup,
  text,
  onChangeImage,
  ...props
}) {
  const {
    t
  } = useTranslation("farmCategoryGroup");
  const inputFileRef = React.useRef(null);
  const isOpen = React.useRef(false);
  const isWidthDown = useIsWidthDown("sm");
  const originalImage = props.image;
  const {
    image,
    useService
  } = React.useMemo(() => {
    return {
      image: originalImage instanceof File ? URL.createObjectURL(originalImage) : originalImage || void 0,
      useService: !(originalImage instanceof File)
    };
  }, [originalImage]);
  const route = id && generatePath(PathRoutes.FARM_CATEGORY_GROUP_RELATIVE, {
    categoryGroup: categoryGroup.code
  });
  const code = getCode(categoryGroup);
  return /* @__PURE__ */ jsxs(Card$1, { sx: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ jsx("input", { ref: inputFileRef, onChange: ({
      target: {
        files
      }
    }) => {
      files && onChangeImage && onChangeImage(files[0]);
    }, onClick: (e) => {
      if (!isOpen.current) {
        setTimeout(() => {
          isOpen.current = false;
        });
        isOpen.current = true;
      } else
        e.preventDefault();
    }, hidden: true, type: "file", accept: "image/*" }),
    /* @__PURE__ */ jsxs(CardActionArea$1, { sx: {
      flex: 1
    }, ...route && {
      component: CardActionAreaRef,
      to: route
    }, children: [
      /* @__PURE__ */ jsx(CardMedia$1, { sx: {
        height: "140px"
      }, image: useService ? createAPIImageRoute(`static/${image || ""}`, {
        height: isWidthDown ? 400 : 130
      }) : image, title: text, onClick: () => {
        var _a2;
        if (!route)
          (_a2 = inputFileRef.current) == null ? void 0 : _a2.click();
      } }),
      /* @__PURE__ */ jsxs(CardContent$1, { children: [
        /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "h2", noWrap: true, children: text }),
        /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", component: "p", children: t(`${code}.description`) })
      ] })
    ] })
  ] });
}
const CategoryGroupsRender = React.memo(({
  categoryGroups = []
}) => {
  const breakpoints2 = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2
  };
  const {
    t
  } = useTranslation("farmCategoryGroup");
  return /* @__PURE__ */ jsx(Fragment, { children: !!(categoryGroups == null ? void 0 : categoryGroups.length) && categoryGroups.map((categoryGroup) => {
    const {
      id
    } = categoryGroup;
    const code = getCode(categoryGroup);
    return /* @__PURE__ */ jsx(Grid, { item: true, ...breakpoints2, children: /* @__PURE__ */ jsx(FarmCategoryGroupCard, { ...{
      id,
      categoryGroup,
      text: t(`${code}.label`) || "",
      image: categoryGroup.image || ""
    } }) }, id);
  }) });
});
const FarmCategoryGroups = ({
  categoryGroups
}) => {
  return /* @__PURE__ */ jsx(Box, { padding: [2, 1, 1, 1], children: /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", alignItems: "stretch", spacing: 2, children: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsx(CategoryGroupsRender, { ...{
    categoryGroups
  } }) }) }) });
};
const Bovine = reactExports.lazy(() => __vitePreload(() => import("./index-d23e1910.js").then((n) => n.i), true ? ["assets/index-d23e1910.js","assets/index-60a9ad09.js","assets/index-02c96895.css","assets/index-3848f05e.js","assets/ErrorOutline-27089ca2.js","assets/Save-95d94cd2.js"] : void 0));
const FarmCategory = () => {
  const cosva = useCosva();
  const farmId = cosva.farm.value;
  const categoryCode = cosva.category.value;
  const {
    t
  } = useTranslation("farmCategory");
  const {
    data,
    error,
    loading
  } = useQuery(CATEGORY_BY_CODE, {
    variables: {
      code: categoryCode
    },
    errorPolicy: "all"
  });
  const redirect = /* @__PURE__ */ jsx(Navigate, { to: createRouteFarm({
    id: farmId
  }) });
  if (loading)
    return /* @__PURE__ */ jsx(LoadingPage, {});
  if (!data) {
    if (error && error.graphQLErrors.length)
      return redirect;
    return null;
  }
  const {
    categoryByCode
  } = data;
  const {
    image,
    categoryGroups
  } = categoryByCode;
  const code = getCode(categoryByCode);
  const title = t(`${code}.label`) || "";
  const breadcrumbs = /* @__PURE__ */ jsx(BreadcrumbsFarmCategory, { ...{
    title
  } });
  return /* @__PURE__ */ jsxs(Box, { sx: (theme) => ({
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1)
    }
  }), children: [
    breadcrumbs,
    /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: PathRoutes.FARM_CATEGORY_RELATIVE, children: [
      /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(TitleSubPage, { ...{
          title,
          image
        } }),
        /* @__PURE__ */ jsx(FarmCategoryGroups, { categoryGroups })
      ] }) }),
      /* @__PURE__ */ jsxs(Route, { path: PathRoutes.FARM_CATEGORY_GROUP_RELATIVE, children: [
        /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(FarmCategoryGroup, {}) }),
        /* @__PURE__ */ jsx(Route, { path: PathRoutes.FARM_BOVINE_RELATIVE, element: /* @__PURE__ */ jsx(Bovine, {}) })
      ] })
    ] }) })
  ] });
};
const FarmCategoryRoute = {
  path: "/farm/:id/*",
  end: false,
  component: FarmCategory,
  navItem: false
};
const routes = [FarmsRoute, FarmRoute, FarmCategoryRoute, {
  path: PathRoutes.LANDING,
  name: "landing",
  icon: /* @__PURE__ */ jsx(default_1$9, {}),
  end: true,
  component: Landing$1
}, {
  path: PathRoutes.ACCOUNT,
  name: "account",
  icon: /* @__PURE__ */ jsx(default_1$e, {}),
  end: true,
  navItem: false,
  collapseNavItem: true,
  component: AccountPage
}];
const ChangeTitlePage = ({
  name
}) => {
  const [t] = useTranslation("general");
  document.title = t(`routes.${name}`);
  return null;
};
const SessionComponents = () => {
  const authorization = useAuthorization();
  const {
    signOut
  } = useSession();
  const authorized = reactExports.useRef(authorization.authorized);
  const navigate = useNavigate();
  const to = PathRoutes.SIGN_IN;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !authorized.current && /* @__PURE__ */ jsx(Navigate, { to }),
    /* @__PURE__ */ jsx(DialogLogin, { open: !authorization.authorized && !authorization.closingSession, onClose: async () => {
      await signOut();
      navigate(to);
    } })
  ] });
};
const App = () => /* @__PURE__ */ jsxs(LayoutProvider, { routes, children: [
  /* @__PURE__ */ jsx(SessionComponents, {}),
  /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    routes.map(({
      path,
      name,
      component: ComponentRoute
    }) => /* @__PURE__ */ jsx(Route, { ...{
      path,
      name
    }, element: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: null, children: typeof name === "string" && /* @__PURE__ */ jsx(ChangeTitlePage, { name }) }),
      /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingPage, {}), children: /* @__PURE__ */ jsx(ComponentRoute, {}) })
    ] }) }, path)),
    /* @__PURE__ */ jsx(Route, { path: PathRoutes.INDEX, element: /* @__PURE__ */ jsx(Navigate, { to: PathRoutes.MAIN }) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: PathRoutes.FARMS }) })
  ] }) })
] });
const index = withTranslation()(App);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
export {
  AddSkeleton as A,
  CosvaFarm as C,
  DELETE_FARM as D,
  FarmFieldsProvider as F,
  ImagesStepper$1 as I,
  ListItem$1 as L,
  PaperAvatar as P,
  SkeletonFarms as S,
  subscribeToDeletedMessage as a,
  subscribeToFarmUserCreated as b,
  createAPIImageRoute as c,
  subscribeToDeleteFarmUser as d,
  Card$1 as e,
  CardActionArea$1 as f,
  FarmFieldsConsumer as g,
  Form as h,
  initialState as i,
  Skeleton$1 as j,
  Stack$1 as k,
  CardMedia$1 as l,
  CardContent$1 as m,
  ListItemAvatar$1 as n,
  DataSkeleton as o,
  index$1 as p,
  subscribeToMoreMessage as s,
  useFarmFields as u,
  withTranslation as w
};
