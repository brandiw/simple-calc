import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      num1: '',
      num2: '',
      answer: '',
      error: ''
    };
  }

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value});
  }

  add = () => {
    if(this.state.num1 && this.state.num2){
      let answer = Number(this.state.num1) + Number(this.state.num2);
      this.setState({ answer: answer, num1: '', num2: '', error: ''});
    }
    else {
      this.setState({ answer: '', num1: '', num2: '', error: 'You messed up somehow...'});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          OH LOOK AT MY CALCULATOR!
        </header>
        <div>
          <h3 className="red">{this.state.error}</h3>
          <h2>Num 1</h2>
          <input type="number"
             name="num1"
             placeholder="Enter your first number"
             value={this.state.num1}
             onChange={ (e) => this.setNum(e, 'num1') }
          />
          <h2>PLUS Num 2</h2>
          <input type="number"
             name="num2"
             placeholder="Enter your second number"
             value={this.state.num2}
             onChange={ (e) => this.setNum(e, 'num2') }
          />
          <br />
          <button onClick={this.add}>EQUALS!!!</button>
          <h2>==================</h2>
          <h3>{this.state.answer}</h3>
        </div>
      </div>
    );
  }
}

export default App;
