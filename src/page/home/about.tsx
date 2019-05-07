import React from 'react';
import BaseComponent from '../../components/base-component';
import AboutJson from '../../data/jsons/about.json';

class AboutComponent extends BaseComponent {

    render() {
        return <div className="module-view about">
            <div className="module-title h1 user">About Me</div>
            <div className="module-title h2">信息</div>
            <div className="about-info name">姓名：{AboutJson.name}</div>
            <div className="about-info">年龄：{AboutJson.age}</div>
            <div className="about-info">坐标：{AboutJson.address}</div>
            <div className="about-info">工龄：{AboutJson.experience}</div>
            <div className="about-info">电话：{AboutJson.phone}</div>
            <div className="about-info">邮箱：{AboutJson.email}</div>
            <div className="module-title h2">评价</div>
            <div className="about-introduction">{AboutJson.introduction}</div>
        </div>
    }
}

export default AboutComponent;