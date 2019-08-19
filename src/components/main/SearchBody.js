import React, {Component} from 'react'
import './body.css'
import '../../ColorPalette.css'
class SearchBody extends Component{

    render(){
        return (
            <div className="mainBody">
                <div id="searchHeader" className="mainContent">Ergebnisse</div>
                <div id="sidebar" >Reservierungen</div>
            </div>
        )
    }
}

export default SearchBody