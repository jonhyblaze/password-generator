import React from "react";


export default function Input (props) {

  return (
    <div className="input">
        <label className="input--label">Password length:</label>
        
        <input type="number" 
               className="input--number"
               min={0}
               max={24} 
               name="number"
               onChange={props.handleChange}
               value={props.length}
               />

        <input type="range" 
               className="input--slider" 
               min={0}
               max={24} 
               name="range"
               onChange={props.handleChange}
               value={props.length}
               />
    </div>
  )
}