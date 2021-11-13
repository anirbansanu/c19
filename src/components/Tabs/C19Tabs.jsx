import React, { Component } from 'react';
import {Tabs,Tab } from 'react-bootstrap';
import Input from '../Inputs/Input';

export default class C19Tabs extends Component {
    constructor(props){
        super(props);
        this.state={
            value: '',
            disValue: null,
            selectOne: false,
            selectTwo: true,
            data: [],
            disData: [],
            disDataLoading: false,
            loding: false
        }
        this.stateHandler = this.stateHandler.bind(this);
        this.fetchedStates = this.fetchedStates.bind(this);
        this.willMount = this.willMount.bind(this);
        this.getDistricts = this.getDistricts.bind(this);
        this.districtHandler = this.districtHandler.bind(this);
    }
    
    willMount(){
        this.state.data.hasOwnProperty('states')?
            this.setState({loding:true}) : this.setState({loding:false})
    }
    async fetchedStates(){
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
    async getDistricts(stateId){
        try{
            const res = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`);
            const actualData = await res.json();
            //console.log(actualData.states);
            //actualData.states.map((item, i)=> console.log(item));
            this.setState({
                disData:actualData.districts,
                disDataLoading: true
            });
            this.willMount();
            console.log(actualData);
            // console.log(`disData : ${this.state.disData[0].district_name}`);
            // console.log(this.state.stateMeta);
            
        }
        catch(err){
            console.log(err);
        }
        
    }
    componentDidMount(){
        this.fetchedStates();
    }
    stateHandler(event){
        this.setState({
            value: event.target.value,
            selectTwo: false
        }); 
        console.log(`select item value : ${event.target.value}`);
        this.getDistricts(event.target.value);
    }
    districtHandler(event){
        this.setState({disValue: event.target.value});
        console.log(`district is : ${event.target.value}`);
        var vc = this.props.getVaccinDataByDisId(event.target.value);
        console.log(`vs is : ${vc}`);
    }
      
    render() {
        // const stateArray = ["West Bengal","Maharastra","J&K",'Ladak'];
        // const districtArray = ["burd","bankura"];
        return (
            <>
                <Tabs defaultActiveKey="By-District" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="By-District" title="By District">
                    { /* Select button for State */}
                        <div className="form-floating mt-5 mt-sm-4 mt-md-4">
                            <select disabled={this.state.selectOne} className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={this.stateHandler}>
                                <option disabled={true} selected>Your State</option>
                                {
                                    Array.isArray(this.state.data.states) && this.state.loding ? this.state.data.states.map((values, index)=>{
                                            return(<option style={{paddingTop:'5px'}} key={index} value={values.state_id.toString()}>{values.state_name}</option>)
                                        }
                                    ):<option style={{paddingTop:'5px'}}>No States</option>
                                
                                }
                            </select>
                            <label htmlFor="floatingSelect">Select</label>
                        </div>
                    { /* Select button for District */}
                        <div className="form-floating mt-5 mt-sm-4 mt-md-4">
                            <select disabled={this.state.selectTwo} className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={this.districtHandler}>
                                <option selected>Your District</option>
                                {
                                    this.state.disDataLoading? this.state.disData.map(
                                        (values, index)=>{
                                            return(<option style={{paddingTop:'5px'}} key={index} value={values.district_id.toString()}>{values.district_name}</option>)
                                        }
                                    ):<option style={{paddingTop:'5px'}}>No District</option>
                                
                                }
                            </select>
                            <label htmlFor="floatingSelect">Your District</label>
                        </div>
                        {/* <SelectInput selectHandler={this.stateHandler} disable={this.state.selectOne} label="Select" defaultOption='Your State' stateArray={["West Bengal","Maharastra","J&K",'Ladak']}/> */}
                        {/* <SelectInput selectHandler={this.stateHandler} disable={this.state.selectTwo} label="Select" defaultOption='Your District' stateArray={["burd","banjura"]}/> */}
                    </Tab>
                    <Tab eventKey="By-PIN" title="By PIN">
                        <Input label="Enter PIN"/>
                        <a href="/" className="btn btn-primary mb-4 mt-4 fw-bold float-end top-50" >Search</a>
                        {/* <SelectInput label="Select" defaultOption='State' stateArray={["West Bengal","Maharastra","J&K",'Ladak']}/> */}
                    </Tab>
                    
                </Tabs>
            </>
        )
    }
}
