import curry from '../curry'

function map(fn, list) {
  return list.map(fn)
}

export default curry(map)
