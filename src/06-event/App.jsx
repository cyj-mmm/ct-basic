import React, { Component } from 'react';

export default class App extends Component {
   //让bind只绑定一次
    constructor(props) {
        super(props)
        //组件内使用箭头函数（推荐），性能有所提高，bind方法
        this.handleClick = this.handleClick.bind(this)
    }

    state = {
        count: 0
    }
   /*  handleClick(args) {
        console.log(args);
    } */
     //事件传参 ,args  
     //是一个柯里化函数
     handleClick=(args)=>{
         return(event)=>{
             console.log(event.target);
         }
         //柯里化函数，箭头函数
     }
     
    render() {
        return(
        <div>
            <button onClick={this.handleClick('xxx')}>click</button>
        </div>
        )
    }

}