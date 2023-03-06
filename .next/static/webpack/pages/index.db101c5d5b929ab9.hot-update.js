"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getRecipientEmail */ \"./utils/getRecipientEmail.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Chat = function(param) {\n    var users = param.users, id = param.id;\n    var ref, ref1;\n    _s();\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth), 1), user = ref2[0];\n    // console.log(\"users\", users);\n    var q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(\"email\", \"==\", (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(users, user)));\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useCollection)(q), 1), recipientSnapshot = ref3[0];\n    var recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (ref = recipientSnapshot.docs) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.data();\n    var recipientEmail = (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(users, user);\n    // get recipient data from firestore v9\n    console.log(\"recipient\", recipient);\n    //   convert timestamp to ago format with moment.js\n    var time = moment__WEBPACK_IMPORTED_MODULE_9___default()().format(\"YYYY-MM-DD HH:mm:ss\").fromNow();\n    console.log(\"time\", time);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-stretch flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem] border-b-[1px] border-0 border-solid border-seagreen-200 hover:bg-beige cursor-pointer\",\n        children: [\n            recipient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                width: 55,\n                height: 55,\n                className: \"relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover\",\n                alt: \"\",\n                loading: \"lazy\",\n                src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                width: 55,\n                height: 55,\n                className: \"relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover\",\n                alt: \"\",\n                loading: \"lazy\",\n                src: \"https://res.cloudinary.com/dfk5jbk5r/image/upload/v1678095426/ChatFlame/Vector_10_ulkc6j.svg\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex-1 flex flex-col items-start justify-center gap-[0.63rem]\",\n                children: [\n                    recipient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"m-0 relative font-medium\",\n                        children: recipient === null || recipient === void 0 ? void 0 : recipient.name\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"m-0 relative font-medium\",\n                        children: recipientEmail\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"m-0 relative text-[0.88rem] text-gray-200\",\n                        children: \"Hello How are you?\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            recipient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex flex-row items-start justify-end text-[0.75rem] text-gray-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"m-0 relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        children: recipient === null || recipient === void 0 ? void 0 : recipient.lastSeen\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Locofy\\\\components\\\\Chat.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Chat, \"bww3shcN4FC+YFBLPVqe9p4G0PA=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_6__.useCollection\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUErQjtBQUNMO0FBQ2lDO0FBQ0Y7QUFDbEI7QUFDd0I7QUFDZ0I7QUFDN0M7QUFDTjtBQUU1QixJQUFNYyxJQUFJLEdBQUcsZ0JBQW1CO1FBQWhCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsRUFBRSxTQUFGQSxFQUFFO1FBVUxDLEdBQXVCOztJQVR6QyxJQUFlZCxJQUFrQixxRkFBbEJBLHVFQUFZLENBQUNFLDJDQUFJLENBQUMsTUFBMUJhLElBQUksR0FBSWYsSUFBa0IsR0FBdEI7SUFFWCwrQkFBK0I7SUFFL0IsSUFBTWdCLENBQUMsR0FBR1YseURBQUssQ0FDYkYsOERBQVUsQ0FBQ0gseUNBQUUsRUFBRSxPQUFPLENBQUMsRUFDdkJNLHlEQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRVIsb0VBQWlCLENBQUNhLEtBQUssRUFBRUcsSUFBSSxDQUFDLENBQUMsQ0FDckQ7SUFDRCxJQUE0QlosSUFBZ0IscUZBQWhCQSw2RUFBYSxDQUFDYSxDQUFDLENBQUMsTUFBckNGLGlCQUFpQixHQUFJWCxJQUFnQixHQUFwQjtJQUN4QixJQUFNYyxTQUFTLEdBQUdILGlCQUFpQixhQUFqQkEsaUJBQWlCLFdBQU0sR0FBdkJBLEtBQUFBLENBQXVCLEdBQXZCQSxDQUFBQSxHQUF1QixHQUF2QkEsaUJBQWlCLENBQUVJLElBQUksY0FBdkJKLEdBQXVCLGNBQXZCQSxLQUFBQSxDQUF1QixHQUF2QkEsUUFBQUEsR0FBdUIsQ0FBRyxDQUFDLENBQUMsNkJBQUwsR0FBdkJBLEtBQUFBLENBQXVCLEdBQXZCQSxLQUE4QkssSUFBSSxFQUFFO0lBRXRELElBQU1DLGNBQWMsR0FBR3JCLG9FQUFpQixDQUFDYSxLQUFLLEVBQUVHLElBQUksQ0FBQztJQUVyRCx1Q0FBdUM7SUFFdkNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRUwsU0FBUyxDQUFDLENBQUM7SUFFdEMsbURBQW1EO0lBQy9DLElBQU1NLElBQUksR0FBR2IsNkNBQU0sRUFBRSxDQUFDYyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO0lBQzdESixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVDLElBQUksQ0FBQyxDQUFDO0lBRzVCLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3S0FBMks7O1lBQ3ZMVixTQUFTLGlCQUNSLDhEQUFDcEIsbURBQUs7Z0JBQ0orQixLQUFLLEVBQUUsRUFBRTtnQkFDVEMsTUFBTSxFQUFFLEVBQUU7Z0JBQ1ZGLFNBQVMsRUFBQyxzRUFBc0U7Z0JBQ2hGRyxHQUFHLEVBQUMsRUFBRTtnQkFDTkMsT0FBTyxFQUFDLE1BQU07Z0JBQ2RDLEdBQUcsRUFBRWYsU0FBUyxhQUFUQSxTQUFTLFdBQVUsR0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxTQUFTLENBQUVnQixRQUFROzs7OztxQkFDeEIsaUJBRUYsOERBQUNwQyxtREFBSztnQkFDSitCLEtBQUssRUFBRSxFQUFFO2dCQUNUQyxNQUFNLEVBQUUsRUFBRTtnQkFDVkYsU0FBUyxFQUFDLHNFQUFzRTtnQkFDaEZHLEdBQUcsRUFBQyxFQUFFO2dCQUNOQyxPQUFPLEVBQUMsTUFBTTtnQkFDZEMsR0FBRyxFQUFHLDhGQUE0Rjs7Ozs7cUJBQ2xHOzBCQUVKLDhEQUFDTixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNEVBQThFOztvQkFDMUZWLFNBQVMsaUJBQ1IsOERBQUNpQixHQUFDO3dCQUFDUCxTQUFTLEVBQUMsMEJBQTBCO2tDQUFFVixTQUFTLGFBQVRBLFNBQVMsV0FBTSxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLFNBQVMsQ0FBRWtCLElBQUk7Ozs7OzZCQUFLLGlCQUU3RCw4REFBQ0QsR0FBQzt3QkFBQ1AsU0FBUyxFQUFDLDBCQUEwQjtrQ0FBRVAsY0FBYzs7Ozs7NkJBQUs7a0NBRTlELDhEQUFDYyxHQUFDO3dCQUFDUCxTQUFTLEVBQUMsMkNBQTJDO2tDQUFDLG9CQUV6RDs7Ozs7NkJBQUk7Ozs7OztxQkFDQTtZQUNMVixTQUFTLGlCQUNSLDhEQUFDUyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsaUZBQW1GOzBCQUNoRyw0RUFBQ08sR0FBQztvQkFBQ1AsU0FBUyxFQUFDLGNBQWM7OEJBQ3pCLDRFQUFDbEIscURBQU07a0NBQUVRLFNBQVMsYUFBVEEsU0FBUyxXQUFVLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsU0FBUyxDQUFFbUIsUUFBUTs7Ozs7NkJBQVU7Ozs7O3lCQUNwQzs7Ozs7cUJBQ0EsR0FFTixFQUFFOzs7Ozs7YUFFQSxDQUNOO0FBQ0osQ0FBQztHQWpFS3pCLElBQUk7O1FBQ09YLG1FQUFZO1FBUUNHLHlFQUFhOzs7QUFUckNRLEtBQUFBLElBQUk7QUFtRVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXQuanM/MDVhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ2V0UmVjaXBpZW50RW1haWwgZnJvbSBcIi4uL3V0aWxzL2dldFJlY2lwaWVudEVtYWlsXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7IGRiLCBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgcXVlcnksIHdoZXJlLCBnZXREb2NzIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5jb25zdCBDaGF0ID0gKHsgdXNlcnMsIGlkIH0pID0+IHtcclxuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwidXNlcnNcIiwgdXNlcnMpO1xyXG5cclxuICBjb25zdCBxID0gcXVlcnkoXHJcbiAgICBjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLFxyXG4gICAgd2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIGdldFJlY2lwaWVudEVtYWlsKHVzZXJzLCB1c2VyKSlcclxuICApO1xyXG4gIGNvbnN0IFtyZWNpcGllbnRTbmFwc2hvdF0gPSB1c2VDb2xsZWN0aW9uKHEpO1xyXG4gIGNvbnN0IHJlY2lwaWVudCA9IHJlY2lwaWVudFNuYXBzaG90Py5kb2NzPy5bMF0/LmRhdGEoKTtcclxuXHJcbiAgY29uc3QgcmVjaXBpZW50RW1haWwgPSBnZXRSZWNpcGllbnRFbWFpbCh1c2VycywgdXNlcik7XHJcblxyXG4gIC8vIGdldCByZWNpcGllbnQgZGF0YSBmcm9tIGZpcmVzdG9yZSB2OVxyXG5cclxuICBjb25zb2xlLmxvZyhcInJlY2lwaWVudFwiLCByZWNpcGllbnQpO1xyXG5cclxuLy8gICBjb252ZXJ0IHRpbWVzdGFtcCB0byBhZ28gZm9ybWF0IHdpdGggbW9tZW50LmpzXHJcbiAgICBjb25zdCB0aW1lID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKS5mcm9tTm93KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRpbWVcIiwgdGltZSk7XHJcbiAgICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1zdHJldGNoICAgZmxleCBmbGV4LXJvdyBwLVswLjk0cmVtXSBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBnYXAtWzAuNjNyZW1dIGJvcmRlci1iLVsxcHhdIGJvcmRlci0wIGJvcmRlci1zb2xpZCBib3JkZXItc2VhZ3JlZW4tMjAwICBob3ZlcjpiZy1iZWlnZSBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICB7cmVjaXBpZW50ID8gKFxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgd2lkdGg9ezU1fVxyXG4gICAgICAgICAgaGVpZ2h0PXs1NX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtbGFyZ2Ugdy1bMy40NHJlbV0gaC1bMy40NHJlbV0gc2hyaW5rLTAgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICBzcmM9e3JlY2lwaWVudD8ucGhvdG9VUkx9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHdpZHRoPXs1NX1cclxuICAgICAgICAgIGhlaWdodD17NTV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLWxhcmdlIHctWzMuNDRyZW1dIGgtWzMuNDRyZW1dIHNocmluay0wIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGZrNWpiazVyL2ltYWdlL3VwbG9hZC92MTY3ODA5NTQyNi9DaGF0RmxhbWUvVmVjdG9yXzEwX3Vsa2M2ai5zdmdgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1zdHJldGNoIGZsZXgtMSAgIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgZ2FwLVswLjYzcmVtXVwiPlxyXG4gICAgICAgIHtyZWNpcGllbnQgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcmVsYXRpdmUgZm9udC1tZWRpdW1cIj57cmVjaXBpZW50Py5uYW1lfTwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHJlbGF0aXZlIGZvbnQtbWVkaXVtXCI+e3JlY2lwaWVudEVtYWlsfTwvcD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCByZWxhdGl2ZSB0ZXh0LVswLjg4cmVtXSB0ZXh0LWdyYXktMjAwXCI+XHJcbiAgICAgICAgICBIZWxsbyBIb3cgYXJlIHlvdT9cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cmVjaXBpZW50ID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1zdHJldGNoICAgZmxleCBmbGV4LXJvdyBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCB0ZXh0LVswLjc1cmVtXSB0ZXh0LWdyYXktMjAwXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPE1vbWVudD57cmVjaXBpZW50Py5sYXN0U2Vlbn08L01vbWVudD5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJnZXRSZWNpcGllbnRFbWFpbCIsInVzZUF1dGhTdGF0ZSIsImRiIiwiYXV0aCIsInVzZUNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJNb21lbnQiLCJtb21lbnQiLCJDaGF0IiwidXNlcnMiLCJpZCIsInJlY2lwaWVudFNuYXBzaG90IiwidXNlciIsInEiLCJyZWNpcGllbnQiLCJkb2NzIiwiZGF0YSIsInJlY2lwaWVudEVtYWlsIiwiY29uc29sZSIsImxvZyIsInRpbWUiLCJmb3JtYXQiLCJmcm9tTm93IiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwicGhvdG9VUkwiLCJwIiwibmFtZSIsImxhc3RTZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Chat.js\n"));

/***/ })

});