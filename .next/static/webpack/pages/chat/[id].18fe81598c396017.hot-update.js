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

/***/ "./components/input-message.js":
/*!*************************************!*\
  !*** ./components/input-message.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar InputMessage = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), input = ref1[0], setInput = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), image = ref2[0], setImage = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var sendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function(e) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"sending message\");\n                        e.preventDefault();\n                        // update the last seen\n                        return [\n                            4,\n                            setDoc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\", user.uid), {\n                                lastSeen: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.serverTimestamp)()\n                            }, {\n                                merge: true\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        // add the message to the db\n        // const chatRef = collection(db, \"chats\", router.query.id);\n        // const docRef = await addDoc(chatRef, {\n        //   timestamp: serverTimestamp(),\n        //   message: input,\n        //   messageImage: image,\n        //   user: user.email,\n        //   photoURL: user.photoURL,\n        // }).then(() => {\n        //   console.log(\"Document written\");\n        // });\n        // setInput(\"\");\n        });\n        return function sendMessage(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleUploadImage = function(e) {\n        console.log(e.target.files[0]);\n        var data = new FormData();\n        data.append(\"file\", e.target.files[0]);\n        data.append(\"upload_preset\", \"ugfxe2q8\");\n        data.append(\"cloud_name\", \"dfk5jbk5r\");\n        fetch(\"https://api.cloudinary.com/v1_1/dfk5jbk5r/image/upload\", {\n            method: \"post\",\n            body: data\n        }).then(function(resp) {\n            return resp.json();\n        }).then(function(data) {\n            setImage(data.url);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-stretch rounded-xxs bg-seagreen-100 flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: input,\n                onChange: function(e) {\n                    return setInput(e.target.value);\n                },\n                className: \"[border:none] outline-none font-rubik text-[0.75rem] bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start\",\n                type: \"text\",\n                placeholder: \"Your Message\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    onClick: function() {\n                        return setImage(null);\n                    },\n                    src: image,\n                    width: 50,\n                    height: 40,\n                    className: \"rounded-md cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-row items-center justify-center gap-[0.63rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        width: 20,\n                        height: 20,\n                        className: \"relative w-[1.25rem] h-[1.25rem] shrink-0 \",\n                        alt: \"\",\n                        loading: \"lazy\",\n                        src: \"/frame12.svg\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"file\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            width: 20,\n                            height: 20,\n                            className: \"relative w-[1.25rem] h-[1.25rem] shrink-0 \",\n                            alt: \"\",\n                            loading: \"lazy\",\n                            src: \"/frame13.svg\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"file\",\n                        type: \"file\",\n                        onChange: handleUploadImage,\n                        className: \"hidden\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-transparent outline-none border-none \",\n                        disabled: !input,\n                        type: \"submit\",\n                        onClick: sendMessage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            width: 24,\n                            height: 24,\n                            className: \"relative w-[1.5rem] h-[1.5rem] shrink-0 \",\n                            alt: \"\",\n                            loading: \"lazy\",\n                            src: \"/frame14.svg\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Locofy\\\\components\\\\input-message.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this);\n};\n_s(InputMessage, \"9tFy8J1H66xL6pYmRI+5HP3J+ww=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = InputMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputMessage);\nvar _c;\n$RefreshReg$(_c, \"InputMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQyxRQUFROzs7Ozs2QkFDbEI7a0NBRUYsOERBQUNjLFFBQU07d0JBQ0xkLFNBQVMsRUFBQywwQ0FDWDt3QkFDQ2UsUUFBUSxFQUFFLENBQUM3QyxLQUFLO3dCQUNoQmlDLElBQUksRUFBQyxRQUFRO3dCQUNiRSxPQUFPLEVBQUU5QixXQUFXO2tDQUVwQiw0RUFBQ2pCLG1EQUFLOzRCQUNKaUQsS0FBSyxFQUFFLEVBQUU7NEJBQ1RDLE1BQU0sRUFBRSxFQUFFOzRCQUNWUixTQUFTLEVBQUMsMENBQTJDOzRCQUNyRFMsR0FBRyxFQUFDLEVBQUU7NEJBQ05DLE9BQU8sRUFBQyxNQUFNOzRCQUNkSixHQUFHLEVBQUMsY0FBYzs7Ozs7aUNBQ2xCOzs7Ozs2QkFDSzs7Ozs7O3FCQUNMOzs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQXRIS3RDLFlBQVk7O1FBQ0RULG1FQUFZO1FBSVpPLGtEQUFTOzs7QUFMcEJFLEtBQUFBLFlBQVk7QUF3SGxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC1tZXNzYWdlLmpzP2QwOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIHNlcnZlclRpbWVzdGFtcCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5wdXRNZXNzYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBtZXNzYWdlXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgbGFzdCBzZWVuXG4gICAgYXdhaXQgc2V0RG9jKFxuICAgICAgY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiLCB1c2VyLnVpZCksXG4gICAgICB7XG4gICAgICAgIGxhc3RTZWVuOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgIH0sXG4gICAgICB7IG1lcmdlOiB0cnVlIH1cbiAgICApO1xuXG4gICAgLy8gYWRkIHRoZSBtZXNzYWdlIHRvIHRoZSBkYlxuXG4gICAgLy8gY29uc3QgY2hhdFJlZiA9IGNvbGxlY3Rpb24oZGIsIFwiY2hhdHNcIiwgcm91dGVyLnF1ZXJ5LmlkKTtcbiAgICAvLyBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY2hhdFJlZiwge1xuICAgIC8vICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAvLyAgIG1lc3NhZ2U6IGlucHV0LFxuICAgIC8vICAgbWVzc2FnZUltYWdlOiBpbWFnZSxcbiAgICAvLyAgIHVzZXI6IHVzZXIuZW1haWwsXG4gICAgLy8gICBwaG90b1VSTDogdXNlci5waG90b1VSTCxcbiAgICAvLyB9KS50aGVuKCgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgd3JpdHRlblwiKTtcbiAgICAvLyB9KTtcblxuICAgIC8vIHNldElucHV0KFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZEltYWdlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlc1swXSk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGRhdGEuYXBwZW5kKFwiZmlsZVwiLCBlLnRhcmdldC5maWxlc1swXSk7XG4gICAgZGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwidWdmeGUycThcIik7XG4gICAgZGF0YS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwiZGZrNWpiazVyXCIpO1xuICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9kZms1amJrNXIvaW1hZ2UvdXBsb2FkXCIsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBib2R5OiBkYXRhLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRJbWFnZShkYXRhLnVybCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLXN0cmV0Y2ggIHJvdW5kZWQteHhzIGJnLXNlYWdyZWVuLTEwMCAgIGZsZXggZmxleC1yb3cgcC1bMC45NHJlbV0gaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgZ2FwLVswLjYzcmVtXVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cIltib3JkZXI6bm9uZV0gb3V0bGluZS1ub25lIGZvbnQtcnViaWsgdGV4dC1bMC43NXJlbV0gYmctW3RyYW5zcGFyZW50XSBzZWxmLXN0cmV0Y2ggZmxleC0xIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW1hZ2UobnVsbCl9XG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtWzAuNjNyZW1dXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctWzEuMjVyZW1dIGgtWzEuMjVyZW1dIHNocmluay0wICBcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIHNyYz1cIi9mcmFtZTEyLnN2Z1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctWzEuMjVyZW1dIGgtWzEuMjVyZW1dIHNocmluay0wICBcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIHNyYz1cIi9mcmFtZTEzLnN2Z1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJmaWxlXCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVwbG9hZEltYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSBib3JkZXItbm9uZVxuICAgICAgICBcIlxuICAgICAgICAgIGRpc2FibGVkPXshaW5wdXR9XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgb25DbGljaz17c2VuZE1lc3NhZ2V9XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHdpZHRoPXsyNH1cbiAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVsxLjVyZW1dIGgtWzEuNXJlbV0gc2hyaW5rLTAgIFwiXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgc3JjPVwiL2ZyYW1lMTQuc3ZnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRNZXNzYWdlO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsImRiIiwidXNlQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIklucHV0TWVzc2FnZSIsInVzZXIiLCJpbnB1dCIsInNldElucHV0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsInJvdXRlciIsInNlbmRNZXNzYWdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInNldERvYyIsInVpZCIsImxhc3RTZWVuIiwibWVyZ2UiLCJoYW5kbGVVcGxvYWRJbWFnZSIsInRhcmdldCIsImZpbGVzIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlc3AiLCJqc29uIiwidXJsIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibG9hZGluZyIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input-message.js\n"));

/***/ })

});