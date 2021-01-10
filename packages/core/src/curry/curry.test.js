import curry from './index'

describe('curry', () => {
  it('should curry sum function with 3 args', () => {
    function sumOf3(a, b, c) {
      return a + b + c
    }

    const curriedFn = curry(sumOf3)
    curriedFn(1)
    curriedFn(2)
    const result = curriedFn(3)

    expect(result).toBe(6)
  })

  it('should curry function with 2 args', () => {
    function concatStr(str1, str2) {
      return str1 + ' ' + str2
    }

    const curriedFn = curry(concatStr)
    curriedFn('Hello')
    const result = curriedFn('World!')

    expect(result).toBe('Hello World!')
  })
})
