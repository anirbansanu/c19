import React, { Component } from 'react';
import Menus from '../Menus/Menus';
import Container1 from './Container1';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Menus appTitle={this.props.appTitle}/>
                <Container1/>
            </header>
        )
    }
}
