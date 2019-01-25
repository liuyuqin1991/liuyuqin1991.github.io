/**
 * Created by liuyuqin on 2019/1/24.
 */
import React from 'react';
import BaseComponent from '../../components/base-component';
import Data from '../../data/intro.json';
import Button from '../../components/button/button';
import './index.scss'

export default class Intro extends BaseComponent {

    render(){
        return (
            <section className="intro">
                <div className="intro-overlay"></div>
                <div className="intro-view">
                    <div className="head">{Data.head}</div>
                    <div className="welcome">{Data.welcome}</div>
                    <div className="tag">
                        <div className="tag-item">{Data.tag[0]}</div>
                        <div className="divide"/>
                        <div className="tag-item">{Data.tag[1]}</div>
                    </div>
                    <Button className="more-btn">MORE ABOUT ME</Button>
                </div>
            </section>
        )
    }
}