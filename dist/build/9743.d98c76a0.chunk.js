(self["webpackChunkfilms_demo"] = self["webpackChunkfilms_demo"] || []).push([[9743],{

/***/ 89881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(47816),
    createBaseEach = __webpack_require__(99291);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 69199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881),
    isArrayLike = __webpack_require__(98612);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 82689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseGet = __webpack_require__(97786),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    baseSortBy = __webpack_require__(71131),
    baseUnary = __webpack_require__(7518),
    compareMultiple = __webpack_require__(85022),
    identity = __webpack_require__(6557),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 71131:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 26393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33448);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 85022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(26393);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 99291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(98612);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 89734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    baseOrderBy = __webpack_require__(82689),
    baseRest = __webpack_require__(5976),
    isIterateeCall = __webpack_require__(16612);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 71590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1565);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16607);




const GridContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)) `
  display: grid;
  grid-template-columns: ${({ hasSideNav }) => (hasSideNav ? `auto 1fr` : '1fr')};
`;
const OverflowingItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)) `
  overflow-x: hidden;
`;
const Layout = ({ sideNav, children }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GridContainer, { hasSideNav: Boolean(sideNav), children: [sideNav, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverflowingItem, { paddingBottom: 10, children: children })] }));
};




/***/ }),

/***/ 29824:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62577);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73727);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1565);
/* harmony import */ var _themes_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66362);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10574);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16607);









const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.a `
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : undefined)};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.neutral600 : theme.colors.primary600)};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary700};
  }

  ${_themes_utils_mjs__WEBPACK_IMPORTED_MODULE_4__/* .buttonFocusStyle */ .BF};
`;
const IconWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x)) `
  display: flex;
`;
const Link = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children, href, to, disabled = false, startIcon, endIcon, ...restProps }, ref) => {
    const target = href ? '_blank' : undefined;
    const rel = href ? 'noreferrer noopener' : undefined;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LinkWrapper, { as: to && !disabled ? react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL : 'a', target: target, rel: rel, to: disabled ? undefined : to, href: disabled ? '#' : href, disabled: disabled, ref: ref, ...restProps, children: [startIcon && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingRight: 2, children: startIcon })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, { children: children }), endIcon && !href && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingLeft: 2, children: endIcon })), href && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingLeft: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) }))] }));
});




/***/ }),

/***/ 56233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ SubNav)
/* harmony export */ });
/* unused harmony export subNavWidth */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1565);
/* harmony import */ var _Grid_Grid_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31988);




const subNavWidth = `${232 / 16}rem`;
const SubNavWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Grid_Grid_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .r)) `
  width: ${subNavWidth};
  background: ${({ theme }) => theme.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
  z-index: 1;
`;
const SubNav = ({ ariaLabel, ...props }) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNavWrapper, { "aria-label": ariaLabel, as: "nav", ...props });
};




/***/ }),

/***/ 71603:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ SubNavHeader)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Search.mjs
var Search = __webpack_require__(90272);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.mjs
var keyboardKeys = __webpack_require__(40840);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.mjs
var useId = __webpack_require__(92058);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/usePrevious.mjs


const usePrevious = (value) => {
    const ref = (0,react.useRef)();
    (0,react.useEffect)(() => {
        ref.current = value;
    });
    return ref.current;
};



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(26910);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/SearchForm.mjs
var SearchForm = __webpack_require__(49185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.mjs
var Searchbar = __webpack_require__(35987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(10574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(96208);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.mjs















const CustomDivider = (0,styled_components_browser_esm/* default */.ZP)((0,Divider/* Divider */.i)) `
  width: ${24 / 16}rem;
  background-color: ${({ theme }) => theme.colors.neutral200};
`;
const SubNavHeader = ({ as = 'h2', label, searchLabel = '', searchable = false, onChange = () => { }, value = '', onClear = () => { }, onSubmit = () => { }, id, }) => {
    const [isSearchOpen, setSearchOpen] = (0,react.useState)(false);
    const previousSearchOpenValue = usePrevious(isSearchOpen);
    const clearButtonId = (0,useId/* useId */.M)(id);
    const searchRef = (0,react.useRef)(undefined);
    const searchButtonRef = (0,react.useRef)(undefined);
    (0,react.useEffect)(() => {
        if (isSearchOpen && searchRef.current) {
            searchRef.current.focus();
        }
        if (previousSearchOpenValue && !isSearchOpen && searchButtonRef.current) {
            searchButtonRef.current.focus();
        }
    }, [isSearchOpen, previousSearchOpenValue]);
    const toggleSearch = () => {
        setSearchOpen((isOpen) => !isOpen);
    };
    const handleClear = (e) => {
        onClear(e);
        searchRef.current.focus();
    };
    const handleBlur = (e) => {
        if (e.relatedTarget?.id !== clearButtonId) {
            setSearchOpen(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === keyboardKeys/* KeyboardKeys */.y.ESCAPE) {
            setSearchOpen(false);
        }
    };
    if (isSearchOpen) {
        return ((0,jsx_runtime.jsxs)(Box/* Box */.x, { paddingLeft: 4, paddingTop: 5, paddingBottom: 2, paddingRight: 4, children: [(0,jsx_runtime.jsx)(SearchForm/* SearchForm */.U, { children: (0,jsx_runtime.jsx)(Searchbar/* Searchbar */.w, { name: "searchbar", value: value, onChange: onChange, placeholder: "e.g: strapi-plugin-abcd", onKeyDown: handleKeyDown, ref: searchRef, onBlur: handleBlur, onClear: handleClear, onSubmit: onSubmit, clearLabel: "Clear", size: "S", children: searchLabel }) }), (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, paddingTop: 4, children: (0,jsx_runtime.jsx)(CustomDivider, {}) })] }));
    }
    return ((0,jsx_runtime.jsxs)(Box/* Box */.x, { paddingLeft: 6, paddingTop: 6, paddingBottom: 2, paddingRight: 4, children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", alignItems: "flex-start", children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: as, children: label }), searchable && ((0,jsx_runtime.jsx)(IconButton/* IconButton */.h, { ref: searchButtonRef, onClick: toggleSearch, label: searchLabel, icon: (0,jsx_runtime.jsx)(Search/* default */.Z, {}) }))] }), (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingTop: 4, children: (0,jsx_runtime.jsx)(CustomDivider, {}) })] }));
};




/***/ }),

/***/ 36636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ SubNavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59233);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1565);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16607);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10574);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96987);
/* harmony import */ var _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53342);









const SubNavLinkWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral800};
  svg > * {
    fill: ${({ theme }) => theme.colors.neutral600};
  }

  &.active {
    ${({ theme }) => {
    return `
      background-color: ${theme.colors.primary100};
      border-right: 2px solid ${theme.colors.primary600};
      svg > * {
        fill: ${theme.colors.primary700};
      }
      ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
        color: ${theme.colors.primary700};
        font-weight: 500;
      }
      `;
}}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`;
const CustomBullet = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)) `
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.neutral600)};
  }
`;
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.div `
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`;
const SubNavLink = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children, icon = null, withBullet = false, as = _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_6__/* .BaseLink */ .f, isSubSectionChild = false, ...props }, ref) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubNavLinkWrapper, { as: as, icon: icon, background: "neutral100", paddingLeft: isSubSectionChild ? 9 : 7, paddingBottom: 2, paddingTop: 2, ref: ref, ...props, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { children: [icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { children: icon }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBullet, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingLeft: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, { as: "span", children: children }) })] }), withBullet && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { as: _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, paddingRight: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBullet, { "$active": true }) }))] }));
});




/***/ }),

/***/ 21660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ SubNavSection)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(58471);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(10574);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSectionLabel.mjs







const SubNavSectionLabelWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k)) `
  border: none;
  padding: 0;
  background: transparent;
`;
const DropDownIconWrapper = styled_components_browser_esm/* default */.ZP.div `
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated }) => (rotated ? '0deg' : '180deg')});
`;
const SubNavSectionLabel = ({ collapsable = false, label, onClick = () => { }, ariaExpanded, ariaControls, }) => {
    if (collapsable) {
        return ((0,jsx_runtime.jsxs)(SubNavSectionLabelWrapper, { as: "button", onClick: onClick, "aria-expanded": ariaExpanded, "aria-controls": ariaControls, textAlign: "left", children: [(0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 1, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", children: label }) }), collapsable && ((0,jsx_runtime.jsx)(DropDownIconWrapper, { rotated: ariaExpanded, children: (0,jsx_runtime.jsx)(CarretDown/* default */.Z, { "aria-hidden": true }) }))] }));
    }
    return ((0,jsx_runtime.jsx)(SubNavSectionLabelWrapper, { children: (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 1, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", children: label }) }) }));
};



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.mjs
var useId = __webpack_require__(92058);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.mjs
var Badge = __webpack_require__(18787);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.mjs









const SubNavSectionWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x)) `
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }
`;
const SubNavSection = ({ collapsable = false, label, badgeLabel, children, id }) => {
    const [isOpen, setOpenLinks] = (0,react.useState)(true);
    const listId = (0,useId/* useId */.M)(id);
    const handleClick = () => {
        setOpenLinks((prev) => !prev);
    };
    return ((0,jsx_runtime.jsxs)(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1, children: [(0,jsx_runtime.jsx)(SubNavSectionWrapper, { paddingLeft: 6, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: (0,jsx_runtime.jsxs)(Box/* Box */.x, { position: "relative", paddingRight: badgeLabel ? 6 : 0, children: [(0,jsx_runtime.jsx)(SubNavSectionLabel, { onClick: handleClick, ariaExpanded: isOpen, ariaControls: listId, collapsable: collapsable, label: label }), badgeLabel && ((0,jsx_runtime.jsx)(Badge/* Badge */.C, { backgroundColor: "neutral150", textColor: "neutral600", position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", children: badgeLabel }))] }) }), (!collapsable || isOpen) && ((0,jsx_runtime.jsx)("ol", { id: listId, children: react.Children.map(children, (child, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return (0,jsx_runtime.jsx)("li", { children: child }, index);
                }) }))] }));
};




/***/ }),

/***/ 61499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SubNavSections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16607);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96987);





const SubNavSections = ({ children, spacing = 2, horizontal = false, ...props }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { paddingTop: 2, paddingBottom: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k, { as: "ol", gap: spacing, direction: horizontal ? 'row' : 'column', alignItems: horizontal ? 'center' : 'stretch', ...props, children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index) => {
                /* eslint-disable react/no-array-index-key */
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: child }, index);
            }) }) }));
};




/***/ }),

/***/ 59233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const o = (e) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 4 4", ...e, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { width: 4, height: 4, fill: "#A5A5BA", rx: 2 }) }), r = o;



/***/ }),

/***/ 46759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const t = (o) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...o, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#8E8EA9",
    d: "M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"
  }
) }), a = t;



/***/ })

}]);