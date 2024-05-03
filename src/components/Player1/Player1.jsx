import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import { useContext, useEffect, useState } from 'react'
import pokeball from '../../assets/pokeball.png'
import { BattleContext } from '../../context/battleContext'
import findPokeById from '../../utils/findPokeById'
import './Player1.css'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#43ff64d9' : '#308fe8'
  }
}))

export default function Player1 () {
  const [poke, setPoke] = useState(null)
  const { playerPokemon, win, colecction } = useContext(BattleContext)
  let classCondition =
    win === null ? 'Player1' : win === 'player' ? 'Player1-win' : 'Player1-lose'

  useEffect(() => {
    setPoke(findPokeById(playerPokemon, colecction))
  }, [colecction, playerPokemon, win])

  return (
    <div className={classCondition}>
      <img
        className='Player1-image'
        src={poke?.imageUrl ? poke?.imageUrl : pokeball}
        alt={poke?.name}
      />
      <h3 className='Player1-name'>{poke?.name}</h3>
      <p>hp: {poke?.hp}</p>
      <BorderLinearProgress variant='determinate' value={poke?.hp * 10} />
      <p>attack: {poke?.attack}</p>
      <BorderLinearProgress variant='determinate' value={poke?.attack * 10} />
      <p>defense: {poke?.defense}</p>
      <BorderLinearProgress variant='determinate' value={poke?.defense * 10} />
      <p>Speed: {poke?.speed}</p>
      <BorderLinearProgress variant='determinate' value={poke?.speed * 10} />
    </div>
  )
}
