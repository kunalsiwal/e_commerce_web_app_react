import React, { useEffect, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import './Dropzone.css'

function Dropzone(props){

    
    const [styles,setStyles]=useState({})
    const [files,setFiles]=useState([]);
    useEffect(()=>{

    },[])


    const handleDragOver=(e)=>{
        setStyles({
            backgroundColor:'blue'
        })
    }

    const handleDragEnter=(e)=>{
        setStyles({
            backgroundColor:'red'
        })
    }

    const handleDragLeave=(e)=>{
        setStyles({})
    }

    const handleDropOn=(e)=>{
        const file=e.target.files[0];
        console.log(props.files.length);
        setFiles((prev)=>{
            return [...prev,<div className="file-list"><InsertDriveFileIcon fontSize="large" sx={{marginLeft:'10px',color:'white',fontSize:'3rem',marginRight:'10px'}}/>
            <p style={{color:'white',marginLeft:'10px',marginRight:'10px',marginTop:0}}>{file.name}</p>
            </div>]
        })
        props.setFiles((prev)=>{
            return [...prev,file];
        })
    }

    return (
        <div className="dragzone"  onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}>
            <div className="files-div">
                {files}
            </div>
            <h1 className="drag-drop-text">Drag and Drop <AddCircleIcon fontSize="large"/></h1>
            <input style={styles} className="dragzone-input" type="file" onChange={handleDropOn} />
        </div>
    )
}

export default Dropzone