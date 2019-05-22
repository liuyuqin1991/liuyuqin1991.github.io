import React from 'react';
import BaseComponent from '../base-component';
import './animation.scss';

interface AnimationViewProps {
    time?: number,
}

interface AnimationViewState {
    isClick: boolean,
}

export default class AnimationView extends BaseComponent<AnimationViewProps, AnimationViewState> {


    constructor(props: AnimationViewProps) {
        super(props);
        this.state = {
            isClick: false
        }
    }

    onAnimationView(): void {
        this.setState({ isClick: true })
        setTimeout(() => { this.setState({ isClick: false }) }, this.props.time || 1000);//延迟关闭动画 移除open类
    }


    render() {
        return (
            <div className={this.className({ 'is-click': this.state.isClick })} onClick={this.onAnimationView.bind(this)}>
                {this.props.children || null}
            </div>
        )
    }
}
