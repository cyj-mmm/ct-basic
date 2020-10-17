
//Broswer app浏览器,Native app原生
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import {Provider} from 'react-redux'
// import store from './11-redux/03-TodoList/store'
// import store from './11-redux/02-redux/redux+react/store'

//import App from './01-start/ClassStyle';
// import App from './06-event/App.jsx'
// import App from './07-form/App.jsx'
// import App from "./07-form/MultiPick"
// import App from  './08-todoList/ToDoList'
// import App from './10-context/App'
// import App from './11-redux/01-self/App'
// import App from './11-redux/02-redux/redux+react/App'
//  import App from './11-redux/03-TodoList/TodoList'
// import App from './12-router/Basic'
// import App from './12-router/UrlPrametors'
// import App from './12-router/Nesting'
// import App from './12-router/CustomLink'
// import App from './12-router/Redict.jsx'
// import App from './12-router/Auth.jsx'
// import App from './12-router/Params'
// import App from './12-router/Page404'
// import App from './12-router/RecurisivePath'
// import App from './13-immutable/App'
// import App from './14-lazy/App'
// import App from './17-hooks/UseState'
// import App from './17-hooks/UseEffect'
// import App from './17-hooks/UseContext'
// import App from './17-hooks/UseReducer'
// import App from './17-hooks/UseCallback'
// import App from './17-hooks/UseMemo'
// import App from './17-hooks/Memoization.jsx'
// import App from './17-hooks/CustomHook.jsx'
import App from './17-hooks/UseImperativeHandle.jsx'

//  import {BrowserRouter} from 'react-router-dom'

/* ReactDOM.render(
  <BrowserRouter>
     <App></App>,
  </BrowserRouter>,
     document.querySelector('#root')
) */ 
ReactDOM.render(
  <App></App>,
  document.querySelector('#root')

)
/* ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider> , 
  document.querySelector('#root')
) */
/* function render(){
  ReactDOM.render(
      <App/>,
     document.querySelector('#root')

  )
}

store.subscribe(render)
render() */

/* const App=(props)=>{
  let {title}=props//解构
  return <div>hello{title}</div>
} */


//HTML元素，React组件
//React元素 camel-case，React组件 ：首字母大写 pascal-case


/* ReactDOM.render( 
  // <App></App>,//类的实例化</App>可以使用自关闭
   <App title='!!!'></App>,
   document.querySelector('#root')//挂载到根元素
); */

/* class App extends  React.Component{
  render(){
    return(
      <div className="app" id="approot">
      <h1 className="title">hello</h1>
      <p>aaa is a library</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')

) */

//函数式组件,直接调用
/* const App=(props)=>
<h1>{props.name}</h1>

ReactDOM.render(
  <App name='react'/>,
  
  document.getElementById('root')
) */


//class组件，每次使用组件都相当于实例化组件
/* class App extends React.Component{
  render(){
    return(
      <h1>welcome to {this.props.name}Space</h1>
    )
  }
}

ReactDOM.render(
  <App name="my"/>,
  document.getElementById('root')
) */



//组件的组合，嵌套
/* class Title extends Component{
  render(){
    return(
      <h1>welocome to to myhome</h1>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <p>Recact is a library </p>
    )
  }
}
class App extends Component{
  render(){
    return(
      <Fragment>
        <Title></Title>
        <Content/>
      </Fragment>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
) */


//jsx原理

/* class App extends React.Component{
  render(){
    return(
      React.createElement(
        "div",{
          className:'app',
          id:'appRoot'
        },
        React.createElement(
          "h1",
          {className:'title'},
          "welcome to my home"
        ),
        React.createElement(
          'P',
          null,
          'React is a library to constructor UI view'
        )
      )
    )
  }
}
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
) */

