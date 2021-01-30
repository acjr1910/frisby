import filter from './index'

describe('filter', () => {
  const programmer = (obj) => obj.profession === 'programmer'

  const employees = [
    { name: 'John', profession: 'teacher' },
    { name: 'Linus', profession: 'programmer' },
    { name: 'Pelé', profession: 'soccer player' },
    { name: 'Mark', profession: 'programmer' },
  ]

  it('should run curried filter(fn)(list)', () => {
    const programmersIn = filter(programmer)

    expect(programmersIn(employees)).toStrictEqual([
      { name: 'Linus', profession: 'programmer' },
      { name: 'Mark', profession: 'programmer' },
    ])
  })

  it('should run curried filter(fn, list)', () => {
    expect(filter(programmer, employees)).toStrictEqual([
      { name: 'Linus', profession: 'programmer' },
      { name: 'Mark', profession: 'programmer' },
    ])
  })
})
