import path from 'path'
import fs from 'fs'

export default (force) => {
    const templateFile = path.resolve(__dirname, '../template.json')
    const exists = fs.existsSync(templateFile)
    if (!exists || force) {
        fs.writeFileSync(templateFile, '[{"name":"custom","url":"github:HzLinWeiRan/custom-template"}]')
        // fs.mkdirSync(configDir)
        // fs.writeFileSync(templateFile, '[{"name":"custom","url":"github:HzLinWeiRan/custom-template"}]')
    }
}
