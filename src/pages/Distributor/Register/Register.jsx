import React, { useState } from 'react';
import './Register.css';
import Navbar from '../../../components/Navbar/Navbar';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import StateDropDown from '../../../components/Dropdowns/StateDropDown';


function Register(){

    const [name, setName] = useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [confirm,setConfirm]=useState('');
    const [pan,setPan]=useState('');
    const [address,setAddress]=useState('');
    const [gst,setGst]=useState('');
    const [aadhaar,setAadhaar]=useState('');
    const [pin,setPin]=useState('');
    const [district,setDistrict]=useState('')

    const handleAadhaar=(e)=>{
        setAadhaar(e.target.value);
    }

    const handleGst=(e)=>{
        setGst(e.target.value);
    }
   
    const handleAddress=(e)=>{
        setAddress(e.target.value);
    }

    const handlePan=(e)=>{
        setPan(e.target.value);
    }
  
    const handleNameChange = (e) => {
      setName(e.target.value);
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
      console.log(`Username: ${name}, Password: ${password}`);
      // Reset the form
      setName('');
      setPassword('');
        
    };
    
    const handleConfirm=(e)=>{
        setConfirm(e.target.value)
    }

    const handlePin=(e)=>{
        setPin(e.target.value)
    }

    const handleDistrict=(e)=>{
        setDistrict(e.target.value);
    }



    return <div>
        <Navbar />
        <div className='register-page'>
        
        <h2 className='register-title'>Distributor Register</h2>
        <div className='form'>

       
            <div className='register-form'>
            <label className='label'>Name</label>
            <br></br>
            <input type="text" placeholder='Enter Username' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} className='form-input-register' value={name} onChange={handleNameChange} />
            </div>
            <div>
            <label>Email</label>
            <br></br>
            <input type="email" placeholder='Enter Email' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={email} onChange={handleEmail} />
            <br></br>
            <label>PAN Number</label>
            <br></br>
            <input type="text" placeholder='Enter PAN Number' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={pan} onChange={handlePan} />
            <br></br>
            <label>GST Number</label>
            <br></br>
            <input type="text" placeholder='Enter GST Number' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={gst} onChange={handleGst} />
            <br></br>
            <label>Aadhaar Number</label>
            <br></br>
            <input type="text" placeholder='Enter Aadhaar Number' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={aadhaar} onChange={handleAadhaar} />
            <br></br>
            <label>Address</label>
            <br></br>
            <input type="text" placeholder='Enter Address' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={address} onChange={handleAddress} />
            <br></br>
            <label>Pin Code</label>
            <br></br>
            <input type="text" placeholder='Enter Pin Code' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={pin} onChange={handlePin} />
            <br></br>
            <label>District</label>
            <br></br>
            <input type="text" placeholder='Enter District' style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={district} onChange={handleDistrict} />
            <br></br>
            <label>State</label>
            <StateDropDown />
            <label>Password</label>
            <br></br>
            <PasswordInput placeholderText='Enter Password' value={password} handleChange={handlePasswordChange}/>
            <label>Confirm Password</label>
            <br></br>
            <PasswordInput  placeholderText='Confirm Password' value={confirm} handleChange={handleConfirm}/>
            
            </div>
            
        
        <button onClick={handleSubmit} className='submit-button' style={{'marginTop':'10px',paddingTop:'10px',paddingBottom:'10px',borderRadius:'10px',border:'none',backgroundColor:'black',color:'white'}} type="submit">Register</button>
        
        </div>
        
    </div>
    </div>
}

export default Register