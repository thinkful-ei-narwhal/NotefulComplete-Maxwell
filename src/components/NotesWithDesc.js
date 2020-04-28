import React from 'react';
import { Route } from 'react-router-dom';
import { Context } from './Context';

import PropTypes from 'prop-types';

class NotesWithDesc extends React.Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            displayContent: false
        }

    }

    toggleDisplay = () => {
        (this.state.displayContent) ? this.setState({ displayContent: true }) : this.setState({ displayContent: false })
    }
    render() {
        return (
            <div key={this.props.id} id={this.props.id}>
                <h2>{this.props.name}</h2>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

NotesWithDesc.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired
};

export default NotesWithDesc
