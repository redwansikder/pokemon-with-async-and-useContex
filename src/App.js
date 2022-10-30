import React from 'react'
import './App.css'
import { SinglePokemon } from './components/SinglePokemon'
import { Input } from './components/Input'
import { Table } from './components/Table'
import { PokemonContext } from './PokemonContext'

function App() {
  const [search, setSearch] = React.useState('')
  const [selPoke, setSelPokemon] = React.useState(null)
  const [pokemon, setPokemon] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then((res) => res.json())
      .then(setPokemon)
  }, [])

  return (
    <PokemonContext.Provider
      value={{ search, setSearch, selPoke, setSelPokemon, pokemon }}
    >
      <div className='App'>
        <h1>Pokemon API frontend.</h1>
        <Input />
        <div className='grid'>
          <Table />
          <div>
            {selPoke ? (
              <SinglePokemon />
            ) : (
              <h1 style={{ textAlign: 'left' }}>Click a Pokemon's name.</h1>
            )}
          </div>
        </div>
      </div>
    </PokemonContext.Provider>
  )
}

export default App
