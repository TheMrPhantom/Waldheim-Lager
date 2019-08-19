import React, {Component} from 'react'
import './body.css'
import '../../ColorPalette.css'
import './MainSearchBody'
import './MainSidebar'
import MainSidebar from './MainSidebar';
import MainSearchBody from './MainSearchBody';

class SearchBody extends Component{

    render(){
        return (
            <div className="mainBody">
                <div id="searchHeader" className="mainContent">Ergebnisse</div>
                <MainSearchBody />
                <div id="sidebar" >Reservierungen</div>
                <MainSidebar />
            </div>
        )
    }
}

export default SearchBody