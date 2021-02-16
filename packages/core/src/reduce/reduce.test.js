import reduce from './index'

describe('reduce', () => {
  const sumReducer = (acc, curr) => {
    return acc + curr
  }
  it('should reduce in curried form', () => {
    const result = reduce(sumReducer, [1, 2, 3, 4], 0)
    expect(result).toBe(10)
  })
})
