## First 
Se podrian implementar varias mejoras como tipos de pokemon o incluir directamente la PokeApi, agegar algun espiner, lazy loading, etc, pero no me quise extenser en el tiempo de entrega.

Ejecutar primero el backend y dejar escuchando en el puerto por defecto (:3000),
al entrar en la app viene por defecto sin seleccionar pokemons,
el componente PokeList llama al servicio que lista todos
al seleccionar un pokemon se asigna automaticamente uno distinto como contrincante.
al ejecutar la pelea se envian solo los IDs de cada uno, en la api recupera la info mediante la id y ejecuta el battleSystem,
responde los resultados

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
# watch mode
$ npm run build
```



