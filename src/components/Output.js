import React from "react";

export default function Output(props) {
  const [password, setPassword] = React.useState('')
  
function handlePassword () {
  setPassword( () => (props.generate(props.length, props.lovercase, props.uppercase, props.numbers, props.symbols)))
}

  return (
    <div className="output">
        <div className="output--field">
          {password}
          <div className="output--password"></div>
          <img className="output--copy"
               alt=""
               src="../assets/copy.png"
                />
        </div>
        <div className="output--button" onClick={handlePassword}>Generate</div>
    </div>
  )
}