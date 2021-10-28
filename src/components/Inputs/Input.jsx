import React, { Component } from 'react';
// import { InputGroup,FormControl } from 'react-bootstrap';
import './Input.css';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state ={
            input: "",
            textInput: {
                position: 'absolute',
                top: '0px',
                padding: '0.52rem'
                           
            }

        }

    }
    handleFocus = (e) =>{
        const noFocus = {
            position: 'absolute',
            top: '0px',
            padding: '0.52rem',              
        }
        if(e.target.value)
        {
            this.setState({textInput:{
                position: 'absolute',
                top: '-15px',
                padding: '0',
                fontWeight: 'bold'
            }});
        }
        else{
            this.setState({textInput: noFocus});
        }
        
    }
    render() {
        return (
            <>
                <div className="input-box mt-5">
                    <label className="input-label" style={this.state.textInput} htmlFor={this.props.label.substr(1,4)}>{this.props.label}</label>
                    <input type="text" id={this.props.label.substr(1,4)} className="text-input" onChange={this.handleFocus}/>
                    <span className="input-span"></span>
                </div>
            </>
        )
    }
}
