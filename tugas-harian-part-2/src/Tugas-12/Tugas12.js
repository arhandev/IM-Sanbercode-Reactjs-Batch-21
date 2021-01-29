import React, { Component } from 'react'
import './tugas12.css'

class Tugas12 extends Component {
    constructor(props){
        super(props)
        this.state ={
            daftarBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            number: "",
            nama: "",
            harga: "",
            berat: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event){
        console.log(this.state.number)
        this.setState({[event.target.name]: event.target.value});
      }

    handleEdit(index){
        this.setState({
            nama: this.state.daftarBuah[index].nama,
            harga: this.state.daftarBuah[index].harga,
            berat: this.state.daftarBuah[index].berat,
            number: index
        })
    }

    handleDelete(index){
        let daftar = [...this.state.daftarBuah]
        daftar.splice(index, 1)
        this.setState({
            daftarBuah: daftar
        })

    }
    
    handleSubmit(event){
        event.preventDefault()
        if(this.state.number !== ""){
            let daftar = [...this.state.daftarBuah]
            let item ={...daftar[this.state.number]}
            item.nama = this.state.nama
            item.harga = this.state.harga
            item.berat = this.state.berat
            daftar[this.state.number] = item
            console.log(daftar) 
            this.setState({
                daftarBuah: daftar,
                number: ""
            })
        }
        else{
        this.setState({
            daftarBuah: [...this.state.daftarBuah, {
                nama: this.state.nama,
                harga: this.state.harga,
                berat: this.state.berat
            }],
            number: "",
            nama: "",
            harga: "",
            berat: ""
        })
        console.log(this.state.daftarBuah[this.state.daftarBuah.length-1])
        }
        
      }    

    render() {
        return (
            <div className="tugas12">
                <div className="tableOne-tugas12">
                <h1>Tugas 12</h1>
                <h1>Tabel Harga Buah</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
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
                    </thead>
                    {
                        this.state.daftarBuah.map((item, index) => (
                            <React.Fragment key={index}>
                                <tbody>
                                    <tr>
                                        <td>
                                            {index+1}
                                        </td>
                                        <td>
                                            {item.nama}
                                        </td>
                                        <td>
                                            {item.harga}
                                        </td>
                                        <td>
                                            {item.berat/1000} kg
                                        </td>
                                    </tr>
                                </tbody>
                            </React.Fragment>
                        ))
                    }
                </table>
                </div>
                <div className="tableTwo-tugas12">
                <h1>Daftar Harga Buah</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>
                                Nama
                            </th>
                            <th>
                                Harga
                            </th>
                            <th>
                                Berat
                            </th>
                            <th>
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    {
                        this.state.daftarBuah.map((item, index) => (
                            <React.Fragment key={index}>
                                <tbody>
                                    <tr>
                                        <td>
                                            {index+1}
                                        </td>
                                        <td>
                                            {item.nama}
                                        </td>
                                        <td>
                                            {item.harga}
                                        </td>
                                        <td>
                                            {item.berat/1000} kg
                                        </td>
                                        <td>
                                            <button className="button-click-tugas12" onClick={() => this.handleEdit(index)}>
                                                Edit
                                            </button>
                                            <button className="button-click-tugas12" onClick={() => this.handleDelete(index)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </React.Fragment>
                        ))
                    }
                </table>
                </div>
                <h1 className="title-tugas12">Form Daftar Harga Buah</h1>
                <div className="formBuah-tugas12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="div-input-form-tugas12">
                            <label>
                                Nama:
                            </label>
                                <input className="input-form-tugas12" onChange={this.handleChange} type="text" value={this.state.nama} placeholder="Nama" name="nama"/>
                        </div>
                        <div className="div-input-form-tugas12">
                            <label>
                                Harga:
                            </label>
                                <input className="input-form-tugas12" onChange={this.handleChange} type="text" value={this.state.harga} placeholder="Harga" name="harga"/>
                        </div>
                        <div className="div-input-form-tugas12">
                            <label>
                                Berat (dalam gram):
                            </label>
                                <input className="input-form-tugas12" onChange={this.handleChange} type="text" value={this.state.berat} name="berat" placeholder="0"/>
                        </div>
                        <button className="button-click buttform-tugas12" type="submit">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Tugas12
