import React from 'react'

// // varibel yang tidak bisa diubah
// const harga = 3000;
// // harga = 5000;

// // variabel dapet diubah walau didalam scope
// var harga = 3000;
// if(true){
//     var harga = 5000;
// }

// variabel dapet diubah, tapi tidak bisa jika didalam scope
let harga = 3000;
// harga = 4000;
if(true){
    let harga = 5000;
}

export const Variabel = () => {
    return (
        <div>
            <h3>belajar variabel</h3>
    <p>harga : {harga}</p>
        </div>
    )
}
