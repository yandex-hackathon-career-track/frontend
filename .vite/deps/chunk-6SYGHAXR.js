import {
  Tablelvl2Context_default
} from "./chunk-OTLOU3YV.js";
import {
  init_composeClasses
} from "./chunk-53AJWDHX.js";
import {
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_esm,
  init_generateUtilityClass,
  init_styled,
  init_useThemeProps,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-3GNGTUFV.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose
} from "./chunk-6GNJQVVF.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/material/TableBody/TableBody.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/TableBody/tableBodyClasses.js
init_esm();
init_generateUtilityClass();
function getTableBodyUtilityClass(slot) {
  return generateUtilityClass("MuiTableBody", slot);
}
var tableBodyClasses = generateUtilityClasses("MuiTableBody", ["root"]);
var tableBodyClasses_default = tableBodyClasses;

// node_modules/@mui/material/TableBody/TableBody.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableBodyUtilityClass, classes);
};
var TableBodyRoot = styled_default("tbody", {
  name: "MuiTableBody",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "table-row-group"
});
var tablelvl2 = {
  variant: "body"
};
var defaultComponent = "tbody";
var TableBody = React.forwardRef(function TableBody2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTableBody"
  });
  const {
    className,
    component = defaultComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(Tablelvl2Context_default.Provider, {
    value: tablelvl2,
    children: (0, import_jsx_runtime.jsx)(TableBodyRoot, _extends({
      className: clsx_default(classes.root, className),
      as: component,
      ref,
      role: component === defaultComponent ? null : "rowgroup",
      ownerState
    }, other))
  });
});
true ? TableBody.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `TableRow`.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var TableBody_default = TableBody;

export {
  getTableBodyUtilityClass,
  tableBodyClasses_default,
  TableBody_default
};
//# sourceMappingURL=chunk-6SYGHAXR.js.map
