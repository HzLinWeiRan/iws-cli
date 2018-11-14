import fs from 'fs'
import path from 'path'
import temps from '../template.json'

export default (tempateName, templateUrl) => {
    temps.push({
        name: tempateName,
        url: templateUrl
    })
    const configFile = path.resolve(__dirname, '../template.json')
    fs.writeFileSync(configFile, JSON.stringify(temps))
    console.log('add suucess')
}