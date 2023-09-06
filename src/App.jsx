import { useState } from 'react'

import './App.css'
import MiAPI from './Components/MiAPI'
import Buscador from './Components/Buscador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola q tal esto es un Landing Page</h1>
      <MiAPI />
      <Buscador />
    </>
  )
}

export default App
