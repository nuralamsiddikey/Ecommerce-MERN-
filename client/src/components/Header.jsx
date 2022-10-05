import React from 'react'
import styles from '../styles/header.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {TemporaryDrawer} from '../modal/CartSidebar';



const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <Link to="/" style={{
            fontSize: '3rem',
            fontWeight:'bolder'
          }}>Zero<span style={{color:'#e7ab3c',fontSize:'4rem'}}>.</span></Link>
        </div>

        <div className={styles.center}>

       
           <div class="ui action input" style={{width:'80%',marginLeft:'10%'}}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                 
                  height:'4.5rem'
              }}
            />

            <button
             style={{
                backgroundColor:'#e7ab3c',
                color:'white',
                fontSize:'1.6rem',
                height:'4.5rem'
            }}
             class="ui button">Search</button>
          </div>

     

        </div>


        <div className={styles.right}>
            <div style={{display:'flex',width:'40%',marginLeft:'60%'}}>
               
                <TemporaryDrawer/>
            </div>
        </div>


      </div>
   

    </div>
  )
}

export default Header