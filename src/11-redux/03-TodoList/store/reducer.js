const defaultState={
    list:['task1','task2']
}

export default(state=defaultState,action)=>{
switch(action.type){
    case 'SET_DATA':
        console.log(action.data);
        return state
    case 'PUT_DATA':
        return{
            list:[
                ...state.List,
                action.task
            ]
        }
        case 'REMOVE_DATE':
            let newList=state.list.filter((value,index)=>{
                return index!==action.index
            })
            return {
                ...state,
                list:newList
            }
        default:
            return state
}

}