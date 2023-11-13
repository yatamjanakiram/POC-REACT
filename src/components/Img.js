
import React, { Component } from 'react';

class Img extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="img-holder" >
                <h3> {this.props.title}</h3>
                <p>{this.props.details}</p>
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}

export default Img;