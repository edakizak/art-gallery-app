"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/art-pieces/[slug]",{

/***/ "./pages/art-pieces/[slug].js":
/*!************************************!*\
  !*** ./pages/art-pieces/[slug].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ArtPieceDetails_ArtPieceDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ArtPieceDetails/ArtPieceDetails */ \"./components/ArtPieceDetails/ArtPieceDetails.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ArtDetails(param) {\n    let { data } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug } = router.query;\n    const selectedArtPiece = data.find((piece)=>data.slug === slug);\n    console.log(\"slug\", slug);\n    console.log(\"Selected Art Piece\", selectedArtPiece);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtPieceDetails_ArtPieceDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        data: selectedArtPiece,\n        image: selectedArtPiece.imageSource,\n        name: selectedArtPiece.name,\n        artist: selectedArtPiece.artist,\n        year: selectedArtPiece.year,\n        genre: selectedArtPiece.genre,\n        color: selectedArtPiece.color\n    }, void 0, false, {\n        fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/art-pieces/[slug].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ArtDetails;\nvar _c;\n$RefreshReg$(_c, \"ArtDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnQtcGllY2VzL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRTtBQUN2QztBQUV6QixTQUFTRSxXQUFXLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjs7SUFDakMsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUksSUFBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDN0IsTUFBTUMsbUJBQW1CSixLQUFLSyxJQUFJLENBQUMsQ0FBQ0MsUUFBVU4sS0FBS0UsSUFBSSxLQUFLQTtJQUM1REssUUFBUUMsR0FBRyxDQUFDLFFBQVFOO0lBQ3BCSyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCSjtJQUNsQyxxQkFDRSw4REFBQ1AsbUZBQWVBO1FBQ2RHLE1BQU1JO1FBQ05LLE9BQU9MLGlCQUFpQk0sV0FBVztRQUNuQ0MsTUFBTVAsaUJBQWlCTyxJQUFJO1FBQzNCQyxRQUFRUixpQkFBaUJRLE1BQU07UUFDL0JDLE1BQU1ULGlCQUFpQlMsSUFBSTtRQUMzQkMsT0FBT1YsaUJBQWlCVSxLQUFLO1FBQzdCQyxPQUFPWCxpQkFBaUJXLEtBQUs7Ozs7OztBQUduQztHQWpCd0JoQjs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0LXBpZWNlcy9bc2x1Z10uanM/ZjQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0UGllY2VEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FydFBpZWNlRGV0YWlscy9BcnRQaWVjZURldGFpbHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnREZXRhaWxzKHsgZGF0YSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3Qgc2VsZWN0ZWRBcnRQaWVjZSA9IGRhdGEuZmluZCgocGllY2UpID0+IGRhdGEuc2x1ZyA9PT0gc2x1Zyk7XG4gIGNvbnNvbGUubG9nKFwic2x1Z1wiLCBzbHVnKTtcbiAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBBcnQgUGllY2VcIiwgc2VsZWN0ZWRBcnRQaWVjZSk7XG4gIHJldHVybiAoXG4gICAgPEFydFBpZWNlRGV0YWlsc1xuICAgICAgZGF0YT17c2VsZWN0ZWRBcnRQaWVjZX1cbiAgICAgIGltYWdlPXtzZWxlY3RlZEFydFBpZWNlLmltYWdlU291cmNlfVxuICAgICAgbmFtZT17c2VsZWN0ZWRBcnRQaWVjZS5uYW1lfVxuICAgICAgYXJ0aXN0PXtzZWxlY3RlZEFydFBpZWNlLmFydGlzdH1cbiAgICAgIHllYXI9e3NlbGVjdGVkQXJ0UGllY2UueWVhcn1cbiAgICAgIGdlbnJlPXtzZWxlY3RlZEFydFBpZWNlLmdlbnJlfVxuICAgICAgY29sb3I9e3NlbGVjdGVkQXJ0UGllY2UuY29sb3J9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBcnRQaWVjZURldGFpbHMiLCJ1c2VSb3V0ZXIiLCJBcnREZXRhaWxzIiwiZGF0YSIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsInNlbGVjdGVkQXJ0UGllY2UiLCJmaW5kIiwicGllY2UiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJpbWFnZVNvdXJjZSIsIm5hbWUiLCJhcnRpc3QiLCJ5ZWFyIiwiZ2VucmUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/art-pieces/[slug].js\n"));

/***/ })

});