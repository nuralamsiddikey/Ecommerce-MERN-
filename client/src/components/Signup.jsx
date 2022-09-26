import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/signup.module.css'
import Alert from '@mui/material/Alert';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [alerta, setAlerta] = useState(false)

const handleInput = ()=>{
       if(name === ''|| email ==='' || password === ''){
        setAlerta(true)        
       }else{

          const obj ={
              fullName: name,
              email,
              password
          }

         fetch('http://localhost:4001/api/user/registration',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
         })
         .then(res=>res.json())
         .then(data=>{

                if(data.error === true){
                    toast.error("This email already exist!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }else{
                    toast.success("Successfully registered!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }

         })


       }
}
 

    return (
        <div className={styles.body}>
   
        <h1 style={{textAlign:'center',fontSize:'3rem'}}>Welcome to Zero please Register!</h1>
            <div className={styles.wrapper}>
            <form className={styles.form}>
               {alerta &&  <Alert severity="warning" style={{fontSize:'1.5rem'}}>Required all fields!</Alert>}
          
    
           <label >Full Name</label>
              <div class="ui input" >   
                <input 
                    type="text"
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}
                    onFocus={()=>setAlerta(false)}
                />
              </div>
       <br />

             <label >Email</label>
              <div class="ui input" >   
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    onFocus={()=>setAlerta(false)}
                 />
              </div>
      <br />

              <label >Password</label>
              <div class="ui input" >
                <input 
                    type="password"
                    placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    onFocus={()=>setAlerta(false)}
                 />
              </div> 
               
           
            </form>
            <button 
                  class="positive big ui button"
                  style={{marginTop:'3rem',width:'100%'}}
                  onClick={handleInput}
                  >
                 Register
             </button>  
            </div>
  </div>
    );
};

export default Signup;