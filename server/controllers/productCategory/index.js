const route = require('express').Router()
const productCategoryModel = require('../../models/ProductCategory')
const {userVerify} = require('../../middlewares/verifyToken')


//ADD PRODUCT CATEGORY
route.post('/add/category',userVerify,async(req,res)=>{
    try{
        const{
            name,
            image
        } = req.body

             const existCategory = await productCategoryModel.findOne({name})
             
             if(existCategory){
                res.status(409).json({
                    message:`'${name}' category already exist!`
                })
             }
             else{

                const newCategory = await productCategoryModel.create(req.body)
                res.status(201).json({
                    message:"successfully created"
                })
             }
    }
    catch(err){
        console.log(err)
    }
})

module.exports = route