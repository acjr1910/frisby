import curry from '../curry'

const reduce = (fn, list, initial) => list.reduce(fn, initial)

export default curry(reduce)
