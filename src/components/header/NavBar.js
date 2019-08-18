import React,{Component} from 'react';
import NavBarButtons from './NavBarButtons'
import NavBarSearch from './NavBarSearch'
import NavBarLogin from './NavBarLogin';

class NavBar extends Component{

    render(){
        return (
        <div className="nav-grid-container">
            <NavBarButtons />
            <NavBarLogin />       
            <NavBarSearch />
            
        </div>
        )
    }
}

export default NavBar