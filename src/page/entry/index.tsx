import React from 'react';
import BaseComponent from '../../components/base-component';
import Button from '../../components/button/button';
import AnimationView from '../../components/animation/animation';
import { Link } from 'react-router-dom';
import './index.scss'

class EntryComponent extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="entry">
                <header className="header">
                    <div className="top-bar-view">
                        <AnimationView className="swing">
                            <div className="top-bar"></div>
                        </AnimationView>
                    </div>
                </header>
                <div className="content">
                    <div className="content-overlay"></div>
                    <div className="content-view">
                        <div className="content-head">Hello  World</div>
                        <div className="content-welcome">welcome</div>
                        <div className="content-description">
                            <AnimationView className="heart-beta">
                                <div className="description-icon left"></div>
                            </AnimationView>
                            <div className="description-item">写代码</div>
                            <div className="divide" />
                            <div className="description-item">玩音乐</div>
                            <AnimationView className="heart-beta">
                                <div className="description-icon right"></div>
                            </AnimationView>
                        </div>
                        <Button className="more-btn"><Link to="/blog">MORE ABOUT ME</Link></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EntryComponent;