import React, { Component } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'

import './styles.css'
import 'highlight.js/styles/github.css'

import initialMarkdown from './initialMarkdown.md'


import EditorNav from './components/Editor-Nav'
import Editor from './components/Editor'
import Preview from './components/Preview'
import linkRenderer from './lib/linkRenderer'

import styles from './App.module.css'
import 'highlight.js/styles/dracula.css'

localStorage.setItem('project_selector', 'markdown-previewer')

marked.setOptions({
  gfm: true,
  tables: true,
  mangle: true,
  langPrefix: 'hljs langauge-',
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  },
  renderer: linkRenderer
})

class App extends Component {
  state = {
    text: '',
    html: { __html: marked('') },
    view: 'editor',
    disableNav: window.innerWidth > 700 ? true : false
  }

  async loadData() {
    const request = await fetch(initialMarkdown)
    const markDown = await request.text()

    this.setState({
      text: markDown,
      html: { __html: marked(markDown) }
    })
  }

  componentDidMount() {
    this.loadData()
    window.addEventListener('resize', event => this.handleResize(event))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', event => this.handleResize(event))
  }

  handleResize(event) {
    const { innerWidth: windowWidth } = event.target

    if (windowWidth > 700) {
      return this.setState({
        disableNav: true
      })
    }

    return this.setState({
      disableNav: false,
      view: 'editor'
    })
  }

  handleChange(event) {
    const { value } = event.target
    this.setState({
      text: value,
      html: { __html: marked(value) }
    })
  }

  handleToggleShow(view) {
    this.setState({
      view
    })
  }

  render() {
    const { text, html, view, disableNav } = this.state

    return (
      <>
        <header>
          <h1>Markdown Previewer</h1>
        </header>

        <EditorNav disable={disableNav} handleToggleShow={(view) => this.handleToggleShow(view)} />

        <div className={styles.container}>
          <Editor
            text={text}
            view={view === 'editor'}
            handleChange={event => this.handleChange(event)}
          />

          <Preview html={html} view={view === 'preview'} />
        </div>

        <footer>
          <small>&copy; 2019; Joseph Morse <a href="https://github.com/jnmorse">GitHub</a></small>
        </footer>
      </>
    )
  }
}

export default App
