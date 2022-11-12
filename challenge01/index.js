const { separateUserInfoFromTextLine, parseUserInfo, validateUser } = require('./utils.js')
const file = require('fs').readFileSync('challenge01/users.txt', 'utf-8');

const validUsersList = file
  .split('\n\n')
  .map(textLine => separateUserInfoFromTextLine(textLine))
  .map(userInfo => parseUserInfo(userInfo))
  .map(parsedUser => validateUser(parsedUser))
  .filter(userInfo => userInfo.isValidUser)

const solution = `submit ${validUsersList.length}${validUsersList.at(-1).usr}`
console.log(solution)
  