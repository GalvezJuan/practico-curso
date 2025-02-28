import { useState } from 'react'

import './App.css'
import { Search } from './Components/Search'

function App() {
  const [valor, setValor] = useState("")

  return (
    <>
      <h1>Valor: {valor} </h1>
      <Search val={setValor} />
    </>
  )
}

export default App
