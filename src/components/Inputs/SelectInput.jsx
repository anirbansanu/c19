import React, { Component } from 'react';
import { FloatingLabel,Form } from 'react-bootstrap';
import './Input.css';


export default class SelectInput extends Component {
    constructor(props){
        super(props);
        this.state={
            disable: this.props.disable===undefined?false:this.props.disable,
            selectInput:this.props.defaultOption,
            optionsArray: ["Bihar","Goa"],
        }
        // this.setState({optionsArray:this.props.optionsArray});
        this.handleSelect = this.handleSelect.bind(this);

    }
    handleSelect(ev){
        this.setState({
            selectInput: ev.target.value
        });
        
    }
    
    render() {
        return (
            <>
                <FloatingLabel className="mt-5 mt-sm-4 mt-md-4" controlId="floatingSelectGrid" label={this.props.label}>
                    <Form.Select disable={this.state.disable} aria-label="Floating label select example" onChange={this.handleSelect} value={this.state.selectInput}>
                        <option>{this.props.defaultOption}</option>
                        {
                            Array.isArray(this.props.optionsArray)?this.props.optionsArray.map(
                                (values, index)=>{
                                    return(<option style={{paddingTop:'5px'}} key={index} value={index.toString()}>{values}</option>)
                                }
                            ):<option style={{paddingTop:'5px'}}>No States</option>
                        
                        }
                        
                    </Form.Select>
                </FloatingLabel>    
            </>
        )
    }
}
