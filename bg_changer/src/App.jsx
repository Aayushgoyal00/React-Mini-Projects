import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Color_name from './component/NewColor'
function App() {
  // const [count, setCount] = useState(0)
  const [color,setcolor]=useState("olive")
  return (
    <div className='flex justify-center flex-wrap'>
    <div className='absolute flex-wrap w-screen h-screen bg-black z-0' style={{ backgroundColor:color  }}></div>
     <div className='fixed bg-white z-10  mx-auto bottom-7  rounded p-1'>
      <div className='flex space-x-10 flex-wrap'>
        <Color_name bg="Red" setcolor={setcolor}/>
        <Color_name bg="Blue" setcolor={setcolor}/>
        <Color_name bg="Green" setcolor={setcolor}/>
        <Color_name bg="Yellow" setcolor={setcolor}/>
        <Color_name bg="Violet" setcolor={setcolor}/>
      </div>
     </div>
    </div>
  )
}

export default App
