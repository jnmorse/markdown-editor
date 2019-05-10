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
    text: initialMarkdown,
    html: { __html: marked(initialMarkdown) }
  }

  handleChange(event) {
    const { value } = event.target
    this.setState({
      text: value,
      html: { __html: marked(value) }
    })
  }

  render() {
    const { text, html } = this.state

    return (
      <>
        <EditorNav />
        <div className={styles.container}>
          <Editor
            text={text}
            handleChange={event => this.handleChange(event)}
            autoFocus
          />

          <Preview html={html} />
        </div>
      </>
    )
  }
}

export default App
