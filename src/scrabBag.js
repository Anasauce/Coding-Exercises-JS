'use strict'
const tiles = require('./tiles')
const readlineSync = require('readline-sync')

const yourTiles = tilesTaken => {
  const tilesCollection = tilesTaken.split('')
  return tilesCollection.reduce((uniqueTiles, tile) => {
    if (tile in uniqueTiles) {
      uniqueTiles[tile]++
    }
    else {
      uniqueTiles[tile] = 1
    }
    return uniqueTiles
  }, {} )
}

const scrabBag = ( tiles, uniqueTiles ) => {
  for ( const letter of Object.keys( uniqueTiles )) {
    for ( const key of Object.keys( tiles )) {
      if ( letter === key ) {
        tiles[key] = tiles[key] - uniqueTiles[letter]
      }
    }
  }
  console.log("Here are the tiles left in the scrabble bag!\n", tiles)
}

module.exports = {yourTiles, scrabBag}
