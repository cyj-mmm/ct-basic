import React, { Component } from 'react';

class ChildA extends Component {
    render() {
        return (
            <div>
                childa
            </div>
        );
    }
}

class ChildB extends Component {
    render() {
        return (
            <div>
                <ChildC></ChildC>
            </div>
        );
    }
}

const ChildD = function (props) {
    return (
        <div>
            ChildC
        </div>
    )
}

const ChildC = function (props) {
    return (
        <div>
            <ChildD></ChildD>
        </div>
    )
}


export default class App extends Component {
    render() {
        return (
            <div>
                <ChildA></ChildA>
                <ChildD></ChildD>
            </div>
        )
    }

}