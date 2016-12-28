(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactRouterTransition"] = factory(require("react"));
	else
		root["ReactRouterTransition"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RouteTransition = __webpack_require__(1);
	
	Object.defineProperty(exports, 'RouteTransition', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RouteTransition).default;
	  }
	});
	
	var _presets = __webpack_require__(4);
	
	Object.defineProperty(exports, 'presets', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_presets).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TransitionMotion = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-motion/lib/TransitionMotion\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _TransitionMotion2 = _interopRequireDefault(_TransitionMotion);
	
	var _ensureSpring = __webpack_require__(3);
	
	var _ensureSpring2 = _interopRequireDefault(_ensureSpring);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RouteTransition = _react2.default.createClass({
	  displayName: 'RouteTransition',
	
	  propTypes: {
	    className: _react.PropTypes.string,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
	    pathname: _react.PropTypes.string.isRequired,
	    atEnter: _react.PropTypes.object.isRequired,
	    atActive: _react.PropTypes.object.isRequired,
	    atLeave: _react.PropTypes.object.isRequired,
	    mapStyles: _react.PropTypes.func,
	    runOnMount: _react.PropTypes.bool,
	    style: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'div',
	      runOnMount: true,
	      mapStyles: function mapStyles(val) {
	        return val;
	      }
	    };
	  },
	  getDefaultStyles: function getDefaultStyles() {
	    if (!this.props.runOnMount) {
	      return null;
	    }
	
	    if (!this.props.children) {
	      return [];
	    }
	
	    return [{
	      key: this.props.pathname,
	      data: this.props.children,
	      style: this.props.atEnter
	    }];
	  },
	
	
	  // there's only ever one route mounted at a time,
	  // so just return the current match
	  getStyles: function getStyles() {
	    if (!this.props.children) {
	      return [];
	    }
	
	    // TODO: maybe access route path from children for pathname?
	    return [{
	      key: this.props.pathname,
	      data: this.props.children,
	      style: (0, _ensureSpring2.default)(this.props.atActive)
	    }];
	  },
	  willEnter: function willEnter() {
	    return this.props.atEnter;
	  },
	  willLeave: function willLeave() {
	    return (0, _ensureSpring2.default)(this.props.atLeave);
	  },
	  renderRoute: function renderRoute(config) {
	    var props = {
	      style: this.props.mapStyles(config.style),
	      key: config.key
	    };
	
	    return this.props.component ? (0, _react.createElement)(this.props.component, props, config.data) : (0, _react.cloneElement)(config.data, props);
	  },
	  renderRoutes: function renderRoutes(interpolatedStyles) {
	    return _react2.default.createElement(
	      'div',
	      { className: this.props.className, style: this.props.style },
	      interpolatedStyles.map(this.renderRoute)
	    );
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      _TransitionMotion2.default,
	      {
	        defaultStyles: this.getDefaultStyles(),
	        styles: this.getStyles(),
	        willEnter: this.willEnter,
	        willLeave: this.willLeave,
	        onFinished: this.props.onFinished
	      },
	      this.renderRoutes
	    );
	  }
	});
	
	exports.default = RouteTransition;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ensureSpring;
	
	var _spring = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-motion/lib/spring\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _spring2 = _interopRequireDefault(_spring);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ensureSpring(styles) {
	  return Object.keys(styles).reduce(function (acc, key) {
	    var value = styles[key];
	    acc[key] = typeof value === 'number' ? (0, _spring2.default)(value) : value;
	    return acc;
	  }, {});
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _spring = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-motion/lib/spring\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _spring2 = _interopRequireDefault(_spring);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var fadeConfig = { stiffness: 200, damping: 22 };
	var popConfig = { stiffness: 360, damping: 25 };
	var slideConfig = { stiffness: 330, damping: 30 };
	
	var fade = {
	  atEnter: {
	    opacity: 0
	  },
	  atLeave: {
	    opacity: (0, _spring2.default)(0, fadeConfig)
	  },
	  atActive: {
	    opacity: (0, _spring2.default)(1, fadeConfig)
	  }
	};
	
	var pop = {
	  atEnter: {
	    scale: 0.8,
	    opacity: 0
	  },
	  atLeave: {
	    scale: (0, _spring2.default)(0.8, popConfig),
	    opacity: (0, _spring2.default)(0, popConfig)
	  },
	  atActive: {
	    scale: (0, _spring2.default)(1, popConfig),
	    opacity: 1
	  },
	  mapStyles: function mapStyles(styles) {
	    return {
	      opacity: styles.opacity,
	      transform: 'scale(' + styles.scale + ')'
	    };
	  }
	};
	
	var slideLeft = {
	  atEnter: {
	    opacity: 0,
	    offset: 100
	  },
	  atLeave: {
	    opacity: (0, _spring2.default)(0, fadeConfig),
	    offset: (0, _spring2.default)(-100, slideConfig)
	  },
	  atActive: {
	    opacity: (0, _spring2.default)(1, slideConfig),
	    offset: (0, _spring2.default)(0, slideConfig)
	  },
	  mapStyles: function mapStyles(styles) {
	    return {
	      opacity: styles.opacity,
	      transform: 'translateX(' + styles.offset + '%)'
	    };
	  }
	};
	
	var slideRight = {
	  atEnter: {
	    opacity: 0,
	    offset: -100
	  },
	  atLeave: {
	    opacity: (0, _spring2.default)(0, fadeConfig),
	    offset: (0, _spring2.default)(100, slideConfig)
	  },
	  atActive: {
	    opacity: (0, _spring2.default)(1, slideConfig),
	    offset: (0, _spring2.default)(0, slideConfig)
	  },
	  mapStyles: function mapStyles(styles) {
	    return {
	      opacity: styles.opacity,
	      transform: 'translateX(' + styles.offset + '%)'
	    };
	  }
	};
	
	exports.default = { fade: fade, pop: pop, slideLeft: slideLeft, slideRight: slideRight };

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-router-transition.map