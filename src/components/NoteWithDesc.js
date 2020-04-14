import React from 'react'
import { Route } from 'react-router-dom'

class Notes extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        displayContent: false
    }

}

toggleDisplay = () => {
    (this.state.displayContent) ? this.setState({displayContent: true}) : this.setState({displayContent: false})
}

render(){
    return(
        <div key={this.props.id} id={this.props.id}>
            <h2>{this.props.name}</h2>
            <p>{this.props.content}</p>
        </div>
    )
}

}


export default Notes
