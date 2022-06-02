import React from 'react';
import BaseComponent from '../../components/base-component';
import { Collapse, CollapseItem } from '../../hooks/collapse';
import ExperienceJson from '../../data/jsons/experience.json';

interface WorkExperience {
  companyName: string;
  companyFullName: string;
  date: string;
  department: string;
  position: string;
  responsibility: Array<string>;
}

interface ProjectExperience {
  name: string;
  company: string;
  date: string;
  description: string;
  responsibility: Array<string>;
  technology: string;
  web?: Array<{
    name: string;
    url: string;
  }>;
}

class ExperienceComponent extends BaseComponent {
  renderWorkExperience(): JSX.Element {
    let workDom = ExperienceJson.workExperience.map(
      (item: WorkExperience, index: number) => {
        let title = item.companyName + '【' + item.date + '】';
        return (
          <CollapseItem
            title={title}
            name={index + ''}
            key={'work-experience-' + index}
          >
            <div className="experience-item company">
              <div className="icon icon-company" />
              <div className="text">{item.companyFullName}</div>
            </div>
            <div className="experience-item date">
              <div className="icon icon-date" />
              <div className="text">{item.date}</div>
            </div>
            <div className="experience-item department">
              <div className="icon icon-department" />
              <div className="text">{item.department}</div>
            </div>
            <div className="experience-item position">
              <div className="icon icon-position" />
              <div className="text">{item.position}</div>
            </div>
            <div className="experience-item responsibility">
              <div className="icon icon-responsibility" />
              <div className="text">
                {item.responsibility.map((text: string, index: number) => {
                  return (
                    <div
                      key={'work-experience-responsibility-' + index}
                      style={{ marginTop: index === 0 ? '0' : '10px' }}
                    >
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>
          </CollapseItem>
        );
      }
    );
    return <Collapse>{workDom}</Collapse>;
  }

  renderProjectExperience(): JSX.Element {
    let projectDom = ExperienceJson.projectExperience.map(
      (item: ProjectExperience, index: number) => {
        return (
          <CollapseItem
            title={item.name}
            name={index + ''}
            key={'project-experience-' + index}
          >
            <div className="experience-item company">
              <div className="icon icon-company" />
              <div className="text">{item.company}</div>
            </div>
            <div className="experience-item date">
              <div className="icon icon-date" />
              <div className="text">{item.date}</div>
            </div>
            <div className="experience-item description">
              <div className="icon icon-description" />
              <div className="text">{item.description}</div>
            </div>
            <div className="experience-item technology">
              <div className="icon icon-technology" />
              <div className="text">{item.technology}</div>
            </div>
            <div className="experience-item responsibility">
              <div className="icon icon-responsibility" />
              <div className="text">
                {item.responsibility.map((text: string, index: number) => {
                  return (
                    <div
                      key={'project-experience-responsibility-' + index}
                      style={{ marginTop: index === 0 ? '0' : '10px' }}
                    >
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>
            {item.web && (
              <div className="experience-item web">
                <div className="icon icon-web" />
                <div className="text">
                  {item.web.map((item: any, index: number) => {
                    return (
                      <a
                        key={'project-experience-web-' + index}
                        href={item.url}
                        style={{ marginTop: index === 0 ? '0' : '10px' }}
                      >
                        {item.name}
                        <br></br>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </CollapseItem>
        );
      }
    );
    return <Collapse>{projectDom}</Collapse>;
  }

  renderLibExperience() {
    let projectDom = ExperienceJson.libExperience.map(
      (item: ProjectExperience, index: number) => {
        return (
          <CollapseItem
            title={item.name}
            name={index + ''}
            key={'project-experience-' + index}
          >
            <div className="experience-item company">
              <div className="icon icon-company" />
              <div className="text">{item.company}</div>
            </div>
            <div className="experience-item date">
              <div className="icon icon-date" />
              <div className="text">{item.date}</div>
            </div>
            <div className="experience-item description">
              <div className="icon icon-description" />
              <div className="text">{item.description}</div>
            </div>
            <div className="experience-item technology">
              <div className="icon icon-technology" />
              <div className="text">{item.technology}</div>
            </div>
            <div className="experience-item responsibility">
              <div className="icon icon-responsibility" />
              <div className="text">
                {item.responsibility.map((text: string, index: number) => {
                  return (
                    <div
                      key={'project-experience-responsibility-' + index}
                      style={{ marginTop: index === 0 ? '0' : '10px' }}
                    >
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>
            {item.web && (
              <div className="experience-item web">
                <div className="icon icon-web" />
                <div className="text">
                  {item.web.map((item: any, index: number) => {
                    return (
                      <a
                        key={'project-experience-web-' + index}
                        href={item.url}
                        style={{ marginTop: index === 0 ? '0' : '10px' }}
                      >
                        {item.name}
                        <br></br>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </CollapseItem>
        );
      }
    );
    return <Collapse>{projectDom}</Collapse>;
  }

  render() {
    return (
      <div className="module-view experience">
        <div className="module-title h1 experience">Experience</div>
        <div className="module-title h2">工作经验</div>
        {this.renderWorkExperience()}
        <div className="module-title h2">项目经验</div>
        {this.renderProjectExperience()}
        <div className="module-title h2">组件库经验</div>
        {this.renderLibExperience()}
      </div>
    );
  }
}

export default ExperienceComponent;
