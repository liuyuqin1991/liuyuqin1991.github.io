import React from 'react';
import CollapseTransition from './lib';
import classnames from 'classnames';

interface CollapseItemProps {
    children: any
    isActive?: boolean
    title: string
    name: string
    onClick?: Function
}

export default function CollapseItemHook(props: CollapseItemProps) {

    const itemClass: any = classnames({
        'collapse-item': true,
        'is-active': props.isActive
    })

    return (
        <div className={itemClass} >
            <div className="collapse-item-header" onClick={() => {
                if (props.onClick) {
                    props.onClick(props.name)
                }
            }}>
                <i className="collapse-item-header-arrow icon-arrow-right" />
                {props.title}
            </div>
            <CollapseTransition isShow={props.isActive || false}>
                <div className="collapse-item-wrap">
                    <div className="collapse-item-content">
                        {props.children}
                    </div>
                </div>
            </CollapseTransition>
        </div>
    )
}

