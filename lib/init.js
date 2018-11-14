"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _ora = _interopRequireDefault(require("ora"));

var _path = _interopRequireDefault(require("path"));

var _child_process = require("child_process");

var _template = _interopRequireDefault(require("../template.json"));

var _default = function _default(template, fileName) {
  var temp; // 根据模版名称选择模版

  if (template) {
    for (var i = 0; i < _template.default.length; i++) {
      if (template === _template.default[i].name) {
        temp = _template.default[i];
      }
    }
  } else {
    // 如果模版名选择第一个模版
    temp = _template.default[0];
  }

  var fnr = fileName || temp.name;
  var spinner = (0, _ora.default)('download template...');
  spinner.start();
  (0, _downloadGitRepo.default)(temp.url, fnr, function (err) {
    spinner.stop();

    if (err) {
      console.error(err);
      return;
    }

    (0, _child_process.spawn)('npm', ['i'], {
      stdio: 'inherit',
      cwd: _path.default.resolve(process.cwd(), fnr)
    });
  });
};

exports.default = _default;