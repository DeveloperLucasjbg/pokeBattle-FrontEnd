import { createContext, useState } from 'react'

export const BattleContext = createContext(null)

const BattleProvider = ({ children }) => {
  const [playerPokemon, setPlayerPokemon] = useState('pokemon-1')
  const [enemy, setEnemy] = useState('pokemon-2')
  const [win, setWin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [colecction, setColecction] = useState([])
  const [response, setResponse] = useState(null)

  return (
    <BattleContext.Provider
      value={{
        playerPokemon,
        setPlayerPokemon,
        enemy,
        setEnemy,
        loading,
        setLoading,
        win,
        setWin,
        colecction,
        setColecction,
        response,
        setResponse
      }}
    >
      {children}
    </BattleContext.Provider>
  )
}

export default BattleProvider
