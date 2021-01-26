import React, { Component } from 'react'
// import './tugas9.css'

export class Tugas9 extends Component {
    render() {
        return (
            <div className="tugas9">
                <form>
                <h1 className="title">Form Pembelian Buah</h1>
                <div>
                    <label className="name">
                    <b>Nama Pelanggan</b>
                    </label>
                    <span>
                    <input type="text" className="label-name" id="" />
                    </span>
                    <br/>
                </div>
                <div className="item">
                    <label className="item-label">
                    <b>
                        Daftar Item
                    </b>
                    </label>
                    <span>
                    <div className="option">
                        <input type="checkbox" id="item1" name="item1" value="Semangka"/>
                        <label for="item1"> Semangka</label>
                        <br/>
                        <input type="checkbox" id="item2" name="item2" value="Jeruk"/>
                        <label for="item2"> Jeruk</label>
                        <br/>
                        <input type="checkbox" id="item3" name="item3" value="Nanas"/>
                        <label for="item3"> Nanas</label>
                        <br/>
                        <input type="checkbox" id="item4" name="item4" value="Salak"/>
                        <label for="item4"> Salak</label>
                        <br/>
                        <input type="checkbox" id="item5" name="item5" value="Anggur"/>
                        <label for="item5"> Anggur</label>
                        <br/>
                        </div>
                    </span>
                </div>
                <button className="submitButton">
                    Kirim
                </button>
                </form>
            </div>
        )
    }
}

export default Tugas9
