import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        const {makanan, ganti} = this.props
        return (
            <div>
                <h3>operan state yg berubah menjadi props : {makanan}</h3>
                <button onClick={() => ganti('soto')} >ganti</button>
            </div>
        )
    }
}
