import React, { useState } from "react";
import './CategoryCard.css'

function CategoryCard(props){
    const [isMouseOver,setIsMouseOvr]=useState(false)
    const handleMouseOver=(e)=>{
            setIsMouseOvr(true);
    }
    const handleMouseOut=(e)=>{
        setIsMouseOvr(false);
    }
    return(
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="category-card">
            <img className="category-image" src={props.backgroundImage} alt={props.categoryName}/>
            <h1 style={isMouseOver?{opacity:'50%'}:null} className="category-name">{props.categoryName}</h1>
        </div>
    )
}

export default CategoryCard