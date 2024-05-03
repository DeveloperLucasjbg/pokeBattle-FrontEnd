export default function diferentThanChoose (id, db) {
  const filtered = db?.filter(pokemon => pokemon.id != id)
  return filtered[Math.floor(Math.random() * filtered.length)].id
}
