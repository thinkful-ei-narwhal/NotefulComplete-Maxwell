import React from 'react'
import FolderList from './FolderList'
import { Link } from 'react-router-dom'
import Folder from './Folder'


class HomePage extends React.Component {

    render() {
        return(
            <div>
                <p> homePage  </p>
                <FolderList />
            </div>
        )
    }
}


export default HomePage