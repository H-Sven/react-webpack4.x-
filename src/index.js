 import React from 'react'
 import ReactDOM from 'react-dom'

const dog = {
  name:'大黄',
  age:100,
  gender:'1'
}

 function Hello(props) {
   console.log(props);
  return (
    <div>
      <span>{props.dog.name}</span>
      <span>{props.dog.age}</span>
      <span>{props.dog.gender}</span>
    </div>
  )
 }
 ReactDOM.render(<Hello dog={dog} ></Hello>,document.getElementById('app'))
 