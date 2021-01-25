import trace from './index'

describe('trace', () => {
  it('should trace(console) and continue piping', () => {
    const tracedValue = trace('tracedValue')
    console.log = jest.fn()
    expect(tracedValue(3)).toBe(3)
    expect(console.log.mock.calls[0][0]).toBe('tracedValue')
    expect(console.log.mock.calls[0][1]).toBe(3)
  })
})
