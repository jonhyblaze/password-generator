import React, { useEffect } from 'react';
import './App.css';
import Output from './components/Output';
import Complexity from './components/Complexity';
import Input from './components/Input';
import Charset from './components/Charset';


function App() {
  
  const [length, setLength] = React.useState(0);
  const [screenSize, setScreenSize] = React.useState(window.innerWidth)
  const [checkbox, setCheckbox] = React.useState({
    lovercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  })


function handleResize() {
  setScreenSize(window.innerWidth)
  return  () => {window.removeEventListener('resize', handleResize)}
}

  function toggleCheckbox(event) {
    const {name, value, type, checked} = event.target
    setCheckbox(prev => {
        return {
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

function handleChange (event) {
    setLength(event.target.value)
}

function generate(length, lovercase, uppercase, numbers, symbols) {
      let generatedPassword = []
      let set = ''

      const lowercaseSet = 'abcdefghijklmnopqrstuvwxyz'
      const uppercaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const numbersSet = '0123456789'
      const symbolsSet = '!@#$%^&*=-_?'
      
      // ? checking the checkboxes

      if (lovercase) {
        set += lowercaseSet
      }
      if (uppercase) {
        set += uppercaseSet
      }
      if (numbers) {
        set += numbersSet
      }
      if (symbols) {
        set += symbolsSet
      }
      else {
        set += ''
      }
      
      // ? Transforming string of characters into the array

      set = set.split('')

    // ? Looping threw the array and randomizing the positions of elements

      set.forEach( () => generatedPassword.push(set[Math.floor(Math.random() * set.length)]))


      return generatedPassword.join('').slice(0, length)
}

// function backgroundColorFeedback() {
 
//   if(checkbox.lovercase || checkbox.uppercase || checkbox.numbers || checkbox.symbols) {
 
//       if (length > 0 && length < 6) {
//         return {background: '#FF6E5A'}
//       } 
//       if (length >= 6 && length < 9) {
//         return {background: '#FFB054'}
//       }
//       if (length >= 9 && length < 13) {
//         return {background: '#FFDA55'}
//       }
//       if (length >= 13 && length < 16) {
//         return {background: '#BFF351'}
//       }
//       if (length >= 16 && length < 18) {
//         return {background: '#79F665'}
//       }
//       if (length >= 18 && length < 20) {
//         return {background: '#5EE0FD'}
//       }
//       if (length >= 20 && length < 22) {
//         return {background: '#77A5FF'}
//       }

//       if (length >= 22 && length < 25) {
//         return {background: '#9C8CFF'}
//       }
//   } else {return {background: '#FF6E5A'}}
// }

window.addEventListener('resize', handleResize)

useEffect( ()=>{
    
  if(checkbox.lovercase || checkbox.uppercase || checkbox.numbers || checkbox.symbols) {
  
  if (length < 1) {
      document.body.style.background="#F6F6F6"
    }
    if (length > 1 && length < 6) {
      document.body.style.background="#FF6E5A"
    }
    
    if (length >= 6 && length < 9) {
      document.body.style.background="#FFB054"
    }

    if (length >= 9 && length < 13) {
      document.body.style.background="#FFDA55"
    }

    if (length >= 13 && length < 16) {
      document.body.style.background="#BFF351"
    }

    if (length >= 16 && length < 18) {
      document.body.style.background="#79F665"
    }
    if (length >= 18 && length < 20) {
      document.body.style.background="#5EE0FD"
    }
    if (length >= 20 && length < 22) {
      document.body.style.background="#77A5FF"
    }
    if (length >= 22 && length < 25) {
      document.body.style.background="#9C8CFF"
    }
  } else  document.body.style.background="#F6F6F6"

  }, [length, checkbox])

return (
  <div className='App'>
    <div className="app-wrapper">
        <h2 className='title'>{+screenSize > 770 ? 'Generate secure password' : 'Password generator'}</h2>
        <Output generate={generate}
                length={+length}
                {...checkbox}
        />
        <Complexity 
               length={+length}
               {...checkbox}/> 
        <Input handleChange={handleChange} 
               length={+length}
        />   
        <Charset toggleCheckbox={toggleCheckbox}
                {...checkbox}
                length={+length}
        />
    </div> 
  </div>
  );
}

export default App;
