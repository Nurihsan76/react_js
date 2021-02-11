import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'
import Formulir from './Formulir'

export default class Crud extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            makanans : [],
            id : '',
            nama : '',
            harga : '',
            descripsi : '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }    

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.id === ""){
            this.setState({
                makanans: [
                    ...this.state.makanans,
                    {
                        id: this.state.makanans.length+1,
                        nama: this.state.nama,
                        harga: this.state.harga,
                        descripsi: this.state.descripsi,
                    }
                ]
            })    
        } else{
            const selainMakananYgDipilih = this.state.makanans.filter((makanan) => makanan.id !== this.state.id).map((filterMakanan) => {
                return(
                    filterMakanan
                )
            });

            this.setState({
                makanans: [
                    ...selainMakananYgDipilih,
                    {
                        id: this.state.makanans.length+1,
                        nama: this.state.nama,
                        harga: this.state.harga,
                        descripsi: this.state.descripsi,
                    }
                ]
            })                
        }

        this.setState({
            id : '',
            nama : '',
            harga : '',
            descripsi : '',
        })
    }

    editData = (id) => {
        const makananYgDipilih = this.state.makanans.filter((makanan) => makanan.id === id).map((filterMakanan) => {
            return(
                filterMakanan
            )
        })
        this.setState({
            id: makananYgDipilih[0].id,
            nama: makananYgDipilih[0].nama,
            harga: makananYgDipilih[0].harga,
            descripsi: makananYgDipilih[0].descripsi,
        })
    }

    hapusData = (id) => {
        const sisaMakanan = this.state.makanans.filter((makanan) => makanan.id !== id).map((filterMakanan) => {
            return(
                filterMakanan
            )
        });
        this.setState({
            makanans
            : sisaMakanan
        })
    }

    render() {
        return (
            <div>
            <NavbarComponent />
                <div className="container">
                    <h3 className="mb-3">Crud React Js</h3>
                    <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
