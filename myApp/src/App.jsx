import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from '../Components/Products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Products stock="30" sku="asdf465" precio="156" nombre="Visual" descripcion="descripcion de ejemplo"></Products>
  )
}

export default App
