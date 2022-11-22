const validatePassword = (password) => {
  const numbers = password.toString().split('')
  const hasCorrectLength = numbers.length === 5
  const hasFiveRepeated = numbers.filter((num) => num === '5').length >= 2
  const hasAscendantNumbers =
    numbers[0] <= numbers[1] &&
    numbers[1] <= numbers[2] &&
    numbers[2] <= numbers[3] &&
    numbers[3] <= numbers[4]

  return hasCorrectLength && hasFiveRepeated && hasAscendantNumbers
}

module.exports = {
  validatePassword,
}
