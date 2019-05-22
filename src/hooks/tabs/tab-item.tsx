import React from 'react';
import { BaseProps } from '../../components/base-component';

interface TabItemProps extends BaseProps {
    name: string
    value: string
}

export default function TabItemHook(props: TabItemProps) {

    return (
        <div className="tabs-item">
            {props.children}
        </div>
    )
}
