import React from 'react'
import styles from '../styles/topHeader.module.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Button from '@mui/material/Button';
import { fontSize } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UserOptions from './UserOptions';



const TopHeader = () => {

const jwt_token = localStorage.getItem('token')


  return (
    <div className={styles.container} >
      <div className={styles.wrapper}>
        <div className={styles.left}>

          <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 1rem 0 0',
                    borderRight:'1px solid gray'
                }}>
            <EmailOutlinedIcon />
             <p style={{
                  margin: '0 0 0 .5rem',
                  fontSize: '1.5rem'
              }}>zerocommerce@gmail.com</p>
          </div>

          <div style={{
                display: 'flex',
                alignItems: 'center'
          }}>
            <CallOutlinedIcon />
            <p style={{
                  margin: '0 0 0 .5rem',
                  fontSize: '1.5rem'
            }}>+8809873848347</p>
          </div>


        </div>

        <div className={styles.right}>

            <div className="social-icon" style={{borderRight:'1px solid gray',display:'flex',flexDirection:'row'}}>
                <FacebookOutlinedIcon sx={{fontSize:'2rem',marginRight:'1.5rem'}}/>
                <InstagramIcon sx={{fontSize:'2rem', marginRight:'1.5rem'}}/>
                <PinterestIcon sx={{fontSize:'2rem',marginRight:'1rem'}} />
            </div>

           {!jwt_token && <Link to="login" className="login" style={{borderRight:'1px solid gray',padding:'0 1rem'}}>
                  <Button 
                      variant="text"
                      style={{
                        fontSize:'1.3rem',
                        padding: '0',
                        color:'gray'
                      }}
                     ><LoginIcon style={{marginRight:'.8rem'}}/>Login
                  </Button>
            </Link>
         }

         { !jwt_token  && <Link to="signup" className="register">
               <Button 
                    variant="text"
                    style={{
                       fontSize:'1.3rem',
                       color:'gray'
                    }}
                    ><AccountCircleOutlinedIcon style={{marginRight:'.8rem'}}/> Signup
               </Button>
            </Link>
         }
           {
              jwt_token  &&  <UserOptions/>
           }

        </div>
      </div>
    </div>
  )
}

export default TopHeader