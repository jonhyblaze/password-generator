import React from "react";

export default function Complexity(props) {
  

  function complexityLevel () {
    if (props.length < 6) {
      return 'This is silly'
    }
    if(props.length > 5 && props.length < 9) {
      return 'This is a piece of cake'
    }
    if(props.length >= 9 && props.length < 13) {
      return 'This is a gift for rascals'
    }
    if(props.length >= 13 && props.length < 16) {
      return 'This is descent'
    }
    if(props.length >= 16 && props.length < 18) {
      return 'It\'s almost safe'
    }
    if(props.length >= 18 && props.length < 20) {
      return 'You are secured'
    }
    if(props.length >= 20 && props.length < 25) {
      return 'Paranoid'
    }


    
  }

  function complexityTime () {
    if (props.length < 3) {
      return <span>It would take <strong>no time</strong> to crack it</span>
    }
    if (props.length >= 3 && props.length < 5) {
      return <span>It would take <strong>split second</strong> to crack it</span>
    }
    if(props.length >= 4 && props.length < 5) {
      return <span>It would take <strong>less than 1 second</strong> to crack it</span>
    }
    if(props.length >= 5 && props.length < 7) {
      return <span>It would take <strong>less than minute</strong> to crack it</span>
    }
    if(props.length >= 7 && props.length < 9) {
      return <span>It would take <strong>less than an hour</strong> to crack it</span>
    }
    if(props.length >= 9 && props.length < 12) {
      return <span>It would take <strong>few hours</strong> to crack it</span>
    }
    if(props.length >= 12 && props.length < 13) {
      return <span>It would take <strong>a busy day</strong> to crack it</span>
    }
    if(props.length >= 13 && props.length < 14) {
      return <span>It would take <strong>a week</strong> to crack it</span>
    }
   if(props.length >= 14 && props.length < 15) {
      return <span>It would take <strong>few months</strong> to crack it</span>
    }
    if(props.length >= 15 && props.length < 16) {
      return <span>It would take <strong>about a year</strong> to crack it</span>
    }
    if(props.length >= 16 && props.length < 17) {
      return <span>It would take <strong>10 years</strong> to crack it</span>
    }
    if(props.length >= 17 && props.length < 18) {
      return <span>It would take <strong>a century</strong> to crack it</span>
    }
    if(props.length >= 18 && props.length < 19) {
      return <span>It would take <strong>a thousands years</strong> to crack it</span>
    }
    if(props.length >= 19 && props.length < 20) {
      return <span>It would take <strong>a millions of years</strong> to crack it</span>
    }
    if(props.length >= 20 && props.length < 22) {
      return <span>It would take <strong>as long as planet exists</strong> to crack it</span>
    }
    if(props.length >= 22 && props.length < 24) {
      return <span>It would take <strong>as long as a sun shines</strong> to crack it</span>
    }
    if(props.length >= 24) {
      return <span>It would take <strong>forever</strong> to crack it</span>
    }
  }
  
  return (
    <div className="complexity">
        <p className="complexity--rating">{complexityLevel()}</p>
        <p className="complexity--time">{complexityTime()}</p>
    </div>
  )
}