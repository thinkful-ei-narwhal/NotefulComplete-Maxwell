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

    validator = (noteTitle, noteDescription) => {
        let validTitle = false;
        let validDescription = true;
        let titleLength = noteTitle.length;
        let descriptionLength = noteDescription.length;
        switch (titleLength) {
            case 0:
                alert("Please Enter a Note Title")
                break;
            case 1:
            case 2:
            case 3:
                alert("Note titles are a minimum of 3 characters in length");
                break;
            default: validTitle = true;
        }
        switch (descriptionLength) {
            case 0:
                alert("Please Enter a Description")
                break;
            default: validDescription = true;
        }
        return [validTitle, validDescription];
    }

    createNoteForm = () => {
        //Creates a form for note title and description
        const createOptions = this.context.folders.map(folder => {
            return (
                <option value={folder.id}>{folder.name}</option>
            )
        });
        return (
            <form onSubmit={
                (event) => {
                    event.preventDefault();
                    let noteTitle = event.target.title.value;
                    let noteDescription = event.target.description.value;
                    let noteFolderId = event.target.folders.value;
                    const [isValidTitle, isValidDescription] = this.validator(noteTitle, noteDescription);
                    if (isValidTitle && isValidDescription) {
                        this.context.addNoteToApi(noteTitle, noteDescription, noteFolderId);
                    }
                }
            }>
                <p>Title</p>
                <input type='text' id="title"></input>
                <p>Description</p>
                <input type='text' id="description"></input>
                <select id="folders" name="folders">
                {createOptions}
                </select>
                <br />
                <button type='submit'>Submit</button>
            </form>
        )
    }
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