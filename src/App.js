import React from 'react';
import './App.css';
import Output from './components/Output';
import Complexity from './components/Complexity';
import Input from './components/Input';
import Charset from './components/Charset';


function App() {
  
  const [length, setLength] = React.useState(0);
  const [checkbox, setCheckbox] = React.useState({
    uppercase: true,
    lovercase: true,
    numbers: true,
    symbols: true
  })
  
  function generate(length) {
      let generatedPassword= []
      let set;
      const lowercaseSet = 'abcdefghijklmnopqrstuvwxyz'
      const uppercaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const numbersSet = '0123456789'
      const symbolsSet = '!@#$%^&*=-_?'
      
      // ? checking the checkboxes

      if (checkbox.lovercase) {
        set += lowercaseSet
      }

      if (checkbox.uppercase) {
        set += uppercaseSet
      }
      if (checkbox.numbers) {
        set += numbersSet
      }
      if (checkbox.symbols) {
        set += symbolsSet
      }
      
      // ? Transforming string of characters into the array

      set = set.split('')

    // ? Looping threw the array and randomizing the positions of elements

      set.forEach( () => generatedPassword.push(set[Math.floor(Math.random() * set.length)]))

      console.log(set.length)

      return generatedPassword.join('').slice(0, length)
    }
  

  function handleChange (event) {
      setLength( prev => event.target.value)
  }
  
  
  return (
    <div className="App">
      <h2 className='title'>Generate secure password</h2>
      <Output generate={generate}/>
      <Complexity /> 
      <Input handleChange={handleChange} 
             length={length}
      />   
      <Charset />
    </div>
  );
}

export default App;
