import React from 'react'
import { Route } from 'react-router-dom'

class Notes extends React.Component {


render(){
    console.log(this.props.id)
    return(
        <div key={this.props.id} id={this.props.id}>
            <h2>{this.props.name}</h2>
            <p>{this.props.content}</p>
        </div>
    )
}

}


export default Notes
