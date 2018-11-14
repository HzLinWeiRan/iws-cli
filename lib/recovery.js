"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _default = function _default(force) {
  var templateFile = _path.default.resolve(__dirname, '../template.json');

  var exists = _fs.default.existsSync(templateFile);

  if (!exists || force) {
    _fs.default.writeFileSync(templateFile, '[{"name":"custom","url":"github:HzLinWeiRan/custom-template"}]'); // fs.mkdirSync(configDir)
    // fs.writeFileSync(templateFile, '[{"name":"custom","url":"github:HzLinWeiRan/custom-template"}]')

  }
};

exports.default = _default;