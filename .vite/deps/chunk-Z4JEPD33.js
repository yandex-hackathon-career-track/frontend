import {
  createGrid,
  generateUtilityClass,
  generateUtilityClasses,
  init_Unstable_Grid,
  init_esm,
  init_generateUtilityClass,
  require_prop_types,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-3GNGTUFV.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/material/Unstable_Grid2/Grid2.js
var import_prop_types = __toESM(require_prop_types());
init_Unstable_Grid();
var Grid2 = createGrid({
  createStyledComponent: styled_default("div", {
    name: "MuiGrid2",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  }),
  componentName: "MuiGrid2",
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "MuiGrid2"
  })
});
true ? Grid2.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Grid2_default = Grid2;

// node_modules/@mui/material/Unstable_Grid2/grid2Classes.js
init_esm();
init_generateUtilityClass();
function getGrid2UtilityClass(slot) {
  return generateUtilityClass("MuiGrid2", slot);
}
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
var WRAPS = ["nowrap", "wrap-reverse", "wrap"];
var GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var grid2Classes = generateUtilityClasses("MuiGrid2", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...SPACINGS.map((spacing) => `spacing-xs-${spacing}`),
  // direction values
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  // wrap values
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  // grid sizes for all breakpoints
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]);
var grid2Classes_default = grid2Classes;

export {
  Grid2_default,
  getGrid2UtilityClass,
  grid2Classes_default
};
//# sourceMappingURL=chunk-Z4JEPD33.js.map
