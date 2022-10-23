const route  = require('express').Router()
const {adminVerify,userVerify}     = require('../../middlewares/verifyToken')
const upload = require('../../middlewares/multer')
const productModel = require('../../models/Product')

//PRODUCT UPLOAD
route.post('/upload',adminVerify,upload.single('image'),async(req,res)=>{
    try{
                
           const image = req.file.filename
         
           
          const newProduct = await productModel.create({...req.body, image})
 
           res.status(201).json({
                message:"successfully upload !",
                data: newProduct,
                error: false
           })
    } 
    catch(err){
        console.log(err)
    }
})


//PRODUCT UPDATE
route.put('/update/:id',adminVerify,upload.single('image'),async(req,res)=>{
    try{
      
         const updatedProduct = await productModel.findOneAndUpdate(
            {
                _id: req.params.id
            },  
            {
                $set: req.body
            },
            {new: true}
         )

         res.status(200).json({
            message: "successfully updated!",
            data: updatedProduct,
            error: false
         })

    }
    catch(err){
        console.log(err)
    }
})


//PRODUCT DELETE
route.delete('/DELETE/:id',adminVerify,async(req,res)=>{
    try{
      
          const deletedProduct = await productModel.findByIdAndDelete(req.params.id)

         res.status(200).json({
            message: "successfully deleted!",
            data: deletedProduct,
            error: false
         })

    }
    catch(err){
        console.log(err)
    }
})


//FIND PRODUCT BY ID
route.get('/singleProduct/:id',async(req,res)=>{
    try{
           const product = await productModel.findById(req.params.id)
            
            res.status(200).json({
                message:"Showing results!",
                data: product,
                error: false
            })
    }
    catch(err){
        console.log(err)
    }
})


//FINAL ALL PRODUCTS
 route.get('/allProducts',async(req,res)=>{
    try{
         
          const products = await productModel.find({})

          res.status(200).json({
                message: 'showing results',
                length: products.length,
                data: products,
                error: false
          })

    }
    catch(err){
        console.log(err)
    }
 })





module.exports  = route