import React from 'react'

const Preview = ({ html }) => (
  <div id="preview" tabIndex="2" dangerouslySetInnerHTML={html} />
)

export default Preview
