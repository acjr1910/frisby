import Maybe from './Maybe'

describe('Maybe', () => {
  it('should be a Pointed Functor', () => {
    expect(typeof Maybe.of).toBe('function')
  })

  it('should be a Monad', () => {
    expect(Maybe.of(3).chain((three) => three)).toBe(3)
  })

  //   it('should be an Applicative Functor', () => {
  //     expect(Maybe.of(3).chain((three) => three)).toBe(3)
  //   })

  // test join, sequence, traverse

  it('isJust should be true from non-nullable values', () => {
    expect(Maybe.of(3).isJust).toBe(true)
    expect(Maybe.of('str').isJust).toBe(true)
    expect(Maybe.of([1, 2, 3]).isJust).toBe(true)
    expect(Maybe.of({ name: 'Maybe Type' }).isJust).toBe(true)
  })

  it('isJust should be false from nullable values', () => {
    expect(Maybe.of(null).isJust).toBe(false)
    expect(Maybe.of(undefined).isJust).toBe(false)
  })

  it('isNothing should be true from nullable values', () => {
    expect(Maybe.of(null).isNothing).toBe(true)
    expect(Maybe.of(undefined).isNothing).toBe(true)
  })

  it('isNothing should be false from non-nullable values', () => {
    expect(Maybe.of(3).isNothing).toBe(false)
    expect(Maybe.of('str').isNothing).toBe(false)
    expect(Maybe.of([1, 2, 3]).isNothing).toBe(false)
    expect(Maybe.of({ name: 'Maybe Type' }).isNothing).toBe(false)
  })
})
