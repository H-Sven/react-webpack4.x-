 import React from 'react'
 import ReactDOM from 'react-dom'
 class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
    }
  }
//   组件挂载
  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.tick()
    },1000)
  }
//   组件卸载
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render(){
    return (
       <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
 