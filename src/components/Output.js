import React from "react";

export default function Output(props) {
  const [password, setPassword] = React.useState('')
  
function handlePassword () {
  setPassword( () => (props.generate(props.length, props.lovercase, props.uppercase, props.numbers, props.symbols)))
}

  return (
    <div className="output">
        <div className="output--field">
          <h3>{password}</h3>
          <div className="output--password"></div>
          <div className="output--copy"></div>
        </div>
        <div className="output--button" onClick={handlePassword}><h4>Generate</h4></div>
    </div>
  )
}