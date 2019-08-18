import React,{Component} from 'react';
import './NavBar.css'

class NavBarLogin extends Component{

    render(){
        return (
        <div className="whLogo">
            <button id="loginButton" className="MenuButton" >Login</button>
            <p id="wh-logo">WH</p>
        </div>
        )
    }
}

export default NavBarLogin