import React,{Component} from 'react';
import './NavBar.css'

class NavBarButtons extends Component{

    render(){
        return (
        <div className="hButtons">
            <button className="MenuButton">Items</button>
            <button className="MenuButton">Bestellen</button>
            <button className="MenuButton">Bestellungen</button>
        </div>
        )
    }
}

export default NavBarButtons