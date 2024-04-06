import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <h1 className = "text-3xl font-bold underline">
    Chai aur Code!
     </h1>
  )
}

export default App
