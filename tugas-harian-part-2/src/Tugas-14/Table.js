import React, {useContext, useEffect} from 'react'
import {TugasContext} from './TugasContext'
import axios from "axios"


function Table() {

    const {inputValue, daftarBuahValue} = useContext(TugasContext)
    const [daftarBuah, setDaftarBuah] = daftarBuahValue   

    const fetchData = async () =>{
        axios
        .get(
            "http://backendexample.sanbercloud.com/api/fruits"
        )
        .then((response) => {
            setDaftarBuah(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        console.log("fetch Table")
        if(daftarBuah === null){
            fetchData()
        }
    }, [daftarBuah])

    return (
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
    )
}

export default Table
