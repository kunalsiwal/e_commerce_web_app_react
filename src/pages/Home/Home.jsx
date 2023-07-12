import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories/Categories";

function Home(){
    console.log('inside home')
    return (
        <div>
            <Navbar />
            <Categories backgroundImage={'https://wallpaperaccess.com/full/1492592.jpg'}/>
            <h1>This is home page</h1>
        </div>
    
    )
}

export default Home