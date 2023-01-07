import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CounterCtrl from "./count";

class CountPropsCtrl extends Component{
    constructor(){
        super();
        this.state={
            count: 0
        }
        this.incrementCounter= this.incrementCounter.bind(this);
        this.deCrementCounter= this.deCrementCounter.bind(this);
    }

    incrementCounter(){
        let num = this.state.count
        this.setState({
            count : ++num
        }
    )}
    deCrementCounter(){
        let num = this.state.count
        this.setState({
            count: --num
        })
    }

    render(){
        return(

            <div className="text-center">
                <h4>Props Count</h4>
                <h1>
                    <CounterCtrl count={this.state.count} incrementCounter={this.incrementCounter} deCrementCounter={this.deCrementCounter} />
                </h1>
            </div>
        )
    }
}


export default CountPropsCtrl;