import React, { Component } from 'react';

export default class MultiPick extends Component{
    state={
        isGong:false,
        numberGuests:0,
        textValue:''
    }

    handlerChange=()=>{
        return(e)=>{
            let name=e.target.name
            let value=name==="isGoing" ? e.target.checked : e.checked.value
            this.setState({
                [name]:value
            })
        }
    }

    handlerClick=()=>{
   return()=>{
       console.log(this.state.isGong);
       console.log(this.state.numberGuests);
   }
    }

   render(){
       return(
           <div>
               <div>
                   参与：
                   <input type="check"
                   checked={this.state.isGoing}
                   onChange={this.handlerChange()}
                   />
               </div>
               <div>
                   <input type="text"
                   value={this.state.textValue}
                   onChange={()=>{}}
                   />
               </div>
               <button onClick={this.handlerClick()}>click</button>
           </div>
       )
   }
   componentDidMount(){
       this.setState({
           textValue:'abc'
       })
   }
}