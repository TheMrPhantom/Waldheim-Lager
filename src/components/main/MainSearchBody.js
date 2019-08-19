import React, {Component} from 'react'
import './body.css'
import '../../ColorPalette.css'
import SearchItem from './SearchItem'
class MainSearchBody extends Component{

    render(){
        return (
           <div className="mainContent">
               <SearchItem />
               <SearchItem />
               <SearchItem />
               <SearchItem />
               <SearchItem />
               <SearchItem />
               <SearchItem />
               <SearchItem />
               <SearchItem />
               <SearchItem />
           </div>
        )
    }
}

export default MainSearchBody