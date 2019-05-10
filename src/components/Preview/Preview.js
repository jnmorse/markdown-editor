import React from 'react'

const Preview = ({ html, view }) => (
  <div id="preview" className={view ? 'show' : 'hide'} dangerouslySetInnerHTML={html} />
)

export default Preview
