import marked from 'marked'

const Renderer = new marked.Renderer()

Renderer.link = (href, title, string) => {
  title = title || ''

  return `<a target="_blank" rel="noopener noreferer" href="${href}" title="${title}">${string}</a>`
}

export default Renderer
