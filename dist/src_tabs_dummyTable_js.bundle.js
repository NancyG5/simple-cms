"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktask"] = self["webpackChunktask"] || []).push([["src_tabs_dummyTable_js"],{

/***/ "./src/tabs/dummyTable.js":
/*!********************************!*\
  !*** ./src/tabs/dummyTable.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar DummyTable = function DummyTable() {\n  var expenses = [{\n    category: 'Housing expenses',\n    planned: 1000,\n    actual: 1050\n  }, {\n    category: 'Food',\n    planned: 400,\n    actual: 450\n  }, {\n    category: 'Transportation',\n    planned: 300,\n    actual: 320\n  }, {\n    category: 'Health and medicine',\n    planned: 200,\n    actual: 180\n  }, {\n    category: 'Clothing and footwear',\n    planned: 150,\n    actual: 160\n  }, {\n    category: 'Entertainment',\n    planned: 200,\n    actual: 220\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dummy-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Expense Table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"table\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Planned Expenses ($)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Actual Expenses ($)\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, expenses.map(function (expense, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, expense.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, expense.planned), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, expense.actual));\n  }))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DummyTable);\n\n//# sourceURL=webpack://task/./src/tabs/dummyTable.js?");

/***/ })

}]);