import reduceObj from './index'

describe('reduceObj', () => {
  it('should reduce an object. accumulating only props that have isActive set to true', () => {
    const objToReduce = {
      firstName: {
        isActive: true,
        value: 'first',
      },
      lastName: {
        isActive: true,
        value: 'last',
      },
      address: {
        isActive: false,
        street: 'street',
        number: 1,
      },
    }

    const result = reduceObj(
      (acc, curr) => {
        if (curr.isActive) return { ...acc, [curr.value]: curr }
        return acc
      },
      {},
      objToReduce
    )

    const expectedObj = {
      first: { isActive: true, value: 'first' },
      last: { isActive: true, value: 'last' },
    }

    expect(result).toStrictEqual(expectedObj)
  })
})
