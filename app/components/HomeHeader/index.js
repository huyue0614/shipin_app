import React,{Component} from 'react';
//主页头部组件
import '../../assets/index.less'
import './index.less';
import {Link} from 'react-router-dom';
export default class Home extends Component{
    render(){
        return (
            <div className="home-Header">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-xiangxia2"></i>
                </div>
                <div className="serach">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    <input type="text"/>
                </div>
                <Link to="/login">
                <div className="fill">
                    <i className="iconfont icon-yonghufill"></i>
                </div>
               </Link>
            </div>
        )
    }
}