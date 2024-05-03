import Button from '@mui/material/Button'
import { useContext, useEffect, useState } from 'react'
import { BattleContext } from '../../context/battleContext.jsx'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { allPokemons } from '../../services/app-services.js'
import PokeCard from '../PokeCard/PokeCard.jsx'
import './List.css'

export default function List () {
  const { colecction, setColecction } = useContext(BattleContext)
  const [showMobilePokemons, setShowMobilePokemons] = useState(false)

  const getData = () => {
    allPokemons().then(e => setColecction(e.data))
  }
  const isMobile = useMediaQuery('(max-width: 1195px)')

  useEffect(() => {
    getData()
  }, [isMobile])

  return (
    <>
      {isMobile ? (
        <>
          <Button
            className='mobileButton'
            onClick={() => setShowMobilePokemons(!showMobilePokemons)}
          >
            Show Pokemons
          </Button>
          {showMobilePokemons ? (
            <div className='List'>
              {colecction?.map(pokemon => {
                return <PokeCard key={pokemon.id} pokemon={pokemon} />
              })}
            </div>
          ) : null}
        </>
      ) : (
        <div className='List'>
          {colecction?.map(pokemon => {
            return <PokeCard key={pokemon.id} pokemon={pokemon} />
          })}
        </div>
      )}
    </>
  )
}
