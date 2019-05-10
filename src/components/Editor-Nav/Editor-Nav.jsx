import React from 'react'

import styles from './editor-styles.module.css'

const EditorNav = () => (
  <nav className={styles.root}>
    <ul>
      <li>
        <label htmlFor="editor">Editor</label>
      </li>

      <li>
        <a href="#preview">Preview</a>
      </li>
    </ul>
  </nav>
)

export default EditorNav
