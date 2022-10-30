import React from 'react'
import { PokemonContext } from '../PokemonContext'

export function PokemonRow({ pokemon }) {
  const { setSelPokemon } = React.useContext(PokemonContext)
  return (
    <tr>
      <td onClick={() => setSelPokemon(pokemon)}>{pokemon.name.english}</td>
    </tr>
  )
}
