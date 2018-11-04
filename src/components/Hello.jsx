import React from 'react'

export default  function Hello(props) {
  console.log(props);
  return (
    <div>
      {/* <span>{props.dog.name}</span>
      <span>{props.dog.age}</span>
      <span>{props.dog.gender}</span> */}
      <span>{props.name}</span>
      <span>{props.age}</span>
      <span>{props.gender}</span>
    </div>
  )
}





