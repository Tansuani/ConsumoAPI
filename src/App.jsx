import { useState } from 'react'

import './App.css'
import MiApi2 from './Components/MiApi2'
import Buscador from './Components/Buscador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola q tal, esto es un Landing Page</h1>
      <MiApi2 />
      <Buscador />
    </>
  )
}

export default App
