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
              _context7.next = 10;
              break;

            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              console.log(_context7.t0);

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 7]]);
    }));

    return function handleLike(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleUnlike = /*#__PURE__*/function () {
    var _ref8 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8(_id) {
      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              try {} catch (e) {
                console.log(e);
              }

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
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
            lineNumber: 133,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
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
            lineNumber: 138,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_cards_PostList__WEBPACK_IMPORTED_MODULE_10__.default, {
            handleLike: handleLike,
            handleUnlike: handleUnlike,
            posts: posts,
            handleDelete: handleDelete
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
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
              lineNumber: 153,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_cards_People__WEBPACK_IMPORTED_MODULE_11__.default, {
            people: people,
            handleFollow: handleFollow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9kYXNoYm9hcmQuNjA2NzRjYzAyNmI1ODU5OGRjMzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1ZLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixvQkFBMEJaLGlEQUFVLENBQUNHLGlEQUFELENBQXBDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0Esa0JBQThCYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFPYyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUEwQmYsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2dCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFrQ2pCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9rQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUEwQm5CLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9vQixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBNEJyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPc0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHbkIsc0RBQVMsRUFBeEI7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1csS0FBSyxJQUFJQSxLQUFLLENBQUNhLEtBQWxCLEVBQXlCO0FBQ3JCQyxNQUFBQSxRQUFRO0FBQ1JDLE1BQUFBLFVBQVU7QUFDYjtBQUNKLEdBTFEsRUFLTixDQUFDZixLQUFLLElBQUlBLEtBQUssQ0FBQ2EsS0FBaEIsQ0FMTSxDQUFUOztBQU9BLE1BQU1DLFFBQVE7QUFBQSxpU0FBRztB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QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsSUFBYjtBQUFBLHVDQUE4QnhELEtBQUssQ0FBQ3lDLElBQU4sQ0FBV2UsU0FBWCxDQUFxQkMsTUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGUixlQU1JLCtEQUFDLDhEQUFEO0FBQVEsa0JBQU0sRUFBRS9DLE1BQWhCO0FBQXdCLHdCQUFZLEVBQUU4QjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQ0gsQ0F0SkQ7O0dBQU16QztVQU9hTjs7O0tBUGJNO0FBd0pOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvZGFzaGJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XHJcbmltcG9ydCBVc2VyUm91dGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvVXNlclJvdXRlJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYXJkcy9Qb3N0TGlzdCc7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYXJkcy9QZW9wbGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3VwbG9hZGluZywgc2V0VXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdGUgJiYgc3RhdGUudG9rZW4pIHtcclxuICAgICAgICAgICAgbmV3c0ZlZWQoKTtcclxuICAgICAgICAgICAgZmluZFBlb3BsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdGF0ZSAmJiBzdGF0ZS50b2tlbl0pO1xyXG5cclxuICAgIGNvbnN0IG5ld3NGZWVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvbmV3cy1mZWVkJyk7XHJcbiAgICAgICAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbmRQZW9wbGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9maW5kLXBlb3BsZScpO1xyXG4gICAgICAgICAgICBzZXRQZW9wbGUoZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcG9zdFN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvY3JlYXRlLXBvc3QnLCB7IGNvbnRlbnQsIGltYWdlIH0pO1xyXG4gICAgICAgICAgICBpZihkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld3NGZWVkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUG9zdCBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudCgnJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRJbWFnZSh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUltYWdlID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcclxuICAgICAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL3VwbG9hZC1pbWFnZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgc2V0SW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgIHB1YmxpY19pZDogZGF0YS5wdWJsaWNfaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocG9zdCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlciA9ICB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlPycpO1xyXG4gICAgICAgICAgICBpZighYW5zd2VyKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAvZGVsZXRlLXBvc3QvJHtwb3N0Ll9pZH1gKTtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1Bvc3QgZGVsZXRlZCcpO1xyXG4gICAgICAgICAgICBuZXdzRmVlZCgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvbGxvdyA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wdXQoJy91c2VyLWZvbGxvdycsIHsgX2lkOiB1c2VyLl9pZCB9KTtcclxuICAgICAgICAgICAgbGV0IGF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xyXG4gICAgICAgICAgICBhdXRoLnVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGgpKTtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgdXNlcjogZGF0YX0pO1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBwZW9wbGUuZmlsdGVyKChwKSA9PiAocC5faWQgIT09IHVzZXIuX2lkKSk7XHJcbiAgICAgICAgICAgIHNldFBlb3BsZShmaWx0ZXJlZCk7XHJcbiAgICAgICAgICAgIG5ld3NGZWVkKCk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoYEZvbGxvd2luZyAke3VzZXIubmFtZX1gKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMaWtlID0gYXN5bmMgKF9pZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KCcvbGlrZS1wb3N0JywgeyBfaWQgfSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVW5saWtlID0gYXN5bmMgKF9pZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJSb3V0ZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcHktNSB0ZXh0LWxpZ2h0IGJnLWRlZmF1bHQtaW1hZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TmV3cyBGZWVkPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudD17c2V0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RTdWJtaXQ9e3Bvc3RTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbWFnZT17aGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRpbmc9e3VwbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TGlzdCBoYW5kbGVMaWtlPXtoYW5kbGVMaWtlfSBoYW5kbGVVbmxpa2U9e2hhbmRsZVVubGlrZX0gcG9zdHM9e3Bvc3RzfSBoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUgJiYgc3RhdGUudXNlciAmJiBzdGF0ZS51c2VyLmZvbGxvd2luZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvZm9sbG93aW5nYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaDZcIj5Gb2xsb3dpbmcgeyBzdGF0ZS51c2VyLmZvbGxvd2luZy5sZW5ndGggfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBlb3BsZSBwZW9wbGU9e3Blb3BsZX0gaGFuZGxlRm9sbG93PXtoYW5kbGVGb2xsb3d9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Vc2VyUm91dGU+ICAgICAgICBcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIlVzZXJSb3V0ZSIsIlBvc3RGb3JtIiwidXNlUm91dGVyIiwiYXhpb3MiLCJ0b2FzdCIsIlBvc3RMaXN0IiwiUGVvcGxlIiwiTGluayIsIkhvbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpbWFnZSIsInNldEltYWdlIiwidXBsb2FkaW5nIiwic2V0VXBsb2FkaW5nIiwicG9zdHMiLCJzZXRQb3N0cyIsInBlb3BsZSIsInNldFBlb3BsZSIsInJvdXRlciIsInRva2VuIiwibmV3c0ZlZWQiLCJmaW5kUGVvcGxlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0U3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImVycm9yIiwic3VjY2VzcyIsImhhbmRsZUltYWdlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsInB1YmxpY19pZCIsImhhbmRsZURlbGV0ZSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJfaWQiLCJoYW5kbGVGb2xsb3ciLCJ1c2VyIiwicHV0IiwiYXV0aCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJwIiwibmFtZSIsImhhbmRsZUxpa2UiLCJoYW5kbGVVbmxpa2UiLCJmb2xsb3dpbmciLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9