import React,{Component} from 'react';
import './index.less'
export default class UserInfo extends Component{
    render(){
        return (
            <div>
                UserInfo
                {this.props.userInfo.username}
                {this.props.userInfo.cityName}
            </div>
        )
    }
}