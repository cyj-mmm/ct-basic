import React,{useState,useMemo,memo} from 'react'
//缓存组件
const ChildHood=function(props){
    return(
        <div>child hood</div>
    )
}

const Child=memo(function({a,b,onAdd}){
    console.log('child run...');

    const Child1=useMemo(()=>()=><ChildHood a={a}></ChildHood>)
    const Child2=useMemo(()=>()=><ChildHood b={b}></ChildHood>)

return(
    <>
    
    <h1>hello</h1>
    <button onClick={onAdd}>add</button>
    <Child1></Child1>
    <Child2></Child2>
    </>
)
})
export default function UseCallback(){
    console.log('parent run...');
    let [count,setCount]=useState(0)

    const handleAdd=useMemo(() => {
        return()=>{
            console.log('added...');
        }
    },[])
    return(
        <>
         <div>{count}</div>
         <Child
         onAdd={handleAdd}
         a={'abc'}
         ></Child>
         <button onClick={()=>setCount(100)}>change count</button>
        </>
   
    )
}
