import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : 'bakso'
        }
    }

    ganti = (makanan_baru) => {
        this.setState({
            makanan : makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h3>belajar state props</h3>
                <p>{this.state.makanan}</p>
                <button onClick={() => this.ganti('soto')} >ganti</button>
                <Operan makanan={this.state.makanan} ganti={this.ganti}/>
            </div>
        )
    }
}
