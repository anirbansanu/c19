import React, { Component } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'

export default class Container2 extends Component {
    render() {
        return (
            <div>
                <Container fluid className="container2"  >
                    <Row>
                        <Col className="container1-col mt-2" xs={{span: 12, order: 1 }} sm={{span: 12, order: 1 }} md={{span: 6, order: 1 }} lg={{span: 7, order: 1 }} >
                            <Card className="bg-danger" style={{width:"100%",minHeight:"400px"}} ></Card>
                        </Col>
                        <Col className="container1-col mt-5 mt-md-2" xs={{span: 12, order: 2 }} sm={{span: 12, order: 2 }} md={{span: 6, order: 2 }} lg={{span: 5, order: 2 }}>
                            <Card className="bg-success" style={{width:"100%",minHeight:"400px"}} ></Card>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
