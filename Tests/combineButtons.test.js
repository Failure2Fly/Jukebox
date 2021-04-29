const combineButtons = require('../index')

test('Checking if whether both flowers are even or not', () => { 
    expect(combineButtons('A', 2)).toBe('A2'),
    expect(combineButtons('F', 6)).toBe('F6'),
    expect(combineButtons('D', 3)).toBe('D3'),
    expect(combineButtons('H', 8)).toBe('H8')
})
