import React, {useEffect, useContext, useState} from 'react'
import {QuizContext} from '../../../Context'
import './Books.css'
import axios from 'axios'

function Books() {
    const {daftarBukuValue} = useContext(QuizContext)
    const [daftarBuku, setDaftarBuku] = daftarBukuValue
    const [inputTitle, setInputTitle] = useState("")
    const [inputDescription, setInputDescription] = useState("")
    const [inputReview, setInputReview] = useState("")
    const [inputReleaseYear, setInputReleaseYear] = useState(2020)
    const [inputTotalPage, setInputTotalPage] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputImageUrl, setInputImageUrl] = useState("")
    const [editIndex, setEditIndex] = useState(null)
    const [search, setSearch] = useState("")
    const [hasilDataBuku, setHasilDataBuku] = useState(null)


    const fetchBuku = () =>{
        axios
        .get("http://backendexample.sanbercloud.com/api/books")
        .then((response) =>{
            setDaftarBuku(response.data)
        })

    }
    const submitData = (event) =>{
        event.preventDefault()

        if(editIndex){
            axios.put(
                `http://backendexample.sanbercloud.com/api/books/${editIndex}`,{
                    title: inputTitle,
                    description: inputDescription,
                    review: inputReview,
                    release_year: inputReleaseYear,
                    totalPage: inputTotalPage,
                    price: inputPrice,
                    image_url: inputImageUrl
                }
            )
            .then((response) =>{
                setDaftarBuku(null)
                setEditIndex(null)
                console.log("success")
            })
        }
        else{
            axios.post(
                "http://backendexample.sanbercloud.com/api/books",{
                    title: inputTitle,
                    description: inputDescription,
                    review: inputReview,
                    release_year: inputReleaseYear,
                    totalPage: inputTotalPage,
                    price: inputPrice,
                    image_url: inputImageUrl
                }
            )
            .then((response) =>{
                setDaftarBuku(null)
            })
        }
        setInputTitle('')
        setInputReleaseYear('')
        setInputReview('')
        setInputDescription('')
        setInputTotalPage('')
        setInputImageUrl('')
        setInputPrice('')
    }

    const editData = (index, id) => {
        setInputTitle(daftarBuku[index].title)
        setInputReleaseYear(daftarBuku[index].release_year)
        setInputReview(daftarBuku[index].review)
        setInputDescription(daftarBuku[index].description)
        setInputTotalPage(daftarBuku[index].totalPage)
        setInputImageUrl(daftarBuku[index].image_url)
        setInputPrice(daftarBuku[index].price)
        setEditIndex(id)
    }

    const deleteData = (id) =>{
        axios.delete(
            `http://backendexample.sanbercloud.com/api/books/${id}`
        )
        .then(() =>{
            setDaftarBuku(null)
        })
    }

    const searchData = () =>{
        setHasilDataBuku(daftarBuku.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
        console.log(hasilDataBuku)
    }

    useEffect(()=>{
        if(daftarBuku === null){
            fetchBuku()
        }
    },[daftarBuku, hasilDataBuku])

    // MAS ABDUL SAYA BINGUNG DENGAN SEARCH NYA, MAS ABDUL BISA LIAT DI CONSOLE NYA BERHASIL, NAMUN DI COMPONENTNYA TAK NAMPAK
    return (
        <div className="Books">
            <div className="search-books">
                <input onChange={event => {setSearch(event.target.value);}} type="text"/><button onClick={searchData}>Search</button>
            </div>

            <div className="table-books">
                <table>
                <thead>
                    <tr>
                        <th>
                            No
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Review
                        </th>
                        <th>
                            Release Year
                        </th>
                        <th>
                            Total Page
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                {
                    daftarBuku ?
                    hasilDataBuku?
                    hasilDataBuku.map((item, index) =>{
                        <tbody >
                            <tr>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    {item.title}
                                </td>    
                                <td>
                                  {item.description}  
                                </td>
                                <td>
                                    {item.review}
                                </td>
                                <td>
                                    {item.release_year}
                                </td>
                                <td>
                                    {item.totalPage}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                 <button onClick={() => editData(index, item.id)}>
                                        edit
                                    </button>
                                    <button onClick={() =>deleteData(item.id)}>
                                        delete
                                    </button>
                                </td>
                            </tr>      
                        </tbody>
                    }):
                    daftarBuku.map((item, index) =>(
                        <React.Fragment key={index}>
                        <tbody >
                            <tr>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    {item.title}
                                </td>    
                                <td>
                                  {item.description}  
                                </td>
                                <td>
                                    {item.review}
                                </td>
                                <td>
                                    {item.release_year}
                                </td>
                                <td>
                                    {item.totalPage}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    <button onClick={() => editData(index, item.id)}>
                                        edit
                                    </button>
                                    <button onClick={() =>deleteData(item.id)}>
                                        delete
                                    </button>
                                </td>
                            </tr>      
                        </tbody>
                        </React.Fragment>
                    )):
                    <tbody>
                        <tr>
                            <td>
                            LOADING
                            </td>
                        </tr>
                    </tbody>
                }

                </table>
            </div>
            <br/>
            <div className="form-books">
                <form onSubmit={submitData}>
                    <h3>
                        Books Form
                    </h3>
                    <div className="div-input-form">
                        <label>
                            Title:
                        </label>
                        <input className="input-form" type="text" value={inputTitle} onChange={event => {setInputTitle(event.target.value);}}/>
                    </div>
                    <div className="div-input-form">
                        <label>
                            Description:
                        </label>
                        <textarea className="input-form" value={inputDescription} onChange={event => {setInputDescription(event.target.value);}}/>
                    </div>
                    <div className="div-input-form">
                        <label>
                            Review:
                        </label>
                        <textarea className="input-form" value={inputReview}  onChange={event => {setInputReview(event.target.value);}}/>
                    </div>
                    <div className="div-input-form">
                        <label>
                            Release Year: 
                        </label>
                        <input className="input-form" value={inputReleaseYear} type="number" onChange={event => {setInputReleaseYear(event.target.value);}}/>
                    </div>
                    <div className="div-input-form">
                        <label>
                            Total Page : 
                        </label>
                        <input className="input-form" type="number" value={inputTotalPage} onChange={event => {setInputTotalPage(event.target.value);}}/>
                    </div>
                    <div className="div-input-form">
                        <label>
                            Price: 
                        </label>
                        <input className="input-form" value={inputPrice} type="number" onChange={event => {setInputPrice(event.target.value);}} />
                    </div>
                    <div className="div-input-form">
                        <label>
                            Image Url
                        </label>
                        <textarea className="input-form" value={inputImageUrl} type="text" onChange={event => {setInputImageUrl(event.target.value);}}/>
                    </div>
                    <button type="submit">
                        click me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Books
