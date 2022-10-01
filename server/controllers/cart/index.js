const router = require('express').Router()
const cartModel = require('../../models/Cart')
const {userVerify} = require('../../middlewares/verifyToken')


//create product to cart
router.post('/add',userVerify,async(req,res)=>{
      try{
             const  userId  = req.user.user._id
             const productId = req.body.productId         
             const existUser = await cartModel.findOne({userId})

             if(existUser){
                   const existProduct = existUser.productId
                   const existProductId = await existProduct.indexOf(productId)
                 
                   if(existProductId != -1){
                        res.status(409).json({
                                message: 'this product already added to cart',
                                error: true
                        }) 
                   }else{
                        existProduct.push(productId)
 
                         const updatedCart = await cartModel.findOneAndUpdate({userId},{
                              $set:{
                                   productId: existProduct
                              }
                   })

                   res.status(201).json({
                    message: 'Sucessfully  added to cart',
                    error: false
  
                })
                   
              }
            }
             else{ 
 
                  const newCart = await cartModel.create({...req.body, userId})
                  res.status(201).json({
                  message: 'Sucessfully  added to cart',
                  error: false

          })
             }
      
    }
      catch(err){
         console.log(err)
      }
})

 
//get product from cart
router.get('/get',userVerify,async(req,res)=>{
     try{
           console.log('hello')
           const userId = req.user.user._id
           const cart = await cartModel.find({userId})
           res.status(200).json({
                message:'Showing results',
                length: cart[0].productId.length,
                data: cart,
                error: false
           })
     }
     catch(err){
          console.log(err)
     }
})





module.exports = router