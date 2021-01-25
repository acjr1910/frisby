import map from './index'

describe('map', () => {
  const add2 = (el) => el + 2
  const elements = [2, 4, 6, 8, 10]

  it('should run curried map(fn)(list)', () => {
    expect(map(add2)(elements)).toStrictEqual([4, 6, 8, 10, 12])
  })

  it('should run curried map(fn, list)', () => {
    expect(map(add2, elements)).toStrictEqual([4, 6, 8, 10, 12])
  })
})
