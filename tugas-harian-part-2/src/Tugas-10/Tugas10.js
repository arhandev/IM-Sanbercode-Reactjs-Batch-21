import React, { Component } from 'react'
import './tugas10.css'

export class Tugas10 extends Component {
    render() {
        return (
            <div className="tugas10">
                <h1 className="title-tugas10">Tugas 10</h1>
                <h1 className="title-tugas10">Tabel Harga Buah</h1>
                <table className="tableItem-tugas10">
                    <tr>
                        <th>
                            Nama
                        </th>
                        <th>
                            Harga
                        </th>
                        <th>
                            Berat
                        </th>
                    </tr>
                    {
                        this.props.buah.map(item => (
                            <>
                                <tr>
                                    <td className="">
                                        {item.nama}
                                    </td>
                                    <td>
                                        {item.harga}
                                    </td>
                                    <td>
                                        {item.berat/1000} kg
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </table>
            </div>
        )
    }
}

export default Tugas10
