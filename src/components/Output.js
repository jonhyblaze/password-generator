import React from "react";

export default function Output(props) {
  const [password, setPassword] = React.useState('')

  function handlePassword () {
    if(props.uppercase || props.lovercase || props.numbers || props.symbols) {
      setPassword( () => (props.generate(props.length, props.lovercase, props.uppercase, props.numbers, props.symbols)))
    } 
    
    else if (!props.uppercase || !props.lovercase || !props.numbers || !props.symbols) {
      setPassword('Select character set')
      setTimeout( ()=> setPassword(''), 2400)
    }
  }

 React.useEffect(() => {
    handlePassword()
    }, [props.length])

async function copyTextToClipboard(text) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

function handleCopyClick() {
  copyTextToClipboard(password)
  if(password.length > 0) {
    setPassword( (prev) => {
      setTimeout( ()=> {
        setPassword(prev)
      }, 1000)
     return 'Password is copied!'
      })
  }
}

  return (
    <div className="output">
        <div className="output--field">
            <h3 className="output--password">{password}</h3>
            <div className="output--copy"
                onClick={handleCopyClick }>
            </div>
        </div>
        <div className="output--button" onClick={handlePassword}><h4>Generate</h4></div>
    </div>
  )
}