import always from './index'

describe('always', () => {
  it('should return first argument', () => {
    expect(always('a')('b', 'c')).toBe('a')
  })
})
