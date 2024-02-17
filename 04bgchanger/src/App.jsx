import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")


  return (
    <>
    <div className="w-full h-screen duration-200 p-2"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center shadow-xl bg-white px-3 py-2 rounded-full">
         <button className=" px-4 text-white py-1 rounded-full shadow-lg " style={{backgroundColor:"red"}}
         onClick={()=>setColor("red")}
         >Red</button> 
        <button className=" px-4 text-white py-1 rounded-full shadow-lg " style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}
        >Green</button> 
         <button className=" px-4 text-white py-1 rounded-full shadow-lg " style={{backgroundColor:"black"}}
         
         onClick={()=>setColor("black")}
         >Black</button>
         <button className=" px-4 text-white py-1 rounded-full shadow-lg " style={{backgroundColor:"gray"}}
        onClick={()=>setColor("gray")}
        >Gray</button>
        <button className=" px-4 text-white py-1 rounded-full shadow-lg " style={{backgroundColor:"purple"}}
        onClick={()=>setColor("purple")}
        >Purple</button>
        <button className=" px-4 text-black py-1 rounded-full shadow-lg " style={{backgroundColor:"white"}}
        onClick={()=>setColor("white")}
        >White</button>
        <button className=" px-4 text-black py-1 rounded-full shadow-lg " style={{backgroundColor:"lavender"}}
        onClick={()=>setColor("lavender")}
        >Lavender</button>

       </div>
       
      </div>
    
    </div>
   </>
  )
}

export default App
