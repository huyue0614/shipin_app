import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import {connect} from  'react-redux'
import LoginComponet from '../../components/LoginComponet/index'
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
class Login extends Component{
    constructor(){
        super();
        this.state={
            login:false   //默认没登录过
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {this.state.login?<LoginComponet login={this.login.bind(this)}/>:<div></div>}
            </div>
        )
    }
    login(username){
         let info= this.props.userInfo;
         info.username=username;
         this.props.userActions.update(info);
        if(this.props.match.params.route){
            this.props.history.push(this.props.match.params.route);
        }else {
            this.props.history.push('/user');
        }
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){
        if(this.props.userInfo.username){
          return  this.props.history.push('/user');
        }
        this.setState({
            login:true
        })
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
       return {userActions:bindActionCreators(Actions,dispatch)}
    }

)(Login)