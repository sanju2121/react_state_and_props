
import React,{Component} from "react";
import { Button } from "react-bootstrap";

class CountCtrl extends Component{

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
                <h4>Count</h4>
                <h1>
                    <h3>{this.state.count}</h3>
                    <Button className="m-2" onClick={this.deCrementCounter}>minus Counter</Button>
                    <Button className="m-2" onClick={this.incrementCounter}>Add Counter</Button>
                </h1>
            </div>
        )
    }
}

export default CountCtrl;