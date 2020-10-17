import React, {useState, useCallback, memo } from 'react'
// import { useCallback } from 'react';
//用于事件缓存

const Child=memo(function(props){
    console.log('child run...')

return (
    <div>
        <h1>hello</h1>
        <button onClick={props.onAdd}>add</button>
    </div>
)
})

export default function UseCallBack() {
console.log('parent run...');
let [count,setCount]=useState(0)

const handleAdd=useCallback(
  ()=>{
      console.log('added...');
  }
)
return(
    <div>
      <div>{count}</div>
      <Child onAdd={handleAdd}></Child>
      <button onClick={()=>setCount(100)}>change count</button>
    </div>
    )  
}
