/**
 * Created by liuyuqin on 2019/1/24.
 */
import React from 'react';
import BaseComponent from '../../components/base-component';
import Button from '../../components/button/button';
import { Intro } from './interface';
import Service from './service';
import StringUtils from '../../utils/StringUtils';
import './index.scss'

export default class IntroComponent extends BaseComponent {

    state = {
        intro: {
            head: "",
            welcome: "",
            tag: []
        }
    }

    componentDidMount() {
        this.setState({
            intro: Service.getIntroData()
        });
    }

    render() {
        return (
            <section className="intro">
                <div className="intro-overlay"></div>
                <div className="intro-view">
                    <div className="head">{StringUtils.processInput(this.state.intro.head)}</div>
                    <div className="welcome">{StringUtils.processInput(this.state.intro.welcome)}</div>
                    <div className="tag">
                        <div className="tag-icon left"></div>
                        <div className="tag-item">{StringUtils.processInput(this.state.intro.tag[0])}</div>
                        <div className="divide" />
                        <div className="tag-item">{StringUtils.processInput(this.state.intro.tag[1])}</div>
                        <div className="tag-icon right"></div>
                    </div>
                    <Button className="more-btn">MORE ABOUT ME</Button>
                </div>
            </section>
        )
    }
}