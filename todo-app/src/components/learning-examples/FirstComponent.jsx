import React, { Component } from 'react';
// class components
class FirstComponent extends Component {
    render() {
      return (
        <div className="FirstComponent">
          <h1>First Component</h1>
        </div>
      );
    }
  }

export class ThirdComponent extends Component{
    render() {
        return (
            <div className="ThirdComponent">
                <h1>This is ThirdComponent</h1>    
             </div>
        );
    }
}

export function FourthComponent (){
    return (
        <div className="FourthComponent">
            <h1>Hi This is FourthComponent</h1>
        </div>
    );
}

export default FirstComponent;