import { useContext } from 'react'
import { BattleContext } from '../../context/battleContext'
import diferentThanChoose from '../../utils/diferentThanChoose'
import './PokeCard.css'
export default function PokeCard ({ pokemon }) {
  const { imageUrl, name } = pokemon
  const { setPlayerPokemon, setEnemy, setWin, colecction } =
    useContext(BattleContext)

  const handleClick = id => {
    setPlayerPokemon(id)
    setEnemy(diferentThanChoose(id, colecction))
    setWin(null)
  }

  return (
    <div onClick={() => handleClick(pokemon.id)} className='PokeCard'>
      <img className='PokeCard-image' src={imageUrl} alt={name} />
      <h5>{name}</h5>
    </div>
  )
}
