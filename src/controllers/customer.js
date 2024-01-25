const db = require('../config/db.js')
const dotenv = require('dotenv')
const ErrorResponse = require('../utils/errorResponse.js')
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
exports.getAllCustomer = (req,res,next) => {
    const sql = process.env.QUERRY_ALL + 1
    db.query(sql,(err,result)=>{
        if(err){
            next(new ErrorResponse(err.sqlState))
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
exports.getCustomerById = (req,res,next) => {
    const id = Number(req.params.id)
    const sql = process.env.QUERRY_BYID
    db.query(sql,[id],(err,result)=>{
        if(err){
            next(new ErrorResponse(err.sqlState))
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
exports.addCustomer = (req,res,next) => {
    const {name,address,phone} = req.body
    const sql = process.env.QUERRY_ADD
    db.query(sql,[name,address,phone],(err,result)=>{
        if(err){
            next(new ErrorResponse(err.sqlState))
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
exports.deleteCustomer = (req,res,next) => {
    const id = Number(req.params.id)
    const sql = process.env.QUERRY_DELETE
    db.query(sql,[id],(err,result)=>{
        if(err){
            next(new ErrorResponse(err.sqlState))
        }
        else{
            res.status(200).json({message:'Succesful delete!'})
        }
    })
}