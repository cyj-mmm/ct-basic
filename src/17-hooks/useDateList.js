import {useState,useEffect} from 'react'

const useDateList=function(id){
    let [List,setList]=useState([])

    useEffect(()=>{
 
        setTimeout(()=>{
         id===1?setList(['a','b','c']):setList(['d','e','f'])
        },1000)
        return()=>{

        }
    },[])
    return list
}
export default useDataList