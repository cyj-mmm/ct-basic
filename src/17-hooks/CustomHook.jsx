import React, {  useState } from 'react'
// import useDataList from './useDateList'
import useCount from './useCount'

export default function CustomHook () {
 let [x,setX]=useState(0)
 
let [v,a,m]=useCount(0)
console.log(useDataList(1));
 return(
     <div>
         <button onClick={()=>m(1)}>-</button>
            hello{v}
         <button onClick={()=>a(1)}>+</button>

     </div>
 )
}
