 import React from 'react'
 import ReactDOM from 'react-dom'

// 未对webpack进行配置的话，不能省略.jsx后缀
//  import Hello from './components/Hello.jsx'
 import Hello from '@/components/Hello'

const dog = {
  name:'大黄',
  age:100,
  gender:'公'
}

// 组件通过props接收传递的数据 eg:props只读，不能被重新赋值
//  function Hello(props) {
//    console.log(props);
//   return (
//     <div>
//       {/* <span>{props.dog.name}</span>
//       <span>{props.dog.age}</span>
//       <span>{props.dog.gender}</span> */}
//       <span>{props.name}</span>
//       <span>{props.age}</span>
//       <span>{props.gender}</span>
//     </div>
//   )
//  }
//  通过props向组件传递数据
//  ReactDOM.render(<Hello dog={dog} ></Hello>,document.getElementById('app'))
//  ReactDOM.render(<Hello name={dog.name} age={dog.age} gender={dog.gender} ></Hello>,document.getElementById('app'))
 ReactDOM.render(<Hello {...dog}></Hello>,document.getElementById('root'))
 