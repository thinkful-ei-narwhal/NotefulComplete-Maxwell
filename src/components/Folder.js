import React from 'react'
import { Route } from 'react-router-dom'
import Notes from './Notes'


class Folder extends React.Component {
render() {

         return (
            <button key={this.props.id} className="folder-button">
            
            
                 <h3>{this.props.name}</h3>
            
            
            </button>
        )
    }

}


export default Folder