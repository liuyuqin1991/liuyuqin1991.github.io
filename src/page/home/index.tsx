import React from 'react';
import BaseComponent from '../../components/base-component';
import Profile from './profile';
import About from './about';

import './index.scss'

class HomeComponent extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    render() {
        return <div className="home">
            <Profile />
            <About />
        </div>
    }
}

export default HomeComponent;