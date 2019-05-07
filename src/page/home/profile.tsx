import React from 'react';
import BaseComponent from '../../components/base-component';
import ProfileJson from '../../data/jsons/profile.json';

class ProfileComponent extends BaseComponent {

    render() {
        return <div className="module-view profile">
            <div className="profile-img"></div>
            <div className="profile-name">
                {ProfileJson.nameCN + " / " + ProfileJson.nameEN}
            </div>
            <ul className="profile-tag-ul">
                {ProfileJson.profileTags.map((item, index) => {
                    return <li className={"profile-tag-li " + item.code} key={"profile-tag-li" + index}><div style={{ marginTop: "-2px" }}>{item.name}</div></li>
                })}
            </ul>
        </div>
    }
}

export default ProfileComponent;