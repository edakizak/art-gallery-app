"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _components_Layout_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout/Layout.js */ \"./components/Layout/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://example-apis.vercel.app/api/art\", fetcher);\n    console.log(\"data\", data);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 25\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Error!\"\n    }, void 0, false, {\n        fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_2__.SWRConfig, {\n                value: {\n                    fetcher\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    data: data\n                }, void 0, false, {\n                    fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/_app.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"3etLDUffADz62tD7g9gJKxYxEy4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0o7QUFDUDtBQUMwQjtBQUVuRCxNQUFNSSxVQUFVO3FDQUFJQztRQUFBQTs7V0FBU0MsU0FBU0QsTUFBTUUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7QUFBRTtBQUVyRCxTQUFTQyxJQUFJLEtBQXdCO1FBQXhCLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQXhCOztJQUMxQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR2IsK0NBQU1BLENBQ3ZDLDJDQUNBRTtJQUVGWSxRQUFRQyxHQUFHLENBQUMsUUFBUUo7SUFDcEIsSUFBSUUsV0FBVyxxQkFBTyw4REFBQ0c7a0JBQUc7Ozs7OztJQUMxQixJQUFJSixPQUFPLHFCQUFPLDhEQUFDSTtrQkFBRzs7Ozs7O0lBRXRCLHFCQUNFOzswQkFDRSw4REFBQ2xCLCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNHLG9FQUFNQTs7Ozs7MEJBQ1AsOERBQUNGLDBDQUFTQTtnQkFBQ2tCLE9BQU87b0JBQUVmO2dCQUFROzBCQUMxQiw0RUFBQ087b0JBQVcsR0FBR0MsU0FBUztvQkFBRUMsTUFBTUE7Ozs7Ozs7Ozs7Ozs7QUFJeEM7R0FsQndCSDs7UUFDYVIsMkNBQU1BOzs7S0FEbkJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qc1wiO1xuXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRcIixcbiAgICBmZXRjaGVyXG4gICk7XG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxoMT5FcnJvciE8L2gxPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxMYXlvdXQgLz5cbiAgICAgIDxTV1JDb25maWcgdmFsdWU9e3sgZmV0Y2hlciB9fT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBkYXRhPXtkYXRhfSAvPlxuICAgICAgPC9TV1JDb25maWc+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJTV1JDb25maWciLCJ1c2VTV1IiLCJMYXlvdXQiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiaDEiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});