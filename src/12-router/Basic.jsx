import React, { Component } from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom'
const Home =()=>(<div>Home</div>)
const About =()=>(<div>About</div>)
const DashBord =()=>(<div>DashBord</div>)

    

class Basic extends Component {
    render() {
        return (
        <Router>
        
        <ul>
            <li><link to="/">Home</link></li>
            <li><link to="/about">About</link></li>
            <li><link to="/dashbord">DashBord</link></li>

        </ul>
       
      
                <Route path='/' exact component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/dashbord' component={DashBord}></Route>
                
            </Router>
        );
    }
}

export default Basic;