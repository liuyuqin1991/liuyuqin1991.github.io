import React, { useState } from 'react';
import { BaseProps } from '../../components/base-component';
import classnames from 'classnames';

interface TabsProps extends BaseProps {
    //活动tab的value
    activeValue?: string
}

export default function TabsHook(props: TabsProps) {
    //当前活动tab的value
    const [currentValue, setCurrentValue] = useState(props.activeValue || "");
    //计算tab的百分比宽
    const itemWidth = (100 / props.children.length).toFixed(1) + "%";
    //计算activeLine的右移
    let left: string = "0";
    props.children.forEach((element: JSX.Element, index: number) => {
        if (element.props.value === currentValue) {
            left = (100 / props.children.length * index).toFixed(1) + "%";
        }
    });
    //定义tabItem与activeLine的style
    const tabItemStyle = { width: itemWidth, };
    const lineStyle = { width: itemWidth, left: left }

    return (
        <div className="tabs">
            <ul className="tabs-header">
                {
                    props.children && React.Children.map(props.children, (item: JSX.Element, index: number) => {
                        const itemClass = classnames({
                            "tabs-header-item": true,
                            "active": item.props.value === currentValue
                        });
                        return (
                            <li key={"tabs-header-item-" + index} className={itemClass} style={tabItemStyle} onClick={() => setCurrentValue(item.props.value)}>
                                {item.props.name}
                            </li>
                        )
                    })
                }
                <div className="active-line" style={lineStyle}></div>
            </ul>
            <div className="tabs-content">
                {
                    props.children && React.Children.map(props.children, (item: JSX.Element, index: number) => {
                        if (item.props.value === currentValue) {
                            return item.props.children
                        }
                    })
                }
            </div>
        </div>
    )
}
