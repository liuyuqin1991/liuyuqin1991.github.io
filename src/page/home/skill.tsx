import React from 'react';
import BaseComponent from '../../components/base-component';
import SkillJson from '../../data/jsons/skill.json';
import { Tabs, TabItem } from '../../hooks/tabs';


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
                return <li className={"skill-li"} key={"skill-li-" + index}>
                    <div className="flex-row-spacebetweenP-centerS">
                        <div className="skill-name">{item.name + "【" + item.use + "年】"}</div>
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
                        return <li className={"skill-tags-li"} key={"skill-tags-li-" + index}>{item}</li>
                    })}
                </ul>
            </div>
            <div className="module-title h2">能力</div>
            <Tabs className="skill-view" activeValue="1">
                <TabItem name="语言类" value="1">{this.renderSkill(SkillJson.languageSkill)}</TabItem>
                <TabItem name="框架类" value="2">{this.renderSkill(SkillJson.frameSkill)}</TabItem>
                <TabItem name="组件类" value="3">{this.renderSkill(SkillJson.libSkill)}</TabItem>
                <TabItem name="其他类" value="4">{this.renderSkill(SkillJson.otherSkill)}</TabItem>
            </Tabs>
        </div>
    }
}

export default SkillComponent;