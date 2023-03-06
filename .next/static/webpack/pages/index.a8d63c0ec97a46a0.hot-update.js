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

/***/ "./components/AddFriend.js":
/*!*********************************!*\
  !*** ./components/AddFriend.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! email-validator */ \"./node_modules/email-validator/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar AddFriend = function(param) {\n    var onClose = param.onClose;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    var q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"users\", \"array-contains\", user.email));\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection)(q), 1), chatsSnapshot = ref1[0];\n    // console.log(\"chatsSnapshot\", chatsSnapshot);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref2[0], setInput = ref2[1];\n    var createChat = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            var chat;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"Creating a chat with \", input);\n                        if (!input) return [\n                            2\n                        ];\n                        if (!(email_validator__WEBPACK_IMPORTED_MODULE_2__.validate(input) && input !== user.email && chatAlreadyExists(input) !== true)) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\"), {\n                                users: [\n                                    user.email,\n                                    input\n                                ]\n                            }).then(function() {\n                                setInput(\"\");\n                            })\n                        ];\n                    case 1:\n                        chat = _state.sent();\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        console.log(\"Not created\");\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createChat() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var chatAlreadyExists = function(recipientEmail) {\n        // console.log(\"chatsSnapshot\", chatsSnapshot);\n        // !!chatsSnapshot?.docs.find(\n        //   (chat) =>\n        //     chat.data().users.find((user) => user === recipientEmail)?.length > 0\n        // );\n        // check if the chat already exists with firebase v9 \n        var a = [];\n        chatsSnapshot === null || chatsSnapshot === void 0 ? void 0 : chatsSnapshot.docs.forEach(function(doc) {\n            var ref;\n            // console.log(\"doc\", doc.data().users);\n            if (((ref = doc.data().users.find(function(user) {\n                return user === recipientEmail;\n            })) === null || ref === void 0 ? void 0 : ref.length) > 0) {\n                console.log(\"chat already exists\");\n                return true;\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative rounded-3xl bg-beige w-[43.75rem] flex flex-col p-[1.25rem] box-border items-start justify-start gap-[0.63rem] max-w-full max-h-full text-left text-[1.5rem] text-darkolivegreen font-rubik\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex flex-row p-[1.25rem] items-center justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"m-0 relative font-medium\",\n                    children: \"Add Person\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex flex-row py-[0rem] px-[1.25rem] items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: function(e) {\n                        return setInput(e.target.value);\n                    },\n                    value: input,\n                    className: \"[border:none] outline-none font-rubik text-[1.25rem] bg-seagreen-200 flex-1 rounded-xxs flex flex-row py-[1.25rem] px-[1.25rem] items-center justify-start\",\n                    type: \"text\",\n                    placeholder: \"Enter Email\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex flex-row py-[1.25rem] px-[10.75rem] items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: createChat,\n                    className: \"cursor-pointer [border:none] p-0 bg-darkolivegreen rounded-xxs w-[8rem] h-[3.4rem] shrink-0 flex flex-row items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative text-[1.1rem] font-medium font-rubik text-white text-left\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddFriend, \"EOacOTvjFbBMZvYyWJEffR04lFc=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection\n    ];\n});\n_c = AddFriend;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFriend);\nvar _c;\n$RefreshReg$(_c, \"AddFriend\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7Z0JBQUNDLFNBQVMsRUFBQyxtRUFBcUU7MEJBQ2xGLDRFQUFDQyxHQUFDO29CQUFDRCxTQUFTLEVBQUMsMEJBQTBCOzhCQUFDLFlBQVU7Ozs7O3lCQUFJOzs7OztxQkFDbEQ7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywrRUFBaUY7MEJBQzlGLDRFQUFDbkIsT0FBSztvQkFDSnFCLFFBQVEsRUFBRSxTQUFDQyxDQUFDOytCQUFLckIsUUFBUSxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztxQkFBQTtvQkFDekNBLEtBQUssRUFBRXhCLEtBQUs7b0JBQ1ptQixTQUFTLEVBQUMsNEpBQThKO29CQUN4S00sSUFBSSxFQUFDLE1BQU07b0JBQ1hDLFdBQVcsRUFBQyxhQUFhOzs7Ozt5QkFDekI7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDUixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUZBQXFGOzBCQUNsRyw0RUFBQ1EsUUFBTTtvQkFDTEMsT0FBTyxFQUFFMUIsVUFBVTtvQkFDbkJpQixTQUFTLEVBQUMsdUlBQXlJOzhCQUVuSiw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9FQUFvRTtrQ0FBQyxLQUVwRjs7Ozs7NkJBQU07Ozs7O3lCQUNDOzs7OztxQkFDTDs7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7R0EzRUt6QixTQUFTOztRQUNFUCxtRUFBWTtRQUtIQyx5RUFBYTs7O0FBTmpDTSxLQUFBQSxTQUFTO0FBNkVmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRGcmllbmQuanM/MWNkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgRW1haWxWYWxpZGF0b3IgZnJvbSBcImVtYWlsLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBxdWVyeSwgd2hlcmUsIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IEFkZEZyaWVuZCA9ICh7IG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gIGNvbnN0IHEgPSBxdWVyeShcbiAgICBjb2xsZWN0aW9uKGRiLCBcImNoYXRzXCIpLFxuICAgIHdoZXJlKFwidXNlcnNcIiwgXCJhcnJheS1jb250YWluc1wiLCB1c2VyLmVtYWlsKVxuICApO1xuICBjb25zdCBbY2hhdHNTbmFwc2hvdF0gPSB1c2VDb2xsZWN0aW9uKHEpO1xuICAvLyBjb25zb2xlLmxvZyhcImNoYXRzU25hcHNob3RcIiwgY2hhdHNTbmFwc2hvdCk7XG5cbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjcmVhdGVDaGF0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgYSBjaGF0IHdpdGggXCIsIGlucHV0KTtcblxuICAgIGlmICghaW5wdXQpIHJldHVybjtcblxuICAgIGlmIChcbiAgICAgIEVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlKGlucHV0KSAmJlxuICAgICAgaW5wdXQgIT09IHVzZXIuZW1haWwgJiZcbiAgICAgIGNoYXRBbHJlYWR5RXhpc3RzKGlucHV0KSAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgLy8gV2UgbmVlZCB0byBhZGQgdGhlIGNoYXQgaW50byB0aGUgREIgJ2NoYXRzJyBjb2xsZWN0aW9uXG4gICAgICBjb25zdCBjaGF0ID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwiY2hhdHNcIiksIHtcbiAgICAgICAgdXNlcnM6IFt1c2VyLmVtYWlsLCBpbnB1dF0sXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0SW5wdXQoXCJcIik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJOb3QgY3JlYXRlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhdEFscmVhZHlFeGlzdHMgPSAocmVjaXBpZW50RW1haWwpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXRzU25hcHNob3RcIiwgY2hhdHNTbmFwc2hvdCk7XG4gICAgLy8gISFjaGF0c1NuYXBzaG90Py5kb2NzLmZpbmQoXG4gICAgLy8gICAoY2hhdCkgPT5cbiAgICAvLyAgICAgY2hhdC5kYXRhKCkudXNlcnMuZmluZCgodXNlcikgPT4gdXNlciA9PT0gcmVjaXBpZW50RW1haWwpPy5sZW5ndGggPiAwXG4gICAgLy8gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2hhdCBhbHJlYWR5IGV4aXN0cyB3aXRoIGZpcmViYXNlIHY5IFxuICAgIGNvbnN0IGEgPSBbXVxuICAgIGNoYXRzU25hcHNob3Q/LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImRvY1wiLCBkb2MuZGF0YSgpLnVzZXJzKTtcbiAgICAgIGlmIChkb2MuZGF0YSgpLnVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIgPT09IHJlY2lwaWVudEVtYWlsKT8ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXQgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtM3hsIGJnLWJlaWdlIHctWzQzLjc1cmVtXSAgIGZsZXggZmxleC1jb2wgcC1bMS4yNXJlbV0gYm94LWJvcmRlciBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IGdhcC1bMC42M3JlbV0gbWF4LXctZnVsbCBtYXgtaC1mdWxsIHRleHQtbGVmdCB0ZXh0LVsxLjVyZW1dIHRleHQtZGFya29saXZlZ3JlZW4gZm9udC1ydWJpa1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLXN0cmV0Y2ggICBmbGV4IGZsZXgtcm93IHAtWzEuMjVyZW1dIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCByZWxhdGl2ZSBmb250LW1lZGl1bVwiPkFkZCBQZXJzb248L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1zdHJldGNoICAgZmxleCBmbGV4LXJvdyBweS1bMHJlbV0gcHgtWzEuMjVyZW1dIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiW2JvcmRlcjpub25lXSBvdXRsaW5lLW5vbmUgZm9udC1ydWJpayB0ZXh0LVsxLjI1cmVtXSBiZy1zZWFncmVlbi0yMDAgZmxleC0xIHJvdW5kZWQteHhzICAgZmxleCBmbGV4LXJvdyBweS1bMS4yNXJlbV0gcHgtWzEuMjVyZW1dIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1zdHJldGNoICAgZmxleCBmbGV4LXJvdyBweS1bMS4yNXJlbV0gcHgtWzEwLjc1cmVtXSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2NyZWF0ZUNoYXR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgW2JvcmRlcjpub25lXSBwLTAgYmctZGFya29saXZlZ3JlZW4gcm91bmRlZC14eHMgdy1bOHJlbV0gaC1bMy40cmVtXSBzaHJpbmstMCAgIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1bMS4xcmVtXSBmb250LW1lZGl1bSBmb250LXJ1YmlrIHRleHQtd2hpdGUgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZyaWVuZDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkVtYWlsVmFsaWRhdG9yIiwiZGIiLCJhdXRoIiwidXNlQXV0aFN0YXRlIiwidXNlQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jcyIsIkFkZEZyaWVuZCIsIm9uQ2xvc2UiLCJ1c2VyIiwicSIsImVtYWlsIiwiY2hhdHNTbmFwc2hvdCIsImlucHV0Iiwic2V0SW5wdXQiLCJjcmVhdGVDaGF0IiwiY2hhdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZSIsImNoYXRBbHJlYWR5RXhpc3RzIiwidXNlcnMiLCJ0aGVuIiwicmVjaXBpZW50RW1haWwiLCJhIiwiZG9jcyIsImZvckVhY2giLCJkb2MiLCJkYXRhIiwiZmluZCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddFriend.js\n"));

/***/ })

});