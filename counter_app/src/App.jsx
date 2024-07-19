import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
// const Value =6
const addValue=()=>{
// Value+=1
if(count<10){
setCount(count+1)
console.log(count)}
}
const subValue=()=>{
  if(count>0){
    setCount(--count)
  console.log(count) 
  }
 
}
  return (
    <>
     <h2>Counter App</h2>
     <h2>Current Value ={count}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={subValue}>Remove Value</button>
    </>
  )
}

export default App
