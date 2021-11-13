import React, { Component } from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
// import Fwc from '../../assets/imgs/banner1.png';
import C19Card from '../C19Card/C19Card';
import C19Tabs from '../Tabs/C19Tabs';
import Pic from '../../assets/imgs/4999291.jpg';
import "./Container1.css";

export default class Container1 extends Component {
    constructor(props){
        super(props);
        this.state={
            vaccinInfo: '',
            vaccinInfoLoading: false
        }
        this.getVaccinDataByDisId = this.getVaccinDataByDisId.bind(this);
    }
    async getVaccinDataByDisId(disId){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        today = dd.toString() + mm.toString() + yyyy.toString()
        try{
            const res = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${disId}&date=${today}`);
            const actualData = await res.json();
            //console.log(actualData.states);
            //actualData.states.map((item, i)=> console.log(item));
            this.setState({
                vaccinInfo:actualData.sessions,
                
            });
            console.log(`getVaccinDataByDisId : ${this.state.vaccinInfo[0].name}`);
            // console.log(`disData : ${this.state.disData[0].district_name}`);
            // console.log(this.state.stateMeta);
            this.state.vaccinInfo[0].hasOwnProperty('center_id')?
            this.setState({vaccinInfoLoading:true}) : this.setState({vaccinInfoLoading:false})
            return actualData.sessions
        }
        catch(err){
            console.log(err);
        }
        
    }
    render() {
        return (
            <>
                <Container fluid className="container1">
                    <Row>
                        <Col xs={{span: 12, order: 2 }} sm={{span: 12, order: 2 }} md={{span: 6, order: 1 }} className="container1-col" >
                            <Card style={{width:"100%",minHeight:"400px"}} >
                                <Card.Body className="p-4">
                                    <Card.Title >
                                        <h2>India 🛡 defeat Covid-19 {this.state.vaccinInfoLoading?this.state.vaccinInfo[0].name?this.state.vaccinInfo[0].name:"":"No Data"}</h2>
                                    </Card.Title>
                                    
                                    <Card>
                                        <Card.Body className="p-0">
                                            <Card.Title >
                                                <h5>Search Your Nearest 💉 Vaccination Center</h5>
                                            </Card.Title>
                                            <C19Tabs getVaccinDataByDisId={this.getVaccinDataByDisId.bind(this)} />
                                        </Card.Body>
                                    </Card>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={{span: 12, order: 1 }} sm={{span: 12, order: 1 }} md={{span: 6, order: 2 }} className="container1-col">
                            <img src={Pic} alt='container1-img' className="p-0 ps-lg-3 pe-lg-3" style={{maxHeight:'550px'}}/>
                        </Col>
                        
                    </Row>
                    <C19Card expand={true} maximize={false}>
                        {/* <h1>this is from Container 1</h1> */}
                    </C19Card>
                    
                </Container>
                
            </>
        )
    }
}
