import React, { useState } from 'react';
import './Signup.css';
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from '../../components/PasswordInput/PasswordInput';


function Signup(){

    const [username, setUsername] = useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [confirm,setConfirm]=useState('');
   
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleEmail =(e)=>{
        setEmail(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform login logic here
      console.log(`Username: ${username}, Password: ${password}`);
      // Reset the form
      setUsername('');
      setPassword('');
    };
    
    const handleConfirm=(e)=>{
        setConfirm(e.target.value)
    }



    return <div>
        <Navbar />
        <div className='signup-page'>
        
        <h2 className='signup-title'>Signup</h2>
        <div className='form'>

       
            <div className='signup-form'>
            <label className='label'>Username</label>
            <br></br>
            <input type="text" placeholder='Enter Username' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} className='form-input-signup' value={username} onChange={handleUsernameChange} />
            </div>
            <div>
            <label>Email</label>
            <br></br>
            <input type="email" placeholder='Enter Email' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={email} onChange={handleEmail} />
            <br></br>
            <label>Password</label>
            <br></br>
            <PasswordInput placeholderText='Enter Password' value={password} handleChange={handlePasswordChange}/>
            <label>Confirm Password</label>
            <br></br>
            <PasswordInput  placeholderText='Confirm Password' value={confirm} handleChange={handleConfirm}/>
            
            </div>
            
        
        <button onClick={handleSubmit} className='submit-button' style={{'marginTop':'10px',paddingTop:'10px',paddingBottom:'10px',borderRadius:'10px',border:'none',backgroundColor:'black',color:'white'}} type="submit">Signup</button>
        
        </div>
        
    </div>
    </div>
}

export default Signup