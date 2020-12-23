import React from "react";

// function Clock(prop) {
//   return(
//     <div>{ prop.date.toLocaleString() }</div>
//   );
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  // 组件挂载时
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  // 组件卸载时
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>{ this.state.date.toLocaleString() }</div>
    )
  }
}




export default Clock;
