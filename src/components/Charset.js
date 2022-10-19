import React from "react";


export default function Charset () {
  
  
  const [checkbox,setCheckbox] = React.useState({
    uppercase: true,
    lovercase: true,
    numbers: true,
    symbols: true
  })

  console.log(checkbox)





  function toggleCheckbox(event) {
    console.log(event)
    const {name, value, type, checked} = event.target
    setCheckbox(prev => {
        return {
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }
    })
}



  


  return (
    <div className="charset">
        <h4 className="charset--title">Characters used:</h4>
        <div className="charset--checkbox-container">
          <input className="charset--uppercase" 
                 type="checkbox" 
                 name="uppercase" 
                 onChange={toggleCheckbox} 
                 value={checkbox.uppercase}
          />
          <label className="charset--label">ABC</label>
          <input className="charset--lovercase" 
                 name="lovercase" 
                 type="checkbox" 
                 onChange={toggleCheckbox} 
                 value={checkbox.uppercase}/>
          <label className="charset--label">abc</label>
          <input className="charset--numbers" 
                 type="checkbox" 
                 name="numbers" 
                 onChange={toggleCheckbox} 
                 value={checkbox.numbers}
          />
          <label className="charset--label">123</label>
          <input className="charset--symbols" 
                 type="checkbox" 
                 name="symbols" 
                 onChange={toggleCheckbox} 
                 value={checkbox.symbols}/>
          <label className="charset--label">@#$</label>
        </div>
    </div>
  )
}