import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/signup.module.css'

const Signup = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    
const handleInput = ()=>{
       if(name === ''|| email ==='' || password === ''){
          alert('required all fields')
       }
}


    return (
        <div className={styles.wrapper}>
        <h1 style={{textAlign:'center',fontSize:'3rem'}}>Welcome to Zero please Register!</h1>
           <form className={styles.form}>


           <label >Full Name</label>
              <div class="ui input" >   
                <input 
                    type="text"
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}
                />
              </div>
       <br />

             <label >Email</label>
              <div class="ui input" >   
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                 />
              </div>
      <br />

              <label >Password</label>
              <div class="ui input" >
                <input 
                    type="password"
                    placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)}
                 />
              </div> 


              <button 
                  class="positive big ui button"
                  style={{marginTop:'3rem'}}
                  onClick={handleInput}
                  >
                 Register
             </button>     

            </form>

  </div>
    );
};

export default Signup;