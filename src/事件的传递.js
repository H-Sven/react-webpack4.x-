 import React from 'react'
 import ReactDOM from 'react-dom'
 class Popper extends React.Component{
  constructor(){
    super();
    this.state = {name:'Hello world!'};
  }
  
  preventPop(name,age, e){//事件对象e要放在最后
      e.preventDefault();
      console.log(name);
      console.log(age);
  }
  
  render(){
      return (
          <div>
              <p>hello</p>
              {/* Pass params via bind() method. */}
              <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name,18)}>Click</a>
          </div>
      );
  }
}
ReactDOM.render(
    <Popper />,
    document.getElementById('root')
  );
 