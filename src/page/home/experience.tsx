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
            let title = item.companyName + "【" + item.date + "】";
            return (
                <CollapseItem title={title} name={index + ""} key={"work-experience-" + index}>
                    <div className="work company"><div className="icon icon-company" /><div className="text">{item.companyFullName}</div></div>
                    <div className="work date"><div className="icon icon-date" /><div className="text">{item.date}</div></div>
                    <div className="work department"><div className="icon icon-department" /><div className="text">{item.department}</div></div>
                    <div className="work position"><div className="icon icon-position" /><div className="text">{item.position}</div></div>
                    <div className="work responsibility"><div className="icon icon-responsibility" /><div className="text">{item.responsibility}</div></div>
                </CollapseItem>
            )
        });
        return (
            <Collapse>
                {worksDom}
            </Collapse>
        )
    }

    render() {
        return <div className="module-view experience">
            <div className="module-title h1 experience">Experience</div>
            <div className="module-title h2">工作经验</div>
            {this.renderWorkExperience()}
            <div className="module-title h2">项目经验</div>
        </div>
    }
}

export default ExperienceComponent;