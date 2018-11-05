 import React from 'react'
 import ReactDOM from 'react-dom'
 class Clock extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      date:new Date(),
      isToggleOn:false
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
  handleClick(index){
    this.setState({isToggleOn:!this.state.isToggleOn})
  }
  render(){
    return (
       <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
 