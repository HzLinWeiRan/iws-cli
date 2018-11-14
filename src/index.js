import program from 'commander'
import pkg from '../package.json'
import init from './init.js'
import recovery from './recovery.js'
import ls from './ls.js'
import add from './add.js'
import del from './del.js'

const { version } = pkg

program.version(version, '-v, --version')


program.command('recovery')
    .description('recovery template file')
    .option('-f, --force', 'force recovery')
    .action((type) => {
        recovery(type.force)
    })

program.command('init')
    .description('initial project from template')
    .option('-t, --template <template>', 'choose template')
    .option('-n, --fileName <fileName>', 'custom file name')
    .action((type) => {
        init(type.template, type.fileName)
    })

program.command('ls')
    .description('list all template')
    .action(() => {
        ls()
    })

program.command('add')
    .description('initial project from template')
    .option('-n, --templateName <templateName>', 'template name')
    .option('-u, --templateUrl <templateUrl>', 'template url')
    .action((type) => {
        add(type.templateName, type.templateUrl)
    })

program.command('del')
    .description('initial project from template')
    .option('-n, --templateName <templateName>', 'template name')
    .action((type) => {
        del(type.templateName)
    })

// const spinner = ora('download template...')

// spinner.start()
// download('github:HzLinWeiRan/custom-template', 'test', (err) => {
//     spinner.stop()
//     console.log(err)
// })

program.parse(process.argv)