import curry from '../curry'

const filter = (fn, list) => list.filter(fn)

export default curry(filter)
