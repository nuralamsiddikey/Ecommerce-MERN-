import React from 'react'
import style from '../styles/navbar.module.css'


import { Link,NavLink } from 'react-router-dom'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.wrapper}>
             <nav>
                <ul>
                    <li style={{position:'relative'}}>
                       <NavLink to="#" >
                       
                       <div style={{display:'flex',flexDirection:'row'}}>
                         <ListOutlinedIcon style={{fontSize:'2.7rem',marginRight:'1rem'}}/>
                            ALLCATEGORY 
                         <ExpandMoreOutlinedIcon style={{fontSize:'2.7rem',marginLeft:'1rem'}}/>
                       </div>

                         <div className={style.dropDown} style={{
                            background:'#fff',
                            position:'absolute',
                            marginTop:'1.5rem',
                            width:'20rem',
                            zIndex:3,
                           
                           
                            }}>
                                
                           <div className={style.subItem}>
                               <NavLink className={style.menu} to="#" style={{color:'black'}}>FASHIONS</NavLink>
                               <KeyboardArrowRightIcon style={{color:'black'}}/>
                           </div>
                           <div className={style.subItem}>
                               <NavLink className={style.menu} to="#" style={{color:'black'}}>KIDS TOYS</NavLink>
                               <KeyboardArrowRightIcon style={{color:'black'}}/>
                           </div>

                           <div className={style.subItem}>
                               <NavLink className={style.menu} to="#" style={{color:'black'}}>CLOTHES</NavLink>
                               <KeyboardArrowRightIcon style={{color:'black'}}/>
                           </div>
                           <div className={`${style.subItem} ${style.electronic}`}>
                               <NavLink className={style.menu} to="#" style={{color:'black'}}>ELECTRONICS
                               <div className={style.sub_menu}>
                                 <NavLink to="#" style={{color:'black'}}>Mobile</NavLink>
                                 <NavLink to={`/productList/?type=laptop`} style={{color:'black'}}>Laptop</NavLink>
                                 <NavLink to="#" style={{color:'black'}}>Television</NavLink>
                                 <NavLink to="#" style={{color:'black'}}>Watch</NavLink>
                                  
                                 </div>
                               
                               
                               </NavLink>
                               <KeyboardArrowRightIcon style={{color:'black'}}/>
                                
                           </div>
                           <div className={style.subItem}>
                               <NavLink className={style.menu} to="#" style={{color:'black'}}>ELECTRONICS AND ACCESSORIES</NavLink>
                               <KeyboardArrowRightIcon style={{color:'black'}}/>
                           </div>
                           <div className={style.subItem}>
                               <NavLink className={style.menu} to="#" style={{color:'black'}}>BOOK'S GALLERY</NavLink>
                               <KeyboardArrowRightIcon style={{color:'black'}}/>
                           </div>
                           <div className={style.subItem}>
                               <NavLink className={style.menu} to="#" style={{color:'black'}}>DAILY NEEDS</NavLink>
                               <KeyboardArrowRightIcon style={{color:'black'}}/>
                           </div>
                           <div className={style.subItem}>
                               <NavLink className={style.menu} to="#" style={{color:'black'}}>BIKE'S AND CARS</NavLink>
                               <KeyboardArrowRightIcon style={{color:'black'}}/>
                           </div>
                         
                       
                         </div>
                       </NavLink>
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