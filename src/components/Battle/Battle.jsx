import Button from '@mui/material/Button'
import { useContext } from 'react'
import { BattleContext } from '../../context/battleContext'
import { DoFigth } from '../../services/app-services'
import Enemy from '../Enemy/Enemy'
import Player1 from '../Player1/Player1'
import './Battle.css'
export default function Battle () {
  const { playerPokemon, enemy, setWin, setResponse } =
    useContext(BattleContext)
  const handleFigth = () => {
    DoFigth(playerPokemon, enemy).then(res => {
      setWin(res?.data?.winner)
      setResponse(JSON.stringify(res?.data))
    })
  }

  return (
    <div className='Battle'>
      <Player1 />
      <Button
        onClick={() => handleFigth()}
        color='success'
        variant='contained'
        className='Button'
      >
        Start Battle
      </Button>
      <Enemy />
    </div>
  )
}
