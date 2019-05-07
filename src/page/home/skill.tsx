import React from 'react';
import BaseComponent from '../../components/base-component';
import SkillJson from '../../data/jsons/skill.json';

interface SkillInfo {
    name: string
    level: number
    use: number
}

class SkillComponent extends BaseComponent {

    skillLevelMap: any = { 1: "了解", 2: "良好", 3: "熟练", 4: "精通" }

    renderSkill(skills: Array<SkillInfo>) {
        return <ul className="skill-ul">
            {skills.map((item: SkillInfo, index: number) => {
                let line: JSX.Element = <div className="line active" style={{ width: (item.level - 1) * 33 + "%" }}></div>;
                let circle: Array<JSX.Element> = [0, 1, 2, 3].map((num: number) => {
                    const circleClass: any = { "circle": true, "active": num < item.level };
                    return <div className={this.classNames(circleClass)} style={{ left: num * 33 + "%" }}></div>
                });
                return <li className={"skill-li"} key={"skill-li" + index}>
                    <div className="flex-row-spacebetweenP-centerS">
                        <div className="skill-name">{item.name + "【" + item.use + "年】"}</div>
                    </div>
                    <div className="skill-info">
                        <div className="line">
                            {line}
                            {circle}
                        </div>
                        <div className="skill-level">{this.skillLevelMap[item.level]}</div>
                    </div>
                </li>
            })}
        </ul>
    }

    render() {
        return <div className="module-view skill">
            <div className="module-title h1 skill">Skill</div>
            <div className="module-title h2">职位</div>
            <div className="skill-tags-view">
                <div className="tags-icon"></div>
                <ul className="skill-tags-ul">
                    {SkillJson.tags.map((item, index) => {
                        return <li className={"skill-tags-li"} key={"skill-tags-li" + index}>{item}</li>
                    })}
                </ul>
            </div>
            <div className="module-title h2">语言类</div>
            {this.renderSkill(SkillJson.languageSkill)}
            <div className="module-title h2">框架类</div>
            {this.renderSkill(SkillJson.frameSkill)}
            <div className="module-title h2">组库类</div>
            {this.renderSkill(SkillJson.libSkill)}
            <div className="module-title h2">其他类</div>
            {this.renderSkill(SkillJson.otherSkill)}
        </div>
    }
}

export default SkillComponent;