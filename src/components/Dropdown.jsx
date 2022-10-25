import React, { useState } from "react";
import '../style/main.scss';
function Dropdown(){
    const [selects,setselects]=useState();   
    return (
        <div>
            <h1>{selects}</h1>
            <select value={selects} onChange={e=>setSelects(e.target.value)}>
             <option>Last 7 days</option>
             <option>15 days</option>
             <option>1 month</option>

            </select>
        </div>
     );
}

export default Dropdown;





