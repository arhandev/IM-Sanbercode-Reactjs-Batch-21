import React, {useState, useEffect} from 'react'
import './tugas13.css'
import axios from "axios"

export default function Tugas13() {
    const [name, setName] = useState(''); 
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [daftarBuah, setDaftarBuah] = useState(null);
    const [error, setError] = useState(null);
    const [changeItem, setChangeItem] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    

    const fetchData = async () =>{
        axios
        .get(
            "http://backendexample.sanbercloud.com/api/fruits"
        )
        .then((response) => {
            setDaftarBuah(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            setError(error)
        })
    }

    useEffect(() => {
        setChangeItem(false)
        console.log("fetch")
        fetchData()
    }, [changeItem])

    const deleteData = (index) =>{
        axios.delete(
            `http://backendexample.sanbercloud.com/api/fruits/${index}`
        )
        .then((response) => {
            setChangeItem(true)
            console.log(response.data)
        })
    }

    const submitData = (event) => {
        event.preventDefault()
        if(editIndex == null){ 
            axios.post(
                "http://backendexample.sanbercloud.com/api/fruits", {
                name,
                price,
                weight
                }
            )
            .then(response =>{
                setChangeItem(true)
                console.log(response.data)
            })
        }
        else{
            axios.put(
                `http://backendexample.sanbercloud.com/api/fruits/${editIndex}`,
                {name,
                price,
                weight}
            )
            .then((response) => {
                setChangeItem(true)
                console.log(response.data)
            })
            .catch((error) => console.log(error))
            setEditIndex(null)
        }
        setName("")
        setPrice("")
        setWeight("")
    }

     const editData = (index, id) =>{
         setName(daftarBuah[index].name)
         setPrice(daftarBuah[index].price)
         setWeight(daftarBuah[index].weight)
         setEditIndex(id)
         console.log(editIndex)
     }

    // useEffect(() => {
    //     axios
    //     .get(
    //         "http://backendexample.sanbercloud.com/api/fruits"
    //     )
    //     .then((response) => {
    //         setDaftarBuah(response.data)
    //         console.log(daftarBuah)
    //     })
    //     .catch((error) => {
    //         setError(error)
    //     })
    // }, [])

    return ( 
        <div className="tugas13">
            <div className="tableOne">
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
                        daftarBuah ? daftarBuah.map((item, index) => (
                            <React.Fragment key={index}>
                                <tbody>
                                    <tr>
                                        <td>
                                            {index+1}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {item.weight/1000} kg
                                        </td>
                                    </tr>
                                </tbody>
                            </React.Fragment>
                        )) :
                        (<h1>Loading</h1>)
                    }
                </table>
                </div>
                <div className="tableTwo">
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
                         daftarBuah ? daftarBuah.map((item, index) => (
                            <React.Fragment key={index}>
                                <tbody>
                                    <tr>
                                        <td>
                                            {index+1}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {item.weight/1000} kg
                                        </td>
                                        <td>
                                            <button className="button-click" onClick={() => editData(index, item.id)}>
                                                Edit
                                            </button>
                                            <button className="button-click" onClick={() => deleteData(item.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </React.Fragment>
                        )) :
                        <h1>Loading</h1>
                    }
                </table>
                </div>
                <h1 className="title">Form Daftar Harga Buah</h1>
                <div className="formBuah">
                    <form onSubmit={submitData}>
                        <div className="div-input-form">
                            <label>
                                Nama:
                            </label>
                                <input className="input-form" onChange={event => {setName(event.target.value);}} type="text" value={name} placeholder="Nama" name="nama"/>
                        </div>
                        <div className="div-input-form">
                            <label>
                                Harga:
                            </label>
                                <input className="input-form" onChange={event => {setPrice(event.target.value);}} type="text" value={price} placeholder="Harga" name="harga"/>
                        </div>
                        <div className="div-input-form">
                            <label>
                                Berat (dalam gram):
                            </label>
                                <input className="input-form" onChange={event => {setWeight(event.target.value);}} type="text" value={weight} name="berat" placeholder="0"/>
                        </div>
                        <button className="button-click buttform" type="submit">
                            submit
                        </button>
                    </form>
                </div>
        </div>
    )
}
