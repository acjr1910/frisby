function curry(fn) {
  const arity = fn.length
  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args)
    }
    // eslint-disable-next-line no-useless-call
    return fn.call(null, ...args)
  }
}

export default curry
