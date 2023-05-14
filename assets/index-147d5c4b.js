function _mergeNamespaces(n, m) {
  m.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
      if (k !== "default" && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  });
  return Object.freeze(n);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f, args);
        return new Ctor();
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var es$v = {};
var interopRequireDefault = { exports: {} };
(function(module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(interopRequireDefault);
var interopRequireDefaultExports = interopRequireDefault.exports;
var es$u = {};
var interopRequireWildcard = { exports: {} };
var _typeof$2 = { exports: {} };
var hasRequired_typeof;
function require_typeof() {
  if (hasRequired_typeof)
    return _typeof$2.exports;
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
  })(_typeof$2);
  return _typeof$2.exports;
}
var hasRequiredInteropRequireWildcard;
function requireInteropRequireWildcard() {
  if (hasRequiredInteropRequireWildcard)
    return interopRequireWildcard.exports;
  hasRequiredInteropRequireWildcard = 1;
  (function(module) {
    var _typeof2 = require_typeof()["default"];
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return {
          "default": obj
        };
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
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(interopRequireWildcard);
  return interopRequireWildcard.exports;
}
var toConsumableArray = { exports: {} };
var arrayWithoutHoles = { exports: {} };
var arrayLikeToArray = { exports: {} };
var hasRequiredArrayLikeToArray;
function requireArrayLikeToArray() {
  if (hasRequiredArrayLikeToArray)
    return arrayLikeToArray.exports;
  hasRequiredArrayLikeToArray = 1;
  (function(module) {
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    module.exports = _arrayLikeToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(arrayLikeToArray);
  return arrayLikeToArray.exports;
}
var hasRequiredArrayWithoutHoles;
function requireArrayWithoutHoles() {
  if (hasRequiredArrayWithoutHoles)
    return arrayWithoutHoles.exports;
  hasRequiredArrayWithoutHoles = 1;
  (function(module) {
    var arrayLikeToArray2 = requireArrayLikeToArray();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return arrayLikeToArray2(arr);
    }
    module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(arrayWithoutHoles);
  return arrayWithoutHoles.exports;
}
var iterableToArray = { exports: {} };
var hasRequiredIterableToArray;
function requireIterableToArray() {
  if (hasRequiredIterableToArray)
    return iterableToArray.exports;
  hasRequiredIterableToArray = 1;
  (function(module) {
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(iterableToArray);
  return iterableToArray.exports;
}
var unsupportedIterableToArray = { exports: {} };
var hasRequiredUnsupportedIterableToArray;
function requireUnsupportedIterableToArray() {
  if (hasRequiredUnsupportedIterableToArray)
    return unsupportedIterableToArray.exports;
  hasRequiredUnsupportedIterableToArray = 1;
  (function(module) {
    var arrayLikeToArray2 = requireArrayLikeToArray();
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return arrayLikeToArray2(o, minLen);
    }
    module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(unsupportedIterableToArray);
  return unsupportedIterableToArray.exports;
}
var nonIterableSpread = { exports: {} };
var hasRequiredNonIterableSpread;
function requireNonIterableSpread() {
  if (hasRequiredNonIterableSpread)
    return nonIterableSpread.exports;
  hasRequiredNonIterableSpread = 1;
  (function(module) {
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(nonIterableSpread);
  return nonIterableSpread.exports;
}
var hasRequiredToConsumableArray;
function requireToConsumableArray() {
  if (hasRequiredToConsumableArray)
    return toConsumableArray.exports;
  hasRequiredToConsumableArray = 1;
  (function(module) {
    var arrayWithoutHoles2 = requireArrayWithoutHoles();
    var iterableToArray2 = requireIterableToArray();
    var unsupportedIterableToArray2 = requireUnsupportedIterableToArray();
    var nonIterableSpread2 = requireNonIterableSpread();
    function _toConsumableArray(arr) {
      return arrayWithoutHoles2(arr) || iterableToArray2(arr) || unsupportedIterableToArray2(arr) || nonIterableSpread2();
    }
    module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toConsumableArray);
  return toConsumableArray.exports;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var _typeof$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _typeof
});
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var defineProperty = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _defineProperty
});
var require$$1$1 = /* @__PURE__ */ getAugmentedNamespace(defineProperty);
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
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
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var slicedToArray = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _slicedToArray
});
var require$$4$1 = /* @__PURE__ */ getAugmentedNamespace(slicedToArray);
var es$t = {};
var construct = { exports: {} };
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
var isNativeReflectConstruct = { exports: {} };
var hasRequiredIsNativeReflectConstruct;
function requireIsNativeReflectConstruct() {
  if (hasRequiredIsNativeReflectConstruct)
    return isNativeReflectConstruct.exports;
  hasRequiredIsNativeReflectConstruct = 1;
  (function(module) {
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
    module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(isNativeReflectConstruct);
  return isNativeReflectConstruct.exports;
}
var hasRequiredConstruct;
function requireConstruct() {
  if (hasRequiredConstruct)
    return construct.exports;
  hasRequiredConstruct = 1;
  (function(module) {
    var setPrototypeOf2 = requireSetPrototypeOf();
    var isNativeReflectConstruct2 = requireIsNativeReflectConstruct();
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct2()) {
        module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
      } else {
        module.exports = _construct = function _construct2(Parent2, args2, Class2) {
          var a = [null];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            setPrototypeOf2(instance, Class2.prototype);
          return instance;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      }
      return _construct.apply(null, arguments);
    }
    module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(construct);
  return construct.exports;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var classCallCheck = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _classCallCheck
});
var require$$4 = /* @__PURE__ */ getAugmentedNamespace(classCallCheck);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var createClass = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _createClass
});
var require$$5 = /* @__PURE__ */ getAugmentedNamespace(createClass);
var possibleConstructorReturn = { exports: {} };
var assertThisInitialized = { exports: {} };
var hasRequiredAssertThisInitialized;
function requireAssertThisInitialized() {
  if (hasRequiredAssertThisInitialized)
    return assertThisInitialized.exports;
  hasRequiredAssertThisInitialized = 1;
  (function(module) {
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
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
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return assertThisInitialized2(self2);
    }
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
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
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _getPrototypeOf(o);
    }
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(getPrototypeOf);
  return getPrototypeOf.exports;
}
var inherits = { exports: {} };
var hasRequiredInherits;
function requireInherits() {
  if (hasRequiredInherits)
    return inherits.exports;
  hasRequiredInherits = 1;
  (function(module) {
    var setPrototypeOf2 = requireSetPrototypeOf();
    function _inherits(subClass, superClass) {
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
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(inherits);
  return inherits.exports;
}
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(_typeof$1);
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteBrowserExternal
});
var require$$3 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var events = { exports: {} };
var hasRequiredEvents;
function requireEvents() {
  if (hasRequiredEvents)
    return events.exports;
  hasRequiredEvents = 1;
  var R = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === "function") {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn)
      console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
    return value !== value;
  };
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  events.exports.once = once;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = void 0;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== "function") {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }
  Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter.init = function() {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || void 0;
  };
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    }
    this._maxListeners = n;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === void 0)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++)
      args.push(arguments[i]);
    var doError = type === "error";
    var events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return false;
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m;
    var events2;
    var existing;
    checkListener(listener);
    events2 = target._events;
    if (events2 === void 0) {
      events2 = target._events = /* @__PURE__ */ Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events2.newListener !== void 0) {
        target.emit(
          "newListener",
          type,
          listener.listener ? listener.listener : listener
        );
        events2 = target._events;
      }
      existing = events2[type];
    }
    if (existing === void 0) {
      existing = events2[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === "function") {
        existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }
    return target;
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: void 0, target, type, listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter.prototype.once = function once2(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events2, position, i, originalListener;
    checkListener(listener);
    events2 = this._events;
    if (events2 === void 0)
      return this;
    list = events2[type];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else {
        delete events2[type];
        if (events2.removeListener)
          this.emit("removeListener", type, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      position = -1;
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener;
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events2[type] = list[0];
      if (events2.removeListener !== void 0)
        this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events2, i;
    events2 = this._events;
    if (events2 === void 0)
      return this;
    if (events2.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      } else if (events2[type] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else
          delete events2[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys = Object.keys(events2);
      var key;
      for (i = 0; i < keys.length; ++i) {
        key = keys[i];
        if (key === "removeListener")
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events2[type];
    if (typeof listeners === "function") {
      this.removeListener(type, listeners);
    } else if (listeners !== void 0) {
      for (i = listeners.length - 1; i >= 0; i--) {
        this.removeListener(type, listeners[i]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    if (evlistener === void 0)
      return [];
    if (typeof evlistener === "function")
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };
  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener === "function") {
        return 1;
      } else if (evlistener !== void 0) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  function spliceOne(list, index2) {
    for (; index2 + 1 < list.length; index2++)
      list[index2] = list[index2 + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  function once(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === "function") {
          emitter.removeListener("error", errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== "error") {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") {
      eventTargetAgnosticAddListener(emitter, "error", handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === "function") {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }
  return events.exports;
}
var es$s = {};
var regeneratorRuntime$1 = { exports: {} };
var hasRequiredRegeneratorRuntime;
function requireRegeneratorRuntime() {
  if (hasRequiredRegeneratorRuntime)
    return regeneratorRuntime$1.exports;
  hasRequiredRegeneratorRuntime = 1;
  (function(module) {
    var _typeof2 = require_typeof()["default"];
    function _regeneratorRuntime() {
      module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
        return exports;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty2 = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
      }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        }), obj[key];
      }
      try {
        define({}, "");
      } catch (err) {
        define = function define2(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self2, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return defineProperty2(generator, "_invoke", {
          value: makeInvokeMethod(innerFn, self2, context)
        }), generator;
      }
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      exports.wrap = wrap;
      var ContinueSentinel = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          define(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if ("throw" !== record.type) {
            var result = record.arg, value = result.value;
            return value && "object" == _typeof2(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
              invoke("next", value2, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            }) : PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped, resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
          reject(record.arg);
        }
        var previousPromise;
        defineProperty2(this, "_invoke", {
          value: function value(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(innerFn, self2, context) {
        var state = "suspendedStart";
        return function(method, arg) {
          if ("executing" === state)
            throw new Error("Generator is already running");
          if ("completed" === state) {
            if ("throw" === method)
              throw arg;
            return doneResult();
          }
          for (context.method = method, context.arg = arg; ; ) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                  continue;
                return delegateResult;
              }
            }
            if ("next" === context.method)
              context.sent = context._sent = context.arg;
            else if ("throw" === context.method) {
              if ("suspendedStart" === state)
                throw state = "completed", context.arg;
              context.dispatchException(context.arg);
            } else
              "return" === context.method && context.abrupt("return", context.arg);
            state = "executing";
            var record = tryCatch(innerFn, self2, context);
            if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                continue;
              return {
                value: record.arg,
                done: context.done
              };
            }
            "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method, method = delegate.iterator[methodName];
        if (void 0 === method)
          return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type)
          return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
      }
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{
          tryLoc: "root"
        }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod)
            return iteratorMethod.call(iterable);
          if ("function" == typeof iterable.next)
            return iterable;
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next2() {
              for (; ++i < iterable.length; )
                if (hasOwn.call(iterable, i))
                  return next2.value = iterable[i], next2.done = false, next2;
              return next2.value = void 0, next2.done = true, next2;
            };
            return next.next = next;
          }
        }
        return {
          next: doneResult
        };
      }
      function doneResult() {
        return {
          value: void 0,
          done: true
        };
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty2(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), defineProperty2(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
      }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
      }, exports.awrap = function(arg) {
        return {
          __await: arg
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
      }), define(Gp, "toString", function() {
        return "[object Generator]";
      }), exports.keys = function(val) {
        var object = Object(val), keys = [];
        for (var key in object)
          keys.push(key);
        return keys.reverse(), function next() {
          for (; keys.length; ) {
            var key2 = keys.pop();
            if (key2 in object)
              return next.value = key2, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
            for (var name in this)
              "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
        },
        stop: function stop() {
          this.done = true;
          var rootRecord = this.tryEntries[0].completion;
          if ("throw" === rootRecord.type)
            throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done)
            throw exception;
          var context = this;
          function handle(loc, caught) {
            return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i], record = entry.completion;
            if ("root" === entry.tryLoc)
              return handle("end");
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
              } else {
                if (!hasFinally)
                  throw new Error("try statement without catch or finally");
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
          var record = finallyEntry ? finallyEntry.completion : {};
          return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if ("throw" === record.type)
            throw record.arg;
          return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc)
              return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if ("throw" === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc
          }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
        }
      }, exports;
    }
    module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorRuntime$1);
  return regeneratorRuntime$1.exports;
}
var regenerator;
var hasRequiredRegenerator;
function requireRegenerator() {
  if (hasRequiredRegenerator)
    return regenerator;
  hasRequiredRegenerator = 1;
  var runtime = requireRegeneratorRuntime()();
  regenerator = runtime;
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }
  return regenerator;
}
var hasRequiredEs$u;
function requireEs$u() {
  if (hasRequiredEs$u)
    return es$s;
  hasRequiredEs$u = 1;
  var _interopRequireDefault = interopRequireDefaultExports;
  Object.defineProperty(es$s, "__esModule", {
    value: true
  });
  es$s.isNodePattern = isNodePattern;
  es$s.throwError = throwError;
  es$s.scan = scan;
  es$s.scanIterator = scanIterator;
  var _regenerator = _interopRequireDefault(requireRegenerator());
  var _marked = /* @__PURE__ */ _regenerator["default"].mark(scanIterator);
  function isNodePattern(cb) {
    if (typeof cb === "undefined") {
      return false;
    }
    if (typeof cb !== "function") {
      throw new TypeError("Callback must be a function");
    }
    return true;
  }
  function throwError(error, cb) {
    if (typeof error === "string") {
      error = new Error(error);
    }
    if (typeof cb === "function") {
      return cb.call(this, error);
    }
    throw error;
  }
  function scan(image, x, y, w, h, f) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    for (var _y = y; _y < y + h; _y++) {
      for (var _x = x; _x < x + w; _x++) {
        var idx = image.bitmap.width * _y + _x << 2;
        f.call(image, _x, _y, idx);
      }
    }
    return image;
  }
  function scanIterator(image, x, y, w, h) {
    var _y, _x, idx;
    return _regenerator["default"].wrap(function scanIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            x = Math.round(x);
            y = Math.round(y);
            w = Math.round(w);
            h = Math.round(h);
            _y = y;
          case 5:
            if (!(_y < y + h)) {
              _context.next = 17;
              break;
            }
            _x = x;
          case 7:
            if (!(_x < x + w)) {
              _context.next = 14;
              break;
            }
            idx = image.bitmap.width * _y + _x << 2;
            _context.next = 11;
            return {
              x: _x,
              y: _y,
              idx,
              image
            };
          case 11:
            _x++;
            _context.next = 7;
            break;
          case 14:
            _y++;
            _context.next = 5;
            break;
          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  }
  return es$s;
}
var converter;
var hasRequiredConverter;
function requireConverter() {
  if (hasRequiredConverter)
    return converter;
  hasRequiredConverter = 1;
  function Converter(srcAlphabet, dstAlphabet) {
    if (!srcAlphabet || !dstAlphabet || !srcAlphabet.length || !dstAlphabet.length) {
      throw new Error("Bad alphabet");
    }
    this.srcAlphabet = srcAlphabet;
    this.dstAlphabet = dstAlphabet;
  }
  Converter.prototype.convert = function(number) {
    var i, divide, newlen, numberMap = {}, fromBase = this.srcAlphabet.length, toBase = this.dstAlphabet.length, length = number.length, result = typeof number === "string" ? "" : [];
    if (!this.isValid(number)) {
      throw new Error('Number "' + number + '" contains of non-alphabetic digits (' + this.srcAlphabet + ")");
    }
    if (this.srcAlphabet === this.dstAlphabet) {
      return number;
    }
    for (i = 0; i < length; i++) {
      numberMap[i] = this.srcAlphabet.indexOf(number[i]);
    }
    do {
      divide = 0;
      newlen = 0;
      for (i = 0; i < length; i++) {
        divide = divide * fromBase + numberMap[i];
        if (divide >= toBase) {
          numberMap[newlen++] = parseInt(divide / toBase, 10);
          divide = divide % toBase;
        } else if (newlen > 0) {
          numberMap[newlen++] = 0;
        }
      }
      length = newlen;
      result = this.dstAlphabet.slice(divide, divide + 1).concat(result);
    } while (newlen !== 0);
    return result;
  };
  Converter.prototype.isValid = function(number) {
    var i = 0;
    for (; i < number.length; ++i) {
      if (this.srcAlphabet.indexOf(number[i]) === -1) {
        return false;
      }
    }
    return true;
  };
  converter = Converter;
  return converter;
}
var anyBase_1;
var hasRequiredAnyBase;
function requireAnyBase() {
  if (hasRequiredAnyBase)
    return anyBase_1;
  hasRequiredAnyBase = 1;
  var Converter = requireConverter();
  function anyBase(srcAlphabet, dstAlphabet) {
    var converter2 = new Converter(srcAlphabet, dstAlphabet);
    return function(number) {
      return converter2.convert(number);
    };
  }
  anyBase.BIN = "01";
  anyBase.OCT = "01234567";
  anyBase.DEC = "0123456789";
  anyBase.HEX = "0123456789abcdef";
  anyBase_1 = anyBase;
  return anyBase_1;
}
var mkdirp;
var hasRequiredMkdirp;
function requireMkdirp() {
  if (hasRequiredMkdirp)
    return mkdirp;
  hasRequiredMkdirp = 1;
  var path = require$$3;
  var fs = require$$3;
  var _0777 = parseInt("0777", 8);
  mkdirp = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;
  function mkdirP(p, opts, f, made) {
    if (typeof opts === "function") {
      f = opts;
      opts = {};
    } else if (!opts || typeof opts !== "object") {
      opts = { mode: opts };
    }
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    if (mode === void 0) {
      mode = _0777;
    }
    if (!made)
      made = null;
    var cb = f || /* istanbul ignore next */
    function() {
    };
    p = path.resolve(p);
    xfs.mkdir(p, mode, function(er) {
      if (!er) {
        made = made || p;
        return cb(null, made);
      }
      switch (er.code) {
        case "ENOENT":
          if (path.dirname(p) === p)
            return cb(er);
          mkdirP(path.dirname(p), opts, function(er2, made2) {
            if (er2)
              cb(er2, made2);
            else
              mkdirP(p, opts, cb, made2);
          });
          break;
        default:
          xfs.stat(p, function(er2, stat) {
            if (er2 || !stat.isDirectory())
              cb(er, made);
            else
              cb(null, made);
          });
          break;
      }
    });
  }
  mkdirP.sync = function sync(p, opts, made) {
    if (!opts || typeof opts !== "object") {
      opts = { mode: opts };
    }
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    if (mode === void 0) {
      mode = _0777;
    }
    if (!made)
      made = null;
    p = path.resolve(p);
    try {
      xfs.mkdirSync(p, mode);
      made = made || p;
    } catch (err0) {
      switch (err0.code) {
        case "ENOENT":
          made = sync(path.dirname(p), opts, made);
          sync(p, opts, made);
          break;
        default:
          var stat;
          try {
            stat = xfs.statSync(p);
          } catch (err1) {
            throw err0;
          }
          if (!stat.isDirectory())
            throw err0;
          break;
      }
    }
    return made;
  };
  return mkdirp;
}
var pixelmatch_1;
var hasRequiredPixelmatch;
function requirePixelmatch() {
  if (hasRequiredPixelmatch)
    return pixelmatch_1;
  hasRequiredPixelmatch = 1;
  pixelmatch_1 = pixelmatch;
  function pixelmatch(img1, img2, output, width, height, options) {
    if (!options)
      options = {};
    var threshold = options.threshold === void 0 ? 0.1 : options.threshold;
    var maxDelta = 35215 * threshold * threshold, diff = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var pos = (y * width + x) * 4;
        var delta = colorDelta(img1, img2, pos, pos);
        if (delta > maxDelta) {
          if (!options.includeAA && (antialiased(img1, x, y, width, height, img2) || antialiased(img2, x, y, width, height, img1))) {
            if (output)
              drawPixel(output, pos, 255, 255, 0);
          } else {
            if (output)
              drawPixel(output, pos, 255, 0, 0);
            diff++;
          }
        } else if (output) {
          var val = blend(grayPixel(img1, pos), 0.1);
          drawPixel(output, pos, val, val, val);
        }
      }
    }
    return diff;
  }
  function antialiased(img, x1, y1, width, height, img2) {
    var x0 = Math.max(x1 - 1, 0), y0 = Math.max(y1 - 1, 0), x2 = Math.min(x1 + 1, width - 1), y2 = Math.min(y1 + 1, height - 1), pos = (y1 * width + x1) * 4, zeroes = 0, positives = 0, negatives = 0, min = 0, max = 0, minX, minY, maxX, maxY;
    for (var x = x0; x <= x2; x++) {
      for (var y = y0; y <= y2; y++) {
        if (x === x1 && y === y1)
          continue;
        var delta = colorDelta(img, img, pos, (y * width + x) * 4, true);
        if (delta === 0)
          zeroes++;
        else if (delta < 0)
          negatives++;
        else if (delta > 0)
          positives++;
        if (zeroes > 2)
          return false;
        if (!img2)
          continue;
        if (delta < min) {
          min = delta;
          minX = x;
          minY = y;
        }
        if (delta > max) {
          max = delta;
          maxX = x;
          maxY = y;
        }
      }
    }
    if (!img2)
      return true;
    if (negatives === 0 || positives === 0)
      return false;
    return !antialiased(img, minX, minY, width, height) && !antialiased(img2, minX, minY, width, height) || !antialiased(img, maxX, maxY, width, height) && !antialiased(img2, maxX, maxY, width, height);
  }
  function colorDelta(img1, img2, k, m, yOnly) {
    var a1 = img1[k + 3] / 255, a2 = img2[m + 3] / 255, r1 = blend(img1[k + 0], a1), g1 = blend(img1[k + 1], a1), b1 = blend(img1[k + 2], a1), r2 = blend(img2[m + 0], a2), g2 = blend(img2[m + 1], a2), b2 = blend(img2[m + 2], a2), y = rgb2y(r1, g1, b1) - rgb2y(r2, g2, b2);
    if (yOnly)
      return y;
    var i = rgb2i(r1, g1, b1) - rgb2i(r2, g2, b2), q = rgb2q(r1, g1, b1) - rgb2q(r2, g2, b2);
    return 0.5053 * y * y + 0.299 * i * i + 0.1957 * q * q;
  }
  function rgb2y(r, g, b) {
    return r * 0.29889531 + g * 0.58662247 + b * 0.11448223;
  }
  function rgb2i(r, g, b) {
    return r * 0.59597799 - g * 0.2741761 - b * 0.32180189;
  }
  function rgb2q(r, g, b) {
    return r * 0.21147017 - g * 0.52261711 + b * 0.31114694;
  }
  function blend(c, a) {
    return 255 + (c - 255) * a;
  }
  function drawPixel(output, pos, r, g, b) {
    output[pos + 0] = r;
    output[pos + 1] = g;
    output[pos + 2] = b;
    output[pos + 3] = 255;
  }
  function grayPixel(img, i) {
    var a = img[i + 3] / 255, r = blend(img[i + 0], a), g = blend(img[i + 1], a), b = blend(img[i + 2], a);
    return rgb2y(r, g, b);
  }
  return pixelmatch_1;
}
var tinycolor = { exports: {} };
var hasRequiredTinycolor;
function requireTinycolor() {
  if (hasRequiredTinycolor)
    return tinycolor.exports;
  hasRequiredTinycolor = 1;
  (function(module) {
    (function(Math2) {
      var trimLeft = /^\s+/, trimRight = /\s+$/, tinyCounter = 0, mathRound = Math2.round, mathMin = Math2.min, mathMax = Math2.max, mathRandom = Math2.random;
      function tinycolor2(color, opts) {
        color = color ? color : "";
        opts = opts || {};
        if (color instanceof tinycolor2) {
          return color;
        }
        if (!(this instanceof tinycolor2)) {
          return new tinycolor2(color, opts);
        }
        var rgb = inputToRGB(color);
        this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
        this._gradientType = opts.gradientType;
        if (this._r < 1) {
          this._r = mathRound(this._r);
        }
        if (this._g < 1) {
          this._g = mathRound(this._g);
        }
        if (this._b < 1) {
          this._b = mathRound(this._b);
        }
        this._ok = rgb.ok;
        this._tc_id = tinyCounter++;
      }
      tinycolor2.prototype = {
        isDark: function() {
          return this.getBrightness() < 128;
        },
        isLight: function() {
          return !this.isDark();
        },
        isValid: function() {
          return this._ok;
        },
        getOriginalInput: function() {
          return this._originalInput;
        },
        getFormat: function() {
          return this._format;
        },
        getAlpha: function() {
          return this._a;
        },
        getBrightness: function() {
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
        },
        getLuminance: function() {
          var rgb = this.toRgb();
          var RsRGB, GsRGB, BsRGB, R, G, B;
          RsRGB = rgb.r / 255;
          GsRGB = rgb.g / 255;
          BsRGB = rgb.b / 255;
          if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
          } else {
            R = Math2.pow((RsRGB + 0.055) / 1.055, 2.4);
          }
          if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
          } else {
            G = Math2.pow((GsRGB + 0.055) / 1.055, 2.4);
          }
          if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
          } else {
            B = Math2.pow((BsRGB + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * R + 0.7152 * G + 0.0722 * B;
        },
        setAlpha: function(value) {
          this._a = boundAlpha(value);
          this._roundA = mathRound(100 * this._a) / 100;
          return this;
        },
        toHsv: function() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
        },
        toHsvString: function() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
          return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
        },
        toHslString: function() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
          return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
        },
        toHex: function(allow3Char) {
          return rgbToHex(this._r, this._g, this._b, allow3Char);
        },
        toHexString: function(allow3Char) {
          return "#" + this.toHex(allow3Char);
        },
        toHex8: function(allow4Char) {
          return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
        },
        toHex8String: function(allow4Char) {
          return "#" + this.toHex8(allow4Char);
        },
        toRgb: function() {
          return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
        },
        toRgbString: function() {
          return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
          return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          if (this._a === 0) {
            return "transparent";
          }
          if (this._a < 1) {
            return false;
          }
          return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(secondColor) {
          var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
          var secondHex8String = hex8String;
          var gradientType = this._gradientType ? "GradientType = 1, " : "";
          if (secondColor) {
            var s = tinycolor2(secondColor);
            secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
        },
        toString: function(format) {
          var formatSet = !!format;
          format = format || this._format;
          var formattedString = false;
          var hasAlpha = this._a < 1 && this._a >= 0;
          var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
          if (needsAlphaFormat) {
            if (format === "name" && this._a === 0) {
              return this.toName();
            }
            return this.toRgbString();
          }
          if (format === "rgb") {
            formattedString = this.toRgbString();
          }
          if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
          }
          if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
          }
          if (format === "hex3") {
            formattedString = this.toHexString(true);
          }
          if (format === "hex4") {
            formattedString = this.toHex8String(true);
          }
          if (format === "hex8") {
            formattedString = this.toHex8String();
          }
          if (format === "name") {
            formattedString = this.toName();
          }
          if (format === "hsl") {
            formattedString = this.toHslString();
          }
          if (format === "hsv") {
            formattedString = this.toHsvString();
          }
          return formattedString || this.toHexString();
        },
        clone: function() {
          return tinycolor2(this.toString());
        },
        _applyModification: function(fn, args) {
          var color = fn.apply(null, [this].concat([].slice.call(args)));
          this._r = color._r;
          this._g = color._g;
          this._b = color._b;
          this.setAlpha(color._a);
          return this;
        },
        lighten: function() {
          return this._applyModification(lighten, arguments);
        },
        brighten: function() {
          return this._applyModification(brighten, arguments);
        },
        darken: function() {
          return this._applyModification(darken, arguments);
        },
        desaturate: function() {
          return this._applyModification(desaturate, arguments);
        },
        saturate: function() {
          return this._applyModification(saturate, arguments);
        },
        greyscale: function() {
          return this._applyModification(greyscale, arguments);
        },
        spin: function() {
          return this._applyModification(spin, arguments);
        },
        _applyCombination: function(fn, args) {
          return fn.apply(null, [this].concat([].slice.call(args)));
        },
        analogous: function() {
          return this._applyCombination(analogous, arguments);
        },
        complement: function() {
          return this._applyCombination(complement, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(monochromatic, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(splitcomplement, arguments);
        },
        triad: function() {
          return this._applyCombination(triad, arguments);
        },
        tetrad: function() {
          return this._applyCombination(tetrad, arguments);
        }
      };
      tinycolor2.fromRatio = function(color, opts) {
        if (typeof color == "object") {
          var newColor = {};
          for (var i in color) {
            if (color.hasOwnProperty(i)) {
              if (i === "a") {
                newColor[i] = color[i];
              } else {
                newColor[i] = convertToPercentage(color[i]);
              }
            }
          }
          color = newColor;
        }
        return tinycolor2(color, opts);
      };
      function inputToRGB(color) {
        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var s = null;
        var v = null;
        var l = null;
        var ok = false;
        var format = false;
        if (typeof color == "string") {
          color = stringInputToObject(color);
        }
        if (typeof color == "object") {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
          }
          if (color.hasOwnProperty("a")) {
            a = color.a;
          }
        }
        a = boundAlpha(a);
        return {
          ok,
          format: color.format || format,
          r: mathMin(255, mathMax(rgb.r, 0)),
          g: mathMin(255, mathMax(rgb.g, 0)),
          b: mathMin(255, mathMax(rgb.b, 0)),
          a
        };
      }
      function rgbToRgb(r, g, b) {
        return {
          r: bound01(r, 255) * 255,
          g: bound01(g, 255) * 255,
          b: bound01(b, 255) * 255
        };
      }
      function rgbToHsl(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
          h = s = 0;
        } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
        return { h, s, l };
      }
      function hslToRgb(h, s, l) {
        var r, g, b;
        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);
        function hue2rgb(p2, q2, t) {
          if (t < 0)
            t += 1;
          if (t > 1)
            t -= 1;
          if (t < 1 / 6)
            return p2 + (q2 - p2) * 6 * t;
          if (t < 1 / 2)
            return q2;
          if (t < 2 / 3)
            return p2 + (q2 - p2) * (2 / 3 - t) * 6;
          return p2;
        }
        if (s === 0) {
          r = g = b = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }
        return { r: r * 255, g: g * 255, b: b * 255 };
      }
      function rgbToHsv(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max == min) {
          h = 0;
        } else {
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
        return { h, s, v };
      }
      function hsvToRgb(h, s, v) {
        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);
        var i = Math2.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
        return { r: r * 255, g: g * 255, b: b * 255 };
      }
      function rgbToHex(r, g, b, allow3Char) {
        var hex = [
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16))
        ];
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }
        return hex.join("");
      }
      function rgbaToHex(r, g, b, a, allow4Char) {
        var hex = [
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16)),
          pad2(convertDecimalToHex(a))
        ];
        if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
        }
        return hex.join("");
      }
      function rgbaToArgbHex(r, g, b, a) {
        var hex = [
          pad2(convertDecimalToHex(a)),
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16))
        ];
        return hex.join("");
      }
      tinycolor2.equals = function(color1, color2) {
        if (!color1 || !color2) {
          return false;
        }
        return tinycolor2(color1).toRgbString() == tinycolor2(color2).toRgbString();
      };
      tinycolor2.random = function() {
        return tinycolor2.fromRatio({
          r: mathRandom(),
          g: mathRandom(),
          b: mathRandom()
        });
      };
      function desaturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor2(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor2(hsl);
      }
      function saturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor2(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor2(hsl);
      }
      function greyscale(color) {
        return tinycolor2(color).desaturate(100);
      }
      function lighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor2(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor2(hsl);
      }
      function brighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var rgb = tinycolor2(color).toRgb();
        rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
        rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
        rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
        return tinycolor2(rgb);
      }
      function darken(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor2(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor2(hsl);
      }
      function spin(color, amount) {
        var hsl = tinycolor2(color).toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return tinycolor2(hsl);
      }
      function complement(color) {
        var hsl = tinycolor2(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor2(hsl);
      }
      function triad(color) {
        var hsl = tinycolor2(color).toHsl();
        var h = hsl.h;
        return [
          tinycolor2(color),
          tinycolor2({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
          tinycolor2({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
        ];
      }
      function tetrad(color) {
        var hsl = tinycolor2(color).toHsl();
        var h = hsl.h;
        return [
          tinycolor2(color),
          tinycolor2({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
          tinycolor2({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
          tinycolor2({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
        ];
      }
      function splitcomplement(color) {
        var hsl = tinycolor2(color).toHsl();
        var h = hsl.h;
        return [
          tinycolor2(color),
          tinycolor2({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
          tinycolor2({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
        ];
      }
      function analogous(color, results, slices) {
        results = results || 6;
        slices = slices || 30;
        var hsl = tinycolor2(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor2(color)];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(tinycolor2(hsl));
        }
        return ret;
      }
      function monochromatic(color, results) {
        results = results || 6;
        var hsv = tinycolor2(color).toHsv();
        var h = hsv.h, s = hsv.s, v = hsv.v;
        var ret = [];
        var modification = 1 / results;
        while (results--) {
          ret.push(tinycolor2({ h, s, v }));
          v = (v + modification) % 1;
        }
        return ret;
      }
      tinycolor2.mix = function(color1, color2, amount) {
        amount = amount === 0 ? 0 : amount || 50;
        var rgb1 = tinycolor2(color1).toRgb();
        var rgb2 = tinycolor2(color2).toRgb();
        var p = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p + rgb1.r,
          g: (rgb2.g - rgb1.g) * p + rgb1.g,
          b: (rgb2.b - rgb1.b) * p + rgb1.b,
          a: (rgb2.a - rgb1.a) * p + rgb1.a
        };
        return tinycolor2(rgba);
      };
      tinycolor2.readability = function(color1, color2) {
        var c1 = tinycolor2(color1);
        var c2 = tinycolor2(color2);
        return (Math2.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math2.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
      };
      tinycolor2.isReadable = function(color1, color2, wcag2) {
        var readability = tinycolor2.readability(color1, color2);
        var wcag2Parms, out;
        out = false;
        wcag2Parms = validateWCAG2Parms(wcag2);
        switch (wcag2Parms.level + wcag2Parms.size) {
          case "AAsmall":
          case "AAAlarge":
            out = readability >= 4.5;
            break;
          case "AAlarge":
            out = readability >= 3;
            break;
          case "AAAsmall":
            out = readability >= 7;
            break;
        }
        return out;
      };
      tinycolor2.mostReadable = function(baseColor, colorList, args) {
        var bestColor = null;
        var bestScore = 0;
        var readability;
        var includeFallbackColors, level, size;
        args = args || {};
        includeFallbackColors = args.includeFallbackColors;
        level = args.level;
        size = args.size;
        for (var i = 0; i < colorList.length; i++) {
          readability = tinycolor2.readability(baseColor, colorList[i]);
          if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor2(colorList[i]);
          }
        }
        if (tinycolor2.isReadable(baseColor, bestColor, { "level": level, "size": size }) || !includeFallbackColors) {
          return bestColor;
        } else {
          args.includeFallbackColors = false;
          return tinycolor2.mostReadable(baseColor, ["#fff", "#000"], args);
        }
      };
      var names = tinycolor2.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
      };
      var hexNames = tinycolor2.hexNames = flip(names);
      function flip(o) {
        var flipped = {};
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
          }
        }
        return flipped;
      }
      function boundAlpha(a) {
        a = parseFloat(a);
        if (isNaN(a) || a < 0 || a > 1) {
          a = 1;
        }
        return a;
      }
      function bound01(n, max) {
        if (isOnePointZero(n)) {
          n = "100%";
        }
        var processPercent = isPercentage(n);
        n = mathMin(max, mathMax(0, parseFloat(n)));
        if (processPercent) {
          n = parseInt(n * max, 10) / 100;
        }
        if (Math2.abs(n - max) < 1e-6) {
          return 1;
        }
        return n % max / parseFloat(max);
      }
      function clamp01(val) {
        return mathMin(1, mathMax(0, val));
      }
      function parseIntFromHex(val) {
        return parseInt(val, 16);
      }
      function isOnePointZero(n) {
        return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
      }
      function isPercentage(n) {
        return typeof n === "string" && n.indexOf("%") != -1;
      }
      function pad2(c) {
        return c.length == 1 ? "0" + c : "" + c;
      }
      function convertToPercentage(n) {
        if (n <= 1) {
          n = n * 100 + "%";
        }
        return n;
      }
      function convertDecimalToHex(d) {
        return Math2.round(parseFloat(d) * 255).toString(16);
      }
      function convertHexToDecimal(h) {
        return parseIntFromHex(h) / 255;
      }
      var matchers = function() {
        var CSS_INTEGER = "[-\\+]?\\d+%?";
        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(CSS_UNIT),
          rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
          rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
          hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
          hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
          hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
          hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      }();
      function isValidCSSUnit(color) {
        return !!matchers.CSS_UNIT.exec(color);
      }
      function stringInputToObject(color) {
        color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
        var named = false;
        if (names[color]) {
          color = names[color];
          named = true;
        } else if (color == "transparent") {
          return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }
        var match;
        if (match = matchers.rgb.exec(color)) {
          return { r: match[1], g: match[2], b: match[3] };
        }
        if (match = matchers.rgba.exec(color)) {
          return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        if (match = matchers.hsl.exec(color)) {
          return { h: match[1], s: match[2], l: match[3] };
        }
        if (match = matchers.hsla.exec(color)) {
          return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        if (match = matchers.hsv.exec(color)) {
          return { h: match[1], s: match[2], v: match[3] };
        }
        if (match = matchers.hsva.exec(color)) {
          return { h: match[1], s: match[2], v: match[3], a: match[4] };
        }
        if (match = matchers.hex8.exec(color)) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
          };
        }
        if (match = matchers.hex6.exec(color)) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
          };
        }
        if (match = matchers.hex4.exec(color)) {
          return {
            r: parseIntFromHex(match[1] + "" + match[1]),
            g: parseIntFromHex(match[2] + "" + match[2]),
            b: parseIntFromHex(match[3] + "" + match[3]),
            a: convertHexToDecimal(match[4] + "" + match[4]),
            format: named ? "name" : "hex8"
          };
        }
        if (match = matchers.hex3.exec(color)) {
          return {
            r: parseIntFromHex(match[1] + "" + match[1]),
            g: parseIntFromHex(match[2] + "" + match[2]),
            b: parseIntFromHex(match[3] + "" + match[3]),
            format: named ? "name" : "hex"
          };
        }
        return false;
      }
      function validateWCAG2Parms(parms) {
        var level, size;
        parms = parms || { "level": "AA", "size": "small" };
        level = (parms.level || "AA").toUpperCase();
        size = (parms.size || "small").toLowerCase();
        if (level !== "AA" && level !== "AAA") {
          level = "AA";
        }
        if (size !== "small" && size !== "large") {
          size = "small";
        }
        return { "level": level, "size": size };
      }
      if (module.exports) {
        module.exports = tinycolor2;
      } else {
        window.tinycolor = tinycolor2;
      }
    })(Math);
  })(tinycolor);
  return tinycolor.exports;
}
var phash;
var hasRequiredPhash;
function requirePhash() {
  if (hasRequiredPhash)
    return phash;
  hasRequiredPhash = 1;
  function ImagePHash(size, smallerSize) {
    this.size = this.size || size;
    this.smallerSize = this.smallerSize || smallerSize;
    initCoefficients(this.size);
  }
  ImagePHash.prototype.size = 32;
  ImagePHash.prototype.smallerSize = 8;
  ImagePHash.prototype.distance = function(s1, s2) {
    var counter = 0;
    for (var k = 0; k < s1.length; k++) {
      if (s1[k] !== s2[k]) {
        counter++;
      }
    }
    return counter / s1.length;
  };
  ImagePHash.prototype.getHash = function(img) {
    img = img.clone().resize(this.size, this.size);
    img.grayscale();
    var vals = [];
    for (var x = 0; x < img.bitmap.width; x++) {
      vals[x] = [];
      for (var y = 0; y < img.bitmap.height; y++) {
        vals[x][y] = intToRGBA(img.getPixelColor(x, y)).b;
      }
    }
    var dctVals = applyDCT(vals, this.size);
    var total = 0;
    for (var _x = 0; _x < this.smallerSize; _x++) {
      for (var _y = 0; _y < this.smallerSize; _y++) {
        total += dctVals[_x][_y];
      }
    }
    var avg = total / (this.smallerSize * this.smallerSize);
    var hash = "";
    for (var _x2 = 0; _x2 < this.smallerSize; _x2++) {
      for (var _y2 = 0; _y2 < this.smallerSize; _y2++) {
        hash += dctVals[_x2][_y2] > avg ? "1" : "0";
      }
    }
    return hash;
  };
  function intToRGBA(i) {
    var rgba = {};
    rgba.r = Math.floor(i / Math.pow(256, 3));
    rgba.g = Math.floor((i - rgba.r * Math.pow(256, 3)) / Math.pow(256, 2));
    rgba.b = Math.floor((i - rgba.r * Math.pow(256, 3) - rgba.g * Math.pow(256, 2)) / Math.pow(256, 1));
    rgba.a = Math.floor((i - rgba.r * Math.pow(256, 3) - rgba.g * Math.pow(256, 2) - rgba.b * Math.pow(256, 1)) / Math.pow(256, 0));
    return rgba;
  }
  var c = [];
  function initCoefficients(size) {
    for (var i = 1; i < size; i++) {
      c[i] = 1;
    }
    c[0] = 1 / Math.sqrt(2);
  }
  function applyDCT(f, size) {
    var N = size;
    var F = [];
    for (var u = 0; u < N; u++) {
      F[u] = [];
      for (var v = 0; v < N; v++) {
        var sum = 0;
        for (var i = 0; i < N; i++) {
          for (var j = 0; j < N; j++) {
            sum += Math.cos((2 * i + 1) / (2 * N) * u * Math.PI) * Math.cos((2 * j + 1) / (2 * N) * v * Math.PI) * f[i][j];
          }
        }
        sum *= c[u] * c[v] / 4;
        F[u][v] = sum;
      }
    }
    return F;
  }
  phash = ImagePHash;
  return phash;
}
var request = { exports: {} };
var _extends = { exports: {} };
var hasRequired_extends;
function require_extends() {
  if (hasRequired_extends)
    return _extends.exports;
  hasRequired_extends = 1;
  (function(module) {
    function _extends2() {
      module.exports = _extends2 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _extends2.apply(this, arguments);
    }
    module.exports = _extends2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(_extends);
  return _extends.exports;
}
var url = {};
var punycode = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
punycode.exports;
var hasRequiredPunycode;
function requirePunycode() {
  if (hasRequiredPunycode)
    return punycode.exports;
  hasRequiredPunycode = 1;
  (function(module, exports) {
    (function(root) {
      var freeExports = exports && !exports.nodeType && exports;
      var freeModule = module && !module.nodeType && module;
      var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
        root = freeGlobal;
      }
      var punycode2, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
      function error(type) {
        throw RangeError(errors[type]);
      }
      function map(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          string = parts[1];
        }
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
      }
      function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      function ucs2encode(array) {
        return map(array, function(value) {
          var output = "";
          if (value > 65535) {
            value -= 65536;
            output += stringFromCharCode(value >>> 10 & 1023 | 55296);
            value = 56320 | value & 1023;
          }
          output += stringFromCharCode(value);
          return output;
        }).join("");
      }
      function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      }
      function digitToBasic(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }
      function decode2(input) {
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index2, oldi, w, k, digit, t, baseMinusT;
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) {
            error("not-basic");
          }
          output.push(input.charCodeAt(j));
        }
        for (index2 = basic > 0 ? basic + 1 : 0; index2 < inputLength; ) {
          for (oldi = i, w = 1, k = base; ; k += base) {
            if (index2 >= inputLength) {
              error("invalid-input");
            }
            digit = basicToDigit(input.charCodeAt(index2++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error("overflow");
            }
            i += digit * w;
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error("overflow");
            }
            w *= baseMinusT;
          }
          out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor(i / out) > maxInt - n) {
            error("overflow");
          }
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return ucs2encode(output);
      }
      function encode2(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
        input = ucs2decode(input);
        inputLength = input.length;
        n = initialN;
        delta = 0;
        bias = initialBias;
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < 128) {
            output.push(stringFromCharCode(currentValue));
          }
        }
        handledCPCount = basicLength = output.length;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          for (m = maxInt, j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error("overflow");
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < n && ++delta > maxInt) {
              error("overflow");
            }
            if (currentValue == n) {
              for (q = delta, k = base; ; k += base) {
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) {
                  break;
                }
                qMinusT = q - t;
                baseMinusT = base - t;
                output.push(
                  stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
                );
                q = floor(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      }
      function toUnicode(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode2(string.slice(4).toLowerCase()) : string;
        });
      }
      function toASCII(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode2(string) : string;
        });
      }
      punycode2 = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        "version": "1.3.2",
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        "ucs2": {
          "decode": ucs2decode,
          "encode": ucs2encode
        },
        "decode": decode2,
        "encode": encode2,
        "toASCII": toASCII,
        "toUnicode": toUnicode
      };
      if (freeExports && freeModule) {
        if (module.exports == freeExports) {
          freeModule.exports = punycode2;
        } else {
          for (key in punycode2) {
            punycode2.hasOwnProperty(key) && (freeExports[key] = punycode2[key]);
          }
        }
      } else {
        root.punycode = punycode2;
      }
    })(commonjsGlobal);
  })(punycode, punycode.exports);
  return punycode.exports;
}
var util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil)
    return util;
  hasRequiredUtil = 1;
  util = {
    isString: function(arg) {
      return typeof arg === "string";
    },
    isObject: function(arg) {
      return typeof arg === "object" && arg !== null;
    },
    isNull: function(arg) {
      return arg === null;
    },
    isNullOrUndefined: function(arg) {
      return arg == null;
    }
  };
  return util;
}
var querystring = {};
var decode;
var hasRequiredDecode;
function requireDecode() {
  if (hasRequiredDecode)
    return decode;
  hasRequiredDecode = 1;
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  decode = function(qs, sep, eq, options) {
    sep = sep || "&";
    eq = eq || "=";
    var obj = {};
    if (typeof qs !== "string" || qs.length === 0) {
      return obj;
    }
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1e3;
    if (options && typeof options.maxKeys === "number") {
      maxKeys = options.maxKeys;
    }
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = "";
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
    return obj;
  };
  return decode;
}
var encode;
var hasRequiredEncode;
function requireEncode() {
  if (hasRequiredEncode)
    return encode;
  hasRequiredEncode = 1;
  var stringifyPrimitive = function(v) {
    switch (typeof v) {
      case "string":
        return v;
      case "boolean":
        return v ? "true" : "false";
      case "number":
        return isFinite(v) ? v : "";
      default:
        return "";
    }
  };
  encode = function(obj, sep, eq, name) {
    sep = sep || "&";
    eq = eq || "=";
    if (obj === null) {
      obj = void 0;
    }
    if (typeof obj === "object") {
      return Object.keys(obj).map(function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }
    if (!name)
      return "";
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };
  return encode;
}
var hasRequiredQuerystring;
function requireQuerystring() {
  if (hasRequiredQuerystring)
    return querystring;
  hasRequiredQuerystring = 1;
  querystring.decode = querystring.parse = requireDecode();
  querystring.encode = querystring.stringify = requireEncode();
  return querystring;
}
var hasRequiredUrl;
function requireUrl() {
  if (hasRequiredUrl)
    return url;
  hasRequiredUrl = 1;
  var punycode2 = requirePunycode();
  var util2 = requireUtil();
  url.parse = urlParse;
  url.resolve = urlResolve;
  url.resolveObject = urlResolveObject;
  url.format = urlFormat;
  url.Url = Url;
  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
    "javascript": true,
    "javascript:": true
  }, hostlessProtocol = {
    "javascript": true,
    "javascript:": true
  }, slashedProtocol = {
    "http": true,
    "https": true,
    "ftp": true,
    "gopher": true,
    "file": true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  }, querystring2 = requireQuerystring();
  function urlParse(url2, parseQueryString, slashesDenoteHost) {
    if (url2 && util2.isObject(url2) && url2 instanceof Url)
      return url2;
    var u = new Url();
    u.parse(url2, parseQueryString, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url2, parseQueryString, slashesDenoteHost) {
    if (!util2.isString(url2)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url2);
    }
    var queryIndex = url2.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url2.indexOf("#") ? "?" : "#", uSplit = url2.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, "/");
    url2 = uSplit.join(splitter);
    var rest = url2;
    rest = rest.trim();
    if (!slashesDenoteHost && url2.split("#").length === 1) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring2.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = "";
          this.query = {};
        }
        return this;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === "//";
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      var auth, atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf("@");
      } else {
        atSign = rest.lastIndexOf("@", hostEnd);
      }
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      if (hostEnd === -1)
        hostEnd = rest.length;
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      this.parseHost();
      this.hostname = this.hostname || "";
      var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part)
            continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = "";
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                newpart += "x";
              } else {
                newpart += part[j];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = "/" + notHost.join(".") + rest;
              }
              this.hostname = validParts.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = "";
      } else {
        this.hostname = this.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        this.hostname = punycode2.toASCII(this.hostname);
      }
      var p = this.port ? ":" + this.port : "";
      var h = this.hostname || "";
      this.host = h + p;
      this.href += this.host;
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== "/") {
          rest = "/" + rest;
        }
      }
    }
    if (!unsafeProtocol[lowerProto]) {
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1)
          continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }
    var hash = rest.indexOf("#");
    if (hash !== -1) {
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring2.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      this.search = "";
      this.query = {};
    }
    if (rest)
      this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = "/";
    }
    if (this.pathname || this.search) {
      var p = this.pathname || "";
      var s = this.search || "";
      this.path = p + s;
    }
    this.href = this.format();
    return this;
  };
  function urlFormat(obj) {
    if (util2.isString(obj))
      obj = urlParse(obj);
    if (!(obj instanceof Url))
      return Url.prototype.format.call(obj);
    return obj.format();
  }
  Url.prototype.format = function() {
    var auth = this.auth || "";
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ":");
      auth += "@";
    }
    var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
      if (this.port) {
        host += ":" + this.port;
      }
    }
    if (this.query && util2.isObject(this.query) && Object.keys(this.query).length) {
      query = querystring2.stringify(this.query);
    }
    var search = this.search || query && "?" + query || "";
    if (protocol && protocol.substr(-1) !== ":")
      protocol += ":";
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = "//" + (host || "");
      if (pathname && pathname.charAt(0) !== "/")
        pathname = "/" + pathname;
    } else if (!host) {
      host = "";
    }
    if (hash && hash.charAt(0) !== "#")
      hash = "#" + hash;
    if (search && search.charAt(0) !== "?")
      search = "?" + search;
    pathname = pathname.replace(/[?#]/g, function(match) {
      return encodeURIComponent(match);
    });
    search = search.replace("#", "%23");
    return protocol + host + pathname + search + hash;
  };
  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }
  Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  function urlResolveObject(source, relative) {
    if (!source)
      return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }
  Url.prototype.resolveObject = function(relative) {
    if (util2.isString(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }
    result.hash = relative.hash;
    if (relative.href === "") {
      result.href = result.format();
      return result;
    }
    if (relative.slashes && !relative.protocol) {
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== "protocol")
          result[rkey] = relative[rkey];
      }
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = "/";
      }
      result.href = result.format();
      return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }
      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || "").split("/");
        while (relPath.length && !(relative.host = relPath.shift()))
          ;
        if (!relative.host)
          relative.host = "";
        if (!relative.hostname)
          relative.hostname = "";
        if (relPath[0] !== "")
          relPath.unshift("");
        if (relPath.length < 2)
          relPath.unshift("");
        result.pathname = relPath.join("/");
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || "";
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      if (result.pathname || result.search) {
        var p = result.pathname || "";
        var s = result.search || "";
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
    if (psychotic) {
      result.hostname = "";
      result.port = null;
      if (result.host) {
        if (srcPath[0] === "")
          srcPath[0] = result.host;
        else
          srcPath.unshift(result.host);
      }
      result.host = "";
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === "")
            relPath[0] = relative.host;
          else
            relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }
    if (isRelAbs) {
      result.host = relative.host || relative.host === "" ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
      if (!srcPath)
        srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!util2.isNullOrUndefined(relative.search)) {
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      if (!util2.isNull(result.pathname) || !util2.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      result.pathname = null;
      if (result.search) {
        result.path = "/" + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === ".") {
        srcPath.splice(i, 1);
      } else if (last === "..") {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift("..");
      }
    }
    if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
      srcPath.unshift("");
    }
    if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
      srcPath.push("");
    }
    var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
      var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift("");
    }
    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join("/");
    }
    if (!util2.isNull(result.pathname) || !util2.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ":") {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host)
      this.hostname = host;
  };
  return url;
}
var phin_compiled;
var hasRequiredPhin_compiled;
function requirePhin_compiled() {
  if (hasRequiredPhin_compiled)
    return phin_compiled;
  hasRequiredPhin_compiled = 1;
  var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var http = require$$3;
  var https = require$$3;
  var url2 = requireUrl();
  var qs = requireQuerystring();
  var zlib = require$$3;
  var util2 = require$$3;
  var phin = function phin2(opts, cb) {
    if (typeof opts !== "string") {
      if (!opts.hasOwnProperty("url")) {
        throw new Error("Missing url option from options for request method.");
      }
    }
    var addr = (typeof opts === "undefined" ? "undefined" : _typeof2(opts)) === "object" ? url2.parse(opts.url) : url2.parse(opts);
    var options = { "hostname": addr.hostname, "port": addr.port || (addr.protocol.toLowerCase() === "http:" ? 80 : 443), "path": addr.path, "method": "GET", "headers": {}, "auth": addr.auth || null, "parse": "none", "stream": false };
    if ((typeof opts === "undefined" ? "undefined" : _typeof2(opts)) === "object") {
      options = Object.assign(options, opts);
    }
    options.port = Number(options.port);
    if (options.hasOwnProperty("timeout"))
      delete options.timeout;
    if (options.compressed === true) {
      options.headers["accept-encoding"] = "gzip, deflate";
    }
    if (opts.hasOwnProperty("form")) {
      if (_typeof2(opts.form) !== "object") {
        throw new Error("phin 'form' option must be of type Object if present.");
      }
      var formDataString = qs.stringify(opts.form);
      options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      options.headers["Content-Length"] = Buffer.byteLength(formDataString);
      opts.data = formDataString;
    }
    var req = void 0;
    var resHandler = function resHandler2(res) {
      var stream = res;
      if (options.compressed === true) {
        if (res.headers["content-encoding"] === "gzip") {
          stream = res.pipe(zlib.createGunzip());
        } else if (res.headers["content-encoding"] === "deflate") {
          stream = res.pipe(zlib.createInflate());
        }
      }
      if (options.stream === true) {
        res.stream = stream;
        if (cb)
          cb(null, res);
      } else {
        res.body = new Buffer([]);
        stream.on("data", function(chunk) {
          res.body = Buffer.concat([res.body, chunk]);
        });
        stream.on("end", function() {
          if (cb) {
            if (options.parse === "json") {
              try {
                res.body = JSON.parse(res.body.toString());
              } catch (err) {
                cb("Invalid JSON received.", res);
                return;
              }
            }
            cb(null, res);
          }
        });
      }
    };
    switch (addr.protocol.toLowerCase()) {
      case "http:":
        req = http.request(options, resHandler);
        break;
      case "https:":
        req = https.request(options, resHandler);
        break;
      default:
        if (cb)
          cb(new Error("Invalid / unknown URL protocol. Expected HTTP or HTTPS."), null);
        return;
    }
    if (typeof opts.timeout === "number") {
      req.setTimeout(opts.timeout, function() {
        req.abort();
        if (cb)
          cb(new Error("Timeout has been reached."), null);
        cb = null;
      });
    }
    req.on("error", function(err) {
      if (cb)
        cb(err, null);
    });
    if (opts.hasOwnProperty("data")) {
      var postData = opts.data;
      if (!(opts.data instanceof Buffer) && _typeof2(opts.data) === "object") {
        var contentType = options.headers["content-type"] || options.headers["Content-Type"];
        if (contentType === "application/x-www-form-urlencoded") {
          postData = qs.stringify(opts.data);
        } else {
          try {
            postData = JSON.stringify(opts.data);
          } catch (err) {
            if (cb)
              cb(new Error("Couldn't stringify object. (Likely due to a circular reference.)"), null);
          }
        }
      }
      req.write(postData);
    }
    req.end();
  };
  phin.promisified = function(opts, http2) {
    return new Promise(function(resolve, reject) {
      phin(opts, function(err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };
  if (util2.promisify) {
    phin[util2.promisify.custom] = phin.promisified;
  }
  phin_compiled = phin;
  return phin_compiled;
}
var hasRequiredRequest;
function requireRequest() {
  if (hasRequiredRequest)
    return request.exports;
  hasRequiredRequest = 1;
  var _interopRequireDefault = interopRequireDefaultExports;
  var _defineProperty2 = _interopRequireDefault(require$$1$1);
  var _extends2 = _interopRequireDefault(require_extends());
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(source, true).forEach(function(key) {
          (0, _defineProperty2["default"])(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  if (process.browser || {}.ENVIRONMENT === "BROWSER" || typeof process.versions.electron !== "undefined" && process.type === "renderer" && typeof XMLHttpRequest === "function") {
    request.exports = function(options, cb) {
      var xhr2 = new XMLHttpRequest();
      xhr2.open("GET", options.url, true);
      xhr2.responseType = "arraybuffer";
      xhr2.addEventListener("load", function() {
        if (xhr2.status < 400) {
          try {
            var data = Buffer.from(this.response);
            cb(null, xhr2, data);
          } catch (error) {
            return cb(new Error("Response is not a buffer for url " + options.url + ". Error: " + error.message));
          }
        } else {
          cb(new Error("HTTP Status " + xhr2.status + " for url " + options.url));
        }
      });
      xhr2.addEventListener("error", function(e) {
        cb(e);
      });
      xhr2.send();
    };
  } else {
    request.exports = function(_ref, cb) {
      var options = (0, _extends2["default"])({}, _ref);
      var p = requirePhin_compiled();
      p(_objectSpread({
        compression: true
      }, options), function(err, res) {
        if (err === null) {
          cb(null, res, res.body);
        } else {
          cb(err);
        }
      });
    };
  }
  return request.exports;
}
var composite = {};
var constants$2 = {};
var hasRequiredConstants$2;
function requireConstants$2() {
  if (hasRequiredConstants$2)
    return constants$2;
  hasRequiredConstants$2 = 1;
  Object.defineProperty(constants$2, "__esModule", {
    value: true
  });
  constants$2.EDGE_CROP = constants$2.EDGE_WRAP = constants$2.EDGE_EXTEND = constants$2.BLEND_EXCLUSION = constants$2.BLEND_DIFFERENCE = constants$2.BLEND_HARDLIGHT = constants$2.BLEND_LIGHTEN = constants$2.BLEND_DARKEN = constants$2.BLEND_OVERLAY = constants$2.BLEND_SCREEN = constants$2.BLEND_ADD = constants$2.BLEND_MULTIPLY = constants$2.BLEND_DESTINATION_OVER = constants$2.BLEND_SOURCE_OVER = constants$2.VERTICAL_ALIGN_BOTTOM = constants$2.VERTICAL_ALIGN_MIDDLE = constants$2.VERTICAL_ALIGN_TOP = constants$2.HORIZONTAL_ALIGN_RIGHT = constants$2.HORIZONTAL_ALIGN_CENTER = constants$2.HORIZONTAL_ALIGN_LEFT = constants$2.AUTO = void 0;
  var AUTO = -1;
  constants$2.AUTO = AUTO;
  var HORIZONTAL_ALIGN_LEFT = 1;
  constants$2.HORIZONTAL_ALIGN_LEFT = HORIZONTAL_ALIGN_LEFT;
  var HORIZONTAL_ALIGN_CENTER = 2;
  constants$2.HORIZONTAL_ALIGN_CENTER = HORIZONTAL_ALIGN_CENTER;
  var HORIZONTAL_ALIGN_RIGHT = 4;
  constants$2.HORIZONTAL_ALIGN_RIGHT = HORIZONTAL_ALIGN_RIGHT;
  var VERTICAL_ALIGN_TOP = 8;
  constants$2.VERTICAL_ALIGN_TOP = VERTICAL_ALIGN_TOP;
  var VERTICAL_ALIGN_MIDDLE = 16;
  constants$2.VERTICAL_ALIGN_MIDDLE = VERTICAL_ALIGN_MIDDLE;
  var VERTICAL_ALIGN_BOTTOM = 32;
  constants$2.VERTICAL_ALIGN_BOTTOM = VERTICAL_ALIGN_BOTTOM;
  var BLEND_SOURCE_OVER = "srcOver";
  constants$2.BLEND_SOURCE_OVER = BLEND_SOURCE_OVER;
  var BLEND_DESTINATION_OVER = "dstOver";
  constants$2.BLEND_DESTINATION_OVER = BLEND_DESTINATION_OVER;
  var BLEND_MULTIPLY = "multiply";
  constants$2.BLEND_MULTIPLY = BLEND_MULTIPLY;
  var BLEND_ADD = "add";
  constants$2.BLEND_ADD = BLEND_ADD;
  var BLEND_SCREEN = "screen";
  constants$2.BLEND_SCREEN = BLEND_SCREEN;
  var BLEND_OVERLAY = "overlay";
  constants$2.BLEND_OVERLAY = BLEND_OVERLAY;
  var BLEND_DARKEN = "darken";
  constants$2.BLEND_DARKEN = BLEND_DARKEN;
  var BLEND_LIGHTEN = "lighten";
  constants$2.BLEND_LIGHTEN = BLEND_LIGHTEN;
  var BLEND_HARDLIGHT = "hardLight";
  constants$2.BLEND_HARDLIGHT = BLEND_HARDLIGHT;
  var BLEND_DIFFERENCE = "difference";
  constants$2.BLEND_DIFFERENCE = BLEND_DIFFERENCE;
  var BLEND_EXCLUSION = "exclusion";
  constants$2.BLEND_EXCLUSION = BLEND_EXCLUSION;
  var EDGE_EXTEND = 1;
  constants$2.EDGE_EXTEND = EDGE_EXTEND;
  var EDGE_WRAP = 2;
  constants$2.EDGE_WRAP = EDGE_WRAP;
  var EDGE_CROP = 3;
  constants$2.EDGE_CROP = EDGE_CROP;
  return constants$2;
}
var compositeModes = {};
var hasRequiredCompositeModes;
function requireCompositeModes() {
  if (hasRequiredCompositeModes)
    return compositeModes;
  hasRequiredCompositeModes = 1;
  Object.defineProperty(compositeModes, "__esModule", {
    value: true
  });
  compositeModes.srcOver = srcOver;
  compositeModes.dstOver = dstOver;
  compositeModes.multiply = multiply;
  compositeModes.add = add;
  compositeModes.screen = screen;
  compositeModes.overlay = overlay;
  compositeModes.darken = darken;
  compositeModes.lighten = lighten;
  compositeModes.hardLight = hardLight;
  compositeModes.difference = difference;
  compositeModes.exclusion = exclusion;
  function srcOver(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var r = (src2.r * src2.a + dst.r * dst.a * (1 - src2.a)) / a;
    var g = (src2.g * src2.a + dst.g * dst.a * (1 - src2.a)) / a;
    var b = (src2.b * src2.a + dst.b * dst.a * (1 - src2.a)) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function dstOver(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var r = (dst.r * dst.a + src2.r * src2.a * (1 - dst.a)) / a;
    var g = (dst.g * dst.a + src2.g * src2.a * (1 - dst.a)) / a;
    var b = (dst.b * dst.a + src2.b * src2.a * (1 - dst.a)) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function multiply(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (sra * dra + sra * (1 - dst.a) + dra * (1 - src2.a)) / a;
    var g = (sga * dga + sga * (1 - dst.a) + dga * (1 - src2.a)) / a;
    var b = (sba * dba + sba * (1 - dst.a) + dba * (1 - src2.a)) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function add(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (sra + dra) / a;
    var g = (sga + dga) / a;
    var b = (sba + dba) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function screen(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (sra * dst.a + dra * src2.a - sra * dra + sra * (1 - dst.a) + dra * (1 - src2.a)) / a;
    var g = (sga * dst.a + dga * src2.a - sga * dga + sga * (1 - dst.a) + dga * (1 - src2.a)) / a;
    var b = (sba * dst.a + dba * src2.a - sba * dba + sba * (1 - dst.a) + dba * (1 - src2.a)) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function overlay(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (2 * dra <= dst.a ? 2 * sra * dra + sra * (1 - dst.a) + dra * (1 - src2.a) : sra * (1 + dst.a) + dra * (1 + src2.a) - 2 * dra * sra - dst.a * src2.a) / a;
    var g = (2 * dga <= dst.a ? 2 * sga * dga + sga * (1 - dst.a) + dga * (1 - src2.a) : sga * (1 + dst.a) + dga * (1 + src2.a) - 2 * dga * sga - dst.a * src2.a) / a;
    var b = (2 * dba <= dst.a ? 2 * sba * dba + sba * (1 - dst.a) + dba * (1 - src2.a) : sba * (1 + dst.a) + dba * (1 + src2.a) - 2 * dba * sba - dst.a * src2.a) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function darken(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (Math.min(sra * dst.a, dra * src2.a) + sra * (1 - dst.a) + dra * (1 - src2.a)) / a;
    var g = (Math.min(sga * dst.a, dga * src2.a) + sga * (1 - dst.a) + dga * (1 - src2.a)) / a;
    var b = (Math.min(sba * dst.a, dba * src2.a) + sba * (1 - dst.a) + dba * (1 - src2.a)) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function lighten(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (Math.max(sra * dst.a, dra * src2.a) + sra * (1 - dst.a) + dra * (1 - src2.a)) / a;
    var g = (Math.max(sga * dst.a, dga * src2.a) + sga * (1 - dst.a) + dga * (1 - src2.a)) / a;
    var b = (Math.max(sba * dst.a, dba * src2.a) + sba * (1 - dst.a) + dba * (1 - src2.a)) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function hardLight(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (2 * sra <= src2.a ? 2 * sra * dra + sra * (1 - dst.a) + dra * (1 - src2.a) : sra * (1 + dst.a) + dra * (1 + src2.a) - 2 * dra * sra - dst.a * src2.a) / a;
    var g = (2 * sga <= src2.a ? 2 * sga * dga + sga * (1 - dst.a) + dga * (1 - src2.a) : sga * (1 + dst.a) + dga * (1 + src2.a) - 2 * dga * sga - dst.a * src2.a) / a;
    var b = (2 * sba <= src2.a ? 2 * sba * dba + sba * (1 - dst.a) + dba * (1 - src2.a) : sba * (1 + dst.a) + dba * (1 + src2.a) - 2 * dba * sba - dst.a * src2.a) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function difference(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (sra + dra - 2 * Math.min(sra * dst.a, dra * src2.a)) / a;
    var g = (sga + dga - 2 * Math.min(sga * dst.a, dga * src2.a)) / a;
    var b = (sba + dba - 2 * Math.min(sba * dst.a, dba * src2.a)) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  function exclusion(src2, dst) {
    var ops = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    src2.a *= ops;
    var a = dst.a + src2.a - dst.a * src2.a;
    var sra = src2.r * src2.a;
    var sga = src2.g * src2.a;
    var sba = src2.b * src2.a;
    var dra = dst.r * dst.a;
    var dga = dst.g * dst.a;
    var dba = dst.b * dst.a;
    var r = (sra * dst.a + dra * src2.a - 2 * sra * dra + sra * (1 - dst.a) + dra * (1 - src2.a)) / a;
    var g = (sga * dst.a + dga * src2.a - 2 * sga * dga + sga * (1 - dst.a) + dga * (1 - src2.a)) / a;
    var b = (sba * dst.a + dba * src2.a - 2 * sba * dba + sba * (1 - dst.a) + dba * (1 - src2.a)) / a;
    return {
      r,
      g,
      b,
      a
    };
  }
  return compositeModes;
}
var hasRequiredComposite;
function requireComposite() {
  if (hasRequiredComposite)
    return composite;
  hasRequiredComposite = 1;
  (function(exports) {
    var _interopRequireWildcard = requireInteropRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = composite2;
    var _utils = requireEs$u();
    var constants2 = _interopRequireWildcard(requireConstants$2());
    var compositeModes2 = _interopRequireWildcard(requireCompositeModes());
    function composite2(src2, x, y) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var cb = arguments.length > 4 ? arguments[4] : void 0;
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!(src2 instanceof this.constructor)) {
        return _utils.throwError.call(this, "The source must be a Jimp image", cb);
      }
      if (typeof x !== "number" || typeof y !== "number") {
        return _utils.throwError.call(this, "x and y must be numbers", cb);
      }
      var _options = options, mode = _options.mode, opacitySource = _options.opacitySource, opacityDest = _options.opacityDest;
      if (!mode) {
        mode = constants2.BLEND_SOURCE_OVER;
      }
      if (typeof opacitySource !== "number" || opacitySource < 0 || opacitySource > 1) {
        opacitySource = 1;
      }
      if (typeof opacityDest !== "number" || opacityDest < 0 || opacityDest > 1) {
        opacityDest = 1;
      }
      var blendmode = compositeModes2[mode];
      x = Math.round(x);
      y = Math.round(y);
      var baseImage = this;
      if (opacityDest !== 1) {
        baseImage.opacity(opacityDest);
      }
      src2.scanQuiet(0, 0, src2.bitmap.width, src2.bitmap.height, function(sx, sy, idx) {
        var dstIdx = baseImage.getPixelIndex(x + sx, y + sy, constants2.EDGE_CROP);
        var blended = blendmode({
          r: this.bitmap.data[idx + 0] / 255,
          g: this.bitmap.data[idx + 1] / 255,
          b: this.bitmap.data[idx + 2] / 255,
          a: this.bitmap.data[idx + 3] / 255
        }, {
          r: baseImage.bitmap.data[dstIdx + 0] / 255,
          g: baseImage.bitmap.data[dstIdx + 1] / 255,
          b: baseImage.bitmap.data[dstIdx + 2] / 255,
          a: baseImage.bitmap.data[dstIdx + 3] / 255
        }, opacitySource);
        baseImage.bitmap.data[dstIdx + 0] = this.constructor.limit255(blended.r * 255);
        baseImage.bitmap.data[dstIdx + 1] = this.constructor.limit255(blended.g * 255);
        baseImage.bitmap.data[dstIdx + 2] = this.constructor.limit255(blended.b * 255);
        baseImage.bitmap.data[dstIdx + 3] = this.constructor.limit255(blended.a * 255);
      });
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, this);
      }
      return this;
    }
  })(composite);
  return composite;
}
var promisify = {};
var hasRequiredPromisify;
function requirePromisify() {
  if (hasRequiredPromisify)
    return promisify;
  hasRequiredPromisify = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var promisify2 = function promisify3(fun, ctx) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return new Promise(function(resolve, reject) {
        args.push(function(err, data) {
          if (err) {
            reject(err);
          }
          resolve(data);
        });
        fun.bind(ctx).apply(void 0, args);
      });
    };
    var _default = promisify2;
    exports["default"] = _default;
  })(promisify);
  return promisify;
}
var mime = {};
var hasRequiredMime;
function requireMime() {
  if (hasRequiredMime)
    return mime;
  hasRequiredMime = 1;
  Object.defineProperty(mime, "__esModule", {
    value: true
  });
  mime.getExtension = mime.getType = mime.addType = void 0;
  var mimeTypes = {};
  var findType = function findType2(extension) {
    return Object.entries(mimeTypes).find(function(type) {
      return type[1].includes(extension);
    }) || [];
  };
  var addType = function addType2(mime2, extensions) {
    mimeTypes[mime2] = extensions;
  };
  mime.addType = addType;
  var getType = function getType2(path) {
    var pathParts = path.split("/").slice(-1);
    var extension = pathParts[pathParts.length - 1].split(".").pop();
    var type = findType(extension);
    return type[0];
  };
  mime.getType = getType;
  var getExtension = function getExtension2(type) {
    return (mimeTypes[type.toLowerCase()] || [])[0];
  };
  mime.getExtension = getExtension;
  return mime;
}
var imageBitmap = {};
var fileType;
var hasRequiredFileType;
function requireFileType() {
  if (hasRequiredFileType)
    return fileType;
  hasRequiredFileType = 1;
  const toBytes = (s) => [...s].map((c) => c.charCodeAt(0));
  const xpiZipFilename = toBytes("META-INF/mozilla.rsa");
  const oxmlContentTypes = toBytes("[Content_Types].xml");
  const oxmlRels = toBytes("_rels/.rels");
  fileType = (input) => {
    const buf = input instanceof Uint8Array ? input : new Uint8Array(input);
    if (!(buf && buf.length > 1)) {
      return null;
    }
    const check = (header, options) => {
      options = Object.assign({
        offset: 0
      }, options);
      for (let i = 0; i < header.length; i++) {
        if (options.mask) {
          if (header[i] !== (options.mask[i] & buf[i + options.offset])) {
            return false;
          }
        } else if (header[i] !== buf[i + options.offset]) {
          return false;
        }
      }
      return true;
    };
    const checkString = (header, options) => check(toBytes(header), options);
    if (check([255, 216, 255])) {
      return {
        ext: "jpg",
        mime: "image/jpeg"
      };
    }
    if (check([137, 80, 78, 71, 13, 10, 26, 10])) {
      return {
        ext: "png",
        mime: "image/png"
      };
    }
    if (check([71, 73, 70])) {
      return {
        ext: "gif",
        mime: "image/gif"
      };
    }
    if (check([87, 69, 66, 80], { offset: 8 })) {
      return {
        ext: "webp",
        mime: "image/webp"
      };
    }
    if (check([70, 76, 73, 70])) {
      return {
        ext: "flif",
        mime: "image/flif"
      };
    }
    if ((check([73, 73, 42, 0]) || check([77, 77, 0, 42])) && check([67, 82], { offset: 8 })) {
      return {
        ext: "cr2",
        mime: "image/x-canon-cr2"
      };
    }
    if (check([73, 73, 42, 0]) || check([77, 77, 0, 42])) {
      return {
        ext: "tif",
        mime: "image/tiff"
      };
    }
    if (check([66, 77])) {
      return {
        ext: "bmp",
        mime: "image/bmp"
      };
    }
    if (check([73, 73, 188])) {
      return {
        ext: "jxr",
        mime: "image/vnd.ms-photo"
      };
    }
    if (check([56, 66, 80, 83])) {
      return {
        ext: "psd",
        mime: "image/vnd.adobe.photoshop"
      };
    }
    if (check([80, 75, 3, 4])) {
      if (check([109, 105, 109, 101, 116, 121, 112, 101, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 101, 112, 117, 98, 43, 122, 105, 112], { offset: 30 })) {
        return {
          ext: "epub",
          mime: "application/epub+zip"
        };
      }
      if (check(xpiZipFilename, { offset: 30 })) {
        return {
          ext: "xpi",
          mime: "application/x-xpinstall"
        };
      }
      if (checkString("mimetypeapplication/vnd.oasis.opendocument.text", { offset: 30 })) {
        return {
          ext: "odt",
          mime: "application/vnd.oasis.opendocument.text"
        };
      }
      if (checkString("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", { offset: 30 })) {
        return {
          ext: "ods",
          mime: "application/vnd.oasis.opendocument.spreadsheet"
        };
      }
      if (checkString("mimetypeapplication/vnd.oasis.opendocument.presentation", { offset: 30 })) {
        return {
          ext: "odp",
          mime: "application/vnd.oasis.opendocument.presentation"
        };
      }
      const findNextZipHeaderIndex = (arr, startAt = 0) => arr.findIndex((el, i, arr2) => i >= startAt && arr2[i] === 80 && arr2[i + 1] === 75 && arr2[i + 2] === 3 && arr2[i + 3] === 4);
      let zipHeaderIndex = 0;
      let oxmlFound = false;
      let type = null;
      do {
        const offset = zipHeaderIndex + 30;
        if (!oxmlFound) {
          oxmlFound = check(oxmlContentTypes, { offset }) || check(oxmlRels, { offset });
        }
        if (!type) {
          if (checkString("word/", { offset })) {
            type = {
              ext: "docx",
              mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            };
          } else if (checkString("ppt/", { offset })) {
            type = {
              ext: "pptx",
              mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
            };
          } else if (checkString("xl/", { offset })) {
            type = {
              ext: "xlsx",
              mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            };
          }
        }
        if (oxmlFound && type) {
          return type;
        }
        zipHeaderIndex = findNextZipHeaderIndex(buf, offset);
      } while (zipHeaderIndex >= 0);
      if (type) {
        return type;
      }
    }
    if (check([80, 75]) && (buf[2] === 3 || buf[2] === 5 || buf[2] === 7) && (buf[3] === 4 || buf[3] === 6 || buf[3] === 8)) {
      return {
        ext: "zip",
        mime: "application/zip"
      };
    }
    if (check([117, 115, 116, 97, 114], { offset: 257 })) {
      return {
        ext: "tar",
        mime: "application/x-tar"
      };
    }
    if (check([82, 97, 114, 33, 26, 7]) && (buf[6] === 0 || buf[6] === 1)) {
      return {
        ext: "rar",
        mime: "application/x-rar-compressed"
      };
    }
    if (check([31, 139, 8])) {
      return {
        ext: "gz",
        mime: "application/gzip"
      };
    }
    if (check([66, 90, 104])) {
      return {
        ext: "bz2",
        mime: "application/x-bzip2"
      };
    }
    if (check([55, 122, 188, 175, 39, 28])) {
      return {
        ext: "7z",
        mime: "application/x-7z-compressed"
      };
    }
    if (check([120, 1])) {
      return {
        ext: "dmg",
        mime: "application/x-apple-diskimage"
      };
    }
    if (check([51, 103, 112, 53]) || // 3gp5
    check([0, 0, 0]) && check([102, 116, 121, 112], { offset: 4 }) && (check([109, 112, 52, 49], { offset: 8 }) || // MP41
    check([109, 112, 52, 50], { offset: 8 }) || // MP42
    check([105, 115, 111, 109], { offset: 8 }) || // ISOM
    check([105, 115, 111, 50], { offset: 8 }) || // ISO2
    check([109, 109, 112, 52], { offset: 8 }) || // MMP4
    check([77, 52, 86], { offset: 8 }) || // M4V
    check([100, 97, 115, 104], { offset: 8 }))) {
      return {
        ext: "mp4",
        mime: "video/mp4"
      };
    }
    if (check([77, 84, 104, 100])) {
      return {
        ext: "mid",
        mime: "audio/midi"
      };
    }
    if (check([26, 69, 223, 163])) {
      const sliced = buf.subarray(4, 4 + 4096);
      const idPos = sliced.findIndex((el, i, arr) => arr[i] === 66 && arr[i + 1] === 130);
      if (idPos !== -1) {
        const docTypePos = idPos + 3;
        const findDocType = (type) => [...type].every((c, i) => sliced[docTypePos + i] === c.charCodeAt(0));
        if (findDocType("matroska")) {
          return {
            ext: "mkv",
            mime: "video/x-matroska"
          };
        }
        if (findDocType("webm")) {
          return {
            ext: "webm",
            mime: "video/webm"
          };
        }
      }
    }
    if (check([0, 0, 0, 20, 102, 116, 121, 112, 113, 116, 32, 32]) || check([102, 114, 101, 101], { offset: 4 }) || check([102, 116, 121, 112, 113, 116, 32, 32], { offset: 4 }) || check([109, 100, 97, 116], { offset: 4 }) || // MJPEG
    check([119, 105, 100, 101], { offset: 4 })) {
      return {
        ext: "mov",
        mime: "video/quicktime"
      };
    }
    if (check([82, 73, 70, 70])) {
      if (check([65, 86, 73], { offset: 8 })) {
        return {
          ext: "avi",
          mime: "video/vnd.avi"
        };
      }
      if (check([87, 65, 86, 69], { offset: 8 })) {
        return {
          ext: "wav",
          mime: "audio/vnd.wave"
        };
      }
      if (check([81, 76, 67, 77], { offset: 8 })) {
        return {
          ext: "qcp",
          mime: "audio/qcelp"
        };
      }
    }
    if (check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      return {
        ext: "wmv",
        mime: "video/x-ms-wmv"
      };
    }
    if (check([0, 0, 1, 186]) || check([0, 0, 1, 179])) {
      return {
        ext: "mpg",
        mime: "video/mpeg"
      };
    }
    if (check([102, 116, 121, 112, 51, 103], { offset: 4 })) {
      return {
        ext: "3gp",
        mime: "video/3gpp"
      };
    }
    for (let start = 0; start < 2 && start < buf.length - 16; start++) {
      if (check([73, 68, 51], { offset: start }) || // ID3 header
      check([255, 226], { offset: start, mask: [255, 226] })) {
        return {
          ext: "mp3",
          mime: "audio/mpeg"
        };
      }
      if (check([255, 228], { offset: start, mask: [255, 228] })) {
        return {
          ext: "mp2",
          mime: "audio/mpeg"
        };
      }
      if (check([255, 248], { offset: start, mask: [255, 252] })) {
        return {
          ext: "mp2",
          mime: "audio/mpeg"
        };
      }
      if (check([255, 240], { offset: start, mask: [255, 252] })) {
        return {
          ext: "mp4",
          mime: "audio/mpeg"
        };
      }
    }
    if (check([102, 116, 121, 112, 77, 52, 65], { offset: 4 }) || check([77, 52, 65, 32])) {
      return {
        // MPEG-4 layer 3 (audio)
        ext: "m4a",
        mime: "audio/mp4"
        // RFC 4337
      };
    }
    if (check([79, 112, 117, 115, 72, 101, 97, 100], { offset: 28 })) {
      return {
        ext: "opus",
        mime: "audio/opus"
      };
    }
    if (check([79, 103, 103, 83])) {
      if (check([128, 116, 104, 101, 111, 114, 97], { offset: 28 })) {
        return {
          ext: "ogv",
          mime: "video/ogg"
        };
      }
      if (check([1, 118, 105, 100, 101, 111, 0], { offset: 28 })) {
        return {
          ext: "ogm",
          mime: "video/ogg"
        };
      }
      if (check([127, 70, 76, 65, 67], { offset: 28 })) {
        return {
          ext: "oga",
          mime: "audio/ogg"
        };
      }
      if (check([83, 112, 101, 101, 120, 32, 32], { offset: 28 })) {
        return {
          ext: "spx",
          mime: "audio/ogg"
        };
      }
      if (check([1, 118, 111, 114, 98, 105, 115], { offset: 28 })) {
        return {
          ext: "ogg",
          mime: "audio/ogg"
        };
      }
      return {
        ext: "ogx",
        mime: "application/ogg"
      };
    }
    if (check([102, 76, 97, 67])) {
      return {
        ext: "flac",
        mime: "audio/x-flac"
      };
    }
    if (check([77, 65, 67, 32])) {
      return {
        ext: "ape",
        mime: "audio/ape"
      };
    }
    if (check([119, 118, 112, 107])) {
      return {
        ext: "wv",
        mime: "audio/wavpack"
      };
    }
    if (check([35, 33, 65, 77, 82, 10])) {
      return {
        ext: "amr",
        mime: "audio/amr"
      };
    }
    if (check([37, 80, 68, 70])) {
      return {
        ext: "pdf",
        mime: "application/pdf"
      };
    }
    if (check([77, 90])) {
      return {
        ext: "exe",
        mime: "application/x-msdownload"
      };
    }
    if ((buf[0] === 67 || buf[0] === 70) && check([87, 83], { offset: 1 })) {
      return {
        ext: "swf",
        mime: "application/x-shockwave-flash"
      };
    }
    if (check([123, 92, 114, 116, 102])) {
      return {
        ext: "rtf",
        mime: "application/rtf"
      };
    }
    if (check([0, 97, 115, 109])) {
      return {
        ext: "wasm",
        mime: "application/wasm"
      };
    }
    if (check([119, 79, 70, 70]) && (check([0, 1, 0, 0], { offset: 4 }) || check([79, 84, 84, 79], { offset: 4 }))) {
      return {
        ext: "woff",
        mime: "font/woff"
      };
    }
    if (check([119, 79, 70, 50]) && (check([0, 1, 0, 0], { offset: 4 }) || check([79, 84, 84, 79], { offset: 4 }))) {
      return {
        ext: "woff2",
        mime: "font/woff2"
      };
    }
    if (check([76, 80], { offset: 34 }) && (check([0, 0, 1], { offset: 8 }) || check([1, 0, 2], { offset: 8 }) || check([2, 0, 2], { offset: 8 }))) {
      return {
        ext: "eot",
        mime: "application/vnd.ms-fontobject"
      };
    }
    if (check([0, 1, 0, 0, 0])) {
      return {
        ext: "ttf",
        mime: "font/ttf"
      };
    }
    if (check([79, 84, 84, 79, 0])) {
      return {
        ext: "otf",
        mime: "font/otf"
      };
    }
    if (check([0, 0, 1, 0])) {
      return {
        ext: "ico",
        mime: "image/x-icon"
      };
    }
    if (check([0, 0, 2, 0])) {
      return {
        ext: "cur",
        mime: "image/x-icon"
      };
    }
    if (check([70, 76, 86, 1])) {
      return {
        ext: "flv",
        mime: "video/x-flv"
      };
    }
    if (check([37, 33])) {
      return {
        ext: "ps",
        mime: "application/postscript"
      };
    }
    if (check([253, 55, 122, 88, 90, 0])) {
      return {
        ext: "xz",
        mime: "application/x-xz"
      };
    }
    if (check([83, 81, 76, 105])) {
      return {
        ext: "sqlite",
        mime: "application/x-sqlite3"
      };
    }
    if (check([78, 69, 83, 26])) {
      return {
        ext: "nes",
        mime: "application/x-nintendo-nes-rom"
      };
    }
    if (check([67, 114, 50, 52])) {
      return {
        ext: "crx",
        mime: "application/x-google-chrome-extension"
      };
    }
    if (check([77, 83, 67, 70]) || check([73, 83, 99, 40])) {
      return {
        ext: "cab",
        mime: "application/vnd.ms-cab-compressed"
      };
    }
    if (check([33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105, 97, 110, 45, 98, 105, 110, 97, 114, 121])) {
      return {
        ext: "deb",
        mime: "application/x-deb"
      };
    }
    if (check([33, 60, 97, 114, 99, 104, 62])) {
      return {
        ext: "ar",
        mime: "application/x-unix-archive"
      };
    }
    if (check([237, 171, 238, 219])) {
      return {
        ext: "rpm",
        mime: "application/x-rpm"
      };
    }
    if (check([31, 160]) || check([31, 157])) {
      return {
        ext: "Z",
        mime: "application/x-compress"
      };
    }
    if (check([76, 90, 73, 80])) {
      return {
        ext: "lz",
        mime: "application/x-lzip"
      };
    }
    if (check([208, 207, 17, 224, 161, 177, 26, 225])) {
      return {
        ext: "msi",
        mime: "application/x-msi"
      };
    }
    if (check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) {
      return {
        ext: "mxf",
        mime: "application/mxf"
      };
    }
    if (check([71], { offset: 4 }) && (check([71], { offset: 192 }) || check([71], { offset: 196 }))) {
      return {
        ext: "mts",
        mime: "video/mp2t"
      };
    }
    if (check([66, 76, 69, 78, 68, 69, 82])) {
      return {
        ext: "blend",
        mime: "application/x-blender"
      };
    }
    if (check([66, 80, 71, 251])) {
      return {
        ext: "bpg",
        mime: "image/bpg"
      };
    }
    if (check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
      if (check([106, 112, 50, 32], { offset: 20 })) {
        return {
          ext: "jp2",
          mime: "image/jp2"
        };
      }
      if (check([106, 112, 120, 32], { offset: 20 })) {
        return {
          ext: "jpx",
          mime: "image/jpx"
        };
      }
      if (check([106, 112, 109, 32], { offset: 20 })) {
        return {
          ext: "jpm",
          mime: "image/jpm"
        };
      }
      if (check([109, 106, 112, 50], { offset: 20 })) {
        return {
          ext: "mj2",
          mime: "image/mj2"
        };
      }
    }
    if (check([70, 79, 82, 77, 0])) {
      return {
        ext: "aif",
        mime: "audio/aiff"
      };
    }
    if (checkString("<?xml ")) {
      return {
        ext: "xml",
        mime: "application/xml"
      };
    }
    if (check([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) {
      return {
        ext: "mobi",
        mime: "application/x-mobipocket-ebook"
      };
    }
    if (check([102, 116, 121, 112], { offset: 4 })) {
      if (check([109, 105, 102, 49], { offset: 8 })) {
        return {
          ext: "heic",
          mime: "image/heif"
        };
      }
      if (check([109, 115, 102, 49], { offset: 8 })) {
        return {
          ext: "heic",
          mime: "image/heif-sequence"
        };
      }
      if (check([104, 101, 105, 99], { offset: 8 }) || check([104, 101, 105, 120], { offset: 8 })) {
        return {
          ext: "heic",
          mime: "image/heic"
        };
      }
      if (check([104, 101, 118, 99], { offset: 8 }) || check([104, 101, 118, 120], { offset: 8 })) {
        return {
          ext: "heic",
          mime: "image/heic-sequence"
        };
      }
    }
    if (check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) {
      return {
        ext: "ktx",
        mime: "image/ktx"
      };
    }
    return null;
  };
  return fileType;
}
var jpeg;
var hasRequiredJpeg;
function requireJpeg() {
  if (hasRequiredJpeg)
    return jpeg;
  hasRequiredJpeg = 1;
  jpeg = {
    parseSections: function(stream, iterator) {
      var len, markerType;
      stream.setBigEndian(true);
      while (stream.remainingLength() > 0 && markerType !== 218) {
        if (stream.nextUInt8() !== 255) {
          throw new Error("Invalid JPEG section offset");
        }
        markerType = stream.nextUInt8();
        if (markerType >= 208 && markerType <= 217 || markerType === 218) {
          len = 0;
        } else {
          len = stream.nextUInt16() - 2;
        }
        iterator(markerType, stream.branch(0, len));
        stream.skip(len);
      }
    },
    //stream should be located after SOF section size and in big endian mode, like passed to parseSections iterator
    getSizeFromSOFSection: function(stream) {
      stream.skip(1);
      return {
        height: stream.nextUInt16(),
        width: stream.nextUInt16()
      };
    },
    getSectionName: function(markerType) {
      var name, index2;
      switch (markerType) {
        case 216:
          name = "SOI";
          break;
        case 196:
          name = "DHT";
          break;
        case 219:
          name = "DQT";
          break;
        case 221:
          name = "DRI";
          break;
        case 218:
          name = "SOS";
          break;
        case 254:
          name = "COM";
          break;
        case 217:
          name = "EOI";
          break;
        default:
          if (markerType >= 224 && markerType <= 239) {
            name = "APP";
            index2 = markerType - 224;
          } else if (markerType >= 192 && markerType <= 207 && markerType !== 196 && markerType !== 200 && markerType !== 204) {
            name = "SOF";
            index2 = markerType - 192;
          } else if (markerType >= 208 && markerType <= 215) {
            name = "RST";
            index2 = markerType - 208;
          }
          break;
      }
      var nameStruct = {
        name
      };
      if (typeof index2 === "number") {
        nameStruct.index = index2;
      }
      return nameStruct;
    }
  };
  return jpeg;
}
var exif;
var hasRequiredExif;
function requireExif() {
  if (hasRequiredExif)
    return exif;
  hasRequiredExif = 1;
  function readExifValue(format, stream) {
    switch (format) {
      case 1:
        return stream.nextUInt8();
      case 3:
        return stream.nextUInt16();
      case 4:
        return stream.nextUInt32();
      case 5:
        return [stream.nextUInt32(), stream.nextUInt32()];
      case 6:
        return stream.nextInt8();
      case 8:
        return stream.nextUInt16();
      case 9:
        return stream.nextUInt32();
      case 10:
        return [stream.nextInt32(), stream.nextInt32()];
      case 11:
        return stream.nextFloat();
      case 12:
        return stream.nextDouble();
      default:
        throw new Error("Invalid format while decoding: " + format);
    }
  }
  function getBytesPerComponent(format) {
    switch (format) {
      case 1:
      case 2:
      case 6:
      case 7:
        return 1;
      case 3:
      case 8:
        return 2;
      case 4:
      case 9:
      case 11:
        return 4;
      case 5:
      case 10:
      case 12:
        return 8;
      default:
        return 0;
    }
  }
  function readExifTag(tiffMarker, stream) {
    var tagType = stream.nextUInt16(), format = stream.nextUInt16(), bytesPerComponent = getBytesPerComponent(format), components = stream.nextUInt32(), valueBytes = bytesPerComponent * components, values, c;
    if (valueBytes > 4) {
      stream = tiffMarker.openWithOffset(stream.nextUInt32());
    }
    if (format === 2) {
      values = stream.nextString(components);
      var lastNull = values.indexOf("\0");
      if (lastNull !== -1) {
        values = values.substr(0, lastNull);
      }
    } else if (format === 7) {
      values = stream.nextBuffer(components);
    } else if (format !== 0) {
      values = [];
      for (c = 0; c < components; ++c) {
        values.push(readExifValue(format, stream));
      }
    }
    if (valueBytes < 4) {
      stream.skip(4 - valueBytes);
    }
    return [tagType, values, format];
  }
  function readIFDSection(tiffMarker, stream, iterator) {
    var numberOfEntries = stream.nextUInt16(), tag, i;
    for (i = 0; i < numberOfEntries; ++i) {
      tag = readExifTag(tiffMarker, stream);
      iterator(tag[0], tag[1], tag[2]);
    }
  }
  function readHeader(stream) {
    var exifHeader = stream.nextString(6);
    if (exifHeader !== "Exif\0\0") {
      throw new Error("Invalid EXIF header");
    }
    var tiffMarker = stream.mark();
    var tiffHeader = stream.nextUInt16();
    if (tiffHeader === 18761) {
      stream.setBigEndian(false);
    } else if (tiffHeader === 19789) {
      stream.setBigEndian(true);
    } else {
      throw new Error("Invalid TIFF header");
    }
    if (stream.nextUInt16() !== 42) {
      throw new Error("Invalid TIFF data");
    }
    return tiffMarker;
  }
  exif = {
    IFD0: 1,
    IFD1: 2,
    GPSIFD: 3,
    SubIFD: 4,
    InteropIFD: 5,
    parseTags: function(stream, iterator) {
      var tiffMarker;
      try {
        tiffMarker = readHeader(stream);
      } catch (e) {
        return false;
      }
      var subIfdOffset, gpsOffset, interopOffset;
      var ifd0Stream = tiffMarker.openWithOffset(stream.nextUInt32()), IFD0 = this.IFD0;
      readIFDSection(tiffMarker, ifd0Stream, function(tagType, value, format) {
        switch (tagType) {
          case 34853:
            gpsOffset = value[0];
            break;
          case 34665:
            subIfdOffset = value[0];
            break;
          default:
            iterator(IFD0, tagType, value, format);
            break;
        }
      });
      var ifd1Offset = ifd0Stream.nextUInt32();
      if (ifd1Offset !== 0) {
        var ifd1Stream = tiffMarker.openWithOffset(ifd1Offset);
        readIFDSection(tiffMarker, ifd1Stream, iterator.bind(null, this.IFD1));
      }
      if (gpsOffset) {
        var gpsStream = tiffMarker.openWithOffset(gpsOffset);
        readIFDSection(tiffMarker, gpsStream, iterator.bind(null, this.GPSIFD));
      }
      if (subIfdOffset) {
        var subIfdStream = tiffMarker.openWithOffset(subIfdOffset), InteropIFD = this.InteropIFD;
        readIFDSection(tiffMarker, subIfdStream, function(tagType, value, format) {
          if (tagType === 40965) {
            interopOffset = value[0];
          } else {
            iterator(InteropIFD, tagType, value, format);
          }
        });
      }
      if (interopOffset) {
        var interopStream = tiffMarker.openWithOffset(interopOffset);
        readIFDSection(tiffMarker, interopStream, iterator.bind(null, this.InteropIFD));
      }
      return true;
    }
  };
  return exif;
}
var date;
var hasRequiredDate;
function requireDate() {
  if (hasRequiredDate)
    return date;
  hasRequiredDate = 1;
  function parseNumber(s) {
    return parseInt(s, 10);
  }
  var hours = 3600;
  var minutes = 60;
  function parseDateTimeParts(dateParts, timeParts) {
    dateParts = dateParts.map(parseNumber);
    timeParts = timeParts.map(parseNumber);
    var year = dateParts[0];
    var month = dateParts[1] - 1;
    var day = dateParts[2];
    var hours2 = timeParts[0];
    var minutes2 = timeParts[1];
    var seconds = timeParts[2];
    var date2 = Date.UTC(year, month, day, hours2, minutes2, seconds, 0);
    var timestamp = date2 / 1e3;
    return timestamp;
  }
  function parseDateWithTimezoneFormat(dateTimeStr) {
    var dateParts = dateTimeStr.substr(0, 10).split("-");
    var timeParts = dateTimeStr.substr(11, 8).split(":");
    var timezoneStr = dateTimeStr.substr(19, 6);
    var timezoneParts = timezoneStr.split(":").map(parseNumber);
    var timezoneOffset = timezoneParts[0] * hours + timezoneParts[1] * minutes;
    var timestamp = parseDateTimeParts(dateParts, timeParts);
    timestamp -= timezoneOffset;
    if (typeof timestamp === "number" && !isNaN(timestamp)) {
      return timestamp;
    }
  }
  function parseDateWithSpecFormat(dateTimeStr) {
    var parts = dateTimeStr.split(" "), dateParts = parts[0].split(":"), timeParts = parts[1].split(":");
    var timestamp = parseDateTimeParts(dateParts, timeParts);
    if (typeof timestamp === "number" && !isNaN(timestamp)) {
      return timestamp;
    }
  }
  function parseExifDate(dateTimeStr) {
    var isSpecFormat = dateTimeStr.length === 19 && dateTimeStr.charAt(4) === ":";
    var isTimezoneFormat = dateTimeStr.length === 25 && dateTimeStr.charAt(10) === "T";
    if (isTimezoneFormat) {
      return parseDateWithTimezoneFormat(dateTimeStr);
    } else if (isSpecFormat) {
      return parseDateWithSpecFormat(dateTimeStr);
    }
  }
  date = {
    parseDateWithSpecFormat,
    parseDateWithTimezoneFormat,
    parseExifDate
  };
  return date;
}
var simplify;
var hasRequiredSimplify;
function requireSimplify() {
  if (hasRequiredSimplify)
    return simplify;
  hasRequiredSimplify = 1;
  var exif2 = requireExif();
  var date2 = requireDate();
  var degreeTags = [
    {
      section: exif2.GPSIFD,
      type: 2,
      name: "GPSLatitude",
      refType: 1,
      refName: "GPSLatitudeRef",
      posVal: "N"
    },
    {
      section: exif2.GPSIFD,
      type: 4,
      name: "GPSLongitude",
      refType: 3,
      refName: "GPSLongitudeRef",
      posVal: "E"
    }
  ];
  var dateTags = [
    {
      section: exif2.SubIFD,
      type: 306,
      name: "ModifyDate"
    },
    {
      section: exif2.SubIFD,
      type: 36867,
      name: "DateTimeOriginal"
    },
    {
      section: exif2.SubIFD,
      type: 36868,
      name: "CreateDate"
    },
    {
      section: exif2.SubIFD,
      type: 306,
      name: "ModifyDate"
    }
  ];
  simplify = {
    castDegreeValues: function(getTagValue, setTagValue) {
      degreeTags.forEach(function(t) {
        var degreeVal = getTagValue(t);
        if (degreeVal) {
          var degreeRef = getTagValue({ section: t.section, type: t.refType, name: t.refName });
          var degreeNumRef = degreeRef === t.posVal ? 1 : -1;
          var degree = (degreeVal[0] + degreeVal[1] / 60 + degreeVal[2] / 3600) * degreeNumRef;
          setTagValue(t, degree);
        }
      });
    },
    castDateValues: function(getTagValue, setTagValue) {
      dateTags.forEach(function(t) {
        var dateStrVal = getTagValue(t);
        if (dateStrVal) {
          var timestamp = date2.parseExifDate(dateStrVal);
          if (typeof timestamp !== "undefined") {
            setTagValue(t, timestamp);
          }
        }
      });
    },
    simplifyValue: function(values, format) {
      if (Array.isArray(values)) {
        values = values.map(function(value) {
          if (format === 10 || format === 5) {
            return value[0] / value[1];
          }
          return value;
        });
        if (values.length === 1) {
          values = values[0];
        }
      }
      return values;
    }
  };
  return simplify;
}
var exifTags;
var hasRequiredExifTags;
function requireExifTags() {
  if (hasRequiredExifTags)
    return exifTags;
  hasRequiredExifTags = 1;
  exifTags = {
    exif: {
      1: "InteropIndex",
      2: "InteropVersion",
      11: "ProcessingSoftware",
      254: "SubfileType",
      255: "OldSubfileType",
      256: "ImageWidth",
      257: "ImageHeight",
      258: "BitsPerSample",
      259: "Compression",
      262: "PhotometricInterpretation",
      263: "Thresholding",
      264: "CellWidth",
      265: "CellLength",
      266: "FillOrder",
      269: "DocumentName",
      270: "ImageDescription",
      271: "Make",
      272: "Model",
      273: "StripOffsets",
      274: "Orientation",
      277: "SamplesPerPixel",
      278: "RowsPerStrip",
      279: "StripByteCounts",
      280: "MinSampleValue",
      281: "MaxSampleValue",
      282: "XResolution",
      283: "YResolution",
      284: "PlanarConfiguration",
      285: "PageName",
      286: "XPosition",
      287: "YPosition",
      288: "FreeOffsets",
      289: "FreeByteCounts",
      290: "GrayResponseUnit",
      291: "GrayResponseCurve",
      292: "T4Options",
      293: "T6Options",
      296: "ResolutionUnit",
      297: "PageNumber",
      300: "ColorResponseUnit",
      301: "TransferFunction",
      305: "Software",
      306: "ModifyDate",
      315: "Artist",
      316: "HostComputer",
      317: "Predictor",
      318: "WhitePoint",
      319: "PrimaryChromaticities",
      320: "ColorMap",
      321: "HalftoneHints",
      322: "TileWidth",
      323: "TileLength",
      324: "TileOffsets",
      325: "TileByteCounts",
      326: "BadFaxLines",
      327: "CleanFaxData",
      328: "ConsecutiveBadFaxLines",
      330: "SubIFD",
      332: "InkSet",
      333: "InkNames",
      334: "NumberofInks",
      336: "DotRange",
      337: "TargetPrinter",
      338: "ExtraSamples",
      339: "SampleFormat",
      340: "SMinSampleValue",
      341: "SMaxSampleValue",
      342: "TransferRange",
      343: "ClipPath",
      344: "XClipPathUnits",
      345: "YClipPathUnits",
      346: "Indexed",
      347: "JPEGTables",
      351: "OPIProxy",
      400: "GlobalParametersIFD",
      401: "ProfileType",
      402: "FaxProfile",
      403: "CodingMethods",
      404: "VersionYear",
      405: "ModeNumber",
      433: "Decode",
      434: "DefaultImageColor",
      435: "T82Options",
      437: "JPEGTables",
      512: "JPEGProc",
      513: "ThumbnailOffset",
      514: "ThumbnailLength",
      515: "JPEGRestartInterval",
      517: "JPEGLosslessPredictors",
      518: "JPEGPointTransforms",
      519: "JPEGQTables",
      520: "JPEGDCTables",
      521: "JPEGACTables",
      529: "YCbCrCoefficients",
      530: "YCbCrSubSampling",
      531: "YCbCrPositioning",
      532: "ReferenceBlackWhite",
      559: "StripRowCounts",
      700: "ApplicationNotes",
      999: "USPTOMiscellaneous",
      4096: "RelatedImageFileFormat",
      4097: "RelatedImageWidth",
      4098: "RelatedImageHeight",
      18246: "Rating",
      18247: "XP_DIP_XML",
      18248: "StitchInfo",
      18249: "RatingPercent",
      32781: "ImageID",
      32931: "WangTag1",
      32932: "WangAnnotation",
      32933: "WangTag3",
      32934: "WangTag4",
      32995: "Matteing",
      32996: "DataType",
      32997: "ImageDepth",
      32998: "TileDepth",
      33405: "Model2",
      33421: "CFARepeatPatternDim",
      33422: "CFAPattern2",
      33423: "BatteryLevel",
      33424: "KodakIFD",
      33432: "Copyright",
      33434: "ExposureTime",
      33437: "FNumber",
      33445: "MDFileTag",
      33446: "MDScalePixel",
      33447: "MDColorTable",
      33448: "MDLabName",
      33449: "MDSampleInfo",
      33450: "MDPrepDate",
      33451: "MDPrepTime",
      33452: "MDFileUnits",
      33550: "PixelScale",
      33589: "AdventScale",
      33590: "AdventRevision",
      33628: "UIC1Tag",
      33629: "UIC2Tag",
      33630: "UIC3Tag",
      33631: "UIC4Tag",
      33723: "IPTC-NAA",
      33918: "IntergraphPacketData",
      33919: "IntergraphFlagRegisters",
      33920: "IntergraphMatrix",
      33921: "INGRReserved",
      33922: "ModelTiePoint",
      34016: "Site",
      34017: "ColorSequence",
      34018: "IT8Header",
      34019: "RasterPadding",
      34020: "BitsPerRunLength",
      34021: "BitsPerExtendedRunLength",
      34022: "ColorTable",
      34023: "ImageColorIndicator",
      34024: "BackgroundColorIndicator",
      34025: "ImageColorValue",
      34026: "BackgroundColorValue",
      34027: "PixelIntensityRange",
      34028: "TransparencyIndicator",
      34029: "ColorCharacterization",
      34030: "HCUsage",
      34031: "TrapIndicator",
      34032: "CMYKEquivalent",
      34118: "SEMInfo",
      34152: "AFCP_IPTC",
      34232: "PixelMagicJBIGOptions",
      34264: "ModelTransform",
      34306: "WB_GRGBLevels",
      34310: "LeafData",
      34377: "PhotoshopSettings",
      34665: "ExifOffset",
      34675: "ICC_Profile",
      34687: "TIFF_FXExtensions",
      34688: "MultiProfiles",
      34689: "SharedData",
      34690: "T88Options",
      34732: "ImageLayer",
      34735: "GeoTiffDirectory",
      34736: "GeoTiffDoubleParams",
      34737: "GeoTiffAsciiParams",
      34850: "ExposureProgram",
      34852: "SpectralSensitivity",
      34853: "GPSInfo",
      34855: "ISO",
      34856: "Opto-ElectricConvFactor",
      34857: "Interlace",
      34858: "TimeZoneOffset",
      34859: "SelfTimerMode",
      34864: "SensitivityType",
      34865: "StandardOutputSensitivity",
      34866: "RecommendedExposureIndex",
      34867: "ISOSpeed",
      34868: "ISOSpeedLatitudeyyy",
      34869: "ISOSpeedLatitudezzz",
      34908: "FaxRecvParams",
      34909: "FaxSubAddress",
      34910: "FaxRecvTime",
      34954: "LeafSubIFD",
      36864: "ExifVersion",
      36867: "DateTimeOriginal",
      36868: "CreateDate",
      37121: "ComponentsConfiguration",
      37122: "CompressedBitsPerPixel",
      37377: "ShutterSpeedValue",
      37378: "ApertureValue",
      37379: "BrightnessValue",
      37380: "ExposureCompensation",
      37381: "MaxApertureValue",
      37382: "SubjectDistance",
      37383: "MeteringMode",
      37384: "LightSource",
      37385: "Flash",
      37386: "FocalLength",
      37387: "FlashEnergy",
      37388: "SpatialFrequencyResponse",
      37389: "Noise",
      37390: "FocalPlaneXResolution",
      37391: "FocalPlaneYResolution",
      37392: "FocalPlaneResolutionUnit",
      37393: "ImageNumber",
      37394: "SecurityClassification",
      37395: "ImageHistory",
      37396: "SubjectArea",
      37397: "ExposureIndex",
      37398: "TIFF-EPStandardID",
      37399: "SensingMethod",
      37434: "CIP3DataFile",
      37435: "CIP3Sheet",
      37436: "CIP3Side",
      37439: "StoNits",
      37500: "MakerNote",
      37510: "UserComment",
      37520: "SubSecTime",
      37521: "SubSecTimeOriginal",
      37522: "SubSecTimeDigitized",
      37679: "MSDocumentText",
      37680: "MSPropertySetStorage",
      37681: "MSDocumentTextPosition",
      37724: "ImageSourceData",
      40091: "XPTitle",
      40092: "XPComment",
      40093: "XPAuthor",
      40094: "XPKeywords",
      40095: "XPSubject",
      40960: "FlashpixVersion",
      40961: "ColorSpace",
      40962: "ExifImageWidth",
      40963: "ExifImageHeight",
      40964: "RelatedSoundFile",
      40965: "InteropOffset",
      41483: "FlashEnergy",
      41484: "SpatialFrequencyResponse",
      41485: "Noise",
      41486: "FocalPlaneXResolution",
      41487: "FocalPlaneYResolution",
      41488: "FocalPlaneResolutionUnit",
      41489: "ImageNumber",
      41490: "SecurityClassification",
      41491: "ImageHistory",
      41492: "SubjectLocation",
      41493: "ExposureIndex",
      41494: "TIFF-EPStandardID",
      41495: "SensingMethod",
      41728: "FileSource",
      41729: "SceneType",
      41730: "CFAPattern",
      41985: "CustomRendered",
      41986: "ExposureMode",
      41987: "WhiteBalance",
      41988: "DigitalZoomRatio",
      41989: "FocalLengthIn35mmFormat",
      41990: "SceneCaptureType",
      41991: "GainControl",
      41992: "Contrast",
      41993: "Saturation",
      41994: "Sharpness",
      41995: "DeviceSettingDescription",
      41996: "SubjectDistanceRange",
      42016: "ImageUniqueID",
      42032: "OwnerName",
      42033: "SerialNumber",
      42034: "LensInfo",
      42035: "LensMake",
      42036: "LensModel",
      42037: "LensSerialNumber",
      42112: "GDALMetadata",
      42113: "GDALNoData",
      42240: "Gamma",
      44992: "ExpandSoftware",
      44993: "ExpandLens",
      44994: "ExpandFilm",
      44995: "ExpandFilterLens",
      44996: "ExpandScanner",
      44997: "ExpandFlashLamp",
      48129: "PixelFormat",
      48130: "Transformation",
      48131: "Uncompressed",
      48132: "ImageType",
      48256: "ImageWidth",
      48257: "ImageHeight",
      48258: "WidthResolution",
      48259: "HeightResolution",
      48320: "ImageOffset",
      48321: "ImageByteCount",
      48322: "AlphaOffset",
      48323: "AlphaByteCount",
      48324: "ImageDataDiscard",
      48325: "AlphaDataDiscard",
      50215: "OceScanjobDesc",
      50216: "OceApplicationSelector",
      50217: "OceIDNumber",
      50218: "OceImageLogic",
      50255: "Annotations",
      50341: "PrintIM",
      50560: "USPTOOriginalContentType",
      50706: "DNGVersion",
      50707: "DNGBackwardVersion",
      50708: "UniqueCameraModel",
      50709: "LocalizedCameraModel",
      50710: "CFAPlaneColor",
      50711: "CFALayout",
      50712: "LinearizationTable",
      50713: "BlackLevelRepeatDim",
      50714: "BlackLevel",
      50715: "BlackLevelDeltaH",
      50716: "BlackLevelDeltaV",
      50717: "WhiteLevel",
      50718: "DefaultScale",
      50719: "DefaultCropOrigin",
      50720: "DefaultCropSize",
      50721: "ColorMatrix1",
      50722: "ColorMatrix2",
      50723: "CameraCalibration1",
      50724: "CameraCalibration2",
      50725: "ReductionMatrix1",
      50726: "ReductionMatrix2",
      50727: "AnalogBalance",
      50728: "AsShotNeutral",
      50729: "AsShotWhiteXY",
      50730: "BaselineExposure",
      50731: "BaselineNoise",
      50732: "BaselineSharpness",
      50733: "BayerGreenSplit",
      50734: "LinearResponseLimit",
      50735: "CameraSerialNumber",
      50736: "DNGLensInfo",
      50737: "ChromaBlurRadius",
      50738: "AntiAliasStrength",
      50739: "ShadowScale",
      50740: "DNGPrivateData",
      50741: "MakerNoteSafety",
      50752: "RawImageSegmentation",
      50778: "CalibrationIlluminant1",
      50779: "CalibrationIlluminant2",
      50780: "BestQualityScale",
      50781: "RawDataUniqueID",
      50784: "AliasLayerMetadata",
      50827: "OriginalRawFileName",
      50828: "OriginalRawFileData",
      50829: "ActiveArea",
      50830: "MaskedAreas",
      50831: "AsShotICCProfile",
      50832: "AsShotPreProfileMatrix",
      50833: "CurrentICCProfile",
      50834: "CurrentPreProfileMatrix",
      50879: "ColorimetricReference",
      50898: "PanasonicTitle",
      50899: "PanasonicTitle2",
      50931: "CameraCalibrationSig",
      50932: "ProfileCalibrationSig",
      50933: "ProfileIFD",
      50934: "AsShotProfileName",
      50935: "NoiseReductionApplied",
      50936: "ProfileName",
      50937: "ProfileHueSatMapDims",
      50938: "ProfileHueSatMapData1",
      50939: "ProfileHueSatMapData2",
      50940: "ProfileToneCurve",
      50941: "ProfileEmbedPolicy",
      50942: "ProfileCopyright",
      50964: "ForwardMatrix1",
      50965: "ForwardMatrix2",
      50966: "PreviewApplicationName",
      50967: "PreviewApplicationVersion",
      50968: "PreviewSettingsName",
      50969: "PreviewSettingsDigest",
      50970: "PreviewColorSpace",
      50971: "PreviewDateTime",
      50972: "RawImageDigest",
      50973: "OriginalRawFileDigest",
      50974: "SubTileBlockSize",
      50975: "RowInterleaveFactor",
      50981: "ProfileLookTableDims",
      50982: "ProfileLookTableData",
      51008: "OpcodeList1",
      51009: "OpcodeList2",
      51022: "OpcodeList3",
      51041: "NoiseProfile",
      51043: "TimeCodes",
      51044: "FrameRate",
      51058: "TStop",
      51081: "ReelName",
      51089: "OriginalDefaultFinalSize",
      51090: "OriginalBestQualitySize",
      51091: "OriginalDefaultCropSize",
      51105: "CameraLabel",
      51107: "ProfileHueSatMapEncoding",
      51108: "ProfileLookTableEncoding",
      51109: "BaselineExposureOffset",
      51110: "DefaultBlackRender",
      51111: "NewRawImageDigest",
      51112: "RawToPreviewGain",
      51125: "DefaultUserCrop",
      59932: "Padding",
      59933: "OffsetSchema",
      65e3: "OwnerName",
      65001: "SerialNumber",
      65002: "Lens",
      65024: "KDC_IFD",
      65100: "RawFile",
      65101: "Converter",
      65102: "WhiteBalance",
      65105: "Exposure",
      65106: "Shadows",
      65107: "Brightness",
      65108: "Contrast",
      65109: "Saturation",
      65110: "Sharpness",
      65111: "Smoothness",
      65112: "MoireFilter"
    },
    gps: {
      0: "GPSVersionID",
      1: "GPSLatitudeRef",
      2: "GPSLatitude",
      3: "GPSLongitudeRef",
      4: "GPSLongitude",
      5: "GPSAltitudeRef",
      6: "GPSAltitude",
      7: "GPSTimeStamp",
      8: "GPSSatellites",
      9: "GPSStatus",
      10: "GPSMeasureMode",
      11: "GPSDOP",
      12: "GPSSpeedRef",
      13: "GPSSpeed",
      14: "GPSTrackRef",
      15: "GPSTrack",
      16: "GPSImgDirectionRef",
      17: "GPSImgDirection",
      18: "GPSMapDatum",
      19: "GPSDestLatitudeRef",
      20: "GPSDestLatitude",
      21: "GPSDestLongitudeRef",
      22: "GPSDestLongitude",
      23: "GPSDestBearingRef",
      24: "GPSDestBearing",
      25: "GPSDestDistanceRef",
      26: "GPSDestDistance",
      27: "GPSProcessingMethod",
      28: "GPSAreaInformation",
      29: "GPSDateStamp",
      30: "GPSDifferential",
      31: "GPSHPositioningError"
    }
  };
  return exifTags;
}
var parser$1;
var hasRequiredParser$1;
function requireParser$1() {
  if (hasRequiredParser$1)
    return parser$1;
  hasRequiredParser$1 = 1;
  var jpeg2 = requireJpeg(), exif2 = requireExif(), simplify2 = requireSimplify();
  function ExifResult(startMarker, tags, imageSize, thumbnailOffset, thumbnailLength, thumbnailType, app1Offset) {
    this.startMarker = startMarker;
    this.tags = tags;
    this.imageSize = imageSize;
    this.thumbnailOffset = thumbnailOffset;
    this.thumbnailLength = thumbnailLength;
    this.thumbnailType = thumbnailType;
    this.app1Offset = app1Offset;
  }
  ExifResult.prototype = {
    hasThumbnail: function(mime2) {
      if (!this.thumbnailOffset || !this.thumbnailLength) {
        return false;
      }
      if (typeof mime2 !== "string") {
        return true;
      }
      if (mime2.toLowerCase().trim() === "image/jpeg") {
        return this.thumbnailType === 6;
      }
      if (mime2.toLowerCase().trim() === "image/tiff") {
        return this.thumbnailType === 1;
      }
      return false;
    },
    getThumbnailOffset: function() {
      return this.app1Offset + 6 + this.thumbnailOffset;
    },
    getThumbnailLength: function() {
      return this.thumbnailLength;
    },
    getThumbnailBuffer: function() {
      return this._getThumbnailStream().nextBuffer(this.thumbnailLength);
    },
    _getThumbnailStream: function() {
      return this.startMarker.openWithOffset(this.getThumbnailOffset());
    },
    getImageSize: function() {
      return this.imageSize;
    },
    getThumbnailSize: function() {
      var stream = this._getThumbnailStream(), size;
      jpeg2.parseSections(stream, function(sectionType, sectionStream) {
        if (jpeg2.getSectionName(sectionType).name === "SOF") {
          size = jpeg2.getSizeFromSOFSection(sectionStream);
        }
      });
      return size;
    }
  };
  function Parser(stream) {
    this.stream = stream;
    this.flags = {
      readBinaryTags: false,
      resolveTagNames: true,
      simplifyValues: true,
      imageSize: true,
      hidePointers: true,
      returnTags: true
    };
  }
  Parser.prototype = {
    enableBinaryFields: function(enable) {
      this.flags.readBinaryTags = !!enable;
      return this;
    },
    enablePointers: function(enable) {
      this.flags.hidePointers = !enable;
      return this;
    },
    enableTagNames: function(enable) {
      this.flags.resolveTagNames = !!enable;
      return this;
    },
    enableImageSize: function(enable) {
      this.flags.imageSize = !!enable;
      return this;
    },
    enableReturnTags: function(enable) {
      this.flags.returnTags = !!enable;
      return this;
    },
    enableSimpleValues: function(enable) {
      this.flags.simplifyValues = !!enable;
      return this;
    },
    parse: function() {
      var start = this.stream.mark(), stream = start.openWithOffset(0), flags = this.flags, tags, imageSize, thumbnailOffset, thumbnailLength, thumbnailType, app1Offset, tagNames, getTagValue, setTagValue;
      if (flags.resolveTagNames) {
        tagNames = requireExifTags();
      }
      if (flags.resolveTagNames) {
        tags = {};
        getTagValue = function(t) {
          return tags[t.name];
        };
        setTagValue = function(t, value) {
          tags[t.name] = value;
        };
      } else {
        tags = [];
        getTagValue = function(t) {
          var i;
          for (i = 0; i < tags.length; ++i) {
            if (tags[i].type === t.type && tags[i].section === t.section) {
              return tags.value;
            }
          }
        };
        setTagValue = function(t, value) {
          var i;
          for (i = 0; i < tags.length; ++i) {
            if (tags[i].type === t.type && tags[i].section === t.section) {
              tags.value = value;
              return;
            }
          }
        };
      }
      jpeg2.parseSections(stream, function(sectionType, sectionStream) {
        var validExifHeaders, sectionOffset = sectionStream.offsetFrom(start);
        if (sectionType === 225) {
          validExifHeaders = exif2.parseTags(sectionStream, function(ifdSection, tagType, value, format) {
            if (!flags.readBinaryTags && format === 7) {
              return;
            }
            if (tagType === 513) {
              thumbnailOffset = value[0];
              if (flags.hidePointers) {
                return;
              }
            } else if (tagType === 514) {
              thumbnailLength = value[0];
              if (flags.hidePointers) {
                return;
              }
            } else if (tagType === 259) {
              thumbnailType = value[0];
              if (flags.hidePointers) {
                return;
              }
            }
            if (!flags.returnTags) {
              return;
            }
            if (flags.simplifyValues) {
              value = simplify2.simplifyValue(value, format);
            }
            if (flags.resolveTagNames) {
              var sectionTagNames = ifdSection === exif2.GPSIFD ? tagNames.gps : tagNames.exif;
              var name = sectionTagNames[tagType];
              if (!name) {
                name = tagNames.exif[tagType];
              }
              if (!tags.hasOwnProperty(name)) {
                tags[name] = value;
              }
            } else {
              tags.push({
                section: ifdSection,
                type: tagType,
                value
              });
            }
          });
          if (validExifHeaders) {
            app1Offset = sectionOffset;
          }
        } else if (flags.imageSize && jpeg2.getSectionName(sectionType).name === "SOF") {
          imageSize = jpeg2.getSizeFromSOFSection(sectionStream);
        }
      });
      if (flags.simplifyValues) {
        simplify2.castDegreeValues(getTagValue, setTagValue);
        simplify2.castDateValues(getTagValue, setTagValue);
      }
      return new ExifResult(start, tags, imageSize, thumbnailOffset, thumbnailLength, thumbnailType, app1Offset);
    }
  };
  parser$1 = Parser;
  return parser$1;
}
var domBufferstream;
var hasRequiredDomBufferstream;
function requireDomBufferstream() {
  if (hasRequiredDomBufferstream)
    return domBufferstream;
  hasRequiredDomBufferstream = 1;
  function DOMBufferStream(arrayBuffer, offset, length, bigEndian, global2, parentOffset) {
    this.global = global2;
    offset = offset || 0;
    length = length || arrayBuffer.byteLength - offset;
    this.arrayBuffer = arrayBuffer.slice(offset, offset + length);
    this.view = new global2.DataView(this.arrayBuffer, 0, this.arrayBuffer.byteLength);
    this.setBigEndian(bigEndian);
    this.offset = 0;
    this.parentOffset = (parentOffset || 0) + offset;
  }
  DOMBufferStream.prototype = {
    setBigEndian: function(bigEndian) {
      this.littleEndian = !bigEndian;
    },
    nextUInt8: function() {
      var value = this.view.getUint8(this.offset);
      this.offset += 1;
      return value;
    },
    nextInt8: function() {
      var value = this.view.getInt8(this.offset);
      this.offset += 1;
      return value;
    },
    nextUInt16: function() {
      var value = this.view.getUint16(this.offset, this.littleEndian);
      this.offset += 2;
      return value;
    },
    nextUInt32: function() {
      var value = this.view.getUint32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    },
    nextInt16: function() {
      var value = this.view.getInt16(this.offset, this.littleEndian);
      this.offset += 2;
      return value;
    },
    nextInt32: function() {
      var value = this.view.getInt32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    },
    nextFloat: function() {
      var value = this.view.getFloat32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    },
    nextDouble: function() {
      var value = this.view.getFloat64(this.offset, this.littleEndian);
      this.offset += 8;
      return value;
    },
    nextBuffer: function(length) {
      var value = this.arrayBuffer.slice(this.offset, this.offset + length);
      this.offset += length;
      return value;
    },
    remainingLength: function() {
      return this.arrayBuffer.byteLength - this.offset;
    },
    nextString: function(length) {
      var value = this.arrayBuffer.slice(this.offset, this.offset + length);
      value = String.fromCharCode.apply(null, new this.global.Uint8Array(value));
      this.offset += length;
      return value;
    },
    mark: function() {
      var self2 = this;
      return {
        openWithOffset: function(offset) {
          offset = (offset || 0) + this.offset;
          return new DOMBufferStream(self2.arrayBuffer, offset, self2.arrayBuffer.byteLength - offset, !self2.littleEndian, self2.global, self2.parentOffset);
        },
        offset: this.offset,
        getParentOffset: function() {
          return self2.parentOffset;
        }
      };
    },
    offsetFrom: function(marker) {
      return this.parentOffset + this.offset - (marker.offset + marker.getParentOffset());
    },
    skip: function(amount) {
      this.offset += amount;
    },
    branch: function(offset, length) {
      length = typeof length === "number" ? length : this.arrayBuffer.byteLength - (this.offset + offset);
      return new DOMBufferStream(this.arrayBuffer, this.offset + offset, length, !this.littleEndian, this.global, this.parentOffset);
    }
  };
  domBufferstream = DOMBufferStream;
  return domBufferstream;
}
var bufferstream;
var hasRequiredBufferstream;
function requireBufferstream() {
  if (hasRequiredBufferstream)
    return bufferstream;
  hasRequiredBufferstream = 1;
  function BufferStream(buffer2, offset, length, bigEndian) {
    this.buffer = buffer2;
    this.offset = offset || 0;
    length = typeof length === "number" ? length : buffer2.length;
    this.endPosition = this.offset + length;
    this.setBigEndian(bigEndian);
  }
  BufferStream.prototype = {
    setBigEndian: function(bigEndian) {
      this.bigEndian = !!bigEndian;
    },
    nextUInt8: function() {
      var value = this.buffer.readUInt8(this.offset);
      this.offset += 1;
      return value;
    },
    nextInt8: function() {
      var value = this.buffer.readInt8(this.offset);
      this.offset += 1;
      return value;
    },
    nextUInt16: function() {
      var value = this.bigEndian ? this.buffer.readUInt16BE(this.offset) : this.buffer.readUInt16LE(this.offset);
      this.offset += 2;
      return value;
    },
    nextUInt32: function() {
      var value = this.bigEndian ? this.buffer.readUInt32BE(this.offset) : this.buffer.readUInt32LE(this.offset);
      this.offset += 4;
      return value;
    },
    nextInt16: function() {
      var value = this.bigEndian ? this.buffer.readInt16BE(this.offset) : this.buffer.readInt16LE(this.offset);
      this.offset += 2;
      return value;
    },
    nextInt32: function() {
      var value = this.bigEndian ? this.buffer.readInt32BE(this.offset) : this.buffer.readInt32LE(this.offset);
      this.offset += 4;
      return value;
    },
    nextFloat: function() {
      var value = this.bigEndian ? this.buffer.readFloatBE(this.offset) : this.buffer.readFloatLE(this.offset);
      this.offset += 4;
      return value;
    },
    nextDouble: function() {
      var value = this.bigEndian ? this.buffer.readDoubleBE(this.offset) : this.buffer.readDoubleLE(this.offset);
      this.offset += 8;
      return value;
    },
    nextBuffer: function(length) {
      var value = this.buffer.slice(this.offset, this.offset + length);
      this.offset += length;
      return value;
    },
    remainingLength: function() {
      return this.endPosition - this.offset;
    },
    nextString: function(length) {
      var value = this.buffer.toString("utf8", this.offset, this.offset + length);
      this.offset += length;
      return value;
    },
    mark: function() {
      var self2 = this;
      return {
        openWithOffset: function(offset) {
          offset = (offset || 0) + this.offset;
          return new BufferStream(self2.buffer, offset, self2.endPosition - offset, self2.bigEndian);
        },
        offset: this.offset
      };
    },
    offsetFrom: function(marker) {
      return this.offset - marker.offset;
    },
    skip: function(amount) {
      this.offset += amount;
    },
    branch: function(offset, length) {
      length = typeof length === "number" ? length : this.endPosition - (this.offset + offset);
      return new BufferStream(this.buffer, this.offset + offset, length, this.bigEndian);
    }
  };
  bufferstream = BufferStream;
  return bufferstream;
}
var exifParser;
var hasRequiredExifParser;
function requireExifParser() {
  if (hasRequiredExifParser)
    return exifParser;
  hasRequiredExifParser = 1;
  var Parser = requireParser$1();
  function getGlobal() {
    return (0, eval)("this");
  }
  exifParser = {
    create: function(buffer2, global2) {
      global2 = global2 || getGlobal();
      if (buffer2 instanceof global2.ArrayBuffer) {
        var DOMBufferStream = requireDomBufferstream();
        return new Parser(new DOMBufferStream(buffer2, 0, buffer2.byteLength, true, global2));
      } else {
        var NodeBufferStream = requireBufferstream();
        return new Parser(new NodeBufferStream(buffer2, 0, buffer2.length, true));
      }
    }
  };
  return exifParser;
}
var hasRequiredImageBitmap;
function requireImageBitmap() {
  if (hasRequiredImageBitmap)
    return imageBitmap;
  hasRequiredImageBitmap = 1;
  var _interopRequireWildcard = requireInteropRequireWildcard();
  var _interopRequireDefault = interopRequireDefaultExports;
  Object.defineProperty(imageBitmap, "__esModule", {
    value: true
  });
  imageBitmap.parseBitmap = parseBitmap;
  imageBitmap.getBuffer = getBuffer;
  imageBitmap.getBufferAsync = getBufferAsync;
  var _slicedToArray2 = _interopRequireDefault(require$$4$1);
  var _fileType = _interopRequireDefault(requireFileType());
  var _exifParser = _interopRequireDefault(requireExifParser());
  var _utils = requireEs$u();
  var constants2 = _interopRequireWildcard(requireConstants$2());
  var MIME = _interopRequireWildcard(requireMime());
  var _promisify = _interopRequireDefault(requirePromisify());
  function getMIMEFromBuffer(buffer2, path) {
    var fileTypeFromBuffer = (0, _fileType["default"])(buffer2);
    if (fileTypeFromBuffer) {
      return fileTypeFromBuffer.mime;
    }
    if (path) {
      return MIME.getType(path);
    }
    return null;
  }
  function getExifOrientation(img) {
    return img._exif && img._exif.tags && img._exif.tags.Orientation || 1;
  }
  function getExifOrientationTransformation(img) {
    var w = img.getWidth();
    var h = img.getHeight();
    switch (getExifOrientation(img)) {
      case 1:
        return null;
      case 2:
        return function(x, y) {
          return [w - x - 1, y];
        };
      case 3:
        return function(x, y) {
          return [w - x - 1, h - y - 1];
        };
      case 4:
        return function(x, y) {
          return [x, h - y - 1];
        };
      case 5:
        return function(x, y) {
          return [y, x];
        };
      case 6:
        return function(x, y) {
          return [y, h - x - 1];
        };
      case 7:
        return function(x, y) {
          return [w - y - 1, h - x - 1];
        };
      case 8:
        return function(x, y) {
          return [w - y - 1, x];
        };
      default:
        return null;
    }
  }
  function transformBitmap(img, width, height, transformation) {
    var _data = img.bitmap.data;
    var _width = img.bitmap.width;
    var data = Buffer.alloc(_data.length);
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var _transformation = transformation(x, y), _transformation2 = (0, _slicedToArray2["default"])(_transformation, 2), _x = _transformation2[0], _y = _transformation2[1];
        var idx = width * y + x << 2;
        var _idx = _width * _y + _x << 2;
        var pixel = _data.readUInt32BE(_idx);
        data.writeUInt32BE(pixel, idx);
      }
    }
    img.bitmap.data = data;
    img.bitmap.width = width;
    img.bitmap.height = height;
  }
  function exifRotate(img) {
    if (getExifOrientation(img) < 2)
      return;
    var transformation = getExifOrientationTransformation(img);
    var swapDimensions = getExifOrientation(img) > 4;
    var newWidth = swapDimensions ? img.bitmap.height : img.bitmap.width;
    var newHeight = swapDimensions ? img.bitmap.width : img.bitmap.height;
    transformBitmap(img, newWidth, newHeight, transformation);
  }
  function parseBitmap(data, path, cb) {
    var mime2 = getMIMEFromBuffer(data, path);
    if (typeof mime2 !== "string") {
      return cb(new Error("Could not find MIME for Buffer <" + path + ">"));
    }
    this._originalMime = mime2.toLowerCase();
    try {
      var _mime = this.getMIME();
      if (this.constructor.decoders[_mime]) {
        this.bitmap = this.constructor.decoders[_mime](data);
      } else {
        return _utils.throwError.call(this, "Unsupported MIME type: " + _mime, cb);
      }
    } catch (error) {
      return cb.call(this, error, this);
    }
    try {
      this._exif = _exifParser["default"].create(data).parse();
      exifRotate(this);
    } catch (error) {
    }
    cb.call(this, null, this);
    return this;
  }
  function compositeBitmapOverBackground(Jimp, image) {
    return new Jimp(image.bitmap.width, image.bitmap.height, image._background).composite(image, 0, 0).bitmap;
  }
  function getBuffer(mime2, cb) {
    if (mime2 === constants2.AUTO) {
      mime2 = this.getMIME();
    }
    if (typeof mime2 !== "string") {
      return _utils.throwError.call(this, "mime must be a string", cb);
    }
    if (typeof cb !== "function") {
      return _utils.throwError.call(this, "cb must be a function", cb);
    }
    mime2 = mime2.toLowerCase();
    if (this._rgba && this.constructor.hasAlpha[mime2]) {
      this.bitmap.data = Buffer.from(this.bitmap.data);
    } else {
      this.bitmap.data = compositeBitmapOverBackground(this.constructor, this).data;
    }
    if (this.constructor.encoders[mime2]) {
      var buffer2 = this.constructor.encoders[mime2](this);
      cb.call(this, null, buffer2);
    } else {
      cb.call(this, "Unsupported MIME type: " + mime2);
    }
    return this;
  }
  function getBufferAsync(mime2) {
    return (0, _promisify["default"])(getBuffer, this, mime2);
  }
  return imageBitmap;
}
var hasRequiredEs$t;
function requireEs$t() {
  if (hasRequiredEs$t)
    return es$t;
  hasRequiredEs$t = 1;
  (function(exports) {
    var _interopRequireWildcard = requireInteropRequireWildcard();
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addConstants = addConstants;
    exports.addJimpMethods = addJimpMethods;
    exports.jimpEvMethod = jimpEvMethod;
    exports.jimpEvChange = jimpEvChange;
    Object.defineProperty(exports, "addType", {
      enumerable: true,
      get: function get() {
        return MIME.addType;
      }
    });
    exports["default"] = void 0;
    var _construct2 = _interopRequireDefault(requireConstruct());
    var _slicedToArray2 = _interopRequireDefault(require$$4$1);
    var _classCallCheck2 = _interopRequireDefault(require$$4);
    var _createClass2 = _interopRequireDefault(require$$5);
    var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault(requireInherits());
    var _defineProperty2 = _interopRequireDefault(require$$1$1);
    var _typeof2 = _interopRequireDefault(require$$1);
    var _fs = _interopRequireDefault(require$$3);
    var _path = _interopRequireDefault(require$$3);
    var _events = _interopRequireDefault(requireEvents());
    var _utils = requireEs$u();
    var _anyBase = _interopRequireDefault(requireAnyBase());
    var _mkdirp = _interopRequireDefault(requireMkdirp());
    var _pixelmatch = _interopRequireDefault(requirePixelmatch());
    var _tinycolor = _interopRequireDefault(requireTinycolor());
    var _phash = _interopRequireDefault(requirePhash());
    var _request = _interopRequireDefault(requireRequest());
    var _composite = _interopRequireDefault(requireComposite());
    var _promisify = _interopRequireDefault(requirePromisify());
    var MIME = _interopRequireWildcard(requireMime());
    var _imageBitmap = requireImageBitmap();
    var constants2 = _interopRequireWildcard(requireConstants$2());
    var alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_";
    var maxHashLength = [NaN, NaN];
    for (var i = 2; i < 65; i++) {
      var maxHash = (0, _anyBase["default"])(_anyBase["default"].BIN, alphabet.slice(0, i))(new Array(64 + 1).join("1"));
      maxHashLength.push(maxHash.length);
    }
    function noop() {
    }
    function isArrayBuffer(test) {
      return Object.prototype.toString.call(test).toLowerCase().indexOf("arraybuffer") > -1;
    }
    function bufferFromArrayBuffer(arrayBuffer) {
      var buffer2 = Buffer.alloc(arrayBuffer.byteLength);
      var view = new Uint8Array(arrayBuffer);
      for (var _i = 0; _i < buffer2.length; ++_i) {
        buffer2[_i] = view[_i];
      }
      return buffer2;
    }
    function loadFromURL(options, cb) {
      (0, _request["default"])(options, function(err, response, data) {
        if (err) {
          return cb(err);
        }
        if ("headers" in response && "location" in response.headers) {
          options.url = response.headers.location;
          return loadFromURL(options, cb);
        }
        if ((0, _typeof2["default"])(data) === "object" && Buffer.isBuffer(data)) {
          return cb(null, data);
        }
        var msg = "Could not load Buffer from <" + options.url + "> (HTTP: " + response.statusCode + ")";
        return new Error(msg);
      });
    }
    function loadBufferFromPath(src2, cb) {
      if (_fs["default"] && typeof _fs["default"].readFile === "function" && !src2.match(/^(http|ftp)s?:\/\/./)) {
        _fs["default"].readFile(src2, cb);
      } else {
        loadFromURL({
          url: src2
        }, cb);
      }
    }
    function isRawRGBAData(obj) {
      return obj && (0, _typeof2["default"])(obj) === "object" && typeof obj.width === "number" && typeof obj.height === "number" && (Buffer.isBuffer(obj.data) || obj.data instanceof Uint8Array || typeof Uint8ClampedArray === "function" && obj.data instanceof Uint8ClampedArray) && (obj.data.length === obj.width * obj.height * 4 || obj.data.length === obj.width * obj.height * 3);
    }
    function makeRGBABufferFromRGB(buffer2) {
      if (buffer2.length % 3 !== 0) {
        throw new Error("Buffer length is incorrect");
      }
      var rgbaBuffer = Buffer.allocUnsafe(buffer2.length / 3 * 4);
      var j = 0;
      for (var _i2 = 0; _i2 < buffer2.length; _i2++) {
        rgbaBuffer[j] = buffer2[_i2];
        if ((_i2 + 1) % 3 === 0) {
          rgbaBuffer[++j] = 255;
        }
        j++;
      }
      return rgbaBuffer;
    }
    var emptyBitmap = {
      data: null,
      width: null,
      height: null
    };
    var Jimp = /* @__PURE__ */ function(_EventEmitter) {
      (0, _inherits2["default"])(Jimp2, _EventEmitter);
      function Jimp2() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (0, _classCallCheck2["default"])(this, Jimp2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Jimp2).call(this));
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bitmap", emptyBitmap);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_background", 0);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_originalMime", Jimp2.MIME_PNG);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_exif", null);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rgba", true);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "writeAsync", function(path2) {
          return (0, _promisify["default"])(_this.write, (0, _assertThisInitialized2["default"])(_this), path2);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getBase64Async", function(mime2) {
          return (0, _promisify["default"])(_this.getBase64, (0, _assertThisInitialized2["default"])(_this), mime2);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getBuffer", _imageBitmap.getBuffer);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getBufferAsync", _imageBitmap.getBufferAsync);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getPixelColour", _this.getPixelColor);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setPixelColour", _this.setPixelColor);
        var jimpInstance = (0, _assertThisInitialized2["default"])(_this);
        var cb = noop;
        if (isArrayBuffer(args[0])) {
          args[0] = bufferFromArrayBuffer(args[0]);
        }
        function finish() {
          for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args2[_key2] = arguments[_key2];
          }
          var err = args2[0];
          var evData = err || {};
          evData.methodName = "constructor";
          setTimeout(function() {
            var _cb;
            if (err && cb === noop) {
              jimpInstance.emitError("constructor", err);
            } else if (!err) {
              jimpInstance.emitMulti("constructor", "initialized");
            }
            (_cb = cb).call.apply(_cb, [jimpInstance].concat(args2));
          }, 1);
        }
        if (typeof args[0] === "number" && typeof args[1] === "number" || parseInt(args[0], 10) && parseInt(args[1], 10)) {
          var w = parseInt(args[0], 10);
          var h = parseInt(args[1], 10);
          cb = args[2];
          if (typeof args[2] === "number") {
            _this._background = args[2];
            cb = args[3];
          }
          if (typeof args[2] === "string") {
            _this._background = Jimp2.cssColorToHex(args[2]);
            cb = args[3];
          }
          if (typeof cb === "undefined") {
            cb = noop;
          }
          if (typeof cb !== "function") {
            return (0, _possibleConstructorReturn2["default"])(_this, _utils.throwError.call((0, _assertThisInitialized2["default"])(_this), "cb must be a function", finish));
          }
          _this.bitmap = {
            data: Buffer.alloc(w * h * 4),
            width: w,
            height: h
          };
          for (var _i3 = 0; _i3 < _this.bitmap.data.length; _i3 += 4) {
            _this.bitmap.data.writeUInt32BE(_this._background, _i3);
          }
          finish(null, (0, _assertThisInitialized2["default"])(_this));
        } else if ((0, _typeof2["default"])(args[0]) === "object" && args[0].url) {
          cb = args[1] || noop;
          if (typeof cb !== "function") {
            return (0, _possibleConstructorReturn2["default"])(_this, _utils.throwError.call((0, _assertThisInitialized2["default"])(_this), "cb must be a function", finish));
          }
          loadFromURL(args[0], function(err, data2) {
            if (err) {
              return _utils.throwError.call((0, _assertThisInitialized2["default"])(_this), err, finish);
            }
            _this.parseBitmap(data2, args[0].url, finish);
          });
        } else if (args[0] instanceof Jimp2) {
          var original = args[0];
          cb = args[1];
          if (typeof cb === "undefined") {
            cb = noop;
          }
          if (typeof cb !== "function") {
            return (0, _possibleConstructorReturn2["default"])(_this, _utils.throwError.call((0, _assertThisInitialized2["default"])(_this), "cb must be a function", finish));
          }
          _this.bitmap = {
            data: Buffer.from(original.bitmap.data),
            width: original.bitmap.width,
            height: original.bitmap.height
          };
          _this._quality = original._quality;
          _this._deflateLevel = original._deflateLevel;
          _this._deflateStrategy = original._deflateStrategy;
          _this._filterType = original._filterType;
          _this._rgba = original._rgba;
          _this._background = original._background;
          _this._originalMime = original._originalMime;
          finish(null, (0, _assertThisInitialized2["default"])(_this));
        } else if (isRawRGBAData(args[0])) {
          var imageData = args[0];
          cb = args[1] || noop;
          var isRGBA = imageData.width * imageData.height * 4 === imageData.data.length;
          var buffer2 = isRGBA ? Buffer.from(imageData.data) : makeRGBABufferFromRGB(imageData.data);
          _this.bitmap = {
            data: buffer2,
            width: imageData.width,
            height: imageData.height
          };
          finish(null, (0, _assertThisInitialized2["default"])(_this));
        } else if (typeof args[0] === "string") {
          var path = args[0];
          cb = args[1];
          if (typeof cb === "undefined") {
            cb = noop;
          }
          if (typeof cb !== "function") {
            return (0, _possibleConstructorReturn2["default"])(_this, _utils.throwError.call((0, _assertThisInitialized2["default"])(_this), "cb must be a function", finish));
          }
          loadBufferFromPath(path, function(err, data2) {
            if (err) {
              return _utils.throwError.call((0, _assertThisInitialized2["default"])(_this), err, finish);
            }
            _this.parseBitmap(data2, path, finish);
          });
        } else if ((0, _typeof2["default"])(args[0]) === "object" && Buffer.isBuffer(args[0])) {
          var data = args[0];
          cb = args[1];
          if (typeof cb !== "function") {
            return (0, _possibleConstructorReturn2["default"])(_this, _utils.throwError.call((0, _assertThisInitialized2["default"])(_this), "cb must be a function", finish));
          }
          _this.parseBitmap(data, null, finish);
        } else {
          cb = args[args.length - 1];
          if (typeof cb !== "function") {
            cb = args[args.length - 2];
            if (typeof cb !== "function") {
              cb = noop;
            }
          }
          var extraConstructor = Jimp2.__extraConstructors.find(function(c) {
            return c.test.apply(c, args);
          });
          if (extraConstructor) {
            new Promise(function(resolve, reject) {
              var _extraConstructor$run;
              return (_extraConstructor$run = extraConstructor.run).call.apply(_extraConstructor$run, [(0, _assertThisInitialized2["default"])(_this), resolve, reject].concat(args));
            }).then(function() {
              return finish(null, (0, _assertThisInitialized2["default"])(_this));
            })["catch"](finish);
          } else {
            return (0, _possibleConstructorReturn2["default"])(_this, _utils.throwError.call((0, _assertThisInitialized2["default"])(_this), "No matching constructor overloading was found. Please see the docs for how to call the Jimp constructor.", finish));
          }
        }
        return _this;
      }
      (0, _createClass2["default"])(Jimp2, [{
        key: "parseBitmap",
        value: function parseBitmap(data, path, finish) {
          _imageBitmap.parseBitmap.call(this, data, null, finish);
        }
        /**
         * Sets the type of the image (RGB or RGBA) when saving in a format that supports transparency (default is RGBA)
         * @param {boolean} bool A Boolean, true to use RGBA or false to use RGB
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp} this for chaining of methods
         */
      }, {
        key: "rgba",
        value: function rgba(bool, cb) {
          if (typeof bool !== "boolean") {
            return _utils.throwError.call(this, "bool must be a boolean, true for RGBA or false for RGB", cb);
          }
          this._rgba = bool;
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
        /**
         * Emit for multiple listeners
         * @param {string} methodName name of the method to emit an error for
         * @param {string} eventName name of the eventName to emit an error for
         * @param {object} data to emit
         */
      }, {
        key: "emitMulti",
        value: function emitMulti(methodName, eventName) {
          var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          data = Object.assign(data, {
            methodName,
            eventName
          });
          this.emit("any", data);
          if (methodName) {
            this.emit(methodName, data);
          }
          this.emit(eventName, data);
        }
      }, {
        key: "emitError",
        value: function emitError(methodName, err) {
          this.emitMulti(methodName, "error", err);
        }
        /**
         * Get the current height of the image
         * @return {number} height of the image
         */
      }, {
        key: "getHeight",
        value: function getHeight() {
          return this.bitmap.height;
        }
        /**
         * Get the current width of the image
         * @return {number} width of the image
         */
      }, {
        key: "getWidth",
        value: function getWidth() {
          return this.bitmap.width;
        }
        /**
         * Nicely format Jimp object when sent to the console e.g. console.log(image)
         * @returns {string} pretty printed
         */
      }, {
        key: "inspect",
        value: function inspect() {
          return "<Jimp " + (this.bitmap === emptyBitmap ? "pending..." : this.bitmap.width + "x" + this.bitmap.height) + ">";
        }
        /**
         * Nicely format Jimp object when converted to a string
         * @returns {string} pretty printed
         */
      }, {
        key: "toString",
        value: function toString() {
          return "[object Jimp]";
        }
        /**
         * Returns the original MIME of the image (default: "image/png")
         * @returns {string} the MIME
         */
      }, {
        key: "getMIME",
        value: function getMIME() {
          var mime2 = this._originalMime || Jimp2.MIME_PNG;
          return mime2;
        }
        /**
         * Returns the appropriate file extension for the original MIME of the image (default: "png")
         * @returns {string} the file extension
         */
      }, {
        key: "getExtension",
        value: function getExtension() {
          var mime2 = this.getMIME();
          return MIME.getExtension(mime2);
        }
        /**
         * Writes the image to a file
         * @param {string} path a path to the destination file
         * @param {function(Error, Jimp)} cb (optional) a function to call when the image is saved to disk
         * @returns {Jimp} this for chaining of methods
         */
      }, {
        key: "write",
        value: function write(path, cb) {
          var _this2 = this;
          if (!_fs["default"] || !_fs["default"].createWriteStream) {
            throw new Error("Cant access the filesystem. You can use the getBase64 method.");
          }
          if (typeof path !== "string") {
            return _utils.throwError.call(this, "path must be a string", cb);
          }
          if (typeof cb === "undefined") {
            cb = noop;
          }
          if (typeof cb !== "function") {
            return _utils.throwError.call(this, "cb must be a function", cb);
          }
          var mime2 = MIME.getType(path) || this.getMIME();
          var pathObj = _path["default"].parse(path);
          if (pathObj.dir) {
            _mkdirp["default"].sync(pathObj.dir);
          }
          this.getBuffer(mime2, function(err, buffer2) {
            if (err) {
              return _utils.throwError.call(_this2, err, cb);
            }
            var stream = _fs["default"].createWriteStream(path);
            stream.on("open", function() {
              stream.write(buffer2);
              stream.end();
            }).on("error", function(err2) {
              return _utils.throwError.call(_this2, err2, cb);
            });
            stream.on("finish", function() {
              cb.call(_this2, null, _this2);
            });
          });
          return this;
        }
      }, {
        key: "getBase64",
        /**
         * Converts the image to a base 64 string
         * @param {string} mime the mime type of the image data to be created
         * @param {function(Error, Jimp)} cb a Node-style function to call with the buffer as the second argument
         * @returns {Jimp} this for chaining of methods
         */
        value: function getBase64(mime2, cb) {
          if (mime2 === Jimp2.AUTO) {
            mime2 = this.getMIME();
          }
          if (typeof mime2 !== "string") {
            return _utils.throwError.call(this, "mime must be a string", cb);
          }
          if (typeof cb !== "function") {
            return _utils.throwError.call(this, "cb must be a function", cb);
          }
          this.getBuffer(mime2, function(err, data) {
            if (err) {
              return _utils.throwError.call(this, err, cb);
            }
            var src2 = "data:" + mime2 + ";base64," + data.toString("base64");
            cb.call(this, null, src2);
          });
          return this;
        }
      }, {
        key: "hash",
        /**
         * Generates a perceptual hash of the image <https://en.wikipedia.org/wiki/Perceptual_hashing>. And pads the string. Can configure base.
         * @param {number} base (optional) a number between 2 and 64 representing the base for the hash (e.g. 2 is binary, 10 is decimal, 16 is hex, 64 is base 64). Defaults to 64.
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {string} a string representing the hash
         */
        value: function hash(base, cb) {
          base = base || 64;
          if (typeof base === "function") {
            cb = base;
            base = 64;
          }
          if (typeof base !== "number") {
            return _utils.throwError.call(this, "base must be a number", cb);
          }
          if (base < 2 || base > 64) {
            return _utils.throwError.call(this, "base must be a number between 2 and 64", cb);
          }
          var hash2 = this.pHash();
          hash2 = (0, _anyBase["default"])(_anyBase["default"].BIN, alphabet.slice(0, base))(hash2);
          while (hash2.length < maxHashLength[base]) {
            hash2 = "0" + hash2;
          }
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, hash2);
          }
          return hash2;
        }
        /**
         * Calculates the perceptual hash
         * @returns {number} the perceptual hash
         */
      }, {
        key: "pHash",
        value: function pHash() {
          var pHash2 = new _phash["default"]();
          return pHash2.getHash(this);
        }
        /**
         * Calculates the hamming distance of the current image and a hash based on their perceptual hash
         * @param {hash} compareHash hash to compare to
         * @returns {number} a number ranging from 0 to 1, 0 means they are believed to be identical
         */
      }, {
        key: "distanceFromHash",
        value: function distanceFromHash(compareHash) {
          var pHash = new _phash["default"]();
          var currentHash = pHash.getHash(this);
          return pHash.distance(currentHash, compareHash);
        }
        /**
         * Converts the image to a buffer
         * @param {string} mime the mime type of the image buffer to be created
         * @param {function(Error, Jimp)} cb a Node-style function to call with the buffer as the second argument
         * @returns {Jimp} this for chaining of methods
         */
      }, {
        key: "getPixelIndex",
        /**
         * Returns the offset of a pixel in the bitmap buffer
         * @param {number} x the x coordinate
         * @param {number} y the y coordinate
         * @param {string} edgeHandling (optional) define how to sum pixels from outside the border
         * @param {number} cb (optional) a callback for when complete
         * @returns {number} the index of the pixel or -1 if not found
         */
        value: function getPixelIndex(x, y, edgeHandling, cb) {
          var xi;
          var yi;
          if (typeof edgeHandling === "function" && typeof cb === "undefined") {
            cb = edgeHandling;
            edgeHandling = null;
          }
          if (!edgeHandling) {
            edgeHandling = Jimp2.EDGE_EXTEND;
          }
          if (typeof x !== "number" || typeof y !== "number") {
            return _utils.throwError.call(this, "x and y must be numbers", cb);
          }
          x = Math.round(x);
          y = Math.round(y);
          xi = x;
          yi = y;
          if (edgeHandling === Jimp2.EDGE_EXTEND) {
            if (x < 0)
              xi = 0;
            if (x >= this.bitmap.width)
              xi = this.bitmap.width - 1;
            if (y < 0)
              yi = 0;
            if (y >= this.bitmap.height)
              yi = this.bitmap.height - 1;
          }
          if (edgeHandling === Jimp2.EDGE_WRAP) {
            if (x < 0) {
              xi = this.bitmap.width + x;
            }
            if (x >= this.bitmap.width) {
              xi = x % this.bitmap.width;
            }
            if (y < 0) {
              xi = this.bitmap.height + y;
            }
            if (y >= this.bitmap.height) {
              yi = y % this.bitmap.height;
            }
          }
          var i2 = this.bitmap.width * yi + xi << 2;
          if (xi < 0 || xi >= this.bitmap.width) {
            i2 = -1;
          }
          if (yi < 0 || yi >= this.bitmap.height) {
            i2 = -1;
          }
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, i2);
          }
          return i2;
        }
        /**
         * Returns the hex colour value of a pixel
         * @param {number} x the x coordinate
         * @param {number} y the y coordinate
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {number} the color of the pixel
         */
      }, {
        key: "getPixelColor",
        value: function getPixelColor(x, y, cb) {
          if (typeof x !== "number" || typeof y !== "number")
            return _utils.throwError.call(this, "x and y must be numbers", cb);
          x = Math.round(x);
          y = Math.round(y);
          var idx = this.getPixelIndex(x, y);
          var hex = this.bitmap.data.readUInt32BE(idx);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, hex);
          }
          return hex;
        }
      }, {
        key: "setPixelColor",
        /**
         * Returns the hex colour value of a pixel
         * @param {number} hex color to set
         * @param {number} x the x coordinate
         * @param {number} y the y coordinate
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {number} the index of the pixel or -1 if not found
         */
        value: function setPixelColor(hex, x, y, cb) {
          if (typeof hex !== "number" || typeof x !== "number" || typeof y !== "number")
            return _utils.throwError.call(this, "hex, x and y must be numbers", cb);
          x = Math.round(x);
          y = Math.round(y);
          var idx = this.getPixelIndex(x, y);
          this.bitmap.data.writeUInt32BE(hex, idx);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      }, {
        key: "hasAlpha",
        /**
         * Determine if the image contains opaque pixels.
         * @return {boolean} hasAlpha whether the image contains opaque pixels
         */
        value: function hasAlpha() {
          for (var yIndex = 0; yIndex < this.bitmap.height; yIndex++) {
            for (var xIndex = 0; xIndex < this.bitmap.width; xIndex++) {
              var idx = this.bitmap.width * yIndex + xIndex << 2;
              var alpha = this.bitmap.data[idx + 3];
              if (alpha !== 255) {
                return true;
              }
            }
          }
          return false;
        }
        /**
         * Iterate scan through a region of the bitmap
         * @param {number} x the x coordinate to begin the scan at
         * @param {number} y the y coordinate to begin the scan at
         * @param w the width of the scan region
         * @param h the height of the scan region
         * @returns {IterableIterator<{x: number, y: number, idx: number, image: Jimp}>}
         */
      }, {
        key: "scanIterator",
        value: function scanIterator(x, y, w, h) {
          if (typeof x !== "number" || typeof y !== "number") {
            return _utils.throwError.call(this, "x and y must be numbers");
          }
          if (typeof w !== "number" || typeof h !== "number") {
            return _utils.throwError.call(this, "w and h must be numbers");
          }
          return (0, _utils.scanIterator)(this, x, y, w, h);
        }
      }]);
      return Jimp2;
    }(_events["default"]);
    function addConstants(constants3) {
      var jimpInstance = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jimp;
      Object.entries(constants3).forEach(function(_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2), name = _ref2[0], value = _ref2[1];
        jimpInstance[name] = value;
      });
    }
    function addJimpMethods(methods) {
      var jimpInstance = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jimp;
      Object.entries(methods).forEach(function(_ref3) {
        var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2), name = _ref4[0], value = _ref4[1];
        jimpInstance.prototype[name] = value;
      });
    }
    addConstants(constants2);
    addJimpMethods({
      composite: _composite["default"]
    });
    Jimp.__extraConstructors = [];
    Jimp.appendConstructorOption = function(name, test, run) {
      Jimp.__extraConstructors.push({
        name,
        test,
        run
      });
    };
    Jimp.read = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return new Promise(function(resolve, reject) {
        (0, _construct2["default"])(Jimp, args.concat([function(err, image) {
          if (err)
            reject(err);
          else
            resolve(image);
        }]));
      });
    };
    Jimp.create = Jimp.read;
    Jimp.rgbaToInt = function(r, g, b, a, cb) {
      if (typeof r !== "number" || typeof g !== "number" || typeof b !== "number" || typeof a !== "number") {
        return _utils.throwError.call(this, "r, g, b and a must be numbers", cb);
      }
      if (r < 0 || r > 255) {
        return _utils.throwError.call(this, "r must be between 0 and 255", cb);
      }
      if (g < 0 || g > 255) {
        _utils.throwError.call(this, "g must be between 0 and 255", cb);
      }
      if (b < 0 || b > 255) {
        return _utils.throwError.call(this, "b must be between 0 and 255", cb);
      }
      if (a < 0 || a > 255) {
        return _utils.throwError.call(this, "a must be between 0 and 255", cb);
      }
      r = Math.round(r);
      b = Math.round(b);
      g = Math.round(g);
      a = Math.round(a);
      var i2 = r * Math.pow(256, 3) + g * Math.pow(256, 2) + b * Math.pow(256, 1) + a * Math.pow(256, 0);
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, i2);
      }
      return i2;
    };
    Jimp.intToRGBA = function(i2, cb) {
      if (typeof i2 !== "number") {
        return _utils.throwError.call(this, "i must be a number", cb);
      }
      var rgba = {};
      rgba.r = Math.floor(i2 / Math.pow(256, 3));
      rgba.g = Math.floor((i2 - rgba.r * Math.pow(256, 3)) / Math.pow(256, 2));
      rgba.b = Math.floor((i2 - rgba.r * Math.pow(256, 3) - rgba.g * Math.pow(256, 2)) / Math.pow(256, 1));
      rgba.a = Math.floor((i2 - rgba.r * Math.pow(256, 3) - rgba.g * Math.pow(256, 2) - rgba.b * Math.pow(256, 1)) / Math.pow(256, 0));
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, rgba);
      }
      return rgba;
    };
    Jimp.cssColorToHex = function(cssColor) {
      cssColor = cssColor || 0;
      if (typeof cssColor === "number")
        return Number(cssColor);
      return parseInt((0, _tinycolor["default"])(cssColor).toHex8(), 16);
    };
    Jimp.limit255 = function(n) {
      n = Math.max(n, 0);
      n = Math.min(n, 255);
      return n;
    };
    Jimp.diff = function(img1, img2) {
      var threshold = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.1;
      if (!(img1 instanceof Jimp) || !(img2 instanceof Jimp))
        return _utils.throwError.call(this, "img1 and img2 must be an Jimp images");
      var bmp1 = img1.bitmap;
      var bmp2 = img2.bitmap;
      if (bmp1.width !== bmp2.width || bmp1.height !== bmp2.height) {
        if (bmp1.width * bmp1.height > bmp2.width * bmp2.height) {
          img1 = img1.cloneQuiet().resize(bmp2.width, bmp2.height);
        } else {
          img2 = img2.cloneQuiet().resize(bmp1.width, bmp1.height);
        }
      }
      if (typeof threshold !== "number" || threshold < 0 || threshold > 1) {
        return _utils.throwError.call(this, "threshold must be a number between 0 and 1");
      }
      var diff = new Jimp(bmp1.width, bmp1.height, 4294967295);
      var numDiffPixels = (0, _pixelmatch["default"])(bmp1.data, bmp2.data, diff.bitmap.data, diff.bitmap.width, diff.bitmap.height, {
        threshold
      });
      return {
        percent: numDiffPixels / (diff.bitmap.width * diff.bitmap.height),
        image: diff
      };
    };
    Jimp.distance = function(img1, img2) {
      var phash2 = new _phash["default"]();
      var hash1 = phash2.getHash(img1);
      var hash2 = phash2.getHash(img2);
      return phash2.distance(hash1, hash2);
    };
    Jimp.compareHashes = function(hash1, hash2) {
      var phash2 = new _phash["default"]();
      return phash2.distance(hash1, hash2);
    };
    Jimp.colorDiff = function(rgba1, rgba2) {
      var pow = function pow2(n) {
        return Math.pow(n, 2);
      };
      var max = Math.max;
      var maxVal = 255 * 255 * 3;
      if (rgba1.a !== 0 && !rgba1.a) {
        rgba1.a = 255;
      }
      if (rgba2.a !== 0 && !rgba2.a) {
        rgba2.a = 255;
      }
      return (max(pow(rgba1.r - rgba2.r), pow(rgba1.r - rgba2.r - rgba1.a + rgba2.a)) + max(pow(rgba1.g - rgba2.g), pow(rgba1.g - rgba2.g - rgba1.a + rgba2.a)) + max(pow(rgba1.b - rgba2.b), pow(rgba1.b - rgba2.b - rgba1.a + rgba2.a))) / maxVal;
    };
    function jimpEvMethod(methodName, evName, method) {
      var evNameBefore = "before-" + evName;
      var evNameAfter = evName.replace(/e$/, "") + "ed";
      Jimp.prototype[methodName] = function() {
        var wrappedCb;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        var cb = args[method.length - 1];
        var jimpInstance = this;
        if (typeof cb === "function") {
          wrappedCb = function wrappedCb2() {
            for (var _len5 = arguments.length, args2 = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args2[_key5] = arguments[_key5];
            }
            var err = args2[0], data = args2[1];
            if (err) {
              jimpInstance.emitError(methodName, err);
            } else {
              jimpInstance.emitMulti(methodName, evNameAfter, (0, _defineProperty2["default"])({}, methodName, data));
            }
            cb.apply(this, args2);
          };
          args[args.length - 1] = wrappedCb;
        } else {
          wrappedCb = false;
        }
        this.emitMulti(methodName, evNameBefore);
        var result;
        try {
          result = method.apply(this, args);
          if (!wrappedCb) {
            this.emitMulti(methodName, evNameAfter, (0, _defineProperty2["default"])({}, methodName, result));
          }
        } catch (error) {
          error.methodName = methodName;
          this.emitError(methodName, error);
        }
        return result;
      };
      Jimp.prototype[methodName + "Quiet"] = method;
    }
    jimpEvMethod("clone", "clone", function(cb) {
      var clone = new Jimp(this);
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(clone, null, clone);
      }
      return clone;
    });
    function jimpEvChange(methodName, method) {
      jimpEvMethod(methodName, "change", method);
    }
    jimpEvChange("background", function(hex, cb) {
      if (typeof hex !== "number") {
        return _utils.throwError.call(this, "hex must be a hexadecimal rgba value", cb);
      }
      this._background = hex;
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, this);
      }
      return this;
    });
    jimpEvChange("scan", function(x, y, w, h, f, cb) {
      if (typeof x !== "number" || typeof y !== "number") {
        return _utils.throwError.call(this, "x and y must be numbers", cb);
      }
      if (typeof w !== "number" || typeof h !== "number") {
        return _utils.throwError.call(this, "w and h must be numbers", cb);
      }
      if (typeof f !== "function") {
        return _utils.throwError.call(this, "f must be a function", cb);
      }
      var result = (0, _utils.scan)(this, x, y, w, h, f);
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, result);
      }
      return result;
    });
    if ({}.ENVIRONMENT === "BROWSER") {
      var gl;
      if (typeof window !== "undefined" && (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === "object") {
        gl = window;
      }
      if (typeof self !== "undefined" && (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) === "object") {
        gl = self;
      }
      gl.Jimp = Jimp;
      gl.Buffer = Buffer;
    }
    var _default = Jimp;
    exports["default"] = _default;
  })(es$t);
  return es$t;
}
var hasRequiredEs$s;
function requireEs$s() {
  if (hasRequiredEs$s)
    return es$u;
  hasRequiredEs$s = 1;
  (function(exports) {
    var _interopRequireWildcard = requireInteropRequireWildcard();
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = configure;
    var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
    var _defineProperty2 = _interopRequireDefault(require$$1$1);
    var _slicedToArray2 = _interopRequireDefault(require$$4$1);
    var _core = _interopRequireWildcard(requireEs$t());
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(source, true).forEach(function(key) {
            (0, _defineProperty2["default"])(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function configure(configuration) {
      var jimpInstance = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _core["default"];
      var jimpConfig = {
        hasAlpha: {},
        encoders: {},
        decoders: {},
        "class": {},
        constants: {}
      };
      function addToConfig(newConfig) {
        Object.entries(newConfig).forEach(function(_ref) {
          var _ref2 = (0, _slicedToArray2["default"])(_ref, 2), key = _ref2[0], value = _ref2[1];
          jimpConfig[key] = _objectSpread({}, jimpConfig[key], {}, value);
        });
      }
      function addImageType(typeModule) {
        var type = typeModule();
        if (Array.isArray(type.mime)) {
          _core.addType.apply(void 0, (0, _toConsumableArray2["default"])(type.mime));
        } else {
          Object.entries(type.mime).forEach(function(mimeType) {
            return _core.addType.apply(void 0, (0, _toConsumableArray2["default"])(mimeType));
          });
        }
        delete type.mime;
        addToConfig(type);
      }
      function addPlugin(pluginModule) {
        var plugin = pluginModule(_core.jimpEvChange) || {};
        if (!plugin["class"] && !plugin.constants) {
          addToConfig({
            "class": plugin
          });
        } else {
          addToConfig(plugin);
        }
      }
      if (configuration.types) {
        configuration.types.forEach(addImageType);
        jimpInstance.decoders = _objectSpread({}, jimpInstance.decoders, {}, jimpConfig.decoders);
        jimpInstance.encoders = _objectSpread({}, jimpInstance.encoders, {}, jimpConfig.encoders);
        jimpInstance.hasAlpha = _objectSpread({}, jimpInstance.hasAlpha, {}, jimpConfig.hasAlpha);
      }
      if (configuration.plugins) {
        configuration.plugins.forEach(addPlugin);
      }
      (0, _core.addJimpMethods)(jimpConfig["class"], jimpInstance);
      (0, _core.addConstants)(jimpConfig.constants, jimpInstance);
      return _core["default"];
    }
  })(es$u);
  return es$u;
}
var es$r = {};
var timm = {};
var hasRequiredTimm;
function requireTimm() {
  if (hasRequiredTimm)
    return timm;
  hasRequiredTimm = 1;
  Object.defineProperty(timm, "__esModule", {
    value: true
  });
  timm.clone = clone;
  timm.addLast = addLast;
  timm.addFirst = addFirst;
  timm.removeLast = removeLast;
  timm.removeFirst = removeFirst;
  timm.insert = insert;
  timm.removeAt = removeAt;
  timm.replaceAt = replaceAt;
  timm.getIn = getIn;
  timm.set = set;
  timm.setIn = setIn;
  timm.update = update;
  timm.updateIn = updateIn;
  timm.merge = merge;
  timm.mergeDeep = mergeDeep;
  timm.mergeIn = mergeIn;
  timm.omit = omit;
  timm.addDefaults = addDefaults;
  timm.default = void 0;
  /*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   */
  const INVALID_ARGS = "INVALID_ARGS";
  function throwStr(msg) {
    throw new Error(msg);
  }
  function getKeysAndSymbols(obj) {
    const keys = Object.keys(obj);
    if (Object.getOwnPropertySymbols) {
      return keys.concat(Object.getOwnPropertySymbols(obj));
    }
    return keys;
  }
  const hasOwnProperty = {}.hasOwnProperty;
  function clone(obj0) {
    if (Array.isArray(obj0))
      return obj0.slice();
    const obj = obj0;
    const keys = getKeysAndSymbols(obj);
    const out = {};
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      out[key] = obj[key];
    }
    return out;
  }
  function isObject(o) {
    return o != null && typeof o === "object";
  }
  function addLast(array, val) {
    if (Array.isArray(val))
      return array.concat(val);
    return array.concat([val]);
  }
  function addFirst(array, val) {
    if (Array.isArray(val))
      return val.concat(array);
    return [val].concat(array);
  }
  function removeLast(array) {
    if (!array.length)
      return array;
    return array.slice(0, array.length - 1);
  }
  function removeFirst(array) {
    if (!array.length)
      return array;
    return array.slice(1);
  }
  function insert(array, idx, val) {
    return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
  }
  function removeAt(array, idx) {
    if (idx >= array.length || idx < 0)
      return array;
    return array.slice(0, idx).concat(array.slice(idx + 1));
  }
  function replaceAt(array, idx, newItem) {
    if (array[idx] === newItem)
      return array;
    const len = array.length;
    const result = Array(len);
    for (let i = 0; i < len; i++) {
      result[i] = array[i];
    }
    result[idx] = newItem;
    return result;
  }
  function getIn(obj, path) {
    if (!Array.isArray(path)) {
      throwStr(INVALID_ARGS);
    }
    if (obj == null)
      return void 0;
    let ptr = obj;
    for (let i = 0; i < path.length; i++) {
      const key = path[i];
      ptr = ptr != null ? ptr[key] : void 0;
      if (ptr === void 0)
        return ptr;
    }
    return ptr;
  }
  function set(obj0, key, val) {
    let obj = obj0;
    if (obj == null)
      obj = typeof key === "number" ? [] : {};
    if (obj[key] === val)
      return obj;
    const obj2 = clone(obj);
    obj2[key] = val;
    return obj2;
  }
  function setIn(obj, path, val) {
    if (!path.length)
      return val;
    return doSetIn(obj, path, val, 0);
  }
  function doSetIn(obj, path, val, idx) {
    let newValue;
    const key = path[idx];
    if (idx === path.length - 1) {
      newValue = val;
    } else {
      const nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
      newValue = doSetIn(nestedObj, path, val, idx + 1);
    }
    return set(obj, key, newValue);
  }
  function update(obj, key, fnUpdate) {
    const prevVal = obj == null ? void 0 : obj[key];
    const nextVal = fnUpdate(prevVal);
    return set(obj, key, nextVal);
  }
  function updateIn(obj, path, fnUpdate) {
    const prevVal = getIn(obj, path);
    const nextVal = fnUpdate(prevVal);
    return setIn(obj, path, nextVal);
  }
  function merge(a, b, c, d, e, f, ...rest) {
    return rest.length ? doMerge.call(null, false, false, a, b, c, d, e, f, ...rest) : doMerge(false, false, a, b, c, d, e, f);
  }
  function mergeDeep(a, b, c, d, e, f, ...rest) {
    return rest.length ? doMerge.call(null, false, true, a, b, c, d, e, f, ...rest) : doMerge(false, true, a, b, c, d, e, f);
  }
  function mergeIn(a, path, b, c, d, e, f, ...rest) {
    let prevVal = getIn(a, path);
    if (prevVal == null)
      prevVal = {};
    let nextVal;
    if (rest.length) {
      nextVal = doMerge.call(null, false, false, prevVal, b, c, d, e, f, ...rest);
    } else {
      nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
    }
    return setIn(a, path, nextVal);
  }
  function omit(obj, attrs) {
    const omitList = Array.isArray(attrs) ? attrs : [attrs];
    let fDoSomething = false;
    for (let i = 0; i < omitList.length; i++) {
      if (hasOwnProperty.call(obj, omitList[i])) {
        fDoSomething = true;
        break;
      }
    }
    if (!fDoSomething)
      return obj;
    const out = {};
    const keys = getKeysAndSymbols(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (omitList.indexOf(key) >= 0)
        continue;
      out[key] = obj[key];
    }
    return out;
  }
  function addDefaults(a, b, c, d, e, f, ...rest) {
    return rest.length ? doMerge.call(null, true, false, a, b, c, d, e, f, ...rest) : doMerge(true, false, a, b, c, d, e, f);
  }
  function doMerge(fAddDefaults, fDeep, first, ...rest) {
    let out = first;
    if (!(out != null)) {
      throwStr(INVALID_ARGS);
    }
    let fChanged = false;
    for (let idx = 0; idx < rest.length; idx++) {
      const obj = rest[idx];
      if (obj == null)
        continue;
      const keys = getKeysAndSymbols(obj);
      if (!keys.length)
        continue;
      for (let j = 0; j <= keys.length; j++) {
        const key = keys[j];
        if (fAddDefaults && out[key] !== void 0)
          continue;
        let nextVal = obj[key];
        if (fDeep && isObject(out[key]) && isObject(nextVal)) {
          nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
        }
        if (nextVal === void 0 || nextVal === out[key])
          continue;
        if (!fChanged) {
          fChanged = true;
          out = clone(out);
        }
        out[key] = nextVal;
      }
    }
    return out;
  }
  const timm$1 = {
    clone,
    addLast,
    addFirst,
    removeLast,
    removeFirst,
    insert,
    removeAt,
    replaceAt,
    getIn,
    set,
    setIn,
    update,
    updateIn,
    merge,
    mergeDeep,
    mergeIn,
    omit,
    addDefaults
  };
  var _default = timm$1;
  timm.default = _default;
  return timm;
}
var es$q = {};
var encoder$1 = { exports: {} };
var hasRequiredEncoder$1;
function requireEncoder$1() {
  if (hasRequiredEncoder$1)
    return encoder$1.exports;
  hasRequiredEncoder$1 = 1;
  (function(module) {
    function JPEGEncoder(quality) {
      var ffloor = Math.floor;
      var YTable = new Array(64);
      var UVTable = new Array(64);
      var fdtbl_Y = new Array(64);
      var fdtbl_UV = new Array(64);
      var YDC_HT;
      var UVDC_HT;
      var YAC_HT;
      var UVAC_HT;
      var bitcode = new Array(65535);
      var category = new Array(65535);
      var outputfDCTQuant = new Array(64);
      var DU = new Array(64);
      var byteout = [];
      var bytenew = 0;
      var bytepos = 7;
      var YDU = new Array(64);
      var UDU = new Array(64);
      var VDU = new Array(64);
      var clt = new Array(256);
      var RGB_YUV_TABLE = new Array(2048);
      var currentQuality;
      var ZigZag = [
        0,
        1,
        5,
        6,
        14,
        15,
        27,
        28,
        2,
        4,
        7,
        13,
        16,
        26,
        29,
        42,
        3,
        8,
        12,
        17,
        25,
        30,
        41,
        43,
        9,
        11,
        18,
        24,
        31,
        40,
        44,
        53,
        10,
        19,
        23,
        32,
        39,
        45,
        52,
        54,
        20,
        22,
        33,
        38,
        46,
        51,
        55,
        60,
        21,
        34,
        37,
        47,
        50,
        56,
        59,
        61,
        35,
        36,
        48,
        49,
        57,
        58,
        62,
        63
      ];
      var std_dc_luminance_nrcodes = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
      var std_dc_luminance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var std_ac_luminance_nrcodes = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125];
      var std_ac_luminance_values = [
        1,
        2,
        3,
        0,
        4,
        17,
        5,
        18,
        33,
        49,
        65,
        6,
        19,
        81,
        97,
        7,
        34,
        113,
        20,
        50,
        129,
        145,
        161,
        8,
        35,
        66,
        177,
        193,
        21,
        82,
        209,
        240,
        36,
        51,
        98,
        114,
        130,
        9,
        10,
        22,
        23,
        24,
        25,
        26,
        37,
        38,
        39,
        40,
        41,
        42,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        225,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        241,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
      ];
      var std_dc_chrominance_nrcodes = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
      var std_dc_chrominance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var std_ac_chrominance_nrcodes = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119];
      var std_ac_chrominance_values = [
        0,
        1,
        2,
        3,
        17,
        4,
        5,
        33,
        49,
        6,
        18,
        65,
        81,
        7,
        97,
        113,
        19,
        34,
        50,
        129,
        8,
        20,
        66,
        145,
        161,
        177,
        193,
        9,
        35,
        51,
        82,
        240,
        21,
        98,
        114,
        209,
        10,
        22,
        36,
        52,
        225,
        37,
        241,
        23,
        24,
        25,
        26,
        38,
        39,
        40,
        41,
        42,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
      ];
      function initQuantTables(sf) {
        var YQT = [
          16,
          11,
          10,
          16,
          24,
          40,
          51,
          61,
          12,
          12,
          14,
          19,
          26,
          58,
          60,
          55,
          14,
          13,
          16,
          24,
          40,
          57,
          69,
          56,
          14,
          17,
          22,
          29,
          51,
          87,
          80,
          62,
          18,
          22,
          37,
          56,
          68,
          109,
          103,
          77,
          24,
          35,
          55,
          64,
          81,
          104,
          113,
          92,
          49,
          64,
          78,
          87,
          103,
          121,
          120,
          101,
          72,
          92,
          95,
          98,
          112,
          100,
          103,
          99
        ];
        for (var i = 0; i < 64; i++) {
          var t = ffloor((YQT[i] * sf + 50) / 100);
          if (t < 1) {
            t = 1;
          } else if (t > 255) {
            t = 255;
          }
          YTable[ZigZag[i]] = t;
        }
        var UVQT = [
          17,
          18,
          24,
          47,
          99,
          99,
          99,
          99,
          18,
          21,
          26,
          66,
          99,
          99,
          99,
          99,
          24,
          26,
          56,
          99,
          99,
          99,
          99,
          99,
          47,
          66,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99
        ];
        for (var j = 0; j < 64; j++) {
          var u = ffloor((UVQT[j] * sf + 50) / 100);
          if (u < 1) {
            u = 1;
          } else if (u > 255) {
            u = 255;
          }
          UVTable[ZigZag[j]] = u;
        }
        var aasf = [
          1,
          1.387039845,
          1.306562965,
          1.175875602,
          1,
          0.785694958,
          0.5411961,
          0.275899379
        ];
        var k = 0;
        for (var row = 0; row < 8; row++) {
          for (var col = 0; col < 8; col++) {
            fdtbl_Y[k] = 1 / (YTable[ZigZag[k]] * aasf[row] * aasf[col] * 8);
            fdtbl_UV[k] = 1 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8);
            k++;
          }
        }
      }
      function computeHuffmanTbl(nrcodes, std_table) {
        var codevalue = 0;
        var pos_in_table = 0;
        var HT = new Array();
        for (var k = 1; k <= 16; k++) {
          for (var j = 1; j <= nrcodes[k]; j++) {
            HT[std_table[pos_in_table]] = [];
            HT[std_table[pos_in_table]][0] = codevalue;
            HT[std_table[pos_in_table]][1] = k;
            pos_in_table++;
            codevalue++;
          }
          codevalue *= 2;
        }
        return HT;
      }
      function initHuffmanTbl() {
        YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes, std_dc_luminance_values);
        UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes, std_dc_chrominance_values);
        YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes, std_ac_luminance_values);
        UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes, std_ac_chrominance_values);
      }
      function initCategoryNumber() {
        var nrlower = 1;
        var nrupper = 2;
        for (var cat = 1; cat <= 15; cat++) {
          for (var nr = nrlower; nr < nrupper; nr++) {
            category[32767 + nr] = cat;
            bitcode[32767 + nr] = [];
            bitcode[32767 + nr][1] = cat;
            bitcode[32767 + nr][0] = nr;
          }
          for (var nrneg = -(nrupper - 1); nrneg <= -nrlower; nrneg++) {
            category[32767 + nrneg] = cat;
            bitcode[32767 + nrneg] = [];
            bitcode[32767 + nrneg][1] = cat;
            bitcode[32767 + nrneg][0] = nrupper - 1 + nrneg;
          }
          nrlower <<= 1;
          nrupper <<= 1;
        }
      }
      function initRGBYUVTable() {
        for (var i = 0; i < 256; i++) {
          RGB_YUV_TABLE[i] = 19595 * i;
          RGB_YUV_TABLE[i + 256 >> 0] = 38470 * i;
          RGB_YUV_TABLE[i + 512 >> 0] = 7471 * i + 32768;
          RGB_YUV_TABLE[i + 768 >> 0] = -11059 * i;
          RGB_YUV_TABLE[i + 1024 >> 0] = -21709 * i;
          RGB_YUV_TABLE[i + 1280 >> 0] = 32768 * i + 8421375;
          RGB_YUV_TABLE[i + 1536 >> 0] = -27439 * i;
          RGB_YUV_TABLE[i + 1792 >> 0] = -5329 * i;
        }
      }
      function writeBits(bs) {
        var value = bs[0];
        var posval = bs[1] - 1;
        while (posval >= 0) {
          if (value & 1 << posval) {
            bytenew |= 1 << bytepos;
          }
          posval--;
          bytepos--;
          if (bytepos < 0) {
            if (bytenew == 255) {
              writeByte(255);
              writeByte(0);
            } else {
              writeByte(bytenew);
            }
            bytepos = 7;
            bytenew = 0;
          }
        }
      }
      function writeByte(value) {
        byteout.push(value);
      }
      function writeWord(value) {
        writeByte(value >> 8 & 255);
        writeByte(value & 255);
      }
      function fDCTQuant(data, fdtbl) {
        var d0, d1, d2, d3, d4, d5, d6, d7;
        var dataOff = 0;
        var i;
        var I8 = 8;
        var I64 = 64;
        for (i = 0; i < I8; ++i) {
          d0 = data[dataOff];
          d1 = data[dataOff + 1];
          d2 = data[dataOff + 2];
          d3 = data[dataOff + 3];
          d4 = data[dataOff + 4];
          d5 = data[dataOff + 5];
          d6 = data[dataOff + 6];
          d7 = data[dataOff + 7];
          var tmp0 = d0 + d7;
          var tmp7 = d0 - d7;
          var tmp1 = d1 + d6;
          var tmp6 = d1 - d6;
          var tmp2 = d2 + d5;
          var tmp5 = d2 - d5;
          var tmp3 = d3 + d4;
          var tmp4 = d3 - d4;
          var tmp10 = tmp0 + tmp3;
          var tmp13 = tmp0 - tmp3;
          var tmp11 = tmp1 + tmp2;
          var tmp12 = tmp1 - tmp2;
          data[dataOff] = tmp10 + tmp11;
          data[dataOff + 4] = tmp10 - tmp11;
          var z1 = (tmp12 + tmp13) * 0.707106781;
          data[dataOff + 2] = tmp13 + z1;
          data[dataOff + 6] = tmp13 - z1;
          tmp10 = tmp4 + tmp5;
          tmp11 = tmp5 + tmp6;
          tmp12 = tmp6 + tmp7;
          var z5 = (tmp10 - tmp12) * 0.382683433;
          var z2 = 0.5411961 * tmp10 + z5;
          var z4 = 1.306562965 * tmp12 + z5;
          var z3 = tmp11 * 0.707106781;
          var z11 = tmp7 + z3;
          var z13 = tmp7 - z3;
          data[dataOff + 5] = z13 + z2;
          data[dataOff + 3] = z13 - z2;
          data[dataOff + 1] = z11 + z4;
          data[dataOff + 7] = z11 - z4;
          dataOff += 8;
        }
        dataOff = 0;
        for (i = 0; i < I8; ++i) {
          d0 = data[dataOff];
          d1 = data[dataOff + 8];
          d2 = data[dataOff + 16];
          d3 = data[dataOff + 24];
          d4 = data[dataOff + 32];
          d5 = data[dataOff + 40];
          d6 = data[dataOff + 48];
          d7 = data[dataOff + 56];
          var tmp0p2 = d0 + d7;
          var tmp7p2 = d0 - d7;
          var tmp1p2 = d1 + d6;
          var tmp6p2 = d1 - d6;
          var tmp2p2 = d2 + d5;
          var tmp5p2 = d2 - d5;
          var tmp3p2 = d3 + d4;
          var tmp4p2 = d3 - d4;
          var tmp10p2 = tmp0p2 + tmp3p2;
          var tmp13p2 = tmp0p2 - tmp3p2;
          var tmp11p2 = tmp1p2 + tmp2p2;
          var tmp12p2 = tmp1p2 - tmp2p2;
          data[dataOff] = tmp10p2 + tmp11p2;
          data[dataOff + 32] = tmp10p2 - tmp11p2;
          var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781;
          data[dataOff + 16] = tmp13p2 + z1p2;
          data[dataOff + 48] = tmp13p2 - z1p2;
          tmp10p2 = tmp4p2 + tmp5p2;
          tmp11p2 = tmp5p2 + tmp6p2;
          tmp12p2 = tmp6p2 + tmp7p2;
          var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433;
          var z2p2 = 0.5411961 * tmp10p2 + z5p2;
          var z4p2 = 1.306562965 * tmp12p2 + z5p2;
          var z3p2 = tmp11p2 * 0.707106781;
          var z11p2 = tmp7p2 + z3p2;
          var z13p2 = tmp7p2 - z3p2;
          data[dataOff + 40] = z13p2 + z2p2;
          data[dataOff + 24] = z13p2 - z2p2;
          data[dataOff + 8] = z11p2 + z4p2;
          data[dataOff + 56] = z11p2 - z4p2;
          dataOff++;
        }
        var fDCTQuant2;
        for (i = 0; i < I64; ++i) {
          fDCTQuant2 = data[i] * fdtbl[i];
          outputfDCTQuant[i] = fDCTQuant2 > 0 ? fDCTQuant2 + 0.5 | 0 : fDCTQuant2 - 0.5 | 0;
        }
        return outputfDCTQuant;
      }
      function writeAPP0() {
        writeWord(65504);
        writeWord(16);
        writeByte(74);
        writeByte(70);
        writeByte(73);
        writeByte(70);
        writeByte(0);
        writeByte(1);
        writeByte(1);
        writeByte(0);
        writeWord(1);
        writeWord(1);
        writeByte(0);
        writeByte(0);
      }
      function writeAPP1(exifBuffer) {
        if (!exifBuffer)
          return;
        writeWord(65505);
        if (exifBuffer[0] === 69 && exifBuffer[1] === 120 && exifBuffer[2] === 105 && exifBuffer[3] === 102) {
          writeWord(exifBuffer.length + 2);
        } else {
          writeWord(exifBuffer.length + 5 + 2);
          writeByte(69);
          writeByte(120);
          writeByte(105);
          writeByte(102);
          writeByte(0);
        }
        for (var i = 0; i < exifBuffer.length; i++) {
          writeByte(exifBuffer[i]);
        }
      }
      function writeSOF0(width, height) {
        writeWord(65472);
        writeWord(17);
        writeByte(8);
        writeWord(height);
        writeWord(width);
        writeByte(3);
        writeByte(1);
        writeByte(17);
        writeByte(0);
        writeByte(2);
        writeByte(17);
        writeByte(1);
        writeByte(3);
        writeByte(17);
        writeByte(1);
      }
      function writeDQT() {
        writeWord(65499);
        writeWord(132);
        writeByte(0);
        for (var i = 0; i < 64; i++) {
          writeByte(YTable[i]);
        }
        writeByte(1);
        for (var j = 0; j < 64; j++) {
          writeByte(UVTable[j]);
        }
      }
      function writeDHT() {
        writeWord(65476);
        writeWord(418);
        writeByte(0);
        for (var i = 0; i < 16; i++) {
          writeByte(std_dc_luminance_nrcodes[i + 1]);
        }
        for (var j = 0; j <= 11; j++) {
          writeByte(std_dc_luminance_values[j]);
        }
        writeByte(16);
        for (var k = 0; k < 16; k++) {
          writeByte(std_ac_luminance_nrcodes[k + 1]);
        }
        for (var l = 0; l <= 161; l++) {
          writeByte(std_ac_luminance_values[l]);
        }
        writeByte(1);
        for (var m = 0; m < 16; m++) {
          writeByte(std_dc_chrominance_nrcodes[m + 1]);
        }
        for (var n = 0; n <= 11; n++) {
          writeByte(std_dc_chrominance_values[n]);
        }
        writeByte(17);
        for (var o = 0; o < 16; o++) {
          writeByte(std_ac_chrominance_nrcodes[o + 1]);
        }
        for (var p = 0; p <= 161; p++) {
          writeByte(std_ac_chrominance_values[p]);
        }
      }
      function writeCOM(comments) {
        if (typeof comments === "undefined" || comments.constructor !== Array)
          return;
        comments.forEach((e) => {
          if (typeof e !== "string")
            return;
          writeWord(65534);
          var l = e.length;
          writeWord(l + 2);
          var i;
          for (i = 0; i < l; i++)
            writeByte(e.charCodeAt(i));
        });
      }
      function writeSOS() {
        writeWord(65498);
        writeWord(12);
        writeByte(3);
        writeByte(1);
        writeByte(0);
        writeByte(2);
        writeByte(17);
        writeByte(3);
        writeByte(17);
        writeByte(0);
        writeByte(63);
        writeByte(0);
      }
      function processDU(CDU, fdtbl, DC, HTDC, HTAC) {
        var EOB = HTAC[0];
        var M16zeroes = HTAC[240];
        var pos;
        var I16 = 16;
        var I63 = 63;
        var I64 = 64;
        var DU_DCT = fDCTQuant(CDU, fdtbl);
        for (var j = 0; j < I64; ++j) {
          DU[ZigZag[j]] = DU_DCT[j];
        }
        var Diff = DU[0] - DC;
        DC = DU[0];
        if (Diff == 0) {
          writeBits(HTDC[0]);
        } else {
          pos = 32767 + Diff;
          writeBits(HTDC[category[pos]]);
          writeBits(bitcode[pos]);
        }
        var end0pos = 63;
        for (; end0pos > 0 && DU[end0pos] == 0; end0pos--) {
        }
        if (end0pos == 0) {
          writeBits(EOB);
          return DC;
        }
        var i = 1;
        var lng;
        while (i <= end0pos) {
          var startpos = i;
          for (; DU[i] == 0 && i <= end0pos; ++i) {
          }
          var nrzeroes = i - startpos;
          if (nrzeroes >= I16) {
            lng = nrzeroes >> 4;
            for (var nrmarker = 1; nrmarker <= lng; ++nrmarker)
              writeBits(M16zeroes);
            nrzeroes = nrzeroes & 15;
          }
          pos = 32767 + DU[i];
          writeBits(HTAC[(nrzeroes << 4) + category[pos]]);
          writeBits(bitcode[pos]);
          i++;
        }
        if (end0pos != I63) {
          writeBits(EOB);
        }
        return DC;
      }
      function initCharLookupTable() {
        var sfcc = String.fromCharCode;
        for (var i = 0; i < 256; i++) {
          clt[i] = sfcc(i);
        }
      }
      this.encode = function(image, quality2) {
        (/* @__PURE__ */ new Date()).getTime();
        if (quality2)
          setQuality(quality2);
        byteout = new Array();
        bytenew = 0;
        bytepos = 7;
        writeWord(65496);
        writeAPP0();
        writeCOM(image.comments);
        writeAPP1(image.exifBuffer);
        writeDQT();
        writeSOF0(image.width, image.height);
        writeDHT();
        writeSOS();
        var DCY = 0;
        var DCU = 0;
        var DCV = 0;
        bytenew = 0;
        bytepos = 7;
        this.encode.displayName = "_encode_";
        var imageData = image.data;
        var width = image.width;
        var height = image.height;
        var quadWidth = width * 4;
        var x, y = 0;
        var r, g, b;
        var start, p, col, row, pos;
        while (y < height) {
          x = 0;
          while (x < quadWidth) {
            start = quadWidth * y + x;
            p = start;
            col = -1;
            row = 0;
            for (pos = 0; pos < 64; pos++) {
              row = pos >> 3;
              col = (pos & 7) * 4;
              p = start + row * quadWidth + col;
              if (y + row >= height) {
                p -= quadWidth * (y + 1 + row - height);
              }
              if (x + col >= quadWidth) {
                p -= x + col - quadWidth + 4;
              }
              r = imageData[p++];
              g = imageData[p++];
              b = imageData[p++];
              YDU[pos] = (RGB_YUV_TABLE[r] + RGB_YUV_TABLE[g + 256 >> 0] + RGB_YUV_TABLE[b + 512 >> 0] >> 16) - 128;
              UDU[pos] = (RGB_YUV_TABLE[r + 768 >> 0] + RGB_YUV_TABLE[g + 1024 >> 0] + RGB_YUV_TABLE[b + 1280 >> 0] >> 16) - 128;
              VDU[pos] = (RGB_YUV_TABLE[r + 1280 >> 0] + RGB_YUV_TABLE[g + 1536 >> 0] + RGB_YUV_TABLE[b + 1792 >> 0] >> 16) - 128;
            }
            DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
            DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
            DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
            x += 32;
          }
          y += 8;
        }
        if (bytepos >= 0) {
          var fillbits = [];
          fillbits[1] = bytepos + 1;
          fillbits[0] = (1 << bytepos + 1) - 1;
          writeBits(fillbits);
        }
        writeWord(65497);
        return Buffer.from(byteout);
      };
      function setQuality(quality2) {
        if (quality2 <= 0) {
          quality2 = 1;
        }
        if (quality2 > 100) {
          quality2 = 100;
        }
        if (currentQuality == quality2)
          return;
        var sf = 0;
        if (quality2 < 50) {
          sf = Math.floor(5e3 / quality2);
        } else {
          sf = Math.floor(200 - quality2 * 2);
        }
        initQuantTables(sf);
        currentQuality = quality2;
      }
      function init() {
        var time_start = (/* @__PURE__ */ new Date()).getTime();
        if (!quality)
          quality = 50;
        initCharLookupTable();
        initHuffmanTbl();
        initCategoryNumber();
        initRGBYUVTable();
        setQuality(quality);
        (/* @__PURE__ */ new Date()).getTime() - time_start;
      }
      init();
    }
    {
      module.exports = encode2;
    }
    function encode2(imgData, qu) {
      if (typeof qu === "undefined")
        qu = 50;
      var encoder2 = new JPEGEncoder(qu);
      var data = encoder2.encode(imgData, qu);
      return {
        data,
        width: imgData.width,
        height: imgData.height
      };
    }
  })(encoder$1);
  return encoder$1.exports;
}
var decoder$1 = { exports: {} };
var hasRequiredDecoder$1;
function requireDecoder$1() {
  if (hasRequiredDecoder$1)
    return decoder$1.exports;
  hasRequiredDecoder$1 = 1;
  (function(module) {
    var JpegImage = function jpegImage() {
      var dctZigZag = new Int32Array([
        0,
        1,
        8,
        16,
        9,
        2,
        3,
        10,
        17,
        24,
        32,
        25,
        18,
        11,
        4,
        5,
        12,
        19,
        26,
        33,
        40,
        48,
        41,
        34,
        27,
        20,
        13,
        6,
        7,
        14,
        21,
        28,
        35,
        42,
        49,
        56,
        57,
        50,
        43,
        36,
        29,
        22,
        15,
        23,
        30,
        37,
        44,
        51,
        58,
        59,
        52,
        45,
        38,
        31,
        39,
        46,
        53,
        60,
        61,
        54,
        47,
        55,
        62,
        63
      ]);
      var dctCos1 = 4017;
      var dctSin1 = 799;
      var dctCos3 = 3406;
      var dctSin3 = 2276;
      var dctCos6 = 1567;
      var dctSin6 = 3784;
      var dctSqrt2 = 5793;
      var dctSqrt1d2 = 2896;
      function constructor() {
      }
      function buildHuffmanTable(codeLengths, values) {
        var k = 0, code = [], i, j, length = 16;
        while (length > 0 && !codeLengths[length - 1])
          length--;
        code.push({ children: [], index: 0 });
        var p = code[0], q;
        for (i = 0; i < length; i++) {
          for (j = 0; j < codeLengths[i]; j++) {
            p = code.pop();
            p.children[p.index] = values[k];
            while (p.index > 0) {
              if (code.length === 0)
                throw new Error("Could not recreate Huffman Table");
              p = code.pop();
            }
            p.index++;
            code.push(p);
            while (code.length <= i) {
              code.push(q = { children: [], index: 0 });
              p.children[p.index] = q.children;
              p = q;
            }
            k++;
          }
          if (i + 1 < length) {
            code.push(q = { children: [], index: 0 });
            p.children[p.index] = q.children;
            p = q;
          }
        }
        return code[0].children;
      }
      function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive, opts) {
        frame.precision;
        frame.samplesPerLine;
        frame.scanLines;
        var mcusPerLine = frame.mcusPerLine;
        var progressive = frame.progressive;
        frame.maxH;
        frame.maxV;
        var startOffset = offset, bitsData = 0, bitsCount = 0;
        function readBit() {
          if (bitsCount > 0) {
            bitsCount--;
            return bitsData >> bitsCount & 1;
          }
          bitsData = data[offset++];
          if (bitsData == 255) {
            var nextByte = data[offset++];
            if (nextByte) {
              throw new Error("unexpected marker: " + (bitsData << 8 | nextByte).toString(16));
            }
          }
          bitsCount = 7;
          return bitsData >>> 7;
        }
        function decodeHuffman(tree) {
          var node = tree, bit;
          while ((bit = readBit()) !== null) {
            node = node[bit];
            if (typeof node === "number")
              return node;
            if (typeof node !== "object")
              throw new Error("invalid huffman sequence");
          }
          return null;
        }
        function receive(length) {
          var n2 = 0;
          while (length > 0) {
            var bit = readBit();
            if (bit === null)
              return;
            n2 = n2 << 1 | bit;
            length--;
          }
          return n2;
        }
        function receiveAndExtend(length) {
          var n2 = receive(length);
          if (n2 >= 1 << length - 1)
            return n2;
          return n2 + (-1 << length) + 1;
        }
        function decodeBaseline(component2, zz) {
          var t = decodeHuffman(component2.huffmanTableDC);
          var diff = t === 0 ? 0 : receiveAndExtend(t);
          zz[0] = component2.pred += diff;
          var k2 = 1;
          while (k2 < 64) {
            var rs = decodeHuffman(component2.huffmanTableAC);
            var s = rs & 15, r = rs >> 4;
            if (s === 0) {
              if (r < 15)
                break;
              k2 += 16;
              continue;
            }
            k2 += r;
            var z = dctZigZag[k2];
            zz[z] = receiveAndExtend(s);
            k2++;
          }
        }
        function decodeDCFirst(component2, zz) {
          var t = decodeHuffman(component2.huffmanTableDC);
          var diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
          zz[0] = component2.pred += diff;
        }
        function decodeDCSuccessive(component2, zz) {
          zz[0] |= readBit() << successive;
        }
        var eobrun = 0;
        function decodeACFirst(component2, zz) {
          if (eobrun > 0) {
            eobrun--;
            return;
          }
          var k2 = spectralStart, e = spectralEnd;
          while (k2 <= e) {
            var rs = decodeHuffman(component2.huffmanTableAC);
            var s = rs & 15, r = rs >> 4;
            if (s === 0) {
              if (r < 15) {
                eobrun = receive(r) + (1 << r) - 1;
                break;
              }
              k2 += 16;
              continue;
            }
            k2 += r;
            var z = dctZigZag[k2];
            zz[z] = receiveAndExtend(s) * (1 << successive);
            k2++;
          }
        }
        var successiveACState = 0, successiveACNextValue;
        function decodeACSuccessive(component2, zz) {
          var k2 = spectralStart, e = spectralEnd, r = 0;
          while (k2 <= e) {
            var z = dctZigZag[k2];
            var direction = zz[z] < 0 ? -1 : 1;
            switch (successiveACState) {
              case 0:
                var rs = decodeHuffman(component2.huffmanTableAC);
                var s = rs & 15, r = rs >> 4;
                if (s === 0) {
                  if (r < 15) {
                    eobrun = receive(r) + (1 << r);
                    successiveACState = 4;
                  } else {
                    r = 16;
                    successiveACState = 1;
                  }
                } else {
                  if (s !== 1)
                    throw new Error("invalid ACn encoding");
                  successiveACNextValue = receiveAndExtend(s);
                  successiveACState = r ? 2 : 3;
                }
                continue;
              case 1:
              case 2:
                if (zz[z])
                  zz[z] += (readBit() << successive) * direction;
                else {
                  r--;
                  if (r === 0)
                    successiveACState = successiveACState == 2 ? 3 : 0;
                }
                break;
              case 3:
                if (zz[z])
                  zz[z] += (readBit() << successive) * direction;
                else {
                  zz[z] = successiveACNextValue << successive;
                  successiveACState = 0;
                }
                break;
              case 4:
                if (zz[z])
                  zz[z] += (readBit() << successive) * direction;
                break;
            }
            k2++;
          }
          if (successiveACState === 4) {
            eobrun--;
            if (eobrun === 0)
              successiveACState = 0;
          }
        }
        function decodeMcu(component2, decode3, mcu2, row, col) {
          var mcuRow = mcu2 / mcusPerLine | 0;
          var mcuCol = mcu2 % mcusPerLine;
          var blockRow = mcuRow * component2.v + row;
          var blockCol = mcuCol * component2.h + col;
          if (component2.blocks[blockRow] === void 0 && opts.tolerantDecoding)
            return;
          decode3(component2, component2.blocks[blockRow][blockCol]);
        }
        function decodeBlock(component2, decode3, mcu2) {
          var blockRow = mcu2 / component2.blocksPerLine | 0;
          var blockCol = mcu2 % component2.blocksPerLine;
          if (component2.blocks[blockRow] === void 0 && opts.tolerantDecoding)
            return;
          decode3(component2, component2.blocks[blockRow][blockCol]);
        }
        var componentsLength = components.length;
        var component, i, j, k, n;
        var decodeFn;
        if (progressive) {
          if (spectralStart === 0)
            decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
          else
            decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
        } else {
          decodeFn = decodeBaseline;
        }
        var mcu = 0, marker;
        var mcuExpected;
        if (componentsLength == 1) {
          mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
        } else {
          mcuExpected = mcusPerLine * frame.mcusPerColumn;
        }
        if (!resetInterval)
          resetInterval = mcuExpected;
        var h, v;
        while (mcu < mcuExpected) {
          for (i = 0; i < componentsLength; i++)
            components[i].pred = 0;
          eobrun = 0;
          if (componentsLength == 1) {
            component = components[0];
            for (n = 0; n < resetInterval; n++) {
              decodeBlock(component, decodeFn, mcu);
              mcu++;
            }
          } else {
            for (n = 0; n < resetInterval; n++) {
              for (i = 0; i < componentsLength; i++) {
                component = components[i];
                h = component.h;
                v = component.v;
                for (j = 0; j < v; j++) {
                  for (k = 0; k < h; k++) {
                    decodeMcu(component, decodeFn, mcu, j, k);
                  }
                }
              }
              mcu++;
              if (mcu === mcuExpected)
                break;
            }
          }
          if (mcu === mcuExpected) {
            do {
              if (data[offset] === 255) {
                if (data[offset + 1] !== 0) {
                  break;
                }
              }
              offset += 1;
            } while (offset < data.length - 2);
          }
          bitsCount = 0;
          marker = data[offset] << 8 | data[offset + 1];
          if (marker < 65280) {
            throw new Error("marker was not found");
          }
          if (marker >= 65488 && marker <= 65495) {
            offset += 2;
          } else
            break;
        }
        return offset - startOffset;
      }
      function buildComponentData(frame, component) {
        var lines = [];
        var blocksPerLine = component.blocksPerLine;
        var blocksPerColumn = component.blocksPerColumn;
        var samplesPerLine = blocksPerLine << 3;
        var R = new Int32Array(64), r = new Uint8Array(64);
        function quantizeAndInverse(zz, dataOut, dataIn) {
          var qt = component.quantizationTable;
          var v0, v1, v2, v3, v4, v5, v6, v7, t;
          var p = dataIn;
          var i2;
          for (i2 = 0; i2 < 64; i2++)
            p[i2] = zz[i2] * qt[i2];
          for (i2 = 0; i2 < 8; ++i2) {
            var row = 8 * i2;
            if (p[1 + row] == 0 && p[2 + row] == 0 && p[3 + row] == 0 && p[4 + row] == 0 && p[5 + row] == 0 && p[6 + row] == 0 && p[7 + row] == 0) {
              t = dctSqrt2 * p[0 + row] + 512 >> 10;
              p[0 + row] = t;
              p[1 + row] = t;
              p[2 + row] = t;
              p[3 + row] = t;
              p[4 + row] = t;
              p[5 + row] = t;
              p[6 + row] = t;
              p[7 + row] = t;
              continue;
            }
            v0 = dctSqrt2 * p[0 + row] + 128 >> 8;
            v1 = dctSqrt2 * p[4 + row] + 128 >> 8;
            v2 = p[2 + row];
            v3 = p[6 + row];
            v4 = dctSqrt1d2 * (p[1 + row] - p[7 + row]) + 128 >> 8;
            v7 = dctSqrt1d2 * (p[1 + row] + p[7 + row]) + 128 >> 8;
            v5 = p[3 + row] << 4;
            v6 = p[5 + row] << 4;
            t = v0 - v1 + 1 >> 1;
            v0 = v0 + v1 + 1 >> 1;
            v1 = t;
            t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
            v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
            v3 = t;
            t = v4 - v6 + 1 >> 1;
            v4 = v4 + v6 + 1 >> 1;
            v6 = t;
            t = v7 + v5 + 1 >> 1;
            v5 = v7 - v5 + 1 >> 1;
            v7 = t;
            t = v0 - v3 + 1 >> 1;
            v0 = v0 + v3 + 1 >> 1;
            v3 = t;
            t = v1 - v2 + 1 >> 1;
            v1 = v1 + v2 + 1 >> 1;
            v2 = t;
            t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
            v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
            v7 = t;
            t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
            v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
            v6 = t;
            p[0 + row] = v0 + v7;
            p[7 + row] = v0 - v7;
            p[1 + row] = v1 + v6;
            p[6 + row] = v1 - v6;
            p[2 + row] = v2 + v5;
            p[5 + row] = v2 - v5;
            p[3 + row] = v3 + v4;
            p[4 + row] = v3 - v4;
          }
          for (i2 = 0; i2 < 8; ++i2) {
            var col = i2;
            if (p[1 * 8 + col] == 0 && p[2 * 8 + col] == 0 && p[3 * 8 + col] == 0 && p[4 * 8 + col] == 0 && p[5 * 8 + col] == 0 && p[6 * 8 + col] == 0 && p[7 * 8 + col] == 0) {
              t = dctSqrt2 * dataIn[i2 + 0] + 8192 >> 14;
              p[0 * 8 + col] = t;
              p[1 * 8 + col] = t;
              p[2 * 8 + col] = t;
              p[3 * 8 + col] = t;
              p[4 * 8 + col] = t;
              p[5 * 8 + col] = t;
              p[6 * 8 + col] = t;
              p[7 * 8 + col] = t;
              continue;
            }
            v0 = dctSqrt2 * p[0 * 8 + col] + 2048 >> 12;
            v1 = dctSqrt2 * p[4 * 8 + col] + 2048 >> 12;
            v2 = p[2 * 8 + col];
            v3 = p[6 * 8 + col];
            v4 = dctSqrt1d2 * (p[1 * 8 + col] - p[7 * 8 + col]) + 2048 >> 12;
            v7 = dctSqrt1d2 * (p[1 * 8 + col] + p[7 * 8 + col]) + 2048 >> 12;
            v5 = p[3 * 8 + col];
            v6 = p[5 * 8 + col];
            t = v0 - v1 + 1 >> 1;
            v0 = v0 + v1 + 1 >> 1;
            v1 = t;
            t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
            v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
            v3 = t;
            t = v4 - v6 + 1 >> 1;
            v4 = v4 + v6 + 1 >> 1;
            v6 = t;
            t = v7 + v5 + 1 >> 1;
            v5 = v7 - v5 + 1 >> 1;
            v7 = t;
            t = v0 - v3 + 1 >> 1;
            v0 = v0 + v3 + 1 >> 1;
            v3 = t;
            t = v1 - v2 + 1 >> 1;
            v1 = v1 + v2 + 1 >> 1;
            v2 = t;
            t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
            v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
            v7 = t;
            t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
            v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
            v6 = t;
            p[0 * 8 + col] = v0 + v7;
            p[7 * 8 + col] = v0 - v7;
            p[1 * 8 + col] = v1 + v6;
            p[6 * 8 + col] = v1 - v6;
            p[2 * 8 + col] = v2 + v5;
            p[5 * 8 + col] = v2 - v5;
            p[3 * 8 + col] = v3 + v4;
            p[4 * 8 + col] = v3 - v4;
          }
          for (i2 = 0; i2 < 64; ++i2) {
            var sample2 = 128 + (p[i2] + 8 >> 4);
            dataOut[i2] = sample2 < 0 ? 0 : sample2 > 255 ? 255 : sample2;
          }
        }
        requestMemoryAllocation(samplesPerLine * blocksPerColumn * 8);
        var i, j;
        for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
          var scanLine = blockRow << 3;
          for (i = 0; i < 8; i++)
            lines.push(new Uint8Array(samplesPerLine));
          for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
            quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);
            var offset = 0, sample = blockCol << 3;
            for (j = 0; j < 8; j++) {
              var line = lines[scanLine + j];
              for (i = 0; i < 8; i++)
                line[sample + i] = r[offset++];
            }
          }
        }
        return lines;
      }
      function clampTo8bit(a) {
        return a < 0 ? 0 : a > 255 ? 255 : a;
      }
      constructor.prototype = {
        load: function load(path) {
          var xhr2 = new XMLHttpRequest();
          xhr2.open("GET", path, true);
          xhr2.responseType = "arraybuffer";
          xhr2.onload = function() {
            var data = new Uint8Array(xhr2.response || xhr2.mozResponseArrayBuffer);
            this.parse(data);
            if (this.onload)
              this.onload();
          }.bind(this);
          xhr2.send(null);
        },
        parse: function parse(data) {
          var maxResolutionInPixels = this.opts.maxResolutionInMP * 1e3 * 1e3;
          var offset = 0;
          data.length;
          function readUint16() {
            var value = data[offset] << 8 | data[offset + 1];
            offset += 2;
            return value;
          }
          function readDataBlock() {
            var length = readUint16();
            var array = data.subarray(offset, offset + length - 2);
            offset += array.length;
            return array;
          }
          function prepareComponents(frame2) {
            var maxH = 1, maxV = 1;
            var component2, componentId2;
            for (componentId2 in frame2.components) {
              if (frame2.components.hasOwnProperty(componentId2)) {
                component2 = frame2.components[componentId2];
                if (maxH < component2.h)
                  maxH = component2.h;
                if (maxV < component2.v)
                  maxV = component2.v;
              }
            }
            var mcusPerLine = Math.ceil(frame2.samplesPerLine / 8 / maxH);
            var mcusPerColumn = Math.ceil(frame2.scanLines / 8 / maxV);
            for (componentId2 in frame2.components) {
              if (frame2.components.hasOwnProperty(componentId2)) {
                component2 = frame2.components[componentId2];
                var blocksPerLine = Math.ceil(Math.ceil(frame2.samplesPerLine / 8) * component2.h / maxH);
                var blocksPerColumn = Math.ceil(Math.ceil(frame2.scanLines / 8) * component2.v / maxV);
                var blocksPerLineForMcu = mcusPerLine * component2.h;
                var blocksPerColumnForMcu = mcusPerColumn * component2.v;
                var blocksToAllocate = blocksPerColumnForMcu * blocksPerLineForMcu;
                var blocks = [];
                requestMemoryAllocation(blocksToAllocate * 256);
                for (var i2 = 0; i2 < blocksPerColumnForMcu; i2++) {
                  var row = [];
                  for (var j2 = 0; j2 < blocksPerLineForMcu; j2++)
                    row.push(new Int32Array(64));
                  blocks.push(row);
                }
                component2.blocksPerLine = blocksPerLine;
                component2.blocksPerColumn = blocksPerColumn;
                component2.blocks = blocks;
              }
            }
            frame2.maxH = maxH;
            frame2.maxV = maxV;
            frame2.mcusPerLine = mcusPerLine;
            frame2.mcusPerColumn = mcusPerColumn;
          }
          var jfif = null;
          var adobe = null;
          var frame, resetInterval;
          var quantizationTables = [], frames = [];
          var huffmanTablesAC = [], huffmanTablesDC = [];
          var fileMarker = readUint16();
          var malformedDataOffset = -1;
          this.comments = [];
          if (fileMarker != 65496) {
            throw new Error("SOI not found");
          }
          fileMarker = readUint16();
          while (fileMarker != 65497) {
            var i, j;
            switch (fileMarker) {
              case 65280:
                break;
              case 65504:
              case 65505:
              case 65506:
              case 65507:
              case 65508:
              case 65509:
              case 65510:
              case 65511:
              case 65512:
              case 65513:
              case 65514:
              case 65515:
              case 65516:
              case 65517:
              case 65518:
              case 65519:
              case 65534:
                var appData = readDataBlock();
                if (fileMarker === 65534) {
                  var comment = String.fromCharCode.apply(null, appData);
                  this.comments.push(comment);
                }
                if (fileMarker === 65504) {
                  if (appData[0] === 74 && appData[1] === 70 && appData[2] === 73 && appData[3] === 70 && appData[4] === 0) {
                    jfif = {
                      version: { major: appData[5], minor: appData[6] },
                      densityUnits: appData[7],
                      xDensity: appData[8] << 8 | appData[9],
                      yDensity: appData[10] << 8 | appData[11],
                      thumbWidth: appData[12],
                      thumbHeight: appData[13],
                      thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
                    };
                  }
                }
                if (fileMarker === 65505) {
                  if (appData[0] === 69 && appData[1] === 120 && appData[2] === 105 && appData[3] === 102 && appData[4] === 0) {
                    this.exifBuffer = appData.subarray(5, appData.length);
                  }
                }
                if (fileMarker === 65518) {
                  if (appData[0] === 65 && appData[1] === 100 && appData[2] === 111 && appData[3] === 98 && appData[4] === 101 && appData[5] === 0) {
                    adobe = {
                      version: appData[6],
                      flags0: appData[7] << 8 | appData[8],
                      flags1: appData[9] << 8 | appData[10],
                      transformCode: appData[11]
                    };
                  }
                }
                break;
              case 65499:
                var quantizationTablesLength = readUint16();
                var quantizationTablesEnd = quantizationTablesLength + offset - 2;
                while (offset < quantizationTablesEnd) {
                  var quantizationTableSpec = data[offset++];
                  requestMemoryAllocation(64 * 4);
                  var tableData = new Int32Array(64);
                  if (quantizationTableSpec >> 4 === 0) {
                    for (j = 0; j < 64; j++) {
                      var z = dctZigZag[j];
                      tableData[z] = data[offset++];
                    }
                  } else if (quantizationTableSpec >> 4 === 1) {
                    for (j = 0; j < 64; j++) {
                      var z = dctZigZag[j];
                      tableData[z] = readUint16();
                    }
                  } else
                    throw new Error("DQT: invalid table spec");
                  quantizationTables[quantizationTableSpec & 15] = tableData;
                }
                break;
              case 65472:
              case 65473:
              case 65474:
                readUint16();
                frame = {};
                frame.extended = fileMarker === 65473;
                frame.progressive = fileMarker === 65474;
                frame.precision = data[offset++];
                frame.scanLines = readUint16();
                frame.samplesPerLine = readUint16();
                frame.components = {};
                frame.componentsOrder = [];
                var pixelsInFrame = frame.scanLines * frame.samplesPerLine;
                if (pixelsInFrame > maxResolutionInPixels) {
                  var exceededAmount = Math.ceil((pixelsInFrame - maxResolutionInPixels) / 1e6);
                  throw new Error(`maxResolutionInMP limit exceeded by ${exceededAmount}MP`);
                }
                var componentsCount = data[offset++], componentId;
                for (i = 0; i < componentsCount; i++) {
                  componentId = data[offset];
                  var h = data[offset + 1] >> 4;
                  var v = data[offset + 1] & 15;
                  var qId = data[offset + 2];
                  if (h <= 0 || v <= 0) {
                    throw new Error("Invalid sampling factor, expected values above 0");
                  }
                  frame.componentsOrder.push(componentId);
                  frame.components[componentId] = {
                    h,
                    v,
                    quantizationIdx: qId
                  };
                  offset += 3;
                }
                prepareComponents(frame);
                frames.push(frame);
                break;
              case 65476:
                var huffmanLength = readUint16();
                for (i = 2; i < huffmanLength; ) {
                  var huffmanTableSpec = data[offset++];
                  var codeLengths = new Uint8Array(16);
                  var codeLengthSum = 0;
                  for (j = 0; j < 16; j++, offset++) {
                    codeLengthSum += codeLengths[j] = data[offset];
                  }
                  requestMemoryAllocation(16 + codeLengthSum);
                  var huffmanValues = new Uint8Array(codeLengthSum);
                  for (j = 0; j < codeLengthSum; j++, offset++)
                    huffmanValues[j] = data[offset];
                  i += 17 + codeLengthSum;
                  (huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
                }
                break;
              case 65501:
                readUint16();
                resetInterval = readUint16();
                break;
              case 65500:
                readUint16();
                readUint16();
                break;
              case 65498:
                readUint16();
                var selectorsCount = data[offset++];
                var components = [], component;
                for (i = 0; i < selectorsCount; i++) {
                  component = frame.components[data[offset++]];
                  var tableSpec = data[offset++];
                  component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
                  component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
                  components.push(component);
                }
                var spectralStart = data[offset++];
                var spectralEnd = data[offset++];
                var successiveApproximation = data[offset++];
                var processed = decodeScan(
                  data,
                  offset,
                  frame,
                  components,
                  resetInterval,
                  spectralStart,
                  spectralEnd,
                  successiveApproximation >> 4,
                  successiveApproximation & 15,
                  this.opts
                );
                offset += processed;
                break;
              case 65535:
                if (data[offset] !== 255) {
                  offset--;
                }
                break;
              default:
                if (data[offset - 3] == 255 && data[offset - 2] >= 192 && data[offset - 2] <= 254) {
                  offset -= 3;
                  break;
                } else if (fileMarker === 224 || fileMarker == 225) {
                  if (malformedDataOffset !== -1) {
                    throw new Error(`first unknown JPEG marker at offset ${malformedDataOffset.toString(16)}, second unknown JPEG marker ${fileMarker.toString(16)} at offset ${(offset - 1).toString(16)}`);
                  }
                  malformedDataOffset = offset - 1;
                  const nextOffset = readUint16();
                  if (data[offset + nextOffset - 2] === 255) {
                    offset += nextOffset - 2;
                    break;
                  }
                }
                throw new Error("unknown JPEG marker " + fileMarker.toString(16));
            }
            fileMarker = readUint16();
          }
          if (frames.length != 1)
            throw new Error("only single frame JPEGs supported");
          for (var i = 0; i < frames.length; i++) {
            var cp = frames[i].components;
            for (var j in cp) {
              cp[j].quantizationTable = quantizationTables[cp[j].quantizationIdx];
              delete cp[j].quantizationIdx;
            }
          }
          this.width = frame.samplesPerLine;
          this.height = frame.scanLines;
          this.jfif = jfif;
          this.adobe = adobe;
          this.components = [];
          for (var i = 0; i < frame.componentsOrder.length; i++) {
            var component = frame.components[frame.componentsOrder[i]];
            this.components.push({
              lines: buildComponentData(frame, component),
              scaleX: component.h / frame.maxH,
              scaleY: component.v / frame.maxV
            });
          }
        },
        getData: function getData(width, height) {
          var scaleX = this.width / width, scaleY = this.height / height;
          var component1, component2, component3, component4;
          var component1Line, component2Line, component3Line, component4Line;
          var x, y;
          var offset = 0;
          var Y, Cb, Cr, K, C, M, Ye, R, G, B;
          var colorTransform;
          var dataLength = width * height * this.components.length;
          requestMemoryAllocation(dataLength);
          var data = new Uint8Array(dataLength);
          switch (this.components.length) {
            case 1:
              component1 = this.components[0];
              for (y = 0; y < height; y++) {
                component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                for (x = 0; x < width; x++) {
                  Y = component1Line[0 | x * component1.scaleX * scaleX];
                  data[offset++] = Y;
                }
              }
              break;
            case 2:
              component1 = this.components[0];
              component2 = this.components[1];
              for (y = 0; y < height; y++) {
                component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                for (x = 0; x < width; x++) {
                  Y = component1Line[0 | x * component1.scaleX * scaleX];
                  data[offset++] = Y;
                  Y = component2Line[0 | x * component2.scaleX * scaleX];
                  data[offset++] = Y;
                }
              }
              break;
            case 3:
              colorTransform = true;
              if (this.adobe && this.adobe.transformCode)
                colorTransform = true;
              else if (typeof this.opts.colorTransform !== "undefined")
                colorTransform = !!this.opts.colorTransform;
              component1 = this.components[0];
              component2 = this.components[1];
              component3 = this.components[2];
              for (y = 0; y < height; y++) {
                component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                component3Line = component3.lines[0 | y * component3.scaleY * scaleY];
                for (x = 0; x < width; x++) {
                  if (!colorTransform) {
                    R = component1Line[0 | x * component1.scaleX * scaleX];
                    G = component2Line[0 | x * component2.scaleX * scaleX];
                    B = component3Line[0 | x * component3.scaleX * scaleX];
                  } else {
                    Y = component1Line[0 | x * component1.scaleX * scaleX];
                    Cb = component2Line[0 | x * component2.scaleX * scaleX];
                    Cr = component3Line[0 | x * component3.scaleX * scaleX];
                    R = clampTo8bit(Y + 1.402 * (Cr - 128));
                    G = clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
                    B = clampTo8bit(Y + 1.772 * (Cb - 128));
                  }
                  data[offset++] = R;
                  data[offset++] = G;
                  data[offset++] = B;
                }
              }
              break;
            case 4:
              if (!this.adobe)
                throw new Error("Unsupported color mode (4 components)");
              colorTransform = false;
              if (this.adobe && this.adobe.transformCode)
                colorTransform = true;
              else if (typeof this.opts.colorTransform !== "undefined")
                colorTransform = !!this.opts.colorTransform;
              component1 = this.components[0];
              component2 = this.components[1];
              component3 = this.components[2];
              component4 = this.components[3];
              for (y = 0; y < height; y++) {
                component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                component3Line = component3.lines[0 | y * component3.scaleY * scaleY];
                component4Line = component4.lines[0 | y * component4.scaleY * scaleY];
                for (x = 0; x < width; x++) {
                  if (!colorTransform) {
                    C = component1Line[0 | x * component1.scaleX * scaleX];
                    M = component2Line[0 | x * component2.scaleX * scaleX];
                    Ye = component3Line[0 | x * component3.scaleX * scaleX];
                    K = component4Line[0 | x * component4.scaleX * scaleX];
                  } else {
                    Y = component1Line[0 | x * component1.scaleX * scaleX];
                    Cb = component2Line[0 | x * component2.scaleX * scaleX];
                    Cr = component3Line[0 | x * component3.scaleX * scaleX];
                    K = component4Line[0 | x * component4.scaleX * scaleX];
                    C = 255 - clampTo8bit(Y + 1.402 * (Cr - 128));
                    M = 255 - clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
                    Ye = 255 - clampTo8bit(Y + 1.772 * (Cb - 128));
                  }
                  data[offset++] = 255 - C;
                  data[offset++] = 255 - M;
                  data[offset++] = 255 - Ye;
                  data[offset++] = 255 - K;
                }
              }
              break;
            default:
              throw new Error("Unsupported color mode");
          }
          return data;
        },
        copyToImageData: function copyToImageData(imageData, formatAsRGBA) {
          var width = imageData.width, height = imageData.height;
          var imageDataArray = imageData.data;
          var data = this.getData(width, height);
          var i = 0, j = 0, x, y;
          var Y, K, C, M, R, G, B;
          switch (this.components.length) {
            case 1:
              for (y = 0; y < height; y++) {
                for (x = 0; x < width; x++) {
                  Y = data[i++];
                  imageDataArray[j++] = Y;
                  imageDataArray[j++] = Y;
                  imageDataArray[j++] = Y;
                  if (formatAsRGBA) {
                    imageDataArray[j++] = 255;
                  }
                }
              }
              break;
            case 3:
              for (y = 0; y < height; y++) {
                for (x = 0; x < width; x++) {
                  R = data[i++];
                  G = data[i++];
                  B = data[i++];
                  imageDataArray[j++] = R;
                  imageDataArray[j++] = G;
                  imageDataArray[j++] = B;
                  if (formatAsRGBA) {
                    imageDataArray[j++] = 255;
                  }
                }
              }
              break;
            case 4:
              for (y = 0; y < height; y++) {
                for (x = 0; x < width; x++) {
                  C = data[i++];
                  M = data[i++];
                  Y = data[i++];
                  K = data[i++];
                  R = 255 - clampTo8bit(C * (1 - K / 255) + K);
                  G = 255 - clampTo8bit(M * (1 - K / 255) + K);
                  B = 255 - clampTo8bit(Y * (1 - K / 255) + K);
                  imageDataArray[j++] = R;
                  imageDataArray[j++] = G;
                  imageDataArray[j++] = B;
                  if (formatAsRGBA) {
                    imageDataArray[j++] = 255;
                  }
                }
              }
              break;
            default:
              throw new Error("Unsupported color mode");
          }
        }
      };
      var totalBytesAllocated = 0;
      var maxMemoryUsageBytes = 0;
      function requestMemoryAllocation(increaseAmount = 0) {
        var totalMemoryImpactBytes = totalBytesAllocated + increaseAmount;
        if (totalMemoryImpactBytes > maxMemoryUsageBytes) {
          var exceededAmount = Math.ceil((totalMemoryImpactBytes - maxMemoryUsageBytes) / 1024 / 1024);
          throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${exceededAmount}MB`);
        }
        totalBytesAllocated = totalMemoryImpactBytes;
      }
      constructor.resetMaxMemoryUsage = function(maxMemoryUsageBytes_) {
        totalBytesAllocated = 0;
        maxMemoryUsageBytes = maxMemoryUsageBytes_;
      };
      constructor.getBytesAllocated = function() {
        return totalBytesAllocated;
      };
      constructor.requestMemoryAllocation = requestMemoryAllocation;
      return constructor;
    }();
    {
      module.exports = decode2;
    }
    function decode2(jpegData, userOpts = {}) {
      var defaultOpts = {
        // "undefined" means "Choose whether to transform colors based on the image’s color model."
        colorTransform: void 0,
        useTArray: false,
        formatAsRGBA: true,
        tolerantDecoding: true,
        maxResolutionInMP: 100,
        // Don't decode more than 100 megapixels
        maxMemoryUsageInMB: 512
        // Don't decode if memory footprint is more than 512MB
      };
      var opts = { ...defaultOpts, ...userOpts };
      var arr = new Uint8Array(jpegData);
      var decoder2 = new JpegImage();
      decoder2.opts = opts;
      JpegImage.resetMaxMemoryUsage(opts.maxMemoryUsageInMB * 1024 * 1024);
      decoder2.parse(arr);
      var channels = opts.formatAsRGBA ? 4 : 3;
      var bytesNeeded = decoder2.width * decoder2.height * channels;
      try {
        JpegImage.requestMemoryAllocation(bytesNeeded);
        var image = {
          width: decoder2.width,
          height: decoder2.height,
          exifBuffer: decoder2.exifBuffer,
          data: opts.useTArray ? new Uint8Array(bytesNeeded) : Buffer.alloc(bytesNeeded)
        };
        if (decoder2.comments.length > 0) {
          image["comments"] = decoder2.comments;
        }
      } catch (err) {
        if (err instanceof RangeError) {
          throw new Error("Could not allocate enough memory for the image. Required: " + bytesNeeded);
        }
        if (err instanceof ReferenceError) {
          if (err.message === "Buffer is not defined") {
            throw new Error("Buffer is not globally defined in this environment. Consider setting useTArray to true");
          }
        }
        throw err;
      }
      decoder2.copyToImageData(image, opts.formatAsRGBA);
      return image;
    }
  })(decoder$1);
  return decoder$1.exports;
}
var jpegJs;
var hasRequiredJpegJs;
function requireJpegJs() {
  if (hasRequiredJpegJs)
    return jpegJs;
  hasRequiredJpegJs = 1;
  var encode2 = requireEncoder$1(), decode2 = requireDecoder$1();
  jpegJs = {
    encode: encode2,
    decode: decode2
  };
  return jpegJs;
}
var hasRequiredEs$r;
function requireEs$r() {
  if (hasRequiredEs$r)
    return es$q;
  hasRequiredEs$r = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _defineProperty2 = _interopRequireDefault(require$$1$1);
    var _jpegJs = _interopRequireDefault(requireJpegJs());
    var _utils = requireEs$u();
    var MIME_TYPE = "image/jpeg";
    var _default = function _default2() {
      return {
        mime: (0, _defineProperty2["default"])({}, MIME_TYPE, ["jpeg", "jpg", "jpe"]),
        constants: {
          MIME_JPEG: MIME_TYPE
        },
        decoders: (0, _defineProperty2["default"])({}, MIME_TYPE, _jpegJs["default"].decode),
        encoders: (0, _defineProperty2["default"])({}, MIME_TYPE, function(image) {
          return _jpegJs["default"].encode(image.bitmap, image._quality).data;
        }),
        "class": {
          // The quality to be used when saving JPEG images
          _quality: 100,
          /**
           * Sets the quality of the image when saving as JPEG format (default is 100)
           * @param {number} n The quality to use 0-100
           * @param {function(Error, Jimp)} cb (optional) a callback for when complete
           * @returns {Jimp} this for chaining of methods
           */
          quality: function quality(n, cb) {
            if (typeof n !== "number") {
              return _utils.throwError.call(this, "n must be a number", cb);
            }
            if (n < 0 || n > 100) {
              return _utils.throwError.call(this, "n must be a number 0 - 100", cb);
            }
            this._quality = Math.round(n);
            if ((0, _utils.isNodePattern)(cb)) {
              cb.call(this, null, this);
            }
            return this;
          }
        }
      };
    };
    exports["default"] = _default;
  })(es$q);
  return es$q;
}
var es$p = {};
var png = {};
var parserAsync = { exports: {} };
var chunkstream = { exports: {} };
var hasRequiredChunkstream;
function requireChunkstream() {
  if (hasRequiredChunkstream)
    return chunkstream.exports;
  hasRequiredChunkstream = 1;
  var util2 = require$$3;
  var Stream = require$$3;
  var ChunkStream = chunkstream.exports = function() {
    Stream.call(this);
    this._buffers = [];
    this._buffered = 0;
    this._reads = [];
    this._paused = false;
    this._encoding = "utf8";
    this.writable = true;
  };
  util2.inherits(ChunkStream, Stream);
  ChunkStream.prototype.read = function(length, callback) {
    this._reads.push({
      length: Math.abs(length),
      // if length < 0 then at most this length
      allowLess: length < 0,
      func: callback
    });
    process.nextTick(function() {
      this._process();
      if (this._paused && this._reads.length > 0) {
        this._paused = false;
        this.emit("drain");
      }
    }.bind(this));
  };
  ChunkStream.prototype.write = function(data, encoding) {
    if (!this.writable) {
      this.emit("error", new Error("Stream not writable"));
      return false;
    }
    var dataBuffer;
    if (Buffer.isBuffer(data)) {
      dataBuffer = data;
    } else {
      dataBuffer = new Buffer(data, encoding || this._encoding);
    }
    this._buffers.push(dataBuffer);
    this._buffered += dataBuffer.length;
    this._process();
    if (this._reads && this._reads.length === 0) {
      this._paused = true;
    }
    return this.writable && !this._paused;
  };
  ChunkStream.prototype.end = function(data, encoding) {
    if (data) {
      this.write(data, encoding);
    }
    this.writable = false;
    if (!this._buffers) {
      return;
    }
    if (this._buffers.length === 0) {
      this._end();
    } else {
      this._buffers.push(null);
      this._process();
    }
  };
  ChunkStream.prototype.destroySoon = ChunkStream.prototype.end;
  ChunkStream.prototype._end = function() {
    if (this._reads.length > 0) {
      this.emit(
        "error",
        new Error("Unexpected end of input")
      );
    }
    this.destroy();
  };
  ChunkStream.prototype.destroy = function() {
    if (!this._buffers) {
      return;
    }
    this.writable = false;
    this._reads = null;
    this._buffers = null;
    this.emit("close");
  };
  ChunkStream.prototype._processReadAllowingLess = function(read) {
    this._reads.shift();
    var smallerBuf = this._buffers[0];
    if (smallerBuf.length > read.length) {
      this._buffered -= read.length;
      this._buffers[0] = smallerBuf.slice(read.length);
      read.func.call(this, smallerBuf.slice(0, read.length));
    } else {
      this._buffered -= smallerBuf.length;
      this._buffers.shift();
      read.func.call(this, smallerBuf);
    }
  };
  ChunkStream.prototype._processRead = function(read) {
    this._reads.shift();
    var pos = 0;
    var count = 0;
    var data = new Buffer(read.length);
    while (pos < read.length) {
      var buf = this._buffers[count++];
      var len = Math.min(buf.length, read.length - pos);
      buf.copy(data, pos, 0, len);
      pos += len;
      if (len !== buf.length) {
        this._buffers[--count] = buf.slice(len);
      }
    }
    if (count > 0) {
      this._buffers.splice(0, count);
    }
    this._buffered -= read.length;
    read.func.call(this, data);
  };
  ChunkStream.prototype._process = function() {
    try {
      while (this._buffered > 0 && this._reads && this._reads.length > 0) {
        var read = this._reads[0];
        if (read.allowLess) {
          this._processReadAllowingLess(read);
        } else if (this._buffered >= read.length) {
          this._processRead(read);
        } else {
          break;
        }
      }
      if (this._buffers && !this.writable) {
        this._end();
      }
    } catch (ex) {
      this.emit("error", ex);
    }
  };
  return chunkstream.exports;
}
var filterParseAsync = { exports: {} };
var filterParse = { exports: {} };
var interlace = {};
var hasRequiredInterlace;
function requireInterlace() {
  if (hasRequiredInterlace)
    return interlace;
  hasRequiredInterlace = 1;
  var imagePasses = [
    {
      // pass 1 - 1px
      x: [0],
      y: [0]
    },
    {
      // pass 2 - 1px
      x: [4],
      y: [0]
    },
    {
      // pass 3 - 2px
      x: [0, 4],
      y: [4]
    },
    {
      // pass 4 - 4px
      x: [2, 6],
      y: [0, 4]
    },
    {
      // pass 5 - 8px
      x: [0, 2, 4, 6],
      y: [2, 6]
    },
    {
      // pass 6 - 16px
      x: [1, 3, 5, 7],
      y: [0, 2, 4, 6]
    },
    {
      // pass 7 - 32px
      x: [0, 1, 2, 3, 4, 5, 6, 7],
      y: [1, 3, 5, 7]
    }
  ];
  interlace.getImagePasses = function(width, height) {
    var images = [];
    var xLeftOver = width % 8;
    var yLeftOver = height % 8;
    var xRepeats = (width - xLeftOver) / 8;
    var yRepeats = (height - yLeftOver) / 8;
    for (var i = 0; i < imagePasses.length; i++) {
      var pass = imagePasses[i];
      var passWidth = xRepeats * pass.x.length;
      var passHeight = yRepeats * pass.y.length;
      for (var j = 0; j < pass.x.length; j++) {
        if (pass.x[j] < xLeftOver) {
          passWidth++;
        } else {
          break;
        }
      }
      for (j = 0; j < pass.y.length; j++) {
        if (pass.y[j] < yLeftOver) {
          passHeight++;
        } else {
          break;
        }
      }
      if (passWidth > 0 && passHeight > 0) {
        images.push({ width: passWidth, height: passHeight, index: i });
      }
    }
    return images;
  };
  interlace.getInterlaceIterator = function(width) {
    return function(x, y, pass) {
      var outerXLeftOver = x % imagePasses[pass].x.length;
      var outerX = (x - outerXLeftOver) / imagePasses[pass].x.length * 8 + imagePasses[pass].x[outerXLeftOver];
      var outerYLeftOver = y % imagePasses[pass].y.length;
      var outerY = (y - outerYLeftOver) / imagePasses[pass].y.length * 8 + imagePasses[pass].y[outerYLeftOver];
      return outerX * 4 + outerY * width * 4;
    };
  };
  return interlace;
}
var paethPredictor;
var hasRequiredPaethPredictor;
function requirePaethPredictor() {
  if (hasRequiredPaethPredictor)
    return paethPredictor;
  hasRequiredPaethPredictor = 1;
  paethPredictor = function paethPredictor2(left, above, upLeft) {
    var paeth = left + above - upLeft;
    var pLeft = Math.abs(paeth - left);
    var pAbove = Math.abs(paeth - above);
    var pUpLeft = Math.abs(paeth - upLeft);
    if (pLeft <= pAbove && pLeft <= pUpLeft) {
      return left;
    }
    if (pAbove <= pUpLeft) {
      return above;
    }
    return upLeft;
  };
  return paethPredictor;
}
var hasRequiredFilterParse;
function requireFilterParse() {
  if (hasRequiredFilterParse)
    return filterParse.exports;
  hasRequiredFilterParse = 1;
  var interlaceUtils = requireInterlace();
  var paethPredictor2 = requirePaethPredictor();
  function getByteWidth(width, bpp, depth) {
    var byteWidth = width * bpp;
    if (depth !== 8) {
      byteWidth = Math.ceil(byteWidth / (8 / depth));
    }
    return byteWidth;
  }
  var Filter = filterParse.exports = function(bitmapInfo, dependencies) {
    var width = bitmapInfo.width;
    var height = bitmapInfo.height;
    var interlace2 = bitmapInfo.interlace;
    var bpp = bitmapInfo.bpp;
    var depth = bitmapInfo.depth;
    this.read = dependencies.read;
    this.write = dependencies.write;
    this.complete = dependencies.complete;
    this._imageIndex = 0;
    this._images = [];
    if (interlace2) {
      var passes = interlaceUtils.getImagePasses(width, height);
      for (var i = 0; i < passes.length; i++) {
        this._images.push({
          byteWidth: getByteWidth(passes[i].width, bpp, depth),
          height: passes[i].height,
          lineIndex: 0
        });
      }
    } else {
      this._images.push({
        byteWidth: getByteWidth(width, bpp, depth),
        height,
        lineIndex: 0
      });
    }
    if (depth === 8) {
      this._xComparison = bpp;
    } else if (depth === 16) {
      this._xComparison = bpp * 2;
    } else {
      this._xComparison = 1;
    }
  };
  Filter.prototype.start = function() {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
  };
  Filter.prototype._unFilterType1 = function(rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;
    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f1Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      unfilteredLine[x] = rawByte + f1Left;
    }
  };
  Filter.prototype._unFilterType2 = function(rawData, unfilteredLine, byteWidth) {
    var lastLine = this._lastLine;
    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f2Up = lastLine ? lastLine[x] : 0;
      unfilteredLine[x] = rawByte + f2Up;
    }
  };
  Filter.prototype._unFilterType3 = function(rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;
    var lastLine = this._lastLine;
    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f3Up = lastLine ? lastLine[x] : 0;
      var f3Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      var f3Add = Math.floor((f3Left + f3Up) / 2);
      unfilteredLine[x] = rawByte + f3Add;
    }
  };
  Filter.prototype._unFilterType4 = function(rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;
    var lastLine = this._lastLine;
    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f4Up = lastLine ? lastLine[x] : 0;
      var f4Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      var f4UpLeft = x > xBiggerThan && lastLine ? lastLine[x - xComparison] : 0;
      var f4Add = paethPredictor2(f4Left, f4Up, f4UpLeft);
      unfilteredLine[x] = rawByte + f4Add;
    }
  };
  Filter.prototype._reverseFilterLine = function(rawData) {
    var filter = rawData[0];
    var unfilteredLine;
    var currentImage = this._images[this._imageIndex];
    var byteWidth = currentImage.byteWidth;
    if (filter === 0) {
      unfilteredLine = rawData.slice(1, byteWidth + 1);
    } else {
      unfilteredLine = new Buffer(byteWidth);
      switch (filter) {
        case 1:
          this._unFilterType1(rawData, unfilteredLine, byteWidth);
          break;
        case 2:
          this._unFilterType2(rawData, unfilteredLine, byteWidth);
          break;
        case 3:
          this._unFilterType3(rawData, unfilteredLine, byteWidth);
          break;
        case 4:
          this._unFilterType4(rawData, unfilteredLine, byteWidth);
          break;
        default:
          throw new Error("Unrecognised filter type - " + filter);
      }
    }
    this.write(unfilteredLine);
    currentImage.lineIndex++;
    if (currentImage.lineIndex >= currentImage.height) {
      this._lastLine = null;
      this._imageIndex++;
      currentImage = this._images[this._imageIndex];
    } else {
      this._lastLine = unfilteredLine;
    }
    if (currentImage) {
      this.read(currentImage.byteWidth + 1, this._reverseFilterLine.bind(this));
    } else {
      this._lastLine = null;
      this.complete();
    }
  };
  return filterParse.exports;
}
var hasRequiredFilterParseAsync;
function requireFilterParseAsync() {
  if (hasRequiredFilterParseAsync)
    return filterParseAsync.exports;
  hasRequiredFilterParseAsync = 1;
  var util2 = require$$3;
  var ChunkStream = requireChunkstream();
  var Filter = requireFilterParse();
  var FilterAsync = filterParseAsync.exports = function(bitmapInfo) {
    ChunkStream.call(this);
    var buffers = [];
    var that = this;
    this._filter = new Filter(bitmapInfo, {
      read: this.read.bind(this),
      write: function(buffer2) {
        buffers.push(buffer2);
      },
      complete: function() {
        that.emit("complete", Buffer.concat(buffers));
      }
    });
    this._filter.start();
  };
  util2.inherits(FilterAsync, ChunkStream);
  return filterParseAsync.exports;
}
var parser = { exports: {} };
var constants$1;
var hasRequiredConstants$1;
function requireConstants$1() {
  if (hasRequiredConstants$1)
    return constants$1;
  hasRequiredConstants$1 = 1;
  constants$1 = {
    PNG_SIGNATURE: [137, 80, 78, 71, 13, 10, 26, 10],
    TYPE_IHDR: 1229472850,
    TYPE_IEND: 1229278788,
    TYPE_IDAT: 1229209940,
    TYPE_PLTE: 1347179589,
    TYPE_tRNS: 1951551059,
    // eslint-disable-line camelcase
    TYPE_gAMA: 1732332865,
    // eslint-disable-line camelcase
    // color-type bits
    COLORTYPE_GRAYSCALE: 0,
    COLORTYPE_PALETTE: 1,
    COLORTYPE_COLOR: 2,
    COLORTYPE_ALPHA: 4,
    // e.g. grayscale and alpha
    // color-type combinations
    COLORTYPE_PALETTE_COLOR: 3,
    COLORTYPE_COLOR_ALPHA: 6,
    COLORTYPE_TO_BPP_MAP: {
      0: 1,
      2: 3,
      3: 1,
      4: 2,
      6: 4
    },
    GAMMA_DIVISION: 1e5
  };
  return constants$1;
}
var crc = { exports: {} };
var hasRequiredCrc;
function requireCrc() {
  if (hasRequiredCrc)
    return crc.exports;
  hasRequiredCrc = 1;
  var crcTable = [];
  (function() {
    for (var i = 0; i < 256; i++) {
      var currentCrc = i;
      for (var j = 0; j < 8; j++) {
        if (currentCrc & 1) {
          currentCrc = 3988292384 ^ currentCrc >>> 1;
        } else {
          currentCrc = currentCrc >>> 1;
        }
      }
      crcTable[i] = currentCrc;
    }
  })();
  var CrcCalculator = crc.exports = function() {
    this._crc = -1;
  };
  CrcCalculator.prototype.write = function(data) {
    for (var i = 0; i < data.length; i++) {
      this._crc = crcTable[(this._crc ^ data[i]) & 255] ^ this._crc >>> 8;
    }
    return true;
  };
  CrcCalculator.prototype.crc32 = function() {
    return this._crc ^ -1;
  };
  CrcCalculator.crc32 = function(buf) {
    var crc2 = -1;
    for (var i = 0; i < buf.length; i++) {
      crc2 = crcTable[(crc2 ^ buf[i]) & 255] ^ crc2 >>> 8;
    }
    return crc2 ^ -1;
  };
  return crc.exports;
}
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser)
    return parser.exports;
  hasRequiredParser = 1;
  var constants2 = requireConstants$1();
  var CrcCalculator = requireCrc();
  var Parser = parser.exports = function(options, dependencies) {
    this._options = options;
    options.checkCRC = options.checkCRC !== false;
    this._hasIHDR = false;
    this._hasIEND = false;
    this._emittedHeadersFinished = false;
    this._palette = [];
    this._colorType = 0;
    this._chunks = {};
    this._chunks[constants2.TYPE_IHDR] = this._handleIHDR.bind(this);
    this._chunks[constants2.TYPE_IEND] = this._handleIEND.bind(this);
    this._chunks[constants2.TYPE_IDAT] = this._handleIDAT.bind(this);
    this._chunks[constants2.TYPE_PLTE] = this._handlePLTE.bind(this);
    this._chunks[constants2.TYPE_tRNS] = this._handleTRNS.bind(this);
    this._chunks[constants2.TYPE_gAMA] = this._handleGAMA.bind(this);
    this.read = dependencies.read;
    this.error = dependencies.error;
    this.metadata = dependencies.metadata;
    this.gamma = dependencies.gamma;
    this.transColor = dependencies.transColor;
    this.palette = dependencies.palette;
    this.parsed = dependencies.parsed;
    this.inflateData = dependencies.inflateData;
    this.finished = dependencies.finished;
    this.simpleTransparency = dependencies.simpleTransparency;
    this.headersFinished = dependencies.headersFinished || function() {
    };
  };
  Parser.prototype.start = function() {
    this.read(
      constants2.PNG_SIGNATURE.length,
      this._parseSignature.bind(this)
    );
  };
  Parser.prototype._parseSignature = function(data) {
    var signature = constants2.PNG_SIGNATURE;
    for (var i = 0; i < signature.length; i++) {
      if (data[i] !== signature[i]) {
        this.error(new Error("Invalid file signature"));
        return;
      }
    }
    this.read(8, this._parseChunkBegin.bind(this));
  };
  Parser.prototype._parseChunkBegin = function(data) {
    var length = data.readUInt32BE(0);
    var type = data.readUInt32BE(4);
    var name = "";
    for (var i = 4; i < 8; i++) {
      name += String.fromCharCode(data[i]);
    }
    var ancillary = Boolean(data[4] & 32);
    if (!this._hasIHDR && type !== constants2.TYPE_IHDR) {
      this.error(new Error("Expected IHDR on beggining"));
      return;
    }
    this._crc = new CrcCalculator();
    this._crc.write(new Buffer(name));
    if (this._chunks[type]) {
      return this._chunks[type](length);
    }
    if (!ancillary) {
      this.error(new Error("Unsupported critical chunk type " + name));
      return;
    }
    this.read(length + 4, this._skipChunk.bind(this));
  };
  Parser.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
  };
  Parser.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
  };
  Parser.prototype._parseChunkEnd = function(data) {
    var fileCrc = data.readInt32BE(0);
    var calcCrc = this._crc.crc32();
    if (this._options.checkCRC && calcCrc !== fileCrc) {
      this.error(new Error("Crc error - " + fileCrc + " - " + calcCrc));
      return;
    }
    if (!this._hasIEND) {
      this.read(8, this._parseChunkBegin.bind(this));
    }
  };
  Parser.prototype._handleIHDR = function(length) {
    this.read(length, this._parseIHDR.bind(this));
  };
  Parser.prototype._parseIHDR = function(data) {
    this._crc.write(data);
    var width = data.readUInt32BE(0);
    var height = data.readUInt32BE(4);
    var depth = data[8];
    var colorType = data[9];
    var compr = data[10];
    var filter = data[11];
    var interlace2 = data[12];
    if (depth !== 8 && depth !== 4 && depth !== 2 && depth !== 1 && depth !== 16) {
      this.error(new Error("Unsupported bit depth " + depth));
      return;
    }
    if (!(colorType in constants2.COLORTYPE_TO_BPP_MAP)) {
      this.error(new Error("Unsupported color type"));
      return;
    }
    if (compr !== 0) {
      this.error(new Error("Unsupported compression method"));
      return;
    }
    if (filter !== 0) {
      this.error(new Error("Unsupported filter method"));
      return;
    }
    if (interlace2 !== 0 && interlace2 !== 1) {
      this.error(new Error("Unsupported interlace method"));
      return;
    }
    this._colorType = colorType;
    var bpp = constants2.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = true;
    this.metadata({
      width,
      height,
      depth,
      interlace: Boolean(interlace2),
      palette: Boolean(colorType & constants2.COLORTYPE_PALETTE),
      color: Boolean(colorType & constants2.COLORTYPE_COLOR),
      alpha: Boolean(colorType & constants2.COLORTYPE_ALPHA),
      bpp,
      colorType
    });
    this._handleChunkEnd();
  };
  Parser.prototype._handlePLTE = function(length) {
    this.read(length, this._parsePLTE.bind(this));
  };
  Parser.prototype._parsePLTE = function(data) {
    this._crc.write(data);
    var entries = Math.floor(data.length / 3);
    for (var i = 0; i < entries; i++) {
      this._palette.push([
        data[i * 3],
        data[i * 3 + 1],
        data[i * 3 + 2],
        255
      ]);
    }
    this.palette(this._palette);
    this._handleChunkEnd();
  };
  Parser.prototype._handleTRNS = function(length) {
    this.simpleTransparency();
    this.read(length, this._parseTRNS.bind(this));
  };
  Parser.prototype._parseTRNS = function(data) {
    this._crc.write(data);
    if (this._colorType === constants2.COLORTYPE_PALETTE_COLOR) {
      if (this._palette.length === 0) {
        this.error(new Error("Transparency chunk must be after palette"));
        return;
      }
      if (data.length > this._palette.length) {
        this.error(new Error("More transparent colors than palette size"));
        return;
      }
      for (var i = 0; i < data.length; i++) {
        this._palette[i][3] = data[i];
      }
      this.palette(this._palette);
    }
    if (this._colorType === constants2.COLORTYPE_GRAYSCALE) {
      this.transColor([data.readUInt16BE(0)]);
    }
    if (this._colorType === constants2.COLORTYPE_COLOR) {
      this.transColor([data.readUInt16BE(0), data.readUInt16BE(2), data.readUInt16BE(4)]);
    }
    this._handleChunkEnd();
  };
  Parser.prototype._handleGAMA = function(length) {
    this.read(length, this._parseGAMA.bind(this));
  };
  Parser.prototype._parseGAMA = function(data) {
    this._crc.write(data);
    this.gamma(data.readUInt32BE(0) / constants2.GAMMA_DIVISION);
    this._handleChunkEnd();
  };
  Parser.prototype._handleIDAT = function(length) {
    if (!this._emittedHeadersFinished) {
      this._emittedHeadersFinished = true;
      this.headersFinished();
    }
    this.read(-length, this._parseIDAT.bind(this, length));
  };
  Parser.prototype._parseIDAT = function(length, data) {
    this._crc.write(data);
    if (this._colorType === constants2.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) {
      throw new Error("Expected palette not found");
    }
    this.inflateData(data);
    var leftOverLength = length - data.length;
    if (leftOverLength > 0) {
      this._handleIDAT(leftOverLength);
    } else {
      this._handleChunkEnd();
    }
  };
  Parser.prototype._handleIEND = function(length) {
    this.read(length, this._parseIEND.bind(this));
  };
  Parser.prototype._parseIEND = function(data) {
    this._crc.write(data);
    this._hasIEND = true;
    this._handleChunkEnd();
    if (this.finished) {
      this.finished();
    }
  };
  return parser.exports;
}
var bitmapper = {};
var hasRequiredBitmapper;
function requireBitmapper() {
  if (hasRequiredBitmapper)
    return bitmapper;
  hasRequiredBitmapper = 1;
  var interlaceUtils = requireInterlace();
  var pixelBppMapper = [
    // 0 - dummy entry
    function() {
    },
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(pxData, data, pxPos, rawPos) {
      if (rawPos === data.length) {
        throw new Error("Ran out of data");
      }
      var pixel = data[rawPos];
      pxData[pxPos] = pixel;
      pxData[pxPos + 1] = pixel;
      pxData[pxPos + 2] = pixel;
      pxData[pxPos + 3] = 255;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(pxData, data, pxPos, rawPos) {
      if (rawPos + 1 >= data.length) {
        throw new Error("Ran out of data");
      }
      var pixel = data[rawPos];
      pxData[pxPos] = pixel;
      pxData[pxPos + 1] = pixel;
      pxData[pxPos + 2] = pixel;
      pxData[pxPos + 3] = data[rawPos + 1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(pxData, data, pxPos, rawPos) {
      if (rawPos + 2 >= data.length) {
        throw new Error("Ran out of data");
      }
      pxData[pxPos] = data[rawPos];
      pxData[pxPos + 1] = data[rawPos + 1];
      pxData[pxPos + 2] = data[rawPos + 2];
      pxData[pxPos + 3] = 255;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(pxData, data, pxPos, rawPos) {
      if (rawPos + 3 >= data.length) {
        throw new Error("Ran out of data");
      }
      pxData[pxPos] = data[rawPos];
      pxData[pxPos + 1] = data[rawPos + 1];
      pxData[pxPos + 2] = data[rawPos + 2];
      pxData[pxPos + 3] = data[rawPos + 3];
    }
  ];
  var pixelBppCustomMapper = [
    // 0 - dummy entry
    function() {
    },
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(pxData, pixelData, pxPos, maxBit) {
      var pixel = pixelData[0];
      pxData[pxPos] = pixel;
      pxData[pxPos + 1] = pixel;
      pxData[pxPos + 2] = pixel;
      pxData[pxPos + 3] = maxBit;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(pxData, pixelData, pxPos) {
      var pixel = pixelData[0];
      pxData[pxPos] = pixel;
      pxData[pxPos + 1] = pixel;
      pxData[pxPos + 2] = pixel;
      pxData[pxPos + 3] = pixelData[1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(pxData, pixelData, pxPos, maxBit) {
      pxData[pxPos] = pixelData[0];
      pxData[pxPos + 1] = pixelData[1];
      pxData[pxPos + 2] = pixelData[2];
      pxData[pxPos + 3] = maxBit;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(pxData, pixelData, pxPos) {
      pxData[pxPos] = pixelData[0];
      pxData[pxPos + 1] = pixelData[1];
      pxData[pxPos + 2] = pixelData[2];
      pxData[pxPos + 3] = pixelData[3];
    }
  ];
  function bitRetriever(data, depth) {
    var leftOver = [];
    var i = 0;
    function split() {
      if (i === data.length) {
        throw new Error("Ran out of data");
      }
      var byte = data[i];
      i++;
      var byte8, byte7, byte6, byte5, byte4, byte3, byte2, byte1;
      switch (depth) {
        default:
          throw new Error("unrecognised depth");
        case 16:
          byte2 = data[i];
          i++;
          leftOver.push((byte << 8) + byte2);
          break;
        case 4:
          byte2 = byte & 15;
          byte1 = byte >> 4;
          leftOver.push(byte1, byte2);
          break;
        case 2:
          byte4 = byte & 3;
          byte3 = byte >> 2 & 3;
          byte2 = byte >> 4 & 3;
          byte1 = byte >> 6 & 3;
          leftOver.push(byte1, byte2, byte3, byte4);
          break;
        case 1:
          byte8 = byte & 1;
          byte7 = byte >> 1 & 1;
          byte6 = byte >> 2 & 1;
          byte5 = byte >> 3 & 1;
          byte4 = byte >> 4 & 1;
          byte3 = byte >> 5 & 1;
          byte2 = byte >> 6 & 1;
          byte1 = byte >> 7 & 1;
          leftOver.push(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8);
          break;
      }
    }
    return {
      get: function(count) {
        while (leftOver.length < count) {
          split();
        }
        var returner = leftOver.slice(0, count);
        leftOver = leftOver.slice(count);
        return returner;
      },
      resetAfterLine: function() {
        leftOver.length = 0;
      },
      end: function() {
        if (i !== data.length) {
          throw new Error("extra data found");
        }
      }
    };
  }
  function mapImage8Bit(image, pxData, getPxPos, bpp, data, rawPos) {
    var imageWidth = image.width;
    var imageHeight = image.height;
    var imagePass = image.index;
    for (var y = 0; y < imageHeight; y++) {
      for (var x = 0; x < imageWidth; x++) {
        var pxPos = getPxPos(x, y, imagePass);
        pixelBppMapper[bpp](pxData, data, pxPos, rawPos);
        rawPos += bpp;
      }
    }
    return rawPos;
  }
  function mapImageCustomBit(image, pxData, getPxPos, bpp, bits, maxBit) {
    var imageWidth = image.width;
    var imageHeight = image.height;
    var imagePass = image.index;
    for (var y = 0; y < imageHeight; y++) {
      for (var x = 0; x < imageWidth; x++) {
        var pixelData = bits.get(bpp);
        var pxPos = getPxPos(x, y, imagePass);
        pixelBppCustomMapper[bpp](pxData, pixelData, pxPos, maxBit);
      }
      bits.resetAfterLine();
    }
  }
  bitmapper.dataToBitMap = function(data, bitmapInfo) {
    var width = bitmapInfo.width;
    var height = bitmapInfo.height;
    var depth = bitmapInfo.depth;
    var bpp = bitmapInfo.bpp;
    var interlace2 = bitmapInfo.interlace;
    if (depth !== 8) {
      var bits = bitRetriever(data, depth);
    }
    var pxData;
    if (depth <= 8) {
      pxData = new Buffer(width * height * 4);
    } else {
      pxData = new Uint16Array(width * height * 4);
    }
    var maxBit = Math.pow(2, depth) - 1;
    var rawPos = 0;
    var images;
    var getPxPos;
    if (interlace2) {
      images = interlaceUtils.getImagePasses(width, height);
      getPxPos = interlaceUtils.getInterlaceIterator(width, height);
    } else {
      var nonInterlacedPxPos = 0;
      getPxPos = function() {
        var returner = nonInterlacedPxPos;
        nonInterlacedPxPos += 4;
        return returner;
      };
      images = [{ width, height }];
    }
    for (var imageIndex = 0; imageIndex < images.length; imageIndex++) {
      if (depth === 8) {
        rawPos = mapImage8Bit(images[imageIndex], pxData, getPxPos, bpp, data, rawPos);
      } else {
        mapImageCustomBit(images[imageIndex], pxData, getPxPos, bpp, bits, maxBit);
      }
    }
    if (depth === 8) {
      if (rawPos !== data.length) {
        throw new Error("extra data found");
      }
    } else {
      bits.end();
    }
    return pxData;
  };
  return bitmapper;
}
var formatNormaliser;
var hasRequiredFormatNormaliser;
function requireFormatNormaliser() {
  if (hasRequiredFormatNormaliser)
    return formatNormaliser;
  hasRequiredFormatNormaliser = 1;
  function dePalette(indata, outdata, width, height, palette) {
    var pxPos = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var color = palette[indata[pxPos]];
        if (!color) {
          throw new Error("index " + indata[pxPos] + " not in palette");
        }
        for (var i = 0; i < 4; i++) {
          outdata[pxPos + i] = color[i];
        }
        pxPos += 4;
      }
    }
  }
  function replaceTransparentColor(indata, outdata, width, height, transColor) {
    var pxPos = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var makeTrans = false;
        if (transColor.length === 1) {
          if (transColor[0] === indata[pxPos]) {
            makeTrans = true;
          }
        } else if (transColor[0] === indata[pxPos] && transColor[1] === indata[pxPos + 1] && transColor[2] === indata[pxPos + 2]) {
          makeTrans = true;
        }
        if (makeTrans) {
          for (var i = 0; i < 4; i++) {
            outdata[pxPos + i] = 0;
          }
        }
        pxPos += 4;
      }
    }
  }
  function scaleDepth(indata, outdata, width, height, depth) {
    var maxOutSample = 255;
    var maxInSample = Math.pow(2, depth) - 1;
    var pxPos = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        for (var i = 0; i < 4; i++) {
          outdata[pxPos + i] = Math.floor(indata[pxPos + i] * maxOutSample / maxInSample + 0.5);
        }
        pxPos += 4;
      }
    }
  }
  formatNormaliser = function(indata, imageData) {
    var depth = imageData.depth;
    var width = imageData.width;
    var height = imageData.height;
    var colorType = imageData.colorType;
    var transColor = imageData.transColor;
    var palette = imageData.palette;
    var outdata = indata;
    if (colorType === 3) {
      dePalette(indata, outdata, width, height, palette);
    } else {
      if (transColor) {
        replaceTransparentColor(indata, outdata, width, height, transColor);
      }
      if (depth !== 8) {
        if (depth === 16) {
          outdata = new Buffer(width * height * 4);
        }
        scaleDepth(indata, outdata, width, height, depth);
      }
    }
    return outdata;
  };
  return formatNormaliser;
}
var hasRequiredParserAsync;
function requireParserAsync() {
  if (hasRequiredParserAsync)
    return parserAsync.exports;
  hasRequiredParserAsync = 1;
  var util2 = require$$3;
  var zlib = require$$3;
  var ChunkStream = requireChunkstream();
  var FilterAsync = requireFilterParseAsync();
  var Parser = requireParser();
  var bitmapper2 = requireBitmapper();
  var formatNormaliser2 = requireFormatNormaliser();
  var ParserAsync = parserAsync.exports = function(options) {
    ChunkStream.call(this);
    this._parser = new Parser(options, {
      read: this.read.bind(this),
      error: this._handleError.bind(this),
      metadata: this._handleMetaData.bind(this),
      gamma: this.emit.bind(this, "gamma"),
      palette: this._handlePalette.bind(this),
      transColor: this._handleTransColor.bind(this),
      finished: this._finished.bind(this),
      inflateData: this._inflateData.bind(this),
      simpleTransparency: this._simpleTransparency.bind(this),
      headersFinished: this._headersFinished.bind(this)
    });
    this._options = options;
    this.writable = true;
    this._parser.start();
  };
  util2.inherits(ParserAsync, ChunkStream);
  ParserAsync.prototype._handleError = function(err) {
    this.emit("error", err);
    this.writable = false;
    this.destroy();
    if (this._inflate && this._inflate.destroy) {
      this._inflate.destroy();
    }
    if (this._filter) {
      this._filter.destroy();
      this._filter.on("error", function() {
      });
    }
    this.errord = true;
  };
  ParserAsync.prototype._inflateData = function(data) {
    if (!this._inflate) {
      if (this._bitmapInfo.interlace) {
        this._inflate = zlib.createInflate();
        this._inflate.on("error", this.emit.bind(this, "error"));
        this._filter.on("complete", this._complete.bind(this));
        this._inflate.pipe(this._filter);
      } else {
        var rowSize = (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1;
        var imageSize = rowSize * this._bitmapInfo.height;
        var chunkSize = Math.max(imageSize, zlib.Z_MIN_CHUNK);
        this._inflate = zlib.createInflate({ chunkSize });
        var leftToInflate = imageSize;
        var emitError = this.emit.bind(this, "error");
        this._inflate.on("error", function(err) {
          if (!leftToInflate) {
            return;
          }
          emitError(err);
        });
        this._filter.on("complete", this._complete.bind(this));
        var filterWrite = this._filter.write.bind(this._filter);
        this._inflate.on("data", function(chunk) {
          if (!leftToInflate) {
            return;
          }
          if (chunk.length > leftToInflate) {
            chunk = chunk.slice(0, leftToInflate);
          }
          leftToInflate -= chunk.length;
          filterWrite(chunk);
        });
        this._inflate.on("end", this._filter.end.bind(this._filter));
      }
    }
    this._inflate.write(data);
  };
  ParserAsync.prototype._handleMetaData = function(metaData) {
    this._metaData = metaData;
    this._bitmapInfo = Object.create(metaData);
    this._filter = new FilterAsync(this._bitmapInfo);
  };
  ParserAsync.prototype._handleTransColor = function(transColor) {
    this._bitmapInfo.transColor = transColor;
  };
  ParserAsync.prototype._handlePalette = function(palette) {
    this._bitmapInfo.palette = palette;
  };
  ParserAsync.prototype._simpleTransparency = function() {
    this._metaData.alpha = true;
  };
  ParserAsync.prototype._headersFinished = function() {
    this.emit("metadata", this._metaData);
  };
  ParserAsync.prototype._finished = function() {
    if (this.errord) {
      return;
    }
    if (!this._inflate) {
      this.emit("error", "No Inflate block");
    } else {
      this._inflate.end();
    }
    this.destroySoon();
  };
  ParserAsync.prototype._complete = function(filteredData) {
    if (this.errord) {
      return;
    }
    try {
      var bitmapData = bitmapper2.dataToBitMap(filteredData, this._bitmapInfo);
      var normalisedBitmapData = formatNormaliser2(bitmapData, this._bitmapInfo);
      bitmapData = null;
    } catch (ex) {
      this._handleError(ex);
      return;
    }
    this.emit("parsed", normalisedBitmapData);
  };
  return parserAsync.exports;
}
var packerAsync = { exports: {} };
var packer = { exports: {} };
var bitpacker;
var hasRequiredBitpacker;
function requireBitpacker() {
  if (hasRequiredBitpacker)
    return bitpacker;
  hasRequiredBitpacker = 1;
  var constants2 = requireConstants$1();
  bitpacker = function(dataIn, width, height, options) {
    var outHasAlpha = [constants2.COLORTYPE_COLOR_ALPHA, constants2.COLORTYPE_ALPHA].indexOf(options.colorType) !== -1;
    if (options.colorType === options.inputColorType) {
      var bigEndian = function() {
        var buffer2 = new ArrayBuffer(2);
        new DataView(buffer2).setInt16(
          0,
          256,
          true
          /* littleEndian */
        );
        return new Int16Array(buffer2)[0] !== 256;
      }();
      if (options.bitDepth === 8 || options.bitDepth === 16 && bigEndian) {
        return dataIn;
      }
    }
    var data = options.bitDepth !== 16 ? dataIn : new Uint16Array(dataIn.buffer);
    var maxValue = 255;
    var inBpp = constants2.COLORTYPE_TO_BPP_MAP[options.inputColorType];
    if (inBpp === 4 && !options.inputHasAlpha) {
      inBpp = 3;
    }
    var outBpp = constants2.COLORTYPE_TO_BPP_MAP[options.colorType];
    if (options.bitDepth === 16) {
      maxValue = 65535;
      outBpp *= 2;
    }
    var outData = new Buffer(width * height * outBpp);
    var inIndex = 0;
    var outIndex = 0;
    var bgColor = options.bgColor || {};
    if (bgColor.red === void 0) {
      bgColor.red = maxValue;
    }
    if (bgColor.green === void 0) {
      bgColor.green = maxValue;
    }
    if (bgColor.blue === void 0) {
      bgColor.blue = maxValue;
    }
    function getRGBA() {
      var red;
      var green;
      var blue;
      var alpha = maxValue;
      switch (options.inputColorType) {
        case constants2.COLORTYPE_COLOR_ALPHA:
          alpha = data[inIndex + 3];
          red = data[inIndex];
          green = data[inIndex + 1];
          blue = data[inIndex + 2];
          break;
        case constants2.COLORTYPE_COLOR:
          red = data[inIndex];
          green = data[inIndex + 1];
          blue = data[inIndex + 2];
          break;
        case constants2.COLORTYPE_ALPHA:
          alpha = data[inIndex + 1];
          red = data[inIndex];
          green = red;
          blue = red;
          break;
        case constants2.COLORTYPE_GRAYSCALE:
          red = data[inIndex];
          green = red;
          blue = red;
          break;
        default:
          throw new Error("input color type:" + options.inputColorType + " is not supported at present");
      }
      if (options.inputHasAlpha) {
        if (!outHasAlpha) {
          alpha /= maxValue;
          red = Math.min(Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0), maxValue);
          green = Math.min(Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0), maxValue);
          blue = Math.min(Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0), maxValue);
        }
      }
      return { red, green, blue, alpha };
    }
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var rgba = getRGBA();
        switch (options.colorType) {
          case constants2.COLORTYPE_COLOR_ALPHA:
          case constants2.COLORTYPE_COLOR:
            if (options.bitDepth === 8) {
              outData[outIndex] = rgba.red;
              outData[outIndex + 1] = rgba.green;
              outData[outIndex + 2] = rgba.blue;
              if (outHasAlpha) {
                outData[outIndex + 3] = rgba.alpha;
              }
            } else {
              outData.writeUInt16BE(rgba.red, outIndex);
              outData.writeUInt16BE(rgba.green, outIndex + 2);
              outData.writeUInt16BE(rgba.blue, outIndex + 4);
              if (outHasAlpha) {
                outData.writeUInt16BE(rgba.alpha, outIndex + 6);
              }
            }
            break;
          case constants2.COLORTYPE_ALPHA:
          case constants2.COLORTYPE_GRAYSCALE:
            var grayscale = (rgba.red + rgba.green + rgba.blue) / 3;
            if (options.bitDepth === 8) {
              outData[outIndex] = grayscale;
              if (outHasAlpha) {
                outData[outIndex + 1] = rgba.alpha;
              }
            } else {
              outData.writeUInt16BE(grayscale, outIndex);
              if (outHasAlpha) {
                outData.writeUInt16BE(rgba.alpha, outIndex + 2);
              }
            }
            break;
          default:
            throw new Error("unrecognised color Type " + options.colorType);
        }
        inIndex += inBpp;
        outIndex += outBpp;
      }
    }
    return outData;
  };
  return bitpacker;
}
var filterPack;
var hasRequiredFilterPack;
function requireFilterPack() {
  if (hasRequiredFilterPack)
    return filterPack;
  hasRequiredFilterPack = 1;
  var paethPredictor2 = requirePaethPredictor();
  function filterNone(pxData, pxPos, byteWidth, rawData, rawPos) {
    for (var x = 0; x < byteWidth; x++) {
      rawData[rawPos + x] = pxData[pxPos + x];
    }
  }
  function filterSumNone(pxData, pxPos, byteWidth) {
    var sum = 0;
    var length = pxPos + byteWidth;
    for (var i = pxPos; i < length; i++) {
      sum += Math.abs(pxData[i]);
    }
    return sum;
  }
  function filterSub(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for (var x = 0; x < byteWidth; x++) {
      var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
      var val = pxData[pxPos + x] - left;
      rawData[rawPos + x] = val;
    }
  }
  function filterSumSub(pxData, pxPos, byteWidth, bpp) {
    var sum = 0;
    for (var x = 0; x < byteWidth; x++) {
      var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
      var val = pxData[pxPos + x] - left;
      sum += Math.abs(val);
    }
    return sum;
  }
  function filterUp(pxData, pxPos, byteWidth, rawData, rawPos) {
    for (var x = 0; x < byteWidth; x++) {
      var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
      var val = pxData[pxPos + x] - up;
      rawData[rawPos + x] = val;
    }
  }
  function filterSumUp(pxData, pxPos, byteWidth) {
    var sum = 0;
    var length = pxPos + byteWidth;
    for (var x = pxPos; x < length; x++) {
      var up = pxPos > 0 ? pxData[x - byteWidth] : 0;
      var val = pxData[x] - up;
      sum += Math.abs(val);
    }
    return sum;
  }
  function filterAvg(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for (var x = 0; x < byteWidth; x++) {
      var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
      var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
      var val = pxData[pxPos + x] - (left + up >> 1);
      rawData[rawPos + x] = val;
    }
  }
  function filterSumAvg(pxData, pxPos, byteWidth, bpp) {
    var sum = 0;
    for (var x = 0; x < byteWidth; x++) {
      var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
      var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
      var val = pxData[pxPos + x] - (left + up >> 1);
      sum += Math.abs(val);
    }
    return sum;
  }
  function filterPaeth(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for (var x = 0; x < byteWidth; x++) {
      var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
      var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
      var upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
      var val = pxData[pxPos + x] - paethPredictor2(left, up, upleft);
      rawData[rawPos + x] = val;
    }
  }
  function filterSumPaeth(pxData, pxPos, byteWidth, bpp) {
    var sum = 0;
    for (var x = 0; x < byteWidth; x++) {
      var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
      var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
      var upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
      var val = pxData[pxPos + x] - paethPredictor2(left, up, upleft);
      sum += Math.abs(val);
    }
    return sum;
  }
  var filters = {
    0: filterNone,
    1: filterSub,
    2: filterUp,
    3: filterAvg,
    4: filterPaeth
  };
  var filterSums = {
    0: filterSumNone,
    1: filterSumSub,
    2: filterSumUp,
    3: filterSumAvg,
    4: filterSumPaeth
  };
  filterPack = function(pxData, width, height, options, bpp) {
    var filterTypes;
    if (!("filterType" in options) || options.filterType === -1) {
      filterTypes = [0, 1, 2, 3, 4];
    } else if (typeof options.filterType === "number") {
      filterTypes = [options.filterType];
    } else {
      throw new Error("unrecognised filter types");
    }
    if (options.bitDepth === 16) {
      bpp *= 2;
    }
    var byteWidth = width * bpp;
    var rawPos = 0;
    var pxPos = 0;
    var rawData = new Buffer((byteWidth + 1) * height);
    var sel = filterTypes[0];
    for (var y = 0; y < height; y++) {
      if (filterTypes.length > 1) {
        var min = Infinity;
        for (var i = 0; i < filterTypes.length; i++) {
          var sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);
          if (sum < min) {
            sel = filterTypes[i];
            min = sum;
          }
        }
      }
      rawData[rawPos] = sel;
      rawPos++;
      filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
      rawPos += byteWidth;
      pxPos += byteWidth;
    }
    return rawData;
  };
  return filterPack;
}
var hasRequiredPacker;
function requirePacker() {
  if (hasRequiredPacker)
    return packer.exports;
  hasRequiredPacker = 1;
  var constants2 = requireConstants$1();
  var CrcStream = requireCrc();
  var bitPacker = requireBitpacker();
  var filter = requireFilterPack();
  var zlib = require$$3;
  var Packer = packer.exports = function(options) {
    this._options = options;
    options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
    options.deflateLevel = options.deflateLevel != null ? options.deflateLevel : 9;
    options.deflateStrategy = options.deflateStrategy != null ? options.deflateStrategy : 3;
    options.inputHasAlpha = options.inputHasAlpha != null ? options.inputHasAlpha : true;
    options.deflateFactory = options.deflateFactory || zlib.createDeflate;
    options.bitDepth = options.bitDepth || 8;
    options.colorType = typeof options.colorType === "number" ? options.colorType : constants2.COLORTYPE_COLOR_ALPHA;
    options.inputColorType = typeof options.inputColorType === "number" ? options.inputColorType : constants2.COLORTYPE_COLOR_ALPHA;
    if ([
      constants2.COLORTYPE_GRAYSCALE,
      constants2.COLORTYPE_COLOR,
      constants2.COLORTYPE_COLOR_ALPHA,
      constants2.COLORTYPE_ALPHA
    ].indexOf(options.colorType) === -1) {
      throw new Error("option color type:" + options.colorType + " is not supported at present");
    }
    if ([
      constants2.COLORTYPE_GRAYSCALE,
      constants2.COLORTYPE_COLOR,
      constants2.COLORTYPE_COLOR_ALPHA,
      constants2.COLORTYPE_ALPHA
    ].indexOf(options.inputColorType) === -1) {
      throw new Error("option input color type:" + options.inputColorType + " is not supported at present");
    }
    if (options.bitDepth !== 8 && options.bitDepth !== 16) {
      throw new Error("option bit depth:" + options.bitDepth + " is not supported at present");
    }
  };
  Packer.prototype.getDeflateOptions = function() {
    return {
      chunkSize: this._options.deflateChunkSize,
      level: this._options.deflateLevel,
      strategy: this._options.deflateStrategy
    };
  };
  Packer.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
  };
  Packer.prototype.filterData = function(data, width, height) {
    var packedData = bitPacker(data, width, height, this._options);
    var bpp = constants2.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    var filteredData = filter(packedData, width, height, this._options, bpp);
    return filteredData;
  };
  Packer.prototype._packChunk = function(type, data) {
    var len = data ? data.length : 0;
    var buf = new Buffer(len + 12);
    buf.writeUInt32BE(len, 0);
    buf.writeUInt32BE(type, 4);
    if (data) {
      data.copy(buf, 8);
    }
    buf.writeInt32BE(CrcStream.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
    return buf;
  };
  Packer.prototype.packGAMA = function(gamma) {
    var buf = new Buffer(4);
    buf.writeUInt32BE(Math.floor(gamma * constants2.GAMMA_DIVISION), 0);
    return this._packChunk(constants2.TYPE_gAMA, buf);
  };
  Packer.prototype.packIHDR = function(width, height) {
    var buf = new Buffer(13);
    buf.writeUInt32BE(width, 0);
    buf.writeUInt32BE(height, 4);
    buf[8] = this._options.bitDepth;
    buf[9] = this._options.colorType;
    buf[10] = 0;
    buf[11] = 0;
    buf[12] = 0;
    return this._packChunk(constants2.TYPE_IHDR, buf);
  };
  Packer.prototype.packIDAT = function(data) {
    return this._packChunk(constants2.TYPE_IDAT, data);
  };
  Packer.prototype.packIEND = function() {
    return this._packChunk(constants2.TYPE_IEND, null);
  };
  return packer.exports;
}
var hasRequiredPackerAsync;
function requirePackerAsync() {
  if (hasRequiredPackerAsync)
    return packerAsync.exports;
  hasRequiredPackerAsync = 1;
  var util2 = require$$3;
  var Stream = require$$3;
  var constants2 = requireConstants$1();
  var Packer = requirePacker();
  var PackerAsync = packerAsync.exports = function(opt) {
    Stream.call(this);
    var options = opt || {};
    this._packer = new Packer(options);
    this._deflate = this._packer.createDeflate();
    this.readable = true;
  };
  util2.inherits(PackerAsync, Stream);
  PackerAsync.prototype.pack = function(data, width, height, gamma) {
    this.emit("data", new Buffer(constants2.PNG_SIGNATURE));
    this.emit("data", this._packer.packIHDR(width, height));
    if (gamma) {
      this.emit("data", this._packer.packGAMA(gamma));
    }
    var filteredData = this._packer.filterData(data, width, height);
    this._deflate.on("error", this.emit.bind(this, "error"));
    this._deflate.on("data", function(compressedData) {
      this.emit("data", this._packer.packIDAT(compressedData));
    }.bind(this));
    this._deflate.on("end", function() {
      this.emit("data", this._packer.packIEND());
      this.emit("end");
    }.bind(this));
    this._deflate.end(filteredData);
  };
  return packerAsync.exports;
}
var pngSync = {};
var syncInflate = { exports: {} };
var buffer = {};
var base64Js = {};
var hasRequiredBase64Js;
function requireBase64Js() {
  if (hasRequiredBase64Js)
    return base64Js;
  hasRequiredBase64Js = 1;
  base64Js.byteLength = byteLength;
  base64Js.toByteArray = toByteArray;
  base64Js.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1)
      validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i2;
    for (i2 = 0; i2 < len2; i2 += 4) {
      tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i2 = start; i2 < end; i2 += 3) {
      tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
      );
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
      );
    }
    return parts.join("");
  }
  return base64Js;
}
var ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var hasRequiredIeee754;
function requireIeee754() {
  if (hasRequiredIeee754)
    return ieee754;
  hasRequiredIeee754 = 1;
  ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer2[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer2[offset + i], i += d, nBits -= 8) {
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer2[offset + i], i += d, nBits -= 8) {
    }
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
    }
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
    }
    buffer2[offset + i - d] |= s * 128;
  };
  return ieee754;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var hasRequiredBuffer;
function requireBuffer() {
  if (hasRequiredBuffer)
    return buffer;
  hasRequiredBuffer = 1;
  (function(exports) {
    var base64 = requireBase64Js();
    var ieee7542 = requireIeee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      var valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(
          value[Symbol.toPrimitive]("string"),
          encodingOrOffset,
          length
        );
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length = byteLength(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer2 = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer2.length) {
            Buffer2.from(buf).copy(buffer2, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer2,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer2, pos);
        }
        pos += buf.length;
      }
      return buffer2;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      var len = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      var length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
      if (buffer2.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      var out = "";
      for (var i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee7542.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee7542.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee7542.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee7542.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee7542.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee7542.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        var len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src2, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src2.length)
          break;
        dst[i + offset] = src2[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      var alphabet = "0123456789abcdef";
      var table = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var i16 = i * 16;
        for (var j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
  })(buffer);
  return buffer;
}
var hasRequiredSyncInflate;
function requireSyncInflate() {
  if (hasRequiredSyncInflate)
    return syncInflate.exports;
  hasRequiredSyncInflate = 1;
  (function(module, exports) {
    var assert = require$$3.ok;
    var zlib = require$$3;
    var util2 = require$$3;
    var kMaxLength = requireBuffer().kMaxLength;
    function Inflate(opts) {
      if (!(this instanceof Inflate)) {
        return new Inflate(opts);
      }
      if (opts && opts.chunkSize < zlib.Z_MIN_CHUNK) {
        opts.chunkSize = zlib.Z_MIN_CHUNK;
      }
      zlib.Inflate.call(this, opts);
      this._offset = this._offset === void 0 ? this._outOffset : this._offset;
      this._buffer = this._buffer || this._outBuffer;
      if (opts && opts.maxLength != null) {
        this._maxLength = opts.maxLength;
      }
    }
    function createInflate(opts) {
      return new Inflate(opts);
    }
    function _close(engine, callback) {
      if (callback) {
        process.nextTick(callback);
      }
      if (!engine._handle) {
        return;
      }
      engine._handle.close();
      engine._handle = null;
    }
    Inflate.prototype._processChunk = function(chunk, flushFlag, asyncCb) {
      if (typeof asyncCb === "function") {
        return zlib.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
      }
      var self2 = this;
      var availInBefore = chunk && chunk.length;
      var availOutBefore = this._chunkSize - this._offset;
      var leftToInflate = this._maxLength;
      var inOff = 0;
      var buffers = [];
      var nread = 0;
      var error;
      this.on("error", function(err) {
        error = err;
      });
      function handleChunk(availInAfter, availOutAfter) {
        if (self2._hadError) {
          return;
        }
        var have = availOutBefore - availOutAfter;
        assert(have >= 0, "have should not go down");
        if (have > 0) {
          var out = self2._buffer.slice(self2._offset, self2._offset + have);
          self2._offset += have;
          if (out.length > leftToInflate) {
            out = out.slice(0, leftToInflate);
          }
          buffers.push(out);
          nread += out.length;
          leftToInflate -= out.length;
          if (leftToInflate === 0) {
            return false;
          }
        }
        if (availOutAfter === 0 || self2._offset >= self2._chunkSize) {
          availOutBefore = self2._chunkSize;
          self2._offset = 0;
          self2._buffer = Buffer.allocUnsafe(self2._chunkSize);
        }
        if (availOutAfter === 0) {
          inOff += availInBefore - availInAfter;
          availInBefore = availInAfter;
          return true;
        }
        return false;
      }
      assert(this._handle, "zlib binding closed");
      do {
        var res = this._handle.writeSync(
          flushFlag,
          chunk,
          // in
          inOff,
          // in_off
          availInBefore,
          // in_len
          this._buffer,
          // out
          this._offset,
          //out_off
          availOutBefore
        );
        res = res || this._writeState;
      } while (!this._hadError && handleChunk(res[0], res[1]));
      if (this._hadError) {
        throw error;
      }
      if (nread >= kMaxLength) {
        _close(this);
        throw new RangeError("Cannot create final Buffer. It would be larger than 0x" + kMaxLength.toString(16) + " bytes");
      }
      var buf = Buffer.concat(buffers, nread);
      _close(this);
      return buf;
    };
    util2.inherits(Inflate, zlib.Inflate);
    function zlibBufferSync(engine, buffer2) {
      if (typeof buffer2 === "string") {
        buffer2 = Buffer.from(buffer2);
      }
      if (!(buffer2 instanceof Buffer)) {
        throw new TypeError("Not a string or buffer");
      }
      var flushFlag = engine._finishFlushFlag;
      if (flushFlag == null) {
        flushFlag = zlib.Z_FINISH;
      }
      return engine._processChunk(buffer2, flushFlag);
    }
    function inflateSync(buffer2, opts) {
      return zlibBufferSync(new Inflate(opts), buffer2);
    }
    module.exports = exports = inflateSync;
    exports.Inflate = Inflate;
    exports.createInflate = createInflate;
    exports.inflateSync = inflateSync;
  })(syncInflate, syncInflate.exports);
  return syncInflate.exports;
}
var syncReader = { exports: {} };
var hasRequiredSyncReader;
function requireSyncReader() {
  if (hasRequiredSyncReader)
    return syncReader.exports;
  hasRequiredSyncReader = 1;
  var SyncReader = syncReader.exports = function(buffer2) {
    this._buffer = buffer2;
    this._reads = [];
  };
  SyncReader.prototype.read = function(length, callback) {
    this._reads.push({
      length: Math.abs(length),
      // if length < 0 then at most this length
      allowLess: length < 0,
      func: callback
    });
  };
  SyncReader.prototype.process = function() {
    while (this._reads.length > 0 && this._buffer.length) {
      var read = this._reads[0];
      if (this._buffer.length && (this._buffer.length >= read.length || read.allowLess)) {
        this._reads.shift();
        var buf = this._buffer;
        this._buffer = buf.slice(read.length);
        read.func.call(this, buf.slice(0, read.length));
      } else {
        break;
      }
    }
    if (this._reads.length > 0) {
      return new Error("There are some read requests waitng on finished stream");
    }
    if (this._buffer.length > 0) {
      return new Error("unrecognised content at end of stream");
    }
  };
  return syncReader.exports;
}
var filterParseSync = {};
var hasRequiredFilterParseSync;
function requireFilterParseSync() {
  if (hasRequiredFilterParseSync)
    return filterParseSync;
  hasRequiredFilterParseSync = 1;
  var SyncReader = requireSyncReader();
  var Filter = requireFilterParse();
  filterParseSync.process = function(inBuffer, bitmapInfo) {
    var outBuffers = [];
    var reader = new SyncReader(inBuffer);
    var filter = new Filter(bitmapInfo, {
      read: reader.read.bind(reader),
      write: function(bufferPart) {
        outBuffers.push(bufferPart);
      },
      complete: function() {
      }
    });
    filter.start();
    reader.process();
    return Buffer.concat(outBuffers);
  };
  return filterParseSync;
}
var parserSync;
var hasRequiredParserSync;
function requireParserSync() {
  if (hasRequiredParserSync)
    return parserSync;
  hasRequiredParserSync = 1;
  var hasSyncZlib = true;
  var zlib = require$$3;
  var inflateSync = requireSyncInflate();
  if (!zlib.deflateSync) {
    hasSyncZlib = false;
  }
  var SyncReader = requireSyncReader();
  var FilterSync = requireFilterParseSync();
  var Parser = requireParser();
  var bitmapper2 = requireBitmapper();
  var formatNormaliser2 = requireFormatNormaliser();
  parserSync = function(buffer2, options) {
    if (!hasSyncZlib) {
      throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    var err;
    function handleError(_err_) {
      err = _err_;
    }
    var metaData;
    function handleMetaData(_metaData_) {
      metaData = _metaData_;
    }
    function handleTransColor(transColor) {
      metaData.transColor = transColor;
    }
    function handlePalette(palette) {
      metaData.palette = palette;
    }
    function handleSimpleTransparency() {
      metaData.alpha = true;
    }
    var gamma;
    function handleGamma(_gamma_) {
      gamma = _gamma_;
    }
    var inflateDataList = [];
    function handleInflateData(inflatedData2) {
      inflateDataList.push(inflatedData2);
    }
    var reader = new SyncReader(buffer2);
    var parser2 = new Parser(options, {
      read: reader.read.bind(reader),
      error: handleError,
      metadata: handleMetaData,
      gamma: handleGamma,
      palette: handlePalette,
      transColor: handleTransColor,
      inflateData: handleInflateData,
      simpleTransparency: handleSimpleTransparency
    });
    parser2.start();
    reader.process();
    if (err) {
      throw err;
    }
    var inflateData = Buffer.concat(inflateDataList);
    inflateDataList.length = 0;
    var inflatedData;
    if (metaData.interlace) {
      inflatedData = zlib.inflateSync(inflateData);
    } else {
      var rowSize = (metaData.width * metaData.bpp * metaData.depth + 7 >> 3) + 1;
      var imageSize = rowSize * metaData.height;
      inflatedData = inflateSync(inflateData, { chunkSize: imageSize, maxLength: imageSize });
    }
    inflateData = null;
    if (!inflatedData || !inflatedData.length) {
      throw new Error("bad png - invalid inflate data response");
    }
    var unfilteredData = FilterSync.process(inflatedData, metaData);
    inflateData = null;
    var bitmapData = bitmapper2.dataToBitMap(unfilteredData, metaData);
    unfilteredData = null;
    var normalisedBitmapData = formatNormaliser2(bitmapData, metaData);
    metaData.data = normalisedBitmapData;
    metaData.gamma = gamma || 0;
    return metaData;
  };
  return parserSync;
}
var packerSync;
var hasRequiredPackerSync;
function requirePackerSync() {
  if (hasRequiredPackerSync)
    return packerSync;
  hasRequiredPackerSync = 1;
  var hasSyncZlib = true;
  var zlib = require$$3;
  if (!zlib.deflateSync) {
    hasSyncZlib = false;
  }
  var constants2 = requireConstants$1();
  var Packer = requirePacker();
  packerSync = function(metaData, opt) {
    if (!hasSyncZlib) {
      throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    var options = opt || {};
    var packer2 = new Packer(options);
    var chunks = [];
    chunks.push(new Buffer(constants2.PNG_SIGNATURE));
    chunks.push(packer2.packIHDR(metaData.width, metaData.height));
    if (metaData.gamma) {
      chunks.push(packer2.packGAMA(metaData.gamma));
    }
    var filteredData = packer2.filterData(metaData.data, metaData.width, metaData.height);
    var compressedData = zlib.deflateSync(filteredData, packer2.getDeflateOptions());
    filteredData = null;
    if (!compressedData || !compressedData.length) {
      throw new Error("bad png - invalid compressed data response");
    }
    chunks.push(packer2.packIDAT(compressedData));
    chunks.push(packer2.packIEND());
    return Buffer.concat(chunks);
  };
  return packerSync;
}
var hasRequiredPngSync;
function requirePngSync() {
  if (hasRequiredPngSync)
    return pngSync;
  hasRequiredPngSync = 1;
  var parse = requireParserSync();
  var pack = requirePackerSync();
  pngSync.read = function(buffer2, options) {
    return parse(buffer2, options || {});
  };
  pngSync.write = function(png2, options) {
    return pack(png2, options);
  };
  return pngSync;
}
var hasRequiredPng;
function requirePng() {
  if (hasRequiredPng)
    return png;
  hasRequiredPng = 1;
  var util2 = require$$3;
  var Stream = require$$3;
  var Parser = requireParserAsync();
  var Packer = requirePackerAsync();
  var PNGSync = requirePngSync();
  var PNG = png.PNG = function(options) {
    Stream.call(this);
    options = options || {};
    this.width = options.width | 0;
    this.height = options.height | 0;
    this.data = this.width > 0 && this.height > 0 ? new Buffer(4 * this.width * this.height) : null;
    if (options.fill && this.data) {
      this.data.fill(0);
    }
    this.gamma = 0;
    this.readable = this.writable = true;
    this._parser = new Parser(options);
    this._parser.on("error", this.emit.bind(this, "error"));
    this._parser.on("close", this._handleClose.bind(this));
    this._parser.on("metadata", this._metadata.bind(this));
    this._parser.on("gamma", this._gamma.bind(this));
    this._parser.on("parsed", function(data) {
      this.data = data;
      this.emit("parsed", data);
    }.bind(this));
    this._packer = new Packer(options);
    this._packer.on("data", this.emit.bind(this, "data"));
    this._packer.on("end", this.emit.bind(this, "end"));
    this._parser.on("close", this._handleClose.bind(this));
    this._packer.on("error", this.emit.bind(this, "error"));
  };
  util2.inherits(PNG, Stream);
  PNG.sync = PNGSync;
  PNG.prototype.pack = function() {
    if (!this.data || !this.data.length) {
      this.emit("error", "No data provided");
      return this;
    }
    process.nextTick(function() {
      this._packer.pack(this.data, this.width, this.height, this.gamma);
    }.bind(this));
    return this;
  };
  PNG.prototype.parse = function(data, callback) {
    if (callback) {
      var onParsed, onError;
      onParsed = function(parsedData) {
        this.removeListener("error", onError);
        this.data = parsedData;
        callback(null, this);
      }.bind(this);
      onError = function(err) {
        this.removeListener("parsed", onParsed);
        callback(err, null);
      }.bind(this);
      this.once("parsed", onParsed);
      this.once("error", onError);
    }
    this.end(data);
    return this;
  };
  PNG.prototype.write = function(data) {
    this._parser.write(data);
    return true;
  };
  PNG.prototype.end = function(data) {
    this._parser.end(data);
  };
  PNG.prototype._metadata = function(metadata) {
    this.width = metadata.width;
    this.height = metadata.height;
    this.emit("metadata", metadata);
  };
  PNG.prototype._gamma = function(gamma) {
    this.gamma = gamma;
  };
  PNG.prototype._handleClose = function() {
    if (!this._parser.writable && !this._packer.readable) {
      this.emit("close");
    }
  };
  PNG.bitblt = function(src2, dst, srcX, srcY, width, height, deltaX, deltaY) {
    srcX |= 0;
    srcY |= 0;
    width |= 0;
    height |= 0;
    deltaX |= 0;
    deltaY |= 0;
    if (srcX > src2.width || srcY > src2.height || srcX + width > src2.width || srcY + height > src2.height) {
      throw new Error("bitblt reading outside image");
    }
    if (deltaX > dst.width || deltaY > dst.height || deltaX + width > dst.width || deltaY + height > dst.height) {
      throw new Error("bitblt writing outside image");
    }
    for (var y = 0; y < height; y++) {
      src2.data.copy(
        dst.data,
        (deltaY + y) * dst.width + deltaX << 2,
        (srcY + y) * src2.width + srcX << 2,
        (srcY + y) * src2.width + srcX + width << 2
      );
    }
  };
  PNG.prototype.bitblt = function(dst, srcX, srcY, width, height, deltaX, deltaY) {
    PNG.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
    return this;
  };
  PNG.adjustGamma = function(src2) {
    if (src2.gamma) {
      for (var y = 0; y < src2.height; y++) {
        for (var x = 0; x < src2.width; x++) {
          var idx = src2.width * y + x << 2;
          for (var i = 0; i < 3; i++) {
            var sample = src2.data[idx + i] / 255;
            sample = Math.pow(sample, 1 / 2.2 / src2.gamma);
            src2.data[idx + i] = Math.round(sample * 255);
          }
        }
      }
      src2.gamma = 0;
    }
  };
  PNG.prototype.adjustGamma = function() {
    PNG.adjustGamma(this);
  };
  return png;
}
var hasRequiredEs$q;
function requireEs$q() {
  if (hasRequiredEs$q)
    return es$p;
  hasRequiredEs$q = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _defineProperty2 = _interopRequireDefault(require$$1$1);
    var _pngjs = requirePng();
    var _utils = requireEs$u();
    var MIME_TYPE = "image/png";
    var PNG_FILTER_AUTO = -1;
    var PNG_FILTER_NONE = 0;
    var PNG_FILTER_SUB = 1;
    var PNG_FILTER_UP = 2;
    var PNG_FILTER_AVERAGE = 3;
    var PNG_FILTER_PATH = 4;
    var _default = function _default2() {
      return {
        mime: (0, _defineProperty2["default"])({}, MIME_TYPE, ["png"]),
        constants: {
          MIME_PNG: MIME_TYPE,
          PNG_FILTER_AUTO,
          PNG_FILTER_NONE,
          PNG_FILTER_SUB,
          PNG_FILTER_UP,
          PNG_FILTER_AVERAGE,
          PNG_FILTER_PATH
        },
        hasAlpha: (0, _defineProperty2["default"])({}, MIME_TYPE, true),
        decoders: (0, _defineProperty2["default"])({}, MIME_TYPE, _pngjs.PNG.sync.read),
        encoders: (0, _defineProperty2["default"])({}, MIME_TYPE, function(data) {
          var png2 = new _pngjs.PNG({
            width: data.bitmap.width,
            height: data.bitmap.height
          });
          png2.data = data.bitmap.data;
          return _pngjs.PNG.sync.write(png2, {
            width: data.bitmap.width,
            height: data.bitmap.height,
            deflateLevel: data._deflateLevel,
            deflateStrategy: data._deflateStrategy,
            filterType: data._filterType,
            colorType: typeof data._colorType === "number" ? data._colorType : data._rgba ? 6 : 2,
            inputHasAlpha: data._rgba
          });
        }),
        "class": {
          _deflateLevel: 9,
          _deflateStrategy: 3,
          _filterType: PNG_FILTER_AUTO,
          _colorType: null,
          /**
           * Sets the deflate level used when saving as PNG format (default is 9)
           * @param {number} l Deflate level to use 0-9. 0 is no compression. 9 (default) is maximum compression.
           * @param {function(Error, Jimp)} cb (optional) a callback for when complete
           * @returns {Jimp} this for chaining of methods
           */
          deflateLevel: function deflateLevel(l, cb) {
            if (typeof l !== "number") {
              return _utils.throwError.call(this, "l must be a number", cb);
            }
            if (l < 0 || l > 9) {
              return _utils.throwError.call(this, "l must be a number 0 - 9", cb);
            }
            this._deflateLevel = Math.round(l);
            if ((0, _utils.isNodePattern)(cb)) {
              cb.call(this, null, this);
            }
            return this;
          },
          /**
           * Sets the deflate strategy used when saving as PNG format (default is 3)
           * @param {number} s Deflate strategy to use 0-3.
           * @param {function(Error, Jimp)} cb (optional) a callback for when complete
           * @returns {Jimp} this for chaining of methods
           */
          deflateStrategy: function deflateStrategy(s, cb) {
            if (typeof s !== "number") {
              return _utils.throwError.call(this, "s must be a number", cb);
            }
            if (s < 0 || s > 3) {
              return _utils.throwError.call(this, "s must be a number 0 - 3", cb);
            }
            this._deflateStrategy = Math.round(s);
            if ((0, _utils.isNodePattern)(cb)) {
              cb.call(this, null, this);
            }
            return this;
          },
          /**
           * Sets the filter type used when saving as PNG format (default is automatic filters)
           * @param {number} f The quality to use -1-4.
           * @param {function(Error, Jimp)} cb (optional) a callback for when complete
           * @returns {Jimp} this for chaining of methods
           */
          filterType: function filterType(f, cb) {
            if (typeof f !== "number") {
              return _utils.throwError.call(this, "n must be a number", cb);
            }
            if (f < -1 || f > 4) {
              return _utils.throwError.call(this, "n must be -1 (auto) or a number 0 - 4", cb);
            }
            this._filterType = Math.round(f);
            if ((0, _utils.isNodePattern)(cb)) {
              cb.call(this, null, this);
            }
            return this;
          },
          /**
           * Sets the color type used when saving as PNG format
           * @param {number} s color type to use 0, 2, 4, 6.
           * @param {function(Error, Jimp)} cb (optional) a callback for when complete
           * @returns {Jimp} this for chaining of methods
           */
          colorType: function colorType(s, cb) {
            if (typeof s !== "number") {
              return _utils.throwError.call(this, "s must be a number", cb);
            }
            if (s !== 0 && s !== 2 && s !== 4 && s !== 6) {
              return _utils.throwError.call(this, "s must be a number 0, 2, 4, 6.", cb);
            }
            this._colorType = Math.round(s);
            if ((0, _utils.isNodePattern)(cb)) {
              cb.call(this, null, this);
            }
            return this;
          }
        }
      };
    };
    exports["default"] = _default;
  })(es$p);
  return es$p;
}
var es$o = {};
var encoder;
var hasRequiredEncoder;
function requireEncoder() {
  if (hasRequiredEncoder)
    return encoder;
  hasRequiredEncoder = 1;
  function BmpEncoder(imgData) {
    this.buffer = imgData.data;
    this.width = imgData.width;
    this.height = imgData.height;
    this.extraBytes = this.width % 4;
    this.rgbSize = this.height * (3 * this.width + this.extraBytes);
    this.headerInfoSize = 40;
    this.data = [];
    this.flag = "BM";
    this.reserved = 0;
    this.offset = 54;
    this.fileSize = this.rgbSize + this.offset;
    this.planes = 1;
    this.bitPP = 24;
    this.compress = 0;
    this.hr = 0;
    this.vr = 0;
    this.colors = 0;
    this.importantColors = 0;
  }
  BmpEncoder.prototype.encode = function() {
    var tempBuffer = new Buffer(this.offset + this.rgbSize);
    this.pos = 0;
    tempBuffer.write(this.flag, this.pos, 2);
    this.pos += 2;
    tempBuffer.writeUInt32LE(this.fileSize, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.reserved, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.offset, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.headerInfoSize, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.width, this.pos);
    this.pos += 4;
    tempBuffer.writeInt32LE(-this.height, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt16LE(this.planes, this.pos);
    this.pos += 2;
    tempBuffer.writeUInt16LE(this.bitPP, this.pos);
    this.pos += 2;
    tempBuffer.writeUInt32LE(this.compress, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.rgbSize, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.hr, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.vr, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.colors, this.pos);
    this.pos += 4;
    tempBuffer.writeUInt32LE(this.importantColors, this.pos);
    this.pos += 4;
    var i = 0;
    var rowBytes = 3 * this.width + this.extraBytes;
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        var p = this.pos + y * rowBytes + x * 3;
        i++;
        tempBuffer[p] = this.buffer[i++];
        tempBuffer[p + 1] = this.buffer[i++];
        tempBuffer[p + 2] = this.buffer[i++];
      }
      if (this.extraBytes > 0) {
        var fillOffset = this.pos + y * rowBytes + this.width * 3;
        tempBuffer.fill(0, fillOffset, fillOffset + this.extraBytes);
      }
    }
    return tempBuffer;
  };
  encoder = function(imgData, quality) {
    var encoder2 = new BmpEncoder(imgData);
    var data = encoder2.encode();
    return {
      data,
      width: imgData.width,
      height: imgData.height
    };
  };
  return encoder;
}
var decoder;
var hasRequiredDecoder;
function requireDecoder() {
  if (hasRequiredDecoder)
    return decoder;
  hasRequiredDecoder = 1;
  function BmpDecoder(buffer2, is_with_alpha) {
    this.pos = 0;
    this.buffer = buffer2;
    this.is_with_alpha = !!is_with_alpha;
    this.bottom_up = true;
    this.flag = this.buffer.toString("utf-8", 0, this.pos += 2);
    if (this.flag != "BM")
      throw new Error("Invalid BMP File");
    this.parseHeader();
    this.parseRGBA();
  }
  BmpDecoder.prototype.parseHeader = function() {
    this.fileSize = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.reserved = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.offset = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.headerSize = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.width = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.height = this.buffer.readInt32LE(this.pos);
    this.pos += 4;
    this.planes = this.buffer.readUInt16LE(this.pos);
    this.pos += 2;
    this.bitPP = this.buffer.readUInt16LE(this.pos);
    this.pos += 2;
    this.compress = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.rawSize = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.hr = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.vr = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.colors = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    this.importantColors = this.buffer.readUInt32LE(this.pos);
    this.pos += 4;
    if (this.bitPP === 16 && this.is_with_alpha) {
      this.bitPP = 15;
    }
    if (this.bitPP < 15) {
      var len = this.colors === 0 ? 1 << this.bitPP : this.colors;
      this.palette = new Array(len);
      for (var i = 0; i < len; i++) {
        var blue = this.buffer.readUInt8(this.pos++);
        var green = this.buffer.readUInt8(this.pos++);
        var red = this.buffer.readUInt8(this.pos++);
        var quad = this.buffer.readUInt8(this.pos++);
        this.palette[i] = {
          red,
          green,
          blue,
          quad
        };
      }
    }
    if (this.height < 0) {
      this.height *= -1;
      this.bottom_up = false;
    }
  };
  BmpDecoder.prototype.parseRGBA = function() {
    var bitn = "bit" + this.bitPP;
    var len = this.width * this.height * 4;
    this.data = new Buffer(len);
    this[bitn]();
  };
  BmpDecoder.prototype.bit1 = function() {
    var xlen = Math.ceil(this.width / 8);
    var mode = xlen % 4;
    var y = this.height >= 0 ? this.height - 1 : -this.height;
    for (var y = this.height - 1; y >= 0; y--) {
      var line = this.bottom_up ? y : this.height - 1 - y;
      for (var x = 0; x < xlen; x++) {
        var b = this.buffer.readUInt8(this.pos++);
        var location = line * this.width * 4 + x * 8 * 4;
        for (var i = 0; i < 8; i++) {
          if (x * 8 + i < this.width) {
            var rgb = this.palette[b >> 7 - i & 1];
            this.data[location + i * 4] = 0;
            this.data[location + i * 4 + 1] = rgb.blue;
            this.data[location + i * 4 + 2] = rgb.green;
            this.data[location + i * 4 + 3] = rgb.red;
          } else {
            break;
          }
        }
      }
      if (mode != 0) {
        this.pos += 4 - mode;
      }
    }
  };
  BmpDecoder.prototype.bit4 = function() {
    if (this.compress == 2) {
      let setPixelData = function(rgbIndex) {
        var rgb2 = this.palette[rgbIndex];
        this.data[location] = 0;
        this.data[location + 1] = rgb2.blue;
        this.data[location + 2] = rgb2.green;
        this.data[location + 3] = rgb2.red;
        location += 4;
      };
      this.data.fill(255);
      var location = 0;
      var lines = this.bottom_up ? this.height - 1 : 0;
      var low_nibble = false;
      while (location < this.data.length) {
        var a = this.buffer.readUInt8(this.pos++);
        var b = this.buffer.readUInt8(this.pos++);
        if (a == 0) {
          if (b == 0) {
            if (this.bottom_up) {
              lines--;
            } else {
              lines++;
            }
            location = lines * this.width * 4;
            low_nibble = false;
            continue;
          } else if (b == 1) {
            break;
          } else if (b == 2) {
            var x = this.buffer.readUInt8(this.pos++);
            var y = this.buffer.readUInt8(this.pos++);
            if (this.bottom_up) {
              lines -= y;
            } else {
              lines += y;
            }
            location += y * this.width * 4 + x * 4;
          } else {
            var c = this.buffer.readUInt8(this.pos++);
            for (var i = 0; i < b; i++) {
              if (low_nibble) {
                setPixelData.call(this, c & 15);
              } else {
                setPixelData.call(this, (c & 240) >> 4);
              }
              if (i & 1 && i + 1 < b) {
                c = this.buffer.readUInt8(this.pos++);
              }
              low_nibble = !low_nibble;
            }
            if ((b + 1 >> 1 & 1) == 1) {
              this.pos++;
            }
          }
        } else {
          for (var i = 0; i < a; i++) {
            if (low_nibble) {
              setPixelData.call(this, b & 15);
            } else {
              setPixelData.call(this, (b & 240) >> 4);
            }
            low_nibble = !low_nibble;
          }
        }
      }
    } else {
      var xlen = Math.ceil(this.width / 2);
      var mode = xlen % 4;
      for (var y = this.height - 1; y >= 0; y--) {
        var line = this.bottom_up ? y : this.height - 1 - y;
        for (var x = 0; x < xlen; x++) {
          var b = this.buffer.readUInt8(this.pos++);
          var location = line * this.width * 4 + x * 2 * 4;
          var before = b >> 4;
          var after = b & 15;
          var rgb = this.palette[before];
          this.data[location] = 0;
          this.data[location + 1] = rgb.blue;
          this.data[location + 2] = rgb.green;
          this.data[location + 3] = rgb.red;
          if (x * 2 + 1 >= this.width)
            break;
          rgb = this.palette[after];
          this.data[location + 4] = 0;
          this.data[location + 4 + 1] = rgb.blue;
          this.data[location + 4 + 2] = rgb.green;
          this.data[location + 4 + 3] = rgb.red;
        }
        if (mode != 0) {
          this.pos += 4 - mode;
        }
      }
    }
  };
  BmpDecoder.prototype.bit8 = function() {
    if (this.compress == 1) {
      let setPixelData = function(rgbIndex) {
        var rgb2 = this.palette[rgbIndex];
        this.data[location] = 0;
        this.data[location + 1] = rgb2.blue;
        this.data[location + 2] = rgb2.green;
        this.data[location + 3] = rgb2.red;
        location += 4;
      };
      this.data.fill(255);
      var location = 0;
      var lines = this.bottom_up ? this.height - 1 : 0;
      while (location < this.data.length) {
        var a = this.buffer.readUInt8(this.pos++);
        var b = this.buffer.readUInt8(this.pos++);
        if (a == 0) {
          if (b == 0) {
            if (this.bottom_up) {
              lines--;
            } else {
              lines++;
            }
            location = lines * this.width * 4;
            continue;
          } else if (b == 1) {
            break;
          } else if (b == 2) {
            var x = this.buffer.readUInt8(this.pos++);
            var y = this.buffer.readUInt8(this.pos++);
            if (this.bottom_up) {
              lines -= y;
            } else {
              lines += y;
            }
            location += y * this.width * 4 + x * 4;
          } else {
            for (var i = 0; i < b; i++) {
              var c = this.buffer.readUInt8(this.pos++);
              setPixelData.call(this, c);
            }
            if (b & true) {
              this.pos++;
            }
          }
        } else {
          for (var i = 0; i < a; i++) {
            setPixelData.call(this, b);
          }
        }
      }
    } else {
      var mode = this.width % 4;
      for (var y = this.height - 1; y >= 0; y--) {
        var line = this.bottom_up ? y : this.height - 1 - y;
        for (var x = 0; x < this.width; x++) {
          var b = this.buffer.readUInt8(this.pos++);
          var location = line * this.width * 4 + x * 4;
          if (b < this.palette.length) {
            var rgb = this.palette[b];
            this.data[location] = 0;
            this.data[location + 1] = rgb.blue;
            this.data[location + 2] = rgb.green;
            this.data[location + 3] = rgb.red;
          } else {
            this.data[location] = 0;
            this.data[location + 1] = 255;
            this.data[location + 2] = 255;
            this.data[location + 3] = 255;
          }
        }
        if (mode != 0) {
          this.pos += 4 - mode;
        }
      }
    }
  };
  BmpDecoder.prototype.bit15 = function() {
    var dif_w = this.width % 3;
    var _11111 = parseInt("11111", 2), _1_5 = _11111;
    for (var y = this.height - 1; y >= 0; y--) {
      var line = this.bottom_up ? y : this.height - 1 - y;
      for (var x = 0; x < this.width; x++) {
        var B = this.buffer.readUInt16LE(this.pos);
        this.pos += 2;
        var blue = (B & _1_5) / _1_5 * 255 | 0;
        var green = (B >> 5 & _1_5) / _1_5 * 255 | 0;
        var red = (B >> 10 & _1_5) / _1_5 * 255 | 0;
        var alpha = B >> 15 ? 255 : 0;
        var location = line * this.width * 4 + x * 4;
        this.data[location] = alpha;
        this.data[location + 1] = blue;
        this.data[location + 2] = green;
        this.data[location + 3] = red;
      }
      this.pos += dif_w;
    }
  };
  BmpDecoder.prototype.bit16 = function() {
    var dif_w = this.width % 2 * 2;
    this.maskRed = 31744;
    this.maskGreen = 992;
    this.maskBlue = 31;
    this.mask0 = 0;
    if (this.compress == 3) {
      this.maskRed = this.buffer.readUInt32LE(this.pos);
      this.pos += 4;
      this.maskGreen = this.buffer.readUInt32LE(this.pos);
      this.pos += 4;
      this.maskBlue = this.buffer.readUInt32LE(this.pos);
      this.pos += 4;
      this.mask0 = this.buffer.readUInt32LE(this.pos);
      this.pos += 4;
    }
    var ns = [0, 0, 0];
    for (var i = 0; i < 16; i++) {
      if (this.maskRed >> i & 1)
        ns[0]++;
      if (this.maskGreen >> i & 1)
        ns[1]++;
      if (this.maskBlue >> i & 1)
        ns[2]++;
    }
    ns[1] += ns[0];
    ns[2] += ns[1];
    ns[0] = 8 - ns[0];
    ns[1] -= 8;
    ns[2] -= 8;
    for (var y = this.height - 1; y >= 0; y--) {
      var line = this.bottom_up ? y : this.height - 1 - y;
      for (var x = 0; x < this.width; x++) {
        var B = this.buffer.readUInt16LE(this.pos);
        this.pos += 2;
        var blue = (B & this.maskBlue) << ns[0];
        var green = (B & this.maskGreen) >> ns[1];
        var red = (B & this.maskRed) >> ns[2];
        var location = line * this.width * 4 + x * 4;
        this.data[location] = 0;
        this.data[location + 1] = blue;
        this.data[location + 2] = green;
        this.data[location + 3] = red;
      }
      this.pos += dif_w;
    }
  };
  BmpDecoder.prototype.bit24 = function() {
    for (var y = this.height - 1; y >= 0; y--) {
      var line = this.bottom_up ? y : this.height - 1 - y;
      for (var x = 0; x < this.width; x++) {
        var blue = this.buffer.readUInt8(this.pos++);
        var green = this.buffer.readUInt8(this.pos++);
        var red = this.buffer.readUInt8(this.pos++);
        var location = line * this.width * 4 + x * 4;
        this.data[location] = 0;
        this.data[location + 1] = blue;
        this.data[location + 2] = green;
        this.data[location + 3] = red;
      }
      this.pos += this.width % 4;
    }
  };
  BmpDecoder.prototype.bit32 = function() {
    if (this.compress == 3) {
      this.maskRed = this.buffer.readUInt32LE(this.pos);
      this.pos += 4;
      this.maskGreen = this.buffer.readUInt32LE(this.pos);
      this.pos += 4;
      this.maskBlue = this.buffer.readUInt32LE(this.pos);
      this.pos += 4;
      this.mask0 = this.buffer.readUInt32LE(this.pos);
      this.pos += 4;
      for (var y = this.height - 1; y >= 0; y--) {
        var line = this.bottom_up ? y : this.height - 1 - y;
        for (var x = 0; x < this.width; x++) {
          var alpha = this.buffer.readUInt8(this.pos++);
          var blue = this.buffer.readUInt8(this.pos++);
          var green = this.buffer.readUInt8(this.pos++);
          var red = this.buffer.readUInt8(this.pos++);
          var location = line * this.width * 4 + x * 4;
          this.data[location] = alpha;
          this.data[location + 1] = blue;
          this.data[location + 2] = green;
          this.data[location + 3] = red;
        }
      }
    } else {
      for (var y = this.height - 1; y >= 0; y--) {
        var line = this.bottom_up ? y : this.height - 1 - y;
        for (var x = 0; x < this.width; x++) {
          var blue = this.buffer.readUInt8(this.pos++);
          var green = this.buffer.readUInt8(this.pos++);
          var red = this.buffer.readUInt8(this.pos++);
          var alpha = this.buffer.readUInt8(this.pos++);
          var location = line * this.width * 4 + x * 4;
          this.data[location] = alpha;
          this.data[location + 1] = blue;
          this.data[location + 2] = green;
          this.data[location + 3] = red;
        }
      }
    }
  };
  BmpDecoder.prototype.getData = function() {
    return this.data;
  };
  decoder = function(bmpData) {
    var decoder2 = new BmpDecoder(bmpData);
    return decoder2;
  };
  return decoder;
}
var bmpJs;
var hasRequiredBmpJs;
function requireBmpJs() {
  if (hasRequiredBmpJs)
    return bmpJs;
  hasRequiredBmpJs = 1;
  var encode2 = requireEncoder(), decode2 = requireDecoder();
  bmpJs = {
    encode: encode2,
    decode: decode2
  };
  return bmpJs;
}
var hasRequiredEs$p;
function requireEs$p() {
  if (hasRequiredEs$p)
    return es$o;
  hasRequiredEs$p = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _defineProperty2 = _interopRequireDefault(require$$1$1);
    var _bmpJs = _interopRequireDefault(requireBmpJs());
    var _utils = requireEs$u();
    var MIME_TYPE = "image/bmp";
    var MIME_TYPE_SECOND = "image/x-ms-bmp";
    function toAGBR(image) {
      return (0, _utils.scan)(image, 0, 0, image.bitmap.width, image.bitmap.height, function(x, y, index2) {
        var red = this.bitmap.data[index2 + 0];
        var green = this.bitmap.data[index2 + 1];
        var blue = this.bitmap.data[index2 + 2];
        var alpha = this.bitmap.data[index2 + 3];
        this.bitmap.data[index2 + 0] = alpha;
        this.bitmap.data[index2 + 1] = blue;
        this.bitmap.data[index2 + 2] = green;
        this.bitmap.data[index2 + 3] = red;
      }).bitmap;
    }
    function fromAGBR(bitmap) {
      return (0, _utils.scan)({
        bitmap
      }, 0, 0, bitmap.width, bitmap.height, function(x, y, index2) {
        var alpha = this.bitmap.data[index2 + 0];
        var blue = this.bitmap.data[index2 + 1];
        var green = this.bitmap.data[index2 + 2];
        var red = this.bitmap.data[index2 + 3];
        this.bitmap.data[index2 + 0] = red;
        this.bitmap.data[index2 + 1] = green;
        this.bitmap.data[index2 + 2] = blue;
        this.bitmap.data[index2 + 3] = bitmap.is_with_alpha ? alpha : 255;
      }).bitmap;
    }
    var decode2 = function decode3(data) {
      return fromAGBR(_bmpJs["default"].decode(data));
    };
    var encode2 = function encode3(image) {
      return _bmpJs["default"].encode(toAGBR(image)).data;
    };
    var _default = function _default2() {
      var _decoders, _encoders;
      return {
        mime: (0, _defineProperty2["default"])({}, MIME_TYPE, ["bmp"]),
        constants: {
          MIME_BMP: MIME_TYPE,
          MIME_X_MS_BMP: MIME_TYPE_SECOND
        },
        decoders: (_decoders = {}, (0, _defineProperty2["default"])(_decoders, MIME_TYPE, decode2), (0, _defineProperty2["default"])(_decoders, MIME_TYPE_SECOND, decode2), _decoders),
        encoders: (_encoders = {}, (0, _defineProperty2["default"])(_encoders, MIME_TYPE, encode2), (0, _defineProperty2["default"])(_encoders, MIME_TYPE_SECOND, encode2), _encoders)
      };
    };
    exports["default"] = _default;
  })(es$o);
  return es$o;
}
var es$n = {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var UTIF = { exports: {} };
var common = {};
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon)
    return common;
  hasRequiredCommon = 1;
  (function(exports) {
    var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
    function _has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    exports.assign = function(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }
      return obj;
    };
    exports.shrinkBuf = function(buf, size) {
      if (buf.length === size) {
        return buf;
      }
      if (buf.subarray) {
        return buf.subarray(0, size);
      }
      buf.length = size;
      return buf;
    };
    var fnTyped = {
      arraySet: function(dest, src2, src_offs, len, dest_offs) {
        if (src2.subarray && dest.subarray) {
          dest.set(src2.subarray(src_offs, src_offs + len), dest_offs);
          return;
        }
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src2[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        len = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        }
        result = new Uint8Array(len);
        pos = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }
        return result;
      }
    };
    var fnUntyped = {
      arraySet: function(dest, src2, src_offs, len, dest_offs) {
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src2[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
      }
    };
    exports.setTyped = function(on) {
      if (on) {
        exports.Buf8 = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
      } else {
        exports.Buf8 = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
      }
    };
    exports.setTyped(TYPED_OK);
  })(common);
  return common;
}
var deflate$1 = {};
var deflate = {};
var trees = {};
var hasRequiredTrees;
function requireTrees() {
  if (hasRequiredTrees)
    return trees;
  hasRequiredTrees = 1;
  var utils = requireCommon();
  var Z_FIXED = 4;
  var Z_BINARY = 0;
  var Z_TEXT = 1;
  var Z_UNKNOWN = 2;
  function zero(buf) {
    var len = buf.length;
    while (--len >= 0) {
      buf[len] = 0;
    }
  }
  var STORED_BLOCK = 0;
  var STATIC_TREES = 1;
  var DYN_TREES = 2;
  var MIN_MATCH = 3;
  var MAX_MATCH = 258;
  var LENGTH_CODES = 29;
  var LITERALS = 256;
  var L_CODES = LITERALS + 1 + LENGTH_CODES;
  var D_CODES = 30;
  var BL_CODES = 19;
  var HEAP_SIZE = 2 * L_CODES + 1;
  var MAX_BITS = 15;
  var Buf_size = 16;
  var MAX_BL_BITS = 7;
  var END_BLOCK = 256;
  var REP_3_6 = 16;
  var REPZ_3_10 = 17;
  var REPZ_11_138 = 18;
  var extra_lbits = (
    /* extra bits for each length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
  );
  var extra_dbits = (
    /* extra bits for each distance code */
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
  );
  var extra_blbits = (
    /* extra bits for each bit length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
  );
  var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var DIST_CODE_LEN = 512;
  var static_ltree = new Array((L_CODES + 2) * 2);
  zero(static_ltree);
  var static_dtree = new Array(D_CODES * 2);
  zero(static_dtree);
  var _dist_code = new Array(DIST_CODE_LEN);
  zero(_dist_code);
  var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
  zero(_length_code);
  var base_length = new Array(LENGTH_CODES);
  zero(base_length);
  var base_dist = new Array(D_CODES);
  zero(base_dist);
  function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree;
    this.extra_bits = extra_bits;
    this.extra_base = extra_base;
    this.elems = elems;
    this.max_length = max_length;
    this.has_stree = static_tree && static_tree.length;
  }
  var static_l_desc;
  var static_d_desc;
  var static_bl_desc;
  function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree;
    this.max_code = 0;
    this.stat_desc = stat_desc;
  }
  function d_code(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
  }
  function put_short(s, w) {
    s.pending_buf[s.pending++] = w & 255;
    s.pending_buf[s.pending++] = w >>> 8 & 255;
  }
  function send_bits(s, value, length) {
    if (s.bi_valid > Buf_size - length) {
      s.bi_buf |= value << s.bi_valid & 65535;
      put_short(s, s.bi_buf);
      s.bi_buf = value >> Buf_size - s.bi_valid;
      s.bi_valid += length - Buf_size;
    } else {
      s.bi_buf |= value << s.bi_valid & 65535;
      s.bi_valid += length;
    }
  }
  function send_code(s, c, tree) {
    send_bits(
      s,
      tree[c * 2],
      tree[c * 2 + 1]
      /*.Len*/
    );
  }
  function bi_reverse(code, len) {
    var res = 0;
    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >>> 1;
  }
  function bi_flush(s) {
    if (s.bi_valid === 16) {
      put_short(s, s.bi_buf);
      s.bi_buf = 0;
      s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
      s.pending_buf[s.pending++] = s.bi_buf & 255;
      s.bi_buf >>= 8;
      s.bi_valid -= 8;
    }
  }
  function gen_bitlen(s, desc) {
    var tree = desc.dyn_tree;
    var max_code = desc.max_code;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var extra = desc.stat_desc.extra_bits;
    var base = desc.stat_desc.extra_base;
    var max_length = desc.stat_desc.max_length;
    var h;
    var n, m;
    var bits;
    var xbits;
    var f;
    var overflow = 0;
    for (bits = 0; bits <= MAX_BITS; bits++) {
      s.bl_count[bits] = 0;
    }
    tree[s.heap[s.heap_max] * 2 + 1] = 0;
    for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
      n = s.heap[h];
      bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n * 2 + 1] = bits;
      if (n > max_code) {
        continue;
      }
      s.bl_count[bits]++;
      xbits = 0;
      if (n >= base) {
        xbits = extra[n - base];
      }
      f = tree[n * 2];
      s.opt_len += f * (bits + xbits);
      if (has_stree) {
        s.static_len += f * (stree[n * 2 + 1] + xbits);
      }
    }
    if (overflow === 0) {
      return;
    }
    do {
      bits = max_length - 1;
      while (s.bl_count[bits] === 0) {
        bits--;
      }
      s.bl_count[bits]--;
      s.bl_count[bits + 1] += 2;
      s.bl_count[max_length]--;
      overflow -= 2;
    } while (overflow > 0);
    for (bits = max_length; bits !== 0; bits--) {
      n = s.bl_count[bits];
      while (n !== 0) {
        m = s.heap[--h];
        if (m > max_code) {
          continue;
        }
        if (tree[m * 2 + 1] !== bits) {
          s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
          tree[m * 2 + 1] = bits;
        }
        n--;
      }
    }
  }
  function gen_codes(tree, max_code, bl_count) {
    var next_code = new Array(MAX_BITS + 1);
    var code = 0;
    var bits;
    var n;
    for (bits = 1; bits <= MAX_BITS; bits++) {
      next_code[bits] = code = code + bl_count[bits - 1] << 1;
    }
    for (n = 0; n <= max_code; n++) {
      var len = tree[n * 2 + 1];
      if (len === 0) {
        continue;
      }
      tree[n * 2] = bi_reverse(next_code[len]++, len);
    }
  }
  function tr_static_init() {
    var n;
    var bits;
    var length;
    var code;
    var dist;
    var bl_count = new Array(MAX_BITS + 1);
    length = 0;
    for (code = 0; code < LENGTH_CODES - 1; code++) {
      base_length[code] = length;
      for (n = 0; n < 1 << extra_lbits[code]; n++) {
        _length_code[length++] = code;
      }
    }
    _length_code[length - 1] = code;
    dist = 0;
    for (code = 0; code < 16; code++) {
      base_dist[code] = dist;
      for (n = 0; n < 1 << extra_dbits[code]; n++) {
        _dist_code[dist++] = code;
      }
    }
    dist >>= 7;
    for (; code < D_CODES; code++) {
      base_dist[code] = dist << 7;
      for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
        _dist_code[256 + dist++] = code;
      }
    }
    for (bits = 0; bits <= MAX_BITS; bits++) {
      bl_count[bits] = 0;
    }
    n = 0;
    while (n <= 143) {
      static_ltree[n * 2 + 1] = 8;
      n++;
      bl_count[8]++;
    }
    while (n <= 255) {
      static_ltree[n * 2 + 1] = 9;
      n++;
      bl_count[9]++;
    }
    while (n <= 279) {
      static_ltree[n * 2 + 1] = 7;
      n++;
      bl_count[7]++;
    }
    while (n <= 287) {
      static_ltree[n * 2 + 1] = 8;
      n++;
      bl_count[8]++;
    }
    gen_codes(static_ltree, L_CODES + 1, bl_count);
    for (n = 0; n < D_CODES; n++) {
      static_dtree[n * 2 + 1] = 5;
      static_dtree[n * 2] = bi_reverse(n, 5);
    }
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
  }
  function init_block(s) {
    var n;
    for (n = 0; n < L_CODES; n++) {
      s.dyn_ltree[n * 2] = 0;
    }
    for (n = 0; n < D_CODES; n++) {
      s.dyn_dtree[n * 2] = 0;
    }
    for (n = 0; n < BL_CODES; n++) {
      s.bl_tree[n * 2] = 0;
    }
    s.dyn_ltree[END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.last_lit = s.matches = 0;
  }
  function bi_windup(s) {
    if (s.bi_valid > 8) {
      put_short(s, s.bi_buf);
    } else if (s.bi_valid > 0) {
      s.pending_buf[s.pending++] = s.bi_buf;
    }
    s.bi_buf = 0;
    s.bi_valid = 0;
  }
  function copy_block(s, buf, len, header) {
    bi_windup(s);
    if (header) {
      put_short(s, len);
      put_short(s, ~len);
    }
    utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
    s.pending += len;
  }
  function smaller(tree, n, m, depth) {
    var _n2 = n * 2;
    var _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
  }
  function pqdownheap(s, tree, k) {
    var v = s.heap[k];
    var j = k << 1;
    while (j <= s.heap_len) {
      if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
        j++;
      }
      if (smaller(tree, v, s.heap[j], s.depth)) {
        break;
      }
      s.heap[k] = s.heap[j];
      k = j;
      j <<= 1;
    }
    s.heap[k] = v;
  }
  function compress_block(s, ltree, dtree) {
    var dist;
    var lc;
    var lx = 0;
    var code;
    var extra;
    if (s.last_lit !== 0) {
      do {
        dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
        lc = s.pending_buf[s.l_buf + lx];
        lx++;
        if (dist === 0) {
          send_code(s, lc, ltree);
        } else {
          code = _length_code[lc];
          send_code(s, code + LITERALS + 1, ltree);
          extra = extra_lbits[code];
          if (extra !== 0) {
            lc -= base_length[code];
            send_bits(s, lc, extra);
          }
          dist--;
          code = d_code(dist);
          send_code(s, code, dtree);
          extra = extra_dbits[code];
          if (extra !== 0) {
            dist -= base_dist[code];
            send_bits(s, dist, extra);
          }
        }
      } while (lx < s.last_lit);
    }
    send_code(s, END_BLOCK, ltree);
  }
  function build_tree(s, desc) {
    var tree = desc.dyn_tree;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var elems = desc.stat_desc.elems;
    var n, m;
    var max_code = -1;
    var node;
    s.heap_len = 0;
    s.heap_max = HEAP_SIZE;
    for (n = 0; n < elems; n++) {
      if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
      } else {
        tree[n * 2 + 1] = 0;
      }
    }
    while (s.heap_len < 2) {
      node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
      tree[node * 2] = 1;
      s.depth[node] = 0;
      s.opt_len--;
      if (has_stree) {
        s.static_len -= stree[node * 2 + 1];
      }
    }
    desc.max_code = max_code;
    for (n = s.heap_len >> 1; n >= 1; n--) {
      pqdownheap(s, tree, n);
    }
    node = elems;
    do {
      n = s.heap[
        1
        /*SMALLEST*/
      ];
      s.heap[
        1
        /*SMALLEST*/
      ] = s.heap[s.heap_len--];
      pqdownheap(
        s,
        tree,
        1
        /*SMALLEST*/
      );
      m = s.heap[
        1
        /*SMALLEST*/
      ];
      s.heap[--s.heap_max] = n;
      s.heap[--s.heap_max] = m;
      tree[node * 2] = tree[n * 2] + tree[m * 2];
      s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
      tree[n * 2 + 1] = tree[m * 2 + 1] = node;
      s.heap[
        1
        /*SMALLEST*/
      ] = node++;
      pqdownheap(
        s,
        tree,
        1
        /*SMALLEST*/
      );
    } while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[
      1
      /*SMALLEST*/
    ];
    gen_bitlen(s, desc);
    gen_codes(tree, max_code, s.bl_count);
  }
  function scan_tree(s, tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[0 * 2 + 1];
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 65535;
    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        s.bl_tree[curlen * 2] += count;
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          s.bl_tree[curlen * 2]++;
        }
        s.bl_tree[REP_3_6 * 2]++;
      } else if (count <= 10) {
        s.bl_tree[REPZ_3_10 * 2]++;
      } else {
        s.bl_tree[REPZ_11_138 * 2]++;
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function send_tree(s, tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[0 * 2 + 1];
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          send_code(s, curlen, s.bl_tree);
        } while (--count !== 0);
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          send_code(s, curlen, s.bl_tree);
          count--;
        }
        send_code(s, REP_3_6, s.bl_tree);
        send_bits(s, count - 3, 2);
      } else if (count <= 10) {
        send_code(s, REPZ_3_10, s.bl_tree);
        send_bits(s, count - 3, 3);
      } else {
        send_code(s, REPZ_11_138, s.bl_tree);
        send_bits(s, count - 11, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function build_bl_tree(s) {
    var max_blindex;
    scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    build_tree(s, s.bl_desc);
    for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
      if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
        break;
      }
    }
    s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    return max_blindex;
  }
  function send_all_trees(s, lcodes, dcodes, blcodes) {
    var rank;
    send_bits(s, lcodes - 257, 5);
    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4);
    for (rank = 0; rank < blcodes; rank++) {
      send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
    }
    send_tree(s, s.dyn_ltree, lcodes - 1);
    send_tree(s, s.dyn_dtree, dcodes - 1);
  }
  function detect_data_type(s) {
    var black_mask = 4093624447;
    var n;
    for (n = 0; n <= 31; n++, black_mask >>>= 1) {
      if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
        return Z_BINARY;
      }
    }
    if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
      return Z_TEXT;
    }
    for (n = 32; n < LITERALS; n++) {
      if (s.dyn_ltree[n * 2] !== 0) {
        return Z_TEXT;
      }
    }
    return Z_BINARY;
  }
  var static_init_done = false;
  function _tr_init(s) {
    if (!static_init_done) {
      tr_static_init();
      static_init_done = true;
    }
    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    init_block(s);
  }
  function _tr_stored_block(s, buf, stored_len, last) {
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
    copy_block(s, buf, stored_len, true);
  }
  function _tr_align(s) {
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
  }
  function _tr_flush_block(s, buf, stored_len, last) {
    var opt_lenb, static_lenb;
    var max_blindex = 0;
    if (s.level > 0) {
      if (s.strm.data_type === Z_UNKNOWN) {
        s.strm.data_type = detect_data_type(s);
      }
      build_tree(s, s.l_desc);
      build_tree(s, s.d_desc);
      max_blindex = build_bl_tree(s);
      opt_lenb = s.opt_len + 3 + 7 >>> 3;
      static_lenb = s.static_len + 3 + 7 >>> 3;
      if (static_lenb <= opt_lenb) {
        opt_lenb = static_lenb;
      }
    } else {
      opt_lenb = static_lenb = stored_len + 5;
    }
    if (stored_len + 4 <= opt_lenb && buf !== -1) {
      _tr_stored_block(s, buf, stored_len, last);
    } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
      send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
      compress_block(s, static_ltree, static_dtree);
    } else {
      send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
      send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
      compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    init_block(s);
    if (last) {
      bi_windup(s);
    }
  }
  function _tr_tally(s, dist, lc) {
    s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
    s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
    s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
    s.last_lit++;
    if (dist === 0) {
      s.dyn_ltree[lc * 2]++;
    } else {
      s.matches++;
      dist--;
      s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
      s.dyn_dtree[d_code(dist) * 2]++;
    }
    return s.last_lit === s.lit_bufsize - 1;
  }
  trees._tr_init = _tr_init;
  trees._tr_stored_block = _tr_stored_block;
  trees._tr_flush_block = _tr_flush_block;
  trees._tr_tally = _tr_tally;
  trees._tr_align = _tr_align;
  return trees;
}
var adler32_1;
var hasRequiredAdler32;
function requireAdler32() {
  if (hasRequiredAdler32)
    return adler32_1;
  hasRequiredAdler32 = 1;
  function adler32(adler, buf, len, pos) {
    var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
    while (len !== 0) {
      n = len > 2e3 ? 2e3 : len;
      len -= n;
      do {
        s1 = s1 + buf[pos++] | 0;
        s2 = s2 + s1 | 0;
      } while (--n);
      s1 %= 65521;
      s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
  }
  adler32_1 = adler32;
  return adler32_1;
}
var crc32_1;
var hasRequiredCrc32;
function requireCrc32() {
  if (hasRequiredCrc32)
    return crc32_1;
  hasRequiredCrc32 = 1;
  function makeTable() {
    var c, table = [];
    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
      }
      table[n] = c;
    }
    return table;
  }
  var crcTable = makeTable();
  function crc32(crc2, buf, len, pos) {
    var t = crcTable, end = pos + len;
    crc2 ^= -1;
    for (var i = pos; i < end; i++) {
      crc2 = crc2 >>> 8 ^ t[(crc2 ^ buf[i]) & 255];
    }
    return crc2 ^ -1;
  }
  crc32_1 = crc32;
  return crc32_1;
}
var messages;
var hasRequiredMessages;
function requireMessages() {
  if (hasRequiredMessages)
    return messages;
  hasRequiredMessages = 1;
  messages = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */
    1: "stream end",
    /* Z_STREAM_END      1  */
    0: "",
    /* Z_OK              0  */
    "-1": "file error",
    /* Z_ERRNO         (-1) */
    "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */
    "-3": "data error",
    /* Z_DATA_ERROR    (-3) */
    "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */
    "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */
    "-6": "incompatible version"
    /* Z_VERSION_ERROR (-6) */
  };
  return messages;
}
var hasRequiredDeflate$1;
function requireDeflate$1() {
  if (hasRequiredDeflate$1)
    return deflate;
  hasRequiredDeflate$1 = 1;
  var utils = requireCommon();
  var trees2 = requireTrees();
  var adler32 = requireAdler32();
  var crc32 = requireCrc32();
  var msg = requireMessages();
  var Z_NO_FLUSH = 0;
  var Z_PARTIAL_FLUSH = 1;
  var Z_FULL_FLUSH = 3;
  var Z_FINISH = 4;
  var Z_BLOCK = 5;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_STREAM_ERROR = -2;
  var Z_DATA_ERROR = -3;
  var Z_BUF_ERROR = -5;
  var Z_DEFAULT_COMPRESSION = -1;
  var Z_FILTERED = 1;
  var Z_HUFFMAN_ONLY = 2;
  var Z_RLE = 3;
  var Z_FIXED = 4;
  var Z_DEFAULT_STRATEGY = 0;
  var Z_UNKNOWN = 2;
  var Z_DEFLATED = 8;
  var MAX_MEM_LEVEL = 9;
  var MAX_WBITS = 15;
  var DEF_MEM_LEVEL = 8;
  var LENGTH_CODES = 29;
  var LITERALS = 256;
  var L_CODES = LITERALS + 1 + LENGTH_CODES;
  var D_CODES = 30;
  var BL_CODES = 19;
  var HEAP_SIZE = 2 * L_CODES + 1;
  var MAX_BITS = 15;
  var MIN_MATCH = 3;
  var MAX_MATCH = 258;
  var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
  var PRESET_DICT = 32;
  var INIT_STATE = 42;
  var EXTRA_STATE = 69;
  var NAME_STATE = 73;
  var COMMENT_STATE = 91;
  var HCRC_STATE = 103;
  var BUSY_STATE = 113;
  var FINISH_STATE = 666;
  var BS_NEED_MORE = 1;
  var BS_BLOCK_DONE = 2;
  var BS_FINISH_STARTED = 3;
  var BS_FINISH_DONE = 4;
  var OS_CODE = 3;
  function err(strm, errorCode) {
    strm.msg = msg[errorCode];
    return errorCode;
  }
  function rank(f) {
    return (f << 1) - (f > 4 ? 9 : 0);
  }
  function zero(buf) {
    var len = buf.length;
    while (--len >= 0) {
      buf[len] = 0;
    }
  }
  function flush_pending(strm) {
    var s = strm.state;
    var len = s.pending;
    if (len > strm.avail_out) {
      len = strm.avail_out;
    }
    if (len === 0) {
      return;
    }
    utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) {
      s.pending_out = 0;
    }
  }
  function flush_block_only(s, last) {
    trees2._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
  }
  function put_byte(s, b) {
    s.pending_buf[s.pending++] = b;
  }
  function putShortMSB(s, b) {
    s.pending_buf[s.pending++] = b >>> 8 & 255;
    s.pending_buf[s.pending++] = b & 255;
  }
  function read_buf(strm, buf, start, size) {
    var len = strm.avail_in;
    if (len > size) {
      len = size;
    }
    if (len === 0) {
      return 0;
    }
    strm.avail_in -= len;
    utils.arraySet(buf, strm.input, strm.next_in, len, start);
    if (strm.state.wrap === 1) {
      strm.adler = adler32(strm.adler, buf, len, start);
    } else if (strm.state.wrap === 2) {
      strm.adler = crc32(strm.adler, buf, len, start);
    }
    strm.next_in += len;
    strm.total_in += len;
    return len;
  }
  function longest_match(s, cur_match) {
    var chain_length = s.max_chain_length;
    var scan = s.strstart;
    var match;
    var len;
    var best_len = s.prev_length;
    var nice_match = s.nice_match;
    var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
    var _win = s.window;
    var wmask = s.w_mask;
    var prev = s.prev;
    var strend = s.strstart + MAX_MATCH;
    var scan_end1 = _win[scan + best_len - 1];
    var scan_end = _win[scan + best_len];
    if (s.prev_length >= s.good_match) {
      chain_length >>= 2;
    }
    if (nice_match > s.lookahead) {
      nice_match = s.lookahead;
    }
    do {
      match = cur_match;
      if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
        continue;
      }
      scan += 2;
      match++;
      do {
      } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
      len = MAX_MATCH - (strend - scan);
      scan = strend - MAX_MATCH;
      if (len > best_len) {
        s.match_start = cur_match;
        best_len = len;
        if (len >= nice_match) {
          break;
        }
        scan_end1 = _win[scan + best_len - 1];
        scan_end = _win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s.lookahead) {
      return best_len;
    }
    return s.lookahead;
  }
  function fill_window(s) {
    var _w_size = s.w_size;
    var p, n, m, more, str;
    do {
      more = s.window_size - s.lookahead - s.strstart;
      if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
        utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
        s.match_start -= _w_size;
        s.strstart -= _w_size;
        s.block_start -= _w_size;
        n = s.hash_size;
        p = n;
        do {
          m = s.head[--p];
          s.head[p] = m >= _w_size ? m - _w_size : 0;
        } while (--n);
        n = _w_size;
        p = n;
        do {
          m = s.prev[--p];
          s.prev[p] = m >= _w_size ? m - _w_size : 0;
        } while (--n);
        more += _w_size;
      }
      if (s.strm.avail_in === 0) {
        break;
      }
      n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
      s.lookahead += n;
      if (s.lookahead + s.insert >= MIN_MATCH) {
        str = s.strstart - s.insert;
        s.ins_h = s.window[str];
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
        while (s.insert) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
          s.insert--;
          if (s.lookahead + s.insert < MIN_MATCH) {
            break;
          }
        }
      }
    } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
  }
  function deflate_stored(s, flush) {
    var max_block_size = 65535;
    if (max_block_size > s.pending_buf_size - 5) {
      max_block_size = s.pending_buf_size - 5;
    }
    for (; ; ) {
      if (s.lookahead <= 1) {
        fill_window(s);
        if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      s.strstart += s.lookahead;
      s.lookahead = 0;
      var max_start = s.block_start + max_block_size;
      if (s.strstart === 0 || s.strstart >= max_start) {
        s.lookahead = s.strstart - max_start;
        s.strstart = max_start;
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.strstart > s.block_start) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_NEED_MORE;
  }
  function deflate_fast(s, flush) {
    var hash_head;
    var bflush;
    for (; ; ) {
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);
        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      hash_head = 0;
      if (s.lookahead >= MIN_MATCH) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
      }
      if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
        s.match_length = longest_match(s, hash_head);
      }
      if (s.match_length >= MIN_MATCH) {
        bflush = trees2._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
        s.lookahead -= s.match_length;
        if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
          s.match_length--;
          do {
            s.strstart++;
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
          } while (--s.match_length !== 0);
          s.strstart++;
        } else {
          s.strstart += s.match_length;
          s.match_length = 0;
          s.ins_h = s.window[s.strstart];
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
        }
      } else {
        bflush = trees2._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_slow(s, flush) {
    var hash_head;
    var bflush;
    var max_insert;
    for (; ; ) {
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);
        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      hash_head = 0;
      if (s.lookahead >= MIN_MATCH) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
      }
      s.prev_length = s.match_length;
      s.prev_match = s.match_start;
      s.match_length = MIN_MATCH - 1;
      if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
        s.match_length = longest_match(s, hash_head);
        if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
          s.match_length = MIN_MATCH - 1;
        }
      }
      if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
        max_insert = s.strstart + s.lookahead - MIN_MATCH;
        bflush = trees2._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
        s.lookahead -= s.prev_length - 1;
        s.prev_length -= 2;
        do {
          if (++s.strstart <= max_insert) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
          }
        } while (--s.prev_length !== 0);
        s.match_available = 0;
        s.match_length = MIN_MATCH - 1;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      } else if (s.match_available) {
        bflush = trees2._tr_tally(s, 0, s.window[s.strstart - 1]);
        if (bflush) {
          flush_block_only(s, false);
        }
        s.strstart++;
        s.lookahead--;
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      } else {
        s.match_available = 1;
        s.strstart++;
        s.lookahead--;
      }
    }
    if (s.match_available) {
      bflush = trees2._tr_tally(s, 0, s.window[s.strstart - 1]);
      s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_rle(s, flush) {
    var bflush;
    var prev;
    var scan, strend;
    var _win = s.window;
    for (; ; ) {
      if (s.lookahead <= MAX_MATCH) {
        fill_window(s);
        if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      s.match_length = 0;
      if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
        scan = s.strstart - 1;
        prev = _win[scan];
        if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
          strend = s.strstart + MAX_MATCH;
          do {
          } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
          s.match_length = MAX_MATCH - (strend - scan);
          if (s.match_length > s.lookahead) {
            s.match_length = s.lookahead;
          }
        }
      }
      if (s.match_length >= MIN_MATCH) {
        bflush = trees2._tr_tally(s, 1, s.match_length - MIN_MATCH);
        s.lookahead -= s.match_length;
        s.strstart += s.match_length;
        s.match_length = 0;
      } else {
        bflush = trees2._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_huff(s, flush) {
    var bflush;
    for (; ; ) {
      if (s.lookahead === 0) {
        fill_window(s);
        if (s.lookahead === 0) {
          if (flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          break;
        }
      }
      s.match_length = 0;
      bflush = trees2._tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
  }
  var configuration_table;
  configuration_table = [
    /*      good lazy nice chain */
    new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */
    new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */
    new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */
    new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */
    new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */
    new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */
    new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */
    new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */
    new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */
    new Config(32, 258, 258, 4096, deflate_slow)
    /* 9 max compression */
  ];
  function lm_init(s) {
    s.window_size = 2 * s.w_size;
    zero(s.head);
    s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
  }
  function DeflateState() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = Z_DEFLATED;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
    this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
    this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new utils.Buf16(MAX_BITS + 1);
    this.heap = new utils.Buf16(2 * L_CODES + 1);
    zero(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new utils.Buf16(2 * L_CODES + 1);
    zero(this.depth);
    this.l_buf = 0;
    this.lit_bufsize = 0;
    this.last_lit = 0;
    this.d_buf = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  function deflateResetKeep(strm) {
    var s;
    if (!strm || !strm.state) {
      return err(strm, Z_STREAM_ERROR);
    }
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) {
      s.wrap = -s.wrap;
    }
    s.status = s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 : 1;
    s.last_flush = Z_NO_FLUSH;
    trees2._tr_init(s);
    return Z_OK;
  }
  function deflateReset(strm) {
    var ret = deflateResetKeep(strm);
    if (ret === Z_OK) {
      lm_init(strm.state);
    }
    return ret;
  }
  function deflateSetHeader(strm, head) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    if (strm.state.wrap !== 2) {
      return Z_STREAM_ERROR;
    }
    strm.state.gzhead = head;
    return Z_OK;
  }
  function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
    if (!strm) {
      return Z_STREAM_ERROR;
    }
    var wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION) {
      level = 6;
    }
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else if (windowBits > 15) {
      wrap = 2;
      windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
      return err(strm, Z_STREAM_ERROR);
    }
    if (windowBits === 8) {
      windowBits = 9;
    }
    var s = new DeflateState();
    strm.state = s;
    s.strm = strm;
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s.window = new utils.Buf8(s.w_size * 2);
    s.head = new utils.Buf16(s.hash_size);
    s.prev = new utils.Buf16(s.w_size);
    s.lit_bufsize = 1 << memLevel + 6;
    s.pending_buf_size = s.lit_bufsize * 4;
    s.pending_buf = new utils.Buf8(s.pending_buf_size);
    s.d_buf = 1 * s.lit_bufsize;
    s.l_buf = (1 + 2) * s.lit_bufsize;
    s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
  }
  function deflateInit(strm, level) {
    return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
  }
  function deflate$12(strm, flush) {
    var old_flush, s;
    var beg, val;
    if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
      return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    }
    s = strm.state;
    if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
      return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
    }
    s.strm = strm;
    old_flush = s.last_flush;
    s.last_flush = flush;
    if (s.status === INIT_STATE) {
      if (s.wrap === 2) {
        strm.adler = 0;
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) {
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, OS_CODE);
          s.status = BUSY_STATE;
        } else {
          put_byte(
            s,
            (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
          );
          put_byte(s, s.gzhead.time & 255);
          put_byte(s, s.gzhead.time >> 8 & 255);
          put_byte(s, s.gzhead.time >> 16 & 255);
          put_byte(s, s.gzhead.time >> 24 & 255);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, s.gzhead.os & 255);
          if (s.gzhead.extra && s.gzhead.extra.length) {
            put_byte(s, s.gzhead.extra.length & 255);
            put_byte(s, s.gzhead.extra.length >> 8 & 255);
          }
          if (s.gzhead.hcrc) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
          }
          s.gzindex = 0;
          s.status = EXTRA_STATE;
        }
      } else {
        var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
        var level_flags = -1;
        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
          level_flags = 0;
        } else if (s.level < 6) {
          level_flags = 1;
        } else if (s.level === 6) {
          level_flags = 2;
        } else {
          level_flags = 3;
        }
        header |= level_flags << 6;
        if (s.strstart !== 0) {
          header |= PRESET_DICT;
        }
        header += 31 - header % 31;
        s.status = BUSY_STATE;
        putShortMSB(s, header);
        if (s.strstart !== 0) {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 65535);
        }
        strm.adler = 1;
      }
    }
    if (s.status === EXTRA_STATE) {
      if (s.gzhead.extra) {
        beg = s.pending;
        while (s.gzindex < (s.gzhead.extra.length & 65535)) {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              break;
            }
          }
          put_byte(s, s.gzhead.extra[s.gzindex] & 255);
          s.gzindex++;
        }
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (s.gzindex === s.gzhead.extra.length) {
          s.gzindex = 0;
          s.status = NAME_STATE;
        }
      } else {
        s.status = NAME_STATE;
      }
    }
    if (s.status === NAME_STATE) {
      if (s.gzhead.name) {
        beg = s.pending;
        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          }
          if (s.gzindex < s.gzhead.name.length) {
            val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
          } else {
            val = 0;
          }
          put_byte(s, val);
        } while (val !== 0);
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (val === 0) {
          s.gzindex = 0;
          s.status = COMMENT_STATE;
        }
      } else {
        s.status = COMMENT_STATE;
      }
    }
    if (s.status === COMMENT_STATE) {
      if (s.gzhead.comment) {
        beg = s.pending;
        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          }
          if (s.gzindex < s.gzhead.comment.length) {
            val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
          } else {
            val = 0;
          }
          put_byte(s, val);
        } while (val !== 0);
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (val === 0) {
          s.status = HCRC_STATE;
        }
      } else {
        s.status = HCRC_STATE;
      }
    }
    if (s.status === HCRC_STATE) {
      if (s.gzhead.hcrc) {
        if (s.pending + 2 > s.pending_buf_size) {
          flush_pending(strm);
        }
        if (s.pending + 2 <= s.pending_buf_size) {
          put_byte(s, strm.adler & 255);
          put_byte(s, strm.adler >> 8 & 255);
          strm.adler = 0;
          s.status = BUSY_STATE;
        }
      } else {
        s.status = BUSY_STATE;
      }
    }
    if (s.pending !== 0) {
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        return Z_OK;
      }
    } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
      return err(strm, Z_BUF_ERROR);
    }
    if (s.status === FINISH_STATE && strm.avail_in !== 0) {
      return err(strm, Z_BUF_ERROR);
    }
    if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
      var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
      if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
        s.status = FINISH_STATE;
      }
      if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
        if (strm.avail_out === 0) {
          s.last_flush = -1;
        }
        return Z_OK;
      }
      if (bstate === BS_BLOCK_DONE) {
        if (flush === Z_PARTIAL_FLUSH) {
          trees2._tr_align(s);
        } else if (flush !== Z_BLOCK) {
          trees2._tr_stored_block(s, 0, 0, false);
          if (flush === Z_FULL_FLUSH) {
            zero(s.head);
            if (s.lookahead === 0) {
              s.strstart = 0;
              s.block_start = 0;
              s.insert = 0;
            }
          }
        }
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      }
    }
    if (flush !== Z_FINISH) {
      return Z_OK;
    }
    if (s.wrap <= 0) {
      return Z_STREAM_END;
    }
    if (s.wrap === 2) {
      put_byte(s, strm.adler & 255);
      put_byte(s, strm.adler >> 8 & 255);
      put_byte(s, strm.adler >> 16 & 255);
      put_byte(s, strm.adler >> 24 & 255);
      put_byte(s, strm.total_in & 255);
      put_byte(s, strm.total_in >> 8 & 255);
      put_byte(s, strm.total_in >> 16 & 255);
      put_byte(s, strm.total_in >> 24 & 255);
    } else {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 65535);
    }
    flush_pending(strm);
    if (s.wrap > 0) {
      s.wrap = -s.wrap;
    }
    return s.pending !== 0 ? Z_OK : Z_STREAM_END;
  }
  function deflateEnd(strm) {
    var status;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    status = strm.state.status;
    if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
      return err(strm, Z_STREAM_ERROR);
    }
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
  }
  function deflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var s;
    var str, n;
    var wrap;
    var avail;
    var next;
    var input;
    var tmpDict;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    s = strm.state;
    wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
      return Z_STREAM_ERROR;
    }
    if (wrap === 1) {
      strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
    }
    s.wrap = 0;
    if (dictLength >= s.w_size) {
      if (wrap === 0) {
        zero(s.head);
        s.strstart = 0;
        s.block_start = 0;
        s.insert = 0;
      }
      tmpDict = new utils.Buf8(s.w_size);
      utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
      dictionary = tmpDict;
      dictLength = s.w_size;
    }
    avail = strm.avail_in;
    next = strm.next_in;
    input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while (s.lookahead >= MIN_MATCH) {
      str = s.strstart;
      n = s.lookahead - (MIN_MATCH - 1);
      do {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
      } while (--n);
      s.strstart = str;
      s.lookahead = MIN_MATCH - 1;
      fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK;
  }
  deflate.deflateInit = deflateInit;
  deflate.deflateInit2 = deflateInit2;
  deflate.deflateReset = deflateReset;
  deflate.deflateResetKeep = deflateResetKeep;
  deflate.deflateSetHeader = deflateSetHeader;
  deflate.deflate = deflate$12;
  deflate.deflateEnd = deflateEnd;
  deflate.deflateSetDictionary = deflateSetDictionary;
  deflate.deflateInfo = "pako deflate (from Nodeca project)";
  return deflate;
}
var strings = {};
var hasRequiredStrings;
function requireStrings() {
  if (hasRequiredStrings)
    return strings;
  hasRequiredStrings = 1;
  var utils = requireCommon();
  var STR_APPLY_OK = true;
  var STR_APPLY_UIA_OK = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (__) {
    STR_APPLY_OK = false;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (__) {
    STR_APPLY_UIA_OK = false;
  }
  var _utf8len = new utils.Buf8(256);
  for (var q = 0; q < 256; q++) {
    _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
  }
  _utf8len[254] = _utf8len[254] = 1;
  strings.string2buf = function(str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    for (m_pos = 0; m_pos < str_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
    }
    buf = new utils.Buf8(buf_len);
    for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      if (c < 128) {
        buf[i++] = c;
      } else if (c < 2048) {
        buf[i++] = 192 | c >>> 6;
        buf[i++] = 128 | c & 63;
      } else if (c < 65536) {
        buf[i++] = 224 | c >>> 12;
        buf[i++] = 128 | c >>> 6 & 63;
        buf[i++] = 128 | c & 63;
      } else {
        buf[i++] = 240 | c >>> 18;
        buf[i++] = 128 | c >>> 12 & 63;
        buf[i++] = 128 | c >>> 6 & 63;
        buf[i++] = 128 | c & 63;
      }
    }
    return buf;
  };
  function buf2binstring(buf, len) {
    if (len < 65534) {
      if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
        return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
      }
    }
    var result = "";
    for (var i = 0; i < len; i++) {
      result += String.fromCharCode(buf[i]);
    }
    return result;
  }
  strings.buf2binstring = function(buf) {
    return buf2binstring(buf, buf.length);
  };
  strings.binstring2buf = function(str) {
    var buf = new utils.Buf8(str.length);
    for (var i = 0, len = buf.length; i < len; i++) {
      buf[i] = str.charCodeAt(i);
    }
    return buf;
  };
  strings.buf2string = function(buf, max) {
    var i, out, c, c_len;
    var len = max || buf.length;
    var utf16buf = new Array(len * 2);
    for (out = 0, i = 0; i < len; ) {
      c = buf[i++];
      if (c < 128) {
        utf16buf[out++] = c;
        continue;
      }
      c_len = _utf8len[c];
      if (c_len > 4) {
        utf16buf[out++] = 65533;
        i += c_len - 1;
        continue;
      }
      c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
      while (c_len > 1 && i < len) {
        c = c << 6 | buf[i++] & 63;
        c_len--;
      }
      if (c_len > 1) {
        utf16buf[out++] = 65533;
        continue;
      }
      if (c < 65536) {
        utf16buf[out++] = c;
      } else {
        c -= 65536;
        utf16buf[out++] = 55296 | c >> 10 & 1023;
        utf16buf[out++] = 56320 | c & 1023;
      }
    }
    return buf2binstring(utf16buf, out);
  };
  strings.utf8border = function(buf, max) {
    var pos;
    max = max || buf.length;
    if (max > buf.length) {
      max = buf.length;
    }
    pos = max - 1;
    while (pos >= 0 && (buf[pos] & 192) === 128) {
      pos--;
    }
    if (pos < 0) {
      return max;
    }
    if (pos === 0) {
      return max;
    }
    return pos + _utf8len[buf[pos]] > max ? pos : max;
  };
  return strings;
}
var zstream;
var hasRequiredZstream;
function requireZstream() {
  if (hasRequiredZstream)
    return zstream;
  hasRequiredZstream = 1;
  function ZStream() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = "";
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
  }
  zstream = ZStream;
  return zstream;
}
var hasRequiredDeflate;
function requireDeflate() {
  if (hasRequiredDeflate)
    return deflate$1;
  hasRequiredDeflate = 1;
  var zlib_deflate = requireDeflate$1();
  var utils = requireCommon();
  var strings2 = requireStrings();
  var msg = requireMessages();
  var ZStream = requireZstream();
  var toString = Object.prototype.toString;
  var Z_NO_FLUSH = 0;
  var Z_FINISH = 4;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_SYNC_FLUSH = 2;
  var Z_DEFAULT_COMPRESSION = -1;
  var Z_DEFAULT_STRATEGY = 0;
  var Z_DEFLATED = 8;
  function Deflate(options) {
    if (!(this instanceof Deflate))
      return new Deflate(options);
    this.options = utils.assign({
      level: Z_DEFAULT_COMPRESSION,
      method: Z_DEFLATED,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Z_DEFAULT_STRATEGY,
      to: ""
    }, options || {});
    var opt = this.options;
    if (opt.raw && opt.windowBits > 0) {
      opt.windowBits = -opt.windowBits;
    } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
      opt.windowBits += 16;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new ZStream();
    this.strm.avail_out = 0;
    var status = zlib_deflate.deflateInit2(
      this.strm,
      opt.level,
      opt.method,
      opt.windowBits,
      opt.memLevel,
      opt.strategy
    );
    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }
    if (opt.header) {
      zlib_deflate.deflateSetHeader(this.strm, opt.header);
    }
    if (opt.dictionary) {
      var dict;
      if (typeof opt.dictionary === "string") {
        dict = strings2.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
        dict = new Uint8Array(opt.dictionary);
      } else {
        dict = opt.dictionary;
      }
      status = zlib_deflate.deflateSetDictionary(this.strm, dict);
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      this._dict_set = true;
    }
  }
  Deflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var status, _mode;
    if (this.ended) {
      return false;
    }
    _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
    if (typeof data === "string") {
      strm.input = strings2.string2buf(data);
    } else if (toString.call(data) === "[object ArrayBuffer]") {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
      if (strm.avail_out === 0) {
        strm.output = new utils.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      status = zlib_deflate.deflate(strm, _mode);
      if (status !== Z_STREAM_END && status !== Z_OK) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }
      if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
        if (this.options.to === "string") {
          this.onData(strings2.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
    if (_mode === Z_FINISH) {
      status = zlib_deflate.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK;
    }
    if (_mode === Z_SYNC_FLUSH) {
      this.onEnd(Z_OK);
      strm.avail_out = 0;
      return true;
    }
    return true;
  };
  Deflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Deflate.prototype.onEnd = function(status) {
    if (status === Z_OK) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = utils.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  function deflate2(input, options) {
    var deflator = new Deflate(options);
    deflator.push(input, true);
    if (deflator.err) {
      throw deflator.msg || msg[deflator.err];
    }
    return deflator.result;
  }
  function deflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return deflate2(input, options);
  }
  function gzip(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate2(input, options);
  }
  deflate$1.Deflate = Deflate;
  deflate$1.deflate = deflate2;
  deflate$1.deflateRaw = deflateRaw;
  deflate$1.gzip = gzip;
  return deflate$1;
}
var inflate$1 = {};
var inflate = {};
var inffast;
var hasRequiredInffast;
function requireInffast() {
  if (hasRequiredInffast)
    return inffast;
  hasRequiredInffast = 1;
  var BAD = 30;
  var TYPE = 12;
  inffast = function inflate_fast(strm, start) {
    var state;
    var _in;
    var last;
    var _out;
    var beg;
    var end;
    var dmax;
    var wsize;
    var whave;
    var wnext;
    var s_window;
    var hold;
    var bits;
    var lcode;
    var dcode;
    var lmask;
    var dmask;
    var here;
    var op;
    var len;
    var dist;
    var from;
    var from_source;
    var input, output;
    state = strm.state;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    dmax = state.dmax;
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    top:
      do {
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = lcode[hold & lmask];
        dolen:
          for (; ; ) {
            op = here >>> 24;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 255;
            if (op === 0) {
              output[_out++] = here & 65535;
            } else if (op & 16) {
              len = here & 65535;
              op &= 15;
              if (op) {
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              }
              if (bits < 15) {
                hold += input[_in++] << bits;
                bits += 8;
                hold += input[_in++] << bits;
                bits += 8;
              }
              here = dcode[hold & dmask];
              dodist:
                for (; ; ) {
                  op = here >>> 24;
                  hold >>>= op;
                  bits -= op;
                  op = here >>> 16 & 255;
                  if (op & 16) {
                    dist = here & 65535;
                    op &= 15;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                      }
                    }
                    dist += hold & (1 << op) - 1;
                    if (dist > dmax) {
                      strm.msg = "invalid distance too far back";
                      state.mode = BAD;
                      break top;
                    }
                    hold >>>= op;
                    bits -= op;
                    op = _out - beg;
                    if (dist > op) {
                      op = dist - op;
                      if (op > whave) {
                        if (state.sane) {
                          strm.msg = "invalid distance too far back";
                          state.mode = BAD;
                          break top;
                        }
                      }
                      from = 0;
                      from_source = s_window;
                      if (wnext === 0) {
                        from += wsize - op;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      } else if (wnext < op) {
                        from += wsize + wnext - op;
                        op -= wnext;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = 0;
                          if (wnext < len) {
                            op = wnext;
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                      } else {
                        from += wnext - op;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                      while (len > 2) {
                        output[_out++] = from_source[from++];
                        output[_out++] = from_source[from++];
                        output[_out++] = from_source[from++];
                        len -= 3;
                      }
                      if (len) {
                        output[_out++] = from_source[from++];
                        if (len > 1) {
                          output[_out++] = from_source[from++];
                        }
                      }
                    } else {
                      from = _out - dist;
                      do {
                        output[_out++] = output[from++];
                        output[_out++] = output[from++];
                        output[_out++] = output[from++];
                        len -= 3;
                      } while (len > 2);
                      if (len) {
                        output[_out++] = output[from++];
                        if (len > 1) {
                          output[_out++] = output[from++];
                        }
                      }
                    }
                  } else if ((op & 64) === 0) {
                    here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                    continue dodist;
                  } else {
                    strm.msg = "invalid distance code";
                    state.mode = BAD;
                    break top;
                  }
                  break;
                }
            } else if ((op & 64) === 0) {
              here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
              continue dolen;
            } else if (op & 32) {
              state.mode = TYPE;
              break top;
            } else {
              strm.msg = "invalid literal/length code";
              state.mode = BAD;
              break top;
            }
            break;
          }
      } while (_in < last && _out < end);
    len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
  };
  return inffast;
}
var inftrees;
var hasRequiredInftrees;
function requireInftrees() {
  if (hasRequiredInftrees)
    return inftrees;
  hasRequiredInftrees = 1;
  var utils = requireCommon();
  var MAXBITS = 15;
  var ENOUGH_LENS = 852;
  var ENOUGH_DISTS = 592;
  var CODES = 0;
  var LENS = 1;
  var DISTS = 2;
  var lbase = [
    /* Length codes 257..285 base */
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ];
  var lext = [
    /* Length codes 257..285 extra */
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ];
  var dbase = [
    /* Distance codes 0..29 base */
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ];
  var dext = [
    /* Distance codes 0..29 extra */
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  inftrees = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
    var bits = opts.bits;
    var len = 0;
    var sym = 0;
    var min = 0, max = 0;
    var root = 0;
    var curr = 0;
    var drop = 0;
    var left = 0;
    var used = 0;
    var huff = 0;
    var incr;
    var fill;
    var low;
    var mask;
    var next;
    var base = null;
    var base_index = 0;
    var end;
    var count = new utils.Buf16(MAXBITS + 1);
    var offs = new utils.Buf16(MAXBITS + 1);
    var extra = null;
    var extra_index = 0;
    var here_bits, here_op, here_val;
    for (len = 0; len <= MAXBITS; len++) {
      count[len] = 0;
    }
    for (sym = 0; sym < codes; sym++) {
      count[lens[lens_index + sym]]++;
    }
    root = bits;
    for (max = MAXBITS; max >= 1; max--) {
      if (count[max] !== 0) {
        break;
      }
    }
    if (root > max) {
      root = max;
    }
    if (max === 0) {
      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      opts.bits = 1;
      return 0;
    }
    for (min = 1; min < max; min++) {
      if (count[min] !== 0) {
        break;
      }
    }
    if (root < min) {
      root = min;
    }
    left = 1;
    for (len = 1; len <= MAXBITS; len++) {
      left <<= 1;
      left -= count[len];
      if (left < 0) {
        return -1;
      }
    }
    if (left > 0 && (type === CODES || max !== 1)) {
      return -1;
    }
    offs[1] = 0;
    for (len = 1; len < MAXBITS; len++) {
      offs[len + 1] = offs[len] + count[len];
    }
    for (sym = 0; sym < codes; sym++) {
      if (lens[lens_index + sym] !== 0) {
        work[offs[lens[lens_index + sym]]++] = sym;
      }
    }
    if (type === CODES) {
      base = extra = work;
      end = 19;
    } else if (type === LENS) {
      base = lbase;
      base_index -= 257;
      extra = lext;
      extra_index -= 257;
      end = 256;
    } else {
      base = dbase;
      extra = dext;
      end = -1;
    }
    huff = 0;
    sym = 0;
    len = min;
    next = table_index;
    curr = root;
    drop = 0;
    low = -1;
    used = 1 << root;
    mask = used - 1;
    if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
      return 1;
    }
    for (; ; ) {
      here_bits = len - drop;
      if (work[sym] < end) {
        here_op = 0;
        here_val = work[sym];
      } else if (work[sym] > end) {
        here_op = extra[extra_index + work[sym]];
        here_val = base[base_index + work[sym]];
      } else {
        here_op = 32 + 64;
        here_val = 0;
      }
      incr = 1 << len - drop;
      fill = 1 << curr;
      min = fill;
      do {
        fill -= incr;
        table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
      } while (fill !== 0);
      incr = 1 << len - 1;
      while (huff & incr) {
        incr >>= 1;
      }
      if (incr !== 0) {
        huff &= incr - 1;
        huff += incr;
      } else {
        huff = 0;
      }
      sym++;
      if (--count[len] === 0) {
        if (len === max) {
          break;
        }
        len = lens[lens_index + work[sym]];
      }
      if (len > root && (huff & mask) !== low) {
        if (drop === 0) {
          drop = root;
        }
        next += min;
        curr = len - drop;
        left = 1 << curr;
        while (curr + drop < max) {
          left -= count[curr + drop];
          if (left <= 0) {
            break;
          }
          curr++;
          left <<= 1;
        }
        used += 1 << curr;
        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }
        low = huff & mask;
        table[low] = root << 24 | curr << 16 | next - table_index | 0;
      }
    }
    if (huff !== 0) {
      table[next + huff] = len - drop << 24 | 64 << 16 | 0;
    }
    opts.bits = root;
    return 0;
  };
  return inftrees;
}
var hasRequiredInflate$1;
function requireInflate$1() {
  if (hasRequiredInflate$1)
    return inflate;
  hasRequiredInflate$1 = 1;
  var utils = requireCommon();
  var adler32 = requireAdler32();
  var crc32 = requireCrc32();
  var inflate_fast = requireInffast();
  var inflate_table = requireInftrees();
  var CODES = 0;
  var LENS = 1;
  var DISTS = 2;
  var Z_FINISH = 4;
  var Z_BLOCK = 5;
  var Z_TREES = 6;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_NEED_DICT = 2;
  var Z_STREAM_ERROR = -2;
  var Z_DATA_ERROR = -3;
  var Z_MEM_ERROR = -4;
  var Z_BUF_ERROR = -5;
  var Z_DEFLATED = 8;
  var HEAD = 1;
  var FLAGS = 2;
  var TIME = 3;
  var OS = 4;
  var EXLEN = 5;
  var EXTRA = 6;
  var NAME = 7;
  var COMMENT = 8;
  var HCRC = 9;
  var DICTID = 10;
  var DICT = 11;
  var TYPE = 12;
  var TYPEDO = 13;
  var STORED = 14;
  var COPY_ = 15;
  var COPY = 16;
  var TABLE = 17;
  var LENLENS = 18;
  var CODELENS = 19;
  var LEN_ = 20;
  var LEN = 21;
  var LENEXT = 22;
  var DIST = 23;
  var DISTEXT = 24;
  var MATCH = 25;
  var LIT = 26;
  var CHECK = 27;
  var LENGTH = 28;
  var DONE = 29;
  var BAD = 30;
  var MEM = 31;
  var SYNC = 32;
  var ENOUGH_LENS = 852;
  var ENOUGH_DISTS = 592;
  var MAX_WBITS = 15;
  var DEF_WBITS = MAX_WBITS;
  function zswap32(q) {
    return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
  }
  function InflateState() {
    this.mode = 0;
    this.last = false;
    this.wrap = 0;
    this.havedict = false;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new utils.Buf16(320);
    this.work = new utils.Buf16(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  function inflateResetKeep(strm) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = "";
    if (state.wrap) {
      strm.adler = state.wrap & 1;
    }
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null;
    state.hold = 0;
    state.bits = 0;
    state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
    state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    return Z_OK;
  }
  function inflateReset(strm) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
  }
  function inflateReset2(strm, windowBits) {
    var wrap;
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else {
      wrap = (windowBits >> 4) + 1;
      if (windowBits < 48) {
        windowBits &= 15;
      }
    }
    if (windowBits && (windowBits < 8 || windowBits > 15)) {
      return Z_STREAM_ERROR;
    }
    if (state.window !== null && state.wbits !== windowBits) {
      state.window = null;
    }
    state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
  }
  function inflateInit2(strm, windowBits) {
    var ret;
    var state;
    if (!strm) {
      return Z_STREAM_ERROR;
    }
    state = new InflateState();
    strm.state = state;
    state.window = null;
    ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK) {
      strm.state = null;
    }
    return ret;
  }
  function inflateInit(strm) {
    return inflateInit2(strm, DEF_WBITS);
  }
  var virgin = true;
  var lenfix, distfix;
  function fixedtables(state) {
    if (virgin) {
      var sym;
      lenfix = new utils.Buf32(512);
      distfix = new utils.Buf32(32);
      sym = 0;
      while (sym < 144) {
        state.lens[sym++] = 8;
      }
      while (sym < 256) {
        state.lens[sym++] = 9;
      }
      while (sym < 280) {
        state.lens[sym++] = 7;
      }
      while (sym < 288) {
        state.lens[sym++] = 8;
      }
      inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
      sym = 0;
      while (sym < 32) {
        state.lens[sym++] = 5;
      }
      inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
      virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
  }
  function updatewindow(strm, src2, end, copy) {
    var dist;
    var state = strm.state;
    if (state.window === null) {
      state.wsize = 1 << state.wbits;
      state.wnext = 0;
      state.whave = 0;
      state.window = new utils.Buf8(state.wsize);
    }
    if (copy >= state.wsize) {
      utils.arraySet(state.window, src2, end - state.wsize, state.wsize, 0);
      state.wnext = 0;
      state.whave = state.wsize;
    } else {
      dist = state.wsize - state.wnext;
      if (dist > copy) {
        dist = copy;
      }
      utils.arraySet(state.window, src2, end - copy, dist, state.wnext);
      copy -= dist;
      if (copy) {
        utils.arraySet(state.window, src2, end - copy, copy, 0);
        state.wnext = copy;
        state.whave = state.wsize;
      } else {
        state.wnext += dist;
        if (state.wnext === state.wsize) {
          state.wnext = 0;
        }
        if (state.whave < state.wsize) {
          state.whave += dist;
        }
      }
    }
    return 0;
  }
  function inflate$12(strm, flush) {
    var state;
    var input, output;
    var next;
    var put;
    var have, left;
    var hold;
    var bits;
    var _in, _out;
    var copy;
    var from;
    var from_source;
    var here = 0;
    var here_bits, here_op, here_val;
    var last_bits, last_op, last_val;
    var len;
    var ret;
    var hbuf = new utils.Buf8(4);
    var opts;
    var n;
    var order = (
      /* permutation of code lengths */
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    );
    if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (state.mode === TYPE) {
      state.mode = TYPEDO;
    }
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    _in = have;
    _out = left;
    ret = Z_OK;
    inf_leave:
      for (; ; ) {
        switch (state.mode) {
          case HEAD:
            if (state.wrap === 0) {
              state.mode = TYPEDO;
              break;
            }
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.wrap & 2 && hold === 35615) {
              state.check = 0;
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
              hold = 0;
              bits = 0;
              state.mode = FLAGS;
              break;
            }
            state.flags = 0;
            if (state.head) {
              state.head.done = false;
            }
            if (!(state.wrap & 1) || /* check if zlib header allowed */
            (((hold & 255) << 8) + (hold >> 8)) % 31) {
              strm.msg = "incorrect header check";
              state.mode = BAD;
              break;
            }
            if ((hold & 15) !== Z_DEFLATED) {
              strm.msg = "unknown compression method";
              state.mode = BAD;
              break;
            }
            hold >>>= 4;
            bits -= 4;
            len = (hold & 15) + 8;
            if (state.wbits === 0) {
              state.wbits = len;
            } else if (len > state.wbits) {
              strm.msg = "invalid window size";
              state.mode = BAD;
              break;
            }
            state.dmax = 1 << len;
            strm.adler = state.check = 1;
            state.mode = hold & 512 ? DICTID : TYPE;
            hold = 0;
            bits = 0;
            break;
          case FLAGS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.flags = hold;
            if ((state.flags & 255) !== Z_DEFLATED) {
              strm.msg = "unknown compression method";
              state.mode = BAD;
              break;
            }
            if (state.flags & 57344) {
              strm.msg = "unknown header flags set";
              state.mode = BAD;
              break;
            }
            if (state.head) {
              state.head.text = hold >> 8 & 1;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = TIME;
          case TIME:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.time = hold;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              hbuf[2] = hold >>> 16 & 255;
              hbuf[3] = hold >>> 24 & 255;
              state.check = crc32(state.check, hbuf, 4, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = OS;
          case OS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.xflags = hold & 255;
              state.head.os = hold >> 8;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = EXLEN;
          case EXLEN:
            if (state.flags & 1024) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.length = hold;
              if (state.head) {
                state.head.extra_len = hold;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
            } else if (state.head) {
              state.head.extra = null;
            }
            state.mode = EXTRA;
          case EXTRA:
            if (state.flags & 1024) {
              copy = state.length;
              if (copy > have) {
                copy = have;
              }
              if (copy) {
                if (state.head) {
                  len = state.head.extra_len - state.length;
                  if (!state.head.extra) {
                    state.head.extra = new Array(state.head.extra_len);
                  }
                  utils.arraySet(
                    state.head.extra,
                    input,
                    next,
                    // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    copy,
                    /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                    len
                  );
                }
                if (state.flags & 512) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                state.length -= copy;
              }
              if (state.length) {
                break inf_leave;
              }
            }
            state.length = 0;
            state.mode = NAME;
          case NAME:
            if (state.flags & 2048) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input[next + copy++];
                if (state.head && len && state.length < 65536) {
                  state.head.name += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.name = null;
            }
            state.length = 0;
            state.mode = COMMENT;
          case COMMENT:
            if (state.flags & 4096) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input[next + copy++];
                if (state.head && len && state.length < 65536) {
                  state.head.comment += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.comment = null;
            }
            state.mode = HCRC;
          case HCRC:
            if (state.flags & 512) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (hold !== (state.check & 65535)) {
                strm.msg = "header crc mismatch";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            if (state.head) {
              state.head.hcrc = state.flags >> 9 & 1;
              state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
          case DICTID:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            strm.adler = state.check = zswap32(hold);
            hold = 0;
            bits = 0;
            state.mode = DICT;
          case DICT:
            if (state.havedict === 0) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              return Z_NEED_DICT;
            }
            strm.adler = state.check = 1;
            state.mode = TYPE;
          case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) {
              break inf_leave;
            }
          case TYPEDO:
            if (state.last) {
              hold >>>= bits & 7;
              bits -= bits & 7;
              state.mode = CHECK;
              break;
            }
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.last = hold & 1;
            hold >>>= 1;
            bits -= 1;
            switch (hold & 3) {
              case 0:
                state.mode = STORED;
                break;
              case 1:
                fixedtables(state);
                state.mode = LEN_;
                if (flush === Z_TREES) {
                  hold >>>= 2;
                  bits -= 2;
                  break inf_leave;
                }
                break;
              case 2:
                state.mode = TABLE;
                break;
              case 3:
                strm.msg = "invalid block type";
                state.mode = BAD;
            }
            hold >>>= 2;
            bits -= 2;
            break;
          case STORED:
            hold >>>= bits & 7;
            bits -= bits & 7;
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
              strm.msg = "invalid stored block lengths";
              state.mode = BAD;
              break;
            }
            state.length = hold & 65535;
            hold = 0;
            bits = 0;
            state.mode = COPY_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case COPY_:
            state.mode = COPY;
          case COPY:
            copy = state.length;
            if (copy) {
              if (copy > have) {
                copy = have;
              }
              if (copy > left) {
                copy = left;
              }
              if (copy === 0) {
                break inf_leave;
              }
              utils.arraySet(output, input, next, copy, put);
              have -= copy;
              next += copy;
              left -= copy;
              put += copy;
              state.length -= copy;
              break;
            }
            state.mode = TYPE;
            break;
          case TABLE:
            while (bits < 14) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.nlen = (hold & 31) + 257;
            hold >>>= 5;
            bits -= 5;
            state.ndist = (hold & 31) + 1;
            hold >>>= 5;
            bits -= 5;
            state.ncode = (hold & 15) + 4;
            hold >>>= 4;
            bits -= 4;
            if (state.nlen > 286 || state.ndist > 30) {
              strm.msg = "too many length or distance symbols";
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = LENLENS;
          case LENLENS:
            while (state.have < state.ncode) {
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.lens[order[state.have++]] = hold & 7;
              hold >>>= 3;
              bits -= 3;
            }
            while (state.have < 19) {
              state.lens[order[state.have++]] = 0;
            }
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = { bits: state.lenbits };
            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = "invalid code lengths set";
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = CODELENS;
          case CODELENS:
            while (state.have < state.nlen + state.ndist) {
              for (; ; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_val < 16) {
                hold >>>= here_bits;
                bits -= here_bits;
                state.lens[state.have++] = here_val;
              } else {
                if (here_val === 16) {
                  n = here_bits + 2;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  if (state.have === 0) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  len = state.lens[state.have - 1];
                  copy = 3 + (hold & 3);
                  hold >>>= 2;
                  bits -= 2;
                } else if (here_val === 17) {
                  n = here_bits + 3;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 3 + (hold & 7);
                  hold >>>= 3;
                  bits -= 3;
                } else {
                  n = here_bits + 7;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 11 + (hold & 127);
                  hold >>>= 7;
                  bits -= 7;
                }
                if (state.have + copy > state.nlen + state.ndist) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD;
                  break;
                }
                while (copy--) {
                  state.lens[state.have++] = len;
                }
              }
            }
            if (state.mode === BAD) {
              break;
            }
            if (state.lens[256] === 0) {
              strm.msg = "invalid code -- missing end-of-block";
              state.mode = BAD;
              break;
            }
            state.lenbits = 9;
            opts = { bits: state.lenbits };
            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = "invalid literal/lengths set";
              state.mode = BAD;
              break;
            }
            state.distbits = 6;
            state.distcode = state.distdyn;
            opts = { bits: state.distbits };
            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            state.distbits = opts.bits;
            if (ret) {
              strm.msg = "invalid distances set";
              state.mode = BAD;
              break;
            }
            state.mode = LEN_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case LEN_:
            state.mode = LEN;
          case LEN:
            if (have >= 6 && left >= 258) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              inflate_fast(strm, _out);
              put = strm.next_out;
              output = strm.output;
              left = strm.avail_out;
              next = strm.next_in;
              input = strm.input;
              have = strm.avail_in;
              hold = state.hold;
              bits = state.bits;
              if (state.mode === TYPE) {
                state.back = -1;
              }
              break;
            }
            state.back = 0;
            for (; ; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_op && (here_op & 240) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (; ; ) {
                here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (last_bits + here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
              state.mode = LIT;
              break;
            }
            if (here_op & 32) {
              state.back = -1;
              state.mode = TYPE;
              break;
            }
            if (here_op & 64) {
              strm.msg = "invalid literal/length code";
              state.mode = BAD;
              break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
          case LENEXT:
            if (state.extra) {
              n = state.extra;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.length += hold & (1 << state.extra) - 1;
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            state.was = state.length;
            state.mode = DIST;
          case DIST:
            for (; ; ) {
              here = state.distcode[hold & (1 << state.distbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((here_op & 240) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (; ; ) {
                here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (last_bits + here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            if (here_op & 64) {
              strm.msg = "invalid distance code";
              state.mode = BAD;
              break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
          case DISTEXT:
            if (state.extra) {
              n = state.extra;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.offset += hold & (1 << state.extra) - 1;
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            if (state.offset > state.dmax) {
              strm.msg = "invalid distance too far back";
              state.mode = BAD;
              break;
            }
            state.mode = MATCH;
          case MATCH:
            if (left === 0) {
              break inf_leave;
            }
            copy = _out - left;
            if (state.offset > copy) {
              copy = state.offset - copy;
              if (copy > state.whave) {
                if (state.sane) {
                  strm.msg = "invalid distance too far back";
                  state.mode = BAD;
                  break;
                }
              }
              if (copy > state.wnext) {
                copy -= state.wnext;
                from = state.wsize - copy;
              } else {
                from = state.wnext - copy;
              }
              if (copy > state.length) {
                copy = state.length;
              }
              from_source = state.window;
            } else {
              from_source = output;
              from = put - state.offset;
              copy = state.length;
            }
            if (copy > left) {
              copy = left;
            }
            left -= copy;
            state.length -= copy;
            do {
              output[put++] = from_source[from++];
            } while (--copy);
            if (state.length === 0) {
              state.mode = LEN;
            }
            break;
          case LIT:
            if (left === 0) {
              break inf_leave;
            }
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
          case CHECK:
            if (state.wrap) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold |= input[next++] << bits;
                bits += 8;
              }
              _out -= left;
              strm.total_out += _out;
              state.total += _out;
              if (_out) {
                strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/
                state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
              }
              _out = left;
              if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                strm.msg = "incorrect data check";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = LENGTH;
          case LENGTH:
            if (state.wrap && state.flags) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (hold !== (state.total & 4294967295)) {
                strm.msg = "incorrect length check";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = DONE;
          case DONE:
            ret = Z_STREAM_END;
            break inf_leave;
          case BAD:
            ret = Z_DATA_ERROR;
            break inf_leave;
          case MEM:
            return Z_MEM_ERROR;
          case SYNC:
          default:
            return Z_STREAM_ERROR;
        }
      }
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
      if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out))
        ;
    }
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap && _out) {
      strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
    }
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
      ret = Z_BUF_ERROR;
    }
    return ret;
  }
  function inflateEnd(strm) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    var state = strm.state;
    if (state.window) {
      state.window = null;
    }
    strm.state = null;
    return Z_OK;
  }
  function inflateGetHeader(strm, head) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if ((state.wrap & 2) === 0) {
      return Z_STREAM_ERROR;
    }
    state.head = head;
    head.done = false;
    return Z_OK;
  }
  function inflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var state;
    var dictid;
    var ret;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) {
      return Z_STREAM_ERROR;
    }
    if (state.mode === DICT) {
      dictid = 1;
      dictid = adler32(dictid, dictionary, dictLength, 0);
      if (dictid !== state.check) {
        return Z_DATA_ERROR;
      }
    }
    ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
    state.havedict = 1;
    return Z_OK;
  }
  inflate.inflateReset = inflateReset;
  inflate.inflateReset2 = inflateReset2;
  inflate.inflateResetKeep = inflateResetKeep;
  inflate.inflateInit = inflateInit;
  inflate.inflateInit2 = inflateInit2;
  inflate.inflate = inflate$12;
  inflate.inflateEnd = inflateEnd;
  inflate.inflateGetHeader = inflateGetHeader;
  inflate.inflateSetDictionary = inflateSetDictionary;
  inflate.inflateInfo = "pako inflate (from Nodeca project)";
  return inflate;
}
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants)
    return constants;
  hasRequiredConstants = 1;
  constants = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */
    Z_DEFLATED: 8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  };
  return constants;
}
var gzheader;
var hasRequiredGzheader;
function requireGzheader() {
  if (hasRequiredGzheader)
    return gzheader;
  hasRequiredGzheader = 1;
  function GZheader() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = "";
    this.comment = "";
    this.hcrc = 0;
    this.done = false;
  }
  gzheader = GZheader;
  return gzheader;
}
var hasRequiredInflate;
function requireInflate() {
  if (hasRequiredInflate)
    return inflate$1;
  hasRequiredInflate = 1;
  var zlib_inflate = requireInflate$1();
  var utils = requireCommon();
  var strings2 = requireStrings();
  var c = requireConstants();
  var msg = requireMessages();
  var ZStream = requireZstream();
  var GZheader = requireGzheader();
  var toString = Object.prototype.toString;
  function Inflate(options) {
    if (!(this instanceof Inflate))
      return new Inflate(options);
    this.options = utils.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, options || {});
    var opt = this.options;
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
      opt.windowBits = -opt.windowBits;
      if (opt.windowBits === 0) {
        opt.windowBits = -15;
      }
    }
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
      opt.windowBits += 32;
    }
    if (opt.windowBits > 15 && opt.windowBits < 48) {
      if ((opt.windowBits & 15) === 0) {
        opt.windowBits |= 15;
      }
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new ZStream();
    this.strm.avail_out = 0;
    var status = zlib_inflate.inflateInit2(
      this.strm,
      opt.windowBits
    );
    if (status !== c.Z_OK) {
      throw new Error(msg[status]);
    }
    this.header = new GZheader();
    zlib_inflate.inflateGetHeader(this.strm, this.header);
    if (opt.dictionary) {
      if (typeof opt.dictionary === "string") {
        opt.dictionary = strings2.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
        opt.dictionary = new Uint8Array(opt.dictionary);
      }
      if (opt.raw) {
        status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
        if (status !== c.Z_OK) {
          throw new Error(msg[status]);
        }
      }
    }
  }
  Inflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var dictionary = this.options.dictionary;
    var status, _mode;
    var next_out_utf8, tail, utf8str;
    var allowBufError = false;
    if (this.ended) {
      return false;
    }
    _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
    if (typeof data === "string") {
      strm.input = strings2.binstring2buf(data);
    } else if (toString.call(data) === "[object ArrayBuffer]") {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
      if (strm.avail_out === 0) {
        strm.output = new utils.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
      if (status === c.Z_NEED_DICT && dictionary) {
        status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
      }
      if (status === c.Z_BUF_ERROR && allowBufError === true) {
        status = c.Z_OK;
        allowBufError = false;
      }
      if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }
      if (strm.next_out) {
        if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
          if (this.options.to === "string") {
            next_out_utf8 = strings2.utf8border(strm.output, strm.next_out);
            tail = strm.next_out - next_out_utf8;
            utf8str = strings2.buf2string(strm.output, next_out_utf8);
            strm.next_out = tail;
            strm.avail_out = chunkSize - tail;
            if (tail) {
              utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
            }
            this.onData(utf8str);
          } else {
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
          }
        }
      }
      if (strm.avail_in === 0 && strm.avail_out === 0) {
        allowBufError = true;
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
    if (status === c.Z_STREAM_END) {
      _mode = c.Z_FINISH;
    }
    if (_mode === c.Z_FINISH) {
      status = zlib_inflate.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === c.Z_OK;
    }
    if (_mode === c.Z_SYNC_FLUSH) {
      this.onEnd(c.Z_OK);
      strm.avail_out = 0;
      return true;
    }
    return true;
  };
  Inflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Inflate.prototype.onEnd = function(status) {
    if (status === c.Z_OK) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = utils.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  function inflate2(input, options) {
    var inflator = new Inflate(options);
    inflator.push(input, true);
    if (inflator.err) {
      throw inflator.msg || msg[inflator.err];
    }
    return inflator.result;
  }
  function inflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return inflate2(input, options);
  }
  inflate$1.Inflate = Inflate;
  inflate$1.inflate = inflate2;
  inflate$1.inflateRaw = inflateRaw;
  inflate$1.ungzip = inflate2;
  return inflate$1;
}
var pako_1;
var hasRequiredPako;
function requirePako() {
  if (hasRequiredPako)
    return pako_1;
  hasRequiredPako = 1;
  var assign = requireCommon().assign;
  var deflate2 = requireDeflate();
  var inflate2 = requireInflate();
  var constants2 = requireConstants();
  var pako = {};
  assign(pako, deflate2, inflate2, constants2);
  pako_1 = pako;
  return pako_1;
}
var hasRequiredUTIF;
function requireUTIF() {
  if (hasRequiredUTIF)
    return UTIF.exports;
  hasRequiredUTIF = 1;
  (function(module) {
    (function() {
      var UTIF2 = {};
      {
        module.exports = UTIF2;
      }
      var pako;
      if (typeof commonjsRequire == "function") {
        pako = requirePako();
      } else {
        pako = self.pako;
      }
      function log() {
        if (typeof process == "undefined" || false)
          console.log.apply(console, arguments);
      }
      (function(UTIF3, pako2) {
        (function() {
          var V = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(g) {
            return typeof g;
          } : function(g) {
            return g && "function" === typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
          }, D = function() {
            function g(g2) {
              this.message = "JPEG error: " + g2;
            }
            g.prototype = Error();
            g.prototype.name = "JpegError";
            return g.constructor = g;
          }(), P = function() {
            function g(g2, D2) {
              this.message = g2;
              this.g = D2;
            }
            g.prototype = Error();
            g.prototype.name = "DNLMarkerError";
            return g.constructor = g;
          }();
          (function() {
            function g() {
              this.M = null;
              this.B = -1;
            }
            function W(a, d) {
              for (var f = 0, e = [], b, B, k = 16; 0 < k && !a[k - 1]; )
                k--;
              e.push({ children: [], index: 0 });
              var l = e[0], r;
              for (b = 0; b < k; b++) {
                for (B = 0; B < a[b]; B++) {
                  l = e.pop();
                  for (l.children[l.index] = d[f]; 0 < l.index; )
                    l = e.pop();
                  l.index++;
                  for (e.push(l); e.length <= b; )
                    e.push(r = { children: [], index: 0 }), l.children[l.index] = r.children, l = r;
                  f++;
                }
                b + 1 < k && (e.push(r = { children: [], index: 0 }), l.children[l.index] = r.children, l = r);
              }
              return e[0].children;
            }
            function X(a, d, f, e, b, B, k, l, r) {
              function n() {
                if (0 < x)
                  return x--, z >> x & 1;
                z = a[d++];
                if (255 === z) {
                  var c2 = a[d++];
                  if (c2) {
                    if (220 === c2 && g2) {
                      d += 2;
                      var b2 = a[d++] << 8 | a[d++];
                      if (0 < b2 && b2 !== f.g)
                        throw new P("Found DNL marker (0xFFDC) while parsing scan data", b2);
                    }
                    throw new D("unexpected marker " + (z << 8 | c2).toString(16));
                  }
                }
                x = 7;
                return z >>> 7;
              }
              function q(a2) {
                for (; ; ) {
                  a2 = a2[n()];
                  if ("number" === typeof a2)
                    return a2;
                  if ("object" !== ("undefined" === typeof a2 ? "undefined" : V(a2)))
                    throw new D("invalid huffman sequence");
                }
              }
              function h(a2) {
                for (var c2 = 0; 0 < a2; )
                  c2 = c2 << 1 | n(), a2--;
                return c2;
              }
              function c(a2) {
                if (1 === a2)
                  return 1 === n() ? 1 : -1;
                var c2 = h(a2);
                return c2 >= 1 << a2 - 1 ? c2 : c2 + (-1 << a2) + 1;
              }
              function C(a2, b2) {
                var d2 = q(a2.D);
                d2 = 0 === d2 ? 0 : c(d2);
                a2.a[b2] = a2.m += d2;
                for (d2 = 1; 64 > d2; ) {
                  var h2 = q(a2.o), k2 = h2 & 15;
                  h2 >>= 4;
                  if (0 === k2) {
                    if (15 > h2)
                      break;
                    d2 += 16;
                  } else
                    d2 += h2, a2.a[b2 + J[d2]] = c(k2), d2++;
                }
              }
              function w(a2, d2) {
                var b2 = q(a2.D);
                b2 = 0 === b2 ? 0 : c(b2) << r;
                a2.a[d2] = a2.m += b2;
              }
              function p(a2, c2) {
                a2.a[c2] |= n() << r;
              }
              function m(a2, b2) {
                if (0 < A)
                  A--;
                else
                  for (var d2 = B; d2 <= k; ) {
                    var e2 = q(a2.o), f2 = e2 & 15;
                    e2 >>= 4;
                    if (0 === f2) {
                      if (15 > e2) {
                        A = h(e2) + (1 << e2) - 1;
                        break;
                      }
                      d2 += 16;
                    } else
                      d2 += e2, a2.a[b2 + J[d2]] = c(f2) * (1 << r), d2++;
                  }
              }
              function t(a2, d2) {
                for (var b2 = B, e2 = 0, f2; b2 <= k; ) {
                  f2 = d2 + J[b2];
                  var l2 = 0 > a2.a[f2] ? -1 : 1;
                  switch (E) {
                    case 0:
                      e2 = q(a2.o);
                      f2 = e2 & 15;
                      e2 >>= 4;
                      if (0 === f2)
                        15 > e2 ? (A = h(e2) + (1 << e2), E = 4) : (e2 = 16, E = 1);
                      else {
                        if (1 !== f2)
                          throw new D("invalid ACn encoding");
                        Q = c(f2);
                        E = e2 ? 2 : 3;
                      }
                      continue;
                    case 1:
                    case 2:
                      a2.a[f2] ? a2.a[f2] += l2 * (n() << r) : (e2--, 0 === e2 && (E = 2 === E ? 3 : 0));
                      break;
                    case 3:
                      a2.a[f2] ? a2.a[f2] += l2 * (n() << r) : (a2.a[f2] = Q << r, E = 0);
                      break;
                    case 4:
                      a2.a[f2] && (a2.a[f2] += l2 * (n() << r));
                  }
                  b2++;
                }
                4 === E && (A--, 0 === A && (E = 0));
              }
              var g2 = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : false, u = f.P, v = d, z = 0, x = 0, A = 0, E = 0, Q, K = e.length, F, L, M, I;
              var R = f.S ? 0 === B ? 0 === l ? w : p : 0 === l ? m : t : C;
              var G = 0;
              var O = 1 === K ? e[0].c * e[0].l : u * f.O;
              for (var S, T; G < O; ) {
                var U = b ? Math.min(O - G, b) : O;
                for (F = 0; F < K; F++)
                  e[F].m = 0;
                A = 0;
                if (1 === K) {
                  var y = e[0];
                  for (I = 0; I < U; I++)
                    R(y, 64 * ((y.c + 1) * (G / y.c | 0) + G % y.c)), G++;
                } else
                  for (I = 0; I < U; I++) {
                    for (F = 0; F < K; F++)
                      for (y = e[F], S = y.h, T = y.j, L = 0; L < T; L++)
                        for (M = 0; M < S; M++)
                          R(y, 64 * ((y.c + 1) * ((G / u | 0) * y.j + L) + (G % u * y.h + M)));
                    G++;
                  }
                x = 0;
                (y = N(a, d)) && y.f && ((0, _util.warn)("decodeScan - unexpected MCU data, current marker is: " + y.f), d = y.offset);
                y = y && y.F;
                if (!y || 65280 >= y)
                  throw new D("marker was not found");
                if (65488 <= y && 65495 >= y)
                  d += 2;
                else
                  break;
              }
              (y = N(a, d)) && y.f && ((0, _util.warn)("decodeScan - unexpected Scan data, current marker is: " + y.f), d = y.offset);
              return d - v;
            }
            function Y(a, d) {
              for (var f = d.c, e = d.l, b = new Int16Array(64), B = 0; B < e; B++)
                for (var k = 0; k < f; k++) {
                  var l = 64 * ((d.c + 1) * B + k), r = b, n = d.G, q = d.a;
                  if (!n)
                    throw new D("missing required Quantization Table.");
                  for (var h = 0; 64 > h; h += 8) {
                    var c = q[l + h];
                    var C = q[l + h + 1];
                    var w = q[l + h + 2];
                    var p = q[l + h + 3];
                    var m = q[l + h + 4];
                    var t = q[l + h + 5];
                    var g2 = q[l + h + 6];
                    var u = q[l + h + 7];
                    c *= n[h];
                    if (0 === (C | w | p | m | t | g2 | u))
                      c = 5793 * c + 512 >> 10, r[h] = c, r[h + 1] = c, r[h + 2] = c, r[h + 3] = c, r[h + 4] = c, r[h + 5] = c, r[h + 6] = c, r[h + 7] = c;
                    else {
                      C *= n[h + 1];
                      w *= n[h + 2];
                      p *= n[h + 3];
                      m *= n[h + 4];
                      t *= n[h + 5];
                      g2 *= n[h + 6];
                      u *= n[h + 7];
                      var v = 5793 * c + 128 >> 8;
                      var z = 5793 * m + 128 >> 8;
                      var x = w;
                      var A = g2;
                      m = 2896 * (C - u) + 128 >> 8;
                      u = 2896 * (C + u) + 128 >> 8;
                      p <<= 4;
                      t <<= 4;
                      v = v + z + 1 >> 1;
                      z = v - z;
                      c = 3784 * x + 1567 * A + 128 >> 8;
                      x = 1567 * x - 3784 * A + 128 >> 8;
                      A = c;
                      m = m + t + 1 >> 1;
                      t = m - t;
                      u = u + p + 1 >> 1;
                      p = u - p;
                      v = v + A + 1 >> 1;
                      A = v - A;
                      z = z + x + 1 >> 1;
                      x = z - x;
                      c = 2276 * m + 3406 * u + 2048 >> 12;
                      m = 3406 * m - 2276 * u + 2048 >> 12;
                      u = c;
                      c = 799 * p + 4017 * t + 2048 >> 12;
                      p = 4017 * p - 799 * t + 2048 >> 12;
                      t = c;
                      r[h] = v + u;
                      r[h + 7] = v - u;
                      r[h + 1] = z + t;
                      r[h + 6] = z - t;
                      r[h + 2] = x + p;
                      r[h + 5] = x - p;
                      r[h + 3] = A + m;
                      r[h + 4] = A - m;
                    }
                  }
                  for (n = 0; 8 > n; ++n)
                    c = r[n], C = r[n + 8], w = r[n + 16], p = r[n + 24], m = r[n + 32], t = r[n + 40], g2 = r[n + 48], u = r[n + 56], 0 === (C | w | p | m | t | g2 | u) ? (c = 5793 * c + 8192 >> 14, c = -2040 > c ? 0 : 2024 <= c ? 255 : c + 2056 >> 4, q[l + n] = c, q[l + n + 8] = c, q[l + n + 16] = c, q[l + n + 24] = c, q[l + n + 32] = c, q[l + n + 40] = c, q[l + n + 48] = c, q[l + n + 56] = c) : (v = 5793 * c + 2048 >> 12, z = 5793 * m + 2048 >> 12, x = w, A = g2, m = 2896 * (C - u) + 2048 >> 12, u = 2896 * (C + u) + 2048 >> 12, v = (v + z + 1 >> 1) + 4112, z = v - z, c = 3784 * x + 1567 * A + 2048 >> 12, x = 1567 * x - 3784 * A + 2048 >> 12, A = c, m = m + t + 1 >> 1, t = m - t, u = u + p + 1 >> 1, p = u - p, v = v + A + 1 >> 1, A = v - A, z = z + x + 1 >> 1, x = z - x, c = 2276 * m + 3406 * u + 2048 >> 12, m = 3406 * m - 2276 * u + 2048 >> 12, u = c, c = 799 * p + 4017 * t + 2048 >> 12, p = 4017 * p - 799 * t + 2048 >> 12, t = c, c = v + u, u = v - u, C = z + t, g2 = z - t, w = x + p, t = x - p, p = A + m, m = A - m, c = 16 > c ? 0 : 4080 <= c ? 255 : c >> 4, C = 16 > C ? 0 : 4080 <= C ? 255 : C >> 4, w = 16 > w ? 0 : 4080 <= w ? 255 : w >> 4, p = 16 > p ? 0 : 4080 <= p ? 255 : p >> 4, m = 16 > m ? 0 : 4080 <= m ? 255 : m >> 4, t = 16 > t ? 0 : 4080 <= t ? 255 : t >> 4, g2 = 16 > g2 ? 0 : 4080 <= g2 ? 255 : g2 >> 4, u = 16 > u ? 0 : 4080 <= u ? 255 : u >> 4, q[l + n] = c, q[l + n + 8] = C, q[l + n + 16] = w, q[l + n + 24] = p, q[l + n + 32] = m, q[l + n + 40] = t, q[l + n + 48] = g2, q[l + n + 56] = u);
                }
              return d.a;
            }
            function N(a, d) {
              var f = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : d, e = a.length - 1;
              f = f < d ? f : d;
              if (d >= e)
                return null;
              var b = a[d] << 8 | a[d + 1];
              if (65472 <= b && 65534 >= b)
                return { f: null, F: b, offset: d };
              for (var B = a[f] << 8 | a[f + 1]; !(65472 <= B && 65534 >= B); ) {
                if (++f >= e)
                  return null;
                B = a[f] << 8 | a[f + 1];
              }
              return { f: b.toString(16), F: B, offset: f };
            }
            var J = new Uint8Array([
              0,
              1,
              8,
              16,
              9,
              2,
              3,
              10,
              17,
              24,
              32,
              25,
              18,
              11,
              4,
              5,
              12,
              19,
              26,
              33,
              40,
              48,
              41,
              34,
              27,
              20,
              13,
              6,
              7,
              14,
              21,
              28,
              35,
              42,
              49,
              56,
              57,
              50,
              43,
              36,
              29,
              22,
              15,
              23,
              30,
              37,
              44,
              51,
              58,
              59,
              52,
              45,
              38,
              31,
              39,
              46,
              53,
              60,
              61,
              54,
              47,
              55,
              62,
              63
            ]);
            g.prototype = { parse: function(a) {
              function d() {
                var d2 = a[k] << 8 | a[k + 1];
                k += 2;
                return d2;
              }
              function f() {
                var b2 = d();
                b2 = k + b2 - 2;
                var c2 = N(a, b2, k);
                c2 && c2.f && ((0, _util.warn)("readDataBlock - incorrect length, current marker is: " + c2.f), b2 = c2.offset);
                b2 = a.subarray(k, b2);
                k += b2.length;
                return b2;
              }
              function e(a2) {
                for (var b2 = Math.ceil(a2.v / 8 / a2.s), c2 = Math.ceil(a2.g / 8 / a2.u), d2 = 0; d2 < a2.b.length; d2++) {
                  v = a2.b[d2];
                  var e2 = Math.ceil(Math.ceil(a2.v / 8) * v.h / a2.s), f2 = Math.ceil(Math.ceil(a2.g / 8) * v.j / a2.u);
                  v.a = new Int16Array(64 * c2 * v.j * (b2 * v.h + 1));
                  v.c = e2;
                  v.l = f2;
                }
                a2.P = b2;
                a2.O = c2;
              }
              var b = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).N, B = void 0 === b ? null : b, k = 0, l = null, r = 0;
              b = [];
              var n = [], q = [], h = d();
              if (65496 !== h)
                throw new D("SOI not found");
              for (h = d(); 65497 !== h; ) {
                switch (h) {
                  case 65504:
                  case 65505:
                  case 65506:
                  case 65507:
                  case 65508:
                  case 65509:
                  case 65510:
                  case 65511:
                  case 65512:
                  case 65513:
                  case 65514:
                  case 65515:
                  case 65516:
                  case 65517:
                  case 65518:
                  case 65519:
                  case 65534:
                    var c = f();
                    65518 === h && 65 === c[0] && 100 === c[1] && 111 === c[2] && 98 === c[3] && 101 === c[4] && (l = { version: c[5] << 8 | c[6], Y: c[7] << 8 | c[8], Z: c[9] << 8 | c[10], W: c[11] });
                    break;
                  case 65499:
                    h = d() + k - 2;
                    for (var g2; k < h; ) {
                      var w = a[k++], p = new Uint16Array(64);
                      if (0 === w >> 4)
                        for (c = 0; 64 > c; c++)
                          g2 = J[c], p[g2] = a[k++];
                      else if (1 === w >> 4)
                        for (c = 0; 64 > c; c++)
                          g2 = J[c], p[g2] = d();
                      else
                        throw new D("DQT - invalid table spec");
                      b[w & 15] = p;
                    }
                    break;
                  case 65472:
                  case 65473:
                  case 65474:
                    if (m)
                      throw new D("Only single frame JPEGs supported");
                    d();
                    var m = {};
                    m.X = 65473 === h;
                    m.S = 65474 === h;
                    m.precision = a[k++];
                    h = d();
                    m.g = B || h;
                    m.v = d();
                    m.b = [];
                    m.C = {};
                    c = a[k++];
                    for (h = p = w = 0; h < c; h++) {
                      g2 = a[k];
                      var t = a[k + 1] >> 4;
                      var H = a[k + 1] & 15;
                      w < t && (w = t);
                      p < H && (p = H);
                      t = m.b.push({ h: t, j: H, T: a[k + 2], G: null });
                      m.C[g2] = t - 1;
                      k += 3;
                    }
                    m.s = w;
                    m.u = p;
                    e(m);
                    break;
                  case 65476:
                    g2 = d();
                    for (h = 2; h < g2; ) {
                      w = a[k++];
                      p = new Uint8Array(16);
                      for (c = t = 0; 16 > c; c++, k++)
                        t += p[c] = a[k];
                      H = new Uint8Array(t);
                      for (c = 0; c < t; c++, k++)
                        H[c] = a[k];
                      h += 17 + t;
                      (0 === w >> 4 ? q : n)[w & 15] = W(p, H);
                    }
                    break;
                  case 65501:
                    d();
                    var u = d();
                    break;
                  case 65498:
                    c = 1 === ++r && !B;
                    d();
                    w = a[k++];
                    g2 = [];
                    for (h = 0; h < w; h++) {
                      p = m.C[a[k++]];
                      var v = m.b[p];
                      p = a[k++];
                      v.D = q[p >> 4];
                      v.o = n[p & 15];
                      g2.push(v);
                    }
                    h = a[k++];
                    w = a[k++];
                    p = a[k++];
                    try {
                      var z = X(a, k, m, g2, u, h, w, p >> 4, p & 15, c);
                      k += z;
                    } catch (x) {
                      if (x instanceof P)
                        return (0, _util.warn)('Attempting to re-parse JPEG image using "scanLines" parameter found in DNL marker (0xFFDC) segment.'), this.parse(a, { N: x.g });
                      throw x;
                    }
                    break;
                  case 65500:
                    k += 4;
                    break;
                  case 65535:
                    255 !== a[k] && k--;
                    break;
                  default:
                    if (255 === a[k - 3] && 192 <= a[k - 2] && 254 >= a[k - 2])
                      k -= 3;
                    else if ((c = N(a, k - 2)) && c.f)
                      (0, _util.warn)("JpegImage.parse - unexpected data, current marker is: " + c.f), k = c.offset;
                    else
                      throw new D("unknown marker " + h.toString(16));
                }
                h = d();
              }
              this.width = m.v;
              this.height = m.g;
              this.A = l;
              this.b = [];
              for (h = 0; h < m.b.length; h++) {
                v = m.b[h];
                if (u = b[v.T])
                  v.G = u;
                this.b.push({ R: Y(m, v), U: v.h / m.s, V: v.j / m.u, c: v.c, l: v.l });
              }
              this.i = this.b.length;
            }, L: function(a, d) {
              var f = this.width / a, e = this.height / d, b, g2, k = this.b.length, l = a * d * k, r = new Uint8ClampedArray(l), n = new Uint32Array(a);
              for (g2 = 0; g2 < k; g2++) {
                var q = this.b[g2];
                var h = q.U * f;
                var c = q.V * e;
                var C = g2;
                var w = q.R;
                var p = q.c + 1 << 3;
                for (b = 0; b < a; b++)
                  q = 0 | b * h, n[b] = (q & 4294967288) << 3 | q & 7;
                for (h = 0; h < d; h++)
                  for (q = 0 | h * c, q = p * (q & 4294967288) | (q & 7) << 3, b = 0; b < a; b++)
                    r[C] = w[q + n[b]], C += k;
              }
              if (e = this.M)
                for (g2 = 0; g2 < l; )
                  for (f = q = 0; q < k; q++, g2++, f += 2)
                    r[g2] = (r[g2] * e[f] >> 8) + e[f + 1];
              return r;
            }, w: function() {
              return this.A ? !!this.A.W : 3 === this.i ? 0 === this.B ? false : true : 1 === this.B ? true : false;
            }, I: function(a) {
              for (var d, f, e, b = 0, g2 = a.length; b < g2; b += 3)
                d = a[b], f = a[b + 1], e = a[b + 2], a[b] = d - 179.456 + 1.402 * e, a[b + 1] = d + 135.459 - 0.344 * f - 0.714 * e, a[b + 2] = d - 226.816 + 1.772 * f;
              return a;
            }, K: function(a) {
              for (var d, f, e, b, g2 = 0, k = 0, l = a.length; k < l; k += 4)
                d = a[k], f = a[k + 1], e = a[k + 2], b = a[k + 3], a[g2++] = -122.67195406894 + f * (-660635669420364e-19 * f + 437130475926232e-18 * e - 54080610064599e-18 * d + 48449797120281e-17 * b - 0.154362151871126) + e * (-957964378445773e-18 * e + 817076911346625e-18 * d - 0.00477271405408747 * b + 1.53380253221734) + d * (961250184130688e-18 * d - 0.00266257332283933 * b + 0.48357088451265) + b * (-336197177618394e-18 * b + 0.484791561490776), a[g2++] = 107.268039397724 + f * (219927104525741e-19 * f - 640992018297945e-18 * e + 659397001245577e-18 * d + 426105652938837e-18 * b - 0.176491792462875) + e * (-778269941513683e-18 * e + 0.00130872261408275 * d + 770482631801132e-18 * b - 0.151051492775562) + d * (0.00126935368114843 * d - 0.00265090189010898 * b + 0.25802910206845) + b * (-318913117588328e-18 * b - 0.213742400323665), a[g2++] = -20.810012546947 + f * (-570115196973677e-18 * f - 263409051004589e-19 * e + 0.0020741088115012 * d - 0.00288260236853442 * b + 0.814272968359295) + e * (-153496057440975e-19 * e - 132689043961446e-18 * d + 560833691242812e-18 * b - 0.195152027534049) + d * (0.00174418132927582 * d - 0.00255243321439347 * b + 0.116935020465145) + b * (-343531996510555e-18 * b + 0.24165260232407);
              return a.subarray(
                0,
                g2
              );
            }, J: function(a) {
              for (var d, f, e, b = 0, g2 = a.length; b < g2; b += 4)
                d = a[b], f = a[b + 1], e = a[b + 2], a[b] = 434.456 - d - 1.402 * e, a[b + 1] = 119.541 - d + 0.344 * f + 0.714 * e, a[b + 2] = 481.816 - d - 1.772 * f;
              return a;
            }, H: function(a) {
              for (var d, f, e, b, g2 = 0, k = 1 / 255, l = 0, r = a.length; l < r; l += 4)
                d = a[l] * k, f = a[l + 1] * k, e = a[l + 2] * k, b = a[l + 3] * k, a[g2++] = 255 + d * (-4.387332384609988 * d + 54.48615194189176 * f + 18.82290502165302 * e + 212.25662451639585 * b - 285.2331026137004) + f * (1.7149763477362134 * f - 5.6096736904047315 * e - 17.873870861415444 * b - 5.497006427196366) + e * (-2.5217340131683033 * e - 21.248923337353073 * b + 17.5119270841813) - b * (21.86122147463605 * b + 189.48180835922747), a[g2++] = 255 + d * (8.841041422036149 * d + 60.118027045597366 * f + 6.871425592049007 * e + 31.159100130055922 * b - 79.2970844816548) + f * (-15.310361306967817 * f + 17.575251261109482 * e + 131.35250912493976 * b - 190.9453302588951) + e * (4.444339102852739 * e + 9.8632861493405 * b - 24.86741582555878) - b * (20.737325471181034 * b + 187.80453709719578), a[g2++] = 255 + d * (0.8842522430003296 * d + 8.078677503112928 * f + 30.89978309703729 * e - 0.23883238689178934 * b - 14.183576799673286) + f * (10.49593273432072 * f + 63.02378494754052 * e + 50.606957656360734 * b - 112.23884253719248) + e * (0.03296041114873217 * e + 115.60384449646641 * b - 193.58209356861505) - b * (22.33816807309886 * b + 180.12613974708367);
              return a.subarray(0, g2);
            }, getData: function(a, d, f) {
              if (4 < this.i)
                throw new D("Unsupported color mode");
              a = this.L(a, d);
              if (1 === this.i && f) {
                f = a.length;
                d = new Uint8ClampedArray(3 * f);
                for (var e = 0, b = 0; b < f; b++) {
                  var g2 = a[b];
                  d[e++] = g2;
                  d[e++] = g2;
                  d[e++] = g2;
                }
                return d;
              }
              if (3 === this.i && this.w())
                return this.I(a);
              if (4 === this.i) {
                if (this.w())
                  return f ? this.K(a) : this.J(a);
                if (f)
                  return this.H(a);
              }
              return a;
            } };
            UTIF3.JpegDecoder = g;
          })();
        })();
        UTIF3.encodeImage = function(rgba, w, h, metadata) {
          var idf = {
            "t256": [w],
            "t257": [h],
            "t258": [8, 8, 8, 8],
            "t259": [1],
            "t262": [2],
            "t273": [1e3],
            // strips offset
            "t277": [4],
            "t278": [h],
            /* rows per strip */
            "t279": [w * h * 4],
            // strip byte counts
            "t282": [1],
            "t283": [1],
            "t284": [1],
            "t286": [0],
            "t287": [0],
            "t296": [1],
            "t305": ["Photopea (UTIF.js)"],
            "t338": [1]
          };
          if (metadata)
            for (var i in metadata)
              idf[i] = metadata[i];
          var prfx = new Uint8Array(UTIF3.encode([idf]));
          var img = new Uint8Array(rgba);
          var data = new Uint8Array(1e3 + w * h * 4);
          for (var i = 0; i < prfx.length; i++)
            data[i] = prfx[i];
          for (var i = 0; i < img.length; i++)
            data[1e3 + i] = img[i];
          return data.buffer;
        };
        UTIF3.encode = function(ifds) {
          var data = new Uint8Array(2e4), offset = 4, bin = UTIF3._binBE;
          data[0] = 77;
          data[1] = 77;
          data[3] = 42;
          var ifdo = 8;
          bin.writeUint(data, offset, ifdo);
          offset += 4;
          for (var i = 0; i < ifds.length; i++) {
            var noffs = UTIF3._writeIFD(bin, data, ifdo, ifds[i]);
            ifdo = noffs[1];
            if (i < ifds.length - 1)
              bin.writeUint(data, noffs[0], ifdo);
          }
          return data.slice(0, ifdo).buffer;
        };
        UTIF3.decode = function(buff) {
          UTIF3.decode._decodeG3.allow2D = null;
          var data = new Uint8Array(buff), offset = 0;
          var id = UTIF3._binBE.readASCII(data, offset, 2);
          offset += 2;
          var bin = id == "II" ? UTIF3._binLE : UTIF3._binBE;
          bin.readUshort(data, offset);
          offset += 2;
          var ifdo = bin.readUint(data, offset);
          offset += 4;
          var ifds = [];
          while (true) {
            var noff = UTIF3._readIFD(bin, data, ifdo, ifds);
            ifdo = bin.readUint(data, noff);
            if (ifdo == 0)
              break;
          }
          return ifds;
        };
        UTIF3.decodeImages = function(buff, ifds) {
          var data = new Uint8Array(buff);
          var id = UTIF3._binBE.readASCII(data, 0, 2);
          for (var ii = 0; ii < ifds.length; ii++) {
            var img = ifds[ii];
            if (img["t256"] == null)
              continue;
            img.isLE = id == "II";
            img.width = img["t256"][0];
            img.height = img["t257"][0];
            var cmpr = img["t259"] ? img["t259"][0] : 1;
            var fo = img["t266"] ? img["t266"][0] : 1;
            if (img["t284"] && img["t284"][0] == 2)
              log("PlanarConfiguration 2 should not be used!");
            var bipp = (img["t258"] ? Math.min(32, img["t258"][0]) : 1) * (img["t277"] ? img["t277"][0] : 1);
            var bipl = Math.ceil(img.width * bipp / 8) * 8;
            var soff = img["t273"];
            if (soff == null)
              soff = img["t324"];
            var bcnt = img["t279"];
            if (cmpr == 1 && soff.length == 1)
              bcnt = [img.height * (bipl >>> 3)];
            if (bcnt == null)
              bcnt = img["t325"];
            var bytes = new Uint8Array(img.height * (bipl >>> 3)), bilen = 0;
            if (img["t322"] != null) {
              var tw = img["t322"][0], th = img["t323"][0];
              var tx = Math.floor((img.width + tw - 1) / tw);
              var ty = Math.floor((img.height + th - 1) / th);
              var tbuff = new Uint8Array(Math.ceil(tw * th * bipp / 8) | 0);
              for (var y = 0; y < ty; y++)
                for (var x = 0; x < tx; x++) {
                  var i = y * tx + x;
                  for (var j = 0; j < tbuff.length; j++)
                    tbuff[j] = 0;
                  UTIF3.decode._decompress(img, data, soff[i], bcnt[i], cmpr, tbuff, 0, fo);
                  if (cmpr == 6)
                    bytes = tbuff;
                  else
                    UTIF3._copyTile(tbuff, Math.ceil(tw * bipp / 8) | 0, th, bytes, Math.ceil(img.width * bipp / 8) | 0, img.height, Math.ceil(x * tw * bipp / 8) | 0, y * th);
                }
              bilen = bytes.length * 8;
            } else {
              var rps = img["t278"] ? img["t278"][0] : img.height;
              rps = Math.min(rps, img.height);
              for (var i = 0; i < soff.length; i++) {
                UTIF3.decode._decompress(img, data, soff[i], bcnt[i], cmpr, bytes, Math.ceil(bilen / 8) | 0, fo);
                bilen += bipl * rps;
              }
              bilen = Math.min(bilen, bytes.length * 8);
            }
            img.data = new Uint8Array(bytes.buffer, 0, Math.ceil(bilen / 8) | 0);
          }
        };
        UTIF3.decode._decompress = function(img, data, off, len, cmpr, tgt, toff, fo) {
          if (cmpr == 1)
            for (var j = 0; j < len; j++)
              tgt[toff + j] = data[off + j];
          else if (cmpr == 3)
            UTIF3.decode._decodeG3(data, off, len, tgt, toff, img.width, fo);
          else if (cmpr == 4)
            UTIF3.decode._decodeG4(data, off, len, tgt, toff, img.width, fo);
          else if (cmpr == 5)
            UTIF3.decode._decodeLZW(data, off, tgt, toff);
          else if (cmpr == 6)
            UTIF3.decode._decodeOldJPEG(img, data, off, len, tgt, toff);
          else if (cmpr == 7)
            UTIF3.decode._decodeNewJPEG(img, data, off, len, tgt, toff);
          else if (cmpr == 8) {
            var src2 = new Uint8Array(data.buffer, off, len);
            var bin = pako2["inflate"](src2);
            for (var i = 0; i < bin.length; i++)
              tgt[toff + i] = bin[i];
          } else if (cmpr == 32773)
            UTIF3.decode._decodePackBits(data, off, len, tgt, toff);
          else if (cmpr == 32809)
            UTIF3.decode._decodeThunder(data, off, len, tgt, toff);
          else
            log("Unknown compression", cmpr);
          if (img["t317"] && img["t317"][0] == 2) {
            var noc = img["t277"] ? img["t277"][0] : 1, h = img["t278"] ? img["t278"][0] : img.height, bpr = img.width * noc;
            for (var y = 0; y < h; y++) {
              var ntoff = toff + y * bpr;
              if (noc == 3)
                for (var j = 3; j < bpr; j += 3) {
                  tgt[ntoff + j] = tgt[ntoff + j] + tgt[ntoff + j - 3] & 255;
                  tgt[ntoff + j + 1] = tgt[ntoff + j + 1] + tgt[ntoff + j - 2] & 255;
                  tgt[ntoff + j + 2] = tgt[ntoff + j + 2] + tgt[ntoff + j - 1] & 255;
                }
              else
                for (var j = noc; j < bpr; j++)
                  tgt[ntoff + j] = tgt[ntoff + j] + tgt[ntoff + j - noc] & 255;
            }
          }
        };
        UTIF3.decode._decodeNikon = function(data, off, len, tgt, toff) {
          var ver0, ver1;
          var len;
          log(data.slice(off, off + 100));
          ver0 = data[off];
          off++;
          ver1 = data[off];
          off++;
          log(ver0.toString(16), ver1.toString(16), len);
        };
        UTIF3.decode._decodeNewJPEG = function(img, data, off, len, tgt, toff) {
          var tables = img["t347"], tlen = tables ? tables.length : 0, buff = new Uint8Array(tlen + len);
          if (tables) {
            var SOI = 216, EOI2 = 217, boff = 0;
            for (var i = 0; i < tlen - 1; i++) {
              if (tables[i] == 255 && tables[i + 1] == EOI2)
                break;
              buff[boff++] = tables[i];
            }
            var byte1 = data[off], byte2 = data[off + 1];
            if (byte1 != 255 || byte2 != SOI) {
              buff[boff++] = byte1;
              buff[boff++] = byte2;
            }
            for (var i = 2; i < len; i++)
              buff[boff++] = data[off + i];
          } else
            for (var i = 0; i < len; i++)
              buff[i] = data[off + i];
          if (img["t262"] == 32803) {
            var bps = img["t258"][0], dcdr = new LosslessJpegDecoder();
            var out = dcdr.decode(buff), olen = out.length;
            if (bps == 16)
              for (var i = 0; i < olen; i++) {
                tgt[toff++] = out[i] & 255;
                tgt[toff++] = out[i] >>> 8;
              }
            else if (bps == 12)
              for (var i = 0; i < olen; i += 2) {
                tgt[toff++] = out[i] >>> 4;
                tgt[toff++] = (out[i] << 4 | out[i + 1] >>> 8) & 255;
                tgt[toff++] = out[i + 1] & 255;
              }
            else
              throw new Error("unsupported bit depth " + bps);
          } else {
            var parser2 = new UTIF3.JpegDecoder();
            parser2.parse(buff);
            var decoded = parser2.getData(parser2.width, parser2.height);
            for (var i = 0; i < decoded.length; i++)
              tgt[toff + i] = decoded[i];
          }
          if (img["t262"][0] == 6)
            img["t262"][0] = 2;
        };
        UTIF3.decode._decodeOldJPEGInit = function(img, data, off, len) {
          var SOI = 216, DQT = 219, DHT = 196, DRI = 221, SOF0 = 192, SOS2 = 218;
          var joff = 0, soff = 0, tables, sosMarker2, isTiled = false, i, j, k;
          var jpgIchgFmt = img["t513"], jifoff = jpgIchgFmt ? jpgIchgFmt[0] : 0;
          var jpgIchgFmtLen = img["t514"], jiflen = jpgIchgFmtLen ? jpgIchgFmtLen[0] : 0;
          var soffTag = img["t324"] || img["t273"] || jpgIchgFmt;
          var ycbcrss = img["t530"], ssx = 0, ssy = 0;
          var spp = img["t277"] ? img["t277"][0] : 1;
          var jpgresint = img["t515"];
          if (soffTag) {
            soff = soffTag[0];
            isTiled = soffTag.length > 1;
          }
          if (!isTiled) {
            if (data[off] == 255 && data[off + 1] == SOI)
              return { jpegOffset: off };
            if (jpgIchgFmt != null) {
              if (data[off + jifoff] == 255 && data[off + jifoff + 1] == SOI)
                joff = off + jifoff;
              else
                log("JPEGInterchangeFormat does not point to SOI");
              if (jpgIchgFmtLen == null)
                log("JPEGInterchangeFormatLength field is missing");
              else if (jifoff >= soff || jifoff + jiflen <= soff)
                log("JPEGInterchangeFormatLength field value is invalid");
              if (joff != null)
                return { jpegOffset: joff };
            }
          }
          if (ycbcrss != null) {
            ssx = ycbcrss[0];
            ssy = ycbcrss[1];
          }
          if (jpgIchgFmt != null) {
            if (jpgIchgFmtLen != null)
              if (jiflen >= 2 && jifoff + jiflen <= soff) {
                if (data[off + jifoff + jiflen - 2] == 255 && data[off + jifoff + jiflen - 1] == SOI)
                  tables = new Uint8Array(jiflen - 2);
                else
                  tables = new Uint8Array(jiflen);
                for (i = 0; i < tables.length; i++)
                  tables[i] = data[off + jifoff + i];
                log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
              } else
                log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
          }
          if (tables == null) {
            var ooff = 0, out = [];
            out[ooff++] = 255;
            out[ooff++] = SOI;
            var qtables = img["t519"];
            if (qtables == null)
              throw new Error("JPEGQTables tag is missing");
            for (i = 0; i < qtables.length; i++) {
              out[ooff++] = 255;
              out[ooff++] = DQT;
              out[ooff++] = 0;
              out[ooff++] = 67;
              out[ooff++] = i;
              for (j = 0; j < 64; j++)
                out[ooff++] = data[off + qtables[i] + j];
            }
            for (k = 0; k < 2; k++) {
              var htables = img[k == 0 ? "t520" : "t521"];
              if (htables == null)
                throw new Error((k == 0 ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
              for (i = 0; i < htables.length; i++) {
                out[ooff++] = 255;
                out[ooff++] = DHT;
                var nc = 19;
                for (j = 0; j < 16; j++)
                  nc += data[off + htables[i] + j];
                out[ooff++] = nc >>> 8;
                out[ooff++] = nc & 255;
                out[ooff++] = i | k << 4;
                for (j = 0; j < 16; j++)
                  out[ooff++] = data[off + htables[i] + j];
                for (j = 0; j < nc; j++)
                  out[ooff++] = data[off + htables[i] + 16 + j];
              }
            }
            out[ooff++] = 255;
            out[ooff++] = SOF0;
            out[ooff++] = 0;
            out[ooff++] = 8 + 3 * spp;
            out[ooff++] = 8;
            out[ooff++] = img.height >>> 8 & 255;
            out[ooff++] = img.height & 255;
            out[ooff++] = img.width >>> 8 & 255;
            out[ooff++] = img.width & 255;
            out[ooff++] = spp;
            if (spp == 1) {
              out[ooff++] = 1;
              out[ooff++] = 17;
              out[ooff++] = 0;
            } else
              for (i = 0; i < 3; i++) {
                out[ooff++] = i + 1;
                out[ooff++] = i != 0 ? 17 : (ssx & 15) << 4 | ssy & 15;
                out[ooff++] = i;
              }
            if (jpgresint != null && jpgresint[0] != 0) {
              out[ooff++] = 255;
              out[ooff++] = DRI;
              out[ooff++] = 0;
              out[ooff++] = 4;
              out[ooff++] = jpgresint[0] >>> 8 & 255;
              out[ooff++] = jpgresint[0] & 255;
            }
            tables = new Uint8Array(out);
          }
          var sofpos = -1;
          i = 0;
          while (i < tables.length - 1) {
            if (tables[i] == 255 && tables[i + 1] == SOF0) {
              sofpos = i;
              break;
            }
            i++;
          }
          if (sofpos == -1) {
            var tmptab = new Uint8Array(tables.length + 10 + 3 * spp);
            tmptab.set(tables);
            var tmpoff = tables.length;
            sofpos = tables.length;
            tables = tmptab;
            tables[tmpoff++] = 255;
            tables[tmpoff++] = SOF0;
            tables[tmpoff++] = 0;
            tables[tmpoff++] = 8 + 3 * spp;
            tables[tmpoff++] = 8;
            tables[tmpoff++] = img.height >>> 8 & 255;
            tables[tmpoff++] = img.height & 255;
            tables[tmpoff++] = img.width >>> 8 & 255;
            tables[tmpoff++] = img.width & 255;
            tables[tmpoff++] = spp;
            if (spp == 1) {
              tables[tmpoff++] = 1;
              tables[tmpoff++] = 17;
              tables[tmpoff++] = 0;
            } else
              for (i = 0; i < 3; i++) {
                tables[tmpoff++] = i + 1;
                tables[tmpoff++] = i != 0 ? 17 : (ssx & 15) << 4 | ssy & 15;
                tables[tmpoff++] = i;
              }
          }
          if (data[soff] == 255 && data[soff + 1] == SOS2) {
            var soslen = data[soff + 2] << 8 | data[soff + 3];
            sosMarker2 = new Uint8Array(soslen + 2);
            sosMarker2[0] = data[soff];
            sosMarker2[1] = data[soff + 1];
            sosMarker2[2] = data[soff + 2];
            sosMarker2[3] = data[soff + 3];
            for (i = 0; i < soslen - 2; i++)
              sosMarker2[i + 4] = data[soff + i + 4];
          } else {
            sosMarker2 = new Uint8Array(2 + 6 + 2 * spp);
            var sosoff = 0;
            sosMarker2[sosoff++] = 255;
            sosMarker2[sosoff++] = SOS2;
            sosMarker2[sosoff++] = 0;
            sosMarker2[sosoff++] = 6 + 2 * spp;
            sosMarker2[sosoff++] = spp;
            if (spp == 1) {
              sosMarker2[sosoff++] = 1;
              sosMarker2[sosoff++] = 0;
            } else
              for (i = 0; i < 3; i++) {
                sosMarker2[sosoff++] = i + 1;
                sosMarker2[sosoff++] = i << 4 | i;
              }
            sosMarker2[sosoff++] = 0;
            sosMarker2[sosoff++] = 63;
            sosMarker2[sosoff++] = 0;
          }
          return { jpegOffset: off, tables, sosMarker: sosMarker2, sofPosition: sofpos };
        };
        UTIF3.decode._decodeOldJPEG = function(img, data, off, len, tgt, toff) {
          var i, dlen, tlen, buff;
          var jpegData = UTIF3.decode._decodeOldJPEGInit(img, data, off, len);
          if (jpegData.jpegOffset != null) {
            dlen = off + len - jpegData.jpegOffset;
            buff = new Uint8Array(dlen);
            for (i = 0; i < dlen; i++)
              buff[i] = data[jpegData.jpegOffset + i];
          } else {
            tlen = jpegData.tables.length;
            buff = new Uint8Array(tlen + jpegData.sosMarker.length + len + 2);
            buff.set(jpegData.tables);
            buff[jpegData.sofPosition + 5] = img.height >>> 8 & 255;
            buff[jpegData.sofPosition + 6] = img.height & 255;
            buff[jpegData.sofPosition + 7] = img.width >>> 8 & 255;
            buff[jpegData.sofPosition + 8] = img.width & 255;
            if (data[off] != 255 || data[off + 1] != SOS) {
              buff.set(jpegData.sosMarker, bufoff);
              bufoff += sosMarker.length;
            }
            for (i = 0; i < len; i++)
              buff[bufoff++] = data[off + i];
            buff[bufoff++] = 255;
            buff[bufoff++] = EOI;
          }
          var parser2 = new UTIF3.JpegDecoder();
          parser2.parse(buff);
          var decoded = parser2.getData(parser2.width, parser2.height);
          for (var i = 0; i < decoded.length; i++)
            tgt[toff + i] = decoded[i];
          if (img["t262"][0] == 6)
            img["t262"][0] = 2;
        };
        UTIF3.decode._decodePackBits = function(data, off, len, tgt, toff) {
          var sa = new Int8Array(data.buffer), ta = new Int8Array(tgt.buffer), lim = off + len;
          while (off < lim) {
            var n = sa[off];
            off++;
            if (n >= 0 && n < 128)
              for (var i = 0; i < n + 1; i++) {
                ta[toff] = sa[off];
                toff++;
                off++;
              }
            if (n >= -127 && n < 0) {
              for (var i = 0; i < -n + 1; i++) {
                ta[toff] = sa[off];
                toff++;
              }
              off++;
            }
          }
        };
        UTIF3.decode._decodeThunder = function(data, off, len, tgt, toff) {
          var d2 = [0, 1, 0, -1], d3 = [0, 1, 2, 3, 0, -3, -2, -1];
          var lim = off + len, qoff = toff * 2, px = 0;
          while (off < lim) {
            var b = data[off], msk = b >>> 6, n = b & 63;
            off++;
            if (msk == 3) {
              px = n & 15;
              tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
              qoff++;
            }
            if (msk == 0)
              for (var i = 0; i < n; i++) {
                tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
                qoff++;
              }
            if (msk == 2)
              for (var i = 0; i < 2; i++) {
                var d = n >>> 3 * (1 - i) & 7;
                if (d != 4) {
                  px += d3[d];
                  tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
                  qoff++;
                }
              }
            if (msk == 1)
              for (var i = 0; i < 3; i++) {
                var d = n >>> 2 * (2 - i) & 3;
                if (d != 2) {
                  px += d2[d];
                  tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
                  qoff++;
                }
              }
          }
        };
        UTIF3.decode._dmap = { "1": 0, "011": 1, "000011": 2, "0000011": 3, "010": -1, "000010": -2, "0000010": -3 };
        UTIF3.decode._lens = function() {
          var addKeys = function(lens, arr, i0, inc) {
            for (var i = 0; i < arr.length; i++)
              lens[arr[i]] = i0 + i * inc;
          };
          var termW = "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100";
          var termB = "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111";
          var makeW = "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011";
          var makeB = "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101";
          var makeA = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
          termW = termW.split(",");
          termB = termB.split(",");
          makeW = makeW.split(",");
          makeB = makeB.split(",");
          makeA = makeA.split(",");
          var lensW = {}, lensB = {};
          addKeys(lensW, termW, 0, 1);
          addKeys(lensW, makeW, 64, 64);
          addKeys(lensW, makeA, 1792, 64);
          addKeys(lensB, termB, 0, 1);
          addKeys(lensB, makeB, 64, 64);
          addKeys(lensB, makeA, 1792, 64);
          return [lensW, lensB];
        }();
        UTIF3.decode._decodeG4 = function(data, off, slen, tgt, toff, w, fo) {
          var U = UTIF3.decode, boff = off << 3, len = 0, wrd = "";
          var line = [], pline = [];
          for (var i = 0; i < w; i++)
            pline.push(0);
          pline = U._makeDiff(pline);
          var a0 = 0, a1 = 0, b1 = 0, b2 = 0, clr = 0;
          var y = 0, mode = "", toRead = 0;
          var bipl = Math.ceil(w / 8) * 8;
          while (boff >>> 3 < off + slen) {
            b1 = U._findDiff(pline, a0 + (a0 == 0 ? 0 : 1), 1 - clr), b2 = U._findDiff(pline, b1, clr);
            var bit = 0;
            if (fo == 1)
              bit = data[boff >>> 3] >>> 7 - (boff & 7) & 1;
            if (fo == 2)
              bit = data[boff >>> 3] >>> (boff & 7) & 1;
            boff++;
            wrd += bit;
            if (mode == "H") {
              if (U._lens[clr][wrd] != null) {
                var dl = U._lens[clr][wrd];
                wrd = "";
                len += dl;
                if (dl < 64) {
                  U._addNtimes(line, len, clr);
                  a0 += len;
                  clr = 1 - clr;
                  len = 0;
                  toRead--;
                  if (toRead == 0)
                    mode = "";
                }
              }
            } else {
              if (wrd == "0001") {
                wrd = "";
                U._addNtimes(line, b2 - a0, clr);
                a0 = b2;
              }
              if (wrd == "001") {
                wrd = "";
                mode = "H";
                toRead = 2;
              }
              if (U._dmap[wrd] != null) {
                a1 = b1 + U._dmap[wrd];
                U._addNtimes(line, a1 - a0, clr);
                a0 = a1;
                wrd = "";
                clr = 1 - clr;
              }
            }
            if (line.length == w && mode == "") {
              U._writeBits(line, tgt, toff * 8 + y * bipl);
              clr = 0;
              y++;
              a0 = 0;
              pline = U._makeDiff(line);
              line = [];
            }
          }
        };
        UTIF3.decode._findDiff = function(line, x, clr) {
          for (var i = 0; i < line.length; i += 2)
            if (line[i] >= x && line[i + 1] == clr)
              return line[i];
        };
        UTIF3.decode._makeDiff = function(line) {
          var out = [];
          if (line[0] == 1)
            out.push(0, 1);
          for (var i = 1; i < line.length; i++)
            if (line[i - 1] != line[i])
              out.push(i, line[i]);
          out.push(line.length, 0, line.length, 1);
          return out;
        };
        UTIF3.decode._decodeG3 = function(data, off, slen, tgt, toff, w, fo) {
          var U = UTIF3.decode, boff = off << 3, len = 0, wrd = "";
          var line = [], pline = [];
          for (var i = 0; i < w; i++)
            line.push(0);
          var a0 = 0, a1 = 0, b1 = 0, b2 = 0, clr = 0;
          var y = -1, mode = "", toRead = 0, is1D = false;
          var bipl = Math.ceil(w / 8) * 8;
          while (boff >>> 3 < off + slen) {
            b1 = U._findDiff(pline, a0 + (a0 == 0 ? 0 : 1), 1 - clr), b2 = U._findDiff(pline, b1, clr);
            var bit = 0;
            if (fo == 1)
              bit = data[boff >>> 3] >>> 7 - (boff & 7) & 1;
            if (fo == 2)
              bit = data[boff >>> 3] >>> (boff & 7) & 1;
            boff++;
            wrd += bit;
            if (is1D) {
              if (U._lens[clr][wrd] != null) {
                var dl = U._lens[clr][wrd];
                wrd = "";
                len += dl;
                if (dl < 64) {
                  U._addNtimes(line, len, clr);
                  clr = 1 - clr;
                  len = 0;
                }
              }
            } else {
              if (mode == "H") {
                if (U._lens[clr][wrd] != null) {
                  var dl = U._lens[clr][wrd];
                  wrd = "";
                  len += dl;
                  if (dl < 64) {
                    U._addNtimes(line, len, clr);
                    a0 += len;
                    clr = 1 - clr;
                    len = 0;
                    toRead--;
                    if (toRead == 0)
                      mode = "";
                  }
                }
              } else {
                if (wrd == "0001") {
                  wrd = "";
                  U._addNtimes(line, b2 - a0, clr);
                  a0 = b2;
                }
                if (wrd == "001") {
                  wrd = "";
                  mode = "H";
                  toRead = 2;
                }
                if (U._dmap[wrd] != null) {
                  a1 = b1 + U._dmap[wrd];
                  U._addNtimes(line, a1 - a0, clr);
                  a0 = a1;
                  wrd = "";
                  clr = 1 - clr;
                }
              }
            }
            if (wrd.endsWith("000000000001")) {
              if (y >= 0)
                U._writeBits(line, tgt, toff * 8 + y * bipl);
              if (fo == 1)
                is1D = (data[boff >>> 3] >>> 7 - (boff & 7) & 1) == 1;
              if (fo == 2)
                is1D = (data[boff >>> 3] >>> (boff & 7) & 1) == 1;
              boff++;
              if (U._decodeG3.allow2D == null)
                U._decodeG3.allow2D = is1D;
              if (!U._decodeG3.allow2D) {
                is1D = true;
                boff--;
              }
              wrd = "";
              clr = 0;
              y++;
              a0 = 0;
              pline = U._makeDiff(line);
              line = [];
            }
          }
          if (line.length == w)
            U._writeBits(line, tgt, toff * 8 + y * bipl);
        };
        UTIF3.decode._addNtimes = function(arr, n, val) {
          for (var i = 0; i < n; i++)
            arr.push(val);
        };
        UTIF3.decode._writeBits = function(bits, tgt, boff) {
          for (var i = 0; i < bits.length; i++)
            tgt[boff + i >>> 3] |= bits[i] << 7 - (boff + i & 7);
        };
        UTIF3.decode._decodeLZW = function(data, off, tgt, toff) {
          if (UTIF3.decode._lzwTab == null) {
            var tb = new Uint32Array(65535), tn = new Uint16Array(65535), chr = new Uint8Array(2e6);
            for (var i = 0; i < 256; i++) {
              chr[i << 2] = i;
              tb[i] = i << 2;
              tn[i] = 1;
            }
            UTIF3.decode._lzwTab = [tb, tn, chr];
          }
          var copy = UTIF3.decode._copyData;
          var tab = UTIF3.decode._lzwTab[0], tln = UTIF3.decode._lzwTab[1], chr = UTIF3.decode._lzwTab[2], totl = 258, chrl = 258 << 2;
          var bits = 9, boff = off << 3;
          var ClearCode = 256, EoiCode = 257;
          var v = 0, Code = 0, OldCode = 0;
          while (true) {
            v = data[boff >>> 3] << 16 | data[boff + 8 >>> 3] << 8 | data[boff + 16 >>> 3];
            Code = v >> 24 - (boff & 7) - bits & (1 << bits) - 1;
            boff += bits;
            if (Code == EoiCode)
              break;
            if (Code == ClearCode) {
              bits = 9;
              totl = 258;
              chrl = 258 << 2;
              v = data[boff >>> 3] << 16 | data[boff + 8 >>> 3] << 8 | data[boff + 16 >>> 3];
              Code = v >> 24 - (boff & 7) - bits & (1 << bits) - 1;
              boff += bits;
              if (Code == EoiCode)
                break;
              tgt[toff] = Code;
              toff++;
            } else if (Code < totl) {
              var cd = tab[Code], cl = tln[Code];
              copy(chr, cd, tgt, toff, cl);
              toff += cl;
              if (OldCode >= totl) {
                tab[totl] = chrl;
                chr[tab[totl]] = cd[0];
                tln[totl] = 1;
                chrl = chrl + 1 + 3 & ~3;
                totl++;
              } else {
                tab[totl] = chrl;
                var nit = tab[OldCode], nil = tln[OldCode];
                copy(chr, nit, chr, chrl, nil);
                chr[chrl + nil] = chr[cd];
                nil++;
                tln[totl] = nil;
                totl++;
                chrl = chrl + nil + 3 & ~3;
              }
              if (totl + 1 == 1 << bits)
                bits++;
            } else {
              if (OldCode >= totl) {
                tab[totl] = chrl;
                tln[totl] = 0;
                totl++;
              } else {
                tab[totl] = chrl;
                var nit = tab[OldCode], nil = tln[OldCode];
                copy(chr, nit, chr, chrl, nil);
                chr[chrl + nil] = chr[chrl];
                nil++;
                tln[totl] = nil;
                totl++;
                copy(chr, chrl, tgt, toff, nil);
                toff += nil;
                chrl = chrl + nil + 3 & ~3;
              }
              if (totl + 1 == 1 << bits)
                bits++;
            }
            OldCode = Code;
          }
        };
        UTIF3.decode._copyData = function(s, so, t, to, l) {
          for (var i = 0; i < l; i += 4) {
            t[to + i] = s[so + i];
            t[to + i + 1] = s[so + i + 1];
            t[to + i + 2] = s[so + i + 2];
            t[to + i + 3] = s[so + i + 3];
          }
        };
        UTIF3.tags = {
          254: "NewSubfileType",
          255: "SubfileType",
          256: "ImageWidth",
          257: "ImageLength",
          258: "BitsPerSample",
          259: "Compression",
          262: "PhotometricInterpretation",
          266: "FillOrder",
          269: "DocumentName",
          270: "ImageDescription",
          271: "Make",
          272: "Model",
          273: "StripOffset",
          274: "Orientation",
          277: "SamplesPerPixel",
          278: "RowsPerStrip",
          279: "StripByteCounts",
          280: "MinSampleValue",
          281: "MaxSampleValue",
          282: "XResolution",
          283: "YResolution",
          284: "PlanarConfiguration",
          285: "PageName",
          286: "XPosition",
          287: "YPosition",
          292: "T4Options",
          296: "ResolutionUnit",
          297: "PageNumber",
          305: "Software",
          306: "DateTime",
          315: "Artist",
          316: "HostComputer",
          317: "Predictor",
          318: "WhitePoint",
          319: "PrimaryChromaticities",
          320: "ColorMap",
          321: "HalftoneHints",
          322: "TileWidth",
          323: "TileLength",
          324: "TileOffset",
          325: "TileByteCounts",
          330: "SubIFDs",
          336: "DotRange",
          338: "ExtraSample",
          339: "SampleFormat",
          347: "JPEGTables",
          512: "JPEGProc",
          513: "JPEGInterchangeFormat",
          514: "JPEGInterchangeFormatLength",
          519: "JPEGQTables",
          520: "JPEGDCTables",
          521: "JPEGACTables",
          529: "YCbCrCoefficients",
          530: "YCbCrSubSampling",
          531: "YCbCrPositioning",
          532: "ReferenceBlackWhite",
          700: "XMP",
          33421: "CFARepeatPatternDim",
          33422: "CFAPattern",
          33432: "Copyright",
          33434: "ExposureTime",
          33437: "FNumber",
          33723: "IPTC/NAA",
          34377: "Photoshop",
          34665: "ExifIFD",
          34675: "ICC Profile",
          34850: "ExposureProgram",
          34853: "GPSInfo",
          34855: "ISOSpeedRatings",
          34858: "TimeZoneOffset",
          34859: "SelfTimeMode",
          36867: "DateTimeOriginal",
          36868: "DateTimeDigitized",
          37377: "ShutterSpeedValue",
          37378: "ApertureValue",
          37380: "ExposureBiasValue",
          37383: "MeteringMode",
          37385: "Flash",
          37386: "FocalLength",
          37390: "FocalPlaneXResolution",
          37391: "FocalPlaneYResolution",
          37392: "FocalPlaneResolutionUnit",
          37393: "ImageNumber",
          37398: "TIFF/EPStandardID",
          37399: "SensingMethod",
          37500: "MakerNote",
          37510: "UserComment",
          37724: "ImageSourceData",
          40092: "XPComment",
          40094: "XPKeywords",
          40961: "ColorSpace",
          40962: "PixelXDimension",
          40963: "PixelXDimension",
          41486: "FocalPlaneXResolution",
          41487: "FocalPlaneYResolution",
          41488: "FocalPlaneResolutionUnit",
          41985: "CustomRendered",
          41986: "ExposureMode",
          41987: "WhiteBalance",
          41990: "SceneCaptureType",
          50706: "DNGVersion",
          50707: "DNGBackwardVersion",
          50708: "UniqueCameraModel",
          50709: "LocalizedCameraModel",
          50710: "CFAPlaneColor",
          50711: "CFALayout",
          50712: "LinearizationTable",
          50713: "BlackLevelRepeatDim",
          50714: "BlackLevel",
          50716: "BlackLevelDeltaV",
          50717: "WhiteLevel",
          50718: "DefaultScale",
          50719: "DefaultCropOrigin",
          50720: "DefaultCropSize",
          50733: "BayerGreenSplit",
          50738: "AntiAliasStrength",
          50721: "ColorMatrix1",
          50722: "ColorMatrix2",
          50723: "CameraCalibration1",
          50724: "CameraCalibration2",
          50727: "AnalogBalance",
          50728: "AsShotNeutral",
          50730: "BaselineExposure",
          50731: "BaselineNoise",
          50732: "BaselineSharpness",
          50734: "LinearResponseLimit",
          50735: "CameraSerialNumber",
          50736: "LensInfo",
          50739: "ShadowScale",
          50740: "DNGPrivateData",
          50741: "MakerNoteSafety",
          50778: "CalibrationIlluminant1",
          50779: "CalibrationIlluminant2",
          50780: "BestQualityScale",
          50781: "RawDataUniqueID",
          50827: "OriginalRawFileName",
          50829: "ActiveArea",
          50830: "MaskedAreas",
          50931: "CameraCalibrationSignature",
          50932: "ProfileCalibrationSignature",
          50935: "NoiseReductionApplied",
          50936: "ProfileName",
          50937: "ProfileHueSatMapDims",
          50938: "ProfileHueSatMapData1",
          50939: "ProfileHueSatMapData2",
          50940: "ProfileToneCurve",
          50941: "ProfileEmbedPolicy",
          50942: "ProfileCopyright",
          50964: "ForwardMatrix1",
          50965: "ForwardMatrix2",
          50966: "PreviewApplicationName",
          50967: "PreviewApplicationVersion",
          50969: "PreviewSettingsDigest",
          50970: "PreviewColorSpace",
          50971: "PreviewDateTime",
          50972: "RawImageDigest",
          51008: "OpcodeList1",
          51009: "OpcodeList2",
          51022: "OpcodeList3",
          51041: "NoiseProfile",
          51089: "OriginalDefaultFinalSize",
          51090: "OriginalBestQualityFinalSize",
          51091: "OriginalDefaultCropSize",
          51125: "DefaultUserCrop"
        };
        UTIF3.ttypes = { 256: 3, 257: 3, 258: 3, 259: 3, 262: 3, 273: 4, 274: 3, 277: 3, 278: 4, 279: 4, 282: 5, 283: 5, 284: 3, 286: 5, 287: 5, 296: 3, 305: 2, 306: 2, 338: 3, 513: 4, 514: 4, 34665: 4 };
        UTIF3._readIFD = function(bin, data, offset, ifds) {
          var cnt = bin.readUshort(data, offset);
          offset += 2;
          var ifd = {};
          ifds.push(ifd);
          for (var i = 0; i < cnt; i++) {
            var tag = bin.readUshort(data, offset);
            offset += 2;
            var type = bin.readUshort(data, offset);
            offset += 2;
            var num = bin.readUint(data, offset);
            offset += 4;
            var voff = bin.readUint(data, offset);
            offset += 4;
            var arr = [];
            ifd["t" + tag] = arr;
            if (type == 1 || type == 7) {
              for (var j = 0; j < num; j++)
                arr.push(data[(num < 5 ? offset - 4 : voff) + j]);
            }
            if (type == 2) {
              arr.push(bin.readASCII(data, num < 5 ? offset - 4 : voff, num - 1));
            }
            if (type == 3) {
              for (var j = 0; j < num; j++)
                arr.push(bin.readUshort(data, (num < 3 ? offset - 4 : voff) + 2 * j));
            }
            if (type == 4) {
              for (var j = 0; j < num; j++)
                arr.push(bin.readUint(data, (num < 2 ? offset - 4 : voff) + 4 * j));
            }
            if (type == 5) {
              for (var j = 0; j < num; j++)
                arr.push(bin.readUint(data, voff + j * 8) / bin.readUint(data, voff + j * 8 + 4));
            }
            if (type == 8) {
              for (var j = 0; j < num; j++)
                arr.push(bin.readShort(data, (num < 3 ? offset - 4 : voff) + 2 * j));
            }
            if (type == 9) {
              for (var j = 0; j < num; j++)
                arr.push(bin.readInt(data, (num < 2 ? offset - 4 : voff) + 4 * j));
            }
            if (type == 10) {
              for (var j = 0; j < num; j++)
                arr.push(bin.readInt(data, voff + j * 8) / bin.readInt(data, voff + j * 8 + 4));
            }
            if (type == 11) {
              for (var j = 0; j < num; j++)
                arr.push(bin.readFloat(data, voff + j * 4));
            }
            if (type == 12) {
              for (var j = 0; j < num; j++)
                arr.push(bin.readDouble(data, voff + j * 8));
            }
            if (num != 0 && arr.length == 0)
              log("unknown TIFF tag type: ", type, "num:", num);
            if (tag == 330)
              for (var j = 0; j < num; j++)
                UTIF3._readIFD(bin, data, arr[j], ifds);
          }
          return offset;
        };
        UTIF3._writeIFD = function(bin, data, offset, ifd) {
          var keys = Object.keys(ifd);
          bin.writeUshort(data, offset, keys.length);
          offset += 2;
          var eoff = offset + keys.length * 12 + 4;
          for (var ki = 0; ki < keys.length; ki++) {
            var key = keys[ki];
            var tag = parseInt(key.slice(1)), type = UTIF3.ttypes[tag];
            if (type == null)
              throw new Error("unknown type of tag: " + tag);
            var val = ifd[key];
            if (type == 2)
              val = val[0] + "\0";
            var num = val.length;
            bin.writeUshort(data, offset, tag);
            offset += 2;
            bin.writeUshort(data, offset, type);
            offset += 2;
            bin.writeUint(data, offset, num);
            offset += 4;
            var dlen = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][type] * num;
            var toff = offset;
            if (dlen > 4) {
              bin.writeUint(data, offset, eoff);
              toff = eoff;
            }
            if (type == 2) {
              bin.writeASCII(data, toff, val);
            }
            if (type == 3) {
              for (var i = 0; i < num; i++)
                bin.writeUshort(data, toff + 2 * i, val[i]);
            }
            if (type == 4) {
              for (var i = 0; i < num; i++)
                bin.writeUint(data, toff + 4 * i, val[i]);
            }
            if (type == 5) {
              for (var i = 0; i < num; i++) {
                bin.writeUint(data, toff + 8 * i, Math.round(val[i] * 1e4));
                bin.writeUint(data, toff + 8 * i + 4, 1e4);
              }
            }
            if (type == 12) {
              for (var i = 0; i < num; i++)
                bin.writeDouble(data, toff + 8 * i, val[i]);
            }
            if (dlen > 4) {
              dlen += dlen & 1;
              eoff += dlen;
            }
            offset += 4;
          }
          return [offset, eoff];
        };
        UTIF3.toRGBA8 = function(out) {
          var w = out.width, h = out.height, area = w * h, qarea = area * 4, data = out.data;
          var img = new Uint8Array(area * 4);
          var intp = out["t262"][0], bps = out["t258"] ? Math.min(32, out["t258"][0]) : 1, isLE = out.isLE ? 1 : 0;
          if (intp == 0) {
            var bpl = Math.ceil(bps * w / 8);
            for (var y = 0; y < h; y++) {
              var off = y * bpl, io = y * w;
              if (bps == 1)
                for (var i = 0; i < w; i++) {
                  var qi = io + i << 2, px = data[off + (i >> 3)] >> 7 - (i & 7) & 1;
                  img[qi] = img[qi + 1] = img[qi + 2] = (1 - px) * 255;
                  img[qi + 3] = 255;
                }
              if (bps == 4)
                for (var i = 0; i < w; i++) {
                  var qi = io + i << 2, px = data[off + (i >> 1)] >> 4 - 4 * (i & 1) & 15;
                  img[qi] = img[qi + 1] = img[qi + 2] = (15 - px) * 17;
                  img[qi + 3] = 255;
                }
              if (bps == 8)
                for (var i = 0; i < w; i++) {
                  var qi = io + i << 2, px = data[off + i];
                  img[qi] = img[qi + 1] = img[qi + 2] = 255 - px;
                  img[qi + 3] = 255;
                }
            }
          } else if (intp == 1) {
            var bpl = Math.ceil(bps * w / 8);
            for (var y = 0; y < h; y++) {
              var off = y * bpl, io = y * w;
              if (bps == 1)
                for (var i = 0; i < w; i++) {
                  var qi = io + i << 2, px = data[off + (i >> 3)] >> 7 - (i & 7) & 1;
                  img[qi] = img[qi + 1] = img[qi + 2] = px * 255;
                  img[qi + 3] = 255;
                }
              if (bps == 2)
                for (var i = 0; i < w; i++) {
                  var qi = io + i << 2, px = data[off + (i >> 2)] >> 6 - 2 * (i & 3) & 3;
                  img[qi] = img[qi + 1] = img[qi + 2] = px * 85;
                  img[qi + 3] = 255;
                }
              if (bps == 8)
                for (var i = 0; i < w; i++) {
                  var qi = io + i << 2, px = data[off + i];
                  img[qi] = img[qi + 1] = img[qi + 2] = px;
                  img[qi + 3] = 255;
                }
              if (bps == 16)
                for (var i = 0; i < w; i++) {
                  var qi = io + i << 2, px = data[off + (2 * i + isLE)];
                  img[qi] = img[qi + 1] = img[qi + 2] = Math.min(255, px);
                  img[qi + 3] = 255;
                }
            }
          } else if (intp == 2) {
            if (bps == 8) {
              if (out["t338"]) {
                if (out["t338"][0] > 0)
                  for (var i = 0; i < qarea; i++)
                    img[i] = data[i];
                else
                  for (var i = 0; i < qarea; i += 4) {
                    img[i] = data[i];
                    img[i + 1] = data[i + 1];
                    img[i + 2] = data[i + 2];
                    img[i + 3] = 255;
                  }
              } else {
                var smpls = out["t258"] ? out["t258"].length : 3;
                if (smpls == 4)
                  for (var i = 0; i < qarea; i++)
                    img[i] = data[i];
                if (smpls == 3)
                  for (var i = 0; i < area; i++) {
                    var qi = i << 2, ti = i * 3;
                    img[qi] = data[ti];
                    img[qi + 1] = data[ti + 1];
                    img[qi + 2] = data[ti + 2];
                    img[qi + 3] = 255;
                  }
              }
            } else
              for (var i = 0; i < area; i++) {
                var qi = i << 2, ti = i * 6;
                img[qi] = data[ti];
                img[qi + 1] = data[ti + 2];
                img[qi + 2] = data[ti + 4];
                img[qi + 3] = 255;
              }
          } else if (intp == 3) {
            var map = out["t320"];
            for (var i = 0; i < area; i++) {
              var qi = i << 2, mi = data[i];
              img[qi] = map[mi] >> 8;
              img[qi + 1] = map[256 + mi] >> 8;
              img[qi + 2] = map[512 + mi] >> 8;
              img[qi + 3] = 255;
            }
          } else if (intp == 5) {
            var smpls = out["t258"] ? out["t258"].length : 4;
            var gotAlpha = smpls > 4 ? 1 : 0;
            for (var i = 0; i < area; i++) {
              var qi = i << 2, si = i * smpls;
              var C = 255 - data[si], M = 255 - data[si + 1], Y = 255 - data[si + 2], K = (255 - data[si + 3]) * (1 / 255);
              img[qi] = ~~(C * K + 0.5);
              img[qi + 1] = ~~(M * K + 0.5);
              img[qi + 2] = ~~(Y * K + 0.5);
              img[qi + 3] = 255 * (1 - gotAlpha) + data[si + 4] * gotAlpha;
            }
          } else
            log("Unknown Photometric interpretation: " + intp);
          return img;
        };
        UTIF3.replaceIMG = function() {
          var imgs = document.getElementsByTagName("img");
          for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i], src2 = img.getAttribute("src");
            if (src2 == null)
              continue;
            var suff = src2.split(".").pop().toLowerCase();
            if (suff != "tif" && suff != "tiff")
              continue;
            var xhr2 = new XMLHttpRequest();
            UTIF3._xhrs.push(xhr2);
            UTIF3._imgs.push(img);
            xhr2.open("GET", src2);
            xhr2.responseType = "arraybuffer";
            xhr2.onload = UTIF3._imgLoaded;
            xhr2.send();
          }
        };
        UTIF3._xhrs = [];
        UTIF3._imgs = [];
        UTIF3._imgLoaded = function(e) {
          var buff = e.target.response;
          var ifds = UTIF3.decode(buff), page = ifds[0];
          UTIF3.decodeImages(buff, ifds);
          var rgba = UTIF3.toRGBA8(page), w = page.width, h = page.height;
          var ind = UTIF3._xhrs.indexOf(e.target), img = UTIF3._imgs[ind];
          UTIF3._xhrs.splice(ind, 1);
          UTIF3._imgs.splice(ind, 1);
          var cnv = document.createElement("canvas");
          cnv.width = w;
          cnv.height = h;
          var ctx = cnv.getContext("2d"), imgd = ctx.createImageData(w, h);
          for (var i = 0; i < rgba.length; i++)
            imgd.data[i] = rgba[i];
          ctx.putImageData(imgd, 0, 0);
          var attr = ["style", "class", "id"];
          for (var i = 0; i < attr.length; i++)
            cnv.setAttribute(attr[i], img.getAttribute(attr[i]));
          img.parentNode.replaceChild(cnv, img);
        };
        UTIF3._binBE = {
          nextZero: function(data, o) {
            while (data[o] != 0)
              o++;
            return o;
          },
          readUshort: function(buff, p) {
            return buff[p] << 8 | buff[p + 1];
          },
          readShort: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            a[0] = buff[p + 1];
            a[1] = buff[p + 0];
            return UTIF3._binBE.i16[0];
          },
          readInt: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            a[0] = buff[p + 3];
            a[1] = buff[p + 2];
            a[2] = buff[p + 1];
            a[3] = buff[p + 0];
            return UTIF3._binBE.i32[0];
          },
          readUint: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            a[0] = buff[p + 3];
            a[1] = buff[p + 2];
            a[2] = buff[p + 1];
            a[3] = buff[p + 0];
            return UTIF3._binBE.ui32[0];
          },
          readASCII: function(buff, p, l) {
            var s = "";
            for (var i = 0; i < l; i++)
              s += String.fromCharCode(buff[p + i]);
            return s;
          },
          readFloat: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            for (var i = 0; i < 4; i++)
              a[i] = buff[p + 3 - i];
            return UTIF3._binBE.fl32[0];
          },
          readDouble: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            for (var i = 0; i < 8; i++)
              a[i] = buff[p + 7 - i];
            return UTIF3._binBE.fl64[0];
          },
          writeUshort: function(buff, p, n) {
            buff[p] = n >> 8 & 255;
            buff[p + 1] = n & 255;
          },
          writeUint: function(buff, p, n) {
            buff[p] = n >> 24 & 255;
            buff[p + 1] = n >> 16 & 255;
            buff[p + 2] = n >> 8 & 255;
            buff[p + 3] = n >> 0 & 255;
          },
          writeASCII: function(buff, p, s) {
            for (var i = 0; i < s.length; i++)
              buff[p + i] = s.charCodeAt(i);
          },
          writeDouble: function(buff, p, n) {
            UTIF3._binBE.fl64[0] = n;
            for (var i = 0; i < 8; i++)
              buff[p + i] = UTIF3._binBE.ui8[7 - i];
          }
        };
        UTIF3._binBE.ui8 = new Uint8Array(8);
        UTIF3._binBE.i16 = new Int16Array(UTIF3._binBE.ui8.buffer);
        UTIF3._binBE.i32 = new Int32Array(UTIF3._binBE.ui8.buffer);
        UTIF3._binBE.ui32 = new Uint32Array(UTIF3._binBE.ui8.buffer);
        UTIF3._binBE.fl32 = new Float32Array(UTIF3._binBE.ui8.buffer);
        UTIF3._binBE.fl64 = new Float64Array(UTIF3._binBE.ui8.buffer);
        UTIF3._binLE = {
          nextZero: UTIF3._binBE.nextZero,
          readUshort: function(buff, p) {
            return buff[p + 1] << 8 | buff[p];
          },
          readShort: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            a[0] = buff[p + 0];
            a[1] = buff[p + 1];
            return UTIF3._binBE.i16[0];
          },
          readInt: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            a[0] = buff[p + 0];
            a[1] = buff[p + 1];
            a[2] = buff[p + 2];
            a[3] = buff[p + 3];
            return UTIF3._binBE.i32[0];
          },
          readUint: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            a[0] = buff[p + 0];
            a[1] = buff[p + 1];
            a[2] = buff[p + 2];
            a[3] = buff[p + 3];
            return UTIF3._binBE.ui32[0];
          },
          readASCII: UTIF3._binBE.readASCII,
          readFloat: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            for (var i = 0; i < 4; i++)
              a[i] = buff[p + i];
            return UTIF3._binBE.fl32[0];
          },
          readDouble: function(buff, p) {
            var a = UTIF3._binBE.ui8;
            for (var i = 0; i < 8; i++)
              a[i] = buff[p + i];
            return UTIF3._binBE.fl64[0];
          }
        };
        UTIF3._copyTile = function(tb, tw, th, b, w, h, xoff, yoff) {
          var xlim = Math.min(tw, w - xoff);
          var ylim = Math.min(th, h - yoff);
          for (var y = 0; y < ylim; y++) {
            var tof = (yoff + y) * w + xoff;
            var sof = y * tw;
            for (var x = 0; x < xlim; x++)
              b[tof + x] = tb[sof + x];
          }
        };
      })(UTIF2, pako);
    })();
  })(UTIF);
  return UTIF.exports;
}
var hasRequiredEs$o;
function requireEs$o() {
  if (hasRequiredEs$o)
    return es$n;
  hasRequiredEs$o = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _defineProperty2 = _interopRequireDefault(require$$1$1);
    var _utif = _interopRequireDefault(requireUTIF());
    var MIME_TYPE = "image/tiff";
    var _default = function _default2() {
      return {
        mime: (0, _defineProperty2["default"])({}, MIME_TYPE, ["tiff", "tif"]),
        constants: {
          MIME_TIFF: MIME_TYPE
        },
        decoders: (0, _defineProperty2["default"])({}, MIME_TYPE, function(data) {
          var ifds = _utif["default"].decode(data);
          var page = ifds[0];
          _utif["default"].decodeImages(data, ifds);
          var rgba = _utif["default"].toRGBA8(page);
          return {
            data: Buffer.from(rgba),
            width: page.t256[0],
            height: page.t257[0]
          };
        }),
        encoders: (0, _defineProperty2["default"])({}, MIME_TYPE, function(image) {
          var tiff = _utif["default"].encodeImage(image.bitmap.data, image.bitmap.width, image.bitmap.height);
          return Buffer.from(tiff);
        })
      };
    };
    exports["default"] = _default;
  })(es$n);
  return es$n;
}
var es$m = {};
var omggif = {};
var hasRequiredOmggif;
function requireOmggif() {
  if (hasRequiredOmggif)
    return omggif;
  hasRequiredOmggif = 1;
  function GifWriter(buf, width, height, gopts) {
    var p = 0;
    var gopts = gopts === void 0 ? {} : gopts;
    var loop_count = gopts.loop === void 0 ? null : gopts.loop;
    var global_palette = gopts.palette === void 0 ? null : gopts.palette;
    if (width <= 0 || height <= 0 || width > 65535 || height > 65535)
      throw new Error("Width/Height invalid.");
    function check_palette_and_num_colors(palette) {
      var num_colors = palette.length;
      if (num_colors < 2 || num_colors > 256 || num_colors & num_colors - 1) {
        throw new Error(
          "Invalid code/color length, must be power of 2 and 2 .. 256."
        );
      }
      return num_colors;
    }
    buf[p++] = 71;
    buf[p++] = 73;
    buf[p++] = 70;
    buf[p++] = 56;
    buf[p++] = 57;
    buf[p++] = 97;
    var gp_num_colors_pow2 = 0;
    var background = 0;
    if (global_palette !== null) {
      var gp_num_colors = check_palette_and_num_colors(global_palette);
      while (gp_num_colors >>= 1)
        ++gp_num_colors_pow2;
      gp_num_colors = 1 << gp_num_colors_pow2;
      --gp_num_colors_pow2;
      if (gopts.background !== void 0) {
        background = gopts.background;
        if (background >= gp_num_colors)
          throw new Error("Background index out of range.");
        if (background === 0)
          throw new Error("Background index explicitly passed as 0.");
      }
    }
    buf[p++] = width & 255;
    buf[p++] = width >> 8 & 255;
    buf[p++] = height & 255;
    buf[p++] = height >> 8 & 255;
    buf[p++] = (global_palette !== null ? 128 : 0) | // Global Color Table Flag.
    gp_num_colors_pow2;
    buf[p++] = background;
    buf[p++] = 0;
    if (global_palette !== null) {
      for (var i = 0, il = global_palette.length; i < il; ++i) {
        var rgb = global_palette[i];
        buf[p++] = rgb >> 16 & 255;
        buf[p++] = rgb >> 8 & 255;
        buf[p++] = rgb & 255;
      }
    }
    if (loop_count !== null) {
      if (loop_count < 0 || loop_count > 65535)
        throw new Error("Loop count invalid.");
      buf[p++] = 33;
      buf[p++] = 255;
      buf[p++] = 11;
      buf[p++] = 78;
      buf[p++] = 69;
      buf[p++] = 84;
      buf[p++] = 83;
      buf[p++] = 67;
      buf[p++] = 65;
      buf[p++] = 80;
      buf[p++] = 69;
      buf[p++] = 50;
      buf[p++] = 46;
      buf[p++] = 48;
      buf[p++] = 3;
      buf[p++] = 1;
      buf[p++] = loop_count & 255;
      buf[p++] = loop_count >> 8 & 255;
      buf[p++] = 0;
    }
    var ended = false;
    this.addFrame = function(x, y, w, h, indexed_pixels, opts) {
      if (ended === true) {
        --p;
        ended = false;
      }
      opts = opts === void 0 ? {} : opts;
      if (x < 0 || y < 0 || x > 65535 || y > 65535)
        throw new Error("x/y invalid.");
      if (w <= 0 || h <= 0 || w > 65535 || h > 65535)
        throw new Error("Width/Height invalid.");
      if (indexed_pixels.length < w * h)
        throw new Error("Not enough pixels for the frame size.");
      var using_local_palette = true;
      var palette = opts.palette;
      if (palette === void 0 || palette === null) {
        using_local_palette = false;
        palette = global_palette;
      }
      if (palette === void 0 || palette === null)
        throw new Error("Must supply either a local or global palette.");
      var num_colors = check_palette_and_num_colors(palette);
      var min_code_size = 0;
      while (num_colors >>= 1)
        ++min_code_size;
      num_colors = 1 << min_code_size;
      var delay = opts.delay === void 0 ? 0 : opts.delay;
      var disposal = opts.disposal === void 0 ? 0 : opts.disposal;
      if (disposal < 0 || disposal > 3)
        throw new Error("Disposal out of range.");
      var use_transparency = false;
      var transparent_index = 0;
      if (opts.transparent !== void 0 && opts.transparent !== null) {
        use_transparency = true;
        transparent_index = opts.transparent;
        if (transparent_index < 0 || transparent_index >= num_colors)
          throw new Error("Transparent color index.");
      }
      if (disposal !== 0 || use_transparency || delay !== 0) {
        buf[p++] = 33;
        buf[p++] = 249;
        buf[p++] = 4;
        buf[p++] = disposal << 2 | (use_transparency === true ? 1 : 0);
        buf[p++] = delay & 255;
        buf[p++] = delay >> 8 & 255;
        buf[p++] = transparent_index;
        buf[p++] = 0;
      }
      buf[p++] = 44;
      buf[p++] = x & 255;
      buf[p++] = x >> 8 & 255;
      buf[p++] = y & 255;
      buf[p++] = y >> 8 & 255;
      buf[p++] = w & 255;
      buf[p++] = w >> 8 & 255;
      buf[p++] = h & 255;
      buf[p++] = h >> 8 & 255;
      buf[p++] = using_local_palette === true ? 128 | min_code_size - 1 : 0;
      if (using_local_palette === true) {
        for (var i2 = 0, il2 = palette.length; i2 < il2; ++i2) {
          var rgb2 = palette[i2];
          buf[p++] = rgb2 >> 16 & 255;
          buf[p++] = rgb2 >> 8 & 255;
          buf[p++] = rgb2 & 255;
        }
      }
      p = GifWriterOutputLZWCodeStream(
        buf,
        p,
        min_code_size < 2 ? 2 : min_code_size,
        indexed_pixels
      );
      return p;
    };
    this.end = function() {
      if (ended === false) {
        buf[p++] = 59;
        ended = true;
      }
      return p;
    };
    this.getOutputBuffer = function() {
      return buf;
    };
    this.setOutputBuffer = function(v) {
      buf = v;
    };
    this.getOutputBufferPosition = function() {
      return p;
    };
    this.setOutputBufferPosition = function(v) {
      p = v;
    };
  }
  function GifWriterOutputLZWCodeStream(buf, p, min_code_size, index_stream) {
    buf[p++] = min_code_size;
    var cur_subblock = p++;
    var clear_code = 1 << min_code_size;
    var code_mask = clear_code - 1;
    var eoi_code = clear_code + 1;
    var next_code = eoi_code + 1;
    var cur_code_size = min_code_size + 1;
    var cur_shift = 0;
    var cur = 0;
    function emit_bytes_to_buffer(bit_block_size) {
      while (cur_shift >= bit_block_size) {
        buf[p++] = cur & 255;
        cur >>= 8;
        cur_shift -= 8;
        if (p === cur_subblock + 256) {
          buf[cur_subblock] = 255;
          cur_subblock = p++;
        }
      }
    }
    function emit_code(c) {
      cur |= c << cur_shift;
      cur_shift += cur_code_size;
      emit_bytes_to_buffer(8);
    }
    var ib_code = index_stream[0] & code_mask;
    var code_table = {};
    emit_code(clear_code);
    for (var i = 1, il = index_stream.length; i < il; ++i) {
      var k = index_stream[i] & code_mask;
      var cur_key = ib_code << 8 | k;
      var cur_code = code_table[cur_key];
      if (cur_code === void 0) {
        cur |= ib_code << cur_shift;
        cur_shift += cur_code_size;
        while (cur_shift >= 8) {
          buf[p++] = cur & 255;
          cur >>= 8;
          cur_shift -= 8;
          if (p === cur_subblock + 256) {
            buf[cur_subblock] = 255;
            cur_subblock = p++;
          }
        }
        if (next_code === 4096) {
          emit_code(clear_code);
          next_code = eoi_code + 1;
          cur_code_size = min_code_size + 1;
          code_table = {};
        } else {
          if (next_code >= 1 << cur_code_size)
            ++cur_code_size;
          code_table[cur_key] = next_code++;
        }
        ib_code = k;
      } else {
        ib_code = cur_code;
      }
    }
    emit_code(ib_code);
    emit_code(eoi_code);
    emit_bytes_to_buffer(1);
    if (cur_subblock + 1 === p) {
      buf[cur_subblock] = 0;
    } else {
      buf[cur_subblock] = p - cur_subblock - 1;
      buf[p++] = 0;
    }
    return p;
  }
  function GifReader(buf) {
    var p = 0;
    if (buf[p++] !== 71 || buf[p++] !== 73 || buf[p++] !== 70 || buf[p++] !== 56 || (buf[p++] + 1 & 253) !== 56 || buf[p++] !== 97) {
      throw new Error("Invalid GIF 87a/89a header.");
    }
    var width = buf[p++] | buf[p++] << 8;
    var height = buf[p++] | buf[p++] << 8;
    var pf0 = buf[p++];
    var global_palette_flag = pf0 >> 7;
    var num_global_colors_pow2 = pf0 & 7;
    var num_global_colors = 1 << num_global_colors_pow2 + 1;
    buf[p++];
    buf[p++];
    var global_palette_offset = null;
    var global_palette_size = null;
    if (global_palette_flag) {
      global_palette_offset = p;
      global_palette_size = num_global_colors;
      p += num_global_colors * 3;
    }
    var no_eof = true;
    var frames = [];
    var delay = 0;
    var transparent_index = null;
    var disposal = 0;
    var loop_count = null;
    this.width = width;
    this.height = height;
    while (no_eof && p < buf.length) {
      switch (buf[p++]) {
        case 33:
          switch (buf[p++]) {
            case 255:
              if (buf[p] !== 11 || // 21 FF already read, check block size.
              // NETSCAPE2.0
              buf[p + 1] == 78 && buf[p + 2] == 69 && buf[p + 3] == 84 && buf[p + 4] == 83 && buf[p + 5] == 67 && buf[p + 6] == 65 && buf[p + 7] == 80 && buf[p + 8] == 69 && buf[p + 9] == 50 && buf[p + 10] == 46 && buf[p + 11] == 48 && // Sub-block
              buf[p + 12] == 3 && buf[p + 13] == 1 && buf[p + 16] == 0) {
                p += 14;
                loop_count = buf[p++] | buf[p++] << 8;
                p++;
              } else {
                p += 12;
                while (true) {
                  var block_size = buf[p++];
                  if (!(block_size >= 0))
                    throw Error("Invalid block size");
                  if (block_size === 0)
                    break;
                  p += block_size;
                }
              }
              break;
            case 249:
              if (buf[p++] !== 4 || buf[p + 4] !== 0)
                throw new Error("Invalid graphics extension block.");
              var pf1 = buf[p++];
              delay = buf[p++] | buf[p++] << 8;
              transparent_index = buf[p++];
              if ((pf1 & 1) === 0)
                transparent_index = null;
              disposal = pf1 >> 2 & 7;
              p++;
              break;
            case 254:
              while (true) {
                var block_size = buf[p++];
                if (!(block_size >= 0))
                  throw Error("Invalid block size");
                if (block_size === 0)
                  break;
                p += block_size;
              }
              break;
            default:
              throw new Error(
                "Unknown graphic control label: 0x" + buf[p - 1].toString(16)
              );
          }
          break;
        case 44:
          var x = buf[p++] | buf[p++] << 8;
          var y = buf[p++] | buf[p++] << 8;
          var w = buf[p++] | buf[p++] << 8;
          var h = buf[p++] | buf[p++] << 8;
          var pf2 = buf[p++];
          var local_palette_flag = pf2 >> 7;
          var interlace_flag = pf2 >> 6 & 1;
          var num_local_colors_pow2 = pf2 & 7;
          var num_local_colors = 1 << num_local_colors_pow2 + 1;
          var palette_offset = global_palette_offset;
          var palette_size = global_palette_size;
          var has_local_palette = false;
          if (local_palette_flag) {
            var has_local_palette = true;
            palette_offset = p;
            palette_size = num_local_colors;
            p += num_local_colors * 3;
          }
          var data_offset = p;
          p++;
          while (true) {
            var block_size = buf[p++];
            if (!(block_size >= 0))
              throw Error("Invalid block size");
            if (block_size === 0)
              break;
            p += block_size;
          }
          frames.push({
            x,
            y,
            width: w,
            height: h,
            has_local_palette,
            palette_offset,
            palette_size,
            data_offset,
            data_length: p - data_offset,
            transparent_index,
            interlaced: !!interlace_flag,
            delay,
            disposal
          });
          break;
        case 59:
          no_eof = false;
          break;
        default:
          throw new Error("Unknown gif block: 0x" + buf[p - 1].toString(16));
      }
    }
    this.numFrames = function() {
      return frames.length;
    };
    this.loopCount = function() {
      return loop_count;
    };
    this.frameInfo = function(frame_num) {
      if (frame_num < 0 || frame_num >= frames.length)
        throw new Error("Frame index out of range.");
      return frames[frame_num];
    };
    this.decodeAndBlitFrameBGRA = function(frame_num, pixels) {
      var frame = this.frameInfo(frame_num);
      var num_pixels = frame.width * frame.height;
      var index_stream = new Uint8Array(num_pixels);
      GifReaderLZWOutputIndexStream(
        buf,
        frame.data_offset,
        index_stream,
        num_pixels
      );
      var palette_offset2 = frame.palette_offset;
      var trans = frame.transparent_index;
      if (trans === null)
        trans = 256;
      var framewidth = frame.width;
      var framestride = width - framewidth;
      var xleft = framewidth;
      var opbeg = (frame.y * width + frame.x) * 4;
      var opend = ((frame.y + frame.height) * width + frame.x) * 4;
      var op = opbeg;
      var scanstride = framestride * 4;
      if (frame.interlaced === true) {
        scanstride += width * 4 * 7;
      }
      var interlaceskip = 8;
      for (var i = 0, il = index_stream.length; i < il; ++i) {
        var index2 = index_stream[i];
        if (xleft === 0) {
          op += scanstride;
          xleft = framewidth;
          if (op >= opend) {
            scanstride = framestride * 4 + width * 4 * (interlaceskip - 1);
            op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
            interlaceskip >>= 1;
          }
        }
        if (index2 === trans) {
          op += 4;
        } else {
          var r = buf[palette_offset2 + index2 * 3];
          var g = buf[palette_offset2 + index2 * 3 + 1];
          var b = buf[palette_offset2 + index2 * 3 + 2];
          pixels[op++] = b;
          pixels[op++] = g;
          pixels[op++] = r;
          pixels[op++] = 255;
        }
        --xleft;
      }
    };
    this.decodeAndBlitFrameRGBA = function(frame_num, pixels) {
      var frame = this.frameInfo(frame_num);
      var num_pixels = frame.width * frame.height;
      var index_stream = new Uint8Array(num_pixels);
      GifReaderLZWOutputIndexStream(
        buf,
        frame.data_offset,
        index_stream,
        num_pixels
      );
      var palette_offset2 = frame.palette_offset;
      var trans = frame.transparent_index;
      if (trans === null)
        trans = 256;
      var framewidth = frame.width;
      var framestride = width - framewidth;
      var xleft = framewidth;
      var opbeg = (frame.y * width + frame.x) * 4;
      var opend = ((frame.y + frame.height) * width + frame.x) * 4;
      var op = opbeg;
      var scanstride = framestride * 4;
      if (frame.interlaced === true) {
        scanstride += width * 4 * 7;
      }
      var interlaceskip = 8;
      for (var i = 0, il = index_stream.length; i < il; ++i) {
        var index2 = index_stream[i];
        if (xleft === 0) {
          op += scanstride;
          xleft = framewidth;
          if (op >= opend) {
            scanstride = framestride * 4 + width * 4 * (interlaceskip - 1);
            op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
            interlaceskip >>= 1;
          }
        }
        if (index2 === trans) {
          op += 4;
        } else {
          var r = buf[palette_offset2 + index2 * 3];
          var g = buf[palette_offset2 + index2 * 3 + 1];
          var b = buf[palette_offset2 + index2 * 3 + 2];
          pixels[op++] = r;
          pixels[op++] = g;
          pixels[op++] = b;
          pixels[op++] = 255;
        }
        --xleft;
      }
    };
  }
  function GifReaderLZWOutputIndexStream(code_stream, p, output, output_length) {
    var min_code_size = code_stream[p++];
    var clear_code = 1 << min_code_size;
    var eoi_code = clear_code + 1;
    var next_code = eoi_code + 1;
    var cur_code_size = min_code_size + 1;
    var code_mask = (1 << cur_code_size) - 1;
    var cur_shift = 0;
    var cur = 0;
    var op = 0;
    var subblock_size = code_stream[p++];
    var code_table = new Int32Array(4096);
    var prev_code = null;
    while (true) {
      while (cur_shift < 16) {
        if (subblock_size === 0)
          break;
        cur |= code_stream[p++] << cur_shift;
        cur_shift += 8;
        if (subblock_size === 1) {
          subblock_size = code_stream[p++];
        } else {
          --subblock_size;
        }
      }
      if (cur_shift < cur_code_size)
        break;
      var code = cur & code_mask;
      cur >>= cur_code_size;
      cur_shift -= cur_code_size;
      if (code === clear_code) {
        next_code = eoi_code + 1;
        cur_code_size = min_code_size + 1;
        code_mask = (1 << cur_code_size) - 1;
        prev_code = null;
        continue;
      } else if (code === eoi_code) {
        break;
      }
      var chase_code = code < next_code ? code : prev_code;
      var chase_length = 0;
      var chase = chase_code;
      while (chase > clear_code) {
        chase = code_table[chase] >> 8;
        ++chase_length;
      }
      var k = chase;
      var op_end = op + chase_length + (chase_code !== code ? 1 : 0);
      if (op_end > output_length) {
        console.log("Warning, gif stream longer than expected.");
        return;
      }
      output[op++] = k;
      op += chase_length;
      var b = op;
      if (chase_code !== code)
        output[op++] = k;
      chase = chase_code;
      while (chase_length--) {
        chase = code_table[chase];
        output[--b] = chase & 255;
        chase >>= 8;
      }
      if (prev_code !== null && next_code < 4096) {
        code_table[next_code++] = prev_code << 8 | k;
        if (next_code >= code_mask + 1 && cur_code_size < 12) {
          ++cur_code_size;
          code_mask = code_mask << 1 | 1;
        }
      }
      prev_code = code;
    }
    if (op !== output_length) {
      console.log("Warning, gif stream shorter than expected.");
    }
    return output;
  }
  try {
    omggif.GifWriter = GifWriter;
    omggif.GifReader = GifReader;
  } catch (e) {
  }
  return omggif;
}
var bitmapimage;
var hasRequiredBitmapimage;
function requireBitmapimage() {
  if (hasRequiredBitmapimage)
    return bitmapimage;
  hasRequiredBitmapimage = 1;
  class BitmapImage {
    /**
     * BitmapImage is a class that hold an RGBA (red, green, blue, alpha) representation of an image. It's shape is borrowed from the Jimp package to make it easy to transfer GIF image frames into Jimp and Jimp images into GIF image frames. Each instance has a `bitmap` property having the following properties:
     * 
     * Property | Description
     * --- | ---
     * bitmap.width | width of image in pixels
     * bitmap.height | height of image in pixels
     * bitmap.data | a Buffer whose every four bytes represents a pixel, each sequential byte of a pixel corresponding to the red, green, blue, and alpha values of the pixel
     *
     * Its constructor supports the following signatures:
     *
     * * new BitmapImage(bitmap: { width: number, height: number, data: Buffer })
     * * new BitmapImage(bitmapImage: BitmapImage)
     * * new BitmapImage(width: number, height: number, buffer: Buffer)
     * * new BitmapImage(width: number, height: number, backgroundRGBA?: number)
     * 
     * When a `BitmapImage` is provided, the constructed `BitmapImage` is a deep clone of the provided one, so that each image's pixel data can subsequently be modified without affecting each other.
     *
     * `backgroundRGBA` is an optional parameter representing a pixel as a single number. In hex, the number is as follows: 0xRRGGBBAA, where RR is the red byte, GG the green byte, BB, the blue byte, and AA the alpha value. An AA of 0x00 is considered transparent, and all non-zero AA values are treated as opaque.
     */
    constructor(...args) {
      if (args.length === 0) {
        throw new Error("constructor requires parameters");
      }
      const firstArg = args[0];
      if (firstArg !== null && typeof firstArg === "object") {
        if (firstArg instanceof BitmapImage) {
          const sourceBitmap = firstArg.bitmap;
          this.bitmap = {
            width: sourceBitmap.width,
            height: sourceBitmap.height,
            data: new Buffer(sourceBitmap.width * sourceBitmap.height * 4)
          };
          sourceBitmap.data.copy(this.bitmap.data);
        } else if (firstArg.width && firstArg.height && firstArg.data) {
          this.bitmap = firstArg;
        } else {
          throw new Error("unrecognized constructor parameters");
        }
      } else if (typeof firstArg === "number" && typeof args[1] === "number") {
        const width = firstArg;
        const height = args[1];
        const thirdArg = args[2];
        this.bitmap = { width, height };
        if (Buffer.isBuffer(thirdArg)) {
          this.bitmap.data = thirdArg;
        } else {
          this.bitmap.data = new Buffer(width * height * 4);
          if (typeof thirdArg === "number") {
            this.fillRGBA(thirdArg);
          }
        }
      } else {
        throw new Error("unrecognized constructor parameters");
      }
    }
    /**
     * Copy a square portion of this image into another image. 
     * 
     * @param {BitmapImage} toImage Image into which to copy the square
     * @param {number} toX x-coord in toImage of upper-left corner of receiving square
     * @param {number} toY y-coord in toImage of upper-left corner of receiving square
     * @param {number} fromX x-coord in this image of upper-left corner of source square
     * @param {number} fromY y-coord in this image of upper-left corner of source square
     * @return {BitmapImage} The present image to allow for chaining.
     */
    blit(toImage, toX, toY, fromX, fromY, fromWidth, fromHeight) {
      if (fromX + fromWidth > this.bitmap.width) {
        throw new Error("copy exceeds width of source bitmap");
      }
      if (toX + fromWidth > toImage.bitmap.width) {
        throw new Error("copy exceeds width of target bitmap");
      }
      if (fromY + fromHeight > this.bitmap.height) {
        throw new Error("copy exceeds height of source bitmap");
      }
      if (toY + fromHeight > toImage.bitmap.height) {
        throw new Erro("copy exceeds height of target bitmap");
      }
      const sourceBuf = this.bitmap.data;
      const targetBuf = toImage.bitmap.data;
      const sourceByteWidth = this.bitmap.width * 4;
      const targetByteWidth = toImage.bitmap.width * 4;
      const copyByteWidth = fromWidth * 4;
      let si = fromY * sourceByteWidth + fromX * 4;
      let ti = toY * targetByteWidth + toX * 4;
      while (--fromHeight >= 0) {
        sourceBuf.copy(targetBuf, ti, si, si + copyByteWidth);
        si += sourceByteWidth;
        ti += targetByteWidth;
      }
      return this;
    }
    /**
     * Fills the image with a single color.
     * 
     * @param {number} rgba Color with which to fill image, expressed as a singlenumber in the form 0xRRGGBBAA, where AA is 0x00 for transparent and any other value for opaque.
     * @return {BitmapImage} The present image to allow for chaining.
     */
    fillRGBA(rgba) {
      const buf = this.bitmap.data;
      const bufByteWidth = this.bitmap.height * 4;
      let bi = 0;
      while (bi < bufByteWidth) {
        buf.writeUInt32BE(rgba, bi);
        bi += 4;
      }
      while (bi < buf.length) {
        buf.copy(buf, bi, 0, bufByteWidth);
        bi += bufByteWidth;
      }
      return this;
    }
    /**
     * Gets the RGBA number of the pixel at the given coordinate in the form 0xRRGGBBAA, where AA is the alpha value, with alpha 0x00 encoding to transparency in GIFs.
     * 
     * @param {number} x x-coord of pixel
     * @param {number} y y-coord of pixel
     * @return {number} RGBA of pixel in 0xRRGGBBAA form
     */
    getRGBA(x, y) {
      const bi = (y * this.bitmap.width + x) * 4;
      return this.bitmap.data.readUInt32BE(bi);
    }
    /**
     * Gets a set of all RGBA colors found within the image.
     * 
     * @return {Set} Set of all RGBA colors that the image contains.
     */
    getRGBASet() {
      const rgbaSet = /* @__PURE__ */ new Set();
      const buf = this.bitmap.data;
      for (let bi = 0; bi < buf.length; bi += 4) {
        rgbaSet.add(buf.readUInt32BE(bi, true));
      }
      return rgbaSet;
    }
    /**
     * Converts the image to greyscale using inferred Adobe metrics.
     * 
     * @return {BitmapImage} The present image to allow for chaining.
     */
    greyscale() {
      const buf = this.bitmap.data;
      this.scan(0, 0, this.bitmap.width, this.bitmap.height, (x, y, idx) => {
        const grey = Math.round(
          0.299 * buf[idx] + 0.587 * buf[idx + 1] + 0.114 * buf[idx + 2]
        );
        buf[idx] = grey;
        buf[idx + 1] = grey;
        buf[idx + 2] = grey;
      });
      return this;
    }
    /**
     * Reframes the image as if placing a frame around the original image and replacing the original image with the newly framed image. When the new frame is strictly within the boundaries of the original image, this method crops the image. When any of the new boundaries exceed those of the original image, the `fillRGBA` must be provided to indicate the color with which to fill the extra space added to the image.
     * 
     * @param {number} xOffset The x-coord offset of the upper-left pixel of the desired image relative to the present image.
     * @param {number} yOffset The y-coord offset of the upper-left pixel of the desired image relative to the present image.
     * @param {number} width The width of the new image after reframing
     * @param {number} height The height of the new image after reframing
     * @param {number} fillRGBA The color with which to fill space added to the image as a result of the reframing, in 0xRRGGBBAA format, where AA is 0x00 to indicate transparent and a non-zero value to indicate opaque. This parameter is only required when the reframing exceeds the original boundaries (i.e. does not simply perform a crop).
     * @return {BitmapImage} The present image to allow for chaining.
     */
    reframe(xOffset, yOffset, width, height, fillRGBA) {
      const cropX = xOffset < 0 ? 0 : xOffset;
      const cropY = yOffset < 0 ? 0 : yOffset;
      const cropWidth = width + cropX > this.bitmap.width ? this.bitmap.width - cropX : width;
      const cropHeight = height + cropY > this.bitmap.height ? this.bitmap.height - cropY : height;
      const newX = xOffset < 0 ? -xOffset : 0;
      const newY = yOffset < 0 ? -yOffset : 0;
      let image;
      if (fillRGBA === void 0) {
        if (cropX !== xOffset || cropY != yOffset || cropWidth !== width || cropHeight !== height) {
          throw new GifError(`fillRGBA required for this reframing`);
        }
        image = new BitmapImage(width, height);
      } else {
        image = new BitmapImage(width, height, fillRGBA);
      }
      this.blit(image, newX, newY, cropX, cropY, cropWidth, cropHeight);
      this.bitmap = image.bitmap;
      return this;
    }
    /**
     * Scales the image size up by an integer factor. Each pixel of the original image becomes a square of the same color in the new image having a size of `factor` x `factor` pixels.
     * 
     * @param {number} factor The factor by which to scale up the image. Must be an integer >= 1.
     * @return {BitmapImage} The present image to allow for chaining.
     */
    scale(factor) {
      if (factor === 1) {
        return;
      }
      if (!Number.isInteger(factor) || factor < 1) {
        throw new Error("the scale must be an integer >= 1");
      }
      const sourceWidth = this.bitmap.width;
      const sourceHeight = this.bitmap.height;
      const destByteWidth = sourceWidth * factor * 4;
      const sourceBuf = this.bitmap.data;
      const destBuf = new Buffer(sourceHeight * destByteWidth * factor);
      let sourceIndex = 0;
      let priorDestRowIndex;
      let destIndex = 0;
      for (let y = 0; y < sourceHeight; ++y) {
        priorDestRowIndex = destIndex;
        for (let x = 0; x < sourceWidth; ++x) {
          const color = sourceBuf.readUInt32BE(sourceIndex, true);
          for (let cx = 0; cx < factor; ++cx) {
            destBuf.writeUInt32BE(color, destIndex);
            destIndex += 4;
          }
          sourceIndex += 4;
        }
        for (let cy = 1; cy < factor; ++cy) {
          destBuf.copy(destBuf, destIndex, priorDestRowIndex, destIndex);
          destIndex += destByteWidth;
          priorDestRowIndex += destByteWidth;
        }
      }
      this.bitmap = {
        width: sourceWidth * factor,
        height: sourceHeight * factor,
        data: destBuf
      };
      return this;
    }
    /**
     * Scans all coordinates of the image, handing each in turn to the provided handler function.
     *
     * @param {function} scanHandler A function(x: number, y: number, bi: number) to be called for each pixel of the image with that pixel's x-coord, y-coord, and index into the `data` buffer. The function accesses the pixel at this coordinate by accessing the `this.data` at index `bi`.
     * @see scanAllIndexes
     */
    scanAllCoords(scanHandler) {
      const width = this.bitmap.width;
      const bufferLength = this.bitmap.data.length;
      let x = 0;
      let y = 0;
      for (let bi = 0; bi < bufferLength; bi += 4) {
        scanHandler(x, y, bi);
        if (++x === width) {
          x = 0;
          ++y;
        }
      }
    }
    /**
     * Scans all pixels of the image, handing the index of each in turn to the provided handler function. Runs a bit faster than `scanAllCoords()`, should the handler not need pixel coordinates.
     *
     * @param {function} scanHandler A function(bi: number) to be called for each pixel of the image with that pixel's index into the `data` buffer. The pixels is found at index 'bi' within `this.data`.
     * @see scanAllCoords
     */
    scanAllIndexes(scanHandler) {
      const bufferLength = this.bitmap.data.length;
      for (let bi = 0; bi < bufferLength; bi += 4) {
        scanHandler(bi);
      }
    }
  }
  bitmapimage = BitmapImage;
  return bitmapimage;
}
var gif = {};
var hasRequiredGif;
function requireGif() {
  if (hasRequiredGif)
    return gif;
  hasRequiredGif = 1;
  class Gif {
    // width - width of GIF in pixels
    // height - height of GIF in pixels
    // loops - 0 = unending; (n > 0) = iterate n times
    // usesTransparency - whether any frames have transparent pixels
    // colorScope - scope of color tables in GIF
    // frames - array of frames
    // buffer - GIF-formatted data
    /**
     * Gif is a class representing an encoded GIF. It is intended to be a read-only representation of a byte-encoded GIF. Only encoders and decoders should be creating instances of this class.
     * 
     * Property | Description
     * --- | ---
     * width | width of the GIF at its widest
     * height | height of the GIF at its highest
     * loops | the number of times the GIF should loop before stopping; 0 => loop indefinately
     * usesTransparency | boolean indicating whether at least one frame contains at least one transparent pixel
     * colorScope | the scope of the color tables as encoded within the GIF; either Gif.GlobalColorsOnly (== 1) or Gif.LocalColorsOnly (== 2).
     * frames | a array of GifFrame instances, one for each frame of the GIF
     * buffer | a Buffer holding the encoding's byte data
     * 
     * Its constructor should only ever be called by the GIF encoder or decoder.
     *
     * @param {Buffer} buffer A Buffer containing the encoded bytes
     * @param {GifFrame[]} frames Array of frames found in the encoding
     * @param {object} spec Properties of the encoding as listed above
     */
    constructor(buffer2, frames, spec) {
      this.width = spec.width;
      this.height = spec.height;
      this.loops = spec.loops;
      this.usesTransparency = spec.usesTransparency;
      this.colorScope = spec.colorScope;
      this.frames = frames;
      this.buffer = buffer2;
    }
  }
  Gif.GlobalColorsPreferred = 0;
  Gif.GlobalColorsOnly = 1;
  Gif.LocalColorsOnly = 2;
  class GifError2 extends Error {
    /**
     * GifError is a class representing a GIF-related error
     * 
     * @param {string|Error} messageOrError
     */
    constructor(messageOrError) {
      super(messageOrError);
      if (messageOrError instanceof Error) {
        this.stack = "Gif" + messageOrError.stack;
      }
    }
  }
  gif.Gif = Gif;
  gif.GifError = GifError2;
  return gif;
}
var gifcodec = {};
var gifutil = {};
var imageQ;
var hasRequiredImageQ;
function requireImageQ() {
  if (hasRequiredImageQ)
    return imageQ;
  hasRequiredImageQ = 1;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module2, copyDefault, desc) => {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
    return target;
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module2, temp) => {
      return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var src_exports = {};
  __export(src_exports, {
    applyPalette: () => applyPalette,
    applyPaletteSync: () => applyPaletteSync,
    buildPalette: () => buildPalette,
    buildPaletteSync: () => buildPaletteSync,
    constants: () => constants_exports,
    conversion: () => conversion_exports,
    distance: () => distance_exports,
    image: () => image_exports,
    palette: () => palette_exports,
    quality: () => quality_exports,
    utils: () => utils_exports
  });
  var constants_exports = {};
  __export(constants_exports, {
    bt709: () => bt709_exports
  });
  var bt709_exports = {};
  __export(bt709_exports, {
    Y: () => Y,
    x: () => x,
    y: () => y
  });
  var Y = /* @__PURE__ */ ((Y2) => {
    Y2[Y2["RED"] = 0.2126] = "RED";
    Y2[Y2["GREEN"] = 0.7152] = "GREEN";
    Y2[Y2["BLUE"] = 0.0722] = "BLUE";
    Y2[Y2["WHITE"] = 1] = "WHITE";
    return Y2;
  })(Y || {});
  var x = /* @__PURE__ */ ((x2) => {
    x2[x2["RED"] = 0.64] = "RED";
    x2[x2["GREEN"] = 0.3] = "GREEN";
    x2[x2["BLUE"] = 0.15] = "BLUE";
    x2[x2["WHITE"] = 0.3127] = "WHITE";
    return x2;
  })(x || {});
  var y = /* @__PURE__ */ ((y2) => {
    y2[y2["RED"] = 0.33] = "RED";
    y2[y2["GREEN"] = 0.6] = "GREEN";
    y2[y2["BLUE"] = 0.06] = "BLUE";
    y2[y2["WHITE"] = 0.329] = "WHITE";
    return y2;
  })(y || {});
  var conversion_exports = {};
  __export(conversion_exports, {
    lab2rgb: () => lab2rgb,
    lab2xyz: () => lab2xyz,
    rgb2hsl: () => rgb2hsl,
    rgb2lab: () => rgb2lab,
    rgb2xyz: () => rgb2xyz,
    xyz2lab: () => xyz2lab,
    xyz2rgb: () => xyz2rgb
  });
  function correctGamma(n) {
    return n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92;
  }
  function rgb2xyz(r, g, b) {
    r = correctGamma(r / 255);
    g = correctGamma(g / 255);
    b = correctGamma(b / 255);
    return {
      x: r * 0.4124 + g * 0.3576 + b * 0.1805,
      y: r * 0.2126 + g * 0.7152 + b * 0.0722,
      z: r * 0.0193 + g * 0.1192 + b * 0.9505
    };
  }
  var arithmetic_exports = {};
  __export(arithmetic_exports, {
    degrees2radians: () => degrees2radians,
    inRange0to255: () => inRange0to255,
    inRange0to255Rounded: () => inRange0to255Rounded,
    intInRange: () => intInRange,
    max3: () => max3,
    min3: () => min3,
    stableSort: () => stableSort
  });
  function degrees2radians(n) {
    return n * (Math.PI / 180);
  }
  function max3(a, b, c) {
    let m = a;
    if (m < b)
      m = b;
    if (m < c)
      m = c;
    return m;
  }
  function min3(a, b, c) {
    let m = a;
    if (m > b)
      m = b;
    if (m > c)
      m = c;
    return m;
  }
  function intInRange(value, low, high) {
    if (value > high)
      value = high;
    if (value < low)
      value = low;
    return value | 0;
  }
  function inRange0to255Rounded(n) {
    n = Math.round(n);
    if (n > 255)
      n = 255;
    else if (n < 0)
      n = 0;
    return n;
  }
  function inRange0to255(n) {
    if (n > 255)
      n = 255;
    else if (n < 0)
      n = 0;
    return n;
  }
  function stableSort(arrayToSort, callback) {
    const type = typeof arrayToSort[0];
    let sorted;
    if (type === "number" || type === "string") {
      const ord = /* @__PURE__ */ Object.create(null);
      for (let i = 0, l = arrayToSort.length; i < l; i++) {
        const val = arrayToSort[i];
        if (ord[val] || ord[val] === 0)
          continue;
        ord[val] = i;
      }
      sorted = arrayToSort.sort((a, b) => callback(a, b) || ord[a] - ord[b]);
    } else {
      const ord2 = arrayToSort.slice(0);
      sorted = arrayToSort.sort((a, b) => callback(a, b) || ord2.indexOf(a) - ord2.indexOf(b));
    }
    return sorted;
  }
  function rgb2hsl(r, g, b) {
    const min = min3(r, g, b);
    const max = max3(r, g, b);
    const delta = max - min;
    const l = (min + max) / 510;
    let s = 0;
    if (l > 0 && l < 1)
      s = delta / (l < 0.5 ? max + min : 510 - max - min);
    let h = 0;
    if (delta > 0) {
      if (max === r) {
        h = (g - b) / delta;
      } else if (max === g) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0)
        h += 360;
    }
    return { h, s, l };
  }
  var refX = 0.95047;
  var refY = 1;
  var refZ = 1.08883;
  function pivot(n) {
    return n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116;
  }
  function xyz2lab(x2, y2, z) {
    x2 = pivot(x2 / refX);
    y2 = pivot(y2 / refY);
    z = pivot(z / refZ);
    if (116 * y2 - 16 < 0)
      throw new Error("xxx");
    return {
      L: Math.max(0, 116 * y2 - 16),
      a: 500 * (x2 - y2),
      b: 200 * (y2 - z)
    };
  }
  function rgb2lab(r, g, b) {
    const xyz = rgb2xyz(r, g, b);
    return xyz2lab(xyz.x, xyz.y, xyz.z);
  }
  var refX2 = 0.95047;
  var refY2 = 1;
  var refZ2 = 1.08883;
  function pivot2(n) {
    return n > 0.206893034 ? n ** 3 : (n - 16 / 116) / 7.787;
  }
  function lab2xyz(L, a, b) {
    const y2 = (L + 16) / 116;
    const x2 = a / 500 + y2;
    const z = y2 - b / 200;
    return {
      x: refX2 * pivot2(x2),
      y: refY2 * pivot2(y2),
      z: refZ2 * pivot2(z)
    };
  }
  function correctGamma2(n) {
    return n > 31308e-7 ? 1.055 * n ** (1 / 2.4) - 0.055 : 12.92 * n;
  }
  function xyz2rgb(x2, y2, z) {
    const r = correctGamma2(x2 * 3.2406 + y2 * -1.5372 + z * -0.4986);
    const g = correctGamma2(x2 * -0.9689 + y2 * 1.8758 + z * 0.0415);
    const b = correctGamma2(x2 * 0.0557 + y2 * -0.204 + z * 1.057);
    return {
      r: inRange0to255Rounded(r * 255),
      g: inRange0to255Rounded(g * 255),
      b: inRange0to255Rounded(b * 255)
    };
  }
  function lab2rgb(L, a, b) {
    const xyz = lab2xyz(L, a, b);
    return xyz2rgb(xyz.x, xyz.y, xyz.z);
  }
  var distance_exports = {};
  __export(distance_exports, {
    AbstractDistanceCalculator: () => AbstractDistanceCalculator,
    AbstractEuclidean: () => AbstractEuclidean,
    AbstractManhattan: () => AbstractManhattan,
    CIE94GraphicArts: () => CIE94GraphicArts,
    CIE94Textiles: () => CIE94Textiles,
    CIEDE2000: () => CIEDE2000,
    CMetric: () => CMetric,
    Euclidean: () => Euclidean,
    EuclideanBT709: () => EuclideanBT709,
    EuclideanBT709NoAlpha: () => EuclideanBT709NoAlpha,
    Manhattan: () => Manhattan,
    ManhattanBT709: () => ManhattanBT709,
    ManhattanNommyde: () => ManhattanNommyde,
    PNGQuant: () => PNGQuant
  });
  var AbstractDistanceCalculator = class {
    constructor() {
      __publicField(this, "_maxDistance");
      __publicField(this, "_whitePoint");
      this._setDefaults();
      this.setWhitePoint(255, 255, 255, 255);
    }
    setWhitePoint(r, g, b, a) {
      this._whitePoint = {
        r: r > 0 ? 255 / r : 0,
        g: g > 0 ? 255 / g : 0,
        b: b > 0 ? 255 / b : 0,
        a: a > 0 ? 255 / a : 0
      };
      this._maxDistance = this.calculateRaw(r, g, b, a, 0, 0, 0, 0);
    }
    calculateNormalized(colorA, colorB) {
      return this.calculateRaw(colorA.r, colorA.g, colorA.b, colorA.a, colorB.r, colorB.g, colorB.b, colorB.a) / this._maxDistance;
    }
  };
  var AbstractCIE94 = class extends AbstractDistanceCalculator {
    calculateRaw(r1, g1, b1, a1, r2, g2, b2, a2) {
      const lab1 = rgb2lab(inRange0to255(r1 * this._whitePoint.r), inRange0to255(g1 * this._whitePoint.g), inRange0to255(b1 * this._whitePoint.b));
      const lab2 = rgb2lab(inRange0to255(r2 * this._whitePoint.r), inRange0to255(g2 * this._whitePoint.g), inRange0to255(b2 * this._whitePoint.b));
      const dL = lab1.L - lab2.L;
      const dA = lab1.a - lab2.a;
      const dB = lab1.b - lab2.b;
      const c1 = Math.sqrt(lab1.a * lab1.a + lab1.b * lab1.b);
      const c2 = Math.sqrt(lab2.a * lab2.a + lab2.b * lab2.b);
      const dC = c1 - c2;
      let deltaH = dA * dA + dB * dB - dC * dC;
      deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
      const dAlpha = (a2 - a1) * this._whitePoint.a * this._kA;
      return Math.sqrt((dL / this._Kl) ** 2 + (dC / (1 + this._K1 * c1)) ** 2 + (deltaH / (1 + this._K2 * c1)) ** 2 + dAlpha ** 2);
    }
  };
  var CIE94Textiles = class extends AbstractCIE94 {
    _setDefaults() {
      this._Kl = 2;
      this._K1 = 0.048;
      this._K2 = 0.014;
      this._kA = 0.25 * 50 / 255;
    }
  };
  var CIE94GraphicArts = class extends AbstractCIE94 {
    _setDefaults() {
      this._Kl = 1;
      this._K1 = 0.045;
      this._K2 = 0.015;
      this._kA = 0.25 * 100 / 255;
    }
  };
  var _CIEDE2000 = class extends AbstractDistanceCalculator {
    _setDefaults() {
    }
    static _calculatehp(b, ap) {
      const hp = Math.atan2(b, ap);
      if (hp >= 0)
        return hp;
      return hp + _CIEDE2000._deg360InRad;
    }
    static _calculateRT(ahp, aCp) {
      const aCp_to_7 = aCp ** 7;
      const R_C = 2 * Math.sqrt(aCp_to_7 / (aCp_to_7 + _CIEDE2000._pow25to7));
      const delta_theta = _CIEDE2000._deg30InRad * Math.exp(-(((ahp - _CIEDE2000._deg275InRad) / _CIEDE2000._deg25InRad) ** 2));
      return -Math.sin(2 * delta_theta) * R_C;
    }
    static _calculateT(ahp) {
      return 1 - 0.17 * Math.cos(ahp - _CIEDE2000._deg30InRad) + 0.24 * Math.cos(ahp * 2) + 0.32 * Math.cos(ahp * 3 + _CIEDE2000._deg6InRad) - 0.2 * Math.cos(ahp * 4 - _CIEDE2000._deg63InRad);
    }
    static _calculate_ahp(C1pC2p, h_bar, h1p, h2p) {
      const hpSum = h1p + h2p;
      if (C1pC2p === 0)
        return hpSum;
      if (h_bar <= _CIEDE2000._deg180InRad)
        return hpSum / 2;
      if (hpSum < _CIEDE2000._deg360InRad) {
        return (hpSum + _CIEDE2000._deg360InRad) / 2;
      }
      return (hpSum - _CIEDE2000._deg360InRad) / 2;
    }
    static _calculate_dHp(C1pC2p, h_bar, h2p, h1p) {
      let dhp;
      if (C1pC2p === 0) {
        dhp = 0;
      } else if (h_bar <= _CIEDE2000._deg180InRad) {
        dhp = h2p - h1p;
      } else if (h2p <= h1p) {
        dhp = h2p - h1p + _CIEDE2000._deg360InRad;
      } else {
        dhp = h2p - h1p - _CIEDE2000._deg360InRad;
      }
      return 2 * Math.sqrt(C1pC2p) * Math.sin(dhp / 2);
    }
    calculateRaw(r1, g1, b1, a1, r2, g2, b2, a2) {
      const lab1 = rgb2lab(inRange0to255(r1 * this._whitePoint.r), inRange0to255(g1 * this._whitePoint.g), inRange0to255(b1 * this._whitePoint.b));
      const lab2 = rgb2lab(inRange0to255(r2 * this._whitePoint.r), inRange0to255(g2 * this._whitePoint.g), inRange0to255(b2 * this._whitePoint.b));
      const dA = (a2 - a1) * this._whitePoint.a * _CIEDE2000._kA;
      const dE2 = this.calculateRawInLab(lab1, lab2);
      return Math.sqrt(dE2 + dA * dA);
    }
    calculateRawInLab(Lab1, Lab2) {
      const L1 = Lab1.L;
      const a1 = Lab1.a;
      const b1 = Lab1.b;
      const L2 = Lab2.L;
      const a2 = Lab2.a;
      const b2 = Lab2.b;
      const C1 = Math.sqrt(a1 * a1 + b1 * b1);
      const C2 = Math.sqrt(a2 * a2 + b2 * b2);
      const pow_a_C1_C2_to_7 = ((C1 + C2) / 2) ** 7;
      const G = 0.5 * (1 - Math.sqrt(pow_a_C1_C2_to_7 / (pow_a_C1_C2_to_7 + _CIEDE2000._pow25to7)));
      const a1p = (1 + G) * a1;
      const a2p = (1 + G) * a2;
      const C1p = Math.sqrt(a1p * a1p + b1 * b1);
      const C2p = Math.sqrt(a2p * a2p + b2 * b2);
      const C1pC2p = C1p * C2p;
      const h1p = _CIEDE2000._calculatehp(b1, a1p);
      const h2p = _CIEDE2000._calculatehp(b2, a2p);
      const h_bar = Math.abs(h1p - h2p);
      const dLp = L2 - L1;
      const dCp = C2p - C1p;
      const dHp = _CIEDE2000._calculate_dHp(C1pC2p, h_bar, h2p, h1p);
      const ahp = _CIEDE2000._calculate_ahp(C1pC2p, h_bar, h1p, h2p);
      const T = _CIEDE2000._calculateT(ahp);
      const aCp = (C1p + C2p) / 2;
      const aLp_minus_50_square = ((L1 + L2) / 2 - 50) ** 2;
      const S_L = 1 + 0.015 * aLp_minus_50_square / Math.sqrt(20 + aLp_minus_50_square);
      const S_C = 1 + 0.045 * aCp;
      const S_H = 1 + 0.015 * T * aCp;
      const R_T = _CIEDE2000._calculateRT(ahp, aCp);
      const dLpSL = dLp / S_L;
      const dCpSC = dCp / S_C;
      const dHpSH = dHp / S_H;
      return dLpSL ** 2 + dCpSC ** 2 + dHpSH ** 2 + R_T * dCpSC * dHpSH;
    }
  };
  var CIEDE2000 = _CIEDE2000;
  __publicField(CIEDE2000, "_kA", 0.25 * 100 / 255);
  __publicField(CIEDE2000, "_pow25to7", 25 ** 7);
  __publicField(CIEDE2000, "_deg360InRad", degrees2radians(360));
  __publicField(CIEDE2000, "_deg180InRad", degrees2radians(180));
  __publicField(CIEDE2000, "_deg30InRad", degrees2radians(30));
  __publicField(CIEDE2000, "_deg6InRad", degrees2radians(6));
  __publicField(CIEDE2000, "_deg63InRad", degrees2radians(63));
  __publicField(CIEDE2000, "_deg275InRad", degrees2radians(275));
  __publicField(CIEDE2000, "_deg25InRad", degrees2radians(25));
  var CMetric = class extends AbstractDistanceCalculator {
    calculateRaw(r1, g1, b1, a1, r2, g2, b2, a2) {
      const rmean = (r1 + r2) / 2 * this._whitePoint.r;
      const r = (r1 - r2) * this._whitePoint.r;
      const g = (g1 - g2) * this._whitePoint.g;
      const b = (b1 - b2) * this._whitePoint.b;
      const dE = ((512 + rmean) * r * r >> 8) + 4 * g * g + ((767 - rmean) * b * b >> 8);
      const dA = (a2 - a1) * this._whitePoint.a;
      return Math.sqrt(dE + dA * dA);
    }
    _setDefaults() {
    }
  };
  var AbstractEuclidean = class extends AbstractDistanceCalculator {
    calculateRaw(r1, g1, b1, a1, r2, g2, b2, a2) {
      const dR = r2 - r1;
      const dG = g2 - g1;
      const dB = b2 - b1;
      const dA = a2 - a1;
      return Math.sqrt(this._kR * dR * dR + this._kG * dG * dG + this._kB * dB * dB + this._kA * dA * dA);
    }
  };
  var Euclidean = class extends AbstractEuclidean {
    _setDefaults() {
      this._kR = 1;
      this._kG = 1;
      this._kB = 1;
      this._kA = 1;
    }
  };
  var EuclideanBT709 = class extends AbstractEuclidean {
    _setDefaults() {
      this._kR = 0.2126;
      this._kG = 0.7152;
      this._kB = 0.0722;
      this._kA = 1;
    }
  };
  var EuclideanBT709NoAlpha = class extends AbstractEuclidean {
    _setDefaults() {
      this._kR = 0.2126;
      this._kG = 0.7152;
      this._kB = 0.0722;
      this._kA = 0;
    }
  };
  var AbstractManhattan = class extends AbstractDistanceCalculator {
    calculateRaw(r1, g1, b1, a1, r2, g2, b2, a2) {
      let dR = r2 - r1;
      let dG = g2 - g1;
      let dB = b2 - b1;
      let dA = a2 - a1;
      if (dR < 0)
        dR = 0 - dR;
      if (dG < 0)
        dG = 0 - dG;
      if (dB < 0)
        dB = 0 - dB;
      if (dA < 0)
        dA = 0 - dA;
      return this._kR * dR + this._kG * dG + this._kB * dB + this._kA * dA;
    }
  };
  var Manhattan = class extends AbstractManhattan {
    _setDefaults() {
      this._kR = 1;
      this._kG = 1;
      this._kB = 1;
      this._kA = 1;
    }
  };
  var ManhattanNommyde = class extends AbstractManhattan {
    _setDefaults() {
      this._kR = 0.4984;
      this._kG = 0.8625;
      this._kB = 0.2979;
      this._kA = 1;
    }
  };
  var ManhattanBT709 = class extends AbstractManhattan {
    _setDefaults() {
      this._kR = 0.2126;
      this._kG = 0.7152;
      this._kB = 0.0722;
      this._kA = 1;
    }
  };
  var PNGQuant = class extends AbstractDistanceCalculator {
    calculateRaw(r1, g1, b1, a1, r2, g2, b2, a2) {
      const alphas = (a2 - a1) * this._whitePoint.a;
      return this._colordifferenceCh(r1 * this._whitePoint.r, r2 * this._whitePoint.r, alphas) + this._colordifferenceCh(g1 * this._whitePoint.g, g2 * this._whitePoint.g, alphas) + this._colordifferenceCh(b1 * this._whitePoint.b, b2 * this._whitePoint.b, alphas);
    }
    _colordifferenceCh(x2, y2, alphas) {
      const black = x2 - y2;
      const white = black + alphas;
      return black * black + white * white;
    }
    _setDefaults() {
    }
  };
  var palette_exports = {};
  __export(palette_exports, {
    AbstractPaletteQuantizer: () => AbstractPaletteQuantizer,
    ColorHistogram: () => ColorHistogram,
    NeuQuant: () => NeuQuant,
    NeuQuantFloat: () => NeuQuantFloat,
    RGBQuant: () => RGBQuant,
    WuColorCube: () => WuColorCube,
    WuQuant: () => WuQuant
  });
  var AbstractPaletteQuantizer = class {
    quantizeSync() {
      for (const value of this.quantize()) {
        if (value.palette) {
          return value.palette;
        }
      }
      throw new Error("unreachable");
    }
  };
  var Point = class {
    constructor() {
      __publicField(this, "r");
      __publicField(this, "g");
      __publicField(this, "b");
      __publicField(this, "a");
      __publicField(this, "uint32");
      __publicField(this, "rgba");
      this.uint32 = -1 >>> 0;
      this.r = this.g = this.b = this.a = 0;
      this.rgba = new Array(4);
      this.rgba[0] = 0;
      this.rgba[1] = 0;
      this.rgba[2] = 0;
      this.rgba[3] = 0;
    }
    static createByQuadruplet(quadruplet) {
      const point = new Point();
      point.r = quadruplet[0] | 0;
      point.g = quadruplet[1] | 0;
      point.b = quadruplet[2] | 0;
      point.a = quadruplet[3] | 0;
      point._loadUINT32();
      point._loadQuadruplet();
      return point;
    }
    static createByRGBA(red, green, blue, alpha) {
      const point = new Point();
      point.r = red | 0;
      point.g = green | 0;
      point.b = blue | 0;
      point.a = alpha | 0;
      point._loadUINT32();
      point._loadQuadruplet();
      return point;
    }
    static createByUint32(uint32) {
      const point = new Point();
      point.uint32 = uint32 >>> 0;
      point._loadRGBA();
      point._loadQuadruplet();
      return point;
    }
    from(point) {
      this.r = point.r;
      this.g = point.g;
      this.b = point.b;
      this.a = point.a;
      this.uint32 = point.uint32;
      this.rgba[0] = point.r;
      this.rgba[1] = point.g;
      this.rgba[2] = point.b;
      this.rgba[3] = point.a;
    }
    getLuminosity(useAlphaChannel) {
      let r = this.r;
      let g = this.g;
      let b = this.b;
      if (useAlphaChannel) {
        r = Math.min(255, 255 - this.a + this.a * r / 255);
        g = Math.min(255, 255 - this.a + this.a * g / 255);
        b = Math.min(255, 255 - this.a + this.a * b / 255);
      }
      return r * 0.2126 + g * 0.7152 + b * 0.0722;
    }
    _loadUINT32() {
      this.uint32 = (this.a << 24 | this.b << 16 | this.g << 8 | this.r) >>> 0;
    }
    _loadRGBA() {
      this.r = this.uint32 & 255;
      this.g = this.uint32 >>> 8 & 255;
      this.b = this.uint32 >>> 16 & 255;
      this.a = this.uint32 >>> 24 & 255;
    }
    _loadQuadruplet() {
      this.rgba[0] = this.r;
      this.rgba[1] = this.g;
      this.rgba[2] = this.b;
      this.rgba[3] = this.a;
    }
  };
  var PointContainer = class {
    constructor() {
      __publicField(this, "_pointArray");
      __publicField(this, "_width");
      __publicField(this, "_height");
      this._width = 0;
      this._height = 0;
      this._pointArray = [];
    }
    getWidth() {
      return this._width;
    }
    getHeight() {
      return this._height;
    }
    setWidth(width) {
      this._width = width;
    }
    setHeight(height) {
      this._height = height;
    }
    getPointArray() {
      return this._pointArray;
    }
    clone() {
      const clone = new PointContainer();
      clone._width = this._width;
      clone._height = this._height;
      for (let i = 0, l = this._pointArray.length; i < l; i++) {
        clone._pointArray[i] = Point.createByUint32(this._pointArray[i].uint32 | 0);
      }
      return clone;
    }
    toUint32Array() {
      const l = this._pointArray.length;
      const uint32Array = new Uint32Array(l);
      for (let i = 0; i < l; i++) {
        uint32Array[i] = this._pointArray[i].uint32;
      }
      return uint32Array;
    }
    toUint8Array() {
      return new Uint8Array(this.toUint32Array().buffer);
    }
    static fromHTMLImageElement(img) {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height, 0, 0, width, height);
      return PointContainer.fromHTMLCanvasElement(canvas);
    }
    static fromHTMLCanvasElement(canvas) {
      const width = canvas.width;
      const height = canvas.height;
      const ctx = canvas.getContext("2d");
      const imgData = ctx.getImageData(0, 0, width, height);
      return PointContainer.fromImageData(imgData);
    }
    static fromImageData(imageData) {
      const width = imageData.width;
      const height = imageData.height;
      return PointContainer.fromUint8Array(imageData.data, width, height);
    }
    static fromUint8Array(uint8Array, width, height) {
      switch (Object.prototype.toString.call(uint8Array)) {
        case "[object Uint8ClampedArray]":
        case "[object Uint8Array]":
          break;
        default:
          uint8Array = new Uint8Array(uint8Array);
      }
      const uint32Array = new Uint32Array(uint8Array.buffer);
      return PointContainer.fromUint32Array(uint32Array, width, height);
    }
    static fromUint32Array(uint32Array, width, height) {
      const container = new PointContainer();
      container._width = width;
      container._height = height;
      for (let i = 0, l = uint32Array.length; i < l; i++) {
        container._pointArray[i] = Point.createByUint32(uint32Array[i] | 0);
      }
      return container;
    }
    static fromBuffer(buffer2, width, height) {
      const uint32Array = new Uint32Array(buffer2.buffer, buffer2.byteOffset, buffer2.byteLength / Uint32Array.BYTES_PER_ELEMENT);
      return PointContainer.fromUint32Array(uint32Array, width, height);
    }
  };
  var hueGroups = 10;
  function hueGroup(hue, segmentsNumber) {
    const maxHue = 360;
    const seg = maxHue / segmentsNumber;
    const half = seg / 2;
    for (let i = 1, mid = seg - half; i < segmentsNumber; i++, mid += seg) {
      if (hue >= mid && hue < mid + seg)
        return i;
    }
    return 0;
  }
  var Palette = class {
    constructor() {
      __publicField(this, "_pointContainer");
      __publicField(this, "_pointArray", []);
      __publicField(this, "_i32idx", {});
      this._pointContainer = new PointContainer();
      this._pointContainer.setHeight(1);
      this._pointArray = this._pointContainer.getPointArray();
    }
    add(color) {
      this._pointArray.push(color);
      this._pointContainer.setWidth(this._pointArray.length);
    }
    has(color) {
      for (let i = this._pointArray.length - 1; i >= 0; i--) {
        if (color.uint32 === this._pointArray[i].uint32)
          return true;
      }
      return false;
    }
    getNearestColor(colorDistanceCalculator, color) {
      return this._pointArray[this._getNearestIndex(colorDistanceCalculator, color) | 0];
    }
    getPointContainer() {
      return this._pointContainer;
    }
    _nearestPointFromCache(key) {
      return typeof this._i32idx[key] === "number" ? this._i32idx[key] : -1;
    }
    _getNearestIndex(colorDistanceCalculator, point) {
      let idx = this._nearestPointFromCache("" + point.uint32);
      if (idx >= 0)
        return idx;
      let minimalDistance = Number.MAX_VALUE;
      idx = 0;
      for (let i = 0, l = this._pointArray.length; i < l; i++) {
        const p = this._pointArray[i];
        const distance = colorDistanceCalculator.calculateRaw(point.r, point.g, point.b, point.a, p.r, p.g, p.b, p.a);
        if (distance < minimalDistance) {
          minimalDistance = distance;
          idx = i;
        }
      }
      this._i32idx[point.uint32] = idx;
      return idx;
    }
    sort() {
      this._i32idx = {};
      this._pointArray.sort((a, b) => {
        const hslA = rgb2hsl(a.r, a.g, a.b);
        const hslB = rgb2hsl(b.r, b.g, b.b);
        const hueA = a.r === a.g && a.g === a.b ? 0 : 1 + hueGroup(hslA.h, hueGroups);
        const hueB = b.r === b.g && b.g === b.b ? 0 : 1 + hueGroup(hslB.h, hueGroups);
        const hueDiff = hueB - hueA;
        if (hueDiff)
          return -hueDiff;
        const lA = a.getLuminosity(true);
        const lB = b.getLuminosity(true);
        if (lB - lA !== 0)
          return lB - lA;
        const satDiff = (hslB.s * 100 | 0) - (hslA.s * 100 | 0);
        if (satDiff)
          return -satDiff;
        return 0;
      });
    }
  };
  var utils_exports = {};
  __export(utils_exports, {
    HueStatistics: () => HueStatistics,
    Palette: () => Palette,
    Point: () => Point,
    PointContainer: () => PointContainer,
    ProgressTracker: () => ProgressTracker,
    arithmetic: () => arithmetic_exports
  });
  var HueGroup = class {
    constructor() {
      __publicField(this, "num", 0);
      __publicField(this, "cols", []);
    }
  };
  var HueStatistics = class {
    constructor(numGroups, minCols) {
      __publicField(this, "_numGroups");
      __publicField(this, "_minCols");
      __publicField(this, "_stats");
      __publicField(this, "_groupsFull");
      this._numGroups = numGroups;
      this._minCols = minCols;
      this._stats = [];
      for (let i = 0; i <= numGroups; i++) {
        this._stats[i] = new HueGroup();
      }
      this._groupsFull = 0;
    }
    check(i32) {
      if (this._groupsFull === this._numGroups + 1) {
        this.check = () => {
        };
      }
      const r = i32 & 255;
      const g = i32 >>> 8 & 255;
      const b = i32 >>> 16 & 255;
      const hg = r === g && g === b ? 0 : 1 + hueGroup(rgb2hsl(r, g, b).h, this._numGroups);
      const gr = this._stats[hg];
      const min = this._minCols;
      gr.num++;
      if (gr.num > min) {
        return;
      }
      if (gr.num === min) {
        this._groupsFull++;
      }
      if (gr.num <= min) {
        this._stats[hg].cols.push(i32);
      }
    }
    injectIntoDictionary(histG) {
      for (let i = 0; i <= this._numGroups; i++) {
        if (this._stats[i].num <= this._minCols) {
          this._stats[i].cols.forEach((col) => {
            if (!histG[col]) {
              histG[col] = 1;
            } else {
              histG[col]++;
            }
          });
        }
      }
    }
    injectIntoArray(histG) {
      for (let i = 0; i <= this._numGroups; i++) {
        if (this._stats[i].num <= this._minCols) {
          this._stats[i].cols.forEach((col) => {
            if (histG.indexOf(col) === -1) {
              histG.push(col);
            }
          });
        }
      }
    }
  };
  var _ProgressTracker = class {
    constructor(valueRange, progressRange) {
      __publicField(this, "progress");
      __publicField(this, "_step");
      __publicField(this, "_range");
      __publicField(this, "_last");
      __publicField(this, "_progressRange");
      this._range = valueRange;
      this._progressRange = progressRange;
      this._step = Math.max(1, this._range / (_ProgressTracker.steps + 1) | 0);
      this._last = -this._step;
      this.progress = 0;
    }
    shouldNotify(current) {
      if (current - this._last >= this._step) {
        this._last = current;
        this.progress = Math.min(this._progressRange * this._last / this._range, this._progressRange);
        return true;
      }
      return false;
    }
  };
  var ProgressTracker = _ProgressTracker;
  __publicField(ProgressTracker, "steps", 100);
  var networkBiasShift = 3;
  var Neuron = class {
    constructor(defaultValue) {
      __publicField(this, "r");
      __publicField(this, "g");
      __publicField(this, "b");
      __publicField(this, "a");
      this.r = this.g = this.b = this.a = defaultValue;
    }
    toPoint() {
      return Point.createByRGBA(this.r >> networkBiasShift, this.g >> networkBiasShift, this.b >> networkBiasShift, this.a >> networkBiasShift);
    }
    subtract(r, g, b, a) {
      this.r -= r | 0;
      this.g -= g | 0;
      this.b -= b | 0;
      this.a -= a | 0;
    }
  };
  var _NeuQuant = class extends AbstractPaletteQuantizer {
    constructor(colorDistanceCalculator, colors = 256) {
      super();
      __publicField(this, "_pointArray");
      __publicField(this, "_networkSize");
      __publicField(this, "_network");
      __publicField(this, "_sampleFactor");
      __publicField(this, "_radPower");
      __publicField(this, "_freq");
      __publicField(this, "_bias");
      __publicField(this, "_distance");
      this._distance = colorDistanceCalculator;
      this._pointArray = [];
      this._sampleFactor = 1;
      this._networkSize = colors;
      this._distance.setWhitePoint(255 << networkBiasShift, 255 << networkBiasShift, 255 << networkBiasShift, 255 << networkBiasShift);
    }
    sample(pointContainer) {
      this._pointArray = this._pointArray.concat(pointContainer.getPointArray());
    }
    *quantize() {
      this._init();
      yield* this._learn();
      yield {
        palette: this._buildPalette(),
        progress: 100
      };
    }
    _init() {
      this._freq = [];
      this._bias = [];
      this._radPower = [];
      this._network = [];
      for (let i = 0; i < this._networkSize; i++) {
        this._network[i] = new Neuron((i << networkBiasShift + 8) / this._networkSize | 0);
        this._freq[i] = _NeuQuant._initialBias / this._networkSize | 0;
        this._bias[i] = 0;
      }
    }
    *_learn() {
      let sampleFactor = this._sampleFactor;
      const pointsNumber = this._pointArray.length;
      if (pointsNumber < _NeuQuant._minpicturebytes)
        sampleFactor = 1;
      const alphadec = 30 + (sampleFactor - 1) / 3 | 0;
      const pointsToSample = pointsNumber / sampleFactor | 0;
      let delta = pointsToSample / _NeuQuant._nCycles | 0;
      let alpha = _NeuQuant._initAlpha;
      let radius = (this._networkSize >> 3) * _NeuQuant._radiusBias;
      let rad = radius >> _NeuQuant._radiusBiasShift;
      if (rad <= 1)
        rad = 0;
      for (let i = 0; i < rad; i++) {
        this._radPower[i] = alpha * ((rad * rad - i * i) * _NeuQuant._radBias / (rad * rad)) >>> 0;
      }
      let step;
      if (pointsNumber < _NeuQuant._minpicturebytes) {
        step = 1;
      } else if (pointsNumber % _NeuQuant._prime1 !== 0) {
        step = _NeuQuant._prime1;
      } else if (pointsNumber % _NeuQuant._prime2 !== 0) {
        step = _NeuQuant._prime2;
      } else if (pointsNumber % _NeuQuant._prime3 !== 0) {
        step = _NeuQuant._prime3;
      } else {
        step = _NeuQuant._prime4;
      }
      const tracker = new ProgressTracker(pointsToSample, 99);
      for (let i = 0, pointIndex = 0; i < pointsToSample; ) {
        if (tracker.shouldNotify(i)) {
          yield {
            progress: tracker.progress
          };
        }
        const point = this._pointArray[pointIndex];
        const b = point.b << networkBiasShift;
        const g = point.g << networkBiasShift;
        const r = point.r << networkBiasShift;
        const a = point.a << networkBiasShift;
        const neuronIndex = this._contest(b, g, r, a);
        this._alterSingle(alpha, neuronIndex, b, g, r, a);
        if (rad !== 0)
          this._alterNeighbour(rad, neuronIndex, b, g, r, a);
        pointIndex += step;
        if (pointIndex >= pointsNumber)
          pointIndex -= pointsNumber;
        i++;
        if (delta === 0)
          delta = 1;
        if (i % delta === 0) {
          alpha -= alpha / alphadec | 0;
          radius -= radius / _NeuQuant._radiusDecrease | 0;
          rad = radius >> _NeuQuant._radiusBiasShift;
          if (rad <= 1)
            rad = 0;
          for (let j = 0; j < rad; j++) {
            this._radPower[j] = alpha * ((rad * rad - j * j) * _NeuQuant._radBias / (rad * rad)) >>> 0;
          }
        }
      }
    }
    _buildPalette() {
      const palette = new Palette();
      this._network.forEach((neuron) => {
        palette.add(neuron.toPoint());
      });
      palette.sort();
      return palette;
    }
    _alterNeighbour(rad, i, b, g, r, al) {
      let lo = i - rad;
      if (lo < -1)
        lo = -1;
      let hi = i + rad;
      if (hi > this._networkSize)
        hi = this._networkSize;
      let j = i + 1;
      let k = i - 1;
      let m = 1;
      while (j < hi || k > lo) {
        const a = this._radPower[m++] / _NeuQuant._alphaRadBias;
        if (j < hi) {
          const p = this._network[j++];
          p.subtract(a * (p.r - r), a * (p.g - g), a * (p.b - b), a * (p.a - al));
        }
        if (k > lo) {
          const p = this._network[k--];
          p.subtract(a * (p.r - r), a * (p.g - g), a * (p.b - b), a * (p.a - al));
        }
      }
    }
    _alterSingle(alpha, i, b, g, r, a) {
      alpha /= _NeuQuant._initAlpha;
      const n = this._network[i];
      n.subtract(alpha * (n.r - r), alpha * (n.g - g), alpha * (n.b - b), alpha * (n.a - a));
    }
    _contest(b, g, r, a) {
      const multiplier = 255 * 4 << networkBiasShift;
      let bestd = ~(1 << 31);
      let bestbiasd = bestd;
      let bestpos = -1;
      let bestbiaspos = bestpos;
      for (let i = 0; i < this._networkSize; i++) {
        const n = this._network[i];
        const dist = this._distance.calculateNormalized(n, { r, g, b, a }) * multiplier | 0;
        if (dist < bestd) {
          bestd = dist;
          bestpos = i;
        }
        const biasdist = dist - (this._bias[i] >> _NeuQuant._initialBiasShift - networkBiasShift);
        if (biasdist < bestbiasd) {
          bestbiasd = biasdist;
          bestbiaspos = i;
        }
        const betafreq = this._freq[i] >> _NeuQuant._betaShift;
        this._freq[i] -= betafreq;
        this._bias[i] += betafreq << _NeuQuant._gammaShift;
      }
      this._freq[bestpos] += _NeuQuant._beta;
      this._bias[bestpos] -= _NeuQuant._betaGamma;
      return bestbiaspos;
    }
  };
  var NeuQuant = _NeuQuant;
  __publicField(NeuQuant, "_prime1", 499);
  __publicField(NeuQuant, "_prime2", 491);
  __publicField(NeuQuant, "_prime3", 487);
  __publicField(NeuQuant, "_prime4", 503);
  __publicField(NeuQuant, "_minpicturebytes", _NeuQuant._prime4);
  __publicField(NeuQuant, "_nCycles", 100);
  __publicField(NeuQuant, "_initialBiasShift", 16);
  __publicField(NeuQuant, "_initialBias", 1 << _NeuQuant._initialBiasShift);
  __publicField(NeuQuant, "_gammaShift", 10);
  __publicField(NeuQuant, "_betaShift", 10);
  __publicField(NeuQuant, "_beta", _NeuQuant._initialBias >> _NeuQuant._betaShift);
  __publicField(NeuQuant, "_betaGamma", _NeuQuant._initialBias << _NeuQuant._gammaShift - _NeuQuant._betaShift);
  __publicField(NeuQuant, "_radiusBiasShift", 6);
  __publicField(NeuQuant, "_radiusBias", 1 << _NeuQuant._radiusBiasShift);
  __publicField(NeuQuant, "_radiusDecrease", 30);
  __publicField(NeuQuant, "_alphaBiasShift", 10);
  __publicField(NeuQuant, "_initAlpha", 1 << _NeuQuant._alphaBiasShift);
  __publicField(NeuQuant, "_radBiasShift", 8);
  __publicField(NeuQuant, "_radBias", 1 << _NeuQuant._radBiasShift);
  __publicField(NeuQuant, "_alphaRadBiasShift", _NeuQuant._alphaBiasShift + _NeuQuant._radBiasShift);
  __publicField(NeuQuant, "_alphaRadBias", 1 << _NeuQuant._alphaRadBiasShift);
  var networkBiasShift2 = 3;
  var NeuronFloat = class {
    constructor(defaultValue) {
      __publicField(this, "r");
      __publicField(this, "g");
      __publicField(this, "b");
      __publicField(this, "a");
      this.r = this.g = this.b = this.a = defaultValue;
    }
    toPoint() {
      return Point.createByRGBA(this.r >> networkBiasShift2, this.g >> networkBiasShift2, this.b >> networkBiasShift2, this.a >> networkBiasShift2);
    }
    subtract(r, g, b, a) {
      this.r -= r;
      this.g -= g;
      this.b -= b;
      this.a -= a;
    }
  };
  var _NeuQuantFloat = class extends AbstractPaletteQuantizer {
    constructor(colorDistanceCalculator, colors = 256) {
      super();
      __publicField(this, "_pointArray");
      __publicField(this, "_networkSize");
      __publicField(this, "_network");
      __publicField(this, "_sampleFactor");
      __publicField(this, "_radPower");
      __publicField(this, "_freq");
      __publicField(this, "_bias");
      __publicField(this, "_distance");
      this._distance = colorDistanceCalculator;
      this._pointArray = [];
      this._sampleFactor = 1;
      this._networkSize = colors;
      this._distance.setWhitePoint(255 << networkBiasShift2, 255 << networkBiasShift2, 255 << networkBiasShift2, 255 << networkBiasShift2);
    }
    sample(pointContainer) {
      this._pointArray = this._pointArray.concat(pointContainer.getPointArray());
    }
    *quantize() {
      this._init();
      yield* this._learn();
      yield {
        palette: this._buildPalette(),
        progress: 100
      };
    }
    _init() {
      this._freq = [];
      this._bias = [];
      this._radPower = [];
      this._network = [];
      for (let i = 0; i < this._networkSize; i++) {
        this._network[i] = new NeuronFloat((i << networkBiasShift2 + 8) / this._networkSize);
        this._freq[i] = _NeuQuantFloat._initialBias / this._networkSize;
        this._bias[i] = 0;
      }
    }
    *_learn() {
      let sampleFactor = this._sampleFactor;
      const pointsNumber = this._pointArray.length;
      if (pointsNumber < _NeuQuantFloat._minpicturebytes)
        sampleFactor = 1;
      const alphadec = 30 + (sampleFactor - 1) / 3;
      const pointsToSample = pointsNumber / sampleFactor;
      let delta = pointsToSample / _NeuQuantFloat._nCycles | 0;
      let alpha = _NeuQuantFloat._initAlpha;
      let radius = (this._networkSize >> 3) * _NeuQuantFloat._radiusBias;
      let rad = radius >> _NeuQuantFloat._radiusBiasShift;
      if (rad <= 1)
        rad = 0;
      for (let i = 0; i < rad; i++) {
        this._radPower[i] = alpha * ((rad * rad - i * i) * _NeuQuantFloat._radBias / (rad * rad));
      }
      let step;
      if (pointsNumber < _NeuQuantFloat._minpicturebytes) {
        step = 1;
      } else if (pointsNumber % _NeuQuantFloat._prime1 !== 0) {
        step = _NeuQuantFloat._prime1;
      } else if (pointsNumber % _NeuQuantFloat._prime2 !== 0) {
        step = _NeuQuantFloat._prime2;
      } else if (pointsNumber % _NeuQuantFloat._prime3 !== 0) {
        step = _NeuQuantFloat._prime3;
      } else {
        step = _NeuQuantFloat._prime4;
      }
      const tracker = new ProgressTracker(pointsToSample, 99);
      for (let i = 0, pointIndex = 0; i < pointsToSample; ) {
        if (tracker.shouldNotify(i)) {
          yield {
            progress: tracker.progress
          };
        }
        const point = this._pointArray[pointIndex];
        const b = point.b << networkBiasShift2;
        const g = point.g << networkBiasShift2;
        const r = point.r << networkBiasShift2;
        const a = point.a << networkBiasShift2;
        const neuronIndex = this._contest(b, g, r, a);
        this._alterSingle(alpha, neuronIndex, b, g, r, a);
        if (rad !== 0)
          this._alterNeighbour(rad, neuronIndex, b, g, r, a);
        pointIndex += step;
        if (pointIndex >= pointsNumber)
          pointIndex -= pointsNumber;
        i++;
        if (delta === 0)
          delta = 1;
        if (i % delta === 0) {
          alpha -= alpha / alphadec;
          radius -= radius / _NeuQuantFloat._radiusDecrease;
          rad = radius >> _NeuQuantFloat._radiusBiasShift;
          if (rad <= 1)
            rad = 0;
          for (let j = 0; j < rad; j++) {
            this._radPower[j] = alpha * ((rad * rad - j * j) * _NeuQuantFloat._radBias / (rad * rad));
          }
        }
      }
    }
    _buildPalette() {
      const palette = new Palette();
      this._network.forEach((neuron) => {
        palette.add(neuron.toPoint());
      });
      palette.sort();
      return palette;
    }
    _alterNeighbour(rad, i, b, g, r, al) {
      let lo = i - rad;
      if (lo < -1)
        lo = -1;
      let hi = i + rad;
      if (hi > this._networkSize)
        hi = this._networkSize;
      let j = i + 1;
      let k = i - 1;
      let m = 1;
      while (j < hi || k > lo) {
        const a = this._radPower[m++] / _NeuQuantFloat._alphaRadBias;
        if (j < hi) {
          const p = this._network[j++];
          p.subtract(a * (p.r - r), a * (p.g - g), a * (p.b - b), a * (p.a - al));
        }
        if (k > lo) {
          const p = this._network[k--];
          p.subtract(a * (p.r - r), a * (p.g - g), a * (p.b - b), a * (p.a - al));
        }
      }
    }
    _alterSingle(alpha, i, b, g, r, a) {
      alpha /= _NeuQuantFloat._initAlpha;
      const n = this._network[i];
      n.subtract(alpha * (n.r - r), alpha * (n.g - g), alpha * (n.b - b), alpha * (n.a - a));
    }
    _contest(b, g, r, al) {
      const multiplier = 255 * 4 << networkBiasShift2;
      let bestd = ~(1 << 31);
      let bestbiasd = bestd;
      let bestpos = -1;
      let bestbiaspos = bestpos;
      for (let i = 0; i < this._networkSize; i++) {
        const n = this._network[i];
        const dist = this._distance.calculateNormalized(n, { r, g, b, a: al }) * multiplier;
        if (dist < bestd) {
          bestd = dist;
          bestpos = i;
        }
        const biasdist = dist - (this._bias[i] >> _NeuQuantFloat._initialBiasShift - networkBiasShift2);
        if (biasdist < bestbiasd) {
          bestbiasd = biasdist;
          bestbiaspos = i;
        }
        const betafreq = this._freq[i] >> _NeuQuantFloat._betaShift;
        this._freq[i] -= betafreq;
        this._bias[i] += betafreq << _NeuQuantFloat._gammaShift;
      }
      this._freq[bestpos] += _NeuQuantFloat._beta;
      this._bias[bestpos] -= _NeuQuantFloat._betaGamma;
      return bestbiaspos;
    }
  };
  var NeuQuantFloat = _NeuQuantFloat;
  __publicField(NeuQuantFloat, "_prime1", 499);
  __publicField(NeuQuantFloat, "_prime2", 491);
  __publicField(NeuQuantFloat, "_prime3", 487);
  __publicField(NeuQuantFloat, "_prime4", 503);
  __publicField(NeuQuantFloat, "_minpicturebytes", _NeuQuantFloat._prime4);
  __publicField(NeuQuantFloat, "_nCycles", 100);
  __publicField(NeuQuantFloat, "_initialBiasShift", 16);
  __publicField(NeuQuantFloat, "_initialBias", 1 << _NeuQuantFloat._initialBiasShift);
  __publicField(NeuQuantFloat, "_gammaShift", 10);
  __publicField(NeuQuantFloat, "_betaShift", 10);
  __publicField(NeuQuantFloat, "_beta", _NeuQuantFloat._initialBias >> _NeuQuantFloat._betaShift);
  __publicField(NeuQuantFloat, "_betaGamma", _NeuQuantFloat._initialBias << _NeuQuantFloat._gammaShift - _NeuQuantFloat._betaShift);
  __publicField(NeuQuantFloat, "_radiusBiasShift", 6);
  __publicField(NeuQuantFloat, "_radiusBias", 1 << _NeuQuantFloat._radiusBiasShift);
  __publicField(NeuQuantFloat, "_radiusDecrease", 30);
  __publicField(NeuQuantFloat, "_alphaBiasShift", 10);
  __publicField(NeuQuantFloat, "_initAlpha", 1 << _NeuQuantFloat._alphaBiasShift);
  __publicField(NeuQuantFloat, "_radBiasShift", 8);
  __publicField(NeuQuantFloat, "_radBias", 1 << _NeuQuantFloat._radBiasShift);
  __publicField(NeuQuantFloat, "_alphaRadBiasShift", _NeuQuantFloat._alphaBiasShift + _NeuQuantFloat._radBiasShift);
  __publicField(NeuQuantFloat, "_alphaRadBias", 1 << _NeuQuantFloat._alphaRadBiasShift);
  var _ColorHistogram = class {
    constructor(method, colors) {
      __publicField(this, "_method");
      __publicField(this, "_hueStats");
      __publicField(this, "_histogram");
      __publicField(this, "_initColors");
      __publicField(this, "_minHueCols");
      this._method = method;
      this._minHueCols = colors << 2;
      this._initColors = colors << 2;
      this._hueStats = new HueStatistics(_ColorHistogram._hueGroups, this._minHueCols);
      this._histogram = /* @__PURE__ */ Object.create(null);
    }
    sample(pointContainer) {
      switch (this._method) {
        case 1:
          this._colorStats1D(pointContainer);
          break;
        case 2:
          this._colorStats2D(pointContainer);
          break;
      }
    }
    getImportanceSortedColorsIDXI32() {
      const sorted = stableSort(Object.keys(this._histogram), (a, b) => this._histogram[b] - this._histogram[a]);
      if (sorted.length === 0) {
        return [];
      }
      let idxi32;
      switch (this._method) {
        case 1:
          const initialColorsLimit = Math.min(sorted.length, this._initColors);
          const last = sorted[initialColorsLimit - 1];
          const freq = this._histogram[last];
          idxi32 = sorted.slice(0, initialColorsLimit);
          let pos = initialColorsLimit;
          const len = sorted.length;
          while (pos < len && this._histogram[sorted[pos]] === freq) {
            idxi32.push(sorted[pos++]);
          }
          this._hueStats.injectIntoArray(idxi32);
          break;
        case 2:
          idxi32 = sorted;
          break;
        default:
          throw new Error("Incorrect method");
      }
      return idxi32.map((v) => +v);
    }
    _colorStats1D(pointContainer) {
      const histG = this._histogram;
      const pointArray = pointContainer.getPointArray();
      const len = pointArray.length;
      for (let i = 0; i < len; i++) {
        const col = pointArray[i].uint32;
        this._hueStats.check(col);
        if (col in histG) {
          histG[col]++;
        } else {
          histG[col] = 1;
        }
      }
    }
    _colorStats2D(pointContainer) {
      const width = pointContainer.getWidth();
      const height = pointContainer.getHeight();
      const pointArray = pointContainer.getPointArray();
      const boxW = _ColorHistogram._boxSize[0];
      const boxH = _ColorHistogram._boxSize[1];
      const area = boxW * boxH;
      const boxes = this._makeBoxes(width, height, boxW, boxH);
      const histG = this._histogram;
      boxes.forEach((box) => {
        let effc = Math.round(box.w * box.h / area) * _ColorHistogram._boxPixels;
        if (effc < 2)
          effc = 2;
        const histL = {};
        this._iterateBox(box, width, (i) => {
          const col = pointArray[i].uint32;
          this._hueStats.check(col);
          if (col in histG) {
            histG[col]++;
          } else if (col in histL) {
            if (++histL[col] >= effc) {
              histG[col] = histL[col];
            }
          } else {
            histL[col] = 1;
          }
        });
      });
      this._hueStats.injectIntoDictionary(histG);
    }
    _iterateBox(bbox, wid, fn) {
      const b = bbox;
      const i0 = b.y * wid + b.x;
      const i1 = (b.y + b.h - 1) * wid + (b.x + b.w - 1);
      const incr = wid - b.w + 1;
      let cnt = 0;
      let i = i0;
      do {
        fn.call(this, i);
        i += ++cnt % b.w === 0 ? incr : 1;
      } while (i <= i1);
    }
    _makeBoxes(width, height, stepX, stepY) {
      const wrem = width % stepX;
      const hrem = height % stepY;
      const xend = width - wrem;
      const yend = height - hrem;
      const boxesArray = [];
      for (let y2 = 0; y2 < height; y2 += stepY) {
        for (let x2 = 0; x2 < width; x2 += stepX) {
          boxesArray.push({
            x: x2,
            y: y2,
            w: x2 === xend ? wrem : stepX,
            h: y2 === yend ? hrem : stepY
          });
        }
      }
      return boxesArray;
    }
  };
  var ColorHistogram = _ColorHistogram;
  __publicField(ColorHistogram, "_boxSize", [64, 64]);
  __publicField(ColorHistogram, "_boxPixels", 2);
  __publicField(ColorHistogram, "_hueGroups", 10);
  var RemovedColor = class {
    constructor(index2, color, distance) {
      __publicField(this, "index");
      __publicField(this, "color");
      __publicField(this, "distance");
      this.index = index2;
      this.color = color;
      this.distance = distance;
    }
  };
  var RGBQuant = class extends AbstractPaletteQuantizer {
    constructor(colorDistanceCalculator, colors = 256, method = 2) {
      super();
      __publicField(this, "_colors");
      __publicField(this, "_initialDistance");
      __publicField(this, "_distanceIncrement");
      __publicField(this, "_histogram");
      __publicField(this, "_distance");
      this._distance = colorDistanceCalculator;
      this._colors = colors;
      this._histogram = new ColorHistogram(method, colors);
      this._initialDistance = 0.01;
      this._distanceIncrement = 5e-3;
    }
    sample(image) {
      this._histogram.sample(image);
    }
    *quantize() {
      const idxi32 = this._histogram.getImportanceSortedColorsIDXI32();
      if (idxi32.length === 0) {
        throw new Error("No colors in image");
      }
      yield* this._buildPalette(idxi32);
    }
    *_buildPalette(idxi32) {
      const palette = new Palette();
      const colorArray = palette.getPointContainer().getPointArray();
      const usageArray = new Array(idxi32.length);
      for (let i = 0; i < idxi32.length; i++) {
        colorArray.push(Point.createByUint32(idxi32[i]));
        usageArray[i] = 1;
      }
      const len = colorArray.length;
      const memDist = [];
      let palLen = len;
      let thold = this._initialDistance;
      const tracker = new ProgressTracker(palLen - this._colors, 99);
      while (palLen > this._colors) {
        memDist.length = 0;
        for (let i = 0; i < len; i++) {
          if (tracker.shouldNotify(len - palLen)) {
            yield {
              progress: tracker.progress
            };
          }
          if (usageArray[i] === 0)
            continue;
          const pxi = colorArray[i];
          for (let j = i + 1; j < len; j++) {
            if (usageArray[j] === 0)
              continue;
            const pxj = colorArray[j];
            const dist = this._distance.calculateNormalized(pxi, pxj);
            if (dist < thold) {
              memDist.push(new RemovedColor(j, pxj, dist));
              usageArray[j] = 0;
              palLen--;
            }
          }
        }
        thold += palLen > this._colors * 3 ? this._initialDistance : this._distanceIncrement;
      }
      if (palLen < this._colors) {
        stableSort(memDist, (a, b) => b.distance - a.distance);
        let k = 0;
        while (palLen < this._colors && k < memDist.length) {
          const removedColor = memDist[k];
          usageArray[removedColor.index] = 1;
          palLen++;
          k++;
        }
      }
      let colors = colorArray.length;
      for (let colorIndex = colors - 1; colorIndex >= 0; colorIndex--) {
        if (usageArray[colorIndex] === 0) {
          if (colorIndex !== colors - 1) {
            colorArray[colorIndex] = colorArray[colors - 1];
          }
          --colors;
        }
      }
      colorArray.length = colors;
      palette.sort();
      yield {
        palette,
        progress: 100
      };
    }
  };
  function createArray1D(dimension1) {
    const a = [];
    for (let k = 0; k < dimension1; k++) {
      a[k] = 0;
    }
    return a;
  }
  function createArray4D(dimension1, dimension2, dimension3, dimension4) {
    const a = new Array(dimension1);
    for (let i = 0; i < dimension1; i++) {
      a[i] = new Array(dimension2);
      for (let j = 0; j < dimension2; j++) {
        a[i][j] = new Array(dimension3);
        for (let k = 0; k < dimension3; k++) {
          a[i][j][k] = new Array(dimension4);
          for (let l = 0; l < dimension4; l++) {
            a[i][j][k][l] = 0;
          }
        }
      }
    }
    return a;
  }
  function createArray3D(dimension1, dimension2, dimension3) {
    const a = new Array(dimension1);
    for (let i = 0; i < dimension1; i++) {
      a[i] = new Array(dimension2);
      for (let j = 0; j < dimension2; j++) {
        a[i][j] = new Array(dimension3);
        for (let k = 0; k < dimension3; k++) {
          a[i][j][k] = 0;
        }
      }
    }
    return a;
  }
  function fillArray3D(a, dimension1, dimension2, dimension3, value) {
    for (let i = 0; i < dimension1; i++) {
      a[i] = [];
      for (let j = 0; j < dimension2; j++) {
        a[i][j] = [];
        for (let k = 0; k < dimension3; k++) {
          a[i][j][k] = value;
        }
      }
    }
  }
  function fillArray1D(a, dimension1, value) {
    for (let i = 0; i < dimension1; i++) {
      a[i] = value;
    }
  }
  var WuColorCube = class {
    constructor() {
      __publicField(this, "redMinimum");
      __publicField(this, "redMaximum");
      __publicField(this, "greenMinimum");
      __publicField(this, "greenMaximum");
      __publicField(this, "blueMinimum");
      __publicField(this, "blueMaximum");
      __publicField(this, "volume");
      __publicField(this, "alphaMinimum");
      __publicField(this, "alphaMaximum");
    }
  };
  var _WuQuant = class extends AbstractPaletteQuantizer {
    constructor(colorDistanceCalculator, colors = 256, significantBitsPerChannel = 5) {
      super();
      __publicField(this, "_reds");
      __publicField(this, "_greens");
      __publicField(this, "_blues");
      __publicField(this, "_alphas");
      __publicField(this, "_sums");
      __publicField(this, "_weights");
      __publicField(this, "_momentsRed");
      __publicField(this, "_momentsGreen");
      __publicField(this, "_momentsBlue");
      __publicField(this, "_momentsAlpha");
      __publicField(this, "_moments");
      __publicField(this, "_table");
      __publicField(this, "_pixels");
      __publicField(this, "_cubes");
      __publicField(this, "_colors");
      __publicField(this, "_significantBitsPerChannel");
      __publicField(this, "_maxSideIndex");
      __publicField(this, "_alphaMaxSideIndex");
      __publicField(this, "_sideSize");
      __publicField(this, "_alphaSideSize");
      __publicField(this, "_distance");
      this._distance = colorDistanceCalculator;
      this._setQuality(significantBitsPerChannel);
      this._initialize(colors);
    }
    sample(image) {
      const pointArray = image.getPointArray();
      for (let i = 0, l = pointArray.length; i < l; i++) {
        this._addColor(pointArray[i]);
      }
      this._pixels = this._pixels.concat(pointArray);
    }
    *quantize() {
      yield* this._preparePalette();
      const palette = new Palette();
      for (let paletteIndex = 0; paletteIndex < this._colors; paletteIndex++) {
        if (this._sums[paletteIndex] > 0) {
          const sum = this._sums[paletteIndex];
          const r = this._reds[paletteIndex] / sum;
          const g = this._greens[paletteIndex] / sum;
          const b = this._blues[paletteIndex] / sum;
          const a = this._alphas[paletteIndex] / sum;
          const color = Point.createByRGBA(r | 0, g | 0, b | 0, a | 0);
          palette.add(color);
        }
      }
      palette.sort();
      yield {
        palette,
        progress: 100
      };
    }
    *_preparePalette() {
      yield* this._calculateMoments();
      let next = 0;
      const volumeVariance = createArray1D(this._colors);
      for (let cubeIndex = 1; cubeIndex < this._colors; ++cubeIndex) {
        if (this._cut(this._cubes[next], this._cubes[cubeIndex])) {
          volumeVariance[next] = this._cubes[next].volume > 1 ? this._calculateVariance(this._cubes[next]) : 0;
          volumeVariance[cubeIndex] = this._cubes[cubeIndex].volume > 1 ? this._calculateVariance(this._cubes[cubeIndex]) : 0;
        } else {
          volumeVariance[next] = 0;
          cubeIndex--;
        }
        next = 0;
        let temp = volumeVariance[0];
        for (let index2 = 1; index2 <= cubeIndex; ++index2) {
          if (volumeVariance[index2] > temp) {
            temp = volumeVariance[index2];
            next = index2;
          }
        }
        if (temp <= 0) {
          this._colors = cubeIndex + 1;
          break;
        }
      }
      const lookupRed = [];
      const lookupGreen = [];
      const lookupBlue = [];
      const lookupAlpha = [];
      for (let k = 0; k < this._colors; ++k) {
        const weight = _WuQuant._volume(this._cubes[k], this._weights);
        if (weight > 0) {
          lookupRed[k] = _WuQuant._volume(this._cubes[k], this._momentsRed) / weight | 0;
          lookupGreen[k] = _WuQuant._volume(this._cubes[k], this._momentsGreen) / weight | 0;
          lookupBlue[k] = _WuQuant._volume(this._cubes[k], this._momentsBlue) / weight | 0;
          lookupAlpha[k] = _WuQuant._volume(this._cubes[k], this._momentsAlpha) / weight | 0;
        } else {
          lookupRed[k] = 0;
          lookupGreen[k] = 0;
          lookupBlue[k] = 0;
          lookupAlpha[k] = 0;
        }
      }
      this._reds = createArray1D(this._colors + 1);
      this._greens = createArray1D(this._colors + 1);
      this._blues = createArray1D(this._colors + 1);
      this._alphas = createArray1D(this._colors + 1);
      this._sums = createArray1D(this._colors + 1);
      for (let index2 = 0, l = this._pixels.length; index2 < l; index2++) {
        const color = this._pixels[index2];
        const match = -1;
        let bestMatch = match;
        let bestDistance = Number.MAX_VALUE;
        for (let lookup = 0; lookup < this._colors; lookup++) {
          const foundRed = lookupRed[lookup];
          const foundGreen = lookupGreen[lookup];
          const foundBlue = lookupBlue[lookup];
          const foundAlpha = lookupAlpha[lookup];
          const distance = this._distance.calculateRaw(foundRed, foundGreen, foundBlue, foundAlpha, color.r, color.g, color.b, color.a);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestMatch = lookup;
          }
        }
        this._reds[bestMatch] += color.r;
        this._greens[bestMatch] += color.g;
        this._blues[bestMatch] += color.b;
        this._alphas[bestMatch] += color.a;
        this._sums[bestMatch]++;
      }
    }
    _addColor(color) {
      const bitsToRemove = 8 - this._significantBitsPerChannel;
      const indexRed = (color.r >> bitsToRemove) + 1;
      const indexGreen = (color.g >> bitsToRemove) + 1;
      const indexBlue = (color.b >> bitsToRemove) + 1;
      const indexAlpha = (color.a >> bitsToRemove) + 1;
      this._weights[indexAlpha][indexRed][indexGreen][indexBlue]++;
      this._momentsRed[indexAlpha][indexRed][indexGreen][indexBlue] += color.r;
      this._momentsGreen[indexAlpha][indexRed][indexGreen][indexBlue] += color.g;
      this._momentsBlue[indexAlpha][indexRed][indexGreen][indexBlue] += color.b;
      this._momentsAlpha[indexAlpha][indexRed][indexGreen][indexBlue] += color.a;
      this._moments[indexAlpha][indexRed][indexGreen][indexBlue] += this._table[color.r] + this._table[color.g] + this._table[color.b] + this._table[color.a];
    }
    *_calculateMoments() {
      const area = [];
      const areaRed = [];
      const areaGreen = [];
      const areaBlue = [];
      const areaAlpha = [];
      const area2 = [];
      const xarea = createArray3D(this._sideSize, this._sideSize, this._sideSize);
      const xareaRed = createArray3D(this._sideSize, this._sideSize, this._sideSize);
      const xareaGreen = createArray3D(this._sideSize, this._sideSize, this._sideSize);
      const xareaBlue = createArray3D(this._sideSize, this._sideSize, this._sideSize);
      const xareaAlpha = createArray3D(this._sideSize, this._sideSize, this._sideSize);
      const xarea2 = createArray3D(this._sideSize, this._sideSize, this._sideSize);
      let trackerProgress = 0;
      const tracker = new ProgressTracker(this._alphaMaxSideIndex * this._maxSideIndex, 99);
      for (let alphaIndex = 1; alphaIndex <= this._alphaMaxSideIndex; ++alphaIndex) {
        fillArray3D(xarea, this._sideSize, this._sideSize, this._sideSize, 0);
        fillArray3D(xareaRed, this._sideSize, this._sideSize, this._sideSize, 0);
        fillArray3D(xareaGreen, this._sideSize, this._sideSize, this._sideSize, 0);
        fillArray3D(xareaBlue, this._sideSize, this._sideSize, this._sideSize, 0);
        fillArray3D(xareaAlpha, this._sideSize, this._sideSize, this._sideSize, 0);
        fillArray3D(xarea2, this._sideSize, this._sideSize, this._sideSize, 0);
        for (let redIndex = 1; redIndex <= this._maxSideIndex; ++redIndex, ++trackerProgress) {
          if (tracker.shouldNotify(trackerProgress)) {
            yield {
              progress: tracker.progress
            };
          }
          fillArray1D(area, this._sideSize, 0);
          fillArray1D(areaRed, this._sideSize, 0);
          fillArray1D(areaGreen, this._sideSize, 0);
          fillArray1D(areaBlue, this._sideSize, 0);
          fillArray1D(areaAlpha, this._sideSize, 0);
          fillArray1D(area2, this._sideSize, 0);
          for (let greenIndex = 1; greenIndex <= this._maxSideIndex; ++greenIndex) {
            let line = 0;
            let lineRed = 0;
            let lineGreen = 0;
            let lineBlue = 0;
            let lineAlpha = 0;
            let line2 = 0;
            for (let blueIndex = 1; blueIndex <= this._maxSideIndex; ++blueIndex) {
              line += this._weights[alphaIndex][redIndex][greenIndex][blueIndex];
              lineRed += this._momentsRed[alphaIndex][redIndex][greenIndex][blueIndex];
              lineGreen += this._momentsGreen[alphaIndex][redIndex][greenIndex][blueIndex];
              lineBlue += this._momentsBlue[alphaIndex][redIndex][greenIndex][blueIndex];
              lineAlpha += this._momentsAlpha[alphaIndex][redIndex][greenIndex][blueIndex];
              line2 += this._moments[alphaIndex][redIndex][greenIndex][blueIndex];
              area[blueIndex] += line;
              areaRed[blueIndex] += lineRed;
              areaGreen[blueIndex] += lineGreen;
              areaBlue[blueIndex] += lineBlue;
              areaAlpha[blueIndex] += lineAlpha;
              area2[blueIndex] += line2;
              xarea[redIndex][greenIndex][blueIndex] = xarea[redIndex - 1][greenIndex][blueIndex] + area[blueIndex];
              xareaRed[redIndex][greenIndex][blueIndex] = xareaRed[redIndex - 1][greenIndex][blueIndex] + areaRed[blueIndex];
              xareaGreen[redIndex][greenIndex][blueIndex] = xareaGreen[redIndex - 1][greenIndex][blueIndex] + areaGreen[blueIndex];
              xareaBlue[redIndex][greenIndex][blueIndex] = xareaBlue[redIndex - 1][greenIndex][blueIndex] + areaBlue[blueIndex];
              xareaAlpha[redIndex][greenIndex][blueIndex] = xareaAlpha[redIndex - 1][greenIndex][blueIndex] + areaAlpha[blueIndex];
              xarea2[redIndex][greenIndex][blueIndex] = xarea2[redIndex - 1][greenIndex][blueIndex] + area2[blueIndex];
              this._weights[alphaIndex][redIndex][greenIndex][blueIndex] = this._weights[alphaIndex - 1][redIndex][greenIndex][blueIndex] + xarea[redIndex][greenIndex][blueIndex];
              this._momentsRed[alphaIndex][redIndex][greenIndex][blueIndex] = this._momentsRed[alphaIndex - 1][redIndex][greenIndex][blueIndex] + xareaRed[redIndex][greenIndex][blueIndex];
              this._momentsGreen[alphaIndex][redIndex][greenIndex][blueIndex] = this._momentsGreen[alphaIndex - 1][redIndex][greenIndex][blueIndex] + xareaGreen[redIndex][greenIndex][blueIndex];
              this._momentsBlue[alphaIndex][redIndex][greenIndex][blueIndex] = this._momentsBlue[alphaIndex - 1][redIndex][greenIndex][blueIndex] + xareaBlue[redIndex][greenIndex][blueIndex];
              this._momentsAlpha[alphaIndex][redIndex][greenIndex][blueIndex] = this._momentsAlpha[alphaIndex - 1][redIndex][greenIndex][blueIndex] + xareaAlpha[redIndex][greenIndex][blueIndex];
              this._moments[alphaIndex][redIndex][greenIndex][blueIndex] = this._moments[alphaIndex - 1][redIndex][greenIndex][blueIndex] + xarea2[redIndex][greenIndex][blueIndex];
            }
          }
        }
      }
    }
    static _volumeFloat(cube, moment) {
      return moment[cube.alphaMaximum][cube.redMaximum][cube.greenMaximum][cube.blueMaximum] - moment[cube.alphaMaximum][cube.redMaximum][cube.greenMinimum][cube.blueMaximum] - moment[cube.alphaMaximum][cube.redMinimum][cube.greenMaximum][cube.blueMaximum] + moment[cube.alphaMaximum][cube.redMinimum][cube.greenMinimum][cube.blueMaximum] - moment[cube.alphaMinimum][cube.redMaximum][cube.greenMaximum][cube.blueMaximum] + moment[cube.alphaMinimum][cube.redMaximum][cube.greenMinimum][cube.blueMaximum] + moment[cube.alphaMinimum][cube.redMinimum][cube.greenMaximum][cube.blueMaximum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMaximum] - (moment[cube.alphaMaximum][cube.redMaximum][cube.greenMaximum][cube.blueMinimum] - moment[cube.alphaMinimum][cube.redMaximum][cube.greenMaximum][cube.blueMinimum] - moment[cube.alphaMaximum][cube.redMaximum][cube.greenMinimum][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMaximum][cube.greenMinimum][cube.blueMinimum] - moment[cube.alphaMaximum][cube.redMinimum][cube.greenMaximum][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMinimum][cube.greenMaximum][cube.blueMinimum] + moment[cube.alphaMaximum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum]);
    }
    static _volume(cube, moment) {
      return _WuQuant._volumeFloat(cube, moment) | 0;
    }
    static _top(cube, direction, position, moment) {
      let result;
      switch (direction) {
        case _WuQuant._alpha:
          result = moment[position][cube.redMaximum][cube.greenMaximum][cube.blueMaximum] - moment[position][cube.redMaximum][cube.greenMinimum][cube.blueMaximum] - moment[position][cube.redMinimum][cube.greenMaximum][cube.blueMaximum] + moment[position][cube.redMinimum][cube.greenMinimum][cube.blueMaximum] - (moment[position][cube.redMaximum][cube.greenMaximum][cube.blueMinimum] - moment[position][cube.redMaximum][cube.greenMinimum][cube.blueMinimum] - moment[position][cube.redMinimum][cube.greenMaximum][cube.blueMinimum] + moment[position][cube.redMinimum][cube.greenMinimum][cube.blueMinimum]);
          break;
        case _WuQuant._red:
          result = moment[cube.alphaMaximum][position][cube.greenMaximum][cube.blueMaximum] - moment[cube.alphaMaximum][position][cube.greenMinimum][cube.blueMaximum] - moment[cube.alphaMinimum][position][cube.greenMaximum][cube.blueMaximum] + moment[cube.alphaMinimum][position][cube.greenMinimum][cube.blueMaximum] - (moment[cube.alphaMaximum][position][cube.greenMaximum][cube.blueMinimum] - moment[cube.alphaMaximum][position][cube.greenMinimum][cube.blueMinimum] - moment[cube.alphaMinimum][position][cube.greenMaximum][cube.blueMinimum] + moment[cube.alphaMinimum][position][cube.greenMinimum][cube.blueMinimum]);
          break;
        case _WuQuant._green:
          result = moment[cube.alphaMaximum][cube.redMaximum][position][cube.blueMaximum] - moment[cube.alphaMaximum][cube.redMinimum][position][cube.blueMaximum] - moment[cube.alphaMinimum][cube.redMaximum][position][cube.blueMaximum] + moment[cube.alphaMinimum][cube.redMinimum][position][cube.blueMaximum] - (moment[cube.alphaMaximum][cube.redMaximum][position][cube.blueMinimum] - moment[cube.alphaMaximum][cube.redMinimum][position][cube.blueMinimum] - moment[cube.alphaMinimum][cube.redMaximum][position][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMinimum][position][cube.blueMinimum]);
          break;
        case _WuQuant._blue:
          result = moment[cube.alphaMaximum][cube.redMaximum][cube.greenMaximum][position] - moment[cube.alphaMaximum][cube.redMaximum][cube.greenMinimum][position] - moment[cube.alphaMaximum][cube.redMinimum][cube.greenMaximum][position] + moment[cube.alphaMaximum][cube.redMinimum][cube.greenMinimum][position] - (moment[cube.alphaMinimum][cube.redMaximum][cube.greenMaximum][position] - moment[cube.alphaMinimum][cube.redMaximum][cube.greenMinimum][position] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMaximum][position] + moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][position]);
          break;
        default:
          throw new Error("impossible");
      }
      return result | 0;
    }
    static _bottom(cube, direction, moment) {
      switch (direction) {
        case _WuQuant._alpha:
          return -moment[cube.alphaMinimum][cube.redMaximum][cube.greenMaximum][cube.blueMaximum] + moment[cube.alphaMinimum][cube.redMaximum][cube.greenMinimum][cube.blueMaximum] + moment[cube.alphaMinimum][cube.redMinimum][cube.greenMaximum][cube.blueMaximum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMaximum] - (-moment[cube.alphaMinimum][cube.redMaximum][cube.greenMaximum][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMaximum][cube.greenMinimum][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMinimum][cube.greenMaximum][cube.blueMinimum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum]);
        case _WuQuant._red:
          return -moment[cube.alphaMaximum][cube.redMinimum][cube.greenMaximum][cube.blueMaximum] + moment[cube.alphaMaximum][cube.redMinimum][cube.greenMinimum][cube.blueMaximum] + moment[cube.alphaMinimum][cube.redMinimum][cube.greenMaximum][cube.blueMaximum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMaximum] - (-moment[cube.alphaMaximum][cube.redMinimum][cube.greenMaximum][cube.blueMinimum] + moment[cube.alphaMaximum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMinimum][cube.greenMaximum][cube.blueMinimum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum]);
        case _WuQuant._green:
          return -moment[cube.alphaMaximum][cube.redMaximum][cube.greenMinimum][cube.blueMaximum] + moment[cube.alphaMaximum][cube.redMinimum][cube.greenMinimum][cube.blueMaximum] + moment[cube.alphaMinimum][cube.redMaximum][cube.greenMinimum][cube.blueMaximum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMaximum] - (-moment[cube.alphaMaximum][cube.redMaximum][cube.greenMinimum][cube.blueMinimum] + moment[cube.alphaMaximum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMaximum][cube.greenMinimum][cube.blueMinimum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum]);
        case _WuQuant._blue:
          return -moment[cube.alphaMaximum][cube.redMaximum][cube.greenMaximum][cube.blueMinimum] + moment[cube.alphaMaximum][cube.redMaximum][cube.greenMinimum][cube.blueMinimum] + moment[cube.alphaMaximum][cube.redMinimum][cube.greenMaximum][cube.blueMinimum] - moment[cube.alphaMaximum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum] - (-moment[cube.alphaMinimum][cube.redMaximum][cube.greenMaximum][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMaximum][cube.greenMinimum][cube.blueMinimum] + moment[cube.alphaMinimum][cube.redMinimum][cube.greenMaximum][cube.blueMinimum] - moment[cube.alphaMinimum][cube.redMinimum][cube.greenMinimum][cube.blueMinimum]);
        default:
          return 0;
      }
    }
    _calculateVariance(cube) {
      const volumeRed = _WuQuant._volume(cube, this._momentsRed);
      const volumeGreen = _WuQuant._volume(cube, this._momentsGreen);
      const volumeBlue = _WuQuant._volume(cube, this._momentsBlue);
      const volumeAlpha = _WuQuant._volume(cube, this._momentsAlpha);
      const volumeMoment = _WuQuant._volumeFloat(cube, this._moments);
      const volumeWeight = _WuQuant._volume(cube, this._weights);
      const distance = volumeRed * volumeRed + volumeGreen * volumeGreen + volumeBlue * volumeBlue + volumeAlpha * volumeAlpha;
      return volumeMoment - distance / volumeWeight;
    }
    _maximize(cube, direction, first, last, wholeRed, wholeGreen, wholeBlue, wholeAlpha, wholeWeight) {
      const bottomRed = _WuQuant._bottom(cube, direction, this._momentsRed) | 0;
      const bottomGreen = _WuQuant._bottom(cube, direction, this._momentsGreen) | 0;
      const bottomBlue = _WuQuant._bottom(cube, direction, this._momentsBlue) | 0;
      const bottomAlpha = _WuQuant._bottom(cube, direction, this._momentsAlpha) | 0;
      const bottomWeight = _WuQuant._bottom(cube, direction, this._weights) | 0;
      let result = 0;
      let cutPosition = -1;
      for (let position = first; position < last; ++position) {
        let halfRed = bottomRed + _WuQuant._top(cube, direction, position, this._momentsRed);
        let halfGreen = bottomGreen + _WuQuant._top(cube, direction, position, this._momentsGreen);
        let halfBlue = bottomBlue + _WuQuant._top(cube, direction, position, this._momentsBlue);
        let halfAlpha = bottomAlpha + _WuQuant._top(cube, direction, position, this._momentsAlpha);
        let halfWeight = bottomWeight + _WuQuant._top(cube, direction, position, this._weights);
        if (halfWeight !== 0) {
          let halfDistance = halfRed * halfRed + halfGreen * halfGreen + halfBlue * halfBlue + halfAlpha * halfAlpha;
          let temp = halfDistance / halfWeight;
          halfRed = wholeRed - halfRed;
          halfGreen = wholeGreen - halfGreen;
          halfBlue = wholeBlue - halfBlue;
          halfAlpha = wholeAlpha - halfAlpha;
          halfWeight = wholeWeight - halfWeight;
          if (halfWeight !== 0) {
            halfDistance = halfRed * halfRed + halfGreen * halfGreen + halfBlue * halfBlue + halfAlpha * halfAlpha;
            temp += halfDistance / halfWeight;
            if (temp > result) {
              result = temp;
              cutPosition = position;
            }
          }
        }
      }
      return { max: result, position: cutPosition };
    }
    _cut(first, second) {
      let direction;
      const wholeRed = _WuQuant._volume(first, this._momentsRed);
      const wholeGreen = _WuQuant._volume(first, this._momentsGreen);
      const wholeBlue = _WuQuant._volume(first, this._momentsBlue);
      const wholeAlpha = _WuQuant._volume(first, this._momentsAlpha);
      const wholeWeight = _WuQuant._volume(first, this._weights);
      const red = this._maximize(first, _WuQuant._red, first.redMinimum + 1, first.redMaximum, wholeRed, wholeGreen, wholeBlue, wholeAlpha, wholeWeight);
      const green = this._maximize(first, _WuQuant._green, first.greenMinimum + 1, first.greenMaximum, wholeRed, wholeGreen, wholeBlue, wholeAlpha, wholeWeight);
      const blue = this._maximize(first, _WuQuant._blue, first.blueMinimum + 1, first.blueMaximum, wholeRed, wholeGreen, wholeBlue, wholeAlpha, wholeWeight);
      const alpha = this._maximize(first, _WuQuant._alpha, first.alphaMinimum + 1, first.alphaMaximum, wholeRed, wholeGreen, wholeBlue, wholeAlpha, wholeWeight);
      if (alpha.max >= red.max && alpha.max >= green.max && alpha.max >= blue.max) {
        direction = _WuQuant._alpha;
        if (alpha.position < 0)
          return false;
      } else if (red.max >= alpha.max && red.max >= green.max && red.max >= blue.max) {
        direction = _WuQuant._red;
      } else if (green.max >= alpha.max && green.max >= red.max && green.max >= blue.max) {
        direction = _WuQuant._green;
      } else {
        direction = _WuQuant._blue;
      }
      second.redMaximum = first.redMaximum;
      second.greenMaximum = first.greenMaximum;
      second.blueMaximum = first.blueMaximum;
      second.alphaMaximum = first.alphaMaximum;
      switch (direction) {
        case _WuQuant._red:
          second.redMinimum = first.redMaximum = red.position;
          second.greenMinimum = first.greenMinimum;
          second.blueMinimum = first.blueMinimum;
          second.alphaMinimum = first.alphaMinimum;
          break;
        case _WuQuant._green:
          second.greenMinimum = first.greenMaximum = green.position;
          second.redMinimum = first.redMinimum;
          second.blueMinimum = first.blueMinimum;
          second.alphaMinimum = first.alphaMinimum;
          break;
        case _WuQuant._blue:
          second.blueMinimum = first.blueMaximum = blue.position;
          second.redMinimum = first.redMinimum;
          second.greenMinimum = first.greenMinimum;
          second.alphaMinimum = first.alphaMinimum;
          break;
        case _WuQuant._alpha:
          second.alphaMinimum = first.alphaMaximum = alpha.position;
          second.blueMinimum = first.blueMinimum;
          second.redMinimum = first.redMinimum;
          second.greenMinimum = first.greenMinimum;
          break;
      }
      first.volume = (first.redMaximum - first.redMinimum) * (first.greenMaximum - first.greenMinimum) * (first.blueMaximum - first.blueMinimum) * (first.alphaMaximum - first.alphaMinimum);
      second.volume = (second.redMaximum - second.redMinimum) * (second.greenMaximum - second.greenMinimum) * (second.blueMaximum - second.blueMinimum) * (second.alphaMaximum - second.alphaMinimum);
      return true;
    }
    _initialize(colors) {
      this._colors = colors;
      this._cubes = [];
      for (let cubeIndex = 0; cubeIndex < colors; cubeIndex++) {
        this._cubes[cubeIndex] = new WuColorCube();
      }
      this._cubes[0].redMinimum = 0;
      this._cubes[0].greenMinimum = 0;
      this._cubes[0].blueMinimum = 0;
      this._cubes[0].alphaMinimum = 0;
      this._cubes[0].redMaximum = this._maxSideIndex;
      this._cubes[0].greenMaximum = this._maxSideIndex;
      this._cubes[0].blueMaximum = this._maxSideIndex;
      this._cubes[0].alphaMaximum = this._alphaMaxSideIndex;
      this._weights = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize);
      this._momentsRed = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize);
      this._momentsGreen = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize);
      this._momentsBlue = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize);
      this._momentsAlpha = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize);
      this._moments = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize);
      this._table = [];
      for (let tableIndex = 0; tableIndex < 256; ++tableIndex) {
        this._table[tableIndex] = tableIndex * tableIndex;
      }
      this._pixels = [];
    }
    _setQuality(significantBitsPerChannel = 5) {
      this._significantBitsPerChannel = significantBitsPerChannel;
      this._maxSideIndex = 1 << this._significantBitsPerChannel;
      this._alphaMaxSideIndex = this._maxSideIndex;
      this._sideSize = this._maxSideIndex + 1;
      this._alphaSideSize = this._alphaMaxSideIndex + 1;
    }
  };
  var WuQuant = _WuQuant;
  __publicField(WuQuant, "_alpha", 3);
  __publicField(WuQuant, "_red", 2);
  __publicField(WuQuant, "_green", 1);
  __publicField(WuQuant, "_blue", 0);
  var image_exports = {};
  __export(image_exports, {
    AbstractImageQuantizer: () => AbstractImageQuantizer,
    ErrorDiffusionArray: () => ErrorDiffusionArray,
    ErrorDiffusionArrayKernel: () => ErrorDiffusionArrayKernel,
    ErrorDiffusionRiemersma: () => ErrorDiffusionRiemersma,
    NearestColor: () => NearestColor
  });
  var AbstractImageQuantizer = class {
    quantizeSync(pointContainer, palette) {
      for (const value of this.quantize(pointContainer, palette)) {
        if (value.pointContainer) {
          return value.pointContainer;
        }
      }
      throw new Error("unreachable");
    }
  };
  var NearestColor = class extends AbstractImageQuantizer {
    constructor(colorDistanceCalculator) {
      super();
      __publicField(this, "_distance");
      this._distance = colorDistanceCalculator;
    }
    *quantize(pointContainer, palette) {
      const pointArray = pointContainer.getPointArray();
      const width = pointContainer.getWidth();
      const height = pointContainer.getHeight();
      const tracker = new ProgressTracker(height, 99);
      for (let y2 = 0; y2 < height; y2++) {
        if (tracker.shouldNotify(y2)) {
          yield {
            progress: tracker.progress
          };
        }
        for (let x2 = 0, idx = y2 * width; x2 < width; x2++, idx++) {
          const point = pointArray[idx];
          point.from(palette.getNearestColor(this._distance, point));
        }
      }
      yield {
        pointContainer,
        progress: 100
      };
    }
  };
  var ErrorDiffusionArrayKernel = /* @__PURE__ */ ((ErrorDiffusionArrayKernel2) => {
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["FloydSteinberg"] = 0] = "FloydSteinberg";
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["FalseFloydSteinberg"] = 1] = "FalseFloydSteinberg";
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["Stucki"] = 2] = "Stucki";
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["Atkinson"] = 3] = "Atkinson";
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["Jarvis"] = 4] = "Jarvis";
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["Burkes"] = 5] = "Burkes";
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["Sierra"] = 6] = "Sierra";
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["TwoSierra"] = 7] = "TwoSierra";
    ErrorDiffusionArrayKernel2[ErrorDiffusionArrayKernel2["SierraLite"] = 8] = "SierraLite";
    return ErrorDiffusionArrayKernel2;
  })(ErrorDiffusionArrayKernel || {});
  var ErrorDiffusionArray = class extends AbstractImageQuantizer {
    constructor(colorDistanceCalculator, kernel, serpentine = true, minimumColorDistanceToDither = 0, calculateErrorLikeGIMP = false) {
      super();
      __publicField(this, "_minColorDistance");
      __publicField(this, "_serpentine");
      __publicField(this, "_kernel");
      __publicField(this, "_calculateErrorLikeGIMP");
      __publicField(this, "_distance");
      this._setKernel(kernel);
      this._distance = colorDistanceCalculator;
      this._minColorDistance = minimumColorDistanceToDither;
      this._serpentine = serpentine;
      this._calculateErrorLikeGIMP = calculateErrorLikeGIMP;
    }
    *quantize(pointContainer, palette) {
      const pointArray = pointContainer.getPointArray();
      const originalPoint = new Point();
      const width = pointContainer.getWidth();
      const height = pointContainer.getHeight();
      const errorLines = [];
      let dir = 1;
      let maxErrorLines = 1;
      for (const kernel of this._kernel) {
        const kernelErrorLines = kernel[2] + 1;
        if (maxErrorLines < kernelErrorLines)
          maxErrorLines = kernelErrorLines;
      }
      for (let i = 0; i < maxErrorLines; i++) {
        this._fillErrorLine(errorLines[i] = [], width);
      }
      const tracker = new ProgressTracker(height, 99);
      for (let y2 = 0; y2 < height; y2++) {
        if (tracker.shouldNotify(y2)) {
          yield {
            progress: tracker.progress
          };
        }
        if (this._serpentine)
          dir *= -1;
        const lni = y2 * width;
        const xStart = dir === 1 ? 0 : width - 1;
        const xEnd = dir === 1 ? width : -1;
        this._fillErrorLine(errorLines[0], width);
        errorLines.push(errorLines.shift());
        const errorLine = errorLines[0];
        for (let x2 = xStart, idx = lni + xStart; x2 !== xEnd; x2 += dir, idx += dir) {
          const point = pointArray[idx];
          const error = errorLine[x2];
          originalPoint.from(point);
          const correctedPoint = Point.createByRGBA(inRange0to255Rounded(point.r + error[0]), inRange0to255Rounded(point.g + error[1]), inRange0to255Rounded(point.b + error[2]), inRange0to255Rounded(point.a + error[3]));
          const palettePoint = palette.getNearestColor(this._distance, correctedPoint);
          point.from(palettePoint);
          if (this._minColorDistance) {
            const dist = this._distance.calculateNormalized(originalPoint, palettePoint);
            if (dist < this._minColorDistance)
              continue;
          }
          let er;
          let eg;
          let eb;
          let ea;
          if (this._calculateErrorLikeGIMP) {
            er = correctedPoint.r - palettePoint.r;
            eg = correctedPoint.g - palettePoint.g;
            eb = correctedPoint.b - palettePoint.b;
            ea = correctedPoint.a - palettePoint.a;
          } else {
            er = originalPoint.r - palettePoint.r;
            eg = originalPoint.g - palettePoint.g;
            eb = originalPoint.b - palettePoint.b;
            ea = originalPoint.a - palettePoint.a;
          }
          const dStart = dir === 1 ? 0 : this._kernel.length - 1;
          const dEnd = dir === 1 ? this._kernel.length : -1;
          for (let i = dStart; i !== dEnd; i += dir) {
            const x1 = this._kernel[i][1] * dir;
            const y1 = this._kernel[i][2];
            if (x1 + x2 >= 0 && x1 + x2 < width && y1 + y2 >= 0 && y1 + y2 < height) {
              const d = this._kernel[i][0];
              const e = errorLines[y1][x1 + x2];
              e[0] += er * d;
              e[1] += eg * d;
              e[2] += eb * d;
              e[3] += ea * d;
            }
          }
        }
      }
      yield {
        pointContainer,
        progress: 100
      };
    }
    _fillErrorLine(errorLine, width) {
      if (errorLine.length > width) {
        errorLine.length = width;
      }
      const l = errorLine.length;
      for (let i = 0; i < l; i++) {
        const error = errorLine[i];
        error[0] = error[1] = error[2] = error[3] = 0;
      }
      for (let i = l; i < width; i++) {
        errorLine[i] = [0, 0, 0, 0];
      }
    }
    _setKernel(kernel) {
      switch (kernel) {
        case 0:
          this._kernel = [
            [7 / 16, 1, 0],
            [3 / 16, -1, 1],
            [5 / 16, 0, 1],
            [1 / 16, 1, 1]
          ];
          break;
        case 1:
          this._kernel = [
            [3 / 8, 1, 0],
            [3 / 8, 0, 1],
            [2 / 8, 1, 1]
          ];
          break;
        case 2:
          this._kernel = [
            [8 / 42, 1, 0],
            [4 / 42, 2, 0],
            [2 / 42, -2, 1],
            [4 / 42, -1, 1],
            [8 / 42, 0, 1],
            [4 / 42, 1, 1],
            [2 / 42, 2, 1],
            [1 / 42, -2, 2],
            [2 / 42, -1, 2],
            [4 / 42, 0, 2],
            [2 / 42, 1, 2],
            [1 / 42, 2, 2]
          ];
          break;
        case 3:
          this._kernel = [
            [1 / 8, 1, 0],
            [1 / 8, 2, 0],
            [1 / 8, -1, 1],
            [1 / 8, 0, 1],
            [1 / 8, 1, 1],
            [1 / 8, 0, 2]
          ];
          break;
        case 4:
          this._kernel = [
            [7 / 48, 1, 0],
            [5 / 48, 2, 0],
            [3 / 48, -2, 1],
            [5 / 48, -1, 1],
            [7 / 48, 0, 1],
            [5 / 48, 1, 1],
            [3 / 48, 2, 1],
            [1 / 48, -2, 2],
            [3 / 48, -1, 2],
            [5 / 48, 0, 2],
            [3 / 48, 1, 2],
            [1 / 48, 2, 2]
          ];
          break;
        case 5:
          this._kernel = [
            [8 / 32, 1, 0],
            [4 / 32, 2, 0],
            [2 / 32, -2, 1],
            [4 / 32, -1, 1],
            [8 / 32, 0, 1],
            [4 / 32, 1, 1],
            [2 / 32, 2, 1]
          ];
          break;
        case 6:
          this._kernel = [
            [5 / 32, 1, 0],
            [3 / 32, 2, 0],
            [2 / 32, -2, 1],
            [4 / 32, -1, 1],
            [5 / 32, 0, 1],
            [4 / 32, 1, 1],
            [2 / 32, 2, 1],
            [2 / 32, -1, 2],
            [3 / 32, 0, 2],
            [2 / 32, 1, 2]
          ];
          break;
        case 7:
          this._kernel = [
            [4 / 16, 1, 0],
            [3 / 16, 2, 0],
            [1 / 16, -2, 1],
            [2 / 16, -1, 1],
            [3 / 16, 0, 1],
            [2 / 16, 1, 1],
            [1 / 16, 2, 1]
          ];
          break;
        case 8:
          this._kernel = [
            [2 / 4, 1, 0],
            [1 / 4, -1, 1],
            [1 / 4, 0, 1]
          ];
          break;
        default:
          throw new Error(`ErrorDiffusionArray: unknown kernel = ${kernel}`);
      }
    }
  };
  function* hilbertCurve(width, height, callback) {
    const maxBound = Math.max(width, height);
    const level = Math.floor(Math.log(maxBound) / Math.log(2) + 1);
    const tracker = new ProgressTracker(width * height, 99);
    const data = {
      width,
      height,
      level,
      callback,
      tracker,
      index: 0,
      x: 0,
      y: 0
    };
    yield* walkHilbert(
      data,
      1
      /* UP */
    );
    visit(
      data,
      0
      /* NONE */
    );
  }
  function* walkHilbert(data, direction) {
    if (data.level < 1)
      return;
    if (data.tracker.shouldNotify(data.index)) {
      yield { progress: data.tracker.progress };
    }
    data.level--;
    switch (direction) {
      case 2:
        yield* walkHilbert(
          data,
          1
          /* UP */
        );
        visit(
          data,
          3
          /* RIGHT */
        );
        yield* walkHilbert(
          data,
          2
          /* LEFT */
        );
        visit(
          data,
          4
          /* DOWN */
        );
        yield* walkHilbert(
          data,
          2
          /* LEFT */
        );
        visit(
          data,
          2
          /* LEFT */
        );
        yield* walkHilbert(
          data,
          4
          /* DOWN */
        );
        break;
      case 3:
        yield* walkHilbert(
          data,
          4
          /* DOWN */
        );
        visit(
          data,
          2
          /* LEFT */
        );
        yield* walkHilbert(
          data,
          3
          /* RIGHT */
        );
        visit(
          data,
          1
          /* UP */
        );
        yield* walkHilbert(
          data,
          3
          /* RIGHT */
        );
        visit(
          data,
          3
          /* RIGHT */
        );
        yield* walkHilbert(
          data,
          1
          /* UP */
        );
        break;
      case 1:
        yield* walkHilbert(
          data,
          2
          /* LEFT */
        );
        visit(
          data,
          4
          /* DOWN */
        );
        yield* walkHilbert(
          data,
          1
          /* UP */
        );
        visit(
          data,
          3
          /* RIGHT */
        );
        yield* walkHilbert(
          data,
          1
          /* UP */
        );
        visit(
          data,
          1
          /* UP */
        );
        yield* walkHilbert(
          data,
          3
          /* RIGHT */
        );
        break;
      case 4:
        yield* walkHilbert(
          data,
          3
          /* RIGHT */
        );
        visit(
          data,
          1
          /* UP */
        );
        yield* walkHilbert(
          data,
          4
          /* DOWN */
        );
        visit(
          data,
          2
          /* LEFT */
        );
        yield* walkHilbert(
          data,
          4
          /* DOWN */
        );
        visit(
          data,
          4
          /* DOWN */
        );
        yield* walkHilbert(
          data,
          2
          /* LEFT */
        );
        break;
    }
    data.level++;
  }
  function visit(data, direction) {
    if (data.x >= 0 && data.x < data.width && data.y >= 0 && data.y < data.height) {
      data.callback(data.x, data.y);
      data.index++;
    }
    switch (direction) {
      case 2:
        data.x--;
        break;
      case 3:
        data.x++;
        break;
      case 1:
        data.y--;
        break;
      case 4:
        data.y++;
        break;
    }
  }
  var ErrorDiffusionRiemersma = class extends AbstractImageQuantizer {
    constructor(colorDistanceCalculator, errorQueueSize = 16, errorPropagation = 1) {
      super();
      __publicField(this, "_distance");
      __publicField(this, "_weights");
      __publicField(this, "_errorQueueSize");
      this._distance = colorDistanceCalculator;
      this._errorQueueSize = errorQueueSize;
      this._weights = ErrorDiffusionRiemersma._createWeights(errorPropagation, errorQueueSize);
    }
    *quantize(pointContainer, palette) {
      const pointArray = pointContainer.getPointArray();
      const width = pointContainer.getWidth();
      const height = pointContainer.getHeight();
      const errorQueue = [];
      let head = 0;
      for (let i = 0; i < this._errorQueueSize; i++) {
        errorQueue[i] = { r: 0, g: 0, b: 0, a: 0 };
      }
      yield* hilbertCurve(width, height, (x2, y2) => {
        const p = pointArray[x2 + y2 * width];
        let { r, g, b, a } = p;
        for (let i = 0; i < this._errorQueueSize; i++) {
          const weight = this._weights[i];
          const e = errorQueue[(i + head) % this._errorQueueSize];
          r += e.r * weight;
          g += e.g * weight;
          b += e.b * weight;
          a += e.a * weight;
        }
        const correctedPoint = Point.createByRGBA(inRange0to255Rounded(r), inRange0to255Rounded(g), inRange0to255Rounded(b), inRange0to255Rounded(a));
        const quantizedPoint = palette.getNearestColor(this._distance, correctedPoint);
        head = (head + 1) % this._errorQueueSize;
        const tail = (head + this._errorQueueSize - 1) % this._errorQueueSize;
        errorQueue[tail].r = p.r - quantizedPoint.r;
        errorQueue[tail].g = p.g - quantizedPoint.g;
        errorQueue[tail].b = p.b - quantizedPoint.b;
        errorQueue[tail].a = p.a - quantizedPoint.a;
        p.from(quantizedPoint);
      });
      yield {
        pointContainer,
        progress: 100
      };
    }
    static _createWeights(errorPropagation, errorQueueSize) {
      const weights = [];
      const multiplier = Math.exp(Math.log(errorQueueSize) / (errorQueueSize - 1));
      for (let i = 0, next = 1; i < errorQueueSize; i++) {
        weights[i] = (next + 0.5 | 0) / errorQueueSize * errorPropagation;
        next *= multiplier;
      }
      return weights;
    }
  };
  var quality_exports = {};
  __export(quality_exports, {
    ssim: () => ssim
  });
  var K1 = 0.01;
  var K2 = 0.03;
  function ssim(image1, image2) {
    if (image1.getHeight() !== image2.getHeight() || image1.getWidth() !== image2.getWidth()) {
      throw new Error("Images have different sizes!");
    }
    const bitsPerComponent = 8;
    const L = (1 << bitsPerComponent) - 1;
    const c1 = (K1 * L) ** 2;
    const c2 = (K2 * L) ** 2;
    let numWindows = 0;
    let mssim = 0;
    iterate(image1, image2, (lumaValues1, lumaValues2, averageLumaValue1, averageLumaValue2) => {
      let sigxy = 0;
      let sigsqx = 0;
      let sigsqy = 0;
      for (let i = 0; i < lumaValues1.length; i++) {
        sigsqx += (lumaValues1[i] - averageLumaValue1) ** 2;
        sigsqy += (lumaValues2[i] - averageLumaValue2) ** 2;
        sigxy += (lumaValues1[i] - averageLumaValue1) * (lumaValues2[i] - averageLumaValue2);
      }
      const numPixelsInWin = lumaValues1.length - 1;
      sigsqx /= numPixelsInWin;
      sigsqy /= numPixelsInWin;
      sigxy /= numPixelsInWin;
      const numerator = (2 * averageLumaValue1 * averageLumaValue2 + c1) * (2 * sigxy + c2);
      const denominator = (averageLumaValue1 ** 2 + averageLumaValue2 ** 2 + c1) * (sigsqx + sigsqy + c2);
      const ssim2 = numerator / denominator;
      mssim += ssim2;
      numWindows++;
    });
    return mssim / numWindows;
  }
  function iterate(image1, image2, callback) {
    const windowSize = 8;
    const width = image1.getWidth();
    const height = image1.getHeight();
    for (let y2 = 0; y2 < height; y2 += windowSize) {
      for (let x2 = 0; x2 < width; x2 += windowSize) {
        const windowWidth = Math.min(windowSize, width - x2);
        const windowHeight = Math.min(windowSize, height - y2);
        const lumaValues1 = calculateLumaValuesForWindow(image1, x2, y2, windowWidth, windowHeight);
        const lumaValues2 = calculateLumaValuesForWindow(image2, x2, y2, windowWidth, windowHeight);
        const averageLuma1 = calculateAverageLuma(lumaValues1);
        const averageLuma2 = calculateAverageLuma(lumaValues2);
        callback(lumaValues1, lumaValues2, averageLuma1, averageLuma2);
      }
    }
  }
  function calculateLumaValuesForWindow(image, x2, y2, width, height) {
    const pointArray = image.getPointArray();
    const lumaValues = [];
    let counter = 0;
    for (let j = y2; j < y2 + height; j++) {
      const offset = j * image.getWidth();
      for (let i = x2; i < x2 + width; i++) {
        const point = pointArray[offset + i];
        lumaValues[counter] = point.r * 0.2126 + point.g * 0.7152 + point.b * 0.0722;
        counter++;
      }
    }
    return lumaValues;
  }
  function calculateAverageLuma(lumaValues) {
    let sumLuma = 0;
    for (const luma of lumaValues) {
      sumLuma += luma;
    }
    return sumLuma / lumaValues.length;
  }
  var setImmediateImpl = typeof setImmediate === "function" ? setImmediate : typeof process !== "undefined" && typeof (process == null ? void 0 : process.nextTick) === "function" ? (callback) => process.nextTick(callback) : (callback) => setTimeout(callback, 0);
  function buildPaletteSync(images, {
    colorDistanceFormula,
    paletteQuantization,
    colors
  } = {}) {
    const distanceCalculator = colorDistanceFormulaToColorDistance(colorDistanceFormula);
    const paletteQuantizer = paletteQuantizationToPaletteQuantizer(distanceCalculator, paletteQuantization, colors);
    images.forEach((image) => paletteQuantizer.sample(image));
    return paletteQuantizer.quantizeSync();
  }
  async function buildPalette(images, {
    colorDistanceFormula,
    paletteQuantization,
    colors,
    onProgress
  } = {}) {
    return new Promise((resolve, reject) => {
      const distanceCalculator = colorDistanceFormulaToColorDistance(colorDistanceFormula);
      const paletteQuantizer = paletteQuantizationToPaletteQuantizer(distanceCalculator, paletteQuantization, colors);
      images.forEach((image) => paletteQuantizer.sample(image));
      let palette;
      const iterator = paletteQuantizer.quantize();
      const next = () => {
        try {
          const result = iterator.next();
          if (result.done) {
            resolve(palette);
          } else {
            if (result.value.palette)
              palette = result.value.palette;
            if (onProgress)
              onProgress(result.value.progress);
            setImmediateImpl(next);
          }
        } catch (error) {
          reject(error);
        }
      };
      setImmediateImpl(next);
    });
  }
  function applyPaletteSync(image, palette, { colorDistanceFormula, imageQuantization } = {}) {
    const distanceCalculator = colorDistanceFormulaToColorDistance(colorDistanceFormula);
    const imageQuantizer = imageQuantizationToImageQuantizer(distanceCalculator, imageQuantization);
    return imageQuantizer.quantizeSync(image, palette);
  }
  async function applyPalette(image, palette, {
    colorDistanceFormula,
    imageQuantization,
    onProgress
  } = {}) {
    return new Promise((resolve, reject) => {
      const distanceCalculator = colorDistanceFormulaToColorDistance(colorDistanceFormula);
      const imageQuantizer = imageQuantizationToImageQuantizer(distanceCalculator, imageQuantization);
      let outPointContainer;
      const iterator = imageQuantizer.quantize(image, palette);
      const next = () => {
        try {
          const result = iterator.next();
          if (result.done) {
            resolve(outPointContainer);
          } else {
            if (result.value.pointContainer) {
              outPointContainer = result.value.pointContainer;
            }
            if (onProgress)
              onProgress(result.value.progress);
            setImmediateImpl(next);
          }
        } catch (error) {
          reject(error);
        }
      };
      setImmediateImpl(next);
    });
  }
  function colorDistanceFormulaToColorDistance(colorDistanceFormula = "euclidean-bt709") {
    switch (colorDistanceFormula) {
      case "cie94-graphic-arts":
        return new CIE94GraphicArts();
      case "cie94-textiles":
        return new CIE94Textiles();
      case "ciede2000":
        return new CIEDE2000();
      case "color-metric":
        return new CMetric();
      case "euclidean":
        return new Euclidean();
      case "euclidean-bt709":
        return new EuclideanBT709();
      case "euclidean-bt709-noalpha":
        return new EuclideanBT709NoAlpha();
      case "manhattan":
        return new Manhattan();
      case "manhattan-bt709":
        return new ManhattanBT709();
      case "manhattan-nommyde":
        return new ManhattanNommyde();
      case "pngquant":
        return new PNGQuant();
      default:
        throw new Error(`Unknown colorDistanceFormula ${colorDistanceFormula}`);
    }
  }
  function imageQuantizationToImageQuantizer(distanceCalculator, imageQuantization = "floyd-steinberg") {
    switch (imageQuantization) {
      case "nearest":
        return new NearestColor(distanceCalculator);
      case "riemersma":
        return new ErrorDiffusionRiemersma(distanceCalculator);
      case "floyd-steinberg":
        return new ErrorDiffusionArray(
          distanceCalculator,
          0
          /* FloydSteinberg */
        );
      case "false-floyd-steinberg":
        return new ErrorDiffusionArray(
          distanceCalculator,
          1
          /* FalseFloydSteinberg */
        );
      case "stucki":
        return new ErrorDiffusionArray(
          distanceCalculator,
          2
          /* Stucki */
        );
      case "atkinson":
        return new ErrorDiffusionArray(
          distanceCalculator,
          3
          /* Atkinson */
        );
      case "jarvis":
        return new ErrorDiffusionArray(
          distanceCalculator,
          4
          /* Jarvis */
        );
      case "burkes":
        return new ErrorDiffusionArray(
          distanceCalculator,
          5
          /* Burkes */
        );
      case "sierra":
        return new ErrorDiffusionArray(
          distanceCalculator,
          6
          /* Sierra */
        );
      case "two-sierra":
        return new ErrorDiffusionArray(
          distanceCalculator,
          7
          /* TwoSierra */
        );
      case "sierra-lite":
        return new ErrorDiffusionArray(
          distanceCalculator,
          8
          /* SierraLite */
        );
      default:
        throw new Error(`Unknown imageQuantization ${imageQuantization}`);
    }
  }
  function paletteQuantizationToPaletteQuantizer(distanceCalculator, paletteQuantization = "wuquant", colors = 256) {
    switch (paletteQuantization) {
      case "neuquant":
        return new NeuQuant(distanceCalculator, colors);
      case "rgbquant":
        return new RGBQuant(distanceCalculator, colors);
      case "wuquant":
        return new WuQuant(distanceCalculator, colors);
      case "neuquant-float":
        return new NeuQuantFloat(distanceCalculator, colors);
      default:
        throw new Error(`Unknown paletteQuantization ${paletteQuantization}`);
    }
  }
  imageQ = __toCommonJS(src_exports);
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * cie94.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * ciede2000.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * cmetric.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * common.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * constants.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * ditherErrorDiffusionArray.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * euclidean.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * helper.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * hueStatistics.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * iq.ts - Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * lab2rgb.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * lab2xyz.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * manhattanNeuQuant.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * nearestColor.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * palette.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * pngQuant.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * point.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * pointContainer.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * rgb2hsl.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * rgb2lab.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * rgb2xyz.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * ssim.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * wuQuant.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * xyz2lab.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * xyz2rgb.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * MIT License
   *
   * Copyright 2015-2018 Igor Bezkrovnyi
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to
   * deal in the Software without restriction, including without limitation the
   * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
   * sell copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
   * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
   * IN THE SOFTWARE.
   *
   * riemersma.ts - part of Image Quantization Library
   */
  /**
   * @preserve TypeScript port:
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * colorHistogram.ts - part of Image Quantization Library
   */
  /**
   * @preserve TypeScript port:
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * neuquant.ts - part of Image Quantization Library
   */
  /**
   * @preserve TypeScript port:
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * rgbquant.ts - part of Image Quantization Library
   */
  return imageQ;
}
var gifframe = {};
var hasRequiredGifframe;
function requireGifframe() {
  if (hasRequiredGifframe)
    return gifframe;
  hasRequiredGifframe = 1;
  const BitmapImage = requireBitmapimage();
  requireGif();
  class GifFrame extends BitmapImage {
    // xOffset - x offset of bitmap on GIF (defaults to 0)
    // yOffset - y offset of bitmap on GIF (defaults to 0)
    // disposalMethod - pixel disposal method when handling partial images
    // delayCentisecs - duration of frame in hundredths of a second
    // interlaced - whether the image is interlaced (defaults to false)
    /**
     * GifFrame is a class representing an image frame of a GIF. GIFs contain one or more instances of GifFrame.
     * 
     * Property | Description
     * --- | ---
     * xOffset | x-coord of position within GIF at which to render the image (defaults to 0)
     * yOffset | y-coord of position within GIF at which to render the image (defaults to 0)
     * disposalMethod | GIF disposal method; only relevant when the frames aren't all the same size (defaults to 2, disposing to background color)
     * delayCentisecs | duration of the frame in hundreths of a second
     * interlaced | boolean indicating whether the frame renders interlaced
     * 
     * Its constructor supports the following signatures:
     * 
     * * new GifFrame(bitmap: {width: number, height: number, data: Buffer}, options?)
     * * new GifFrame(bitmapImage: BitmapImage, options?)
     * * new GifFrame(width: number, height: number, buffer: Buffer, options?)
     * * new GifFrame(width: number, height: number, backgroundRGBA?: number, options?)
     * * new GifFrame(frame: GifFrame)
     * 
     * See the base class BitmapImage for a discussion of all parameters but `options` and `frame`. `options` is an optional argument providing initial values for the above-listed GifFrame properties. Each property within option is itself optional.
     * 
     * Provide a `frame` to the constructor to create a clone of the provided frame. The new frame includes a copy of the provided frame's pixel data so that each can subsequently be modified without affecting each other.
     */
    constructor(...args) {
      super(...args);
      if (args[0] instanceof GifFrame) {
        const source = args[0];
        this.xOffset = source.xOffset;
        this.yOffset = source.yOffset;
        this.disposalMethod = source.disposalMethod;
        this.delayCentisecs = source.delayCentisecs;
        this.interlaced = source.interlaced;
      } else {
        const lastArg = args[args.length - 1];
        let options = {};
        if (typeof lastArg === "object" && !(lastArg instanceof BitmapImage)) {
          options = lastArg;
        }
        this.xOffset = options.xOffset || 0;
        this.yOffset = options.yOffset || 0;
        this.disposalMethod = options.disposalMethod !== void 0 ? options.disposalMethod : GifFrame.DisposeToBackgroundColor;
        this.delayCentisecs = options.delayCentisecs || 8;
        this.interlaced = options.interlaced || false;
      }
    }
    /**
     * Get a summary of the colors found within the frame. The return value is an object of the following form:
     * 
     * Property | Description
     * --- | ---
     * colors | An array of all the opaque colors found within the frame. Each color is given as an RGB number of the form 0xRRGGBB. The array is sorted by increasing number. Will be an empty array when the image is completely transparent.
     * usesTransparency | boolean indicating whether there are any transparent pixels within the frame. A pixel is considered transparent if its alpha value is 0x00.
     * indexCount | The number of color indexes required to represent this palette of colors. It is equal to the number of opaque colors plus one if the image includes transparency.
     * 
     * @return {object} An object representing a color palette as described above.
     */
    getPalette() {
      const colorSet = /* @__PURE__ */ new Set();
      const buf = this.bitmap.data;
      let i = 0;
      let usesTransparency = false;
      while (i < buf.length) {
        if (buf[i + 3] === 0) {
          usesTransparency = true;
        } else {
          const color = buf.readUInt32BE(i, true) >> 8 & 16777215;
          colorSet.add(color);
        }
        i += 4;
      }
      const colors = new Array(colorSet.size);
      const iter = colorSet.values();
      for (i = 0; i < colors.length; ++i) {
        colors[i] = iter.next().value;
      }
      colors.sort((a, b) => a - b);
      let indexCount = colors.length;
      if (usesTransparency) {
        ++indexCount;
      }
      return { colors, usesTransparency, indexCount };
    }
  }
  GifFrame.DisposeToAnything = 0;
  GifFrame.DisposeNothing = 1;
  GifFrame.DisposeToBackgroundColor = 2;
  GifFrame.DisposeToPrevious = 3;
  gifframe.GifFrame = GifFrame;
  return gifframe;
}
var hasRequiredGifutil;
function requireGifutil() {
  if (hasRequiredGifutil)
    return gifutil;
  hasRequiredGifutil = 1;
  (function(exports) {
    const fs = require$$3;
    const ImageQ = requireImageQ();
    const BitmapImage = requireBitmapimage();
    const { GifFrame } = requireGifframe();
    const { GifError: GifError2 } = requireGif();
    const { GifCodec } = requireGifcodec();
    const INVALID_SUFFIXES = [".jpg", ".jpeg", ".png", ".bmp"];
    const defaultCodec = new GifCodec();
    exports.cloneFrames = function(frames) {
      let clones = [];
      frames.forEach((frame) => {
        clones.push(new GifFrame(frame));
      });
      return clones;
    };
    exports.getColorInfo = function(frames, maxGlobalIndex) {
      let usesTransparency = false;
      const palettes = [];
      for (let i = 0; i < frames.length; ++i) {
        let palette = frames[i].getPalette();
        if (palette.usesTransparency) {
          usesTransparency = true;
        }
        if (palette.indexCount > 256) {
          throw new GifError2(`Frame ${i} uses more than 256 color indexes`);
        }
        palettes.push(palette);
      }
      if (maxGlobalIndex === 0) {
        return { usesTransparency, palettes };
      }
      const globalColorSet = /* @__PURE__ */ new Set();
      palettes.forEach((palette) => {
        palette.colors.forEach((color) => {
          globalColorSet.add(color);
        });
      });
      let indexCount = globalColorSet.size;
      if (usesTransparency) {
        ++indexCount;
      }
      if (maxGlobalIndex && indexCount > maxGlobalIndex) {
        return { usesTransparency, palettes };
      }
      const colors = new Array(globalColorSet.size);
      const iter = globalColorSet.values();
      for (let i = 0; i < colors.length; ++i) {
        colors[i] = iter.next().value;
      }
      colors.sort((a, b) => a - b);
      return { colors, indexCount, usesTransparency, palettes };
    };
    exports.copyAsJimp = function(jimp, bitmapImageToCopy) {
      return exports.shareAsJimp(jimp, new BitmapImage(bitmapImageToCopy));
    };
    exports.getMaxDimensions = function(frames) {
      let maxWidth = 0, maxHeight = 0;
      frames.forEach((frame) => {
        const width = frame.xOffset + frame.bitmap.width;
        if (width > maxWidth) {
          maxWidth = width;
        }
        const height = frame.yOffset + frame.bitmap.height;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
      return { maxWidth, maxHeight };
    };
    exports.quantizeDekker = function(imageOrImages, maxColorIndexes, dither) {
      maxColorIndexes = maxColorIndexes || 256;
      _quantize(imageOrImages, "NeuQuantFloat", maxColorIndexes, 0, dither);
    };
    exports.quantizeSorokin = function(imageOrImages, maxColorIndexes, histogram, dither) {
      maxColorIndexes = maxColorIndexes || 256;
      histogram = histogram || "min-pop";
      let histogramID;
      switch (histogram) {
        case "min-pop":
          histogramID = 2;
          break;
        case "top-pop":
          histogramID = 1;
          break;
        default:
          throw new Error(`Invalid quantizeSorokin histogram '${histogram}'`);
      }
      _quantize(imageOrImages, "RGBQuant", maxColorIndexes, histogramID, dither);
    };
    exports.quantizeWu = function(imageOrImages, maxColorIndexes, significantBits, dither) {
      maxColorIndexes = maxColorIndexes || 256;
      significantBits = significantBits || 5;
      if (significantBits < 1 || significantBits > 8) {
        throw new Error("Invalid quantization quality");
      }
      _quantize(imageOrImages, "WuQuant", maxColorIndexes, significantBits, dither);
    };
    exports.read = function(source, decoder2) {
      decoder2 = decoder2 || defaultCodec;
      if (Buffer.isBuffer(source)) {
        return decoder2.decodeGif(source);
      }
      return _readBinary(source).then((buffer2) => {
        return decoder2.decodeGif(buffer2);
      });
    };
    exports.shareAsJimp = function(jimp, bitmapImageToShare) {
      const jimpImage = new jimp(
        bitmapImageToShare.bitmap.width,
        bitmapImageToShare.bitmap.height,
        0
      );
      jimpImage.bitmap.data = bitmapImageToShare.bitmap.data;
      return jimpImage;
    };
    exports.write = function(path, frames, spec, encoder2) {
      encoder2 = encoder2 || defaultCodec;
      const matches = path.match(/\.[a-zA-Z]+$/);
      if (matches !== null && INVALID_SUFFIXES.includes(matches[0].toLowerCase())) {
        throw new Error(`GIF '${path}' has an unexpected suffix`);
      }
      return encoder2.encodeGif(frames, spec).then((gif2) => {
        return _writeBinary(path, gif2.buffer).then(() => {
          return gif2;
        });
      });
    };
    function _quantize(imageOrImages, method, maxColorIndexes, modifier, dither) {
      const images = Array.isArray(imageOrImages) ? imageOrImages : [imageOrImages];
      const ditherAlgs = [
        "FloydSteinberg",
        "FalseFloydSteinberg",
        "Stucki",
        "Atkinson",
        "Jarvis",
        "Burkes",
        "Sierra",
        "TwoSierra",
        "SierraLite"
      ];
      if (dither) {
        if (ditherAlgs.indexOf(dither.ditherAlgorithm) < 0) {
          throw new Error(`Invalid ditherAlgorithm '${dither.ditherAlgorithm}'`);
        }
        if (dither.serpentine === void 0) {
          dither.serpentine = true;
        }
        if (dither.minimumColorDistanceToDither === void 0) {
          dither.minimumColorDistanceToDither = 0;
        }
        if (dither.calculateErrorLikeGIMP === void 0) {
          dither.calculateErrorLikeGIMP = false;
        }
      }
      const distCalculator = new ImageQ.distance.Euclidean();
      const quantizer = new ImageQ.palette[method](distCalculator, maxColorIndexes, modifier);
      let imageMaker;
      if (dither) {
        imageMaker = new ImageQ.image.ErrorDiffusionArray(
          distCalculator,
          ImageQ.image.ErrorDiffusionArrayKernel[dither.ditherAlgorithm],
          dither.serpentine,
          dither.minimumColorDistanceToDither,
          dither.calculateErrorLikeGIMP
        );
      } else {
        imageMaker = new ImageQ.image.NearestColor(distCalculator);
      }
      const inputContainers = [];
      images.forEach((image) => {
        const imageBuf = image.bitmap.data;
        const inputBuf = new ArrayBuffer(imageBuf.length);
        const inputArray = new Uint32Array(inputBuf);
        for (let bi = 0, ai = 0; bi < imageBuf.length; bi += 4, ++ai) {
          inputArray[ai] = imageBuf.readUInt32LE(bi, true);
        }
        const inputContainer = ImageQ.utils.PointContainer.fromUint32Array(
          inputArray,
          image.bitmap.width,
          image.bitmap.height
        );
        quantizer.sample(inputContainer);
        inputContainers.push(inputContainer);
      });
      const limitedPalette = quantizer.quantizeSync();
      for (let i = 0; i < images.length; ++i) {
        const imageBuf = images[i].bitmap.data;
        const outputContainer = imageMaker.quantizeSync(inputContainers[i], limitedPalette);
        const outputArray = outputContainer.toUint32Array();
        for (let bi = 0, ai = 0; bi < imageBuf.length; bi += 4, ++ai) {
          imageBuf.writeUInt32LE(outputArray[ai], bi);
        }
      }
    }
    function _readBinary(path) {
      return new Promise((resolve, reject) => {
        fs.readFile(path, (err, buffer2) => {
          if (err) {
            return reject(err);
          }
          return resolve(buffer2);
        });
      });
    }
    function _writeBinary(path, buffer2) {
      return new Promise((resolve, reject) => {
        fs.writeFile(path, buffer2, (err) => {
          if (err) {
            return reject(err);
          }
          return resolve();
        });
      });
    }
  })(gifutil);
  return gifutil;
}
var hasRequiredGifcodec;
function requireGifcodec() {
  if (hasRequiredGifcodec)
    return gifcodec;
  hasRequiredGifcodec = 1;
  const Omggif = requireOmggif();
  const { Gif, GifError: GifError2 } = requireGif();
  function GifUtil() {
    const data = requireGifutil();
    GifUtil = function() {
      return data;
    };
    return data;
  }
  const { GifFrame } = requireGifframe();
  const PER_GIF_OVERHEAD = 200;
  const PER_FRAME_OVERHEAD = 100;
  class GifCodec {
    // _transparentRGBA - RGB given to transparent pixels (alpha=0) on decode; defaults to null indicating 0x000000, which is fastest
    /**
     * GifCodec is a class that both encodes and decodes GIFs. It implements both the `encode()` method expected of an encoder and the `decode()` method expected of a decoder, and it wraps the `omggif` GIF encoder/decoder package. GifCodec serves as this library's default encoder and decoder, but it's possible to wrap other GIF encoders and decoders for use by `gifwrap` as well. GifCodec will not encode GIFs with interlacing.
     * 
     * Instances of this class are stateless and can be shared across multiple encodings and decodings.
     * 
     * Its constructor takes one option argument:
     * 
     * @param {object} options Optionally takes an objection whose only possible property is `transparentRGB`. Images are internally represented in RGBA format, where A is the alpha value of a pixel. When `transparentRGB` is provided, this RGB value (excluding alpha) is assigned to transparent pixels, which are also given alpha value 0x00. (All opaque pixels are given alpha value 0xFF). The RGB color of transparent pixels shouldn't matter for most applications. Defaults to 0x000000.
     */
    constructor(options = {}) {
      this._transparentRGB = null;
      if (typeof options.transparentRGB === "number" && options.transparentRGB !== 0) {
        this._transparentRGBA = options.transparentRGB * 256;
      }
      this._testInitialBufferSize = 0;
    }
    /**
     * Decodes a GIF from a Buffer to yield an instance of Gif. Transparent pixels of the GIF are given alpha values of 0x00, and opaque pixels are given alpha values of 0xFF. The RGB values of transparent pixels default to 0x000000 but can be overridden by the constructor's `transparentRGB` option.
     * 
     * @param {Buffer} buffer Bytes of an encoded GIF to decode.
     * @return {Promise} A Promise that resolves to an instance of the Gif class, representing the encoded GIF.
     * @throws {GifError} Error upon encountered an encoding-related problem with a GIF, so that the caller can distinguish between software errors and problems with GIFs.
     */
    decodeGif(buffer2) {
      try {
        let reader;
        try {
          reader = new Omggif.GifReader(buffer2);
        } catch (err) {
          throw new GifError2(err);
        }
        const frameCount = reader.numFrames();
        const frames = [];
        const spec = {
          width: reader.width,
          height: reader.height,
          loops: reader.loopCount()
        };
        spec.usesTransparency = false;
        for (let i = 0; i < frameCount; ++i) {
          const frameInfo = this._decodeFrame(reader, i, spec.usesTransparency);
          frames.push(frameInfo.frame);
          if (frameInfo.usesTransparency) {
            spec.usesTransparency = true;
          }
        }
        return Promise.resolve(new Gif(buffer2, frames, spec));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    /**
     * Encodes a GIF from provided frames. Each pixel having an alpha value of 0x00 renders as transparent within the encoding, while all pixels of non-zero alpha value render as opaque.
     * 
     * @param {GifFrame[]} frames Array of frames to encode
     * @param {object} spec An optional object that may provide values for `loops` and `colorScope`, as defined for the Gif class. However, `colorSpace` may also take the value Gif.GlobalColorsPreferred (== 0) to indicate that the encoder should attempt to create only a global color table. `loop` defaults to 0, looping indefinitely, and `colorScope` defaults to Gif.GlobalColorsPreferred.
     * @return {Promise} A Promise that resolves to an instance of the Gif class, representing the encoded GIF.
     * @throws {GifError} Error upon encountered an encoding-related problem with a GIF, so that the caller can distinguish between software errors and problems with GIFs.
     */
    encodeGif(frames, spec = {}) {
      try {
        if (frames === null || frames.length === 0) {
          throw new GifError2("there are no frames");
        }
        const dims = GifUtil().getMaxDimensions(frames);
        spec = Object.assign({}, spec);
        spec.width = dims.maxWidth;
        spec.height = dims.maxHeight;
        spec.loops = spec.loops || 0;
        spec.colorScope = spec.colorScope || Gif.GlobalColorsPreferred;
        return Promise.resolve(this._encodeGif(frames, spec));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    _decodeFrame(reader, frameIndex, alreadyUsedTransparency) {
      let info, buffer2;
      try {
        info = reader.frameInfo(frameIndex);
        buffer2 = new Buffer(reader.width * reader.height * 4);
        reader.decodeAndBlitFrameRGBA(frameIndex, buffer2);
        if (info.width !== reader.width || info.height !== reader.height) {
          if (info.y) {
            buffer2 = buffer2.slice(info.y * reader.width * 4);
          }
          if (reader.width > info.width) {
            for (let ii = 0; ii < info.height; ++ii) {
              buffer2.copy(
                buffer2,
                ii * info.width * 4,
                (info.x + ii * reader.width) * 4,
                (info.x + ii * reader.width) * 4 + info.width * 4
              );
            }
          }
          buffer2 = buffer2.slice(0, info.width * info.height * 4);
        }
      } catch (err) {
        throw new GifError2(err);
      }
      let usesTransparency = false;
      if (this._transparentRGBA === null) {
        if (!alreadyUsedTransparency) {
          for (let i = 3; i < buffer2.length; i += 4) {
            if (buffer2[i] === 0) {
              usesTransparency = true;
              i = buffer2.length;
            }
          }
        }
      } else {
        for (let i = 3; i < buffer2.length; i += 4) {
          if (buffer2[i] === 0) {
            buffer2.writeUInt32BE(this._transparentRGBA, i - 3);
            usesTransparency = true;
          }
        }
      }
      const frame = new GifFrame(info.width, info.height, buffer2, {
        xOffset: info.x,
        yOffset: info.y,
        disposalMethod: info.disposal,
        interlaced: info.interlaced,
        delayCentisecs: info.delay
      });
      return { frame, usesTransparency };
    }
    _encodeGif(frames, spec) {
      let colorInfo;
      if (spec.colorScope === Gif.LocalColorsOnly) {
        colorInfo = GifUtil().getColorInfo(frames, 0);
      } else {
        colorInfo = GifUtil().getColorInfo(frames, 256);
        if (!colorInfo.colors) {
          if (spec.colorScope === Gif.GlobalColorsOnly) {
            throw new GifError2(
              "Too many color indexes for global color table"
            );
          }
          spec.colorScope = Gif.LocalColorsOnly;
        }
      }
      spec.usesTransparency = colorInfo.usesTransparency;
      const localPalettes = colorInfo.palettes;
      if (spec.colorScope === Gif.LocalColorsOnly) {
        const localSizeEst = 2e3;
        return _encodeLocal(frames, spec, localSizeEst, localPalettes);
      }
      const globalSizeEst = 2e3;
      return _encodeGlobal(frames, spec, globalSizeEst, colorInfo);
    }
    _getSizeEstimateGlobal(globalPalette, frames) {
      if (this._testInitialBufferSize > 0) {
        return this._testInitialBufferSize;
      }
      let sizeEst = PER_GIF_OVERHEAD + 3 * 256;
      const pixelBitWidth = _getPixelBitWidth(globalPalette);
      frames.forEach((frame) => {
        sizeEst += _getFrameSizeEst(frame, pixelBitWidth);
      });
      return sizeEst;
    }
    _getSizeEstimateLocal(palettes, frames) {
      if (this._testInitialBufferSize > 0) {
        return this._testInitialBufferSize;
      }
      let sizeEst = PER_GIF_OVERHEAD;
      for (let i = 0; i < frames.length; ++i) {
        const palette = palettes[i];
        const pixelBitWidth = _getPixelBitWidth(palette);
        sizeEst += _getFrameSizeEst(frames[i], pixelBitWidth);
      }
      return sizeEst;
    }
  }
  gifcodec.GifCodec = GifCodec;
  function _colorLookupLinear(colors, color) {
    const index2 = colors.indexOf(color);
    return index2 === -1 ? null : index2;
  }
  function _colorLookupBinary(colors, color) {
    var lo = 0, hi = colors.length - 1, mid;
    while (lo <= hi) {
      mid = Math.floor((lo + hi) / 2);
      if (colors[mid] > color)
        hi = mid - 1;
      else if (colors[mid] < color)
        lo = mid + 1;
      else
        return mid;
    }
    return null;
  }
  function _encodeGlobal(frames, spec, bufferSizeEst, globalPalette) {
    const extendedGlobalPalette = {
      colors: globalPalette.colors.slice(),
      usesTransparency: globalPalette.usesTransparency
    };
    _extendPaletteToPowerOf2(extendedGlobalPalette);
    const options = {
      palette: extendedGlobalPalette.colors,
      loop: spec.loops
    };
    let buffer2 = new Buffer(bufferSizeEst);
    let gifWriter;
    try {
      gifWriter = new Omggif.GifWriter(
        buffer2,
        spec.width,
        spec.height,
        options
      );
    } catch (err) {
      throw new GifError2(err);
    }
    for (let i = 0; i < frames.length; ++i) {
      buffer2 = _writeFrame(gifWriter, i, frames[i], globalPalette, false);
    }
    return new Gif(buffer2.slice(0, gifWriter.end()), frames, spec);
  }
  function _encodeLocal(frames, spec, bufferSizeEst, localPalettes) {
    const options = {
      loop: spec.loops
    };
    let buffer2 = new Buffer(bufferSizeEst);
    let gifWriter;
    try {
      gifWriter = new Omggif.GifWriter(
        buffer2,
        spec.width,
        spec.height,
        options
      );
    } catch (err) {
      throw new GifError2(err);
    }
    for (let i = 0; i < frames.length; ++i) {
      buffer2 = _writeFrame(gifWriter, i, frames[i], localPalettes[i], true);
    }
    return new Gif(buffer2.slice(0, gifWriter.end()), frames, spec);
  }
  function _extendPaletteToPowerOf2(palette) {
    const colors = palette.colors;
    if (palette.usesTransparency) {
      colors.push(0);
    }
    const colorCount = colors.length;
    let powerOf2 = 2;
    while (colorCount > powerOf2) {
      powerOf2 <<= 1;
    }
    colors.length = powerOf2;
    colors.fill(0, colorCount);
  }
  function _getFrameSizeEst(frame, pixelBitWidth) {
    let byteLength = frame.bitmap.width * frame.bitmap.height;
    byteLength = Math.ceil(byteLength * pixelBitWidth / 8);
    byteLength += Math.ceil(byteLength / 255);
    return PER_FRAME_OVERHEAD + byteLength + 3 * 256;
  }
  function _getIndexedImage(frameIndex, frame, palette) {
    const colors = palette.colors;
    const colorToIndexFunc = colors.length <= 8 ? (
      // guess at the break-even
      _colorLookupLinear
    ) : _colorLookupBinary;
    const colorBuffer = frame.bitmap.data;
    const indexBuffer = new Buffer(colorBuffer.length / 4);
    let transparentIndex = colors.length;
    let i = 0, j = 0;
    while (i < colorBuffer.length) {
      if (colorBuffer[i + 3] !== 0) {
        const color = colorBuffer.readUInt32BE(i, true) >> 8 & 16777215;
        indexBuffer[j] = colorToIndexFunc(colors, color);
      } else {
        indexBuffer[j] = transparentIndex;
      }
      i += 4;
      ++j;
    }
    if (palette.usesTransparency) {
      if (transparentIndex === 256) {
        throw new GifError2(`Frame ${frameIndex} already has 256 colorsand so can't use transparency`);
      }
    } else {
      transparentIndex = null;
    }
    return { buffer: indexBuffer, transparentIndex };
  }
  function _getPixelBitWidth(palette) {
    let indexCount = palette.indexCount;
    let pixelBitWidth = 0;
    --indexCount;
    while (indexCount) {
      ++pixelBitWidth;
      indexCount >>= 1;
    }
    return pixelBitWidth > 0 ? pixelBitWidth : 1;
  }
  function _writeFrame(gifWriter, frameIndex, frame, palette, isLocalPalette) {
    if (frame.interlaced) {
      throw new GifError2("writing interlaced GIFs is not supported");
    }
    const frameInfo = _getIndexedImage(frameIndex, frame, palette);
    const options = {
      delay: frame.delayCentisecs,
      disposal: frame.disposalMethod,
      transparent: frameInfo.transparentIndex
    };
    if (isLocalPalette) {
      _extendPaletteToPowerOf2(palette);
      options.palette = palette.colors;
    }
    try {
      let buffer2 = gifWriter.getOutputBuffer();
      let startOfFrame = gifWriter.getOutputBufferPosition();
      let endOfFrame;
      let tryAgain = true;
      while (tryAgain) {
        endOfFrame = gifWriter.addFrame(
          frame.xOffset,
          frame.yOffset,
          frame.bitmap.width,
          frame.bitmap.height,
          frameInfo.buffer,
          options
        );
        tryAgain = false;
        if (endOfFrame >= buffer2.length - 1) {
          const biggerBuffer = new Buffer(buffer2.length * 1.5);
          buffer2.copy(biggerBuffer);
          gifWriter.setOutputBuffer(biggerBuffer);
          gifWriter.setOutputBufferPosition(startOfFrame);
          buffer2 = biggerBuffer;
          tryAgain = true;
        }
      }
      return buffer2;
    } catch (err) {
      throw new GifError2(err);
    }
  }
  return gifcodec;
}
var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc)
    return src;
  hasRequiredSrc = 1;
  const BitmapImage = requireBitmapimage();
  const { Gif, GifError: GifError2 } = requireGif();
  const { GifCodec } = requireGifcodec();
  const { GifFrame } = requireGifframe();
  const GifUtil = requireGifutil();
  src = {
    BitmapImage,
    Gif,
    GifCodec,
    GifFrame,
    GifUtil,
    GifError: GifError2
  };
  return src;
}
var hasRequiredEs$n;
function requireEs$n() {
  if (hasRequiredEs$n)
    return es$m;
  hasRequiredEs$n = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _defineProperty2 = _interopRequireDefault(require$$1$1);
    var _omggif = _interopRequireDefault(requireOmggif());
    var _gifwrap = requireSrc();
    var MIME_TYPE = "image/gif";
    var _default = function _default2() {
      return {
        mime: (0, _defineProperty2["default"])({}, MIME_TYPE, ["gif"]),
        constants: {
          MIME_GIF: MIME_TYPE
        },
        decoders: (0, _defineProperty2["default"])({}, MIME_TYPE, function(data) {
          var gifObj = new _omggif["default"].GifReader(data);
          var gifData = Buffer.alloc(gifObj.width * gifObj.height * 4);
          gifObj.decodeAndBlitFrameRGBA(0, gifData);
          return {
            data: gifData,
            width: gifObj.width,
            height: gifObj.height
          };
        }),
        encoders: (0, _defineProperty2["default"])({}, MIME_TYPE, function(data) {
          var bitmap = new _gifwrap.BitmapImage(data.bitmap);
          _gifwrap.GifUtil.quantizeDekker(bitmap, 256);
          var newFrame = new _gifwrap.GifFrame(bitmap);
          var gifCodec = new _gifwrap.GifCodec();
          return gifCodec.encodeGif([newFrame], {}).then(function(newGif) {
            return newGif.buffer;
          });
        })
      };
    };
    exports["default"] = _default;
  })(es$m);
  return es$m;
}
var hasRequiredEs$m;
function requireEs$m() {
  if (hasRequiredEs$m)
    return es$r;
  hasRequiredEs$m = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _timm = requireTimm();
    var _jpeg = _interopRequireDefault(requireEs$r());
    var _png = _interopRequireDefault(requireEs$q());
    var _bmp = _interopRequireDefault(requireEs$p());
    var _tiff = _interopRequireDefault(requireEs$o());
    var _gif = _interopRequireDefault(requireEs$n());
    var _default = function _default2() {
      return (0, _timm.mergeDeep)((0, _jpeg["default"])(), (0, _png["default"])(), (0, _bmp["default"])(), (0, _tiff["default"])(), (0, _gif["default"])());
    };
    exports["default"] = _default;
  })(es$r);
  return es$r;
}
var es$l = {};
var es$k = {};
var hasRequiredEs$l;
function requireEs$l() {
  if (hasRequiredEs$l)
    return es$k;
  hasRequiredEs$l = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _typeof2 = _interopRequireDefault(require$$1);
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        /**
         * Blits a source image on to this image
         * @param {Jimp} src the source Jimp instance
         * @param {number} x the x position to blit the image
         * @param {number} y the y position to blit the image
         * @param {number} srcx (optional) the x position from which to crop the source image
         * @param {number} srcy (optional) the y position from which to crop the source image
         * @param {number} srcw (optional) the width to which to crop the source image
         * @param {number} srch (optional) the height to which to crop the source image
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp} this for chaining of methods
         */
        blit: function blit(src2, x, y, srcx, srcy, srcw, srch, cb) {
          if (!(src2 instanceof this.constructor)) {
            return _utils.throwError.call(this, "The source must be a Jimp image", cb);
          }
          if (typeof x !== "number" || typeof y !== "number") {
            return _utils.throwError.call(this, "x and y must be numbers", cb);
          }
          if (typeof srcx === "function") {
            cb = srcx;
            srcx = 0;
            srcy = 0;
            srcw = src2.bitmap.width;
            srch = src2.bitmap.height;
          } else if ((0, _typeof2["default"])(srcx) === (0, _typeof2["default"])(srcy) && (0, _typeof2["default"])(srcy) === (0, _typeof2["default"])(srcw) && (0, _typeof2["default"])(srcw) === (0, _typeof2["default"])(srch)) {
            srcx = srcx || 0;
            srcy = srcy || 0;
            srcw = srcw || src2.bitmap.width;
            srch = srch || src2.bitmap.height;
          } else {
            return _utils.throwError.call(this, "srcx, srcy, srcw, srch must be numbers", cb);
          }
          x = Math.round(x);
          y = Math.round(y);
          srcx = Math.round(srcx);
          srcy = Math.round(srcy);
          srcw = Math.round(srcw);
          srch = Math.round(srch);
          var maxWidth = this.bitmap.width;
          var maxHeight = this.bitmap.height;
          var baseImage = this;
          src2.scanQuiet(srcx, srcy, srcw, srch, function(sx, sy, idx) {
            var xOffset = x + sx - srcx;
            var yOffset = y + sy - srcy;
            if (xOffset >= 0 && yOffset >= 0 && maxWidth - xOffset > 0 && maxHeight - yOffset > 0) {
              var dstIdx = baseImage.getPixelIndex(xOffset, yOffset);
              var _src = {
                r: this.bitmap.data[idx],
                g: this.bitmap.data[idx + 1],
                b: this.bitmap.data[idx + 2],
                a: this.bitmap.data[idx + 3]
              };
              var dst = {
                r: baseImage.bitmap.data[dstIdx],
                g: baseImage.bitmap.data[dstIdx + 1],
                b: baseImage.bitmap.data[dstIdx + 2],
                a: baseImage.bitmap.data[dstIdx + 3]
              };
              baseImage.bitmap.data[dstIdx] = (_src.a * (_src.r - dst.r) - dst.r + 255 >> 8) + dst.r;
              baseImage.bitmap.data[dstIdx + 1] = (_src.a * (_src.g - dst.g) - dst.g + 255 >> 8) + dst.g;
              baseImage.bitmap.data[dstIdx + 2] = (_src.a * (_src.b - dst.b) - dst.b + 255 >> 8) + dst.b;
              baseImage.bitmap.data[dstIdx + 3] = this.constructor.limit255(dst.a + _src.a);
            }
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$k);
  return es$k;
}
var es$j = {};
var blurTables = {};
var hasRequiredBlurTables;
function requireBlurTables() {
  if (hasRequiredBlurTables)
    return blurTables;
  hasRequiredBlurTables = 1;
  Object.defineProperty(blurTables, "__esModule", {
    value: true
  });
  blurTables.shgTable = blurTables.mulTable = void 0;
  var mulTable = [1, 57, 41, 21, 203, 34, 97, 73, 227, 91, 149, 62, 105, 45, 39, 137, 241, 107, 3, 173, 39, 71, 65, 238, 219, 101, 187, 87, 81, 151, 141, 133, 249, 117, 221, 209, 197, 187, 177, 169, 5, 153, 73, 139, 133, 127, 243, 233, 223, 107, 103, 99, 191, 23, 177, 171, 165, 159, 77, 149, 9, 139, 135, 131, 253, 245, 119, 231, 224, 109, 211, 103, 25, 195, 189, 23, 45, 175, 171, 83, 81, 79, 155, 151, 147, 9, 141, 137, 67, 131, 129, 251, 123, 30, 235, 115, 113, 221, 217, 53, 13, 51, 50, 49, 193, 189, 185, 91, 179, 175, 43, 169, 83, 163, 5, 79, 155, 19, 75, 147, 145, 143, 35, 69, 17, 67, 33, 65, 255, 251, 247, 243, 239, 59, 29, 229, 113, 111, 219, 27, 213, 105, 207, 51, 201, 199, 49, 193, 191, 47, 93, 183, 181, 179, 11, 87, 43, 85, 167, 165, 163, 161, 159, 157, 155, 77, 19, 75, 37, 73, 145, 143, 141, 35, 138, 137, 135, 67, 33, 131, 129, 255, 63, 250, 247, 61, 121, 239, 237, 117, 29, 229, 227, 225, 111, 55, 109, 216, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 48, 190, 47, 93, 185, 183, 181, 179, 178, 176, 175, 173, 171, 85, 21, 167, 165, 41, 163, 161, 5, 79, 157, 78, 154, 153, 19, 75, 149, 74, 147, 73, 144, 143, 71, 141, 140, 139, 137, 17, 135, 134, 133, 66, 131, 65, 129, 1];
  blurTables.mulTable = mulTable;
  var shgTable = [0, 9, 10, 10, 14, 12, 14, 14, 16, 15, 16, 15, 16, 15, 15, 17, 18, 17, 12, 18, 16, 17, 17, 19, 19, 18, 19, 18, 18, 19, 19, 19, 20, 19, 20, 20, 20, 20, 20, 20, 15, 20, 19, 20, 20, 20, 21, 21, 21, 20, 20, 20, 21, 18, 21, 21, 21, 21, 20, 21, 17, 21, 21, 21, 22, 22, 21, 22, 22, 21, 22, 21, 19, 22, 22, 19, 20, 22, 22, 21, 21, 21, 22, 22, 22, 18, 22, 22, 21, 22, 22, 23, 22, 20, 23, 22, 22, 23, 23, 21, 19, 21, 21, 21, 23, 23, 23, 22, 23, 23, 21, 23, 22, 23, 18, 22, 23, 20, 22, 23, 23, 23, 21, 22, 20, 22, 21, 22, 24, 24, 24, 24, 24, 22, 21, 24, 23, 23, 24, 21, 24, 23, 24, 22, 24, 24, 22, 24, 24, 22, 23, 24, 24, 24, 20, 23, 22, 23, 24, 24, 24, 24, 24, 24, 24, 23, 21, 23, 22, 23, 24, 24, 24, 22, 24, 24, 24, 23, 22, 24, 24, 25, 23, 25, 25, 23, 24, 25, 25, 24, 22, 25, 25, 25, 24, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 23, 25, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 24, 22, 25, 25, 23, 25, 25, 20, 24, 25, 24, 25, 25, 22, 24, 25, 24, 25, 24, 25, 25, 24, 25, 25, 25, 25, 22, 25, 25, 25, 24, 25, 24, 25, 18];
  blurTables.shgTable = shgTable;
  return blurTables;
}
var hasRequiredEs$k;
function requireEs$k() {
  if (hasRequiredEs$k)
    return es$j;
  hasRequiredEs$k = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _blurTables = requireBlurTables();
    var _default = function _default2() {
      return {
        /**
         * A fast blur algorithm that produces similar effect to a Gaussian blur - but MUCH quicker
         * @param {number} r the pixel radius of the blur
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp} this for chaining of methods
         */
        blur: function blur(r, cb) {
          if (typeof r !== "number")
            return _utils.throwError.call(this, "r must be a number", cb);
          if (r < 1)
            return _utils.throwError.call(this, "r must be greater than 0", cb);
          var rsum;
          var gsum;
          var bsum;
          var asum;
          var x;
          var y;
          var i;
          var p;
          var p1;
          var p2;
          var yp;
          var yi;
          var yw;
          var pa;
          var wm = this.bitmap.width - 1;
          var hm = this.bitmap.height - 1;
          var rad1 = r + 1;
          var mulSum = _blurTables.mulTable[r];
          var shgSum = _blurTables.shgTable[r];
          var red = [];
          var green = [];
          var blue = [];
          var alpha = [];
          var vmin = [];
          var vmax = [];
          var iterations = 2;
          while (iterations-- > 0) {
            yi = 0;
            yw = 0;
            for (y = 0; y < this.bitmap.height; y++) {
              rsum = this.bitmap.data[yw] * rad1;
              gsum = this.bitmap.data[yw + 1] * rad1;
              bsum = this.bitmap.data[yw + 2] * rad1;
              asum = this.bitmap.data[yw + 3] * rad1;
              for (i = 1; i <= r; i++) {
                p = yw + ((i > wm ? wm : i) << 2);
                rsum += this.bitmap.data[p++];
                gsum += this.bitmap.data[p++];
                bsum += this.bitmap.data[p++];
                asum += this.bitmap.data[p];
              }
              for (x = 0; x < this.bitmap.width; x++) {
                red[yi] = rsum;
                green[yi] = gsum;
                blue[yi] = bsum;
                alpha[yi] = asum;
                if (y === 0) {
                  vmin[x] = ((p = x + rad1) < wm ? p : wm) << 2;
                  vmax[x] = (p = x - r) > 0 ? p << 2 : 0;
                }
                p1 = yw + vmin[x];
                p2 = yw + vmax[x];
                rsum += this.bitmap.data[p1++] - this.bitmap.data[p2++];
                gsum += this.bitmap.data[p1++] - this.bitmap.data[p2++];
                bsum += this.bitmap.data[p1++] - this.bitmap.data[p2++];
                asum += this.bitmap.data[p1] - this.bitmap.data[p2];
                yi++;
              }
              yw += this.bitmap.width << 2;
            }
            for (x = 0; x < this.bitmap.width; x++) {
              yp = x;
              rsum = red[yp] * rad1;
              gsum = green[yp] * rad1;
              bsum = blue[yp] * rad1;
              asum = alpha[yp] * rad1;
              for (i = 1; i <= r; i++) {
                yp += i > hm ? 0 : this.bitmap.width;
                rsum += red[yp];
                gsum += green[yp];
                bsum += blue[yp];
                asum += alpha[yp];
              }
              yi = x << 2;
              for (y = 0; y < this.bitmap.height; y++) {
                pa = asum * mulSum >>> shgSum;
                this.bitmap.data[yi + 3] = pa;
                if (pa > 255) {
                  this.bitmap.data[yi + 3] = 255;
                }
                if (pa > 0) {
                  pa = 255 / pa;
                  this.bitmap.data[yi] = (rsum * mulSum >>> shgSum) * pa;
                  this.bitmap.data[yi + 1] = (gsum * mulSum >>> shgSum) * pa;
                  this.bitmap.data[yi + 2] = (bsum * mulSum >>> shgSum) * pa;
                } else {
                  this.bitmap.data[yi + 2] = 0;
                  this.bitmap.data[yi + 1] = 0;
                  this.bitmap.data[yi] = 0;
                }
                if (x === 0) {
                  vmin[y] = ((p = y + rad1) < hm ? p : hm) * this.bitmap.width;
                  vmax[y] = (p = y - r) > 0 ? p * this.bitmap.width : 0;
                }
                p1 = x + vmin[y];
                p2 = x + vmax[y];
                rsum += red[p1] - red[p2];
                gsum += green[p1] - green[p2];
                bsum += blue[p1] - blue[p2];
                asum += alpha[p1] - alpha[p2];
                yi += this.bitmap.width << 2;
              }
            }
          }
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$j);
  return es$j;
}
var es$i = {};
var hasRequiredEs$j;
function requireEs$j() {
  if (hasRequiredEs$j)
    return es$i;
  hasRequiredEs$j = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        circle: function circle() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var cb = arguments.length > 1 ? arguments[1] : void 0;
          if (typeof options === "function") {
            cb = options;
            options = {};
          }
          var radius = options.radius || (this.bitmap.width > this.bitmap.height ? this.bitmap.height : this.bitmap.width) / 2;
          var center = {
            x: typeof options.x === "number" ? options.x : this.bitmap.width / 2,
            y: typeof options.y === "number" ? options.y : this.bitmap.height / 2
          };
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            var curR = Math.sqrt(Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2));
            if (radius - curR <= 0) {
              this.bitmap.data[idx + 3] = 0;
            } else if (radius - curR < 1) {
              this.bitmap.data[idx + 3] = 255 * (radius - curR);
            }
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$i);
  return es$i;
}
var es$h = {};
var hasRequiredEs$i;
function requireEs$i() {
  if (hasRequiredEs$i)
    return es$h;
  hasRequiredEs$i = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
    var _tinycolor = _interopRequireDefault(requireTinycolor());
    var _utils = requireEs$u();
    function applyKernel(im, kernel, x, y) {
      var value = [0, 0, 0];
      var size = (kernel.length - 1) / 2;
      for (var kx = 0; kx < kernel.length; kx += 1) {
        for (var ky = 0; ky < kernel[kx].length; ky += 1) {
          var idx = im.getPixelIndex(x + kx - size, y + ky - size);
          value[0] += im.bitmap.data[idx] * kernel[kx][ky];
          value[1] += im.bitmap.data[idx + 1] * kernel[kx][ky];
          value[2] += im.bitmap.data[idx + 2] * kernel[kx][ky];
        }
      }
      return value;
    }
    var isDef = function isDef2(v) {
      return typeof v !== "undefined" && v !== null;
    };
    function greyscale(cb) {
      this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
        var grey = parseInt(0.2126 * this.bitmap.data[idx] + 0.7152 * this.bitmap.data[idx + 1] + 0.0722 * this.bitmap.data[idx + 2], 10);
        this.bitmap.data[idx] = grey;
        this.bitmap.data[idx + 1] = grey;
        this.bitmap.data[idx + 2] = grey;
      });
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, this);
      }
      return this;
    }
    function mix(clr, clr2) {
      var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 50;
      return {
        r: (clr2.r - clr.r) * (p / 100) + clr.r,
        g: (clr2.g - clr.g) * (p / 100) + clr.g,
        b: (clr2.b - clr.b) * (p / 100) + clr.b
      };
    }
    function colorFn(actions, cb) {
      var _this = this;
      if (!actions || !Array.isArray(actions)) {
        return _utils.throwError.call(this, "actions must be an array", cb);
      }
      actions = actions.map(function(action) {
        if (action.apply === "xor" || action.apply === "mix") {
          action.params[0] = (0, _tinycolor["default"])(action.params[0]).toRgb();
        }
        return action;
      });
      this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
        var clr = {
          r: _this.bitmap.data[idx],
          g: _this.bitmap.data[idx + 1],
          b: _this.bitmap.data[idx + 2]
        };
        var colorModifier = function colorModifier2(i, amount) {
          return _this.constructor.limit255(clr[i] + amount);
        };
        actions.forEach(function(action) {
          if (action.apply === "mix") {
            clr = mix(clr, action.params[0], action.params[1]);
          } else if (action.apply === "tint") {
            clr = mix(clr, {
              r: 255,
              g: 255,
              b: 255
            }, action.params[0]);
          } else if (action.apply === "shade") {
            clr = mix(clr, {
              r: 0,
              g: 0,
              b: 0
            }, action.params[0]);
          } else if (action.apply === "xor") {
            clr = {
              r: clr.r ^ action.params[0].r,
              g: clr.g ^ action.params[0].g,
              b: clr.b ^ action.params[0].b
            };
          } else if (action.apply === "red") {
            clr.r = colorModifier("r", action.params[0]);
          } else if (action.apply === "green") {
            clr.g = colorModifier("g", action.params[0]);
          } else if (action.apply === "blue") {
            clr.b = colorModifier("b", action.params[0]);
          } else {
            var _clr;
            if (action.apply === "hue") {
              action.apply = "spin";
            }
            clr = (0, _tinycolor["default"])(clr);
            if (!clr[action.apply]) {
              return _utils.throwError.call(_this, "action " + action.apply + " not supported", cb);
            }
            clr = (_clr = clr)[action.apply].apply(_clr, (0, _toConsumableArray2["default"])(action.params)).toRgb();
          }
        });
        _this.bitmap.data[idx] = clr.r;
        _this.bitmap.data[idx + 1] = clr.g;
        _this.bitmap.data[idx + 2] = clr.b;
      });
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, this);
      }
      return this;
    }
    var _default = function _default2() {
      return {
        /**
         * Adjusts the brightness of the image
         * @param {number} val the amount to adjust the brightness, a number between -1 and +1
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        brightness: function brightness(val, cb) {
          if (typeof val !== "number") {
            return _utils.throwError.call(this, "val must be numbers", cb);
          }
          if (val < -1 || val > 1) {
            return _utils.throwError.call(this, "val must be a number between -1 and +1", cb);
          }
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            if (val < 0) {
              this.bitmap.data[idx] = this.bitmap.data[idx] * (1 + val);
              this.bitmap.data[idx + 1] = this.bitmap.data[idx + 1] * (1 + val);
              this.bitmap.data[idx + 2] = this.bitmap.data[idx + 2] * (1 + val);
            } else {
              this.bitmap.data[idx] = this.bitmap.data[idx] + (255 - this.bitmap.data[idx]) * val;
              this.bitmap.data[idx + 1] = this.bitmap.data[idx + 1] + (255 - this.bitmap.data[idx + 1]) * val;
              this.bitmap.data[idx + 2] = this.bitmap.data[idx + 2] + (255 - this.bitmap.data[idx + 2]) * val;
            }
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Adjusts the contrast of the image
         * @param {number} val the amount to adjust the contrast, a number between -1 and +1
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        contrast: function contrast(val, cb) {
          if (typeof val !== "number") {
            return _utils.throwError.call(this, "val must be numbers", cb);
          }
          if (val < -1 || val > 1) {
            return _utils.throwError.call(this, "val must be a number between -1 and +1", cb);
          }
          var factor = (val + 1) / (1 - val);
          function adjust(value) {
            value = Math.floor(factor * (value - 127) + 127);
            return value < 0 ? 0 : value > 255 ? 255 : value;
          }
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            this.bitmap.data[idx] = adjust(this.bitmap.data[idx]);
            this.bitmap.data[idx + 1] = adjust(this.bitmap.data[idx + 1]);
            this.bitmap.data[idx + 2] = adjust(this.bitmap.data[idx + 2]);
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Apply a posterize effect
         * @param {number} n the amount to adjust the contrast, minimum threshold is two
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        posterize: function posterize(n, cb) {
          if (typeof n !== "number") {
            return _utils.throwError.call(this, "n must be numbers", cb);
          }
          if (n < 2) {
            n = 2;
          }
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            this.bitmap.data[idx] = Math.floor(this.bitmap.data[idx] / 255 * (n - 1)) / (n - 1) * 255;
            this.bitmap.data[idx + 1] = Math.floor(this.bitmap.data[idx + 1] / 255 * (n - 1)) / (n - 1) * 255;
            this.bitmap.data[idx + 2] = Math.floor(this.bitmap.data[idx + 2] / 255 * (n - 1)) / (n - 1) * 255;
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Removes colour from the image using ITU Rec 709 luminance values
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        greyscale,
        // Alias of greyscale for our American friends
        grayscale: greyscale,
        /**
         * Multiplies the opacity of each pixel by a factor between 0 and 1
         * @param {number} f A number, the factor by which to multiply the opacity of each pixel
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        opacity: function opacity(f, cb) {
          if (typeof f !== "number")
            return _utils.throwError.call(this, "f must be a number", cb);
          if (f < 0 || f > 1)
            return _utils.throwError.call(this, "f must be a number from 0 to 1", cb);
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            var v = this.bitmap.data[idx + 3] * f;
            this.bitmap.data[idx + 3] = v;
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Applies a sepia tone to the image
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        sepia: function sepia(cb) {
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            var red = this.bitmap.data[idx];
            var green = this.bitmap.data[idx + 1];
            var blue = this.bitmap.data[idx + 2];
            red = red * 0.393 + green * 0.769 + blue * 0.189;
            green = red * 0.349 + green * 0.686 + blue * 0.168;
            blue = red * 0.272 + green * 0.534 + blue * 0.131;
            this.bitmap.data[idx] = red < 255 ? red : 255;
            this.bitmap.data[idx + 1] = green < 255 ? green : 255;
            this.bitmap.data[idx + 2] = blue < 255 ? blue : 255;
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Fades each pixel by a factor between 0 and 1
         * @param {number} f A number from 0 to 1. 0 will haven no effect. 1 will turn the image completely transparent.
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        fade: function fade(f, cb) {
          if (typeof f !== "number") {
            return _utils.throwError.call(this, "f must be a number", cb);
          }
          if (f < 0 || f > 1) {
            return _utils.throwError.call(this, "f must be a number from 0 to 1", cb);
          }
          this.opacity(1 - f);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Adds each element of the image to its local neighbors, weighted by the kernel
         * @param {array} kernel a matrix to weight the neighbors sum
         * @param {string} edgeHandling (optional) define how to sum pixels from outside the border
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        convolution: function convolution(kernel, edgeHandling, cb) {
          if (typeof edgeHandling === "function" && typeof cb === "undefined") {
            cb = edgeHandling;
            edgeHandling = null;
          }
          if (!edgeHandling) {
            edgeHandling = this.constructor.EDGE_EXTEND;
          }
          var newData = Buffer.from(this.bitmap.data);
          var kRows = kernel.length;
          var kCols = kernel[0].length;
          var rowEnd = Math.floor(kRows / 2);
          var colEnd = Math.floor(kCols / 2);
          var rowIni = -rowEnd;
          var colIni = -colEnd;
          var weight;
          var rSum;
          var gSum;
          var bSum;
          var ri;
          var gi;
          var bi;
          var xi;
          var yi;
          var idxi;
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            bSum = 0;
            gSum = 0;
            rSum = 0;
            for (var row = rowIni; row <= rowEnd; row++) {
              for (var col = colIni; col <= colEnd; col++) {
                xi = x + col;
                yi = y + row;
                weight = kernel[row + rowEnd][col + colEnd];
                idxi = this.getPixelIndex(xi, yi, edgeHandling);
                if (idxi === -1) {
                  bi = 0;
                  gi = 0;
                  ri = 0;
                } else {
                  ri = this.bitmap.data[idxi + 0];
                  gi = this.bitmap.data[idxi + 1];
                  bi = this.bitmap.data[idxi + 2];
                }
                rSum += weight * ri;
                gSum += weight * gi;
                bSum += weight * bi;
              }
            }
            if (rSum < 0) {
              rSum = 0;
            }
            if (gSum < 0) {
              gSum = 0;
            }
            if (bSum < 0) {
              bSum = 0;
            }
            if (rSum > 255) {
              rSum = 255;
            }
            if (gSum > 255) {
              gSum = 255;
            }
            if (bSum > 255) {
              bSum = 255;
            }
            newData[idx + 0] = rSum;
            newData[idx + 1] = gSum;
            newData[idx + 2] = bSum;
          });
          this.bitmap.data = newData;
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Set the alpha channel on every pixel to fully opaque
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        opaque: function opaque(cb) {
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            this.bitmap.data[idx + 3] = 255;
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Pixelates the image or a region
         * @param {number} size the size of the pixels
         * @param {number} x (optional) the x position of the region to pixelate
         * @param {number} y (optional) the y position of the region to pixelate
         * @param {number} w (optional) the width of the region to pixelate
         * @param {number} h (optional) the height of the region to pixelate
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        pixelate: function pixelate(size, x, y, w, h, cb) {
          if (typeof x === "function") {
            cb = x;
            h = null;
            w = null;
            y = null;
            x = null;
          } else {
            if (typeof size !== "number") {
              return _utils.throwError.call(this, "size must be a number", cb);
            }
            if (isDef(x) && typeof x !== "number") {
              return _utils.throwError.call(this, "x must be a number", cb);
            }
            if (isDef(y) && typeof y !== "number") {
              return _utils.throwError.call(this, "y must be a number", cb);
            }
            if (isDef(w) && typeof w !== "number") {
              return _utils.throwError.call(this, "w must be a number", cb);
            }
            if (isDef(h) && typeof h !== "number") {
              return _utils.throwError.call(this, "h must be a number", cb);
            }
          }
          var kernel = [[1 / 16, 2 / 16, 1 / 16], [2 / 16, 4 / 16, 2 / 16], [1 / 16, 2 / 16, 1 / 16]];
          x = x || 0;
          y = y || 0;
          w = isDef(w) ? w : this.bitmap.width - x;
          h = isDef(h) ? h : this.bitmap.height - y;
          var source = this.cloneQuiet();
          this.scanQuiet(x, y, w, h, function(xx, yx, idx) {
            xx = size * Math.floor(xx / size);
            yx = size * Math.floor(yx / size);
            var value = applyKernel(source, kernel, xx, yx);
            this.bitmap.data[idx] = value[0];
            this.bitmap.data[idx + 1] = value[1];
            this.bitmap.data[idx + 2] = value[2];
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Applies a convolution kernel to the image or a region
         * @param {array} kernel the convolution kernel
         * @param {number} x (optional) the x position of the region to apply convolution to
         * @param {number} y (optional) the y position of the region to apply convolution to
         * @param {number} w (optional) the width of the region to apply convolution to
         * @param {number} h (optional) the height of the region to apply convolution to
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        convolute: function convolute(kernel, x, y, w, h, cb) {
          if (!Array.isArray(kernel))
            return _utils.throwError.call(this, "the kernel must be an array", cb);
          if (typeof x === "function") {
            cb = x;
            x = null;
            y = null;
            w = null;
            h = null;
          } else {
            if (isDef(x) && typeof x !== "number") {
              return _utils.throwError.call(this, "x must be a number", cb);
            }
            if (isDef(y) && typeof y !== "number") {
              return _utils.throwError.call(this, "y must be a number", cb);
            }
            if (isDef(w) && typeof w !== "number") {
              return _utils.throwError.call(this, "w must be a number", cb);
            }
            if (isDef(h) && typeof h !== "number") {
              return _utils.throwError.call(this, "h must be a number", cb);
            }
          }
          var ksize = (kernel.length - 1) / 2;
          x = isDef(x) ? x : ksize;
          y = isDef(y) ? y : ksize;
          w = isDef(w) ? w : this.bitmap.width - x;
          h = isDef(h) ? h : this.bitmap.height - y;
          var source = this.cloneQuiet();
          this.scanQuiet(x, y, w, h, function(xx, yx, idx) {
            var value = applyKernel(source, kernel, xx, yx);
            this.bitmap.data[idx] = this.constructor.limit255(value[0]);
            this.bitmap.data[idx + 1] = this.constructor.limit255(value[1]);
            this.bitmap.data[idx + 2] = this.constructor.limit255(value[2]);
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Apply multiple color modification rules
         * @param {array} actions list of color modification rules, in following format: { apply: '<rule-name>', params: [ <rule-parameters> ]  }
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp }this for chaining of methods
         */
        color: colorFn,
        colour: colorFn
      };
    };
    exports["default"] = _default;
  })(es$h);
  return es$h;
}
var es$g = {};
var hasRequiredEs$h;
function requireEs$h() {
  if (hasRequiredEs$h)
    return es$g;
  hasRequiredEs$h = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        contain: function contain(w, h, alignBits, mode, cb) {
          if (typeof w !== "number" || typeof h !== "number") {
            return _utils.throwError.call(this, "w and h must be numbers", cb);
          }
          if (typeof alignBits === "string") {
            if (typeof mode === "function" && typeof cb === "undefined")
              cb = mode;
            mode = alignBits;
            alignBits = null;
          }
          if (typeof alignBits === "function") {
            if (typeof cb === "undefined")
              cb = alignBits;
            mode = null;
            alignBits = null;
          }
          if (typeof mode === "function" && typeof cb === "undefined") {
            cb = mode;
            mode = null;
          }
          alignBits = alignBits || this.constructor.HORIZONTAL_ALIGN_CENTER | this.constructor.VERTICAL_ALIGN_MIDDLE;
          var hbits = alignBits & (1 << 3) - 1;
          var vbits = alignBits >> 3;
          if (!(hbits !== 0 && !(hbits & hbits - 1) || vbits !== 0 && !(vbits & vbits - 1))) {
            return _utils.throwError.call(this, "only use one flag per alignment direction", cb);
          }
          var alignH = hbits >> 1;
          var alignV = vbits >> 1;
          var f = w / h > this.bitmap.width / this.bitmap.height ? h / this.bitmap.height : w / this.bitmap.width;
          var c = this.cloneQuiet().scale(f, mode);
          this.resize(w, h, mode);
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            this.bitmap.data.writeUInt32BE(this._background, idx);
          });
          this.blit(c, (this.bitmap.width - c.bitmap.width) / 2 * alignH, (this.bitmap.height - c.bitmap.height) / 2 * alignV);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$g);
  return es$g;
}
var es$f = {};
var hasRequiredEs$g;
function requireEs$g() {
  if (hasRequiredEs$g)
    return es$f;
  hasRequiredEs$g = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        cover: function cover(w, h, alignBits, mode, cb) {
          if (typeof w !== "number" || typeof h !== "number") {
            return _utils.throwError.call(this, "w and h must be numbers", cb);
          }
          if (alignBits && typeof alignBits === "function" && typeof cb === "undefined") {
            cb = alignBits;
            alignBits = null;
            mode = null;
          } else if (typeof mode === "function" && typeof cb === "undefined") {
            cb = mode;
            mode = null;
          }
          alignBits = alignBits || this.constructor.HORIZONTAL_ALIGN_CENTER | this.constructor.VERTICAL_ALIGN_MIDDLE;
          var hbits = alignBits & (1 << 3) - 1;
          var vbits = alignBits >> 3;
          if (!(hbits !== 0 && !(hbits & hbits - 1) || vbits !== 0 && !(vbits & vbits - 1)))
            return _utils.throwError.call(this, "only use one flag per alignment direction", cb);
          var alignH = hbits >> 1;
          var alignV = vbits >> 1;
          var f = w / h > this.bitmap.width / this.bitmap.height ? w / this.bitmap.width : h / this.bitmap.height;
          this.scale(f, mode);
          this.crop((this.bitmap.width - w) / 2 * alignH, (this.bitmap.height - h) / 2 * alignV, w, h);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$f);
  return es$f;
}
var es$e = {};
var hasRequiredEs$f;
function requireEs$f() {
  if (hasRequiredEs$f)
    return es$e;
  hasRequiredEs$f = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = pluginCrop;
    var _typeof2 = _interopRequireDefault(require$$1);
    var _utils = requireEs$u();
    function pluginCrop(event) {
      event("crop", function(x, y, w, h, cb) {
        if (typeof x !== "number" || typeof y !== "number")
          return _utils.throwError.call(this, "x and y must be numbers", cb);
        if (typeof w !== "number" || typeof h !== "number")
          return _utils.throwError.call(this, "w and h must be numbers", cb);
        x = Math.round(x);
        y = Math.round(y);
        w = Math.round(w);
        h = Math.round(h);
        if (x === 0 && w === this.bitmap.width) {
          var start = w * y + x << 2;
          var end = start + h * w << 2;
          this.bitmap.data = this.bitmap.data.slice(start, end);
        } else {
          var bitmap = Buffer.allocUnsafe(w * h * 4);
          var offset = 0;
          this.scanQuiet(x, y, w, h, function(x2, y2, idx) {
            var data = this.bitmap.data.readUInt32BE(idx, true);
            bitmap.writeUInt32BE(data, offset, true);
            offset += 4;
          });
          this.bitmap.data = bitmap;
        }
        this.bitmap.width = w;
        this.bitmap.height = h;
        if ((0, _utils.isNodePattern)(cb)) {
          cb.call(this, null, this);
        }
        return this;
      });
      return {
        "class": {
          /**
           * Autocrop same color borders from this image
           * @param {number} tolerance (optional): a percent value of tolerance for pixels color difference (default: 0.0002%)
           * @param {boolean} cropOnlyFrames (optional): flag to crop only real frames: all 4 sides of the image must have some border (default: true)
           * @param {function(Error, Jimp)} cb (optional): a callback for when complete (default: no callback)
           * @returns {Jimp} this for chaining of methods
           */
          autocrop: function autocrop() {
            var w = this.bitmap.width;
            var h = this.bitmap.height;
            var minPixelsPerSide = 1;
            var cb;
            var leaveBorder = 0;
            var tolerance = 2e-4;
            var cropOnlyFrames = true;
            var cropSymmetric = false;
            var ignoreSides = {
              north: false,
              south: false,
              east: false,
              west: false
            };
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            for (var a = 0, len = args.length; a < len; a++) {
              if (typeof args[a] === "number") {
                tolerance = args[a];
              }
              if (typeof args[a] === "boolean") {
                cropOnlyFrames = args[a];
              }
              if (typeof args[a] === "function") {
                cb = args[a];
              }
              if ((0, _typeof2["default"])(args[a]) === "object") {
                var config = args[a];
                if (typeof config.tolerance !== "undefined") {
                  tolerance = config.tolerance;
                }
                if (typeof config.cropOnlyFrames !== "undefined") {
                  cropOnlyFrames = config.cropOnlyFrames;
                }
                if (typeof config.cropSymmetric !== "undefined") {
                  cropSymmetric = config.cropSymmetric;
                }
                if (typeof config.leaveBorder !== "undefined") {
                  leaveBorder = config.leaveBorder;
                }
                if (typeof config.ignoreSides !== "undefined") {
                  ignoreSides = config.ignoreSides;
                }
              }
            }
            var colorTarget = this.getPixelColor(0, 0);
            var rgba1 = this.constructor.intToRGBA(colorTarget);
            var northPixelsToCrop = 0;
            var eastPixelsToCrop = 0;
            var southPixelsToCrop = 0;
            var westPixelsToCrop = 0;
            colorTarget = this.getPixelColor(0, 0);
            if (!ignoreSides.north) {
              north:
                for (var y = 0; y < h - minPixelsPerSide; y++) {
                  for (var x = 0; x < w; x++) {
                    var colorXY = this.getPixelColor(x, y);
                    var rgba2 = this.constructor.intToRGBA(colorXY);
                    if (this.constructor.colorDiff(rgba1, rgba2) > tolerance) {
                      break north;
                    }
                  }
                  northPixelsToCrop++;
                }
            }
            colorTarget = this.getPixelColor(w, 0);
            if (!ignoreSides.east) {
              east:
                for (var _x = 0; _x < w - minPixelsPerSide; _x++) {
                  for (var _y = 0 + northPixelsToCrop; _y < h; _y++) {
                    var _colorXY = this.getPixelColor(_x, _y);
                    var _rgba = this.constructor.intToRGBA(_colorXY);
                    if (this.constructor.colorDiff(rgba1, _rgba) > tolerance) {
                      break east;
                    }
                  }
                  eastPixelsToCrop++;
                }
            }
            colorTarget = this.getPixelColor(0, h);
            if (!ignoreSides.south) {
              south:
                for (var _y2 = h - 1; _y2 >= northPixelsToCrop + minPixelsPerSide; _y2--) {
                  for (var _x2 = w - eastPixelsToCrop - 1; _x2 >= 0; _x2--) {
                    var _colorXY2 = this.getPixelColor(_x2, _y2);
                    var _rgba2 = this.constructor.intToRGBA(_colorXY2);
                    if (this.constructor.colorDiff(rgba1, _rgba2) > tolerance) {
                      break south;
                    }
                  }
                  southPixelsToCrop++;
                }
            }
            colorTarget = this.getPixelColor(w, h);
            if (!ignoreSides.west) {
              west:
                for (var _x3 = w - 1; _x3 >= 0 + eastPixelsToCrop + minPixelsPerSide; _x3--) {
                  for (var _y3 = h - 1; _y3 >= 0 + northPixelsToCrop; _y3--) {
                    var _colorXY3 = this.getPixelColor(_x3, _y3);
                    var _rgba3 = this.constructor.intToRGBA(_colorXY3);
                    if (this.constructor.colorDiff(rgba1, _rgba3) > tolerance) {
                      break west;
                    }
                  }
                  westPixelsToCrop++;
                }
            }
            var doCrop = false;
            westPixelsToCrop -= leaveBorder;
            eastPixelsToCrop -= leaveBorder;
            northPixelsToCrop -= leaveBorder;
            southPixelsToCrop -= leaveBorder;
            if (cropSymmetric) {
              var horizontal = Math.min(eastPixelsToCrop, westPixelsToCrop);
              var vertical = Math.min(northPixelsToCrop, southPixelsToCrop);
              westPixelsToCrop = horizontal;
              eastPixelsToCrop = horizontal;
              northPixelsToCrop = vertical;
              southPixelsToCrop = vertical;
            }
            westPixelsToCrop = westPixelsToCrop >= 0 ? westPixelsToCrop : 0;
            eastPixelsToCrop = eastPixelsToCrop >= 0 ? eastPixelsToCrop : 0;
            northPixelsToCrop = northPixelsToCrop >= 0 ? northPixelsToCrop : 0;
            southPixelsToCrop = southPixelsToCrop >= 0 ? southPixelsToCrop : 0;
            var widthOfRemainingPixels = w - (westPixelsToCrop + eastPixelsToCrop);
            var heightOfRemainingPixels = h - (southPixelsToCrop + northPixelsToCrop);
            if (cropOnlyFrames) {
              doCrop = eastPixelsToCrop !== 0 && northPixelsToCrop !== 0 && westPixelsToCrop !== 0 && southPixelsToCrop !== 0;
            } else {
              doCrop = eastPixelsToCrop !== 0 || northPixelsToCrop !== 0 || westPixelsToCrop !== 0 || southPixelsToCrop !== 0;
            }
            if (doCrop) {
              this.crop(eastPixelsToCrop, northPixelsToCrop, widthOfRemainingPixels, heightOfRemainingPixels);
            }
            if ((0, _utils.isNodePattern)(cb)) {
              cb.call(this, null, this);
            }
            return this;
          }
        }
      };
    }
  })(es$e);
  return es$e;
}
var es$d = {};
var hasRequiredEs$e;
function requireEs$e() {
  if (hasRequiredEs$e)
    return es$d;
  hasRequiredEs$e = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _typeof2 = _interopRequireDefault(require$$1);
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        displace: function displace(map, offset, cb) {
          if ((0, _typeof2["default"])(map) !== "object" || map.constructor !== this.constructor) {
            return _utils.throwError.call(this, "The source must be a Jimp image", cb);
          }
          if (typeof offset !== "number") {
            return _utils.throwError.call(this, "factor must be a number", cb);
          }
          var source = this.cloneQuiet();
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            var displacement = map.bitmap.data[idx] / 256 * offset;
            displacement = Math.round(displacement);
            var ids = this.getPixelIndex(x + displacement, y);
            this.bitmap.data[ids] = source.bitmap.data[idx];
            this.bitmap.data[ids + 1] = source.bitmap.data[idx + 1];
            this.bitmap.data[ids + 2] = source.bitmap.data[idx + 2];
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$d);
  return es$d;
}
var es$c = {};
var hasRequiredEs$d;
function requireEs$d() {
  if (hasRequiredEs$d)
    return es$c;
  hasRequiredEs$d = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    function dither(cb) {
      var rgb565Matrix = [1, 9, 3, 11, 13, 5, 15, 7, 4, 12, 2, 10, 16, 8, 14, 6];
      this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
        var thresholdId = ((y & 3) << 2) + x % 4;
        var dither2 = rgb565Matrix[thresholdId];
        this.bitmap.data[idx] = Math.min(this.bitmap.data[idx] + dither2, 255);
        this.bitmap.data[idx + 1] = Math.min(this.bitmap.data[idx + 1] + dither2, 255);
        this.bitmap.data[idx + 2] = Math.min(this.bitmap.data[idx + 2] + dither2, 255);
      });
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, this);
      }
      return this;
    }
    var _default = function _default2() {
      return {
        dither565: dither,
        dither16: dither
      };
    };
    exports["default"] = _default;
  })(es$c);
  return es$c;
}
var es$b = {};
var hasRequiredEs$c;
function requireEs$c() {
  if (hasRequiredEs$c)
    return es$b;
  hasRequiredEs$c = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        fisheye: function fisheye() {
          var _this = this;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            r: 2.5
          };
          var cb = arguments.length > 1 ? arguments[1] : void 0;
          if (typeof options === "function") {
            cb = options;
            options = {
              r: 2.5
            };
          }
          var source = this.cloneQuiet();
          var _source$bitmap = source.bitmap, width = _source$bitmap.width, height = _source$bitmap.height;
          source.scanQuiet(0, 0, width, height, function(x, y) {
            var hx = x / width;
            var hy = y / height;
            var r = Math.sqrt(Math.pow(hx - 0.5, 2) + Math.pow(hy - 0.5, 2));
            var rn = 2 * Math.pow(r, options.r);
            var cosA = (hx - 0.5) / r;
            var sinA = (hy - 0.5) / r;
            var newX = Math.round((rn * cosA + 0.5) * width);
            var newY = Math.round((rn * sinA + 0.5) * height);
            var color = source.getPixelColor(newX, newY);
            _this.setPixelColor(color, x, y);
          });
          this.setPixelColor(source.getPixelColor(width / 2, height / 2), width / 2, height / 2);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$b);
  return es$b;
}
var es$a = {};
var hasRequiredEs$b;
function requireEs$b() {
  if (hasRequiredEs$b)
    return es$a;
  hasRequiredEs$b = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    function flipFn(horizontal, vertical, cb) {
      if (typeof horizontal !== "boolean" || typeof vertical !== "boolean")
        return _utils.throwError.call(this, "horizontal and vertical must be Booleans", cb);
      var bitmap = Buffer.alloc(this.bitmap.data.length);
      this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
        var _x = horizontal ? this.bitmap.width - 1 - x : x;
        var _y = vertical ? this.bitmap.height - 1 - y : y;
        var _idx = this.bitmap.width * _y + _x << 2;
        var data = this.bitmap.data.readUInt32BE(idx);
        bitmap.writeUInt32BE(data, _idx);
      });
      this.bitmap.data = Buffer.from(bitmap);
      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, this);
      }
      return this;
    }
    var _default = function _default2() {
      return {
        flip: flipFn,
        mirror: flipFn
      };
    };
    exports["default"] = _default;
  })(es$a);
  return es$a;
}
var es$9 = {};
var hasRequiredEs$a;
function requireEs$a() {
  if (hasRequiredEs$a)
    return es$9;
  hasRequiredEs$a = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        gaussian: function gaussian(r, cb) {
          if (typeof r !== "number") {
            return _utils.throwError.call(this, "r must be a number", cb);
          }
          if (r < 1) {
            return _utils.throwError.call(this, "r must be greater than 0", cb);
          }
          var rs = Math.ceil(r * 2.57);
          var range = rs * 2 + 1;
          var rr2 = r * r * 2;
          var rr2pi = rr2 * Math.PI;
          var weights = [];
          for (var y = 0; y < range; y++) {
            weights[y] = [];
            for (var x = 0; x < range; x++) {
              var dsq = Math.pow(x - rs, 2) + Math.pow(y - rs, 2);
              weights[y][x] = Math.exp(-dsq / rr2) / rr2pi;
            }
          }
          for (var _y = 0; _y < this.bitmap.height; _y++) {
            for (var _x = 0; _x < this.bitmap.width; _x++) {
              var red = 0;
              var green = 0;
              var blue = 0;
              var alpha = 0;
              var wsum = 0;
              for (var iy = 0; iy < range; iy++) {
                for (var ix = 0; ix < range; ix++) {
                  var x1 = Math.min(this.bitmap.width - 1, Math.max(0, ix + _x - rs));
                  var y1 = Math.min(this.bitmap.height - 1, Math.max(0, iy + _y - rs));
                  var weight = weights[iy][ix];
                  var _idx = y1 * this.bitmap.width + x1 << 2;
                  red += this.bitmap.data[_idx] * weight;
                  green += this.bitmap.data[_idx + 1] * weight;
                  blue += this.bitmap.data[_idx + 2] * weight;
                  alpha += this.bitmap.data[_idx + 3] * weight;
                  wsum += weight;
                }
                var idx = _y * this.bitmap.width + _x << 2;
                this.bitmap.data[idx] = Math.round(red / wsum);
                this.bitmap.data[idx + 1] = Math.round(green / wsum);
                this.bitmap.data[idx + 2] = Math.round(blue / wsum);
                this.bitmap.data[idx + 3] = Math.round(alpha / wsum);
              }
            }
          }
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$9);
  return es$9;
}
var es$8 = {};
var hasRequiredEs$9;
function requireEs$9() {
  if (hasRequiredEs$9)
    return es$8;
  hasRequiredEs$9 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        invert: function invert(cb) {
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            this.bitmap.data[idx] = 255 - this.bitmap.data[idx];
            this.bitmap.data[idx + 1] = 255 - this.bitmap.data[idx + 1];
            this.bitmap.data[idx + 2] = 255 - this.bitmap.data[idx + 2];
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$8);
  return es$8;
}
var es$7 = {};
var hasRequiredEs$8;
function requireEs$8() {
  if (hasRequiredEs$8)
    return es$7;
  hasRequiredEs$8 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        mask: function mask(src2) {
          var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          var cb = arguments.length > 3 ? arguments[3] : void 0;
          if (!(src2 instanceof this.constructor)) {
            return _utils.throwError.call(this, "The source must be a Jimp image", cb);
          }
          if (typeof x !== "number" || typeof y !== "number") {
            return _utils.throwError.call(this, "x and y must be numbers", cb);
          }
          x = Math.round(x);
          y = Math.round(y);
          var w = this.bitmap.width;
          var h = this.bitmap.height;
          var baseImage = this;
          src2.scanQuiet(0, 0, src2.bitmap.width, src2.bitmap.height, function(sx, sy, idx) {
            var destX = x + sx;
            var destY = y + sy;
            if (destX >= 0 && destY >= 0 && destX < w && destY < h) {
              var dstIdx = baseImage.getPixelIndex(destX, destY);
              var data = this.bitmap.data;
              var avg = (data[idx + 0] + data[idx + 1] + data[idx + 2]) / 3;
              baseImage.bitmap.data[dstIdx + 3] *= avg / 255;
            }
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$7);
  return es$7;
}
var es$6 = {};
var hasRequiredEs$7;
function requireEs$7() {
  if (hasRequiredEs$7)
    return es$6;
  hasRequiredEs$7 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    function histogram() {
      var histogram2 = {
        r: new Array(256).fill(0),
        g: new Array(256).fill(0),
        b: new Array(256).fill(0)
      };
      this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, index2) {
        histogram2.r[this.bitmap.data[index2 + 0]]++;
        histogram2.g[this.bitmap.data[index2 + 1]]++;
        histogram2.b[this.bitmap.data[index2 + 2]]++;
      });
      return histogram2;
    }
    var _normalize = function normalize(value, min, max) {
      return (value - min) * 255 / (max - min);
    };
    var getBounds = function getBounds2(histogramChannel) {
      return [histogramChannel.findIndex(function(value) {
        return value > 0;
      }), 255 - histogramChannel.slice().reverse().findIndex(function(value) {
        return value > 0;
      })];
    };
    var _default = function _default2() {
      return {
        normalize: function normalize(cb) {
          var h = histogram.call(this);
          var bounds = {
            r: getBounds(h.r),
            g: getBounds(h.g),
            b: getBounds(h.b)
          };
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            var r = this.bitmap.data[idx + 0];
            var g = this.bitmap.data[idx + 1];
            var b = this.bitmap.data[idx + 2];
            this.bitmap.data[idx + 0] = _normalize(r, bounds.r[0], bounds.r[1]);
            this.bitmap.data[idx + 1] = _normalize(g, bounds.g[0], bounds.g[1]);
            this.bitmap.data[idx + 2] = _normalize(b, bounds.b[0], bounds.b[1]);
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$6);
  return es$6;
}
var es$5 = {};
var xhr = { exports: {} };
var window_1;
var hasRequiredWindow;
function requireWindow() {
  if (hasRequiredWindow)
    return window_1;
  hasRequiredWindow = 1;
  var win;
  if (typeof window !== "undefined") {
    win = window;
  } else if (typeof commonjsGlobal !== "undefined") {
    win = commonjsGlobal;
  } else if (typeof self !== "undefined") {
    win = self;
  } else {
    win = {};
  }
  window_1 = win;
  return window_1;
}
var isFunction_1;
var hasRequiredIsFunction;
function requireIsFunction() {
  if (hasRequiredIsFunction)
    return isFunction_1;
  hasRequiredIsFunction = 1;
  isFunction_1 = isFunction;
  var toString = Object.prototype.toString;
  function isFunction(fn) {
    if (!fn) {
      return false;
    }
    var string = toString.call(fn);
    return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && // IE8 and below
    (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
  }
  return isFunction_1;
}
var parseHeaders;
var hasRequiredParseHeaders;
function requireParseHeaders() {
  if (hasRequiredParseHeaders)
    return parseHeaders;
  hasRequiredParseHeaders = 1;
  var trim = function(string) {
    return string.replace(/^\s+|\s+$/g, "");
  }, isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
  parseHeaders = function(headers) {
    if (!headers)
      return {};
    var result = {};
    var headersArr = trim(headers).split("\n");
    for (var i = 0; i < headersArr.length; i++) {
      var row = headersArr[i];
      var index2 = row.indexOf(":"), key = trim(row.slice(0, index2)).toLowerCase(), value = trim(row.slice(index2 + 1));
      if (typeof result[key] === "undefined") {
        result[key] = value;
      } else if (isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    }
    return result;
  };
  return parseHeaders;
}
var immutable;
var hasRequiredImmutable;
function requireImmutable() {
  if (hasRequiredImmutable)
    return immutable;
  hasRequiredImmutable = 1;
  immutable = extend;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function extend() {
    var target = {};
    for (var i = 0; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  return immutable;
}
var hasRequiredXhr;
function requireXhr() {
  if (hasRequiredXhr)
    return xhr.exports;
  hasRequiredXhr = 1;
  var window2 = requireWindow();
  var isFunction = requireIsFunction();
  var parseHeaders2 = requireParseHeaders();
  var xtend = requireImmutable();
  xhr.exports = createXHR;
  xhr.exports.default = createXHR;
  createXHR.XMLHttpRequest = window2.XMLHttpRequest || noop;
  createXHR.XDomainRequest = "withCredentials" in new createXHR.XMLHttpRequest() ? createXHR.XMLHttpRequest : window2.XDomainRequest;
  forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
      options = initParams(uri, options, callback);
      options.method = method.toUpperCase();
      return _createXHR(options);
    };
  });
  function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
      iterator(array[i]);
    }
  }
  function isEmpty(obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i))
        return false;
    }
    return true;
  }
  function initParams(uri, options, callback) {
    var params = uri;
    if (isFunction(options)) {
      callback = options;
      if (typeof uri === "string") {
        params = { uri };
      }
    } else {
      params = xtend(options, { uri });
    }
    params.callback = callback;
    return params;
  }
  function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback);
    return _createXHR(options);
  }
  function _createXHR(options) {
    if (typeof options.callback === "undefined") {
      throw new Error("callback argument missing");
    }
    var called = false;
    var callback = function cbOnce(err, response, body2) {
      if (!called) {
        called = true;
        options.callback(err, response, body2);
      }
    };
    function readystatechange() {
      if (xhr2.readyState === 4) {
        setTimeout(loadFunc, 0);
      }
    }
    function getBody() {
      var body2 = void 0;
      if (xhr2.response) {
        body2 = xhr2.response;
      } else {
        body2 = xhr2.responseText || getXml(xhr2);
      }
      if (isJson) {
        try {
          body2 = JSON.parse(body2);
        } catch (e) {
        }
      }
      return body2;
    }
    function errorFunc(evt) {
      clearTimeout(timeoutTimer);
      if (!(evt instanceof Error)) {
        evt = new Error("" + (evt || "Unknown XMLHttpRequest Error"));
      }
      evt.statusCode = 0;
      return callback(evt, failureResponse);
    }
    function loadFunc() {
      if (aborted)
        return;
      var status;
      clearTimeout(timeoutTimer);
      if (options.useXDR && xhr2.status === void 0) {
        status = 200;
      } else {
        status = xhr2.status === 1223 ? 204 : xhr2.status;
      }
      var response = failureResponse;
      var err = null;
      if (status !== 0) {
        response = {
          body: getBody(),
          statusCode: status,
          method,
          headers: {},
          url: uri,
          rawRequest: xhr2
        };
        if (xhr2.getAllResponseHeaders) {
          response.headers = parseHeaders2(xhr2.getAllResponseHeaders());
        }
      } else {
        err = new Error("Internal XMLHttpRequest Error");
      }
      return callback(err, response, response.body);
    }
    var xhr2 = options.xhr || null;
    if (!xhr2) {
      if (options.cors || options.useXDR) {
        xhr2 = new createXHR.XDomainRequest();
      } else {
        xhr2 = new createXHR.XMLHttpRequest();
      }
    }
    var key;
    var aborted;
    var uri = xhr2.url = options.uri || options.url;
    var method = xhr2.method = options.method || "GET";
    var body = options.body || options.data;
    var headers = xhr2.headers = options.headers || {};
    var sync = !!options.sync;
    var isJson = false;
    var timeoutTimer;
    var failureResponse = {
      body: void 0,
      headers: {},
      statusCode: 0,
      method,
      url: uri,
      rawRequest: xhr2
    };
    if ("json" in options && options.json !== false) {
      isJson = true;
      headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json");
      if (method !== "GET" && method !== "HEAD") {
        headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json");
        body = JSON.stringify(options.json === true ? body : options.json);
      }
    }
    xhr2.onreadystatechange = readystatechange;
    xhr2.onload = loadFunc;
    xhr2.onerror = errorFunc;
    xhr2.onprogress = function() {
    };
    xhr2.onabort = function() {
      aborted = true;
    };
    xhr2.ontimeout = errorFunc;
    xhr2.open(method, uri, !sync, options.username, options.password);
    if (!sync) {
      xhr2.withCredentials = !!options.withCredentials;
    }
    if (!sync && options.timeout > 0) {
      timeoutTimer = setTimeout(function() {
        if (aborted)
          return;
        aborted = true;
        xhr2.abort("timeout");
        var e = new Error("XMLHttpRequest timeout");
        e.code = "ETIMEDOUT";
        errorFunc(e);
      }, options.timeout);
    }
    if (xhr2.setRequestHeader) {
      for (key in headers) {
        if (headers.hasOwnProperty(key)) {
          xhr2.setRequestHeader(key, headers[key]);
        }
      }
    } else if (options.headers && !isEmpty(options.headers)) {
      throw new Error("Headers cannot be set on an XDomainRequest object");
    }
    if ("responseType" in options) {
      xhr2.responseType = options.responseType;
    }
    if ("beforeSend" in options && typeof options.beforeSend === "function") {
      options.beforeSend(xhr2);
    }
    xhr2.send(body || null);
    return xhr2;
  }
  function getXml(xhr2) {
    try {
      if (xhr2.responseType === "document") {
        return xhr2.responseXML;
      }
      var firefoxBugTakenEffect = xhr2.responseXML && xhr2.responseXML.documentElement.nodeName === "parsererror";
      if (xhr2.responseType === "" && !firefoxBugTakenEffect) {
        return xhr2.responseXML;
      }
    } catch (e) {
    }
    return null;
  }
  function noop() {
  }
  return xhr.exports;
}
var parseBmfontAscii;
var hasRequiredParseBmfontAscii;
function requireParseBmfontAscii() {
  if (hasRequiredParseBmfontAscii)
    return parseBmfontAscii;
  hasRequiredParseBmfontAscii = 1;
  parseBmfontAscii = function parseBMFontAscii(data) {
    if (!data)
      throw new Error("no data provided");
    data = data.toString().trim();
    var output = {
      pages: [],
      chars: [],
      kernings: []
    };
    var lines = data.split(/\r\n?|\n/g);
    if (lines.length === 0)
      throw new Error("no data in BMFont file");
    for (var i = 0; i < lines.length; i++) {
      var lineData = splitLine(lines[i], i);
      if (!lineData)
        continue;
      if (lineData.key === "page") {
        if (typeof lineData.data.id !== "number")
          throw new Error("malformed file at line " + i + " -- needs page id=N");
        if (typeof lineData.data.file !== "string")
          throw new Error("malformed file at line " + i + ' -- needs page file="path"');
        output.pages[lineData.data.id] = lineData.data.file;
      } else if (lineData.key === "chars" || lineData.key === "kernings")
        ;
      else if (lineData.key === "char") {
        output.chars.push(lineData.data);
      } else if (lineData.key === "kerning") {
        output.kernings.push(lineData.data);
      } else {
        output[lineData.key] = lineData.data;
      }
    }
    return output;
  };
  function splitLine(line, idx) {
    line = line.replace(/\t+/g, " ").trim();
    if (!line)
      return null;
    var space = line.indexOf(" ");
    if (space === -1)
      throw new Error("no named row at line " + idx);
    var key = line.substring(0, space);
    line = line.substring(space + 1);
    line = line.replace(/letter=[\'\"]\S+[\'\"]/gi, "");
    line = line.split("=");
    line = line.map(function(str) {
      return str.trim().match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g);
    });
    var data = [];
    for (var i = 0; i < line.length; i++) {
      var dt = line[i];
      if (i === 0) {
        data.push({
          key: dt[0],
          data: ""
        });
      } else if (i === line.length - 1) {
        data[data.length - 1].data = parseData(dt[0]);
      } else {
        data[data.length - 1].data = parseData(dt[0]);
        data.push({
          key: dt[1],
          data: ""
        });
      }
    }
    var out = {
      key,
      data: {}
    };
    data.forEach(function(v) {
      out.data[v.key] = v.data;
    });
    return out;
  }
  function parseData(data) {
    if (!data || data.length === 0)
      return "";
    if (data.indexOf('"') === 0 || data.indexOf("'") === 0)
      return data.substring(1, data.length - 1);
    if (data.indexOf(",") !== -1)
      return parseIntList(data);
    return parseInt(data, 10);
  }
  function parseIntList(data) {
    return data.split(",").map(function(val) {
      return parseInt(val, 10);
    });
  }
  return parseBmfontAscii;
}
var parseAttribs;
var hasRequiredParseAttribs;
function requireParseAttribs() {
  if (hasRequiredParseAttribs)
    return parseAttribs;
  hasRequiredParseAttribs = 1;
  var GLYPH_DESIGNER_ERROR = "chasrset";
  parseAttribs = function parseAttributes(obj) {
    if (GLYPH_DESIGNER_ERROR in obj) {
      obj["charset"] = obj[GLYPH_DESIGNER_ERROR];
      delete obj[GLYPH_DESIGNER_ERROR];
    }
    for (var k in obj) {
      if (k === "face" || k === "charset")
        continue;
      else if (k === "padding" || k === "spacing")
        obj[k] = parseIntList(obj[k]);
      else
        obj[k] = parseInt(obj[k], 10);
    }
    return obj;
  };
  function parseIntList(data) {
    return data.split(",").map(function(val) {
      return parseInt(val, 10);
    });
  }
  return parseAttribs;
}
var xmlParseFromString;
var hasRequiredXmlParseFromString;
function requireXmlParseFromString() {
  if (hasRequiredXmlParseFromString)
    return xmlParseFromString;
  hasRequiredXmlParseFromString = 1;
  xmlParseFromString = function xmlparser() {
    if (typeof self.DOMParser !== "undefined") {
      return function(str) {
        var parser2 = new self.DOMParser();
        return parser2.parseFromString(str, "application/xml");
      };
    }
    if (typeof self.ActiveXObject !== "undefined" && new self.ActiveXObject("Microsoft.XMLDOM")) {
      return function(str) {
        var xmlDoc = new self.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(str);
        return xmlDoc;
      };
    }
    return function(str) {
      var div = document.createElement("div");
      div.innerHTML = str;
      return div;
    };
  }();
  return xmlParseFromString;
}
var browser$1;
var hasRequiredBrowser$1;
function requireBrowser$1() {
  if (hasRequiredBrowser$1)
    return browser$1;
  hasRequiredBrowser$1 = 1;
  var parseAttributes = requireParseAttribs();
  var parseFromString = requireXmlParseFromString();
  var NAME_MAP = {
    scaleh: "scaleH",
    scalew: "scaleW",
    stretchh: "stretchH",
    lineheight: "lineHeight",
    alphachnl: "alphaChnl",
    redchnl: "redChnl",
    greenchnl: "greenChnl",
    bluechnl: "blueChnl"
  };
  browser$1 = function parse(data) {
    data = data.toString();
    var xmlRoot = parseFromString(data);
    var output = {
      pages: [],
      chars: [],
      kernings: []
    };
    ["info", "common"].forEach(function(key) {
      var element = xmlRoot.getElementsByTagName(key)[0];
      if (element)
        output[key] = parseAttributes(getAttribs(element));
    });
    var pageRoot = xmlRoot.getElementsByTagName("pages")[0];
    if (!pageRoot)
      throw new Error("malformed file -- no <pages> element");
    var pages = pageRoot.getElementsByTagName("page");
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i];
      var id = parseInt(p.getAttribute("id"), 10);
      var file = p.getAttribute("file");
      if (isNaN(id))
        throw new Error('malformed file -- page "id" attribute is NaN');
      if (!file)
        throw new Error('malformed file -- needs page "file" attribute');
      output.pages[parseInt(id, 10)] = file;
    }
    ["chars", "kernings"].forEach(function(key) {
      var element = xmlRoot.getElementsByTagName(key)[0];
      if (!element)
        return;
      var childTag = key.substring(0, key.length - 1);
      var children = element.getElementsByTagName(childTag);
      for (var i2 = 0; i2 < children.length; i2++) {
        var child = children[i2];
        output[key].push(parseAttributes(getAttribs(child)));
      }
    });
    return output;
  };
  function getAttribs(element) {
    var attribs = getAttribList(element);
    return attribs.reduce(function(dict, attrib) {
      var key = mapName(attrib.nodeName);
      dict[key] = attrib.nodeValue;
      return dict;
    }, {});
  }
  function getAttribList(element) {
    var attribs = [];
    for (var i = 0; i < element.attributes.length; i++)
      attribs.push(element.attributes[i]);
    return attribs;
  }
  function mapName(nodeName) {
    return NAME_MAP[nodeName.toLowerCase()] || nodeName;
  }
  return browser$1;
}
var parseBmfontBinary;
var hasRequiredParseBmfontBinary;
function requireParseBmfontBinary() {
  if (hasRequiredParseBmfontBinary)
    return parseBmfontBinary;
  hasRequiredParseBmfontBinary = 1;
  var HEADER = [66, 77, 70];
  parseBmfontBinary = function readBMFontBinary(buf) {
    if (buf.length < 6)
      throw new Error("invalid buffer length for BMFont");
    var header = HEADER.every(function(byte, i2) {
      return buf.readUInt8(i2) === byte;
    });
    if (!header)
      throw new Error("BMFont missing BMF byte header");
    var i = 3;
    var vers = buf.readUInt8(i++);
    if (vers > 3)
      throw new Error("Only supports BMFont Binary v3 (BMFont App v1.10)");
    var target = { kernings: [], chars: [] };
    for (var b = 0; b < 5; b++)
      i += readBlock(target, buf, i);
    return target;
  };
  function readBlock(target, buf, i) {
    if (i > buf.length - 1)
      return 0;
    var blockID = buf.readUInt8(i++);
    var blockSize = buf.readInt32LE(i);
    i += 4;
    switch (blockID) {
      case 1:
        target.info = readInfo(buf, i);
        break;
      case 2:
        target.common = readCommon(buf, i);
        break;
      case 3:
        target.pages = readPages(buf, i, blockSize);
        break;
      case 4:
        target.chars = readChars(buf, i, blockSize);
        break;
      case 5:
        target.kernings = readKernings(buf, i, blockSize);
        break;
    }
    return 5 + blockSize;
  }
  function readInfo(buf, i) {
    var info = {};
    info.size = buf.readInt16LE(i);
    var bitField = buf.readUInt8(i + 2);
    info.smooth = bitField >> 7 & 1;
    info.unicode = bitField >> 6 & 1;
    info.italic = bitField >> 5 & 1;
    info.bold = bitField >> 4 & 1;
    if (bitField >> 3 & 1)
      info.fixedHeight = 1;
    info.charset = buf.readUInt8(i + 3) || "";
    info.stretchH = buf.readUInt16LE(i + 4);
    info.aa = buf.readUInt8(i + 6);
    info.padding = [
      buf.readInt8(i + 7),
      buf.readInt8(i + 8),
      buf.readInt8(i + 9),
      buf.readInt8(i + 10)
    ];
    info.spacing = [
      buf.readInt8(i + 11),
      buf.readInt8(i + 12)
    ];
    info.outline = buf.readUInt8(i + 13);
    info.face = readStringNT(buf, i + 14);
    return info;
  }
  function readCommon(buf, i) {
    var common2 = {};
    common2.lineHeight = buf.readUInt16LE(i);
    common2.base = buf.readUInt16LE(i + 2);
    common2.scaleW = buf.readUInt16LE(i + 4);
    common2.scaleH = buf.readUInt16LE(i + 6);
    common2.pages = buf.readUInt16LE(i + 8);
    buf.readUInt8(i + 10);
    common2.packed = 0;
    common2.alphaChnl = buf.readUInt8(i + 11);
    common2.redChnl = buf.readUInt8(i + 12);
    common2.greenChnl = buf.readUInt8(i + 13);
    common2.blueChnl = buf.readUInt8(i + 14);
    return common2;
  }
  function readPages(buf, i, size) {
    var pages = [];
    var text = readNameNT(buf, i);
    var len = text.length + 1;
    var count = size / len;
    for (var c = 0; c < count; c++) {
      pages[c] = buf.slice(i, i + text.length).toString("utf8");
      i += len;
    }
    return pages;
  }
  function readChars(buf, i, blockSize) {
    var chars = [];
    var count = blockSize / 20;
    for (var c = 0; c < count; c++) {
      var char = {};
      var off = c * 20;
      char.id = buf.readUInt32LE(i + 0 + off);
      char.x = buf.readUInt16LE(i + 4 + off);
      char.y = buf.readUInt16LE(i + 6 + off);
      char.width = buf.readUInt16LE(i + 8 + off);
      char.height = buf.readUInt16LE(i + 10 + off);
      char.xoffset = buf.readInt16LE(i + 12 + off);
      char.yoffset = buf.readInt16LE(i + 14 + off);
      char.xadvance = buf.readInt16LE(i + 16 + off);
      char.page = buf.readUInt8(i + 18 + off);
      char.chnl = buf.readUInt8(i + 19 + off);
      chars[c] = char;
    }
    return chars;
  }
  function readKernings(buf, i, blockSize) {
    var kernings = [];
    var count = blockSize / 10;
    for (var c = 0; c < count; c++) {
      var kern = {};
      var off = c * 10;
      kern.first = buf.readUInt32LE(i + 0 + off);
      kern.second = buf.readUInt32LE(i + 4 + off);
      kern.amount = buf.readInt16LE(i + 8 + off);
      kernings[c] = kern;
    }
    return kernings;
  }
  function readNameNT(buf, offset) {
    var pos = offset;
    for (; pos < buf.length; pos++) {
      if (buf[pos] === 0)
        break;
    }
    return buf.slice(offset, pos);
  }
  function readStringNT(buf, offset) {
    return readNameNT(buf, offset).toString("utf8");
  }
  return parseBmfontBinary;
}
var bufferEqual;
var hasRequiredBufferEqual;
function requireBufferEqual() {
  if (hasRequiredBufferEqual)
    return bufferEqual;
  hasRequiredBufferEqual = 1;
  var Buffer2 = requireBuffer().Buffer;
  bufferEqual = function(a, b) {
    if (!Buffer2.isBuffer(a))
      return void 0;
    if (!Buffer2.isBuffer(b))
      return void 0;
    if (typeof a.equals === "function")
      return a.equals(b);
    if (a.length !== b.length)
      return false;
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }
    return true;
  };
  return bufferEqual;
}
var isBinary;
var hasRequiredIsBinary;
function requireIsBinary() {
  if (hasRequiredIsBinary)
    return isBinary;
  hasRequiredIsBinary = 1;
  var equal = requireBufferEqual();
  var HEADER = Buffer.from([66, 77, 70, 3]);
  isBinary = function(buf) {
    if (typeof buf === "string")
      return buf.substring(0, 3) === "BMF";
    return buf.length > 4 && equal(buf.slice(0, 4), HEADER);
  };
  return isBinary;
}
var browser;
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser)
    return browser;
  hasRequiredBrowser = 1;
  var xhr2 = requireXhr();
  var noop = function() {
  };
  var parseASCII = requireParseBmfontAscii();
  var parseXML = requireBrowser$1();
  var readBinary = requireParseBmfontBinary();
  var isBinaryFormat = requireIsBinary();
  var xtend = requireImmutable();
  var xml2 = function hasXML2() {
    return self.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
  }();
  browser = function(opt, cb) {
    cb = typeof cb === "function" ? cb : noop;
    if (typeof opt === "string")
      opt = { uri: opt };
    else if (!opt)
      opt = {};
    var expectBinary = opt.binary;
    if (expectBinary)
      opt = getBinaryOpts(opt);
    xhr2(opt, function(err, res, body) {
      if (err)
        return cb(err);
      if (!/^2/.test(res.statusCode))
        return cb(new Error("http status code: " + res.statusCode));
      if (!body)
        return cb(new Error("no body result"));
      var binary = false;
      if (isArrayBuffer(body)) {
        var array = new Uint8Array(body);
        body = Buffer.from(array, "binary");
      }
      if (isBinaryFormat(body)) {
        binary = true;
        if (typeof body === "string")
          body = Buffer.from(body, "binary");
      }
      if (!binary) {
        if (Buffer.isBuffer(body))
          body = body.toString(opt.encoding);
        body = body.trim();
      }
      var result;
      try {
        var type = res.headers["content-type"];
        if (binary)
          result = readBinary(body);
        else if (/json/.test(type) || body.charAt(0) === "{")
          result = JSON.parse(body);
        else if (/xml/.test(type) || body.charAt(0) === "<")
          result = parseXML(body);
        else
          result = parseASCII(body);
      } catch (e) {
        cb(new Error("error parsing font " + e.message));
        cb = noop;
      }
      cb(null, result);
    });
  };
  function isArrayBuffer(arr) {
    var str = Object.prototype.toString;
    return str.call(arr) === "[object ArrayBuffer]";
  }
  function getBinaryOpts(opt) {
    if (xml2)
      return xtend(opt, { responseType: "arraybuffer" });
    if (typeof self.XMLHttpRequest === "undefined")
      throw new Error("your browser does not support XHR loading");
    var req = new self.XMLHttpRequest();
    req.overrideMimeType("text/plain; charset=x-user-defined");
    return xtend({
      xhr: req
    }, opt);
  }
  return browser;
}
var measureText = {};
var hasRequiredMeasureText;
function requireMeasureText() {
  if (hasRequiredMeasureText)
    return measureText;
  hasRequiredMeasureText = 1;
  Object.defineProperty(measureText, "__esModule", {
    value: true
  });
  measureText.measureText = measureText$1;
  measureText.measureTextHeight = measureTextHeight;
  function measureText$1(font, text) {
    var x = 0;
    for (var i = 0; i < text.length; i++) {
      if (font.chars[text[i]]) {
        var kerning = font.kernings[text[i]] && font.kernings[text[i]][text[i + 1]] ? font.kernings[text[i]][text[i + 1]] : 0;
        x += (font.chars[text[i]].xadvance || 0) + kerning;
      }
    }
    return x;
  }
  function measureTextHeight(font, text, maxWidth) {
    var words = text.split(" ");
    var line = "";
    var textTotalHeight = font.common.lineHeight;
    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      var testWidth = measureText$1(font, testLine);
      if (testWidth > maxWidth && n > 0) {
        textTotalHeight += font.common.lineHeight;
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }
    return textTotalHeight;
  }
  return measureText;
}
var hasRequiredEs$6;
function requireEs$6() {
  if (hasRequiredEs$6)
    return es$5;
  hasRequiredEs$6 = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _typeof2 = _interopRequireDefault(require$$1);
    var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
    var _path = _interopRequireDefault(require$$3);
    var _loadBmfont = _interopRequireDefault(requireBrowser());
    var _utils = requireEs$u();
    var _measureText = requireMeasureText();
    function xOffsetBasedOnAlignment(constants2, font, line, maxWidth, alignment) {
      if (alignment === constants2.HORIZONTAL_ALIGN_LEFT) {
        return 0;
      }
      if (alignment === constants2.HORIZONTAL_ALIGN_CENTER) {
        return (maxWidth - (0, _measureText.measureText)(font, line)) / 2;
      }
      return maxWidth - (0, _measureText.measureText)(font, line);
    }
    function drawCharacter(image, font, x, y, _char) {
      if (_char.width > 0 && _char.height > 0) {
        var characterPage = font.pages[_char.page];
        image.blit(characterPage, x + _char.xoffset, y + _char.yoffset, _char.x, _char.y, _char.width, _char.height);
      }
      return image;
    }
    function printText(font, x, y, text, defaultCharWidth) {
      for (var i = 0; i < text.length; i++) {
        var _char2 = void 0;
        if (font.chars[text[i]]) {
          _char2 = text[i];
        } else if (/\s/.test(text[i])) {
          _char2 = "";
        } else {
          _char2 = "?";
        }
        var fontChar = font.chars[_char2] || {};
        var fontKerning = font.kernings[_char2];
        drawCharacter(this, font, x, y, fontChar || {});
        var kerning = fontKerning && fontKerning[text[i + 1]] ? fontKerning[text[i + 1]] : 0;
        x += kerning + (fontChar.xadvance || defaultCharWidth);
      }
    }
    function splitLines(font, text, maxWidth) {
      var words = text.split(" ");
      var lines = [];
      var currentLine = [];
      var longestLine = 0;
      words.forEach(function(word) {
        var line = [].concat((0, _toConsumableArray2["default"])(currentLine), [word]).join(" ");
        var length = (0, _measureText.measureText)(font, line);
        if (length <= maxWidth) {
          if (length > longestLine) {
            longestLine = length;
          }
          currentLine.push(word);
        } else {
          lines.push(currentLine);
          currentLine = [word];
        }
      });
      lines.push(currentLine);
      return {
        lines,
        longestLine
      };
    }
    function loadPages(Jimp, dir2, pages) {
      var newPages = pages.map(function(page) {
        return Jimp.read(dir2 + "/" + page);
      });
      return Promise.all(newPages);
    }
    var dir = {}.DIRNAME || "".concat(__dirname, "/../");
    var _default = function _default2() {
      return {
        constants: {
          measureText: _measureText.measureText,
          measureTextHeight: _measureText.measureTextHeight,
          FONT_SANS_8_BLACK: _path["default"].join(dir, "fonts/open-sans/open-sans-8-black/open-sans-8-black.fnt"),
          FONT_SANS_10_BLACK: _path["default"].join(dir, "fonts/open-sans/open-sans-10-black/open-sans-10-black.fnt"),
          FONT_SANS_12_BLACK: _path["default"].join(dir, "fonts/open-sans/open-sans-12-black/open-sans-12-black.fnt"),
          FONT_SANS_14_BLACK: _path["default"].join(dir, "fonts/open-sans/open-sans-14-black/open-sans-14-black.fnt"),
          FONT_SANS_16_BLACK: _path["default"].join(dir, "fonts/open-sans/open-sans-16-black/open-sans-16-black.fnt"),
          FONT_SANS_32_BLACK: _path["default"].join(dir, "fonts/open-sans/open-sans-32-black/open-sans-32-black.fnt"),
          FONT_SANS_64_BLACK: _path["default"].join(dir, "fonts/open-sans/open-sans-64-black/open-sans-64-black.fnt"),
          FONT_SANS_128_BLACK: _path["default"].join(dir, "fonts/open-sans/open-sans-128-black/open-sans-128-black.fnt"),
          FONT_SANS_8_WHITE: _path["default"].join(dir, "fonts/open-sans/open-sans-8-white/open-sans-8-white.fnt"),
          FONT_SANS_16_WHITE: _path["default"].join(dir, "fonts/open-sans/open-sans-16-white/open-sans-16-white.fnt"),
          FONT_SANS_32_WHITE: _path["default"].join(dir, "fonts/open-sans/open-sans-32-white/open-sans-32-white.fnt"),
          FONT_SANS_64_WHITE: _path["default"].join(dir, "fonts/open-sans/open-sans-64-white/open-sans-64-white.fnt"),
          FONT_SANS_128_WHITE: _path["default"].join(dir, "fonts/open-sans/open-sans-128-white/open-sans-128-white.fnt"),
          /**
           * Loads a bitmap font from a file
           * @param {string} file the file path of a .fnt file
           * @param {function(Error, Jimp)} cb (optional) a function to call when the font is loaded
           * @returns {Promise} a promise
           */
          loadFont: function loadFont(file, cb) {
            var _this = this;
            if (typeof file !== "string")
              return _utils.throwError.call(this, "file must be a string", cb);
            return new Promise(function(resolve, reject) {
              cb = cb || function(err, font) {
                if (err)
                  reject(err);
                else
                  resolve(font);
              };
              (0, _loadBmfont["default"])(file, function(err, font) {
                var chars = {};
                var kernings = {};
                if (err) {
                  return _utils.throwError.call(_this, err, cb);
                }
                for (var i = 0; i < font.chars.length; i++) {
                  chars[String.fromCharCode(font.chars[i].id)] = font.chars[i];
                }
                for (var _i = 0; _i < font.kernings.length; _i++) {
                  var firstString = String.fromCharCode(font.kernings[_i].first);
                  kernings[firstString] = kernings[firstString] || {};
                  kernings[firstString][String.fromCharCode(font.kernings[_i].second)] = font.kernings[_i].amount;
                }
                loadPages(_this, _path["default"].dirname(file), font.pages).then(function(pages) {
                  cb(null, {
                    chars,
                    kernings,
                    pages,
                    common: font.common,
                    info: font.info
                  });
                });
              });
            });
          }
        },
        "class": {
          /**
           * Draws a text on a image on a given boundary
           * @param {Jimp} font a bitmap font loaded from `Jimp.loadFont` command
           * @param {number} x the x position to start drawing the text
           * @param {number} y the y position to start drawing the text
           * @param {any} text the text to draw (string or object with `text`, `alignmentX`, and/or `alignmentY`)
           * @param {number} maxWidth (optional) the boundary width to draw in
           * @param {number} maxHeight (optional) the boundary height to draw in
           * @param {function(Error, Jimp)} cb (optional) a function to call when the text is written
           * @returns {Jimp} this for chaining of methods
           */
          print: function print(font, x, y, text, maxWidth, maxHeight, cb) {
            var _this2 = this;
            if (typeof maxWidth === "function" && typeof cb === "undefined") {
              cb = maxWidth;
              maxWidth = Infinity;
            }
            if (typeof maxWidth === "undefined") {
              maxWidth = Infinity;
            }
            if (typeof maxHeight === "function" && typeof cb === "undefined") {
              cb = maxHeight;
              maxHeight = Infinity;
            }
            if (typeof maxHeight === "undefined") {
              maxHeight = Infinity;
            }
            if ((0, _typeof2["default"])(font) !== "object") {
              return _utils.throwError.call(this, "font must be a Jimp loadFont", cb);
            }
            if (typeof x !== "number" || typeof y !== "number" || typeof maxWidth !== "number") {
              return _utils.throwError.call(this, "x, y and maxWidth must be numbers", cb);
            }
            if (typeof maxWidth !== "number") {
              return _utils.throwError.call(this, "maxWidth must be a number", cb);
            }
            if (typeof maxHeight !== "number") {
              return _utils.throwError.call(this, "maxHeight must be a number", cb);
            }
            var alignmentX;
            var alignmentY;
            if ((0, _typeof2["default"])(text) === "object" && text.text !== null && text.text !== void 0) {
              alignmentX = text.alignmentX || this.constructor.HORIZONTAL_ALIGN_LEFT;
              alignmentY = text.alignmentY || this.constructor.VERTICAL_ALIGN_TOP;
              var _text = text;
              text = _text.text;
            } else {
              alignmentX = this.constructor.HORIZONTAL_ALIGN_LEFT;
              alignmentY = this.constructor.VERTICAL_ALIGN_TOP;
              text = text.toString();
            }
            if (maxHeight !== Infinity && alignmentY === this.constructor.VERTICAL_ALIGN_BOTTOM) {
              y += maxHeight - (0, _measureText.measureTextHeight)(font, text, maxWidth);
            } else if (maxHeight !== Infinity && alignmentY === this.constructor.VERTICAL_ALIGN_MIDDLE) {
              y += maxHeight / 2 - (0, _measureText.measureTextHeight)(font, text, maxWidth) / 2;
            }
            var defaultCharWidth = Object.entries(font.chars)[0][1].xadvance;
            var _splitLines = splitLines(font, text, maxWidth), lines = _splitLines.lines, longestLine = _splitLines.longestLine;
            lines.forEach(function(line) {
              var lineString = line.join(" ");
              var alignmentWidth = xOffsetBasedOnAlignment(_this2.constructor, font, lineString, maxWidth, alignmentX);
              printText.call(_this2, font, x + alignmentWidth, y, lineString, defaultCharWidth);
              y += font.common.lineHeight;
            });
            if ((0, _utils.isNodePattern)(cb)) {
              cb.call(this, null, this, {
                x: x + longestLine,
                y
              });
            }
            return this;
          }
        }
      };
    };
    exports["default"] = _default;
  })(es$5);
  return es$5;
}
var es$4 = {};
var resize;
var hasRequiredResize;
function requireResize() {
  if (hasRequiredResize)
    return resize;
  hasRequiredResize = 1;
  function Resize(widthOriginal, heightOriginal, targetWidth, targetHeight, blendAlpha, interpolationPass, resizeCallback) {
    this.widthOriginal = Math.abs(Math.floor(widthOriginal) || 0);
    this.heightOriginal = Math.abs(Math.floor(heightOriginal) || 0);
    this.targetWidth = Math.abs(Math.floor(targetWidth) || 0);
    this.targetHeight = Math.abs(Math.floor(targetHeight) || 0);
    this.colorChannels = blendAlpha ? 4 : 3;
    this.interpolationPass = Boolean(interpolationPass);
    this.resizeCallback = typeof resizeCallback === "function" ? resizeCallback : function() {
    };
    this.targetWidthMultipliedByChannels = this.targetWidth * this.colorChannels;
    this.originalWidthMultipliedByChannels = this.widthOriginal * this.colorChannels;
    this.originalHeightMultipliedByChannels = this.heightOriginal * this.colorChannels;
    this.widthPassResultSize = this.targetWidthMultipliedByChannels * this.heightOriginal;
    this.finalResultSize = this.targetWidthMultipliedByChannels * this.targetHeight;
    this.initialize();
  }
  Resize.prototype.initialize = function() {
    if (this.widthOriginal > 0 && this.heightOriginal > 0 && this.targetWidth > 0 && this.targetHeight > 0) {
      this.configurePasses();
    } else {
      throw new Error("Invalid settings specified for the resizer.");
    }
  };
  Resize.prototype.configurePasses = function() {
    if (this.widthOriginal === this.targetWidth) {
      this.resizeWidth = this.bypassResizer;
    } else {
      this.ratioWeightWidthPass = this.widthOriginal / this.targetWidth;
      if (this.ratioWeightWidthPass < 1 && this.interpolationPass) {
        this.initializeFirstPassBuffers(true);
        this.resizeWidth = this.colorChannels === 4 ? this.resizeWidthInterpolatedRGBA : this.resizeWidthInterpolatedRGB;
      } else {
        this.initializeFirstPassBuffers(false);
        this.resizeWidth = this.colorChannels === 4 ? this.resizeWidthRGBA : this.resizeWidthRGB;
      }
    }
    if (this.heightOriginal === this.targetHeight) {
      this.resizeHeight = this.bypassResizer;
    } else {
      this.ratioWeightHeightPass = this.heightOriginal / this.targetHeight;
      if (this.ratioWeightHeightPass < 1 && this.interpolationPass) {
        this.initializeSecondPassBuffers(true);
        this.resizeHeight = this.resizeHeightInterpolated;
      } else {
        this.initializeSecondPassBuffers(false);
        this.resizeHeight = this.colorChannels === 4 ? this.resizeHeightRGBA : this.resizeHeightRGB;
      }
    }
  };
  Resize.prototype._resizeWidthInterpolatedRGBChannels = function(buffer2, fourthChannel) {
    var channelsNum = fourthChannel ? 4 : 3;
    var ratioWeight = this.ratioWeightWidthPass;
    var outputBuffer = this.widthBuffer;
    var weight = 0;
    var finalOffset = 0;
    var pixelOffset = 0;
    var firstWeight = 0;
    var secondWeight = 0;
    var targetPosition;
    for (targetPosition = 0; weight < 1 / 3; targetPosition += channelsNum, weight += ratioWeight) {
      for (finalOffset = targetPosition, pixelOffset = 0; finalOffset < this.widthPassResultSize; pixelOffset += this.originalWidthMultipliedByChannels, finalOffset += this.targetWidthMultipliedByChannels) {
        outputBuffer[finalOffset] = buffer2[pixelOffset];
        outputBuffer[finalOffset + 1] = buffer2[pixelOffset + 1];
        outputBuffer[finalOffset + 2] = buffer2[pixelOffset + 2];
        if (fourthChannel)
          outputBuffer[finalOffset + 3] = buffer2[pixelOffset + 3];
      }
    }
    weight -= 1 / 3;
    var interpolationWidthSourceReadStop;
    for (interpolationWidthSourceReadStop = this.widthOriginal - 1; weight < interpolationWidthSourceReadStop; targetPosition += channelsNum, weight += ratioWeight) {
      secondWeight = weight % 1;
      firstWeight = 1 - secondWeight;
      for (finalOffset = targetPosition, pixelOffset = Math.floor(weight) * channelsNum; finalOffset < this.widthPassResultSize; pixelOffset += this.originalWidthMultipliedByChannels, finalOffset += this.targetWidthMultipliedByChannels) {
        outputBuffer[finalOffset + 0] = buffer2[pixelOffset + 0] * firstWeight + buffer2[pixelOffset + channelsNum + 0] * secondWeight;
        outputBuffer[finalOffset + 1] = buffer2[pixelOffset + 1] * firstWeight + buffer2[pixelOffset + channelsNum + 1] * secondWeight;
        outputBuffer[finalOffset + 2] = buffer2[pixelOffset + 2] * firstWeight + buffer2[pixelOffset + channelsNum + 2] * secondWeight;
        if (fourthChannel)
          outputBuffer[finalOffset + 3] = buffer2[pixelOffset + 3] * firstWeight + buffer2[pixelOffset + channelsNum + 3] * secondWeight;
      }
    }
    for (interpolationWidthSourceReadStop = this.originalWidthMultipliedByChannels - channelsNum; targetPosition < this.targetWidthMultipliedByChannels; targetPosition += channelsNum) {
      for (finalOffset = targetPosition, pixelOffset = interpolationWidthSourceReadStop; finalOffset < this.widthPassResultSize; pixelOffset += this.originalWidthMultipliedByChannels, finalOffset += this.targetWidthMultipliedByChannels) {
        outputBuffer[finalOffset] = buffer2[pixelOffset];
        outputBuffer[finalOffset + 1] = buffer2[pixelOffset + 1];
        outputBuffer[finalOffset + 2] = buffer2[pixelOffset + 2];
        if (fourthChannel)
          outputBuffer[finalOffset + 3] = buffer2[pixelOffset + 3];
      }
    }
    return outputBuffer;
  };
  Resize.prototype._resizeWidthRGBChannels = function(buffer2, fourthChannel) {
    var channelsNum = fourthChannel ? 4 : 3;
    var ratioWeight = this.ratioWeightWidthPass;
    var ratioWeightDivisor = 1 / ratioWeight;
    var nextLineOffsetOriginalWidth = this.originalWidthMultipliedByChannels - channelsNum + 1;
    var nextLineOffsetTargetWidth = this.targetWidthMultipliedByChannels - channelsNum + 1;
    var output = this.outputWidthWorkBench;
    var outputBuffer = this.widthBuffer;
    var trustworthyColorsCount = this.outputWidthWorkBenchOpaquePixelsCount;
    var weight = 0;
    var amountToNext = 0;
    var actualPosition = 0;
    var currentPosition = 0;
    var line = 0;
    var pixelOffset = 0;
    var outputOffset = 0;
    var multiplier = 1;
    var r = 0;
    var g = 0;
    var b = 0;
    var a = 0;
    do {
      for (line = 0; line < this.originalHeightMultipliedByChannels; ) {
        output[line++] = 0;
        output[line++] = 0;
        output[line++] = 0;
        if (fourthChannel) {
          output[line++] = 0;
          trustworthyColorsCount[line / channelsNum - 1] = 0;
        }
      }
      weight = ratioWeight;
      do {
        amountToNext = 1 + actualPosition - currentPosition;
        multiplier = Math.min(weight, amountToNext);
        for (line = 0, pixelOffset = actualPosition; line < this.originalHeightMultipliedByChannels; pixelOffset += nextLineOffsetOriginalWidth) {
          r = buffer2[pixelOffset];
          g = buffer2[++pixelOffset];
          b = buffer2[++pixelOffset];
          a = fourthChannel ? buffer2[++pixelOffset] : 255;
          output[line++] += (a ? r : 0) * multiplier;
          output[line++] += (a ? g : 0) * multiplier;
          output[line++] += (a ? b : 0) * multiplier;
          if (fourthChannel) {
            output[line++] += a * multiplier;
            trustworthyColorsCount[line / channelsNum - 1] += a ? multiplier : 0;
          }
        }
        if (weight >= amountToNext) {
          actualPosition += channelsNum;
          currentPosition = actualPosition;
          weight -= amountToNext;
        } else {
          currentPosition += weight;
          break;
        }
      } while (weight > 0 && actualPosition < this.originalWidthMultipliedByChannels);
      for (line = 0, pixelOffset = outputOffset; line < this.originalHeightMultipliedByChannels; pixelOffset += nextLineOffsetTargetWidth) {
        weight = fourthChannel ? trustworthyColorsCount[line / channelsNum] : 1;
        multiplier = fourthChannel ? weight ? 1 / weight : 0 : ratioWeightDivisor;
        outputBuffer[pixelOffset] = output[line++] * multiplier;
        outputBuffer[++pixelOffset] = output[line++] * multiplier;
        outputBuffer[++pixelOffset] = output[line++] * multiplier;
        if (fourthChannel)
          outputBuffer[++pixelOffset] = output[line++] * ratioWeightDivisor;
      }
      outputOffset += channelsNum;
    } while (outputOffset < this.targetWidthMultipliedByChannels);
    return outputBuffer;
  };
  Resize.prototype._resizeHeightRGBChannels = function(buffer2, fourthChannel) {
    var ratioWeight = this.ratioWeightHeightPass;
    var ratioWeightDivisor = 1 / ratioWeight;
    var output = this.outputHeightWorkBench;
    var outputBuffer = this.heightBuffer;
    var trustworthyColorsCount = this.outputHeightWorkBenchOpaquePixelsCount;
    var weight = 0;
    var amountToNext = 0;
    var actualPosition = 0;
    var currentPosition = 0;
    var pixelOffset = 0;
    var outputOffset = 0;
    var caret = 0;
    var multiplier = 1;
    var r = 0;
    var g = 0;
    var b = 0;
    var a = 0;
    do {
      for (pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels; ) {
        output[pixelOffset++] = 0;
        output[pixelOffset++] = 0;
        output[pixelOffset++] = 0;
        if (fourthChannel) {
          output[pixelOffset++] = 0;
          trustworthyColorsCount[pixelOffset / 4 - 1] = 0;
        }
      }
      weight = ratioWeight;
      do {
        amountToNext = 1 + actualPosition - currentPosition;
        multiplier = Math.min(weight, amountToNext);
        caret = actualPosition;
        for (pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels; ) {
          r = buffer2[caret++];
          g = buffer2[caret++];
          b = buffer2[caret++];
          a = fourthChannel ? buffer2[caret++] : 255;
          output[pixelOffset++] += (a ? r : 0) * multiplier;
          output[pixelOffset++] += (a ? g : 0) * multiplier;
          output[pixelOffset++] += (a ? b : 0) * multiplier;
          if (fourthChannel) {
            output[pixelOffset++] += a * multiplier;
            trustworthyColorsCount[pixelOffset / 4 - 1] += a ? multiplier : 0;
          }
        }
        if (weight >= amountToNext) {
          actualPosition = caret;
          currentPosition = actualPosition;
          weight -= amountToNext;
        } else {
          currentPosition += weight;
          break;
        }
      } while (weight > 0 && actualPosition < this.widthPassResultSize);
      for (pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels; ) {
        weight = fourthChannel ? trustworthyColorsCount[pixelOffset / 4] : 1;
        multiplier = fourthChannel ? weight ? 1 / weight : 0 : ratioWeightDivisor;
        outputBuffer[outputOffset++] = Math.round(output[pixelOffset++] * multiplier);
        outputBuffer[outputOffset++] = Math.round(output[pixelOffset++] * multiplier);
        outputBuffer[outputOffset++] = Math.round(output[pixelOffset++] * multiplier);
        if (fourthChannel) {
          outputBuffer[outputOffset++] = Math.round(output[pixelOffset++] * ratioWeightDivisor);
        }
      }
    } while (outputOffset < this.finalResultSize);
    return outputBuffer;
  };
  Resize.prototype.resizeWidthInterpolatedRGB = function(buffer2) {
    return this._resizeWidthInterpolatedRGBChannels(buffer2, false);
  };
  Resize.prototype.resizeWidthInterpolatedRGBA = function(buffer2) {
    return this._resizeWidthInterpolatedRGBChannels(buffer2, true);
  };
  Resize.prototype.resizeWidthRGB = function(buffer2) {
    return this._resizeWidthRGBChannels(buffer2, false);
  };
  Resize.prototype.resizeWidthRGBA = function(buffer2) {
    return this._resizeWidthRGBChannels(buffer2, true);
  };
  Resize.prototype.resizeHeightInterpolated = function(buffer2) {
    var ratioWeight = this.ratioWeightHeightPass;
    var outputBuffer = this.heightBuffer;
    var weight = 0;
    var finalOffset = 0;
    var pixelOffset = 0;
    var pixelOffsetAccumulated = 0;
    var pixelOffsetAccumulated2 = 0;
    var firstWeight = 0;
    var secondWeight = 0;
    var interpolationHeightSourceReadStop;
    for (; weight < 1 / 3; weight += ratioWeight) {
      for (pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels; ) {
        outputBuffer[finalOffset++] = Math.round(buffer2[pixelOffset++]);
      }
    }
    weight -= 1 / 3;
    for (interpolationHeightSourceReadStop = this.heightOriginal - 1; weight < interpolationHeightSourceReadStop; weight += ratioWeight) {
      secondWeight = weight % 1;
      firstWeight = 1 - secondWeight;
      pixelOffsetAccumulated = Math.floor(weight) * this.targetWidthMultipliedByChannels;
      pixelOffsetAccumulated2 = pixelOffsetAccumulated + this.targetWidthMultipliedByChannels;
      for (pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels; ++pixelOffset) {
        outputBuffer[finalOffset++] = Math.round(buffer2[pixelOffsetAccumulated++] * firstWeight + buffer2[pixelOffsetAccumulated2++] * secondWeight);
      }
    }
    while (finalOffset < this.finalResultSize) {
      for (pixelOffset = 0, pixelOffsetAccumulated = interpolationHeightSourceReadStop * this.targetWidthMultipliedByChannels; pixelOffset < this.targetWidthMultipliedByChannels; ++pixelOffset) {
        outputBuffer[finalOffset++] = Math.round(buffer2[pixelOffsetAccumulated++]);
      }
    }
    return outputBuffer;
  };
  Resize.prototype.resizeHeightRGB = function(buffer2) {
    return this._resizeHeightRGBChannels(buffer2, false);
  };
  Resize.prototype.resizeHeightRGBA = function(buffer2) {
    return this._resizeHeightRGBChannels(buffer2, true);
  };
  Resize.prototype.resize = function(buffer2) {
    this.resizeCallback(this.resizeHeight(this.resizeWidth(buffer2)));
  };
  Resize.prototype.bypassResizer = function(buffer2) {
    return buffer2;
  };
  Resize.prototype.initializeFirstPassBuffers = function(BILINEARAlgo) {
    this.widthBuffer = this.generateFloatBuffer(this.widthPassResultSize);
    if (!BILINEARAlgo) {
      this.outputWidthWorkBench = this.generateFloatBuffer(this.originalHeightMultipliedByChannels);
      if (this.colorChannels > 3) {
        this.outputWidthWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.heightOriginal);
      }
    }
  };
  Resize.prototype.initializeSecondPassBuffers = function(BILINEARAlgo) {
    this.heightBuffer = this.generateUint8Buffer(this.finalResultSize);
    if (!BILINEARAlgo) {
      this.outputHeightWorkBench = this.generateFloatBuffer(this.targetWidthMultipliedByChannels);
      if (this.colorChannels > 3) {
        this.outputHeightWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.targetWidth);
      }
    }
  };
  Resize.prototype.generateFloatBuffer = function(bufferLength) {
    try {
      return new Float32Array(bufferLength);
    } catch (error) {
      return [];
    }
  };
  Resize.prototype.generateFloat64Buffer = function(bufferLength) {
    try {
      return new Float64Array(bufferLength);
    } catch (error) {
      return [];
    }
  };
  Resize.prototype.generateUint8Buffer = function(bufferLength) {
    try {
      return new Uint8Array(bufferLength);
    } catch (error) {
      return [];
    }
  };
  resize = Resize;
  return resize;
}
var resize2;
var hasRequiredResize2;
function requireResize2() {
  if (hasRequiredResize2)
    return resize2;
  hasRequiredResize2 = 1;
  resize2 = {
    nearestNeighbor: function nearestNeighbor(src2, dst) {
      var wSrc = src2.width;
      var hSrc = src2.height;
      var wDst = dst.width;
      var hDst = dst.height;
      var bufSrc = src2.data;
      var bufDst = dst.data;
      for (var i = 0; i < hDst; i++) {
        for (var j = 0; j < wDst; j++) {
          var posDst = (i * wDst + j) * 4;
          var iSrc = Math.floor(i * hSrc / hDst);
          var jSrc = Math.floor(j * wSrc / wDst);
          var posSrc = (iSrc * wSrc + jSrc) * 4;
          bufDst[posDst++] = bufSrc[posSrc++];
          bufDst[posDst++] = bufSrc[posSrc++];
          bufDst[posDst++] = bufSrc[posSrc++];
          bufDst[posDst++] = bufSrc[posSrc++];
        }
      }
    },
    bilinearInterpolation: function bilinearInterpolation(src2, dst) {
      var wSrc = src2.width;
      var hSrc = src2.height;
      var wDst = dst.width;
      var hDst = dst.height;
      var bufSrc = src2.data;
      var bufDst = dst.data;
      var interpolate = function interpolate2(k, kMin, vMin, kMax, vMax) {
        if (kMin === kMax) {
          return vMin;
        }
        return Math.round((k - kMin) * vMax + (kMax - k) * vMin);
      };
      var assign = function assign2(pos, offset, x2, xMin2, xMax2, y2, yMin2, yMax2) {
        var posMin = (yMin2 * wSrc + xMin2) * 4 + offset;
        var posMax = (yMin2 * wSrc + xMax2) * 4 + offset;
        var vMin = interpolate(x2, xMin2, bufSrc[posMin], xMax2, bufSrc[posMax]);
        if (yMax2 === yMin2) {
          bufDst[pos + offset] = vMin;
        } else {
          posMin = (yMax2 * wSrc + xMin2) * 4 + offset;
          posMax = (yMax2 * wSrc + xMax2) * 4 + offset;
          var vMax = interpolate(x2, xMin2, bufSrc[posMin], xMax2, bufSrc[posMax]);
          bufDst[pos + offset] = interpolate(y2, yMin2, vMin, yMax2, vMax);
        }
      };
      for (var i = 0; i < hDst; i++) {
        for (var j = 0; j < wDst; j++) {
          var posDst = (i * wDst + j) * 4;
          var x = j * wSrc / wDst;
          var xMin = Math.floor(x);
          var xMax = Math.min(Math.ceil(x), wSrc - 1);
          var y = i * hSrc / hDst;
          var yMin = Math.floor(y);
          var yMax = Math.min(Math.ceil(y), hSrc - 1);
          assign(posDst, 0, x, xMin, xMax, y, yMin, yMax);
          assign(posDst, 1, x, xMin, xMax, y, yMin, yMax);
          assign(posDst, 2, x, xMin, xMax, y, yMin, yMax);
          assign(posDst, 3, x, xMin, xMax, y, yMin, yMax);
        }
      }
    },
    _interpolate2D: function _interpolate2D(src2, dst, options, interpolate) {
      var bufSrc = src2.data;
      var bufDst = dst.data;
      var wSrc = src2.width;
      var hSrc = src2.height;
      var wDst = dst.width;
      var hDst = dst.height;
      var wM = Math.max(1, Math.floor(wSrc / wDst));
      var wDst2 = wDst * wM;
      var hM = Math.max(1, Math.floor(hSrc / hDst));
      var hDst2 = hDst * hM;
      var buf1 = Buffer.alloc(wDst2 * hSrc * 4);
      for (var i = 0; i < hSrc; i++) {
        for (var j = 0; j < wDst2; j++) {
          var x = j * (wSrc - 1) / wDst2;
          var xPos = Math.floor(x);
          var t = x - xPos;
          var srcPos = (i * wSrc + xPos) * 4;
          var buf1Pos = (i * wDst2 + j) * 4;
          for (var k = 0; k < 4; k++) {
            var kPos = srcPos + k;
            var x0 = xPos > 0 ? bufSrc[kPos - 4] : 2 * bufSrc[kPos] - bufSrc[kPos + 4];
            var x1 = bufSrc[kPos];
            var x2 = bufSrc[kPos + 4];
            var x3 = xPos < wSrc - 2 ? bufSrc[kPos + 8] : 2 * bufSrc[kPos + 4] - bufSrc[kPos];
            buf1[buf1Pos + k] = interpolate(x0, x1, x2, x3, t);
          }
        }
      }
      var buf2 = Buffer.alloc(wDst2 * hDst2 * 4);
      for (var _i = 0; _i < hDst2; _i++) {
        for (var _j = 0; _j < wDst2; _j++) {
          var y = _i * (hSrc - 1) / hDst2;
          var yPos = Math.floor(y);
          var _t = y - yPos;
          var _buf1Pos = (yPos * wDst2 + _j) * 4;
          var buf2Pos = (_i * wDst2 + _j) * 4;
          for (var _k = 0; _k < 4; _k++) {
            var _kPos = _buf1Pos + _k;
            var y0 = yPos > 0 ? buf1[_kPos - wDst2 * 4] : 2 * buf1[_kPos] - buf1[_kPos + wDst2 * 4];
            var y1 = buf1[_kPos];
            var y2 = buf1[_kPos + wDst2 * 4];
            var y3 = yPos < hSrc - 2 ? buf1[_kPos + wDst2 * 8] : 2 * buf1[_kPos + wDst2 * 4] - buf1[_kPos];
            buf2[buf2Pos + _k] = interpolate(y0, y1, y2, y3, _t);
          }
        }
      }
      var m = wM * hM;
      if (m > 1) {
        for (var _i2 = 0; _i2 < hDst; _i2++) {
          for (var _j2 = 0; _j2 < wDst; _j2++) {
            var r = 0;
            var g = 0;
            var b = 0;
            var a = 0;
            var realColors = 0;
            for (var _y = 0; _y < hM; _y++) {
              var _yPos = _i2 * hM + _y;
              for (var _x = 0; _x < wM; _x++) {
                var _xPos = _j2 * wM + _x;
                var xyPos = (_yPos * wDst2 + _xPos) * 4;
                var pixelAlpha = buf2[xyPos + 3];
                if (pixelAlpha) {
                  r += buf2[xyPos];
                  g += buf2[xyPos + 1];
                  b += buf2[xyPos + 2];
                  realColors++;
                }
                a += pixelAlpha;
              }
            }
            var pos = (_i2 * wDst + _j2) * 4;
            bufDst[pos] = realColors ? Math.round(r / realColors) : 0;
            bufDst[pos + 1] = realColors ? Math.round(g / realColors) : 0;
            bufDst[pos + 2] = realColors ? Math.round(b / realColors) : 0;
            bufDst[pos + 3] = Math.round(a / m);
          }
        }
      } else {
        dst.data = buf2;
      }
    },
    bicubicInterpolation: function bicubicInterpolation(src2, dst, options) {
      var interpolateCubic = function interpolateCubic2(x0, x1, x2, x3, t) {
        var a0 = x3 - x2 - x0 + x1;
        var a1 = x0 - x1 - a0;
        var a2 = x2 - x0;
        var a3 = x1;
        return Math.max(0, Math.min(255, a0 * (t * t * t) + a1 * (t * t) + a2 * t + a3));
      };
      return this._interpolate2D(src2, dst, options, interpolateCubic);
    },
    hermiteInterpolation: function hermiteInterpolation(src2, dst, options) {
      var interpolateHermite = function interpolateHermite2(x0, x1, x2, x3, t) {
        var c0 = x1;
        var c1 = 0.5 * (x2 - x0);
        var c2 = x0 - 2.5 * x1 + 2 * x2 - 0.5 * x3;
        var c3 = 0.5 * (x3 - x0) + 1.5 * (x1 - x2);
        return Math.max(0, Math.min(255, Math.round(((c3 * t + c2) * t + c1) * t + c0)));
      };
      return this._interpolate2D(src2, dst, options, interpolateHermite);
    },
    bezierInterpolation: function bezierInterpolation(src2, dst, options) {
      var interpolateBezier = function interpolateBezier2(x0, x1, x2, x3, t) {
        var cp1 = x1 + (x2 - x0) / 4;
        var cp2 = x2 - (x3 - x1) / 4;
        var nt = 1 - t;
        var c0 = x1 * nt * nt * nt;
        var c1 = 3 * cp1 * nt * nt * t;
        var c2 = 3 * cp2 * nt * t * t;
        var c3 = x2 * t * t * t;
        return Math.max(0, Math.min(255, Math.round(c0 + c1 + c2 + c3)));
      };
      return this._interpolate2D(src2, dst, options, interpolateBezier);
    }
  };
  return resize2;
}
var hasRequiredEs$5;
function requireEs$5() {
  if (hasRequiredEs$5)
    return es$4;
  hasRequiredEs$5 = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _resize = _interopRequireDefault(requireResize());
    var _resize2 = _interopRequireDefault(requireResize2());
    var _default = function _default2() {
      return {
        constants: {
          RESIZE_NEAREST_NEIGHBOR: "nearestNeighbor",
          RESIZE_BILINEAR: "bilinearInterpolation",
          RESIZE_BICUBIC: "bicubicInterpolation",
          RESIZE_HERMITE: "hermiteInterpolation",
          RESIZE_BEZIER: "bezierInterpolation"
        },
        "class": {
          /**
           * Resizes the image to a set width and height using a 2-pass bilinear algorithm
           * @param {number} w the width to resize the image to (or Jimp.AUTO)
           * @param {number} h the height to resize the image to (or Jimp.AUTO)
           * @param {string} mode (optional) a scaling method (e.g. Jimp.RESIZE_BEZIER)
           * @param {function(Error, Jimp)} cb (optional) a callback for when complete
           * @returns {Jimp} this for chaining of methods
           */
          resize: function resize3(w, h, mode, cb) {
            if (typeof w !== "number" || typeof h !== "number") {
              return _utils.throwError.call(this, "w and h must be numbers", cb);
            }
            if (typeof mode === "function" && typeof cb === "undefined") {
              cb = mode;
              mode = null;
            }
            if (w === this.constructor.AUTO && h === this.constructor.AUTO) {
              return _utils.throwError.call(this, "w and h cannot both be set to auto", cb);
            }
            if (w === this.constructor.AUTO) {
              w = this.bitmap.width * (h / this.bitmap.height);
            }
            if (h === this.constructor.AUTO) {
              h = this.bitmap.height * (w / this.bitmap.width);
            }
            if (w < 0 || h < 0) {
              return _utils.throwError.call(this, "w and h must be positive numbers", cb);
            }
            w = Math.round(w);
            h = Math.round(h);
            if (typeof _resize2["default"][mode] === "function") {
              var dst = {
                data: Buffer.alloc(w * h * 4),
                width: w,
                height: h
              };
              _resize2["default"][mode](this.bitmap, dst);
              this.bitmap = dst;
            } else {
              var image = this;
              var resize4 = new _resize["default"](this.bitmap.width, this.bitmap.height, w, h, true, true, function(buffer2) {
                image.bitmap.data = Buffer.from(buffer2);
                image.bitmap.width = w;
                image.bitmap.height = h;
              });
              resize4.resize(this.bitmap.data);
            }
            if ((0, _utils.isNodePattern)(cb)) {
              cb.call(this, null, this);
            }
            return this;
          }
        }
      };
    };
    exports["default"] = _default;
  })(es$4);
  return es$4;
}
var es$3 = {};
var hasRequiredEs$4;
function requireEs$4() {
  if (hasRequiredEs$4)
    return es$3;
  hasRequiredEs$4 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    function advancedRotate(deg, mode) {
      deg %= 360;
      var rad = deg * Math.PI / 180;
      var cosine = Math.cos(rad);
      var sine = Math.sin(rad);
      var w = this.bitmap.width;
      var h = this.bitmap.height;
      if (mode === true || typeof mode === "string") {
        w = Math.ceil(Math.abs(this.bitmap.width * cosine) + Math.abs(this.bitmap.height * sine)) + 1;
        h = Math.ceil(Math.abs(this.bitmap.width * sine) + Math.abs(this.bitmap.height * cosine)) + 1;
        if (w % 2 !== 0) {
          w++;
        }
        if (h % 2 !== 0) {
          h++;
        }
        var c = this.cloneQuiet();
        this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x2, y2, idx) {
          this.bitmap.data.writeUInt32BE(this._background, idx);
        });
        var max = Math.max(w, h, this.bitmap.width, this.bitmap.height);
        this.resize(max, max, mode);
        this.blit(c, this.bitmap.width / 2 - c.bitmap.width / 2, this.bitmap.height / 2 - c.bitmap.height / 2);
      }
      var bW = this.bitmap.width;
      var bH = this.bitmap.height;
      var dstBuffer = Buffer.alloc(this.bitmap.data.length);
      function createTranslationFunction(deltaX, deltaY) {
        return function(x2, y2) {
          return {
            x: x2 + deltaX,
            y: y2 + deltaY
          };
        };
      }
      var translate2Cartesian = createTranslationFunction(-(bW / 2), -(bH / 2));
      var translate2Screen = createTranslationFunction(bW / 2 + 0.5, bH / 2 + 0.5);
      for (var y = 1; y <= bH; y++) {
        for (var x = 1; x <= bW; x++) {
          var cartesian = translate2Cartesian(x, y);
          var source = translate2Screen(cosine * cartesian.x - sine * cartesian.y, cosine * cartesian.y + sine * cartesian.x);
          var dstIdx = bW * (y - 1) + x - 1 << 2;
          if (source.x >= 0 && source.x < bW && source.y >= 0 && source.y < bH) {
            var srcIdx = (bW * (source.y | 0) + source.x | 0) << 2;
            var pixelRGBA = this.bitmap.data.readUInt32BE(srcIdx);
            dstBuffer.writeUInt32BE(pixelRGBA, dstIdx);
          } else {
            dstBuffer.writeUInt32BE(this._background, dstIdx);
          }
        }
      }
      this.bitmap.data = dstBuffer;
      if (mode === true || typeof mode === "string") {
        var _x = bW / 2 - w / 2;
        var _y = bH / 2 - h / 2;
        this.crop(_x, _y, w, h);
      }
    }
    var _default = function _default2() {
      return {
        /**
         * Rotates the image clockwise by a number of degrees. By default the width and height of the image will be resized appropriately.
         * @param {number} deg the number of degrees to rotate the image by
         * @param {string|boolean} mode (optional) resize mode or a boolean, if false then the width and height of the image will not be changed
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp} this for chaining of methods
         */
        rotate: function rotate(deg, mode, cb) {
          if (typeof mode === "undefined" || mode === null) {
            mode = true;
          }
          if (typeof mode === "function" && typeof cb === "undefined") {
            cb = mode;
            mode = true;
          }
          if (typeof deg !== "number") {
            return _utils.throwError.call(this, "deg must be a number", cb);
          }
          if (typeof mode !== "boolean" && typeof mode !== "string") {
            return _utils.throwError.call(this, "mode must be a boolean or a string", cb);
          }
          advancedRotate.call(this, deg, mode, cb);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$3);
  return es$3;
}
var es$2 = {};
var hasRequiredEs$3;
function requireEs$3() {
  if (hasRequiredEs$3)
    return es$2;
  hasRequiredEs$3 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        /**
         * Uniformly scales the image by a factor.
         * @param {number} f the factor to scale the image by
         * @param {string} mode (optional) a scaling method (e.g. Jimp.RESIZE_BEZIER)
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp} this for chaining of methods
         */
        scale: function scale(f, mode, cb) {
          if (typeof f !== "number") {
            return _utils.throwError.call(this, "f must be a number", cb);
          }
          if (f < 0) {
            return _utils.throwError.call(this, "f must be a positive number", cb);
          }
          if (typeof mode === "function" && typeof cb === "undefined") {
            cb = mode;
            mode = null;
          }
          var w = this.bitmap.width * f;
          var h = this.bitmap.height * f;
          this.resize(w, h, mode);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        },
        /**
         * Scale the image to the largest size that fits inside the rectangle that has the given width and height.
         * @param {number} w the width to resize the image to
         * @param {number} h the height to resize the image to
         * @param {string} mode (optional) a scaling method (e.g. Jimp.RESIZE_BEZIER)
         * @param {function(Error, Jimp)} cb (optional) a callback for when complete
         * @returns {Jimp} this for chaining of methods
         */
        scaleToFit: function scaleToFit(w, h, mode, cb) {
          if (typeof w !== "number" || typeof h !== "number") {
            return _utils.throwError.call(this, "w and h must be numbers", cb);
          }
          if (typeof mode === "function" && typeof cb === "undefined") {
            cb = mode;
            mode = null;
          }
          var f = w / h > this.bitmap.width / this.bitmap.height ? h / this.bitmap.height : w / this.bitmap.width;
          this.scale(f, mode);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$2);
  return es$2;
}
var es$1 = {};
var hasRequiredEs$2;
function requireEs$2() {
  if (hasRequiredEs$2)
    return es$1;
  hasRequiredEs$2 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        shadow: function shadow() {
          var _this = this;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var cb = arguments.length > 1 ? arguments[1] : void 0;
          if (typeof options === "function") {
            cb = options;
            options = {};
          }
          var _options = options, _options$opacity = _options.opacity, opacity = _options$opacity === void 0 ? 0.7 : _options$opacity, _options$size = _options.size, size = _options$size === void 0 ? 1.1 : _options$size, _options$x = _options.x, x = _options$x === void 0 ? -25 : _options$x, _options$y = _options.y, y = _options$y === void 0 ? 25 : _options$y, _options$blur = _options.blur, blur = _options$blur === void 0 ? 5 : _options$blur;
          var orig = this.clone();
          var shadow2 = this.clone();
          shadow2.scan(0, 0, shadow2.bitmap.width, shadow2.bitmap.height, function(x2, y2, idx) {
            shadow2.bitmap.data[idx] = 0;
            shadow2.bitmap.data[idx + 1] = 0;
            shadow2.bitmap.data[idx + 2] = 0;
            shadow2.bitmap.data[idx + 3] = shadow2.constructor.limit255(shadow2.bitmap.data[idx + 3] * opacity);
            _this.bitmap.data[idx] = 0;
            _this.bitmap.data[idx + 1] = 0;
            _this.bitmap.data[idx + 2] = 0;
            _this.bitmap.data[idx + 3] = 0;
          });
          shadow2.resize(shadow2.bitmap.width * size, shadow2.bitmap.height * size).blur(blur);
          this.composite(shadow2, x, y);
          this.composite(orig, 0, 0);
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es$1);
  return es$1;
}
var es = {};
var hasRequiredEs$1;
function requireEs$1() {
  if (hasRequiredEs$1)
    return es;
  hasRequiredEs$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _utils = requireEs$u();
    var _default = function _default2() {
      return {
        threshold: function threshold(_ref, cb) {
          var _this = this;
          var max = _ref.max, _ref$replace = _ref.replace, replace = _ref$replace === void 0 ? 255 : _ref$replace, _ref$autoGreyscale = _ref.autoGreyscale, autoGreyscale = _ref$autoGreyscale === void 0 ? true : _ref$autoGreyscale;
          if (typeof max !== "number") {
            return _utils.throwError.call(this, "max must be a number", cb);
          }
          if (typeof replace !== "number") {
            return _utils.throwError.call(this, "replace must be a number", cb);
          }
          if (typeof autoGreyscale !== "boolean") {
            return _utils.throwError.call(this, "autoGreyscale must be a boolean", cb);
          }
          max = this.constructor.limit255(max);
          replace = this.constructor.limit255(replace);
          if (autoGreyscale) {
            this.greyscale();
          }
          this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function(x, y, idx) {
            var grey = _this.bitmap.data[idx] < max ? _this.bitmap.data[idx] : replace;
            _this.bitmap.data[idx] = grey;
            _this.bitmap.data[idx + 1] = grey;
            _this.bitmap.data[idx + 2] = grey;
          });
          if ((0, _utils.isNodePattern)(cb)) {
            cb.call(this, null, this);
          }
          return this;
        }
      };
    };
    exports["default"] = _default;
  })(es);
  return es;
}
var hasRequiredEs;
function requireEs() {
  if (hasRequiredEs)
    return es$l;
  hasRequiredEs = 1;
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
    var _timm = requireTimm();
    var _pluginBlit = _interopRequireDefault(requireEs$l());
    var _pluginBlur = _interopRequireDefault(requireEs$k());
    var _pluginCircle = _interopRequireDefault(requireEs$j());
    var _pluginColor = _interopRequireDefault(requireEs$i());
    var _pluginContain = _interopRequireDefault(requireEs$h());
    var _pluginCover = _interopRequireDefault(requireEs$g());
    var _pluginCrop = _interopRequireDefault(requireEs$f());
    var _pluginDisplace = _interopRequireDefault(requireEs$e());
    var _pluginDither = _interopRequireDefault(requireEs$d());
    var _pluginFisheye = _interopRequireDefault(requireEs$c());
    var _pluginFlip = _interopRequireDefault(requireEs$b());
    var _pluginGaussian = _interopRequireDefault(requireEs$a());
    var _pluginInvert = _interopRequireDefault(requireEs$9());
    var _pluginMask = _interopRequireDefault(requireEs$8());
    var _pluginNormalize = _interopRequireDefault(requireEs$7());
    var _pluginPrint = _interopRequireDefault(requireEs$6());
    var _pluginResize = _interopRequireDefault(requireEs$5());
    var _pluginRotate = _interopRequireDefault(requireEs$4());
    var _pluginScale = _interopRequireDefault(requireEs$3());
    var _pluginShadow = _interopRequireDefault(requireEs$2());
    var _pluginThreshold = _interopRequireDefault(requireEs$1());
    var plugins = [_pluginBlit["default"], _pluginBlur["default"], _pluginCircle["default"], _pluginColor["default"], _pluginContain["default"], _pluginCover["default"], _pluginCrop["default"], _pluginDisplace["default"], _pluginDither["default"], _pluginFisheye["default"], _pluginFlip["default"], _pluginGaussian["default"], _pluginInvert["default"], _pluginMask["default"], _pluginNormalize["default"], _pluginPrint["default"], _pluginResize["default"], _pluginRotate["default"], _pluginScale["default"], _pluginShadow["default"], _pluginThreshold["default"]];
    var _default = function _default2(jimpEvChange) {
      var initializedPlugins = plugins.map(function(pluginModule) {
        var plugin = pluginModule(jimpEvChange) || {};
        if (!plugin["class"] && !plugin.constants) {
          plugin = {
            "class": plugin
          };
        }
        return plugin;
      });
      return _timm.mergeDeep.apply(void 0, (0, _toConsumableArray2["default"])(initializedPlugins));
    };
    exports["default"] = _default;
  })(es$l);
  return es$l;
}
(function(exports) {
  var _interopRequireDefault = interopRequireDefaultExports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _custom = _interopRequireDefault(requireEs$s());
  var _types = _interopRequireDefault(requireEs$m());
  var _plugins = _interopRequireDefault(requireEs());
  var _default = (0, _custom["default"])({
    types: [_types["default"]],
    plugins: [_plugins["default"]]
  });
  exports["default"] = _default;
})(es$v);
var index = /* @__PURE__ */ getDefaultExportFromCjs(es$v);
var index$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [es$v]);
export {
  index$1 as i
};
