import express from "express";
import {addToCart,removeFromCart,getCart} from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js'

const cartRouter = express.Router();
cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",removeFromCart)
cartRouter.post("/list",getCart)

export default cartRouter


