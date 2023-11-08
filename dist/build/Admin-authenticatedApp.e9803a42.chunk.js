"use strict";
(self["webpackChunkfilms_demo"] = self["webpackChunkfilms_demo"] || []).push([[801],{

/***/ 70645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AuthenticatedApp: () => (/* binding */ AuthenticatedApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 23 modules
var dist = __webpack_require__(3911);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/semver/functions/lt.js
var lt = __webpack_require__(21544);
var lt_default = /*#__PURE__*/__webpack_require__.n(lt);
// EXTERNAL MODULE: ./node_modules/semver/functions/valid.js
var valid = __webpack_require__(76397);
var valid_default = /*#__PURE__*/__webpack_require__.n(valid);
;// CONCATENATED MODULE: ./.cache/package.json
const package_namespaceObject = {"i8":"4.15.0"};
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useConfiguration.ts
var useConfiguration = __webpack_require__(83171);
// EXTERNAL MODULE: ./.cache/admin/src/utils/getFullName.ts
var getFullName = __webpack_require__(13657);
;// CONCATENATED MODULE: ./.cache/admin/src/utils/hashAdminUserEmail.ts
const utils = {
  bufferToHex(buffer) {
    return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
  },
  async digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    return this.bufferToHex(hashBuffer);
  }
};
async function hashAdminUserEmail(payload) {
  if (!payload) {
    return null;
  }
  try {
    return await utils.digestMessage(payload.email);
  } catch (error) {
    return null;
  }
}

// EXTERNAL MODULE: ./.cache/admin/src/components/NpsSurvey.tsx
var NpsSurvey = __webpack_require__(19097);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/cjs/index.js
var cjs = __webpack_require__(99168);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var dist_cjs = __webpack_require__(61080);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var react_redux_es = __webpack_require__(70743);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Portal/Portal.mjs
var Portal = __webpack_require__(11219);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/FocusTrap/FocusTrap.mjs
var FocusTrap = __webpack_require__(52624);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(96208);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(12473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(10574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(94101);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.mjs
var Cross = __webpack_require__(35771);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.mjs
var ArrowRight = __webpack_require__(98);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.ts
var constants = __webpack_require__(58704);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Ornaments.tsx
var Ornaments = __webpack_require__(29261);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal.tsx











const GuidedTourModal = () => {
  const {
    currentStep,
    guidedTourState,
    setCurrentStep,
    setStepState,
    isGuidedTourVisible,
    setSkipped
  } = (0,dist/* useGuidedTour */.c1)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  if (!currentStep || !isGuidedTourVisible) {
    return null;
  }
  const stepData = get_default()(constants/* LAYOUT_DATA */.o, currentStep);
  const sectionKeys = Object.keys(guidedTourState);
  const [sectionName, stepName] = currentStep.split(".");
  const sectionIndex = sectionKeys.indexOf(sectionName);
  const stepIndex = Object.keys(guidedTourState[sectionName]).indexOf(stepName);
  const hasSectionAfter = sectionIndex < sectionKeys.length - 1;
  const hasStepAfter = stepIndex < Object.keys(guidedTourState[sectionName]).length - 1;
  const handleCtaClick = () => {
    setStepState(currentStep, true);
    trackUsage(stepData.trackingEvent);
    setCurrentStep(null);
  };
  const handleSkip = () => {
    setSkipped(true);
    setCurrentStep(null);
    trackUsage("didSkipGuidedtour");
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Portal/* Portal */.h, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalWrapper, { onClick: handleCtaClick, padding: 8, justifyContent: "center", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusTrap/* FocusTrap */.i, { onEscape: handleCtaClick, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    Flex/* Flex */.k,
    {
      direction: "column",
      alignItems: "stretch",
      background: "neutral0",
      width: (0,dist/* pxToRem */.Q1)(660),
      shadow: "popupShadow",
      hasRadius: true,
      padding: 4,
      gap: 8,
      role: "dialog",
      "aria-modal": true,
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.k, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          IconButton/* IconButton */.h,
          {
            onClick: handleCtaClick,
            "aria-label": formatMessage({
              id: "app.utils.close-label",
              defaultMessage: "Close"
            }),
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Cross/* default */.Z, {})
          }
        ) }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Box/* Box */.x,
          {
            paddingLeft: 7,
            paddingRight: 7,
            paddingBottom: !hasStepAfter && !hasSectionAfter ? 8 : 0,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              GuidedTourStepper,
              {
                title: stepData.title,
                cta: "cta" in stepData ? stepData.cta : void 0,
                onCtaClick: handleCtaClick,
                sectionIndex,
                stepIndex,
                hasSectionAfter,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(GuidedTourContent, { ...stepData.content })
              }
            )
          }
        ),
        !(!hasStepAfter && !hasSectionAfter) && /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.k, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.z, { variant: "tertiary", onClick: handleSkip, children: formatMessage({
          id: "app.components.GuidedTour.skip",
          defaultMessage: "Skip the tour"
        }) }) })
      ]
    }
  ) }) }) });
};
const ModalWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
`;
const GuidedTourStepper = ({
  title,
  children,
  cta,
  onCtaClick,
  sectionIndex,
  stepIndex,
  hasSectionAfter
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const hasSectionBefore = sectionIndex > 0;
  const hasStepsBefore = stepIndex > 0;
  const nextSectionIndex = sectionIndex + 1;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { alignItems: "stretch", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.k, { marginRight: 8, justifyContent: "center", minWidth: (0,dist/* pxToRem */.Q1)(30), children: hasSectionBefore && /* @__PURE__ */ (0,jsx_runtime.jsx)(Ornaments/* VerticalDivider */.p, { state: constants/* STATES */.P.IS_DONE, minHeight: (0,dist/* pxToRem */.Q1)(24) }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "sigma", textColor: "primary600", children: formatMessage({
        id: "app.components.GuidedTour.title",
        defaultMessage: "3 steps to get started"
      }) })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.k, { marginRight: 8, minWidth: (0,dist/* pxToRem */.Q1)(30), children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Ornaments/* Number */.M,
        {
          state: hasStepsBefore ? constants/* STATES */.P.IS_DONE : constants/* STATES */.P.IS_ACTIVE,
          paddingTop: 3,
          paddingBottom: 3,
          children: sectionIndex + 1
        }
      ) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "alpha", fontWeight: "bold", textColor: "neutral800", as: "h3", id: "title", children: formatMessage(title) })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { alignItems: "stretch", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.k, { marginRight: 8, direction: "column", justifyContent: "center", minWidth: (0,dist/* pxToRem */.Q1)(30), children: hasSectionAfter && /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Ornaments/* VerticalDivider */.p, { state: constants/* STATES */.P.IS_DONE }),
        hasStepsBefore && /* @__PURE__ */ (0,jsx_runtime.jsx)(Ornaments/* Number */.M, { state: constants/* STATES */.P.IS_ACTIVE, paddingTop: 3, children: nextSectionIndex + 1 })
      ] }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [
        children,
        cta && (cta.target ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
          LinkButton/* LinkButton */.Q,
          {
            as: react_router_dom/* NavLink */.OL,
            endIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(ArrowRight/* default */.Z, {}),
            onClick: onCtaClick,
            to: cta.target,
            children: formatMessage(cta.title)
          }
        ) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* Button */.z, { endIcon: /* @__PURE__ */ (0,jsx_runtime.jsx)(ArrowRight/* default */.Z, {}), onClick: onCtaClick, children: formatMessage(cta.title) }))
      ] })
    ] }),
    hasStepsBefore && hasSectionAfter && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingTop: 3, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.k, { marginRight: 8, justifyContent: "center", width: (0,dist/* pxToRem */.Q1)(30), children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Ornaments/* VerticalDivider */.p, { state: constants/* STATES */.P.IS_DONE, minHeight: (0,dist/* pxToRem */.Q1)(24) }) }) })
  ] });
};
const GuidedTourContent = ({ id, defaultMessage }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4, paddingBottom: 6, children: formatMessage(
    { id, defaultMessage },
    {
      documentationLink: DocumentationLink,
      b: Bold,
      p: Paragraph,
      light: Light,
      ul: List,
      li: ListItem
    }
  ) });
};
const DocumentationLink = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  Typography/* Typography */.Z,
  {
    as: "a",
    textColor: "primary600",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters",
    children
  }
);
const Bold = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { fontWeight: "semiBold", children });
const Paragraph = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { children });
const Light = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { textColor: "neutral600", children });
const List = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 6, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { children }) });
const LiStyled = styled_components_browser_esm/* default */.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({ theme }) => theme.colors.neutral800};
  }
`;
const ListItem = (children) => /* @__PURE__ */ (0,jsx_runtime.jsx)(LiStyled, { children });


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(26910);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/MainNav.mjs
var MainNav = __webpack_require__(32750);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavBrand.mjs
var NavBrand = __webpack_require__(75951);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSections.mjs
var NavSections = __webpack_require__(24109);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavLink.mjs
var NavLink = __webpack_require__(33706);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSection.mjs
var NavSection = __webpack_require__(82041);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavFooter.mjs
var NavFooter = __webpack_require__(69580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavUser.mjs
var NavUser = __webpack_require__(5275);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavCondense.mjs
var NavCondense = __webpack_require__(81067);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Write.mjs
var Write = __webpack_require__(69896);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Exit.mjs
var Exit = __webpack_require__(23619);
;// CONCATENATED MODULE: ./.cache/admin/src/components/LeftMenu.tsx










const LinkUserWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${150 / 16}rem;
  position: absolute;
  bottom: ${({ theme }) => theme.spaces[9]};
  left: ${({ theme }) => theme.spaces[5]};
`;
const LinkUser = (0,styled_components_browser_esm/* default */.ZP)((0,react_router_dom/* NavLink */.OL))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[4]}`};
  border-radius: ${({ theme }) => theme.spaces[1]};

  &:hover {
    background: ${({ theme, logout }) => logout ? theme.colors.danger100 : theme.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({ theme }) => theme.colors.danger600};
    }
  }
`;
const LeftMenu = ({ generalSectionLinks, pluginsSectionLinks }) => {
  const navUserRef = react.useRef(null);
  const [userLinksVisible, setUserLinksVisible] = react.useState(false);
  const {
    logos: { menu }
  } = (0,useConfiguration/* useConfiguration */.m)();
  const [condensed, setCondensed] = (0,dist/* usePersistentState */.Yw)("navbar-condensed", false);
  const { userDisplayName } = (0,dist/* useAppInfo */.L7)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const history = (0,react_router/* useHistory */.k6)();
  const { post } = (0,dist/* getFetchClient */.tg)();
  const initials = userDisplayName.split(" ").map((name) => name.substring(0, 1)).join("").substring(0, 2);
  const handleToggleUserLinks = () => setUserLinksVisible((prev) => !prev);
  const handleLogout = async () => {
    await post("/admin/logout");
    dist/* auth */.I8.clearAppStorage();
    handleToggleUserLinks();
    history.push("/auth/login");
  };
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && /**
     * TODO: can we replace this by just using the navUserRef?
     */
    e.relatedTarget?.parentElement?.id !== "main-nav-user-button") {
      setUserLinksVisible(false);
    }
  };
  const handleClickOnLink = (destination) => {
    trackUsage("willNavigate", { from: pathname, to: destination });
  };
  const menuTitle = formatMessage({
    id: "app.components.LeftMenu.navbrand.title",
    defaultMessage: "Strapi Dashboard"
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(MainNav/* MainNav */.$, { condensed, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      NavBrand/* NavBrand */.D,
      {
        as: react_router_dom/* NavLink */.OL,
        workplace: formatMessage({
          id: "app.components.LeftMenu.navbrand.workplace",
          defaultMessage: "Workplace"
        }),
        title: menuTitle,
        icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "img",
          {
            src: menu.custom || menu.default,
            alt: formatMessage({
              id: "app.components.LeftMenu.logo.alt",
              defaultMessage: "Application logo"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(Divider/* Divider */.i, {}),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(NavSections/* NavSections */._, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        NavLink/* NavLink */.O,
        {
          as: react_router_dom/* NavLink */.OL,
          to: "/content-manager",
          icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Write/* default */.Z, {}),
          onClick: () => handleClickOnLink("/content-manager"),
          children: formatMessage({ id: "global.content-manager", defaultMessage: "Content manager" })
        }
      ),
      pluginsSectionLinks.length > 0 ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
        NavSection/* NavSection */.y,
        {
          label: formatMessage({
            id: "app.components.LeftMenu.plugins",
            defaultMessage: "Plugins"
          }),
          children: pluginsSectionLinks.map((link) => {
            const Icon = link.icon;
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(
              NavLink/* NavLink */.O,
              {
                as: react_router_dom/* NavLink */.OL,
                to: link.to,
                icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon, {}),
                onClick: () => handleClickOnLink(link.to),
                children: formatMessage(link.intlLabel)
              },
              link.to
            );
          })
        }
      ) : null,
      generalSectionLinks.length > 0 ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
        NavSection/* NavSection */.y,
        {
          label: formatMessage({
            id: "app.components.LeftMenu.general",
            defaultMessage: "General"
          }),
          children: generalSectionLinks.map((link) => {
            const LinkIcon = link.icon;
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(
              NavLink/* NavLink */.O,
              {
                as: react_router_dom/* NavLink */.OL,
                badgeContent: link.notificationsCount && link.notificationsCount > 0 ? link.notificationsCount.toString() : void 0,
                to: link.to,
                icon: /* @__PURE__ */ (0,jsx_runtime.jsx)(LinkIcon, {}),
                onClick: () => handleClickOnLink(link.to),
                children: formatMessage(link.intlLabel)
              },
              link.to
            );
          })
        }
      ) : null
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(NavFooter/* NavFooter */.q, { children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        NavUser/* NavUser */.r,
        {
          id: "main-nav-user-button",
          ref: navUserRef,
          onClick: handleToggleUserLinks,
          initials,
          children: userDisplayName
        }
      ),
      userLinksVisible && /* @__PURE__ */ (0,jsx_runtime.jsx)(
        LinkUserWrapper,
        {
          onBlur: handleBlur,
          padding: 1,
          shadow: "tableShadow",
          background: "neutral0",
          hasRadius: true,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusTrap/* FocusTrap */.i, { onEscape: handleToggleUserLinks, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 0, children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(LinkUser, { tabIndex: 0, onClick: handleToggleUserLinks, to: "/me", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { children: formatMessage({
              id: "global.profile",
              defaultMessage: "Profile"
            }) }) }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(LinkUser, { tabIndex: 0, onClick: handleLogout, to: "/auth/login", children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { textColor: "danger600", children: formatMessage({
                id: "app.components.LeftMenu.logout",
                defaultMessage: "Logout"
              }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Exit/* default */.Z, {})
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(NavCondense/* NavCondense */.w, { onClick: () => setCondensed((s) => !s), children: condensed ? formatMessage({
        id: "app.components.LeftMenu.expand",
        defaultMessage: "Expand the navbar"
      }) : formatMessage({
        id: "app.components.LeftMenu.collapse",
        defaultMessage: "Collapse the navbar"
      }) })
    ] })
  ] });
};


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Puzzle.mjs
var Puzzle = __webpack_require__(91948);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ShoppingCart.mjs
var ShoppingCart = __webpack_require__(2428);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(40989);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu.ts






const useMenu = () => {
  const { allPermissions: userPermissions } = (0,dist/* useRBACProvider */.vn)();
  const { shouldUpdateStrapi } = (0,dist/* useAppInfo */.L7)();
  const { menu } = (0,dist/* useStrapiApp */.j1)();
  const permissions = (0,react_redux_es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const [menuWithUserPermissions, setMenuWithUserPermissions] = react.useState({
    generalSectionLinks: [
      {
        icon: Puzzle/* default */.Z,
        intlLabel: {
          id: "global.plugins",
          defaultMessage: "Plugins"
        },
        to: "/list-plugins",
        // @ts-expect-error - we need the permissions type from the plugin
        permissions: permissions.marketplace.main
      },
      {
        icon: ShoppingCart/* default */.Z,
        intlLabel: {
          id: "global.marketplace",
          defaultMessage: "Marketplace"
        },
        to: "/marketplace",
        // @ts-expect-error - we need the permissions type from the plugin
        permissions: permissions.marketplace.main
      },
      {
        icon: Cog/* default */.Z,
        intlLabel: {
          id: "global.settings",
          defaultMessage: "Settings"
        },
        to: "/settings",
        // Permissions of this link are retrieved in the init phase
        // using the settings menu
        permissions: [],
        notificationsCount: 0
      }
    ],
    pluginsSectionLinks: [],
    isLoading: true
  });
  const generalSectionLinksRef = react.useRef(menuWithUserPermissions.generalSectionLinks);
  react.useEffect(() => {
    async function applyMenuPermissions() {
      const authorizedPluginSectionLinks = await getPluginSectionLinks(userPermissions, menu);
      const authorizedGeneralSectionLinks = await getGeneralLinks(
        userPermissions,
        generalSectionLinksRef.current,
        shouldUpdateStrapi
      );
      setMenuWithUserPermissions((state) => ({
        ...state,
        generalSectionLinks: authorizedGeneralSectionLinks,
        pluginsSectionLinks: authorizedPluginSectionLinks,
        isLoading: false
      }));
    }
    applyMenuPermissions();
  }, [
    setMenuWithUserPermissions,
    generalSectionLinksRef,
    userPermissions,
    menu,
    permissions,
    shouldUpdateStrapi
  ]);
  return menuWithUserPermissions;
};
const getGeneralLinks = async (userPermissions, generalSectionRawLinks, shouldUpdateStrapi = false) => {
  const generalSectionLinksPermissions = await Promise.all(
    generalSectionRawLinks.map(({ permissions }) => (0,dist/* hasPermissions */.qX)(userPermissions, permissions))
  );
  const authorizedGeneralSectionLinks = generalSectionRawLinks.filter(
    (_, index) => generalSectionLinksPermissions[index]
  );
  const settingsLinkIndex = authorizedGeneralSectionLinks.findIndex(
    (obj) => obj.to === "/settings"
  );
  if (settingsLinkIndex === -1) {
    return [];
  }
  const authorizedGeneralLinksClone = cloneDeep_default()(authorizedGeneralSectionLinks);
  authorizedGeneralLinksClone[settingsLinkIndex].notificationsCount = shouldUpdateStrapi ? 1 : 0;
  return authorizedGeneralLinksClone;
};
const getPluginSectionLinks = async (userPermissions, pluginsSectionRawLinks) => {
  const pluginSectionLinksPermissions = await Promise.all(
    pluginsSectionRawLinks.map(({ permissions }) => (0,dist/* hasPermissions */.qX)(userPermissions, permissions))
  );
  const authorizedPluginSectionLinks = pluginsSectionRawLinks.filter(
    (_, index) => pluginSectionLinksPermissions[index]
  );
  return authorizedPluginSectionLinks;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/SkipToContent.mjs
var SkipToContent = __webpack_require__(47754);
;// CONCATENATED MODULE: ./.cache/admin/src/layouts/AppLayout.tsx




const FlexBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  flex: 1;
`;
const AppLayout = ({ children, sideNav }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.x, { background: "neutral100", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(SkipToContent/* SkipToContent */.z, { children: formatMessage({ id: "skipToContent", defaultMessage: "Skip to content" }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { alignItems: "flex-start", children: [
      sideNav,
      /* @__PURE__ */ (0,jsx_runtime.jsx)(FlexBox, { children })
    ] })
  ] });
};

// EXTERNAL MODULE: ./.cache/admin/src/utils/createRoute.tsx
var createRoute = __webpack_require__(53752);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/constants.js
var App_constants = __webpack_require__(63128);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(85200);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.mjs
var Popover = __webpack_require__(59604);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(22304);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Message.mjs
var Message = __webpack_require__(68733);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Question.mjs
var Question = __webpack_require__(50841);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.mjs
var Play = __webpack_require__(28102);
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/onboarding-preview.png
const onboarding_preview_namespaceObject = __webpack_require__.p + "19eb2dfcf2603eb55733.png";
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Book.mjs
var Book = __webpack_require__(86229);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PaperPlane.mjs
var PaperPlane = __webpack_require__(21421);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/Onboarding/constants.js

const VIDEO_LINKS = [
  {
    label: {
      id: "app.components.Onboarding.link.build-content",
      defaultMessage: "Build a content architecture"
    },
    href: "https://www.youtube.com/watch?v=G9GjN0RxhkE",
    duration: "5:48"
  },
  {
    label: {
      id: "app.components.Onboarding.link.manage-content",
      defaultMessage: "Add & manage content"
    },
    href: "https://www.youtube.com/watch?v=DEZw4KbybAI",
    duration: "3:18"
  },
  {
    label: { id: "app.components.Onboarding.link.manage-media", defaultMessage: "Manage media" },
    href: "https://www.youtube.com/watch?v=-61MuiMQb38",
    duration: "3:41"
  }
];
const WATCH_MORE = {
  href: "https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",
  label: {
    id: "app.components.Onboarding.link.more-videos",
    defaultMessage: "Watch more videos"
  }
};
const DOCUMENTATION_LINKS = [
  {
    label: { id: "global.documentation", defaultMessage: "documentation" },
    href: "https://docs.strapi.io",
    icon: Book/* default */.Z
  },
  {
    label: { id: "app.static.links.cheatsheet", defaultMessage: "cheatsheet" },
    href: "https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",
    icon: PaperPlane/* default */.Z
  }
];

;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/Onboarding/index.js








const HelperButton = (0,styled_components_browser_esm/* default */.ZP)((0,Button/* Button */.z))`
  border-radius: 50%;
  padding: ${({ theme }) => theme.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`;
const IconWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  transform: translate(-50%, -50%);
`;
const VideoLinkWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({ theme }) => `-${theme.spaces[1]}`};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary100};

    /* Hover style for the number displayed */
    ${Typography/* Typography */.Z}:first-child {
      color: ${({ theme }) => theme.colors.primary500};
    }

    /* Hover style for the label */
    ${Typography/* Typography */.Z}:nth-child(1) {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const Preview = styled_components_browser_esm/* default */.ZP.img`
  width: ${({ theme }) => theme.spaces[10]};
  height: ${({ theme }) => theme.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const TypographyLineHeight = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`;
const TextLink = (0,styled_components_browser_esm/* default */.ZP)(TypographyLineHeight)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
const Onboarding = () => {
  const triggerRef = (0,react.useRef)();
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { communityEdition } = (0,dist/* useAppInfo */.L7)();
  const handlePopoverVisibility = () => {
    setIsOpen((prev) => !prev);
  };
  const docLinks = [
    ...DOCUMENTATION_LINKS,
    {
      label: { id: "Settings.application.get-help", defaultMessage: "Get help" },
      icon: Message/* default */.Z,
      href: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home"
    }
  ];
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { as: "aside", position: "fixed", bottom: 2, right: 2 }, /* @__PURE__ */ react.createElement(
    HelperButton,
    {
      "aria-label": formatMessage(
        isOpen ? {
          id: "app.components.Onboarding.help.button-close",
          defaultMessage: "Close help menu"
        } : {
          id: "app.components.Onboarding.help.button",
          defaultMessage: "Open help menu"
        }
      ),
      onClick: handlePopoverVisibility,
      ref: triggerRef
    },
    /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: isOpen ? Cross/* default */.Z : Question/* default */.Z, color: "buttonNeutral0" })
  ), isOpen && /* @__PURE__ */ react.createElement(Portal/* Portal */.h, null, /* @__PURE__ */ react.createElement(
    Popover/* Content */.VY,
    {
      padding: 0,
      onDimiss: handlePopoverVisibility,
      source: triggerRef,
      placement: "top-end",
      spacing: 12
    },
    /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        justifyContent: "space-between",
        paddingBottom: 5,
        paddingRight: 6,
        paddingLeft: 6,
        paddingTop: 6
      },
      /* @__PURE__ */ react.createElement(TypographyLineHeight, { fontWeight: "bold" }, formatMessage({
        id: "app.components.Onboarding.title",
        defaultMessage: "Get started videos"
      })),
      /* @__PURE__ */ react.createElement(
        TextLink,
        {
          as: "a",
          href: WATCH_MORE.href,
          target: "_blank",
          rel: "noreferrer noopener",
          variant: "pi",
          textColor: "primary600"
        },
        formatMessage(WATCH_MORE.label)
      )
    ),
    /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
    VIDEO_LINKS.map(({ href, duration, label }, index) => /* @__PURE__ */ react.createElement(
      VideoLinkWrapper,
      {
        as: "a",
        href,
        target: "_blank",
        rel: "noreferrer noopener",
        key: href,
        hasRadius: true,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 11
      },
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral200", variant: "alpha" }, index + 1)),
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "relative" }, /* @__PURE__ */ react.createElement(Preview, { src: onboarding_preview_namespaceObject, alt: "" }), /* @__PURE__ */ react.createElement(
        IconWrapper,
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          background: "primary600",
          borderRadius: "50%",
          justifyContent: "center",
          width: 6,
          height: 6
        },
        /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: Play/* default */.Z, color: "buttonNeutral0", width: 3, height: 3 })
      )),
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", paddingLeft: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage(label)), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, ":"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600", variant: "pi" }, duration))
    )),
    /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        direction: "column",
        alignItems: "stretch",
        gap: 2,
        paddingLeft: 5,
        paddingTop: 2,
        paddingBottom: 5
      },
      docLinks.map(({ label, href, icon }) => /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3, key: href }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: icon, color: "primary600" }), /* @__PURE__ */ react.createElement(
        TextLink,
        {
          as: "a",
          href,
          target: "_blank",
          rel: "noreferrer noopener",
          variant: "sigma",
          textColor: "primary700"
        },
        formatMessage(label)
      )))
    )
  )));
};
/* harmony default export */ const Admin_Onboarding = (Onboarding);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/index.js














const CM = (0,react.lazy)(
  () => Promise.all(/* import() | content-manager */[__webpack_require__.e(9743), __webpack_require__.e(416), __webpack_require__.e(2143), __webpack_require__.e(7649), __webpack_require__.e(994)]).then(__webpack_require__.bind(__webpack_require__, 89274))
);
const HomePage = (0,react.lazy)(() => __webpack_require__.e(/* import() | Admin_homePage */ 3981).then(__webpack_require__.bind(__webpack_require__, 67301)));
const InstalledPluginsPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_pluginsPage */ 3677).then(__webpack_require__.bind(__webpack_require__, 4186))
);
const MarketplacePage = (0,react.lazy)(
  () => Promise.all(/* import() | Admin_marketplace */[__webpack_require__.e(4190), __webpack_require__.e(5516)]).then(__webpack_require__.bind(__webpack_require__, 9117))
);
const NotFoundPage = (0,react.lazy)(
  () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 85968)).then(
    ({ NotFoundPage: NotFoundPage2 }) => ({ default: NotFoundPage2 })
  )
);
const InternalErrorPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_InternalErrorPage */ 9501).then(__webpack_require__.bind(__webpack_require__, 4009)).then(
    ({ InternalErrorPage: InternalErrorPage2 }) => ({
      default: InternalErrorPage2
    })
  )
);
const ProfilePage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_profilePage */ 9497).then(__webpack_require__.bind(__webpack_require__, 3549))
);
const SettingsPage = (0,react.lazy)(
  () => Promise.all(/* import() | Admin_settingsPage */[__webpack_require__.e(9743), __webpack_require__.e(5895)]).then(__webpack_require__.bind(__webpack_require__, 39223)).then((module) => ({
    default: module.SettingsPage
  }))
);
const useTrackUsage = () => {
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const dispatch = (0,react_redux_es/* useDispatch */.I0)();
  const appStatus = (0,react_redux_es/* useSelector */.v9)((state) => state.admin_app.status);
  (0,react.useEffect)(() => {
    if (appStatus === "init") {
      trackUsage("didAccessAuthenticatedAdministration");
      dispatch({ type: App_constants/* SET_APP_RUNTIME_STATUS */.eb });
    }
  }, [appStatus]);
};
const Admin = () => {
  useTrackUsage();
  const { isLoading, generalSectionLinks, pluginsSectionLinks } = useMenu();
  const { menu } = (0,dist/* useStrapiApp */.j1)();
  const { showTutorials } = (0,useConfiguration/* useConfiguration */.m)();
  const routes = (0,react.useMemo)(() => {
    return menu.filter((link) => link.Component).map(({ to, Component, exact }) => (0,createRoute/* createRoute */.o)(Component, to, exact));
  }, [menu]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(cjs.DndProvider, { backend: dist_cjs/* HTML5Backend */.PD }, /* @__PURE__ */ react.createElement(
    AppLayout,
    {
      sideNav: /* @__PURE__ */ react.createElement(
        LeftMenu,
        {
          generalSectionLinks,
          pluginsSectionLinks
        }
      )
    },
    /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null) }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/", component: HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/me", component: ProfilePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/content-manager", component: CM }), routes, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/settings/:settingId", component: SettingsPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/settings", component: SettingsPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/marketplace" }, /* @__PURE__ */ react.createElement(MarketplacePage, null)), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/list-plugins", exact: true }, /* @__PURE__ */ react.createElement(InstalledPluginsPage, null)), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/404", component: NotFoundPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/500", component: InternalErrorPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "", component: NotFoundPage }))),
    /* @__PURE__ */ react.createElement(GuidedTourModal, null),
    showTutorials && /* @__PURE__ */ react.createElement(Admin_Onboarding, null)
  ));
};
/* harmony default export */ const pages_Admin = (Admin);


;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer.tsx






const PluginsInitializer = () => {
  const { plugins: appPlugins } = (0,dist/* useStrapiApp */.j1)();
  const [{ plugins }, dispatch] = react.useReducer(
    reducer,
    initialState,
    () => init(appPlugins)
  );
  const setPlugin = react.useRef((pluginId) => {
    dispatch({ type: "SET_PLUGIN_READY", pluginId });
  });
  const hasApluginNotReady = Object.keys(plugins).some(
    (plugin) => plugins[plugin].isReady === false
  );
  if (hasApluginNotReady) {
    const initializers = Object.keys(plugins).reduce((acc, current) => {
      const InitializerComponent = plugins[current].initializer;
      if (InitializerComponent) {
        const key = plugins[current].pluginId;
        acc.push(/* @__PURE__ */ (0,jsx_runtime.jsx)(InitializerComponent, { setPlugin: setPlugin.current }, key));
      }
      return acc;
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      initializers,
      /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.dO, {})
    ] });
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(pages_Admin, {});
};
const initialState = {
  plugins: {}
};
const reducer = (state = initialState, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "SET_PLUGIN_READY": {
      set_default()(draftState, ["plugins", action.pluginId, "isReady"], true);
      break;
    }
    default:
      return draftState;
  }
});
const init = (plugins) => {
  return {
    plugins: Object.keys(plugins).reduce((acc, current) => {
      acc[current] = { ...plugins[current] };
      return acc;
    }, {})
  };
};


// EXTERNAL MODULE: ./.cache/admin/src/components/RBACProvider.tsx
var RBACProvider = __webpack_require__(39366);
;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp.tsx













const strapiVersion = package_namespaceObject.i8;
const AuthenticatedApp = () => {
  const { setGuidedTourVisibility } = (0,dist/* useGuidedTour */.c1)();
  const userInfo = dist/* auth */.I8.get("userInfo");
  const [userDisplayName, setUserDisplayName] = react.useState(
    () => userInfo ? userInfo.username || (0,getFullName/* getFullName */.P)(userInfo.firstname ?? "", userInfo.lastname) : ""
  );
  const [userId, setUserId] = react.useState();
  const { showReleaseNotification } = (0,useConfiguration/* useConfiguration */.m)();
  const { get } = (0,dist/* useFetchClient */.kY)();
  const [
    { data: appInfos, status },
    { data: tagName, isLoading },
    { data: permissions, status: fetchPermissionsStatus, refetch, isFetching },
    { data: userRoles }
  ] = (0,es.useQueries)([
    {
      queryKey: "app-infos",
      async queryFn() {
        const { data } = await get("/admin/information");
        return data.data;
      }
    },
    {
      queryKey: "strapi-release",
      async queryFn() {
        try {
          const res = await fetch("https://api.github.com/repos/strapi/strapi/releases/latest");
          if (!res.ok) {
            throw new Error();
          }
          const response = await res.json();
          if (!response.tag_name) {
            throw new Error();
          }
          return response.tag_name;
        } catch (err) {
          return strapiVersion;
        }
      },
      enabled: showReleaseNotification,
      initialData: strapiVersion
    },
    {
      queryKey: "admin-users-permission",
      async queryFn() {
        const { data } = await get("/admin/users/me/permissions");
        return data.data;
      },
      initialData: []
    },
    {
      queryKey: "user-roles",
      async queryFn() {
        const {
          data: {
            data: { roles }
          }
        } = await get("/admin/users/me");
        return roles;
      }
    }
  ]);
  const shouldUpdateStrapi = checkLatestStrapiVersion(strapiVersion, tagName);
  react.useEffect(() => {
    if (userRoles) {
      const isUserSuperAdmin = userRoles.find(({ code }) => code === "strapi-super-admin");
      if (isUserSuperAdmin && appInfos?.autoReload) {
        setGuidedTourVisibility(true);
      }
    }
  }, [userRoles, appInfos, setGuidedTourVisibility]);
  react.useEffect(() => {
    const getUserId = async () => {
      if (userInfo) {
        const userId2 = await hashAdminUserEmail(userInfo);
        if (userId2) {
          setUserId(userId2);
        }
      }
    };
    getUserId();
  }, [userInfo]);
  const shouldShowNotDependentQueriesLoader = isFetching || status === "loading" || fetchPermissionsStatus === "loading";
  const shouldShowLoader = isLoading || shouldShowNotDependentQueriesLoader;
  if (shouldShowLoader) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* LoadingIndicatorPage */.dO, {});
  }
  if (status === "error") {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { children: "error..." });
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    dist/* AppInfoProvider */.iq,
    {
      ...appInfos,
      userId,
      latestStrapiReleaseTag: tagName,
      setUserDisplayName,
      shouldUpdateStrapi,
      userDisplayName,
      children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(RBACProvider/* RBACProvider */.rU, { permissions: permissions ?? [], refetchPermissions: refetch, children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(NpsSurvey/* NpsSurvey */.b, {}),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(PluginsInitializer, {})
      ] })
    }
  );
};
const checkLatestStrapiVersion = (currentPackageVersion, latestPublishedVersion = "") => {
  if (!valid_default()(currentPackageVersion) || !valid_default()(latestPublishedVersion)) {
    return false;
  }
  return lt_default()(currentPackageVersion, latestPublishedVersion);
};



/***/ }),

/***/ 29261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ Number),
/* harmony export */   p: () => (/* binding */ VerticalDivider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96987);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10574);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16607);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3911);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58704);





const Number = ({ children, state, ...props }) => {
  return state === _constants__WEBPACK_IMPORTED_MODULE_2__/* .STATES */ .P.IS_DONE || state === _constants__WEBPACK_IMPORTED_MODULE_2__/* .STATES */ .P.IS_ACTIVE ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k,
    {
      background: "primary600",
      padding: 2,
      borderRadius: "50%",
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
      height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
      justifyContent: "center",
      ...props,
      children: state === _constants__WEBPACK_IMPORTED_MODULE_2__/* .STATES */ .P.IS_DONE ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, { "aria-hidden": true, width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(16), color: "neutral0" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { fontWeight: "semiBold", textColor: "neutral0", children })
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k,
    {
      borderColor: "neutral500",
      borderWidth: "1px",
      borderStyle: "solid",
      padding: 2,
      borderRadius: "50%",
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
      height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(30),
      justifyContent: "center",
      ...props,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { fontWeight: "semiBold", textColor: "neutral600", children })
    }
  );
};
const VerticalDivider = ({ state, ...props }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .x,
  {
    width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(2),
    height: "100%",
    background: state === _constants__WEBPACK_IMPORTED_MODULE_2__/* .STATES */ .P.IS_NOT_DONE ? "neutral300" : "primary500",
    hasRadius: true,
    minHeight: state === _constants__WEBPACK_IMPORTED_MODULE_2__/* .STATES */ .P.IS_ACTIVE ? (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(85) : (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(65),
    ...props
  }
);



/***/ }),

/***/ 58704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ STATES),
/* harmony export */   o: () => (/* binding */ LAYOUT_DATA)
/* harmony export */ });
const LAYOUT_DATA = {
  contentTypeBuilder: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CTB.title",
        defaultMessage: "\u{1F9E0} Build the content structure"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.CTB.cta.title",
          defaultMessage: "Go to the Content type Builder"
        },
        type: "REDIRECT",
        target: "/plugins/content-type-builder"
      },
      trackingEvent: "didClickGuidedTourHomepageContentTypeBuilder"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CTB.create.title",
        defaultMessage: "\u{1F9E0} Create a first Collection type"
      },
      content: {
        id: "app.components.GuidedTour.CTB.create.content",
        defaultMessage: "<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CTB.create.cta.title",
          defaultMessage: "Build a Collection type"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep1CollectionType"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CTB.success.title",
        defaultMessage: "Step 1: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CTB.success.content",
        defaultMessage: "<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didCreateGuidedTourCollectionType"
    }
  },
  contentManager: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CM.title",
        defaultMessage: "\u26A1\uFE0F What would you like to share with the world?"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didClickGuidedTourHomepageContentManager"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CM.create.title",
        defaultMessage: "\u26A1\uFE0F Create content"
      },
      content: {
        id: "app.components.GuidedTour.CM.create.content",
        defaultMessage: "<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep2ContentManager"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CM.success.title",
        defaultMessage: "Step 2: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CM.success.content",
        defaultMessage: "<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CM.success.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didCreateGuidedTourEntry"
    }
  },
  apiTokens: {
    home: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.apiTokens.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didClickGuidedTourHomepageApiTokens"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.create.content",
        defaultMessage: "<p>Generate an authentication token here and retrieve the content you just created.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.apiTokens.create.cta.title",
          defaultMessage: "Generate an API Token"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep3ApiTokens"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.apiTokens.success.title",
        defaultMessage: "Step 3: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.success.content",
        defaultMessage: "<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"
      },
      trackingEvent: "didGenerateGuidedTourApiTokens"
    }
  }
};
const STATES = {
  IS_DONE: "IS_DONE",
  IS_ACTIVE: "IS_ACTIVE",
  IS_NOT_DONE: "IS_NOT_DONE"
};



/***/ }),

/***/ 13657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ getFullName)
/* harmony export */ });
function getFullName(firstname, lastname = "") {
  return [firstname, lastname].filter((str) => str).join(" ");
}


/***/ }),

/***/ 36364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ selectAdminPermissions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20573);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8539);


const selectAppDomain = () => (state) => {
  return state.admin_app || _reducer__WEBPACK_IMPORTED_MODULE_0__/* .initialState */ .E;
};
const selectAdminPermissions = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__/* .createSelector */ .P1)(
  selectAppDomain(),
  (state) => state.permissions
);


/***/ })

}]);