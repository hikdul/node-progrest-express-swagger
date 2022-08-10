const  express = require('express')
const PORT = 3000
const app = express()
const {swaggecSpec} = require('./src/routes/swaggerSpec')

// Swagger
const swaggerUi = require('swagger-ui-express') 
const swaggerJsDoc = require('swagger-jsdoc')

//Midlewhere
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api-doc',swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggecSpec)))
//Routes
app.use(require('./src/routes/index'))

// run server
app.listen(PORT)
console.log(`Server run on port ${PORT}`)



//note: quede en el minuto 22:59 en el video: 
// https://www.youtube.com/watch?v=7NfvC-gOcRc&ab_channel=FaztCodehttps://www.youtube.com/watch?v=7NfvC-gOcRc&ab_channel=FaztCode
