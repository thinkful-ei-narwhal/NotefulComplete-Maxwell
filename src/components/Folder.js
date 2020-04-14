import React from 'react'
import { Route } from 'react-router-dom'
import Notes from './Notes'


class Folder extends React.Component {

    render() {
        // console.log("this is the folder store",this.props.store) receives store from index.js
        return (
            <div>
                <h1> Folder  </h1>
            </div>
        )
    }

}


export default Folder