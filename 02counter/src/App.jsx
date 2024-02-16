import { useState, } from 'react'    //React is responsible for all the changes in the UI
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] =  useState(15)
  // Here, counter=> variable &
  //       setCounter/abcCounter=> function
  // setCounter is the funtion responsible to update the counter variable

  // let counter= 15

  const addValue = () => {
    // counter = counter + 1
    setCounter((prevCounter) => prevCounter + 1) // prevCounter is the last updated state(can be named anything ie. counter, abc, xyz.) 
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

  }

  const removeValue = ()=> {

    setCounter(counter-1)
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>CounterValue: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter} </p>

    </>       
  )
}

export default App
