import React,{Component} from "react";
import './calculator.css'
import Button from "../components/buton";
import Display from "../components/display";

const inicialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0,
    lastDigit: null,
}

export default class Calculator extends Component{

    state = {...inicialState}    

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)

    }

    clearMemory(){
        this.setState({...inicialState})
    }

    setOperation(operation){
       if(this.state.current === 0){
        this.setState({operation, current: 1, clearDisplay: true})
       }
       else{
        const equals = operation === '='
        const currentOperation = this.state.operation
        const values = {...this.state.values}
        switch(currentOperation){
            case '+':
                values[0] = values[0] + values[1]
                break
            case '-':
                values[0] = values[0] - values[1]
                break
            case '*':
                values[0] = values[0] * values[1]
                break 
            case '/':
                values[0] = values[0] / values[1]
                break      
        }

        values[1] = 0
        this.setState({
            displayValue: values[0],
            operation: equals ? null: operation,
            current: equals ? 0: 1,
            clearDisplay: !equals,   
            values
        })
       }
    }

    addDigit(digit){
       if(digit === '.' && this.state.displayValue.includes('.')){
        return
       }
       const clearDisplay = this.state.displayValue === '0'
       || this.state.clearDisplay
       const currentValue = clearDisplay ? '': this.state.displayValue
       const displayValue = currentValue + digit
       this.setState({displayValue, clearDisplay: false})

       if (digit !== '.'){
        const index = this.state.current
        const newValue = parseFloat(displayValue)
        const values = {...this.state.values}
        values[index] = newValue
        this.setState({values})
       }

    }

    render(){
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
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