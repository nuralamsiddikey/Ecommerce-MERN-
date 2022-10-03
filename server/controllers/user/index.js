const route  = require('express').Router()
const userModel = require('../../models/User')
const CryptoJS = require('crypto-js')
var jwt = require('jsonwebtoken')

//REGISTRATION
route.post('/registration',async(req,res)=>{
    try{

         let{
            fullName,
            email,
            password
         } = req.body

         const existUser = await userModel.findOne({email})
          
           if(existUser){
                res.status(409).json({
                    message: 'user already exist, try width another email!',
                    error: true
                })
           }
           else{

           req.body.password = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();
           const user = await userModel.create(req.body)
           user.password = ''

           res.status(201).json({
           message:"successfullly registered new user!",
           data: user,
           error: false

           })
              
           }

    }
    catch(err){
        console.log(err)
    }
})


//LOGIN
route.post('/login',async(req,res)=>{
    try{
          const{
            email,
            password
          } = req.body

          if(email){
                const existUser = await userModel.findOne({email})
               
                if(existUser){
                    const originalPassword = CryptoJS.AES.decrypt(existUser.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8)

                    if(originalPassword === password){
                        existUser.password = ''
                            const token =   jwt.sign({
                             user : existUser
                             }, process.env.JWT_SEC)

                             res.status(200).json({
                                message:'Login success!',
                                token:token,
                                error: false
                             })

                    }else{
                        res.status(400).json({
                            message:"invalid user!",
                            error: true
                        })
                    }
                }
                else{
                    res.status(400).json({
                        message:"invalid user!",
                        error: true
                    })
                }
          }
          else{
            res.status(400).json({
                message:"invalid user!",
                error: true
            })
          }


    }
    catch(err){
        console.log(err)
    }
})








module.exports = route