(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/humantodata/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      padding: '0 15px'
    }
  };
};

var Content = function Content(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { id: id, className: (0, _classnames2.default)(classes.container, className) },
    children
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(Content);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _materialUi = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    separator: {
      borderBottom: '2px dashed ' + theme.palette.primary.main
    }
  };
};

var Separator = function Separator(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement('div', { className: (0, _classnames2.default)(classes.separator, className), style: style });
};

exports.default = (0, _materialUi.withStyles)(styles)(Separator);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(24);

var _Header2 = _interopRequireDefault(_Header);

var _Enjeu = __webpack_require__(32);

var _Enjeu2 = _interopRequireDefault(_Enjeu);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Approche = __webpack_require__(36);

var _Approche2 = _interopRequireDefault(_Approche);

var _TravaillerEnsemble = __webpack_require__(39);

var _TravaillerEnsemble2 = _interopRequireDefault(_TravaillerEnsemble);

var _Intervenir = __webpack_require__(40);

var _Intervenir2 = _interopRequireDefault(_Intervenir);

var _Presentation = __webpack_require__(42);

var _Presentation2 = _interopRequireDefault(_Presentation);

var _Contact = __webpack_require__(44);

var _Contact2 = _interopRequireDefault(_Contact);

var _Carousel = __webpack_require__(45);

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    content: {
      maxWidth: 740,
      margin: 'auto',
      paddingBottom: 90
    }
  };
};

var Home = function Home(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(_Carousel2.default, null),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      _react2.default.createElement(_Enjeu2.default, null),
      _react2.default.createElement(_Approche2.default, null),
      _react2.default.createElement(_TravaillerEnsemble2.default, null),
      _react2.default.createElement(_Intervenir2.default, null),
      _react2.default.createElement(_Presentation2.default, null),
      _react2.default.createElement(_Contact2.default, null)
    )
  );
};

exports.default = (0, _withStyles2.default)(styles)(Home);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styles = __webpack_require__(6);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _theme = __webpack_require__(54);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)


// Your top level component
exports.default = _App2.default;

// Render your app


// Your Material UI Custom theme

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var muiTheme = (0, _styles.createMuiTheme)(_theme2.default);

  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: muiTheme },
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(7);

var _reactHotLoader = __webpack_require__(14);

var _reactStaticRoutes = __webpack_require__(15);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _CssBaseline = __webpack_require__(53);

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _styles = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    '@global': {
      body: {
        backgroundColor: theme.palette.white
      },
      a: {
        color: theme.palette.primary.main
      },
      img: {
        maxWidth: '95vw'
      }
    },
    container: {
      maxWidth: 960,
      margin: 'auto'
    }
  };
};

var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',

    // Remove the server-side injected CSS.
    value: function componentDidMount() {
      var jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          'div',
          { className: classes.container },
          _react2.default.createElement(_CssBaseline2.default, null),
          _react2.default.createElement(_reactStaticRoutes2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.PureComponent);

var AppWithStyles = (0, _styles.withStyles)(styles)(App);

exports.default = (0, _reactHotLoader.hot)(module)(AppWithStyles);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(16);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(17);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(18);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _reactUniversalComponent = __webpack_require__(20);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/scenes/Home/Home',
  file: 'C:/Users/jusson/Projects/humantodata/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/scenes/Home/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/scenes/Home/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/scenes/Home/Home';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 0

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          return _react2.default.createElement(Comp, _extends({ key: props.location.pathname }, props));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(21);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(22);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(8);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _logo = __webpack_require__(25);

var _logo2 = _interopRequireDefault(_logo);

var _materialUi = __webpack_require__(1);

var _HeaderButton = __webpack_require__(26);

var _HeaderButton2 = _interopRequireDefault(_HeaderButton);

var _Drawer = __webpack_require__(30);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Menu = __webpack_require__(31);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '10px 15px'
    },
    logo: {
      height: 80
    },
    actions: {
      alignSelf: 'flex-end'
    },
    drawerBtn: {
      position: 'absolute',
      right: 0,
      top: 0
    }
  };
};

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.toggleDrawer = function () {
      _this.setState(function (_ref2) {
        var open = _ref2.open;
        return { open: !open };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var open = this.state.open;


      return _react2.default.createElement(
        'div',
        { className: classes.container },
        _react2.default.createElement(
          _materialUi.Hidden,
          { mdUp: true, implementation: 'css', className: classes.drawerBtn },
          _react2.default.createElement(
            _materialUi.IconButton,
            { onClick: this.toggleDrawer },
            _react2.default.createElement(_Menu2.default, null)
          )
        ),
        _react2.default.createElement('img', { className: classes.logo, src: _logo2.default, alt: 'logo' }),
        _react2.default.createElement(
          _materialUi.Hidden,
          {
            className: classes.actions,
            only: ['xs', 'sm'],
            implementation: 'css'
          },
          _react2.default.createElement(
            _HeaderButton2.default,
            {
              items: [{ label: 'Vos enjeux', href: '#enjeu' }, { label: 'Notre approche', href: '#approche' }, {
                label: 'Pourquoi travailler ensemble ?',
                href: '#travailler-ensemble'
              }, {
                label: 'Comment nous pouvons intervenir ?',
                href: '#intervenir'
              }]
            },
            'Solutions'
          ),
          _react2.default.createElement(
            _HeaderButton2.default,
            { href: '#presentation' },
            'Qui sommes nous ?'
          ),
          _react2.default.createElement(
            _HeaderButton2.default,
            { href: '#contact' },
            'Nous contacter'
          )
        ),
        _react2.default.createElement(_Drawer2.default, { open: open, onClose: this.toggleDrawer })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = (0, _materialUi.withStyles)(styles)(Header);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.b35d8641.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(27);

var _Button2 = _interopRequireDefault(_Button);

var _Menu = __webpack_require__(28);

var _Menu2 = _interopRequireDefault(_Menu);

var _v = __webpack_require__(29);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderButton = function (_React$Component) {
  _inherits(HeaderButton, _React$Component);

  function HeaderButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderButton.__proto__ || Object.getPrototypeOf(HeaderButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null
    }, _this.handleClick = function (event) {
      var items = _this.props.items;

      if (items) {
        _this.setState({ anchorEl: event.currentTarget });
      }
    }, _this.handleClose = function () {
      _this.setState({ anchorEl: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var anchorEl = this.state.anchorEl;
      var _props = this.props,
          children = _props.children,
          id = _props.id,
          items = _props.items,
          href = _props.href;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _Button2.default,
          {
            'aria-owns': anchorEl ? id : null,
            'aria-haspopup': 'true',
            onClick: this.handleClick,
            href: href
          },
          children
        ),
        items && _react2.default.createElement(
          _Menu2.default,
          {
            id: id,
            anchorEl: anchorEl,
            open: Boolean(anchorEl),
            onClose: this.handleClose
          },
          items.map(function (item, i) {
            return _react2.default.createElement(
              _Menu.MenuItem,
              {
                key: i,
                component: 'a',
                onClick: _this2.handleClose,
                href: item.href
              },
              item.label
            );
          })
        )
      );
    }
  }]);

  return HeaderButton;
}(_react2.default.Component);

HeaderButton.defaultProps = {
  items: null,
  id: (0, _v2.default)()
};

exports.default = HeaderButton;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  list: {
    width: 250
  }
};

var CustomDrawer = function CustomDrawer(_ref) {
  var classes = _ref.classes,
      open = _ref.open,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    _materialUi.Drawer,
    { open: open, onClose: onClose },
    _react2.default.createElement(
      'div',
      {
        tabIndex: 0,
        role: 'button',
        onClick: onClose,
        onKeyDown: onClose,
        className: classes.list
      },
      _react2.default.createElement(
        _materialUi.List,
        null,
        _react2.default.createElement(
          _materialUi.ListItem,
          { button: true, component: 'a', href: '#enjeu' },
          _react2.default.createElement(_materialUi.ListItemText, { primary: 'Vos enjeux' })
        ),
        _react2.default.createElement(
          _materialUi.ListItem,
          { button: true, component: 'a', href: '#approche' },
          _react2.default.createElement(_materialUi.ListItemText, { primary: 'Notre approche' })
        ),
        _react2.default.createElement(
          _materialUi.ListItem,
          { button: true, component: 'a', href: '#travailler-ensemble' },
          _react2.default.createElement(_materialUi.ListItemText, { primary: 'Pourquoi travailler ensemble ?' })
        ),
        _react2.default.createElement(
          _materialUi.ListItem,
          { button: true, component: 'a', href: '#intervenir' },
          _react2.default.createElement(_materialUi.ListItemText, { primary: 'Comment nous pouvons intervenir ?' })
        ),
        _react2.default.createElement(
          _materialUi.ListItem,
          { button: true, component: 'a', href: '#presentation' },
          _react2.default.createElement(_materialUi.ListItemText, { primary: 'Qui sommes nous ?' })
        ),
        _react2.default.createElement(
          _materialUi.ListItem,
          { button: true, component: 'a', href: '#contact' },
          _react2.default.createElement(_materialUi.ListItemText, { primary: 'Nous contacter' })
        )
      )
    )
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(CustomDrawer);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Menu");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

var _transformingFactories = __webpack_require__(33);

var _transformingFactories2 = _interopRequireDefault(_transformingFactories);

var _redArrow = __webpack_require__(34);

var _redArrow2 = _interopRequireDefault(_redArrow);

var _Content = __webpack_require__(2);

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      marginTop: 30
    },
    header: {
      marginBottom: 30
    },
    title: {
      fontSize: 36
    },
    subtitle: {
      fontSize: 36,
      fontWeight: 700,
      color: theme.palette.secondary[200]
    },
    blocTitle: {
      fontSize: 24
    },
    blocSubtitle: {
      fontSize: 24,
      fontWeight: 700
    },
    transformingFactoriesImg: {
      marginTop: 45,
      display: 'block',
      margin: 'auto'
    },
    arrow: {
      paddingRight: 30
    },
    block: {
      backgroundColor: theme.palette.secondary[200],
      padding: 15
    },
    list: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0
      },
      '& li > *': {
        margin: '10px 0'
      },
      '& li > *::before': {
        content: "''",
        display: 'inline-block',
        width: 10,
        height: 10,
        marginRight: 8,
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50%'
      }
    }
  };
};

var Enjeu = function Enjeu(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { id: 'enjeu', className: classes.container },
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.header },
        _react2.default.createElement(
          _materialUi.Typography,
          { className: classes.title },
          'Votre enjeu des 5 prochaines ann\xE9es :'
        ),
        _react2.default.createElement(
          _materialUi.Typography,
          { className: classes.subtitle },
          'r\xE9ussir la digitalisation de votre industrie'
        )
      ),
      _react2.default.createElement(
        _materialUi.Grid,
        { container: true, spacing: 0 },
        _react2.default.createElement(
          _materialUi.Grid,
          { item: true, xs: 12, sm: 6 },
          _react2.default.createElement(
            _materialUi.Typography,
            null,
            'Big Data, Usine du futur, Factory 4.0, IA\u2026 quels que soient les concepts \xE0 la mode, la digitalisation de votre syst\xE8me de production est un passage \xE0 la fois oblig\xE9 et stimulant pour votre entreprise. Sa capacit\xE9 \xE0 innover et \xE0 se diff\xE9rencier en d\xE9pendent.'
          )
        ),
        _react2.default.createElement(
          _materialUi.Grid,
          { item: true, xs: 12, sm: 6 },
          _react2.default.createElement(
            _materialUi.Typography,
            null,
            'Encore faut-il que ce passage s\u2019effectue de fa\xE7on pragmatique, en partant de votre patrimoine data disponible, en v\xE9rifiant rapidement l\u2019efficacit\xE9 des solutions propos\xE9es, en favorisant leur adoption par l\u2019ensemble de l\u2019organisation, de l\u2019op\xE9rateur jusqu\u2019au dirigeant.'
          )
        )
      )
    ),
    _react2.default.createElement('img', {
      className: classes.transformingFactoriesImg,
      src: _transformingFactories2.default,
      alt: ''
    }),
    _react2.default.createElement(
      'div',
      { className: classes.block },
      _react2.default.createElement(
        _materialUi.Typography,
        { className: classes.blocTitle, gutterBottom: true },
        'Vos d\xE9fis concrets :'
      ),
      _react2.default.createElement(
        _materialUi.Typography,
        { className: classes.blocSubtitle },
        'Accro\xEEtre la performance industrielle :'
      ),
      _react2.default.createElement(
        'div',
        { className: classes.list },
        _react2.default.createElement(
          _materialUi.Hidden,
          { only: 'xs', implementation: 'css' },
          _react2.default.createElement('img', { src: _redArrow2.default, className: classes.arrow, alt: '' })
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              'limiter les temps d\u2019arr\xEAt de production, les contr\xF4les inutiles'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              'atteindre l\u2019efficience, c\u2019est \xE0 dire concevoir \u201Cau juste n\xE9cessaire\u201D et l\u2019obtenir \u201Cdu premier coup\u201D'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              'am\xE9liorer le \u201CTime to market\u201D\u2026'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              'anticiper les probl\xE8mes de la production (maintenance pr\xE9dictive) et limiter les non-conformit\xE9s'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              'r\xE9duire les contraintes pour permettre aux op\xE9rateurs de se concentrer sur la production et remporter leur adh\xE9sion'
            )
          )
        )
      )
    )
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(Enjeu);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/transformingFactories.2ca7b9c5.png";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABfCAYAAACz3nqTAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABMlSURBVHicvZx5nFxVlce/51ZVdzoLAWULOgwDDIiRSLq6u6o6vVSbRD4gREU6iIKK+MEFcQXZnCgfBMGVERSBwRF0UBNUBEExxN6Srqp0VydEgqASNsMWFLL2UvXumT9SXV1dXfWWdOLvn3rv3nPeue/Ue/fds12hBH31iTMc0Y8LxICDBV4A/uAg3+nIpp7ABQrSWx9/L4blKCcBAvxZkXvbs6lfClg3/p7Gxn9TNZeIyqnAPGC7qKQcsbd3ZDNr3Xj3FwSgP5Goy4/pXQqdVejyCl9IZtM3V+rsjUbnqUbuRWiuwp+xYT27I5P5e6XO7obY+aJyOzCj8ijl9kOHd1wyf/PmMffbmR4MgIciAMIC3+utj3+kvGN1NDpXiaxxUQRAzOSlq+/klkPKO3obYmeLyl1UUwSA6kWv1s6+1eX6+wWmuz5+pociJsYk+t3+ROINpW0RItcCJ/lgP97W5K8vbUjHYgepyg8pPKGuEPloV2N8iZ9x7iuMiHzcP7kcPDam54yfDUajMwU+FkDeBWsXLZozfjKSk3OAN/qWbvXiALICw4DGgjAIGh8/3mNqGoG6AOy1+dF8kV+ERcFkSyD6oDDAQUEYtIReHfX9r5YILPIoOjcg+8FB5QWBYe/n0zdE2Dp+rNhtgSU6psgjyssBuV8KLC8ADKoPB2FQK0V6PWjmALA7APvwsLM7PX4ihkeCyBYJRh8UBsu3Ab/f703tQ+kHx086urtHVPQHvqWJ3nbqpk1F5Tmz6+4D/uKT2zHifNu3rH2Aad+Y+asqnwbUg3a7WD23fCU5OjZ8jcKjXoIU2RyqDa8obevo7s4b1Q8Ae7yHqle0DAxs9qbbdxiA5FD6DpT3A9XmgCGLxNs2ZB4v7zh106bd+ZBdDPKH6mLkj5GcvKNl3bqd5T2tQ5mstbYd+FsV5p2IfKI9m/mW181MF5MWO2sXLZrjjDhnAXFB5yryAugf2rKZ1eL95NDdEFsqKucAbwFA9UmLWdUxlPq9F+9gNBrZrZGzQN8pRo6yltdFNC225p62DX3BJ+p9gPfKrwxdsdibTU5PUBEN2/CTLRvWBfoadc1Pzg7P3H24GY3sWrSp/5UgvIPRaGTEmBPyRGYaO/r3tmz2xWCjd4dvZfQ2JtpV7ddRSZQ0K8haEb2ybTC9zo2/pyG+DMvlCHEKr6fAU6jc5hxUe3NHd/dIVdkLWw9Tya1AOB8ork32zlVyXTKbWuX3PtzgSxnd0dinBPkeEKpCkhf4ZFs2/T/lHQqmLxq/ReGTVQUoA7mInrkkk5my7uipj5+E8Hvg6Or8elvbUOaTfl5lNxgvgu6G2FJBbqa6IgDCCrd21ze1lnf0NsRXuCoCQGiM5ORXKzs7J8lIx2IHIfJb3BQBIPLxvmjiClcaH/BUBirf9EUHYREzacZfG205GsXfIIXmI596/vzSppG8+RzosX7YFb163YLmw33JqgLXm+ypj58k8PYA12vqa2wsDj4v+fcDtb65hQ9PPtUPBpA9K1+j7w1APwWuyhCjbw16QbUy4duwLAzEywT9Q8efVgv8ZzDp9uRg9JPh9fgH/vRaNcVriqEmIHvxKTp87iuhwPIt4YDyJsFdGda33VBEKGyfHD8W5ZmA7FvGDxqy2T0gwdYRwl8DypsEV2W0DWU2Aa5e8VIoPNq6fv2EAo3cH2w4ZfRifxWA2cEhoLzJ8P5KCJfj7/utRuXy0oa2gVQPwhqfY3ktnJPvTpZtbwR2+GFW+N/2jZkD92QAtA+m71fly7grREG/1DaUmuIbseKcJ/CUh5gRUTm3fHnePjDwvArvB4ZduZX+2eQ+6yHDE37WDySH0tcjvAf4c4Xux1R4VzWrsmNg4KWxkI0J+jMqB5Ky1trWSooESA6mfyfQAlRa7u8BuWH3jkPesXeOmR6CG2oNzW8L4ZyoVlRUn6hk1lflPSV+jAnLYlTnKezAmFT7QP+g32X02oZFJ+bJNwlmJtjn7XBdb8fm7l1B76EaAivDDT2NiWa1LBF0nqKvhdT018nYww3ZbM6LV0H6ovGFqtogRmZZlb/X1LCmOZX6px/ZvQtbD1OTO13QYy3GEdXHRvJ7Hi71rHlhvyhjTbT5uDD2Lqjk+pctYrmobUOq6kTavbA5IcbeAtSXdY0iemskYq5qTqUqzhtdyWTY7By9FvRzTI3KvYrq1e1Dmdv93Me0ldHX1HSCdcw64FAXsryqLE8OpX5d3tHTEF+GshL3ZXtmJLdncfm/XFDEfaDvchujKN9oG0pf7kYDPifQalAwjmNW4q4IgLCI3r124aKjShu7Tokfg/J/eNsvsdrIzFvKG2Xn6FVeigBQ4Uvd9fEzveimpYy+htiZAQy52flQ/nOThIflSmC2H2aBD/U1NZ0wft41Pzlb0Ev9jlWEr3rRTPPJMKcHYyijV31PAG5jHVk2fhKuHU0Cc6qTT0H9mrcn3uQqIMDFpkL1zUHIBS06abrmJ2cDwfwPyvHjhxb774F4gUhEj3Hrn5YyJFg0DZDimmB4tC5HQDedikwEu4xxX5VWvID7SnaaT4YMBORYP35w+t9+N6poIKtYREqDVRsCyh4O10ilFXQR01JGzuEevOyGEqjqnaXngvw0gLidVsd+M37SNpjaCLrRt2z4RbW1yjimpYzFj6a2gq7wpgTg18mh9AOlDXZkxk3gzwchwlc6stlXi+egFi4BPFe3wDYN6395EU3vNQHas5lvoVyHy/uv8Fs7MuND5e0dm7t3mZA9A2RLJb4iRG9qHUzfNIU/m1mLch7uT+dLInJGteS6SWK8CPyipzHRjNVLgSXs/eTlUPrF6A9bBzMr3VIf+05uOcTWOFeBfoSJBZwF1gv2a23Z9Q9W44W9Bpy19moVXUYxyCQvCvozbOQGv+HJ/WqoFQe3aNGcSkFmL6zs7Ay9ccvWYyLqzBoL69Yl69f/Iyj/kVu2HI6dmd+X+OwBUUYl9DYkmlT1IkXigs4BXgRWW+N8v2NgwDMjp7chvkiV5aAnAijyF0VX+kmY7TolebAJDV8ILFXkSAM7rWgqTPjOlsF1Ez7badyfL3Qlk2Gza/gmVD5VRd4ulAvbh9IrK/Gvjkbn1lBzF+i7KwpQ7rd2xoc7Nna/Xqm7pyF2Oio/Ad5QoTsv6PWt2cxXBXTaE6gXzK7R76NyMdUVPxvhZz0N8WXlHf2JRF2NRlZXVQSAsMyERh4ZjEZnlnd1N8SWovIbKisCIKzIir76+A2wH74mbuhdmFiM6kU+SA3K7Q8vWDCrtDE3xgqERh/80T0a+UppQ38iUScqPwbvWIoKl/U2JJoOqDLUBEpiPaIuPLOYqdyVTM4A/bRvWcLF/YlEMSc1N6bLgaNcWEohqvrZA/2atAQhVpmgN9vHmvBp3hcwazRXkuCr2hZENpA80MqYkjjvgeK7LSEncETdWI6YOBMvh1M5Dj3QygiUpiSlSa+OeS2oMDVa4jzWV6tTVsS2A6oMUfEbTRtn+OP4oZlp1gOjAbjHZoTIjJ+ooTuQbOg+oMpwQvIdPCqQSvDXmZovWqUt69btROQuv7IE7opnMsVQZE3E3At42iMFqLX2pgOqjI6B/o0IfqzaERE5rzy+kjPOVZ5G3F487ZC7qrShOZUaFisfAfJezIre0LFh/eABX3S1D6avK8Q0qoX/nrGqHW2DqfXlHUvWr/9H3so7cHXk6EZCdnGpeT+Otg2pNaJyBlBt/sgJuqI9m7ka/oW2ydqFi47Kh5zzRImLMkdFX1DhkcOGd/3Cq/ZsZWdn6PCnn/sAKssFCrYJT4rIKju79p6O7m7Xfz8dix00mucCRZYIzBPYadGUQ+jOxdn+YlB8vyujNxqdp1JzpJH89paBgaeDpiOu7OwMHfb4trp9iaEORqORneHwEaF83mnNZl/2qpgsx35RhoL0NiTOR/Uy4G0ll38R0dtHxvZ80y3mORiNRvYQuVBFLkQ1WhjXdkEfEqs3tm5Y75qoX8gV/TKwjImF2jaFnxtyX/ebSTxtZXQlk+HQzuG7FTnXhWxTyIZOq5RaXcj+vc+l+tEB/WJ7NvPflTp76uPLEdyqH19Ra96T3NCfcr+T/WCoyY6Rb3goAmCBY5xfdyWTk4ymwWg0oqGx33iUgYZAbuqtj51X3tEVjbUg/BS3MlA4XIx9YM3CZs84y/TCi01NJ4jwGZ/kTWbX6CQ/6C4iHyvLRa8KFfluOhabqI8DMXAzEPHB/sawsdd5EU1LGTZvzsU9jXoyVCf9uwIXBhB36IhD0a+xdmHTApBTAvCfXYjiVcV0X5OgSagLxg8Kr0ygpFlUGicOTTBeqA3Vjbom+U5XGX4e0cr025gRVL6oTjh/xHWeqAh1xJVnesow6mepXIpi6VVhHRHQMpXnxo8clWcCyoZw7mm37ukpwwlNycRxg6D3lTU9FIRfQ6ZIX1tLD7A9APfG9oGB590opqWM9g39veC7LvZlx6mbtOWEFXMD/sKDoPwuOdBfDHQ3p1LDgtzod6yq4mkwTn+dYWvOxzuleqcI7yt353cM9j+GyCV4LNkFnrUh56Pl7S8d++Zv6NSnrRJuLI/zVsK0ldG2oW+bdWYkgDupbC53idV4tRq29sHUbSLaSbUydOGBsbDGKgWalq9a5bxy7NFnI1xD5VyRVxD5WHs27asAaL8aausWNB+eD9sOMRyF5TUJ2/5JifUu6E8k6nKjehoijYido8hzxurvC8n8nug7ueUQG8kvFdETFXJGzWOhWtZ4pSGUIpAyHl6wYFZdTd0SVU4SjFjliXCdecRvXPWh40+rnTVne0xCzlHWyu58RNdXKtKrhoJB1iQic6xlaygX6m7909rAvtJq8F/K2ZD4tKp+lambf2wHvbYtm/lONXO9UMB7FcLnKSnFBCzIA3nki6V+hXJ0NTafYqy9halJt2PAD2eRu/JfljveUx+/GcEroHNXWzZ9QblC+hOJutyYPgh0uPC+ZuC01mw6U97RuzCxWI3eD0wJH5ZgqDasHaU+0H2B5wTaWx87z4ciAD7c25CYEkrMjenNuCsC4BAL95VvUNTV2HikGl2FuyIA6kdycpuPMbrCVRkKomKu8X015Sultak99fGTgAt8ch9pa/JfmDQ4G7oUn4EoEc7prY8t8KasDldl9EYTb/NbV7oXOu+wp56bCBQbzvKSMYkbLdsVSoKUZooGo58C9ydD3ZNIK0GM+Y+SC5zgQjqVFzl+/Mna+xtMvpqJpNl9gfu/ZrRqsX51lolkM0UCOWQB27lqlQJ0rlpl8RHzKIVooAjcFLgqIx9iEwE9zI4zkZtpVHxXKRXwxLhHu/BVCriTiv4poLxJcFVGYUHkuRHIxFjo6diYfmb8VEL5XxLg31Xl55MvR5Ck2ZF83twbgH4KPCc3sXoZ4CeGMSLCpK9B68DAFlUqbo5YAU/r6IzvlTbU1MitgL+nS7lhb5LuvsNTGW0bMo+r6Fm4+w52IZzTlk0PlXfMltzlgJffY6sVs6w8cNScSg0b45yJVxax6o/ahtLXesjwhL9SzsHM6rw1b2evZVpqC+wAvTuPOaV9MF2x2rghm821ZdNnK3oxUO5cGQbutMZp6Bjsf6wSf+vAwBbrzGhS0W8yJWaqG1HOaR/KXBg0elYJwUs5k8mwfW30CDPDypx8/mU/lYnjKGyg+hYb4k2SN7tnm9FHg9gUKzs7Q/OeffY4dczssbBuDWLk+cEkZayJNh8XEftRVYkjHITVF8TIame49sd+Yp99TU0nOHlztkHeAqCif7HIvV67zAJsnj+/5h+1s5ersBRkHsoORNO5MD/Z3zddDQKFfywavxpYQWWP98ti5YPVyjEfOv602llzX7sJuIipr55V+FFNjXymmm+hLxqPWfg5cEyF7t0ickXbYGpKwd7+hgD01Me/hnC1B21OjCxtG0j1lDYWyikfBH2nB3/XLHKnlr9WhTTqbry30ryiPZv27fPcF5jehkQTwlXepETU6t2FHU8mLrBz+FIfigDo2EXNlaUNg9FoBNV78Len6PXTNcS8YFT1s/ifSI+eNff1942f7I2Kif9ySuznN8+fX9xtZbdG3qtwnO+xinzBm2zfYYBkEAZFJ3wTO4YbCLDtLcjB22pnTSSuGlkcRDYQlD4QDN7VypMgyGETx2ZeYIFGirWlqjZo4usR3iT7DgMSqMClNNlUQxq4wMYiJStZqVgW4YL95vytBINobxAGFZ34muRmDOI3IrYXjmquGBUTkWA7zQsHdGd6o46pmB5UBVsLyaYAdGzsfl2FX/jmFu4tTVEM1ZqVVN+DdApU9YCuNUwh18nPdrSOil5QvnAKO6HLfW4h9QriXFba0LJu3U6UT+AjI1DgjmQ20+VDzj7DALRl018qlGM6Vej+Kdh3Jwczq8s7Wjase8GKvNMtk1fgWWvMqZWi4O1D6V+BnIfL1rkCt84kd0A3YC/ImUDvwthbMXKhKnGEg4GtorLasbV3VKsBG8fDCxbMmhGp+wRIJzC/0Py4Cr/U4Rk/8LJt1i5cdJQNORerZSnCm4DXgZSBOyrFUw4E/h82IIBo4J3jrgAAAABJRU5ErkJggg=="

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/withStyles");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

var _startsWithPeople = __webpack_require__(37);

var _startsWithPeople2 = _interopRequireDefault(_startsWithPeople);

var _yellowArrow = __webpack_require__(38);

var _yellowArrow2 = _interopRequireDefault(_yellowArrow);

var _Content = __webpack_require__(2);

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      marginTop: 30
    },
    header: {
      marginBottom: 30
    },
    title: {
      fontSize: 36
    },
    primary: {
      color: theme.palette.primary.main
    },
    blocTitle: {
      fontSize: 24
    },
    blocSubtitle: {
      fontWeight: 700
    },
    transformingFactoriesImg: {
      marginTop: 45,
      display: 'block',
      margin: 'auto'
    },
    arrow: {
      paddingRight: 30
    },
    block: {
      backgroundColor: theme.palette.secondary[400],
      padding: 15,
      '& *': {
        color: theme.palette.white
      }
    },
    list: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0
      },
      '& li > *': {
        margin: '10px 0'
      },
      '& li > *::before': {
        content: "''",
        display: 'inline-block',
        width: 10,
        height: 10,
        marginRight: 8,
        backgroundColor: theme.palette.secondary[200],
        borderRadius: '50%'
      }
    }
  };
};

var Enjeu = function Enjeu(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { id: 'approche', className: classes.container },
    _react2.default.createElement(
      _Content2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.header },
        _react2.default.createElement(
          _materialUi.Typography,
          { className: classes.title },
          'Notre approche : vous accompagner de fa\xE7on',
          ' ',
          _react2.default.createElement(
            'span',
            { className: classes.primary },
            'innovante'
          ),
          ' et',
          ' ',
          _react2.default.createElement(
            'span',
            { className: classes.primary },
            'globale'
          )
        )
      ),
      _react2.default.createElement(
        _materialUi.Grid,
        { container: true, spacing: 0 },
        _react2.default.createElement(
          _materialUi.Grid,
          { item: true, xs: 12, sm: 6 },
          _react2.default.createElement(
            _materialUi.Typography,
            null,
            'En supprimant les fronti\xE8res traditionnelles de l\u2019entreprise, la digitalisation ouvre de nouveaux chemins et favorise l\u2019innovation. HumanToData est n\xE9e de la volont\xE9 de 4 entreprises innovantes : Agaetis, Deltamu, Phimeca Engineering, Pyramis Consulting.'
          )
        ),
        _react2.default.createElement(
          _materialUi.Grid,
          { item: true, xs: 12, sm: 6 },
          _react2.default.createElement(
            _materialUi.Typography,
            null,
            'Impliqu\xE9es depuis plusieurs ann\xE9es dans l\u2019optimisation des proc\xE9d\xE9s de fabrication, celles-ci ont d\xE9cid\xE9 elles-m\xEAmes d\u2019innover en d\xE9passant leurs \u201Cfronti\xE8res\u201D \u2013 leurs expertises et leurs exp\xE9riences sp\xE9cifiques \u2013 pour les mettre en commun.'
          )
        )
      )
    ),
    _react2.default.createElement('img', {
      className: classes.transformingFactoriesImg,
      src: _startsWithPeople2.default,
      alt: ''
    }),
    _react2.default.createElement(
      'div',
      { className: classes.block },
      _react2.default.createElement(
        _materialUi.Typography,
        { className: classes.blocTitle, gutterBottom: true },
        'Notre intervention \xE0 vos c\xF4t\xE9s :'
      ),
      _react2.default.createElement(
        _materialUi.Typography,
        { className: classes.blocSubtitle },
        'Une d\xE9marche globale qui s\u2019appuie sur les 4 fondamentaux d\u2019une digitalisation r\xE9ussie : Accro\xEEtre la performance industrielle :'
      ),
      _react2.default.createElement(
        'div',
        { className: classes.list },
        _react2.default.createElement(
          _materialUi.Hidden,
          { only: 'xs', implementation: 'css' },
          _react2.default.createElement('img', { src: _yellowArrow2.default, className: classes.arrow, alt: '' })
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              _react2.default.createElement(
                'b',
                null,
                'le pilotage de la performance et la prise en compte du facteur humain'
              ),
              ', parce que plus le syst\xE8me s\u2019automatise, plus l\u2019adh\xE9sion et l\u2019engagement de ceux qui le pilotent est une condition de la r\xE9ussite Cette conviction se retrouve dans notre nom'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              _react2.default.createElement(
                'b',
                null,
                'la mod\xE9lisation des ph\xE9nom\xE8nes et la DataScience'
              ),
              ', parce qu\u2019il est n\xE9cessaire de combiner l\u2019ensemble des sources d\u2019informations disponibles dans un cadre coh\xE9rent pour l\u2019aide \xE0 la d\xE9cision'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              _react2.default.createElement(
                'b',
                null,
                'la v\xE9racit\xE9 des donn\xE9es'
              ),
              ' parce que l\u2019assurance de la fiabilit\xE9 des valeurs mesur\xE9es est un imp\xE9ratif pour ma\xEEtriser le risque d\u2019une d\xE9cision bas\xE9e sur un r\xE9sultat de mesure'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _materialUi.Typography,
              null,
              _react2.default.createElement(
                'b',
                null,
                'la d\xE9finition et mise en oeuvre de la strat\xE9gie et des outils IT'
              ),
              ' ',
              'adapt\xE9s pour centraliser toutes les donn\xE9es op\xE9rationnelles et permettre leur exploitation optimale par les hommes et les femmes qui les utilisent.'
            )
          )
        )
      )
    )
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(Enjeu);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/startsWithPeople.e0da0e9b.png";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

var _Separator = __webpack_require__(3);

var _Separator2 = _interopRequireDefault(_Separator);

var _Content = __webpack_require__(2);

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      marginTop: 30
    },
    header: {
      color: theme.palette.secondary[200],
      fontWeight: 700,
      fontSize: 24
    },
    primary: {
      fontWeight: 700,
      color: theme.palette.primary.main
    },
    separator: {
      width: '60%',
      margin: '15px auto'
    }
  };
};

var TravaillerEnsemble = function TravaillerEnsemble(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    _Content2.default,
    { id: 'travailler-ensemble', className: classes.container },
    _react2.default.createElement(
      _materialUi.Typography,
      { className: classes.header, align: 'center', gutterBottom: true },
      'Pourquoi travailler ensemble ?'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { align: 'center', gutterBottom: true },
      'Parce que vous pourrez valider rapidement l\u2019efficacit\xE9 et la pertinence de votre transformation digitale par \u201Cpetits pas\u201D concrets.'
    ),
    _react2.default.createElement(_Separator2.default, { className: classes.separator }),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', align: 'center', gutterBottom: true },
      'Avec pour objectif imm\xE9diat d\u2019obtenir \xE0 tr\xE8s court terme des r\xE9sultats probants : r\xE9duction des rebuts ou des arr\xEAts de la cha\xEEne de production, am\xE9lioration de la ma\xEEtrise de la qualit\xE9 des produits... Et progressivement, \xEAtre en capacit\xE9 de',
      ' ',
      _react2.default.createElement(
        'span',
        { className: classes.primary },
        'co-construire'
      ),
      ' un \xE9co-syst\xE8me de production plus performant, plus efficient, plus strat\xE9gique.'
    )
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(TravaillerEnsemble);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

var _Separator = __webpack_require__(3);

var _Separator2 = _interopRequireDefault(_Separator);

var _Bullet = __webpack_require__(41);

var _Bullet2 = _interopRequireDefault(_Bullet);

var _Content = __webpack_require__(2);

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      marginTop: 30
    },
    header: {
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: 24
    },
    primary: {
      fontWeight: 700,
      color: theme.palette.primary.main
    },
    separator: {
      width: '60%',
      margin: '15px auto'
    }
  };
};

var Intervenir = function Intervenir(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    _Content2.default,
    { id: 'intervenir', className: classes.container },
    _react2.default.createElement(
      _materialUi.Typography,
      { className: classes.header, align: 'center', gutterBottom: true },
      'Comment nous pouvons intervenir ?'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { align: 'center', gutterBottom: true },
      'Un projet d\u2019innovation collaboratif en trois \xE9tapes pour une d\xE9marche pragmatique \u201CQuickWin\u201D :'
    ),
    _react2.default.createElement(_Separator2.default, { className: classes.separator }),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', gutterBottom: true },
      _react2.default.createElement(
        _Bullet2.default,
        null,
        '1'
      ),
      ' Atelier / Diagnostic pour d\xE9finir le p\xE9rim\xE8tre, identifier puis r\xE9duire le diff\xE9rentiel entre l\u2019\xE9tat de l\u2019art et votre syst\xE8me de production actuel.'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', gutterBottom: true },
      _react2.default.createElement(
        _Bullet2.default,
        null,
        '2'
      ),
      ' Mise en \u0153uvre rapide d\u2019un POC (moins de 3 mois) sur vos donn\xE9es pour \xE9valuer les solutions IT envisag\xE9es et les outils d\u2019analyse retenus.'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', gutterBottom: true },
      _react2.default.createElement(
        _Bullet2.default,
        null,
        '3'
      ),
      ' D\xE9ploiement pour industrialiser et \xE9tendre la d\xE9marche. Accompagnement \xE0 la conduite du changement.'
    )
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(Intervenir);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _materialUi = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    separator: {
      width: 25,
      height: 25,
      color: theme.palette.white,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: theme.palette.secondary[200],
      borderRadius: '50%'
    }
  };
};

var Bullet = function Bullet(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(classes.separator, className), style: style },
    children
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(Bullet);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

var _Separator = __webpack_require__(3);

var _Separator2 = _interopRequireDefault(_Separator);

var _team = __webpack_require__(43);

var _team2 = _interopRequireDefault(_team);

var _Content = __webpack_require__(2);

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      marginTop: 30
    },
    header: {
      color: theme.palette.secondary[200],
      fontWeight: 700,
      fontSize: 24
    },
    primary: {
      fontWeight: 700,
      color: theme.palette.primary.main
    },
    separator: {
      width: '60%',
      margin: '15px auto'
    },
    team: {
      display: 'block',
      margin: 'auto',
      marginBottom: 30
    },
    bullet: {
      '&::before': {
        content: "''",
        display: 'inline-block',
        width: 10,
        height: 10,
        marginRight: 8,
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50%'
      }
    }
  };
};

var Presentation = function Presentation(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    _Content2.default,
    { id: 'presentation', className: classes.container },
    _react2.default.createElement(
      _materialUi.Typography,
      { className: classes.header, align: 'center', gutterBottom: true },
      'Qui sommes nous ?'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { align: 'center', gutterBottom: true },
      'HumanToData est une marque du consortium',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.linkedin.com/company/agaetis/' },
        'Agaetis'
      ),
      ',',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.linkedin.com/company/delta-mu/' },
        'Deltamu'
      ),
      ',',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.linkedin.com/company/pyramis-consulting/' },
        'Pyramis Consulting'
      ),
      ' ',
      'et',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.linkedin.com/company/phimeca-engineering/' },
        'PHIMECA Engineering'
      ),
      ' ',
      'qui ont sign\xE9 un contrat de partenariat pour la mise en place d\u2019une offre commune au service de la',
      ' ',
      _react2.default.createElement(
        'b',
        null,
        'digitalisation effective et efficiente des industries.'
      )
    ),
    _react2.default.createElement(_Separator2.default, { className: classes.separator }),
    _react2.default.createElement('img', { className: classes.team, src: _team2.default, alt: 'team' }),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', gutterBottom: true },
      'Ensemble, nous vous proposons de co-construire une solution collaborative \xE0 forte valeur ajout\xE9e reposant sur la combinaison des 4 savoir-faire \xE9prouv\xE9s :'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', className: classes.bullet, gutterBottom: true },
      'Pilotage de la performance industrielle ;'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', className: classes.bullet, gutterBottom: true },
      'Mod\xE9lisation des ph\xE9nom\xE8nes ;'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', className: classes.bullet, gutterBottom: true },
      'V\xE9racit\xE9 des valeurs mesur\xE9es ;'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { variant: 'body2', className: classes.bullet, gutterBottom: true },
      'Strat\xE9gie de traitement pour l\u2019exploitation des donn\xE9es.'
    )
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(Presentation);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/team.230a47fa.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

var _Separator = __webpack_require__(3);

var _Separator2 = _interopRequireDefault(_Separator);

var _Content = __webpack_require__(2);

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      marginTop: 30
    },
    header: {
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: 24
    },
    primary: {
      fontWeight: 700,
      color: theme.palette.primary.main
    },
    separator: {
      width: '60%',
      margin: '15px auto'
    },
    icons: {
      margin: 'auto',
      maxWidth: 150,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    icon: {
      fontSize: 48,
      color: theme.palette.primary.main
    }
  };
};

var Contact = function Contact(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    _Content2.default,
    { id: 'contact', className: classes.container },
    _react2.default.createElement(
      _materialUi.Typography,
      { className: classes.header, align: 'center', gutterBottom: true },
      'Contactez-nous'
    ),
    _react2.default.createElement(
      _materialUi.Typography,
      { align: 'center', gutterBottom: true },
      'Vous souhaitez en savoir plus sur nos solutions pour fiabiliser, stocker et faire parler vos donn\xE9es ? Nous sommes \xE0 votre disposition pour mettre en \u0153uvre rapidement un POC (Proof of Concept) pour vous permettre de tester la pertinence de la d\xE9marche.'
    ),
    _react2.default.createElement(_Separator2.default, { className: classes.separator }),
    _react2.default.createElement(
      _materialUi.Typography,
      { align: 'center', variant: 'body2', gutterBottom: true },
      'Centre d\u2019Affaires du Z\xE9nith - 48 rue de Sarli\xE8ve - 63800 Cournon d\u2019Auvergne - France',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'mailto:contact@humantodata.com' },
        'contact@humantodata.com'
      ),
      ' -',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'www.humantodata.com' },
        'www.humantodata.com'
      )
    )
  );
};

exports.default = (0, _materialUi.withStyles)(styles)(Contact);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(46);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

__webpack_require__(47);

__webpack_require__(48);

var _Slide = __webpack_require__(49);

var _Slide2 = _interopRequireDefault(_Slide);

var _peoples = __webpack_require__(51);

var _peoples2 = _interopRequireDefault(_peoples);

var _factory = __webpack_require__(52);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

exports.default = function () {
  return _react2.default.createElement(
    _reactSlick2.default,
    settings,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Slide2.default,
        { imgSrc: _factory2.default },
        'Transforming factories...'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Slide2.default,
        { imgSrc: _peoples2.default },
        '...starts with people.'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Slide2.default,
        null,
        'Transformation digitale de votre usine :',
        _react2.default.createElement('br', null),
        'avez-vous pens\xE9 \xE0 tout ?'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Slide2.default,
        { align: 'left' },
        '\u2022 D\xE9finition et mise en oeuvre de la strat\xE9gie et des outils IT',
        _react2.default.createElement('br', null),
        '\u2022 Mod\xE9lisation des ph\xE9nom\xE8nes et DataScience',
        _react2.default.createElement('br', null),
        '\u2022 V\xE9racit\xE9 des donn\xE9es',
        _react2.default.createElement('br', null),
        '\u2022 Pilotage de la performance et prise en compte du facteur humain'
      )
    )
  );
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("slick-carousel/slick/slick.css");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("slick-carousel/slick/slick-theme.css");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(1);

var _Typography = __webpack_require__(50);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    slide: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 350,
      width: '100%',
      padding: '50px 0',
      backgroundColor: theme.palette.primary.main
    },
    text: {
      fontSize: 24,
      fontWeight: 700,
      color: theme.palette.white
    },
    img: {
      height: 100
    }
  };
};

var Slide = function Slide(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      imgSrc = _ref.imgSrc,
      align = _ref.align;
  return _react2.default.createElement(
    'div',
    { className: classes.slide },
    imgSrc && _react2.default.createElement('img', { className: classes.img, src: imgSrc, alt: children }),
    _react2.default.createElement(
      _Typography2.default,
      { align: align, className: classes.text },
      children
    )
  );
};

Slide.defaultProps = {
  align: 'center'
};

exports.default = (0, _materialUi.withStyles)(styles)(Slide);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography/Typography");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/peoples.480d0182.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/factory.8b602232.png";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("material-ui/CssBaseline");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  palette: {
    primary: { main: '#be3a34' },
    secondary: {
      main: '#221c35',
      100: '#f37b67',
      200: '#ddb04c',
      300: '#17596d',
      400: '#c13338'
    },
    white: '#ffffff',
    type: 'light'
  },
  typography: {
    body1: {
      fontSize: 16
    },
    body2: {
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.54)'
    }
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.f73ba779.js.map