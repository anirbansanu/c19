import React, { Component } from 'react';
// import { FloatingLabel,Form } from 'react-bootstrap';
import './Input.css';

export default class SelectInput extends Component {
    constructor(props){
        super(props);
        this.state={
            disable: this.props.disable,
            value: ""
        }
        // this.setState({optionsArray:this.props.optionsArray});
    }
    
    render() {
        // console.log(`Disable : ${this.state.disable}`);
        // console.log(this.state.disable==="true" && this.state.disable?true:null)
        return (
            <>
                <div className="form-floating mt-5 mt-sm-4 mt-md-4">
                    <select disabled={this.state.disable==="true" || this.state.disable===true?true:null} className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={this.props.selectHandler}>
                        <option selected disabled={true}>{this.props.defaultOption}</option>
                        {
                            Array.isArray(this.props.optionsArray)?this.props.optionsArray.map(
                                (values, index)=>{
                                    return(<option style={{paddingTop:'5px'}} key={index} value={index.toString()}>{values}</option>)
                                }
                            ):<option style={{paddingTop:'5px'}}>No States</option>
                        
                        }
                    </select>
                    <label htmlFor="floatingSelect">{this.props.label}</label>
                </div>
            </>
        )
    }
}
