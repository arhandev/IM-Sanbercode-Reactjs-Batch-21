import React, {useContext, useEffect} from 'react'
import {TugasContext} from './TugasContext'
import axios from "axios"


function TableEdit() {


    const {daftarBuahValue, inputValue, indexNumber} = useContext(TugasContext)
    const [daftarBuah, setDaftarBuah] = daftarBuahValue
    const [index, setIndex] = indexNumber
    const [input, setInput] = inputValue

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
            console.log(error)
        })
    }

    useEffect(() => {
        console.log("fetch Table Edit")
        if(daftarBuah === null){
            fetchData()
        }
    }, [daftarBuah])

    const deleteData = (index) =>{
        axios.delete(
            `http://backendexample.sanbercloud.com/api/fruits/${index}`
        )
        .then((response) => {
            setDaftarBuah(null)
            console.log(response.data)
        })
    }
    
    const editData = (index, id) =>{
        setInput({
            input:{
                name: daftarBuah[index].name,
                price: daftarBuah[index].price,
                weight: daftarBuah[index].weight
            }
        })
        setIndex(id)
        console.log(index)
    }
    return (
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
    )
}

export default TableEdit
