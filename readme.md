## First 
Ejecutar primero el backend y dejar escuchando en el puerto por defecto (:3000),
hay varias cosas a mejorar seguramente pero funciona bien.

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



