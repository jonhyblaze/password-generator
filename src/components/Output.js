import React from "react";

export default function Output(props) {
  const [password, setPassword] = React.useState('')
  
function handlePassword () {
  setPassword( () => props.generate())
}

  return (
    <div className="output">
        <div className="output--feild">
          23fhfs-23442h-dsf234
          <div className="output--password"></div>
          <img className="output--copy"
               alt=""
               src="../assets/copy.png"
                />
        </div>
        <div className="output--button" onClick={props.generate}>Generate</div>
    </div>
  )
}