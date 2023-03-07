"use strict";
exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 8524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1072);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2356);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__]);
([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AddFriend = ({ onClose  })=>{
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "chats"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)("users", "array-contains", user.email));
    const [chatsSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection)(q);
    // console.log("chatsSnapshot", chatsSnapshot);
    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const createChat = async ()=>{
        // console.log("Creating a chat with ", input);
        if (!input) return;
        if (email_validator__WEBPACK_IMPORTED_MODULE_2__.validate(input) && input !== user.email && !chatsSnapshot?.docs.find((chat)=>chat.data().users.find((user)=>user === input)?.length > 0)) {
            // We need to add the chat into the DB 'chats' collection
            const chat = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "chats"), {
                users: [
                    user.email,
                    input
                ]
            }).then(()=>{
                setInput("");
                onClose();
            });
        // console.log("chat should be created");
        } else {
            // console.log("chat no need to be created");
            setError(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative rounded-3xl bg-beige w-[43.75rem] flex flex-col p-[1.25rem] box-border items-start justify-start gap-[0.63rem] max-w-full max-h-full text-left text-[1.5rem] text-darkolivegreen font-rubik",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "self-stretch flex flex-row p-[1.25rem] items-center justify-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0 relative font-medium",
                    children: "Add Person"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "self-stretch flex flex-row py-[0rem] px-[1.25rem] items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    onChange: (e)=>setInput(e.target.value),
                    value: input,
                    className: `${error ? "border-2 border-solid border-red-500" : "[border:none]"} outline-none font-rubik text-[1.25rem] bg-seagreen-200 flex-1 rounded-xxs   flex flex-row py-[1.25rem] px-[1.25rem] items-center justify-start`,
                    type: "text",
                    placeholder: "Enter Email"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "self-stretch flex flex-row py-[1.25rem] px-[10.75rem] items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: createChat,
                    className: "cursor-pointer [border:none] p-0 bg-darkolivegreen rounded-xxs w-[8rem] h-[3.4rem] shrink-0 flex flex-row items-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative text-[1.1rem] font-medium font-rubik text-white text-left",
                        children: "Add"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddFriend);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7896);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2356);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__]);
([_firebase__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Chat = ({ users , id  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I);
    // console.log("users", users);
    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, "users"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)("email", "==", (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(users, user)));
    const [recipientSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection)(q);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(users, user);
    // get recipient data from firestore v9
    // console.log("recipient", recipient?.lastSeen?.toDate());
    const enterChat = ()=>{
        router.push(`/chat/${id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: enterChat,
        className: `self-stretch   flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem] border-b-[1px] border-0 border-solid border-seagreen-200 ${router.query.id === id ? "bg-beige" : ""}  hover:bg-beige cursor-pointer`,
        children: [
            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 55,
                height: 55,
                className: "relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover",
                alt: "",
                loading: "lazy",
                src: recipient?.photoURL
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: 55,
                height: 55,
                className: "relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover",
                alt: "",
                loading: "lazy",
                src: `https://res.cloudinary.com/dfk5jbk5r/image/upload/v1678095426/ChatFlame/Vector_10_ulkc6j.svg`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "self-stretch flex-1 flex flex-col items-start justify-center gap-[0.63rem]",
                children: [
                    recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 relative font-medium",
                        children: recipient?.name
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 relative font-medium",
                        children: recipientEmail
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 relative text-[0.75rem] text-gray-200",
                        children: recipient?.about
                    })
                ]
            }),
            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "self-stretch flex flex-row items-start justify-end text-[0.75rem] text-gray-200",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0 relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_7___default()), {
                        format: "LT",
                        children: recipient?.lastSeen?.toDate()
                    })
                })
            }) : ""
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddFriend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8524);
/* harmony import */ var _portal_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6801);
/* harmony import */ var _friends_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7553);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2356);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddFriend__WEBPACK_IMPORTED_MODULE_3__, _friends_list__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__]);
([_AddFriend__WEBPACK_IMPORTED_MODULE_3__, _friends_list__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ListBar = ({ w  })=>{
    const { 0: isFrameContainer3Open , 1: setFrameContainer3Open  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: chats , 1: setChats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I);
    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "chats"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)("users", "array-contains", user.email));
    const [chatsSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useCollection)(q);
    // console.log("chatsSnapshot", chatsSnapshot?.docs);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (chatsSnapshot?.docs) {
            setChats(chatsSnapshot.docs);
        }
    }, [
        chatsSnapshot
    ]);
    const onCLick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        router.push("/profile");
    }, [
        router
    ]);
    const openFrameContainer3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setFrameContainer3Open(true);
    }, []);
    const closeFrameContainer3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setFrameContainer3Open(false);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${w === "full" ? "w-full lg:w-fit" : ""} ${w === "hid" ? "w-0 hidden lg:flex lg:w-fit" : ""} self-stretch max-h-screen bg-white flex flex-col py-[0.63rem] px-[0rem] items-center justify-start gap-[0.63rem] text-left text-[2rem] text-gray-100 font-rubik  border-r-[1px] border-0 border-solid border-seagreen-200`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col w-full items-center justify-center gap-[0.13rem]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "self-stretch flex flex-row p-[0.94rem] items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "block md:hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            width: 50,
                                            height: 50,
                                            onClick: onCLick,
                                            className: "relative w-[3.13rem] h-[3.31rem] shrink-0 ",
                                            alt: "",
                                            loading: "lazy",
                                            src: "/untitled-design-65-adobe-express-14.svg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "m-0 relative",
                                        children: "Messages"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        width: 20,
                                        height: 20,
                                        className: "relative w-[1.75rem] h-[1.75rem] shrink-0 cursor-pointer",
                                        alt: "",
                                        loading: "lazy",
                                        src: "/frame9.svg",
                                        onClick: openFrameContainer3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "self-stretch flex flex-row py-[0rem] px-[0.94rem] items-start justify-start",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "rounded-xxs bg-seagreen-100 min-w-[23.13rem] shrink-0 flex flex-row py-[1.25rem] px-[0.63rem] box-border items-center justify-start gap-[0.63rem]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            width: 20,
                                            height: 20,
                                            className: "relative w-[1.25rem] h-[1.25rem] shrink-0 ",
                                            alt: "",
                                            loading: "lazy",
                                            src: "/frame10.svg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: "[border:none] outline-none font-rubik text-[0.88rem] bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start",
                                            type: "text",
                                            disabled: true,
                                            placeholder: "Coming Soon"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_friends_list__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        chats: chats,
                        userLoggedIn: user
                    })
                ]
            }),
            isFrameContainer3Open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_portal_popup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                overlayColor: "rgba(113, 113, 113, 0.3)",
                placement: "Centered",
                onOutsideClick: closeFrameContainer3,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddFriend__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    onClose: closeFrameContainer3
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7553:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Chat__WEBPACK_IMPORTED_MODULE_3__]);
_Chat__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FriendsList = ({ propBackgroundColor , onFrameContainer11Click , chats , messages  })=>{
    const frameDiv1Style = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return {
            backgroundColor: propBackgroundColor
        };
    }, [
        propBackgroundColor
    ]);
    // console.log("chats", chats);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "self-stretch flex-1 overflow-y-scroll flex flex-col items-start justify-start text-left text-[1rem] text-gray-100 font-rubik",
        children: chats?.map((chat)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chat__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: chat.id,
                users: chat.data().users
            }, chat.id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FriendsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getRecipientEmail = (users, userLoggedIn)=>users?.filter((userToFilter)=>userToFilter !== userLoggedIn?.email)[0];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRecipientEmail);


/***/ })

};
;