import React, { useState } from "react";
import Dropzone from "../../components/Dropzone/Dropzone";
import Navbar from "../../components/Navbar/Navbar";
import './UploadDocs.css'

function UploadDocs(){
    const [files,setFiles]=useState([])
return(
    <div>
        <Navbar />
        <h2>drop files with file name</h2>
        <Dropzone files={files} setFiles={setFiles}/>
    </div>
)
}

export default UploadDocs