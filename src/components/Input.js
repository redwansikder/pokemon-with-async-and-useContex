import React from 'react'
import { PokemonContext } from '../PokemonContext'

export function Input() {
  const { search, setSearch } = React.useContext(PokemonContext)
  return (
    <input
      placeholder='Enter Pokemon name:'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  )
}
