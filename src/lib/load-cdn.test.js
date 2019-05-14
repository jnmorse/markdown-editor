import loadCDN from './load-cdn'

test('should create a script elment', () => {
  expect(loadCDN.nodeName).toBe('SCRIPT')
})

test('should point to the freeCodeCamp CDN', () => {
  expect(loadCDN.src).toBe('https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js')
})