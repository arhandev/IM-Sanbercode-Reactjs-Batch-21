import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import {DataListContext} from '../../context/DataListContext'
import { UserContext } from '../../context/UserContext'
import Button from '@material-ui/core/Button';

// setState itu lama dan tidak bsa langsung di assign
// required

function MovieEdit({match, history}) {
    const [user, setUser] = useContext(UserContext)
    const {film} = useContext(DataListContext)
    const [movieData, setMovieData] = film
    const [movieDataDetail, setMovieDataDetail] = useState(null)
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

    const fetchMovie = (id) =>{
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
        .then(response =>{
            setMovieDataDetail(response.data)
            setInput({
                title: response.data.title,
                description: response.data.description,
                year: response.data.year,
                duration: response.data.duration,
                genre: response.data.genre,
                rating: response.data.rating,
                review: response.data.review,
                image_url: response.data.image_url
            })
        })
        .catch(error =>
            console.log(error.messages))
    }

    useEffect(()=>{
        if(movieDataDetail === null){
            fetchMovie(match.params.id)
        }
    },[movieDataDetail])

    const submitHandler = (e) =>{
        setMovieDataDetail(null)
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
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${match.params.id}`,{
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
            setMovieData(null)
            alert(`${response.data.title} has been edited`)
            history.push('/movie-editor')
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
            {movieDataDetail ? <form onSubmit={submitHandler} className="form-movie">
                <h1>Edit Movie</h1>
                <div className="div-input-add-form">
                    <label>title</label>
                    <input type="text" value={input.title} name="title" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>description</label>
                    <input type="text"  value={input.description} name="description" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>year</label>
                    <input type="number" value={input.year} name="year" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>duration</label>
                    <input type="number"  value={input.duration} name="duration" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Genre</label>
                    <input type="text" value={input.genre} name="genre" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>rating</label>
                    <input type="text"  value={input.rating} name="rating" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>review</label>
                    <input type="text"  value={input.review} name="review" onChange={changeHandler}/>
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
            </form>:
            <h1>LOADING</h1>}
        </div>
    )
}

export default MovieEdit
