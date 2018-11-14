"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

var _package = _interopRequireDefault(require("../package.json"));

var _init = _interopRequireDefault(require("./init.js"));

var _recovery = _interopRequireDefault(require("./recovery.js"));

var _ls = _interopRequireDefault(require("./ls.js"));

var _add = _interopRequireDefault(require("./add.js"));

var _del = _interopRequireDefault(require("./del.js"));

var version = _package.default.version;

_commander.default.version(version, '-v, --version');

_commander.default.command('recovery').description('recovery template file').option('-f, --force', 'force recovery').action(function (type) {
  (0, _recovery.default)(type.force);
});

_commander.default.command('init').description('initial project from template').option('-t, --template <template>', 'choose template').option('-n, --fileName <fileName>', 'custom file name').action(function (type) {
  (0, _init.default)(type.template, type.fileName);
});

_commander.default.command('ls').description('list all template').action(function () {
  (0, _ls.default)();
});

_commander.default.command('add').description('initial project from template').option('-n, --templateName <templateName>', 'template name').option('-u, --templateUrl <templateUrl>', 'template url').action(function (type) {
  (0, _add.default)(type.templateName, type.templateUrl);
});

_commander.default.command('del').description('initial project from template').option('-n, --templateName <templateName>', 'template name').action(function (type) {
  (0, _del.default)(type.templateName);
}); // const spinner = ora('download template...')
// spinner.start()
// download('github:HzLinWeiRan/custom-template', 'test', (err) => {
//     spinner.stop()
//     console.log(err)
// })


_commander.default.parse(process.argv);