import React from "react";
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import history from './history';

import TodoList from '../pages/TodoList';
import SingIn from '../pages/SingIn';

export const isAuthenticated = () => true;

const PrivateRouter = ({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: {from : props.location}}}/>
            )
        }
     />
);

const Routes = () => (
    <Router history={history}>
        <Switch>
            <PrivateRouter exact path="/todo" component={TodoList} />
            <Route exact path="/" component={SingIn} />
        </Switch>
    </Router>
);
    


export default Routes;