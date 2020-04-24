import React, { Component } from 'react';

export const Context = React.createContext();

export class ContextProvider extends Component {
  state = {
    notes: [],
    folders: [],
    hasError: false
  };

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(result => result.json())
      .then(resultJSON => {
        this.setState({ folders: resultJSON })
      })
      .catch(err => console.log(err))
    fetch('http://localhost:9090/notes')
      .then(result => result.json())
      .then(resultJSON => {
        this.setState({ notes: resultJSON })
      })
      .catch(err => console.log(err))
  }
  addNoteToApi = (noteTitle, noteDescription) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: noteTitle,
        content: noteDescription
      })
    };
    fetch(`http://localhost:9090/notes`, options)
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({
          notes: [...this.state.notes,
          {
            name: noteTitle,
            content: noteDescription,
            id: result.id
          }
        ]
        })
      })
      .catch(err => console.log(err))
  }

  deleteNote = (id) => {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.setState({ notes: this.state.notes.filter(note => note.id !== id) })
      })
  }

  folderToApi = (folderName) => { //functionality found in FolderList
    //grabs the user input and updates the api
    fetch(`http://localhost:9090/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: folderName })
    })
      .then(result => result.json())
      .then((result) => {
        console.log(result);
        this.setState({
          folders: [...this.state.folders, result]
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Context.Provider value={{
        ...this.state,
        deleteNote: this.deleteNote,
        folderToApi: this.folderToApi,
        addNoteToApi: this.addNoteToApi
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}