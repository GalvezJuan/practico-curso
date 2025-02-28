import { useState } from 'react'

import './App.css'
import { Search } from './Components/Search'
import { Peticion } from './Components/Peticion'

function App() {
  const [valor, setValor] = useState( "")

  return (
    <>
      <h1>Conocé a tus personajes de Rick y Morty </h1>
      <Search val={setValor} />
      <Peticion api={valor}/>
    </>
  )
}

export default App
