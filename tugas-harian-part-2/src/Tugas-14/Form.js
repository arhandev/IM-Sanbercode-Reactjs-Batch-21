import React,{useContext} from 'react'
import {TugasContext} from './TugasContext'
import axios from "axios"

function Form() {
    const {inputValue, daftarBuahValue, indexNumber} = useContext(TugasContext)
    const [input, setInput] = inputValue   
    const [daftarBuah, setDaftarBuah] = daftarBuahValue   
    const [index, setIndex] = indexNumber  

    const submitData = async (event) =>{
        event.preventDefault()
        const {input:{name, price, weight}} = input
        console.log(name, price, weight)
        if(index){
            axios.put(
                `http://backendexample.sanbercloud.com/api/fruits/${index}`, {
                name,
                price,
                weight
                }
            )
            .then(response =>{
                setDaftarBuah(null)
                setIndex(null)
                console.log(response.data)
            })
        }
        else{
            axios.post(
                "http://backendexample.sanbercloud.com/api/fruits", {
                name,
                price,
                weight
                }
            )
            .then(response =>{
                setDaftarBuah(null)
                console.log(response.data)
            })
        }
        setInput({input: {name: '', price: '', weight: ''}})
    }
    
    const handleChange = (event) =>{
        let inputType = event.target.name
        switch (inputType){
            case "name":
                {
                    setInput(prev => {
                        return {
                            input: {
                                ...prev.input, name: event.target.value
                            }
                           
                        }
                    })
                    break;
                }
            case "price":
                {
                    setInput(prev => {
                        return {
                            input: {
                                ...prev.input, price: event.target.value
                            }
                           
                        }
                    })
                    break
                }
            case "weight":
                {
                    setInput(prev => {
                        return {
                            input: {
                                ...prev.input, weight: event.target.value
                            }
                           
                        }
                    })
                    break
                }
            default:
                {break}

        }
    }

    

    return (
        <>
                <h1 className="title">Form Daftar Harga Buah</h1>
                <div className="formBuah">
                    <form onSubmit={submitData}>
                        <div className="div-input-form">
                            <label>
                                Nama:
                            </label>
                                <input className="input-form" onChange={event => {handleChange(event)}} type="text" value={input.input.name} placeholder="Nama" name="name"/>
                        </div>
                        <div className="div-input-form">
                            <label>
                                Harga:
                            </label>
                                <input className="input-form" onChange={event => {handleChange(event)}} type="text" value={input.input.price} placeholder="Harga" name="price"/>
                        </div>
                        <div className="div-input-form">
                            <label>
                                Berat (dalam gram):
                            </label>
                                <input className="input-form" onChange={event => {handleChange(event)}} type="number" value={input.input.weight} name="weight" placeholder="0"/>
                        </div>
                        <button className="button-click buttform" type="submit">
                            submit
                        </button>
                    </form>
                </div>
        </>
    )
}

export default Form
