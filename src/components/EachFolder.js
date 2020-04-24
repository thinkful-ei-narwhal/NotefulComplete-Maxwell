import React from 'react'
import { Route } from 'react-router-dom'
import NotesList from './NotesList'

import PropTypes from 'prop-types';

class EachFolder extends React.Component {
    render() {
        const matchedId = this.props.store.notes.filter(note => note.folderId === this.props.match.params.folderId);
        console.log("matchedId", matchedId);
        return (
            <div>
                <NotesList notes={matchedId} />
                <button key={this.props.id} className="folder-button">
                    <h3>{this.props.name}</h3>
                    <h3>Each Folder was Opened</h3>
                </button>
            </div>
        )
    }
}

EachFolder.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    store: PropTypes.object
};

export default EachFolder