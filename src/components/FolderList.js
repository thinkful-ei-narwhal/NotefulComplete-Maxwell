import React from 'react'
import { Route } from 'react-router-dom'
import Folder from './Folder.js'
import AddFolderButton from './AddFolderButton'
import './folderList.css'

class FolderList extends React.Component {
    static defaultProps = {
        folders: []
    }

    render () {

    // console.log('folderId:', this.props.match.params.folderId)

    const folderList = this.props.folders.map(folder => {
        return <Folder key = {folder.id} id={folder.id} name = {folder.name} />
     })

    return (
        <div className="folderList">
            {folderList}
            <AddFolderButton />
        </div>
    )
    }


}

export default FolderList