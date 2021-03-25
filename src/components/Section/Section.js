import React from 'react'

function Section(props) {
  return (
    <div className="section">
      <h2 className="section__title">{props.title}</h2>
      {props.children}
    </div>
  )
}

export default Section
