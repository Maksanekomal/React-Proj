
import Chai from "./Chai"
import {useState} from 'react'




function App() {
 

  let [counter, setCounter]= useState(10)

  const addValue =()=>{
    setCounter(counter+1)
  }

  const removeValue =()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Counter Value:{counter} </h1>
    <button onClick={addValue}> Add Value {counter}</button>
    <br />
    <button onClick={removeValue}> Remove Value {counter}</button>

    <p>Footer: {counter}</p>
    </>

  )
}

export default App