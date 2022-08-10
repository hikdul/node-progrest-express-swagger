
const path = require('path')

const swaggecSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'prueba para el proyecto',
            version: '0.0.1'  
        },
        servers:[{
            url: 'http://localhost:3000'
        }],
    },
    apis:[`${path.join(__dirname,'./src/routes/*js')}`]
}

module.exports = {swaggecSpec}