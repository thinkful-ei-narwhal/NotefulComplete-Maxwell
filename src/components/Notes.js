import React from 'react'
import { Link } from 'react-router-dom'

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
    // console.log(this.props.id)
    return(
        <Link to = {`/Notes/${this.props.id}`}>
            <div key={this.props.id} id={this.props.id}>
                <h2>{this.props.name}</h2>
            </div>
        </Link>
        
    )
}

}


export default Notes
