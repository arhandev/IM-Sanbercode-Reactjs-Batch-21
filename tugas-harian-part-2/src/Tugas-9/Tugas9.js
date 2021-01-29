import React, { Component } from 'react'
import './tugas9.css'

export class Tugas9 extends Component {
    render() {
        return (
            <div className="tugas9">
                <form>
                <h1 className="title-tugas9">Form Pembelian Buah</h1>
                <div>
                    <label className="name-tugas9">
                    <b>Nama Pelanggan</b>
                    </label>
                    <span>
                    <input type="text" className="label-name-tugas9" id="" />
                    </span>
                    <br/>
                </div>
                <div className="item-tugas9">
                    <label className="item-label-tugas9">
                    <b>
                        Daftar Item
                    </b>
                    </label>
                    <span>
                    <div className="option-tugas9">
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
                <button className="submitButton-tugas9">
                    Kirim
                </button>
                </form>
            </div>
        )
    }
}

export default Tugas9
