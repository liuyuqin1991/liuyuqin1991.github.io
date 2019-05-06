import React from 'react';
import BaseComponent from '../../components/base-component';
import ProfileJson from '../../data/jsons/profile.json';

class ProfileComponent extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    renderProfileName(): string {
        return ProfileJson.nameCN + " / " + ProfileJson.nameEN;
    }

    renderProfileTag(): Array<JSX.Element> {
        return ProfileJson.profileTags.map((item, index) => {
            return <li className={"profile-tag-li " + item.code} key={"profile-tag-li" + index}><div style={{ marginTop: "-2px" }}>{item.name}</div></li>
        })
    }

    render() {
        return <div className="module-view profile">
            <div className="profile-img"></div>
            <div className="profile-name">
                {this.renderProfileName()}
            </div>
            <ul className="profile-tag-ul">
                {this.renderProfileTag()}
            </ul>
        </div>
    }
}

export default ProfileComponent;