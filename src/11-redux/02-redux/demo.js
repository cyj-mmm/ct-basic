const{createStore}=require('redux')

const reducer=require('./redux+react/reducer')

const store=createStore(reducer)

//订阅者，只要发生变化就能侦测到
store.subscribe(()=>{
    console.log(store=getState().count);
})

store.dispatch({ type:'increment'})

/* store.dispatch({
    type:'increment'
})
console.log(store.getState().count); */