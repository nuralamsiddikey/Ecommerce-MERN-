import React from 'react';
import styles from '../styles/login.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
 const [email, setEmail]       = useState('')
 const [password, setPassword] = useState('')
const  [alert,setAlert]        = useState(false)

const handleInput = ()=>{

   if(email === '' || password === ''){
        setAlert(true)
   }else{

    const obj ={
       email,
       password
    }

       fetch('http://localhost:4001/api/user/login',{
         method:'POST',
         headers:{
           'Content-type':'application/json'
         },
         body:JSON.stringify(obj)
       })
       .then(res=>res.json())
       .then(data=>{
            if(data.error === false){

                localStorage.setItem('token',data.token)
                toast.success("Login success!", {
                   position: toast.POSITION.TOP_CENTER
              });
              
            }else{
              toast.error("Login failed!", {
                position: toast.POSITION.TOP_CENTER
              });
            }
       })
   }
}


    return (
        <div className={styles.body}>
          <h1 style={{textAlign:'center',fontSize:'3rem'}}>Welcome to Zero<span style={{color:'rgb(231, 171, 60)',fontSize:'4rem'}}>.</span> please login</h1>
        <div className={styles.wrapper}>

          <form className={styles.form}> 
           {alert && <Alert severity="warning" style={{fontSize:'1.5rem'}}>Required all fields — check it out!</Alert>
}

              <label >Email</label>
                <div class="ui input" >   
                  <input
                      type="text" 
                      placeholder="Email"
                      onChange={(e)=>setEmail(e.target.value)}
                      onFocus={()=>setAlert(false)}
                  />
                </div>

<br />

        <label >Password</label>
        <div class="ui input" >
            <input 
            type="text" 
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            onFocus={()=>setAlert(false)}
            />
        </div> 
        <p style={{marginTop:'1rem',cursor:'pointer'}}>Forgot password?</p>

      <Link to="/signup" style={{marginTop:'2rem',marginLeft:'auto'}}>Don't have account?</Link>     
      </form>

            <button
                class="positive big ui button" 
                style={{marginTop:'3rem'}}
                onClick={handleInput}
                >
            Login
            </button> 

               </div>
        </div>
    );
};

export default Login;