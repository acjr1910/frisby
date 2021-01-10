import pathOr from './index'

const obj = {
  name: {
    firstName: 'Josh',
    lastName: 'Santos',
  },
  age: 30,
  address: {
    city: {
      currentlyLiving: 'São Paulo',
    },
  },
}

describe('pathOr', () => {
  it(`Should return empty string pathOr('', ['size'], obj)`, () => {
    const value = pathOr('', ['size', obj])
    expect(value).toBe('')
  })

  it(`Should return 29 number pathOr('', ['age'], obj)`, () => {
    const value = pathOr('', ['age'], obj)
    expect(value).toBe(obj.age)
  })

  it(`Should return firstName string pathOr('', ['name', 'firstName'], obj)`, () => {
    const value = pathOr('', ['name', 'firstName'], obj)
    expect(value).toBe(obj.name.firstName)
  })

  it(`Should return currentlyLiving string pathOr('', ['address', 'city', 'currentlyLiving'], obj)`, () => {
    const value = pathOr('', ['address', 'city', 'currentlyLiving'], obj)
    expect(value).toBe(obj.address.city.currentlyLiving)
  })

  it(`Should return 'Rio de Janeiro' string pathOr('Rio de Janeiro', ['address', 'state', 'currentlyLiving'], obj)`, () => {
    const value = pathOr(
      'Rio de Janeiro',
      ['address', 'state', 'currentlyLiving'],
      obj
    )
    expect(value).toBe('Rio de Janeiro')
  })

  it(`Should return 'empty' string pathOr('empty', ['address', 'state'])`, () => {
    const value = pathOr('empty', ['address', 'state'])
    expect(value).toBe('empty')
  })
})
