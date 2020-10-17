import React from 'react'
import {useState,useEffect} from 'react'

export default function (props){
    let [data,setDate]=useState({count:0})

    function loadData(){
    return fetch('http://localhost:8080/api/movies/list').then(response=>response.json())
    .then(result=>{
        return result
    })
    }
    useEffect(()=>{
      console.log('effect')
    },[data])
    useEffect(()=>{
        console.log('mounted');
        (async()=>{
            let result=await loadData()
            console.log(result);
        })()
    },[])
    return(
        <>
         <div>{data.count}</div>
         <button onClick={()=>{
             setDate(data=>({count:data.count+1}))
         }}>click</button>
        </>
    )
}