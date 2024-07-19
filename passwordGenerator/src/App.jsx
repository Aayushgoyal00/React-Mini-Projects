import { useState ,useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
const [length,setlength]=useState(0);
const [includeNumber,setIncludeNumber]=useState(false);
const [includeSymbol,setIncludeSymbol]=useState(false);
const [password,setPassword]=useState("")
const refPass=useRef(null)
let passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(includeNumber){
    str+="1234567890"
  }
  if(includeSymbol){
    str+="!@#$%^&*()_+[]{}~<>?,./";
  }
  for(let i=0;i<length;i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass+=str.charAt(char)
  }
setPassword(pass)
},[length,includeNumber,includeSymbol,setPassword]);

let copyToClipboard=useCallback(()=>{
  refPass.current?.select()
  navigator.clipboard.writeText(password);
},[password])

useEffect(()=>{passwordGenerator()},[length,includeNumber,includeSymbol,passwordGenerator])


  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <input type="text" readOnly className='rounded p-2 m-4' value={password} placeholder='Password' ref={refPass}
       />
        <button onClick={copyToClipboard}>Copy</button>
      </div>


      <input type="range" id="pass_length" value={length} onChange={(e)=>{
         setlength(e.target.value)}}  min={4} max={15} />
      <label > Length {length}</label><br/>


      <input type="checkbox" id="include_number" onChange={()=>setIncludeNumber((value)=>!value)} />
      <label htmlFor="include_number"> Number</label><br/>
      <input type="checkbox" id="include_symbol" onChange={()=>setIncludeSymbol((value)=>!value)}/>
      <label htmlFor="include_symbol"> Symbol</label>
    </>
  )
}

export default App
