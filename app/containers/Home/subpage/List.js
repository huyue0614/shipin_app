import React,{Component} from 'react';
import {getList} from  '../../../fetch/home';
import ListComponent from '../../../components/ListComponent/index';
import LoadMore from  '../../../components/loadMore/index';
export default class List extends Component{
    constructor(){
        super();
        this.state={
            hasMore:true,
            data:[],
            page:0,
            isLoading:true
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?
                    <ListComponent data={this.state.data}/>
                    :<div>正在加载</div>}
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0));
    }
//    在当前写一个加载更多的函数，传递给loadMore，当点击按钮，加载更多
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true   //每次加载更多时，状态都应该为正在加载
        },()=>{//这个函数可以获取最新的页面的状态
            this.processData(getList(this.props.cityName,this.state.page));
        })
    }
//    处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
          this.setState({
              hasMore,
              data:this.state.data.concat(data),
              isLoading:false
          })
        })
    }
}