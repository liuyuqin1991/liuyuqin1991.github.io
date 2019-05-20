import React from 'react';
import BaseComponent from '../../components/base-component';
import Footer from '../../hooks/footer/footer';
import Tag from '../../components/tag/tag';
import MusicJson from '../../data/jsons/music.json';

import './index.scss'

interface Music {
    //标题
    title: string
    //标签
    tag: Array<string>
    //时间
    date: string
    //链接
    link: string
}

interface MusicProps {

}

interface MusicState {
    musicList: Array<Music>
    activeTag: string
}


class MusicComponent extends BaseComponent<MusicProps, MusicState> {

    constructor(props: MusicProps) {
        super(props)
        this.state = {
            musicList: [],
            activeTag: "全部",
        }
    }

    componentDidMount() {
        this.setState({
            musicList: MusicJson.musicList
        })
    }

    renderHTML(html: string): JSX.Element {
        return <div dangerouslySetInnerHTML={{ __html: html }}></div>
    }

    renderMusicList(): JSX.Element {
        const musics = this.state.musicList.map((item, index) => {
            const tags = item.tag.map((t, n) => {
                return <Tag label={t} key={"tag-item-" + n}> /</Tag>
            });
            return (
                <li className="music-li" key={"music-item" + index}>
                    {this.renderHTML(item.link)}
                    <div className="item-title">{item.title}</div>
                    <div className="tag-view">
                        <div className="tags-icon"></div>
                        {tags}
                    </div>
                    <div className="item-date">{item.date}</div>
                </li>)
        })
        musics.push(
            <li className="music-li" key={"music-item-last"}>
                查看更多 >
            </li>
        );
        return (
            <ul className="music-ul">
                {musics}
            </ul >
        )
    }

    render() {
        return (
            <>
                <div className="module-music">
                    {this.renderMusicList()}
                </div>
                <Footer className="music-footer" activeMenu="music"></Footer>
            </>
        )
    }
}

export default MusicComponent;