import curry from '../curry'

function reduce(fn, list, initial) {
  return list.reduce(fn, initial)
}

export default curry(reduce)
