import { Maybe } from '@frisby/types'
import maybe from './index'

describe('maybe', () => {
  it('should return default value without errors', () => {
    const m = Maybe.of(null)
    m.map((e) => e + 4)
    const defaultValue = 5
    const mapper = (v) => v.toUpperCase()
    const value = maybe(defaultValue, mapper, m)
    expect(value).toBe(5)
  })

  it('should return mapped value', () => {
    const mon = Maybe.of(4).map((e) => e + 2)
    const defaultValue = 'string'
    const add8 = (v) => v + 8
    const value = maybe(
      defaultValue,
      add8,
      mon.map((e) => e + 2).map((e) => e + 2)
    )
    expect(value).toBe(18)
  })
})
