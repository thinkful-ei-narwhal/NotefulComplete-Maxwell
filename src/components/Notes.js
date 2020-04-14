import React from 'react'
import { Route } from 'react-router-dom'

class Notes extends React.Component {

render(){
    // console.log(this.state.notes)
    
    return(
        
        <div>
        <button onClick={this.getNotes}>This is a button</button>
        <p> Notes</p>
        </div>
    )
    }
}


export default Notes