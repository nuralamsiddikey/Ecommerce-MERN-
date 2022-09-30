const router = require('express').Router()
const cartModel = require('../../models/Cart')
const {userVerify} = require('../../middlewares/verifyToken')


router.post('/add',userVerify,async(req,res)=>{
      try{
             const  userId  = req.user.user._id
             const productId = req.body.productId         
             const existUser = await cartModel.findOne({userId})

             if(existUser){
                   const existProduct = existUser.productId
                   const existProductId = await existProduct.indexOf(productId)
                   
                   if(existProductId == 0){
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

module.exports = router