import React,{Component} from 'react'
import './body.css'
import '../../ColorPalette.css'
import ItemText from './ItemText'
class SearchItem extends Component{

    render(){
        return (
            <div className="searchItem">
               <ItemText />
            </div>
        )
    }
}

export default SearchItem