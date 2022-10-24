import React from "react";

export default function Complexity(props) {


  function complexityLevel () {
    
    if(props.lovercase || props.uppercase || props.numbers || props.symbols) {

        if (props.length < 6) {
          return 'Silly'
        }
        if(props.length > 5 && props.length < 9) {
          return 'Poor'
        }
        if(props.length >= 9 && props.length < 13) {
          return 'Compromised'
        }
        if(props.length >= 13 && props.length < 16) {
          return 'Descent'
        }
        if(props.length >= 16 && props.length < 18) {
          return 'Safe'
        }
        if(props.length >= 18 && props.length < 20) {
          return 'Secured'
        }
        if(props.length >= 20 && props.length < 22) {
          return 'Bulletproofed'
        }
        if(props.length >= 22 && props.length < 25) {
          return 'Paranoid'
        }

    } else return 'Wreckless'
    
  }

  function complexityTime () {
      
    if (props.lovercase || props.uppercase || props.numbers || props.symbols) {

    
      if (props.length < 3) {
        return <span>It would take <strong>no time</strong> to crack it</span>
      }
      if (props.length >= 3 && props.length < 4) {
        return <span>It would take <strong>split second</strong> to crack it</span>
      }
      if(props.length === 4) {
        return <span>It would take <strong>less than 1 second</strong> to crack it</span>
      }
      if(props.length === 5) {
        return <span>It would take <strong>few seconds</strong> to crack it</span>
      }
      if(props.length >= 5 && props.length < 7) {
        return <span>It would take <strong>less than minute</strong> to crack it</span>
      }
      if(props.length === 7) {
        return <span>It would take <strong>less than an hour</strong> to crack it</span>
      }
      if(props.length === 8) {
        return <span>It would take <strong>few hours</strong> to crack it</span>
      }

      if(props.length === 9) {
        return <span>It would take <strong>a busy day</strong> to crack it</span>
      }
      if(props.length === 10) {
        return <span>It would take <strong>a week</strong> to crack it</span>
      }
      if(props.length === 11) {
        return <span>It would take <strong>a month</strong> to crack it</span>
      }
      if(props.length === 12) {
        return <span>It would take <strong>few months</strong> to crack it</span>
      }
      if(props.length === 13) {
        return <span>It would take <strong>about a year</strong> to crack it</span>
      }
      if(props.length === 14) {
        return <span>It would take <strong>couple of years</strong> to crack it</span>
      }
      if(props.length === 15) {
        return <span>It would take <strong>15 years</strong> to crack it</span>
      }
      if(props.length === 16) {
        return <span>It would take <strong>a century</strong> to crack it</span>
      }
      if(props.length === 17) {
        return <span>It would take <strong>thousands of years</strong> to crack it</span>
      }
      if(props.length === 18) {
        return <span>It would take <strong>a million years</strong> to crack it</span>
      }
      if(props.length === 19) {
        return <span>It would take <strong>100 million years</strong> to crack it</span>
      }
      if(props.length === 20) {
        return <span>It would take <strong>a billion years</strong> to crack it</span>
      }
      if(props.length === 21) {
        return <span>It would take <strong>as long as planet exists</strong> to crack it</span>
      }
      if(props.length === 22) {
        return <span>It would take <strong>as long as a sun shines</strong> to crack it</span>
      }
      if(props.length === 23) {
        return <span>It would take <strong>as long as universe expands</strong> to crack it</span>
      }
      if(props.length >= 24) {
        return <span>It would take <strong>forever</strong> to crack it</span>
      }

    } else return <span>Select character set</span>
  }
  
  return (
    <div className="complexity">
        <p className="complexity--rating">{complexityLevel()}</p>
        <p className="complexity--time">{complexityTime()}</p>
    </div>
  )
}