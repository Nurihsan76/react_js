import React from 'react'
import {Table} from 'react-bootstrap'
// import {Nav, Navbar, NavDropdown, Form, Button, FormControl, } from 'react-bootstrap'


const Tabel = ({makanans, editData, hapusData}) => {
    return (
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>#</th>
            <th>nama makanan</th>
            <th>harga makanan</th>
            <th>descripsi</th>
            <th>aksi</th>
            </tr>
        </thead>
        <tbody>
            {makanans.map((makanan, index) => {
                return(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{makanan.nama}</td>
                    <td>Rp. {makanan.harga}</td>
                    <td>{makanan.descripsi}</td>
                    <td>
                        <button className="btn btn-warning mr-3" onClick={() => editData(makanan.id)}>edit</button>
                        <button className="btn btn-danger" onClick={() => hapusData(makanan.id)}>hapus</button>
                    </td>
                    </tr>
                )
            })}
        </tbody>
        </Table>
    )
}

export default Tabel
