import React from 'react';
import styles from '../styles/login.module.css'

const Login = () => {
    return (
        <div className={styles.wrapper}>
              <h1 style={{textAlign:'center'}}>Welcome to Zero please login</h1>
            <form className={styles.form}>

        
             
                   <label style={{width:'70%',marginLeft:'15%'}}>Email</label>
                    <div class="ui input" style={{width:'70%',marginLeft:'15%'}}>   
                      <input type="text" placeholder="Search..."/>
                    </div>
            
                    <br />

                    <label style={{width:'70%',marginLeft:'15%'}}>Password</label>
                    <div class="ui input" style={{width:'70%',marginLeft:'15%'}}>
                      <input type="text" placeholder="Search..."/>
                    </div>
       
            
 
            </form>
        </div>
    );
};

export default Login;