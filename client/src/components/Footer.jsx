import React from 'react';
import styles from '../styles/footer.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <p style={{
                        fontSize:'2.8rem',
                        color:'white',
                        fontWeight:'bold',
                       
                        }}>Zero <span style={{color:'rgb(231, 171, 60)'}}>.</span></p>
                    <p>Address: 60-49 Road 11378 Dhaka</p>
                    <p>Phone: +65 11.188.888</p>
                    <p>zerocommerce@gmail.com</p>
                     
                     <div>
                       <FacebookOutlinedIcon className={styles.footerIcon}/>
                       <PinterestIcon className={styles.footerIcon}/>
                       <InstagramIcon className={styles.footerIcon}/>
                       <LinkedInIcon className={styles.footerIcon}/>
                     </div>


                </div>

                <div>
                    <p style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:'1.7rem'
                    }}>Information</p>
                   <p>About Us</p>
                   <p>Checkout</p>
                   <p>Contact</p>
                   <p>Service</p>
                </div>

                <div>
                  
                    <p style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:'1.7rem'
                    }}>My account</p>
                    <p>Contact</p>
                    <p>Shopping Cart</p>
                    <p>Shop</p>
                </div>

                <div>
                     <p style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:'1.7rem'
                     }}>Join Our Newsletter Now</p>
                     <p>Get E-mail updates about our latest shop and special offers.</p>
                     <div class="ui action input">
            <input
              type="text"
              placeholder="Enter your email"
              style={{
                  width: '60%',
                  height:'4.5rem'
              }}
            />

            <button
             style={{
                backgroundColor:'#e7ab3c',
                color:'white',
                fontSize:'1.6rem',
                height:'4.5rem',
                width:'35%'
            }}
             class="ui button">Subscribe</button>
          </div>
         </div>       
            </div>

          
             <div style={{
                textAlign:'center',
                padding: '2rem 0', 
                borderTop:'1px solid #2d3436'
             }}>
                <p>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
             </div>
            

           
         

        </div>
    );
};

export default Footer;