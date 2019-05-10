import React from 'react'

import styles from './Editor.module.css'

const Editor = ({ text, handleChange, ...props }) => {
  return (
    <textarea
      className={styles.root}
      id="editor"
      {...props}
      value={text}
      onChange={handleChange}
    />
  )
}

export default Editor
