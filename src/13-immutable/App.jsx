import React, { Component } from 'react'
import {List} from 'immutable'
export default class App extends Component {
    render() {

 /* let x={
     a:0,
     b:1
 }
 
 let y={
    a:0,
    b:1
}
console.log(x===y); */

/* const map1=Map({
    a:0,
    b:2
});
let map2=map1.set('a',100)
console.log(map1);
console.log(map2); */

const list=List['a','b','c']
console.log(list);

        return (
            <div>
                immutable
            </div>
        )
    }
}
