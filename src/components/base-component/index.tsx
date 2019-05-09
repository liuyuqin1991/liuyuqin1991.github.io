import React from 'react';
import classnames from 'classnames';
interface ClassDictionary {
    [id: string]: boolean | undefined | null;
}

interface ClassArray extends Array<ClassValue> { }
type ClassValue =
    | string
    | number
    | ClassDictionary
    | ClassArray
    | undefined
    | null
    | boolean;

export interface BaseProps {
    /**
     * 自定义class
     */
    className?: string;
    /**
     * 自定义样式
     */
    style?: React.CSSProperties;
    /**
     * 子节点
     */
    children?: any;
}

export default class BaseComponent<
    TProps = {},
    TState = {},
    SS = {}
    > extends React.Component<BaseProps & TProps, TState, SS> {

    classNames(...args: ClassValue[]) {
        return classnames(args);
    }

    className(...args: ClassValue[]) {
        return this.classNames.apply(this, args.concat([this.props.className]));
    }

    style(args?: React.CSSProperties) {
        return Object.assign({}, args, this.props.style);
    }

}