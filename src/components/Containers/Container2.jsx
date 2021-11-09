import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import AniCard from '../AniCard/AniCard'
import './Containers.css'

export default class Container2 extends Component {
    render() {
        return (
            <div>
                <Container fluid className="container2 container-fluid mt-5 text-white bg-dark-purple">
                    <div className="row container2-row">
                        <div className="col-12 col-md-5 col-lg-4 bg-dark-purple">
                            <div className="card whts-new-card justify-content-center align-align-items-center text-center" style={{width:"100%",height:"100%", background:'rgb(23, 4, 29)'}} >
                                <h1>What's new <b>?</b></h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-7 col-lg-8' style={{minHeight: '500px',height: 'auto'}}>
                            <div className="row m-0 pt-4 pb-4">
                                <AniCard 
                                    className="border-0 border-bottom border-white mt-5 mb-5 rounded-0" 
                                    title='You can download your vaccination certificate for International Travel' 
                                    expandBtn={true} expandIcon='expand_more' collapseIcon="expand_less" 
                                    transparent='ani-bg-transparent-txt-white' expand={false} height="100px"
                                >
                                    <p>This new feature allows fully vaccinated citizens to update existing photo identity to passport number and date of birth to get International Travel Certificate.</p>
                                </AniCard>
                                <AniCard className="border-0 border-bottom border-white mb-5 rounded-0" title='You can register as a foreign national on CoWIN and get vaccinated' expandBtn={true} expandIcon='expand_more' collapseIcon="expand_less" transparent='ani-bg-transparent-txt-white' expand={false} height="150px">
                                    <p>New feature has been provided for foreign national. You can easily be vaccinated just by providing your basic details. If you have been administered with Dose 1 vaccine in foreign country, you'll have provide it's details to Vaccinator while going for Vaccination.</p>
                                </AniCard>
                                <AniCard 
                                    className="border-0 border-bottom border-white mb-5 rounded-0" 
                                    title='Citizens can link their passports to CoWIN issued certificate by raising an issue in their accounts' 
                                    expandBtn={true} 
                                    expandIcon='expand_more' 
                                    collapseIcon="expand_less" 
                                    transparent='ani-bg-transparent-txt-white' 
                                    expand={false} 
                                    height="150px"
                                >
                                    <p>This is a new feature provided where you can link your passport by entering Passport number. In order to link your passport to the certificate you need to login into your CoWIN portal and then raise an issue to get your passport linked by clicking on "Add Passport Details to my vaccination certificate"</p>
                                </AniCard>
                                <AniCard 
                                    className="border-0 border-bottom border-white mb-5 rounded-0" 
                                    title='Introducing “Raise an Issue” to CoWIN for all your vaccine certificate and account related issues' 
                                    expandBtn={true} 
                                    expandIcon='expand_more' 
                                    collapseIcon="expand_less" 
                                    transparent='ani-bg-transparent-txt-white' 
                                    expand={false} 
                                    height="150px"
                                >
                                    <p>You can now get all your Issues related to your Vaccine Certificate at one place. All you need to do is to login to your CoWIN portal and click on "Raise an Issue" . Multiple Issue options are provided. You can raise your concerned issues accordingly.</p>
                                </AniCard>
                                <AniCard 
                                    className="border-0 border-bottom border-white mb-5 rounded-0" 
                                    title='Check your eligibility for Dose 2 by signing in on CoWIN with your registered mobile number' 
                                    expandBtn={true} 
                                    expandIcon='expand_more' 
                                    collapseIcon="expand_less" 
                                    transparent='ani-bg-transparent-txt-white' 
                                    expand={false} 
                                    height="150px"
                                >
                                    <p>Citizens administered with dose 1 can now check their eligibility for Dose 2 by performing a single step. "Login to your CoWIN portal" and there you have your eligibility mention next to your name, highlighted as "No. of Days left for Dose 2".</p>
                                </AniCard>
                            </div>
                        </div>
                        
                    </div>
                </Container>
            </div>
        )
    }
}
