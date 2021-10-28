"use strict";
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./pages/user/dashboard.js":
/*!*********************************!*\
  !*** ./pages/user/dashboard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/routes/UserRoute */ "./components/routes/UserRoute.js");
/* harmony import */ var _components_forms_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/forms/PostForm */ "./components/forms/PostForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_cards_PostList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/cards/PostList */ "./components/cards/PostList.js");
/* harmony import */ var _components_cards_People__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/cards/People */ "./components/cards/People.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Gavin\\Web Dev\\Udemy\\MERN Stack\\client\\pages\\user\\dashboard.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var Home = function Home() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.UserContext),
      state = _useContext[0],
      setState = _useContext[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      content = _useState[0],
      setContent = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      uploading = _useState3[0],
      setUploading = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      posts = _useState4[0],
      setPosts = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      people = _useState5[0],
      setPeople = _useState5[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (state && state.token) {
      newsFeed();
      findPeople();
    }
  }, [state && state.token]);

  var newsFeed = /*#__PURE__*/function () {
    var _ref = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _yield$axios$get, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().get('/news-feed');

            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              setPosts(data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function newsFeed() {
      return _ref.apply(this, arguments);
    };
  }();

  var findPeople = /*#__PURE__*/function () {
    var _ref2 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var _yield$axios$get2, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().get('/find-people');

            case 3:
              _yield$axios$get2 = _context2.sent;
              data = _yield$axios$get2.data;
              setPeople(data);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function findPeople() {
      return _ref2.apply(this, arguments);
    };
  }();

  var postSubmit = /*#__PURE__*/function () {
    var _ref3 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(e) {
      var _yield$axios$post, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              _context3.prev = 1;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().post('/create-post', {
                content: content,
                image: image
              });

            case 4:
              _yield$axios$post = _context3.sent;
              data = _yield$axios$post.data;

              if (data.error) {
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(data.error);
              } else {
                newsFeed();
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Post created");
                setContent('');
                setImage({});
              }

              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    return function postSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleImage = /*#__PURE__*/function () {
    var _ref4 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(e) {
      var file, formData, _yield$axios$post2, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              file = e.target.files[0];
              formData = new FormData();
              formData.append('image', file);
              setUploading(true);
              _context4.prev = 4;
              _context4.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().post('/upload-image', formData);

            case 7:
              _yield$axios$post2 = _context4.sent;
              data = _yield$axios$post2.data;
              setImage({
                url: data.url,
                public_id: data.public_id
              });
              setUploading(false);
              _context4.next = 17;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](4);
              console.log(_context4.t0);
              setUploading(false);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[4, 13]]);
    }));

    return function handleImage(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleDelete = /*#__PURE__*/function () {
    var _ref5 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(post) {
      var answer, _yield$axios$delete, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              answer = window.confirm('Are you sure?');

              if (answer) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return");

            case 4:
              _context5.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().delete("/delete-post/".concat(post._id));

            case 6:
              _yield$axios$delete = _context5.sent;
              data = _yield$axios$delete.data;
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error('Post deleted');
              newsFeed();
              _context5.next = 15;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 12]]);
    }));

    return function handleDelete(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleFollow = /*#__PURE__*/function () {
    var _ref6 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(user) {
      var _yield$axios$put, data, auth, filtered;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().put('/user-follow', {
                _id: user._id
              });

            case 3:
              _yield$axios$put = _context6.sent;
              data = _yield$axios$put.data;
              auth = JSON.parse(localStorage.getItem('auth'));
              auth.user = data;
              localStorage.setItem('auth', JSON.stringify(auth));
              setState(_objectSpread(_objectSpread({}, state), {}, {
                user: data
              }));
              filtered = people.filter(function (p) {
                return p._id !== user._id;
              });
              setPeople(filtered);
              newsFeed();
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Following ".concat(user.name));
              _context6.next = 18;
              break;

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](0);
              console.log(_context6.t0);

            case 18:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 15]]);
    }));

    return function handleFollow(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleLike = /*#__PURE__*/function () {
    var _ref7 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7(_id) {
      var _yield$axios$put2, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().put('/like-post', {
                _id: _id
              });

            case 3:
              _yield$axios$put2 = _context7.sent;
              data = _yield$axios$put2.data;
              console.log("Liked: ", data);
              _context7.next = 11;
              break;

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              console.log(_context7.t0);

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 8]]);
    }));

    return function handleLike(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleUnlike = /*#__PURE__*/function () {
    var _ref8 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8(_id) {
      var _yield$axios$put3, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().put('/unlike-post', {
                _id: _id
              });

            case 3:
              _yield$axios$put3 = _context8.sent;
              data = _yield$axios$put3.data;
              console.log("Unliked: ", data);
              _context8.next = 11;
              break;

            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8["catch"](0);
              console.log(_context8.t0);

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 8]]);
    }));

    return function handleUnlike(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "row py-5 text-light bg-default-image",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "col text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h1", {
            children: "News Feed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "row py-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "col-md-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_forms_PostForm__WEBPACK_IMPORTED_MODULE_6__.default, {
            content: content,
            setContent: setContent,
            postSubmit: postSubmit,
            handleImage: handleImage,
            uploading: uploading,
            image: image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_cards_PostList__WEBPACK_IMPORTED_MODULE_10__.default, {
            handleLike: handleLike,
            handleUnlike: handleUnlike,
            posts: posts,
            handleDelete: handleDelete
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "col-md-4",
          children: [state && state.user && state.user.following && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
            href: "/user/following",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
              className: "h6",
              children: ["Following ", state.user.following.length]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_cards_People__WEBPACK_IMPORTED_MODULE_11__.default, {
            people: people,
            handleFollow: handleFollow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }, _this);
};

_s(Home, "Pg6BRQEEh33Xzx5Srww17yXuoKg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9kYXNoYm9hcmQuZDBmMDBkNTNhZjIxMjIyMjkwODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1ZLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixvQkFBMEJaLGlEQUFVLENBQUNHLGlEQUFELENBQXBDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0Esa0JBQThCYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFPYyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUEwQmYsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2dCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFrQ2pCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9rQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUEwQm5CLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9vQixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBNEJyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPc0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHbkIsc0RBQVMsRUFBeEI7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1csS0FBSyxJQUFJQSxLQUFLLENBQUNhLEtBQWxCLEVBQXlCO0FBQ3JCQyxNQUFBQSxRQUFRO0FBQ1JDLE1BQUFBLFVBQVU7QUFDYjtBQUNKLEdBTFEsRUFLTixDQUFDZixLQUFLLElBQUlBLEtBQUssQ0FBQ2EsS0FBaEIsQ0FMTSxDQUFUOztBQU9BLE1BQU1DLFFBQVE7QUFBQSxpU0FBRztB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MUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFjSTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLHFCQUNLbkMsS0FBSyxJQUFJQSxLQUFLLENBQUN5QyxJQUFmLElBQXVCekMsS0FBSyxDQUFDeUMsSUFBTixDQUFXZSxTQUFsQyxpQkFDRywrREFBQyxtREFBRDtBQUFNLGdCQUFJLG1CQUFWO0FBQUEsbUNBQ0k7QUFBRyx1QkFBUyxFQUFDLElBQWI7QUFBQSx1Q0FBOEJ4RCxLQUFLLENBQUN5QyxJQUFOLENBQVdlLFNBQVgsQ0FBcUJDLE1BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlIsZUFNSSwrREFBQyw4REFBRDtBQUFRLGtCQUFNLEVBQUUvQyxNQUFoQjtBQUF3Qix3QkFBWSxFQUFFOEI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0NILENBeEpEOztHQUFNekM7VUFPYU47OztLQVBiTTtBQTBKTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2Rhc2hib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xyXG5pbXBvcnQgVXNlclJvdXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcm91dGVzL1VzZXJSb3V0ZSc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1Bvc3RGb3JtJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUG9zdExpc3QnO1xyXG5pbXBvcnQgUGVvcGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUGVvcGxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFt1cGxvYWRpbmcsIHNldFVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHN0YXRlICYmIHN0YXRlLnRva2VuKSB7XHJcbiAgICAgICAgICAgIG5ld3NGZWVkKCk7XHJcbiAgICAgICAgICAgIGZpbmRQZW9wbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc3RhdGUgJiYgc3RhdGUudG9rZW5dKTtcclxuXHJcbiAgICBjb25zdCBuZXdzRmVlZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL25ld3MtZmVlZCcpO1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhkYXRhKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaW5kUGVvcGxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvZmluZC1wZW9wbGUnKTtcclxuICAgICAgICAgICAgc2V0UGVvcGxlKGRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBvc3RTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2NyZWF0ZS1wb3N0JywgeyBjb250ZW50LCBpbWFnZSB9KTtcclxuICAgICAgICAgICAgaWYoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdzRmVlZCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlBvc3QgY3JlYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHNldENvbnRlbnQoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0SW1hZ2Uoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbWFnZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZSk7XHJcbiAgICAgICAgc2V0VXBsb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy91cGxvYWQtaW1hZ2UnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIHNldEltYWdlKHtcclxuICAgICAgICAgICAgICAgIHVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWNfaWQ6IGRhdGEucHVibGljX2lkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHBvc3QpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhbnN3ZXIgPSAgd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZT8nKTtcclxuICAgICAgICAgICAgaWYoIWFuc3dlcikgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL2RlbGV0ZS1wb3N0LyR7cG9zdC5faWR9YCk7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdQb3N0IGRlbGV0ZWQnKTtcclxuICAgICAgICAgICAgbmV3c0ZlZWQoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb2xsb3cgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KCcvdXNlci1mb2xsb3cnLCB7IF9pZDogdXNlci5faWQgfSk7XHJcbiAgICAgICAgICAgIGxldCBhdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcclxuICAgICAgICAgICAgYXV0aC51c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoKSk7XHJcblxyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIHVzZXI6IGRhdGF9KTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gcGVvcGxlLmZpbHRlcigocCkgPT4gKHAuX2lkICE9PSB1c2VyLl9pZCkpO1xyXG4gICAgICAgICAgICBzZXRQZW9wbGUoZmlsdGVyZWQpO1xyXG4gICAgICAgICAgICBuZXdzRmVlZCgpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKGBGb2xsb3dpbmcgJHt1c2VyLm5hbWV9YCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTGlrZSA9IGFzeW5jIChfaWQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnB1dCgnL2xpa2UtcG9zdCcsIHsgX2lkIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpa2VkOiBcIiwgZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVW5saWtlID0gYXN5bmMgKF9pZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KCcvdW5saWtlLXBvc3QnLCB7IF9pZCB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmxpa2VkOiBcIiwgZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VXNlclJvdXRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBweS01IHRleHQtbGlnaHQgYmctZGVmYXVsdC1pbWFnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5OZXdzIEZlZWQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50PXtzZXRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFN1Ym1pdD17cG9zdFN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUltYWdlPXtoYW5kbGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZGluZz17dXBsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMaXN0IGhhbmRsZUxpa2U9e2hhbmRsZUxpa2V9IGhhbmRsZVVubGlrZT17aGFuZGxlVW5saWtlfSBwb3N0cz17cG9zdHN9IGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIuZm9sbG93aW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci9mb2xsb3dpbmdgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoNlwiPkZvbGxvd2luZyB7IHN0YXRlLnVzZXIuZm9sbG93aW5nLmxlbmd0aCB9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGVvcGxlIHBlb3BsZT17cGVvcGxlfSBoYW5kbGVGb2xsb3c9e2hhbmRsZUZvbGxvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1VzZXJSb3V0ZT4gICAgICAgIFxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiVXNlclJvdXRlIiwiUG9zdEZvcm0iLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInRvYXN0IiwiUG9zdExpc3QiLCJQZW9wbGUiLCJMaW5rIiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImltYWdlIiwic2V0SW1hZ2UiLCJ1cGxvYWRpbmciLCJzZXRVcGxvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwicGVvcGxlIiwic2V0UGVvcGxlIiwicm91dGVyIiwidG9rZW4iLCJuZXdzRmVlZCIsImZpbmRQZW9wbGUiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBvc3RTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZXJyb3IiLCJzdWNjZXNzIiwiaGFuZGxlSW1hZ2UiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXJsIiwicHVibGljX2lkIiwiaGFuZGxlRGVsZXRlIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsIl9pZCIsImhhbmRsZUZvbGxvdyIsInVzZXIiLCJwdXQiLCJhdXRoIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZCIsImZpbHRlciIsInAiLCJuYW1lIiwiaGFuZGxlTGlrZSIsImhhbmRsZVVubGlrZSIsImZvbGxvd2luZyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=