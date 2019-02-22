import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/home';
import Blog from './page/blog';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/blog" component={Blog} />
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
