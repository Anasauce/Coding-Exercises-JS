const readlineSync = require('readline-sync');

const stringString = readlineSync.question('Write a funny sentence\n');
const stringArray = stringString.split('');
const goAwayCharacters = /[aeiou|\s]/;
for (let index = 0; index < stringArray.length; index++) {
  if (goAwayCharacters.test(stringArray[index])) {
    stringArray.splice(index, 1);
    index--;
  }
}
console.log(newString = stringArray.join(''));