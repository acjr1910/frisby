import curry from '../curry'

const map = (fn, list) => list.map(fn)

export default curry(map)
