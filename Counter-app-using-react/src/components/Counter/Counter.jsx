import React, {Component} from 'react';
import './Counter.css'
import propTypes from 'prop-types'

class Counter extends Component {

    constructor (){
        super(); //Error 1

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    } 

    render() {
        return (
          <div className="Counter">
            <h1>Counter</h1>
            <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
          </div>
        );
      }

    reset(){
        
        this.setState({counter : 0});
    }

    increment (by) {
        console.log(`incremented by child - ${by}` )
        this.setState({
            counter : this.state.counter + by //+ this.props.by
        })
    }

    decrement (by) {
        console.log(`decremented by child - ${by}` )
        this.setState({
            counter : this.state.counter - by //+ this.props.by
        })
    }
}
class CounterButton extends Component {
    constructor (){
        super(); //Error 1

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    //render = () => { // if arrow function then no need to bind
    render() {

        //const style = {fontSize :"50px" , padding : "15px 30px"}
        return (
            <div className="CounterButton">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
                {/* <span className="count"
                //style = {style}
                >{this.state.counter}</span> */}
            </div>
        );
    }

    //increment = () => {
    increment () {
        //console.log('increment')
        //this.state.counter++;
        this.setState(
            (prevState) => {
            return {counter : prevState.counter + this.props.by}
            }
        )
        this.props.incrementMethod(this.props.by)
    } 

    decrement () {
        this.setState(
            (prevState) => {
            return {counter : prevState.counter - this.props.by}
            }
        )
        this.props.decrementMethod(this.props.by)
    } 
}

CounterButton.defaultProps ={
    by : 1 
}

CounterButton.propTypes ={
    by : propTypes.number
}

export default Counter;