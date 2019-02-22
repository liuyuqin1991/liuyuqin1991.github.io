import React from 'react';
import BaseComponent from '../../components/base-component';
import './footer.scss';

export default class FooterComponent extends BaseComponent {

    onContact(contact: String): void {
        switch (contact) {
            case "qq": {
                break;
            }
            case "wechat": {
                break;
            }
            case "github": {
                window.open("https://github.com/liuyuqin1991");
                break;
            }
            case "csdn": {
                window.open("https://blog.csdn.net/liuyuqin1991");
                break;
            }
            case "youku": {
                window.open("");
                break;
            }
        }
    }

    render() {
        return <footer className="footer">
            <ul className="menu">
                <li key="menu-about" onClick={this.onContact.bind(this, "qq")}>
                    <div className="icon about"></div>
                    <div className="label">关于</div>
                </li>
                <li key="menu-skills" onClick={this.onContact.bind(this, "wechat")}>
                    <div className="icon skills"></div>
                    <div className="label">能力</div>
                </li>
                <li key="menu-work" onClick={this.onContact.bind(this, "github")}>
                    <div className="icon work"></div>
                    <div className="label">工作</div>
                </li>
                <li key="menu-music" onClick={this.onContact.bind(this, "csdn")}>
                    <div className="icon music"></div>
                    <div className="label">音乐</div>
                </li>
                <li key="menu-contact" onClick={this.onContact.bind(this, "youku")}>
                    <div className="icon contact"></div>
                    <div className="label">联系</div>
                </li>
            </ul>
        </footer>
    }
}