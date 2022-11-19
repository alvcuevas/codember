const decryptWord = (encryptedWord) => {
  let decryptedWord = ''

  for (let i = 0; i < encryptedWord.length; i++) {
    if (encryptedWord[i] === '9') {
      const unicode = parseInt(`${encryptedWord[i]}${encryptedWord[i + 1]}`)
      decryptedWord += String.fromCharCode(unicode)
      i++
    }
    if (encryptedWord[i] === '1') {
      const unicode = parseInt(
        `${encryptedWord[i]}${encryptedWord[i + 1]}${encryptedWord[i + 2]}`
      )
      decryptedWord += String.fromCharCode(unicode)
      i += 2
    }
  }

  return decryptedWord
}

module.exports = {
  decryptWord,
}
