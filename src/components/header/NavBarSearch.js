import React,{Component} from 'react';
//import './NavBar.css'

class NavBarSearch extends Component{

    render(){
        return (
        <div className="hSearch" style={{float:"left"}}>
            <input className="MenuSearch" type="text"></input>
            <button className="MenuButton">Suche</button>
        </div>
        )
    }
}

export default NavBarSearch