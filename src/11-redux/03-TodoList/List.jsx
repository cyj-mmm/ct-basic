import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    removeAction,
    loaddataAction
} from './store/actionCreator'

const mapState = (state) => {
    return {
        list: state.list
    }
}
const mapDispatch = dispatch => {
    return {
        remove(index) {
            dispatch(removeAction(index))
        },
        loadData() {
            dispatch(loaddataAction())
        }
    }

}
@connect(mapState, mapDispatch)
//返回值为高阶组件
class List extends Component {
    handleClick = index => {
        return () => {
            this.props.remove(index)
        }
    }
    componentDidMount(){
        this.props.loadData()
    }
    render() {
        return (
            <ul>
                {
                    this.props.list.map((value, index) => {
                        return (
                            <ul>
                                {
                                    this.props.list.map((value,index)=>{
                                        let{
                                            positionId,
                                            positionName
                                        }=value
                                    return(
                                        <li key={positionId}>
                                            {positionName}
                                            <button onClick={this.handleClick(index)}>remove</button>
                                        </li>
                                    )

                                    })

                                }
                            </ul>
                        )
                    })
                }
            </ul>
        );

    }
}

export default List
