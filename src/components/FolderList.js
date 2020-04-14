import React from 'react'
import { Route } from 'react-router-dom'
import Folder from './Folder.js'
import './folderList.css'

class FolderList extends React.Component {
    render () {

    const folderList = this.props.folders.map(folder => {
        return <Folder key = {folder.id} id={folder.id} name = {folder.name} />
     })

    return (
        <div className="folderList">
            {folderList}
        </div>
    )
    }


}

export default FolderList