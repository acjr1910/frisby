import pipe from './index'

describe('pipe', () => {
  it('should evaluate functions from left to right', () => {
    const joinString = (str) => str.join('')
    const splitString = (str) => str.split('')
    const reverseString = (str) => str.reverse()
    const uppercaseString = (str) => str.toUpperCase()

    const result = pipe(
      splitString,
      reverseString,
      joinString,
      uppercaseString
    )('Hello World!')

    expect(result).toBe('!DLROW OLLEH')
  })
})
