import { curry } from '@frisby/core'

/**
 * Reduces an object (HashMap)
 * @param {(acc,curr) => {}} reducerFn - Reducer function
 * @param {Object} initialValue - Reducer initial value
 * @param {Object} objToReduce - Object to be reduced
 */
function reduceObj(reducerFn, initialValue, objToReduce) {
  let result = initialValue
  const keys = Object.keys(objToReduce)
  keys.map((key) => (result = reducerFn(result, objToReduce[key])))
  return result
}

export default curry(reduceObj)
