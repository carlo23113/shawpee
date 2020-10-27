"use strict";

var _vuetify = _interopRequireDefault(require("../plugins/vuetify"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _sweetalert = _interopRequireDefault(require("sweetalert"));

var _routes = require("./routes");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("./bootstrap");

window.Vue = require("vue");
Vue.component("app-component", require("./components/App.vue")["default"]);
Vue.component("login-component", require("./components/login.vue")["default"]);
var router = new _vueRouter["default"]({
  mode: "history",
  routes: _routes.routes
});
Vue.use(_vueRouter["default"]);
var app = new Vue({
  vuetify: _vuetify["default"],
  el: "#app",
  router: router
});