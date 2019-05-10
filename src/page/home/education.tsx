import React from 'react';
import BaseComponent from '../../components/base-component';
import { Collapse, CollapseItem } from '../../hooks/collapse';
import ExperienceJson from '../../data/jsons/experience.json';

class EducationComponent extends BaseComponent {


    render() {
        return <div className="module-view education">
            <div className="module-title h1 education">Education</div>
            <div className="module-title h2">教育经历</div>
        </div>
    }
}

export default EducationComponent;