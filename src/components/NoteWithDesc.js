import React from 'react'
import { Route } from 'react-router-dom'

import PropTypes from 'prop-types';

class Notes extends React.Component {

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

Notes.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string
};

export default Notes
