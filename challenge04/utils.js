const validatePassword = (password) => {
  const numbers = password.toString().split('')
  const hasCorrectLength = numbers.length === 5
  const hasFiveRepeated = numbers.filter((num) => num === '5').length >= 2
  const hasAscendantNumbers = numbers.every((currentNum, i) => {
    const previousNum = numbers[i - 1] || 0
    return Number(previousNum) <= Number(currentNum)
  })

  return hasCorrectLength && hasFiveRepeated && hasAscendantNumbers
}

module.exports = {
  validatePassword,
}
