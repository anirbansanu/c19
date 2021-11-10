import React, { Component } from 'react'

export default class Container3 extends Component {
    render() {
        return (
            <div className="container-fluid pt-2 pb-2 p-lg-4 mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 mt-5 d-flex justify-content-lg-center">
                        <img src="https://www.cowin.gov.in/assets/images/internationalcertificate.svg" alt="img" class="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-lg-center mt-5">
                        <div className="card bg-transparent" style={{border: 'none'}}>
                            <div className="card-body bg-transparent d-flex justify-content-center align-items-center">
                                <div style={{height: 'fit-content'}}>
                                    <h2 className="card-title fw-bold">International Travel Certificate</h2>
                                    <h6 className="pt-3 pb-3">Ready to travel the world? Complete your vaccination and get a certificate now.</h6>
                                    <div className="d-flex justify-content-between">
                                        <a href="#download" className="btn fw-bold btn-primary">How to Download</a>
                                        <a href='#Certificate' className="btn fw-bold btn-primary">Get Certificate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <h2 className="mt-5 pt-5 mb-5">Made By <font style={{fontSize: '2.5rem',fontWeight:'bold'}}>Anirban</font></h2>
                        
                    </div> 
                </div>
            </div>
        )
    }
}
