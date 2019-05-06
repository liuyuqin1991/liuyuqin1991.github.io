import React from 'react';
import BaseComponent from '../../components/base-component';
import Tag from '../../components/tag/tag';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Blog } from './interface';
import BlogData from '../../data/jsons/blog.json';
import './index.scss'

interface BlogProps {

}

interface BlogState {
    blogList: Array<Blog>
}


class BlogComponent extends BaseComponent<BlogProps, BlogState> {


    constructor(props: BlogProps) {
        super(props)
        this.state = {
            blogList: []
        }
    }

    componentDidMount() {
        this.setState({
            blogList: BlogData.blogList
        })
    }

    renderItem(): JSX.Element {
        const blogs = this.state.blogList.map((item, index) => {
            const tags = item.tag.map((t, n) => {
                return <Tag label={t} key={"tag-item" + n} />
            });
            return (
                <li className="blog-li" key={"blog-item" + index}>
                    <div className="item-view">
                        <div className="title">
                            <a href={item.link}>{item.title}</a>
                        </div>
                        <div className="tag-view">
                            {tags}
                        </div>
                        <div className="date">
                            {item.date}
                        </div>
                    </div>
                </li>)
        })
        return (<ul className="blog-ul">
            {blogs}
        </ul >)
    }

    render() {
        return (
            <div className="blog">
                <div className="blog-overlay"></div>
                <div className="line-center-axis"></div>
                <Header title="我的博客"></Header>
                {this.renderItem()}
                <Footer className="bolg-footer"></Footer>
            </div>
        )
    }
}

export default BlogComponent;