import React, { Component } from 'react';


export default class State extends Component{
   
   //01-构造函数
    /*  constructor(props){
        super(props)
        this.state={
           isShow:true
        }
    } */

  //02-state属性
   state={
       isShow:true
    }

    render(){
        return(
        <div> state:{JSON.stringify(this.state.isShow)}</div>

        )
    }
}
