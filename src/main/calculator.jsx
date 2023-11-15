import React,{Component} from "react";
import './calculator.css'
import Button from "../components/buton";
import Display from "../components/display";

export default class Calculator extends Component{
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){
        console.log('limpar')
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(digit){
        console.log(digit)
    }

    render(){
        return (
            <div className="calculator">
                <Display value={100}></Display>
                <Button value="AC" triple click={this.clearMemory}></Button>
                <Button value="/" operation click={this.setOperation}></Button>
                <Button value="7" click={this.addDigit}></Button>
                <Button value="8" click={this.addDigit}></Button>
                <Button value="9" click={this.addDigit}></Button>
                <Button value="*" operation click={this.setOperation}></Button>
                <Button value="4" click={this.addDigit}></Button>
                <Button value="5" click={this.addDigit}></Button>
                <Button value="6" click={this.addDigit}></Button>
                <Button value="-" operation click={this.setOperation}></Button>
                <Button value="1" click={this.addDigit}></Button>
                <Button value="2" click={this.addDigit}></Button>
                <Button value="3" click={this.addDigit}></Button>
                <Button value="+" operation click={this.setOperation}></Button>
                <Button value="0" double click={this.addDigit}></Button>
                <Button value="." click={this.addDigit}></Button>
                <Button value="=" operation click={this.setOperation}></Button>
            </div>
        )
    }
}