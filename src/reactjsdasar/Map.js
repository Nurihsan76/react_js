import React from 'react'

const makanans = [
    {
        nama: 'bakso',
        harga: 10000,
    },
    {
        nama: 'mie ayam',
        harga: 7000,
    },
    {
        nama: 'nasi goreng',
        harga: 13000,
    },
    {
        nama: 'ketoprak',
        harga: 12000,
    },
    {
        nama: 'soto',
        harga: 11000,
    },
];

const total_harga = makanans.reduce((total_junlah, makanan) => total_junlah+makanan.harga, 0);

const Map = () => {
    return (
        <div>
        <h3>map biasa</h3>
        <ul>
            {makanans.map((makanan, index) => (
                <li>{index+1} - {makanan.nama}, harga : {makanan.harga}</li>
            ))}
        </ul>

        <h3>map dengan filter</h3>
            <ul>
            {makanans.filter((makanan) => makanan.harga >= 11000).map((makanan, index) => (
                <li>{index+1} - {makanan.nama}, harga : {makanan.harga}</li>
            ))}
            </ul>

        <h3>map dengan reduce</h3>
            <p>total harga : {total_harga}</p>
        </div>
    )
}

export default Map
