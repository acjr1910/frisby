import curry from '../curry'

const either = curry((f, g, e) => {
  if (e.isLeft) {
    return f(e.$value)
  }

  return g(e.$value)
})

export default either
