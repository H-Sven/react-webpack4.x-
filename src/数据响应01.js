 import React from 'react'
 import ReactDOM from 'react-dom'
 function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      temperature: ''
    }
  }
  handleChange (e){
    this.setState({
      temperature:e.target.value
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.temperature} onChange={this.handleChange}></input>
        <BoilingVerdict celsius={this.state.temperature} />
      </div>
    );
  }
}
ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);