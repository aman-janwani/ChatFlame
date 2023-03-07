"use strict";
exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 6801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Portal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



const PortalPopup = ({ children , overlayColor , placement ="Centered" , onOutsideClick , zIndex =100 , left =0 , right =0 , top =0 , bottom =0 , relativeLayerRef ,  })=>{
    const relContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: relativeStyle , 1: setRelativeStyle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const popupStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const style = {};
        style.zIndex = zIndex;
        if (overlayColor) {
            style.backgroundColor = overlayColor;
        }
        if (!relativeLayerRef?.current) {
            switch(placement){
                case "Centered":
                    style.alignItems = "center";
                    style.justifyContent = "center";
                    break;
                case "Top left":
                    style.alignItems = "flex-start";
                    break;
                case "Top center":
                    style.alignItems = "center";
                    break;
                case "Top right":
                    style.alignItems = "flex-end";
                    break;
                case "Bottom left":
                    style.alignItems = "flex-start";
                    style.justifyContent = "flex-end";
                    break;
                case "Bottom center":
                    style.alignItems = "center";
                    style.justifyContent = "flex-end";
                    break;
                case "Bottom right":
                    style.alignItems = "flex-end";
                    style.justifyContent = "flex-end";
                    break;
            }
        }
        return style;
    }, [
        placement,
        overlayColor,
        zIndex,
        relativeLayerRef?.current
    ]);
    const setPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const relativeItem = relativeLayerRef?.current?.getBoundingClientRect();
        const containerItem = relContainerRef?.current?.getBoundingClientRect();
        const style = {};
        if (relativeItem && containerItem) {
            const { x: relativeX , y: relativeY , width: relativeW , height: relativeH ,  } = relativeItem;
            const { width: containerW , height: containerH  } = containerItem;
            style.position = "absolute";
            switch(placement){
                case "Top left":
                    style.top = relativeY - containerH - top;
                    style.left = relativeX + left;
                    break;
                case "Top right":
                    style.top = relativeY - containerH - top;
                    style.left = relativeX + relativeW - containerW - right;
                    break;
                case "Bottom left":
                    style.top = relativeY + relativeH + bottom;
                    style.left = relativeX + left;
                    break;
                case "Bottom right":
                    style.top = relativeY + relativeH + bottom;
                    style.left = relativeX + relativeW - containerW - right;
                    break;
            }
            setRelativeStyle(style);
        } else {
            style.maxWidth = "90%";
            style.maxHeight = "90%";
            setRelativeStyle(style);
        }
    }, [
        left,
        right,
        top,
        bottom,
        placement,
        relativeLayerRef?.current,
        relContainerRef?.current, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPosition();
        window.addEventListener("resize", setPosition);
        window.addEventListener("scroll", setPosition, true);
        return ()=>{
            window.removeEventListener("resize", setPosition);
            window.removeEventListener("scroll", setPosition, true);
        };
    }, [
        setPosition
    ]);
    const onOverlayClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (onOutsideClick && e.target.classList.contains("portalPopupOverlay")) {
            onOutsideClick();
        }
        e.stopPropagation();
    }, [
        onOutsideClick
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Portal, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col fixed inset-0 portalPopupOverlay",
            style: popupStyle,
            onClick: onOverlayClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: relContainerRef,
                style: relativeStyle,
                children: children
            })
        })
    });
};
const Portal = ({ children , containerId ="portals"  })=>{
    if (false) {} else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortalPopup);


/***/ }),

/***/ 4661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2356);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_4__]);
_firebase__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SideBar = ({ frame24Height , frame24AlignSelf , untitledDesign65AdobeExpr , // onAmanJanwaniARelaxingPicturIconClick,
amanJanwaniARelaxingPictuCursor ,  })=>{
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const onProfileClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        router.push("/profile");
    }, [
        router
    ]);
    const onChatClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        router.push("/");
    }, [
        router
    ]);
    const onLogoClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        router.push("/");
    }, [
        router
    ]);
    const frameDivStyle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return {
            height: frame24Height,
            alignSelf: frame24AlignSelf
        };
    }, [
        frame24Height,
        frame24AlignSelf
    ]);
    const amanJanwaniARelaxingPicturIconStyle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return {
            cursor: amanJanwaniARelaxingPictuCursor
        };
    }, [
        amanJanwaniARelaxingPictuCursor
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "hidden md:flex bg-darkolivegreen w-[6.25rem] max-h-min min-h-screen shrink-0 flex-col p-[0.63rem] box-border items-center justify-between",
        style: frameDivStyle,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 50,
                height: 50,
                className: "relative w-[3.13rem] h-[3.31rem] shrink-0 cursor-pointer ",
                alt: "",
                loading: "lazy",
                src: "/untitled-design-65-adobe-express-11.svg",
                onClick: onLogoClick
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 24,
                height: 24,
                className: "relative w-[1.5rem] h-[1.5rem] shrink-0 cursor-pointer ",
                alt: "",
                loading: "lazy",
                src: "/frame.svg",
                onClick: onChatClick
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 50,
                height: 50,
                className: "relative rounded-small w-[3.13rem] h-[3.13rem] shrink-0 object-cover cursor-pointer",
                alt: "",
                loading: "lazy",
                src: user?.photoURL,
                onClick: onProfileClick
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;