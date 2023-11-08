"use strict";
(self["webpackChunkfilms_demo"] = self["webpackChunkfilms_demo"] || []).push([[9501],{

/***/ 4009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternalErrorPage: () => (/* binding */ InternalErrorPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40720);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90731);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34726);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96912);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4745);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3911);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18857);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86896);





const InternalErrorPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFocusWhenNavigate */ .go)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Main */ .o, { labelledBy: "title", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .HeaderLayout */ .T,
      {
        id: "title",
        title: formatMessage({
          id: "content-manager.pageNotFound",
          defaultMessage: "Page not found"
        })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .ContentLayout */ .D, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .EmptyStateLayout */ .x,
      {
        action: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .LinkButton */ .Q, { variant: "secondary", endIcon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), to: "/", children: formatMessage({
          id: "app.components.NotFoundPage.back",
          defaultMessage: "Back to homepage"
        }) }),
        content: formatMessage({
          id: "notification.error",
          defaultMessage: "An error occured"
        }),
        hasRadius: true,
        icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, { width: "10rem" }),
        shadow: "tableShadow"
      }
    ) })
  ] });
};


/***/ })

}]);