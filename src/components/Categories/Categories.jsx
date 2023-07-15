import React from "react";
import './Categories.css'
import CategoryCard from "../CategoryCard/CategoryCard";
import categoryContent from "../../categoryContent";

function Categories(props){
return (
    <div className="categories">
    {categoryContent.map((element)=>{
        return <CategoryCard key={element.id} description={element.description} backgroundImage={element.backgroundImage} alt={element.categoryName} categoryName={element.categoryName}/>
    })}
    </div>
)
}

export default Categories