import React from 'react';
import BaseComponent from '../../components/base-component';
import AboutJson from '../../data/jsons/about.json';
import GithubIcon from '../../assets/image/home/github.svg';
import CsdnIcon from '../../assets/image/home/csdn.svg';
import JuejinIcon from '../../assets/image/home/juejin.svg';
import BilibiliIcon from '../../assets/image/home/bilibili.svg';
import GiteeIcon from '../../assets/image/home/gitee.svg';

const svgIcon: { [key: string]: string } = {
  github: GithubIcon,
  csdn: CsdnIcon,
  juejin: JuejinIcon,
  bilibili: BilibiliIcon,
  gitee: GiteeIcon
};

class AboutComponent extends BaseComponent {
  renderWebIcons() {
    const webs = AboutJson.webs;
    return webs.map(function (item, index) {
      return (
        <a href={item.web} key={'about-image' + index}>
          <img src={svgIcon[item.name]} alt={item.name}></img>
        </a>
      );
    });
  }

  renderAdvantages() {
    const advantagesArr = AboutJson.advantages;
    return (
      <ul>
        {advantagesArr.map(function (item, index) {
          return <li key={`advantage-${index}`}>{`> ${item}`}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="module-view about">
        <div className="module-title h1 user">About Me</div>
        <div className="module-title h2">信息</div>
        <div className="about-info name">姓名：{AboutJson.name}</div>
        <div className="about-info">年龄：{AboutJson.age}</div>
        <div className="about-info">坐标：{AboutJson.address}</div>
        <div className="about-info">工龄：{AboutJson.experience}</div>
        <div className="about-info">电话：{AboutJson.phone}</div>
        <div className="about-info">邮箱：{AboutJson.email}</div>
        <div className="about-info">求职：{AboutJson.job}</div>
        <div className="module-title h2">个人优势</div>
        <div className="about-introduction">{this.renderAdvantages()}</div>
        <div className="module-title h2">个人网站</div>
        <div className="about-web-icon">{this.renderWebIcons()}</div>
        <div className="about-info bottom-tip">
          tip：github请开启手机vpn，或电脑vpn访问
          https://github.com/liuyuqin1991
        </div>
      </div>
    );
  }
}

export default AboutComponent;
