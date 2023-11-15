import React from "react";
import './button.css';

export default function button(props){
        let classes = "button "
        classes += props.double ? "double" : ""
        classes += props.triple ? "triple": ""
        classes += props.operation ? "operation": ""
        return <button 
        className={classes}
        onClick={e => props.click && props.click(props.value)}>
                {props.value} 
                </button>
}