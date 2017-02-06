const readlineSync = require('readline-sync')

const collectionOfWords = readlineSync.question('Write a funny sentence\n')
const newCollection = collectionOfWords.split(' ')
const index = readlineSync.question(`pick a number between 1 and ${newCollection.length}?\n`)

const stringIndices = ( newCollection, index ) => {
  return index > newCollection.length || index <= 0
  ? ''
  : newCollection[index - 1]
}

console.log(stringIndices( newCollection, index ))
