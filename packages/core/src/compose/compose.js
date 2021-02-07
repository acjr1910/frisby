const compose = (...fns) => (result) => {
  fns.reverse().forEach((fn) => {
    result = fn(result)
  })
  return result
}

export default compose
