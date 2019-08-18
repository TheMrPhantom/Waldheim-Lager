import React,{Component} from 'react';
import './NavBar.css'

class NavBar extends Component{

    render(){
        return (
        <div>
            <button className="MenuButton">Items</button>
            <button className="MenuButton">Bestellen</button>
            <button className="MenuButton">Bestellungen</button>
        </div>
        )
    }
}

export default NavBar