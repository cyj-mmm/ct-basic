import React,{useState} from 'react'
import memoize from 'memoize-one'

const AAA = function (props) {
    return (
        <div>aaa</div>
    )
}

const getNewString = memoize((str) => {
    console.log(10000)
    return str + 'world!';
})

const Child = function (props) {

    return (
        <div>
            <h1>Child</h1>
            <AAA></AAA>
            {getNewString(props.title)}
        </div>
    )
}
export default function Memoization() {
    let [title, setTitle] = useState('hello')
    let [count, setCount] = useState(0)

    return (
        <div>
            <div>{count}</div>
            <Child title={title}></Child>
            <button onClick={() => setTitle('hello ')}>change</button>
            <button onClick={() => setTitle('hello+')}>change</button>
            <button onClick={() => setCount(100)}>change2</button>
            <button onClick={() => setCount(300)}>change3</button>

        </div>
    )
}
