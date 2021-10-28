"use strict";
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./components/cards/PostList.js":
/*!**************************************!*\
  !*** ./components/cards/PostList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _images_PostImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/PostImage */ "./components/images/PostImage.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\Gavin\\Web Dev\\Udemy\\MERN Stack\\client\\components\\cards\\PostList.js",
    _this = undefined,
    _s = $RefreshSig$();












var PostList = function PostList(_ref) {
  _s();

  var posts = _ref.posts,
      handleDelete = _ref.handleDelete,
      handleLike = _ref.handleLike,
      handleUnlike = _ref.handleUnlike;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.UserContext),
      state = _useContext[0];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: posts && posts.map(function (post) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "card mb-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "card-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Avatar, {
            size: 40,
            children: post.postedBy.name[0].toUpperCase()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "pt-2 ml-3",
            style: {
              marginLeft: '1rem'
            },
            children: post.postedBy.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "pt-2 ml-3",
            style: {
              marginLeft: '1rem'
            },
            children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).fromNow()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "card-body",
          children: react_render_html__WEBPACK_IMPORTED_MODULE_1___default()(post.content)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "card-footer",
          children: [post.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_images_PostImage__WEBPACK_IMPORTED_MODULE_3__.default, {
            url: post.image.url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 40
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "d-flex pt-2",
            children: [post.likes.incudes(state.user._id) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.HeartFilled, {
              onClick: function onClick() {
                return handleUnlike(post._id);
              },
              className: "text-danger pt-2 h5 px-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 33
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.HeartOutlined, {
              onClick: function onClick() {
                return handleLike(post._id);
              },
              className: "text-danger pt-2 h5 px-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "pt-2 pl-3",
              style: {
                marginRight: '1rem'
              },
              children: "3 Likes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.CommentOutlined, {
              className: "text-danger pt-2 h5 px-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "pt-2 pl-3",
              children: "2 Comments"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this), state && state.user && state.user._id === post.postedBy._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.EditOutlined, {
                onClick: function onClick() {
                  return router.push("/user/post/".concat(post._id));
                },
                className: "text-danger pt-2 h5 px-2 mx-auto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.DeleteOutlined, {
                onClick: function onClick() {
                  return handleDelete(post);
                },
                className: "text-danger pt-2 h5 px-2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 37
              }, _this)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this)]
      }, post._id, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false);
};

_s(PostList, "UjFOtnfn+BdjzN3+/k6ZtUavjyk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = PostList;
/* harmony default export */ __webpack_exports__["default"] = (PostList);

var _c;

$RefreshReg$(_c, "PostList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9kYXNoYm9hcmQuNTFmY2QyMzhlZjk5MWQ0M2RmZDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNWSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF1RDtBQUFBOztBQUFBLE1BQXBEQyxLQUFvRCxRQUFwREEsS0FBb0Q7QUFBQSxNQUE3Q0MsWUFBNkMsUUFBN0NBLFlBQTZDO0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQ3BFLG9CQUFnQmhCLGlEQUFVLENBQUNVLGlEQUFELENBQTFCO0FBQUEsTUFBT08sS0FBUDs7QUFDQSxNQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQXhCO0FBRUEsc0JBQ0k7QUFBQSxjQUNLRSxLQUFLLElBQUlBLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSwwQkFDcEI7QUFBb0IsaUJBQVMsRUFBQyxXQUE5QjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0ksOERBQUMsd0NBQUQ7QUFBUSxnQkFBSSxFQUFFLEVBQWQ7QUFBQSxzQkFDS0EsSUFBSSxDQUFDQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsQ0FBbkIsRUFBc0JDLFdBQXRCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUdjLEdBSGQsZUFJSTtBQUFNLHFCQUFTLEVBQUMsV0FBaEI7QUFBNEIsaUJBQUssRUFBRTtBQUFDQyxjQUFBQSxVQUFVLEVBQUU7QUFBYixhQUFuQztBQUFBLHNCQUEwREosSUFBSSxDQUFDQyxRQUFMLENBQWNDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSTtBQUFNLHFCQUFTLEVBQUMsV0FBaEI7QUFBNEIsaUJBQUssRUFBRTtBQUFDRSxjQUFBQSxVQUFVLEVBQUU7QUFBYixhQUFuQztBQUFBLHNCQUEwRHRCLDZDQUFNLENBQUNrQixJQUFJLENBQUNLLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkI7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFRSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG9CQUNLekIsd0RBQVUsQ0FBQ21CLElBQUksQ0FBQ08sT0FBTjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFXSTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLHFCQUNLUCxJQUFJLENBQUNRLEtBQUwsaUJBQWMsOERBQUMsc0RBQUQ7QUFBVyxlQUFHLEVBQUVSLElBQUksQ0FBQ1EsS0FBTCxDQUFXQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURuQixlQUVJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsdUJBRUtULElBQUksQ0FBQ1UsS0FBTCxDQUFXQyxPQUFYLENBQW1CZCxLQUFLLENBQUNlLElBQU4sQ0FBV0MsR0FBOUIsaUJBQ0csOERBQUMsMERBQUQ7QUFBYSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1qQixZQUFZLENBQUNJLElBQUksQ0FBQ2EsR0FBTixDQUFsQjtBQUFBLGVBQXRCO0FBQW9ELHVCQUFTLEVBQUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESCxnQkFHRyw4REFBQyw0REFBRDtBQUFlLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWxCLFVBQVUsQ0FBQ0ssSUFBSSxDQUFDYSxHQUFOLENBQWhCO0FBQUEsZUFBeEI7QUFBb0QsdUJBQVMsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxSLGVBUUk7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBMkIsbUJBQUssRUFBRTtBQUFDQyxnQkFBQUEsV0FBVyxFQUFFO0FBQWQsZUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkosZUFTSSw4REFBQyw4REFBRDtBQUFpQix1QkFBUyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosZUFVSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSixFQVlLakIsS0FBSyxJQUFJQSxLQUFLLENBQUNlLElBQWYsSUFBdUJmLEtBQUssQ0FBQ2UsSUFBTixDQUFXQyxHQUFYLEtBQW1CYixJQUFJLENBQUNDLFFBQUwsQ0FBY1ksR0FBeEQsaUJBQ0c7QUFBQSxzQ0FDSSw4REFBQywyREFBRDtBQUNJLHVCQUFPLEVBQUU7QUFBQSx5QkFBTWYsTUFBTSxDQUFDaUIsSUFBUCxzQkFBMEJmLElBQUksQ0FBQ2EsR0FBL0IsRUFBTjtBQUFBLGlCQURiO0FBRUkseUJBQVMsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFLSSw4REFBQyw2REFBRDtBQUNJLHVCQUFPLEVBQUU7QUFBQSx5QkFBTW5CLFlBQVksQ0FBQ00sSUFBRCxDQUFsQjtBQUFBLGlCQURiO0FBRUkseUJBQVMsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQSw0QkFiUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhKO0FBQUEsU0FBVUEsSUFBSSxDQUFDYSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0I7QUFBQSxLQUFkO0FBRGQsbUJBREo7QUE2Q0gsQ0FqREQ7O0dBQU1yQjtVQUVhRDs7O0tBRmJDO0FBbUROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvUG9zdExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUG9zdEltYWdlIGZyb20gJy4uL2ltYWdlcy9Qb3N0SW1hZ2UnO1xyXG5pbXBvcnQgeyBIZWFydE91dGxpbmVkLCBIZWFydEZpbGxlZCwgQ29tbWVudE91dGxpbmVkLCBFZGl0T3V0bGluZWQsIERlbGV0ZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICh7IHBvc3RzLCBoYW5kbGVEZWxldGUsIGhhbmRsZUxpa2UsIGhhbmRsZVVubGlrZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwb3N0cyAmJiBwb3N0cy5tYXAocG9zdCA9PiBcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0Ll9pZH0gY2xhc3NOYW1lPVwiY2FyZCBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5wb3N0ZWRCeS5uYW1lWzBdLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHQtMiBtbC0zXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMXJlbSd9fT57cG9zdC5wb3N0ZWRCeS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHQtMiBtbC0zXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMXJlbSd9fT57bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mcm9tTm93KCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIVE1MKHBvc3QuY29udGVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5pbWFnZSAmJiA8UG9zdEltYWdlIHVybD17cG9zdC5pbWFnZS51cmx9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBwdC0yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QubGlrZXMuaW5jdWRlcyhzdGF0ZS51c2VyLl9pZCkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVubGlrZShwb3N0Ll9pZCl9IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIHB0LTIgaDUgcHgtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpa2UocG9zdC5faWQpfSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlciBwdC0yIGg1IHB4LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcGwtM1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICcxcmVtJ319PjMgTGlrZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50T3V0bGluZWQgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgcHQtMiBoNSBweC0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwbC0zXCI+MiBDb21tZW50czwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIuX2lkID09PSBwb3N0LnBvc3RlZEJ5Ll9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC91c2VyL3Bvc3QvJHtwb3N0Ll9pZH1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIHB0LTIgaDUgcHgtMiBteC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUocG9zdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlciBwdC0yIGg1IHB4LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0OyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwicmVuZGVySFRNTCIsIm1vbWVudCIsIkF2YXRhciIsIlBvc3RJbWFnZSIsIkhlYXJ0T3V0bGluZWQiLCJIZWFydEZpbGxlZCIsIkNvbW1lbnRPdXRsaW5lZCIsIkVkaXRPdXRsaW5lZCIsIkRlbGV0ZU91dGxpbmVkIiwiVXNlckNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJQb3N0TGlzdCIsInBvc3RzIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlTGlrZSIsImhhbmRsZVVubGlrZSIsInN0YXRlIiwicm91dGVyIiwibWFwIiwicG9zdCIsInBvc3RlZEJ5IiwibmFtZSIsInRvVXBwZXJDYXNlIiwibWFyZ2luTGVmdCIsImNyZWF0ZWRBdCIsImZyb21Ob3ciLCJjb250ZW50IiwiaW1hZ2UiLCJ1cmwiLCJsaWtlcyIsImluY3VkZXMiLCJ1c2VyIiwiX2lkIiwibWFyZ2luUmlnaHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==