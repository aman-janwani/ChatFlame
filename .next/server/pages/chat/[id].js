"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 9252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);



const RecipientContact = ({ onClose , recipient , recipientEmail  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative bg-beige w-[25rem] max-h-screen min-h-screen flex flex-col items-center justify-start max-w-full text-left text-[1.25rem] text-darkolivegreen font-rubik",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "self-stretch bg-white h-[5.81rem] shrink-0 flex flex-row py-[2rem] px-[1.44rem] box-border items-center justify-start gap-[2.5rem]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        width: 30,
                        height: 30,
                        onClick: onClose,
                        className: "relative cursor-pointer w-[1.88rem] h-[1.88rem] shrink-0 ",
                        alt: "",
                        loading: "lazy",
                        src: "/frame5.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 relative font-medium",
                        children: "Contact info"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "self-stretch flex-1 overflow-y-scroll flex flex-col py-[1.25rem] px-[0rem] items-center justify-start gap-[4.63rem] text-[1.75rem] text-gray-100",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-[0.94rem]",
                        children: [
                            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                width: 228,
                                height: 228,
                                className: "relative rounded-[100000000376832px] w-[14.25rem] h-[14.25rem] shrink-0 object-cover",
                                alt: "",
                                loading: "lazy",
                                src: recipient?.photoURL
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                width: 228,
                                height: 228,
                                className: "relative rounded-[100000000376832px] w-[14.25rem] h-[14.25rem] shrink-0 object-cover",
                                alt: "",
                                loading: "lazy",
                                src: `https://res.cloudinary.com/dfk5jbk5r/image/upload/v1678095426/ChatFlame/Vector_10_ulkc6j.svg`
                            }),
                            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative font-medium",
                                children: recipient?.name
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative font-medium",
                                children: recipientEmail
                            }),
                            recipient ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "m-0 relative text-[1rem] text-gray-200",
                                children: [
                                    "last seen",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        format: "LT",
                                        children: recipient?.lastSeen?.toDate()
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative text-[1rem] text-gray-200",
                                children: "last seen: unavailable"
                            }),
                            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative text-[1.25rem] text-gray-200",
                                children: recipient?.email
                            }) : ""
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "self-stretch bg-seagreen-200 flex flex-col p-[1.25rem] items-start justify-start gap-[0.63rem] text-[1.25rem]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative font-medium",
                                children: "About"
                            }),
                            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 self-stretch relative text-[1rem]",
                                children: recipient?.about
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 self-stretch relative text-[1rem]",
                                children: "unavailable"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipientContact);


/***/ }),

/***/ 4683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RecipientContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9252);
/* harmony import */ var _components_portal_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6801);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7896);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2356);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Header = ({ chatUsers  })=>{
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "users"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)("email", "==", (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(chatUsers, user)));
    const [recipientSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useCollection)(q);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(chatUsers, user);
    // console.log("recipient", recipient);
    const { 0: isFrameContainer18Open , 1: setFrameContainer18Open  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openFrameContainer18 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setFrameContainer18Open(true);
    }, []);
    const closeFrameContainer18 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setFrameContainer18Open(false);
    }, []);
    const onFrameIcon1Click = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        router.push("/");
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "self-stretch bg-white flex flex-row p-[0.94rem] items-center justify-center gap-[0.63rem] text-left text-[1rem] text-black font-rubik",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "block lg:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            width: 25,
                            height: 25,
                            className: "relative w-[2.31rem] h-[2.31rem] shrink-0 cursor-pointer",
                            alt: "",
                            loading: "lazy",
                            src: "/frame1.svg",
                            onClick: onFrameIcon1Click
                        })
                    }),
                    recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        width: 55,
                        height: 55,
                        className: "relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover",
                        alt: "",
                        loading: "lazy",
                        src: recipient?.photoURL
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        width: 55,
                        height: 55,
                        className: "relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover",
                        alt: "",
                        loading: "lazy",
                        src: `https://res.cloudinary.com/dfk5jbk5r/image/upload/v1678095426/ChatFlame/Vector_10_ulkc6j.svg`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 flex flex-col p-[0.63rem] items-start justify-center gap-[0.63rem]",
                        children: [
                            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative font-medium",
                                children: recipient?.name
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative font-medium",
                                children: recipientEmail
                            }),
                            recipient ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "m-0 relative text-[0.75rem] text-gray-200",
                                children: [
                                    "last seen",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        format: "LT",
                                        children: recipient?.lastSeen?.toDate()
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative text-[0.75rem] text-gray-200",
                                children: "last seen: unavailable"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " flex flex-col p-[0.63rem] items-center justify-center cursor-pointer",
                        onClick: openFrameContainer18,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            width: 24,
                            height: 24,
                            className: "relative w-[1.5rem] h-[1.5rem] shrink-0 ",
                            alt: "",
                            loading: "lazy",
                            src: "/frame11.svg"
                        })
                    })
                ]
            }),
            isFrameContainer18Open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portal_popup__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                overlayColor: "rgba(113, 113, 113, 0.3)",
                placement: "Top right",
                onOutsideClick: closeFrameContainer18,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RecipientContact__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    onClose: closeFrameContainer18,
                    recipient: recipient,
                    recipientEmail: recipientEmail
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2356);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emoji_mart_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9390);
/* harmony import */ var _emoji_mart_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emoji_mart_react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// import data from '@emoji-mart/data'

const InputMessage = ({ ScrollToBottom  })=>{
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const { 0: showEmojis , 1: setShowEmojis  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const addEmoji = (e)=>{
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el)=>codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };
    const sendMessage = async (e)=>{
        // console.log("sending message");
        e.preventDefault();
        // update the last seen
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "users", user.uid), {
            lastSeen: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.serverTimestamp)()
        }, {
            merge: true
        });
        // add the message to the db
        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "chats", router.query.id), "messages"), {
            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.serverTimestamp)(),
            message: input,
            messageImage: image,
            user: user.email,
            photoURL: user.photoURL
        });
        setInput("");
        setImage(null);
        ScrollToBottom();
    };
    const handleUploadImage = (e)=>{
        // console.log(e.target.files[0]);
        const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("upload_preset", "ugfxe2q8");
        data.append("cloud_name", "dfk5jbk5r");
        fetch("https://api.cloudinary.com/v1_1/dfk5jbk5r/image/upload", {
            method: "post",
            body: data
        }).then((resp)=>resp.json()).then((data)=>{
            setImage(data.url);
        }).catch((err)=>console.log(err));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "self-stretch rounded-xxs bg-seagreen-100 flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        className: "[border:none] outline-none font-rubik text-[0.75rem] bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start",
                        type: "text",
                        placeholder: "Your Message"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            onClick: ()=>setImage(null),
                            src: image,
                            width: 50,
                            height: 40,
                            className: "rounded-md cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " flex flex-row items-center justify-center gap-[0.63rem]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                onClick: ()=>setShowEmojis(!showEmojis),
                                width: 20,
                                height: 20,
                                className: "relative w-[1.25rem] h-[1.25rem] shrink-0 ",
                                alt: "",
                                loading: "lazy",
                                src: "/frame12.svg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "file",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    width: 20,
                                    height: 20,
                                    className: "relative w-[1.25rem] h-[1.25rem] shrink-0 ",
                                    alt: "",
                                    loading: "lazy",
                                    src: "/frame13.svg"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "file",
                                type: "file",
                                onChange: handleUploadImage,
                                className: "hidden"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-transparent outline-none border-none ",
                                disabled: !input,
                                type: "submit",
                                onClick: sendMessage,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    width: 24,
                                    height: 24,
                                    className: "relative w-[1.5rem] h-[1.5rem] shrink-0 ",
                                    alt: "",
                                    loading: "lazy",
                                    src: "/frame14.svg"
                                })
                            })
                        ]
                    })
                ]
            }),
            showEmojis && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-20 right-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_emoji_mart_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                    onEmojiSelect: addEmoji,
                    theme: "light"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputMessage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6063:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4683);
/* harmony import */ var _components_received_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(662);
/* harmony import */ var _components_sent_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3607);
/* harmony import */ var _components_input_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5212);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2356);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_header__WEBPACK_IMPORTED_MODULE_1__, _components_input_message__WEBPACK_IMPORTED_MODULE_4__, _firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_components_header__WEBPACK_IMPORTED_MODULE_1__, _components_input_message__WEBPACK_IMPORTED_MODULE_4__, _firebase__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Messages = ({ chat , messages  })=>{
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const endOfMessagesRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null);
    const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "chats", router.query.id), "messages"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.orderBy)("timestamp", "asc"));
    const [messagesSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useCollection)(messagesRef);
    // console.log("messages", messagesSnapshot);
    // scroll to bottom
    const ScrollToBottom = ()=>{
        endOfMessagesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    const showMessages = ()=>{
        if (messagesSnapshot) {
            return messagesSnapshot.docs.map((message)=>{
                if (message.data().user === user.email) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sent_message__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        message: {
                            ...message.data(),
                            timestamp: message.data().timestamp?.toDate().getTime()
                        }
                    }, message.id);
                } else {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_received_message__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        message: {
                            ...message.data(),
                            timestamp: message.data().timestamp?.toDate().getTime()
                        }
                    }, message.id);
                }
            });
        } else {
            return JSON.parse(messages).map((message)=>{
                if (message.user === user.email) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sent_message__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        message: message
                    }, message.id);
                } else {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_received_message__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        message: message
                    }, message.id);
                }
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-screen self-stretch flex-1 bg-beige overflow-y-scroll flex flex-col items-start justify-start text-left text-[1rem] text-black font-rubik",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                chatUsers: chat?.users
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-full relative self-stretch flex-1 overflow-y-scroll flex flex-col px-[0.94rem] pb-[0.94rem] items-start justify-start text-[0.75rem] text-gray-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: endOfMessagesRef,
                        className: "self-stretch flex-1 overflow-y-scroll flex flex-col items-start justify-start gap-[0.63rem]",
                        children: showMessages()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input_message__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        ScrollToBottom: ScrollToBottom
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);



const ReceivedMessage = ({ message  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "self-stretch flex flex-row py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem] text-left text-[0.75rem] text-gray-100 font-rubik",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 35,
                height: 35,
                className: "relative rounded-base w-[2.19rem] h-[2.19rem] shrink-0 object-cover",
                alt: "",
                src: message?.photoURL
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex flex-col items-start justify-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "self-stretch flex flex-row py-[0.63rem] px-[0.25rem] items-center justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-0 relative text-[0.63rem] text-gray-200",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
                                format: "h:mm A",
                                children: message?.timestamp
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-tl-none rounded-tr-lg rounded-b-lg bg-seagreen-200 flex flex-col p-[0.63rem] items-start justify-start text-[14px] text-darkolivegreen",
                        children: [
                            message?.messageImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-5 w-80 h-80 relative rounded-lg ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: "rounded-lg shrink-0 object-cover",
                                    alt: "",
                                    src: message?.messageImage
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative",
                                children: message?.message
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceivedMessage);


/***/ }),

/***/ 3607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);



const SentMessage = ({ message  })=>{
    // console.log("message1", message);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "self-stretch flex flex-row py-[0.63rem] px-[0rem] items-start justify-end gap-[0.63rem] text-left text-[0.63rem] text-gray-200 font-rubik",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex flex-col items-start justify-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "self-stretch flex flex-row py-[0.63rem] px-[0.25rem] items-center justify-between",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-0 relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
                                format: "h:mm A",
                                children: message?.timestamp
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-tl-lg rounded-tr-none rounded-b-lg bg-darkolivegreen flex flex-col p-[0.63rem] items-start text-[14px] justify-start text-white",
                        children: [
                            message?.messageImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-5 w-80 h-80 relative rounded-lg ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: "rounded-lg shrink-0 object-cover",
                                    alt: "",
                                    src: message?.messageImage
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "m-0 relative",
                                children: message?.message
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 35,
                height: 35,
                className: "relative rounded-base w-[2.19rem] h-[2.19rem] shrink-0 object-cover",
                alt: "",
                loading: "lazy",
                src: message?.photoURL
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SentMessage);


/***/ }),

/***/ 7986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_side_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4661);
/* harmony import */ var _components_ListBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6315);
/* harmony import */ var _components_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6063);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2356);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_side_bar__WEBPACK_IMPORTED_MODULE_3__, _components_ListBar__WEBPACK_IMPORTED_MODULE_4__, _components_messages__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_components_side_bar__WEBPACK_IMPORTED_MODULE_3__, _components_ListBar__WEBPACK_IMPORTED_MODULE_4__, _components_messages__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Desktop1 = ({ messages , chat  })=>{
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // console.log("messages", messages);
    // console.log("chats", chat);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "max-w-[110rem] mx-auto bg-white w-full max-h-screen flex flex-row items-start justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "ChatFlame"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_side_bar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ListBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                w: "hid"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_messages__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                chat: chat,
                messages: messages
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop1);
async function getServerSideProps(context) {
    // fetch the messages on the server with the id
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "chats", context.query.id);
    const messagesRes = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(ref, "messages"));
    const messages = messagesRes.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        })).map((messages)=>({
            ...messages,
            timestamp: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getTime)(messages.timestamp.toDate())
        }));
    const chatRes = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(ref);
    const chat = {
        id: chatRes.id,
        ...chatRes.data()
    };
    // console.log("messages", messages);
    // console.log("chat", chat);
    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9390:
/***/ ((module) => {

module.exports = require("@emoji-mart/react");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 1072:
/***/ ((module) => {

module.exports = require("email-validator");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 830:
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 8829:
/***/ ((module) => {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-moment");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,356,68,315], () => (__webpack_exec__(7986)));
module.exports = __webpack_exports__;

})();