import curry from '../curry'

const trace = (tag, x) => {
  console.log(tag, x)
  return x
}

export default curry(trace)
