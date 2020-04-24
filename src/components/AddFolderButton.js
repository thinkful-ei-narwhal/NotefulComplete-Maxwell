import React, { Component } from 'react'

import { Context } from './Context.js';


class AddFolderButton extends Component {
    static contextType = Context;
    constructor() {
        super()
        this.state = {
            displayForm: false
        }
    }
    toggleForm = () => {
        let toggle = !this.state.displayForm;
        this.setState({ displayForm: toggle });
    }

    addFolderForm = () => {
        //() => this.context.addFolder()
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                let folderName = event.target.newFolder.value;
                this.context.folderToApi(folderName)
            }}>
                <p>Add a new folder</p>
                <input type="text" name="newFolder"></input>
                <button type="submit">Submit</button>
            </form>
            )
    }

    render() {
        return (
            <div>
                <button className='add-folder' onClick={() => this.toggleForm()}> Add Folder </button>
                {this.state.displayForm && this.addFolderForm()}
            </div>
        )
    }
}

export default AddFolderButton


//Requires form