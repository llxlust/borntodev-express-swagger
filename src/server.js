const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const {db} = require('./config/db')
const customerRouter = require('./routes/customer.js')
const {swaggerSpec,swaggerUi}=require('./utils/swagger.js')
const errorHandler = require('./middlewares/logging.js')

dotenv.config()


if(!process.env.SERVER_PORT){
    process.exit(1)
}

const app = express()

const port = parseInt(process.env.SERVER_PORT)

app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerSpec,{explorer:true,}))
app.use('/customer',customerRouter)
app.use(errorHandler)
app.listen(port,()=>console.log(`Server is running on port ${port}`))