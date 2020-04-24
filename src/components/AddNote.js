import React, { Component } from 'react';

import { Context } from './Context.js';

class AddNote extends Component {
    static contextType = Context;
    constructor(props) {
        super(props)
        this.state = {
            displayForm: false
        }
    }

    toggleForm = () => {
        let toggle = !this.state.displayForm;
        this.setState({ displayForm: toggle });
    }
    createNoteForm = () => {
        //Creates a form for note title and description
        return (
            <form onSubmit={
                (event) => {
                    event.preventDefault();
                    let noteTitle = event.target.title.value;
                    let noteDescription = event.target.description.value;
                    this.context.addNoteToApi(noteTitle, noteDescription);
                }
            }>
                <p>Title</p>
                <input type='text' id="title"></input>
                <p>Description</p>
                <input type='text' id="description"></input>
                <br />
                <button type='submit'>Submit</button>
            </form>
        )
    }

    //() => this.context.AddNote()
    render() {
        return (
            <div>
                <button className='add-note' onClick={() => this.toggleForm()}>Add Note</button>
                {this.state.displayForm === true && this.createNoteForm()}
            </div>
        )
    }
}

export default AddNote

//Requires Form