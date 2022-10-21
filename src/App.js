import React from 'react';
import './App.css';
import Output from './components/Output';
import Complexity from './components/Complexity';
import Input from './components/Input';
import Charset from './components/Charset';


function App() {
  
  const [length, setLength] = React.useState(16);
  
  const [checkbox, setCheckbox] = React.useState({
    lovercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  })

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
  
  return (
  <div className="App">
      <div className='app-wrapper'>
        <h2 className='title'>Generate secure password</h2>
        <Output generate={generate}
                length={length}
                {...checkbox}
        />
        <Complexity /> 
        <Input handleChange={handleChange} 
               length={length}
        />   
        <Charset toggleCheckbox={toggleCheckbox}
                {...checkbox}
                length={length}
        />
       </div> 
  </div>
  );
}

export default App;
