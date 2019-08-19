import React, {Component} from 'react'
import './body.css'
import '../../ColorPalette.css'

class ItemText extends Component{

    render(){
        return (
        <div className="searchItemText">
           <div className="itemText leftA">Bast</div>
           <div className="itemText rightA">&rsaquo;</div>
        </div>
        )
    }
}

export default ItemText