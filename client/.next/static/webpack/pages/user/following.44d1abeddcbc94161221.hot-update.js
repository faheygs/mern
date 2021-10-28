"use strict";
self["webpackHotUpdate_N_E"]("pages/user/following",{

/***/ "./pages/user/following.js":
/*!*********************************!*\
  !*** ./pages/user/following.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Gavin\\Web Dev\\Udemy\\MERN Stack\\client\\pages\\user\\following.js",
    _this = undefined,
    _s = $RefreshSig$();












var Following = function Following() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.UserContext),
      state = _useContext[0],
      setState = _useContext[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      people = _useState[0],
      setPeople = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (state && state.token) {
      fetchFollowing();
    }
  }, [state && state.token]);

  var fetchFollowing = /*#__PURE__*/function () {
    var _ref = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _yield$axios$get, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().get('/user-following');

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
    var _ref2 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {} catch (e) {
                console.log(e);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleUnfollow() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "row col-md-6 offset-md-3",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List, {
      itemLayout: "horizontal",
      dataSource: people,
      renderItem: function renderItem(user) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List.Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List.Item.Meta, {
            avatar: user.image ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.Avatar, {
              src: user.image.url
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.Avatar, {
              children: user.username[0].toUpperCase()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 90
            }, _this),
            title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "d-flex justify-content-between",
              children: [user.username, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                onClick: function onClick() {
                  return handleUnfollow(user);
                },
                className: "text-primary pointer",
                children: "Unfollow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 96
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 32
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
      href: "/user/dashboard",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
        className: "d-flex justify-content-center pt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.RollbackOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(Following, "O2aD9Lhuv+JI6lLrMVmvuW0IvgE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9mb2xsb3dpbmcuNDRkMWFiZWRkY2JjOTQxNjEyMjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLG9CQUEwQlgsaURBQVUsQ0FBQ08saURBQUQsQ0FBcEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxrQkFBNEJaLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9hLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1UsS0FBSyxJQUFJQSxLQUFLLENBQUNLLEtBQWxCLEVBQXlCO0FBQ3JCQyxNQUFBQSxjQUFjO0FBQ2pCO0FBQ0osR0FKUSxFQUlOLENBQUNOLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxLQUFoQixDQUpNLENBQVQ7O0FBTUEsTUFBTUMsY0FBYztBQUFBLGlTQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVFWLGdEQUFBLENBQVUsaUJBQVYsQ0FGUjs7QUFBQTtBQUFBO0FBRVBZLGNBQUFBLElBRk8sb0JBRVBBLElBRk87QUFHZkwsY0FBQUEsU0FBUyxDQUFDSyxJQUFELENBQVQ7QUFIZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtmQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBTGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEosY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFTQSxNQUFNSyxjQUFjO0FBQUEsa1NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQixrQkFBSSxDQUVILENBRkQsQ0FFRSxPQUFNQyxDQUFOLEVBQVM7QUFDUEgsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxDQUFaO0FBQ0g7O0FBTGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRELGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBUUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQSw0QkFDSSw4REFBQyxzQ0FBRDtBQUFNLGdCQUFVLEVBQUMsWUFBakI7QUFBOEIsZ0JBQVUsRUFBRVQsTUFBMUM7QUFBa0QsZ0JBQVUsRUFBRSxvQkFBQ1csSUFBRDtBQUFBLDRCQUMxRCw4REFBQywyQ0FBRDtBQUFBLGlDQUNJLDhEQUFDLGdEQUFEO0FBQ0ksa0JBQU0sRUFBRUEsSUFBSSxDQUFDQyxLQUFMLGdCQUFjLDhEQUFDLHdDQUFEO0FBQVEsaUJBQUcsRUFBRUQsSUFBSSxDQUFDQyxLQUFMLENBQVdDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWQsZ0JBQXlELDhEQUFDLHdDQUFEO0FBQUEsd0JBQVNGLElBQUksQ0FBQ0csUUFBTCxDQUFjLENBQWQsRUFBaUJDLFdBQWpCO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEckU7QUFFSSxpQkFBSyxlQUFFO0FBQUssdUJBQVMsRUFBQyxnQ0FBZjtBQUFBLHlCQUFpREosSUFBSSxDQUFDRyxRQUF0RCxvQkFBZ0U7QUFBTSx1QkFBTyxFQUFFO0FBQUEseUJBQU1MLGNBQWMsQ0FBQ0UsSUFBRCxDQUFwQjtBQUFBLGlCQUFmO0FBQTJDLHlCQUFTLEVBQUMsc0JBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEMEQ7QUFBQTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFTSSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxpQkFBWDtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQyxvQ0FBYjtBQUFBLCtCQUNJLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBN0NEOztHQUFNZDtVQUdhTDs7O0tBSGJLO0FBK0NOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvZm9sbG93aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgUm9sbGJhY2tPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBGb2xsb3dpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdGUgJiYgc3RhdGUudG9rZW4pIHtcclxuICAgICAgICAgICAgZmV0Y2hGb2xsb3dpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc3RhdGUgJiYgc3RhdGUudG9rZW5dKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEZvbGxvd2luZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL3VzZXItZm9sbG93aW5nJyk7XHJcbiAgICAgICAgICAgIHNldFBlb3BsZShkYXRhKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVuZm9sbG93ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGNvbC1tZC02IG9mZnNldC1tZC0zJz5cclxuICAgICAgICAgICAgPExpc3QgaXRlbUxheW91dD1cImhvcml6b250YWxcIiBkYXRhU291cmNlPXtwZW9wbGV9IHJlbmRlckl0ZW09eyh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e3VzZXIuaW1hZ2UgPyAoPEF2YXRhciBzcmM9e3VzZXIuaW1hZ2UudXJsfT48L0F2YXRhcj4pIDogKDxBdmF0YXI+e3VzZXIudXNlcm5hbWVbMF0udG9VcHBlckNhc2UoKX08L0F2YXRhcj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj57dXNlci51c2VybmFtZX0gPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlVW5mb2xsb3codXNlcil9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBwb2ludGVyXCI+VW5mb2xsb3c8L3NwYW4+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3VzZXIvZGFzaGJvYXJkJz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um9sbGJhY2tPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dpbmc7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF2YXRhciIsIkxpc3QiLCJtb21lbnQiLCJ1c2VSb3V0ZXIiLCJVc2VyQ29udGV4dCIsImF4aW9zIiwiUm9sbGJhY2tPdXRsaW5lZCIsIkxpbmsiLCJGb2xsb3dpbmciLCJzdGF0ZSIsInNldFN0YXRlIiwicGVvcGxlIiwic2V0UGVvcGxlIiwicm91dGVyIiwidG9rZW4iLCJmZXRjaEZvbGxvd2luZyIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVW5mb2xsb3ciLCJlIiwidXNlciIsImltYWdlIiwidXJsIiwidXNlcm5hbWUiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=