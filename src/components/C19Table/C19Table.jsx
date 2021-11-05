import React, { Component } from 'react';
import "./C19Table.css";

export default class C19Table extends Component {
    render() {
        return (
            <>     
                <div className="row c19table rounded-3 pt-2 pb-2 border-2 border-secondary border-bottom mt-4">
                    <div className="col-4 col-md-4 d-flex justify-content-start">
                        <h5 className="text-start">{this.props.centerName}<br/>
                            <font style={{fontSize:"0.8rem",color:"#555"}}>{this.props.centerAddress}</font>
                        </h5>
                    </div>
                    <div className="col-3 col-md-2 p-1 d-flex justify-content-center text-center">
                        <div className="row m-0">
                            
                                <h6 className="mb-0 align-self-center" style={{fontSize:"1rem"}}>{this.props.vaccinName}</h6>
                           
                                <div className="box align-self-center p-0">       
                                    <span className="badge rounded-0 border border-3 border-warning text-black">D1<br/>{this.props.dose1}</span>
                                    <span className="badge rounded-0 border border-3 border-success text-black">T<br/>{this.props.totalVaccin}</span>
                                    <span className="badge rounded-0 border border-3 border-danger text-black">D2<br/>{this.props.dose2}</span>
                                </div>                         
                           
                                <h6 className="mb-0 align-self-center" style={{fontSize:"0.8rem",color:'#555'}}>{this.props.ageLimit}</h6>
                            
                        </div>
                    </div>
                    <div className="col-3 col-md-2 p-1 d-flex justify-content-center">
                        <div className="row m-0">
                            <h6 className="mb-0 align-self-center" style={{fontSize:"1rem"}}>{this.props.vaccinName}</h6>                    
                            <div className="box align-self-center p-0">       
                                <span className="badge rounded-0 border border-3 border-warning text-black">D1<br/>10</span>
                                <span className="badge rounded-0 border border-3 border-success text-black">T<br/>10</span>
                                <span className="badge rounded-0 border border-3 border-danger text-black">D2<br/>0</span>
                            </div>                         
                    
                            <h6 className="mb-0 align-self-center" style={{fontSize:"0.8rem",color:'#555'}}>18 & Above</h6>
                        </div>
                    </div>
                    <div className="col-3 col-md-2 p-1 d-flex justify-content-center">
                        <div className="row m-0">
                            <h6 className="mb-0 align-self-center" style={{fontSize:"1rem"}}>Covishield</h6>                    
                            <div className="box align-self-center p-0">       
                                <span className="badge rounded-0 border border-3 border-warning text-black">D1<br/>10</span>
                                <span className="badge rounded-0 border border-3 border-success text-black">T<br/>10</span>
                                <span className="badge rounded-0 border border-3 border-danger text-black">D2<br/>0</span>
                            </div>                         
                    
                            <h6 className="mb-0 align-self-center" style={{fontSize:"0.8rem",color:'#555'}}>18 & Above</h6>
                        </div>
                    </div>
                    <div className="col-3 col-md-2 p-1 d-flex justify-content-center">
                        <div className="row m-0">
                            <h6 className="mb-0 align-self-center" style={{fontSize:"1rem"}}>Covishield</h6>                    
                            <div className="box align-self-center p-0">       
                                <span className="badge rounded-0 border border-3 border-warning text-black">D1<br/>10</span>
                                <span className="badge rounded-0 border border-3 border-success text-black">T<br/>10</span>
                                <span className="badge rounded-0 border border-3 border-danger text-black">D2<br/>0</span>
                            </div>                         
                    
                            <h6 className="mb-0 align-self-center" style={{fontSize:"0.8rem",color:'#555'}}>18 & Above</h6>
                        </div>
                    </div>
                </div>

                <div className="card c19table-card mt-2">
                    <div className="card-header">
                        <div className="row w-100">
                            <div className="col-12 mb-3 p-0">
                                <div className="container-fluid p-0">
                                    <div className="row w-100 ">
                                        <div className="col-8 p-0 ">
                                            <h5 className="card-title">
                                            {this.props.centerName}<br/>
                                                <font style={{fontSize: '0.85rem',fontWeight: 'lighter'}}>{this.props.centerAddress}</font>
                                            </h5>
                                        </div>
                                        
                                        <div className="col-4 p-0">
                                            <h6 className="card-subtitle">
                                                {this.props.vaccinName}
                                                <br/>
                                                <span className="badge bg-success">
                                                    {this.props.cost}
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-12 col-sm-4 mb-4 mb-sm-0 dose-age">
                                <span className={`badge p-2 bg-${this.props.bdgColor} user-select-none pe-none`}>{this.props.ageLimit}</span>
                            </div>
                            <div className="col-6 col-sm-4 dose-1">
                                Dose 1 <span className="badge bg-danger">{this.props.dose1}</span>
                            </div>
                            <div className="col-6 col-sm-4 dose-2">
                                Dose 2 <span className="badge bg-success border-success">{this.props.totalVaccin}</span>
                            </div>
                            <div className="col-12 col-sm-4 mb-4 mb-sm-0 mt-4 dose-age">
                                <span className={`badge p-2 bg-${this.props.bdgColor} user-select-none pe-none`}>Below 18</span>
                            </div>
                            <div className="col-6 col-sm-4 dose-1 mt-4 ">
                                Dose 1 <span className="badge bg-danger">{this.props.dose1}</span>
                            </div>
                            <div className="col-6 col-sm-4 dose-2 mt-4 ">
                                Dose 2 <span className="badge bg-success border-success">{this.props.dose2}</span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </>
        )
    }
}
