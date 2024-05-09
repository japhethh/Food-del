import userModel from '../models/userModel.js'

// add items to user cart
const addToCart = async (req,res) => {
  try {
      let userData = userModel.findOne({_id:req.body.userId});
      let cardData = await userData.cardData;
      if(!cardData[req.body.itemId]){
        cardData[req.body.itemId] = 1;
      }else{
        cardData[req.body.itemId]  += 1;
      }
      await userModel.findByIdAndUpdate(req.body.userId,{cardData});
      res.json({success:true,message:"Added To Cart"});
  } catch (error) {
    res.json({success:false,message:"Error"});
  }
}

// remove items to user cart 
const removeFromCart = async (req,res) => {

}

// fetch user cart data
const getCart = async (req,res) => {

}

export {addToCart,removeFromCart,getCart} 