export default function compose(...fns) {
  return function composed(result) {
    fns.reverse().forEach((fn) => {
      result = fn(result)
    })
    return result
  }
}

// faster alternative;
// export function compose2(...fns) {
//   let lastFnNdx = fns.length - 1

//   return function composedFn(result) {
//     if (!fns) return result

//     if (lastFnNdx < 1) return fns[0](result)

//     const lastFnIndex = lastFnNdx
//     lastFnNdx--

//     return composedFn(fns[lastFnIndex](result))
//   }
// }
