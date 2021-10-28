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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "row col-md-6 offset-md-3",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.List, {
      itemLayout: "horizontal",
      dataSource: people,
      renderItem: function renderItem(user) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.List.Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.List.Item.Meta, {
            avatar: user.image ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Avatar, {
              src: user.image.url
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Avatar, {
              children: user.username[0].toUpperCase()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 90
            }, _this),
            title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "d-flex justify-content-between",
              children: [user.username, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                onClick: function onClick() {
                  return handleUnfollow(user);
                },
                className: "text-primary pointer",
                children: "Unfollow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 96
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 32
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9mb2xsb3dpbmcuNzAxZDY5OTE0YjY1OTE1MGZkOWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixvQkFBMEJWLGlEQUFVLENBQUNPLGlEQUFELENBQXBDO0FBQUEsTUFBT0ksS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0Esa0JBQTRCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPWSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCO0FBRUFKLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdTLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxLQUFsQixFQUF5QjtBQUNyQkMsTUFBQUEsY0FBYztBQUNqQjtBQUNKLEdBSlEsRUFJTixDQUFDTixLQUFLLElBQUlBLEtBQUssQ0FBQ0ssS0FBaEIsQ0FKTSxDQUFUOztBQU1BLE1BQU1DLGNBQWM7QUFBQSxpU0FBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVRVCxnREFBQSxDQUFVLGlCQUFWLENBRlI7O0FBQUE7QUFBQTtBQUVQVyxjQUFBQSxJQUZPLG9CQUVQQSxJQUZPO0FBR2ZMLGNBQUFBLFNBQVMsQ0FBQ0ssSUFBRCxDQUFUO0FBSGU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLZkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQUxlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRKLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBU0EsTUFBTUssY0FBYztBQUFBLGtTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEEsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBLDJCQUNJLDhEQUFDLHNDQUFEO0FBQU0sZ0JBQVUsRUFBQyxZQUFqQjtBQUE4QixnQkFBVSxFQUFFVCxNQUExQztBQUFrRCxnQkFBVSxFQUFFLG9CQUFDVSxJQUFEO0FBQUEsNEJBQzFELDhEQUFDLDJDQUFEO0FBQUEsaUNBQ0ksOERBQUMsZ0RBQUQ7QUFDSSxrQkFBTSxFQUFFQSxJQUFJLENBQUNDLEtBQUwsZ0JBQWMsOERBQUMsd0NBQUQ7QUFBUSxpQkFBRyxFQUFFRCxJQUFJLENBQUNDLEtBQUwsQ0FBV0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZCxnQkFBeUQsOERBQUMsd0NBQUQ7QUFBQSx3QkFBU0YsSUFBSSxDQUFDRyxRQUFMLENBQWMsQ0FBZCxFQUFpQkMsV0FBakI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURyRTtBQUVJLGlCQUFLLGVBQUU7QUFBSyx1QkFBUyxFQUFDLGdDQUFmO0FBQUEseUJBQWlESixJQUFJLENBQUNHLFFBQXRELG9CQUFnRTtBQUFNLHVCQUFPLEVBQUU7QUFBQSx5QkFBTUosY0FBYyxDQUFDQyxJQUFELENBQXBCO0FBQUEsaUJBQWY7QUFBMkMseUJBQVMsRUFBQyxzQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQwRDtBQUFBO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQXBDRDs7R0FBTWI7VUFHYUo7OztLQUhiSTtBQXNDTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2ZvbGxvd2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFJvbGxiYWNrT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IEZvbGxvd2luZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbcGVvcGxlLCBzZXRQZW9wbGVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihzdGF0ZSAmJiBzdGF0ZS50b2tlbikge1xyXG4gICAgICAgICAgICBmZXRjaEZvbGxvd2luZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdGF0ZSAmJiBzdGF0ZS50b2tlbl0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRm9sbG93aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvdXNlci1mb2xsb3dpbmcnKTtcclxuICAgICAgICAgICAgc2V0UGVvcGxlKGRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVW5mb2xsb3cgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBjb2wtbWQtNiBvZmZzZXQtbWQtMyc+XHJcbiAgICAgICAgICAgIDxMaXN0IGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCIgZGF0YVNvdXJjZT17cGVvcGxlfSByZW5kZXJJdGVtPXsodXNlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXt1c2VyLmltYWdlID8gKDxBdmF0YXIgc3JjPXt1c2VyLmltYWdlLnVybH0+PC9BdmF0YXI+KSA6ICg8QXZhdGFyPnt1c2VyLnVzZXJuYW1lWzBdLnRvVXBwZXJDYXNlKCl9PC9BdmF0YXI+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+e3VzZXIudXNlcm5hbWV9IDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVuZm9sbG93KHVzZXIpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgcG9pbnRlclwiPlVuZm9sbG93PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dpbmc7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF2YXRhciIsIkxpc3QiLCJtb21lbnQiLCJ1c2VSb3V0ZXIiLCJVc2VyQ29udGV4dCIsImF4aW9zIiwiUm9sbGJhY2tPdXRsaW5lZCIsIkZvbGxvd2luZyIsInN0YXRlIiwic2V0U3RhdGUiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJyb3V0ZXIiLCJ0b2tlbiIsImZldGNoRm9sbG93aW5nIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVVbmZvbGxvdyIsInVzZXIiLCJpbWFnZSIsInVybCIsInVzZXJuYW1lIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9