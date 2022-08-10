
const {Pool} = require('pg')
const config = require('./constants')
 
const pool = new Pool(config)


module.exports={context: pool}