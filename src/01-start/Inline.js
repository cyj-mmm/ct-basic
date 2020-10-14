import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom'

class inline extends Component {
   //设置默认属性defaultProps
    static defaultProps={
       name:'React'
   }

    render() {
        return (
            <h1 style={{color:'red',fontSize:'50px'}}>
                welcome to my world
            </h1>
        )
    }
}

export default inline;