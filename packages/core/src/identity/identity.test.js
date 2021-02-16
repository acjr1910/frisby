import identity from './index'

describe('identity', () => {
  it('should return identity value', () => {
    expect(identity('hello')).toBe('hello')
  })
})
