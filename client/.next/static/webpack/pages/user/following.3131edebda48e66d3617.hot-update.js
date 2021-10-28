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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
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
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error("Unfollowed ".concat(user.name));
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "row col-md-6 offset-md-3",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.List, {
      itemLayout: "horizontal",
      dataSource: people,
      renderItem: function renderItem(user) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.List.Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.List.Item.Meta, {
            avatar: user.image ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Avatar, {
              src: user.image.url
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Avatar, {
              children: user.username[0].toUpperCase()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 90
            }, _this),
            title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "d-flex justify-content-between",
              children: [user.username, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                onClick: function onClick() {
                  return handleUnfollow(user);
                },
                className: "text-primary pointer",
                children: "Unfollow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 96
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 32
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
      href: "/user/dashboard",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
        className: "d-flex justify-content-center pt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__.RollbackOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bounce": function() { return /* binding */ Bounce; },
/* harmony export */   "Flip": function() { return /* binding */ Flip; },
/* harmony export */   "Icons": function() { return /* binding */ Icons; },
/* harmony export */   "Slide": function() { return /* binding */ Slide; },
/* harmony export */   "ToastContainer": function() { return /* binding */ ToastContainer; },
/* harmony export */   "Zoom": function() { return /* binding */ Zoom; },
/* harmony export */   "collapseToast": function() { return /* binding */ collapseToast; },
/* harmony export */   "cssTransition": function() { return /* binding */ cssTransition; },
/* harmony export */   "toast": function() { return /* binding */ toast; },
/* harmony export */   "useToast": function() { return /* binding */ useToast; },
/* harmony export */   "useToastContainer": function() { return /* binding */ useToastContainer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var scrollHeight = node.scrollHeight,
      style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = scrollHeight + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(done, duration);
    });
  });
}

/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * cssTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        nodeRef = _ref2.nodeRef,
        isIn = _ref2.isIn;
    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var baseClassName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var animationStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0
    /* Enter */
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
      onEnter();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      if (!isIn) preventExitTransition ? onExited() : onExit();
    }, [isIn]);

    function onEnter() {
      var node = nodeRef.current;
      baseClassName.current = node.className;
      node.className += " " + enterClassName;
      node.addEventListener('animationend', onEntered);
    }

    function onEntered(e) {
      if (e.target !== nodeRef.current) return;
      var node = nodeRef.current;
      node.removeEventListener('animationend', onEntered);

      if (animationStep.current === 0
      /* Enter */
      ) {
          node.className = baseClassName.current;
        }
    }

    function onExit() {
      animationStep.current = 1
      /* Exit */
      ;
      var node = nodeRef.current;
      node.className += " " + exitClassName;
      node.addEventListener('animationend', onExited);
    }

    function onExited() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onExited);
      collapse ? collapseToast(node, done, collapseDuration) : done();
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(arg);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function reducer(state, action) {
  switch (action.type) {
    case 0
    /* ADD */
    :
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 1
    /* REMOVE */
    :
      return isToastIdValid(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

var _excluded = ["delay", "staleId"];
function useToastContainer(props) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var limit = instance.props.limit;

    if (limit && (!containerId || instance.containerId === containerId)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    dispatch({
      type: 1
      /* REMOVE */
      ,
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId;

    appendToast(toastContent, toastProps, staleId);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var _options$icon;

    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = _objectWithoutPropertiesLoose(_ref3, _excluded);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId,
        data = options.data;
    var props = instance.props;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = options.updateId == null;
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      isLoading: options.isLoading,
      theme: options.theme || props.theme,
      icon: (_options$icon = options.icon) != null ? _options$icon : props.icon,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      draggableDirection: options.draggableDirection || props.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: options.isLoading ? false : getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose; //  tweak for vertical dragging

    if (toastProps.draggableDirection === "y"
    /* Y */
    && toastProps.draggablePercent === 80
    /* DRAGGABLE_PERCENT */
    ) {
        toastProps.draggablePercent *= 1.5;
      }

    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(content) && !isStr(content.type)) {
      toastContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(content, {
        closeToast: closeToast,
        toastProps: toastProps,
        data: data
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps,
        data: data
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    if (staleId) delete collection[staleId];
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 0
      /* ADD */
      ,
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    var queueLen = queue.length;
    toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    } else {
      forceUpdate();
    }
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFn(props.onOpen)) props.onOpen((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(syncProps.children) && syncProps.children.props);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    if (props.draggable) {
      var toast = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast.getBoundingClientRect();
      toast.style.transition = '';
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.start = drag.x;
          drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
        } else {
        drag.start = drag.y;
        drag.removalDistance = toast.offsetHeight * (props.draggablePercent / 100);
      }
    }
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    if (!document.hasFocus()) pauseToast();
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    if (drag.canDrag) {
      e.preventDefault();
      var toast = toastRef.current;
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.delta = drag.x - drag.start;
        } else {
        drag.delta = drag.y - drag.start;
      } // prevent false positif during a toast click


      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = "translate" + props.draggableDirection + "(0)";
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      theme = _ref.theme,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + theme,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _cx, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn,
      theme = _ref.theme;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar-theme--" + theme, "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _cx));
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: defaultClassName
  }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(defaultClassName, className); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent); // TODO: add aria-valuenow, aria-valuemax, aria-valuemin

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({
    role: "progressbar",
    "aria-hidden": hide ? 'true' : 'false',
    "aria-label": "notification timer",
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var _excluded$1 = ["theme", "type"];

var Svg = function Svg(_ref) {
  var theme = _ref.theme,
      type = _ref.type,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: theme === 'colored' ? 'currentColor' : "var(--toastify-icon-color-" + type + ")"
  }, rest));
};

function Warning(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Svg, Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }));
}

function Info(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Svg, Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }));
}

function Success(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Svg, Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }));
}

function Error(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Svg, Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }));
}

function Spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__spinner"
  });
}

var Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error,
  spinner: Spinner
};

var Toast = function Toast(props) {
  var _cx, _cx2;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast,
      isIn = props.isIn,
      isLoading = props.isLoading,
      icon = props.icon,
      theme = props.theme;
  var defaultClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast-theme--" + theme, "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _cx));
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: defaultClassName
  }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(defaultClassName, className);
  var isProgressControlled = !!progress;
  var maybeIcon = Icons[type];
  var iconProps = {
    theme: theme,
    type: type
  };
  var Icon = maybeIcon && maybeIcon(iconProps);

  if (icon === false) {
    Icon = void 0;
  } else if (isFn(icon)) {
    Icon = icon(iconProps);
  } else if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(icon)) {
    Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, iconProps);
  } else if (isStr(icon)) {
    Icon = icon;
  } else if (isLoading) {
    Icon = Icons.spinner();
  }

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type,
      theme: theme
    };
    if (isFn(closeButton)) return closeButton(props);
    if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(closeButton)) return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(closeButton, props);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Transition, {
    isIn: isIn,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({}, isIn && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), Icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-icon", (_cx2 = {}, _cx2["Toastify"
    /* CSS_NAMESPACE */
    + "--animate-icon " + "Toastify"
    /* CSS_NAMESPACE */
    + "__zoom-enter"] = !isLoading, _cx2))
  }, Icon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, children)), renderCloseButton(closeButton), (autoClose || isProgressControlled) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProgressBar, Object.assign({}, updateId && !isProgressControlled ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    theme: theme,
    delay: autoClose,
    isRunning: isRunning,
    isIn: isIn,
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});
var Slide = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-exit",
  appendPosition: true
});
var Zoom = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-exit"
});
var Flip = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-exit"
});

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;

  function getClassName(position) {
    var _cx;

    var defaultClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container", "Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--rtl"] = rtl, _cx));
    return isFn(className) ? className({
      position: position,
      rtl: rtl,
      defaultClassName: defaultClassName
    }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(defaultClassName, parseClassName(className));
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var containerStyle = toastList.length === 0 ? _extends({}, style, {
      pointerEvents: 'none'
    }) : _extends({}, style);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toast, Object.assign({}, toastProps, {
        isIn: isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80
  /* DRAGGABLE_PERCENT */
  ,
  draggableDirection: "x"
  /* X */
  ,
  role: 'alert',
  theme: 'light'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = containers.get(containerId || latestInstance);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return Math.random().toString(36).substr(2, 9);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var createToastByType = function createToastByType(type) {
  return function (content, options) {
    return dispatchToast(content, mergeOptions(type, options));
  };
};

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.loading = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, _extends({
    isLoading: true,
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    draggable: false
  }, options)));
};

function handlePromise(promise, _ref2, options) {
  var pending = _ref2.pending,
      error = _ref2.error,
      success = _ref2.success;
  var id = isStr(pending) ? toast.loading(pending, options) : toast.loading(pending.render, _extends({}, options, pending));
  var resetParams = {
    isLoading: null,
    autoClose: null,
    closeOnClick: null,
    closeButton: null,
    draggable: null
  };

  var resolver = function resolver(type, input, result) {
    var params = isStr(input) ? {
      render: input
    } : input;
    toast.update(id, _extends({
      type: type
    }, resetParams, options, params, {
      data: result
    }));
    return result;
  };

  var p = isFn(promise) ? promise() : promise;
  p.then(function (result) {
    return resolver('success', success, result);
  })["catch"](function (err) {
    return resolver('error', error, err);
  });
  return p;
}

toast.promise = handlePromise;
toast.success = /*#__PURE__*/createToastByType(TYPE.SUCCESS);
toast.info = /*#__PURE__*/createToastByType(TYPE.INFO);
toast.error = /*#__PURE__*/createToastByType(TYPE.ERROR);
toast.warning = /*#__PURE__*/createToastByType(TYPE.WARNING);
toast.warn = toast.warning;

toast.dark = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, _extends({
    theme: 'dark'
  }, options)));
};
/**
 * Remove toast programmaticaly
 */


toast.dismiss = function (id) {
  return eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


//# sourceMappingURL=react-toastify.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9mb2xsb3dpbmcuMzEzMWVkZWJkYTQ4ZTY2ZDM2MTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLG9CQUEwQlosaURBQVUsQ0FBQ08saURBQUQsQ0FBcEM7QUFBQSxNQUFPTSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxrQkFBNEJiLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9jLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLE1BQU1DLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1csS0FBSyxJQUFJQSxLQUFLLENBQUNLLEtBQWxCLEVBQXlCO0FBQ3JCQyxNQUFBQSxjQUFjO0FBQ2pCO0FBQ0osR0FKUSxFQUlOLENBQUNOLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxLQUFoQixDQUpNLENBQVQ7O0FBTUEsTUFBTUMsY0FBYztBQUFBLGlTQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVFYLGdEQUFBLENBQVUsaUJBQVYsQ0FGUjs7QUFBQTtBQUFBO0FBRVBhLGNBQUFBLElBRk8sb0JBRVBBLElBRk87QUFHZkwsY0FBQUEsU0FBUyxDQUFDSyxJQUFELENBQVQ7QUFIZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtmQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBTGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEosY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFTQSxNQUFNSyxjQUFjO0FBQUEsa1NBQUcs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Q1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvREFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHLEVBQUUsb0RBQWE7QUFDbEI7QUFDQTtBQUNBLEdBQUcsRUFBRSxvREFBYTtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFNLENBQUMsb0RBQWEsaUNBQWlDO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRTZIO0FBQzlIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvZm9sbG93aW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvYXN0aWZ5L2Rpc3QvcmVhY3QtdG9hc3RpZnkuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgUm9sbGJhY2tPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5jb25zdCBGb2xsb3dpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdGUgJiYgc3RhdGUudG9rZW4pIHtcclxuICAgICAgICAgICAgZmV0Y2hGb2xsb3dpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc3RhdGUgJiYgc3RhdGUudG9rZW5dKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEZvbGxvd2luZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL3VzZXItZm9sbG93aW5nJyk7XHJcbiAgICAgICAgICAgIHNldFBlb3BsZShkYXRhKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVuZm9sbG93ID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnB1dCgnL3VzZXItdW5mb2xsb3cnLCB7IF9pZDogdXNlci5faWQgfSk7XHJcbiAgICAgICAgICAgIGxldCBhdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcclxuICAgICAgICAgICAgYXV0aC51c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoKSk7XHJcblxyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIHVzZXI6IGRhdGF9KTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gcGVvcGxlLmZpbHRlcigocCkgPT4gKHAuX2lkICE9PSB1c2VyLl9pZCkpO1xyXG4gICAgICAgICAgICBzZXRQZW9wbGUoZmlsdGVyZWQpO1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihgVW5mb2xsb3dlZCAke3VzZXIubmFtZX1gKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBjb2wtbWQtNiBvZmZzZXQtbWQtMyc+XHJcbiAgICAgICAgICAgIDxMaXN0IGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCIgZGF0YVNvdXJjZT17cGVvcGxlfSByZW5kZXJJdGVtPXsodXNlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXt1c2VyLmltYWdlID8gKDxBdmF0YXIgc3JjPXt1c2VyLmltYWdlLnVybH0+PC9BdmF0YXI+KSA6ICg8QXZhdGFyPnt1c2VyLnVzZXJuYW1lWzBdLnRvVXBwZXJDYXNlKCl9PC9BdmF0YXI+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+e3VzZXIudXNlcm5hbWV9IDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVuZm9sbG93KHVzZXIpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgcG9pbnRlclwiPlVuZm9sbG93PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy91c2VyL2Rhc2hib2FyZCc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvbGxiYWNrT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93aW5nOyIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IGlzVmFsaWRFbGVtZW50LCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCBjbG9uZUVsZW1lbnQsIHVzZVN0YXRlLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGlzTnVtKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odik7XG59XG5mdW5jdGlvbiBpc0Jvb2wodikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdib29sZWFuJztcbn1cbmZ1bmN0aW9uIGlzU3RyKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIGlzRm4odikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBwYXJzZUNsYXNzTmFtZSh2KSB7XG4gIHJldHVybiBpc1N0cih2KSB8fCBpc0ZuKHYpID8gdiA6IG51bGw7XG59XG5mdW5jdGlvbiBpc1RvYXN0SWRWYWxpZCh0b2FzdElkKSB7XG4gIHJldHVybiB0b2FzdElkID09PSAwIHx8IHRvYXN0SWQ7XG59XG5mdW5jdGlvbiBnZXRBdXRvQ2xvc2VEZWxheSh0b2FzdEF1dG9DbG9zZSwgY29udGFpbmVyQXV0b0Nsb3NlKSB7XG4gIHJldHVybiB0b2FzdEF1dG9DbG9zZSA9PT0gZmFsc2UgfHwgaXNOdW0odG9hc3RBdXRvQ2xvc2UpICYmIHRvYXN0QXV0b0Nsb3NlID4gMCA/IHRvYXN0QXV0b0Nsb3NlIDogY29udGFpbmVyQXV0b0Nsb3NlO1xufVxudmFyIGNhblVzZURvbSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiBjYW5CZVJlbmRlcmVkKGNvbnRlbnQpIHtcbiAgcmV0dXJuIGlzVmFsaWRFbGVtZW50KGNvbnRlbnQpIHx8IGlzU3RyKGNvbnRlbnQpIHx8IGlzRm4oY29udGVudCkgfHwgaXNOdW0oY29udGVudCk7XG59XG5cbnZhciBQT1NJVElPTiA9IHtcbiAgVE9QX0xFRlQ6ICd0b3AtbGVmdCcsXG4gIFRPUF9SSUdIVDogJ3RvcC1yaWdodCcsXG4gIFRPUF9DRU5URVI6ICd0b3AtY2VudGVyJyxcbiAgQk9UVE9NX0xFRlQ6ICdib3R0b20tbGVmdCcsXG4gIEJPVFRPTV9SSUdIVDogJ2JvdHRvbS1yaWdodCcsXG4gIEJPVFRPTV9DRU5URVI6ICdib3R0b20tY2VudGVyJ1xufTtcbnZhciBUWVBFID0ge1xuICBJTkZPOiAnaW5mbycsXG4gIFNVQ0NFU1M6ICdzdWNjZXNzJyxcbiAgV0FSTklORzogJ3dhcm5pbmcnLFxuICBFUlJPUjogJ2Vycm9yJyxcbiAgREVGQVVMVDogJ2RlZmF1bHQnXG59O1xuXG4vKipcclxuICogVXNlZCB0byBjb2xsYXBzZSB0b2FzdCBhZnRlciBleGl0IGFuaW1hdGlvblxyXG4gKi9cbmZ1bmN0aW9uIGNvbGxhcHNlVG9hc3Qobm9kZSwgZG9uZSwgZHVyYXRpb25cbi8qIENPTExBUFNFX0RVUkFUSU9OICovXG4pIHtcbiAgaWYgKGR1cmF0aW9uID09PSB2b2lkIDApIHtcbiAgICBkdXJhdGlvbiA9IDMwMDtcbiAgfVxuXG4gIHZhciBzY3JvbGxIZWlnaHQgPSBub2RlLnNjcm9sbEhlaWdodCxcbiAgICAgIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICBzdHlsZS5taW5IZWlnaHQgPSAnaW5pdGlhbCc7XG4gICAgc3R5bGUuaGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICBzdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgXCIgKyBkdXJhdGlvbiArIFwibXNcIjtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgIHN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgIHNldFRpbWVvdXQoZG9uZSwgZHVyYXRpb24pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXHJcbiAqIENzcyBhbmltYXRpb24gdGhhdCBqdXN0IHdvcmsuXHJcbiAqIFlvdSBjb3VsZCB1c2UgYW5pbWF0ZS5jc3MgZm9yIGluc3RhbmNlXHJcbiAqXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjc3NUcmFuc2l0aW9uKHtcclxuICogICBlbnRlcjogXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19ib3VuY2VJblwiLFxyXG4gKiAgIGV4aXQ6IFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlT3V0XCJcclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqL1xuXG5mdW5jdGlvbiBjc3NUcmFuc2l0aW9uKF9yZWYpIHtcbiAgdmFyIGVudGVyID0gX3JlZi5lbnRlcixcbiAgICAgIGV4aXQgPSBfcmVmLmV4aXQsXG4gICAgICBfcmVmJGFwcGVuZFBvc2l0aW9uID0gX3JlZi5hcHBlbmRQb3NpdGlvbixcbiAgICAgIGFwcGVuZFBvc2l0aW9uID0gX3JlZiRhcHBlbmRQb3NpdGlvbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGFwcGVuZFBvc2l0aW9uLFxuICAgICAgX3JlZiRjb2xsYXBzZSA9IF9yZWYuY29sbGFwc2UsXG4gICAgICBjb2xsYXBzZSA9IF9yZWYkY29sbGFwc2UgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGNvbGxhcHNlLFxuICAgICAgX3JlZiRjb2xsYXBzZUR1cmF0aW9uID0gX3JlZi5jb2xsYXBzZUR1cmF0aW9uLFxuICAgICAgY29sbGFwc2VEdXJhdGlvbiA9IF9yZWYkY29sbGFwc2VEdXJhdGlvbiA9PT0gdm9pZCAwID8gMzAwIDogX3JlZiRjb2xsYXBzZUR1cmF0aW9uO1xuICByZXR1cm4gZnVuY3Rpb24gVG9hc3RUcmFuc2l0aW9uKF9yZWYyKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICAgIHByZXZlbnRFeGl0VHJhbnNpdGlvbiA9IF9yZWYyLnByZXZlbnRFeGl0VHJhbnNpdGlvbixcbiAgICAgICAgZG9uZSA9IF9yZWYyLmRvbmUsXG4gICAgICAgIG5vZGVSZWYgPSBfcmVmMi5ub2RlUmVmLFxuICAgICAgICBpc0luID0gX3JlZjIuaXNJbjtcbiAgICB2YXIgZW50ZXJDbGFzc05hbWUgPSBhcHBlbmRQb3NpdGlvbiA/IGVudGVyICsgXCItLVwiICsgcG9zaXRpb24gOiBlbnRlcjtcbiAgICB2YXIgZXhpdENsYXNzTmFtZSA9IGFwcGVuZFBvc2l0aW9uID8gZXhpdCArIFwiLS1cIiArIHBvc2l0aW9uIDogZXhpdDtcbiAgICB2YXIgYmFzZUNsYXNzTmFtZSA9IHVzZVJlZigpO1xuICAgIHZhciBhbmltYXRpb25TdGVwID0gdXNlUmVmKDBcbiAgICAvKiBFbnRlciAqL1xuICAgICk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNJbikgcHJldmVudEV4aXRUcmFuc2l0aW9uID8gb25FeGl0ZWQoKSA6IG9uRXhpdCgpO1xuICAgIH0sIFtpc0luXSk7XG5cbiAgICBmdW5jdGlvbiBvbkVudGVyKCkge1xuICAgICAgdmFyIG5vZGUgPSBub2RlUmVmLmN1cnJlbnQ7XG4gICAgICBiYXNlQ2xhc3NOYW1lLmN1cnJlbnQgPSBub2RlLmNsYXNzTmFtZTtcbiAgICAgIG5vZGUuY2xhc3NOYW1lICs9IFwiIFwiICsgZW50ZXJDbGFzc05hbWU7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uRW50ZXJlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FbnRlcmVkKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gbm9kZVJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICB2YXIgbm9kZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25FbnRlcmVkKTtcblxuICAgICAgaWYgKGFuaW1hdGlvblN0ZXAuY3VycmVudCA9PT0gMFxuICAgICAgLyogRW50ZXIgKi9cbiAgICAgICkge1xuICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gYmFzZUNsYXNzTmFtZS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FeGl0KCkge1xuICAgICAgYW5pbWF0aW9uU3RlcC5jdXJyZW50ID0gMVxuICAgICAgLyogRXhpdCAqL1xuICAgICAgO1xuICAgICAgdmFyIG5vZGUgPSBub2RlUmVmLmN1cnJlbnQ7XG4gICAgICBub2RlLmNsYXNzTmFtZSArPSBcIiBcIiArIGV4aXRDbGFzc05hbWU7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uRXhpdGVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkV4aXRlZCgpIHtcbiAgICAgIHZhciBub2RlID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkV4aXRlZCk7XG4gICAgICBjb2xsYXBzZSA/IGNvbGxhcHNlVG9hc3Qobm9kZSwgZG9uZSwgY29sbGFwc2VEdXJhdGlvbikgOiBkb25lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKTtcbiAgfTtcbn1cblxudmFyIGV2ZW50TWFuYWdlciA9IHtcbiAgbGlzdDogLyojX19QVVJFX18qL25ldyBNYXAoKSxcbiAgZW1pdFF1ZXVlOiAvKiNfX1BVUkVfXyovbmV3IE1hcCgpLFxuICBvbjogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0LmhhcyhldmVudCkgfHwgdGhpcy5saXN0LnNldChldmVudCwgW10pO1xuICAgIHRoaXMubGlzdC5nZXQoZXZlbnQpLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudCwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBjYiA9IHRoaXMubGlzdC5nZXQoZXZlbnQpLmZpbHRlcihmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiICE9PSBjYWxsYmFjaztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0LnNldChldmVudCwgY2IpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0W1wiZGVsZXRlXCJdKGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY2FuY2VsRW1pdDogZnVuY3Rpb24gY2FuY2VsRW1pdChldmVudCkge1xuICAgIHZhciB0aW1lcnMgPSB0aGlzLmVtaXRRdWV1ZS5nZXQoZXZlbnQpO1xuXG4gICAgaWYgKHRpbWVycykge1xuICAgICAgdGltZXJzLmZvckVhY2goY2xlYXJUaW1lb3V0KTtcbiAgICAgIHRoaXMuZW1pdFF1ZXVlW1wiZGVsZXRlXCJdKGV2ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcclxuICAgKiBFbnF1ZXVlIHRoZSBldmVudCBhdCB0aGUgZW5kIG9mIHRoZSBjYWxsIHN0YWNrXHJcbiAgICogRG9pbmcgc28gbGV0IHRoZSB1c2VyIGNhbGwgdG9hc3QgYXMgZm9sbG93OlxyXG4gICAqIHRvYXN0KCcxJylcclxuICAgKiB0b2FzdCgnMicpXHJcbiAgICogdG9hc3QoJzMnKVxyXG4gICAqIFdpdGhvdXQgc2V0VGltZW1vdXQgdGhlIGNvZGUgYWJvdmUgd2lsbCBub3Qgd29ya1xyXG4gICAqL1xuICBlbWl0OiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHRoaXMubGlzdC5oYXMoZXZlbnQpICYmIHRoaXMubGlzdC5nZXQoZXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSwgMCk7XG4gICAgICBfdGhpcy5lbWl0UXVldWUuaGFzKGV2ZW50KSB8fCBfdGhpcy5lbWl0UXVldWUuc2V0KGV2ZW50LCBbXSk7XG5cbiAgICAgIF90aGlzLmVtaXRRdWV1ZS5nZXQoZXZlbnQpLnB1c2godGltZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcclxuICogYHVzZUtlZXBlcmAgaXMgYSBoZWxwZXIgYXJvdW5kIGB1c2VSZWZgLlxyXG4gKlxyXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBhY2Nlc3MgdGhlIGAuY3VycmVudGBwcm9wZXJ0eSB0byBnZXQgdGhlIHZhbHVlXHJcbiAqIElmIHJlZnJlc2ggaXMgc2V0IHRvIHRydWUuIFRoZSByZWYgd2lsbCBiZSB1cGRhdGVkIGV2ZXJ5IHJlbmRlclxyXG4gKi9cblxuZnVuY3Rpb24gdXNlS2VlcGVyKGFyZywgcmVmcmVzaCkge1xuICBpZiAocmVmcmVzaCA9PT0gdm9pZCAwKSB7XG4gICAgcmVmcmVzaCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHJlZiA9IHVzZVJlZihhcmcpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZWZyZXNoKSByZWYuY3VycmVudCA9IGFyZztcbiAgfSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIDBcbiAgICAvKiBBREQgKi9cbiAgICA6XG4gICAgICByZXR1cm4gW10uY29uY2F0KHN0YXRlLCBbYWN0aW9uLnRvYXN0SWRdKS5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBpZCAhPT0gYWN0aW9uLnN0YWxlSWQ7XG4gICAgICB9KTtcblxuICAgIGNhc2UgMVxuICAgIC8qIFJFTU9WRSAqL1xuICAgIDpcbiAgICAgIHJldHVybiBpc1RvYXN0SWRWYWxpZChhY3Rpb24udG9hc3RJZCkgPyBzdGF0ZS5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBpZCAhPT0gYWN0aW9uLnRvYXN0SWQ7XG4gICAgICB9KSA6IFtdO1xuICB9XG59XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJkZWxheVwiLCBcInN0YWxlSWRcIl07XG5mdW5jdGlvbiB1c2VUb2FzdENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggKyAxO1xuICB9LCAwKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX3VzZVJlZHVjZXJbMV07XG5cbiAgdmFyIF91c2VSZWR1Y2VyMiA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10pLFxuICAgICAgdG9hc3QgPSBfdXNlUmVkdWNlcjJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VSZWR1Y2VyMlsxXTtcblxuICB2YXIgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgdG9hc3RDb3VudCA9IHVzZUtlZXBlcigwKTtcbiAgdmFyIHF1ZXVlID0gdXNlS2VlcGVyKFtdKTtcbiAgdmFyIGNvbGxlY3Rpb24gPSB1c2VLZWVwZXIoe30pO1xuICB2YXIgaW5zdGFuY2UgPSB1c2VLZWVwZXIoe1xuICAgIHRvYXN0S2V5OiAxLFxuICAgIGRpc3BsYXllZFRvYXN0OiAwLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICBjb250YWluZXJJZDogbnVsbCxcbiAgICBpc1RvYXN0QWN0aXZlOiBpc1RvYXN0QWN0aXZlLFxuICAgIGdldFRvYXN0OiBmdW5jdGlvbiBnZXRUb2FzdChpZCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25baWRdIHx8IG51bGw7XG4gICAgfVxuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0YW5jZS5jb250YWluZXJJZCA9IHByb3BzLmNvbnRhaW5lcklkO1xuICAgIGV2ZW50TWFuYWdlci5jYW5jZWxFbWl0KDNcbiAgICAvKiBXaWxsVW5tb3VudCAqL1xuICAgICkub24oMFxuICAgIC8qIFNob3cgKi9cbiAgICAsIGJ1aWxkVG9hc3QpLm9uKDFcbiAgICAvKiBDbGVhciAqL1xuICAgICwgZnVuY3Rpb24gKHRvYXN0SWQpIHtcbiAgICAgIHJldHVybiBjb250YWluZXJSZWYuY3VycmVudCAmJiByZW1vdmVUb2FzdCh0b2FzdElkKTtcbiAgICB9KS5vbig1XG4gICAgLyogQ2xlYXJXYWl0aW5nUXVldWUgKi9cbiAgICAsIGNsZWFyV2FpdGluZ1F1ZXVlKS5lbWl0KDJcbiAgICAvKiBEaWRNb3VudCAqL1xuICAgICwgaW5zdGFuY2UpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZXZlbnRNYW5hZ2VyLmVtaXQoM1xuICAgICAgLyogV2lsbFVubW91bnQgKi9cbiAgICAgICwgaW5zdGFuY2UpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0YW5jZS5pc1RvYXN0QWN0aXZlID0gaXNUb2FzdEFjdGl2ZTtcbiAgICBpbnN0YW5jZS5kaXNwbGF5ZWRUb2FzdCA9IHRvYXN0Lmxlbmd0aDtcbiAgICBldmVudE1hbmFnZXIuZW1pdCg0XG4gICAgLyogQ2hhbmdlICovXG4gICAgLCB0b2FzdC5sZW5ndGgsIHByb3BzLmNvbnRhaW5lcklkKTtcbiAgfSwgW3RvYXN0XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdGFuY2UucHJvcHMgPSBwcm9wcztcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaXNUb2FzdEFjdGl2ZShpZCkge1xuICAgIHJldHVybiB0b2FzdC5pbmRleE9mKGlkKSAhPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcldhaXRpbmdRdWV1ZShfcmVmKSB7XG4gICAgdmFyIGNvbnRhaW5lcklkID0gX3JlZi5jb250YWluZXJJZDtcbiAgICB2YXIgbGltaXQgPSBpbnN0YW5jZS5wcm9wcy5saW1pdDtcblxuICAgIGlmIChsaW1pdCAmJiAoIWNvbnRhaW5lcklkIHx8IGluc3RhbmNlLmNvbnRhaW5lcklkID09PSBjb250YWluZXJJZCkpIHtcbiAgICAgIHRvYXN0Q291bnQgLT0gcXVldWUubGVuZ3RoO1xuICAgICAgcXVldWUgPSBbXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUb2FzdCh0b2FzdElkKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogMVxuICAgICAgLyogUkVNT1ZFICovXG4gICAgICAsXG4gICAgICB0b2FzdElkOiB0b2FzdElkXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXF1ZXVlVG9hc3QoKSB7XG4gICAgdmFyIF9xdWV1ZSRzaGlmdCA9IHF1ZXVlLnNoaWZ0KCksXG4gICAgICAgIHRvYXN0Q29udGVudCA9IF9xdWV1ZSRzaGlmdC50b2FzdENvbnRlbnQsXG4gICAgICAgIHRvYXN0UHJvcHMgPSBfcXVldWUkc2hpZnQudG9hc3RQcm9wcyxcbiAgICAgICAgc3RhbGVJZCA9IF9xdWV1ZSRzaGlmdC5zdGFsZUlkO1xuXG4gICAgYXBwZW5kVG9hc3QodG9hc3RDb250ZW50LCB0b2FzdFByb3BzLCBzdGFsZUlkKTtcbiAgfVxuICAvKipcclxuICAgKiBjaGVjayBpZiBhIGNvbnRhaW5lciBpcyBhdHRhY2hlZCB0byB0aGUgZG9tXHJcbiAgICogY2hlY2sgZm9yIG11bHRpLWNvbnRhaW5lciwgYnVpbGQgb25seSBpZiBhc3NvY2lhdGVkXHJcbiAgICogY2hlY2sgZm9yIGR1cGxpY2F0ZSB0b2FzdElkIGlmIG5vIHVwZGF0ZVxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaXNOb3RWYWxpZChfcmVmMikge1xuICAgIHZhciBjb250YWluZXJJZCA9IF9yZWYyLmNvbnRhaW5lcklkLFxuICAgICAgICB0b2FzdElkID0gX3JlZjIudG9hc3RJZCxcbiAgICAgICAgdXBkYXRlSWQgPSBfcmVmMi51cGRhdGVJZDtcbiAgICByZXR1cm4gIWNvbnRhaW5lclJlZi5jdXJyZW50IHx8IGluc3RhbmNlLnByb3BzLmVuYWJsZU11bHRpQ29udGFpbmVyICYmIGNvbnRhaW5lcklkICE9PSBpbnN0YW5jZS5wcm9wcy5jb250YWluZXJJZCB8fCBjb2xsZWN0aW9uW3RvYXN0SWRdICYmIHVwZGF0ZUlkID09IG51bGwgPyB0cnVlIDogZmFsc2U7XG4gIH0gLy8gdGhpcyBmdW5jdGlvbiBhbmQgYWxsIHRoZSBmdW5jdGlvbiBjYWxsZWQgaW5zaWRlIG5lZWRzIHRvIHJlbHkgb24gcmVmKGB1c2VLZWVwZXJgKVxuXG5cbiAgZnVuY3Rpb24gYnVpbGRUb2FzdChjb250ZW50LCBfcmVmMykge1xuICAgIHZhciBfb3B0aW9ucyRpY29uO1xuXG4gICAgdmFyIGRlbGF5ID0gX3JlZjMuZGVsYXksXG4gICAgICAgIHN0YWxlSWQgPSBfcmVmMy5zdGFsZUlkLFxuICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIF9leGNsdWRlZCk7XG5cbiAgICBpZiAoIWNhbkJlUmVuZGVyZWQoY29udGVudCkgfHwgaXNOb3RWYWxpZChvcHRpb25zKSkgcmV0dXJuO1xuICAgIHZhciB0b2FzdElkID0gb3B0aW9ucy50b2FzdElkLFxuICAgICAgICB1cGRhdGVJZCA9IG9wdGlvbnMudXBkYXRlSWQsXG4gICAgICAgIGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgdmFyIHByb3BzID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICB2YXIgY2xvc2VUb2FzdCA9IGZ1bmN0aW9uIGNsb3NlVG9hc3QoKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlVG9hc3QodG9hc3RJZCk7XG4gICAgfTtcblxuICAgIHZhciBpc05vdEFuVXBkYXRlID0gb3B0aW9ucy51cGRhdGVJZCA9PSBudWxsO1xuICAgIGlmIChpc05vdEFuVXBkYXRlKSB0b2FzdENvdW50Kys7XG4gICAgdmFyIHRvYXN0UHJvcHMgPSB7XG4gICAgICB0b2FzdElkOiB0b2FzdElkLFxuICAgICAgdXBkYXRlSWQ6IHVwZGF0ZUlkLFxuICAgICAgaXNMb2FkaW5nOiBvcHRpb25zLmlzTG9hZGluZyxcbiAgICAgIHRoZW1lOiBvcHRpb25zLnRoZW1lIHx8IHByb3BzLnRoZW1lLFxuICAgICAgaWNvbjogKF9vcHRpb25zJGljb24gPSBvcHRpb25zLmljb24pICE9IG51bGwgPyBfb3B0aW9ucyRpY29uIDogcHJvcHMuaWNvbixcbiAgICAgIGlzSW46IGZhbHNlLFxuICAgICAga2V5OiBvcHRpb25zLmtleSB8fCBpbnN0YW5jZS50b2FzdEtleSsrLFxuICAgICAgdHlwZTogb3B0aW9ucy50eXBlLFxuICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgIGNsb3NlQnV0dG9uOiBvcHRpb25zLmNsb3NlQnV0dG9uLFxuICAgICAgcnRsOiBwcm9wcy5ydGwsXG4gICAgICBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbiB8fCBwcm9wcy5wb3NpdGlvbixcbiAgICAgIHRyYW5zaXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiB8fCBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgY2xhc3NOYW1lOiBwYXJzZUNsYXNzTmFtZShvcHRpb25zLmNsYXNzTmFtZSB8fCBwcm9wcy50b2FzdENsYXNzTmFtZSksXG4gICAgICBib2R5Q2xhc3NOYW1lOiBwYXJzZUNsYXNzTmFtZShvcHRpb25zLmJvZHlDbGFzc05hbWUgfHwgcHJvcHMuYm9keUNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSB8fCBwcm9wcy50b2FzdFN0eWxlLFxuICAgICAgYm9keVN0eWxlOiBvcHRpb25zLmJvZHlTdHlsZSB8fCBwcm9wcy5ib2R5U3R5bGUsXG4gICAgICBvbkNsaWNrOiBvcHRpb25zLm9uQ2xpY2sgfHwgcHJvcHMub25DbGljayxcbiAgICAgIHBhdXNlT25Ib3ZlcjogaXNCb29sKG9wdGlvbnMucGF1c2VPbkhvdmVyKSA/IG9wdGlvbnMucGF1c2VPbkhvdmVyIDogcHJvcHMucGF1c2VPbkhvdmVyLFxuICAgICAgcGF1c2VPbkZvY3VzTG9zczogaXNCb29sKG9wdGlvbnMucGF1c2VPbkZvY3VzTG9zcykgPyBvcHRpb25zLnBhdXNlT25Gb2N1c0xvc3MgOiBwcm9wcy5wYXVzZU9uRm9jdXNMb3NzLFxuICAgICAgZHJhZ2dhYmxlOiBpc0Jvb2wob3B0aW9ucy5kcmFnZ2FibGUpID8gb3B0aW9ucy5kcmFnZ2FibGUgOiBwcm9wcy5kcmFnZ2FibGUsXG4gICAgICBkcmFnZ2FibGVQZXJjZW50OiBpc051bShvcHRpb25zLmRyYWdnYWJsZVBlcmNlbnQpID8gb3B0aW9ucy5kcmFnZ2FibGVQZXJjZW50IDogcHJvcHMuZHJhZ2dhYmxlUGVyY2VudCxcbiAgICAgIGRyYWdnYWJsZURpcmVjdGlvbjogb3B0aW9ucy5kcmFnZ2FibGVEaXJlY3Rpb24gfHwgcHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uLFxuICAgICAgY2xvc2VPbkNsaWNrOiBpc0Jvb2wob3B0aW9ucy5jbG9zZU9uQ2xpY2spID8gb3B0aW9ucy5jbG9zZU9uQ2xpY2sgOiBwcm9wcy5jbG9zZU9uQ2xpY2ssXG4gICAgICBwcm9ncmVzc0NsYXNzTmFtZTogcGFyc2VDbGFzc05hbWUob3B0aW9ucy5wcm9ncmVzc0NsYXNzTmFtZSB8fCBwcm9wcy5wcm9ncmVzc0NsYXNzTmFtZSksXG4gICAgICBwcm9ncmVzc1N0eWxlOiBvcHRpb25zLnByb2dyZXNzU3R5bGUgfHwgcHJvcHMucHJvZ3Jlc3NTdHlsZSxcbiAgICAgIGF1dG9DbG9zZTogb3B0aW9ucy5pc0xvYWRpbmcgPyBmYWxzZSA6IGdldEF1dG9DbG9zZURlbGF5KG9wdGlvbnMuYXV0b0Nsb3NlLCBwcm9wcy5hdXRvQ2xvc2UpLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBpc0Jvb2wob3B0aW9ucy5oaWRlUHJvZ3Jlc3NCYXIpID8gb3B0aW9ucy5oaWRlUHJvZ3Jlc3NCYXIgOiBwcm9wcy5oaWRlUHJvZ3Jlc3NCYXIsXG4gICAgICBwcm9ncmVzczogb3B0aW9ucy5wcm9ncmVzcyxcbiAgICAgIHJvbGU6IGlzU3RyKG9wdGlvbnMucm9sZSkgPyBvcHRpb25zLnJvbGUgOiBwcm9wcy5yb2xlLFxuICAgICAgZGVsZXRlVG9hc3Q6IGZ1bmN0aW9uIGRlbGV0ZVRvYXN0KCkge1xuICAgICAgICByZW1vdmVGcm9tQ29sbGVjdGlvbih0b2FzdElkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpc0ZuKG9wdGlvbnMub25PcGVuKSkgdG9hc3RQcm9wcy5vbk9wZW4gPSBvcHRpb25zLm9uT3BlbjtcbiAgICBpZiAoaXNGbihvcHRpb25zLm9uQ2xvc2UpKSB0b2FzdFByb3BzLm9uQ2xvc2UgPSBvcHRpb25zLm9uQ2xvc2U7IC8vICB0d2VhayBmb3IgdmVydGljYWwgZHJhZ2dpbmdcblxuICAgIGlmICh0b2FzdFByb3BzLmRyYWdnYWJsZURpcmVjdGlvbiA9PT0gXCJ5XCJcbiAgICAvKiBZICovXG4gICAgJiYgdG9hc3RQcm9wcy5kcmFnZ2FibGVQZXJjZW50ID09PSA4MFxuICAgIC8qIERSQUdHQUJMRV9QRVJDRU5UICovXG4gICAgKSB7XG4gICAgICAgIHRvYXN0UHJvcHMuZHJhZ2dhYmxlUGVyY2VudCAqPSAxLjU7XG4gICAgICB9XG5cbiAgICB2YXIgY2xvc2VCdXR0b24gPSBwcm9wcy5jbG9zZUJ1dHRvbjtcblxuICAgIGlmIChvcHRpb25zLmNsb3NlQnV0dG9uID09PSBmYWxzZSB8fCBjYW5CZVJlbmRlcmVkKG9wdGlvbnMuY2xvc2VCdXR0b24pKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IG9wdGlvbnMuY2xvc2VCdXR0b247XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmNsb3NlQnV0dG9uID09PSB0cnVlKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IGNhbkJlUmVuZGVyZWQocHJvcHMuY2xvc2VCdXR0b24pID8gcHJvcHMuY2xvc2VCdXR0b24gOiB0cnVlO1xuICAgIH1cblxuICAgIHRvYXN0UHJvcHMuY2xvc2VCdXR0b24gPSBjbG9zZUJ1dHRvbjtcbiAgICB2YXIgdG9hc3RDb250ZW50ID0gY29udGVudDtcblxuICAgIGlmIChpc1ZhbGlkRWxlbWVudChjb250ZW50KSAmJiAhaXNTdHIoY29udGVudC50eXBlKSkge1xuICAgICAgdG9hc3RDb250ZW50ID0gY2xvbmVFbGVtZW50KGNvbnRlbnQsIHtcbiAgICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgICAgdG9hc3RQcm9wczogdG9hc3RQcm9wcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc0ZuKGNvbnRlbnQpKSB7XG4gICAgICB0b2FzdENvbnRlbnQgPSBjb250ZW50KHtcbiAgICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgICAgdG9hc3RQcm9wczogdG9hc3RQcm9wcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfSAvLyBub3QgaGFuZGxpbmcgbGltaXQgKyBkZWxheSBieSBkZXNpZ24uIFdhaXRpbmcgZm9yIHVzZXIgZmVlZGJhY2sgZmlyc3RcblxuXG4gICAgaWYgKHByb3BzLmxpbWl0ICYmIHByb3BzLmxpbWl0ID4gMCAmJiB0b2FzdENvdW50ID4gcHJvcHMubGltaXQgJiYgaXNOb3RBblVwZGF0ZSkge1xuICAgICAgcXVldWUucHVzaCh7XG4gICAgICAgIHRvYXN0Q29udGVudDogdG9hc3RDb250ZW50LFxuICAgICAgICB0b2FzdFByb3BzOiB0b2FzdFByb3BzLFxuICAgICAgICBzdGFsZUlkOiBzdGFsZUlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTnVtKGRlbGF5KSAmJiBkZWxheSA+IDApIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhcHBlbmRUb2FzdCh0b2FzdENvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBlbmRUb2FzdCh0b2FzdENvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZFRvYXN0KGNvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpIHtcbiAgICB2YXIgdG9hc3RJZCA9IHRvYXN0UHJvcHMudG9hc3RJZDtcbiAgICBpZiAoc3RhbGVJZCkgZGVsZXRlIGNvbGxlY3Rpb25bc3RhbGVJZF07XG4gICAgY29sbGVjdGlvblt0b2FzdElkXSA9IHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBwcm9wczogdG9hc3RQcm9wc1xuICAgIH07XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogMFxuICAgICAgLyogQUREICovXG4gICAgICAsXG4gICAgICB0b2FzdElkOiB0b2FzdElkLFxuICAgICAgc3RhbGVJZDogc3RhbGVJZFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNvbGxlY3Rpb24odG9hc3RJZCkge1xuICAgIGRlbGV0ZSBjb2xsZWN0aW9uW3RvYXN0SWRdO1xuICAgIHZhciBxdWV1ZUxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB0b2FzdENvdW50ID0gaXNUb2FzdElkVmFsaWQodG9hc3RJZCkgPyB0b2FzdENvdW50IC0gMSA6IHRvYXN0Q291bnQgLSBpbnN0YW5jZS5kaXNwbGF5ZWRUb2FzdDtcbiAgICBpZiAodG9hc3RDb3VudCA8IDApIHRvYXN0Q291bnQgPSAwO1xuXG4gICAgaWYgKHF1ZXVlTGVuID4gMCkge1xuICAgICAgdmFyIGZyZWVTbG90ID0gaXNUb2FzdElkVmFsaWQodG9hc3RJZCkgPyAxIDogaW5zdGFuY2UucHJvcHMubGltaXQ7XG5cbiAgICAgIGlmIChxdWV1ZUxlbiA9PT0gMSB8fCBmcmVlU2xvdCA9PT0gMSkge1xuICAgICAgICBpbnN0YW5jZS5kaXNwbGF5ZWRUb2FzdCsrO1xuICAgICAgICBkZXF1ZXVlVG9hc3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0b0RlcXVldWUgPSBmcmVlU2xvdCA+IHF1ZXVlTGVuID8gcXVldWVMZW4gOiBmcmVlU2xvdDtcbiAgICAgICAgaW5zdGFuY2UuZGlzcGxheWVkVG9hc3QgPSB0b0RlcXVldWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b0RlcXVldWU7IGkrKykge1xuICAgICAgICAgIGRlcXVldWVUb2FzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VG9hc3RUb1JlbmRlcihjYikge1xuICAgIHZhciB0b2FzdFRvUmVuZGVyID0ge307XG4gICAgdmFyIHRvYXN0TGlzdCA9IHByb3BzLm5ld2VzdE9uVG9wID8gT2JqZWN0LmtleXMoY29sbGVjdGlvbikucmV2ZXJzZSgpIDogT2JqZWN0LmtleXMoY29sbGVjdGlvbik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvYXN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIF90b2FzdCA9IGNvbGxlY3Rpb25bdG9hc3RMaXN0W2ldXTtcbiAgICAgIHZhciBwb3NpdGlvbiA9IF90b2FzdC5wcm9wcy5wb3NpdGlvbjtcbiAgICAgIHRvYXN0VG9SZW5kZXJbcG9zaXRpb25dIHx8ICh0b2FzdFRvUmVuZGVyW3Bvc2l0aW9uXSA9IFtdKTtcbiAgICAgIHRvYXN0VG9SZW5kZXJbcG9zaXRpb25dLnB1c2goX3RvYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModG9hc3RUb1JlbmRlcikubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gY2IocCwgdG9hc3RUb1JlbmRlcltwXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFRvYXN0VG9SZW5kZXI6IGdldFRvYXN0VG9SZW5kZXIsXG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcbiAgICBjb250YWluZXJSZWY6IGNvbnRhaW5lclJlZixcbiAgICBpc1RvYXN0QWN0aXZlOiBpc1RvYXN0QWN0aXZlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFgoZSkge1xuICByZXR1cm4gZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPj0gMSA/IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYO1xufVxuXG5mdW5jdGlvbiBnZXRZKGUpIHtcbiAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WTtcbn1cblxuZnVuY3Rpb24gdXNlVG9hc3QocHJvcHMpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHRydWUpLFxuICAgICAgaXNSdW5uaW5nID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0SXNSdW5uaW5nID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUyID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgcHJldmVudEV4aXRUcmFuc2l0aW9uID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFByZXZlbnRFeGl0VHJhbnNpdGlvbiA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIHRvYXN0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgZHJhZyA9IHVzZUtlZXBlcih7XG4gICAgc3RhcnQ6IDAsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGRlbHRhOiAwLFxuICAgIHJlbW92YWxEaXN0YW5jZTogMCxcbiAgICBjYW5DbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgY2FuRHJhZzogZmFsc2UsXG4gICAgYm91bmRpbmdSZWN0OiBudWxsXG4gIH0pO1xuICB2YXIgc3luY1Byb3BzID0gdXNlS2VlcGVyKHByb3BzLCB0cnVlKTtcbiAgdmFyIGF1dG9DbG9zZSA9IHByb3BzLmF1dG9DbG9zZSxcbiAgICAgIHBhdXNlT25Ib3ZlciA9IHByb3BzLnBhdXNlT25Ib3ZlcixcbiAgICAgIGNsb3NlVG9hc3QgPSBwcm9wcy5jbG9zZVRvYXN0LFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBjbG9zZU9uQ2xpY2sgPSBwcm9wcy5jbG9zZU9uQ2xpY2s7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzRm4ocHJvcHMub25PcGVuKSkgcHJvcHMub25PcGVuKGlzVmFsaWRFbGVtZW50KHByb3BzLmNoaWxkcmVuKSAmJiBwcm9wcy5jaGlsZHJlbi5wcm9wcyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0ZuKHN5bmNQcm9wcy5vbkNsb3NlKSkgc3luY1Byb3BzLm9uQ2xvc2UoaXNWYWxpZEVsZW1lbnQoc3luY1Byb3BzLmNoaWxkcmVuKSAmJiBzeW5jUHJvcHMuY2hpbGRyZW4ucHJvcHMpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBwcm9wcy5kcmFnZ2FibGUgJiYgYmluZERyYWdFdmVudHMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvcHMuZHJhZ2dhYmxlICYmIHVuYmluZERyYWdFdmVudHMoKTtcbiAgICB9O1xuICB9LCBbcHJvcHMuZHJhZ2dhYmxlXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcHJvcHMucGF1c2VPbkZvY3VzTG9zcyAmJiBiaW5kRm9jdXNFdmVudHMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvcHMucGF1c2VPbkZvY3VzTG9zcyAmJiB1bmJpbmRGb2N1c0V2ZW50cygpO1xuICAgIH07XG4gIH0sIFtwcm9wcy5wYXVzZU9uRm9jdXNMb3NzXSk7XG5cbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZSkge1xuICAgIGlmIChwcm9wcy5kcmFnZ2FibGUpIHtcbiAgICAgIHZhciB0b2FzdCA9IHRvYXN0UmVmLmN1cnJlbnQ7XG4gICAgICBkcmFnLmNhbkNsb3NlT25DbGljayA9IHRydWU7XG4gICAgICBkcmFnLmNhbkRyYWcgPSB0cnVlO1xuICAgICAgZHJhZy5ib3VuZGluZ1JlY3QgPSB0b2FzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgIGRyYWcueCA9IGdldFgoZS5uYXRpdmVFdmVudCk7XG4gICAgICBkcmFnLnkgPSBnZXRZKGUubmF0aXZlRXZlbnQpO1xuXG4gICAgICBpZiAocHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uID09PSBcInhcIlxuICAgICAgLyogWCAqL1xuICAgICAgKSB7XG4gICAgICAgICAgZHJhZy5zdGFydCA9IGRyYWcueDtcbiAgICAgICAgICBkcmFnLnJlbW92YWxEaXN0YW5jZSA9IHRvYXN0Lm9mZnNldFdpZHRoICogKHByb3BzLmRyYWdnYWJsZVBlcmNlbnQgLyAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnLnN0YXJ0ID0gZHJhZy55O1xuICAgICAgICBkcmFnLnJlbW92YWxEaXN0YW5jZSA9IHRvYXN0Lm9mZnNldEhlaWdodCAqIChwcm9wcy5kcmFnZ2FibGVQZXJjZW50IC8gMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdUcmFuc2l0aW9uRW5kKCkge1xuICAgIGlmIChkcmFnLmJvdW5kaW5nUmVjdCkge1xuICAgICAgdmFyIF9kcmFnJGJvdW5kaW5nUmVjdCA9IGRyYWcuYm91bmRpbmdSZWN0LFxuICAgICAgICAgIHRvcCA9IF9kcmFnJGJvdW5kaW5nUmVjdC50b3AsXG4gICAgICAgICAgYm90dG9tID0gX2RyYWckYm91bmRpbmdSZWN0LmJvdHRvbSxcbiAgICAgICAgICBsZWZ0ID0gX2RyYWckYm91bmRpbmdSZWN0LmxlZnQsXG4gICAgICAgICAgcmlnaHQgPSBfZHJhZyRib3VuZGluZ1JlY3QucmlnaHQ7XG5cbiAgICAgIGlmIChwcm9wcy5wYXVzZU9uSG92ZXIgJiYgZHJhZy54ID49IGxlZnQgJiYgZHJhZy54IDw9IHJpZ2h0ICYmIGRyYWcueSA+PSB0b3AgJiYgZHJhZy55IDw9IGJvdHRvbSkge1xuICAgICAgICBwYXVzZVRvYXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5VG9hc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5VG9hc3QoKSB7XG4gICAgc2V0SXNSdW5uaW5nKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2VUb2FzdCgpIHtcbiAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZEZvY3VzRXZlbnRzKCkge1xuICAgIGlmICghZG9jdW1lbnQuaGFzRm9jdXMoKSkgcGF1c2VUb2FzdCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHBsYXlUb2FzdCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBwYXVzZVRvYXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmluZEZvY3VzRXZlbnRzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHBsYXlUb2FzdCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBwYXVzZVRvYXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmREcmFnRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRHJhZ01vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRyYWdFbmQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uRHJhZ01vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25EcmFnRW5kKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmluZERyYWdFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25EcmFnTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRHJhZ0VuZCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25EcmFnTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRyYWdFbmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnTW92ZShlKSB7XG4gICAgaWYgKGRyYWcuY2FuRHJhZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHRvYXN0ID0gdG9hc3RSZWYuY3VycmVudDtcbiAgICAgIGlmIChpc1J1bm5pbmcpIHBhdXNlVG9hc3QoKTtcbiAgICAgIGRyYWcueCA9IGdldFgoZSk7XG4gICAgICBkcmFnLnkgPSBnZXRZKGUpO1xuXG4gICAgICBpZiAocHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uID09PSBcInhcIlxuICAgICAgLyogWCAqL1xuICAgICAgKSB7XG4gICAgICAgICAgZHJhZy5kZWx0YSA9IGRyYWcueCAtIGRyYWcuc3RhcnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWcuZGVsdGEgPSBkcmFnLnkgLSBkcmFnLnN0YXJ0O1xuICAgICAgfSAvLyBwcmV2ZW50IGZhbHNlIHBvc2l0aWYgZHVyaW5nIGEgdG9hc3QgY2xpY2tcblxuXG4gICAgICBpZiAoZHJhZy5zdGFydCAhPT0gZHJhZy54KSBkcmFnLmNhbkNsb3NlT25DbGljayA9IGZhbHNlO1xuICAgICAgdG9hc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVcIiArIHByb3BzLmRyYWdnYWJsZURpcmVjdGlvbiArIFwiKFwiICsgZHJhZy5kZWx0YSArIFwicHgpXCI7XG4gICAgICB0b2FzdC5zdHlsZS5vcGFjaXR5ID0gXCJcIiArICgxIC0gTWF0aC5hYnMoZHJhZy5kZWx0YSAvIGRyYWcucmVtb3ZhbERpc3RhbmNlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnRW5kKCkge1xuICAgIHZhciB0b2FzdCA9IHRvYXN0UmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAoZHJhZy5jYW5EcmFnKSB7XG4gICAgICBkcmFnLmNhbkRyYWcgPSBmYWxzZTtcblxuICAgICAgaWYgKE1hdGguYWJzKGRyYWcuZGVsdGEpID4gZHJhZy5yZW1vdmFsRGlzdGFuY2UpIHtcbiAgICAgICAgc2V0UHJldmVudEV4aXRUcmFuc2l0aW9uKHRydWUpO1xuICAgICAgICBwcm9wcy5jbG9zZVRvYXN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzJztcbiAgICAgIHRvYXN0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlXCIgKyBwcm9wcy5kcmFnZ2FibGVEaXJlY3Rpb24gKyBcIigwKVwiO1xuICAgICAgdG9hc3Quc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG4gIH1cblxuICB2YXIgZXZlbnRIYW5kbGVycyA9IHtcbiAgICBvbk1vdXNlRG93bjogb25EcmFnU3RhcnQsXG4gICAgb25Ub3VjaFN0YXJ0OiBvbkRyYWdTdGFydCxcbiAgICBvbk1vdXNlVXA6IG9uRHJhZ1RyYW5zaXRpb25FbmQsXG4gICAgb25Ub3VjaEVuZDogb25EcmFnVHJhbnNpdGlvbkVuZFxuICB9O1xuXG4gIGlmIChhdXRvQ2xvc2UgJiYgcGF1c2VPbkhvdmVyKSB7XG4gICAgZXZlbnRIYW5kbGVycy5vbk1vdXNlRW50ZXIgPSBwYXVzZVRvYXN0O1xuICAgIGV2ZW50SGFuZGxlcnMub25Nb3VzZUxlYXZlID0gcGxheVRvYXN0O1xuICB9IC8vIHByZXZlbnQgdG9hc3QgZnJvbSBjbG9zaW5nIHdoZW4gdXNlciBkcmFncyB0aGUgdG9hc3RcblxuXG4gIGlmIChjbG9zZU9uQ2xpY2spIHtcbiAgICBldmVudEhhbmRsZXJzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgb25DbGljayAmJiBvbkNsaWNrKGUpO1xuICAgICAgZHJhZy5jYW5DbG9zZU9uQ2xpY2sgJiYgY2xvc2VUb2FzdCgpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYXlUb2FzdDogcGxheVRvYXN0LFxuICAgIHBhdXNlVG9hc3Q6IHBhdXNlVG9hc3QsXG4gICAgaXNSdW5uaW5nOiBpc1J1bm5pbmcsXG4gICAgcHJldmVudEV4aXRUcmFuc2l0aW9uOiBwcmV2ZW50RXhpdFRyYW5zaXRpb24sXG4gICAgdG9hc3RSZWY6IHRvYXN0UmVmLFxuICAgIGV2ZW50SGFuZGxlcnM6IGV2ZW50SGFuZGxlcnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gQ2xvc2VCdXR0b24oX3JlZikge1xuICB2YXIgY2xvc2VUb2FzdCA9IF9yZWYuY2xvc2VUb2FzdCxcbiAgICAgIHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIF9yZWYkYXJpYUxhYmVsID0gX3JlZi5hcmlhTGFiZWwsXG4gICAgICBhcmlhTGFiZWwgPSBfcmVmJGFyaWFMYWJlbCA9PT0gdm9pZCAwID8gJ2Nsb3NlJyA6IF9yZWYkYXJpYUxhYmVsO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fY2xvc2UtYnV0dG9uIFwiICsgXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX2Nsb3NlLWJ1dHRvbi0tXCIgKyB0aGVtZSxcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNsb3NlVG9hc3QoZSk7XG4gICAgfSxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gIH0sIGNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgdmlld0JveDogXCIwIDAgMTQgMTZcIlxuICB9LCBjcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGQ6IFwiTTcuNzEgOC4yM2wzLjc1IDMuNzUtMS40OCAxLjQ4LTMuNzUtMy43NS0zLjc1IDMuNzVMMSAxMS45OGwzLjc1LTMuNzVMMSA0LjQ4IDIuNDggM2wzLjc1IDMuNzVMOS45OCAzbDEuNDggMS40OC0zLjc1IDMuNzV6XCJcbiAgfSkpKTtcbn1cblxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoX3JlZikge1xuICB2YXIgX2N4LCBfYW5pbWF0aW9uRXZlbnQ7XG5cbiAgdmFyIGRlbGF5ID0gX3JlZi5kZWxheSxcbiAgICAgIGlzUnVubmluZyA9IF9yZWYuaXNSdW5uaW5nLFxuICAgICAgY2xvc2VUb2FzdCA9IF9yZWYuY2xvc2VUb2FzdCxcbiAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBoaWRlID0gX3JlZi5oaWRlLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICB1c2VyU3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgY29udHJvbGxlZFByb2dyZXNzID0gX3JlZi5jb250cm9sbGVkUHJvZ3Jlc3MsXG4gICAgICBwcm9ncmVzcyA9IF9yZWYucHJvZ3Jlc3MsXG4gICAgICBydGwgPSBfcmVmLnJ0bCxcbiAgICAgIGlzSW4gPSBfcmVmLmlzSW4sXG4gICAgICB0aGVtZSA9IF9yZWYudGhlbWU7XG5cbiAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHVzZXJTdHlsZSwge1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBkZWxheSArIFwibXNcIixcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IGlzUnVubmluZyA/ICdydW5uaW5nJyA6ICdwYXVzZWQnLFxuICAgIG9wYWNpdHk6IGhpZGUgPyAwIDogMVxuICB9KTtcblxuICBpZiAoY29udHJvbGxlZFByb2dyZXNzKSBzdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlWChcIiArIHByb2dyZXNzICsgXCIpXCI7XG4gIHZhciBkZWZhdWx0Q2xhc3NOYW1lID0gY3goXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyXCIsIGNvbnRyb2xsZWRQcm9ncmVzcyA/IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhci0tY29udHJvbGxlZFwiIDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZFwiLCBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19wcm9ncmVzcy1iYXItdGhlbWUtLVwiICsgdGhlbWUsIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhci0tXCIgKyB0eXBlLCAoX2N4ID0ge30sIF9jeFtcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19wcm9ncmVzcy1iYXItLXJ0bFwiXSA9IHJ0bCwgX2N4KSk7XG4gIHZhciBjbGFzc05hbWVzID0gaXNGbihjbGFzc05hbWUpID8gY2xhc3NOYW1lKHtcbiAgICBydGw6IHJ0bCxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRlZmF1bHRDbGFzc05hbWU6IGRlZmF1bHRDbGFzc05hbWVcbiAgfSkgOiBjeChkZWZhdWx0Q2xhc3NOYW1lLCBjbGFzc05hbWUpOyAvLyDwn6eQIGNvbnRyb2xsZWRQcm9ncmVzcyBpcyBkZXJpdmVkIGZyb20gcHJvZ3Jlc3NcbiAgLy8gc28gaWYgY29udHJvbGxlZFByb2dyZXNzIGlzIHNldFxuICAvLyBpdCBtZWFucyB0aGF0IHRoaXMgaXMgYWxzbyB0aGUgY2FzZSBmb3IgcHJvZ3Jlc3NcblxuICB2YXIgYW5pbWF0aW9uRXZlbnQgPSAoX2FuaW1hdGlvbkV2ZW50ID0ge30sIF9hbmltYXRpb25FdmVudFtjb250cm9sbGVkUHJvZ3Jlc3MgJiYgcHJvZ3Jlc3MgPj0gMSA/ICdvblRyYW5zaXRpb25FbmQnIDogJ29uQW5pbWF0aW9uRW5kJ10gPSBjb250cm9sbGVkUHJvZ3Jlc3MgJiYgcHJvZ3Jlc3MgPCAxID8gbnVsbCA6IGZ1bmN0aW9uICgpIHtcbiAgICBpc0luICYmIGNsb3NlVG9hc3QoKTtcbiAgfSwgX2FuaW1hdGlvbkV2ZW50KTsgLy8gVE9ETzogYWRkIGFyaWEtdmFsdWVub3csIGFyaWEtdmFsdWVtYXgsIGFyaWEtdmFsdWVtaW5cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICByb2xlOiBcInByb2dyZXNzYmFyXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBoaWRlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICBcImFyaWEtbGFiZWxcIjogXCJub3RpZmljYXRpb24gdGltZXJcIixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGFuaW1hdGlvbkV2ZW50KSk7XG59XG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6IFRZUEUuREVGQVVMVCxcbiAgaGlkZTogZmFsc2Vcbn07XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcInRoZW1lXCIsIFwidHlwZVwiXTtcblxudmFyIFN2ZyA9IGZ1bmN0aW9uIFN2ZyhfcmVmKSB7XG4gIHZhciB0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCQxKTtcblxuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGZpbGw6IHRoZW1lID09PSAnY29sb3JlZCcgPyAnY3VycmVudENvbG9yJyA6IFwidmFyKC0tdG9hc3RpZnktaWNvbi1jb2xvci1cIiArIHR5cGUgKyBcIilcIlxuICB9LCByZXN0KSk7XG59O1xuXG5mdW5jdGlvbiBXYXJuaW5nKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2ZywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjMuMzIgMTcuMTkxTDE1LjQzOCAyLjE4NEMxNC43MjguODMzIDEzLjQxNiAwIDExLjk5NiAwYy0xLjQyIDAtMi43MzMuODMzLTMuNDQzIDIuMTg0TC41MzMgMTcuNDQ4YTQuNzQ0IDQuNzQ0IDAgMDAwIDQuMzY4QzEuMjQzIDIzLjE2NyAyLjU1NSAyNCAzLjk3NSAyNGgxNi4wNUMyMi4yMiAyNCAyNCAyMi4wNDQgMjQgMTkuNjMyYzAtLjkwNC0uMjUxLTEuNzQ2LS42OC0yLjQ0em0tOS42MjIgMS40NmMwIDEuMDMzLS43MjQgMS44MjMtMS42OTggMS44MjNzLTEuNjk4LS43OS0xLjY5OC0xLjgyMnYtLjA0M2MwLTEuMDI4LjcyNC0xLjgyMiAxLjY5OC0xLjgyMnMxLjY5OC43OSAxLjY5OCAxLjgyMnYuMDQzem0uMDM5LTEyLjI4NWwtLjg0IDguMDZjLS4wNTcuNTgxLS40MDguOTQzLS44OTcuOTQzLS40OSAwLS44NC0uMzY3LS44OTYtLjk0MmwtLjg0LTguMDY1Yy0uMDU3LS42MjQuMjUtMS4wOTUuNzc5LTEuMDk1aDEuOTFjLjUyOC4wMDUuODQuNDc2Ljc4NCAxLjF6XCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBJbmZvKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2ZywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIgMGExMiAxMiAwIDEwMTIgMTJBMTIuMDEzIDEyLjAxMyAwIDAwMTIgMHptLjI1IDVhMS41IDEuNSAwIDExLTEuNSAxLjUgMS41IDEuNSAwIDAxMS41LTEuNXptMi4yNSAxMy41aC00YTEgMSAwIDAxMC0yaC43NWEuMjUuMjUgMCAwMC4yNS0uMjV2LTQuNWEuMjUuMjUgMCAwMC0uMjUtLjI1aC0uNzVhMSAxIDAgMDEwLTJoMWEyIDIgMCAwMTIgMnY0Ljc1YS4yNS4yNSAwIDAwLjI1LjI1aC43NWExIDEgMCAxMTAgMnpcIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIFN1Y2Nlc3MocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMiAwYTEyIDEyIDAgMTAxMiAxMkExMi4wMTQgMTIuMDE0IDAgMDAxMiAwem02LjkyNyA4LjJsLTYuODQ1IDkuMjg5YTEuMDExIDEuMDExIDAgMDEtMS40My4xODhsLTQuODg4LTMuOTA4YTEgMSAwIDExMS4yNS0xLjU2Mmw0LjA3NiAzLjI2MSA2LjIyNy04LjQ1MWExIDEgMCAxMTEuNjEgMS4xODN6XCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBFcnJvcihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmcsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTExLjk4MyAwYTEyLjIwNiAxMi4yMDYgMCAwMC04LjUxIDMuNjUzQTExLjggMTEuOCAwIDAwMCAxMi4yMDcgMTEuNzc5IDExLjc3OSAwIDAwMTEuOCAyNGguMjE0QTEyLjExMSAxMi4xMTEgMCAwMDI0IDExLjc5MSAxMS43NjYgMTEuNzY2IDAgMDAxMS45ODMgMHpNMTAuNSAxNi41NDJhMS40NzYgMS40NzYgMCAwMTEuNDQ5LTEuNTNoLjAyN2ExLjUyNyAxLjUyNyAwIDAxMS41MjMgMS40NyAxLjQ3NSAxLjQ3NSAwIDAxLTEuNDQ5IDEuNTNoLS4wMjdhMS41MjkgMS41MjkgMCAwMS0xLjUyMy0xLjQ3ek0xMSAxMi41di02YTEgMSAwIDAxMiAwdjZhMSAxIDAgMTEtMiAwelwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gU3Bpbm5lcigpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX3NwaW5uZXJcIlxuICB9KTtcbn1cblxudmFyIEljb25zID0ge1xuICBpbmZvOiBJbmZvLFxuICB3YXJuaW5nOiBXYXJuaW5nLFxuICBzdWNjZXNzOiBTdWNjZXNzLFxuICBlcnJvcjogRXJyb3IsXG4gIHNwaW5uZXI6IFNwaW5uZXJcbn07XG5cbnZhciBUb2FzdCA9IGZ1bmN0aW9uIFRvYXN0KHByb3BzKSB7XG4gIHZhciBfY3gsIF9jeDI7XG5cbiAgdmFyIF91c2VUb2FzdCA9IHVzZVRvYXN0KHByb3BzKSxcbiAgICAgIGlzUnVubmluZyA9IF91c2VUb2FzdC5pc1J1bm5pbmcsXG4gICAgICBwcmV2ZW50RXhpdFRyYW5zaXRpb24gPSBfdXNlVG9hc3QucHJldmVudEV4aXRUcmFuc2l0aW9uLFxuICAgICAgdG9hc3RSZWYgPSBfdXNlVG9hc3QudG9hc3RSZWYsXG4gICAgICBldmVudEhhbmRsZXJzID0gX3VzZVRvYXN0LmV2ZW50SGFuZGxlcnM7XG5cbiAgdmFyIGNsb3NlQnV0dG9uID0gcHJvcHMuY2xvc2VCdXR0b24sXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYXV0b0Nsb3NlID0gcHJvcHMuYXV0b0Nsb3NlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIGhpZGVQcm9ncmVzc0JhciA9IHByb3BzLmhpZGVQcm9ncmVzc0JhcixcbiAgICAgIGNsb3NlVG9hc3QgPSBwcm9wcy5jbG9zZVRvYXN0LFxuICAgICAgVHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBwb3NpdGlvbiA9IHByb3BzLnBvc2l0aW9uLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGJvZHlDbGFzc05hbWUgPSBwcm9wcy5ib2R5Q2xhc3NOYW1lLFxuICAgICAgYm9keVN0eWxlID0gcHJvcHMuYm9keVN0eWxlLFxuICAgICAgcHJvZ3Jlc3NDbGFzc05hbWUgPSBwcm9wcy5wcm9ncmVzc0NsYXNzTmFtZSxcbiAgICAgIHByb2dyZXNzU3R5bGUgPSBwcm9wcy5wcm9ncmVzc1N0eWxlLFxuICAgICAgdXBkYXRlSWQgPSBwcm9wcy51cGRhdGVJZCxcbiAgICAgIHJvbGUgPSBwcm9wcy5yb2xlLFxuICAgICAgcHJvZ3Jlc3MgPSBwcm9wcy5wcm9ncmVzcyxcbiAgICAgIHJ0bCA9IHByb3BzLnJ0bCxcbiAgICAgIHRvYXN0SWQgPSBwcm9wcy50b2FzdElkLFxuICAgICAgZGVsZXRlVG9hc3QgPSBwcm9wcy5kZWxldGVUb2FzdCxcbiAgICAgIGlzSW4gPSBwcm9wcy5pc0luLFxuICAgICAgaXNMb2FkaW5nID0gcHJvcHMuaXNMb2FkaW5nLFxuICAgICAgaWNvbiA9IHByb3BzLmljb24sXG4gICAgICB0aGVtZSA9IHByb3BzLnRoZW1lO1xuICB2YXIgZGVmYXVsdENsYXNzTmFtZSA9IGN4KFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3RvYXN0XCIsIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3RvYXN0LXRoZW1lLS1cIiArIHRoZW1lLCBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX190b2FzdC0tXCIgKyB0eXBlLCAoX2N4ID0ge30sIF9jeFtcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX190b2FzdC0tcnRsXCJdID0gcnRsLCBfY3gpKTtcbiAgdmFyIGNzc0NsYXNzZXMgPSBpc0ZuKGNsYXNzTmFtZSkgPyBjbGFzc05hbWUoe1xuICAgIHJ0bDogcnRsLFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRlZmF1bHRDbGFzc05hbWU6IGRlZmF1bHRDbGFzc05hbWVcbiAgfSkgOiBjeChkZWZhdWx0Q2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICB2YXIgaXNQcm9ncmVzc0NvbnRyb2xsZWQgPSAhIXByb2dyZXNzO1xuICB2YXIgbWF5YmVJY29uID0gSWNvbnNbdHlwZV07XG4gIHZhciBpY29uUHJvcHMgPSB7XG4gICAgdGhlbWU6IHRoZW1lLFxuICAgIHR5cGU6IHR5cGVcbiAgfTtcbiAgdmFyIEljb24gPSBtYXliZUljb24gJiYgbWF5YmVJY29uKGljb25Qcm9wcyk7XG5cbiAgaWYgKGljb24gPT09IGZhbHNlKSB7XG4gICAgSWNvbiA9IHZvaWQgMDtcbiAgfSBlbHNlIGlmIChpc0ZuKGljb24pKSB7XG4gICAgSWNvbiA9IGljb24oaWNvblByb3BzKTtcbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChpY29uKSkge1xuICAgIEljb24gPSBjbG9uZUVsZW1lbnQoaWNvbiwgaWNvblByb3BzKTtcbiAgfSBlbHNlIGlmIChpc1N0cihpY29uKSkge1xuICAgIEljb24gPSBpY29uO1xuICB9IGVsc2UgaWYgKGlzTG9hZGluZykge1xuICAgIEljb24gPSBJY29ucy5zcGlubmVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDbG9zZUJ1dHRvbihjbG9zZUJ1dHRvbikge1xuICAgIGlmICghY2xvc2VCdXR0b24pIHJldHVybjtcbiAgICB2YXIgcHJvcHMgPSB7XG4gICAgICBjbG9zZVRvYXN0OiBjbG9zZVRvYXN0LFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHRoZW1lOiB0aGVtZVxuICAgIH07XG4gICAgaWYgKGlzRm4oY2xvc2VCdXR0b24pKSByZXR1cm4gY2xvc2VCdXR0b24ocHJvcHMpO1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChjbG9zZUJ1dHRvbikpIHJldHVybiBjbG9uZUVsZW1lbnQoY2xvc2VCdXR0b24sIHByb3BzKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRyYW5zaXRpb24sIHtcbiAgICBpc0luOiBpc0luLFxuICAgIGRvbmU6IGRlbGV0ZVRvYXN0LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICBwcmV2ZW50RXhpdFRyYW5zaXRpb246IHByZXZlbnRFeGl0VHJhbnNpdGlvbixcbiAgICBub2RlUmVmOiB0b2FzdFJlZlxuICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIGlkOiB0b2FzdElkLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lOiBjc3NDbGFzc2VzXG4gIH0sIGV2ZW50SGFuZGxlcnMsIHtcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgcmVmOiB0b2FzdFJlZlxuICB9KSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCBpc0luICYmIHtcbiAgICByb2xlOiByb2xlXG4gIH0sIHtcbiAgICBjbGFzc05hbWU6IGlzRm4oYm9keUNsYXNzTmFtZSkgPyBib2R5Q2xhc3NOYW1lKHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9KSA6IGN4KFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiX190b2FzdC1ib2R5XCIsIGJvZHlDbGFzc05hbWUpLFxuICAgIHN0eWxlOiBib2R5U3R5bGVcbiAgfSksIEljb24gJiYgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjeChcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fdG9hc3QtaWNvblwiLCAoX2N4MiA9IHt9LCBfY3gyW1wiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiLS1hbmltYXRlLWljb24gXCIgKyBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fem9vbS1lbnRlclwiXSA9ICFpc0xvYWRpbmcsIF9jeDIpKVxuICB9LCBJY29uKSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBjaGlsZHJlbikpLCByZW5kZXJDbG9zZUJ1dHRvbihjbG9zZUJ1dHRvbiksIChhdXRvQ2xvc2UgfHwgaXNQcm9ncmVzc0NvbnRyb2xsZWQpICYmIGNyZWF0ZUVsZW1lbnQoUHJvZ3Jlc3NCYXIsIE9iamVjdC5hc3NpZ24oe30sIHVwZGF0ZUlkICYmICFpc1Byb2dyZXNzQ29udHJvbGxlZCA/IHtcbiAgICBrZXk6IFwicGItXCIgKyB1cGRhdGVJZFxuICB9IDoge30sIHtcbiAgICBydGw6IHJ0bCxcbiAgICB0aGVtZTogdGhlbWUsXG4gICAgZGVsYXk6IGF1dG9DbG9zZSxcbiAgICBpc1J1bm5pbmc6IGlzUnVubmluZyxcbiAgICBpc0luOiBpc0luLFxuICAgIGNsb3NlVG9hc3Q6IGNsb3NlVG9hc3QsXG4gICAgaGlkZTogaGlkZVByb2dyZXNzQmFyLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgc3R5bGU6IHByb2dyZXNzU3R5bGUsXG4gICAgY2xhc3NOYW1lOiBwcm9ncmVzc0NsYXNzTmFtZSxcbiAgICBjb250cm9sbGVkUHJvZ3Jlc3M6IGlzUHJvZ3Jlc3NDb250cm9sbGVkLFxuICAgIHByb2dyZXNzOiBwcm9ncmVzc1xuICB9KSkpKTtcbn07XG5cbnZhciBCb3VuY2UgPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fYm91bmNlLWVudGVyXCIsXG4gIGV4aXQ6IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCItLWFuaW1hdGUgXCIgKyBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19ib3VuY2UtZXhpdFwiLFxuICBhcHBlbmRQb3NpdGlvbjogdHJ1ZVxufSk7XG52YXIgU2xpZGUgPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fc2xpZGUtZW50ZXJcIixcbiAgZXhpdDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3NsaWRlLWV4aXRcIixcbiAgYXBwZW5kUG9zaXRpb246IHRydWVcbn0pO1xudmFyIFpvb20gPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fem9vbS1lbnRlclwiLFxuICBleGl0OiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fem9vbS1leGl0XCJcbn0pO1xudmFyIEZsaXAgPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fZmxpcC1lbnRlclwiLFxuICBleGl0OiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fZmxpcC1leGl0XCJcbn0pO1xuXG52YXIgVG9hc3RDb250YWluZXIgPSBmdW5jdGlvbiBUb2FzdENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgX3VzZVRvYXN0Q29udGFpbmVyID0gdXNlVG9hc3RDb250YWluZXIocHJvcHMpLFxuICAgICAgZ2V0VG9hc3RUb1JlbmRlciA9IF91c2VUb2FzdENvbnRhaW5lci5nZXRUb2FzdFRvUmVuZGVyLFxuICAgICAgY29udGFpbmVyUmVmID0gX3VzZVRvYXN0Q29udGFpbmVyLmNvbnRhaW5lclJlZixcbiAgICAgIGlzVG9hc3RBY3RpdmUgPSBfdXNlVG9hc3RDb250YWluZXIuaXNUb2FzdEFjdGl2ZTtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHJ0bCA9IHByb3BzLnJ0bCxcbiAgICAgIGNvbnRhaW5lcklkID0gcHJvcHMuY29udGFpbmVySWQ7XG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIF9jeDtcblxuICAgIHZhciBkZWZhdWx0Q2xhc3NOYW1lID0gY3goXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX3RvYXN0LWNvbnRhaW5lclwiLCBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fdG9hc3QtY29udGFpbmVyLS1cIiArIHBvc2l0aW9uLCAoX2N4ID0ge30sIF9jeFtcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fdG9hc3QtY29udGFpbmVyLS1ydGxcIl0gPSBydGwsIF9jeCkpO1xuICAgIHJldHVybiBpc0ZuKGNsYXNzTmFtZSkgPyBjbGFzc05hbWUoe1xuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgcnRsOiBydGwsXG4gICAgICBkZWZhdWx0Q2xhc3NOYW1lOiBkZWZhdWx0Q2xhc3NOYW1lXG4gICAgfSkgOiBjeChkZWZhdWx0Q2xhc3NOYW1lLCBwYXJzZUNsYXNzTmFtZShjbGFzc05hbWUpKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByZWY6IGNvbnRhaW5lclJlZixcbiAgICBjbGFzc05hbWU6IFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICAsXG4gICAgaWQ6IGNvbnRhaW5lcklkXG4gIH0sIGdldFRvYXN0VG9SZW5kZXIoZnVuY3Rpb24gKHBvc2l0aW9uLCB0b2FzdExpc3QpIHtcbiAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB0b2FzdExpc3QubGVuZ3RoID09PSAwID8gX2V4dGVuZHMoe30sIHN0eWxlLCB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9KSA6IF9leHRlbmRzKHt9LCBzdHlsZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocG9zaXRpb24pLFxuICAgICAgc3R5bGU6IGNvbnRhaW5lclN0eWxlLFxuICAgICAga2V5OiBcImNvbnRhaW5lci1cIiArIHBvc2l0aW9uXG4gICAgfSwgdG9hc3RMaXN0Lm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGNvbnRlbnQgPSBfcmVmLmNvbnRlbnQsXG4gICAgICAgICAgdG9hc3RQcm9wcyA9IF9yZWYucHJvcHM7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChUb2FzdCwgT2JqZWN0LmFzc2lnbih7fSwgdG9hc3RQcm9wcywge1xuICAgICAgICBpc0luOiBpc1RvYXN0QWN0aXZlKHRvYXN0UHJvcHMudG9hc3RJZCksXG4gICAgICAgIGtleTogXCJ0b2FzdC1cIiArIHRvYXN0UHJvcHMua2V5LFxuICAgICAgICBjbG9zZUJ1dHRvbjogdG9hc3RQcm9wcy5jbG9zZUJ1dHRvbiA9PT0gdHJ1ZSA/IENsb3NlQnV0dG9uIDogdG9hc3RQcm9wcy5jbG9zZUJ1dHRvblxuICAgICAgfSksIGNvbnRlbnQpO1xuICAgIH0pKTtcbiAgfSkpO1xufTtcblRvYXN0Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb246IFBPU0lUSU9OLlRPUF9SSUdIVCxcbiAgdHJhbnNpdGlvbjogQm91bmNlLFxuICBydGw6IGZhbHNlLFxuICBhdXRvQ2xvc2U6IDUwMDAsXG4gIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uOiBDbG9zZUJ1dHRvbixcbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICBwYXVzZU9uRm9jdXNMb3NzOiB0cnVlLFxuICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gIG5ld2VzdE9uVG9wOiBmYWxzZSxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBkcmFnZ2FibGVQZXJjZW50OiA4MFxuICAvKiBEUkFHR0FCTEVfUEVSQ0VOVCAqL1xuICAsXG4gIGRyYWdnYWJsZURpcmVjdGlvbjogXCJ4XCJcbiAgLyogWCAqL1xuICAsXG4gIHJvbGU6ICdhbGVydCcsXG4gIHRoZW1lOiAnbGlnaHQnXG59O1xuXG52YXIgY29udGFpbmVycyA9IC8qI19fUFVSRV9fKi9uZXcgTWFwKCk7XG52YXIgbGF0ZXN0SW5zdGFuY2U7XG52YXIgY29udGFpbmVyRG9tTm9kZTtcbnZhciBjb250YWluZXJDb25maWc7XG52YXIgcXVldWUgPSBbXTtcbnZhciBsYXp5ID0gZmFsc2U7XG4vKipcclxuICogQ2hlY2sgd2hldGhlciBhbnkgY29udGFpbmVyIGlzIGN1cnJlbnRseSBtb3VudGVkIGluIHRoZSBET01cclxuICovXG5cbmZ1bmN0aW9uIGlzQW55Q29udGFpbmVyTW91bnRlZCgpIHtcbiAgcmV0dXJuIGNvbnRhaW5lcnMuc2l6ZSA+IDA7XG59XG4vKipcclxuICogR2V0IHRoZSB0b2FzdCBieSBpZCwgZ2l2ZW4gaXQncyBpbiB0aGUgRE9NLCBvdGhlcndpc2UgcmV0dXJucyBudWxsXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRvYXN0KHRvYXN0SWQsIF9yZWYpIHtcbiAgdmFyIGNvbnRhaW5lcklkID0gX3JlZi5jb250YWluZXJJZDtcbiAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lcnMuZ2V0KGNvbnRhaW5lcklkIHx8IGxhdGVzdEluc3RhbmNlKTtcbiAgaWYgKCFjb250YWluZXIpIHJldHVybiBudWxsO1xuICByZXR1cm4gY29udGFpbmVyLmdldFRvYXN0KHRvYXN0SWQpO1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIHRvYXN0SWRcclxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2FzdElkKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgdG9hc3RJZCBvciB1c2UgdGhlIG9uZSBwcm92aWRlZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUb2FzdElkKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgKGlzU3RyKG9wdGlvbnMudG9hc3RJZCkgfHwgaXNOdW0ob3B0aW9ucy50b2FzdElkKSkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy50b2FzdElkO1xuICB9XG5cbiAgcmV0dXJuIGdlbmVyYXRlVG9hc3RJZCgpO1xufVxuLyoqXHJcbiAqIElmIHRoZSBjb250YWluZXIgaXMgbm90IG1vdW50ZWQsIHRoZSB0b2FzdCBpcyBlbnF1ZXVlZCBhbmRcclxuICogdGhlIGNvbnRhaW5lciBsYXp5IG1vdW50ZWRcclxuICovXG5cblxuZnVuY3Rpb24gZGlzcGF0Y2hUb2FzdChjb250ZW50LCBvcHRpb25zKSB7XG4gIGlmIChpc0FueUNvbnRhaW5lck1vdW50ZWQoKSkge1xuICAgIGV2ZW50TWFuYWdlci5lbWl0KDBcbiAgICAvKiBTaG93ICovXG4gICAgLCBjb250ZW50LCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG5cbiAgICBpZiAobGF6eSAmJiBjYW5Vc2VEb20pIHtcbiAgICAgIGxhenkgPSBmYWxzZTtcbiAgICAgIGNvbnRhaW5lckRvbU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRG9tTm9kZSk7XG4gICAgICByZW5kZXIoY3JlYXRlRWxlbWVudChUb2FzdENvbnRhaW5lciwgT2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyQ29uZmlnKSksIGNvbnRhaW5lckRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLnRvYXN0SWQ7XG59XG4vKipcclxuICogTWVyZ2UgcHJvdmlkZWQgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0cyBzZXR0aW5ncyBhbmQgZ2VuZXJhdGUgdGhlIHRvYXN0SWRcclxuICovXG5cblxuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKHR5cGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgdHlwZTogb3B0aW9ucyAmJiBvcHRpb25zLnR5cGUgfHwgdHlwZSxcbiAgICB0b2FzdElkOiBnZXRUb2FzdElkKG9wdGlvbnMpXG4gIH0pO1xufVxuXG52YXIgY3JlYXRlVG9hc3RCeVR5cGUgPSBmdW5jdGlvbiBjcmVhdGVUb2FzdEJ5VHlwZSh0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucykge1xuICAgIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyh0eXBlLCBvcHRpb25zKSk7XG4gIH07XG59O1xuXG52YXIgdG9hc3QgPSBmdW5jdGlvbiB0b2FzdChjb250ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyhUWVBFLkRFRkFVTFQsIG9wdGlvbnMpKTtcbn07XG5cbnRvYXN0LmxvYWRpbmcgPSBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucykge1xuICByZXR1cm4gZGlzcGF0Y2hUb2FzdChjb250ZW50LCBtZXJnZU9wdGlvbnMoVFlQRS5ERUZBVUxULCBfZXh0ZW5kcyh7XG4gICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgIGF1dG9DbG9zZTogZmFsc2UsXG4gICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZVxuICB9LCBvcHRpb25zKSkpO1xufTtcblxuZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlLCBfcmVmMiwgb3B0aW9ucykge1xuICB2YXIgcGVuZGluZyA9IF9yZWYyLnBlbmRpbmcsXG4gICAgICBlcnJvciA9IF9yZWYyLmVycm9yLFxuICAgICAgc3VjY2VzcyA9IF9yZWYyLnN1Y2Nlc3M7XG4gIHZhciBpZCA9IGlzU3RyKHBlbmRpbmcpID8gdG9hc3QubG9hZGluZyhwZW5kaW5nLCBvcHRpb25zKSA6IHRvYXN0LmxvYWRpbmcocGVuZGluZy5yZW5kZXIsIF9leHRlbmRzKHt9LCBvcHRpb25zLCBwZW5kaW5nKSk7XG4gIHZhciByZXNldFBhcmFtcyA9IHtcbiAgICBpc0xvYWRpbmc6IG51bGwsXG4gICAgYXV0b0Nsb3NlOiBudWxsLFxuICAgIGNsb3NlT25DbGljazogbnVsbCxcbiAgICBjbG9zZUJ1dHRvbjogbnVsbCxcbiAgICBkcmFnZ2FibGU6IG51bGxcbiAgfTtcblxuICB2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbiByZXNvbHZlcih0eXBlLCBpbnB1dCwgcmVzdWx0KSB7XG4gICAgdmFyIHBhcmFtcyA9IGlzU3RyKGlucHV0KSA/IHtcbiAgICAgIHJlbmRlcjogaW5wdXRcbiAgICB9IDogaW5wdXQ7XG4gICAgdG9hc3QudXBkYXRlKGlkLCBfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgcmVzZXRQYXJhbXMsIG9wdGlvbnMsIHBhcmFtcywge1xuICAgICAgZGF0YTogcmVzdWx0XG4gICAgfSkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIHAgPSBpc0ZuKHByb21pc2UpID8gcHJvbWlzZSgpIDogcHJvbWlzZTtcbiAgcC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzb2x2ZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzLCByZXN1bHQpO1xuICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICByZXR1cm4gcmVzb2x2ZXIoJ2Vycm9yJywgZXJyb3IsIGVycik7XG4gIH0pO1xuICByZXR1cm4gcDtcbn1cblxudG9hc3QucHJvbWlzZSA9IGhhbmRsZVByb21pc2U7XG50b2FzdC5zdWNjZXNzID0gLyojX19QVVJFX18qL2NyZWF0ZVRvYXN0QnlUeXBlKFRZUEUuU1VDQ0VTUyk7XG50b2FzdC5pbmZvID0gLyojX19QVVJFX18qL2NyZWF0ZVRvYXN0QnlUeXBlKFRZUEUuSU5GTyk7XG50b2FzdC5lcnJvciA9IC8qI19fUFVSRV9fKi9jcmVhdGVUb2FzdEJ5VHlwZShUWVBFLkVSUk9SKTtcbnRvYXN0Lndhcm5pbmcgPSAvKiNfX1BVUkVfXyovY3JlYXRlVG9hc3RCeVR5cGUoVFlQRS5XQVJOSU5HKTtcbnRvYXN0Lndhcm4gPSB0b2FzdC53YXJuaW5nO1xuXG50b2FzdC5kYXJrID0gZnVuY3Rpb24gKGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGRpc3BhdGNoVG9hc3QoY29udGVudCwgbWVyZ2VPcHRpb25zKFRZUEUuREVGQVVMVCwgX2V4dGVuZHMoe1xuICAgIHRoZW1lOiAnZGFyaydcbiAgfSwgb3B0aW9ucykpKTtcbn07XG4vKipcclxuICogUmVtb3ZlIHRvYXN0IHByb2dyYW1tYXRpY2FseVxyXG4gKi9cblxuXG50b2FzdC5kaXNtaXNzID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBldmVudE1hbmFnZXIuZW1pdCgxXG4gIC8qIENsZWFyICovXG4gICwgaWQpO1xufTtcbi8qKlxyXG4gKiBDbGVhciB3YWl0aW5nIHF1ZXVlIHdoZW4gbGltaXQgaXMgdXNlZFxyXG4gKi9cblxuXG50b2FzdC5jbGVhcldhaXRpbmdRdWV1ZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICByZXR1cm4gZXZlbnRNYW5hZ2VyLmVtaXQoNVxuICAvKiBDbGVhcldhaXRpbmdRdWV1ZSAqL1xuICAsIHBhcmFtcyk7XG59O1xuLyoqXHJcbiAqIHJldHVybiB0cnVlIGlmIG9uZSBjb250YWluZXIgaXMgZGlzcGxheWluZyB0aGUgdG9hc3RcclxuICovXG5cblxudG9hc3QuaXNBY3RpdmUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIGlzVG9hc3RBY3RpdmUgPSBmYWxzZTtcbiAgY29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyLmlzVG9hc3RBY3RpdmUgJiYgY29udGFpbmVyLmlzVG9hc3RBY3RpdmUoaWQpKSB7XG4gICAgICBpc1RvYXN0QWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaXNUb2FzdEFjdGl2ZTtcbn07XG5cbnRvYXN0LnVwZGF0ZSA9IGZ1bmN0aW9uICh0b2FzdElkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICAvLyBpZiB5b3UgY2FsbCB0b2FzdCBhbmQgdG9hc3QudXBkYXRlIGRpcmVjdGx5IG5vdGhpbmcgd2lsbCBiZSBkaXNwbGF5ZWRcbiAgLy8gdGhpcyBpcyB3aHkgSSBkZWZlcmVkIHRoZSB1cGRhdGVcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRvYXN0ID0gZ2V0VG9hc3QodG9hc3RJZCwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9hc3QpIHtcbiAgICAgIHZhciBvbGRPcHRpb25zID0gdG9hc3QucHJvcHMsXG4gICAgICAgICAgb2xkQ29udGVudCA9IHRvYXN0LmNvbnRlbnQ7XG5cbiAgICAgIHZhciBuZXh0T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvbGRPcHRpb25zLCBvcHRpb25zLCB7XG4gICAgICAgIHRvYXN0SWQ6IG9wdGlvbnMudG9hc3RJZCB8fCB0b2FzdElkLFxuICAgICAgICB1cGRhdGVJZDogZ2VuZXJhdGVUb2FzdElkKClcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobmV4dE9wdGlvbnMudG9hc3RJZCAhPT0gdG9hc3RJZCkgbmV4dE9wdGlvbnMuc3RhbGVJZCA9IHRvYXN0SWQ7XG4gICAgICB2YXIgY29udGVudCA9IG5leHRPcHRpb25zLnJlbmRlciB8fCBvbGRDb250ZW50O1xuICAgICAgZGVsZXRlIG5leHRPcHRpb25zLnJlbmRlcjtcbiAgICAgIGRpc3BhdGNoVG9hc3QoY29udGVudCwgbmV4dE9wdGlvbnMpO1xuICAgIH1cbiAgfSwgMCk7XG59O1xuLyoqXHJcbiAqIFVzZWQgZm9yIGNvbnRyb2xsZWQgcHJvZ3Jlc3MgYmFyLlxyXG4gKi9cblxuXG50b2FzdC5kb25lID0gZnVuY3Rpb24gKGlkKSB7XG4gIHRvYXN0LnVwZGF0ZShpZCwge1xuICAgIHByb2dyZXNzOiAxXG4gIH0pO1xufTtcbi8qKlxyXG4gKiBUcmFjayBjaGFuZ2VzLiBUaGUgY2FsbGJhY2sgZ2V0IHRoZSBudW1iZXIgb2YgdG9hc3QgZGlzcGxheWVkXHJcbiAqXHJcbiAqL1xuXG5cbnRvYXN0Lm9uQ2hhbmdlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGlmIChpc0ZuKGNhbGxiYWNrKSkge1xuICAgIGV2ZW50TWFuYWdlci5vbig0XG4gICAgLyogQ2hhbmdlICovXG4gICAgLCBjYWxsYmFjayk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlzRm4oY2FsbGJhY2spICYmIGV2ZW50TWFuYWdlci5vZmYoNFxuICAgIC8qIENoYW5nZSAqL1xuICAgICwgY2FsbGJhY2spO1xuICB9O1xufTtcbi8qKlxyXG4gKiBDb25maWd1cmUgdGhlIFRvYXN0Q29udGFpbmVyIHdoZW4gbGF6eSBtb3VudGVkXHJcbiAqL1xuXG5cbnRvYXN0LmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgY29uZmlnID0ge307XG4gIH1cblxuICBsYXp5ID0gdHJ1ZTtcbiAgY29udGFpbmVyQ29uZmlnID0gY29uZmlnO1xufTtcblxudG9hc3QuUE9TSVRJT04gPSBQT1NJVElPTjtcbnRvYXN0LlRZUEUgPSBUWVBFO1xuLyoqXHJcbiAqIFdhaXQgdW50aWwgdGhlIFRvYXN0Q29udGFpbmVyIGlzIG1vdW50ZWQgdG8gZGlzcGF0Y2ggdGhlIHRvYXN0XHJcbiAqIGFuZCBhdHRhY2ggaXNBY3RpdmUgbWV0aG9kXHJcbiAqL1xuXG5ldmVudE1hbmFnZXIub24oMlxuLyogRGlkTW91bnQgKi9cbiwgZnVuY3Rpb24gKGNvbnRhaW5lckluc3RhbmNlKSB7XG4gIGxhdGVzdEluc3RhbmNlID0gY29udGFpbmVySW5zdGFuY2UuY29udGFpbmVySWQgfHwgY29udGFpbmVySW5zdGFuY2U7XG4gIGNvbnRhaW5lcnMuc2V0KGxhdGVzdEluc3RhbmNlLCBjb250YWluZXJJbnN0YW5jZSk7XG4gIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBldmVudE1hbmFnZXIuZW1pdCgwXG4gICAgLyogU2hvdyAqL1xuICAgICwgaXRlbS5jb250ZW50LCBpdGVtLm9wdGlvbnMpO1xuICB9KTtcbiAgcXVldWUgPSBbXTtcbn0pLm9uKDNcbi8qIFdpbGxVbm1vdW50ICovXG4sIGZ1bmN0aW9uIChjb250YWluZXJJbnN0YW5jZSkge1xuICBjb250YWluZXJzW1wiZGVsZXRlXCJdKGNvbnRhaW5lckluc3RhbmNlLmNvbnRhaW5lcklkIHx8IGNvbnRhaW5lckluc3RhbmNlKTtcblxuICBpZiAoY29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgZXZlbnRNYW5hZ2VyLm9mZigwXG4gICAgLyogU2hvdyAqL1xuICAgICkub2ZmKDFcbiAgICAvKiBDbGVhciAqL1xuICAgICkub2ZmKDVcbiAgICAvKiBDbGVhcldhaXRpbmdRdWV1ZSAqL1xuICAgICk7XG4gIH1cblxuICBpZiAoY2FuVXNlRG9tICYmIGNvbnRhaW5lckRvbU5vZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lckRvbU5vZGUpO1xuICB9XG59KTtcblxuZXhwb3J0IHsgQm91bmNlLCBGbGlwLCBJY29ucywgU2xpZGUsIFRvYXN0Q29udGFpbmVyLCBab29tLCBjb2xsYXBzZVRvYXN0LCBjc3NUcmFuc2l0aW9uLCB0b2FzdCwgdXNlVG9hc3QsIHVzZVRvYXN0Q29udGFpbmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC10b2FzdGlmeS5lc20uanMubWFwXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXZhdGFyIiwiTGlzdCIsIm1vbWVudCIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJSb2xsYmFja091dGxpbmVkIiwiTGluayIsInRvYXN0IiwiRm9sbG93aW5nIiwic3RhdGUiLCJzZXRTdGF0ZSIsInBlb3BsZSIsInNldFBlb3BsZSIsInJvdXRlciIsInRva2VuIiwiZmV0Y2hGb2xsb3dpbmciLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVVuZm9sbG93IiwidXNlciIsInB1dCIsIl9pZCIsImF1dGgiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZpbHRlcmVkIiwiZmlsdGVyIiwicCIsImVycm9yIiwibmFtZSIsImltYWdlIiwidXJsIiwidXNlcm5hbWUiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=