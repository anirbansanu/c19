import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export default class StatesCard extends Component {
    render() {
        return (
            <Card className="mt-3" style={{background: this.props.bg, height:'125px'}}>
                <Card.Body className="p-1" style={{display: 'flex',  justifyContent:'center', alignItems:'center',color: '#fff'}}>
                        <span>
                            <font style={{color: '#222',fontSize: "1.2rem"}}>{this.props.stateName.substr(0,18)}</font>
                            <font style={{color: '#222',fontSize: "0.8rem"}}>{this.props.stateId}</font>
                        </span>
                </Card.Body>
            </Card>
        )
    }
}
