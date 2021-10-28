import React, { Component } from 'react';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
// import Fwc from '../../assets/imgs/banner1.png';
import Pic from '../../assets/imgs/corona-info.png';
import SelectInput from '../Inputs/SelectInput';
import "./Container1.css";

export default class Container1 extends Component {
    render() {
        return (
            <>
                <Container fluid className="container1">
                    <Row>
                        <Col sm={{span: 12, order: 2 }} md={{span: 6, order: 1 }} lg={{span: 5, order: 1 }} className="container1-col" >
                            <Card>
                                <Card.Body className="p-4">
                                    <Card.Title>
                                        <h2>India is set to defeat Covid-19</h2>
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Every Indian is making it possible</Card.Subtitle>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <SelectInput label="First Name" defaultOption=""/>
                                    <SelectInput label="Select" defaultOption="Your States" optionsArray={["West Bengal","Bihar","Up"]}/>
                                    <div style={{width:'100%',display:"flex",justifyContent:'end',alignItems:'end'}}>
                                        <Button className="btn-primary mt-4">Submit</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={{span: 12, order: 1 }} md={{span: 6, order: 2 }} lg={{span: 7, order: 2 }} className="container1-col">
                            <img src={Pic} alt='container1-img'/>
                        </Col>
                        
                    </Row>
                </Container>
            </>
        )
    }
}
