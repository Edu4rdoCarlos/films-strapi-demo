"use strict";
(self["webpackChunkfilms_demo"] = self["webpackChunkfilms_demo"] || []).push([[7531],{

/***/ 61578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71590);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40720);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90731);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16607);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96912);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94101);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59288);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62577);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86896);





const SalesPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Main */ .o, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .HeaderLayout */ .T,
    {
      title: formatMessage({
        id: "Settings.review-workflows.list.page.title",
        defaultMessage: "Review Workflows"
      }),
      subtitle: formatMessage({
        id: "Settings.review-workflows.list.page.subtitle",
        defaultMessage: "Manage your content review process"
      })
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .EmptyStateLayout */ .x,
    {
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, { width: "10rem" }),
      content: formatMessage({
        id: "Settings.review-workflows.not-available",
        defaultMessage: "Review Workflows is only available as part of the Enterprise Edition. Upgrade to create and manage workflows."
      }),
      action: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_8__/* .LinkButton */ .Q,
        {
          variant: "default",
          endIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null),
          href: "https://strp.cc/3tdNfJqe",
          isExternal: true,
          target: "_blank"
        },
        formatMessage({
          id: "global.learn-more",
          defaultMessage: "Learn more"
        })
      )
    }
  ))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalesPage);


/***/ })

}]);