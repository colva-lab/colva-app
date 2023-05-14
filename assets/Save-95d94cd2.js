import { cC as useLocalObservable, aZ as FieldBuilder, az as requireCreateSvgIcon, aA as interopRequireDefaultExports, aB as require$$2 } from "./index-60a9ad09.js";
function useField(props) {
  var field = useLocalObservable(function() {
    var fieldProps = typeof props === "function" ? props() : props;
    return new FieldBuilder(fieldProps);
  });
  return field;
}
var Save = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Save, "__esModule", {
  value: true
});
var default_1 = Save.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), "Save");
default_1 = Save.default = _default;
export {
  default_1 as d,
  useField as u
};
