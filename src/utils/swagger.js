const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerSpec = swaggerJSDoc({
    swaggerDefinition:{
        openapi: '3.0.0',
        info:{
            title: 'Born to dev Homework',
            version: '1.0.0',
            description:'API ตัวอย่างสำหรับ Born to dev Homework'
        },
        servers:[
            {
                url:'http://localhost:3100/',
                description:'developement server'
            },
        ],
    },
    apis:['../controllers/customer.js']
})

module.exports = {swaggerSpec , swaggerUi}