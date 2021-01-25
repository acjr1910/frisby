import curry from '../curry'

function filter(fn, list) {
  return list.filter(fn)
}

export default curry(filter)
