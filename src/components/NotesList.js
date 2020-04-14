import React from 'react'
import { Route } from 'react-router-dom'
import Notes from './Notes'
import './notesList.css'

class NotesList extends React.Component {

render(){
    const notes = this.props.notes.map(note => {
        return <Notes key={note.id} id={note.id} name={note.name} content={note.content}/>
    });
    return(
        <div className="notesList">
            <h1> NoteList  </h1>
            {notes}
        </div>
    )
}

}


export default NotesList