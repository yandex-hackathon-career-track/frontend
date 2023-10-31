import {
  Tablelvl2Context_default
} from "./chunk-OTLOU3YV.js";
import {
  init_composeClasses
} from "./chunk-53AJWDHX.js";
import {
  alpha,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_esm,
  init_esm2,
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

// node_modules/@mui/material/TableRow/TableRow.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_esm2();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/TableRow/tableRowClasses.js
init_esm();
init_generateUtilityClass();
function getTableRowUtilityClass(slot) {
  return generateUtilityClass("MuiTableRow", slot);
}
var tableRowClasses = generateUtilityClasses("MuiTableRow", ["root", "selected", "hover", "head", "footer"]);
var tableRowClasses_default = tableRowClasses;

// node_modules/@mui/material/TableRow/TableRow.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component", "hover", "selected"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
  };
  return composeClasses(slots, getTableRowUtilityClass, classes);
};
var TableRowRoot = styled_default("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
  }
})(({
  theme
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses_default.hover}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${tableRowClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
    }
  }
}));
var defaultComponent = "tr";
var TableRow = React.forwardRef(function TableRow2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTableRow"
  });
  const {
    className,
    component = defaultComponent,
    hover = false,
    selected = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const tablelvl2 = React.useContext(Tablelvl2Context_default);
  const ownerState = _extends({}, props, {
    component,
    hover,
    selected,
    head: tablelvl2 && tablelvl2.variant === "head",
    footer: tablelvl2 && tablelvl2.variant === "footer"
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(TableRowRoot, _extends({
    as: component,
    ref,
    className: clsx_default(classes.root, className),
    role: component === defaultComponent ? null : "row",
    ownerState
  }, other));
});
true ? TableRow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Should be valid <tr> children such as `TableCell`.
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
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: import_prop_types.default.bool,
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var TableRow_default = TableRow;

export {
  getTableRowUtilityClass,
  tableRowClasses_default,
  TableRow_default
};
//# sourceMappingURL=chunk-XMZR6SW5.js.map
