'use strict'
const readlineSync = require('readline-sync')

const number = readlineSync.question('give me a number: \n')

const buildFibSequence = number => {
  let fibSequence = [1, 1], index = 2
  while( fibSequence[fibSequence.length - 1] < number ) {
    fibSequence.push(fibSequence[index - 2] + fibSequence[index - 1])
    index++
  }
  console.log(fibSequence[fibSequence.length - 2])
  return fibSequence
}

const fibSequence = buildFibSequence(number)

const convertToBase = ( number, fibSequence ) => {
  let decoder = number, baseNumberConstructor = ''
  for( let index = fibSequence.length - 2; index >= 0; index-- ) {
    baseNumberConstructor += (Math.floor(decoder / fibSequence[index]))
    decoder = decoder % fibSequence[index]
  }
  console.log(baseNumberConstructor)
}
console.log(convertToBase(number, fibSequence)

const baseToDecimal = ( baseNumber, fibSequence ) =>
