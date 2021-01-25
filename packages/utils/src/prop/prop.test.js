import prop from './index'

describe('prop', () => {
  const obj = {
    username: 'Junior',
  }
  it('should return obj property', () => {
    expect(prop('username', obj)).toBe('Junior')
  })
  //   it('should return obj property in curried form', () => {
  //     expect(prop('username')(obj)).toBe('Junior')
  //   })
})
