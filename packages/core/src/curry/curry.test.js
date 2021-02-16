import curry from './index'

describe('curry', () => {
  it('should curry sumOf3(a, b, c) function', () => {
    const sumOf3 = (a, b, c) => a + b + c
    const curriedFn = curry(sumOf3)(1)
    const result = curriedFn(2)
    expect(result(3)).toBe(6)
  })

  it('should curry concatStr(str1, str2) function', () => {
    const concatStr = (str1, str2) => str1 + ' ' + str2
    const curriedFn = curry(concatStr)
    const helloWorld = curriedFn('Hello')
    const result = helloWorld('World!')
    expect(result).toBe('Hello World!')
  })
})
