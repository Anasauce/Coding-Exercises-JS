const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const generateGuessNumber = Math.floor( Math.random() * 100 ) + 1

const responseTooHigh = 'You answer was higher than'
const responseTooLow = 'You answer was lower than'

rl.question('Pick a number between 1 and 100\n', answer => {
  rl.close()
  if (answer.toString().toLowerCase() === 'exit') {
    return
  }
  answer = Number(answer)
  const comparison = answer < generateGuessNumber
    ? 'lower than'
    : answer > generateGuessNumber
      ? 'higher than'
      : 'the same as'
  console.log(`Your answer is ${comparison} ${generateGuessNumber}`)
})
