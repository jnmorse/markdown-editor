import React from 'react'

const Editor = ({ text, handleChange, view, ...props }) => {
  return (
    <textarea
      className={view ? 'show' : 'hide'}
      id="editor"
      {...props}
      value={text}
      onChange={handleChange}
    />
  )
}

export default Editor
