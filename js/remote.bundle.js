(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["remote"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.popup[data-v-70f3611a] {\\n\\tmax-width: unset;\\n\\twidth: unset;\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/popups/login.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/popups/login.vue?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * Not currenty used because Firebase has an OpenSource\n * registration dialog/component.\n * Could be used with alternative save-frameworks.\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n\tdata(){\n\t\treturn {\n\t\t\temail:null,\n\t\t\tpw:null,\n\t\t\terr:null,\n\t\t\tsent:false\n\t\t};\n\t},\n\tmounted(){\n\t\tthis.listen('register-sent', this.onRegister, this);\n\t\tthis.listen('register-error', this.onError, this );\n\t},\n\tbeforeDestroy(){\n\n\t\tthis.removeListener('register-sent', this.onRegister, this);\n\t\tthis.removeListener('register-error', this.onError, this);\n\t},\n\tmethods:{\n\n\t\tregister(){\n\t\t\tif (!this.email){\n\t\t\t\tthis.err = 'Email required'\n\n\t\t\t} else if (!this.pw){\n\t\t\t\tthis.err = 'password required';\n\n\t\t\t} else {\n\t\t\t\tthis.dispatch('try-register', this.email, this.pw );\n\t\t\t\tthis.email = null;\n\t\t\t}\n\t\t},\n\n\t\tonRegister(){\n\t\t\tthis.err = 'Confirmation email sent.\\nCheck any junk-mail folders.';\n\t\t},\n\n\t\tonError(err) {\n\t\t\tconsole.dir(err);\n\t\t\tthis.err = err.message;\n\t\t}\n\n\t}\n\n\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/components/register.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/popups/login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/popups/login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n\tprops:[],\n\tdata(){\n\t\treturn {\n\n\t\t}\n\t},\n\tbeforeDestroy(){\n\t\tif ( this.ui ) this.ui.delete();\n\t\tthis.removeListener( 'login', this.emitClose );\n\t},\n\tmounted(){\n\n\t\tthis.listen('login', this.emitClose, this );\n\n      var uiConfig = {\n\t\tsignInFlow:'popup',\n\t\tcallbacks:{\n\n\t\t\tsignInSuccessWithAuthResult:(authResult, redirectUrl) => {\n\t\t\t\tthis.$emit('close');\n\t\t\t},\n\t\t\tsignInFailure:(error) => {\n\t\t\t\tconsole.log('SIGN IN ERROR: ' + error );\n\t\t\t}\n\n\t\t},\n        signInOptions: [\n          // Leave the lines as is for the providers you want to offer your users.\n         firebase.auth.GoogleAuthProvider.PROVIDER_ID,\n         //firebase.auth.FacebookAuthProvider.PROVIDER_ID,\n    \t //firebase.auth.TwitterAuthProvider.PROVIDER_ID,\n         firebase.auth.EmailAuthProvider.PROVIDER_ID,\n         firebase.auth.PhoneAuthProvider.PROVIDER_ID,\n         window.firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID\n        ],\n        // tosUrl and privacyPolicyUrl accept either url string or a callback\n        // function.\n        // Terms of service url/callback.\n        tosUrl: 'lololol',\n        // Privacy policy url/callback.\n        privacyPolicyUrl:'./privacy.html'\n\n      };\n\n    \t// Initialize the FirebaseUI Widget using Firebase.\n\t\tif (!this.ui ) this.ui = new firebaseui.auth.AuthUI(firebase.auth());\n\n    \t// The start method will wait until the DOM is loaded.\n\t\tthis.ui.start('#firebaseui-auth-container', uiConfig);\n\n\t},\n\tmethods:{\n\t\temitClose(){this.$emit('close')}\n\t}\n\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/popups/login.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/register.vue?vue&type=template&id=2e75081a&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/register.vue?vue&type=template&id=2e75081a& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"popup\" }, [\n    _vm.err ? _c(\"div\", [_vm._v(\" \" + _vm._s(_vm.err))]) : _vm._e(),\n    _vm._v(\" \"),\n    !_vm.sent\n      ? _c(\"div\", [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.email,\n                expression: \"email\"\n              }\n            ],\n            attrs: { type: \"email\", placeholder: \"email@email.com\" },\n            domProps: { value: _vm.email },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.email = $event.target.value\n              }\n            }\n          }),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.pw,\n                expression: \"pw\"\n              }\n            ],\n            attrs: { type: \"password\", placeholder: \"password\" },\n            domProps: { value: _vm.pw },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.pw = $event.target.value\n              }\n            }\n          }),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            attrs: { type: \"submit\", value: \"register\" },\n            on: { click: _vm.register }\n          }),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            {\n              on: {\n                click: function($event) {\n                  return _vm.$emit(\"close\")\n                }\n              }\n            },\n            [_vm._v(\"cancel\")]\n          )\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/components/register.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/popups/login.vue?vue&type=template&id=70f3611a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/popups/login.vue?vue&type=template&id=70f3611a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", {\n    staticClass: \"popup\",\n    attrs: { id: \"firebaseui-auth-container\" }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/popups/login.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/modules/persist/persistRemote.js":
/*!**********************************************!*\
  !*** ./src/modules/persist/persistRemote.js ***!
  \**********************************************/
/*! exports provided: Remote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Remote\", function() { return Remote; });\n/* harmony import */ var remote_remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remote/remote */ \"./src/remote/remote.js\");\n\n\n/**\n * @const {number} MIN_SAVE_WAIT - minimum time in milliseconds for automatic\n * save uploading.\n */\nconst MIN_SAVE_WAIT = 3*60*1000;\n\n/**\n * @const {number} MANUAL_SAVE_WAIT - minimum wait time in milliseconds\n * between manual save uploads.\n */\nconst MANUAL_SAVE_WAIT = 10*1000;\n\nconst Remote = {\n\n\tlastSave:0,\n\n\tlastHallSave:0,\n\n\tlogout(){ return remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].logout()},\n\n\tloggedIn(){return remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].loggedIn},\n\n\tclearAll(){\n\n\t\tif ( !remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].loggedIn ) return null;\n\n\t},\n\n\ttryRegister(email, pw ){\n\n\t\tconsole.log('try register: ' + email );\n\n\t\tif ( !this.remote ) return;\n\n\t\tthis.remote.register(email,pw).then(\n\t\t\t()=>{\n\t\t\t\tthis.dispatch('register-sent');\n\t\t\t},\n\t\t\terr=>{\n\t\t\t\tconsole.log('dispatch reg error');\n\t\t\t\tthis.dispatch('register-error', err );\n\t\t\t}\n\t\t);\n\n\t},\n\n\t/**\n\t *\n\t * @param {*} charid\n\t * @returns {Promise<object>}\n\t */\n\tmanualSave( data, charid ){\n\t\treturn this.saveChar( data, charid, MANUAL_SAVE_WAIT );\n\t},\n\n\t/**\n\t *\n\t * @param {*} hallid\n\t * @returns {Promise<object>}\n\t */\n\tmanualSaveHall( data, hallid){\n\t\treturn this.saveHall( data, hallid, MANUAL_SAVE_WAIT );\n\t},\n\n\t/**\n\t *\n\t * @param {string} charid\n\t * @param {*} minWait\n\t * @returns {Promise<object>}\n\t */\n\tsaveChar( data, charid, minWait=MIN_SAVE_WAIT ) {\n\n\t\tif ( !remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].loggedIn ) return null;\n\n\t\tconsole.log('saving remote: ' + charid );\n\n\t\tvar t = Date.now();\n\t\tif ( t - this.lastSave < minWait ) return null;\n\t\tthis.lastSave = t;\n\n\t\treturn remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].saveChar( data, charid );\n\t},\n\n\t/**\n\t *\n\t * @param {string} hallid\n\t * @param {*} minWait\n\t * @returns {Promise<object>}\n\t */\n\tsaveHall( data, hallid, minWait=MIN_SAVE_WAIT ){\n\n\t\tif ( !remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].loggedIn ) return null;\n\n\t\tvar t = Date.now();\n\t\tif ( t - this.lastHallSave < minWait ) return null;\n\t\tthis.lastHallSave = t;\n\n\t\treturn remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].saveHall( data, hallid );\n\n\t},\n\n\t/**\n\t *\n\t * @param {string} charid\n\t * @returns {Promise<object>}\n\t */\n\tloadChar( charid ){\n\n\t\tif ( !remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].loggedIn ) return null;\n\n\t\treturn remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].loadChar( charid );\n\t},\n\n\t/**\n\t *\n\t * @param {string} hallid\n\t * @returns {Promise<object>}\n\t */\n\tloadHall( hallid ){\n\n\t\tif ( !remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].loggedIn ) return null;\n\n\t\treturn remote_remote__WEBPACK_IMPORTED_MODULE_0__[\"FBRemote\"].loadHall(hallid);\n\t}\n\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/persist/persistRemote.js?");

/***/ }),

/***/ "./src/remote/remote.js":
/*!******************************!*\
  !*** ./src/remote/remote.js ***!
  \******************************/
/*! exports provided: FBRemote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FBRemote\", function() { return FBRemote; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var _util_jsonLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/jsonLoader */ \"./src/util/jsonLoader.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events */ \"./src/events.js\");\n\n\n\n\n\n\nconst StringFormat = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].StringFormat;\n\nwindow.firebase = firebase_app__WEBPACK_IMPORTED_MODULE_0__;\n\n/**\n * @const {string} USER_SAVES - storage path to user saves.\n */\nconst USER_SAVES = 'usersaves';\n\nconst Config = {\n\tapiKey: \"AIzaSyDa2Qj2VQvTzhG0MwzxS-IhQy9LYpCgrRM\",\n\tauthDomain: \"theory-of-magic-49589.firebaseapp.com\",\n\tdatabaseURL: \"https://theory-of-magic-49589.firebaseio.com\",\n\tprojectId: \"theory-of-magic-49589\",\n\tstorageBucket: \"theory-of-magic-49589.appspot.com\",\n\tmessagingSenderId: \"347528879664\",\n\tappId: \"1:347528879664:web:1ba41f1286d54923e317f5\"\n };\n\n\n/**\n * Remote management using Google Firebase.\n */\nconst FBRemote = {\n\n\tget userid() { return this.auth.currentUser.uid; },\n\tget loggedIn(){ return this.auth.currentUser != null; },\n\n\tinit(){\n\n\t\tfirebase_app__WEBPACK_IMPORTED_MODULE_0__[\"initializeApp\"]( Config );\n\t\tthis.auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"auth\"]();\n\n\t\tthis.auth.onAuthStateChanged( user=>{\n\n\t\t\tif ( user ) console.log('AUTH: ' + user.uid );\n\t\t\t_events__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dispatch('login-changed', user!=null);\n\n\t\t});\n\n\t},\n\n\tlogout(){ return this.auth.signOut(); },\n\n\tlogin(uname, pw ) {\n\t},\n\n\tregister( email, pw ) {\n\t},\n\n\t/**\n\t * Delete all chars from current hall.\n\t * @param {*} hid\n\t */\n\tdeleteHall( hid ){\n\n\t\treturn null;\n\n\t},\n\n\t/**\n\t * load player hall file, if any.\n\t * @returns {Promise.<object>}\n\t */\n\tloadHall(){\n\n\t\tvar store = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"storage\"]().ref( this.hallDir( this.userid ) );\n\t\treturn store.getDownloadURL().then( url=>Object(_util_jsonLoader__WEBPACK_IMPORTED_MODULE_3__[\"JSONLoad\"])(url, false), err=>{\n\t\t\tconsole.warn(err);\n\t\t\tthrow err;\n\t\t});\n\t},\n\n\t/**\n\t *\n\t * @param {} charid\n\t * @returns {Promise<object>} json save object, or null.\n\t */\n\tloadChar( charid){\n\n\t\tvar store = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"storage\"]().ref( this.saveDir( this.userid, charid ) );\n\t\tconsole.log('LOADING FIREBASE: ' + charid );\n\t\treturn store.getDownloadURL().then( url=>Object(_util_jsonLoader__WEBPACK_IMPORTED_MODULE_3__[\"JSONLoad\"])(url, false), err=>{\n\t\t\tconsole.warn(err);\n\t\t\treturn null;\n\t\t});\n\n\t},\n\n\t/**\n\t *\n\t * @param {string} charid\n\t * @returns {Promise.<object>}\n\t */\n\tdeleteChar( charid ) {\n\t\treturn firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"storage\"]().ref( this.saveDir(this.userid, charid ) ).delete();\n\t},\n\n\t/**\n\t *\n\t * @param {string} save\n\t * @param {string} charid\n\t * @returns {Promise.<object>}\n\t */\n\tsaveChar( save, charid ){\n\n\t\tvar store = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"storage\"]().ref( this.saveDir( this.userid, charid ) );\n\t\treturn store.putString( save, StringFormat.RAW );\n\n\t},\n\n\t/**\n\t *\n\t * @param {*} save\n\t * @param {*} hid\n\t * @returns {Promise<object>}\n\t */\n\tsaveHall( save, hid ) {\n\t\tvar store = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"storage\"]().ref( this.hallDir( this.userid ) );\n\t\treturn store.putString( save, StringFormat.RAW );\n\t},\n\n\thallDir:( uid ) => { return USER_SAVES + '/' + uid + '/hall.json'; },\n\n\tsaveDir:( uid, pid ) => { return USER_SAVES + '/' + uid + '/' + pid + '.json' }\n\n}\n\nFBRemote.init();\n\n//# sourceURL=webpack://%5Bname%5D/./src/remote/remote.js?");

/***/ }),

/***/ "./src/ui/components/register.vue":
/*!****************************************!*\
  !*** ./src/ui/components/register.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _register_vue_vue_type_template_id_2e75081a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=2e75081a& */ \"./src/ui/components/register.vue?vue&type=template&id=2e75081a&\");\n/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ \"./src/ui/components/register.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _register_vue_vue_type_template_id_2e75081a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _register_vue_vue_type_template_id_2e75081a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/ui/components/register.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/components/register.vue?");

/***/ }),

/***/ "./src/ui/components/register.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/ui/components/register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/ui/components/register.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/components/register.vue?");

/***/ }),

/***/ "./src/ui/components/register.vue?vue&type=template&id=2e75081a&":
/*!***********************************************************************!*\
  !*** ./src/ui/components/register.vue?vue&type=template&id=2e75081a& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_2e75081a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=2e75081a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/register.vue?vue&type=template&id=2e75081a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_2e75081a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_2e75081a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/components/register.vue?");

/***/ }),

/***/ "./src/ui/popups/login.vue":
/*!*********************************!*\
  !*** ./src/ui/popups/login.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_70f3611a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=70f3611a&scoped=true& */ \"./src/ui/popups/login.vue?vue&type=template&id=70f3611a&scoped=true&\");\n/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ \"./src/ui/popups/login.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_70f3611a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css& */ \"./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_70f3611a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_70f3611a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"70f3611a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/ui/popups/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/popups/login.vue?");

/***/ }),

/***/ "./src/ui/popups/login.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/ui/popups/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/ui/popups/login.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/popups/login.vue?");

/***/ }),

/***/ "./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_70f3611a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/popups/login.vue?vue&type=style&index=0&id=70f3611a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_70f3611a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_70f3611a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_70f3611a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_70f3611a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_70f3611a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/popups/login.vue?");

/***/ }),

/***/ "./src/ui/popups/login.vue?vue&type=template&id=70f3611a&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/ui/popups/login.vue?vue&type=template&id=70f3611a&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_70f3611a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=70f3611a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/popups/login.vue?vue&type=template&id=70f3611a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_70f3611a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_70f3611a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/ui/popups/login.vue?");

/***/ })

}]);