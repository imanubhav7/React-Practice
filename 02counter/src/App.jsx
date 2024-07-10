import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter,setCounter] = useState(15)
  const addValue = () =>{
    // counter+=1;
    if(counter+1>20)
      alert("Limit exceed");
    else{
      setCounter(counter+1)
      console.log("Clicked", counter);
    } 
  }
  const removeValue = () =>{
    if(counter-1<0)
      alert("value can't be negative");
    else
    setCounter(counter-1);
  }
  return (
    <>
     <h1>Radhe Radhe</h1>
     <h3>Counter value: {counter}</h3>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value{counter}</button>
    </>
  )
}

export default App
