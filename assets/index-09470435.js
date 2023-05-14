import { r as reactExports, dw as mergeOptions, dx as useInternalState, bp as useApolloClient, dy as __assign, dz as _inheritsLoose, dA as forceReflow, dB as _objectWithoutPropertiesLoose$1, as as React$4, dC as Transition, bd as _extends$1, t as generateUtilityClass, w as generateUtilityClasses, x as styled, y as _extends$2, z as useThemeProps, A as _objectWithoutPropertiesLoose$2, C as jsxs, o as clsx, n as jsx, q as composeClasses, F as createSvgIcon, Z as SvgIcon, I as capitalize, df as Fade, a2 as Grid, bk as CircularProgress, dv as OrderTypes, aG as useQuery, c6 as CategoryGroupTypes, u as useTranslation, T as Typography, bi as TransformLabel, bz as ObserverComponent, c2 as getCode, at as Fragment, cG as Zoom, a0 as Box, bQ as default_1$5, aT as Button, dD as useSearchParams, az as requireCreateSvgIcon, aA as interopRequireDefaultExports$1, aB as require$$2, aW as IconButton, L as useTheme, H as useSlotProps, B as useControlled$2, S as useEnhancedEffect$2, dE as useId$2, E as ButtonBase, O as alpha, V as useForkRef$2, aK as getDefaultExportFromCjs, b2 as TextField, dF as TransitionGroup, dG as useTheme$1, cP as useEventCallback$2, aF as K, aU as MuiDialog, dH as dialogClasses, aY as DialogContent, dI as MuiPopper, P as Paper, bg as Grow, dJ as FocusTrap, cQ as ownerDocument, aV as DialogActions, bE as List, dK as Chip, cB as MuiInputAdornment, dL as resolveComponentProps, dl as useMediaQuery, dd as AnimalGendersTypes, bo as RenderErrorsDefault, bf as default_1$6, bR as useCosva, aD as useMutation, dM as idOptimistic, dN as BOVINE_MILK_PRODUCTIVITIES, ax as DialogSimple, dO as BOVINE_MILK_PRODUCTIVITIES_DATES, dP as Badge, dh as AutoCompleteSingleBase, dQ as default_1$8, cp as useNavigate, ce as createRouteFarmBovine, ci as CardActionAreaRef, bx as DialogContentText, cD as Menu, cE as MenuItem, bW as ListItemIcon, b1 as default_1$9, bF as ListItemText, dR as useLayout, d4 as usePagination, du as CosvaTable, cX as useSearch, bC as LoadingPage, dS as Tooltip, d5 as BOVINES_QUERY, dk as DialogLoading, bI as FieldsRender, au as Snackbar, bP as useFields, dT as PaginationProvider, a4 as Divider, dU as getPaginationInit } from "./index-60a9ad09.js";
import { A as ANIMAL_BREED, d as AutoCompleteMultipleBase, e as ANIMAL_DEVELOPMENT_STAGES, r as requiredArgs, t as toDate, g as toInteger, m as millisecondsInHour, i as millisecondsInMinute, j as millisecondsInSecond, k as getUTCWeekYear, s as startOfUTCWeek, l as startOfUTCISOWeek, n as getUTCWeek, o as getUTCISOWeek, q as getDefaultOptions, v as defaultLocale, w as longFormatters$2, x as isProtectedWeekYearToken, y as throwProtectedError, z as isProtectedDayOfYearToken, D as subMilliseconds, F as getTimezoneOffsetInMilliseconds, f as format, H as addMilliseconds, J as addLeadingZeros, p as parseISO, K as isValid, L as useLitersField, S as SelectBovine, N as default_1$7, C as CosvaBovine, M as MilkCanteen, O as getGenderField, Q as SelectGender, T as AddPurposes, I as ItemBovine, G as Gender, a as ReproductiveControl, P as PurposeTypes, U as useDeleteBovine, E as EditBovine, V as useCreateBovine, W as Alert, c as fullHeight, X as getInitialState } from "./index-3848f05e.js";
import { e as Card, f as CardActionArea, j as Skeleton, L as ListItem, k as Stack, l as CardMedia, c as createAPIImageRoute, m as CardContent, A as AddSkeleton, o as DataSkeleton } from "./index-9ab0c8c5.js";
import { C as CREATE_BOVINE_MILK_PRODUCTIVITY, u as useDeleteBovineMilkProductivity } from "./mutations-a19b80cd.js";
import { u as useField$1 } from "./Save-95d94cd2.js";
import { C as CardOptions } from "./CardOptions-cd475336.js";
import "./ErrorOutline-27089ca2.js";
var EAGER_METHODS = [
  "refetch",
  "reobserve",
  "fetchMore",
  "updateQuery",
  "startPolling",
  "subscribeToMore"
];
function useLazyQuery(query, options) {
  var _a;
  var execOptionsRef = reactExports.useRef();
  var optionsRef = reactExports.useRef();
  var queryRef = reactExports.useRef();
  var merged = execOptionsRef.current ? mergeOptions(options, execOptionsRef.current) : options;
  var document2 = (_a = merged === null || merged === void 0 ? void 0 : merged.query) !== null && _a !== void 0 ? _a : query;
  optionsRef.current = merged;
  queryRef.current = document2;
  var internalState = useInternalState(useApolloClient(options && options.client), document2);
  var useQueryResult = internalState.useQuery(__assign(__assign({}, merged), { skip: !execOptionsRef.current }));
  var initialFetchPolicy = useQueryResult.observable.options.initialFetchPolicy || internalState.getDefaultFetchPolicy();
  var result = Object.assign(useQueryResult, {
    called: !!execOptionsRef.current
  });
  var eagerMethods = reactExports.useMemo(function() {
    var eagerMethods2 = {};
    var _loop_1 = function(key2) {
      var method = result[key2];
      eagerMethods2[key2] = function() {
        if (!execOptionsRef.current) {
          execOptionsRef.current = /* @__PURE__ */ Object.create(null);
          internalState.forceUpdate();
        }
        return method.apply(this, arguments);
      };
    };
    for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
      var key = EAGER_METHODS_1[_i];
      _loop_1(key);
    }
    return eagerMethods2;
  }, []);
  Object.assign(result, eagerMethods);
  var execute = reactExports.useCallback(function(executeOptions) {
    execOptionsRef.current = executeOptions ? __assign(__assign({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
      fetchPolicy: initialFetchPolicy
    };
    var options2 = mergeOptions(optionsRef.current, __assign({ query: queryRef.current }, execOptionsRef.current));
    var promise = internalState.executeQuery(__assign(__assign({}, options2), { skip: false })).then(function(queryResult) {
      return Object.assign(queryResult, eagerMethods);
    });
    promise.catch(function() {
    });
    return promise;
  }, []);
  return [execute, result];
}
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass = function removeClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass$1(node, c);
  });
};
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === "string";
      var prefix = isStringClassNames && classNames ? classNames + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass2(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node)
        forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass(node, baseClassName);
    }
    if (activeClassName) {
      removeClass(node, activeClassName);
    }
    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props;
    _this$props.classNames;
    var props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);
    return /* @__PURE__ */ React$4.createElement(Transition, _extends$1({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(React$4.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = {};
const CSSTransition$1 = CSSTransition;
const StepperContext = /* @__PURE__ */ reactExports.createContext({});
const StepperContext$1 = StepperContext;
const StepContext = /* @__PURE__ */ reactExports.createContext({});
const StepContext$1 = StepContext;
function getStepUtilityClass(slot) {
  return generateUtilityClass("MuiStep", slot);
}
generateUtilityClasses("MuiStep", ["root", "horizontal", "vertical", "alternativeLabel", "completed"]);
const _excluded$z = ["active", "children", "className", "component", "completed", "disabled", "expanded", "index", "last"];
const useUtilityClasses$s = (ownerState) => {
  const {
    classes,
    orientation,
    alternativeLabel,
    completed
  } = ownerState;
  const slots = {
    root: ["root", orientation, alternativeLabel && "alternativeLabel", completed && "completed"]
  };
  return composeClasses(slots, getStepUtilityClass, classes);
};
const StepRoot = styled("div", {
  name: "MuiStep",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.completed && styles.completed];
  }
})(({
  ownerState
}) => _extends$2({}, ownerState.orientation === "horizontal" && {
  paddingLeft: 8,
  paddingRight: 8
}, ownerState.alternativeLabel && {
  flex: 1,
  position: "relative"
}));
const Step = /* @__PURE__ */ reactExports.forwardRef(function Step2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiStep"
  });
  const {
    active: activeProp,
    children,
    className,
    component = "div",
    completed: completedProp,
    disabled: disabledProp,
    expanded = false,
    index,
    last
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$z);
  const {
    activeStep,
    connector,
    alternativeLabel,
    orientation,
    nonLinear
  } = reactExports.useContext(StepperContext$1);
  let [active = false, completed = false, disabled = false] = [activeProp, completedProp, disabledProp];
  if (activeStep === index) {
    active = activeProp !== void 0 ? activeProp : true;
  } else if (!nonLinear && activeStep > index) {
    completed = completedProp !== void 0 ? completedProp : true;
  } else if (!nonLinear && activeStep < index) {
    disabled = disabledProp !== void 0 ? disabledProp : true;
  }
  const contextValue = reactExports.useMemo(() => ({
    index,
    last,
    expanded,
    icon: index + 1,
    active,
    completed,
    disabled
  }), [index, last, expanded, active, completed, disabled]);
  const ownerState = _extends$2({}, props, {
    active,
    orientation,
    alternativeLabel,
    completed,
    disabled,
    expanded,
    component
  });
  const classes = useUtilityClasses$s(ownerState);
  const newChildren = /* @__PURE__ */ jsxs(StepRoot, _extends$2({
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: [connector && alternativeLabel && index !== 0 ? connector : null, children]
  }));
  return /* @__PURE__ */ jsx(StepContext$1.Provider, {
    value: contextValue,
    children: connector && !alternativeLabel && index !== 0 ? /* @__PURE__ */ jsxs(reactExports.Fragment, {
      children: [connector, newChildren]
    }) : newChildren
  });
});
const Step$1 = Step;
const CheckCircle = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}), "CheckCircle");
const Warning = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), "Warning");
function getStepIconUtilityClass(slot) {
  return generateUtilityClass("MuiStepIcon", slot);
}
const stepIconClasses = generateUtilityClasses("MuiStepIcon", ["root", "active", "completed", "error", "text"]);
const stepIconClasses$1 = stepIconClasses;
var _circle;
const _excluded$y = ["active", "className", "completed", "error", "icon"];
const useUtilityClasses$r = (ownerState) => {
  const {
    classes,
    active,
    completed,
    error
  } = ownerState;
  const slots = {
    root: ["root", active && "active", completed && "completed", error && "error"],
    text: ["text"]
  };
  return composeClasses(slots, getStepIconUtilityClass, classes);
};
const StepIconRoot = styled(SvgIcon, {
  name: "MuiStepIcon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: "block",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest
  }),
  color: (theme.vars || theme).palette.text.disabled,
  [`&.${stepIconClasses$1.completed}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses$1.active}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const StepIconText = styled("text", {
  name: "MuiStepIcon",
  slot: "Text",
  overridesResolver: (props, styles) => styles.text
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.primary.contrastText,
  fontSize: theme.typography.caption.fontSize,
  fontFamily: theme.typography.fontFamily
}));
const StepIcon = /* @__PURE__ */ reactExports.forwardRef(function StepIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiStepIcon"
  });
  const {
    active = false,
    className: classNameProp,
    completed = false,
    error = false,
    icon
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$y);
  const ownerState = _extends$2({}, props, {
    active,
    completed,
    error
  });
  const classes = useUtilityClasses$r(ownerState);
  if (typeof icon === "number" || typeof icon === "string") {
    const className = clsx(classNameProp, classes.root);
    if (error) {
      return /* @__PURE__ */ jsx(StepIconRoot, _extends$2({
        as: Warning,
        className,
        ref,
        ownerState
      }, other));
    }
    if (completed) {
      return /* @__PURE__ */ jsx(StepIconRoot, _extends$2({
        as: CheckCircle,
        className,
        ref,
        ownerState
      }, other));
    }
    return /* @__PURE__ */ jsxs(StepIconRoot, _extends$2({
      className,
      ref,
      ownerState
    }, other, {
      children: [_circle || (_circle = /* @__PURE__ */ jsx("circle", {
        cx: "12",
        cy: "12",
        r: "12"
      })), /* @__PURE__ */ jsx(StepIconText, {
        className: classes.text,
        x: "12",
        y: "12",
        textAnchor: "middle",
        dominantBaseline: "central",
        ownerState,
        children: icon
      })]
    }));
  }
  return icon;
});
const StepIcon$1 = StepIcon;
function getStepLabelUtilityClass(slot) {
  return generateUtilityClass("MuiStepLabel", slot);
}
const stepLabelClasses = generateUtilityClasses("MuiStepLabel", ["root", "horizontal", "vertical", "label", "active", "completed", "error", "disabled", "iconContainer", "alternativeLabel", "labelContainer"]);
const stepLabelClasses$1 = stepLabelClasses;
const _excluded$x = ["children", "className", "componentsProps", "error", "icon", "optional", "slotProps", "StepIconComponent", "StepIconProps"];
const useUtilityClasses$q = (ownerState) => {
  const {
    classes,
    orientation,
    active,
    completed,
    error,
    disabled,
    alternativeLabel
  } = ownerState;
  const slots = {
    root: ["root", orientation, error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    label: ["label", active && "active", completed && "completed", error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    iconContainer: ["iconContainer", active && "active", completed && "completed", error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    labelContainer: ["labelContainer", alternativeLabel && "alternativeLabel"]
  };
  return composeClasses(slots, getStepLabelUtilityClass, classes);
};
const StepLabelRoot = styled("span", {
  name: "MuiStepLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation]];
  }
})(({
  ownerState
}) => _extends$2({
  display: "flex",
  alignItems: "center",
  [`&.${stepLabelClasses$1.alternativeLabel}`]: {
    flexDirection: "column"
  },
  [`&.${stepLabelClasses$1.disabled}`]: {
    cursor: "default"
  }
}, ownerState.orientation === "vertical" && {
  textAlign: "left",
  padding: "8px 0"
}));
const StepLabelLabel = styled("span", {
  name: "MuiStepLabel",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(({
  theme
}) => _extends$2({}, theme.typography.body2, {
  display: "block",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${stepLabelClasses$1.active}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${stepLabelClasses$1.completed}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${stepLabelClasses$1.alternativeLabel}`]: {
    marginTop: 16
  },
  [`&.${stepLabelClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const StepLabelIconContainer = styled("span", {
  name: "MuiStepLabel",
  slot: "IconContainer",
  overridesResolver: (props, styles) => styles.iconContainer
})(() => ({
  flexShrink: 0,
  // Fix IE11 issue
  display: "flex",
  paddingRight: 8,
  [`&.${stepLabelClasses$1.alternativeLabel}`]: {
    paddingRight: 0
  }
}));
const StepLabelLabelContainer = styled("span", {
  name: "MuiStepLabel",
  slot: "LabelContainer",
  overridesResolver: (props, styles) => styles.labelContainer
})(({
  theme
}) => ({
  width: "100%",
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${stepLabelClasses$1.alternativeLabel}`]: {
    textAlign: "center"
  }
}));
const StepLabel = /* @__PURE__ */ reactExports.forwardRef(function StepLabel2(inProps, ref) {
  var _slotProps$label;
  const props = useThemeProps({
    props: inProps,
    name: "MuiStepLabel"
  });
  const {
    children,
    className,
    componentsProps = {},
    error = false,
    icon: iconProp,
    optional,
    slotProps = {},
    StepIconComponent: StepIconComponentProp,
    StepIconProps
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$x);
  const {
    alternativeLabel,
    orientation
  } = reactExports.useContext(StepperContext$1);
  const {
    active,
    disabled,
    completed,
    icon: iconContext
  } = reactExports.useContext(StepContext$1);
  const icon = iconProp || iconContext;
  let StepIconComponent = StepIconComponentProp;
  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon$1;
  }
  const ownerState = _extends$2({}, props, {
    active,
    alternativeLabel,
    completed,
    disabled,
    error,
    orientation
  });
  const classes = useUtilityClasses$q(ownerState);
  const labelSlotProps = (_slotProps$label = slotProps.label) != null ? _slotProps$label : componentsProps.label;
  return /* @__PURE__ */ jsxs(StepLabelRoot, _extends$2({
    className: clsx(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: [icon || StepIconComponent ? /* @__PURE__ */ jsx(StepLabelIconContainer, {
      className: classes.iconContainer,
      ownerState,
      children: /* @__PURE__ */ jsx(StepIconComponent, _extends$2({
        completed,
        active,
        error,
        icon
      }, StepIconProps))
    }) : null, /* @__PURE__ */ jsxs(StepLabelLabelContainer, {
      className: classes.labelContainer,
      ownerState,
      children: [children ? /* @__PURE__ */ jsx(StepLabelLabel, _extends$2({
        ownerState
      }, labelSlotProps, {
        className: clsx(classes.label, labelSlotProps == null ? void 0 : labelSlotProps.className),
        children
      })) : null, optional]
    })]
  }));
});
StepLabel.muiName = "StepLabel";
const StepLabel$1 = StepLabel;
function getStepConnectorUtilityClass(slot) {
  return generateUtilityClass("MuiStepConnector", slot);
}
const stepConnectorClasses = generateUtilityClasses("MuiStepConnector", ["root", "horizontal", "vertical", "alternativeLabel", "active", "completed", "disabled", "line", "lineHorizontal", "lineVertical"]);
const stepConnectorClasses$1 = stepConnectorClasses;
const _excluded$w = ["className"];
const useUtilityClasses$p = (ownerState) => {
  const {
    classes,
    orientation,
    alternativeLabel,
    active,
    completed,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, alternativeLabel && "alternativeLabel", active && "active", completed && "completed", disabled && "disabled"],
    line: ["line", `line${capitalize(orientation)}`]
  };
  return composeClasses(slots, getStepConnectorUtilityClass, classes);
};
const StepConnectorRoot = styled("div", {
  name: "MuiStepConnector",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.completed && styles.completed];
  }
})(({
  ownerState
}) => _extends$2({
  flex: "1 1 auto"
}, ownerState.orientation === "vertical" && {
  marginLeft: 12
  // half icon
}, ownerState.alternativeLabel && {
  position: "absolute",
  top: 8 + 4,
  left: "calc(-50% + 20px)",
  right: "calc(50% + 20px)"
}));
const StepConnectorLine = styled("span", {
  name: "MuiStepConnector",
  slot: "Line",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.line, styles[`line${capitalize(ownerState.orientation)}`]];
  }
})(({
  ownerState,
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600];
  return _extends$2({
    display: "block",
    borderColor: theme.vars ? theme.vars.palette.StepConnector.border : borderColor
  }, ownerState.orientation === "horizontal" && {
    borderTopStyle: "solid",
    borderTopWidth: 1
  }, ownerState.orientation === "vertical" && {
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    minHeight: 24
  });
});
const StepConnector = /* @__PURE__ */ reactExports.forwardRef(function StepConnector2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiStepConnector"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$w);
  const {
    alternativeLabel,
    orientation = "horizontal"
  } = reactExports.useContext(StepperContext$1);
  const {
    active,
    disabled,
    completed
  } = reactExports.useContext(StepContext$1);
  const ownerState = _extends$2({}, props, {
    alternativeLabel,
    orientation,
    active,
    completed,
    disabled
  });
  const classes = useUtilityClasses$p(ownerState);
  return /* @__PURE__ */ jsx(StepConnectorRoot, _extends$2({
    className: clsx(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx(StepConnectorLine, {
      className: classes.line,
      ownerState
    })
  }));
});
const StepConnector$1 = StepConnector;
function getStepperUtilityClass(slot) {
  return generateUtilityClass("MuiStepper", slot);
}
generateUtilityClasses("MuiStepper", ["root", "horizontal", "vertical", "alternativeLabel"]);
const _excluded$v = ["activeStep", "alternativeLabel", "children", "className", "component", "connector", "nonLinear", "orientation"];
const useUtilityClasses$o = (ownerState) => {
  const {
    orientation,
    alternativeLabel,
    classes
  } = ownerState;
  const slots = {
    root: ["root", orientation, alternativeLabel && "alternativeLabel"]
  };
  return composeClasses(slots, getStepperUtilityClass, classes);
};
const StepperRoot = styled("div", {
  name: "MuiStepper",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel];
  }
})(({
  ownerState
}) => _extends$2({
  display: "flex"
}, ownerState.orientation === "horizontal" && {
  flexDirection: "row",
  alignItems: "center"
}, ownerState.orientation === "vertical" && {
  flexDirection: "column"
}, ownerState.alternativeLabel && {
  alignItems: "flex-start"
}));
const defaultConnector = /* @__PURE__ */ jsx(StepConnector$1, {});
const Stepper = /* @__PURE__ */ reactExports.forwardRef(function Stepper2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiStepper"
  });
  const {
    activeStep = 0,
    alternativeLabel = false,
    children,
    className,
    component = "div",
    connector = defaultConnector,
    nonLinear = false,
    orientation = "horizontal"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$v);
  const ownerState = _extends$2({}, props, {
    alternativeLabel,
    orientation,
    component
  });
  const classes = useUtilityClasses$o(ownerState);
  const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
  const steps = childrenArray.map((step, index) => {
    return /* @__PURE__ */ reactExports.cloneElement(step, _extends$2({
      index,
      last: index + 1 === childrenArray.length
    }, step.props));
  });
  const contextValue = reactExports.useMemo(() => ({
    activeStep,
    alternativeLabel,
    connector,
    nonLinear,
    orientation
  }), [activeStep, alternativeLabel, connector, nonLinear, orientation]);
  return /* @__PURE__ */ jsx(StepperContext$1.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx(StepperRoot, _extends$2({
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref
    }, other, {
      children: steps
    }))
  });
});
const Stepper$1 = Stepper;
const DataLoading = () => /* @__PURE__ */ jsx(Fade, { in: true, children: /* @__PURE__ */ jsx(Grid, { item: true, container: true, justifyContent: "center", sx: {
  bottom: "0",
  left: "0",
  right: "0",
  position: "absolute",
  padding: 3,
  background: (theme) => `linear-gradient(180deg, transparent 0px, ${theme.palette.background.paper} 50%)`
}, children: /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(CircularProgress, { size: 80 }) }) }) });
const parseDirection = (direction) => OrderTypes.Asc.toLowerCase() === direction && direction.toLowerCase() ? OrderTypes.Asc : OrderTypes.Desc;
const SelectBreeds = ({
  field
}) => {
  const [filter, setFilter] = React$4.useState("");
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
    t
  } = useTranslation("animalBreed");
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(AutoCompleteMultipleBase, { label: /* @__PURE__ */ jsx(Typography, { noWrap: true, variant: "inherit", display: "block", sx: {
    width: "100%",
    paddingRight: (theme) => theme.spacing(2)
  }, children: field.label && /* @__PURE__ */ jsx(TransformLabel, { label: field.label, name: field.name }) || t("selectAnimalBreeds") }), field, loading, options: data && data.animalBreeds || [], getOptionLabel: ({
    title
  }) => title || "", isOptionEqualToValue: (option, value) => option.id === value.id, loadingText: t("loadingAutocomplete"), textFieldProps: {
    InputLabelProps: {
      sx: {
        width: "100%"
      }
    }
  }, onInputChange: (_event, value) => {
    setFilter(value);
  }, inputValue: filter, limitTags: 2, disableCloseOnSelect: true }) });
};
const SelectDevelopmentStages = ({
  field,
  animal,
  innerRef,
  getOptionLabel
}) => {
  const {
    data,
    loading
  } = useQuery(ANIMAL_DEVELOPMENT_STAGES, {
    variables: {
      animal
    }
  });
  const {
    t
  } = useTranslation("bovine");
  const options = [...(data == null ? void 0 : data.animalDevelopmentStages) || []].slice().sort((a, b) => a.since - b.since);
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, ref: innerRef, children: /* @__PURE__ */ jsx(ObserverComponent, { children: () => /* @__PURE__ */ jsx(AutoCompleteMultipleBase, { label: field.label && /* @__PURE__ */ jsx(TransformLabel, { label: field.label, name: field.name }) || t("title"), field, options, loading, getOptionLabel: getOptionLabel || ((option) => t(`developmentStages.${getCode(option)}`)) }) }) });
};
const BovineFieldsContext = React$4.createContext(/* @__PURE__ */ Object.create(null));
const BovineFieldsProvider = ({
  children,
  fieldsRender
}) => {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsx(BovineFieldsContext.Provider, { value: {
    fieldsRender,
    open,
    setOpen
  }, children });
};
const useBovineFields = () => React$4.useContext(BovineFieldsContext);
BovineFieldsContext.Consumer;
const AddBovine = React$4.memo((props) => {
  const {
    type
  } = {
    ...props
  };
  const {
    setOpen
  } = useBovineFields();
  const {
    t
  } = useTranslation("bovine");
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Zoom, { in: true, timeout: 200, children: /* @__PURE__ */ jsxs(Box, { height: "100%", children: [
    type === "card" && /* @__PURE__ */ jsx(Card, { sx: {
      height: "100%"
    }, onClick: () => {
      setOpen(true);
    }, children: /* @__PURE__ */ jsxs(CardActionArea, { sx: {
      height: "100%",
      padding: (theme) => theme.spacing(5, 0, 5, 0)
    }, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", align: "center", children: /* @__PURE__ */ jsx(default_1$5, { fontSize: "inherit", color: "action" }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "h5", align: "center", children: t("add") })
    ] }) }),
    (type === "button" || !type) && /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "contained", color: "primary", sx: {
      display: "block"
    }, onClick: () => {
      setOpen(true);
    }, children: /* @__PURE__ */ jsxs(Grid, { container: true, alignItems: "center", children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", sm: "auto", sx: {
        margin: "auto"
      }, children: /* @__PURE__ */ jsx(Grid, { container: true, alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ jsx(default_1$5, {}) }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: true, component: Typography, variant: "inherit", noWrap: true, children: t("add") })
    ] }) })
  ] }) }) });
});
function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = /* @__PURE__ */ new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}
function _typeof$x(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$x = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$x = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$x(obj);
}
function set(dirtyDate, values) {
  requiredArgs(2, arguments);
  if (_typeof$x(values) !== "object" || values === null) {
    throw new RangeError("values parameter must be an object");
  }
  var date = toDate(dirtyDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (values.year != null) {
    date.setFullYear(values.year);
  }
  if (values.month != null) {
    date = setMonth(date, values.month);
  }
  if (values.date != null) {
    date.setDate(toInteger(values.date));
  }
  if (values.hours != null) {
    date.setHours(toInteger(values.hours));
  }
  if (values.minutes != null) {
    date.setMinutes(toInteger(values.minutes));
  }
  if (values.seconds != null) {
    date.setSeconds(toInteger(values.seconds));
  }
  if (values.milliseconds != null) {
    date.setMilliseconds(toInteger(values.milliseconds));
  }
  return date;
}
const DATE_FORMAT$1 = "yyyy-MM-dd";
const TIME_FORMAT$1 = "HH:mm:ss";
var Steps = /* @__PURE__ */ ((Steps2) => {
  Steps2[Steps2["SelectDateTime"] = 0] = "SelectDateTime";
  Steps2[Steps2["Bovines"] = 1] = "Bovines";
  return Steps2;
})(Steps || {});
function assign(target, object) {
  if (target == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      target[property] = object[property];
    }
  }
  return target;
}
function _typeof$w(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$w = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$w = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$w(obj);
}
function _inherits$v(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$v(subClass, superClass);
}
function _setPrototypeOf$v(o, p) {
  _setPrototypeOf$v = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$v(o, p);
}
function _createSuper$v(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$v();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$v(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$v(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$v(this, result);
  };
}
function _possibleConstructorReturn$v(self, call) {
  if (call && (_typeof$w(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$v(self);
}
function _assertThisInitialized$v(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$v() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$v(o) {
  _getPrototypeOf$v = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$v(o);
}
function _classCallCheck$w(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$w(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$w(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$w(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$w(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$v(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /* @__PURE__ */ function() {
  function Setter2() {
    _classCallCheck$w(this, Setter2);
    _defineProperty$v(this, "subPriority", 0);
  }
  _createClass$w(Setter2, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter2;
}();
var ValueSetter = /* @__PURE__ */ function(_Setter) {
  _inherits$v(ValueSetter2, _Setter);
  var _super = _createSuper$v(ValueSetter2);
  function ValueSetter2(value, validateValue, setValue, priority, subPriority) {
    var _this;
    _classCallCheck$w(this, ValueSetter2);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  _createClass$w(ValueSetter2, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set2(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter2;
}(Setter);
var DateToSystemTimezoneSetter = /* @__PURE__ */ function(_Setter2) {
  _inherits$v(DateToSystemTimezoneSetter2, _Setter2);
  var _super2 = _createSuper$v(DateToSystemTimezoneSetter2);
  function DateToSystemTimezoneSetter2() {
    var _this2;
    _classCallCheck$w(this, DateToSystemTimezoneSetter2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty$v(_assertThisInitialized$v(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    _defineProperty$v(_assertThisInitialized$v(_this2), "subPriority", -1);
    return _this2;
  }
  _createClass$w(DateToSystemTimezoneSetter2, [{
    key: "set",
    value: function set2(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = /* @__PURE__ */ new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter2;
}(Setter);
function _classCallCheck$v(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$v(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$v(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$v(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$v(Constructor, staticProps);
  return Constructor;
}
var Parser = /* @__PURE__ */ function() {
  function Parser2() {
    _classCallCheck$v(this, Parser2);
  }
  _createClass$v(Parser2, [{
    key: "run",
    value: function run(dateString, token, match, options) {
      var result = this.parse(dateString, token, match, options);
      if (!result) {
        return null;
      }
      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser2;
}();
function _typeof$v(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$v = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$v = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$v(obj);
}
function _classCallCheck$u(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$u(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$u(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$u(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$u(Constructor, staticProps);
  return Constructor;
}
function _inherits$u(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$u(subClass, superClass);
}
function _setPrototypeOf$u(o, p) {
  _setPrototypeOf$u = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$u(o, p);
}
function _createSuper$u(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$u();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$u(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$u(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$u(this, result);
  };
}
function _possibleConstructorReturn$u(self, call) {
  if (call && (_typeof$v(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$u(self);
}
function _assertThisInitialized$u(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$u() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$u(o) {
  _getPrototypeOf$u = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$u(o);
}
function _defineProperty$u(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EraParser = /* @__PURE__ */ function(_Parser) {
  _inherits$u(EraParser2, _Parser);
  var _super = _createSuper$u(EraParser2);
  function EraParser2() {
    var _this;
    _classCallCheck$u(this, EraParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$u(_assertThisInitialized$u(_this), "priority", 140);
    _defineProperty$u(_assertThisInitialized$u(_this), "incompatibleTokens", ["R", "u", "t", "T"]);
    return _this;
  }
  _createClass$u(EraParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return match.era(dateString, {
            width: "abbreviated"
          }) || match.era(dateString, {
            width: "narrow"
          });
        case "GGGGG":
          return match.era(dateString, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return match.era(dateString, {
            width: "wide"
          }) || match.era(dateString, {
            width: "abbreviated"
          }) || match.era(dateString, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return EraParser2;
}(Parser);
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  var sign = matchResult[1] === "+" ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function _typeof$u(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$u = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$u = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$u(obj);
}
function _classCallCheck$t(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$t(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$t(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$t(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$t(Constructor, staticProps);
  return Constructor;
}
function _inherits$t(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$t(subClass, superClass);
}
function _setPrototypeOf$t(o, p) {
  _setPrototypeOf$t = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$t(o, p);
}
function _createSuper$t(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$t();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$t(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$t(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$t(this, result);
  };
}
function _possibleConstructorReturn$t(self, call) {
  if (call && (_typeof$u(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$t(self);
}
function _assertThisInitialized$t(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$t() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$t(o) {
  _getPrototypeOf$t = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$t(o);
}
function _defineProperty$t(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var YearParser = /* @__PURE__ */ function(_Parser) {
  _inherits$t(YearParser2, _Parser);
  var _super = _createSuper$t(YearParser2);
  function YearParser2() {
    var _this;
    _classCallCheck$t(this, YearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$t(_assertThisInitialized$t(_this), "priority", 130);
    _defineProperty$t(_assertThisInitialized$t(_this), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$t(YearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      var valueCallback = function valueCallback2(year) {
        return {
          year,
          isTwoDigitYear: token === "yy"
        };
      };
      switch (token) {
        case "y":
          return mapValue(parseNDigits(4, dateString), valueCallback);
        case "yo":
          return mapValue(match.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return YearParser2;
}(Parser);
function _typeof$t(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$t = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$t = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$t(obj);
}
function _classCallCheck$s(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$s(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$s(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$s(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$s(Constructor, staticProps);
  return Constructor;
}
function _inherits$s(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$s(subClass, superClass);
}
function _setPrototypeOf$s(o, p) {
  _setPrototypeOf$s = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$s(o, p);
}
function _createSuper$s(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$s();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$s(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$s(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$s(this, result);
  };
}
function _possibleConstructorReturn$s(self, call) {
  if (call && (_typeof$t(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$s(self);
}
function _assertThisInitialized$s(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$s() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$s(o) {
  _getPrototypeOf$s = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$s(o);
}
function _defineProperty$s(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LocalWeekYearParser = /* @__PURE__ */ function(_Parser) {
  _inherits$s(LocalWeekYearParser2, _Parser);
  var _super = _createSuper$s(LocalWeekYearParser2);
  function LocalWeekYearParser2() {
    var _this;
    _classCallCheck$s(this, LocalWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$s(_assertThisInitialized$s(_this), "priority", 130);
    _defineProperty$s(_assertThisInitialized$s(_this), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass$s(LocalWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      var valueCallback = function valueCallback2(year) {
        return {
          year,
          isTwoDigitYear: token === "YY"
        };
      };
      switch (token) {
        case "Y":
          return mapValue(parseNDigits(4, dateString), valueCallback);
        case "Yo":
          return mapValue(match.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }
  }]);
  return LocalWeekYearParser2;
}(Parser);
function _typeof$s(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$s = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$s = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$s(obj);
}
function _classCallCheck$r(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$r(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$r(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$r(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$r(Constructor, staticProps);
  return Constructor;
}
function _inherits$r(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$r(subClass, superClass);
}
function _setPrototypeOf$r(o, p) {
  _setPrototypeOf$r = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$r(o, p);
}
function _createSuper$r(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$r();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$r(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$r(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$r(this, result);
  };
}
function _possibleConstructorReturn$r(self, call) {
  if (call && (_typeof$s(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$r(self);
}
function _assertThisInitialized$r(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$r() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$r(o) {
  _getPrototypeOf$r = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$r(o);
}
function _defineProperty$r(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISOWeekYearParser = /* @__PURE__ */ function(_Parser) {
  _inherits$r(ISOWeekYearParser2, _Parser);
  var _super = _createSuper$r(ISOWeekYearParser2);
  function ISOWeekYearParser2() {
    var _this;
    _classCallCheck$r(this, ISOWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$r(_assertThisInitialized$r(_this), "priority", 130);
    _defineProperty$r(_assertThisInitialized$r(_this), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$r(ISOWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "R") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      var firstWeekOfYear = /* @__PURE__ */ new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  }]);
  return ISOWeekYearParser2;
}(Parser);
function _typeof$r(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$r = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$r = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$r(obj);
}
function _classCallCheck$q(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$q(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$q(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$q(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$q(Constructor, staticProps);
  return Constructor;
}
function _inherits$q(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$q(subClass, superClass);
}
function _setPrototypeOf$q(o, p) {
  _setPrototypeOf$q = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$q(o, p);
}
function _createSuper$q(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$q();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$q(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$q(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$q(this, result);
  };
}
function _possibleConstructorReturn$q(self, call) {
  if (call && (_typeof$r(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$q(self);
}
function _assertThisInitialized$q(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$q() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$q(o) {
  _getPrototypeOf$q = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$q(o);
}
function _defineProperty$q(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ExtendedYearParser = /* @__PURE__ */ function(_Parser) {
  _inherits$q(ExtendedYearParser2, _Parser);
  var _super = _createSuper$q(ExtendedYearParser2);
  function ExtendedYearParser2() {
    var _this;
    _classCallCheck$q(this, ExtendedYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$q(_assertThisInitialized$q(_this), "priority", 130);
    _defineProperty$q(_assertThisInitialized$q(_this), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$q(ExtendedYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "u") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ExtendedYearParser2;
}(Parser);
function _typeof$q(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$q = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$q = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$q(obj);
}
function _classCallCheck$p(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$p(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$p(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$p(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$p(Constructor, staticProps);
  return Constructor;
}
function _inherits$p(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$p(subClass, superClass);
}
function _setPrototypeOf$p(o, p) {
  _setPrototypeOf$p = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$p(o, p);
}
function _createSuper$p(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$p();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$p(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$p(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$p(this, result);
  };
}
function _possibleConstructorReturn$p(self, call) {
  if (call && (_typeof$q(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$p(self);
}
function _assertThisInitialized$p(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$p() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$p(o) {
  _getPrototypeOf$p = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$p(o);
}
function _defineProperty$p(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var QuarterParser = /* @__PURE__ */ function(_Parser) {
  _inherits$p(QuarterParser2, _Parser);
  var _super = _createSuper$p(QuarterParser2);
  function QuarterParser2() {
    var _this;
    _classCallCheck$p(this, QuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$p(_assertThisInitialized$p(_this), "priority", 120);
    _defineProperty$p(_assertThisInitialized$p(_this), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$p(QuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "Q":
        case "QQ":
          return parseNDigits(token.length, dateString);
        case "Qo":
          return match.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "QQQ":
          return match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return match.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return match.quarter(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser2;
}(Parser);
function _typeof$p(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$p = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$p = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$p(obj);
}
function _classCallCheck$o(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$o(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$o(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$o(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$o(Constructor, staticProps);
  return Constructor;
}
function _inherits$o(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$o(subClass, superClass);
}
function _setPrototypeOf$o(o, p) {
  _setPrototypeOf$o = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$o(o, p);
}
function _createSuper$o(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$o();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$o(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$o(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$o(this, result);
  };
}
function _possibleConstructorReturn$o(self, call) {
  if (call && (_typeof$p(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$o(self);
}
function _assertThisInitialized$o(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$o() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$o(o) {
  _getPrototypeOf$o = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$o(o);
}
function _defineProperty$o(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var StandAloneQuarterParser = /* @__PURE__ */ function(_Parser) {
  _inherits$o(StandAloneQuarterParser2, _Parser);
  var _super = _createSuper$o(StandAloneQuarterParser2);
  function StandAloneQuarterParser2() {
    var _this;
    _classCallCheck$o(this, StandAloneQuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$o(_assertThisInitialized$o(_this), "priority", 120);
    _defineProperty$o(_assertThisInitialized$o(_this), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$o(StandAloneQuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "q":
        case "qq":
          return parseNDigits(token.length, dateString);
        case "qo":
          return match.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "qqq":
          return match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return match.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return match.quarter(dateString, {
            width: "wide",
            context: "standalone"
          }) || match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneQuarterParser2;
}(Parser);
function _typeof$o(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$o = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$o = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$o(obj);
}
function _classCallCheck$n(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$n(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$n(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$n(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$n(Constructor, staticProps);
  return Constructor;
}
function _inherits$n(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$n(subClass, superClass);
}
function _setPrototypeOf$n(o, p) {
  _setPrototypeOf$n = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$n(o, p);
}
function _createSuper$n(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$n();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$n(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$n(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$n(this, result);
  };
}
function _possibleConstructorReturn$n(self, call) {
  if (call && (_typeof$o(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$n(self);
}
function _assertThisInitialized$n(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$n() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$n(o) {
  _getPrototypeOf$n = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$n(o);
}
function _defineProperty$n(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MonthParser = /* @__PURE__ */ function(_Parser) {
  _inherits$n(MonthParser2, _Parser);
  var _super = _createSuper$n(MonthParser2);
  function MonthParser2() {
    var _this;
    _classCallCheck$n(this, MonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$n(_assertThisInitialized$n(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    _defineProperty$n(_assertThisInitialized$n(_this), "priority", 110);
    return _this;
  }
  _createClass$n(MonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      var valueCallback = function valueCallback2(value) {
        return value - 1;
      };
      switch (token) {
        case "M":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
        case "MM":
          return mapValue(parseNDigits(2, dateString), valueCallback);
        case "Mo":
          return mapValue(match.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback);
        case "MMM":
          return match.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return match.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return match.month(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return MonthParser2;
}(Parser);
function _typeof$n(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$n = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$n = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$n(obj);
}
function _classCallCheck$m(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$m(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$m(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$m(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$m(Constructor, staticProps);
  return Constructor;
}
function _inherits$m(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$m(subClass, superClass);
}
function _setPrototypeOf$m(o, p) {
  _setPrototypeOf$m = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$m(o, p);
}
function _createSuper$m(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$m();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$m(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$m(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$m(this, result);
  };
}
function _possibleConstructorReturn$m(self, call) {
  if (call && (_typeof$n(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$m(self);
}
function _assertThisInitialized$m(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$m() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$m(o) {
  _getPrototypeOf$m = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$m(o);
}
function _defineProperty$m(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var StandAloneMonthParser = /* @__PURE__ */ function(_Parser) {
  _inherits$m(StandAloneMonthParser2, _Parser);
  var _super = _createSuper$m(StandAloneMonthParser2);
  function StandAloneMonthParser2() {
    var _this;
    _classCallCheck$m(this, StandAloneMonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$m(_assertThisInitialized$m(_this), "priority", 110);
    _defineProperty$m(_assertThisInitialized$m(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$m(StandAloneMonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      var valueCallback = function valueCallback2(value) {
        return value - 1;
      };
      switch (token) {
        case "L":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
        case "LL":
          return mapValue(parseNDigits(2, dateString), valueCallback);
        case "Lo":
          return mapValue(match.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback);
        case "LLL":
          return match.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return match.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return match.month(dateString, {
            width: "wide",
            context: "standalone"
          }) || match.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneMonthParser2;
}(Parser);
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
function _typeof$m(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$m = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$m = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$m(obj);
}
function _classCallCheck$l(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$l(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$l(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$l(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$l(Constructor, staticProps);
  return Constructor;
}
function _inherits$l(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$l(subClass, superClass);
}
function _setPrototypeOf$l(o, p) {
  _setPrototypeOf$l = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$l(o, p);
}
function _createSuper$l(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$l();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$l(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$l(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$l(this, result);
  };
}
function _possibleConstructorReturn$l(self, call) {
  if (call && (_typeof$m(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$l(self);
}
function _assertThisInitialized$l(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$l() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$l(o) {
  _getPrototypeOf$l = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$l(o);
}
function _defineProperty$l(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LocalWeekParser = /* @__PURE__ */ function(_Parser) {
  _inherits$l(LocalWeekParser2, _Parser);
  var _super = _createSuper$l(LocalWeekParser2);
  function LocalWeekParser2() {
    var _this;
    _classCallCheck$l(this, LocalWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$l(_assertThisInitialized$l(_this), "priority", 100);
    _defineProperty$l(_assertThisInitialized$l(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass$l(LocalWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "w":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "wo":
          return match.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
  }]);
  return LocalWeekParser2;
}(Parser);
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
function _typeof$l(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$l = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$l = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$l(obj);
}
function _classCallCheck$k(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$k(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$k(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$k(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$k(Constructor, staticProps);
  return Constructor;
}
function _inherits$k(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$k(subClass, superClass);
}
function _setPrototypeOf$k(o, p) {
  _setPrototypeOf$k = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$k(o, p);
}
function _createSuper$k(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$k();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$k(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$k(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$k(this, result);
  };
}
function _possibleConstructorReturn$k(self, call) {
  if (call && (_typeof$l(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$k(self);
}
function _assertThisInitialized$k(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$k() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$k(o) {
  _getPrototypeOf$k = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$k(o);
}
function _defineProperty$k(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISOWeekParser = /* @__PURE__ */ function(_Parser) {
  _inherits$k(ISOWeekParser2, _Parser);
  var _super = _createSuper$k(ISOWeekParser2);
  function ISOWeekParser2() {
    var _this;
    _classCallCheck$k(this, ISOWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$k(_assertThisInitialized$k(_this), "priority", 100);
    _defineProperty$k(_assertThisInitialized$k(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$k(ISOWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "I":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "Io":
          return match.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
  }]);
  return ISOWeekParser2;
}(Parser);
function _typeof$k(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$k = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$k = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$k(obj);
}
function _classCallCheck$j(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$j(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$j(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$j(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$j(Constructor, staticProps);
  return Constructor;
}
function _inherits$j(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$j(subClass, superClass);
}
function _setPrototypeOf$j(o, p) {
  _setPrototypeOf$j = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$j(o, p);
}
function _createSuper$j(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$j();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$j(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$j(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$j(this, result);
  };
}
function _possibleConstructorReturn$j(self, call) {
  if (call && (_typeof$k(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$j(self);
}
function _assertThisInitialized$j(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$j() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$j(o) {
  _getPrototypeOf$j = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$j(o);
}
function _defineProperty$j(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DateParser = /* @__PURE__ */ function(_Parser) {
  _inherits$j(DateParser2, _Parser);
  var _super = _createSuper$j(DateParser2);
  function DateParser2() {
    var _this;
    _classCallCheck$j(this, DateParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$j(_assertThisInitialized$j(_this), "priority", 90);
    _defineProperty$j(_assertThisInitialized$j(_this), "subPriority", 1);
    _defineProperty$j(_assertThisInitialized$j(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$j(DateParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "d":
          return parseNumericPattern(numericPatterns.date, dateString);
        case "do":
          return match.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DateParser2;
}(Parser);
function _typeof$j(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$j = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$j = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$j(obj);
}
function _classCallCheck$i(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$i(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$i(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$i(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$i(Constructor, staticProps);
  return Constructor;
}
function _inherits$i(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$i(subClass, superClass);
}
function _setPrototypeOf$i(o, p) {
  _setPrototypeOf$i = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$i(o, p);
}
function _createSuper$i(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$i();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$i(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$i(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$i(this, result);
  };
}
function _possibleConstructorReturn$i(self, call) {
  if (call && (_typeof$j(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$i(self);
}
function _assertThisInitialized$i(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$i() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$i(o) {
  _getPrototypeOf$i = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$i(o);
}
function _defineProperty$i(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DayOfYearParser = /* @__PURE__ */ function(_Parser) {
  _inherits$i(DayOfYearParser2, _Parser);
  var _super = _createSuper$i(DayOfYearParser2);
  function DayOfYearParser2() {
    var _this;
    _classCallCheck$i(this, DayOfYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$i(_assertThisInitialized$i(_this), "priority", 90);
    _defineProperty$i(_assertThisInitialized$i(_this), "subpriority", 1);
    _defineProperty$i(_assertThisInitialized$i(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$i(DayOfYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "D":
        case "DD":
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);
        case "Do":
          return match.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayOfYearParser2;
}(Parser);
function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(2, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
function _typeof$i(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$i = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$i = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$i(obj);
}
function _classCallCheck$h(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$h(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$h(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$h(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$h(Constructor, staticProps);
  return Constructor;
}
function _inherits$h(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$h(subClass, superClass);
}
function _setPrototypeOf$h(o, p) {
  _setPrototypeOf$h = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$h(o, p);
}
function _createSuper$h(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$h();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$h(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$h(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$h(this, result);
  };
}
function _possibleConstructorReturn$h(self, call) {
  if (call && (_typeof$i(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$h(self);
}
function _assertThisInitialized$h(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$h() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$h(o) {
  _getPrototypeOf$h = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$h(o);
}
function _defineProperty$h(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DayParser = /* @__PURE__ */ function(_Parser) {
  _inherits$h(DayParser2, _Parser);
  var _super = _createSuper$h(DayParser2);
  function DayParser2() {
    var _this;
    _classCallCheck$h(this, DayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$h(_assertThisInitialized$h(_this), "priority", 90);
    _defineProperty$h(_assertThisInitialized$h(_this), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$h(DayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return match.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return match.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayParser2;
}(Parser);
function _typeof$h(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$h = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$h = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$h(obj);
}
function _classCallCheck$g(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$g(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$g(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$g(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$g(Constructor, staticProps);
  return Constructor;
}
function _inherits$g(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$g(subClass, superClass);
}
function _setPrototypeOf$g(o, p) {
  _setPrototypeOf$g = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$g(o, p);
}
function _createSuper$g(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$g();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$g(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$g(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$g(this, result);
  };
}
function _possibleConstructorReturn$g(self, call) {
  if (call && (_typeof$h(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$g(self);
}
function _assertThisInitialized$g(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$g() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$g(o) {
  _getPrototypeOf$g = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$g(o);
}
function _defineProperty$g(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LocalDayParser = /* @__PURE__ */ function(_Parser) {
  _inherits$g(LocalDayParser2, _Parser);
  var _super = _createSuper$g(LocalDayParser2);
  function LocalDayParser2() {
    var _this;
    _classCallCheck$g(this, LocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$g(_assertThisInitialized$g(_this), "priority", 90);
    _defineProperty$g(_assertThisInitialized$g(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
    return _this;
  }
  _createClass$g(LocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match, options) {
      var valueCallback = function valueCallback2(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "e":
        case "ee":
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
        case "eo":
          return mapValue(match.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback);
        case "eee":
          return match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return match.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return match.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return LocalDayParser2;
}(Parser);
function _typeof$g(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$g = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$g = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$g(obj);
}
function _classCallCheck$f(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$f(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$f(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$f(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$f(Constructor, staticProps);
  return Constructor;
}
function _inherits$f(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$f(subClass, superClass);
}
function _setPrototypeOf$f(o, p) {
  _setPrototypeOf$f = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$f(o, p);
}
function _createSuper$f(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$f();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$f(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$f(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$f(this, result);
  };
}
function _possibleConstructorReturn$f(self, call) {
  if (call && (_typeof$g(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$f(self);
}
function _assertThisInitialized$f(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$f() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$f(o) {
  _getPrototypeOf$f = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$f(o);
}
function _defineProperty$f(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var StandAloneLocalDayParser = /* @__PURE__ */ function(_Parser) {
  _inherits$f(StandAloneLocalDayParser2, _Parser);
  var _super = _createSuper$f(StandAloneLocalDayParser2);
  function StandAloneLocalDayParser2() {
    var _this;
    _classCallCheck$f(this, StandAloneLocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$f(_assertThisInitialized$f(_this), "priority", 90);
    _defineProperty$f(_assertThisInitialized$f(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
    return _this;
  }
  _createClass$f(StandAloneLocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match, options) {
      var valueCallback = function valueCallback2(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "c":
        case "cc":
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
        case "co":
          return mapValue(match.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback);
        case "ccc":
          return match.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return match.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return match.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return match.day(dateString, {
            width: "wide",
            context: "standalone"
          }) || match.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneLocalDayParser2;
}(Parser);
function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
function _typeof$f(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$f = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$f = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$f(obj);
}
function _classCallCheck$e(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$e(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$e(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$e(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$e(Constructor, staticProps);
  return Constructor;
}
function _inherits$e(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$e(subClass, superClass);
}
function _setPrototypeOf$e(o, p) {
  _setPrototypeOf$e = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$e(o, p);
}
function _createSuper$e(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$e();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$e(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$e(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$e(this, result);
  };
}
function _possibleConstructorReturn$e(self, call) {
  if (call && (_typeof$f(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$e(self);
}
function _assertThisInitialized$e(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$e() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$e(o) {
  _getPrototypeOf$e = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$e(o);
}
function _defineProperty$e(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISODayParser = /* @__PURE__ */ function(_Parser) {
  _inherits$e(ISODayParser2, _Parser);
  var _super = _createSuper$e(ISODayParser2);
  function ISODayParser2() {
    var _this;
    _classCallCheck$e(this, ISODayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$e(_assertThisInitialized$e(_this), "priority", 90);
    _defineProperty$e(_assertThisInitialized$e(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass$e(ISODayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      var valueCallback = function valueCallback2(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        case "i":
        case "ii":
          return parseNDigits(token.length, dateString);
        case "io":
          return match.ordinalNumber(dateString, {
            unit: "day"
          });
        case "iii":
          return mapValue(match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback);
        case "iiiii":
          return mapValue(match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback);
        case "iiiiii":
          return mapValue(match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback);
        case "iiii":
        default:
          return mapValue(match.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ISODayParser2;
}(Parser);
function _typeof$e(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$e = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$e = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$e(obj);
}
function _classCallCheck$d(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$d(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$d(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$d(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$d(Constructor, staticProps);
  return Constructor;
}
function _inherits$d(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$d(subClass, superClass);
}
function _setPrototypeOf$d(o, p) {
  _setPrototypeOf$d = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$d(o, p);
}
function _createSuper$d(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$d();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$d(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$d(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$d(this, result);
  };
}
function _possibleConstructorReturn$d(self, call) {
  if (call && (_typeof$e(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$d(self);
}
function _assertThisInitialized$d(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$d() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$d(o) {
  _getPrototypeOf$d = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$d(o);
}
function _defineProperty$d(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var AMPMParser = /* @__PURE__ */ function(_Parser) {
  _inherits$d(AMPMParser2, _Parser);
  var _super = _createSuper$d(AMPMParser2);
  function AMPMParser2() {
    var _this;
    _classCallCheck$d(this, AMPMParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$d(_assertThisInitialized$d(_this), "priority", 80);
    _defineProperty$d(_assertThisInitialized$d(_this), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass$d(AMPMParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "a":
        case "aa":
        case "aaa":
          return match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser2;
}(Parser);
function _typeof$d(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$d = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$d = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$d(obj);
}
function _classCallCheck$c(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$c(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$c(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$c(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$c(Constructor, staticProps);
  return Constructor;
}
function _inherits$c(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$c(subClass, superClass);
}
function _setPrototypeOf$c(o, p) {
  _setPrototypeOf$c = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$c(o, p);
}
function _createSuper$c(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$c();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$c(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$c(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$c(this, result);
  };
}
function _possibleConstructorReturn$c(self, call) {
  if (call && (_typeof$d(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$c(self);
}
function _assertThisInitialized$c(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$c() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$c(o) {
  _getPrototypeOf$c = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$c(o);
}
function _defineProperty$c(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var AMPMMidnightParser = /* @__PURE__ */ function(_Parser) {
  _inherits$c(AMPMMidnightParser2, _Parser);
  var _super = _createSuper$c(AMPMMidnightParser2);
  function AMPMMidnightParser2() {
    var _this;
    _classCallCheck$c(this, AMPMMidnightParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$c(_assertThisInitialized$c(_this), "priority", 80);
    _defineProperty$c(_assertThisInitialized$c(_this), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass$c(AMPMMidnightParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "b":
        case "bb":
        case "bbb":
          return match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMMidnightParser2;
}(Parser);
function _typeof$c(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$c = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$c = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$c(obj);
}
function _classCallCheck$b(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$b(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$b(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$b(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$b(Constructor, staticProps);
  return Constructor;
}
function _inherits$b(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$b(subClass, superClass);
}
function _setPrototypeOf$b(o, p) {
  _setPrototypeOf$b = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$b(o, p);
}
function _createSuper$b(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$b();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$b(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$b(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$b(this, result);
  };
}
function _possibleConstructorReturn$b(self, call) {
  if (call && (_typeof$c(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$b(self);
}
function _assertThisInitialized$b(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$b() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$b(o) {
  _getPrototypeOf$b = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$b(o);
}
function _defineProperty$b(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DayPeriodParser = /* @__PURE__ */ function(_Parser) {
  _inherits$b(DayPeriodParser2, _Parser);
  var _super = _createSuper$b(DayPeriodParser2);
  function DayPeriodParser2() {
    var _this;
    _classCallCheck$b(this, DayPeriodParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$b(_assertThisInitialized$b(_this), "priority", 80);
    _defineProperty$b(_assertThisInitialized$b(_this), "incompatibleTokens", ["a", "b", "t", "T"]);
    return _this;
  }
  _createClass$b(DayPeriodParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return DayPeriodParser2;
}(Parser);
function _typeof$b(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$b = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$b = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$b(obj);
}
function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$a(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$a(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$a(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$a(Constructor, staticProps);
  return Constructor;
}
function _inherits$a(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$a(subClass, superClass);
}
function _setPrototypeOf$a(o, p) {
  _setPrototypeOf$a = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$a(o, p);
}
function _createSuper$a(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$a();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$a(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$a(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$a(this, result);
  };
}
function _possibleConstructorReturn$a(self, call) {
  if (call && (_typeof$b(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$a(self);
}
function _assertThisInitialized$a(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$a() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$a(o) {
  _getPrototypeOf$a = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$a(o);
}
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Hour1to12Parser = /* @__PURE__ */ function(_Parser) {
  _inherits$a(Hour1to12Parser2, _Parser);
  var _super = _createSuper$a(Hour1to12Parser2);
  function Hour1to12Parser2() {
    var _this;
    _classCallCheck$a(this, Hour1to12Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$a(_assertThisInitialized$a(_this), "priority", 70);
    _defineProperty$a(_assertThisInitialized$a(_this), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass$a(Hour1to12Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "h":
          return parseNumericPattern(numericPatterns.hour12h, dateString);
        case "ho":
          return match.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour1to12Parser2;
}(Parser);
function _typeof$a(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$a = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$a = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$a(obj);
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$9(Constructor, staticProps);
  return Constructor;
}
function _inherits$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$9(subClass, superClass);
}
function _setPrototypeOf$9(o, p) {
  _setPrototypeOf$9 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$9(o, p);
}
function _createSuper$9(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$9();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$9(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$9(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$9(this, result);
  };
}
function _possibleConstructorReturn$9(self, call) {
  if (call && (_typeof$a(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$9(self);
}
function _assertThisInitialized$9(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$9() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$9(o) {
  _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$9(o);
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Hour0to23Parser = /* @__PURE__ */ function(_Parser) {
  _inherits$9(Hour0to23Parser2, _Parser);
  var _super = _createSuper$9(Hour0to23Parser2);
  function Hour0to23Parser2() {
    var _this;
    _classCallCheck$9(this, Hour0to23Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$9(_assertThisInitialized$9(_this), "priority", 70);
    _defineProperty$9(_assertThisInitialized$9(_this), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass$9(Hour0to23Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "H":
          return parseNumericPattern(numericPatterns.hour23h, dateString);
        case "Ho":
          return match.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);
  return Hour0to23Parser2;
}(Parser);
function _typeof$9(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$9 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$9 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$9(obj);
}
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$8(Constructor, staticProps);
  return Constructor;
}
function _inherits$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$8(subClass, superClass);
}
function _setPrototypeOf$8(o, p) {
  _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$8(o, p);
}
function _createSuper$8(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$8();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$8(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$8(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$8(this, result);
  };
}
function _possibleConstructorReturn$8(self, call) {
  if (call && (_typeof$9(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$8(self);
}
function _assertThisInitialized$8(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$8() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$8(o) {
  _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$8(o);
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Hour0To11Parser = /* @__PURE__ */ function(_Parser) {
  _inherits$8(Hour0To11Parser2, _Parser);
  var _super = _createSuper$8(Hour0To11Parser2);
  function Hour0To11Parser2() {
    var _this;
    _classCallCheck$8(this, Hour0To11Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$8(_assertThisInitialized$8(_this), "priority", 70);
    _defineProperty$8(_assertThisInitialized$8(_this), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass$8(Hour0To11Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "K":
          return parseNumericPattern(numericPatterns.hour11h, dateString);
        case "Ko":
          return match.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser2;
}(Parser);
function _typeof$8(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$8 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$8 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$8(obj);
}
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$7(Constructor, staticProps);
  return Constructor;
}
function _inherits$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$7(subClass, superClass);
}
function _setPrototypeOf$7(o, p) {
  _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$7(o, p);
}
function _createSuper$7(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$7();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$7(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$7(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$7(this, result);
  };
}
function _possibleConstructorReturn$7(self, call) {
  if (call && (_typeof$8(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$7(self);
}
function _assertThisInitialized$7(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$7() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$7(o) {
  _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$7(o);
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Hour1To24Parser = /* @__PURE__ */ function(_Parser) {
  _inherits$7(Hour1To24Parser2, _Parser);
  var _super = _createSuper$7(Hour1To24Parser2);
  function Hour1To24Parser2() {
    var _this;
    _classCallCheck$7(this, Hour1To24Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$7(_assertThisInitialized$7(_this), "priority", 70);
    _defineProperty$7(_assertThisInitialized$7(_this), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
    return _this;
  }
  _createClass$7(Hour1To24Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "k":
          return parseNumericPattern(numericPatterns.hour24h, dateString);
        case "ko":
          return match.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);
  return Hour1To24Parser2;
}(Parser);
function _typeof$7(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$7 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$7 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$7(obj);
}
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$6(Constructor, staticProps);
  return Constructor;
}
function _inherits$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$6(subClass, superClass);
}
function _setPrototypeOf$6(o, p) {
  _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$6(o, p);
}
function _createSuper$6(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$6();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$6(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$6(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$6(this, result);
  };
}
function _possibleConstructorReturn$6(self, call) {
  if (call && (_typeof$7(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$6(self);
}
function _assertThisInitialized$6(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$6() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$6(o) {
  _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$6(o);
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MinuteParser = /* @__PURE__ */ function(_Parser) {
  _inherits$6(MinuteParser2, _Parser);
  var _super = _createSuper$6(MinuteParser2);
  function MinuteParser2() {
    var _this;
    _classCallCheck$6(this, MinuteParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$6(_assertThisInitialized$6(_this), "priority", 60);
    _defineProperty$6(_assertThisInitialized$6(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass$6(MinuteParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "m":
          return parseNumericPattern(numericPatterns.minute, dateString);
        case "mo":
          return match.ordinalNumber(dateString, {
            unit: "minute"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);
  return MinuteParser2;
}(Parser);
function _typeof$6(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$6 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$6 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$6(obj);
}
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$5(Constructor, staticProps);
  return Constructor;
}
function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$5(subClass, superClass);
}
function _setPrototypeOf$5(o, p) {
  _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$5(o, p);
}
function _createSuper$5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$5();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$5(this, result);
  };
}
function _possibleConstructorReturn$5(self, call) {
  if (call && (_typeof$6(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$5(self);
}
function _assertThisInitialized$5(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$5() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$5(o) {
  _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$5(o);
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SecondParser = /* @__PURE__ */ function(_Parser) {
  _inherits$5(SecondParser2, _Parser);
  var _super = _createSuper$5(SecondParser2);
  function SecondParser2() {
    var _this;
    _classCallCheck$5(this, SecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$5(_assertThisInitialized$5(_this), "priority", 50);
    _defineProperty$5(_assertThisInitialized$5(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass$5(SecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match) {
      switch (token) {
        case "s":
          return parseNumericPattern(numericPatterns.second, dateString);
        case "so":
          return match.ordinalNumber(dateString, {
            unit: "second"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);
  return SecondParser2;
}(Parser);
function _typeof$5(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$5 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$5 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$5(obj);
}
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$4(Constructor, staticProps);
  return Constructor;
}
function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$4(subClass, superClass);
}
function _setPrototypeOf$4(o, p) {
  _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$4(o, p);
}
function _createSuper$4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$4(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$4(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$4(this, result);
  };
}
function _possibleConstructorReturn$4(self, call) {
  if (call && (_typeof$5(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$4(self);
}
function _assertThisInitialized$4(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$4() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$4(o) {
  _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$4(o);
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FractionOfSecondParser = /* @__PURE__ */ function(_Parser) {
  _inherits$4(FractionOfSecondParser2, _Parser);
  var _super = _createSuper$4(FractionOfSecondParser2);
  function FractionOfSecondParser2() {
    var _this;
    _classCallCheck$4(this, FractionOfSecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$4(_assertThisInitialized$4(_this), "priority", 30);
    _defineProperty$4(_assertThisInitialized$4(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass$4(FractionOfSecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      var valueCallback = function valueCallback2(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);
  return FractionOfSecondParser2;
}(Parser);
function _typeof$4(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$4 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$4 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$4(obj);
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$3(subClass, superClass);
}
function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$3(o, p);
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$3(this, result);
  };
}
function _possibleConstructorReturn$3(self, call) {
  if (call && (_typeof$4(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$3(self);
}
function _assertThisInitialized$3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$3(o);
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISOTimezoneWithZParser = /* @__PURE__ */ function(_Parser) {
  _inherits$3(ISOTimezoneWithZParser2, _Parser);
  var _super = _createSuper$3(ISOTimezoneWithZParser2);
  function ISOTimezoneWithZParser2() {
    var _this;
    _classCallCheck$3(this, ISOTimezoneWithZParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$3(_assertThisInitialized$3(_this), "priority", 10);
    _defineProperty$3(_assertThisInitialized$3(_this), "incompatibleTokens", ["t", "T", "x"]);
    return _this;
  }
  _createClass$3(ISOTimezoneWithZParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "X":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "XX":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "XXXX":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "XXXXX":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "XXX":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser2;
}(Parser);
function _typeof$3(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$3 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$3(obj);
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  return Constructor;
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$2(o, p);
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$2(this, result);
  };
}
function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$3(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$2(self);
}
function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$2(o);
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ISOTimezoneParser = /* @__PURE__ */ function(_Parser) {
  _inherits$2(ISOTimezoneParser2, _Parser);
  var _super = _createSuper$2(ISOTimezoneParser2);
  function ISOTimezoneParser2() {
    var _this;
    _classCallCheck$2(this, ISOTimezoneParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$2(_assertThisInitialized$2(_this), "priority", 10);
    _defineProperty$2(_assertThisInitialized$2(_this), "incompatibleTokens", ["t", "T", "X"]);
    return _this;
  }
  _createClass$2(ISOTimezoneParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "x":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "xx":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "xxxx":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "xxxxx":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "xxx":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneParser2;
}(Parser);
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$2 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$2(obj);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TimestampSecondsParser = /* @__PURE__ */ function(_Parser) {
  _inherits$1(TimestampSecondsParser2, _Parser);
  var _super = _createSuper$1(TimestampSecondsParser2);
  function TimestampSecondsParser2() {
    var _this;
    _classCallCheck$1(this, TimestampSecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$1(_assertThisInitialized$1(_this), "priority", 40);
    _defineProperty$1(_assertThisInitialized$1(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass$1(TimestampSecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value * 1e3), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampSecondsParser2;
}(Parser);
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
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
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TimestampMillisecondsParser = /* @__PURE__ */ function(_Parser) {
  _inherits(TimestampMillisecondsParser2, _Parser);
  var _super = _createSuper(TimestampMillisecondsParser2);
  function TimestampMillisecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampMillisecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 20);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampMillisecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser2;
}(Parser);
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = o[Symbol.iterator]();
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  if (!locale.match) {
    throw new RangeError("locale must contain match property");
  }
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (formatString === "") {
    if (dateString === "") {
      return toDate(dirtyReferenceDate);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  var setters = [new DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter in longFormatters$2) {
      var longFormatter = longFormatters$2[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp);
  var usedTokens = [];
  var _iterator = _createForOfIteratorHelper(tokens), _step;
  try {
    var _loop = function _loop2() {
      var token = _step.value;
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];
      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;
        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function(usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });
          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }
        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale.match, subFnOptions);
        if (!parseResult) {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString(token);
        }
        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _ret = _loop();
      if (_typeof(_ret) === "object")
        return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function(setter2) {
    return setter2.priority;
  }).sort(function(a, b) {
    return b - a;
  }).filter(function(priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function(priority) {
    return setters.filter(function(setter2) {
      return setter2.priority === priority;
    }).sort(function(a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function(setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};
  var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var setter = _step2.value;
      if (!setter.validate(utcDate, subFnOptions)) {
        return /* @__PURE__ */ new Date(NaN);
      }
      var result = setter.set(utcDate, flags, subFnOptions);
      if (Array.isArray(result)) {
        utcDate = result[0];
        assign(flags, result[1]);
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return utcDate;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
const useDateParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const key = "date";
  const formatString = DATE_FORMAT$1;
  return {
    getDate: () => {
      const date = searchParams.get(key);
      if (date)
        return parse(date, formatString, /* @__PURE__ */ new Date());
      return null;
    },
    saveDate: (date) => {
      if (date)
        searchParams.set(key, format(date, formatString));
      else
        searchParams.delete(key);
      setSearchParams(searchParams, {
        replace: true
      });
    },
    key
  };
};
const useTimeParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const key = "time";
  const formatString = TIME_FORMAT$1;
  return {
    getTime: () => {
      const date = searchParams.get(key);
      if (date)
        return parse(date, formatString, /* @__PURE__ */ new Date());
      return null;
    },
    saveTime: (time) => {
      if (time)
        searchParams.set(key, format(time, formatString));
      else
        searchParams.delete(key);
      setSearchParams(searchParams, {
        replace: true
      });
    },
    key
  };
};
const isProductionDateValid = (date) => !!date;
function useSteps$1() {
  const {
    t
  } = useTranslation("milkProductivities");
  const steps = reactExports.useMemo(() => [{
    label: t("steps.selectDateTime.title"),
    code: Steps.SelectDateTime
  }, {
    label: t("steps.selectBovines.title"),
    code: Steps.Bovines
  }], [t]);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    getDate: getDate2,
    saveDate,
    key: dateKey
  } = useDateParam();
  const {
    getTime,
    saveTime,
    key: timeKey
  } = useTimeParam();
  const [productionDate, setProductionDate] = reactExports.useState(() => getDate2());
  const [productionTime, setProductionTime] = reactExports.useState(() => getTime());
  const fields = reactExports.useMemo(() => ({
    productionDate: {
      value: productionDate,
      onChange: (newValue) => setProductionDate(newValue),
      error: !isProductionDateValid(productionDate)
    },
    productionTime: {
      value: productionTime,
      onChange: (newValue) => setProductionTime(newValue),
      error: !isProductionDateValid(productionTime)
    }
  }), [productionDate, productionTime]);
  const initialState = reactExports.useCallback(() => {
    const fieldsSteps = [{
      active: fields.productionDate.error,
      nextStep: Steps.SelectDateTime
    }, {
      active: fields.productionTime.error,
      nextStep: Steps.SelectDateTime
    }, {
      active: true,
      nextStep: Steps.Bovines
    }];
    const fieldsStep = fieldsSteps.find((step) => step.active);
    return (fieldsStep == null ? void 0 : fieldsStep.nextStep) || Steps.SelectDateTime;
  }, [fields.productionDate.error, fields.productionTime.error]);
  const [activeStep, setActiveStep] = reactExports.useState(initialState);
  const [validate, setValidate] = reactExports.useState(false);
  const onChangeStep = reactExports.useCallback((newStep) => {
    setValidate(true);
    if (newStep === Steps.SelectDateTime) {
      if (!isProductionDateValid(productionDate))
        return;
      saveDate(productionDate);
    }
    if (newStep === Steps.Bovines) {
      if (!isProductionDateValid(productionTime))
        return;
      saveTime(productionTime);
    }
    setValidate(false);
    setActiveStep(newStep);
  }, [productionDate, saveDate, productionTime, saveTime]);
  const clearParams = reactExports.useCallback(() => {
    searchParams.delete(dateKey);
    searchParams.delete(timeKey);
    setSearchParams(searchParams);
  }, [searchParams, dateKey, timeKey, setSearchParams]);
  const reset = reactExports.useCallback(() => {
    setProductionDate(null);
    setProductionTime(null);
    clearParams();
    setActiveStep(Steps.SelectDateTime);
    initialState();
  }, [clearParams, initialState]);
  const joinDateTime = reactExports.useCallback(() => {
    const date = productionDate;
    const time = productionTime;
    if (!date || !time)
      return null;
    return set(date, {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    });
  }, [productionDate, productionTime]);
  return {
    productionDate,
    activeStep,
    steps,
    onChangeStep,
    fields,
    validate,
    reset,
    joinDateTime
  };
}
const StepsContext = reactExports.createContext(/* @__PURE__ */ Object.create(null));
StepsContext.Consumer;
const StepsProvider = ({
  children
}) => {
  const value = useSteps$1();
  return /* @__PURE__ */ jsx(StepsContext.Provider, { value, children });
};
const useSteps = () => reactExports.useContext(StepsContext);
var DateRange = {};
var _interopRequireDefault$6 = interopRequireDefaultExports$1;
Object.defineProperty(DateRange, "__esModule", {
  value: true
});
var default_1$4 = DateRange.default = void 0;
var _createSvgIcon$4 = _interopRequireDefault$6(requireCreateSvgIcon());
var _jsxRuntime$4 = require$$2;
var _default$8 = (0, _createSvgIcon$4.default)(/* @__PURE__ */ (0, _jsxRuntime$4.jsx)("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
default_1$4 = DateRange.default = _default$8;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
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
var useEventCallback$1 = {};
var interopRequireDefault = { exports: {} };
(function(module) {
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  module.exports = _interopRequireDefault2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(interopRequireDefault);
var interopRequireDefaultExports = interopRequireDefault.exports;
var useEnhancedEffect$1 = {};
var hasRequiredUseEnhancedEffect;
function requireUseEnhancedEffect() {
  if (hasRequiredUseEnhancedEffect)
    return useEnhancedEffect$1;
  hasRequiredUseEnhancedEffect = 1;
  Object.defineProperty(useEnhancedEffect$1, "__esModule", {
    value: true
  });
  useEnhancedEffect$1.default = void 0;
  var React2 = _interopRequireWildcard2(reactExports);
  function _getRequireWildcardCache2(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache2 = function(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard2(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache2(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  const useEnhancedEffect2 = typeof window !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
  var _default2 = useEnhancedEffect2;
  useEnhancedEffect$1.default = _default2;
  return useEnhancedEffect$1;
}
var _interopRequireDefault$5 = interopRequireDefaultExports;
Object.defineProperty(useEventCallback$1, "__esModule", {
  value: true
});
var _default$7 = useEventCallback$1.default = useEventCallback;
var React$3 = _interopRequireWildcard$3(reactExports);
var _useEnhancedEffect = _interopRequireDefault$5(requireUseEnhancedEffect());
function _getRequireWildcardCache$3(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache$3 = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard$3(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache$3(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function useEventCallback(fn) {
  const ref = React$3.useRef(fn);
  (0, _useEnhancedEffect.default)(() => {
    ref.current = fn;
  });
  return React$3.useCallback((...args) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, ref.current)(...args)
  ), []);
}
const _excluded$u = ["localeText"];
const MuiPickersAdapterContext = /* @__PURE__ */ reactExports.createContext(null);
function LocalizationProvider(inProps) {
  var _React$useContext;
  const {
    localeText: inLocaleText
  } = inProps, otherInProps = _objectWithoutPropertiesLoose(inProps, _excluded$u);
  const {
    utils: parentUtils,
    localeText: parentLocaleText
  } = (_React$useContext = reactExports.useContext(MuiPickersAdapterContext)) != null ? _React$useContext : {
    utils: void 0,
    localeText: void 0
  };
  const props = useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: "MuiLocalizationProvider"
  });
  const {
    children,
    dateAdapter: DateAdapter,
    dateFormats,
    dateLibInstance,
    adapterLocale,
    localeText: themeLocaleText
  } = props;
  const localeText = reactExports.useMemo(() => _extends({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const utils = reactExports.useMemo(() => {
    if (!DateAdapter) {
      if (parentUtils) {
        return parentUtils;
      }
      return null;
    }
    const adapter = new DateAdapter({
      locale: adapterLocale,
      formats: dateFormats,
      instance: dateLibInstance
    });
    if (!adapter.isMUIAdapter) {
      throw new Error(["MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    }
    return adapter;
  }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentUtils]);
  const defaultDates = reactExports.useMemo(() => {
    if (!utils) {
      return null;
    }
    return {
      minDate: utils.date("1900-01-01T00:00:00.000"),
      maxDate: utils.date("2099-12-31T00:00:00.000")
    };
  }, [utils]);
  const contextValue = reactExports.useMemo(() => {
    return {
      utils,
      defaultDates,
      localeText
    };
  }, [defaultDates, utils, localeText]);
  return /* @__PURE__ */ jsx(MuiPickersAdapterContext.Provider, {
    value: contextValue,
    children
  });
}
const getPickersLocalization = (pickersTranslations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: _extends({}, pickersTranslations)
        }
      }
    }
  };
};
const enUSPickers = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "open previous view",
  openNextView: "open next view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange placeholders
  start: "Start",
  end: "End",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Select ${view}. ${time === null ? "No time selected" : `Selected time is ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} hours`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} seconds`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose date, selected date is ${utils.format(value, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose time, selected time is ${utils.format(value, "fullTime")}` : "Choose time",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
const DEFAULT_LOCALE = enUSPickers;
getPickersLocalization(enUSPickers);
const useLocalizationContext = () => {
  const localization = reactExports.useContext(MuiPickersAdapterContext);
  if (localization === null) {
    throw new Error(["MUI: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join("\n"));
  }
  if (localization.utils === null) {
    throw new Error(["MUI: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
  }
  const localeText = reactExports.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return reactExports.useMemo(() => _extends({}, localization, {
    localeText
  }), [localization, localeText]);
};
const useUtils = () => useLocalizationContext().utils;
const useDefaultDates = () => useLocalizationContext().defaultDates;
const useLocaleText = () => useLocalizationContext().localeText;
const useNow = () => {
  const utils = useUtils();
  const now = reactExports.useRef(utils.date());
  return now.current;
};
const ArrowDropDown = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
const ArrowLeft = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft");
const ArrowRight = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight");
const Calendar = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
const Clock$1 = createSvgIcon(/* @__PURE__ */ jsxs(reactExports.Fragment, {
  children: [/* @__PURE__ */ jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
createSvgIcon(/* @__PURE__ */ jsxs(reactExports.Fragment, {
  children: [/* @__PURE__ */ jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);
const _excluded$t = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"], _excluded2$4 = ["ownerState"], _excluded3$3 = ["ownerState"];
const PickersArrowSwitcherRoot = styled("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex"
});
const PickersArrowSwitcherSpacer = styled("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (props, styles) => styles.spacer
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
const PickersArrowSwitcherButton = styled(IconButton, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (props, styles) => styles.button
})(({
  ownerState
}) => _extends({}, ownerState.hidden && {
  visibility: "hidden"
}));
const useUtilityClasses$n = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
const PickersArrowSwitcher = /* @__PURE__ */ reactExports.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
  var _slots$previousIconBu, _slots$nextIconButton, _slots$leftArrowIcon, _slots$rightArrowIcon;
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersArrowSwitcher"
  });
  const {
    children,
    className,
    slots,
    slotProps,
    isNextDisabled,
    isNextHidden,
    onGoToNext,
    nextLabel,
    isPreviousDisabled,
    isPreviousHidden,
    onGoToPrevious,
    previousLabel
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$t);
  const ownerState = props;
  const classes = useUtilityClasses$n(ownerState);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const [leftProps, rightProps] = isRTL ? [nextProps, previousProps] : [previousProps, nextProps];
  const PreviousIconButton = (_slots$previousIconBu = slots == null ? void 0 : slots.previousIconButton) != null ? _slots$previousIconBu : PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.previousIconButton,
    additionalProps: {
      size: "medium",
      title: leftProps.label,
      "aria-label": leftProps.label,
      disabled: leftProps.isDisabled,
      edge: "end",
      onClick: leftProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      hidden: leftProps.isHidden
    }),
    className: classes.button
  });
  const NextIconButton = (_slots$nextIconButton = slots == null ? void 0 : slots.nextIconButton) != null ? _slots$nextIconButton : PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps({
    elementType: NextIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.nextIconButton,
    additionalProps: {
      size: "medium",
      title: rightProps.label,
      "aria-label": rightProps.label,
      disabled: rightProps.isDisabled,
      edge: "start",
      onClick: rightProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      hidden: rightProps.isHidden
    }),
    className: classes.button
  });
  const LeftArrowIcon = (_slots$leftArrowIcon = slots == null ? void 0 : slots.leftArrowIcon) != null ? _slots$leftArrowIcon : ArrowLeft;
  const _useSlotProps = useSlotProps({
    elementType: LeftArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$4);
  const RightArrowIcon = (_slots$rightArrowIcon = slots == null ? void 0 : slots.rightArrowIcon) != null ? _slots$rightArrowIcon : ArrowRight;
  const _useSlotProps2 = useSlotProps({
    elementType: RightArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3$3);
  return /* @__PURE__ */ jsxs(PickersArrowSwitcherRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsx(PreviousIconButton, _extends({}, previousIconButtonProps, {
      children: isRTL ? /* @__PURE__ */ jsx(RightArrowIcon, _extends({}, rightArrowIconProps)) : /* @__PURE__ */ jsx(LeftArrowIcon, _extends({}, leftArrowIconProps))
    })), children ? /* @__PURE__ */ jsx(Typography, {
      variant: "subtitle1",
      component: "span",
      children
    }) : /* @__PURE__ */ jsx(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState
    }), /* @__PURE__ */ jsx(NextIconButton, _extends({}, nextIconButtonProps, {
      children: isRTL ? /* @__PURE__ */ jsx(LeftArrowIcon, _extends({}, leftArrowIconProps)) : /* @__PURE__ */ jsx(RightArrowIcon, _extends({}, rightArrowIconProps))
    }))]
  }));
});
const isTimeView = (view) => ["hours", "minutes", "seconds"].includes(view);
const getMeridiem = (date, utils) => {
  if (!date) {
    return null;
  }
  return utils.getHours(date) >= 12 ? "pm" : "am";
};
const convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? "pm" : "am";
    if (currentMeridiem !== meridiem) {
      return meridiem === "am" ? value - 12 : value + 12;
    }
  }
  return value;
};
const convertToMeridiem = (time, meridiem, ampm, utils) => {
  const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
const getSecondsInDay = (date, utils) => {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};
const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, utils) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return utils.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
};
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange
}) {
  var _views, _views2;
  const previousOpenTo = reactExports.useRef(openTo);
  const previousViews = reactExports.useRef(views);
  const defaultView = reactExports.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled$2({
    name: "useViews",
    state: "view",
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = reactExports.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled$2({
    name: "useViews",
    state: "focusedView",
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  reactExports.useEffect(() => {
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView2) => !views.includes(previousView2))) {
      setView(views.includes(openTo) ? openTo : views[0]);
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = (_views = views[viewIndex - 1]) != null ? _views : null;
  const nextView = (_views2 = views[viewIndex + 1]) != null ? _views2 : null;
  const handleChangeView = _default$7((newView) => {
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = _default$7(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  const setValueAndGoToNextView = _default$7((value, currentViewSelectionState) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
    const globalSelectionState = isSelectionFinishedOnCurrentView && Boolean(nextView) ? "partial" : currentViewSelectionState;
    onChange(value, globalSelectionState);
    if (isSelectionFinishedOnCurrentView) {
      goToNextView();
    }
  });
  const handleFocusedViewChange = _default$7((viewToFocus, hasFocus) => {
    if (hasFocus) {
      setFocusedView(viewToFocus);
    } else {
      setFocusedView(
        (prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView
        // If false the blur is due to view switching
      );
    }
    onFocusedViewChange == null ? void 0 : onFocusedViewChange(viewToFocus, hasFocus);
  });
  return {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    defaultView: defaultView.current,
    goToNextView,
    setValueAndGoToNextView
  };
}
function useNextMonthDisabled(month, {
  disableFuture,
  maxDate
}) {
  const utils = useUtils();
  return reactExports.useMemo(() => {
    const now = utils.date();
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate
}) {
  const utils = useUtils();
  return reactExports.useMemo(() => {
    const now = utils.date();
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils]);
}
function useMeridiemMode(date, ampm, onChange) {
  const utils = useUtils();
  const meridiemMode = getMeridiem(date, utils);
  const handleMeridiemChange = reactExports.useCallback((mode) => {
    const timeWithMeridiem = date == null ? null : convertToMeridiem(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, "partial");
  }, [ampm, date, onChange, utils]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}
const DAY_SIZE = 36;
const DAY_MARGIN = 2;
const DIALOG_WIDTH = 320;
const VIEW_HEIGHT = 358;
const PickerViewRoot = styled("div")({
  overflow: "hidden",
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
});
function getTimeClockUtilityClass(slot) {
  return generateUtilityClass("MuiTimeClock", slot);
}
generateUtilityClasses("MuiTimeClock", ["root", "arrowSwitcher"]);
const CLOCK_WIDTH = 220;
const CLOCK_HOUR_WIDTH = 36;
const clockCenter = {
  x: CLOCK_WIDTH / 2,
  y: CLOCK_WIDTH / 2
};
const baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
const cx = baseClockPoint.x - clockCenter.x;
const cy = baseClockPoint.y - clockCenter.y;
const rad2deg = (rad) => rad * (180 / Math.PI);
const getAngleValue = (step, offsetX, offsetY) => {
  const x = offsetX - clockCenter.x;
  const y = offsetY - clockCenter.y;
  const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  let deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  const value = Math.floor(deg / step) || 0;
  const delta = x ** 2 + y ** 2;
  const distance = Math.sqrt(delta);
  return {
    value,
    distance
  };
};
const getMinutes$1 = (offsetX, offsetY, step = 1) => {
  const angleStep = step * 6;
  let {
    value
  } = getAngleValue(angleStep, offsetX, offsetY);
  value = value * step % 60;
  return value;
};
const getHours$1 = (offsetX, offsetY, ampm) => {
  const {
    value,
    distance
  } = getAngleValue(30, offsetX, offsetY);
  let hour = value || 12;
  if (!ampm) {
    if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
      hour += 12;
      hour %= 24;
    }
  } else {
    hour %= 12;
  }
  return hour;
};
function getClockPointerUtilityClass(slot) {
  return generateUtilityClass("MuiClockPointer", slot);
}
generateUtilityClasses("MuiClockPointer", ["root", "thumb"]);
const _excluded$s = ["className", "hasSelected", "isInner", "type", "viewValue"];
const useUtilityClasses$m = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    thumb: ["thumb"]
  };
  return composeClasses(slots, getClockPointerUtilityClass, classes);
};
const ClockPointerRoot = styled("div", {
  name: "MuiClockPointer",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({
  width: 2,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  left: "calc(50% - 1px)",
  bottom: "50%",
  transformOrigin: "center bottom 0px"
}, ownerState.shouldAnimate && {
  transition: theme.transitions.create(["transform", "height"])
}));
const ClockPointerThumb = styled("div", {
  name: "MuiClockPointer",
  slot: "Thumb",
  overridesResolver: (_, styles) => styles.thumb
})(({
  theme,
  ownerState
}) => _extends({
  width: 4,
  height: 4,
  backgroundColor: (theme.vars || theme).palette.primary.contrastText,
  borderRadius: "50%",
  position: "absolute",
  top: -21,
  left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
  border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${(theme.vars || theme).palette.primary.main}`,
  boxSizing: "content-box"
}, ownerState.hasSelected && {
  backgroundColor: (theme.vars || theme).palette.primary.main
}));
function ClockPointer(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockPointer"
  });
  const {
    className,
    isInner,
    type,
    viewValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$s);
  const previousType = reactExports.useRef(type);
  reactExports.useEffect(() => {
    previousType.current = type;
  }, [type]);
  const ownerState = _extends({}, props, {
    shouldAnimate: previousType.current !== type
  });
  const classes = useUtilityClasses$m(ownerState);
  const getAngleStyle = () => {
    const max = type === "hours" ? 12 : 60;
    let angle = 360 / max * viewValue;
    if (type === "hours" && viewValue > 12) {
      angle -= 360;
    }
    return {
      height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
      transform: `rotateZ(${angle}deg)`
    };
  };
  return /* @__PURE__ */ jsx(ClockPointerRoot, _extends({
    style: getAngleStyle(),
    className: clsx(className, classes.root),
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx(ClockPointerThumb, {
      ownerState,
      className: classes.thumb
    })
  }));
}
function getClockUtilityClass(slot) {
  return generateUtilityClass("MuiClock", slot);
}
generateUtilityClasses("MuiClock", ["root", "clock", "wrapper", "squareMask", "pin", "amButton", "pmButton"]);
const useUtilityClasses$l = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    clock: ["clock"],
    wrapper: ["wrapper"],
    squareMask: ["squareMask"],
    pin: ["pin"],
    amButton: ["amButton"],
    pmButton: ["pmButton"]
  };
  return composeClasses(slots, getClockUtilityClass, classes);
};
const ClockRoot = styled("div", {
  name: "MuiClock",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(2)
}));
const ClockClock = styled("div", {
  name: "MuiClock",
  slot: "Clock",
  overridesResolver: (_, styles) => styles.clock
})({
  backgroundColor: "rgba(0,0,0,.07)",
  borderRadius: "50%",
  height: 220,
  width: 220,
  flexShrink: 0,
  position: "relative",
  pointerEvents: "none"
});
const ClockWrapper = styled("div", {
  name: "MuiClock",
  slot: "Wrapper",
  overridesResolver: (_, styles) => styles.wrapper
})({
  "&:focus": {
    outline: "none"
  }
});
const ClockSquareMask = styled("div", {
  name: "MuiClock",
  slot: "SquareMask",
  overridesResolver: (_, styles) => styles.squareMask
})(({
  ownerState
}) => _extends({
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "auto",
  outline: 0,
  // Disable scroll capabilities.
  touchAction: "none",
  userSelect: "none"
}, ownerState.disabled ? {} : {
  "@media (pointer: fine)": {
    cursor: "pointer",
    borderRadius: "50%"
  },
  "&:active": {
    cursor: "move"
  }
}));
const ClockPin = styled("div", {
  name: "MuiClock",
  slot: "Pin",
  overridesResolver: (_, styles) => styles.pin
})(({
  theme
}) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}));
const ClockAmButton = styled(IconButton, {
  name: "MuiClock",
  slot: "AmButton",
  overridesResolver: (_, styles) => styles.amButton
})(({
  theme,
  ownerState
}) => _extends({
  zIndex: 1,
  position: "absolute",
  bottom: 8,
  left: 8
}, ownerState.meridiemMode === "am" && {
  backgroundColor: (theme.vars || theme).palette.primary.main,
  color: (theme.vars || theme).palette.primary.contrastText,
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.primary.light
  }
}));
const ClockPmButton = styled(IconButton, {
  name: "MuiClock",
  slot: "PmButton",
  overridesResolver: (_, styles) => styles.pmButton
})(({
  theme,
  ownerState
}) => _extends({
  zIndex: 1,
  position: "absolute",
  bottom: 8,
  right: 8
}, ownerState.meridiemMode === "pm" && {
  backgroundColor: (theme.vars || theme).palette.primary.main,
  color: (theme.vars || theme).palette.primary.contrastText,
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.primary.light
  }
}));
function Clock(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClock"
  });
  const {
    ampm,
    ampmInClock,
    autoFocus,
    children,
    value,
    handleMeridiemChange,
    isTimeDisabled,
    meridiemMode,
    minutesStep = 1,
    onChange,
    selectedId,
    type,
    viewValue,
    disabled,
    readOnly,
    className
  } = props;
  const ownerState = props;
  const utils = useUtils();
  const localeText = useLocaleText();
  const isMoving = reactExports.useRef(false);
  const classes = useUtilityClasses$l(ownerState);
  const isSelectedTimeDisabled = isTimeDisabled(viewValue, type);
  const isPointerInner = !ampm && type === "hours" && (viewValue < 1 || viewValue > 12);
  const handleValueChange = (newValue, isFinish) => {
    if (disabled || readOnly) {
      return;
    }
    if (isTimeDisabled(newValue, type)) {
      return;
    }
    onChange(newValue, isFinish);
  };
  const setTime = (event, isFinish) => {
    let {
      offsetX,
      offsetY
    } = event;
    if (offsetX === void 0) {
      const rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }
    const newSelectedValue = type === "seconds" || type === "minutes" ? getMinutes$1(offsetX, offsetY, minutesStep) : getHours$1(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };
  const handleTouchMove = (event) => {
    isMoving.current = true;
    setTime(event, "shallow");
  };
  const handleTouchEnd = (event) => {
    if (isMoving.current) {
      setTime(event, "finish");
      isMoving.current = false;
    }
  };
  const handleMouseMove = (event) => {
    if (event.buttons > 0) {
      setTime(event.nativeEvent, "shallow");
    }
  };
  const handleMouseUp = (event) => {
    if (isMoving.current) {
      isMoving.current = false;
    }
    setTime(event.nativeEvent, "finish");
  };
  const hasSelected = reactExports.useMemo(() => {
    if (type === "hours") {
      return true;
    }
    return viewValue % 5 === 0;
  }, [type, viewValue]);
  const keyboardControlStep = type === "minutes" ? minutesStep : 1;
  const listboxRef = reactExports.useRef(null);
  useEnhancedEffect$2(() => {
    if (autoFocus) {
      listboxRef.current.focus();
    }
  }, [autoFocus]);
  const handleKeyDown = (event) => {
    if (isMoving.current) {
      return;
    }
    switch (event.key) {
      case "Home":
        handleValueChange(0, "partial");
        event.preventDefault();
        break;
      case "End":
        handleValueChange(type === "minutes" ? 59 : 23, "partial");
        event.preventDefault();
        break;
      case "ArrowUp":
        handleValueChange(viewValue + keyboardControlStep, "partial");
        event.preventDefault();
        break;
      case "ArrowDown":
        handleValueChange(viewValue - keyboardControlStep, "partial");
        event.preventDefault();
        break;
    }
  };
  return /* @__PURE__ */ jsxs(ClockRoot, {
    className: clsx(className, classes.root),
    children: [/* @__PURE__ */ jsxs(ClockClock, {
      className: classes.clock,
      children: [/* @__PURE__ */ jsx(ClockSquareMask, {
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        ownerState: {
          disabled
        },
        className: classes.squareMask
      }), !isSelectedTimeDisabled && /* @__PURE__ */ jsxs(reactExports.Fragment, {
        children: [/* @__PURE__ */ jsx(ClockPin, {
          className: classes.pin
        }), value != null && /* @__PURE__ */ jsx(ClockPointer, {
          type,
          viewValue,
          isInner: isPointerInner,
          hasSelected
        })]
      }), /* @__PURE__ */ jsx(ClockWrapper, {
        "aria-activedescendant": selectedId,
        "aria-label": localeText.clockLabelText(type, value, utils),
        ref: listboxRef,
        role: "listbox",
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        className: classes.wrapper,
        children
      })]
    }), ampm && ampmInClock && /* @__PURE__ */ jsxs(reactExports.Fragment, {
      children: [/* @__PURE__ */ jsx(ClockAmButton, {
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled: disabled || meridiemMode === null,
        ownerState,
        className: classes.amButton,
        children: /* @__PURE__ */ jsx(Typography, {
          variant: "caption",
          children: "AM"
        })
      }), /* @__PURE__ */ jsx(ClockPmButton, {
        disabled: disabled || meridiemMode === null,
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        ownerState,
        className: classes.pmButton,
        children: /* @__PURE__ */ jsx(Typography, {
          variant: "caption",
          children: "PM"
        })
      })]
    })]
  });
}
function getClockNumberUtilityClass(slot) {
  return generateUtilityClass("MuiClockNumber", slot);
}
const clockNumberClasses = generateUtilityClasses("MuiClockNumber", ["root", "selected", "disabled"]);
const _excluded$r = ["className", "disabled", "index", "inner", "label", "selected"];
const useUtilityClasses$k = (ownerState) => {
  const {
    classes,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled"]
  };
  return composeClasses(slots, getClockNumberUtilityClass, classes);
};
const ClockNumberRoot = styled("span", {
  name: "MuiClockNumber",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${clockNumberClasses.disabled}`]: styles.disabled
  }, {
    [`&.${clockNumberClasses.selected}`]: styles.selected
  }]
})(({
  theme,
  ownerState
}) => _extends({
  height: CLOCK_HOUR_WIDTH,
  width: CLOCK_HOUR_WIDTH,
  position: "absolute",
  left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  color: (theme.vars || theme).palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  "&:focused": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  [`&.${clockNumberClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText
  },
  [`&.${clockNumberClasses.disabled}`]: {
    pointerEvents: "none",
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.inner && _extends({}, theme.typography.body2, {
  color: (theme.vars || theme).palette.text.secondary
})));
function ClockNumber(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockNumber"
  });
  const {
    className,
    disabled,
    index,
    inner,
    label,
    selected
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$r);
  const ownerState = props;
  const classes = useUtilityClasses$k(ownerState);
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return /* @__PURE__ */ jsx(ClockNumberRoot, _extends({
    className: clsx(className, classes.root),
    "aria-disabled": disabled ? true : void 0,
    "aria-selected": selected ? true : void 0,
    role: "option",
    style: {
      transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
    },
    ownerState
  }, other, {
    children: label
  }));
}
const getHourNumbers = ({
  ampm,
  value,
  getClockNumberText,
  isDisabled,
  selectedId,
  utils
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const hourNumbers = [];
  const startHour = ampm ? 1 : 0;
  const endHour = ampm ? 12 : 23;
  const isSelected = (hour) => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  for (let hour = startHour; hour <= endHour; hour += 1) {
    let label = hour.toString();
    if (hour === 0) {
      label = "00";
    }
    const inner = !ampm && (hour === 0 || hour > 12);
    label = utils.formatNumber(label);
    const selected = isSelected(hour);
    hourNumbers.push(/* @__PURE__ */ jsx(ClockNumber, {
      id: selected ? selectedId : void 0,
      index: hour,
      inner,
      selected,
      disabled: isDisabled(hour),
      label,
      "aria-label": getClockNumberText(label)
    }, hour));
  }
  return hourNumbers;
};
const getMinutesNumbers = ({
  utils,
  value,
  isDisabled,
  getClockNumberText,
  selectedId
}) => {
  const f = utils.formatNumber;
  return [[5, f("05")], [10, f("10")], [15, f("15")], [20, f("20")], [25, f("25")], [30, f("30")], [35, f("35")], [40, f("40")], [45, f("45")], [50, f("50")], [55, f("55")], [0, f("00")]].map(([numberValue, label], index) => {
    const selected = numberValue === value;
    return /* @__PURE__ */ jsx(ClockNumber, {
      label,
      id: selected ? selectedId : void 0,
      index: index + 1,
      inner: false,
      disabled: isDisabled(numberValue),
      selected,
      "aria-label": getClockNumberText(label)
    }, numberValue);
  });
};
const uncapitalizeObjectKeys = (capitalizedObject) => {
  if (capitalizedObject === void 0) {
    return void 0;
  }
  return Object.keys(capitalizedObject).reduce((acc, key) => _extends({}, acc, {
    [`${key.slice(0, 1).toLowerCase()}${key.slice(1)}`]: capitalizedObject[key]
  }), {});
};
const _excluded$q = ["ampm", "ampmInClock", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "showViewSwitcher", "onChange", "defaultValue", "view", "views", "openTo", "onViewChange", "className", "disabled", "readOnly"];
const useUtilityClasses$j = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    arrowSwitcher: ["arrowSwitcher"]
  };
  return composeClasses(slots, getTimeClockUtilityClass, classes);
};
const TimeClockRoot = styled(PickerViewRoot, {
  name: "MuiTimeClock",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column",
  position: "relative"
});
const TimeClockArrowSwitcher = styled(PickersArrowSwitcher, {
  name: "MuiTimeClock",
  slot: "ArrowSwitcher",
  overridesResolver: (props, styles) => styles.arrowSwitcher
})({
  position: "absolute",
  right: 12,
  top: 15
});
const TimeClock = /* @__PURE__ */ reactExports.forwardRef(function TimeClock2(inProps, ref) {
  const localeText = useLocaleText();
  const now = useNow();
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    ampmInClock = false,
    autoFocus,
    components,
    componentsProps,
    slots: innerSlots,
    slotProps: innerSlotProps,
    value: valueProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableClock,
    shouldDisableTime,
    showViewSwitcher,
    onChange,
    defaultValue,
    view: inView,
    views = ["hours", "minutes"],
    openTo,
    onViewChange,
    className,
    disabled,
    readOnly
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$q);
  const slots = innerSlots != null ? innerSlots : uncapitalizeObjectKeys(components);
  const slotProps = innerSlotProps != null ? innerSlotProps : componentsProps;
  const [value, setValue] = useControlled$2({
    name: "DateCalendar",
    state: "value",
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : null
  });
  const handleValueChange = _default$7((newValue, selectionState) => {
    setValue(newValue);
    onChange == null ? void 0 : onChange(newValue, selectionState);
  });
  const {
    view,
    setView,
    previousView,
    nextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange
  });
  const selectedTimeOrMidnight = reactExports.useMemo(() => value || utils.setSeconds(utils.setMinutes(utils.setHours(now, 0), 0), 0), [value, now, utils]);
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(selectedTimeOrMidnight, ampm, setValueAndGoToNextView);
  const isTimeDisabled = reactExports.useCallback((rawValue, viewType) => {
    const isAfter2 = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter2(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter2(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter2(start, now)) {
        return false;
      }
      if (disablePast && isAfter2(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableClock != null && shouldDisableClock(timeValue, viewType)) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(utils.setHours(selectedTimeOrMidnight, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(utils.setMinutes(selectedTimeOrMidnight, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(utils.setSeconds(selectedTimeOrMidnight, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = utils.setHours(selectedTimeOrMidnight, valueWithMeridiem);
        const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
        const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = utils.setMinutes(selectedTimeOrMidnight, rawValue);
        const start = utils.setSeconds(dateWithNewMinutes, 0);
        const end = utils.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = utils.setSeconds(selectedTimeOrMidnight, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, selectedTimeOrMidnight, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableClock, shouldDisableTime, utils, disableFuture, disablePast, now, views]);
  const selectedId = useId$2();
  const viewProps = reactExports.useMemo(() => {
    switch (view) {
      case "hours": {
        const handleHoursChange = (hourValue, isFinish) => {
          const valueWithMeridiem = convertValueToMeridiem(hourValue, meridiemMode, ampm);
          setValueAndGoToNextView(utils.setHours(selectedTimeOrMidnight, valueWithMeridiem), isFinish);
        };
        return {
          onChange: handleHoursChange,
          viewValue: utils.getHours(selectedTimeOrMidnight),
          children: getHourNumbers({
            value,
            utils,
            ampm,
            onChange: handleHoursChange,
            getClockNumberText: localeText.hoursClockNumberText,
            isDisabled: (hourValue) => disabled || isTimeDisabled(hourValue, "hours"),
            selectedId
          })
        };
      }
      case "minutes": {
        const minutesValue = utils.getMinutes(selectedTimeOrMidnight);
        const handleMinutesChange = (minuteValue, isFinish) => {
          setValueAndGoToNextView(utils.setMinutes(selectedTimeOrMidnight, minuteValue), isFinish);
        };
        return {
          viewValue: minutesValue,
          onChange: handleMinutesChange,
          children: getMinutesNumbers({
            utils,
            value: minutesValue,
            onChange: handleMinutesChange,
            getClockNumberText: localeText.minutesClockNumberText,
            isDisabled: (minuteValue) => disabled || isTimeDisabled(minuteValue, "minutes"),
            selectedId
          })
        };
      }
      case "seconds": {
        const secondsValue = utils.getSeconds(selectedTimeOrMidnight);
        const handleSecondsChange = (secondValue, isFinish) => {
          setValueAndGoToNextView(utils.setSeconds(selectedTimeOrMidnight, secondValue), isFinish);
        };
        return {
          viewValue: secondsValue,
          onChange: handleSecondsChange,
          children: getMinutesNumbers({
            utils,
            value: secondsValue,
            onChange: handleSecondsChange,
            getClockNumberText: localeText.secondsClockNumberText,
            isDisabled: (secondValue) => disabled || isTimeDisabled(secondValue, "seconds"),
            selectedId
          })
        };
      }
      default:
        throw new Error("You must provide the type for ClockView");
    }
  }, [view, utils, value, ampm, localeText.hoursClockNumberText, localeText.minutesClockNumberText, localeText.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, selectedTimeOrMidnight, isTimeDisabled, selectedId, disabled]);
  const ownerState = props;
  const classes = useUtilityClasses$j(ownerState);
  return /* @__PURE__ */ jsxs(TimeClockRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsx(Clock, _extends({
      autoFocus,
      ampmInClock: ampmInClock && views.includes("hours"),
      value,
      type: view,
      ampm,
      minutesStep,
      isTimeDisabled,
      meridiemMode,
      handleMeridiemChange,
      selectedId,
      disabled,
      readOnly
    }, viewProps)), showViewSwitcher && /* @__PURE__ */ jsx(TimeClockArrowSwitcher, {
      className: classes.arrowSwitcher,
      slots,
      slotProps,
      onGoToPrevious: () => setView(previousView),
      isPreviousDisabled: !previousView,
      previousLabel: localeText.openPreviousView,
      onGoToNext: () => setView(nextView),
      isNextDisabled: !nextView,
      nextLabel: localeText.openNextView,
      ownerState
    })]
  }));
});
function getPickersDayUtilityClass(slot) {
  return generateUtilityClass("MuiPickersDay", slot);
}
const pickersDayClasses = generateUtilityClasses("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);
const _excluded$p = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"];
const useUtilityClasses$i = (ownerState) => {
  const {
    selected,
    disableMargin,
    disableHighlightToday,
    today,
    disabled,
    outsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    classes
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && today && "today", outsideCurrentMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", outsideCurrentMonth && !showDaysOutsideCurrentMonth && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  };
  return composeClasses(slots, getPickersDayUtilityClass, classes);
};
const styleArg = ({
  theme,
  ownerState
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  color: (theme.vars || theme).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, !ownerState.disableMargin && {
  margin: `0 ${DAY_MARGIN}px`
}, ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && {
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableHighlightToday && ownerState.today && {
  [`&:not(.${pickersDayClasses.selected})`]: {
    border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
  }
});
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
const PickersDayRoot = styled(ButtonBase, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(styleArg);
const PickersDayFiller = styled("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, styleArg({
  theme,
  ownerState
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
}));
const noop = () => {
};
const PickersDayRaw = /* @__PURE__ */ reactExports.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersDay"
  });
  const {
    autoFocus = false,
    className,
    day,
    disabled = false,
    disableHighlightToday = false,
    disableMargin = false,
    isAnimating,
    onClick,
    onDaySelect,
    onFocus = noop,
    onBlur = noop,
    onKeyDown = noop,
    onMouseDown = noop,
    onMouseEnter = noop,
    outsideCurrentMonth,
    selected = false,
    showDaysOutsideCurrentMonth = false,
    children,
    today: isToday = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$p);
  const ownerState = _extends({}, props, {
    autoFocus,
    disabled,
    disableHighlightToday,
    disableMargin,
    selected,
    showDaysOutsideCurrentMonth,
    today: isToday
  });
  const classes = useUtilityClasses$i(ownerState);
  const utils = useUtils();
  const ref = reactExports.useRef(null);
  const handleRef = useForkRef$2(ref, forwardedRef);
  useEnhancedEffect$2(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);
  const handleMouseDown = (event) => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return /* @__PURE__ */ jsx(PickersDayFiller, {
      className: clsx(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState,
      role: other.role
    });
  }
  return /* @__PURE__ */ jsx(PickersDayRoot, _extends({
    className: clsx(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: (event) => onKeyDown(event, day),
    onFocus: (event) => onFocus(event, day),
    onBlur: (event) => onBlur(event, day),
    onMouseEnter: (event) => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState,
    children: !children ? utils.format(day, "dayOfMonth") : children
  }));
});
const PickersDay2 = /* @__PURE__ */ reactExports.memo(PickersDayRaw);
const findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  utils
}) => {
  const today = utils.startOfDay(utils.date());
  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (utils.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = utils.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = utils.addDays(backward, -1);
    }
  }
  return null;
};
const clamp = (utils, value, minDate, maxDate) => {
  if (utils.isBefore(value, minDate)) {
    return minDate;
  }
  if (utils.isAfter(value, maxDate)) {
    return maxDate;
  }
  return value;
};
const replaceInvalidDateByNull = (utils, value) => value == null || !utils.isValid(value) ? null : value;
const applyDefaultDate = (utils, value, defaultValue) => {
  if (value == null || !utils.isValid(value)) {
    return defaultValue;
  }
  return value;
};
const areDatesEqual = (utils, a, b) => {
  if (!utils.isValid(a) && a != null && !utils.isValid(b) && b != null) {
    return true;
  }
  return utils.isEqual(a, b);
};
const getDateSectionConfigFromFormatToken = (utils, formatToken) => {
  const config = utils.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI: The token "${formatToken}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join("\n"));
  }
  if (typeof config === "string") {
    return {
      type: config,
      contentType: config === "meridiem" ? "letter" : "digit"
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType
  };
};
const getDeltaFromKeyCode = (keyCode) => {
  switch (keyCode) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
};
const getDaysInWeekStr = (utils, format2) => {
  const elements = [];
  const now = utils.date();
  const startDate = utils.startOfWeek(now);
  const endDate = utils.endOfWeek(now);
  let current = startDate;
  while (utils.isBefore(current, endDate)) {
    elements.push(current);
    current = utils.addDays(current, 1);
  }
  return elements.map((weekDay) => utils.formatByString(weekDay, format2));
};
const getLetterEditingOptions = (utils, sectionType, format2) => {
  switch (sectionType) {
    case "month": {
      return utils.getMonthArray(utils.date()).map((month) => utils.formatByString(month, format2));
    }
    case "weekDay": {
      return getDaysInWeekStr(utils, format2);
    }
    case "meridiem": {
      const now = utils.date();
      return [utils.startOfDay(now), utils.endOfDay(now)].map((date) => utils.formatByString(date, format2));
    }
    default: {
      return [];
    }
  }
};
const cleanDigitSectionValue = (utils, value, sectionType, format2, hasLeadingZeros, sectionBoundaries) => {
  const hasLetter = () => {
    const startOfYear2 = utils.startOfYear(utils.date());
    const startOfYearStr = utils.formatByString(startOfYear2, format2);
    return Number.isNaN(Number(startOfYearStr));
  };
  if (sectionType === "day" && hasLetter()) {
    const date = utils.setDate(sectionBoundaries.longestMonth, value);
    return utils.formatByString(date, format2);
  }
  const valueStr = value.toString();
  if (hasLeadingZeros) {
    const size = utils.formatByString(utils.date(), format2).length;
    let cleanValueStr = valueStr;
    cleanValueStr = Number(cleanValueStr).toString();
    while (cleanValueStr.length < size) {
      cleanValueStr = `0${cleanValueStr}`;
    }
    return cleanValueStr;
  }
  return valueStr;
};
const adjustSectionValue = (utils, section, keyCode, sectionsValueBoundaries, activeDate) => {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === "Home";
  const isEnd = keyCode === "End";
  const shouldSetAbsolute = section.value === "" || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = (value) => cleanDigitSectionValue(utils, value, section.type, section.format, section.hasLeadingZeros, sectionBoundaries);
    if (shouldSetAbsolute) {
      if (section.type === "year" && !isEnd && !isStart) {
        return utils.formatByString(utils.date(), section.format);
      }
      if (delta > 0 || isStart) {
        return getCleanValue(sectionBoundaries.minimum);
      }
      return getCleanValue(sectionBoundaries.maximum);
    }
    const currentSectionValue = parseInt(section.value, 10);
    const newSectionValueNumber = currentSectionValue + delta;
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum);
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum);
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(utils, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + options.length + delta) % options.length;
    return options[newOptionIndex];
  };
  if (section.contentType === "digit") {
    return adjustDigitSection();
  }
  return adjustLetterSection();
};
const getSectionVisibleValue = (section, target) => {
  let value = section.value || section.placeholder;
  const shouldAddInvisibleSpace = ["input-rtl", "input-ltr"].includes(target) && section.contentType === "digit" && !section.hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}‎`;
  }
  if (target === "input-rtl") {
    value = `⁨${value}⁩`;
  }
  return value;
};
const cleanString = (dirtyString) => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, "");
const addPositionPropertiesToSections = (sections, isRTL) => {
  let position = 0;
  let positionInInput = isRTL ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRTL ? "input-rtl" : "input-ltr");
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + renderedValue.indexOf(cleanedValue[0]) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push(_extends({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
const getSectionPlaceholder = (utils, localeText, sectionConfig, currentTokenValue) => {
  switch (sectionConfig.type) {
    case "year": {
      return localeText.fieldYearPlaceholder({
        digitAmount: utils.formatByString(utils.date(), currentTokenValue).length
      });
    }
    case "month": {
      return localeText.fieldMonthPlaceholder({
        contentType: sectionConfig.contentType
      });
    }
    case "day": {
      return localeText.fieldDayPlaceholder();
    }
    case "weekDay": {
      return localeText.fieldWeekDayPlaceholder({
        contentType: sectionConfig.contentType
      });
    }
    case "hours": {
      return localeText.fieldHoursPlaceholder();
    }
    case "minutes": {
      return localeText.fieldMinutesPlaceholder();
    }
    case "seconds": {
      return localeText.fieldSecondsPlaceholder();
    }
    case "meridiem": {
      return localeText.fieldMeridiemPlaceholder();
    }
    default: {
      return currentTokenValue;
    }
  }
};
const changeSectionValueFormat = (utils, valueStr, currentFormat, newFormat) => {
  return utils.formatByString(utils.parse(valueStr, currentFormat), newFormat);
};
const isFourDigitYearFormat = (utils, format2) => utils.formatByString(utils.date(), format2).length === 4;
const doesSectionHaveLeadingZeros = (utils, contentType, sectionType, format2) => {
  if (contentType !== "digit") {
    return false;
  }
  switch (sectionType) {
    case "year": {
      if (isFourDigitYearFormat(utils, format2)) {
        const formatted0001 = utils.formatByString(utils.setYear(utils.date(), 1), format2);
        return formatted0001 === "0001";
      }
      const formatted2001 = utils.formatByString(utils.setYear(utils.date(), 2001), format2);
      return formatted2001 === "01";
    }
    case "month": {
      return utils.formatByString(utils.startOfYear(utils.date()), format2).length > 1;
    }
    case "day": {
      return utils.formatByString(utils.startOfMonth(utils.date()), format2).length > 1;
    }
    case "weekDay": {
      return utils.formatByString(utils.startOfWeek(utils.date()), format2).length > 1;
    }
    case "hours": {
      return utils.formatByString(utils.setHours(utils.date(), 1), format2).length > 1;
    }
    case "minutes": {
      return utils.formatByString(utils.setMinutes(utils.date(), 1), format2).length > 1;
    }
    case "seconds": {
      return utils.formatByString(utils.setMinutes(utils.date(), 1), format2).length > 1;
    }
    default: {
      throw new Error("Invalid section type");
    }
  }
};
const getEscapedPartsFromFormat = (utils, format2) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = utils.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, "g");
  let match = null;
  while (match = regExp.exec(format2)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
const splitFormatIntoSections = (utils, localeText, format2, date, formatDensity) => {
  let startSeparator = "";
  const sections = [];
  const commitToken = (token) => {
    if (token === "") {
      return null;
    }
    const sectionConfig = getDateSectionConfigFromFormatToken(utils, token);
    const sectionValue = date == null || !utils.isValid(date) ? "" : utils.formatByString(date, token);
    const hasLeadingZeros = doesSectionHaveLeadingZeros(utils, sectionConfig.contentType, sectionConfig.type, token);
    sections.push(_extends({}, sectionConfig, {
      format: token,
      value: sectionValue,
      placeholder: getSectionPlaceholder(utils, localeText, sectionConfig, token),
      hasLeadingZeros,
      startSeparator: sections.length === 0 ? startSeparator : "",
      endSeparator: "",
      modified: false
    }));
    return null;
  };
  let formatExpansionOverflow = 10;
  let prevFormat = format2;
  let nextFormat = utils.expandFormat(format2);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = utils.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error("MUI: The format expansion seems to be  enter in an infinite loop. Please open an issue with the format passed to the picker component");
    }
  }
  const expandedFormat = nextFormat;
  const escapedParts = getEscapedPartsFromFormat(utils, expandedFormat);
  const isTokenStartRegExp = new RegExp(`^(${Object.keys(utils.formatTokenMap).join("|")})`);
  let currentTokenValue = "";
  for (let i = 0; i < expandedFormat.length; i += 1) {
    const escapedPartOfCurrentChar = escapedParts.find((escapeIndex) => escapeIndex.start <= i && escapeIndex.end >= i);
    const char = expandedFormat[i];
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const potentialToken = `${currentTokenValue}${expandedFormat.slice(i)}`;
    if (!isEscapedChar && char.match(/([A-Za-z]+)/) && isTokenStartRegExp.test(potentialToken)) {
      currentTokenValue += char;
    } else {
      const isEscapeBoundary = isEscapedChar && (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.start) === i || (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.end) === i;
      if (!isEscapeBoundary) {
        commitToken(currentTokenValue);
        currentTokenValue = "";
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
        }
      }
    }
  }
  commitToken(currentTokenValue);
  return sections.map((section) => {
    const cleanSeparator = (separator) => {
      let cleanedSeparator = separator;
      if (cleanedSeparator !== null && cleanedSeparator.includes(" ")) {
        cleanedSeparator = `⁩${cleanedSeparator}⁦`;
      }
      if (formatDensity === "spacious" && ["/", ".", "-"].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
const getDateFromDateSections = (utils, sections) => {
  const shouldSkipWeekDays = sections.some((section) => section.type === "day");
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === "weekDay";
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, "non-input"));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(" ");
  const dateWithoutSeparatorStr = sectionValues.join(" ");
  return utils.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
const createDateStrForInputFromSections = (sections, isRTL) => {
  const formattedSections = sections.map((section) => `${section.startSeparator}${getSectionVisibleValue(section, isRTL ? "input-rtl" : "input-ltr")}${section.endSeparator}`);
  const dateStr = formattedSections.join("");
  if (!isRTL) {
    return dateStr;
  }
  return `⁦${dateStr}⁩`;
};
const getSectionsBoundaries = (utils) => {
  const today = utils.date();
  const endOfYear2 = utils.endOfYear(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = utils.getMonthArray(today).reduce((acc, month) => {
    const daysInMonth = utils.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format: format2
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(utils, format2) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: utils.getMonth(endOfYear2) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: currentDate != null && utils.isValid(currentDate) ? utils.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth
    }),
    weekDay: ({
      format: format2,
      contentType
    }) => {
      if (contentType === "digit") {
        const daysInWeek = getDaysInWeekStr(utils, format2).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format: format2
    }) => {
      const lastHourInDay = utils.getHours(endOfYear2);
      const hasMeridiem = utils.formatByString(utils.endOfDay(today), format2) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(utils.formatByString(utils.startOfDay(today), format2))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: utils.getMinutes(endOfYear2)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: utils.getSeconds(endOfYear2)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
const transferDateSectionValue = (utils, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case "year": {
      return utils.setYear(dateToTransferTo, utils.getYear(dateToTransferFrom));
    }
    case "month": {
      return utils.setMonth(dateToTransferTo, utils.getMonth(dateToTransferFrom));
    }
    case "weekDay": {
      const formattedDaysInWeek = getDaysInWeekStr(utils, section.format);
      const dayInWeekStrOfActiveDate = utils.formatByString(dateToTransferFrom, section.format);
      const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
      const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
      const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
      return utils.addDays(dateToTransferFrom, diff);
    }
    case "day": {
      return utils.setDate(dateToTransferTo, utils.getDate(dateToTransferFrom));
    }
    case "meridiem": {
      const isAM = utils.getHours(dateToTransferFrom) < 12;
      const mergedDateHours = utils.getHours(dateToTransferTo);
      if (isAM && mergedDateHours >= 12) {
        return utils.addHours(dateToTransferTo, -12);
      }
      if (!isAM && mergedDateHours < 12) {
        return utils.addHours(dateToTransferTo, 12);
      }
      return dateToTransferTo;
    }
    case "hours": {
      return utils.setHours(dateToTransferTo, utils.getHours(dateToTransferFrom));
    }
    case "minutes": {
      return utils.setMinutes(dateToTransferTo, utils.getMinutes(dateToTransferFrom));
    }
    case "seconds": {
      return utils.setSeconds(dateToTransferTo, utils.getSeconds(dateToTransferFrom));
    }
    default: {
      return dateToTransferTo;
    }
  }
};
const reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8
};
const mergeDateIntoReferenceDate = (utils, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) => (
  // cloning sections before sort to avoid mutating it
  [...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
    if (!shouldLimitToEditedSections || section.modified) {
      return transferDateSectionValue(utils, section, dateToTransferFrom, mergedDate);
    }
    return mergedDate;
  }, referenceDate)
);
const isAndroid = () => navigator.userAgent.toLowerCase().indexOf("android") > -1;
const clampDaySectionIfPossible = (utils, sections, sectionsValueBoundaries) => {
  const canClamp = sections.every((section) => section.type === "weekDay" || section.value !== "") && sections.some((section) => section.type === "day");
  if (!canClamp) {
    return null;
  }
  const sectionsForStartOfMonth = sections.map((section) => {
    if (section.type !== "day") {
      return section;
    }
    const dayBoundaries = sectionsValueBoundaries.day({
      currentDate: null,
      format: section.format,
      contentType: section.contentType
    });
    return _extends({}, section, {
      value: cleanDigitSectionValue(utils, dayBoundaries.minimum, section.type, section.format, section.hasLeadingZeros, dayBoundaries)
    });
  });
  const startOfMonth2 = getDateFromDateSections(utils, sectionsForStartOfMonth);
  if (startOfMonth2 == null || !utils.isValid(startOfMonth2)) {
    return null;
  }
  return sections.map((section) => {
    if (section.type !== "day") {
      return section;
    }
    const dayBoundaries = sectionsValueBoundaries.day({
      currentDate: startOfMonth2,
      format: section.format,
      contentType: section.contentType
    });
    if (Number(section.value) <= dayBoundaries.maximum) {
      return section;
    }
    return _extends({}, section, {
      value: dayBoundaries.maximum.toString()
    });
  });
};
const getSectionOrder = (sections, isRTL) => {
  const neighbors = {};
  if (!isRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (section, index) => {
        var _section$endSeparator;
        return index >= groupedSectionsStart && ((_section$endSeparator = section.endSeparator) == null ? void 0 : _section$endSeparator.includes(" ")) && // Special case where the spaces were not there in the initial input
        section.endSeparator !== " / ";
      }
    );
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
const singleItemValueManager = {
  emptyValue: null,
  getTodayValue: (utils, valueType) => valueType === "date" ? utils.startOfDay(utils.date()) : utils.date(),
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: (error) => error != null,
  defaultErrorState: null
};
const singleItemFieldValueManager = {
  updateReferenceValue: (utils, value, prevReferenceValue) => value == null || !utils.isValid(value) ? prevReferenceValue : value,
  getSectionsFromValue: (utils, date, prevSections, isRTL, getSectionsFromDate) => {
    const shouldReUsePrevDateSections = !utils.isValid(date) && !!prevSections;
    if (shouldReUsePrevDateSections) {
      return prevSections;
    }
    return addPositionPropertiesToSections(getSectionsFromDate(date), isRTL);
  },
  getValueStrFromSections: createDateStrForInputFromSections,
  getActiveDateManager: (utils, state) => ({
    date: state.value,
    referenceDate: state.referenceValue,
    getSections: (sections) => sections,
    getNewValuesFromNewActiveDate: (newActiveDate) => ({
      value: newActiveDate,
      referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : newActiveDate
    })
  }),
  parseValueStr: (valueStr, referenceValue, parseDate2) => parseDate2(valueStr.trim(), referenceValue)
};
var useEnhancedEffectExports = requireUseEnhancedEffect();
const useEnhancedEffect = /* @__PURE__ */ getDefaultExportFromCjs(useEnhancedEffectExports);
var useForkRef$1 = {};
var setRef = {};
var hasRequiredSetRef;
function requireSetRef() {
  if (hasRequiredSetRef)
    return setRef;
  hasRequiredSetRef = 1;
  Object.defineProperty(setRef, "__esModule", {
    value: true
  });
  setRef.default = setRef$1;
  function setRef$1(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }
  return setRef;
}
var _interopRequireDefault$4 = interopRequireDefaultExports;
Object.defineProperty(useForkRef$1, "__esModule", {
  value: true
});
var _default$6 = useForkRef$1.default = useForkRef;
var React$2 = _interopRequireWildcard$2(reactExports);
var _setRef = _interopRequireDefault$4(requireSetRef());
function _getRequireWildcardCache$2(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache$2 = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard$2(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache$2(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function useForkRef(...refs) {
  return React$2.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        (0, _setRef.default)(ref, instance);
      });
    };
  }, refs);
}
function useValidation(props, validate, isSameError, defaultErrorState) {
  const {
    value,
    onError
  } = props;
  const adapter = useLocalizationContext();
  const previousValidationErrorRef = reactExports.useRef(defaultErrorState);
  const validationError = validate({
    adapter,
    value,
    props
  });
  reactExports.useEffect(() => {
    if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
  return validationError;
}
var useControlled$1 = {};
Object.defineProperty(useControlled$1, "__esModule", {
  value: true
});
var _default$5 = useControlled$1.default = useControlled;
var React$1 = _interopRequireWildcard$1(reactExports);
function _getRequireWildcardCache$1(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache$1 = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard$1(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache$1(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React$1.useRef(controlled !== void 0);
  const [valueState, setValue] = React$1.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = React$1.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
const useFieldState = (params) => {
  var _ref;
  const utils = useUtils();
  const localeText = useLocaleText();
  const adapter = useLocalizationContext();
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const {
    valueManager,
    fieldValueManager,
    valueType,
    validator,
    internalProps,
    internalProps: {
      value: valueProp,
      defaultValue,
      onChange,
      format: format2,
      formatDensity = "dense",
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange
    }
  } = params;
  const firstDefaultValue = reactExports.useRef(defaultValue);
  const valueFromTheOutside = (_ref = valueProp != null ? valueProp : firstDefaultValue.current) != null ? _ref : valueManager.emptyValue;
  const sectionsValueBoundaries = reactExports.useMemo(() => getSectionsBoundaries(utils), [utils]);
  const getSectionsFromValue = reactExports.useCallback((value, fallbackSections = null) => fieldValueManager.getSectionsFromValue(utils, value, fallbackSections, isRTL, (date) => splitFormatIntoSections(utils, localeText, format2, date, formatDensity)), [fieldValueManager, format2, localeText, isRTL, utils, formatDensity]);
  const placeholder = reactExports.useMemo(() => fieldValueManager.getValueStrFromSections(getSectionsFromValue(valueManager.emptyValue), isRTL), [fieldValueManager, getSectionsFromValue, valueManager.emptyValue, isRTL]);
  const [state, setState] = reactExports.useState(() => {
    const sections = getSectionsFromValue(valueFromTheOutside);
    return {
      sections,
      value: valueFromTheOutside,
      referenceValue: fieldValueManager.updateReferenceValue(utils, valueFromTheOutside, valueManager.getTodayValue(utils, valueType)),
      tempValueStrAndroid: null
    };
  });
  const [selectedSections, innerSetSelectedSections] = _default$5({
    controlled: selectedSectionsProp,
    default: null,
    name: "useField",
    state: "selectedSectionIndexes"
  });
  const setSelectedSections = (newSelectedSections) => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null ? void 0 : onSelectedSectionsChange(newSelectedSections);
    setState((prevState) => _extends({}, prevState, {
      selectedSectionQuery: null
    }));
  };
  const selectedSectionIndexes = reactExports.useMemo(() => {
    if (selectedSections == null) {
      return null;
    }
    if (selectedSections === "all") {
      return {
        startIndex: 0,
        endIndex: state.sections.length - 1,
        shouldSelectBoundarySelectors: true
      };
    }
    if (typeof selectedSections === "number") {
      return {
        startIndex: selectedSections,
        endIndex: selectedSections
      };
    }
    if (typeof selectedSections === "string") {
      const selectedSectionIndex = state.sections.findIndex((section) => section.type === selectedSections);
      return {
        startIndex: selectedSectionIndex,
        endIndex: selectedSectionIndex
      };
    }
    return selectedSections;
  }, [selectedSections, state.sections]);
  const publishValue = ({
    value,
    referenceValue,
    sections
  }) => {
    setState((prevState) => _extends({}, prevState, {
      sections,
      value,
      referenceValue,
      tempValueStrAndroid: null
    }));
    if (onChange) {
      const context = {
        validationError: validator({
          adapter,
          value,
          props: _extends({}, internalProps, {
            value
          })
        })
      };
      onChange(value, context);
    }
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return addPositionPropertiesToSections(newSections, isRTL);
  };
  const clearValue = () => {
    if (valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue)) {
      return;
    }
    publishValue({
      value: valueManager.emptyValue,
      referenceValue: state.referenceValue,
      sections: getSectionsFromValue(valueManager.emptyValue)
    });
  };
  const clearActiveSection = () => {
    if (selectedSectionIndexes == null) {
      return;
    }
    const activeSection = state.sections[selectedSectionIndexes.startIndex];
    if (activeSection.value === "") {
      return;
    }
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const nonEmptySectionCountBefore = activeDateManager.getSections(state.sections).filter((section) => section.value !== "").length;
    const isTheOnlyNonEmptySection = nonEmptySectionCountBefore === 1;
    const newSections = setSectionValue(selectedSectionIndexes.startIndex, "");
    const newActiveDate = isTheOnlyNonEmptySection ? null : utils.date(/* @__PURE__ */ new Date(""));
    const newValues = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
    if ((newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date))) {
      publishValue(_extends({}, newValues, {
        sections: newSections
      }));
    } else {
      setState((prevState) => _extends({}, prevState, newValues, {
        sections: newSections,
        tempValueStrAndroid: null
      }));
    }
  };
  const updateValueFromValueStr = (valueStr) => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = utils.parse(dateStr, format2);
      if (date == null || !utils.isValid(date)) {
        return null;
      }
      const sections = splitFormatIntoSections(utils, localeText, format2, date, formatDensity);
      return mergeDateIntoReferenceDate(utils, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    const newReferenceValue = fieldValueManager.updateReferenceValue(utils, newValue, state.referenceValue);
    publishValue({
      value: newValue,
      referenceValue: newReferenceValue,
      sections: getSectionsFromValue(newValue, state.sections)
    });
  };
  const updateSectionValue = ({
    activeSection,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    if (shouldGoToNextSection && selectedSectionIndexes && selectedSectionIndexes.startIndex < state.sections.length - 1) {
      setSelectedSections(selectedSectionIndexes.startIndex + 1);
    } else if (selectedSectionIndexes && selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
      setSelectedSections(selectedSectionIndexes.startIndex);
    }
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const newSections = setSectionValue(selectedSectionIndexes.startIndex, newSectionValue);
    const newActiveDateSections = activeDateManager.getSections(newSections);
    let newActiveDate = getDateFromDateSections(utils, newActiveDateSections);
    let shouldRegenSections = false;
    if (!utils.isValid(newActiveDate)) {
      const clampedSections = clampDaySectionIfPossible(utils, newActiveDateSections, sectionsValueBoundaries);
      if (clampedSections != null) {
        shouldRegenSections = true;
        newActiveDate = getDateFromDateSections(utils, clampedSections);
      }
    }
    let values;
    let shouldPublish;
    if (newActiveDate != null && utils.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(utils, newActiveDate, newActiveDateSections, activeDateManager.referenceDate, true);
      values = activeDateManager.getNewValuesFromNewActiveDate(mergedDate);
      shouldPublish = true;
    } else {
      values = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
      shouldPublish = (newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date));
    }
    const sections = shouldRegenSections ? getSectionsFromValue(values.value, state.sections) : newSections;
    if (shouldPublish) {
      return publishValue(_extends({}, values, {
        sections
      }));
    }
    return setState((prevState) => _extends({}, prevState, values, {
      sections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = (tempValueStrAndroid) => setState((prev) => _extends({}, prev, {
    tempValueStrAndroid
  }));
  reactExports.useEffect(() => {
    if (!valueManager.areValuesEqual(utils, state.value, valueFromTheOutside)) {
      setState((prevState) => _extends({}, prevState, {
        value: valueFromTheOutside,
        referenceValue: fieldValueManager.updateReferenceValue(utils, valueFromTheOutside, prevState.referenceValue),
        sections: getSectionsFromValue(valueFromTheOutside)
      }));
    }
  }, [valueFromTheOutside]);
  reactExports.useEffect(() => {
    const sections = getSectionsFromValue(state.value);
    setState((prevState) => _extends({}, prevState, {
      sections
    }));
  }, [format2, utils.locale]);
  return {
    state,
    selectedSectionIndexes,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    placeholder
  };
};
const QUERY_LIFE_DURATION_MS = 5e3;
const isQueryResponseWithoutValue = (response) => response.saveQuery != null;
const useFieldCharacterEditing = ({
  sections,
  updateSectionValue,
  sectionsValueBoundaries,
  setTempAndroidValueStr
}) => {
  const utils = useUtils();
  const [query, setQuery] = reactExports.useState(null);
  const resetQuery = _default$7(() => setQuery(null));
  reactExports.useEffect(() => {
    var _sections$query$secti;
    if (query != null && ((_sections$query$secti = sections[query.sectionIndex]) == null ? void 0 : _sections$query$secti.type) !== query.sectionType) {
      resetQuery();
    }
  }, [sections, query, resetQuery]);
  reactExports.useEffect(() => {
    if (query != null) {
      const timeout = setTimeout(() => resetQuery(), QUERY_LIFE_DURATION_MS);
      return () => {
        window.clearTimeout(timeout);
      };
    }
    return () => {
    };
  }, [query, resetQuery]);
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = sections[sectionIndex];
    if (query != null && (!isValidQueryValue || isValidQueryValue(query.value)) && query.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${query.value}${cleanKeyPressed}`;
      const queryResponse2 = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse2)) {
        setQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse2;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      resetQuery();
      return null;
    }
    setQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = (params) => {
    const findMatchingOptions = (format2, options, queryValue) => {
      const matchingValues = options.filter((option) => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = (format2) => getLetterEditingOptions(utils, activeSection.type, format2);
      if (activeSection.contentType === "letter") {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(utils, fallbackFormat).contentType === "letter") {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return _extends({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case "month": {
          const formatFallbackValue = (fallbackValue) => changeSectionValueFormat(utils, fallbackValue, utils.formats.month, activeSection.format);
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.month, formatFallbackValue);
        }
        case "weekDay": {
          const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.weekday, formatFallbackValue);
        }
        case "meridiem": {
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
        }
        default: {
          return {
            saveQuery: false
          };
        }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = (params) => {
    const getNewSectionValue = (queryValue, sectionType, format2, hasLeadingZeros, contentType) => {
      const queryValueNumber = Number(`${queryValue}`);
      const sectionBoundaries = sectionsValueBoundaries[sectionType]({
        currentDate: null,
        format: format2,
        contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }
      if (queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = Number(`${queryValue}0`) > sectionBoundaries.maximum || queryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(utils, queryValueNumber, sectionType, format2, hasLeadingZeros, sectionBoundaries);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === "digit") {
        return getNewSectionValue(queryValue, activeSection.type, activeSection.format, activeSection.hasLeadingZeros, activeSection.contentType);
      }
      if (activeSection.type === "month") {
        const response = getNewSectionValue(queryValue, activeSection.type, "MM", doesSectionHaveLeadingZeros(utils, "digit", "month", "MM"), "digit");
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(utils, response.sectionValue, "MM", activeSection.format);
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      if (activeSection.type === "weekDay") {
        const response = getNewSectionValue(queryValue, activeSection.type, activeSection.format, activeSection.hasLeadingZeros, activeSection.contentType);
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(utils, activeSection.format)[Number(response.sectionValue) - 1];
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, (queryValue) => !Number.isNaN(Number(queryValue)));
  };
  const applyCharacterEditing = _default$7((params) => {
    const activeSection = sections[params.sectionIndex];
    const isNumericEditing = !Number.isNaN(Number(params.keyPressed));
    const response = isNumericEditing ? applyNumericEditing(params) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
    } else {
      updateSectionValue({
        activeSection,
        newSectionValue: response.sectionValue,
        shouldGoToNextSection: response.shouldGoToNextSection
      });
    }
  });
  return {
    applyCharacterEditing,
    resetCharacterQuery: resetQuery
  };
};
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every((item) => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
const onSpaceOrEnter = (innerFn, externalEvent) => (event) => {
  if (event.key === "Enter" || event.key === " ") {
    innerFn(event);
    event.preventDefault();
    event.stopPropagation();
  }
  if (externalEvent) {
    externalEvent(event);
  }
};
const getActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
};
const DEFAULT_DESKTOP_MODE_MEDIA_QUERY = "@media (pointer: fine)";
const _excluded$o = ["onClick", "onKeyDown", "onFocus", "onBlur", "onMouseUp", "onPaste", "error"];
const useField = (params) => {
  const utils = useUtils();
  const {
    state,
    selectedSectionIndexes,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    placeholder
  } = useFieldState(params);
  const {
    applyCharacterEditing,
    resetCharacterQuery
  } = useFieldCharacterEditing({
    sections: state.sections,
    updateSectionValue,
    sectionsValueBoundaries,
    setTempAndroidValueStr
  });
  const {
    inputRef: inputRefProp,
    internalProps,
    internalProps: {
      readOnly = false,
      unstableFieldRef
    },
    forwardedProps: {
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      onMouseUp,
      onPaste,
      error
    },
    fieldValueManager,
    valueManager,
    validator
  } = params, otherForwardedProps = _objectWithoutPropertiesLoose(params.forwardedProps, _excluded$o);
  const inputRef = reactExports.useRef(null);
  const handleRef = _default$6(inputRefProp, inputRef);
  const focusTimeoutRef = reactExports.useRef(void 0);
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const sectionOrder = reactExports.useMemo(() => getSectionOrder(state.sections, isRTL), [state.sections, isRTL]);
  const syncSelectionFromDOM = () => {
    var _selectionStart;
    if (readOnly) {
      setSelectedSections(null);
      return;
    }
    const browserStartIndex = (_selectionStart = inputRef.current.selectionStart) != null ? _selectionStart : 0;
    const nextSectionIndex = browserStartIndex <= state.sections[0].startInInput ? 1 : state.sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
    const sectionIndex = nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  };
  const handleInputClick = _default$7((...args) => {
    onClick == null ? void 0 : onClick(...args);
    syncSelectionFromDOM();
  });
  const handleInputMouseUp = _default$7((event) => {
    onMouseUp == null ? void 0 : onMouseUp(event);
    event.preventDefault();
  });
  const handleInputFocus = _default$7((...args) => {
    onFocus == null ? void 0 : onFocus(...args);
    const input = inputRef.current;
    clearTimeout(focusTimeoutRef.current);
    focusTimeoutRef.current = setTimeout(() => {
      if (!input || input !== inputRef.current) {
        return;
      }
      if (selectedSectionIndexes != null || readOnly) {
        return;
      }
      if (
        // avoid selecting all sections when focusing empty field without value
        input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length
      ) {
        setSelectedSections("all");
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputBlur = _default$7((...args) => {
    onBlur == null ? void 0 : onBlur(...args);
    setSelectedSections(null);
  });
  const handleInputPaste = _default$7((event) => {
    onPaste == null ? void 0 : onPaste(event);
    if (readOnly) {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    if (selectedSectionIndexes && selectedSectionIndexes.startIndex === selectedSectionIndexes.endIndex) {
      const activeSection = state.sections[selectedSectionIndexes.startIndex];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly;
      if (isValidPastedValue) {
        return;
      }
      if (lettersOnly || digitsOnly) {
        event.preventDefault();
        return;
      }
    }
    event.preventDefault();
    updateValueFromValueStr(pastedValue);
  });
  const handleInputChange = _default$7((event) => {
    if (readOnly) {
      return;
    }
    const valueStr2 = event.target.value;
    const cleanValueStr = cleanString(valueStr2);
    if (selectedSectionIndexes == null) {
      updateValueFromValueStr(cleanValueStr);
      return;
    }
    let keyPressed;
    if (selectedSectionIndexes.startIndex === 0 && selectedSectionIndexes.endIndex === state.sections.length - 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getValueStrFromSections(state.sections, isRTL));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = state.sections[selectedSectionIndexes.startIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        return;
      }
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || "").length;
      keyPressed = cleanValueStr.slice(activeSection.start, activeSectionEndRelativeToNewValue);
    }
    if (isAndroid() && keyPressed.length === 0) {
      setTempAndroidValueStr(valueStr2);
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: selectedSectionIndexes.startIndex
    });
  });
  const handleInputKeyDown = _default$7((event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    switch (true) {
      case (event.key === "a" && (event.ctrlKey || event.metaKey)): {
        event.preventDefault();
        setSelectedSections("all");
        break;
      }
      case event.key === "ArrowRight": {
        event.preventDefault();
        if (selectedSectionIndexes == null) {
          setSelectedSections(sectionOrder.startIndex);
        } else if (selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
          setSelectedSections(selectedSectionIndexes.endIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[selectedSectionIndexes.startIndex].rightIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      case event.key === "ArrowLeft": {
        event.preventDefault();
        if (selectedSectionIndexes == null) {
          setSelectedSections(sectionOrder.endIndex);
        } else if (selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
          setSelectedSections(selectedSectionIndexes.startIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[selectedSectionIndexes.startIndex].leftIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      case ["Backspace", "Delete"].includes(event.key): {
        event.preventDefault();
        if (readOnly) {
          break;
        }
        if (selectedSectionIndexes == null || selectedSectionIndexes.startIndex === 0 && selectedSectionIndexes.endIndex === state.sections.length - 1) {
          clearValue();
        } else {
          clearActiveSection();
        }
        resetCharacterQuery();
        break;
      }
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(event.key): {
        event.preventDefault();
        if (readOnly || selectedSectionIndexes == null) {
          break;
        }
        const activeSection = state.sections[selectedSectionIndexes.startIndex];
        const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
        const newSectionValue = adjustSectionValue(utils, activeSection, event.key, sectionsValueBoundaries, activeDateManager.date);
        updateSectionValue({
          activeSection,
          newSectionValue,
          shouldGoToNextSection: false
        });
        break;
      }
    }
  });
  useEnhancedEffect(() => {
    if (selectedSectionIndexes == null) {
      if (inputRef.current.scrollLeft) {
        inputRef.current.scrollLeft = 0;
      }
      return;
    }
    const firstSelectedSection = state.sections[selectedSectionIndexes.startIndex];
    const lastSelectedSection = state.sections[selectedSectionIndexes.endIndex];
    let selectionStart = firstSelectedSection.startInInput;
    let selectionEnd = lastSelectedSection.endInInput;
    if (selectedSectionIndexes.shouldSelectBoundarySelectors) {
      selectionStart -= firstSelectedSection.startSeparator.length;
      selectionEnd += lastSelectedSection.endSeparator.length;
    }
    if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
      const currentScrollTop = inputRef.current.scrollTop;
      inputRef.current.setSelectionRange(selectionStart, selectionEnd);
      inputRef.current.scrollTop = currentScrollTop;
    }
  });
  const validationError = useValidation(_extends({}, internalProps, {
    value: state.value
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const inputError = reactExports.useMemo(() => {
    if (error !== void 0) {
      return error;
    }
    return valueManager.hasError(validationError);
  }, [valueManager, validationError, error]);
  reactExports.useEffect(() => {
    if (inputRef.current && inputRef.current === document.activeElement) {
      setSelectedSections("all");
    }
    return () => window.clearTimeout(focusTimeoutRef.current);
  }, []);
  reactExports.useEffect(() => {
    if (state.tempValueStrAndroid != null && selectedSectionIndexes != null) {
      resetCharacterQuery();
      clearActiveSection();
    }
  }, [state.tempValueStrAndroid]);
  const valueStr = reactExports.useMemo(() => {
    var _state$tempValueStrAn;
    return (_state$tempValueStrAn = state.tempValueStrAndroid) != null ? _state$tempValueStrAn : fieldValueManager.getValueStrFromSections(state.sections, isRTL);
  }, [state.sections, fieldValueManager, state.tempValueStrAndroid, isRTL]);
  const inputMode = reactExports.useMemo(() => {
    if (selectedSectionIndexes == null) {
      return "text";
    }
    if (state.sections[selectedSectionIndexes.startIndex].contentType === "letter") {
      return "text";
    }
    return "tel";
  }, [selectedSectionIndexes, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(document);
  const shouldShowPlaceholder = !inputHasFocus && valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue);
  reactExports.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => {
      var _selectionStart2, _selectionEnd;
      const browserStartIndex = (_selectionStart2 = inputRef.current.selectionStart) != null ? _selectionStart2 : 0;
      const browserEndIndex = (_selectionEnd = inputRef.current.selectionEnd) != null ? _selectionEnd : 0;
      if (browserStartIndex === 0 && browserEndIndex === 0) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= state.sections[0].startInInput ? 1 : state.sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;
    },
    setSelectedSections: (activeSectionIndex) => setSelectedSections(activeSectionIndex)
  }));
  return _extends({
    placeholder,
    autoComplete: "off"
  }, otherForwardedProps, {
    value: shouldShowPlaceholder ? "" : valueStr,
    inputMode,
    readOnly,
    onClick: handleInputClick,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onPaste: handleInputPaste,
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown,
    onMouseUp: handleInputMouseUp,
    error: inputError,
    ref: handleRef
  });
};
const validateDate = ({
  props,
  value,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const now = adapter.utils.date();
  const minDate = applyDefaultDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
  const maxDate = applyDefaultDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(props.shouldDisableDate && props.shouldDisableDate(value)):
      return "shouldDisableDate";
    case Boolean(props.shouldDisableMonth && props.shouldDisableMonth(value)):
      return "shouldDisableMonth";
    case Boolean(props.shouldDisableYear && props.shouldDisableYear(value)):
      return "shouldDisableYear";
    case Boolean(props.disableFuture && adapter.utils.isAfterDay(value, now)):
      return "disableFuture";
    case Boolean(props.disablePast && adapter.utils.isBeforeDay(value, now)):
      return "disablePast";
    case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
      return "minDate";
    case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
      return "maxDate";
    default:
      return null;
  }
};
const useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast
}) => {
  const adapter = useLocalizationContext();
  return reactExports.useCallback((day) => validateDate({
    adapter,
    value: day,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast]);
};
const _excluded$n = ["value", "defaultValue", "format", "formatDensity", "onChange", "readOnly", "onError", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "minDate", "maxDate", "disableFuture", "disablePast", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef"];
const useDefaultizedDateField = (props) => {
  var _props$disablePast, _props$disableFuture, _props$format;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : utils.formats.keyboardDate,
    minDate: applyDefaultDate(utils, props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, props.maxDate, defaultDates.maxDate)
  });
};
const useDateField = ({
  props,
  inputRef
}) => {
  const _useDefaultizedDateFi = useDefaultizedDateField(props), {
    value,
    defaultValue,
    format: format2,
    formatDensity,
    onChange,
    readOnly,
    onError,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    selectedSections,
    onSelectedSectionsChange,
    unstableFieldRef
  } = _useDefaultizedDateFi, other = _objectWithoutPropertiesLoose(_useDefaultizedDateFi, _excluded$n);
  return useField({
    inputRef,
    forwardedProps: other,
    internalProps: {
      value,
      defaultValue,
      format: format2,
      formatDensity,
      onChange,
      readOnly,
      onError,
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast,
      selectedSections,
      onSelectedSectionsChange,
      unstableFieldRef
    },
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateDate,
    valueType: "date"
  });
};
const _excluded$m = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"], _excluded2$3 = ["inputRef"], _excluded3$2 = ["ref", "onPaste", "inputMode", "readOnly"];
const DateField = /* @__PURE__ */ reactExports.forwardRef(function DateField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateField"
  });
  const {
    components,
    componentsProps,
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded$m);
  const ownerState = themeProps;
  const TextField$1 = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField;
  const _useSlotProps = useSlotProps({
    elementType: TextField$1,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$3);
  textFieldProps.inputProps = _extends({}, textFieldProps.inputProps, inputProps);
  textFieldProps.InputProps = _extends({}, textFieldProps.InputProps, InputProps);
  const _useDateField = useDateField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    inputMode,
    readOnly
  } = _useDateField, fieldProps = _objectWithoutPropertiesLoose(_useDateField, _excluded3$2);
  return /* @__PURE__ */ jsx(TextField$1, _extends({
    ref
  }, fieldProps, {
    inputProps: _extends({}, fieldProps.inputProps, {
      ref: inputRef,
      onPaste,
      inputMode,
      readOnly
    })
  }));
});
const validateTime = ({
  adapter,
  value,
  props
}) => {
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableClock,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture
  } = props;
  const now = adapter.utils.date();
  const date = adapter.utils.date(value);
  const isAfter2 = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
  if (value === null) {
    return null;
  }
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter2(minTime, value)):
      return "minTime";
    case Boolean(maxTime && isAfter2(value, maxTime)):
      return "maxTime";
    case Boolean(disableFuture && adapter.utils.isAfter(date, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.utils.isBefore(date, now)):
      return "disablePast";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getHours(value), "hours")):
      return "shouldDisableClock-hours";
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getMinutes(value), "minutes")):
      return "shouldDisableClock-minutes";
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getSeconds(value), "seconds")):
      return "shouldDisableClock-seconds";
    case Boolean(minutesStep && adapter.utils.getMinutes(value) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};
const _excluded$l = ["value", "defaultValue", "format", "formatDensity", "onChange", "readOnly", "onError", "disableFuture", "disablePast", "minTime", "maxTime", "minutesStep", "shouldDisableClock", "shouldDisableTime", "disableIgnoringDatePartForTimeValidation", "selectedSections", "onSelectedSectionsChange", "ampm", "unstableFieldRef"];
const useDefaultizedTimeField = (props) => {
  var _props$ampm, _props$disablePast, _props$disableFuture, _props$format;
  const utils = useUtils();
  const ampm = (_props$ampm = props.ampm) != null ? _props$ampm : utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h;
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : defaultFormat
  });
};
const useTimeField = ({
  props,
  inputRef
}) => {
  const _useDefaultizedTimeFi = useDefaultizedTimeField(props), {
    value,
    defaultValue,
    format: format2,
    formatDensity,
    onChange,
    readOnly,
    onError,
    disableFuture,
    disablePast,
    minTime,
    maxTime,
    minutesStep,
    shouldDisableClock,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation,
    selectedSections,
    onSelectedSectionsChange,
    ampm,
    unstableFieldRef
  } = _useDefaultizedTimeFi, other = _objectWithoutPropertiesLoose(_useDefaultizedTimeFi, _excluded$l);
  return useField({
    inputRef,
    forwardedProps: other,
    internalProps: {
      value,
      defaultValue,
      format: format2,
      formatDensity,
      onChange,
      readOnly,
      onError,
      disableFuture,
      disablePast,
      minTime,
      maxTime,
      minutesStep,
      shouldDisableClock,
      shouldDisableTime,
      disableIgnoringDatePartForTimeValidation,
      selectedSections,
      onSelectedSectionsChange,
      ampm,
      unstableFieldRef
    },
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateTime,
    valueType: "time"
  });
};
const _excluded$k = ["slots", "slotProps", "components", "componentsProps", "InputProps", "inputProps"], _excluded2$2 = ["inputRef"], _excluded3$1 = ["ref", "onPaste", "inputMode", "readOnly"];
const TimeField = /* @__PURE__ */ reactExports.forwardRef(function TimeField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTimeField"
  });
  const {
    slots,
    slotProps,
    components,
    componentsProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded$k);
  const ownerState = themeProps;
  const TextField$1 = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField;
  const _useSlotProps = useSlotProps({
    elementType: TextField$1,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$2);
  textFieldProps.inputProps = _extends({}, textFieldProps.inputProps, inputProps);
  textFieldProps.InputProps = _extends({}, textFieldProps.InputProps, InputProps);
  const _useTimeField = useTimeField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    inputMode,
    readOnly
  } = _useTimeField, fieldProps = _objectWithoutPropertiesLoose(_useTimeField, _excluded3$1);
  return /* @__PURE__ */ jsx(TextField$1, _extends({
    ref
  }, fieldProps, {
    inputProps: _extends({}, fieldProps.inputProps, {
      ref: inputRef,
      onPaste,
      inputMode,
      readOnly
    })
  }));
});
const createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
  switch (action.type) {
    case "changeMonth":
      return _extends({}, state, {
        slideDirection: action.direction,
        currentMonth: action.newMonth,
        isMonthSwitchingAnimating: !reduceAnimations
      });
    case "finishMonthSwitchingAnimation":
      return _extends({}, state, {
        isMonthSwitchingAnimating: false
      });
    case "changeFocusedDay": {
      if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
        return state;
      }
      const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
      return _extends({}, state, {
        focusedDay: action.focusedDay,
        isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
        currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
        slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
};
const useCalendarState = ({
  value,
  defaultCalendarMonth,
  disableFuture,
  disablePast,
  disableSwitchToMonthOnDayFocus = false,
  maxDate,
  minDate,
  onMonthChange,
  reduceAnimations,
  shouldDisableDate
}) => {
  var _ref;
  const now = useNow();
  const utils = useUtils();
  const reducerFn = reactExports.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
  const [calendarState, dispatch] = reactExports.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: value || now,
    currentMonth: utils.startOfMonth((_ref = value != null ? value : defaultCalendarMonth) != null ? _ref : clamp(utils, now, minDate, maxDate)),
    slideDirection: "left"
  });
  const handleChangeMonth = reactExports.useCallback((payload) => {
    dispatch(_extends({
      type: "changeMonth"
    }, payload));
    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  const changeMonth = reactExports.useCallback((newDate) => {
    const newDateRequested = newDate;
    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }
    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? "left" : "right"
    });
  }, [calendarState.currentMonth, handleChangeMonth, utils]);
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast
  });
  const onMonthSwitchingAnimationEnd = reactExports.useCallback(() => {
    dispatch({
      type: "finishMonthSwitchingAnimation"
    });
  }, []);
  const changeFocusedDay = _default$7((newFocusedDate, withoutMonthSwitchingAnimation) => {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: "changeFocusedDay",
        focusedDay: newFocusedDate,
        withoutMonthSwitchingAnimation
      });
    }
  });
  return {
    calendarState,
    changeMonth,
    changeFocusedDay,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    handleChangeMonth
  };
};
const getPickersFadeTransitionGroupUtilityClass = (slot) => generateUtilityClass("MuiPickersFadeTransitionGroup", slot);
generateUtilityClasses("MuiPickersFadeTransitionGroup", ["root"]);
const useUtilityClasses$h = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
const animationDuration = 500;
const PickersFadeTransitionGroupRoot = styled(TransitionGroup, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "block",
  position: "relative"
});
function PickersFadeTransitionGroup(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFadeTransitionGroup"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
  } = props;
  const classes = useUtilityClasses$h(props);
  if (reduceAnimations) {
    return children;
  }
  return /* @__PURE__ */ jsx(PickersFadeTransitionGroupRoot, {
    className: clsx(classes.root, className),
    children: /* @__PURE__ */ jsx(Fade, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: animationDuration,
        enter: animationDuration / 2,
        exit: 0
      },
      children
    }, transKey)
  });
}
const getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
const pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]);
const _excluded$j = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
const useUtilityClasses$g = (ownerState) => {
  const {
    classes,
    slideDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
const slideAnimationDuration = 350;
const PickersSlideTransitionRoot = styled(TransitionGroup, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles["slideEnter-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles["slideEnter-right"]
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles["slideExitActiveLeft-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles["slideExitActiveLeft-right"]
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create("transform", {
    duration: slideAnimationDuration,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: slideTransition,
      zIndex: 0
    }
  };
});
function PickersSlideTransition(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSlideTransition"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
    // extracting `classes` from `other`
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$j);
  const classes = useUtilityClasses$g(props);
  if (reduceAnimations) {
    return /* @__PURE__ */ jsx("div", {
      className: clsx(classes.root, className),
      children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return /* @__PURE__ */ jsx(PickersSlideTransitionRoot, {
    className: clsx(classes.root, className),
    childFactory: (element) => /* @__PURE__ */ reactExports.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    children: /* @__PURE__ */ jsx(CSSTransition$1, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: slideAnimationDuration,
      classNames: transitionClasses
    }, other, {
      children
    }), transKey)
  });
}
const getDayCalendarUtilityClass = (slot) => generateUtilityClass("MuiDayCalendar", slot);
generateUtilityClasses("MuiDayCalendar", ["header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const _excluded$i = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], _excluded2$1 = ["ownerState"];
const useUtilityClasses$f = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  };
  return composeClasses(slots, getDayCalendarUtilityClass, classes);
};
const defaultDayOfWeekFormatter = (day) => day.charAt(0).toUpperCase();
const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
const PickersCalendarDayHeader = styled("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (_, styles) => styles.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
const PickersCalendarWeekDayLabel = styled(Typography, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (_, styles) => styles.weekDayLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.secondary
}));
const PickersCalendarWeekNumberLabel = styled(Typography, {
  name: "MuiDayPicker",
  slot: "WeekNumberLabel",
  overridesResolver: (_, styles) => styles.weekNumberLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.disabled
}));
const PickersCalendarWeekNumber = styled(Typography, {
  name: "MuiDayPicker",
  slot: "WeekNumber",
  overridesResolver: (_, styles) => styles.weekNumber
})(({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: theme.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
}));
const PickersCalendarLoadingContainer = styled("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (_, styles) => styles.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: weeksContainerHeight
});
const PickersCalendarSlideTransition = styled(PickersSlideTransition, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (_, styles) => styles.slideTransition
})({
  minHeight: weeksContainerHeight
});
const PickersCalendarWeekContainer = styled("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (_, styles) => styles.monthContainer
})({
  overflow: "hidden"
});
const PickersCalendarWeek = styled("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (_, styles) => styles.weekContainer
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
function WrappedDay(_ref) {
  var _ref2, _slots$day, _slotProps$day;
  let {
    parentProps,
    day,
    focusableDay,
    selectedDays,
    isDateDisabled,
    currentMonthNumber,
    isViewFocused
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  const utils = useUtils();
  const now = useNow();
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    components,
    componentsProps,
    slots,
    slotProps
  } = parentProps;
  const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
  const isSelected = selectedDays.some((selectedDay) => utils.isSameDay(selectedDay, day));
  const isToday = utils.isSameDay(day, now);
  const Day = (_ref2 = (_slots$day = slots == null ? void 0 : slots.day) != null ? _slots$day : components == null ? void 0 : components.Day) != null ? _ref2 : PickersDay2;
  const _useSlotProps = useSlotProps({
    elementType: Day,
    externalSlotProps: (_slotProps$day = slotProps == null ? void 0 : slotProps.day) != null ? _slotProps$day : componentsProps == null ? void 0 : componentsProps.day,
    additionalProps: _extends({
      disableHighlightToday,
      showDaysOutsideCurrentMonth,
      role: "gridcell",
      isAnimating: isMonthSwitchingAnimating,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": utils.toJsDate(day).valueOf()
    }, other),
    ownerState: _extends({}, parentProps, {
      day,
      selected: isSelected
    })
  }), dayProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2$1);
  const isDisabled = reactExports.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const outsideCurrentMonth = reactExports.useMemo(() => utils.getMonth(day) !== currentMonthNumber, [utils, day, currentMonthNumber]);
  const isFirstVisibleCell = reactExports.useMemo(() => {
    const startOfMonth2 = utils.startOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, startOfMonth2);
    }
    return utils.isSameDay(day, utils.startOfWeek(startOfMonth2));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  const isLastVisibleCell = reactExports.useMemo(() => {
    const endOfMonth2 = utils.endOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, endOfMonth2);
    }
    return utils.isSameDay(day, utils.endOfWeek(endOfMonth2));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  return /* @__PURE__ */ jsx(Day, _extends({}, dayProps, {
    day,
    disabled: isDisabled,
    autoFocus: isViewFocused && isFocusableDay,
    today: isToday,
    outsideCurrentMonth,
    isFirstVisibleCell,
    isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? "date" : void 0
  }));
}
function DayCalendar(inProps) {
  const now = useNow();
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendar"
  });
  const classes = useUtilityClasses$f(props);
  const theme = useTheme();
  const {
    onFocusedDayChange,
    className,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => /* @__PURE__ */ jsx("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter = defaultDayOfWeekFormatter,
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    autoFocus
  } = props;
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture
  });
  const localeText = useLocaleText();
  const [internalHasFocus, setInternalHasFocus] = useControlled$2({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const [internalFocusedDay, setInternalFocusedDay] = reactExports.useState(() => focusedDay || now);
  const handleDaySelect = _default$7((day) => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = (day) => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      setInternalFocusedDay(day);
      onFocusedViewChange == null ? void 0 : onFocusedViewChange(true);
      setInternalHasFocus(true);
    }
  };
  const handleKeyDown = _default$7((event, day) => {
    switch (event.key) {
      case "ArrowUp":
        focusDay(utils.addDays(day, -7));
        event.preventDefault();
        break;
      case "ArrowDown":
        focusDay(utils.addDays(day, 7));
        event.preventDefault();
        break;
      case "ArrowLeft": {
        const newFocusedDayDefault = utils.addDays(day, theme.direction === "ltr" ? -1 : 1);
        const nextAvailableMonth = theme.direction === "ltr" ? utils.getPreviousMonth(day) : utils.getNextMonth(day);
        const closestDayToFocus = findClosestEnabledDate({
          utils,
          date: newFocusedDayDefault,
          minDate: theme.direction === "ltr" ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          maxDate: theme.direction === "ltr" ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
          isDateDisabled
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        const newFocusedDayDefault = utils.addDays(day, theme.direction === "ltr" ? 1 : -1);
        const nextAvailableMonth = theme.direction === "ltr" ? utils.getNextMonth(day) : utils.getPreviousMonth(day);
        const closestDayToFocus = findClosestEnabledDate({
          utils,
          date: newFocusedDayDefault,
          minDate: theme.direction === "ltr" ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
          maxDate: theme.direction === "ltr" ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          isDateDisabled
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "Home":
        focusDay(utils.startOfWeek(day));
        event.preventDefault();
        break;
      case "End":
        focusDay(utils.endOfWeek(day));
        event.preventDefault();
        break;
      case "PageUp":
        focusDay(utils.getNextMonth(day));
        event.preventDefault();
        break;
      case "PageDown":
        focusDay(utils.getPreviousMonth(day));
        event.preventDefault();
        break;
    }
  });
  const handleFocus = _default$7((event, day) => focusDay(day));
  const handleBlur = _default$7((event, day) => {
    if (internalHasFocus && utils.isSameDay(internalFocusedDay, day)) {
      onFocusedViewChange == null ? void 0 : onFocusedViewChange(false);
    }
  });
  const currentMonthNumber = utils.getMonth(currentMonth);
  const validSelectedDays = reactExports.useMemo(() => selectedDays.filter((day) => !!day).map((day) => utils.startOfDay(day)), [utils, selectedDays]);
  const transitionKey = currentMonthNumber;
  const slideNodeRef = reactExports.useMemo(() => /* @__PURE__ */ reactExports.createRef(), [transitionKey]);
  const startOfCurrentWeek = utils.startOfWeek(now);
  const focusableDay = reactExports.useMemo(() => {
    const startOfMonth2 = utils.startOfMonth(currentMonth);
    const endOfMonth2 = utils.endOfMonth(currentMonth);
    if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth2) || utils.isBeforeDay(internalFocusedDay, startOfMonth2)) {
      return findClosestEnabledDate({
        utils,
        date: internalFocusedDay,
        minDate: startOfMonth2,
        maxDate: endOfMonth2,
        disablePast,
        disableFuture,
        isDateDisabled
      });
    }
    return internalFocusedDay;
  }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils]);
  const weeksToDisplay = reactExports.useMemo(() => {
    const toDisplay = utils.getWeekArray(currentMonth);
    let nextMonth = utils.addMonths(currentMonth, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = utils.getWeekArray(nextMonth);
      const hasCommonWeek = utils.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week) => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = utils.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, utils]);
  return /* @__PURE__ */ jsxs("div", {
    role: "grid",
    "aria-labelledby": gridLabelId,
    children: [/* @__PURE__ */ jsxs(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && /* @__PURE__ */ jsx(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": localeText.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: localeText.calendarWeekNumberHeaderText
      }), utils.getWeekdays().map((day, i) => {
        var _dayOfWeekFormatter;
        return /* @__PURE__ */ jsx(PickersCalendarWeekDayLabel, {
          variant: "caption",
          role: "columnheader",
          "aria-label": utils.format(utils.addDays(startOfCurrentWeek, i), "weekday"),
          className: classes.weekDayLabel,
          children: (_dayOfWeekFormatter = dayOfWeekFormatter == null ? void 0 : dayOfWeekFormatter(day)) != null ? _dayOfWeekFormatter : day
        }, day + i.toString());
      })]
    }), loading ? /* @__PURE__ */ jsx(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : /* @__PURE__ */ jsx(PickersCalendarSlideTransition, _extends({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations,
      slideDirection,
      className: clsx(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: /* @__PURE__ */ jsx(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => /* @__PURE__ */ jsxs(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && /* @__PURE__ */ jsx(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": localeText.calendarWeekNumberAriaLabelText(utils.getWeekNumber(week[0])),
            children: localeText.calendarWeekNumberText(utils.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => /* @__PURE__ */ jsx(WrappedDay, {
            parentProps: props,
            day,
            selectedDays: validSelectedDays,
            focusableDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled,
            currentMonthNumber,
            isViewFocused: internalHasFocus,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}
function getPickersMonthUtilityClass(slot) {
  return generateUtilityClass("MuiPickersMonth", slot);
}
const pickersMonthClasses = generateUtilityClasses("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]);
const _excluded$h = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "monthsPerRow"];
const useUtilityClasses$e = (ownerState) => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    monthButton: ["monthButton", disabled && "disabled", selected && "selected"]
  };
  return composeClasses(slots, getPickersMonthUtilityClass, classes);
};
const PickersMonthRoot = styled("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root]
})(({
  ownerState
}) => ({
  flexBasis: ownerState.monthsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const PickersMonthButton = styled("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (_, styles) => [styles.monthButton, {
    [`&.${pickersMonthClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersMonthClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pickersMonthClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersMonthClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
const PickersMonth = /* @__PURE__ */ reactExports.memo(function PickersMonth2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersMonth"
  });
  const {
    autoFocus,
    children,
    disabled,
    value,
    tabIndex,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    "aria-current": ariaCurrent
    // We don't want to forward this prop to the root element
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$h);
  const ref = reactExports.useRef(null);
  const classes = useUtilityClasses$e(props);
  useEnhancedEffect$2(() => {
    if (autoFocus) {
      var _ref$current;
      (_ref$current = ref.current) == null ? void 0 : _ref$current.focus();
    }
  }, [autoFocus]);
  return /* @__PURE__ */ jsx(PickersMonthRoot, _extends({
    className: classes.root,
    ownerState: props
  }, other, {
    children: /* @__PURE__ */ jsx(PickersMonthButton, {
      ref,
      disabled,
      type: "button",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value),
      className: classes.monthButton,
      ownerState: props,
      children
    })
  }));
});
function getMonthCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiMonthCalendar", slot);
}
generateUtilityClasses("MuiMonthCalendar", ["root"]);
const _excluded$g = ["className", "value", "defaultValue", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow"];
const useUtilityClasses$d = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({
    disableFuture: false,
    disablePast: false
  }, themeProps, {
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const MonthCalendarRoot = styled("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: 320
});
const MonthCalendar = /* @__PURE__ */ reactExports.forwardRef(function MonthCalendar2(inProps, ref) {
  const now = useNow();
  const theme = useTheme$1();
  const utils = useUtils();
  const props = useMonthCalendarDefaultizedProps(inProps, "MuiMonthCalendar");
  const {
    className,
    value: valueProp,
    defaultValue,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    shouldDisableMonth,
    readOnly,
    disableHighlightToday,
    autoFocus = false,
    onMonthFocus,
    hasFocus,
    onFocusedViewChange,
    monthsPerRow = 3
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
  const ownerState = props;
  const classes = useUtilityClasses$d(ownerState);
  const [value, setValue] = useControlled$2({
    name: "MonthCalendar",
    state: "value",
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : null
  });
  const todayMonth = reactExports.useMemo(() => utils.getMonth(now), [utils, now]);
  const selectedDateOrStartOfMonth = reactExports.useMemo(() => value != null ? value : utils.startOfMonth(now), [now, utils, value]);
  const selectedMonth = reactExports.useMemo(() => {
    if (value != null) {
      return utils.getMonth(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getMonth(now);
  }, [now, value, utils, disableHighlightToday]);
  const [focusedMonth, setFocusedMonth] = reactExports.useState(() => selectedMonth || todayMonth);
  const [internalHasFocus, setInternalHasFocus] = useControlled$2({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const changeHasFocus = useEventCallback$2((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = useEventCallback$2((month) => {
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    if (utils.isBefore(month, firstEnabledMonth)) {
      return true;
    }
    if (utils.isAfter(month, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(month);
  });
  const handleMonthSelection = useEventCallback$2((event, month) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setMonth(selectedDateOrStartOfMonth, month);
    setValue(newDate);
    onChange == null ? void 0 : onChange(newDate);
  });
  const focusMonth = useEventCallback$2((month) => {
    if (!isMonthDisabled(utils.setMonth(selectedDateOrStartOfMonth, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  reactExports.useEffect(() => {
    setFocusedMonth((prevFocusedMonth) => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = useEventCallback$2((event, month) => {
    const monthsInYear = 12;
    const monthsInRow = 3;
    switch (event.key) {
      case "ArrowUp":
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusMonth((monthsInYear + month + (theme.direction === "ltr" ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowRight":
        focusMonth((monthsInYear + month + (theme.direction === "ltr" ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
    }
  });
  const handleMonthFocus = useEventCallback$2((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = useEventCallback$2((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return /* @__PURE__ */ jsx(MonthCalendarRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: utils.getMonthArray(selectedDateOrStartOfMonth).map((month) => {
      const monthNumber = utils.getMonth(month);
      const monthText = utils.format(month, "monthShort");
      const isSelected = monthNumber === selectedMonth;
      const isDisabled = disabled || isMonthDisabled(month);
      return /* @__PURE__ */ jsx(PickersMonth, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": todayMonth === monthNumber ? "date" : void 0,
        monthsPerRow,
        children: monthText
      }, monthText);
    })
  }));
});
function getPickersYearUtilityClass(slot) {
  return generateUtilityClass("MuiPickersYear", slot);
}
const pickersYearClasses = generateUtilityClasses("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]);
const _excluded$f = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"];
const useUtilityClasses$c = (ownerState) => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    yearButton: ["yearButton", disabled && "disabled", selected && "selected"]
  };
  return composeClasses(slots, getPickersYearUtilityClass, classes);
};
const PickersYearRoot = styled("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root]
})(({
  ownerState
}) => ({
  flexBasis: ownerState.yearsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const PickersYearButton = styled("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (_, styles) => [styles.yearButton, {
    [`&.${pickersYearClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersYearClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pickersYearClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersYearClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
const PickersYear = /* @__PURE__ */ reactExports.memo(function PickersYear2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersYear"
  });
  const {
    autoFocus,
    className,
    children,
    disabled,
    value,
    tabIndex,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    "aria-current": ariaCurrent
    // We don't want to forward this prop to the root element
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
  const ref = reactExports.useRef(null);
  const classes = useUtilityClasses$c(props);
  reactExports.useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  return /* @__PURE__ */ jsx(PickersYearRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: props
  }, other, {
    children: /* @__PURE__ */ jsx(PickersYearButton, {
      ref,
      disabled,
      type: "button",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value),
      className: classes.yearButton,
      ownerState: props,
      children
    })
  }));
});
function getYearCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiYearCalendar", slot);
}
generateUtilityClasses("MuiYearCalendar", ["root"]);
const _excluded$e = ["autoFocus", "className", "value", "defaultValue", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow"];
const useUtilityClasses$b = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const YearCalendarRoot = styled("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: 320,
  maxHeight: 304
});
const YearCalendar = /* @__PURE__ */ reactExports.forwardRef(function YearCalendar2(inProps, ref) {
  const now = useNow();
  const theme = useTheme$1();
  const utils = useUtils();
  const props = useYearCalendarDefaultizedProps(inProps, "MuiYearCalendar");
  const {
    autoFocus,
    className,
    value: valueProp,
    defaultValue,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    readOnly,
    shouldDisableYear,
    disableHighlightToday,
    onYearFocus,
    hasFocus,
    onFocusedViewChange,
    yearsPerRow = 3
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$e);
  const ownerState = props;
  const classes = useUtilityClasses$b(ownerState);
  const [value, setValue] = useControlled$2({
    name: "YearCalendar",
    state: "value",
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : null
  });
  const selectedDateOrStartOfYear = reactExports.useMemo(() => value != null ? value : utils.startOfYear(now), [now, utils, value]);
  const todayYear = reactExports.useMemo(() => utils.getYear(now), [utils, now]);
  const selectedYear = reactExports.useMemo(() => {
    if (value != null) {
      return utils.getYear(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getYear(now);
  }, [now, value, utils, disableHighlightToday]);
  const [focusedYear, setFocusedYear] = reactExports.useState(() => selectedYear || todayYear);
  const [internalHasFocus, setInternalHasFocus] = useControlled$2({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const changeHasFocus = useEventCallback$2((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = useEventCallback$2((dateToValidate) => {
    if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (shouldDisableYear && shouldDisableYear(dateToValidate)) {
      return true;
    }
    return false;
  });
  const handleYearSelection = useEventCallback$2((event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setYear(selectedDateOrStartOfYear, year);
    setValue(newDate);
    onChange == null ? void 0 : onChange(newDate);
  });
  const focusYear = useEventCallback$2((year) => {
    if (!isYearDisabled(utils.setYear(selectedDateOrStartOfYear, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus == null ? void 0 : onYearFocus(year);
    }
  });
  reactExports.useEffect(() => {
    setFocusedYear((prevFocusedYear) => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const handleKeyDown = useEventCallback$2((event, year) => {
    switch (event.key) {
      case "ArrowUp":
        focusYear(year - yearsPerRow);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusYear(year + yearsPerRow);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusYear(year + (theme.direction === "ltr" ? -1 : 1));
        event.preventDefault();
        break;
      case "ArrowRight":
        focusYear(year + (theme.direction === "ltr" ? 1 : -1));
        event.preventDefault();
        break;
    }
  });
  const handleYearFocus = useEventCallback$2((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = useEventCallback$2((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = reactExports.useRef(null);
  const handleRef = useForkRef$2(ref, scrollerRef);
  reactExports.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  return /* @__PURE__ */ jsx(YearCalendarRoot, _extends({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: utils.getYearRange(minDate, maxDate).map((year) => {
      const yearNumber = utils.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return /* @__PURE__ */ jsx(PickersYear, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? "date" : void 0,
        yearsPerRow,
        children: utils.format(year, "year")
      }, utils.format(year, "year"));
    })
  }));
});
const getPickersCalendarHeaderUtilityClass = (slot) => generateUtilityClass("MuiPickersCalendarHeader", slot);
const pickersCalendarHeaderClasses = generateUtilityClasses("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]);
const _excluded$d = ["ownerState"];
const useUtilityClasses$a = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  };
  return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
};
const PickersCalendarHeaderRoot = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 16,
  marginBottom: 8,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 30,
  minHeight: 30
});
const PickersCalendarHeaderLabelContainer = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (_, styles) => styles.labelContainer
})(({
  theme
}) => _extends({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
const PickersCalendarHeaderLabel = styled("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (_, styles) => styles.label
})({
  marginRight: 6
});
const PickersCalendarHeaderSwitchViewButton = styled(IconButton, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (_, styles) => styles.switchViewButton
})(({
  ownerState
}) => _extends({
  marginRight: "auto"
}, ownerState.view === "year" && {
  [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
    transform: "rotate(180deg)"
  }
}));
const PickersCalendarHeaderSwitchViewIcon = styled(ArrowDropDown, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (_, styles) => styles.switchViewIcon
})(({
  theme
}) => ({
  willChange: "transform",
  transition: theme.transitions.create("transform"),
  transform: "rotate(0deg)"
}));
function PickersCalendarHeader(inProps) {
  var _slots$switchViewButt, _slots$switchViewIcon;
  const localeText = useLocaleText();
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersCalendarHeader"
  });
  const {
    slots,
    slotProps,
    currentMonth: month,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onViewChange,
    view,
    reduceAnimations,
    views,
    labelId
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$a(props);
  const SwitchViewButton = (_slots$switchViewButt = slots == null ? void 0 : slots.switchViewButton) != null ? _slots$switchViewButt : PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = useSlotProps({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": localeText.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState,
    className: classes.switchViewButton
  });
  const SwitchViewIcon = (_slots$switchViewIcon = slots == null ? void 0 : slots.switchViewIcon) != null ? _slots$switchViewIcon : PickersCalendarHeaderSwitchViewIcon;
  const _useSlotProps = useSlotProps({
    elementType: SwitchViewIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.switchViewIcon,
    ownerState: void 0,
    className: classes.switchViewIcon
  }), switchViewIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded$d);
  const selectNextMonth = () => onMonthChange(utils.getNextMonth(month), "left");
  const selectPreviousMonth = () => onMonthChange(utils.getPreviousMonth(month), "right");
  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find((el) => el !== view) || views[0]);
    } else {
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };
  if (views.length === 1 && views[0] === "year") {
    return null;
  }
  return /* @__PURE__ */ jsxs(PickersCalendarHeaderRoot, {
    ownerState,
    className: classes.root,
    children: [/* @__PURE__ */ jsxs(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [/* @__PURE__ */ jsx(PickersFadeTransitionGroup, {
        reduceAnimations,
        transKey: utils.format(month, "monthAndYear"),
        children: /* @__PURE__ */ jsx(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState,
          className: classes.label,
          children: utils.format(month, "monthAndYear")
        })
      }), views.length > 1 && !disabled && /* @__PURE__ */ jsx(SwitchViewButton, _extends({}, switchViewButtonProps, {
        children: /* @__PURE__ */ jsx(SwitchViewIcon, _extends({}, switchViewIconProps))
      }))]
    }), /* @__PURE__ */ jsx(Fade, {
      in: view === "day",
      children: /* @__PURE__ */ jsx(PickersArrowSwitcher, {
        slots,
        slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: localeText.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: localeText.nextMonth
      })
    })]
  });
}
const defaultReduceAnimations = typeof navigator !== "undefined" && /(android)/i.test(navigator.userAgent);
const getDateCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateCalendar", slot);
generateUtilityClasses("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const _excluded$c = ["autoFocus", "onViewChange", "value", "defaultValue", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow"];
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  };
  return composeClasses(slots, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({
    loading: false,
    disablePast: false,
    disableFuture: false,
    openTo: "day",
    views: ["year", "day"],
    reduceAnimations: defaultReduceAnimations,
    renderLoading: () => /* @__PURE__ */ jsx("span", {
      children: "..."
    })
  }, themeProps, {
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const DateCalendarRoot = styled(PickerViewRoot, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column"
});
const DateCalendarViewTransitionContainer = styled(PickersFadeTransitionGroup, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (props, styles) => styles.viewTransitionContainer
})({});
const DateCalendar = /* @__PURE__ */ reactExports.forwardRef(function DateCalendar2(inProps, ref) {
  const utils = useUtils();
  const id = useId$2();
  const props = useDateCalendarDefaultizedProps(inProps, "MuiDateCalendar");
  const {
    autoFocus,
    onViewChange,
    value: valueProp,
    defaultValue,
    disableFuture,
    disablePast,
    defaultCalendarMonth,
    onChange,
    onYearChange,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    view: inView,
    views,
    openTo,
    className,
    disabled,
    readOnly,
    minDate,
    maxDate,
    disableHighlightToday,
    focusedView: inFocusedView,
    onFocusedViewChange,
    showDaysOutsideCurrentMonth,
    fixedWeekNumber,
    dayOfWeekFormatter,
    components,
    componentsProps,
    slots,
    slotProps,
    loading,
    renderLoading,
    displayWeekNumber,
    yearsPerRow,
    monthsPerRow
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$c);
  const [value, setValue] = useControlled$2({
    name: "DateCalendar",
    state: "value",
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : null
  });
  const handleValueChange = useEventCallback$2((newValue, selectionState) => {
    setValue(newValue);
    onChange == null ? void 0 : onChange(newValue, selectionState);
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const {
    calendarState,
    changeFocusedDay,
    changeMonth,
    handleChangeMonth,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value,
    defaultCalendarMonth,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture
  });
  const handleDateMonthChange = useEventCallback$2((newDate) => {
    const startOfMonth2 = utils.startOfMonth(newDate);
    const endOfMonth2 = utils.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfMonth2) ? startOfMonth2 : minDate,
      maxDate: utils.isAfter(maxDate, endOfMonth2) ? endOfMonth2 : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      onMonthChange == null ? void 0 : onMonthChange(startOfMonth2);
    } else {
      goToNextView();
      changeMonth(startOfMonth2);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleDateYearChange = useEventCallback$2((newDate) => {
    const startOfYear2 = utils.startOfYear(newDate);
    const endOfYear2 = utils.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfYear2) ? startOfYear2 : minDate,
      maxDate: utils.isAfter(maxDate, endOfYear2) ? endOfYear2 : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      onYearChange == null ? void 0 : onYearChange(closestEnabledDate);
    } else {
      goToNextView();
      changeMonth(startOfYear2);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleSelectedDayChange = useEventCallback$2((day) => {
    if (value && day) {
      return setValueAndGoToNextView(utils.mergeDateAndTime(day, value), "finish");
    }
    return setValueAndGoToNextView(day, "finish");
  });
  reactExports.useEffect(() => {
    if (value != null && utils.isValid(value)) {
      changeMonth(value);
    }
  }, [value]);
  const ownerState = props;
  const classes = useUtilityClasses$9(ownerState);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled
  };
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const prevOpenViewRef = reactExports.useRef(view);
  reactExports.useEffect(() => {
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = reactExports.useMemo(() => [value], [value]);
  return /* @__PURE__ */ jsxs(DateCalendarRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsx(PickersCalendarHeader, {
      views,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
      onMonthChange: (newMonth, direction) => handleChangeMonth({
        newMonth,
        direction
      }),
      minDate: minDateWithDisabled,
      maxDate: maxDateWithDisabled,
      disabled,
      disablePast,
      disableFuture,
      reduceAnimations,
      labelId: gridLabelId,
      slots,
      slotProps
    }), /* @__PURE__ */ jsx(DateCalendarViewTransitionContainer, {
      reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState,
      children: /* @__PURE__ */ jsxs("div", {
        children: [view === "year" && /* @__PURE__ */ jsx(YearCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          value,
          onChange: handleDateYearChange,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("year", isViewFocused),
          yearsPerRow
        })), view === "month" && /* @__PURE__ */ jsx(MonthCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          hasFocus,
          className,
          value,
          onChange: handleDateMonthChange,
          shouldDisableMonth,
          onFocusedViewChange: (isViewFocused) => setFocusedView("month", isViewFocused),
          monthsPerRow
        })), view === "day" && /* @__PURE__ */ jsx(DayCalendar, _extends({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd,
          onFocusedDayChange: changeFocusedDay,
          reduceAnimations,
          selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate,
          shouldDisableMonth,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("day", isViewFocused),
          gridLabelId,
          showDaysOutsideCurrentMonth,
          fixedWeekNumber,
          dayOfWeekFormatter,
          displayWeekNumber,
          components,
          componentsProps,
          slots,
          slotProps,
          loading,
          renderLoading
        }))]
      })
    })]
  }));
});
const getDayCalendarSkeletonUtilityClass = (slot) => generateUtilityClass("MuiDayCalendarSkeleton", slot);
generateUtilityClasses("MuiDayCalendarSkeleton", ["root", "week", "daySkeleton"]);
const _excluded$b = ["className"];
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    week: ["week"],
    daySkeleton: ["daySkeleton"]
  };
  return composeClasses(slots, getDayCalendarSkeletonUtilityClass, classes);
};
const DayCalendarSkeletonRoot = styled("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  alignSelf: "start"
});
const DayCalendarSkeletonWeek = styled("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Week",
  overridesResolver: (props, styles) => styles.week
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
const DayCalendarSkeletonDay = styled(Skeleton, {
  name: "MuiDayCalendarSkeleton",
  slot: "DaySkeleton",
  overridesResolver: (props, styles) => styles.daySkeleton
})(({
  ownerState
}) => _extends({
  margin: `0 ${DAY_MARGIN}px`
}, ownerState.day === 0 && {
  visibility: "hidden"
}));
DayCalendarSkeletonDay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: K.shape({
    day: K.number.isRequired
  }).isRequired
};
const monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
function DayCalendarSkeleton(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendarSkeleton"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
  const classes = useUtilityClasses$8(other);
  return /* @__PURE__ */ jsx(DayCalendarSkeletonRoot, _extends({
    className: clsx(classes.root, className)
  }, other, {
    children: monthMap.map((week, index) => /* @__PURE__ */ jsx(DayCalendarSkeletonWeek, {
      className: classes.week,
      children: week.map((day, index2) => /* @__PURE__ */ jsx(DayCalendarSkeletonDay, {
        variant: "circular",
        width: DAY_SIZE,
        height: DAY_SIZE,
        className: classes.daySkeleton,
        ownerState: {
          day
        }
      }, index2))
    }, index))
  }));
}
const isYearOnlyView = (views) => views.length === 1 && views[0] === "year";
const isYearAndMonthViews = (views) => views.length === 2 && views.indexOf("month") !== -1 && views.indexOf("year") !== -1;
const applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views != null ? views : defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error("MUI: The `views` prop must contain at least one view");
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};
function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbar", slot);
}
const pickersToolbarClasses = generateUtilityClasses("MuiPickersToolbar", ["root", "content", "penIconButton", "penIconButtonLandscape"]);
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", isLandscape && "penIconButtonLandscape"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarRoot = styled("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3)
}, ownerState.isLandscape && {
  height: "auto",
  maxWidth: 160,
  padding: 16,
  justifyContent: "flex-start",
  flexWrap: "wrap"
}));
const PickersToolbarContent = styled(Grid, {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(({
  ownerState
}) => _extends({
  flex: 1
}, !ownerState.isLandscape && {
  alignItems: "center"
}));
const PickersToolbar = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbar"
  });
  const {
    children,
    className,
    isLandscape,
    landscapeDirection = "column",
    toolbarTitle,
    hidden,
    titleId
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$7(ownerState);
  if (hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxs(PickersToolbarRoot, {
    ref,
    className: clsx(classes.root, className),
    ownerState,
    children: [/* @__PURE__ */ jsx(Typography, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      children: toolbarTitle
    }), /* @__PURE__ */ jsx(PickersToolbarContent, {
      container: true,
      justifyContent: isLandscape ? "flex-start" : "space-between",
      className: classes.content,
      ownerState,
      direction: isLandscape ? landscapeDirection : "row",
      alignItems: isLandscape ? "flex-start" : "flex-end",
      children
    })]
  });
});
function getDatePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDatePickerToolbar", slot);
}
generateUtilityClasses("MuiDatePickerToolbar", ["root", "title"]);
const _excluded$a = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views"];
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    title: ["title"]
  };
  return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
};
const DatePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
const DatePickerToolbarTitle = styled(Typography, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (_, styles) => styles.title
})(({
  ownerState
}) => _extends({}, ownerState.isLandscape && {
  margin: "auto 16px auto auto"
}));
const DatePickerToolbar = /* @__PURE__ */ reactExports.forwardRef(function DatePickerToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePickerToolbar"
  });
  const {
    value,
    isLandscape,
    toolbarFormat,
    toolbarPlaceholder = "––",
    views
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
  const utils = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses$6(props);
  const dateText = reactExports.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(value, toolbarFormat);
    }
    if (isYearOnlyView(views)) {
      return utils.format(value, "year");
    }
    if (isYearAndMonthViews(views)) {
      return utils.format(value, "month");
    }
    return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(value, "normalDateWithWeekday") : utils.format(value, "normalDate");
  }, [value, toolbarFormat, toolbarPlaceholder, utils, views]);
  const ownerState = props;
  return /* @__PURE__ */ jsx(DatePickerToolbarRoot, _extends({
    ref,
    toolbarTitle: localeText.datePickerToolbarTitle,
    isLandscape,
    className: classes.root
  }, other, {
    children: /* @__PURE__ */ jsx(DatePickerToolbarTitle, {
      variant: "h4",
      align: isLandscape ? "left" : "center",
      ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
const getDatePickerFieldFormat = (utils, {
  format: format2,
  views
}) => {
  if (format2 != null) {
    return format2;
  }
  if (isYearOnlyView(views)) {
    return utils.formats.year;
  }
  if (isYearAndMonthViews(views)) {
    return utils.formats.monthAndYear;
  }
  return void 0;
};
function useDatePickerDefaultizedProps(props, name) {
  var _themeProps$slots, _themeProps$disableFu, _themeProps$disablePa, _themeProps$slotProps;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  const localeText = reactExports.useMemo(() => {
    var _themeProps$localeTex;
    if (((_themeProps$localeTex = themeProps.localeText) == null ? void 0 : _themeProps$localeTex.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      datePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = (_themeProps$slots = themeProps.slots) != null ? _themeProps$slots : uncapitalizeObjectKeys(themeProps.components);
  return _extends({}, themeProps, {
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate),
    slots: _extends({
      toolbar: DatePickerToolbar
    }, slots),
    slotProps: (_themeProps$slotProps = themeProps.slotProps) != null ? _themeProps$slotProps : themeProps.componentsProps
  });
}
const PickersModalDialogRoot = styled(MuiDialog)({
  [`& .${dialogClasses.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
const PickersModalDialogContent = styled(DialogContent)({
  "&:first-of-type": {
    padding: 0
  }
});
function PickersModalDialog(props) {
  var _slots$dialog, _slots$mobileTransiti;
  const {
    children,
    onDismiss,
    open,
    slots,
    slotProps
  } = props;
  const Dialog = (_slots$dialog = slots == null ? void 0 : slots.dialog) != null ? _slots$dialog : PickersModalDialogRoot;
  const Transition2 = (_slots$mobileTransiti = slots == null ? void 0 : slots.mobileTransition) != null ? _slots$mobileTransiti : Fade;
  return /* @__PURE__ */ jsx(Dialog, _extends({
    open,
    onClose: onDismiss
  }, slotProps == null ? void 0 : slotProps.dialog, {
    TransitionComponent: Transition2,
    TransitionProps: slotProps == null ? void 0 : slotProps.mobileTransition,
    PaperComponent: slots == null ? void 0 : slots.mobilePaper,
    PaperProps: slotProps == null ? void 0 : slotProps.mobilePaper,
    children: /* @__PURE__ */ jsx(PickersModalDialogContent, {
      children
    })
  }));
}
function getPickersPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPickersPopper", slot);
}
generateUtilityClasses("MuiPickersPopper", ["root", "paper"]);
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPickersPopperUtilityClass, classes);
};
const PickersPopperRoot = styled(MuiPopper, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
const PickersPopperPaper = styled(Paper, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (_, styles) => styles.paper
})(({
  ownerState
}) => _extends({
  transformOrigin: "top center",
  outline: 0
}, ownerState.placement === "top" && {
  transformOrigin: "bottom center"
}));
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function useClickAwayListener(active, onClickAway) {
  const movedRef = reactExports.useRef(false);
  const syntheticEventRef = reactExports.useRef(false);
  const nodeRef = reactExports.useRef(null);
  const activatedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!active) {
      return void 0;
    }
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener("mousedown", armClickAwayListener, true);
    document.addEventListener("touchstart", armClickAwayListener, true);
    return () => {
      document.removeEventListener("mousedown", armClickAwayListener, true);
      document.removeEventListener("touchstart", armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);
  const handleClickAway = useEventCallback$2((event) => {
    if (!activatedRef.current) {
      return;
    }
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!nodeRef.current || // is a TouchEvent?
    "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });
  const handleSynthetic = () => {
    syntheticEventRef.current = true;
  };
  reactExports.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener("touchstart", handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener("touchstart", handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  reactExports.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener("click", handleClickAway);
      return () => {
        doc.removeEventListener("click", handleClickAway);
        syntheticEventRef.current = false;
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
function PickersPopper(inProps) {
  var _slots$desktopTransit, _slots$desktopTrapFoc, _slots$desktopPaper, _slots$popper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersPopper"
  });
  const {
    anchorEl,
    children,
    containerRef = null,
    shouldRestoreFocus,
    onBlur,
    onDismiss,
    open,
    role,
    placement,
    slots,
    slotProps
  } = props;
  reactExports.useEffect(() => {
    function handleKeyDown2(nativeEvent) {
      if (open && (nativeEvent.key === "Escape" || nativeEvent.key === "Esc")) {
        onDismiss();
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [onDismiss, open]);
  const lastFocusedElementRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (role === "tooltip" || shouldRestoreFocus && !shouldRestoreFocus()) {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = getActiveElement(document);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, role, shouldRestoreFocus]);
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, onBlur != null ? onBlur : onDismiss);
  const paperRef = reactExports.useRef(null);
  const handleRef = useForkRef$2(paperRef, containerRef);
  const handlePaperRef = useForkRef$2(handleRef, clickAwayRef);
  const ownerState = props;
  const classes = useUtilityClasses$5(ownerState);
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss();
    }
  };
  const Transition2 = (_slots$desktopTransit = slots == null ? void 0 : slots.desktopTransition) != null ? _slots$desktopTransit : Grow;
  const TrapFocus = (_slots$desktopTrapFoc = slots == null ? void 0 : slots.desktopTrapFocus) != null ? _slots$desktopTrapFoc : FocusTrap;
  const Paper2 = (_slots$desktopPaper = slots == null ? void 0 : slots.desktopPaper) != null ? _slots$desktopPaper : PickersPopperPaper;
  const paperProps = useSlotProps({
    elementType: Paper2,
    externalSlotProps: slotProps == null ? void 0 : slotProps.desktopPaper,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref: handlePaperRef
    },
    className: classes.paper,
    ownerState: {}
    // Is overridden below to use `placement
  });
  const Popper = (_slots$popper = slots == null ? void 0 : slots.popper) != null ? _slots$popper : PickersPopperRoot;
  const popperProps = useSlotProps({
    elementType: Popper,
    externalSlotProps: slotProps == null ? void 0 : slotProps.popper,
    additionalProps: {
      transition: true,
      role,
      open,
      anchorEl,
      placement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: props
  });
  return /* @__PURE__ */ jsx(Popper, _extends({}, popperProps, {
    children: ({
      TransitionProps,
      placement: popperPlacement
    }) => /* @__PURE__ */ jsx(TrapFocus, _extends({
      open,
      disableAutoFocus: true,
      disableRestoreFocus: true,
      disableEnforceFocus: role === "tooltip",
      isEnabled: () => true
    }, slotProps == null ? void 0 : slotProps.desktopTrapFocus, {
      children: /* @__PURE__ */ jsx(Transition2, _extends({}, TransitionProps, slotProps == null ? void 0 : slotProps.desktopTransition, {
        children: /* @__PURE__ */ jsx(Paper2, _extends({}, paperProps, {
          onClick: (event) => {
            var _paperProps$onClick;
            onPaperClick(event);
            (_paperProps$onClick = paperProps.onClick) == null ? void 0 : _paperProps$onClick.call(paperProps, event);
          },
          onTouchStart: (event) => {
            var _paperProps$onTouchSt;
            onPaperTouchStart(event);
            (_paperProps$onTouchSt = paperProps.onTouchStart) == null ? void 0 : _paperProps$onTouchSt.call(paperProps, event);
          },
          ownerState: _extends({}, ownerState, {
            placement: popperPlacement
          }),
          children
        }))
      }))
    }))
  }));
}
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbarText", slot);
}
const pickersToolbarTextClasses = generateUtilityClasses("MuiPickersToolbarText", ["root", "selected"]);
const _excluded$9 = ["className", "selected", "value"];
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    selected
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
const PickersToolbarTextRoot = styled(Typography, {
  name: "MuiPickersToolbarText",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${pickersToolbarTextClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${pickersToolbarTextClasses.selected}`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
const PickersToolbarText = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbarText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarText"
  });
  const {
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
  const classes = useUtilityClasses$4(props);
  return /* @__PURE__ */ jsx(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx(className, classes.root),
    component: "span"
  }, other, {
    children: value
  }));
});
const _excluded$8 = ["align", "className", "selected", "typographyClassName", "value", "variant"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarButtonRoot = styled(Button, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
const PickersToolbarButton = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    selected,
    typographyClassName,
    value,
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
  const classes = useUtilityClasses$3(props);
  return /* @__PURE__ */ jsx(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx(className, classes.root)
  }, other, {
    children: /* @__PURE__ */ jsx(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});
const useOpenState = ({
  open,
  onOpen,
  onClose
}) => {
  const isControllingOpenProp = reactExports.useRef(typeof open === "boolean").current;
  const [openState, setIsOpenState] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isControllingOpenProp) {
      if (typeof open !== "boolean") {
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      }
      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  const setIsOpen = reactExports.useCallback((newIsOpen) => {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }
    if (newIsOpen && onOpen) {
      onOpen();
    }
    if (!newIsOpen && onClose) {
      onClose();
    }
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen
  };
};
const shouldPublishValue = (params) => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === "setValueFromField") {
    return true;
  }
  if (action.name === "setValueFromAction") {
    if (isCurrentValueTheDefaultValue && ["accept", "today", "clear"].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === "setValueFromView" && action.selectionState !== "shallow") {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  return false;
};
const shouldCommitValue = (params) => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled,
    closeOnSelect
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === "setValueFromAction") {
    if (isCurrentValueTheDefaultValue && ["accept", "today", "clear"].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === "setValueFromView" && action.selectionState === "finish" && closeOnSelect) {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  return false;
};
const shouldClosePicker = (params) => {
  const {
    action,
    closeOnSelect
  } = params;
  if (action.name === "setValueFromAction") {
    return true;
  }
  if (action.name === "setValueFromView") {
    return action.selectionState === "finish" && closeOnSelect;
  }
  return false;
};
const usePickerValue = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  validator
}) => {
  const {
    onAccept,
    onChange,
    value: inValue,
    defaultValue: inDefaultValue,
    closeOnSelect = wrapperVariant === "desktop",
    selectedSections: selectedSectionsProp,
    onSelectedSectionsChange
  } = props;
  const {
    current: defaultValue
  } = reactExports.useRef(inDefaultValue);
  const {
    current: isControlled
  } = reactExports.useRef(inValue !== void 0);
  const utils = useUtils();
  const adapter = useLocalizationContext();
  const [selectedSections, setSelectedSections] = useControlled$2({
    controlled: selectedSectionsProp,
    default: null,
    name: "usePickerValue",
    state: "selectedSections"
  });
  const {
    isOpen,
    setIsOpen
  } = useOpenState(props);
  const [dateState, setDateState] = reactExports.useState(() => {
    let initialValue;
    if (inValue !== void 0) {
      initialValue = inValue;
    } else if (defaultValue !== void 0) {
      initialValue = defaultValue;
    } else {
      initialValue = valueManager.emptyValue;
    }
    return {
      draft: initialValue,
      lastPublishedValue: initialValue,
      lastCommittedValue: initialValue,
      lastControlledValue: inValue,
      hasBeenModifiedSinceMount: false
    };
  });
  useValidation(_extends({}, props, {
    value: dateState.draft
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const updateDate = _default$7((action) => {
    const updaterParams = {
      action,
      dateState,
      hasChanged: (comparison) => !valueManager.areValuesEqual(utils, action.value, comparison),
      isControlled,
      closeOnSelect
    };
    const shouldPublish = shouldPublishValue(updaterParams);
    const shouldCommit = shouldCommitValue(updaterParams);
    const shouldClose = shouldClosePicker(updaterParams);
    setDateState((prev) => _extends({}, prev, {
      draft: action.value,
      lastPublishedValue: shouldPublish ? action.value : prev.lastPublishedValue,
      lastCommittedValue: shouldCommit ? action.value : prev.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    if (shouldPublish && onChange) {
      const validationError = action.name === "setValueFromField" ? action.context.validationError : validator({
        adapter,
        value: action.value,
        props: _extends({}, props, {
          value: action.value
        })
      });
      const context = {
        validationError
      };
      onChange(action.value, context);
    }
    if (shouldCommit && onAccept) {
      onAccept(action.value);
    }
    if (shouldClose) {
      setIsOpen(false);
    }
  });
  if (inValue !== void 0 && (dateState.lastControlledValue === void 0 || !valueManager.areValuesEqual(utils, dateState.lastControlledValue, inValue))) {
    const isUpdateComingFromPicker = valueManager.areValuesEqual(utils, dateState.draft, inValue);
    setDateState((prev) => _extends({}, prev, {
      lastControlledValue: inValue
    }, isUpdateComingFromPicker ? {} : {
      lastCommittedValue: inValue,
      lastPublishedValue: inValue,
      draft: inValue,
      hasBeenModifiedSinceMount: true
    }));
  }
  const handleClear = _default$7(() => {
    updateDate({
      value: valueManager.emptyValue,
      name: "setValueFromAction",
      pickerAction: "clear"
    });
  });
  const handleAccept = _default$7(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  });
  const handleDismiss = _default$7(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  });
  const handleCancel = _default$7(() => {
    updateDate({
      value: dateState.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  });
  const handleSetToday = _default$7(() => {
    updateDate({
      value: valueManager.getTodayValue(utils, valueType),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  });
  const handleOpen = _default$7(() => setIsOpen(true));
  const handleClose = _default$7(() => setIsOpen(false));
  const handleChange = _default$7((newValue, selectionState = "partial") => updateDate({
    name: "setValueFromView",
    value: newValue,
    selectionState
  }));
  const handleChangeField = _default$7((newValue, context) => updateDate({
    name: "setValueFromField",
    value: newValue,
    context
  }));
  const handleFieldSelectedSectionsChange = _default$7((newSelectedSections) => {
    setSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null ? void 0 : onSelectedSectionsChange(newSelectedSections);
  });
  const actions = {
    onClear: handleClear,
    onAccept: handleAccept,
    onDismiss: handleDismiss,
    onCancel: handleCancel,
    onSetToday: handleSetToday,
    onOpen: handleOpen,
    onClose: handleClose
  };
  const fieldResponse = {
    value: dateState.draft,
    onChange: handleChangeField,
    selectedSections,
    onSelectedSectionsChange: handleFieldSelectedSectionsChange
  };
  const viewValue = reactExports.useMemo(() => valueManager.cleanValue(utils, dateState.draft), [utils, valueManager, dateState.draft]);
  const viewResponse = {
    value: viewValue,
    onChange: handleChange,
    onClose: handleClose,
    open: isOpen,
    onSelectedSectionsChange: handleFieldSelectedSectionsChange
  };
  const isValid2 = (testedValue) => {
    const error = validator({
      adapter,
      value: testedValue,
      props: _extends({}, props, {
        value: testedValue
      })
    });
    return !valueManager.hasError(error);
  };
  const layoutResponse = _extends({}, actions, {
    value: viewValue,
    onChange: handleChange,
    isValid: isValid2
  });
  return {
    open: isOpen,
    fieldProps: fieldResponse,
    viewProps: viewResponse,
    layoutProps: layoutResponse,
    actions
  };
};
const _excluded$7 = ["className", "sx"];
const usePickerViews = ({
  props,
  propsFromPickerValue,
  additionalViewProps,
  inputRef,
  autoFocusView
}) => {
  const {
    onChange,
    open,
    onSelectedSectionsChange,
    onClose
  } = propsFromPickerValue;
  const {
    views,
    openTo,
    onViewChange,
    disableOpenPicker,
    viewRenderers
  } = props;
  const propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded$7);
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView
  } = useViews({
    view: void 0,
    views,
    openTo,
    onChange,
    onViewChange,
    autoFocus: autoFocusView
  });
  const {
    hasUIView,
    viewModeLookup
  } = reactExports.useMemo(() => views.reduce((acc, viewForReduce) => {
    let viewMode;
    if (disableOpenPicker) {
      viewMode = "field";
    } else if (viewRenderers[viewForReduce] != null) {
      viewMode = "UI";
    } else {
      viewMode = "field";
    }
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === "UI") {
      acc.hasUIView = true;
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {}
  }), [disableOpenPicker, viewRenderers, views]);
  const hasMultipleUITimeView = reactExports.useMemo(() => {
    const numberUITimeViews = views.reduce((acc, viewForReduce) => {
      if (viewRenderers[viewForReduce] != null && isTimeView(viewForReduce)) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return numberUITimeViews > 1;
  }, [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const shouldRestoreFocus = _default$7(() => currentViewMode === "UI");
  const [popperView, setPopperView] = reactExports.useState(currentViewMode === "UI" ? view : null);
  if (popperView !== view && viewModeLookup[view] === "UI") {
    setPopperView(view);
  }
  useEnhancedEffect(() => {
    if (currentViewMode === "field" && open) {
      onClose();
      onSelectedSectionsChange("hours");
      setTimeout(() => {
        inputRef == null ? void 0 : inputRef.current.focus();
      });
    }
  }, [view]);
  useEnhancedEffect(() => {
    if (!open) {
      return;
    }
    let newView = view;
    if (currentViewMode === "field" && popperView != null) {
      newView = popperView;
    }
    if (newView !== defaultView && viewModeLookup[newView] === "UI" && viewModeLookup[defaultView] === "UI") {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [open]);
  const layoutProps = {
    views,
    view: popperView,
    onViewChange: setView
  };
  return {
    hasUIView,
    shouldRestoreFocus,
    layoutProps,
    renderCurrentView: () => {
      if (popperView == null) {
        return null;
      }
      const renderer = viewRenderers[popperView];
      if (renderer == null) {
        return null;
      }
      return renderer(_extends({}, propsToForwardToView, additionalViewProps, propsFromPickerValue, {
        views,
        onChange: setValueAndGoToNextView,
        view: popperView,
        onViewChange: setView,
        focusedView,
        onFocusedViewChange: setFocusedView,
        showViewSwitcher: hasMultipleUITimeView
      }));
    }
  };
};
function getOrientation() {
  if (typeof window === "undefined") {
    return "portrait";
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait";
  }
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  return "portrait";
}
const useIsLandscape = (views, customOrientation) => {
  const [orientation, setOrientation] = reactExports.useState(getOrientation);
  useEnhancedEffect$2(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener("orientationchange", eventHandler);
    return () => {
      window.removeEventListener("orientationchange", eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ["hours", "minutes", "seconds"])) {
    return false;
  }
  const orientationToUse = customOrientation || orientation;
  return orientationToUse === "landscape";
};
const usePickerLayoutProps = ({
  props,
  propsFromPickerValue,
  propsFromPickerViews,
  wrapperVariant
}) => {
  const {
    orientation
  } = props;
  const isLandscape = useIsLandscape(propsFromPickerViews.views, orientation);
  const layoutProps = _extends({}, propsFromPickerViews, propsFromPickerValue, {
    isLandscape,
    wrapperVariant,
    disabled: props.disabled,
    readOnly: props.readOnly
  });
  return {
    layoutProps
  };
};
const buildWarning = (message, gravity = "warning") => {
  let alreadyWarned = false;
  const cleanMessage = Array.isArray(message) ? message.join("\n") : message;
  return () => {
    if (!alreadyWarned) {
      alreadyWarned = true;
      if (gravity === "error") {
        console.error(cleanMessage);
      } else {
        console.warn(cleanMessage);
      }
    }
  };
};
buildWarning(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]);
const usePicker = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  inputRef,
  additionalViewProps,
  validator,
  autoFocusView
}) => {
  const pickerValueResponse = usePickerValue({
    props,
    valueManager,
    valueType,
    wrapperVariant,
    validator
  });
  const pickerViewsResponse = usePickerViews({
    props,
    inputRef,
    additionalViewProps,
    autoFocusView,
    propsFromPickerValue: pickerValueResponse.viewProps
  });
  const pickerLayoutResponse = usePickerLayoutProps({
    props,
    wrapperVariant,
    propsFromPickerValue: pickerValueResponse.layoutProps,
    propsFromPickerViews: pickerViewsResponse.layoutProps
  });
  return {
    // Picker value
    open: pickerValueResponse.open,
    actions: pickerValueResponse.actions,
    fieldProps: pickerValueResponse.fieldProps,
    // Picker views
    renderCurrentView: pickerViewsResponse.renderCurrentView,
    hasUIView: pickerViewsResponse.hasUIView,
    shouldRestoreFocus: pickerViewsResponse.shouldRestoreFocus,
    // Picker layout
    layoutProps: pickerLayoutResponse.layoutProps
  };
};
function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass("MuiPickersLayout", slot);
}
const pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "shortcuts"]);
const _excluded$6 = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function PickersActionBar(props) {
  const {
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    actions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const localeText = useLocaleText();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions == null ? void 0 : actions.map((actionType) => {
    switch (actionType) {
      case "clear":
        return /* @__PURE__ */ jsx(Button, {
          onClick: onClear,
          children: localeText.clearButtonLabel
        }, actionType);
      case "cancel":
        return /* @__PURE__ */ jsx(Button, {
          onClick: onCancel,
          children: localeText.cancelButtonLabel
        }, actionType);
      case "accept":
        return /* @__PURE__ */ jsx(Button, {
          onClick: onAccept,
          children: localeText.okButtonLabel
        }, actionType);
      case "today":
        return /* @__PURE__ */ jsx(Button, {
          onClick: onSetToday,
          children: localeText.todayButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ jsx(DialogActions, _extends({}, other, {
    children: buttons
  }));
}
const _excluded$5 = ["items", "isLandscape", "onChange", "isValid"];
function PickersShortcuts(props) {
  const {
    items,
    onChange,
    isValid: isValid2
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map((item) => {
    const newValue = item.getValue({
      isValid: isValid2
    });
    return {
      label: item.label,
      onClick: () => {
        onChange(newValue);
      },
      disabled: !isValid2(newValue)
    };
  });
  return /* @__PURE__ */ jsx(List, _extends({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
  }, other, {
    children: resolvedItems.map((item) => {
      return /* @__PURE__ */ jsx(ListItem, {
        children: /* @__PURE__ */ jsx(Chip, _extends({}, item))
      }, item.label);
    })
  }));
}
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
const usePickerLayout = (props) => {
  var _slots$actionBar, _slots$shortcuts;
  const {
    wrapperVariant,
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    view,
    views,
    onViewChange,
    value,
    onChange,
    isValid: isValid2,
    isLandscape,
    disabled,
    readOnly,
    children,
    components,
    componentsProps,
    slots: innerSlots,
    slotProps: innerSlotProps
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For rangepickers value: [TDate | null, TDate | null]
  } = props;
  const slots = innerSlots != null ? innerSlots : uncapitalizeObjectKeys(components);
  const slotProps = innerSlotProps != null ? innerSlotProps : componentsProps;
  const classes = useUtilityClasses$2(props);
  const ActionBar = (_slots$actionBar = slots == null ? void 0 : slots.actionBar) != null ? _slots$actionBar : PickersActionBar;
  const actionBarProps = useSlotProps({
    elementType: ActionBar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.actionBar,
    additionalProps: {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions: wrapperVariant === "desktop" ? [] : ["cancel", "accept"],
      className: classes.actionBar
    },
    ownerState: _extends({}, props, {
      wrapperVariant
    })
  });
  const actionBar = /* @__PURE__ */ jsx(ActionBar, _extends({}, actionBarProps));
  const Toolbar = slots == null ? void 0 : slots.toolbar;
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.toolbar,
    additionalProps: {
      isLandscape,
      onChange,
      value,
      view,
      onViewChange,
      views,
      disabled,
      readOnly,
      className: classes.toolbar
    },
    ownerState: _extends({}, props, {
      wrapperVariant
    })
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? /* @__PURE__ */ jsx(Toolbar, _extends({}, toolbarProps)) : null;
  const content = children;
  const Tabs = slots == null ? void 0 : slots.tabs;
  const tabs = view && Tabs ? /* @__PURE__ */ jsx(Tabs, _extends({
    view,
    onViewChange
  }, slotProps == null ? void 0 : slotProps.tabs)) : null;
  const Shortcuts = (_slots$shortcuts = slots == null ? void 0 : slots.shortcuts) != null ? _slots$shortcuts : PickersShortcuts;
  const shortcutsProps = useSlotProps({
    elementType: Shortcuts,
    externalSlotProps: slotProps == null ? void 0 : slotProps.shortcuts,
    additionalProps: {
      isValid: isValid2,
      isLandscape,
      onChange,
      className: classes.shortcuts
    },
    ownerState: {
      isValid: isValid2,
      isLandscape,
      onChange,
      className: classes.shortcuts,
      wrapperVariant
    }
  });
  const shortcuts = view && !!Shortcuts ? /* @__PURE__ */ jsx(Shortcuts, _extends({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  };
};
const usePickerLayout$1 = usePickerLayout;
const useUtilityClasses$1 = (ownerState) => {
  const {
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
const PickersLayoutRoot = styled("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${pickersLayoutClasses.toolbar}`]: ownerState.isLandscape ? {
    gridColumn: theme.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  } : {
    gridColumn: "2 / 4",
    gridRow: 1
  },
  [`.${pickersLayoutClasses.shortcuts}`]: ownerState.isLandscape ? {
    gridColumn: "2 / 4",
    gridRow: 1
  } : {
    gridColumn: theme.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  },
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  }
}));
PickersLayoutRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: K.elementType,
  ownerState: K.shape({
    isLandscape: K.bool.isRequired
  }).isRequired,
  sx: K.oneOfType([K.arrayOf(K.oneOfType([K.func, K.object, K.bool])), K.func, K.object])
};
const PickersLayoutContentWrapper = styled("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (props, styles) => styles.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
});
const PickersLayout = function PickersLayout2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersLayout"
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  } = usePickerLayout$1(props);
  const {
    sx,
    className,
    isLandscape,
    ref,
    wrapperVariant
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxs(PickersLayoutRoot, {
    ref,
    sx,
    className: clsx(className, classes.root),
    ownerState,
    children: [isLandscape ? shortcuts : toolbar, isLandscape ? toolbar : shortcuts, /* @__PURE__ */ jsx(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      children: wrapperVariant === "desktop" ? /* @__PURE__ */ jsxs(reactExports.Fragment, {
        children: [content, tabs]
      }) : /* @__PURE__ */ jsxs(reactExports.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
};
const VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minDate", "maxDate", "minTime", "maxTime", "minDateTime", "maxDateTime", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "shouldDisableClock", "shouldDisableTime", "minuteStep"];
const extractValidationProps = (props) => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});
var useId$1 = {};
Object.defineProperty(useId$1, "__esModule", {
  value: true
});
var _default$4 = useId$1.default = useId;
var React = _interopRequireWildcard(reactExports);
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React.useState(idOverride);
  const id = idOverride || defaultId;
  React.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
const maybeReactUseId = React["useId"];
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}
const _excluded$4 = ["props", "getOpenDialogAriaText"], _excluded2 = ["ownerState"], _excluded3 = ["ownerState"];
const useDesktopPicker = (_ref) => {
  var _innerSlotProps$toolb, _innerSlotProps$toolb2, _slots$inputAdornment, _slots$openPickerButt, _slots$layout;
  let {
    props,
    getOpenDialogAriaText
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format: format2,
    formatDensity,
    label,
    inputRef,
    readOnly,
    disabled,
    autoFocus,
    localeText
  } = props;
  const utils = useUtils();
  const internalInputRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const labelId = _default$4();
  const isToolbarHidden = (_innerSlotProps$toolb = innerSlotProps == null ? void 0 : (_innerSlotProps$toolb2 = innerSlotProps.toolbar) == null ? void 0 : _innerSlotProps$toolb2.hidden) != null ? _innerSlotProps$toolb : false;
  const {
    open,
    actions,
    hasUIView,
    layoutProps,
    renderCurrentView,
    shouldRestoreFocus,
    fieldProps: pickerFieldProps
  } = usePicker(_extends({}, pickerParams, {
    props,
    inputRef: internalInputRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  }));
  const InputAdornment = (_slots$inputAdornment = slots.inputAdornment) != null ? _slots$inputAdornment : MuiInputAdornment;
  const _useSlotProps = useSlotProps({
    elementType: InputAdornment,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: props
  }), inputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2);
  const OpenPickerButton = (_slots$openPickerButt = slots.openPickerButton) != null ? _slots$openPickerButt : IconButton;
  const _useSlotProps2 = useSlotProps({
    elementType: OpenPickerButton,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.openPickerButton,
    additionalProps: {
      disabled: disabled || readOnly,
      onClick: actions.onOpen,
      "aria-label": getOpenDialogAriaText(pickerFieldProps.value, utils),
      edge: inputAdornmentProps.position
    },
    ownerState: props
  }), openPickerButtonProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3);
  const OpenPickerIcon = slots.openPickerIcon;
  const Field = slots.field;
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, {
      readOnly,
      disabled,
      className,
      sx,
      format: format2,
      formatDensity,
      label,
      autoFocus: autoFocus && !props.open
    }),
    ownerState: props
  });
  if (hasUIView) {
    fieldProps.InputProps = _extends({}, fieldProps.InputProps, {
      ref: containerRef,
      [`${inputAdornmentProps.position}Adornment`]: /* @__PURE__ */ jsx(InputAdornment, _extends({}, inputAdornmentProps, {
        children: /* @__PURE__ */ jsx(OpenPickerButton, _extends({}, openPickerButtonProps, {
          children: /* @__PURE__ */ jsx(OpenPickerIcon, _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.openPickerIcon))
        }))
      }))
    });
  }
  const slotsForField = _extends({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = (_slots$layout = slots.layout) != null ? _slots$layout : PickersLayout;
  const handleInputRef = _default$6(internalInputRef, fieldProps.inputRef, inputRef);
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    popper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.popper)
  });
  const renderPicker = () => /* @__PURE__ */ jsxs(LocalizationProvider, {
    localeText,
    children: [/* @__PURE__ */ jsx(Field, _extends({}, fieldProps, {
      slots: slotsForField,
      slotProps,
      inputRef: handleInputRef
    })), /* @__PURE__ */ jsx(PickersPopper, _extends({
      role: "dialog",
      placement: "bottom-start",
      anchorEl: containerRef.current
    }, actions, {
      open,
      slots,
      slotProps,
      shouldRestoreFocus,
      children: /* @__PURE__ */ jsx(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};
const isDatePickerView = (view) => view === "year" || view === "month" || view === "day";
const renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
  components,
  componentsProps,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber
}) => /* @__PURE__ */ jsx(DateCalendar, {
  view,
  onViewChange,
  views: views.filter(isDatePickerView),
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
  components,
  componentsProps,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber
});
const DesktopDatePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopDatePicker2(inProps, ref) {
  var _defaultizedProps$yea, _defaultizedProps$slo2;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: getDatePickerFieldFormat(utils, defaultizedProps),
    yearsPerRow: (_defaultizedProps$yea = defaultizedProps.yearsPerRow) != null ? _defaultizedProps$yea : 4,
    slots: _extends({
      openPickerIcon: Calendar,
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: true
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    getOpenDialogAriaText: localeText.openDatePickerDialogue,
    validator: validateDate
  });
  return renderPicker();
});
DesktopDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: K.bool,
  /**
   * Class name applied to the root element.
   */
  className: K.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: K.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: K.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: K.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: K.func,
  /**
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: K.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: K.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: K.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: K.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: K.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: K.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: K.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: K.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: K.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: K.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: K.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: K.oneOfType([K.func, K.shape({
    current: K.object
  })]),
  /**
   * The label content.
   */
  label: K.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: K.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: K.object,
  /**
   * Maximal selectable date.
   */
  maxDate: K.any,
  /**
   * Minimal selectable date.
   */
  minDate: K.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: K.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: K.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: K.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: K.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: K.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: K.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: K.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: K.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: K.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: K.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: K.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: K.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: K.oneOf(["landscape", "portrait"]),
  readOnly: K.bool,
  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: K.bool,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: K.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: K.oneOfType([K.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), K.number, K.shape({
    endIndex: K.number.isRequired,
    startIndex: K.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: K.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: K.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: K.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: K.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: K.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: K.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: K.oneOfType([K.arrayOf(K.oneOfType([K.func, K.object, K.bool])), K.func, K.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: K.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: K.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: K.shape({
    day: K.func,
    month: K.func,
    year: K.func
  }),
  /**
   * Available views.
   */
  views: K.arrayOf(K.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: K.oneOf([3, 4])
};
const _excluded$3 = ["props", "getOpenDialogAriaText"];
const useMobilePicker = (_ref) => {
  var _innerSlotProps$toolb, _innerSlotProps$toolb2, _slots$layout;
  let {
    props,
    getOpenDialogAriaText
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format: format2,
    formatDensity,
    label,
    inputRef,
    readOnly,
    disabled,
    localeText
  } = props;
  const utils = useUtils();
  const internalInputRef = reactExports.useRef(null);
  const labelId = _default$4();
  const isToolbarHidden = (_innerSlotProps$toolb = innerSlotProps == null ? void 0 : (_innerSlotProps$toolb2 = innerSlotProps.toolbar) == null ? void 0 : _innerSlotProps$toolb2.hidden) != null ? _innerSlotProps$toolb : false;
  const {
    open,
    actions,
    layoutProps,
    renderCurrentView,
    fieldProps: pickerFieldProps
  } = usePicker(_extends({}, pickerParams, {
    props,
    inputRef: internalInputRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: "mobile"
  }));
  const Field = slots.field;
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, !(disabled || readOnly) && {
      onClick: actions.onOpen,
      onKeyDown: onSpaceOrEnter(actions.onOpen)
    }, {
      readOnly: readOnly != null ? readOnly : true,
      disabled,
      className,
      sx,
      format: format2,
      formatDensity,
      label
    }),
    ownerState: props
  });
  fieldProps.inputProps = _extends({}, fieldProps.inputProps, {
    "aria-label": getOpenDialogAriaText(pickerFieldProps.value, utils)
  });
  const slotsForField = _extends({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = (_slots$layout = slots.layout) != null ? _slots$layout : PickersLayout;
  const handleInputRef = _default$6(internalInputRef, fieldProps.inputRef, inputRef);
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    mobilePaper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.mobilePaper)
  });
  const renderPicker = () => /* @__PURE__ */ jsxs(LocalizationProvider, {
    localeText,
    children: [/* @__PURE__ */ jsx(Field, _extends({}, fieldProps, {
      slots: slotsForField,
      slotProps,
      inputRef: handleInputRef
    })), /* @__PURE__ */ jsx(PickersModalDialog, _extends({}, actions, {
      open,
      slots,
      slotProps,
      children: /* @__PURE__ */ jsx(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};
const MobileDatePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileDatePicker2(inProps, ref) {
  var _defaultizedProps$slo2;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: getDatePickerFieldFormat(utils, defaultizedProps),
    slots: _extends({
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: false
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    getOpenDialogAriaText: localeText.openDatePickerDialogue,
    validator: validateDate
  });
  return renderPicker();
});
MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: K.bool,
  /**
   * Class name applied to the root element.
   */
  className: K.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: K.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: K.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: K.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: K.func,
  /**
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: K.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: K.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: K.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: K.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: K.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: K.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: K.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: K.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: K.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: K.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: K.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: K.oneOfType([K.func, K.shape({
    current: K.object
  })]),
  /**
   * The label content.
   */
  label: K.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: K.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: K.object,
  /**
   * Maximal selectable date.
   */
  maxDate: K.any,
  /**
   * Minimal selectable date.
   */
  minDate: K.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: K.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: K.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: K.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: K.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: K.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: K.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: K.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: K.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: K.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: K.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: K.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: K.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: K.oneOf(["landscape", "portrait"]),
  readOnly: K.bool,
  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: K.bool,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: K.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: K.oneOfType([K.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), K.number, K.shape({
    endIndex: K.number.isRequired,
    startIndex: K.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: K.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: K.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: K.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: K.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: K.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: K.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: K.oneOfType([K.arrayOf(K.oneOfType([K.func, K.object, K.bool])), K.func, K.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: K.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: K.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: K.shape({
    day: K.func,
    month: K.func,
    year: K.func
  }),
  /**
   * Available views.
   */
  views: K.arrayOf(K.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: K.oneOf([3, 4])
};
const _excluded$2 = ["desktopModeMediaQuery"];
const DatePicker = /* @__PURE__ */ reactExports.forwardRef(function DatePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsx(DesktopDatePicker, _extends({
      ref
    }, other));
  }
  return /* @__PURE__ */ jsx(MobileDatePicker, _extends({
    ref
  }, other));
});
function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiTimePickerToolbar", slot);
}
const timePickerToolbarClasses = generateUtilityClasses("MuiTimePickerToolbar", ["root", "separator", "hourMinuteLabel", "hourMinuteLabelLandscape", "hourMinuteLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);
const _excluded$1 = ["ampm", "ampmInClock", "value", "isLandscape", "onChange", "view", "onViewChange", "views", "disabled", "readOnly"];
const useUtilityClasses = (ownerState) => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"],
    hourMinuteLabel: ["hourMinuteLabel", isLandscape && "hourMinuteLabelLandscape", theme.direction === "rtl" && "hourMinuteLabelReverse"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
const TimePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  [`& .${pickersToolbarClasses.penIconButtonLandscape}`]: {
    marginTop: "auto"
  }
});
const TimePickerToolbarSeparator = styled(PickersToolbarText, {
  name: "MuiTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  outline: 0,
  margin: "0 4px 0 2px",
  cursor: "default"
});
const TimePickerToolbarHourMinuteLabel = styled("div", {
  name: "MuiTimePickerToolbar",
  slot: "HourMinuteLabel",
  overridesResolver: (props, styles) => [{
    [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles.hourMinuteLabelLandscape,
    [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles.hourMinuteLabelReverse
  }, styles.hourMinuteLabel]
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end"
}, ownerState.isLandscape && {
  marginTop: "auto"
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}));
TimePickerToolbarHourMinuteLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: K.elementType,
  ownerState: K.object.isRequired,
  sx: K.oneOfType([K.arrayOf(K.oneOfType([K.func, K.object, K.bool])), K.func, K.object])
};
const TimePickerToolbarAmPmSelection = styled("div", {
  name: "MuiTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [`.${timePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})(({
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: "4px 0 auto",
  flexDirection: "row",
  justifyContent: "space-around",
  flexBasis: "100%"
}, {
  [`& .${timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));
TimePickerToolbarAmPmSelection.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: K.elementType,
  ownerState: K.object.isRequired,
  sx: K.oneOfType([K.arrayOf(K.oneOfType([K.func, K.object, K.bool])), K.func, K.object])
};
function TimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    value,
    isLandscape,
    onChange,
    view,
    onViewChange,
    views,
    disabled,
    readOnly
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const utils = useUtils();
  const localeText = useLocaleText();
  const theme = useTheme();
  const showAmPmControl = Boolean(ampm && !ampmInClock && views.includes("hours"));
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, onChange);
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const ownerState = props;
  const classes = useUtilityClasses(_extends({}, ownerState, {
    theme
  }));
  const separator = /* @__PURE__ */ jsx(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /* @__PURE__ */ jsxs(TimePickerToolbarRoot, _extends({
    landscapeDirection: "row",
    toolbarTitle: localeText.timePickerToolbarTitle,
    isLandscape,
    ownerState,
    className: classes.root
  }, other, {
    children: [/* @__PURE__ */ jsxs(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState,
      children: [arrayIncludes(views, "hours") && /* @__PURE__ */ jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => onViewChange("hours"),
        selected: view === "hours",
        value: value ? formatHours(value) : "--"
      }), arrayIncludes(views, ["hours", "minutes"]) && separator, arrayIncludes(views, "minutes") && /* @__PURE__ */ jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => onViewChange("minutes"),
        selected: view === "minutes",
        value: value ? utils.format(value, "minutes") : "--"
      }), arrayIncludes(views, ["minutes", "seconds"]) && separator, arrayIncludes(views, "seconds") && /* @__PURE__ */ jsx(PickersToolbarButton, {
        variant: "h3",
        onClick: () => onViewChange("seconds"),
        selected: view === "seconds",
        value: value ? utils.format(value, "seconds") : "--"
      })]
    }), showAmPmControl && /* @__PURE__ */ jsxs(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState,
      children: [/* @__PURE__ */ jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "am",
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText("am"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled
      }), /* @__PURE__ */ jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "pm",
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText("pm"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        disabled
      })]
    })]
  }));
}
function useTimePickerDefaultizedProps(props, name) {
  var _themeProps$ampm, _themeProps$slots, _themeProps$slotProps, _themeProps$disableFu, _themeProps$disablePa;
  const utils = useUtils();
  const themeProps = useThemeProps({
    props,
    name
  });
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
  const localeText = reactExports.useMemo(() => {
    var _themeProps$localeTex;
    if (((_themeProps$localeTex = themeProps.localeText) == null ? void 0 : _themeProps$localeTex.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      timePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = (_themeProps$slots = themeProps.slots) != null ? _themeProps$slots : uncapitalizeObjectKeys(themeProps.components);
  const slotProps = (_themeProps$slotProps = themeProps.slotProps) != null ? _themeProps$slotProps : themeProps.componentsProps;
  return _extends({}, themeProps, {
    ampm,
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["hours", "minutes"],
    defaultOpenTo: "hours"
  }), {
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    slots: _extends({
      toolbar: TimePickerToolbar
    }, slots),
    slotProps: _extends({}, slotProps, {
      toolbar: _extends({
        ampm,
        ampmInClock: themeProps.ampmInClock
      }, slotProps == null ? void 0 : slotProps.toolbar)
    })
  });
}
const DesktopTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopTimePicker2(inProps, ref) {
  var _defaultizedProps$amp, _defaultizedProps$slo2;
  const localeText = useLocaleText();
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
  const viewRenderers = _extends({
    hours: null,
    minutes: null,
    seconds: null
  }, defaultizedProps.viewRenderers);
  const ampmInClock = (_defaultizedProps$amp = defaultizedProps.ampmInClock) != null ? _defaultizedProps$amp : true;
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    viewRenderers,
    slots: _extends({
      field: TimeField,
      openPickerIcon: Clock$1
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref,
          ampm: defaultizedProps.ampm
        });
      },
      toolbar: _extends({
        hidden: true,
        ampmInClock
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    getOpenDialogAriaText: localeText.openTimePickerDialogue,
    validator: validateTime
  });
  return renderPicker();
});
DesktopTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: K.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: K.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: K.bool,
  /**
   * Class name applied to the root element.
   */
  className: K.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: K.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: K.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: K.object,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: K.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: K.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: K.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: K.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: K.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: K.bool,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: K.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: K.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: K.oneOfType([K.func, K.shape({
    current: K.object
  })]),
  /**
   * The label content.
   */
  label: K.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: K.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: K.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: K.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: K.number,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: K.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: K.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: K.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: K.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: K.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: K.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: K.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: K.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: K.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: K.oneOf(["landscape", "portrait"]),
  readOnly: K.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: K.oneOfType([K.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), K.number, K.shape({
    endIndex: K.number.isRequired,
    startIndex: K.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: K.func,
  /**
   * Disable specific time.
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: K.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: K.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: K.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: K.oneOfType([K.arrayOf(K.oneOfType([K.func, K.object, K.bool])), K.func, K.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: K.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: K.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: K.shape({
    hours: K.func,
    minutes: K.func,
    seconds: K.func
  }),
  /**
   * Available views.
   */
  views: K.arrayOf(K.oneOf(["hours", "minutes", "seconds"]).isRequired)
};
const isTimePickerView = (view) => view === "hours" || view === "minutes" || view === "seconds";
const renderTimeViewClock = ({
  view,
  onViewChange,
  views,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  ampmInClock,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation
}) => /* @__PURE__ */ jsx(TimeClock, {
  view,
  onViewChange,
  views: views.filter(isTimePickerView),
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  ampmInClock,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation
});
const MobileTimePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileTimePicker2(inProps, ref) {
  var _defaultizedProps$amp, _defaultizedProps$slo2;
  const localeText = useLocaleText();
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
  const viewRenderers = _extends({
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = (_defaultizedProps$amp = defaultizedProps.ampmInClock) != null ? _defaultizedProps$amp : false;
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    viewRenderers,
    slots: _extends({
      field: TimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref,
          ampm: defaultizedProps.ampm
        });
      },
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    getOpenDialogAriaText: localeText.openTimePickerDialogue,
    validator: validateTime
  });
  return renderPicker();
});
MobileTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: K.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: K.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: K.bool,
  /**
   * Class name applied to the root element.
   */
  className: K.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: K.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: K.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: K.object,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: K.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: K.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: K.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: K.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: K.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: K.bool,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: K.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: K.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: K.oneOfType([K.func, K.shape({
    current: K.object
  })]),
  /**
   * The label content.
   */
  label: K.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: K.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: K.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: K.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: K.number,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: K.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: K.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: K.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: K.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: K.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: K.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: K.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: K.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: K.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: K.oneOf(["landscape", "portrait"]),
  readOnly: K.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: K.oneOfType([K.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), K.number, K.shape({
    endIndex: K.number.isRequired,
    startIndex: K.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: K.func,
  /**
   * Disable specific time.
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: K.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: K.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: K.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: K.oneOfType([K.arrayOf(K.oneOfType([K.func, K.object, K.bool])), K.func, K.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: K.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: K.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: K.shape({
    hours: K.func,
    minutes: K.func,
    seconds: K.func
  }),
  /**
   * Available views.
   */
  views: K.arrayOf(K.oneOf(["hours", "minutes", "seconds"]).isRequired)
};
const _excluded = ["desktopModeMediaQuery"];
const TimePicker = /* @__PURE__ */ reactExports.forwardRef(function TimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsx(DesktopTimePicker, _extends({
      ref
    }, other));
  }
  return /* @__PURE__ */ jsx(MobileTimePicker, _extends({
    ref
  }, other));
});
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function addSeconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * 1e3);
}
var MILLISECONDS_IN_MINUTE = 6e4;
function addMinutes(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}
var MILLISECONDS_IN_HOUR = 36e5;
function addHours(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}
function addWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days);
}
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return diff;
  }
}
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight));
  dateLeft.setFullYear(1584);
  dateRight.setFullYear(1584);
  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
  var result = sign * (difference - Number(isLastYearNotFull));
  return result === 0 ? 0 : result;
}
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}
function endOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}
function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
function isLastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  return endOfDay(date).getTime() === endOfMonth(date).getTime();
}
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
  var result;
  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      dateLeft.setDate(30);
    }
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
    var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
    if (isLastDayOfMonth(toDate(dirtyDateLeft)) && difference === 1 && compareAsc(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }
  return result === 0 ? 0 : result;
}
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }
  // Math.trunc is not supported by IE
};
var defaultRoundingMethod = "trunc";
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}
function differenceInQuarters(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMonths(dateLeft, dateRight) / 3;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}
var MILLISECONDS_IN_DAY = 864e5;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return diff;
  }
}
function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference);
  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
function differenceInWeeks(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInDays(dateLeft, dateRight) / 7;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
function differenceInMilliseconds(dateLeft, dateRight) {
  requiredArgs(2, arguments);
  return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
}
function differenceInHours(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
function differenceInMinutes(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
function differenceInSeconds(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / 1e3;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
function eachDayOfInterval(dirtyInterval, options) {
  var _options$step;
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError("Invalid interval");
  }
  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step))
    throw new RangeError("`options.step` must be a number greater than 1");
  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return dates;
}
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}
function endOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
function getDate(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}
function getDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day;
}
function getHours(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var hours = date.getHours();
  return hours;
}
function getMinutes(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}
function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}
function getSeconds(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}
function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getFullYear();
}
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}
function isEqual(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}
function isSameYear(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}
function startOfHour(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
}
function isSameHour(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft);
  var dateRightStartOfHour = startOfHour(dirtyDateRight);
  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
}
function setDate(dirtyDate, dirtyDayOfMonth) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dayOfMonth = toInteger(dirtyDayOfMonth);
  date.setDate(dayOfMonth);
  return date;
}
function setHours(dirtyDate, dirtyHours) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var hours = toInteger(dirtyHours);
  date.setHours(hours);
  return date;
}
function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var minutes = toInteger(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}
function setSeconds(dirtyDate, dirtySeconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var seconds = toInteger(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}
function setYear(dirtyDate, dirtyYear) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var year = toInteger(dirtyYear);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  date.setFullYear(year);
  return date;
}
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var cleanDate = toDate(dirtyDate);
  var date = /* @__PURE__ */ new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function formatISO(date, options) {
  var _options$format, _options$representati;
  requiredArgs(1, arguments);
  var originalDate = toDate(date);
  if (isNaN(originalDate.getTime())) {
    throw new RangeError("Invalid time value");
  }
  var format2 = String((_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : "extended");
  var representation = String((_options$representati = options === null || options === void 0 ? void 0 : options.representation) !== null && _options$representati !== void 0 ? _options$representati : "complete");
  if (format2 !== "extended" && format2 !== "basic") {
    throw new RangeError("format must be 'extended' or 'basic'");
  }
  if (representation !== "date" && representation !== "time" && representation !== "complete") {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }
  var result = "";
  var tzOffset = "";
  var dateDelimiter = format2 === "extended" ? "-" : "";
  var timeDelimiter = format2 === "extended" ? ":" : "";
  if (representation !== "time") {
    var day = addLeadingZeros(originalDate.getDate(), 2);
    var month = addLeadingZeros(originalDate.getMonth() + 1, 2);
    var year = addLeadingZeros(originalDate.getFullYear(), 4);
    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  }
  if (representation !== "date") {
    var offset = originalDate.getTimezoneOffset();
    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = addLeadingZeros(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
      var sign = offset < 0 ? "+" : "-";
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = "Z";
    }
    var hour = addLeadingZeros(originalDate.getHours(), 2);
    var minute = addLeadingZeros(originalDate.getMinutes(), 2);
    var second = addLeadingZeros(originalDate.getSeconds(), 2);
    var separator = result === "" ? "" : "T";
    var time = [hour, minute, second].join(timeDelimiter);
    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }
  return result;
}
function isWithinInterval(dirtyDate, interval) {
  requiredArgs(2, arguments);
  var time = toDate(dirtyDate).getTime();
  var startTime = toDate(interval.start).getTime();
  var endTime = toDate(interval.end).getTime();
  if (!(startTime <= endTime)) {
    throw new RangeError("Invalid interval");
  }
  return time >= startTime && time <= endTime;
}
var longFormatters$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var dateLongFormatter = function dateLongFormatter2(pattern, formatLong) {
    switch (pattern) {
      case "P":
        return formatLong.date({
          width: "short"
        });
      case "PP":
        return formatLong.date({
          width: "medium"
        });
      case "PPP":
        return formatLong.date({
          width: "long"
        });
      case "PPPP":
      default:
        return formatLong.date({
          width: "full"
        });
    }
  };
  var timeLongFormatter = function timeLongFormatter2(pattern, formatLong) {
    switch (pattern) {
      case "p":
        return formatLong.time({
          width: "short"
        });
      case "pp":
        return formatLong.time({
          width: "medium"
        });
      case "ppp":
        return formatLong.time({
          width: "long"
        });
      case "pppp":
      default:
        return formatLong.time({
          width: "full"
        });
    }
  };
  var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong);
    }
    var dateTimeFormat;
    switch (datePattern) {
      case "P":
        dateTimeFormat = formatLong.dateTime({
          width: "short"
        });
        break;
      case "PP":
        dateTimeFormat = formatLong.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        dateTimeFormat = formatLong.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        dateTimeFormat = formatLong.dateTime({
          width: "full"
        });
        break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
  };
  var longFormatters2 = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };
  var _default2 = longFormatters2;
  exports.default = _default2;
  module.exports = exports.default;
})(longFormatters$1, longFormatters$1.exports);
var longFormattersExports = longFormatters$1.exports;
const longFormatters = /* @__PURE__ */ getDefaultExportFromCjs(longFormattersExports);
var defaultFormats = {
  dayOfMonth: "d",
  fullDate: "PP",
  fullDateWithWeekday: "PPPP",
  fullDateTime: "PP p",
  fullDateTime12h: "PP hh:mm aaa",
  fullDateTime24h: "PP HH:mm",
  fullTime: "p",
  fullTime12h: "hh:mm aaa",
  fullTime24h: "HH:mm",
  hours12h: "hh",
  hours24h: "HH",
  keyboardDate: "P",
  keyboardDateTime: "P p",
  keyboardDateTime12h: "P hh:mm aaa",
  keyboardDateTime24h: "P HH:mm",
  minutes: "mm",
  month: "LLLL",
  monthAndDate: "MMMM d",
  monthAndYear: "LLLL yyyy",
  monthShort: "MMM",
  weekday: "EEEE",
  weekdayShort: "EEE",
  normalDate: "d MMMM",
  normalDateWithWeekday: "EEE, MMM d",
  seconds: "ss",
  shortDate: "MMM d",
  year: "yyyy"
};
var DateFnsUtils = (
  /** @class */
  function() {
    function DateFnsUtils2(_a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, locale = _b.locale, formats = _b.formats;
      this.lib = "date-fns";
      this.is12HourCycleInCurrentLocale = function() {
        if (_this.locale) {
          return /a/.test(_this.locale.formatLong.time());
        }
        return true;
      };
      this.getFormatHelperText = function(format2) {
        var longFormatRegexp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
        var locale2 = _this.locale || defaultLocale;
        return format2.match(longFormatRegexp).map(function(token) {
          var firstCharacter = token[0];
          if (firstCharacter === "p" || firstCharacter === "P") {
            var longFormatter = longFormatters[firstCharacter];
            return longFormatter(token, locale2.formatLong, {});
          }
          return token;
        }).join("").replace(/(aaa|aa|a)/g, "(a|p)m").toLocaleLowerCase();
      };
      this.parseISO = function(isoString) {
        return parseISO(isoString);
      };
      this.toISO = function(value) {
        return formatISO(value, { format: "extended" });
      };
      this.getCurrentLocaleCode = function() {
        var _a2;
        return ((_a2 = _this.locale) === null || _a2 === void 0 ? void 0 : _a2.code) || "en-US";
      };
      this.addSeconds = function(value, count) {
        return addSeconds(value, count);
      };
      this.addMinutes = function(value, count) {
        return addMinutes(value, count);
      };
      this.addHours = function(value, count) {
        return addHours(value, count);
      };
      this.addDays = function(value, count) {
        return addDays(value, count);
      };
      this.addWeeks = function(value, count) {
        return addWeeks(value, count);
      };
      this.addMonths = function(value, count) {
        return addMonths(value, count);
      };
      this.addYears = function(value, count) {
        return addYears(value, count);
      };
      this.isValid = function(value) {
        return isValid(_this.date(value));
      };
      this.getDiff = function(value, comparing, unit) {
        switch (unit) {
          case "years":
            return differenceInYears(value, _this.date(comparing));
          case "quarters":
            return differenceInQuarters(value, _this.date(comparing));
          case "months":
            return differenceInMonths(value, _this.date(comparing));
          case "weeks":
            return differenceInWeeks(value, _this.date(comparing));
          case "days":
            return differenceInDays(value, _this.date(comparing));
          case "hours":
            return differenceInHours(value, _this.date(comparing));
          case "minutes":
            return differenceInMinutes(value, _this.date(comparing));
          case "seconds":
            return differenceInSeconds(value, _this.date(comparing));
          default: {
            return differenceInMilliseconds(value, _this.date(comparing));
          }
        }
      };
      this.isAfter = function(value, comparing) {
        return isAfter(value, comparing);
      };
      this.isBefore = function(value, comparing) {
        return isBefore(value, comparing);
      };
      this.startOfDay = function(value) {
        return startOfDay(value);
      };
      this.endOfDay = function(value) {
        return endOfDay(value);
      };
      this.getHours = function(value) {
        return getHours(value);
      };
      this.setHours = function(value, count) {
        return setHours(value, count);
      };
      this.setMinutes = function(value, count) {
        return setMinutes(value, count);
      };
      this.getSeconds = function(value) {
        return getSeconds(value);
      };
      this.setSeconds = function(value, count) {
        return setSeconds(value, count);
      };
      this.isSameDay = function(value, comparing) {
        return isSameDay(value, comparing);
      };
      this.isSameMonth = function(value, comparing) {
        return isSameMonth(value, comparing);
      };
      this.isSameYear = function(value, comparing) {
        return isSameYear(value, comparing);
      };
      this.isSameHour = function(value, comparing) {
        return isSameHour(value, comparing);
      };
      this.startOfYear = function(value) {
        return startOfYear(value);
      };
      this.endOfYear = function(value) {
        return endOfYear(value);
      };
      this.startOfMonth = function(value) {
        return startOfMonth(value);
      };
      this.endOfMonth = function(value) {
        return endOfMonth(value);
      };
      this.startOfWeek = function(value) {
        return startOfWeek(value, { locale: _this.locale });
      };
      this.endOfWeek = function(value) {
        return endOfWeek(value, { locale: _this.locale });
      };
      this.getYear = function(value) {
        return getYear(value);
      };
      this.setYear = function(value, count) {
        return setYear(value, count);
      };
      this.date = function(value) {
        if (typeof value === "undefined") {
          return /* @__PURE__ */ new Date();
        }
        if (value === null) {
          return null;
        }
        return new Date(value);
      };
      this.toJsDate = function(value) {
        return value;
      };
      this.parse = function(value, formatString) {
        if (value === "") {
          return null;
        }
        return parse(value, formatString, /* @__PURE__ */ new Date(), { locale: _this.locale });
      };
      this.format = function(date, formatKey) {
        return _this.formatByString(date, _this.formats[formatKey]);
      };
      this.formatByString = function(date, formatString) {
        return format(date, formatString, { locale: _this.locale });
      };
      this.isEqual = function(date, comparing) {
        if (date === null && comparing === null) {
          return true;
        }
        return isEqual(date, comparing);
      };
      this.isNull = function(date) {
        return date === null;
      };
      this.isAfterDay = function(date, value) {
        return isAfter(date, endOfDay(value));
      };
      this.isBeforeDay = function(date, value) {
        return isBefore(date, startOfDay(value));
      };
      this.isBeforeYear = function(date, value) {
        return isBefore(date, startOfYear(value));
      };
      this.isAfterYear = function(date, value) {
        return isAfter(date, endOfYear(value));
      };
      this.isWithinRange = function(date, _a2) {
        var start = _a2[0], end = _a2[1];
        return isWithinInterval(date, { start, end });
      };
      this.formatNumber = function(numberToFormat) {
        return numberToFormat;
      };
      this.getMinutes = function(date) {
        return getMinutes(date);
      };
      this.getDate = function(date) {
        return getDate(date);
      };
      this.setDate = function(date, count) {
        return setDate(date, count);
      };
      this.getMonth = function(date) {
        return getMonth(date);
      };
      this.getDaysInMonth = function(date) {
        return getDaysInMonth(date);
      };
      this.setMonth = function(date, count) {
        return setMonth(date, count);
      };
      this.getMeridiemText = function(ampm) {
        return ampm === "am" ? "AM" : "PM";
      };
      this.getNextMonth = function(date) {
        return addMonths(date, 1);
      };
      this.getPreviousMonth = function(date) {
        return addMonths(date, -1);
      };
      this.getMonthArray = function(date) {
        var firstMonth = startOfYear(date);
        var monthArray = [firstMonth];
        while (monthArray.length < 12) {
          var prevMonth = monthArray[monthArray.length - 1];
          monthArray.push(_this.getNextMonth(prevMonth));
        }
        return monthArray;
      };
      this.mergeDateAndTime = function(date, time) {
        return _this.setSeconds(_this.setMinutes(_this.setHours(date, _this.getHours(time)), _this.getMinutes(time)), _this.getSeconds(time));
      };
      this.getWeekdays = function() {
        var now = /* @__PURE__ */ new Date();
        return eachDayOfInterval({
          start: startOfWeek(now, { locale: _this.locale }),
          end: endOfWeek(now, { locale: _this.locale })
        }).map(function(day) {
          return _this.formatByString(day, "EEEEEE");
        });
      };
      this.getWeekArray = function(date) {
        var start = startOfWeek(startOfMonth(date), { locale: _this.locale });
        var end = endOfWeek(endOfMonth(date), { locale: _this.locale });
        var count = 0;
        var current = start;
        var nestedWeeks = [];
        var lastDay = null;
        while (isBefore(current, end)) {
          var weekNumber = Math.floor(count / 7);
          nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
          var day = getDay(current);
          if (lastDay !== day) {
            lastDay = day;
            nestedWeeks[weekNumber].push(current);
            count += 1;
          }
          current = addDays(current, 1);
        }
        return nestedWeeks;
      };
      this.getYearRange = function(start, end) {
        var startDate = startOfYear(start);
        var endDate = endOfYear(end);
        var years = [];
        var current = startDate;
        while (isBefore(current, endDate)) {
          years.push(current);
          current = addYears(current, 1);
        }
        return years;
      };
      this.locale = locale;
      this.formats = Object.assign({}, defaultFormats, formats);
    }
    return DateFnsUtils2;
  }()
);
function getWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = startOfWeek(firstWeek, options);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
const formatTokenMap = {
  // Year
  y: "year",
  yy: "year",
  yyy: "year",
  yyyy: "year",
  // Month
  M: "month",
  MM: "month",
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  LLL: {
    sectionType: "month",
    contentType: "letter"
  },
  LLLL: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  d: "day",
  dd: "day",
  do: "day",
  // Day of the week
  E: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  EE: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  EEE: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  EEEE: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  EEEEE: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  i: "weekDay",
  ii: "weekDay",
  iii: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  iiii: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  e: "weekDay",
  ee: "weekDay",
  eee: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  eeee: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  eeeee: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  eeeeee: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  c: "weekDay",
  cc: "weekDay",
  ccc: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  cccc: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ccccc: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  cccccc: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  a: "meridiem",
  aa: "meridiem",
  aaa: "meridiem",
  // Hours
  H: "hours",
  HH: "hours",
  h: "hours",
  hh: "hours",
  // Minutes
  mm: "minutes",
  // Seconds
  ss: "seconds"
};
class AdapterDateFns extends DateFnsUtils {
  constructor(...args) {
    super(...args);
    this.isMUIAdapter = true;
    this.formatTokenMap = formatTokenMap;
    this.escapedCharacters = {
      start: "'",
      end: "'"
    };
    this.expandFormat = (format2) => {
      const longFormatRegexp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
      return format2.match(longFormatRegexp).map((token) => {
        const firstCharacter = token[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
          const longFormatter = longFormatters[firstCharacter];
          const locale = this.locale || defaultLocale;
          return longFormatter(token, locale.formatLong, {});
        }
        return token;
      }).join("");
    };
    this.getFormatHelperText = (format2) => {
      return this.expandFormat(format2).replace(/(aaa|aa|a)/g, "(a|p)m").toLocaleLowerCase();
    };
    this.getWeekNumber = (date) => {
      return getWeek(date, {
        locale: this.locale
      });
    };
  }
}
const DateInput = (props) => /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: /* @__PURE__ */ jsx(DatePicker, { ...props }) });
const SelectDate = ({
  onChange,
  date,
  error,
  validate
}) => {
  const maxDate = /* @__PURE__ */ new Date();
  const {
    t
  } = useTranslation("milkProductivities");
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(DateInput, { label: t("steps.selectDate.title"), maxDate, value: date, onChange, slotProps: {
    textField: {
      error: validate && error
    }
  }, sx: {
    width: "100%"
  } }) }) }) });
};
const Buttons = ({
  activeStep,
  onchangeStep: setActiveStep,
  onFinish
}) => {
  const {
    t
  } = useTranslation("milkProductivities");
  const isFirstStep = activeStep === Steps.SelectDateTime;
  const isLastStep = activeStep === Steps.Bovines;
  return /* @__PURE__ */ jsxs(Box, { sx: {
    display: "flex",
    flexDirection: "row",
    pt: 2
  }, children: [
    /* @__PURE__ */ jsx(Button, { color: "inherit", disabled: isFirstStep, onClick: () => {
      switch (activeStep) {
        case Steps.Bovines:
          setActiveStep(Steps.SelectDateTime);
          break;
      }
    }, sx: {
      mr: 1
    }, children: t("buttons.back") }),
    /* @__PURE__ */ jsx(Box, { sx: {
      flex: "1 1 auto"
    } }),
    /* @__PURE__ */ jsx(Button, { onClick: () => {
      switch (activeStep) {
        case Steps.SelectDateTime:
          setActiveStep(Steps.Bovines);
          break;
        case Steps.Bovines:
          onFinish();
          break;
      }
    }, sx: {
      mr: 1
    }, children: isLastStep ? t("buttons.finish") : t("buttons.next") })
  ] });
};
const TimeInput = (props) => /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: /* @__PURE__ */ jsx(TimePicker, { ...props }) });
const SelectTime = ({
  onChange,
  date,
  error,
  validate
}) => {
  const {
    t
  } = useTranslation("milkProductivities");
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(TimeInput, { label: t("steps.selectTime.title"), value: date, onChange, slotProps: {
    textField: {
      error: validate && error
    }
  }, sx: {
    width: "100%"
  } }) }) }) });
};
const BovineProductionForm = ({
  values,
  onChange,
  onAdd,
  onRemove,
  filterOptions,
  loading
}) => {
  const {
    t
  } = useTranslation("milkProductivity");
  const liters = useLitersField(values == null ? void 0 : values.liters);
  const fieldBovine = useField$1(() => ({
    name: "bovine",
    label: t("selectBovine"),
    value: null,
    validations: [({
      value
    }) => {
      console.log(value);
      if (!value)
        return {
          message: "required"
        };
    }]
  }));
  const reset = () => {
    liters.reset();
    fieldBovine.reset();
  };
  reactExports.useEffect(() => {
    fieldBovine.setValue((values == null ? void 0 : values.bovine) || null);
  }, [fieldBovine, values == null ? void 0 : values.bovine]);
  reactExports.useEffect(() => {
    var _a;
    liters.setValue(((_a = values == null ? void 0 : values.liters) == null ? void 0 : _a.toString()) || "");
  }, [liters, values == null ? void 0 : values.liters]);
  const isValid2 = reactExports.useCallback(async () => {
    return [await liters.validity(), await fieldBovine.validity()].every(Boolean);
  }, [liters, fieldBovine]);
  const lastTimeout = reactExports.useRef();
  const onSubmit = reactExports.useCallback(async () => {
    if (await isValid2()) {
      window.clearTimeout(lastTimeout.current);
      lastTimeout.current = window.setTimeout(() => {
        onChange == null ? void 0 : onChange({
          liters: +liters.value,
          bovine: fieldBovine.value
        });
      }, 1e3);
    }
  }, [fieldBovine.value, isValid2, onChange, liters.value]);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, sx: {
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 8, children: /* @__PURE__ */ jsx(SelectBovine, { ...{
      field: fieldBovine
    }, onChange: (newValue) => {
      fieldBovine.setValue(newValue);
      if (onChange)
        onSubmit();
    }, filterOptions, filter: {
      AND: {
        animalGender: {
          is: {
            code: {
              equals: AnimalGendersTypes.Female
            }
          }
        }
      }
    }, disabled: loading }) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: true, children: /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
      var _a;
      return /* @__PURE__ */ jsx(TextField, { label: t("liters"), error: liters.invalid, type: liters.type, fullWidth: true, value: liters.value, onChange: ({
        target
      }) => {
        liters.setValue(target.value);
        if (onChange)
          onSubmit();
      }, helperText: !!((_a = liters.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(RenderErrorsDefault, { errors: liters.errors }), disabled: loading });
    } }) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsxs(Grid, { container: true, sx: {
      height: (theme) => theme.spacing(7)
    }, children: [
      !!onRemove && /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(Box, { display: "flex", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsx(IconButton, { disabled: loading, onClick: onRemove, children: /* @__PURE__ */ jsx(default_1$6, {}) }) }) }),
      !!onAdd && /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(Box, { display: "flex", alignItems: "center", height: "100%", children: /* @__PURE__ */ jsx(IconButton, { disabled: loading, onClick: async () => {
        if (await isValid2()) {
          await (onAdd == null ? void 0 : onAdd({
            liters: +liters.value,
            bovine: fieldBovine.value
          }));
          reset();
        }
      }, children: /* @__PURE__ */ jsx(default_1$7, { color: "primary" }) }) }) })
    ] }) }),
    loading && /* @__PURE__ */ jsx(Box, { position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", mt: 1, bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8), children: /* @__PURE__ */ jsx(CircularProgress, { size: 25 }) })
  ] }) });
};
const AddBovineProductionForm = ({
  milkProductions,
  setMilkProductions
}) => {
  const {
    farm
  } = useCosva();
  const {
    joinDateTime
  } = useSteps();
  const [createBovineMilkProductivity, {
    loading
  }] = useMutation(CREATE_BOVINE_MILK_PRODUCTIVITY);
  return /* @__PURE__ */ jsx(BovineProductionForm, { loading, onAdd: async (values) => {
    const bovine = values.bovine;
    const bovineId = bovine == null ? void 0 : bovine.id;
    const date = joinDateTime();
    if (!bovineId || !date)
      return;
    const value = +values.liters;
    const {
      data
    } = await createBovineMilkProductivity({
      variables: {
        bovine: bovineId,
        farm: farm.value,
        milkProduction: {
          value,
          date
        }
      },
      optimisticResponse: {
        createBovineMilkProductivity: {
          id: idOptimistic,
          bovine,
          date,
          value
        }
      }
    });
    const {
      createBovineMilkProductivity: bovineMilkProductivity
    } = {
      ...data
    };
    if (bovineMilkProductivity)
      setMilkProductions((current) => [bovineMilkProductivity, ...current]);
  }, filterOptions: (bovines) => {
    const bovinesMap = new Set(milkProductions.map(({
      bovine
    }) => bovine == null ? void 0 : bovine.id));
    return bovines.filter((bovine) => !bovinesMap.has(bovine.id));
  } });
};
function BovineProduction({
  milkProduction,
  milkProductions,
  setMilkProductions,
  index
}) {
  const {
    farm
  } = useCosva();
  const [deleteBovineMilkProductivity, {
    loading
  }] = useDeleteBovineMilkProductivity({
    queryVariables: {
      farm: farm.value,
      bovine: milkProduction.bovine.id
    }
  });
  return /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(BovineProductionForm, { loading, values: {
    liters: milkProduction.value,
    bovine: milkProduction.bovine
  }, onChange: (value) => {
    setMilkProductions((current) => {
      const newState = [...current];
      newState[index] = {
        ...newState[index],
        value: value.liters
      };
      return newState;
    });
  }, onRemove: async () => {
    await deleteBovineMilkProductivity({
      variables: {
        id: milkProduction.id,
        bovine: milkProduction.bovine.id,
        farm: farm.value
      }
    });
    setMilkProductions((current) => current.filter((_, i) => i !== index));
  }, filterOptions: (bovines) => {
    const bovinesMap = new Set(milkProductions.map(({
      bovine
    }) => bovine == null ? void 0 : bovine.id));
    return bovines.filter((bovine) => {
      var _a;
      return !bovinesMap.has(bovine.id) || ((_a = milkProduction.bovine) == null ? void 0 : _a.id) === bovine.id;
    });
  } }) });
}
const Bovines$1 = () => {
  const [milkProductions, setMilkProductions] = reactExports.useState([]);
  const {
    farm
  } = useCosva();
  const {
    joinDateTime
  } = useSteps();
  const dateTime = reactExports.useMemo(() => joinDateTime(), [joinDateTime]);
  const {
    data
  } = useQuery(BOVINE_MILK_PRODUCTIVITIES, {
    variables: {
      farm: farm.value,
      date: dateTime
    }
  });
  reactExports.useEffect(() => {
    const {
      bovineMilkProductivities
    } = {
      ...data
    };
    if (!bovineMilkProductivities)
      return;
    setMilkProductions(bovineMilkProductivities.edges.map(({
      id,
      bovine,
      value,
      date
    }) => ({
      id,
      bovine,
      value,
      date
    })));
  }, [data]);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(AddBovineProductionForm, { milkProductions, setMilkProductions }) }),
    milkProductions.map((milkProduction, i) => /* @__PURE__ */ jsx(BovineProduction, { index: i, milkProduction, setMilkProductions, milkProductions }, i))
  ] }) });
};
const ColorlibConnector = styled(StepConnector$1)(({
  theme
}) => ({
  [`&.${stepConnectorClasses$1.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses$1.active}`]: {
    [`& .${stepConnectorClasses$1.line}`]: {
      backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  [`&.${stepConnectorClasses$1.completed}`]: {
    [`& .${stepConnectorClasses$1.line}`]: {
      backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  [`& .${stepConnectorClasses$1.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1
  }
}));
const ColorlibStepIconRoot = styled("div")(({
  theme,
  ownerState
}) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  ...ownerState.active && {
    backgroundImage: "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  ...ownerState.completed && {
    backgroundImage: "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
}));
function ColorlibStepIcon(props) {
  const {
    active,
    completed,
    className
  } = props;
  const icons = {
    [Steps.SelectDateTime + 1]: /* @__PURE__ */ jsx(default_1$4, {}),
    [Steps.Bovines + 1]: /* @__PURE__ */ jsx(CosvaBovine, { fontSize: "large" })
  };
  return /* @__PURE__ */ jsx(ColorlibStepIconRoot, { ownerState: {
    completed,
    active
  }, className, children: icons[String(props.icon)] });
}
function Steppers({
  onClose
}) {
  const {
    activeStep,
    onChangeStep,
    fields: {
      productionDate,
      productionTime
    },
    validate,
    steps,
    reset
  } = useSteps();
  const [finishConfirm, setFinishConfirm] = reactExports.useState(false);
  const contents = {
    [Steps.SelectDateTime]: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, children: /* @__PURE__ */ jsx(SelectDate, { date: productionDate.value, onChange: productionDate.onChange, error: productionDate.error, validate }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, children: /* @__PURE__ */ jsx(SelectTime, { date: productionTime.value, onChange: productionTime.onChange, error: productionTime.error, validate }) })
    ] }) }),
    [Steps.Bovines]: /* @__PURE__ */ jsx(Bovines$1, {})
  };
  return /* @__PURE__ */ jsxs(Stack, { sx: {
    width: "100%"
  }, spacing: 4, children: [
    /* @__PURE__ */ jsx(Stepper$1, { alternativeLabel: true, activeStep, connector: /* @__PURE__ */ jsx(ColorlibConnector, {}), children: steps.map(({
      label,
      code
    }) => /* @__PURE__ */ jsx(Step$1, { children: /* @__PURE__ */ jsx(StepLabel$1, { StepIconComponent: ColorlibStepIcon, onClick: () => {
      onChangeStep(code);
    }, children: label }) }, label)) }),
    contents[activeStep],
    /* @__PURE__ */ jsx(Buttons, { activeStep, onchangeStep: onChangeStep, onFinish: () => {
      setFinishConfirm(true);
    } }),
    /* @__PURE__ */ jsx(DialogSimple, { open: finishConfirm, title: "Confirmación", onClose: () => {
      setFinishConfirm(false);
    }, actions: [{
      title: "Cancelar",
      action: () => {
        setFinishConfirm(false);
      }
    }, {
      title: "Aceptar",
      action: () => {
        onClose();
        reset();
      }
    }], children: /* @__PURE__ */ jsx(Typography, { variant: "body1", sx: {
      textAlign: "center"
    }, children: "¿Quiere finalizar el registro de producción?" }) })
  ] });
}
function AddMilkProduction() {
  const {
    t
  } = useTranslation("milkProductivities");
  const [open, setOpen] = reactExports.useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(StepsProvider, { children: [
    /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "contained", color: "primary", sx: {
      display: "block"
    }, onClick: () => {
      setOpen(true);
    }, children: /* @__PURE__ */ jsxs(Grid, { container: true, alignItems: "center", children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", sm: "auto", sx: {
        margin: "auto"
      }, children: /* @__PURE__ */ jsx(Grid, { container: true, alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ jsx(default_1$5, {}) }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: true, component: Typography, variant: "inherit", noWrap: true, children: t("add") })
    ] }) }),
    /* @__PURE__ */ jsx(DialogSimple, { open, onClose, title: /* @__PURE__ */ jsx(Fragment, { children: t("many.new") }), maxWidth: "md", fullWidth: true, children: /* @__PURE__ */ jsx(Steppers, { onClose }) })
  ] });
}
function ServerDay(props) {
  const {
    highlightedDays,
    day,
    outsideCurrentMonth,
    ...other
  } = props;
  const count = reactExports.useMemo(() => {
    if (props.outsideCurrentMonth)
      return null;
    const highlightedDay = highlightedDays == null ? void 0 : highlightedDays.get(parseDate(props.day));
    if (!highlightedDay)
      return null;
    return highlightedDay.count || null;
  }, [props.outsideCurrentMonth, highlightedDays, props.day]);
  return /* @__PURE__ */ jsx(Badge, { overlap: "circular", color: "secondary", badgeContent: count ?? void 0, anchorOrigin: {
    vertical: "top",
    horizontal: "right"
  }, componentsProps: {
    badge: {
      style: {}
    }
  }, children: /* @__PURE__ */ jsx(PickersDay2, { ...other, outsideCurrentMonth, day }) }, props.day.toString());
}
const parseDate = (date) => set(date, {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
}).toISOString();
function DateCalendarServerRequest() {
  const {
    farm
  } = useCosva();
  const {
    data,
    loading
  } = useQuery(BOVINE_MILK_PRODUCTIVITIES_DATES, {
    variables: {
      farm: farm.value
    }
  });
  const {
    bovineMilkProductivitiesDates
  } = {
    ...data
  };
  const options = reactExports.useMemo(() => (bovineMilkProductivitiesDates || []).map(({
    date,
    count
  }) => ({
    date: parseISO(date),
    count
  })), [bovineMilkProductivitiesDates]);
  const optionsMap = reactExports.useMemo(() => new Map(options.map((option) => [parseDate(option.date), option])), [options]);
  const initialValue = reactExports.useMemo(() => {
    const [date] = options == null ? void 0 : options.sort((a, b) => +b.date - +a.date);
    return date;
  }, [options]);
  return /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: /* @__PURE__ */ jsx(DateCalendar, { defaultValue: initialValue == null ? void 0 : initialValue.date, loading, onMonthChange: () => {
    console.log("onMonthChange");
  }, renderLoading: () => /* @__PURE__ */ jsx(DayCalendarSkeleton, {}), slots: {
    day: ServerDay
  }, slotProps: {
    day: {
      highlightedDays: optionsMap
    }
  }, disableFuture: true, shouldDisableDate: (date) => {
    const dateFormatted = parseDate(date);
    const option = optionsMap.get(dateFormatted);
    return option ? !option.count : true;
  } }) });
}
const DATE_FORMAT = "yyyy-MM-dd";
const TIME_FORMAT = "HH:mm";
function MilkProductions() {
  const {
    t
  } = useTranslation("milkProductivities");
  const [open, setOpen] = reactExports.useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const {
    farm
  } = useCosva();
  const {
    data
  } = useQuery(BOVINE_MILK_PRODUCTIVITIES_DATES, {
    variables: {
      farm: farm.value
    }
  });
  const {
    bovineMilkProductivitiesDates
  } = {
    ...data
  };
  const options = reactExports.useMemo(() => (bovineMilkProductivitiesDates || []).map(({
    count,
    date
  }) => ({
    id: date,
    date,
    count
  })), [bovineMilkProductivitiesDates]);
  const dateField = useField$1(() => ({
    name: "date",
    label: "date",
    value: null
  }));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "start", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 5, md: 6, lg: 3, children: /* @__PURE__ */ jsx(Card, { onClick: () => {
      setOpen(true);
    }, children: /* @__PURE__ */ jsx(CardActionArea, { children: /* @__PURE__ */ jsxs(Grid, { container: true, justifyContent: "start", sx: {
      px: 1,
      py: 5
    }, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: {
        textAlign: "center"
      }, children: /* @__PURE__ */ jsx(MilkCanteen, { sx: {
        width: (theme) => theme.spacing(5),
        height: (theme) => theme.spacing(5),
        mr: 1
      } }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Typography, { variant: "h5", textAlign: "center", children: t("title") }) })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsx(DialogSimple, { open, onClose, title: /* @__PURE__ */ jsx(Fragment, { children: t("title") }), maxWidth: "xl", fullWidth: true, children: /* @__PURE__ */ jsxs(Grid, { container: true, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(AddMilkProduction, {}) }) }) }),
      /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
        /* @__PURE__ */ jsx(DateCalendarServerRequest, {}),
        /* @__PURE__ */ jsx(Grid, { container: true, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(AutoCompleteSingleBase, { field: dateField, label: "date", options, getOptionLabel: (option) => {
          const dateTime = format(parseISO(option.date), `${DATE_FORMAT} ${TIME_FORMAT}`);
          return `${dateTime} (${option.count})`;
        }, renderOption: (props, option) => {
          const dateTime = format(parseISO(option.date), `${DATE_FORMAT} ${TIME_FORMAT}`);
          return /* @__PURE__ */ jsxs("li", { ...props, children: [
            dateTime,
            " (",
            option.count,
            ")"
          ] }, option.id);
        }, sx: {
          mt: 3
        } }) }) })
      ] })
    ] }) })
  ] });
}
var Replay = {};
var _interopRequireDefault$3 = interopRequireDefaultExports$1;
Object.defineProperty(Replay, "__esModule", {
  value: true
});
var default_1$3 = Replay.default = void 0;
var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
var _jsxRuntime$3 = require$$2;
var _default$3 = (0, _createSvgIcon$3.default)(/* @__PURE__ */ (0, _jsxRuntime$3.jsx)("path", {
  d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
}), "Replay");
default_1$3 = Replay.default = _default$3;
var ViewModule = {};
var _interopRequireDefault$2 = interopRequireDefaultExports$1;
Object.defineProperty(ViewModule, "__esModule", {
  value: true
});
var default_1$2 = ViewModule.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = require$$2;
var _default$2 = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z"
}), "ViewModule");
default_1$2 = ViewModule.default = _default$2;
var ViewList = {};
var _interopRequireDefault$1 = interopRequireDefaultExports$1;
Object.defineProperty(ViewList, "__esModule", {
  value: true
});
var default_1$1 = ViewList.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = require$$2;
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h13v-4H8v4zm0 5h13v-4H8v4zM8 5v4h13V5H8z"
}), "ViewList");
default_1$1 = ViewList.default = _default$1;
const Filter = ({
  onChange
}) => {
  const {
    t
  } = useTranslation("bovine");
  const [open, setOpen] = React$4.useState(false);
  const tRelative = (key) => t("filter." + key);
  const fieldGender = useField$1(() => ({
    ...getGenderField(),
    label: tRelative("gender"),
    validations: [],
    onSetValue: () => {
      fieldPurposes.setValue([]);
    }
  }));
  const fieldBreeds = useField$1(() => ({
    name: "breeds",
    label: tRelative("breeds"),
    value: []
  }));
  const fieldPurposes = useField$1(() => ({
    name: "purposes",
    label: tRelative("purposes"),
    value: []
  }));
  const fieldAnimalDevelopmentStage = useField$1(() => ({
    name: "developmentStage",
    label: tRelative("developmentStage"),
    value: []
  }));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Grid, { component: ButtonBase, sx: {
      height: "100%",
      width: "100%"
    }, container: true, onClick: () => {
      setOpen(true);
    }, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(default_1$8, {}) }),
      /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(Box, { sx: {
        marginLeft: 1
      }, children: t("filterButton") }) })
    ] }),
    /* @__PURE__ */ jsx(DialogSimple, { title: t("filterTitle"), open, maxWidth: "md", breakpoint: "xs", fullWidth: true, onClose: () => {
      setOpen(false);
    }, body: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, marginTop: 1, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(SelectGender, { field: fieldGender, displayEmpty: true }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(SelectBreeds, { field: fieldBreeds }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(ObserverComponent, { children: () => {
        const gender = fieldGender.value;
        return /* @__PURE__ */ jsx(SelectDevelopmentStages, { field: fieldAnimalDevelopmentStage, animal: CategoryGroupTypes.Bovines, getOptionLabel: (option) => {
          const key = `developmentStages.${getCode(option)}`;
          if (gender)
            return t(key, {
              context: getCode(gender)
            });
          return [AnimalGendersTypes.Female, AnimalGendersTypes.Male].map((context) => t(key, {
            context: context.toLowerCase()
          })).join(" / ");
        } });
      } }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(ObserverComponent, { children: () => /* @__PURE__ */ jsx(AddPurposes, { field: fieldPurposes, requiresGender: false, gender: fieldGender.value || void 0 }) }) })
    ] }), actions: [{
      color: "inherit",
      action: () => {
        setOpen(false);
      },
      title: "close"
    }, {
      title: "save",
      color: "primary",
      action: async () => {
        var _a;
        const getId = ({
          id
        }) => id;
        const getIds = (value) => value.length && value.map(getId) || void 0;
        const gender = (_a = fieldGender.value) == null ? void 0 : _a.id;
        const breeds = getIds(fieldBreeds.value);
        const purposeTypes = getIds(fieldPurposes.value);
        const developmentStages = getIds(fieldAnimalDevelopmentStage.value);
        onChange({
          gender,
          breeds,
          purposeTypes,
          developmentStages
        });
        setOpen(false);
      }
    }] })
  ] });
};
var Sort$1 = {};
var _interopRequireDefault = interopRequireDefaultExports$1;
Object.defineProperty(Sort$1, "__esModule", {
  value: true
});
var default_1 = Sort$1.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
}), "Sort");
default_1 = Sort$1.default = _default;
const Sort = () => {
  const [, setOpen] = React$4.useState(false);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Grid, { component: ButtonBase, container: true, onClick: () => {
    setOpen(true);
  }, sx: {
    height: "100%",
    width: "100%"
  }, children: [
    /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(default_1, {}) }),
    /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(Box, { sx: {
      mL: 1
    }, children: "Sort" }) })
  ] }) });
};
var ViewTypes = /* @__PURE__ */ ((ViewTypes2) => {
  ViewTypes2[ViewTypes2["mosaic"] = 0] = "mosaic";
  ViewTypes2[ViewTypes2["table"] = 1] = "table";
  return ViewTypes2;
})(ViewTypes || {});
const MenuBovineContext = React$4.createContext(/* @__PURE__ */ Object.create(null));
const MenuBovineProvider = ({
  children
}) => {
  const [menu, setMenu] = React$4.useState();
  return /* @__PURE__ */ jsx(MenuBovineContext.Provider, { value: {
    anchorEl: menu == null ? void 0 : menu.anchorEl,
    bovine: menu == null ? void 0 : menu.bovine,
    setMenu: (newState) => {
      setMenu(newState);
    }
  }, children });
};
const useMenuBovine = () => React$4.useContext(MenuBovineContext);
const cardMediaSx = {
  margin: "auto",
  padding: "19px",
  width: "auto",
  height: (theme) => theme.spacing(18)
};
const DataCard = ({
  bovine,
  breakpoints,
  style
}) => {
  const navigate = useNavigate();
  const {
    farm,
    category,
    categoryGroup
  } = useCosva();
  const {
    t
  } = useTranslation("bovine");
  const {
    setMenu
  } = useMenuBovine();
  const {
    id,
    image,
    plaque,
    name,
    dateBirth,
    gender,
    breed,
    developmentStage,
    reproductiveControls = []
  } = bovine;
  const path = createRouteFarmBovine({
    id: farm.value,
    category: category.value,
    categoryGroup: categoryGroup.code,
    bovine: id
  });
  const genderCode = gender.code;
  const developmentStageCode = getCode(developmentStage);
  return /* @__PURE__ */ jsx(Grid, { item: true, ...breakpoints, style, children: /* @__PURE__ */ jsxs(Grid, { container: true, direction: "column", sx: {
    width: "100%",
    height: "100%",
    position: "relative"
  }, component: Card, children: [
    /* @__PURE__ */ jsx(CardOptions, { label: `${plaque} ${name}`, onClickOptions: (e) => {
      setMenu({
        anchorEl: e.currentTarget,
        bovine
      });
      e.preventDefault();
    }, onClickLabel: () => {
      navigate(path);
    } }),
    /* @__PURE__ */ jsxs(CardActionArea, { component: CardActionAreaRef, sx: {
      flex: "1"
    }, to: path, children: [
      image && /* @__PURE__ */ jsx(CardMedia, { component: "img", alt: plaque || name || "", height: "140px", image: createAPIImageRoute(`bovine/${image}`), sx: cardMediaSx, title: plaque || name || "" }) || /* @__PURE__ */ jsx(CosvaBovine, { sx: {
        ...cardMediaSx,
        fill: (theme) => theme.palette.text.primary,
        objectFit: "cover",
        display: "block",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      } }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx(ItemBovine, { label: t("dateBirth"), value: format(parseISO(dateBirth), "yyyy-MM-dd") }),
        /* @__PURE__ */ jsx(Gender, { code: genderCode }),
        (breed == null ? void 0 : breed.title) && /* @__PURE__ */ jsx(ItemBovine, { label: t("breed"), value: breed.title }),
        !!(reproductiveControls == null ? void 0 : reproductiveControls.length) && /* @__PURE__ */ jsx(ReproductiveControl, { ...{
          reproductiveControls
        } }),
        developmentStageCode && /* @__PURE__ */ jsx(ItemBovine, { label: t("developmentStage"), value: t(`developmentStages.${developmentStageCode}`, {
          context: genderCode
        }) }),
        /* @__PURE__ */ jsx(PurposeTypes, { ...{
          bovine
        } })
      ] })
    ] })
  ] }) }, id);
};
const DialogDelete = ({
  open,
  bovine,
  onClose,
  onDeleted
}) => {
  const {
    t
  } = useTranslation("bovine");
  const {
    farm
  } = useCosva();
  const [deleteBovine, {
    loading
  }] = useDeleteBovine({
    parentVariables: {
      farm: farm.value
    }
  });
  return /* @__PURE__ */ jsx(DialogSimple, { open, ...{
    loading,
    ns: "general",
    maxWidth: "sm",
    fullScreen: false,
    title: t("dialogs.deleteBovine.title"),
    body: /* @__PURE__ */ jsx(React$4.Fragment, { children: /* @__PURE__ */ jsx(DialogContentText, { children: t("dialogs.deleteBovine.message") }) }),
    onClose: () => onClose(),
    actions: [{
      color: "inherit",
      action: () => {
        onClose();
      },
      title: "close",
      disabled: loading
    }, {
      disabled: loading,
      title: "delete",
      color: "primary",
      action: () => {
        if (bovine) {
          deleteBovine({
            variables: {
              id: bovine.id
            }
          }).catch((e) => {
            console.error(e);
          });
        }
        onDeleted == null ? void 0 : onDeleted();
      }
    }]
  } });
};
function MenuBovine() {
  const {
    t
  } = useTranslation("general");
  const {
    anchorEl,
    bovine,
    setMenu
  } = useMenuBovine();
  const [edit, setEdit] = React$4.useState(false);
  const [remove, setRemove] = React$4.useState(false);
  const onClose = () => {
    setMenu(null);
  };
  if (!bovine)
    return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Menu, { anchorEl, open: !!anchorEl, onClose, children: [
      /* @__PURE__ */ jsxs(MenuItem, { onClick: () => {
        setEdit(true);
      }, children: [
        /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(default_1$9, {}) }),
        /* @__PURE__ */ jsx(ListItemText, { children: t("menuItems.edit") })
      ] }),
      /* @__PURE__ */ jsxs(MenuItem, { onClick: async () => {
        setRemove(true);
      }, children: [
        /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(default_1$6, {}) }),
        /* @__PURE__ */ jsx(ListItemText, { children: t("menuItems.remove") })
      ] })
    ] }),
    /* @__PURE__ */ jsx(EditBovine, { bovine, open: edit, onClose: () => {
      setEdit(false);
      setMenu();
    } }),
    /* @__PURE__ */ jsx(DialogDelete, { open: remove, bovine, onClose: () => {
      setRemove(false);
      setMenu();
    } })
  ] });
}
const Data$1 = React$4.memo(({
  edges,
  breakpoints
}) => /* @__PURE__ */ jsx(Fragment, { children: edges.map((bovine) => /* @__PURE__ */ jsx(DataCard, { breakpoints, bovine }, bovine.id)) }));
function DataCards({
  edges,
  fetchMore,
  loading
}) {
  const called = React$4.useRef(false);
  const setVisible = React$4.useCallback(async ({
    target
  }) => {
    if (!called.current && !loading && target instanceof HTMLElement && target.offsetHeight + target.scrollTop >= target.scrollHeight - 2) {
      called.current = true;
      await fetchMore();
      called.current = false;
    }
  }, [fetchMore, loading]);
  React$4.useEffect(() => {
    const current = document.querySelector("main");
    current && current.addEventListener("scroll", setVisible);
    return () => {
      current && current.removeEventListener("scroll", setVisible);
    };
  }, [setVisible]);
  const {
    navBar: {
      open: show
    }
  } = useLayout();
  const breakpoints = {
    xs: 12,
    sm: show ? 12 : 6,
    md: 4,
    lg: show ? 4 : 3,
    xl: show ? 3 : 2
  };
  return /* @__PURE__ */ jsxs(Box, { sx: {
    padding: 1
  }, children: [
    /* @__PURE__ */ jsxs(MenuBovineProvider, { children: [
      /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, justifyContent: "center", children: [
        /* @__PURE__ */ jsx(Data$1, { edges, breakpoints }),
        /* @__PURE__ */ jsx(Grid, { item: true, ...breakpoints, sx: {
          minHeight: (theme) => theme.spacing(10 * 3.5)
        }, children: /* @__PURE__ */ jsx(AddBovine, { type: "card" }) })
      ] }),
      /* @__PURE__ */ jsx(MenuBovine, {})
    ] }),
    loading && /* @__PURE__ */ jsx(DataLoading, {})
  ] });
}
const useColumns = () => {
  const {
    t
  } = useTranslation("bovine");
  const columns = reactExports.useMemo(() => [{
    title: t("name"),
    field: "name",
    visibilityProps: {
      disabled: true
    },
    tableCellProps: {
      sx: {
        maxWidth: "120px"
      }
    }
  }, {
    title: t("image"),
    field: "image",
    hide: true
  }, {
    title: t("plaque"),
    field: "plaque"
  }, {
    title: t("breed"),
    field: "breed",
    component: ({
      breed
    }) => /* @__PURE__ */ jsx(Fragment, { children: breed && breed.title || "----" })
  }, {
    title: t("dateBirth"),
    field: "dateBirth",
    component: ({
      dateBirth
    }) => /* @__PURE__ */ jsx(Fragment, { children: dateBirth && format(parseISO(dateBirth), "yyyy-MM-dd") })
  }], [t]);
  return {
    columns
  };
};
const Table = ({
  data,
  loading,
  count,
  refetch
}) => {
  const {
    pagination,
    setPagination,
    getOrderTransformed
  } = usePagination();
  const {
    t
  } = useTranslation("bovine");
  const [editBovine, setEditBovine] = reactExports.useState(null);
  const [removeBovine, setRemoveBovine] = reactExports.useState(null);
  const {
    columns
  } = useColumns();
  const onChangePage = async (page) => {
    const newPagination = {
      ...pagination,
      page
    };
    setPagination(newPagination);
  };
  const onChangeRowsPerPage = async (limit) => {
    if (pagination) {
      let newPagination = {
        ...pagination
      };
      if (pagination.limit !== void 0 && pagination.page !== void 0) {
        const newPage = Math.floor(pagination.limit * pagination.page / limit);
        newPagination = {
          ...newPagination,
          page: newPage
        };
      }
      newPagination = {
        ...newPagination,
        limit
      };
      setPagination(newPagination);
    }
  };
  const onChangeOrder = async (order) => {
    const newPagination = {
      ...pagination,
      order: order.map(({
        direction,
        field
      }) => ({
        field,
        direction: parseDirection(direction)
      }))
    };
    setPagination(newPagination);
  };
  const actions = reactExports.useMemo(() => [(bovine) => ({
    icon: () => /* @__PURE__ */ jsx(default_1$6, {}),
    tooltip: t("tooltips.delete"),
    onClick: async () => {
      setRemoveBovine(bovine);
    }
  }), (bovine) => ({
    icon: () => /* @__PURE__ */ jsx(default_1$9, {}),
    tooltip: t("tooltips.edit"),
    onClick: async () => {
      setEditBovine(bovine);
    }
  })], [t]);
  const components = reactExports.useMemo(() => ({
    EmptyBody: () => /* @__PURE__ */ jsx(Typography, { variant: "h5", align: "center", children: t("noData") })
  }), [t]);
  return /* @__PURE__ */ jsxs(Paper, { children: [
    /* @__PURE__ */ jsx(CosvaTable, { actions, columns, onChangePage, onChangeOrder, onChangeRowsPerPage, data, total: count, order: getOrderTransformed(), rowsPerPage: pagination == null ? void 0 : pagination.limit, page: pagination == null ? void 0 : pagination.page, loading, components, actionColumnProps: {
      title: t("actions", {
        ns: "general"
      })
    } }),
    editBovine && /* @__PURE__ */ jsx(EditBovine, { bovine: editBovine, open: !!editBovine, onClose: () => {
      setEditBovine(null);
    } }),
    /* @__PURE__ */ jsx(DialogDelete, { open: !!removeBovine, bovine: removeBovine, onClose: () => {
      setRemoveBovine(null);
    }, onDeleted: () => {
      setRemoveBovine(null);
      refetch == null ? void 0 : refetch();
    } })
  ] });
};
const viewTypes = {
  [ViewTypes.mosaic]: {
    label: "mosaic",
    icon: /* @__PURE__ */ jsx(default_1$2, {})
  },
  [ViewTypes.table]: {
    label: "table",
    icon: /* @__PURE__ */ jsx(default_1$1, {})
  }
};
const getNextViewType = (viewType) => {
  const keys = Object.keys(viewTypes);
  const index = keys.findIndex((v) => v === String(viewType));
  let newIndex = index + 1;
  if (newIndex >= keys.length)
    newIndex = 0;
  const key = Number(keys[newIndex]);
  return key;
};
const Data = () => {
  const {
    pagination,
    setPagination,
    reset,
    saveSearch
  } = usePagination();
  const {
    farm
  } = useCosva();
  const search = useSearch(true);
  const [viewType, setViewType] = React$4.useState(!search.viewType || search.viewType === ViewTypes.mosaic.toString() ? ViewTypes.mosaic : ViewTypes.table);
  const [filter, setFilter] = React$4.useState();
  const queryArgs = React$4.useMemo(() => ({
    farm: farm.value,
    filter
  }), [farm.value, filter]);
  const variables = viewType === ViewTypes.mosaic ? queryArgs : {
    farm: farm.value,
    pagination,
    filter
  };
  const [bovinesQuery, {
    data,
    loading,
    refetch,
    fetchMore
  }] = useLazyQuery(BOVINES_QUERY, {
    variables,
    fetchPolicy: "cache-and-network"
  });
  React$4.useEffect(() => {
    bovinesQuery();
  }, [bovinesQuery]);
  React$4.useEffect(() => {
    if (viewType === ViewTypes.table) {
      bovinesQuery();
    }
  }, [bovinesQuery, viewType]);
  if (!data || !pagination)
    return loading && /* @__PURE__ */ jsx(LoadingPage, {}) || null;
  const edges = data.bovines.edges;
  const {
    hasNextPage,
    count
  } = data.bovines.pageInfo;
  const nextViewType = getNextViewType(viewType);
  const {
    label,
    icon
  } = viewTypes[nextViewType];
  return /* @__PURE__ */ jsxs(Box, { sx: {
    flex: 1,
    padding: (theme) => theme.spacing(2, 0, 0, 0)
  }, children: [
    /* @__PURE__ */ jsx(Paper, { children: /* @__PURE__ */ jsxs(Grid, { container: true, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: true, children: /* @__PURE__ */ jsx(Filter, { onChange: (newFilter) => {
        setFilter(newFilter);
        reset();
      } }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(IconButton, { onClick: () => {
        refetch == null ? void 0 : refetch();
      }, size: "large", children: loading && /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) || /* @__PURE__ */ jsx(default_1$3, {}) }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: true, children: /* @__PURE__ */ jsx(Sort, {}) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "flex-end", children: /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(Tooltip, { title: label, "aria-label": "add", children: /* @__PURE__ */ jsx(IconButton, { color: "secondary", onClick: () => {
        reset();
        setViewType(nextViewType);
        saveSearch({
          viewType: nextViewType,
          ...nextViewType === ViewTypes.mosaic && {
            page: null
          }
        });
      }, size: "large", children: icon }) }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Box, { sx: {
      paddingTop: 1
    }, children: [
      viewType === ViewTypes.table && /* @__PURE__ */ jsx(Table, { count, data: edges, loading, refetch }),
      viewType === ViewTypes.mosaic && /* @__PURE__ */ jsx(DataCards, { ...{
        loading,
        fetchMore: async () => {
          const page = (pagination == null ? void 0 : pagination.page) || 0;
          if (hasNextPage) {
            const newPagination = {
              ...pagination,
              page: page + 1
            };
            setPagination(newPagination);
            return fetchMore == null ? void 0 : fetchMore({
              variables: {
                farm: farm.value,
                pagination: newPagination,
                filter
              },
              updateQuery: (prev, {
                fetchMoreResult
              }) => {
                if (!fetchMoreResult)
                  return prev;
                const {
                  bovines
                } = {
                  ...fetchMoreResult
                };
                const newBovines = bovines.edges || [];
                const newEdges = [...prev.bovines.edges, ...newBovines];
                return {
                  ...fetchMoreResult,
                  bovines: {
                    ...bovines,
                    edges: newEdges.filter((a, i) => !(newEdges.findIndex((b) => b.id === a.id) !== i))
                  }
                };
              }
            }).catch((e) => {
              console.error(e);
            });
          }
        },
        edges
      } })
    ] })
  ] });
};
function DialogFormBovine({
  open,
  onClose,
  bovine
}) {
  const cosva = useCosva();
  const {
    fieldsRender
  } = useBovineFields();
  const farm = cosva.farm.value;
  const {
    t
  } = useTranslation("bovine");
  const [createBovine, resCreate] = useCreateBovine();
  const loading = resCreate.loading;
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
    /* @__PURE__ */ jsx(DialogSimple, { ns: "general", maxWidth: "md", breakpoint: "xs", fullWidth: true, title: /* @__PURE__ */ jsx(Fragment, { children: t("newBovine") }), ...{
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
          var _a;
          if (!await fieldsRender.hasErrors({
            setErrors: true
          })) {
            const {
              name,
              plaque,
              dateBirth,
              image,
              gender,
              purposes,
              breed,
              milkProductions,
              developmentStage
            } = fieldsRender.getValues();
            await createBovine({
              variables: {
                bovine: {
                  name,
                  dateBirth: new Date(dateBirth),
                  plaque,
                  image,
                  bovinePurposeTypes: purposes.map((purpose) => purpose.id),
                  gender: gender.id,
                  breed: breed && breed.id,
                  milkProductions,
                  developmentStage: developmentStage && developmentStage.id
                },
                farm
              }
            }).then(() => {
              fieldsRender.restore();
              onClose();
            }).catch((e) => {
              console.error(e);
              showError();
            });
          } else {
            for (const field of fieldsRender.fields) {
              if (field.invalid && field.inputRef) {
                (_a = field.inputRef) == null ? void 0 : _a.focus();
                break;
              }
            }
          }
        }
      }]
    } }),
    /* @__PURE__ */ jsx(Snackbar, { open: !!openAlert, autoHideDuration: 6e3, anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    }, onClose: handleCloseAlert, children: /* @__PURE__ */ jsx(Alert, { elevation: 6, variant: "filled", color: "error", onClose: handleCloseAlert, children: t(`errors.${"create"}`) }) })
  ] });
}
const DialogForm = () => {
  const {
    open,
    setOpen
  } = useBovineFields();
  return /* @__PURE__ */ jsx(DialogFormBovine, { ...{
    open,
    onClose: () => {
      setOpen(false);
    }
  } });
};
const Bovines = () => {
  const fieldsRender = useFields(getInitialState);
  const search = useSearch(true);
  const isTable = search.viewType === `${ViewTypes.table}`;
  const pagination = getPaginationInit(isTable ? search : null);
  return /* @__PURE__ */ jsx(Box, { sx: {
    ...fullHeight,
    paddingTop: 2
  }, children: /* @__PURE__ */ jsx(PaginationProvider, { initialPagination: {
    ...pagination,
    order: [{
      field: "createdAt",
      direction: OrderTypes.Desc
    }]
  }, children: /* @__PURE__ */ jsxs(BovineFieldsProvider, { fieldsRender, children: [
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Box, { mt: 2, width: "100%", children: /* @__PURE__ */ jsx(AddSkeleton, {}) }), children: /* @__PURE__ */ jsxs(Grid, { container: true, item: true, xs: 12, justifyContent: "center", children: [
      /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
        /* @__PURE__ */ jsx(MilkProductions, {}),
        /* @__PURE__ */ jsx(Divider, { sx: {
          my: 2
        } })
      ] }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 8, sm: 4, md: 3, children: /* @__PURE__ */ jsx(AddBovine, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Box, { mt: 2, children: /* @__PURE__ */ jsx(DataSkeleton, {}) }), children: /* @__PURE__ */ jsx(Data, {}) }),
    /* @__PURE__ */ jsx(DialogForm, {})
  ] }) }) });
};
export {
  Bovines,
  Bovines as default
};
