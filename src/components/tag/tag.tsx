import React from 'react';
import BaseComponent from '../base-component';
import './tag.scss';

export interface TagProps {
    label: string
}

export default class Tag extends BaseComponent<TagProps> {

    render() {
        const tagStyle = {
            "tag": true,
        }
        return (
            <div style={this.style()} className={this.classNames(tagStyle)}>{this.props.label}</div>
        )
    }
}
