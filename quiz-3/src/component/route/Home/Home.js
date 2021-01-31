import React, { Component } from 'react'
import {QuizContext} from "../../../Context"
import axios from 'axios'
import './Home.css'

class Home extends Component {
    static contextType = QuizContext
    constructor(props){
        super(props)
        this.state={
            daftarBuku: null
        }
    }
    fetchBuku = () =>{
        axios
        .get("http://backendexample.sanbercloud.com/api/books")
        .then((response) =>{
            this.context.daftarBukuValue[1](response.data)
        })

    }

    view = () =>{
        console.log(this.context.daftarBukuValue[0])
    }

    componentDidMount(){
        if(this.context.daftarBukuValue[0] === null){
            this.fetchBuku()
        }
        
    }
    render() {
        const daftarBuku = this.context.daftarBukuValue[0]
        return (
            <div className="Home">
                <h2 style={{textAlign: "center"}}>Daftar Buku-buku Pilihan</h2>
                {
                   daftarBuku === null ? 
                   (<div className="item-home">
                       <h1>
                           Loading
                       </h1>
                   </div>)
                   :
                   daftarBuku.map((item, index) =>(
                    <div>
                        <h1>{item.title}</h1>
                        <div class="item-home">
                            <img src={item.image_url} alt={item.title + " picture"}/>
                            <div className="item-detail-home">
                                <p>Tahun Terbit : {item.release_year}</p>
                                <p>Harga : Rp. {item.price},.</p>
                                <p>Jumlah Halaman: {item.totalPage}</p>
                            </div>
                        </div>
                        <p><b>Deskripsi : </b> {item.description}</p>
                        <p><b>review : </b> {item.description}</p>
                        <hr/>
                    </div>
                ))
               }
               
            </div>
        )
    }
}

export default Home
