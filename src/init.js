import download from 'download-git-repo'
import ora from 'ora'
import path from 'path'
import { spawn } from 'child_process'
import temps from '../template.json'

export default (template, fileName) => {
    let temp
    // 根据模版名称选择模版
    if (template) {
        for (let i = 0; i < temps.length; i++) {
            if (template === temps[i].name) {
                temp = temps[i]
            }
        }
    } else {
        // 如果模版名选择第一个模版
        temp = temps[0]
    }

    const fnr = fileName || temp.name

    const spinner = ora('download template...')

    spinner.start()
    download(temp.url, fnr, (err) => {
        spinner.stop()
        if (err) {
            console.error(err)
            return
        }
        spawn('npm', ['i'], {
            stdio: 'inherit',
            cwd: path.resolve(process.cwd(), fnr)
        })
    })
}