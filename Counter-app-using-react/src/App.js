import React, { Component } from 'react';
// import logo from './logo.svg';
import FirstComponent, { ThirdComponent, FourthComponent } from './components/learning-examples/FirstComponent'
import './App.css';
import SecondComponent  from './components/learning-examples/SecondComponent';
import Counter from './components/Counter/Counter';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}
//Learning Component 

class LearningComponent extends Component{
  render() {
    return (
      <div className="LearningComponent">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
          <h1>LearningComponent</h1>
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
          <FourthComponent></FourthComponent>
          <FuncComponent></FuncComponent>
      </div>
    );
  }
}

//function components
function FuncComponent (){
  return (
    <div className="FuncComponent">
      <h1>FuncComponent</h1>
    </div>
  );
}
export default App;


