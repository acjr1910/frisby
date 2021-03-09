import either from './index'
import left from '../left'
import { Either } from '@frisby/types'

describe('either', () => {
  it('should run right fn', () => {
    const three = Either.of(3)
    let result = either(
      () => null,
      (v) => v,
      three
    )
    expect(result).toBe(3)

    const nValue = Either.of(null)
    result = either(
      () => null,
      (v) => v,
      nValue
    )
    expect(result).toBe(null)
  })

  it('should run left fn', () => {
    const nullable = left(null)
    const result = either(
      () => 'nullable value',
      (v) => v,
      nullable
    )
    expect(result).toBe('nullable value')
  })
})
