const express = require('express')
const { getAllCustomer, getCustomerById, addCustomer, deleteCustomer } = require('../controllers/customer')

const router = express.Router()
router.get("/getCustomerAll",getAllCustomer)
router.get("/getCustomerById/:id",getCustomerById)
router.post("/addCustomer",addCustomer)
router.delete("/deleteCustomer/:id",deleteCustomer)

module.exports = router