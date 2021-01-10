import omit from './index'

describe('omit', () => {
  it('should return obj without given prop name', () => {
    const user = {
      firstname: 'First',
      lastname: 'Last',
    }

    const result = omit(user, 'firstname')

    expect(result).toStrictEqual({ lastname: 'Last' })
  })
})
