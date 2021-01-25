export default function trace(tag) {
  return function traced(x) {
    console.log(tag, x)
    return x
  }
}
