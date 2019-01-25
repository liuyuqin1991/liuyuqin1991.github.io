import React from 'react';
import BaseComponent from '../../components/base-component';
import Intro from '../intro';
import './index.scss'

interface HomeProp{

}

class Home extends BaseComponent {

    constructor(props: HomeProp){
        super(props);
    }

    componentWillMount(){

    }

    render() {
        return (
            <div className="home">
                <header className="header"></header>
                <Intro />
            </div>
        );
    }
}

export default Home;