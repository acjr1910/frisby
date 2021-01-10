export default function reduceObj(reducerFn, initialValue, o) {
  let result = initialValue
  const keys = Object.keys(o)
  keys.map((key) => (result = reducerFn(result, o[key])))
  return result
}
