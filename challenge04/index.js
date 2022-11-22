const { validatePassword } = require('./utils.js')

const init = 11098
const limit = 98123
const validPasswords = []

for (let i = init; i < limit; i++) {
  if (validatePassword(i)) validPasswords.push(i)
}

const solution = `submit ${validPasswords.length}-${validPasswords[55]}`
console.log(solution)
