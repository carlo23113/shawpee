"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProvider = createProvider;
exports.onLogin = onLogin;
exports.onLogout = onLogout;

var _vue = _interopRequireDefault(require("vue"));

var _vueApollo = _interopRequireDefault(require("vue-apollo"));

var _graphqlClient = require("vue-cli-plugin-apollo/graphql-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Install the vue plugin
_vue["default"].use(_vueApollo["default"]); // Name of the localStorage item


var AUTH_TOKEN = "apollo-token"; // Http endpoint

var httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || "http://localhost:8000/graphql"; // Config

var defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint: httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || "ws://localhost:8000/graphql",
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  // link: myLink
  // Override default cache
  // cache: myCache
  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...
  // Additional ApolloClient options
  // apollo: { ... }
  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }

}; // Call this in the Vue app file

function createProvider() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Create apollo client
  var _createApolloClient = (0, _graphqlClient.createApolloClient)(_objectSpread({}, defaultOptions, {}, options)),
      apolloClient = _createApolloClient.apolloClient,
      wsClient = _createApolloClient.wsClient;

  apolloClient.wsClient = wsClient; // Create vue apollo provider

  var apolloProvider = new _vueApollo["default"]({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {// fetchPolicy: 'cache-and-network',
      }
    },
    errorHandler: function errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log("%cError", "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;", error.message);
    }
  });
  return apolloProvider;
} // Manually call this when user log in


function onLogin(apolloClient, token) {
  return regeneratorRuntime.async(function onLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (typeof localStorage !== "undefined" && token) {
            localStorage.setItem(AUTH_TOKEN, token);
          }

          if (apolloClient.wsClient) (0, _graphqlClient.restartWebsockets)(apolloClient.wsClient);
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(apolloClient.resetStore());

        case 5:
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](2);
          // eslint-disable-next-line no-console
          console.log("%cError on cache reset (login)", "color: orange;", _context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 7]]);
} // Manually call this when user log out


function onLogout(apolloClient) {
  return regeneratorRuntime.async(function onLogout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (typeof localStorage !== "undefined") {
            localStorage.removeItem(AUTH_TOKEN);
          }

          if (apolloClient.wsClient) (0, _graphqlClient.restartWebsockets)(apolloClient.wsClient);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(apolloClient.resetStore());

        case 5:
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](2);
          // eslint-disable-next-line no-console
          console.log("%cError on cache reset (logout)", "color: orange;", _context2.t0.message);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 7]]);
}