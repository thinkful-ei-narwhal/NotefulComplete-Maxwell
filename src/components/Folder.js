import React from 'react'
import { Route } from 'react-router-dom'
import Notes from './Notes'
import { Link } from 'react-router-dom'
import { Context } from './Context.js'

class Folder extends React.Component {
    static contextType = Context;
    render() {
        return (
            <Link to={`/Folder/${this.props.id}`}>
                <div key={this.props.id} className="folder-button">
                    <h3>{this.props.name}</h3>
                </div>
            </Link>
        )
    }
}

export default Folder