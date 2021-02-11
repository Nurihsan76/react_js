import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            makanan: 'bakso',
            data: {},
            tampil: false,
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            this.setState({
                data: json
            })
        })
    }

    ganti(value){
        this.setState({
            makanan: value
        })
    }

    render() {
        return (
            <div>
                <h3>lifecycle</h3>
                <p>{this.state.data.title}</p>
                <p>{this.state.makanan}</p>

                {this.state.tampil && <Sublifecycle ganti={(value) => this.ganti(value)} />}

                <button onClick={() => this.setState({tampil: !this.state.tampil})}>tampil</button>
            </div>
        )
    }
}
