import React from 'react';
import BaseComponent from '../../components/base-component';
import Intro from '../intro';
import './index.scss'

interface HomeProp {

}

class Home extends BaseComponent {

    constructor(props: HomeProp) {
        super(props);
    }

    componentWillMount() {

    }

    onTopBarIcon() {

    }

    render() {
        return (
            <div className="home">
                <header className="header">
                    <div className="top-bar">
                        <div className="top-bar-icon" onClick={this.onTopBarIcon.bind(this)}>
                            <div className="top-bar-line"></div>
                        </div>
                        <div className="top-bar-label">导航</div>
                        <nav className="main-nav">
                            <ul>
                                <li key="nav-0" className="nav-item">首页</li>
                                <li key="nav-1" className="nav-item">工作</li>
                                <li key="nav-2" className="nav-item">音乐</li>
                                <li key="nav-3" className="nav-item">联系</li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <Intro />
            </div>
        );
    }
}

export default Home;