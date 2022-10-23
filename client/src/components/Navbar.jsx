import React,{useContext} from 'react'
import style from '../styles/navbar.module.css'

import { Link,NavLink } from 'react-router-dom'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useNavigate } from 'react-router-dom';

import { CartContext } from './../App';
const Navbar = () => {
const navigate = useNavigate(); 
const {products,setFilteredProducts}  = useContext(CartContext)

 const handleProductType = (type)=>{
        const filteredProducts = products.filter(data=>{
               if(data.type === type){
                  return data
               }
        })
        setFilteredProducts(filteredProducts)
        navigate('/productList')
 }
 
  return (
    <div className={style.container}>
        <div className={style.wrapper}>        
             <nav>
                <ul>
                    <li style={{position:'relative'}}>
                       <div >
                       
                       <div style={{display:'flex',flexDirection:'row',color:'white'}} >
                         <ListOutlinedIcon style={{fontSize:'2.7rem',marginRight:'1rem'}}/>
                            ALLCATEGORY 
                         <ExpandMoreOutlinedIcon style={{fontSize:'2.7rem',marginLeft:'1rem'}}/>
                       </div>

                         <div className={style.dropDown} style={{
                            background:'#fff',
                            position:'absolute',
                            marginTop:'1.5rem',
                            zIndex:3,
                           
         
                            }}>
                                <div className={style.subMenu}>
                                    <div>
                                       <h2>Electronics</h2>
                                        <p>Television</p>
                                        <p onClick={()=>handleProductType('laptop')}>Laptop</p>
                                        <p>Phone</p>
                                        <p>Freeze</p>
                                        <p>Watch</p>
                                        <p>Monitor</p>

                                    </div>
                                    <div>
                                    <h2>Fashions</h2>
                                        <p onClick={()=>handleProductType('womenDress')}>Womens dress</p>
                                        <p>Ladies Bag</p>
                                        <p>Phone</p>
                                        <p>Freeze</p>
                                        <p>Watch</p>
                                        <p>Monitor</p>
                                    </div>
                                    <div>
                                    <h2>Home & Living</h2>
                                        <p>Television</p>
                                        <p>Laptop</p>
                                        <p>Phone</p>
                                        <p>Freeze</p>
                                        <p>Watch</p>
                                        <p>Monitor</p>
                                    </div>
                                    <div>
                                    <h2>Bikes & Cars</h2>
                                        <p>Television</p>
                                        <p>Laptop</p>
                                        <p>Phone</p>
                                        <p>Freeze</p>
                                        <p>Watch</p>
                                        <p>Monitor</p>
                                    </div>
                                </div>
                                       
                         </div>
                       </div>
                    </li>
                    <li>
                       <Link to="#">HOME</Link>
                    </li>
                    <li>
                       <Link to="#">SHOP</Link>
                    </li>
                    <li>
                       <Link to="#">BLOG</Link>
                    </li>
                    <li>
                       <Link to="#">CONTACT</Link>
                    </li>
                    <li>
                       <Link to="#">PAGES</Link>
                    </li>
                   
                </ul>
             </nav>
        </div>
    </div>
  )
}

export default Navbar