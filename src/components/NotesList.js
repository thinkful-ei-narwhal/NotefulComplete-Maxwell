import React from 'react'
import { Route } from 'react-router-dom'
import Notes from './Notes'
import './notesList.css'
import { Context } from './Context.js'
import AddNote from './AddNote';

class NotesList extends React.Component {
    static contextType = Context;
    render() {
        console.log(this.context.notes)
        const notes = this.context.notes.map(note => {
            return <Notes key={note.id} id={note.id} name={note.name} content={note.content} />
        });
        return (
            <div className="notesList">
                <h1> NoteList  </h1>
                {notes}
                <AddNote />
            </div>
        )
    }
}
export default NotesList