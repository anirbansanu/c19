import React, { Component } from 'react';
import {Tabs,Tab } from 'react-bootstrap';
import SelectInput from '../Inputs/SelectInput';

export default class C19Tabs extends Component {
    render() {
        return (
            <>
                <Tabs defaultActiveKey="By-District" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="By-District" title="By District">
                        <SelectInput disable="false" label="Select" defaultOption='Your State' optionsArray={["West Bengal","Maharastra","J&K",'Ladak']}/>
                        <SelectInput disable="true" label="Select" defaultOption='Your District' optionsArray={[]}/>
                    </Tab>
                    <Tab eventKey="By-PIN" title="By PIN">
                        <SelectInput disable="true" label="Select" defaultOption='State' optionsArray={["West Bengal","Maharastra","J&K",'Ladak']}/>
                        {/* <SelectInput label="Select" defaultOption='State' optionsArray={["West Bengal","Maharastra","J&K",'Ladak']}/> */}
                    </Tab>
                    
                </Tabs>
            </>
        )
    }
}
