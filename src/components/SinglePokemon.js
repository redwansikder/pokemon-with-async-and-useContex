import React from 'react'
import { PokemonContext } from '../PokemonContext'

export function SinglePokemon() {
  const { selPoke } = React.useContext(PokemonContext)

  return (
    <div className='SinglePokemon'>
      <h1>Name: {selPoke.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selPoke.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selPoke.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
