const router = require('express').Router()

const cartModel = require('../../models/Cart')
const {userVerify} = require('../../middlewares/verifyToken')
const fetch = require('node-fetch')


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
          
           const userId = req.user.user._id
           const cart = await cartModel.find({userId})
           const productId = cart[0].productId
           let cartProduct = []
     
           for(let i=0; i<productId.length; i++){
                 fetch(`http://localhost:4001/api/product/singleProduct/${productId[i]}`)
                 .then(res=>res.json())
                 .then(result=>{
                      cartProduct.push(result.data)
                      if(i== productId.length-1){
                          res.json({
                                   message: 'Showing results',
                                   length: productId.length,
                                   data: cartProduct,
                                   error: false
                          })
                      }
                 })
                
           }
          
 
     }
     catch(err){
          console.log(err)
     }
})

 
// delete cart product by id
router.put('/delete/:id',userVerify,async(req,res)=>{
     try{ 
             const userId = req.user.user._id
             const _id = req.params.id
           
             const products = await cartModel.findOne({userId})
             let   productId = products.productId
             const newProductId = productId.filter(id=> id != _id)
        
             const newProducts = await cartModel.findOneAndUpdate({userId},{
                  $set:{
                       productId: newProductId
                  }
             })


             res.status(200).json({
                  message:'Successfully remove the item',
                  error: false
             })

     } 
     catch(err){
          console.log(err)
     }
})



module.exports = router