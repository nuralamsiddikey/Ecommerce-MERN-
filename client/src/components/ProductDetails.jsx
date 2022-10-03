import React ,{useEffect}from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/productDetails.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';

const queryString = require('query-string');


const ProductDetails = () => {

    const [product, setProduct]   = useState([])
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()
    const {search} = useLocation()
    const {id} = queryString.parse(search)
    
   useEffect(()=>{
     fetch(`http://localhost:4001/api/product/singleProduct/${id}`)
        .then(res=>res.json())
        .then(data=>{
                setProduct(data.data)
        })
     window.scrollTo(0, 0)
   },[])
 

 const handleAddToCart = ()=>{

          const token = localStorage.getItem('token')
          const obj   = {productId:`${id}`}

          fetch('http://localhost:4001/api/cart/add',{
              method:'POST',
              headers:{
                 'Content-type':'application/json',
                 'token': `${token}`
              },
              body:JSON.stringify(obj)
          })
         
          .then(response=>{
           
                 if(response.status === 403){
                        navigate('/login')
                 }
                 else if(response.status === 409){
                    toast.info('This product already exist to cart!', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                     
                 }
                 else if (response.status === 201){
                      
                        toast.success('Successfully added to cart!', {
                           position: "top-right",
                           autoClose: 5000,
                           hideProgressBar: false,
                           closeOnClick: true,
                           pauseOnHover: true,
                           draggable: true,
                           progress: undefined,
                           }); 
                          
                           window.location.reload('http://localhost:300')

                    
                 }
              
          })
       
          
 }




    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                     <div className={styles.left}>
                             <img src={`http://localhost:4001/${product.image}`} alt="" />
                     </div>

                     <div className={styles.center}>
                            <h1>{product.desc}</h1>
                            <h3>{product.title}</h3>
                            <p>Brand: {product.brand}</p>
                            <p>Price: {product.price} ৳</p>

                            <div>
                                  <div style={{marginBottom:'1rem'}}><p>Quantity</p></div>

                                  <Button 
                                        variant="outlined"
                                         onClick={()=>{
                                             if(quantity===1){
                                              
                                             }else{
                                                setQuantity(quantity-1)
                                             }
                                         }}
                                        >
                                     <RemoveIcon/>
                                  </Button>

                                  <span style={{padding:'0rem .5rem'}}>{quantity}</span>

                                  <Button 
                                        variant="outlined"
                                        onClick={()=>setQuantity(quantity+1)}
                                        >
                                     <AddIcon/>
                                  </Button>
                                                          
                            </div>

                            <div className={styles.shop_button}>
                               <div> <p className={styles.cart} onClick={handleAddToCart}>Add to Cart</p></div>
                               <div><p className={styles.buy}>Buy</p></div>                             
                            </div>


                     </div>

                     <div className={styles.right}>
                           <h3>Model: {product.title}</h3>
                           <p>Brand: {product.brand}</p>
                           <div style={{borderBottom:'1px solid gray',textAlign:'center'}}>
                                <p>{product.price} ৳</p>
                                <p><span style={{marginRight:'1rem'}}>x</span>{quantity}</p>
                           </div>
                           <p>Total price:<span style={{marginLeft:'1rem'}}>{product.price*quantity} ৳</span></p>
                     </div>
            </div> 
         
        </div>
    );
};

export default ProductDetails;