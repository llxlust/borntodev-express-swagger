const db = require('../config/db.js')
const dotenv = require('dotenv')
dotenv.config()

/**
 * @swagger
 * /getCustomerAll:
 *   get:
 *     description: Returns a list of all customers
 *     responses:
 *       200:
 *         content:
 *           application/json:
 */
exports.getAllCustomer = (req,res) => {
    const sql = process.env.QUERRY_ALL
    db.query(sql,(err,result)=>{
        if(err){
            res.status(500).json({message:'Error occurred while retrieving products.',error: err})
        }
        else{
            res.status(200).json(result)
        }
    })
}

/**
 * @swagger
 * /getCustomerById/:id:
 *   get:
 *     description: Returns a list of customers by id
 *     responses:
 *       200:
 *         content:
 *           application/json:
 */
exports.getCustomerById = (req,res) => {
    const id = Number(req.params.id)
    const sql = process.env.QUERRY_BYID
    db.query(sql,[id],(err,result)=>{
        if(err){
            res.status(500).json({message:'Error occurred while retrieving products.',error: err})
        }
        else{
            res.status(200).json(result)
        }
    })
}

/**
 * @swagger
 * /addCustomer:
 *   get:
 *     description: Add new customer to database
 *     responses:
 *       201:
 *         content:
 *           application/json:
 */
exports.addCustomer = (req,res) => {
    const {name,address,phone} = req.body
    const sql = process.env.QUERRY_ADD
    db.query(sql,[name,address,phone],(err,result)=>{
        if(err){
            res.status(500).json({message:'Error occurred while retrieving products.',error: err})
        }
        else{
            res.status(200).json({message:'Succesful add!'})
        }
    })
}

/**
 * @swagger
 * /deleteCustomer/:id:
 *   get:
 *     description: Delete customer by id
 *     responses:
 *       201:
 *         content:
 *           application/json:
 */
exports.deleteCustomer = (req,res) => {
    const id = Number(req.params.id)
    const sql = process.env.QUERRY_DELETE
    db.query(sql,[id],(err,result)=>{
        if(err){
            res.status(500).json({message:'Error occurred while retrieving products.',error: err})
        }
        else{
            res.status(200).json({message:'Succesful delete!'})
        }
    })
}