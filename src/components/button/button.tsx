import React from 'react';
import BaseComponent from '../../components/base-component';
import './button.scss';

export interface Props {
    onClick?:Function
}

export default class Button extends BaseComponent<Props> {

    onClick(e: React.SyntheticEvent): void {
        this.props.onClick && this.props.onClick(e);
    }

    render() {
        return (
            <button  style={this.style()} className={this.className("base-btn")} onClick={this.onClick.bind(this)}>
                <span>{this.props.children}</span>
            </button>
        )
    }
}
