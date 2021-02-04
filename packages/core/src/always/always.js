import { curry } from '../curry'

function always(a, b) {
  return a
}

export default curry(always)
