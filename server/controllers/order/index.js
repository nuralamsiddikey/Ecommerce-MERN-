const router = require('express').Router()
const orderModel = require('../../models/Order')
const{userVerify} = require('../../middlewares/verifyToken')


//create order
router.put('/create',userVerify,async(req,res)=>{
    try{
       
         userId = req.user.user._id
         userOrderExist = await orderModel.findOne({userId})
         
        if(userOrderExist){
           
              const product = userOrderExist.product
              const address = userOrderExist.address
              const newProduct = req.body.product[0]
              const newProductAddress = req.body.address[0]
        
          
               product.push(newProduct)
               address.push(newProductAddress)

              const updated = await orderModel.findOneAndUpdate({userId},{
                   $set:{
                         product,
                         address
                   }
              },{new:true})
             
              res.status(201).json({
                  message:'Successfully ordered item',
                  error: false
              })
        }
         else{
       
            const newOrder = await orderModel.create({...req.body, userId})
            res.status(201).json({
                   message: 'Successfully ordered item',
                   error: false
            })
         }
    }
    catch(err){
         console.log(err)
    }
})
      
 
//find order
router.get('/get',userVerify,async(req,res)=>{
      const userId = req.user.user._id
      const order = await orderModel.find({userId})
    
   
     res.status(200).json({
          message:'Showing results',
          length: order[0].product.length,
          data: order,
          error: false
     })
})
 
 

module.exports = router