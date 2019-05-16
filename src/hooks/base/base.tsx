
import classnames from 'classnames';


//合并当前组件class与父组件class，并输出classnames直接使用
export default function useClassMerge(selfClass?: string | { [key: string]: boolean }, PropsClass?: string | { [key: string]: boolean }) {

    return classnames(selfClass, PropsClass);
}

