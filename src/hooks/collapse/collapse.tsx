import React, { useState } from 'react';

interface CollapseProps {
    name?: string
    children?: Array<JSX.Element>
}

export default function CollapseHook(props: CollapseProps) {

    const [activeNames, setActiveNames] = useState(props.name || '');

    const handleItemClick = (name: string): void => {
        let newName = activeNames === name ? '' : name
        setActiveNames(newName);
    }

    const content = React.Children.map(props.children!, (child: JSX.Element, idx: number) => {
        const name = child.props.name;
        return React.cloneElement<any>(child, {
            isActive: activeNames.indexOf(name) > -1,
            key: idx,
            name: name,
            onClick: (name: string) => handleItemClick(name)
        });
    });

    return <div className="collapse">
        {content}
    </div>
}
