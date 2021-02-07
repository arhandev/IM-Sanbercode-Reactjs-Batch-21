import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import {DataListContext} from '../../context/DataListContext'
import { UserContext } from '../../context/UserContext'
import './movieadd.css'
import Button from '@material-ui/core/Button';


function MovieAdd() {
    const [user, setUser] = useContext(UserContext)
    const {film} = useContext(DataListContext)
    const [filmData, setFilmData] = film
    const [input, setInput] = useState({
        title: "",
        description: "",
        year: "",
        duration: "",
        genre: "",
        rating: "",
        review: "",
        image_url: ""
    })

    const submitHandler = (e) =>{
        e.preventDefault()
    
        if (input.title == '' ||
            input.description == '' ||
            input.year == '' ||
            input.duration == '' ||
            input.genre == '' ||
            input.rating == '' ||
            input.review == '' ||
            input.image_url == ''){
            return alert("Please fill all the required Field")
        }

        if(input.year <= 1980){
            return alert("Cannot add movie under 1980")
        }

        axios.post("https://backendexample.sanbersy.com/api/data-movie",{
            title: input.title,
            description: input.description,
            year: input.year,
            duration: input.duration,
            genre: input.genre,
            rating: input.rating,
            review: input.review,
            image_url: input.image_url
        },{
            headers:{
                "Authorization": `Bearer ${user.token}`
            }
        })
        .then((response) =>{
            setInput({title: "",
            description: "",
            year: "",
            duration: "",
            genre: "",
            rating: "",
            review: "",
            image_url: ""})
            setFilmData(null)
            alert(`${response.data.title} has been added`)
        })
        .catch((error) =>{
            alert(`something went wrong. ${error.message}`)
        })
    }

    const changeHandler = (e) =>{
        switch (e.target.name){
            case "title":{
                setInput({...input, title: e.target.value})
                break;
            }
            case "description":{
                setInput({...input, description: e.target.value})
                break;
            }
            case "year":{
                setInput({...input, year: e.target.value})
                break;
            }
            case "duration":{
                setInput({...input, duration: e.target.value})
                break;
            }
            case "genre":{
                setInput({...input, genre: e.target.value})
                break;
            }
            case "rating":{
                setInput({...input, rating: e.target.value})
                break;
            }
            case "review":{
                setInput({...input, review: e.target.value})
                break;
            }
            case "image_url":{
                setInput({...input, image_url: e.target.value})
                break;
            }
            default:
                break;
            
        }
    }

    return (
        <div className="form-add-movie">
            <form onSubmit={submitHandler} className="form-movie">
                <h1 className="title-add-movie">Add Movie</h1>
                <div className="div-input-add-form">
                    <label>Title</label>
                    <input type="text" value={input.title} name="title" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Description</label>
                    <input type="text"  value={input.description} name="description" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Year</label>
                    <input type="number" value={input.year} name="year" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Duration</label>
                    <input type="number"  value={input.duration} name="duration" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Genre</label>
                    <input type="text" value={input.genre} name="genre" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Rating</label>
                    <input type="text"  value={input.rating} name="rating" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Review</label>
                    <input type="text" value={input.review} name="review" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Image URL</label>
                    <input type="text"  value={input.image_url} name="image_url" onChange={changeHandler}/>
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit">
                        add
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default MovieAdd
