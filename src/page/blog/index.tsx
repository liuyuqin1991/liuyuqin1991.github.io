import React from 'react';
import BaseComponent from '../../components/base-component';
import Tag from '../../components/tag/tag';
import Footer from '../../hooks/footer/footer';
import BlogJson from '../../data/jsons/blog.json';

import './index.scss'

interface Blog {
    //标题
    title: string
    //标签
    tag: Array<string>
    //链接
    link: string
    //时间
    date: string
}

interface BlogProps {

}

interface BlogState {
    blogList: Array<Blog>
    tagsList: Array<string>
    activeTag: string
}


class BlogComponent extends BaseComponent<BlogProps, BlogState> {

    constructor(props: BlogProps) {
        super(props)
        this.state = {
            blogList: [],
            tagsList: [],
            activeTag: "全部",
        }
    }

    componentDidMount() {
        this.setState({
            blogList: BlogJson.blogList,
            tagsList: BlogJson.tagsList,
        })
    }

    onTagsClick(tag: string) {
        this.setState({
            activeTag: tag
        })
    }


    renderTagsList(): JSX.Element {
        const tags = this.state.tagsList.map((item: string, index: number) => {
            const liClass = this.classNames({
                "tag-li": true,
                "active": this.state.activeTag === item
            })
            return <li key={"tag-li-" + index} onClick={this.onTagsClick.bind(this, item)} className={liClass}>{item}</li>
        });
        return (
            <ul className="tags-ul">
                {tags}
            </ul>
        )
    }


    renderBlogList(): JSX.Element {
        const listFilter = (item: Blog, index: number) => {
            if (this.state.activeTag === "全部") {
                return true;
            }
            else {
                return item.tag.includes(this.state.activeTag)
            }
        }
        const blogs = this.state.blogList.filter(listFilter).map((item, index) => {
            const tags = item.tag.map((t, n) => {
                return <Tag label={t} key={"tag-item-" + n}> /</Tag>
            });
            return (
                <li className="blog-li" key={"blog-item" + index}>
                    <div className="item-view">
                        <div className="title">
                            <a href={item.link}>{item.title}</a>
                        </div>
                        <div className="tag-view">
                            <div className="tags-icon"></div>
                            {tags}
                        </div>
                        <div className="date">
                            {item.date}
                        </div>
                    </div>
                </li>)
        })
        return (
            <ul className="blog-ul">
                {blogs}
            </ul >
        )
    }

    render() {
        return (
            <>
                <div className="moodule-blog">
                    {this.renderTagsList()}
                    {this.renderBlogList()}
                </div>
                <Footer className="bolg-footer" activeMenu="blog"></Footer>
            </>
        )
    }
}

export default BlogComponent;