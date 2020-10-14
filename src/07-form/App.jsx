import React, { Component } from 'react';

export default class App extends Component {
   state={
       textValue:'',
       textareaValue:'',
       selectValue:''
   }
   handlerChange=()=>{
    return(e)=>{
        this.setState({
            textValue:e.target.value
            
        })
    
   }
   }
   handlerSubmit=()=>{
       return(e)=>{
          e.preventDefault()
          console.log(this.state.textValue);
       }
   }
   handlerAreaChange=()=>{
       return(e)=>{
      this.setState({
          textareaValue:e.target.var
      })
       }
   }
   handlerSelectChange=()=>{
       return(e)=>{
        this.setState({
            selectValue:e.target.value
        })
       }
   }
   
    render() {
        return (
            //受控组件
            <form onSubmit={this.handlerSubmit()}>
                <input type="text" 
                value={this.state.textValue} 
                onChange={this.handlerChange()}/>
                 <br/>

                 <textarea name="" id="" cols="30" rows="10"
                 value={this.state.textareaValue}
                 onChange={this.handlerAreaChange()}>
                 </textarea>
                   <br/>

                 <select 
                 
                 value={this.state.selectValue}
                 onChange={this.handlerSelectChange()}>
                     <option value="0">北京</option>
                     <option value="1">上海</option>
                     <option value="2">深圳</option>
                     
                 </select>
                 <input type="submit" value="提交"/>
            
            </form>
        );
    }
}

