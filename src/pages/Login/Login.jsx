import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import GoogleIcon from '@mui/icons-material/Google';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className='page'>
        <Navbar />
        <div className='login-page'>
        
            <h2 className='login-title'>Login</h2>
            <div className='form'>

            
                <div className='login-form'>
                <label className='label'>Username</label>
                <br></br>
                <input type="text" placeholder='Enter Username' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} className='form-input-login' value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                <label>Password</label>
                <br></br>
                <PasswordInput placeholderText='Enter Password' value={password} handleChange={handlePasswordChange}/>
                </div>
                
        
            <button onClick={handleSubmit} className='submit-button' style={{'marginTop':'10px',paddingTop:'10px',paddingBottom:'10px',borderRadius:'10px',border:'none',backgroundColor:'black',color:'white'}} type="submit">Login</button>
            <button className='google-login' style={{'marginTop':'10px',paddingTop:'5px',paddingBottom:'5px',borderRadius:'10px',border:'none',backgroundColor:'black',color:'white'}} type='submit'><GoogleIcon /></button>
            </div>
            
        </div>

    </div>
      );
};

export default Login;
