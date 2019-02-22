import React from 'react';
import BaseComponent from '../base-component';
import { Link } from 'react-router-dom';
import './header.scss';

interface HeaderProps {
    title: string
}

export default class HeaderComponent extends BaseComponent<HeaderProps> {

    render() {
        return <header className="header">
            <Link to="/" className="link-text"><div className="homepage-btn"></div></Link>
            <div className="header-title">
                {this.props.title}
            </div>
        </header>
    }
}