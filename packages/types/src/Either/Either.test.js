import Either from './Either'

describe('Either', () => {
  it('should be a Pointed Functor', () => {
    expect(typeof Either.of).toBe('function')
  })

  it('should be a Monad', () => {
    expect(Either.of(3).chain((three) => three)).toBe(3)
  })

  it('should be a Right', () => {
    const f = Either.of(3)
    expect(f.isRight).toBe(true)
    expect(f.isLeft).toBe(false)
  })
})
