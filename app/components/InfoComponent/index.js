import React,{Component} from 'react';
import Star from '../Star/index';
import './index.less'
export default class InfoComponent extends Component{
    render(){
        let {img,star,desc,title,subTitle,price}=this.props.data;
        return (
            <div  className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div>
                        <h3>{title}</h3>
                        <div className="info-star">
                            <Star count={star}/><span>￥{price}</span>
                        </div>
                        <span>{subTitle}</span>
                    </div>
                </div>
               <div dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>
        )
    }
}