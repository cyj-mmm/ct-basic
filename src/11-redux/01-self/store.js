import { reducer } from './reducer'
let state = {
  count: 0
}

const createStore = () => {

  //getstate 获取方法

  const getState = () => state

  //观察者模式,
  const listeners = []
  //subscribe
  const subscribe = listener => listeners.push(listener)

  const dispatch = action => {
    state = reducer(state, action)

    //publish
    listeners.forEach(listener => listener())
  }


  return {
    dispatch,
    getState,
    subscribe
  }
}

const store = createStore()

const render = () => {
  document.querySelector("#count").innerHTML = store.getState().count

}
store.subscribe(render)

export default store







