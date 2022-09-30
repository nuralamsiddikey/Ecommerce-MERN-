
//IMPORT EXTERNAL PACKAGES
const express  = require('express')
const app      = express()
const mongoose = require('mongoose')
const dotenv   = require('dotenv')
var bodyParser = require('body-parser')
const cors     = require('cors')

//IMPORT INTERNAL PACKAGES
const path   = require('path')


//USE INTERNAL PACKAGES
app.use(express.static(path.join(__dirname, 'images')))



//USE EXTERNAL PACKAGES
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


//config
dotenv.config()




//IMPORTS CONTROLLERS
const userController            = require('./controllers/user/index')
const productCategoryController = require('./controllers/productCategory/index.js')
const productController         = require('./controllers/product/index')
const orderController           = require('./controllers/order/index')
const cartController            = require('./controllers/cart/index')

//USE CONTROLLERS
app.use('/api/user',userController)
app.use('/api/productCategory',productCategoryController)
app.use('/api/product', productController)
app.use('/api/order',orderController)
app.use('/api/cart',cartController)

//database connection
mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log('DBConnection successfull!'))
.catch((err)=>console.log('DBConnection failed!',err))


//listen server
const port   = 4001
app.listen(port,()=>{
    console.log(`server is listeningg at port ${port}`)
})