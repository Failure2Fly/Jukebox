const getLetter = require('../index')

test('Check button letter is saved', () => { 
    expect(getLetter('A')).toBe('A'),
    expect(getLetter('F')).toBe('F'),
    expect(getLetter('D')).toBe('D'),
    expect(getLetter('H')).toBe('H')
})


