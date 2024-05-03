import List from '../List/List.jsx'
import './PokeList.css'
export default function PokeList () {
  return (
    <div className='PokeList'>
      <h1 className='PokeListH1'>Battle of Pokemon</h1>
      <h2 className='PokeListH2'>Select your pokemon</h2>
      <List />
    </div>
  )
}
