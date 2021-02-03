import { curry } from '@frisby/core'

function pathOr(or = '', arrPath, obj) {
  if (!arrPath.length || !obj) return or || ''

  return arrPath.reduce((accObj, value) => {
    if (typeof accObj === 'object' && value in accObj) {
      if (accObj[value] === undefined) return or
      return accObj[value]
    }
    return or
  }, obj)
}

export default curry(pathOr)
