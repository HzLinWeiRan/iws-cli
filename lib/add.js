"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _template = _interopRequireDefault(require("../template.json"));

var _default = function _default(tempateName, templateUrl) {
  _template.default.push({
    name: tempateName,
    url: templateUrl
  });

  var configFile = _path.default.resolve(__dirname, '../template.json');

  _fs.default.writeFileSync(configFile, JSON.stringify(_template.default));

  console.log('add suucess');
};

exports.default = _default;