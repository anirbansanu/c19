import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import SelectInput from '../Inputs/SelectInput'
import { Fullscreen,FullscreenExit,PlusLg,XLg,DashLg } from 'react-bootstrap-icons'
import "./C19Card.css"
import C19Table from '../C19Table/C19Table'

export default class C19Card extends Component {
    constructor(props){
        super(props);
        this.state = { 
            expand: this.props.expand,
            maximize: this.props.maximize
        };
    }
    expandToggle = () => {
        if(!this.state.maximize)
        {
            this.setState(prevState => ({ expand: !prevState.expand }));
            console.log(`this is toggle func : ${this.state.expand}`);
        } 
    };
    maximizeToggle = () => {
        this.setState(prevState => ({ maximize: !prevState.maximize }));
        this.state.maximize? this.setState({ expand: true }) : this.setState({ expand: true });
        if (document.body.style.overflow !== "hidden" && !this.state.maximize) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflowY = "scroll";
          }
    }

    render() {
        return (
            <>
                <Card className={`result-row border-0 bg-${this.props.cardColor} shadow ${this.state.maximize?"maximize":"minimize"}`} style={{"--insetShadow": `var(--bs-${this.props.headerColor})`}}>
                    <Card.Header className={`result-header bg-${this.props.headerColor} ${this.props.headerColor==="warning" || this.props.headerColor==="light" ?"text-dark":"text-white"}`}>
                        <Card.Title as="h5" className="pb-0">
                            Check Availability Of 💉 Slots
                        </Card.Title>
                        <div className="btn-tool-box">
                            
                            {this.state.expand?<DashLg className="btn-tool" onClick={this.expandToggle}/>:<PlusLg className="btn-tool" onClick={this.expandToggle}/>}
                        
                            {this.state.maximize?<FullscreenExit className="btn-tool" onClick={this.maximizeToggle}/>:<Fullscreen className="btn-tool" onClick={this.maximizeToggle}/>}
                        
                            {this.props.close?
                                <button type="button" className="btn btn-tool"><XLg/></button>:""
                            }
                        </div>
                    </Card.Header>
                    <Card.Body className={`result-body p-0 ${this.state.expand? 'expand-card':'collapse-card'}`}>
                        <div className="card m-3 p-2 border-0">
                            <div className="row">
                                <div className="col-12 col-md-3 p-3">
                                    <h4>Filters</h4>
                                </div>
                                <div className="col-12 col-sm-4 col-md-3 text-start pl-md-3">
                                <SelectInput label="Age" defaultOption='Select Age' optionsArray={["18 & Abobe","Below 18"]}/>
                                </div>
                                <div className="col-12 col-sm-4 col-md-3 text-start pl-md-3">
                                <SelectInput label="Cost" defaultOption='Select Price' optionsArray={['Free','Paid']}/>
                                </div>
                                <div className="col-12 col-sm-4 col-md-3 text-start pl-md-3">
                                    <SelectInput label="Vaccin" defaultOption='Select Vaccin' optionsArray={["Covishield","Covacin","Sputnik"]}/>
                                </div>
                            </div>
                        </div>
                        <div className="card m-3 p-2 border-bottom border-0 border-secondary">
                            <div className="row">
                                <div className="col-12 col-sm-3">
                                    <h4>Details</h4>
                                </div>
                                <div className="col-12 col-sm-9 text-start">
                                    <ul>
                                        <li>Slots are updated by state vaccination centers and private hospitals everyday at 8AM, 12PM, 4PM, & 8PM.</li>
                                        <li><span>🕺</span><b>Walk-in available</b> at all vaccination centers for age 18 years and above (For timings for walk-in vaccinations, please contact the vaccine center.)</li>
                                        <li><span>💉</span>D1 - Vaccine Dose #1 &nbsp;&nbsp;&nbsp;  D2 - Vaccine Dose #2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={`toggle-content p-0 p-lg-3`}>
                            <div className="content">
                                
                                {this.props.children}
                                <div className="row c19table-date pt-2 pb-1 m-0 ">
                                    <div className="col-0 col-md-4 d-flex justify-content-center empty-col">
                                        
                                    </div>
                                    <div className="col-3 col-md-2 p-1 d-flex justify-content-center">
                                        {/* <span className='left-arrow-icon'>❮</span> */}
                                        <a href='/' className="btn btn-sm "> 22 Nov 2021 </a>
                                    </div>
                                    <div className="col-3 col-md-2 p-1 d-flex justify-content-center">
                                        <a href='/' className=" btn btn-sm "> 22 Nov 2021 </a>
                                    </div>
                                    <div className="col-3 col-md-2 p-1 d-flex justify-content-center">
                                        <a href='/' className="btn btn-sm "> 22 Nov 2021 </a>
                                    </div>
                                    <div className="col-3 col-md-2 p-1 d-flex justify-content-center">
                                        <a href='/' className="btn btn-sm "> 22 Nov 2021 </a>
                                        {/* <span className='right-arrow-icon'>❯</span> */}
                                    </div>
                                </div>
                                <C19Table 
                                    centerName="ALAMNAGAR UPHC ASANSOL" 
                                    centerAddress="Asansol UPHC 8 Ward No. 82 Alamnagar, West Bardhaman, West Bengal, 713325" 
                                    vaccinName="Covishield"
                                    totalVaccin="16"
                                    dose1="6"
                                    dose2="10"
                                    ageLimit="18 &amp; Above"
                                    cost="Free"
                                    bdgColor={this.props.headerColor}
                                />
                                <C19Table 
                                    centerName="APOLLO CLINIC DURGAPUR" 
                                    centerAddress="Arrah Shibtala, West Bardhaman, West Bengal, 713212" 
                                    vaccinName="Covishield"
                                    totalVaccin="44"
                                    dose1="40"
                                    dose2="04"
                                    ageLimit="18 &amp; Above"
                                    cost="Free"
                                    bdgColor={this.props.headerColor}
                                />
                                <C19Table 
                                    centerName="ALAMNAGAR UPHC ASANSOL" 
                                    centerAddress="Asansol UPHC 8 Ward No. 82 Alamnagar, West Bardhaman, West Bengal, 713325" 
                                    vaccinName="Covishield"
                                    totalVaccin="16"
                                    dose1="6"
                                    dose2="10"
                                    ageLimit="18 &amp; Above"
                                    cost="Free"
                                    bdgColor={this.props.headerColor}
                                />
                                <C19Table 
                                    centerName="APOLLO CLINIC DURGAPUR" 
                                    centerAddress="Arrah Shibtala, West Bardhaman, West Bengal, 713212" 
                                    vaccinName="Covishield"
                                    totalVaccin="44"
                                    dose1="40"
                                    dose2="04"
                                    ageLimit="18 &amp; Above"
                                    cost="Free"
                                    bdgColor={this.props.headerColor}
                                />
                                <C19Table 
                                    centerName="ALAMNAGAR UPHC ASANSOL" 
                                    centerAddress="Asansol UPHC 8 Ward No. 82 Alamnagar, West Bardhaman, West Bengal, 713325" 
                                    vaccinName="Covishield"
                                    totalVaccin="44"
                                    dose1="40"
                                    dose2="04"
                                    ageLimit="18 &amp; Above"
                                    cost="Free"
                                    bdgColor={this.props.headerColor}
                                />
                                <C19Table 
                                    centerName="APOLLO CLINIC DURGAPUR" 
                                    centerAddress="Arrah Shibtala, West Bardhaman, West Bengal, 713212" 
                                    vaccinName="Covishield"
                                    totalVaccin="44"
                                    dose1="40"
                                    dose2="04"
                                    ageLimit="18 &amp; Above"
                                    cost="Free"
                                    bdgColor={this.props.headerColor}
                                />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
