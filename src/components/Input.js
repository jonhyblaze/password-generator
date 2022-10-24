import React from "react";


export default function Input (props) {

  return (
    <div className="input">
      
        <label className="input--label">
          <p>Password length:</p>
          <input type="number" 
               className="input--number"
               min={0}
               max={24}
               name="number"
               onChange={props.handleChange}
               value={props.length}
               readOnly={true}
               />
        </label>
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