export default function findPokeById (id, db) {
  return db?.find(pokemon => pokemon.id == id)
}
