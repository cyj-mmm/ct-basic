

//纯函数
//1.相同的入参得到相同的输出
//2.不能修改入参
 const reducer=(state,action)=>{
     action=action||{type:''}
     switch(action.type){
         case 'increment':
             return{
                 ...state,//读取
                 count:state.count+1//新对象，没有改变原有对象
             }
         case 'decrement':
            return{
                ...state,//读取
                count:state.count-1//新对象，没有改变原有对象
            }
        default:
            return state
        
     }
 }
 export {
 
     reducer
 }