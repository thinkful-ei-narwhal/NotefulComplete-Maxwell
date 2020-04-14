import React from 'react'
import { Route } from 'react-router-dom'
import Notes from './Notes'


class NotesList extends React.Component {

render(){
console.log('Notes', this.props.notes)
    return(
        <div>
            <h1> NoteList  </h1>
            <Notes />
        </div>
    )
}

}


export default NotesList