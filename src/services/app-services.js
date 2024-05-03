import axios from 'axios'
const baseURL = 'http://localhost:3000' //DUMMY //inportar desde env, lo dejo asi por fines practicos y no subir el env a github

function DoFigth (playerPokemon, enemy) {
  const url = `${baseURL}/pokemons/battle?player=${playerPokemon}&enemy=${enemy}`
  return axios({
    url: url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
function allPokemons () {
  return axios({
    url: `${baseURL}/pokemons/`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export { DoFigth, allPokemons }

