import React, { useState } from "react";
import '../style/main.scss';
function Dropdown(){
    const [selects,setselects]=useState();   
    return (
        <div className="dropdown">
           <h1>{selects}</h1>
            
            <select value={selects} onChange={e=>setselects(e.target.value)}>
             <option>Last 7 days</option>
             <option>15 days</option>
             <option>1 month</option>

            </select>
            
        </div>
     );
}

export default Dropdown;





