import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import NotesList from './components/NotesList';
import FolderList from './components/FolderList';
import NotFound from './components/NotFound';
import Notes from './components/Notes';
import NotesWithDesc from './components/NotesWithDesc';
import EachFolder from './components/EachFolder';
import { Context } from './components/Context';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {
  static contextType = Context;
  render() {
    return (
      /* Provides notes and folders objects to children. Wrapped entire App div so that its children have access to these properties.  */

      <div className="App">
        <h1>Sub For Header</h1>
        <ErrorBoundary>
          <Route
            exact
            path='/'
            component={() => <NotesList notes={this.context.notes} />} />
          <Route
            exact
            path='/'
            component={() => <FolderList folders={this.context.folders} />} />
          <Route
            exact
            path='/Folder/:folderId'
            render={(routeprops) => {
              const folderId = routeprops.match.params.folderId
              const folder = this.context.folders.find(folder => folder.id === folderId) || {}
              return <EachFolder {...routeprops} id={folder.id} name={folder.name} store={this.context} />
            }} />
          <Route
            exact
            path='/Notes/:noteId'
            render={(routeprops) => {
              const noteId = routeprops.match.params.noteId
              const note = this.context.notes.find(id => id.id === noteId) || {}
              return <NotesWithDesc {...routeprops} id={note.id} name={note.name} content={note.content} folderId={note.folderId} />
            }} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

