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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! email-validator */ \"./node_modules/email-validator/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar AddFriend = function(param) {\n    var onClose = param.onClose;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 1), user = ref[0];\n    var q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"chats\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"users\", \"array-contains\", user.email));\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection)(q), 1), chatsSnapshot = ref1[0];\n    // console.log(\"chatsSnapshot\", chatsSnapshot);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref2[0], setInput = ref2[1];\n    var createChat = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                console.log(\"Creating a chat with \", input);\n                if (!input) return [\n                    2\n                ];\n                if (email_validator__WEBPACK_IMPORTED_MODULE_2__.validate(input) && input !== user.email) {\n                    // We need to add the chat into the DB 'chats' collection\n                    // const chat = await addDoc(collection(db, \"chats\"), {\n                    //   users: [user.email, input],\n                    // }).then(() => {\n                    //   setInput(\"\");\n                    // });\n                    chatAlreadyExists(input);\n                }\n                return [\n                    2\n                ];\n            });\n        });\n        return function createChat() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var chatAlreadyExists = function(recipientEmail) {\n        // console.log(\"chatsSnapshot\", chatsSnapshot);\n        // !!chatsSnapshot?.docs.find(\n        //   (chat) =>\n        //     chat.data().users.find((user) => user === recipientEmail)?.length > 0\n        // );\n        // check if the chat already exists with firebase v9\n        chatsSnapshot === null || chatsSnapshot === void 0 ? void 0 : chatsSnapshot.docs.forEach(function(doc) {\n            var ref;\n            // console.log(\"doc\", doc.data().users);\n            if (((ref = doc.data().users.find(function(user) {\n                return user === recipientEmail;\n            })) === null || ref === void 0 ? void 0 : ref.length) > 0) {\n                console.log(\"chat already exists\");\n                return true;\n            } else {\n                console.log(\"chat does not exist\");\n                return false;\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative rounded-3xl bg-beige w-[43.75rem] flex flex-col p-[1.25rem] box-border items-start justify-start gap-[0.63rem] max-w-full max-h-full text-left text-[1.5rem] text-darkolivegreen font-rubik\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex flex-row p-[1.25rem] items-center justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"m-0 relative font-medium\",\n                    children: \"Add Person\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex flex-row py-[0rem] px-[1.25rem] items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: function(e) {\n                        return setInput(e.target.value);\n                    },\n                    value: input,\n                    className: \"[border:none] outline-none font-rubik text-[1.25rem] bg-seagreen-200 flex-1 rounded-xxs flex flex-row py-[1.25rem] px-[1.25rem] items-center justify-start\",\n                    type: \"text\",\n                    placeholder: \"Enter Email\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"self-stretch flex flex-row py-[1.25rem] px-[10.75rem] items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: createChat,\n                    className: \"cursor-pointer [border:none] p-0 bg-darkolivegreen rounded-xxs w-[8rem] h-[3.4rem] shrink-0 flex flex-row items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative text-[1.1rem] font-medium font-rubik text-white text-left\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Locofy\\\\components\\\\AddFriend.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddFriend, \"EOacOTvjFbBMZvYyWJEffR04lFc=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection\n    ];\n});\n_c = AddFriend;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFriend);\nvar _c;\n$RefreshReg$(_c, \"AddFriend\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQ0prQixRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsrQkFBS2xCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7cUJBQUE7b0JBQ3pDQSxLQUFLLEVBQUVyQixLQUFLO29CQUNaZ0IsU0FBUyxFQUFDLDRKQUE4SjtvQkFDeEtNLElBQUksRUFBQyxNQUFNO29CQUNYQyxXQUFXLEVBQUMsYUFBYTs7Ozs7eUJBQ3pCOzs7OztxQkFDRTswQkFDTiw4REFBQ1IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG1GQUFxRjswQkFDbEcsNEVBQUNRLFFBQU07b0JBQ0xDLE9BQU8sRUFBRXZCLFVBQVU7b0JBQ25CYyxTQUFTLEVBQUMsdUlBQXlJOzhCQUVuSiw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9FQUFvRTtrQ0FBQyxLQUVwRjs7Ozs7NkJBQU07Ozs7O3lCQUNDOzs7OztxQkFDTDs7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7R0EzRUt0QixTQUFTOztRQUNFUCxtRUFBWTtRQUtIQyx5RUFBYTs7O0FBTmpDTSxLQUFBQSxTQUFTO0FBNkVmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRGcmllbmQuanM/MWNkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgRW1haWxWYWxpZGF0b3IgZnJvbSBcImVtYWlsLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgZGIsIGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBxdWVyeSwgd2hlcmUsIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IEFkZEZyaWVuZCA9ICh7IG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gIGNvbnN0IHEgPSBxdWVyeShcbiAgICBjb2xsZWN0aW9uKGRiLCBcImNoYXRzXCIpLFxuICAgIHdoZXJlKFwidXNlcnNcIiwgXCJhcnJheS1jb250YWluc1wiLCB1c2VyLmVtYWlsKVxuICApO1xuICBjb25zdCBbY2hhdHNTbmFwc2hvdF0gPSB1c2VDb2xsZWN0aW9uKHEpO1xuICAvLyBjb25zb2xlLmxvZyhcImNoYXRzU25hcHNob3RcIiwgY2hhdHNTbmFwc2hvdCk7XG5cbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjcmVhdGVDaGF0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgYSBjaGF0IHdpdGggXCIsIGlucHV0KTtcblxuICAgIGlmICghaW5wdXQpIHJldHVybjtcblxuICAgIGlmIChcbiAgICAgIEVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlKGlucHV0KSAmJlxuICAgICAgaW5wdXQgIT09IHVzZXIuZW1haWwgXG4gICAgKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIGFkZCB0aGUgY2hhdCBpbnRvIHRoZSBEQiAnY2hhdHMnIGNvbGxlY3Rpb25cbiAgICAgIC8vIGNvbnN0IGNoYXQgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJjaGF0c1wiKSwge1xuICAgICAgLy8gICB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XSxcbiAgICAgIC8vIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gICBzZXRJbnB1dChcIlwiKTtcbiAgICAgIC8vIH0pO1xuICAgICAgY2hhdEFscmVhZHlFeGlzdHMoaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGF0QWxyZWFkeUV4aXN0cyA9IChyZWNpcGllbnRFbWFpbCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhdHNTbmFwc2hvdFwiLCBjaGF0c1NuYXBzaG90KTtcbiAgICAvLyAhIWNoYXRzU25hcHNob3Q/LmRvY3MuZmluZChcbiAgICAvLyAgIChjaGF0KSA9PlxuICAgIC8vICAgICBjaGF0LmRhdGEoKS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyID09PSByZWNpcGllbnRFbWFpbCk/Lmxlbmd0aCA+IDBcbiAgICAvLyApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjaGF0IGFscmVhZHkgZXhpc3RzIHdpdGggZmlyZWJhc2UgdjlcbiAgICBjaGF0c1NuYXBzaG90Py5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJkb2NcIiwgZG9jLmRhdGEoKS51c2Vycyk7XG4gICAgICBpZiAoZG9jLmRhdGEoKS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyID09PSByZWNpcGllbnRFbWFpbCk/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGF0IGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7ICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhdCBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtM3hsIGJnLWJlaWdlIHctWzQzLjc1cmVtXSAgIGZsZXggZmxleC1jb2wgcC1bMS4yNXJlbV0gYm94LWJvcmRlciBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IGdhcC1bMC42M3JlbV0gbWF4LXctZnVsbCBtYXgtaC1mdWxsIHRleHQtbGVmdCB0ZXh0LVsxLjVyZW1dIHRleHQtZGFya29saXZlZ3JlZW4gZm9udC1ydWJpa1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLXN0cmV0Y2ggICBmbGV4IGZsZXgtcm93IHAtWzEuMjVyZW1dIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCByZWxhdGl2ZSBmb250LW1lZGl1bVwiPkFkZCBQZXJzb248L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1zdHJldGNoICAgZmxleCBmbGV4LXJvdyBweS1bMHJlbV0gcHgtWzEuMjVyZW1dIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiW2JvcmRlcjpub25lXSBvdXRsaW5lLW5vbmUgZm9udC1ydWJpayB0ZXh0LVsxLjI1cmVtXSBiZy1zZWFncmVlbi0yMDAgZmxleC0xIHJvdW5kZWQteHhzICAgZmxleCBmbGV4LXJvdyBweS1bMS4yNXJlbV0gcHgtWzEuMjVyZW1dIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1zdHJldGNoICAgZmxleCBmbGV4LXJvdyBweS1bMS4yNXJlbV0gcHgtWzEwLjc1cmVtXSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2NyZWF0ZUNoYXR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgW2JvcmRlcjpub25lXSBwLTAgYmctZGFya29saXZlZ3JlZW4gcm91bmRlZC14eHMgdy1bOHJlbV0gaC1bMy40cmVtXSBzaHJpbmstMCAgIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1bMS4xcmVtXSBmb250LW1lZGl1bSBmb250LXJ1YmlrIHRleHQtd2hpdGUgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZyaWVuZDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkVtYWlsVmFsaWRhdG9yIiwiZGIiLCJhdXRoIiwidXNlQXV0aFN0YXRlIiwidXNlQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jcyIsIkFkZEZyaWVuZCIsIm9uQ2xvc2UiLCJ1c2VyIiwicSIsImVtYWlsIiwiY2hhdHNTbmFwc2hvdCIsImlucHV0Iiwic2V0SW5wdXQiLCJjcmVhdGVDaGF0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRlIiwiY2hhdEFscmVhZHlFeGlzdHMiLCJyZWNpcGllbnRFbWFpbCIsImRvY3MiLCJmb3JFYWNoIiwiZG9jIiwiZGF0YSIsInVzZXJzIiwiZmluZCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddFriend.js\n"));

/***/ })

});