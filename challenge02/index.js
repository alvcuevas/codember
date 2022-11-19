const { decryptWord } = require('./utils')
const encryptedFile = require('fs').readFileSync(
  'challenge02/encrypted.txt',
  'utf-8'
)

const encryptedWords = encryptedFile.split(' ')
const decryptedWords = encryptedWords.map((word) => decryptWord(word))

const solution = `submit ${decryptedWords.join(' ')}`
console.log(solution)
