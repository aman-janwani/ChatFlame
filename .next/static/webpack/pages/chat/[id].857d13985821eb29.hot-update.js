"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/[id]",{

/***/ "./pages/chat/[id].js":
/*!****************************!*\
  !*** ./pages/chat/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_side_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/side-bar */ \"./components/side-bar.js\");\n/* harmony import */ var _components_ListBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ListBar */ \"./components/ListBar.js\");\n/* harmony import */ var _components_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/messages */ \"./components/messages.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Desktop1 = function(param) {\n    var messages = param.messages, chat = param.chat;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_7__.auth), 1), user = ref[0];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // console.log(\"messages\", messages);\n    console.log(\"chats\", chats);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[110rem] mx-auto bg-white w-full max-h-screen flex flex-row items-start justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"ChatFlame\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\pages\\\\chat\\\\[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\pages\\\\chat\\\\[id].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_side_bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\pages\\\\chat\\\\[id].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\pages\\\\chat\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_messages__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                chat: chat,\n                messages: messages\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\pages\\\\chat\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Locofy\\\\pages\\\\chat\\\\[id].js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Desktop1, \"6uRZatNSC05sdTjWDqIJ+SG4y18=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Desktop1;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Desktop1);\nvar _c;\n$RefreshReg$(_c, \"Desktop1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQStDO0FBQ1A7QUFDUTtBQUNEO0FBQ0U7QUFDUTtBQUNmO0FBU2Q7QUFFQztBQUU3QixJQUFNWSxRQUFRLEdBQUcsZ0JBQXdCO1FBQXJCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsSUFBSSxTQUFKQSxJQUFJOztJQUNoQyxJQUFlUixHQUFrQixxRkFBbEJBLHVFQUFZLENBQUNDLDJDQUFJLENBQUMsTUFBMUJRLElBQUksR0FBSVQsR0FBa0IsR0FBdEI7SUFFWCxJQUFNVSxNQUFNLEdBQUdkLHNEQUFTLEVBQUU7SUFDMUIscUNBQXFDO0lBQ3JDZSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4RkFBZ0c7OzBCQUM3Ryw4REFBQ1Ysa0RBQUk7MEJBQ0gsNEVBQUNXLE9BQUs7OEJBQUMsV0FBUzs7Ozs7eUJBQVE7Ozs7O3FCQUNuQjswQkFDUCw4REFBQ25CLDREQUFPOzs7O3FCQUFHOzBCQUNYLDhEQUFDQywyREFBTzs7OztxQkFBRzswQkFDWCw4REFBQ0MsNERBQVE7Z0JBQUNTLElBQUksRUFBRUEsSUFBSTtnQkFBRUQsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSTs7Ozs7O2FBQ3hDLENBQ047QUFDSixDQUFDO0dBaEJLRCxRQUFROztRQUNHTixtRUFBWTtRQUVaSixrREFBUzs7O0FBSHBCVSxLQUFBQSxRQUFROztBQWtCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQvW2lkXS5qcz9kODg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpZGUtYmFyXCI7XHJcbmltcG9ydCBMaXN0QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xpc3RCYXJcIjtcclxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lc3NhZ2VzXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgZG9jLFxyXG4gIHNldERvYyxcclxuICBzZXJ2ZXJUaW1lc3RhbXAsXHJcbiAgZ2V0RG9jcyxcclxuICBnZXREb2MsXHJcbiAgb3JkZXJCeSxcclxuICBjb2xsZWN0aW9uLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0VGltZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBEZXNrdG9wMSA9ICh7IG1lc3NhZ2VzLCBjaGF0IH0pID0+IHtcclxuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwibWVzc2FnZXNcIiwgbWVzc2FnZXMpO1xyXG4gIGNvbnNvbGUubG9nKFwiY2hhdHNcIiwgY2hhdHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMTByZW1dIG14LWF1dG8gYmctd2hpdGUgdy1mdWxsIG1heC1oLXNjcmVlbiAgIGZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNoYXRGbGFtZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgPExpc3RCYXIgLz5cclxuICAgICAgPE1lc3NhZ2VzIGNoYXQ9e2NoYXR9IG1lc3NhZ2VzPXttZXNzYWdlc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wMTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIGZldGNoIHRoZSBtZXNzYWdlcyBvbiB0aGUgc2VydmVyIHdpdGggdGhlIGlkXHJcbiAgY29uc3QgcmVmID0gZG9jKGRiLCBcImNoYXRzXCIsIGNvbnRleHQucXVlcnkuaWQpO1xyXG4gIGNvbnN0IG1lc3NhZ2VzUmVzID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKHJlZiwgXCJtZXNzYWdlc1wiKSk7XHJcbiAgY29uc3QgbWVzc2FnZXMgPSBtZXNzYWdlc1Jlcy5kb2NzXHJcbiAgICAubWFwKChkb2MpID0+ICh7XHJcbiAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSlcclxuICAgIC5tYXAoKG1lc3NhZ2VzKSA9PiAoe1xyXG4gICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgdGltZXN0YW1wOiBnZXRUaW1lKG1lc3NhZ2VzLnRpbWVzdGFtcC50b0RhdGUoKSksXHJcbiAgICB9KSk7XHJcblxyXG4gIGNvbnN0IGNoYXRSZXMgPSBhd2FpdCBnZXREb2MocmVmKTtcclxuICBjb25zdCBjaGF0ID0ge1xyXG4gICAgaWQ6IGNoYXRSZXMuaWQsXHJcbiAgICAuLi5jaGF0UmVzLmRhdGEoKSxcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VzXCIsIG1lc3NhZ2VzKTtcclxuICBjb25zb2xlLmxvZyhcImNoYXRcIiwgY2hhdCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZXNzYWdlczogSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpLFxyXG4gICAgICBjaGF0OiBjaGF0LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlNpZGVCYXIiLCJMaXN0QmFyIiwiTWVzc2FnZXMiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwic2V0RG9jIiwic2VydmVyVGltZXN0YW1wIiwib3JkZXJCeSIsIkhlYWQiLCJEZXNrdG9wMSIsIm1lc3NhZ2VzIiwiY2hhdCIsInVzZXIiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiY2hhdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat/[id].js\n"));

/***/ })

});