import React from "react";

const states=[
    'Bihar','Punjab','Tamil Nadu','Goa','Gujrat','Maharashtra','Andhra Pradesh','Karnataka','Mizoram','Manipur','Madhya Pradesh','Kerela',
    'Haryana','Uttar Pradesh','Himachal Pradesh','Uttarakhand','Tripura','Rajasthan','Assam','Sikkim','Odisha','Nagaland',
    'Arunachal Pradesh','West Bengal','Chhattisgarh','Meghalaya','Jharkhand','Telengana','Delhi','Jammu & Kashmir'
]

function StateDropDown(){
    
    return <div style={{paddingTop:'5px',paddingBottom:'5px'}}>
        <select style={{borderRadius:'5px',padding:'2px'}}>
            {states.map((element)=>{
                return <option style={{padding:'5px'}}  value={element}>{element}</option>
            })}
        </select>
    </div>
    
}

export default StateDropDown