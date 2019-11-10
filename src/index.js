import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Templates from "./Components/Templates";
import NotFound from "./Components/NotFound";
import MailBox from "./Components/MailBox";


const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Templates}/>
            <Route exact path={'/mailbox'} component={MailBox}/>
            <Route  component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
