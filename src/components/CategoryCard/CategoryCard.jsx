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
            <img style={isMouseOver?{boxShadow:'10px 10px 10px 10px',opacity:'30%'}:null} className="category-image" src={props.backgroundImage} alt={props.categoryName}/>
            <h1 className="category-name">{props.categoryName}</h1>
        </div>
    )
}

export default CategoryCard