"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktask"] = self["webpackChunktask"] || []).push([["src_tabs_dummyChart_js"],{

/***/ "./src/tabs/dummyChart.js":
/*!********************************!*\
  !*** ./src/tabs/dummyChart.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nvar DummyChart = function DummyChart() {\n  var expenses = [{\n    category: 'Housing expenses',\n    planned: 1000,\n    actual: 1050\n  }, {\n    category: 'Food',\n    planned: 400,\n    actual: 450\n  }, {\n    category: 'Transportation',\n    planned: 300,\n    actual: 320\n  }, {\n    category: 'Health and medicine',\n    planned: 200,\n    actual: 180\n  }, {\n    category: 'Clothing and footwear',\n    planned: 150,\n    actual: 160\n  }, {\n    category: 'Entertainment',\n    planned: 200,\n    actual: 220\n  }];\n  var data = {\n    labels: expenses.map(function (expense) {\n      return expense.category;\n    }),\n    datasets: [{\n      label: \"Actual Expenses $\",\n      data: expenses.map(function (expense) {\n        return expense.actual;\n      }),\n      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],\n      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],\n      borderWidth: 2\n    }]\n  };\n  return (\n    /*#__PURE__*/\n    //  <div className='some-chart'>Some chart</div>\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"dummy-chart\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Expense Structure\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Pie, {\n      data: data\n    }))\n  );\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DummyChart);\n\n//# sourceURL=webpack://task/./src/tabs/dummyChart.js?");

/***/ })

}]);