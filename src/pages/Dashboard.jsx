import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Container2 from '../components/Containers/Container2';
import Container3 from '../components/Containers/Container3';

export default class Dashboard extends Component {
    render() {
        return (
            <div style={{marginBottom:"3rem"}}>
                <Header appTitle="C19"/>
                <Container2 />
                <Container3 />
            </div>
        )
    }
}
