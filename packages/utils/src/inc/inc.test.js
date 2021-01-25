import inc from './inc'

describe('inc', () => {
  it('should increment by 1', () => {
    expect(inc(1)).toBe(2)
  })

  it('should return not number value', () => {
    expect(inc('str')).toBe('str')
  })
})
