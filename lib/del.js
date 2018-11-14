"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _template = _interopRequireDefault(require("../template.json"));

var _default = function _default(tempateName) {
  for (var i = 0; i < _template.default.length; i++) {
    if (tempateName === _template.default[i].name) {
      _template.default.splice(i, 1);

      break;
    }
  }

  var configFile = _path.default.resolve(__dirname, '../template.json');

  _fs.default.writeFileSync(configFile, JSON.stringify(_template.default));

  console.log('del suucess');
};

exports.default = _default;