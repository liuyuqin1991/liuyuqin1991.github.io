import React from 'react';
import BaseComponent from '../../components/base-component';
import AboutJson from '../../data/jsons/about.json';

class AboutComponent extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    renderProfileAbout() {

    }

    render() {
        return <div className="module-view about">
            <div className="module-title h1 user">About Me</div>
            <div className="module-title h2">信息</div>
            <div className="about-name">姓名：{AboutJson.name}</div>
            <div className="module-title h2">评价</div>
            <div className="about-introduction">{AboutJson.introduction}</div>
        </div>
    }
}

export default AboutComponent;