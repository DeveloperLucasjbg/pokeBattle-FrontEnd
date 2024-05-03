import { useContext } from 'react'
import { BattleContext } from '../../context/battleContext'
import './Status.css'

export default function Status () {
  const { win } = useContext(BattleContext)
  return (
    <div className='fixed'>
      {win === null ? (
        <h2 className='status'>Ready to battle</h2>
      ) : win === 'player' ? (
        <h2 className='status'>{win.toUpperCase()} WINS!</h2>
      ) : (
        <h2 className='status'>{win.toUpperCase()} WINS! </h2>
      )}
    </div>
  )
}
