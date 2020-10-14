import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // NavLink,
    Switch,
    withRouter,

}
    from 'react-router-dom'

import './style.css'

const Home = () => (<div>Home</div>)


class About extends Component {
    render() {
        return (
            <div>About</div>
        )
    }
    componentDidMount() {
        console.log(this.props);
    }
}

class DashBord extends Component {
    render() {
        return (
            <div>DashBord</div>
        )
    }
    componentDidMount() {
        console.log(this.props);
    }
}

const Profile = (props) => {
    return (
        <div>Profile</div>
    )
}

@withRouter
class MyNavLink extends Component {
    state = {
        navlist: [
            {
                id: '001',
                name: 'Home'
            },
            {
                id: '002',
                name: 'About'
            },
            {
                id: '003',
                name: 'DashBord'
            },
            {
                id: '004',
                name: 'Profile'
            },
        ]
    }
    handleClick = (path) => {
        let history = this.props.history
        return (e) => {
            history.push('/' + path)
        }
    }
    render() {
        let pathname = this.props.location.pathname
        return (
            <>
                {
                    this.state.navlist.map(value => {
                        let { id, name } = value
                        return (
                            <li
                                key={id}
                                onClick={this.handleClick(name)}>
                                {pathname === '/' + name ? '>' : ''}{name}
                            </li>
                        )
                    }
                    )
                }
            </>
        )
    }
}

class CustomLink extends Component {
    render() {
        return (
            <Router>

                <ul>
                    {/*  <li><NavLink activeClassName='selected' to="/"  exact>Home</NavLink></li>
            <li><NavLink activeClassName='selected' to="/about">About</NavLink></li>
            <li><NavLink activeClassName='selected' to="/dashbord">DashBord</NavLink></li>
            <li><NavLink activeClassName='selected' to="/profile">Profile</NavLink></li> */}

                    <MyNavLink></MyNavLink>
                </ul>

                <Switch>

                    <Route path='/' exact component={Home}></Route>
                    <Route path='/about' render={(props) => <About {...props}></About>}></Route>
                    <Route path='/dashbord' children={props => <DashBord {...props}></DashBord>}></Route>
                    <Route path='/profile'>
                        <Profile></Profile>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default CustomLink;