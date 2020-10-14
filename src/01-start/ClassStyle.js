import React, { Component } from 'react';
import classNames from 'classnames/bind'
import  styles from'./style.css'
import {DivContainer} from './styledCss.js'

let cx=classNames.bind(styles)


class ClassStyle extends Component {
    render() {

        let className=cx({
            font:false
        })
        return (
            <>
              <div className={className}>hello</div>  
             <DivContainer>
              world
             </DivContainer>
            
              </>
             // <div className='font'>hello</div>
        );
    }
}

export default ClassStyle;