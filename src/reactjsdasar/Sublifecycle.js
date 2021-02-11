import React, { Component } from 'react'

export default class Sublifecycle extends Component {
    
    componentWillUnmount(){
        this.props.ganti('sate');
    }

    render() {
        return (
            <div>
                <h3>componen sublifecycle</h3>
            </div>
        )
    }
}
