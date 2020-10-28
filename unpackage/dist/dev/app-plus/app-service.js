(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/main.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 14));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/pages.json ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*****************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/pages/index/index.vue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FMO0FBQ3JMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJiZTg0YTNjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/projects/uniTest/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("image", {
        staticClass: _vm._$s(1, "sc", "plhImg"),
        attrs: {
          src: _vm._$s(1, "a-src", __webpack_require__(/*! ../../static/logo.png */ 5)),
          _i: 1
        }
      }),
      _c("img-tailor", {
        ref: "imgTailor",
        staticClass: _vm._$s(2, "sc", "imgTailor"),
        attrs: {
          img: "../../static/logo.png",
          boxHeight: 400,
          boxWidth: 300,
          _i: 2
        }
      }),
      _c("button", { attrs: { _i: 3 }, on: { click: _vm.finish } })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***********************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/static/logo.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9sb2dvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJtQixDQUFnQixzb0JBQUcsRUFBQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxkZXZcXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkZXZcXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/projects/uniTest/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\nvar _imgTailor = _interopRequireDefault(__webpack_require__(/*! @/components/imgTailor/imgTailor.vue */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return {};}, components: { imgTailor: _imgTailor.default }, methods: {\n    finish: function finish() {\n      this.$refs.imgTailor.cutImg();\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQSw0Rzs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsVUFFQSxDQUpBLEVBS0EsY0FDQSw2QkFEQSxFQUxBLEVBUUE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQSxLQUhBLEVBUkEsRSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9sb2dvLnBuZ1wiIG1vZGU9XCJcIiBjbGFzcz1cInBsaEltZ1wiPjwvaW1hZ2U+XHJcblx0XHRcclxuXHRcdDxpbWctdGFpbG9yIGNsYXNzPVwiaW1nVGFpbG9yXCIgaW1nPScuLi8uLi9zdGF0aWMvbG9nby5wbmcnIDpib3hIZWlnaHQ9JzQwMCcgOmJveFdpZHRoPSczMDAnIHJlZj0naW1nVGFpbG9yJz48L2ltZy10YWlsb3I+XHJcblx0XHQ8YnV0dG9uIEB0YXA9XCJmaW5pc2hcIj7lrozmiJA8L2J1dHRvbj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBpbWdUYWlsb3IgZnJvbSAnQC9jb21wb25lbnRzL2ltZ1RhaWxvci9pbWdUYWlsb3IudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGltZ1RhaWxvclxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZmluaXNoKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuaW1nVGFpbG9yLmN1dEltZygpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5pbWdUYWlsb3Ige1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0aGVpZ2h0OiA0MDBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!******************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/components/imgTailor/imgTailor.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgTailor.vue?vue&type=template&id=070f7f72&scoped=true& */ 9);\n/* harmony import */ var _imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgTailor.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"070f7f72\",\n  null,\n  false,\n  _imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/imgTailor/imgTailor.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQ3FMO0FBQ3JMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW1nVGFpbG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzBmN2Y3MiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ltZ1RhaWxvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ltZ1RhaWxvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA3MGY3ZjcyXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvaW1nVGFpbG9yL2ltZ1RhaWxvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/components/imgTailor/imgTailor.vue?vue&type=template&id=070f7f72&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./imgTailor.vue?vue&type=template&id=070f7f72&scoped=true& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_template_id_070f7f72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/projects/uniTest/components/imgTailor/imgTailor.vue?vue&type=template&id=070f7f72&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "movable-area",
      {
        staticClass: _vm._$s(1, "sc", "selectBox"),
        style: _vm._$s(1, "s", { backgroundImage: "url(" + _vm.img + ")" }),
        attrs: { _i: 1 }
      },
      [
        _vm._l(_vm._$s(2, "f", { forItems: _vm.dotInitPosition }), function(
          item,
          index,
          $20,
          $30
        ) {
          return _c("movable-view", {
            key: _vm._$s(2, "f", { forIndex: $20, key: index }),
            class: _vm._$s("2-" + $30, "c", "dot" + (index + 1)),
            attrs: {
              x: _vm._$s("2-" + $30, "a-x", item.x),
              y: _vm._$s("2-" + $30, "a-y", item.y),
              _i: "2-" + $30
            },
            on: {
              change: function($event) {
                return _vm.handleDotMove($event, index + 1)
              }
            }
          })
        }),
        _c("canvas", {
          staticClass: _vm._$s(3, "sc", "myCanvas"),
          attrs: { _i: 3 }
        })
      ],
      2
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/components/imgTailor/imgTailor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./imgTailor.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_imgTailor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9tQixDQUFnQiwrbkJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxkZXZcXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW1nVGFpbG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkZXZcXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbWdUYWlsb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/projects/uniTest/components/imgTailor/imgTailor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 =\n{\n  props: {\n    // 图片地址\n    img: {\n      type: String,\n      required: true },\n\n    // 四个点的初始化位置\n    dotInitPosition: {\n      type: Array,\n      default: function _default() {\n        return [\n        { x: 100, y: 100 },\n        { x: 200, y: 100 },\n        { x: 200, y: 200 },\n        { x: 100, y: 200 }];\n\n      } },\n\n    // 整体区域的宽度\n    boxWidth: {\n      type: Number,\n      defalut: 300 },\n\n    // 整体区域的高度\n    boxHeight: {\n      type: Number,\n      defalut: 400 } },\n\n\n  data: function data() {\n    return {\n      // 四个点 中心的xy坐标\n      dotPositionArr: [],\n      context: null // 画布\n    };\n  },\n  mounted: function mounted() {\n    // 1.创建画布上下文\n    this.context = uni.createCanvasContext('myCanvas');\n    // 2.执行一次绘制\n    this.handleDotMove();\n  },\n  methods: {\n    // 仅调用一次,用于加上点的宽度和边框\n    initPosition: function initPosition() {\n      // JSON.parse(JSON.stringify())处理传址问题\n      var tempArr = JSON.parse(JSON.stringify(this.dotInitPosition));\n\n      tempArr.forEach(function (item, index) {\n        // 11=半宽7+边框4\n        tempArr[index]['x'] += 11;\n        tempArr[index]['y'] += 11;\n      });\n      this.dotPositionArr = tempArr;\n    },\n    // 移动点时触发 whichDot:1|2|3|4\n    handleDotMove: function handleDotMove(event) {var whichDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      // 1.保存坐标数据\n      if (whichDot) {\n        this.dotPositionArr[whichDot - 1]['x'] = event.detail.x + 11;\n        this.dotPositionArr[whichDot - 1]['y'] = event.detail.y + 11;\n      } else {\n        this.initPosition();\n      }\n      // 2.根据移动的点动态绘制线条\n      this.context.clearRect(0, 0, 1000, 1000);\n      this.context.beginPath();\n      this.context.moveTo(this.dotPositionArr[0]['x'], this.dotPositionArr[0]['y']);\n      this.context.lineTo(this.dotPositionArr[1]['x'], this.dotPositionArr[1]['y']);\n      this.context.lineTo(this.dotPositionArr[2]['x'], this.dotPositionArr[2]['y']);\n      this.context.lineTo(this.dotPositionArr[3]['x'], this.dotPositionArr[3]['y']);\n      this.context.closePath();\n      this.context.strokeStyle = '#36ACFD';\n      this.context.lineWidth = 2;\n      this.context.stroke();\n      // 3.绘制外部阴影\n      // 第一块阴影\n      this.context.beginPath();\n      this.context.moveTo(0, 0);\n      this.context.lineTo(this.dotPositionArr[0]['x'], this.dotPositionArr[0]['y']);\n      this.context.lineTo(this.dotPositionArr[1]['x'], this.dotPositionArr[1]['y']);\n      this.context.lineTo(this.boxWidth, 0);\n\n      this.context.closePath();\n      this.context.setFillStyle('rgba(0,0,0,0.5)');\n      this.context.fill();\n      // 第二块阴影\n      this.context.beginPath();\n      this.context.moveTo(this.dotPositionArr[1]['x'], this.dotPositionArr[1]['y']);\n      this.context.lineTo(this.boxWidth, 0);\n      this.context.lineTo(this.boxWidth, this.boxHeight);\n      this.context.lineTo(this.dotPositionArr[2]['x'], this.dotPositionArr[2]['y']);\n\n      this.context.closePath();\n      this.context.setFillStyle('rgba(0,0,0,0.5)');\n      this.context.fill();\n      // 第三块阴影\n      this.context.beginPath();\n      this.context.moveTo(this.dotPositionArr[3]['x'], this.dotPositionArr[3]['y']);\n      this.context.lineTo(this.dotPositionArr[2]['x'], this.dotPositionArr[2]['y']);\n      this.context.lineTo(this.boxWidth, this.boxHeight);\n      this.context.lineTo(0, this.boxHeight);\n      this.context.closePath();\n      this.context.setFillStyle('rgba(0,0,0,0.5)');\n      this.context.fill();\n      // 第四块阴影\n      this.context.beginPath();\n      this.context.moveTo(0, 0);\n      this.context.lineTo(this.dotPositionArr[0]['x'], this.dotPositionArr[0]['y']);\n      this.context.lineTo(this.dotPositionArr[3]['x'], this.dotPositionArr[3]['y']);\n      this.context.lineTo(0, this.boxHeight);\n      this.context.closePath();\n      this.context.setFillStyle('rgba(0,0,0,0.5)');\n      this.context.fill();\n\n      this.context.draw();\n    },\n    // 裁剪图片\n    cutImg: function cutImg() {\n      this.context.beginPath();\n      this.context.moveTo(this.dotPositionArr[0]['x'], this.dotPositionArr[0]['y']);\n      this.context.lineTo(this.dotPositionArr[1]['x'], this.dotPositionArr[1]['y']);\n      this.context.lineTo(this.dotPositionArr[2]['x'], this.dotPositionArr[2]['y']);\n      this.context.lineTo(this.dotPositionArr[3]['x'], this.dotPositionArr[3]['y']);\n      this.context.closePath();\n      this.context.clip();\n      this.context.clearRect(0, 0, this.boxWidth, this.boxHeight);\n      this.context.draw();\n      // console.log(this.context.toDataURL(\"image/png\"));\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9pbWdUYWlsb3IvaW1nVGFpbG9yLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxvQkFGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0EsMEJBSEE7QUFJQSwwQkFKQTs7QUFNQSxPQVRBLEVBUEE7O0FBa0JBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBbkJBOztBQXVCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQSxFQXhCQSxFQURBOzs7QUE4QkEsTUE5QkEsa0JBOEJBO0FBQ0E7QUFDQTtBQUNBLHdCQUZBO0FBR0EsbUJBSEEsQ0FHQTtBQUhBO0FBS0EsR0FwQ0E7QUFxQ0EsU0FyQ0EscUJBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTFDQTtBQTJDQTtBQUNBO0FBQ0EsZ0JBRkEsMEJBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBO0FBQ0EsS0FaQTtBQWFBO0FBQ0EsaUJBZEEseUJBY0EsS0FkQSxFQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQTFFQTtBQTJFQTtBQUNBLFVBNUVBLG9CQTRFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2RkEsRUEzQ0EsRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDxtb3ZhYmxlLWFyZWEgY2xhc3M9XCJzZWxlY3RCb3hcIiA6c3R5bGU9XCJ7J2JhY2tncm91bmRJbWFnZSc6J3VybCgnK2ltZysnKSd9XCI+XHJcblx0XHRcdDxtb3ZhYmxlLXZpZXcgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZG90SW5pdFBvc2l0aW9uXCIgOmtleT0naW5kZXgnIDpjbGFzcz1cIidkb3QnKyhpbmRleCArIDEpXCIgZGlyZWN0aW9uPVwiYWxsXCIgOng9XCJpdGVtLnhcIiA6eT0naXRlbS55JyBAY2hhbmdlPVwiaGFuZGxlRG90TW92ZSgkZXZlbnQsaW5kZXggKyAxKVwiPjwvbW92YWJsZS12aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PGNhbnZhcyBjYW52YXMtaWQ9XCJteUNhbnZhc1wiIGNsYXNzPVwibXlDYW52YXNcIj48L2NhbnZhcz5cclxuXHRcdDwvbW92YWJsZS1hcmVhPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8g5Zu+54mH5Zyw5Z2AXHJcblx0XHRcdGltZzoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Zub5Liq54K555qE5Yid5aeL5YyW5L2N572uXHJcblx0XHRcdGRvdEluaXRQb3NpdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFtcclxuXHRcdFx0XHRcdFx0XHR7eDogMTAwLCB5OjEwMH0sXHJcblx0XHRcdFx0XHRcdFx0e3g6IDIwMCwgeToxMDB9LFxyXG5cdFx0XHRcdFx0XHRcdHt4OiAyMDAsIHk6MjAwfSxcclxuXHRcdFx0XHRcdFx0XHR7eDogMTAwLCB5OjIwMH0sXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaVtOS9k+WMuuWfn+eahOWuveW6plxyXG5cdFx0XHRib3hXaWR0aDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhbHV0OiAzMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pW05L2T5Yy65Z+f55qE6auY5bqmXHJcblx0XHRcdGJveEhlaWdodDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhbHV0OiA0MDBcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIOWbm+S4queCuSDkuK3lv4PnmoR4eeWdkOagh1xyXG5cdFx0XHRcdGRvdFBvc2l0aW9uQXJyOiBbXSxcclxuXHRcdFx0XHRjb250ZXh0OiBudWxsLCAvLyDnlLvluINcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdC8vIDEu5Yib5bu655S75biD5LiK5LiL5paHXHJcblx0XHRcdHRoaXMuY29udGV4dCA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KCdteUNhbnZhcycpXHJcblx0XHRcdC8vIDIu5omn6KGM5LiA5qyh57uY5Yi2XHJcblx0XHRcdHRoaXMuaGFuZGxlRG90TW92ZSgpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDku4XosIPnlKjkuIDmrKEs55So5LqO5Yqg5LiK54K555qE5a695bqm5ZKM6L655qGGXHJcblx0XHRcdGluaXRQb3NpdGlvbigpIHtcclxuXHRcdFx0XHQvLyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCkp5aSE55CG5Lyg5Z2A6Zeu6aKYXHJcblx0XHRcdFx0bGV0IHRlbXBBcnIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZG90SW5pdFBvc2l0aW9uKSlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0ZW1wQXJyLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XHJcblx0XHRcdFx0XHQvLyAxMT3ljYrlrr03K+i+ueahhjRcclxuXHRcdFx0XHRcdHRlbXBBcnJbaW5kZXhdWyd4J10gKz0gMTFcclxuXHRcdFx0XHRcdHRlbXBBcnJbaW5kZXhdWyd5J10gKz0gMTFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMuZG90UG9zaXRpb25BcnIgPSB0ZW1wQXJyXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOenu+WKqOeCueaXtuinpuWPkSB3aGljaERvdDoxfDJ8M3w0XHJcblx0XHRcdGhhbmRsZURvdE1vdmUoZXZlbnQsd2hpY2hEb3QgPSAwKSB7XHJcblx0XHRcdFx0Ly8gMS7kv53lrZjlnZDmoIfmlbDmja5cclxuXHRcdFx0XHRpZih3aGljaERvdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5kb3RQb3NpdGlvbkFyclt3aGljaERvdCAtIDFdWyd4J10gPSBldmVudC5kZXRhaWwueCArIDExXHJcblx0XHRcdFx0XHR0aGlzLmRvdFBvc2l0aW9uQXJyW3doaWNoRG90IC0gMV1bJ3knXSA9IGV2ZW50LmRldGFpbC55ICsgMTFcclxuXHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmluaXRQb3NpdGlvbigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIDIu5qC55o2u56e75Yqo55qE54K55Yqo5oCB57uY5Yi257q/5p2hXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsMTAwMCwxMDAwKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5tb3ZlVG8odGhpcy5kb3RQb3NpdGlvbkFyclswXVsneCddLCB0aGlzLmRvdFBvc2l0aW9uQXJyWzBdWyd5J10pXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLmRvdFBvc2l0aW9uQXJyWzFdWyd4J10sIHRoaXMuZG90UG9zaXRpb25BcnJbMV1bJ3knXSlcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuZG90UG9zaXRpb25BcnJbMl1bJ3gnXSwgdGhpcy5kb3RQb3NpdGlvbkFyclsyXVsneSddKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5kb3RQb3NpdGlvbkFyclszXVsneCddLCB0aGlzLmRvdFBvc2l0aW9uQXJyWzNdWyd5J10pXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJyMzNkFDRkQnO1xyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5saW5lV2lkdGggPSAyXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpXHJcblx0XHRcdFx0Ly8gMy7nu5jliLblpJbpg6jpmLTlvbFcclxuXHRcdFx0XHQvLyDnrKzkuIDlnZfpmLTlvbFcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubW92ZVRvKDAsIDApXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLmRvdFBvc2l0aW9uQXJyWzBdWyd4J10sIHRoaXMuZG90UG9zaXRpb25BcnJbMF1bJ3knXSlcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuZG90UG9zaXRpb25BcnJbMV1bJ3gnXSwgdGhpcy5kb3RQb3NpdGlvbkFyclsxXVsneSddKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5ib3hXaWR0aCwgMClcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuc2V0RmlsbFN0eWxlKCdyZ2JhKDAsMCwwLDAuNSknKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5maWxsKClcclxuXHRcdFx0XHQvLyDnrKzkuozlnZfpmLTlvbFcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubW92ZVRvKHRoaXMuZG90UG9zaXRpb25BcnJbMV1bJ3gnXSwgdGhpcy5kb3RQb3NpdGlvbkFyclsxXVsneSddKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5ib3hXaWR0aCwwKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5ib3hXaWR0aCx0aGlzLmJveEhlaWdodClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuZG90UG9zaXRpb25BcnJbMl1bJ3gnXSwgdGhpcy5kb3RQb3NpdGlvbkFyclsyXVsneSddKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5zZXRGaWxsU3R5bGUoJ3JnYmEoMCwwLDAsMC41KScpXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmZpbGwoKVxyXG5cdFx0XHRcdC8vIOesrOS4ieWdl+mYtOW9sVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5tb3ZlVG8odGhpcy5kb3RQb3NpdGlvbkFyclszXVsneCddLCB0aGlzLmRvdFBvc2l0aW9uQXJyWzNdWyd5J10pXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLmRvdFBvc2l0aW9uQXJyWzJdWyd4J10sIHRoaXMuZG90UG9zaXRpb25BcnJbMl1bJ3knXSlcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuYm94V2lkdGgsdGhpcy5ib3hIZWlnaHQpXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbygwLCB0aGlzLmJveEhlaWdodClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuc2V0RmlsbFN0eWxlKCdyZ2JhKDAsMCwwLDAuNSknKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5maWxsKClcclxuXHRcdFx0XHQvLyDnrKzlm5vlnZfpmLTlvbFcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubW92ZVRvKDAsMClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuZG90UG9zaXRpb25BcnJbMF1bJ3gnXSwgdGhpcy5kb3RQb3NpdGlvbkFyclswXVsneSddKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5kb3RQb3NpdGlvbkFyclszXVsneCddLCB0aGlzLmRvdFBvc2l0aW9uQXJyWzNdWyd5J10pXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbygwLCB0aGlzLmJveEhlaWdodClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuc2V0RmlsbFN0eWxlKCdyZ2JhKDAsMCwwLDAuNSknKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5maWxsKClcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOijgeWJquWbvueJh1xyXG5cdFx0XHRjdXRJbWcoKSB7XHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0Lm1vdmVUbyh0aGlzLmRvdFBvc2l0aW9uQXJyWzBdWyd4J10sIHRoaXMuZG90UG9zaXRpb25BcnJbMF1bJ3knXSlcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuZG90UG9zaXRpb25BcnJbMV1bJ3gnXSwgdGhpcy5kb3RQb3NpdGlvbkFyclsxXVsneSddKVxyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5kb3RQb3NpdGlvbkFyclsyXVsneCddLCB0aGlzLmRvdFBvc2l0aW9uQXJyWzJdWyd5J10pXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLmRvdFBvc2l0aW9uQXJyWzNdWyd4J10sIHRoaXMuZG90UG9zaXRpb25BcnJbM11bJ3knXSlcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuY2xpcCgpXHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsdGhpcy5ib3hXaWR0aCx0aGlzLmJveEhlaWdodClcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuZHJhdygpXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5jb250ZXh0LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSk7XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQubXlDYW52YXMge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cdC5kb3Qge1xyXG5cdFx0d2lkdGg6IDE0cHg7XHJcblx0XHRoZWlnaHQ6IDE0cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyOiA0cHggc29saWQgIzM2QUNGRDtcclxuXHRcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblx0LnNlbGVjdEJveCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdFx0Ly8gYmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vc3RhdGljL2xvZ28ucG5nKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHRcdC5kb3QxIHtcclxuXHRcdFx0QGV4dGVuZCAuZG90O1xyXG5cdFx0fVxyXG5cdFx0LmRvdDIge1xyXG5cdFx0XHRAZXh0ZW5kIC5kb3Q7XHJcblx0XHR9XHJcblx0XHQuZG90MyB7XHJcblx0XHRcdEBleHRlbmQgLmRvdDtcclxuXHRcdH1cclxuXHRcdC5kb3Q0IHtcclxuXHRcdFx0QGV4dGVuZCAuZG90O1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 14 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 15 */
/*!***************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/App.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcUw7QUFDckwsZ0JBQWdCLDZMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!****************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/projects/uniTest/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 17);\n/* harmony import */ var _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_dev_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThsQixDQUFnQix5bkJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxkZXZcXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkZXZcXFxcSGJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXGRldlxcXFxIYnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcZGV2XFxcXEhidWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/projects/uniTest/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ })
],[[0,"app-config"]]]);