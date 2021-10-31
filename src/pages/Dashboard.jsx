import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Container2 from '../components/Containers/Container2';

export default class Dashboard extends Component {
    render() {
        return (
            <div style={{marginBottom:"3rem"}}>
                <Header appTitle="C19"/>
                <Container2 />
            </div>
        )
    }
}
