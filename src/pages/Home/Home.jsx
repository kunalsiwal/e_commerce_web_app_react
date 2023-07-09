import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Home(){
    console.log('inside home')
    return (
        <div>
            <Navbar />
            <h1>This is home page</h1>
        </div>
    
    )
}

export default Home