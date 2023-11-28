"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var a = {};
var b = a.name;
var d;
var func = function func(num) {
  return num + 1;
};
var arr = [];
console.log((0, _includes.default)(arr).call(arr, "a"));