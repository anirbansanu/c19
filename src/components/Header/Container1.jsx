import React, { Component } from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
// import Fwc from '../../assets/imgs/banner1.png';
import C19Card from '../C19Card/C19Card';
import C19Tabs from '../Tabs/C19Tabs';
import Pic from '../../assets/imgs/corona-info.png';
import "./Container1.css";

export default class Container1 extends Component {
    render() {
        return (
            <>
                <Container fluid className="container1"  >
                    <Row>
                        <Col xs={{span: 12, order: 2 }} sm={{span: 12, order: 2 }} md={{span: 6, order: 1 }} lg={{span: 5, order: 1 }} className="container1-col" >
                            <Card style={{width:"100%",minHeight:"400px"}} >
                                <Card.Body className="p-4">
                                    <Card.Title >
                                        <h2>India 🛡 defeat Covid-19</h2>
                                    </Card.Title>
                                    
                                    <Card>
                                        <Card.Body className="p-0">
                                            <Card.Title >
                                                <h5>Search Your Nearest 💉 Vaccination Center</h5>
                                            </Card.Title>
                                            <C19Tabs/>
                                        </Card.Body>
                                    </Card>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={{span: 12, order: 1 }} sm={{span: 12, order: 1 }} md={{span: 6, order: 2 }} lg={{span: 7, order: 2 }} className="container1-col">
                            <img src={Pic} alt='container1-img'/>
                        </Col>
                        
                    </Row>
                    <C19Card expand={false} maximize={false}/>
                    
                </Container>
                
            </>
        )
    }
}
