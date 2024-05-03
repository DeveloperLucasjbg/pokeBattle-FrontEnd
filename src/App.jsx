import './App.css'
import Battle from './components/Battle/Battle'
import PokeList from './components/PokeList/PokeList'
import Status from './components/Status/Status'
import BattleProvider from './context/battleContext'

function App () {
  return (
    <div className='main'>
      <BattleProvider>
        <PokeList />
        <span className='line'></span>
        <Battle />
        <Status />
      </BattleProvider>
    </div>
  )
}

export default App
