import React from 'react'

function Container(props) {
  const checkChildren = (props.children) ? props.children : <div><h2>{props.title}</h2></div>

  return (
    <div className="content-container">
      {checkChildren}
    </div>
  )
}

export default Container
