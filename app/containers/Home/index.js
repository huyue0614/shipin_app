import React, {Component} from 'react';
import HomeHeader from  '../../components/HomeHeader/index';
import Slider from  '../../components/Slider/index';
import Ad from '../../containers/Home/subpage/Ad';
import List from  './subpage/List';
import {connect} from  'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}></HomeHeader>
                <Slider></Slider>
                <Ad></Ad>
                <List cityName={this.props.userInfo.cityName}></List>
            </div>
        )
    }
}
export default connect(
    state=> {
        return {userInfo: state.userInfo} //去除redux state中userInfo的数据赋予给变量，，userInfo
    },
    dispatch=> {
        return {}
    }
)(Home)