import React from 'react';
import BaseComponent from '../../components/base-component';
import AboutJson from '../../data/jsons/about.json';

class AboutComponent extends BaseComponent {

    render() {
        return <div className="module-view about">
            <div className="module-title h1 user">About Me</div>
            <div className="module-title h2">信息</div>
            <div className="about-info name"><span className="label">姓名：</span>{AboutJson.name}</div>
            <div className="about-info"><span className="label">年龄：</span>{AboutJson.age}</div>
            <div className="about-info"><span className="label">坐标：</span>{AboutJson.address}</div>
            <div className="about-info"><span className="label">工龄：</span>{AboutJson.experience}</div>
            <div className="about-info"><span className="label">电话：</span>{AboutJson.phone}</div>
            <div className="about-info"><span className="label">邮箱：</span>{AboutJson.email}</div>
            <div className="module-title h2">评价</div>
            <div className="about-introduction">{AboutJson.introduction}</div>
        </div>
    }
}

export default AboutComponent;