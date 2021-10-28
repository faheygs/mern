"use strict";
self["webpackHotUpdate_N_E"]("pages/user/following",{

/***/ "./pages/user/following.js":
/*!*********************************!*\
  !*** ./pages/user/following.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Gavin\\Web Dev\\Udemy\\MERN Stack\\client\\pages\\user\\following.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var Following = function Following() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_6__.UserContext),
      state = _useContext[0],
      setState = _useContext[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      people = _useState[0],
      setPeople = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (state && state.token) {
      fetchFollowing();
    }
  }, [state && state.token]);

  var fetchFollowing = /*#__PURE__*/function () {
    var _ref = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _yield$axios$get, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get('/user-following');

            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              setPeople(data);
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

    return function fetchFollowing() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleUnfollow = /*#__PURE__*/function () {
    var _ref2 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(user) {
      var _yield$axios$put, data, auth, filtered;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().put('/user-unfollow', {
                _id: user._id
              });

            case 3:
              _yield$axios$put = _context2.sent;
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
              toast.success("Unfollowed ".concat(user.name));
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function handleUnfollow(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "row col-md-6 offset-md-3",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.List, {
      itemLayout: "horizontal",
      dataSource: people,
      renderItem: function renderItem(user) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.List.Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.List.Item.Meta, {
            avatar: user.image ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Avatar, {
              src: user.image.url
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Avatar, {
              children: user.username[0].toUpperCase()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 90
            }, _this),
            title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "d-flex justify-content-between",
              children: [user.username, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                onClick: function onClick() {
                  return handleUnfollow(user);
                },
                className: "text-primary pointer",
                children: "Unfollow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 96
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 32
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
      href: "/user/dashboard",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
        className: "d-flex justify-content-center pt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.RollbackOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, _this);
};

_s(Following, "O2aD9Lhuv+JI6lLrMVmvuW0IvgE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = Following;
/* harmony default export */ __webpack_exports__["default"] = (Following);

var _c;

$RefreshReg$(_c, "Following");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9mb2xsb3dpbmcuNDEwYzA3NGViN2ExYWNkNDNmNzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLG9CQUEwQlgsaURBQVUsQ0FBQ08saURBQUQsQ0FBcEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxrQkFBNEJaLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9hLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1UsS0FBSyxJQUFJQSxLQUFLLENBQUNLLEtBQWxCLEVBQXlCO0FBQ3JCQyxNQUFBQSxjQUFjO0FBQ2pCO0FBQ0osR0FKUSxFQUlOLENBQUNOLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxLQUFoQixDQUpNLENBQVQ7O0FBTUEsTUFBTUMsY0FBYztBQUFBLGlTQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVFWLGdEQUFBLENBQVUsaUJBQVYsQ0FGUjs7QUFBQTtBQUFBO0FBRVBZLGNBQUFBLElBRk8sb0JBRVBBLElBRk87QUFHZkwsY0FBQUEsU0FBUyxDQUFDSyxJQUFELENBQVQ7QUFIZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtmQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBTGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEosY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFTQSxNQUFNSyxjQUFjO0FBQUEsa1NBQUcsa0JBQU9D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b2xsb3dpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIExpc3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBSb2xsYmFja091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEZvbGxvd2luZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbcGVvcGxlLCBzZXRQZW9wbGVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihzdGF0ZSAmJiBzdGF0ZS50b2tlbikge1xyXG4gICAgICAgICAgICBmZXRjaEZvbGxvd2luZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdGF0ZSAmJiBzdGF0ZS50b2tlbl0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRm9sbG93aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvdXNlci1mb2xsb3dpbmcnKTtcclxuICAgICAgICAgICAgc2V0UGVvcGxlKGRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVW5mb2xsb3cgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KCcvdXNlci11bmZvbGxvdycsIHsgX2lkOiB1c2VyLl9pZCB9KTtcclxuICAgICAgICAgICAgbGV0IGF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xyXG4gICAgICAgICAgICBhdXRoLnVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGgpKTtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgdXNlcjogZGF0YX0pO1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBwZW9wbGUuZmlsdGVyKChwKSA9PiAocC5faWQgIT09IHVzZXIuX2lkKSk7XHJcbiAgICAgICAgICAgIHNldFBlb3BsZShmaWx0ZXJlZCk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoYFVuZm9sbG93ZWQgJHt1c2VyLm5hbWV9YCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgY29sLW1kLTYgb2Zmc2V0LW1kLTMnPlxyXG4gICAgICAgICAgICA8TGlzdCBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiIGRhdGFTb3VyY2U9e3Blb3BsZX0gcmVuZGVySXRlbT17KHVzZXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17dXNlci5pbWFnZSA/ICg8QXZhdGFyIHNyYz17dXNlci5pbWFnZS51cmx9PjwvQXZhdGFyPikgOiAoPEF2YXRhcj57dXNlci51c2VybmFtZVswXS50b1VwcGVyQ2FzZSgpfTwvQXZhdGFyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPnt1c2VyLnVzZXJuYW1lfSA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVbmZvbGxvdyh1c2VyKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHBvaW50ZXJcIj5VbmZvbGxvdzwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvdXNlci9kYXNoYm9hcmQnPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb2xsYmFja091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2luZzsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXZhdGFyIiwiTGlzdCIsIm1vbWVudCIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJSb2xsYmFja091dGxpbmVkIiwiTGluayIsIkZvbGxvd2luZyIsInN0YXRlIiwic2V0U3RhdGUiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJyb3V0ZXIiLCJ0b2tlbiIsImZldGNoRm9sbG93aW5nIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVVbmZvbGxvdyIsInVzZXIiLCJwdXQiLCJfaWQiLCJhdXRoIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZCIsImZpbHRlciIsInAiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJuYW1lIiwiaW1hZ2UiLCJ1cmwiLCJ1c2VybmFtZSIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==