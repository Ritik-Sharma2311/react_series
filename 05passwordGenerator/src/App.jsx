import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed ]= useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword ] = useState("")

 //useRef hook
 const passwordRef = useRef(null)


  // const cachedFn = useCallback(fn, dependencies)  :- useCallback is a React Hook that lets you cache a function definition between re-renders.
  const passwordGenerator = useCallback( ()=> {
    let pass = ""
    let str = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!#$%&'(){}[]_*+,-./"

    for(let i=1; i<=length; i++ ){
      let char = Math.floor(Math.random() * str.length)

      pass += str.charAt(char)
    }

    setPassword(pass)
    

  }, [numberAllowed, charAllowed, length, setPassword])


const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0, 19)
  window.navigator.clipboard.writeText(password) // to copy text/password to the clipboard
},[password])


  //useEffect is a React Hook that lets you synchronize a component with an external system.
  //The useEffect hook in React is used to handle the side effects in React such as fetching data, and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering
 useEffect(()=>{
  passwordGenerator()
 },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
           <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
           type="text"
           value={password}
           className= "outline-none w-full py-1 px-3"
           placeholder='Password'
           readOnly
           ref={passwordRef}
          />    
           <button
           onClick={copyPasswordToClipboard}
           className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
          
           >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer" 
            onChange={(e) => {setLength(e.target.value)} } 
            />
            <label>Length:{length} </label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput" 
            onChange={() => {setNumberAllowed((prev) => !prev) } } 
            />
            <label>Num</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput" 
            onChange={() => {setCharAllowed((prev) => !prev) } } 
            />
            <label>Char{} </label>
          </div>
        </div>
      </div>
     
      
    </>
  )
}

export default App
