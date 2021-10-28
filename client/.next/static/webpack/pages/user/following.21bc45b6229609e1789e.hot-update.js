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
    var _ref2 = (0,E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(user) {
      var _yield$axios$put, data;

      return E_Gavin_Web_Dev_Udemy_MERN_Stack_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().put('/user-unfollow', {
                _id: user._id
              });

            case 3:
              _yield$axios$put = _context2.sent;
              data = _yield$axios$put.data;
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function handleUnfollow(_x) {
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
              lineNumber: 44,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.Avatar, {
              children: user.username[0].toUpperCase()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
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
                lineNumber: 45,
                columnNumber: 96
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 32
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
      href: "/user/dashboard",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
        className: "d-flex justify-content-center pt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.RollbackOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9mb2xsb3dpbmcuMjFiYzQ1YjYyMjk2MDllMTc4OWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLG9CQUEwQlgsaURBQVUsQ0FBQ08saURBQUQsQ0FBcEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxrQkFBNEJaLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9hLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1UsS0FBSyxJQUFJQSxLQUFLLENBQUNLLEtBQWxCLEVBQXlCO0FBQ3JCQyxNQUFBQSxjQUFjO0FBQ2pCO0FBQ0osR0FKUSxFQUlOLENBQUNOLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxLQUFoQixDQUpNLENBQVQ7O0FBTUEsTUFBTUMsY0FBYztBQUFBLGlTQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVFWLGdEQUFBLENBQVUsaUJBQVYsQ0FGUjs7QUFBQTtBQUFBO0FBRVBZLGNBQUFBLElBRk8sb0JBRVBBLElBRk87QUFHZkwsY0FBQUEsU0FBUyxDQUFDSyxJQUFELENBQVQ7QUFIZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtmQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBTGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEosY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFTQSxNQUFNSyxjQUFjO0FBQUEsa1NBQUcsa0JBQU9DLElBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFUWhCLGdEQUFBLENBQVUsZ0JBQVYsRUFBNEI7QUFBRWtCLGdCQUFBQSxHQUFHLEVBQUVGLElBQUksQ0FBQ0U7QUFBWixlQUE1QixDQUZSOztBQUFBO0FBQUE7QUFFUE4sY0FBQUEsSUFGTyxvQkFFUEEsSUFGTztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS2ZDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFMZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkQyxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQVNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUEsNEJBQ0ksOERBQUMsc0NBQUQ7QUFBTSxnQkFBVSxFQUFDLFlBQWpCO0FBQThCLGdCQUFVLEVBQUVULE1BQTFDO0FBQWtELGdCQUFVLEVBQUUsb0JBQUNVLElBQUQ7QUFBQSw0QkFDMUQsOERBQUMsMkNBQUQ7QUFBQSxpQ0FDSSw4REFBQyxnREFBRDtBQUNJLGtCQUFNLEVBQUVBLElBQUksQ0FBQ0csS0FBTCxnQkFBYyw4REFBQyx3Q0FBRDtBQUFRLGlCQUFHLEVBQUVILElBQUksQ0FBQ0csS0FBTCxDQUFXQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFkLGdCQUF5RCw4REFBQyx3Q0FBRDtBQUFBLHdCQUFTSixJQUFJLENBQUNLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCQyxXQUFqQjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHJFO0FBRUksaUJBQUssZUFBRTtBQUFLLHVCQUFTLEVBQUMsZ0NBQWY7QUFBQSx5QkFBaUROLElBQUksQ0FBQ0ssUUFBdEQsb0JBQWdFO0FBQU0sdUJBQU8sRUFBRTtBQUFBLHlCQUFNTixjQUFjLENBQUNDLElBQUQsQ0FBcEI7QUFBQSxpQkFBZjtBQUEyQyx5QkFBUyxFQUFDLHNCQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDBEO0FBQUE7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBU0ksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsaUJBQVg7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMsb0NBQWI7QUFBQSwrQkFDSSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQTlDRDs7R0FBTWI7VUFHYUw7OztLQUhiSztBQWdETiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2ZvbGxvd2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFJvbGxiYWNrT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgRm9sbG93aW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHN0YXRlICYmIHN0YXRlLnRva2VuKSB7XHJcbiAgICAgICAgICAgIGZldGNoRm9sbG93aW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3N0YXRlICYmIHN0YXRlLnRva2VuXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hGb2xsb3dpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy91c2VyLWZvbGxvd2luZycpO1xyXG4gICAgICAgICAgICBzZXRQZW9wbGUoZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVbmZvbGxvdyA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wdXQoJy91c2VyLXVuZm9sbG93JywgeyBfaWQ6IHVzZXIuX2lkIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBjb2wtbWQtNiBvZmZzZXQtbWQtMyc+XHJcbiAgICAgICAgICAgIDxMaXN0IGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCIgZGF0YVNvdXJjZT17cGVvcGxlfSByZW5kZXJJdGVtPXsodXNlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXt1c2VyLmltYWdlID8gKDxBdmF0YXIgc3JjPXt1c2VyLmltYWdlLnVybH0+PC9BdmF0YXI+KSA6ICg8QXZhdGFyPnt1c2VyLnVzZXJuYW1lWzBdLnRvVXBwZXJDYXNlKCl9PC9BdmF0YXI+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+e3VzZXIudXNlcm5hbWV9IDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVuZm9sbG93KHVzZXIpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgcG9pbnRlclwiPlVuZm9sbG93PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy91c2VyL2Rhc2hib2FyZCc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvbGxiYWNrT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93aW5nOyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdmF0YXIiLCJMaXN0IiwibW9tZW50IiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJheGlvcyIsIlJvbGxiYWNrT3V0bGluZWQiLCJMaW5rIiwiRm9sbG93aW5nIiwic3RhdGUiLCJzZXRTdGF0ZSIsInBlb3BsZSIsInNldFBlb3BsZSIsInJvdXRlciIsInRva2VuIiwiZmV0Y2hGb2xsb3dpbmciLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVVuZm9sbG93IiwidXNlciIsInB1dCIsIl9pZCIsImltYWdlIiwidXJsIiwidXNlcm5hbWUiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=