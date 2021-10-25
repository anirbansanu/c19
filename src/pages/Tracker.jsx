import React, { Component } from 'react';
import { Container,Row,Col,Badge, Spinner } from 'react-bootstrap';
import './Tracker.css';
import StatesCard from '../components/StatesCard';

export default class Tracker extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal: false,
            data: [],
            loding: false
        }
        this.getCovidData = this.getCovidData.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.willMount = this.willMount.bind(this);
    }
    // handleCovidDataByState(passStateData){
    //     this.setState({
    //         stateName: passStateData.statename,
    //         stateData:passStateData.total,
    //         stateMeta: passStateData.meta
    //     });
    // }
    willMount(){
        this.state.data.hasOwnProperty('states')?
            this.setState({loding:true}) : this.setState({loding:false})
    }
    async getCovidData(){
        try{
            const res = await fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states/");
            const actualData = await res.json();
            //console.log(actualData.states);
            //actualData.states.map((item, i)=> console.log(item));
            this.setState({
                data:actualData
            });
            this.willMount();
            console.log(actualData);
            // console.log(this.state.stateData);
            // console.log(this.state.stateMeta);
            
        }
        catch(err){
            console.log(err);
        }
        
    }

    componentDidMount(){
        this.getCovidData();
    }
    handleShowModal (){ 
        this.setState({showModal:true});
    }
    render() {
        // console.log(this.state.data.hasOwnProperty('states'));
        
        //let showStates;
        // if(this.state.loding){
        //     console.log("this.state.data");
        //     this.state.data.states.map((item, i)=> console.log(item.state_name));
        // }
        return (
            <Container fluid className="mb-4">
                <Row >
                    { this.state.loding ? this.state.data.states.map((item, i)=> 
                    <Col sm={6} md={4} lg={3} className='mt-2 mb-2' key={i}>
                        <StatesCard stateId={item.state_id} stateName={item.state_name}/>
                    </Col>)
                    :   <div style={{width:'100%', height:'90vh',display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            <Spinner animation="border" variant="primary"/>
                            <Spinner animation="border" variant="success" />
                            <Spinner animation="border" variant="danger" />
                        </div> 
                    }
                </Row>
                {/* <TrackerModal stateWise={this.state.data} handleCovidDataByState={this.handleCovidDataByState} title="Choose States" show={this.state.showModal} onHide={() => this.setState({showModal:false})}/> */}
            </Container>
        )
    }
}
