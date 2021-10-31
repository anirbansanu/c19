import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Fullscreen,FullscreenExit,PlusLg,XLg,DashLg } from 'react-bootstrap-icons'
import "./C19Card.css"

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
                <Card className={`result-row bg-light shadow ${this.state.maximize?"maximize":"minimize"}`}>
                    <Card.Header>
                        <Card.Title as="h5">
                            Check Availability Of 💉 Slots
                        </Card.Title>
                        <div className="btn-tool-box">
                            
                                {this.state.expand?<DashLg className="btn-tool" onClick={this.expandToggle}/>:<PlusLg className="btn-tool" onClick={this.expandToggle}/>}
                        
                            
                                {this.state.maximize?<FullscreenExit className="btn-tool" onClick={this.maximizeToggle}/>:<Fullscreen className="btn-tool" onClick={this.maximizeToggle}/>}
                            
                                {this.props.close?
                                    <button type="button" className="btn btn-tool"><XLg/></button>:
                                    ""
                                }
                        </div>
                    </Card.Header>
                    <Card.Body className={`p-0 ${this.state.expand? 'expand-card':'collapse-card'}`}>
                        <div className={`p-0 toggle-content`}>
                            <div className="content">
                                <h1>Nearest 💉 Vaccination</h1>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
