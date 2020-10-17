import React, { Component, lazy, Suspense } from 'react';
// import Child from './Child';
const Child = lazy(() => import('./Child'))

export default class App extends Component {

    state = {
        show: false
    }

    handleClick = () => {
        this.setState({
            show: true
        })
    }
    render() {
        return (
            <div>
                <div>
                <button onClick={this.handleClick}>show</button>

                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        this.state.show && <Child></Child>
                    }
                </Suspense>
                {/* <button>+</button> */}
            </div>
        );
    }
}

