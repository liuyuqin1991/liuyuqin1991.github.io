import React from 'react';
import BaseComponent from '../../components/base-component';
import { Collapse, CollapseItem } from '../../hooks/collapse';
import ExperienceJson from '../../data/jsons/experience.json';

interface WorkExperience {
    companyName: string
    companyFullName: string
    date: string
    department: string
    position: string
    responsibility: string
}

class ExperienceComponent extends BaseComponent {

    renderWorkExperience() {
        let worksDom = ExperienceJson.workExperience.map((item: WorkExperience, index: number) => {
            return (
                <CollapseItem title={item.companyName + "【" + item.date + "】"} name={index + ""}>
                    <div className="work company">{item.companyFullName}</div>
                    <div className="work date">{item.date}</div>
                    <div className="work company">{item.department}</div>
                    <div className="work company">{item.position}</div>
                    <div className="work company">{item.responsibility}</div>
                </CollapseItem>
            )
        });
        return (
            <Collapse name="">
                {worksDom}
            </Collapse>
        )
    }

    render() {
        return <div className="module-view experience">
            <div className="module-title h1 user">Experience</div>
            <div className="module-title h2">工作经验</div>
            {this.renderWorkExperience()}
            <div className="module-title h2">项目经验</div>
        </div>
    }
}

export default ExperienceComponent;