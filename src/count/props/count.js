import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CounterCtrl extends Component{
    render(){
        return(
            <>
            <h4>{this.props.count}</h4>
            <Button className="m-2" onClick={this.props.deCrementCounter}>minus Counter</Button>
            <Button className="m-2" onClick={this.props.incrementCounter}>Add Counter</Button>

            </>
        )
    }
}

export default CounterCtrl