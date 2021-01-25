import curry from '../curry'

function trace(tag, x) {
  console.log(tag, x)
  return x
}

export default curry(trace)
