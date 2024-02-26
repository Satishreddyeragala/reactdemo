import React from 'react'

const Com = (props) => {
  return (
    <div>
        <p>{props.data.name}</p>
        <p>{props.data.age}</p>
        <p>{props.data.dept}</p>
    </div>
  )
}
export default Com