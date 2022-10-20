import React from "react";


export default function Charset (props) {

  return (
    <div className="charset">
       <h4 className="charset--title">Characters used:</h4>
       <div className="charset--checkbox-container">
              <input className="charset--uppercase" 
                     type="checkbox" 
                     name="uppercase" 
                     onChange={props.toggleCheckbox} 
                     checked={props.uppercase}
              />
              <label className="charset--label">ABC</label>
              <input className="charset--lovercase" 
                     name="lovercase" 
                     type="checkbox" 
                     onChange={props.toggleCheckbox} 
                     checked={props.lovercase}   
              />
              <label className="charset--label">abc</label>
              <input className="charset--numbers" 
                     type="checkbox" 
                     name="numbers" 
                     onChange={props.toggleCheckbox} 
                     checked={props.numbers}  
              />
              <label className="charset--label">123</label>
              <input className="charset--symbols" 
                     type="checkbox" 
                     name="symbols" 
                     onChange={props.toggleCheckbox} 
                     checked={props.symbols}    
              />
              <label className="charset--label">@#$</label>
       </div>
    </div>
  )
}