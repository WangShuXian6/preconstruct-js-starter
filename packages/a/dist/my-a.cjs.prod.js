'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var func_dist_myAFunc = require('../func/dist/my-a-func.cjs.prod.js');

func_dist_myAFunc["default"]();
function index () {
  console.log("a");
}

exports.func = func_dist_myAFunc["default"];
exports["default"] = index;
