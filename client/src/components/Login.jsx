import React from 'react';
import styles from '../styles/login.module.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.wrapper}>
              <h1 style={{textAlign:'center',fontSize:'3rem'}}>Welcome to Zero please login</h1>
            <form className={styles.form}>

             
                   <label >Email</label>
                    <div class="ui input" >   
                      <input type="text" placeholder="Search..."/>
                    </div>
            
                    <br />

                    <label >Password</label>
                    <div class="ui input" >
                      <input type="text" placeholder="Search..."/>
                    </div> 

                    <p style={{marginTop:'1rem',cursor:'pointer'}}>Forgot password?</p>

                    <button class="positive big ui button" style={{marginTop:'3rem'}}>
                          Login
                        </button>     

                  <Link to="/signup" style={{marginTop:'2rem',marginLeft:'auto'}}>Don't have account?</Link>     
                  </form>

        </div>
    );
};

export default Login;