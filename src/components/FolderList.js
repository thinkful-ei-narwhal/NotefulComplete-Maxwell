import React from 'react'
import { Route } from 'react-router-dom'
import Folder from './Folder.js'


class FolderList extends React.Component {
    render () {

    const folderList = this.props.folders.map(folder => {
        return <Folder key = {folder.id} name = {folder.name} />
     })

    return (
        <div>
            {folderList}
        </div>
    )
    }


}

export default FolderList