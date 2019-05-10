import React from 'react'

import styles from './editor-styles.module.css'

const EditorNav = ({ handleToggleShow, disable }) => {
  return(
    <nav className={styles.root}>
      <ul>
        <li>
          <button disabled={disable} type="button" onClick={() => handleToggleShow('editor')}>Editor</button>
        </li>

        <li>
          <button disabled={disable} type="button" onClick={() => handleToggleShow('preview')}>Preview</button>
        </li>
      </ul>
    </nav>
  )
}

export default EditorNav
