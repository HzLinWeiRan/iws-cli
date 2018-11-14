import fs from 'fs'
import path from 'path'
import temps from '../template.json'

export default (tempateName) => {
    for (let i = 0; i < temps.length; i++) {
        if (tempateName === temps[i].name) {
            temps.splice(i, 1)
            break
        }
    }
    const configFile = path.resolve(__dirname, '../template.json')
    fs.writeFileSync(configFile, JSON.stringify(temps))
    console.log('del suucess')
}