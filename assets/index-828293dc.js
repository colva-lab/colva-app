import { as as React, r as reactExports, n as jsx, az as requireCreateSvgIcon, aA as interopRequireDefaultExports, aB as require$$2, ch as generatePath, C as jsxs, a0 as Box, cp as useNavigate, u as useTranslation, cq as useSendPasswordRestoreCode, a2 as Grid, T as Typography, a_ as FieldRender, aT as Button, cr as ButtonLoading, cs as getEmailOrPhoneNumber, ct as getErrorsFields, c1 as PathRoutes, M as lighten, N as darken, bh as observer, at as Fragment, b2 as TextField, bo as RenderErrorsDefault, aZ as FieldBuilder, cu as useValidateCodeRestorePassword, cv as useResetPassword, cw as useParams, bP as useFields, bO as FieldsBuilder, cx as getPassword, cy as getConfirmPassword, bI as FieldsRender, P as Paper, c9 as useLocation, cm as Layout, cj as Routes, ck as Route, aW as IconButton, cz as Colva, bT as Link, c5 as Navigate, cA as emailOrPhoneNumber, cB as MuiInputAdornment, bD as default_1$3 } from "./index-60a9ad09.js";
import Icon404 from "./404-5f3a805f.js";
import { d as default_1$1, u as useField } from "./Save-95d94cd2.js";
import { d as default_1$2 } from "./ErrorOutline-27089ca2.js";
function __rest(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) {
      t[p] = s[p];
    }
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) {
        t[p[i]] = s[p[i]];
      }
    }
  }
  return t;
}
var SourceType;
(function(SourceType2) {
  SourceType2["event"] = "event";
  SourceType2["props"] = "prop";
})(SourceType || (SourceType = {}));
function noop() {
}
function charIsNumber(char) {
  return !!(char || "").match(/\d/);
}
function isNil(val) {
  return val === null || val === void 0;
}
function isNanValue(val) {
  return typeof val === "number" && isNaN(val);
}
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function getThousandsGroupRegex(thousandsGroupStyle) {
  switch (thousandsGroupStyle) {
    case "lakh":
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case "wan":
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case "thousand":
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return str.substring(0, index) + str.substring(index, str.length).replace(thousandsGroupRegex, "$1" + thousandSeparator);
}
function usePersistentCallback(cb) {
  var callbackRef = reactExports.useRef(cb);
  callbackRef.current = cb;
  var persistentCbRef = reactExports.useRef(function() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    return callbackRef.current.apply(callbackRef, args);
  });
  return persistentCbRef.current;
}
function splitDecimal(numStr, allowNegative) {
  if (allowNegative === void 0)
    allowNegative = true;
  var hasNegation = numStr[0] === "-";
  var addNegation = hasNegation && allowNegative;
  numStr = numStr.replace("-", "");
  var parts = numStr.split(".");
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || "";
  return {
    beforeDecimal,
    afterDecimal,
    hasNegation,
    addNegation
  };
}
function fixLeadingZero(numStr) {
  if (!numStr) {
    return numStr;
  }
  var isNegative = numStr[0] === "-";
  if (isNegative) {
    numStr = numStr.substring(1, numStr.length);
  }
  var parts = numStr.split(".");
  var beforeDecimal = parts[0].replace(/^0+/, "") || "0";
  var afterDecimal = parts[1] || "";
  return (isNegative ? "-" : "") + beforeDecimal + (afterDecimal ? "." + afterDecimal : "");
}
function limitToScale(numStr, scale, fixedDecimalScale) {
  var str = "";
  var filler = fixedDecimalScale ? "0" : "";
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}
function repeat(str, count) {
  return Array(count + 1).join(str);
}
function toNumericString(num) {
  var _num = num + "";
  var sign = _num[0] === "-" ? "-" : "";
  if (sign) {
    _num = _num.substring(1);
  }
  var ref = _num.split(/[eE]/g);
  var coefficient = ref[0];
  var exponent = ref[1];
  exponent = Number(exponent);
  if (!exponent) {
    return sign + coefficient;
  }
  coefficient = coefficient.replace(".", "");
  var decimalIndex = 1 + exponent;
  var coffiecientLn = coefficient.length;
  if (decimalIndex < 0) {
    coefficient = "0." + repeat("0", Math.abs(decimalIndex)) + coefficient;
  } else if (decimalIndex >= coffiecientLn) {
    coefficient = coefficient + repeat("0", decimalIndex - coffiecientLn);
  } else {
    coefficient = (coefficient.substring(0, decimalIndex) || "0") + "." + coefficient.substring(decimalIndex);
  }
  return sign + coefficient;
}
function roundToPrecision(numStr, scale, fixedDecimalScale) {
  if (["", "-"].indexOf(numStr) !== -1) {
    return numStr;
  }
  var shouldHaveDecimalSeparator = (numStr.indexOf(".") !== -1 || fixedDecimalScale) && scale;
  var ref = splitDecimal(numStr);
  var beforeDecimal = ref.beforeDecimal;
  var afterDecimal = ref.afterDecimal;
  var hasNegation = ref.hasNegation;
  var floatValue = parseFloat("0." + (afterDecimal || "0"));
  var floatValueStr = afterDecimal.length <= scale ? "0." + afterDecimal : floatValue.toFixed(scale);
  var roundedDecimalParts = floatValueStr.split(".");
  var intPart = beforeDecimal.split("").reverse().reduce(function(roundedStr, current, idx) {
    if (roundedStr.length > idx) {
      return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
    }
    return current + roundedStr;
  }, roundedDecimalParts[0]);
  var decimalPart = limitToScale(roundedDecimalParts[1] || "", scale, fixedDecimalScale);
  var negation = hasNegation ? "-" : "";
  var decimalSeparator = shouldHaveDecimalSeparator ? "." : "";
  return "" + negation + intPart + decimalSeparator + decimalPart;
}
function setCaretPosition(el, caretPos) {
  el.value = el.value;
  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move("character", caretPos);
      range.select();
      return true;
    }
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }
    el.focus();
    return false;
  }
}
function findChangeRange(prevValue, newValue) {
  var i = 0, j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) {
    i++;
  }
  while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i) {
    j++;
  }
  return {
    from: { start: i, end: prevLength - j },
    to: { start: i, end: newLength - j }
  };
}
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function geInputCaretPosition(el) {
  return Math.max(el.selectionStart, el.selectionEnd);
}
function addInputMode() {
  return typeof navigator !== "undefined" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function getDefaultChangeMeta(value) {
  return {
    from: {
      start: 0,
      end: 0
    },
    to: {
      start: 0,
      end: value.length
    },
    lastValue: ""
  };
}
function getCaretPosition(newFormattedValue, lastFormattedValue, curValue, curCaretPos, boundary, isValidInputCharacter) {
  var firstAllowedPosition = boundary.findIndex(function(b) {
    return b;
  });
  var prefixFormat = newFormattedValue.slice(0, firstAllowedPosition);
  if (!lastFormattedValue && !curValue.startsWith(prefixFormat)) {
    curValue = prefixFormat + curValue;
    curCaretPos = curCaretPos + prefixFormat.length;
  }
  var curValLn = curValue.length;
  var formattedValueLn = newFormattedValue.length;
  var addedIndexMap = {};
  var indexMap = new Array(curValLn);
  for (var i = 0; i < curValLn; i++) {
    indexMap[i] = -1;
    for (var j = 0, jLn = formattedValueLn; j < jLn; j++) {
      if (curValue[i] === newFormattedValue[j] && addedIndexMap[j] !== true) {
        indexMap[i] = j;
        addedIndexMap[j] = true;
        break;
      }
    }
  }
  var pos = curCaretPos;
  while (pos < curValLn && (indexMap[pos] === -1 || !isValidInputCharacter(curValue[pos]))) {
    pos++;
  }
  var endIndex = pos === curValLn || indexMap[pos] === -1 ? formattedValueLn : indexMap[pos];
  pos = curCaretPos - 1;
  while (pos > 0 && indexMap[pos] === -1) {
    pos--;
  }
  var startIndex = pos === -1 || indexMap[pos] === -1 ? 0 : indexMap[pos] + 1;
  if (startIndex > endIndex) {
    return endIndex;
  }
  return curCaretPos - startIndex < endIndex - curCaretPos ? startIndex : endIndex;
}
function getCaretPosInBoundary(value, caretPos, boundary, direction) {
  var valLn = value.length;
  caretPos = clamp(caretPos, 0, valLn);
  if (direction === "left") {
    while (caretPos >= 0 && !boundary[caretPos]) {
      caretPos--;
    }
    if (caretPos === -1) {
      caretPos = boundary.indexOf(true);
    }
  } else {
    while (caretPos <= valLn && !boundary[caretPos]) {
      caretPos++;
    }
    if (caretPos > valLn) {
      caretPos = boundary.lastIndexOf(true);
    }
  }
  if (caretPos === -1) {
    caretPos = valLn;
  }
  return caretPos;
}
function caretUnknownFormatBoundary(formattedValue) {
  var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
    return true;
  });
  for (var i = 0, ln = boundaryAry.length; i < ln; i++) {
    boundaryAry[i] = Boolean(charIsNumber(formattedValue[i]) || charIsNumber(formattedValue[i - 1]));
  }
  return boundaryAry;
}
function useInternalValues(value, defaultValue, valueIsNumericString, format2, removeFormatting2, onValueChange) {
  if (onValueChange === void 0)
    onValueChange = noop;
  var propValues = reactExports.useRef();
  var getValues = usePersistentCallback(function(value2) {
    var formattedValue, numAsString;
    if (isNil(value2) || isNanValue(value2)) {
      numAsString = "";
      formattedValue = "";
    } else if (typeof value2 === "number" || valueIsNumericString) {
      numAsString = typeof value2 === "number" ? toNumericString(value2) : value2;
      formattedValue = format2(numAsString);
    } else {
      numAsString = removeFormatting2(value2, void 0);
      formattedValue = value2;
    }
    return { formattedValue, numAsString };
  });
  var ref = reactExports.useState(function() {
    return getValues(defaultValue);
  });
  var values = ref[0];
  var setValues = ref[1];
  var _onValueChange = function(values2, sourceInfo) {
    setValues({
      formattedValue: values2.formattedValue,
      numAsString: values2.value
    });
    onValueChange(values2, sourceInfo);
  };
  reactExports.useMemo(function() {
    if (!isNil(value)) {
      propValues.current = getValues(value);
      setValues(propValues.current);
    } else {
      propValues.current = void 0;
    }
  }, [value, getValues]);
  return [values, _onValueChange];
}
function defaultRemoveFormatting(value) {
  return value.replace(/[^0-9]/g, "");
}
function defaultFormat(value) {
  return value;
}
function NumberFormatBase(props) {
  var type = props.type;
  if (type === void 0)
    type = "text";
  var displayType = props.displayType;
  if (displayType === void 0)
    displayType = "input";
  var customInput = props.customInput;
  var renderText = props.renderText;
  var getInputRef = props.getInputRef;
  var format2 = props.format;
  if (format2 === void 0)
    format2 = defaultFormat;
  var removeFormatting2 = props.removeFormatting;
  if (removeFormatting2 === void 0)
    removeFormatting2 = defaultRemoveFormatting;
  var defaultValue = props.defaultValue;
  var valueIsNumericString = props.valueIsNumericString;
  var onValueChange = props.onValueChange;
  var isAllowed = props.isAllowed;
  var onChange = props.onChange;
  if (onChange === void 0)
    onChange = noop;
  var onKeyDown = props.onKeyDown;
  if (onKeyDown === void 0)
    onKeyDown = noop;
  var onMouseUp = props.onMouseUp;
  if (onMouseUp === void 0)
    onMouseUp = noop;
  var onFocus = props.onFocus;
  if (onFocus === void 0)
    onFocus = noop;
  var onBlur = props.onBlur;
  if (onBlur === void 0)
    onBlur = noop;
  var propValue = props.value;
  var getCaretBoundary2 = props.getCaretBoundary;
  if (getCaretBoundary2 === void 0)
    getCaretBoundary2 = caretUnknownFormatBoundary;
  var isValidInputCharacter = props.isValidInputCharacter;
  if (isValidInputCharacter === void 0)
    isValidInputCharacter = charIsNumber;
  var otherProps = __rest(props, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter"]);
  var ref = useInternalValues(propValue, defaultValue, Boolean(valueIsNumericString), format2, removeFormatting2, onValueChange);
  var ref_0 = ref[0];
  var formattedValue = ref_0.formattedValue;
  var numAsString = ref_0.numAsString;
  var onFormattedValueChange = ref[1];
  var lastUpdatedValue = reactExports.useRef();
  var _onValueChange = function(values, source) {
    lastUpdatedValue.current = values.formattedValue;
    onFormattedValueChange(values, source);
  };
  reactExports.useEffect(function() {
    var newFormattedValue = format2(numAsString);
    if (lastUpdatedValue.current === void 0 || newFormattedValue !== lastUpdatedValue.current) {
      var input = focusedElm.current;
      var _numAsString = removeFormatting2(newFormattedValue, void 0);
      updateValue({
        formattedValue: newFormattedValue,
        numAsString: _numAsString,
        input,
        setCaretPosition: true,
        source: SourceType.props,
        event: void 0
      });
    }
  });
  var ref$1 = reactExports.useState(false);
  var mounted = ref$1[0];
  var setMounted = ref$1[1];
  var focusedElm = reactExports.useRef(null);
  var timeout = reactExports.useRef({
    setCaretTimeout: null,
    focusTimeout: null
  });
  reactExports.useEffect(function() {
    setMounted(true);
    return function() {
      clearTimeout(timeout.current.setCaretTimeout);
      clearTimeout(timeout.current.focusTimeout);
    };
  }, []);
  var _format = format2;
  var getValueObject = function(formattedValue2, numAsString2) {
    var floatValue = parseFloat(numAsString2);
    return {
      formattedValue: formattedValue2,
      value: numAsString2,
      floatValue: isNaN(floatValue) ? void 0 : floatValue
    };
  };
  var setPatchedCaretPosition = function(el, caretPos, currentValue) {
    setCaretPosition(el, caretPos);
    timeout.current.setCaretTimeout = setTimeout(function() {
      if (el.value === currentValue) {
        setCaretPosition(el, caretPos);
      }
    }, 0);
  };
  var correctCaretPosition = function(value, caretPos, direction) {
    return getCaretPosInBoundary(value, caretPos, getCaretBoundary2(value), direction);
  };
  var getNewCaretPosition = function(inputValue, newFormattedValue, caretPos) {
    var caretBoundary = getCaretBoundary2(newFormattedValue);
    var updatedCaretPos = getCaretPosition(newFormattedValue, formattedValue, inputValue, caretPos, caretBoundary, isValidInputCharacter);
    updatedCaretPos = getCaretPosInBoundary(newFormattedValue, updatedCaretPos, caretBoundary);
    return updatedCaretPos;
  };
  var updateValue = function(params) {
    var newFormattedValue = params.formattedValue;
    if (newFormattedValue === void 0)
      newFormattedValue = "";
    var input = params.input;
    var setCaretPosition2 = params.setCaretPosition;
    if (setCaretPosition2 === void 0)
      setCaretPosition2 = true;
    var source = params.source;
    var event = params.event;
    var numAsString2 = params.numAsString;
    var caretPos = params.caretPos;
    if (input) {
      if (caretPos === void 0 && setCaretPosition2) {
        var inputValue = params.inputValue || input.value;
        var currentCaretPosition = geInputCaretPosition(input);
        input.value = newFormattedValue;
        caretPos = getNewCaretPosition(inputValue, newFormattedValue, currentCaretPosition);
      }
      input.value = newFormattedValue;
      if (setCaretPosition2 && caretPos !== void 0) {
        setPatchedCaretPosition(input, caretPos, newFormattedValue);
      }
    }
    if (newFormattedValue !== formattedValue) {
      _onValueChange(getValueObject(newFormattedValue, numAsString2), { event, source });
    }
  };
  var formatInputValue = function(inputValue, event, source) {
    var changeRange = findChangeRange(formattedValue, inputValue);
    var changeMeta = Object.assign(Object.assign({}, changeRange), { lastValue: formattedValue });
    var _numAsString = removeFormatting2(inputValue, changeMeta);
    var _formattedValue = _format(_numAsString);
    _numAsString = removeFormatting2(_formattedValue, void 0);
    if (isAllowed && !isAllowed(getValueObject(_formattedValue, _numAsString))) {
      var input = event.target;
      var currentCaretPosition = geInputCaretPosition(input);
      var caretPos = getNewCaretPosition(inputValue, formattedValue, currentCaretPosition);
      setPatchedCaretPosition(input, caretPos, formattedValue);
      return false;
    }
    updateValue({
      formattedValue: _formattedValue,
      numAsString: _numAsString,
      inputValue,
      event,
      source,
      setCaretPosition: true,
      input: event.target
    });
    return true;
  };
  var _onChange = function(e) {
    var el = e.target;
    var inputValue = el.value;
    var changed = formatInputValue(inputValue, e, SourceType.event);
    if (changed) {
      onChange(e);
    }
  };
  var _onKeyDown = function(e) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value;
    if (value === void 0)
      value = "";
    var expectedCaretPosition;
    if (key === "ArrowLeft" || key === "Backspace") {
      expectedCaretPosition = Math.max(selectionStart - 1, 0);
    } else if (key === "ArrowRight") {
      expectedCaretPosition = Math.min(selectionStart + 1, value.length);
    } else if (key === "Delete") {
      expectedCaretPosition = selectionStart;
    }
    if (expectedCaretPosition === void 0 || selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }
    var newCaretPosition = expectedCaretPosition;
    if (key === "ArrowLeft" || key === "ArrowRight") {
      var direction = key === "ArrowLeft" ? "left" : "right";
      newCaretPosition = correctCaretPosition(value, expectedCaretPosition, direction);
    } else if (key === "Delete" && !isValidInputCharacter(value[expectedCaretPosition])) {
      newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "right");
    } else if (key === "Backspace" && !isValidInputCharacter(value[expectedCaretPosition])) {
      newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "left");
    }
    if (newCaretPosition !== expectedCaretPosition) {
      setPatchedCaretPosition(el, newCaretPosition, value);
    }
    if (e.isUnitTestRun) {
      setPatchedCaretPosition(el, newCaretPosition, value);
    }
    onKeyDown(e);
  };
  var _onMouseUp = function(e) {
    var el = e.target;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value;
    if (value === void 0)
      value = "";
    if (selectionStart === selectionEnd) {
      var caretPosition = correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart) {
        setPatchedCaretPosition(el, caretPosition, value);
      }
    }
    onMouseUp(e);
  };
  var _onFocus = function(e) {
    if (e.persist) {
      e.persist();
    }
    var el = e.target;
    focusedElm.current = el;
    timeout.current.focusTimeout = setTimeout(function() {
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value;
      if (value === void 0)
        value = "";
      var caretPosition = correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
        setPatchedCaretPosition(el, caretPosition, value);
      }
      onFocus(e);
    }, 0);
  };
  var _onBlur = function(e) {
    focusedElm.current = null;
    clearTimeout(timeout.current.focusTimeout);
    clearTimeout(timeout.current.setCaretTimeout);
    onBlur(e);
  };
  var inputMode = mounted && addInputMode() ? "numeric" : void 0;
  var inputProps = Object.assign({ inputMode }, otherProps, {
    type,
    value: formattedValue,
    onChange: _onChange,
    onKeyDown: _onKeyDown,
    onMouseUp: _onMouseUp,
    onFocus: _onFocus,
    onBlur: _onBlur
  });
  if (displayType === "text") {
    return renderText ? React.createElement(React.Fragment, null, renderText(formattedValue, otherProps) || null) : React.createElement("span", Object.assign({}, otherProps, { ref: getInputRef }), formattedValue);
  } else if (customInput) {
    var CustomInput = customInput;
    return React.createElement(CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
  }
  return React.createElement("input", Object.assign({}, inputProps, { ref: getInputRef }));
}
function format(numStr, props) {
  var decimalScale = props.decimalScale;
  var fixedDecimalScale = props.fixedDecimalScale;
  var prefix = props.prefix;
  if (prefix === void 0)
    prefix = "";
  var suffix = props.suffix;
  if (suffix === void 0)
    suffix = "";
  var allowNegative = props.allowNegative;
  if (allowNegative === void 0)
    allowNegative = true;
  var thousandsGroupStyle = props.thousandsGroupStyle;
  if (thousandsGroupStyle === void 0)
    thousandsGroupStyle = "thousand";
  if (numStr === "" || numStr === "-") {
    return numStr;
  }
  var ref = getSeparators(props);
  var thousandSeparator = ref.thousandSeparator;
  var decimalSeparator = ref.decimalSeparator;
  var hasDecimalSeparator = decimalScale !== 0 && numStr.indexOf(".") !== -1 || decimalScale && fixedDecimalScale;
  var ref$1 = splitDecimal(numStr, allowNegative);
  var beforeDecimal = ref$1.beforeDecimal;
  var afterDecimal = ref$1.afterDecimal;
  var addNegation = ref$1.addNegation;
  if (decimalScale !== void 0) {
    afterDecimal = limitToScale(afterDecimal, decimalScale, !!fixedDecimalScale);
  }
  if (thousandSeparator) {
    beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
  }
  if (prefix) {
    beforeDecimal = prefix + beforeDecimal;
  }
  if (suffix) {
    afterDecimal = afterDecimal + suffix;
  }
  if (addNegation) {
    beforeDecimal = "-" + beforeDecimal;
  }
  numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || "") + afterDecimal;
  return numStr;
}
function getSeparators(props) {
  var decimalSeparator = props.decimalSeparator;
  if (decimalSeparator === void 0)
    decimalSeparator = ".";
  var thousandSeparator = props.thousandSeparator;
  var allowedDecimalSeparators = props.allowedDecimalSeparators;
  if (thousandSeparator === true) {
    thousandSeparator = ",";
  }
  if (!allowedDecimalSeparators) {
    allowedDecimalSeparators = [decimalSeparator, "."];
  }
  return {
    decimalSeparator,
    thousandSeparator,
    allowedDecimalSeparators
  };
}
function handleNegation(value, allowNegative) {
  if (value === void 0)
    value = "";
  var negationRegex = new RegExp("(-)");
  var doubleNegationRegex = new RegExp("(-)(.)*(-)");
  var hasNegation = negationRegex.test(value);
  var removeNegation = doubleNegationRegex.test(value);
  value = value.replace(/-/g, "");
  if (hasNegation && !removeNegation && allowNegative) {
    value = "-" + value;
  }
  return value;
}
function getNumberRegex(decimalSeparator, global) {
  return new RegExp("(^-)|[0-9]|" + escapeRegExp(decimalSeparator), global ? "g" : void 0);
}
function removeFormatting(value, changeMeta, props) {
  if (changeMeta === void 0)
    changeMeta = getDefaultChangeMeta(value);
  var allowNegative = props.allowNegative;
  if (allowNegative === void 0)
    allowNegative = true;
  var prefix = props.prefix;
  if (prefix === void 0)
    prefix = "";
  var suffix = props.suffix;
  if (suffix === void 0)
    suffix = "";
  var decimalScale = props.decimalScale;
  var from = changeMeta.from;
  var to = changeMeta.to;
  var start = to.start;
  var end = to.end;
  var ref = getSeparators(props);
  var allowedDecimalSeparators = ref.allowedDecimalSeparators;
  var decimalSeparator = ref.decimalSeparator;
  var isBeforeDecimalSeparator = value[end] === decimalSeparator;
  if (end - start === 1 && allowedDecimalSeparators.indexOf(value[start]) !== -1) {
    var separator = decimalScale === 0 ? "" : decimalSeparator;
    value = value.substring(0, start) + separator + value.substring(start + 1, value.length);
  }
  var hasNegation = false;
  if (prefix.startsWith("-")) {
    hasNegation = value.startsWith("--");
  } else if (suffix.startsWith("-") && value.length === suffix.length) {
    hasNegation = false;
  } else if (value[0] === "-") {
    hasNegation = true;
  }
  if (hasNegation) {
    value = value.substring(1);
    start -= 1;
    end -= 1;
  }
  var startIndex = 0;
  if (value.startsWith(prefix)) {
    startIndex += prefix.length;
  } else if (start < prefix.length) {
    startIndex = start;
  }
  value = value.substring(startIndex);
  end -= startIndex;
  var endIndex = value.length;
  var suffixStartIndex = value.length - suffix.length;
  if (value.endsWith(suffix)) {
    endIndex = suffixStartIndex;
  } else if (end > value.length - suffix.length) {
    endIndex = end;
  }
  value = value.substring(0, endIndex);
  value = handleNegation(hasNegation ? "-" + value : value, allowNegative);
  value = (value.match(getNumberRegex(decimalSeparator, true)) || []).join("");
  var firstIndex = value.indexOf(decimalSeparator);
  value = value.replace(new RegExp(escapeRegExp(decimalSeparator), "g"), function(match, index) {
    return index === firstIndex ? "." : "";
  });
  var ref$1 = splitDecimal(value, allowNegative);
  var beforeDecimal = ref$1.beforeDecimal;
  var afterDecimal = ref$1.afterDecimal;
  var addNegation = ref$1.addNegation;
  if (to.end - to.start < from.end - from.start && beforeDecimal === "" && isBeforeDecimalSeparator && !parseFloat(afterDecimal)) {
    value = addNegation ? "-" : "";
  }
  return value;
}
function getCaretBoundary(formattedValue, props) {
  var prefix = props.prefix;
  if (prefix === void 0)
    prefix = "";
  var suffix = props.suffix;
  if (suffix === void 0)
    suffix = "";
  var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
    return true;
  });
  var hasNegation = formattedValue[0] === "-";
  boundaryAry.fill(false, 0, prefix.length + (hasNegation ? 1 : 0));
  var valLn = formattedValue.length;
  boundaryAry.fill(false, valLn - suffix.length + 1, valLn + 1);
  return boundaryAry;
}
function validateProps(props) {
  var ref = getSeparators(props);
  var thousandSeparator = ref.thousandSeparator;
  var decimalSeparator = ref.decimalSeparator;
  if (thousandSeparator === decimalSeparator) {
    throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + thousandSeparator + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + decimalSeparator + " (default value for decimalSeparator is .)\n     ");
  }
}
function useNumericFormat(props) {
  var decimalSeparator = props.decimalSeparator;
  if (decimalSeparator === void 0)
    decimalSeparator = ".";
  props.allowedDecimalSeparators;
  props.thousandsGroupStyle;
  props.suffix;
  props.allowNegative;
  var allowLeadingZeros = props.allowLeadingZeros;
  var onKeyDown = props.onKeyDown;
  if (onKeyDown === void 0)
    onKeyDown = noop;
  var onBlur = props.onBlur;
  if (onBlur === void 0)
    onBlur = noop;
  var thousandSeparator = props.thousandSeparator;
  var decimalScale = props.decimalScale;
  var fixedDecimalScale = props.fixedDecimalScale;
  var prefix = props.prefix;
  if (prefix === void 0)
    prefix = "";
  var defaultValue = props.defaultValue;
  var value = props.value;
  var valueIsNumericString = props.valueIsNumericString;
  var onValueChange = props.onValueChange;
  var restProps = __rest(props, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
  validateProps(props);
  var _format = function(numStr) {
    return format(numStr, props);
  };
  var _removeFormatting = function(inputValue, changeMeta) {
    return removeFormatting(inputValue, changeMeta, props);
  };
  var _valueIsNumericString = valueIsNumericString;
  if (!isNil(value)) {
    _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : typeof value === "number";
  } else if (!isNil(defaultValue)) {
    _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : typeof defaultValue === "number";
  }
  var roundIncomingValueToPrecision = function(value2) {
    if (isNil(value2) || isNanValue(value2)) {
      return value2;
    }
    if (typeof value2 === "number") {
      value2 = toNumericString(value2);
    }
    if (_valueIsNumericString && typeof decimalScale === "number") {
      return roundToPrecision(value2, decimalScale, Boolean(fixedDecimalScale));
    }
    return value2;
  };
  var ref = useInternalValues(roundIncomingValueToPrecision(value), roundIncomingValueToPrecision(defaultValue), Boolean(_valueIsNumericString), _format, _removeFormatting, onValueChange);
  var ref_0 = ref[0];
  var numAsString = ref_0.numAsString;
  var formattedValue = ref_0.formattedValue;
  var _onValueChange = ref[1];
  var _onKeyDown = function(e) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value2 = el.value;
    if (value2 === void 0)
      value2 = "";
    if (selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }
    if (key === "Backspace" && value2[0] === "-" && selectionStart === prefix.length + 1) {
      setCaretPosition(el, 1);
    }
    var ref2 = getSeparators(props);
    var decimalSeparator2 = ref2.decimalSeparator;
    var allowedDecimalSeparators = ref2.allowedDecimalSeparators;
    if (key === "Backspace" && value2[selectionStart - 1] === decimalSeparator2 && decimalScale && fixedDecimalScale) {
      setCaretPosition(el, selectionStart - 1);
      e.preventDefault();
    }
    if ((allowedDecimalSeparators === null || allowedDecimalSeparators === void 0 ? void 0 : allowedDecimalSeparators.includes(key)) && value2[selectionStart] === decimalSeparator2) {
      setCaretPosition(el, selectionStart + 1);
    }
    var _thousandSeparator = thousandSeparator === true ? "," : thousandSeparator;
    if (key === "Backspace" && value2[selectionStart - 1] === _thousandSeparator) {
      setCaretPosition(el, selectionStart - 1);
    }
    if (key === "Delete" && value2[selectionStart] === _thousandSeparator) {
      setCaretPosition(el, selectionStart + 1);
    }
    onKeyDown(e);
  };
  var _onBlur = function(e) {
    var _value = numAsString;
    if (!_value.match(/\d/g)) {
      _value = "";
    }
    if (!allowLeadingZeros) {
      _value = fixLeadingZero(_value);
    }
    if (fixedDecimalScale && decimalScale) {
      _value = roundToPrecision(_value, decimalScale, fixedDecimalScale);
    }
    if (_value !== numAsString) {
      var formattedValue2 = format(_value, props);
      _onValueChange({
        formattedValue: formattedValue2,
        value: _value,
        floatValue: parseFloat(_value)
      }, {
        event: e,
        source: SourceType.event
      });
    }
    onBlur(e);
  };
  var isValidInputCharacter = function(inputChar) {
    if (inputChar === decimalSeparator) {
      return true;
    }
    return charIsNumber(inputChar);
  };
  return Object.assign(Object.assign({}, restProps), { value: formattedValue, valueIsNumericString: false, isValidInputCharacter, onValueChange: _onValueChange, format: _format, removeFormatting: _removeFormatting, getCaretBoundary: function(formattedValue2) {
    return getCaretBoundary(formattedValue2, props);
  }, onKeyDown: _onKeyDown, onBlur: _onBlur });
}
function NumericFormat(props) {
  var numericFormatProps = useNumericFormat(props);
  return React.createElement(NumberFormatBase, Object.assign({}, numericFormatProps));
}
function NumberFormatCustom(props) {
  const {
    inputRef,
    onChange,
    ...other
  } = props;
  return /* @__PURE__ */ jsx(NumericFormat, { ...other, getInputRef: inputRef, onValueChange: (values) => {
    onChange && onChange({
      target: {
        name: props.name,
        value: values.value
      }
    });
  } });
}
var ArrowBack = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(ArrowBack, "__esModule", {
  value: true
});
var default_1 = ArrowBack.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
}), "ArrowBack");
default_1 = ArrowBack.default = _default;
var RoutesResetUserPassword = /* @__PURE__ */ ((RoutesResetUserPassword2) => {
  RoutesResetUserPassword2["STEP_TWO"] = "validate_email";
  RoutesResetUserPassword2["STEP_NEW_PASSWORD"] = "new_password/:token";
  RoutesResetUserPassword2["ERROR"] = "error";
  return RoutesResetUserPassword2;
})(RoutesResetUserPassword || {});
const createNewPasswordPath = (params) => generatePath("new_password/:token", {
  ...params
});
const AccountRecoveryEmailPin = (props) => /* @__PURE__ */ jsxs(Box, { component: "svg", color: "inherit", fontSize: "inherit", viewBox: "0 0 1380 1380", ...props, children: [
  /* @__PURE__ */ jsx("path", { fill: "#a7a7a7", d: "M37.7,554.6v685c0,44.9,36.4,81.4,81.3,81.4h1142c44.9,0,81.3-36.4,81.3-81.4v-685H37.7z" }),
  /* @__PURE__ */ jsx("path", { fill: "#d6d5d9", d: "M1313.1 496.6l-581-424.8c-25.1-18.3-59.1-18.3-84.2 0l-581 424.8c-18.4 13.4-29.2 34.8-29.2 57.6v.4l1304.6-.4a71.29 71.29 0 0 0-29.2-57.6z" }),
  /* @__PURE__ */ jsx("path", { fill: "#e0e4f8", d: "M1151.7 440.3H233.1c-14.1 0-25.5 11.4-25.5 25.5v725.8c0 14.1 11.4 25.5 25.5 25.5h918.6c14.1 0 25.5-11.4 25.5-25.5V465.8c0-14.1-11.4-25.5-25.5-25.5z" }),
  /* @__PURE__ */ jsx("path", { fill: "#fff", stroke: "#c6c6c6", d: "M930 1076.1H450v-540c0-16.6 13.4-30 30-30h420c16.6 0 30 13.4 30 30v540z" }),
  /* @__PURE__ */ jsx("path", { fill: "#487f74", d: "M691.3 551.4c-45 0-81.5 36.5-81.5 81.5s36.5 81.5 81.5 81.5 81.5-36.5 81.5-81.5-36.5-81.5-81.5-81.5zm.1 24.5c13.5 0 24.4 10.9 24.4 24.4s-10.9 24.4-24.4 24.4-24.4-10.9-24.4-24.4 10.9-24.4 24.4-24.4zm0 115.6c-20.3 0-38.3-10.4-48.8-26.2.2-16.2 32.6-25.1 48.8-25.1s48.6 8.9 48.8 25.1c-10.4 15.8-28.4 26.2-48.8 26.2z" }),
  /* @__PURE__ */ jsxs("g", { fill: "#606060", children: [
    /* @__PURE__ */ jsx("use", { href: "#B" }),
    /* @__PURE__ */ jsx("use", { href: "#B", x: "105" }),
    /* @__PURE__ */ jsx("use", { href: "#B", x: "314.9" }),
    /* @__PURE__ */ jsx("use", { href: "#B", x: "209.9" })
  ] }),
  /* @__PURE__ */ jsxs("g", { fill: "#f4f4f4", children: [
    /* @__PURE__ */ jsx("path", { d: "M119,1321h1143.3c44.2,0,80-35.8,80-80V554.6L119,1321z" }),
    /* @__PURE__ */ jsx("path", { d: "M1261,1321H117.7c-44.2,0-80-35.8-80-80V554.6L1261,1321z" })
  ] }),
  /* @__PURE__ */ jsx("path", { fill: "#d6d5d9", d: "M690,963.3l-572.4,358.6h1141.9" }),
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "B", d: "M551.1 798.3c-.3-1-.8-1.7-1.7-2.2l-7.5-4.3 7.5-4.3c.9-.5 1.4-1.2 1.7-2.2s.1-1.9-.4-2.7l-1.8-3.1c-.5-.9-1.2-1.4-2.2-1.7s-1.9-.1-2.7.4l-7.5 4.3v-8.6c0-1-.4-1.8-1.1-2.5s-1.6-1.1-2.5-1.1h-3.6c-1 0-1.8.4-2.5 1.1s-1.1 1.6-1.1 2.5v8.6l-7.5-4.3a3.71 3.71 0 0 0-2.7-.4c-1 .3-1.7.8-2.2 1.7l-1.8 3.1a3.71 3.71 0 0 0-.4 2.7c.3 1 .8 1.7 1.7 2.2l7.5 4.3-7.5 4.3c-.9.5-1.4 1.2-1.7 2.2s-.1 1.9.4 2.7l1.8 3.1c.5.9 1.2 1.4 2.2 1.7s1.9.1 2.7-.4l7.5-4.3v8.6c0 1 .4 1.8 1.1 2.5s1.6 1.1 2.5 1.1h3.6c1 0 1.8-.4 2.5-1.1s1.1-1.6 1.1-2.5v-8.5l7.5 4.3a3.71 3.71 0 0 0 2.7.4c1-.3 1.7-.8 2.2-1.7l1.8-3.1c.5-.9.6-1.8.4-2.8z" }) })
] });
const accountRecoverySx = {
  background: (theme) => {
    const {
      background,
      mode
    } = theme.palette;
    const {
      paper
    } = background;
    const intensify = mode === "dark" ? lighten : darken;
    return `linear-gradient(180deg, ${paper} 60%, ${intensify(background.default, 0.05)} 60%, ${paper} 90%)`;
  },
  width: (theme) => `calc(100% + ${theme.spacing(6)})`,
  padding: (theme) => theme.spacing(2),
  margin: (theme) => theme.spacing(-3),
  marginTop: (theme) => theme.spacing(2)
};
const actionsSx = {
  marginTop: (theme) => theme.spacing(2)
};
const fieldsSx = {
  marginTop: (theme) => theme.spacing(1),
  marginBottom: (theme) => theme.spacing(1)
};
const accountRecoveryEmailPinSx = {
  width: (theme) => theme.spacing(15)
};
const titlesSx = {
  fontWeight: 600
};
const SendVerificationCode = ({
  emailOrPhoneNumber: emailOrPhoneNumber2
}) => {
  const navigate = useNavigate();
  const {
    t
  } = useTranslation("resetUserPassword");
  const [sendPasswordRestoreCode, {
    loading
  }] = useSendPasswordRestoreCode();
  const goBack = () => navigate(PathRoutes.SIGN_IN);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, alignItems: "center", sx: accountRecoverySx, children: /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", children: /* @__PURE__ */ jsx(AccountRecoveryEmailPin, { sx: accountRecoveryEmailPinSx }) }) }),
    /* @__PURE__ */ jsx(Typography, { sx: titlesSx, variant: "h6", children: t("verificationCode") }),
    /* @__PURE__ */ jsx(Typography, { children: t("codeSent") }),
    /* @__PURE__ */ jsx(Grid, { sx: fieldsSx, container: true, spacing: 2, children: /* @__PURE__ */ jsx(FieldRender, { field: emailOrPhoneNumber2 }) }),
    /* @__PURE__ */ jsxs(Grid, { sx: actionsSx, container: true, justifyContent: "space-between", spacing: 2, children: [
      /* @__PURE__ */ jsx(Grid, { onClick: goBack, item: true, xs: 12, sm: "auto", children: /* @__PURE__ */ jsx(Button, { tabIndex: -1, variant: "text", color: "secondary", fullWidth: true, children: /* @__PURE__ */ jsx(Typography, { noWrap: true, children: t("back") }) }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: "auto", children: /* @__PURE__ */ jsx(Button, { component: ButtonLoading, variant: "contained", color: "primary", fullWidth: true, disableRipple: loading, loading, onClick: async () => {
        if (!loading) {
          await emailOrPhoneNumber2.validity();
          if (emailOrPhoneNumber2.valid) {
            const {
              email,
              phoneNumber
            } = getEmailOrPhoneNumber(emailOrPhoneNumber2.value);
            sendPasswordRestoreCode({
              variables: {
                email,
                phoneNumber
              }
            }).then(() => {
              navigate(RoutesResetUserPassword.STEP_TWO);
            }).catch((e) => {
              const errors = getErrorsFields(e);
              if (errors) {
                if (errors.email)
                  emailOrPhoneNumber2.setErrors(errors.email);
              }
            });
          }
        }
      }, children: /* @__PURE__ */ jsx(Typography, { noWrap: true, children: t("sendMail") }) }) })
    ] })
  ] });
};
const CodeFieldBase = ({
  code
}) => {
  var _a;
  const {
    t
  } = useTranslation("resetUserPassword");
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(TextField, { fullWidth: true, label: t("code"), error: code.invalid, InputLabelProps: {
    sx: {
      fontSize: "25px"
    }
  }, variant: "standard", value: code.value, onChange: ({
    target: {
      value
    }
  }) => {
    code.setValue(value && Number(value) || value);
  }, name: "code", InputProps: {
    inputComponent: NumberFormatCustom,
    inputProps: {
      format: "###-###"
    },
    sx: {
      input: {
        fontSize: "25px",
        textAlign: "center"
      }
    }
  }, helperText: !!((_a = code.errors) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx(RenderErrorsDefault, { errors: code.errors }) }) });
};
const CodeField = observer(CodeFieldBase);
const StepValidateEmail = ({
  emailOrPhoneNumber: emailOrPhoneNumber2
}) => {
  const translation = useTranslation("resetUserPassword");
  const t = (key) => translation.t("stepValidateEmail." + key);
  const navigate = useNavigate();
  React.useEffect(() => {
    emailOrPhoneNumber2.hasErrors().then((hasErrors) => {
      if (hasErrors)
        navigate(PathRoutes.RESET_USER_PASSWORD);
    }).catch((e) => {
      console.log(e);
    });
  });
  const [code] = React.useState(new FieldBuilder({
    name: "code",
    value: "",
    ns: "general",
    validate: false,
    type: "number",
    validations: [{
      rule: "isEmpty",
      message: "required"
    }, {
      rule: "isNumeric",
      message: "numeric"
    }]
  }));
  const [validateCodeRestorePassword, {
    loading
  }] = useValidateCodeRestorePassword();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h6", children: t("validateEmail") }),
    /* @__PURE__ */ jsx(Typography, { children: t("enterCode") }),
    /* @__PURE__ */ jsx(Grid, { sx: {
      marginTop: 1,
      marginBottom: 1
    }, container: true, spacing: 2, justifyContent: "center", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 4, children: /* @__PURE__ */ jsx(CodeField, { ...{
      code
    } }) }) }),
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, justifyContent: "flex-end", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: "auto", children: /* @__PURE__ */ jsx(Button, { component: ButtonLoading, fullWidth: true, color: "primary", variant: "contained", loading, onClick: async () => {
      if (!loading && await code.validity() && await emailOrPhoneNumber2.validity()) {
        const {
          email,
          phoneNumber
        } = getEmailOrPhoneNumber(emailOrPhoneNumber2.value);
        validateCodeRestorePassword({
          variables: {
            code: Number(code.value),
            email,
            phoneNumber
          }
        }).then(({
          data
        }) => {
          if (data) {
            const route = createNewPasswordPath({
              token: data.validateCodeRestorePassword
            });
            navigate(route);
          }
        }).catch((e) => {
          const errors = getErrorsFields(e);
          if (errors == null ? void 0 : errors.code)
            code.setErrors(errors.code);
        });
      }
    }, children: t("validateCode") }) }) })
  ] });
};
const NewPassword = () => {
  const translation = useTranslation("resetUserPassword");
  const [resetPassword, {
    loading
  }] = useResetPassword();
  const t = (key) => translation.t("changePassword." + key);
  const navigate = useNavigate();
  const {
    token: tokenBase64
  } = useParams();
  const token = tokenBase64 && atob(tokenBase64);
  const fieldsBuilder = useFields(new FieldsBuilder({
    ns: "login",
    validate: false,
    fields: [getPassword(), getConfirmPassword()]
  }));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h6", children: t("title") }),
    /* @__PURE__ */ jsx(Typography, { children: t("subTitle") }),
    /* @__PURE__ */ jsx(Grid, { sx: {
      marginTop: 1,
      marginBottom: 1
    }, container: true, spacing: 2, justifyContent: "center", children: /* @__PURE__ */ jsx(FieldsRender, { fields: fieldsBuilder.fields, onChangeField: fieldsBuilder.onChangeField }) }),
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, justifyContent: "center", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: "auto", children: /* @__PURE__ */ jsx(Button, { component: ButtonLoading, fullWidth: true, color: "primary", variant: "contained", startIcon: /* @__PURE__ */ jsx(default_1$1, {}), loading, onClick: async () => {
      if (!await fieldsBuilder.hasErrors()) {
        const {
          password
        } = fieldsBuilder.getValues();
        if (!token)
          return;
        resetPassword({
          variables: {
            token,
            newPassword: password
          }
        }).then(({
          data
        }) => {
          if (data && data.resetPassword) {
            navigate(PathRoutes.SIGN_IN);
          } else {
            navigate(RoutesResetUserPassword.ERROR);
          }
        }).catch((e) => console.error(e));
      }
    }, children: t("save") }) }) })
  ] });
};
const backgroundIconSx = {
  background: (theme) => theme.palette.error.light,
  borderRadius: (theme) => theme.spacing(1, 1, 0, 0),
  padding: (theme) => theme.spacing(1)
};
const backgroundTextSx = {
  borderRadius: (theme) => theme.spacing(0, 0, 1, 1),
  padding: (theme) => theme.spacing(1)
};
const errorIconRootSx = {
  display: "flex",
  justifyContent: "center"
};
const errorIconSx = {
  color: (theme) => theme.palette.error.contrastText
};
const buttonSx = {
  marginTop: (theme) => theme.spacing(2)
};
const ErrorMessage = () => {
  const navigate = useNavigate();
  const {
    t
  } = useTranslation("resetUserPassword");
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Paper, { elevation: 3, sx: backgroundIconSx, children: /* @__PURE__ */ jsx(Typography, { sx: errorIconRootSx, variant: "h1", children: /* @__PURE__ */ jsx(default_1$2, { sx: errorIconSx, fontSize: "inherit" }) }) }),
    /* @__PURE__ */ jsxs(Paper, { elevation: 3, sx: backgroundTextSx, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h4", align: "center", children: t("error.title") }),
      /* @__PURE__ */ jsx(Typography, { variant: "h6", align: "center", children: t("error.subTitle") }),
      /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsx(Grid, { xs: 8, sm: 4, md: 4, children: /* @__PURE__ */ jsx(Button, { sx: buttonSx, fullWidth: true, color: "primary", variant: "contained", onClick: () => {
        navigate(PathRoutes.RESET_USER_PASSWORD);
      }, children: /* @__PURE__ */ jsx(Typography, { variant: "inherit", color: "inherit", noWrap: true, children: t("error.tryAgain") }) }) }) })
    ] })
  ] });
};
const mainSx = (theme) => ({
  width: "100%",
  display: "block",
  [theme.breakpoints.up(400 * 2)]: {
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto"
  },
  margin: "auto"
});
const ResetUserPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    t
  } = useTranslation("resetUserPassword");
  const {
    t: tErrors
  } = useTranslation("errors");
  const field = useField({
    ns: "general",
    validate: false,
    ...emailOrPhoneNumber(),
    InputProps: {
      startAdornment: /* @__PURE__ */ jsx(MuiInputAdornment, { position: "start", children: /* @__PURE__ */ jsx(default_1$3, {}) })
    }
  });
  const goBack = () => {
    switch (location.pathname) {
      case RoutesResetUserPassword.STEP_TWO:
        navigate(PathRoutes.RESET_USER_PASSWORD);
        break;
      default:
        navigate(PathRoutes.SIGN_IN);
        break;
    }
  };
  return /* @__PURE__ */ jsx(Layout, { headerProps: {
    withMenuAccount: false,
    withNavBar: false,
    withNotificationsMenu: false,
    titleProps: {
      to: PathRoutes.MAIN
    }
  }, navBarProps: {
    open: false,
    withNavBar: false
  }, children: /* @__PURE__ */ jsx(Box, { sx: mainSx, children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: RoutesResetUserPassword.ERROR, element: /* @__PURE__ */ jsx(ErrorMessage, {}) }),
    /* @__PURE__ */ jsx(Route, { index: true, path: "/*", element: /* @__PURE__ */ jsxs(Paper, { sx: {
      marginTop: (theme) => theme.spacing(4),
      padding: (theme) => theme.spacing(2, 3, 3)
    }, children: [
      /* @__PURE__ */ jsxs(Grid, { container: true, alignItems: "center", children: [
        /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(IconButton, { onClick: goBack, size: "large", children: /* @__PURE__ */ jsx(default_1, {}) }) }),
        /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, sm: true, children: [
          /* @__PURE__ */ jsx(Typography, { color: "primary", variant: "h5", align: "center", gutterBottom: true, children: /* @__PURE__ */ jsx(Colva, { sx: {
            height: "25px"
          } }) }),
          /* @__PURE__ */ jsx(Typography, { sx: {
            fontWeight: 600
          }, variant: "h6", align: "center", children: t("accountRecovery") })
        ] }),
        /* @__PURE__ */ jsx(Grid, { item: true, style: {
          width: "48px"
        } })
      ] }),
      /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(SendVerificationCode, { emailOrPhoneNumber: field }) }),
        /* @__PURE__ */ jsx(Route, { path: RoutesResetUserPassword.STEP_TWO, element: /* @__PURE__ */ jsx(StepValidateEmail, { emailOrPhoneNumber: field }) }),
        /* @__PURE__ */ jsx(Route, { path: RoutesResetUserPassword.STEP_NEW_PASSWORD, element: /* @__PURE__ */ jsx(NewPassword, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Box, { sx: {
            position: "relative",
            textAlign: "center"
          }, children: /* @__PURE__ */ jsx(Icon404, { sx: {
            height: "100%",
            maxHeight: "200px"
          } }) }),
          /* @__PURE__ */ jsx(Typography, { textAlign: "center", color: "error.main", variant: "h6", children: tErrors("notFound.title") }),
          /* @__PURE__ */ jsx(Button, { component: Link, to: PathRoutes.RESET_USER_PASSWORD, sx: {
            marginTop: (theme) => theme.spacing(2)
          }, fullWidth: true, variant: "contained", color: "primary", children: t("back") })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: PathRoutes.SIGN_IN }) })
  ] }) }) });
};
export {
  ResetUserPassword as default
};
