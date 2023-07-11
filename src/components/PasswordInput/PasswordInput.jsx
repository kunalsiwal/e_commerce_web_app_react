import React,{ useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './PasswordInput.css'

function PasswordInput(props){

    const [showPassword,setShowPassword]=useState(false);
    
    const handleToggle=(e)=>{

        setShowPassword((prev)=>{
            return !prev;
        })
        console.log(showPassword)
    }
    return (
        <div className='password'>
        <input type={showPassword?"text":"password"} placeholder={props.placeholderText} style={{'marginTop':'5px',padding:'5px',paddingRight:'30px',marginBottom:'10px',borderRadius:'5px'}} value={props.value} onChange={props.handleChange} />
        <button onClick={handleToggle} className='visibility-icon'>
            {showPassword?<VisibilityOffIcon />:<VisibilityIcon />}
        </button>
    </div>
    )
}

export default PasswordInput