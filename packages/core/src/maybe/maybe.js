import curry from '../curry'

const maybe = (v, f, m) => {
  if (m.isNothing) return v
  return f(m.$value)
}

export default curry(maybe)
