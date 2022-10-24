import React from "react";


export default function Charset (props) {

  return (
    <div className="charset">
       <p className="charset--title">Characters used:</p>
       <div className="charset--checkbox-container">
              <label className="charset--label">
                     <input className="charset--uppercase checkbox" 
                     type="checkbox" 
                     name="uppercase" 
                     onChange={props.toggleCheckbox} 
                     checked={props.uppercase}
                     />ABC
              </label>

              <label className="charset--label">
                     <input className="charset--lovercase checkbox" 
                            name="lovercase" 
                            type="checkbox" 
                            onChange={props.toggleCheckbox} 
                            checked={props.lovercase}   
                     />abc
              </label>

              <label className="charset--label">
                     <input className="charset--numbers checkbox" 
                            type="checkbox" 
                            name="numbers" 
                            onChange={props.toggleCheckbox} 
                            checked={props.numbers}  
                     />123
              </label>
              
              <label className="charset--label">
                     <input className="charset--symbols checkbox" 
                            type="checkbox" 
                            name="symbols" 
                            onChange={props.toggleCheckbox} 
                            checked={props.symbols}    
                     />@#$
              </label>
       </div>
    </div>
  )
}