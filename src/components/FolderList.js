import React from 'react'
import { Route } from 'react-router-dom'
import Folder from './Folder.js'
import './folderList.css'
import { Context } from './Context.js'
import AddFolderButton from './AddFolderButton'


class FolderList extends React.Component {
    static contextType = Context;
    generateFolderList = () => {
        return this.context.folders.map(folder => {
            return <Folder key={folder.id} id={folder.id} name={folder.name} />
        })
    }
    render() {
        return (
            <div className="folderList">
                {this.generateFolderList()}
                <AddFolderButton />
            </div>
        )
    }
}

export default FolderList