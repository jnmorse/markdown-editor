import { linkRenderer } from './linkRenderer'

test('it return and external link', () => {
  const url = 'https://github.com/'
  const text = 'GitHub'
  const link = linkRenderer(url, text, text)

  const div = document.createElement('div')
  div.innerHTML = link

  const [ linkOutput ] = div.childNodes

  expect(linkOutput).toMatchObject({
    href: url,
    target: '_blank',
    rel: 'noopener noreferer'
  })

  expect(linkOutput.title).toBe(text)
})

test('it return a non-external link', () => {
  const url = "#test"
  const text = "test"

  const link = linkRenderer(url, null, text)

  const div = document.createElement('div')
  div.innerHTML = link

  const [ linkOuput ] = div.childNodes

  expect(linkOuput).toMatchObject({ href: expect.stringContaining(url) })

  expect(linkOuput).not.toMatchObject({ target: '_blank' })
})