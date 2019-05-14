import React from 'react';
import BaseComponent from '../../components/base-component';
import { Collapse, CollapseItem } from '../../hooks/collapse';
import EducationJson from '../../data/jsons/education.json';

interface Education {
    name: string
    date: string
    major: string
    degree: string
}


class EducationComponent extends BaseComponent {

    renderEducationExperience() {
        let educationDom = EducationJson.education.map((item: Education, index: number) => {
            return (
                <CollapseItem title={item.name} name={index + ""} key={"education-" + index}>
                    <div className="education-item school"><div className="icon icon-school" /><div className="text">{item.name}</div></div>
                    <div className="education-item date"><div className="icon icon-date" /><div className="text">{item.date}</div></div>
                    <div className="education-item major"><div className="icon icon-major" /><div className="text">{item.major}</div></div>
                    <div className="education-item degree"><div className="icon icon-degree" /><div className="text">{item.degree}</div></div>
                </CollapseItem>
            )
        });
        return (
            <Collapse>
                {educationDom}
            </Collapse>
        )
    }

    render() {
        return <div className="module-view education">
            <div className="module-title h1 education">Education</div>
            <div className="module-title h2">教育经历</div>
            {this.renderEducationExperience()}
        </div>
    }
}

export default EducationComponent;