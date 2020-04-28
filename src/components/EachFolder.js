import React from 'react'
import { Route } from 'react-router-dom'
import NotesList from './NotesList'

import {Context} from './Context';

import PropTypes from 'prop-types';

class EachFolder extends React.Component {
    static contextType = Context;
    render() {
        const matchedId = this.context.notes.filter(note => note.folderId === this.props.match.params.folderId);
        console.log("matchedId", matchedId);
        console.log(this.props.match.params.folderId)
        return (
            <div>
                <NotesList notes={matchedId} />
                <button key={this.props.id} className="folder-button">
                    <h3>{this.props.name}</h3>
                </button>
            </div>
        )
    }
}

EachFolder.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired
};

export default EachFolder