import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            time: this.props.start
        }
    }

    // lifecycle
    componentDidMount(){
        this.addInterval = setInterval(() => this.tambah(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.addInterval)
    }

    tambah(){
        // agar terus bertambah
        this.setState((state,props) => ({
            time: parseInt(state.time) + 1
        }))
    }
    
    render() {
        return (
            <div>
                {this.state.time} detik
            </div>
        )
    }
}
