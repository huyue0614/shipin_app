import React,{Component} from 'react';
import './index.less';
export default class loadMore extends Component{
    render(){
        return (
            <div className="has-more">
                {this.props.hasMore?<div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>:<div>我是有底线的</div>}
            </div>
        )
    }
    componentDidMount(){
    //  绑定滚动事件
        this.fn=()=>{
            clearTimeout(this.timer);
           this.timer=setTimeout(()=>{
               if(this.props.isLoading){
                   return;
               }
               let screen=window.screen.height;
               let top=this.refs.more.getBoundingClientRect().top;
               if(top<screen){
                   this.props.loadMore();
               }
               console.log(this.refs.more);
            },50)
        };
        window.addEventListener('scroll',this.fn);

    }
    componentWillUnmount(){
    //    移出滚动事件
        window.removeEventListener('scroll',this.fn);

    }
    loadMore(){//调用父级传递过来的加载更多函数

        if(this.props.isLoading){
            return;
        }
        this.props.loadMore();
    }
}