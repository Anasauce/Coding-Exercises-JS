'use strict'
const tiles = require('./tiles')
const readlineSync = require('readline-sync')
const { yourTiles, scrabBag } = require('./scrabBag')

const yourTurn = ['BCEED_F', 'AXYREAS', 'E_KIEUM']

console.log("Hi let's play scrabble! \n Here are the tiles in your scrabblebag!)\n", tiles)
console.log("Here are your first seven tiles: BCEED_F")

const turn1 = readlineSync.question('ok play a word, hit enter when you are done: ')
yourTiles(yourTurn[0])
scrabBag(tiles, yourTiles(yourTurn[0]))

console.log("Awesome! Are you ready to play again? Here are you next 7 tiles: AXYREAS")
const turn2 = readlineSync.question('ok play a word, hit enter when you are done: ')
yourTiles(yourTurn[1])
scrabBag(tiles, yourTiles(yourTurn[1]))

console.log("Here is you last turn, these are your last 7 tiles: E_KIEUM")
const tilesNext = readlineSync.question('ok play a word, hit enter when you are done: ')
yourTiles(yourTurn[2])
scrabBag(tiles, yourTiles(yourTurn[2]))

console.log("Thanks for playing!")
