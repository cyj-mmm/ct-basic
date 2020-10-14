import React, { Component } from 'react';

import {Route,Link} from 'react-router-dom'


/* const Child=(props)=>{
    return(
        <div>child</div>
    )
} */
class Child extends Component{
    render(){
        return(
        <div>{this.props.match.params.id}</div>
        )
    }

    componentDidMount(){
        console.log(this);
    }
}


    
class UrlPrametors extends Component {
    render() {
        return (
            <div>
                <Link to='/aaa'>aaa</Link>
                <Link to='/bbb'>bbb</Link>
                <Link to='/ccc'>ccc</Link>

                <Route path='/:id' component={Child}></Route>
            </div>
        );
    }
}

export default UrlPrametors;