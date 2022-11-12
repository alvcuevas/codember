const separateUserInfoFromTextLine = (line) => {
    return line.replaceAll('\n', ' ').split(' ')
}

const parseUserInfo = (userInfo) => {
    const parsedUserInfo = {}

    userInfo.forEach(info => {
      const [key, value] = info.split(':')
      parsedUserInfo[key] = value
    })

    return parsedUserInfo
}

const validateUser = (userInfo) => {
    const requiredFields = ['usr','eme','psw','age','loc','fll']
    const userFields = Object.keys(userInfo)
    const isValidUser = requiredFields.every(requiredField => userFields.includes(requiredField))
    return { ...userInfo, isValidUser }
}

module.exports = {
    separateUserInfoFromTextLine,
    parseUserInfo,
    validateUser,
}