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

/***/ "./components/messages.js":
/*!********************************!*\
  !*** ./components/messages.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_received_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/received-message */ \"./components/received-message.js\");\n/* harmony import */ var _components_sent_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sent-message */ \"./components/sent-message.js\");\n/* harmony import */ var _components_input_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input-message */ \"./components/input-message.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Messages = function(param) {\n    var chat = param.chat, messages = param.messages;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth), 1), user = ref[0];\n    // console.log(chat.users);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-stretch flex-1 bg-beige overflow-y-scroll flex flex-col items-start justify-start text-left text-[1rem] text-black font-rubik\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                chatUsers: chat === null || chat === void 0 ? void 0 : chat.users\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex-1 overflow-y-scroll flex flex-col px-[0.94rem] pb-[0.94rem] items-start justify-start text-[0.75rem] text-gray-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"self-stretch flex-1 overflow-y-scroll flex flex-col items-start justify-start gap-[0.63rem]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_received_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_received_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sent_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sent_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_received_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sent_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_received_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sent_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Locofy\\\\components\\\\messages.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Messages, \"hP/7NvzUIXfxIpRVjMlmHSnysKo=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState\n    ];\n});\n_c = Messages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);\nvar _c;\n$RefreshReg$(_c, \"Messages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lc3NhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUEwQztBQUNtQjtBQUNSO0FBQ0U7QUFDRTtBQUNsQjtBQUV2QyxJQUFNTyxRQUFRLEdBQUcsZ0JBQXdCO1FBQXJCQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsUUFBUSxTQUFSQSxRQUFROztJQUNoQyxJQUFlTCxHQUFrQixvRkFBbEJBLHVFQUFZLENBQUNDLDJDQUFJLENBQUMsTUFBMUJLLElBQUksR0FBSU4sR0FBa0IsR0FBdEI7SUFFWCwyQkFBMkI7SUFFM0IscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9JQUFvSTs7MEJBQ2pKLDhEQUFDWiwwREFBTTtnQkFBQ2EsU0FBUyxFQUFFTCxJQUFJLGFBQUpBLElBQUksV0FBTyxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLElBQUksQ0FBRU0sS0FBSzs7Ozs7cUJBQUk7MEJBQ2xDLDhEQUFDSCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0lBQXNJOztrQ0FDbkosOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw2RkFBNkY7OzBDQUMxRyw4REFBQ1gsb0VBQWU7Ozs7cUNBQUc7MENBQ25CLDhEQUFDQSxvRUFBZTs7OztxQ0FBRzswQ0FDbkIsOERBQUNDLGdFQUFXOzs7O3FDQUFHOzBDQUNmLDhEQUFDQSxnRUFBVzs7OztxQ0FBRzswQ0FDZiw4REFBQ0Qsb0VBQWU7Ozs7cUNBQUc7MENBQ25CLDhEQUFDQyxnRUFBVzs7OztxQ0FBRzswQ0FDZiw4REFBQ0Qsb0VBQWU7Ozs7cUNBQUc7MENBQ25CLDhEQUFDQyxnRUFBVzs7OztxQ0FBRzs7Ozs7OzZCQUNYO2tDQUNOLDhEQUFDQyxpRUFBWTs7Ozs2QkFBRzs7Ozs7O3FCQUNaOzs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQXZCS0ksUUFBUTs7UUFDR0gsbUVBQVk7OztBQUR2QkcsS0FBQUEsUUFBUTtBQXlCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVzc2FnZXMuanM/ZTg1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IFJlY2VpdmVkTWVzc2FnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9yZWNlaXZlZC1tZXNzYWdlXCI7XG5pbXBvcnQgU2VudE1lc3NhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VudC1tZXNzYWdlXCI7XG5pbXBvcnQgSW5wdXRNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0LW1lc3NhZ2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuXG5jb25zdCBNZXNzYWdlcyA9ICh7IGNoYXQsIG1lc3NhZ2VzIH0pID0+IHtcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGNoYXQudXNlcnMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLXN0cmV0Y2ggZmxleC0xIGJnLWJlaWdlIG92ZXJmbG93LXktc2Nyb2xsIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCB0ZXh0LWxlZnQgdGV4dC1bMXJlbV0gdGV4dC1ibGFjayBmb250LXJ1YmlrXCI+XG4gICAgICA8SGVhZGVyIGNoYXRVc2Vycz17Y2hhdD8udXNlcnN9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGYtc3RyZXRjaCBmbGV4LTEgb3ZlcmZsb3cteS1zY3JvbGwgZmxleCBmbGV4LWNvbCBweC1bMC45NHJlbV0gcGItWzAuOTRyZW1dIGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgdGV4dC1bMC43NXJlbV0gdGV4dC1ncmF5LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGYtc3RyZXRjaCBmbGV4LTEgb3ZlcmZsb3cteS1zY3JvbGwgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IGdhcC1bMC42M3JlbV1cIj5cbiAgICAgICAgICA8UmVjZWl2ZWRNZXNzYWdlIC8+XG4gICAgICAgICAgPFJlY2VpdmVkTWVzc2FnZSAvPlxuICAgICAgICAgIDxTZW50TWVzc2FnZSAvPlxuICAgICAgICAgIDxTZW50TWVzc2FnZSAvPlxuICAgICAgICAgIDxSZWNlaXZlZE1lc3NhZ2UgLz5cbiAgICAgICAgICA8U2VudE1lc3NhZ2UgLz5cbiAgICAgICAgICA8UmVjZWl2ZWRNZXNzYWdlIC8+XG4gICAgICAgICAgPFNlbnRNZXNzYWdlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5wdXRNZXNzYWdlIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xuIl0sIm5hbWVzIjpbIkhlYWRlciIsIlJlY2VpdmVkTWVzc2FnZSIsIlNlbnRNZXNzYWdlIiwiSW5wdXRNZXNzYWdlIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsImRiIiwiTWVzc2FnZXMiLCJjaGF0IiwibWVzc2FnZXMiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhdFVzZXJzIiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/messages.js\n"));

/***/ })

});