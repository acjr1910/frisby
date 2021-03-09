import left from './index'

describe('left', () => {
  it('should be a Left', () => {
    const v = left(null)
    expect(v.isLeft).toBe(true)
  })

  it('should not throw errors mapping over nullable value', () => {
    const v = left(null)
      .map((e) => e.key)
      .map((e) => e.label)
    expect(v.isLeft).toBe(true)
    expect(v.isRight).toBe(false)

    const s = left(undefined)
      .map((e) => e.key)
      .chain((e) => e.label)
    expect(s.isLeft).toBe(true)
    expect(s.isRight).toBe(false)

    const r = left(null)
      .chain((e) => e)
      .join((e) => e)
    expect(r.isLeft).toBe(true)
    expect(r.isRight).toBe(false)
  })
})
