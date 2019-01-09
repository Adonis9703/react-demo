import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      isToggleOn: true
    }
    this.handleToggle = this.handleToggle.bind(this)
    App.handleClick = App.handleClick.bind(this)
  }
  
  handleToggle() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  static handleClick() {
    console.log(`11111`)
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
  tick() {
    this.setState({
      date: new Date()
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
          <h3 onClick={App.handleClick}>Click here</h3>
          <h3 onClick={this.handleToggle}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </h3>
        </header>
      </div>
    );
  }
}

export default App;
