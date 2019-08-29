/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';

//This params from redux thunk middleware, the third params its axios instance that we passed before.
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var responses;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              responses = _context.sent;


              dispatch({
                type: FETCH_USERS,
                payload: responses
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var responses;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              responses = _context2.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: responses
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'FETCH_ADMINS';

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var responses;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              responses = _context3.sent;

              dispatch({
                type: FETCH_ADMINS,
                payload: responses
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAuthorization = exports.withAuthentication = exports.AuthUserContext = undefined;

var _context = __webpack_require__(10);

var _context2 = _interopRequireDefault(_context);

var _withAuthentication = __webpack_require__(20);

var _withAuthentication2 = _interopRequireDefault(_withAuthentication);

var _withAuthorization = __webpack_require__(26);

var _withAuthorization2 = _interopRequireDefault(_withAuthorization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AuthUserContext = _context2.default;
exports.withAuthentication = _withAuthentication2.default;
exports.withAuthorization = _withAuthorization2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFirebase = exports.FirebaseContext = undefined;

var _context = __webpack_require__(21);

var _context2 = _interopRequireDefault(_context);

var _firebase = __webpack_require__(22);

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _firebase2.default;
exports.FirebaseContext = _context2.default;
exports.withFirebase = _context.withFirebase;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(28);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UserListPage = __webpack_require__(29);

var _UserListPage2 = _interopRequireDefault(_UserListPage);

var _NotFoundPage = __webpack_require__(30);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminListPage = __webpack_require__(31);

var _AdminListPage2 = _interopRequireDefault(_AdminListPage);

var _LoginPage = __webpack_require__(33);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _LoginPage2.default, {
    path: '/login',
    exact: true
  }), _extends({}, _UserListPage2.default, {
    path: '/users'
  }), _extends({}, _AdminListPage2.default, {
    path: '/admins'
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthUserContext = _react2.default.createContext(null);

exports.default = AuthUserContext;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(15);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _renderer = __webpack_require__(16);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(34);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(9);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).filter(function (promise) {
    return promise;
  }).map(function (promise) {
    return new Promise(function (resolve, reject) {
      promise.then(resolve).catch(resolve);
    });
  });
  var render = function render() {
    var context = {};
    var html = (0, _renderer2.default)(req, store, context);

    if (context.url) return res.redirect(301, context.url);
    res.status(context.statusCode || 200).send(html);
  };
  Promise.all(promises).then(render);
});

app.listen(3000, function () {
  console.log('Listening port 3000');
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(17);

var _reactRouterDom = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(8);

var _serializeJavascript = __webpack_require__(18);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(9);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: context },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    var _Helmet$renderStatic = _reactHelmet.Helmet.renderStatic(),
        title = _Helmet$renderStatic.title,
        meta = _Helmet$renderStatic.meta;

    return '\n        <html>\n            <head>\n                ' + title.toString() + '\n                ' + meta.toString() + '\n                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script>\n                    window.INITIAL_DATA=' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="bundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _recompose = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _Session = __webpack_require__(6);

var _actions = __webpack_require__(2);

var _Header = __webpack_require__(27);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};
exports.default = {
    component: (0, _recompose.compose)(_Session.withAuthentication, (0, _reactRedux.connect)(null, null))(App),
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchCurrentUser)());
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _context = __webpack_require__(10);

var _context2 = _interopRequireDefault(_context);

var _Firebase = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withAuthentication = function withAuthentication(Component) {
    var withAuthentication = function (_React$Component) {
        _inherits(withAuthentication, _React$Component);

        function withAuthentication(props) {
            _classCallCheck(this, withAuthentication);

            var _this = _possibleConstructorReturn(this, (withAuthentication.__proto__ || Object.getPrototypeOf(withAuthentication)).call(this, props));

            _this.state = {
                authUser: null
            };
            return _this;
        }

        _createClass(withAuthentication, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                this.listener = this.props.firebase.auth.onAuthStateChanged(function (authUser) {
                    authUser ? _this2.setState({ authUser: authUser }) : _this2.setState({ authUser: null });
                });
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.listener();
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    _context2.default.Provider,
                    { value: this.state.authUser },
                    _react2.default.createElement(Component, this.props)
                );
            }
        }]);

        return withAuthentication;
    }(_react2.default.Component);

    return (0, _Firebase.withFirebase)(withAuthentication);
};

exports.default = withAuthentication;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFirebase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FirebaseContext = _react2.default.createContext(null);

var withFirebase = exports.withFirebase = function withFirebase(Component) {
  return function (props) {
    return _react2.default.createElement(
      FirebaseContext.Consumer,
      null,
      function (firebase) {
        return _react2.default.createElement(Component, _extends({}, props, { firebase: firebase }));
      }
    );
  };
};

exports.default = FirebaseContext;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(23);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(24);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
  apiKey: "AIzaSyBlImZQu-pKMTJr2t9Eg22KHxxlBsRbZvI",
  authDomain: "the-panda-riot.firebaseapp.com",
  databaseURL: "https://the-panda-riot.firebaseio.com",
  projectId: "the-panda-riot",
  storageBucket: "the-panda-riot.appspot.com",
  messagingSenderId: "276121448519"
};

var Firebase = function Firebase() {
  var _this = this;

  _classCallCheck(this, Firebase);

  this.doCreateUserWithEmailAndPassword = function (email, password) {
    return _this.auth.createUserWithEmailAndPassword(email, password);
  };

  this.doSignInWithEmailAndPassword = function (email, password) {
    return _this.auth.signInWithEmailAndPassword(email, password);
  };

  this.doSignOut = function () {
    return _this.auth.signOut();
  };

  this.doPasswordReset = function (email) {
    return _this.auth.sendPasswordResetEmail(email);
  };

  this.doPasswordUpdate = function (password) {
    return _this.auth.currentUser.updatePassword(password);
  };

  this.meQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.auth.onAuthStateChanged;

          case 2:
            user = _context.sent;
            return _context.abrupt('return', user);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  this.user = function (uid) {
    return _this.db.ref('users/' + uid);
  };

  this.users = function () {
    return _this.db.ref('users');
  };

  _app2.default.initializeApp(config);
  this.auth = _app2.default.auth();
  this.db = _app2.default.database();
}

// Firebase *Authentication*

// create user


// sign-in user

// sign-out user


// pw re-set


// pw update


// get me


// Firebase *Database*
;

exports.default = Firebase;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

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

var _reactRouterDom = __webpack_require__(3);

var _recompose = __webpack_require__(5);

var _Firebase = __webpack_require__(7);

var _ = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withAuthorization = function withAuthorization(condition) {
  return function (Component) {
    var WithAuthorization = function (_React$Component) {
      _inherits(WithAuthorization, _React$Component);

      function WithAuthorization() {
        _classCallCheck(this, WithAuthorization);

        return _possibleConstructorReturn(this, (WithAuthorization.__proto__ || Object.getPrototypeOf(WithAuthorization)).apply(this, arguments));
      }

      _createClass(WithAuthorization, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          this.listener = this.props.firebase.auth.onAuthStateChanged(function (authUser) {
            if (!condition(authUser)) {
              _this2.props.history.push('/login');
            }
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.listener();
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          return _react2.default.createElement(
            _.AuthUserContext.Consumer,
            null,
            function (authUser) {
              return condition(authUser) ? _react2.default.createElement(Component, _this3.props) : null;
            }
          );
        }
      }]);

      return WithAuthorization;
    }(_react2.default.Component);

    return (0, _recompose.compose)(_reactRouterDom.withRouter, _Firebase.withFirebase)(WithAuthorization);
  };
};

exports.default = withAuthorization;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _recompose = __webpack_require__(5);

var _index = __webpack_require__(7);

var _Session = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var isAdmin = _ref.isAdmin,
      privs = _ref.privs,
      firebase = _ref.firebase;


  // console.log('firebase is ', firebase.meQuery)


  // if (firebase) {
  //   if (firebase.meQuery) {
  //     console.log('firebase.mequery ', firebase.meQuery());
  //   }
  // }


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        'div',
        { className: 'nav-wrapper' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', className: 'brand-logo', style: { paddingLeft: 15 } },
          'React SSR'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'right' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/users' },
              'Users'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/admins' },
              'Admins'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _Session.AuthUserContext.Consumer,
      null,
      function (authUser) {
        return authUser ? _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/login' },
            'Log Out'
          )
        ) : _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/login' },
            'Log Out'
          )
        );
      }
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: auth
  };
};

exports.default = (0, _recompose.compose)(_index.withFirebase, (0, _reactRedux.connect)(mapStateToProps, null))(Header);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        "div",
        { className: "center-align", style: { marginTop: 200 } },
        _react2.default.createElement(
            "h3",
            null,
            "Welcome"
        ),
        _react2.default.createElement(
            "p",
            null,
            "This is server side rendering for react."
        )
    );
};
exports.default = {
    component: Home
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(8);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
  }

  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'renderUserList',
    value: function renderUserList() {
      return this.props.users.map(function (user) {
        return _react2.default.createElement(
          'li',
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'User List Page (' + this.props.users.length + ')'
        ),
        _react2.default.createElement('meta', {
          property: 'og:title',
          content: 'User List Page (' + this.props.users.length + ')'
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'h3',
          null,
          'Here\'s a big list of Users:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.renderUserList()
        )
      );
    }
  }]);

  return UserList;
}(_react.Component);

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UserList)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.statusCode = 404;
    return _react2.default.createElement(
        "div",
        { className: "center-align", style: { marginTop: 200 } },
        _react2.default.createElement(
            "h3",
            null,
            "Not Found"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Ooops, route not found."
        )
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

var _requireAuth = __webpack_require__(32);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminListPage = function (_Component) {
    _inherits(AdminListPage, _Component);

    function AdminListPage() {
        _classCallCheck(this, AdminListPage);

        return _possibleConstructorReturn(this, (AdminListPage.__proto__ || Object.getPrototypeOf(AdminListPage)).apply(this, arguments));
    }

    _createClass(AdminListPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchAdmins();
        }
    }, {
        key: 'renderAdmins',
        value: function renderAdmins() {
            return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                    'li',
                    { key: admin.id },
                    admin.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Protected list of admin:'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderAdmins()
                )
            );
        }
    }]);

    return AdminListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var admins = _ref.admins;
    return {
        admins: admins
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminListPage)),
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchAdmins)());
    }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                    case null:
                        return _react2.default.createElement(
                            'div',
                            null,
                            'Loading...'
                        );
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react.PureComponent);

    var mapStateToProps = function mapStateToProps(_ref) {
        var auth = _ref.auth;
        return { auth: auth };
    };
    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _recompose = __webpack_require__(5);

var _Firebase = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage() {
    var _this2 = this;

    _classCallCheck(this, LoginPage);

    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this));

    _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var firebase;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              firebase = _this.props.firebase;

              firebase.doSignInWithEmailAndPassword('thepandariot@gmail.com', '&Alpha01').then(function (res) {
                _this.setState({ blob: res });
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.state = {
      blob: null
    };
    return _this;
  }

  _createClass(LoginPage, [{
    key: 'render',
    value: function render() {
      console.log('this state ', this.state.blob);
      return _react2.default.createElement(
        'div',
        { className: 'center-align', style: { marginTop: 200 } },
        _react2.default.createElement(
          'h3',
          null,
          'Login'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This is a LOGIN PAGE'
        )
      );
    }
  }]);

  return LoginPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = {
  component: (0, _recompose.compose)(_Firebase.withFirebase, (0, _reactRedux.connect)(mapStateToProps))(LoginPage)
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(36);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(37);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosServerInstance = _axios2.default.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });
  return (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosServerInstance)));
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(11);

var _usersReducer = __webpack_require__(38);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(39);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(40);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    users: _usersReducer2.default,
    auth: _authReducer2.default,
    admins: _adminsReducer2.default
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ })
/******/ ]);