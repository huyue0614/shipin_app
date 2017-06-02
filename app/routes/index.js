import React,{Component} from 'react';
//路由的两种类型 HashRouter BrowserRouter
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        {/*先跳到登录页，登录后再回到之前的登录页*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}