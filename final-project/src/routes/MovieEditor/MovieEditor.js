import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import {DataListContext} from '../../context/DataListContext'
import { UserContext } from '../../context/UserContext'
import {
    Link
  } from 'react-router-dom'
import './movieeditor.css'
import {
    SortAscendingOutlined
  } from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green} from '@material-ui/core/colors';
import { createMuiTheme, withStyles,  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

function MovieEditor() {
    const [user, setUser] = useContext(UserContext)
    const {film} = useContext(DataListContext)
    const [filmData, setFilmData] = film
    const [filmResult, setFilmResult] = useState(null)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState({year: '', rating: '', genre: '', duration: ''})

    const fetchFilm = () =>{
        axios.get("https://backendexample.sanbersy.com/api/data-movie")
        .then(response =>{
            setFilmData(response.data)
        })
        .catch(error =>
            console.log(error.messages))
    }

    const deleteData = (id, name) =>{
        if(window.confirm(`Are You sure want to delete ${name}?`)){
                axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${id}`,
            {
                headers:{
                    "Authorization": `Bearer ${user.token}`
                }
            })
            .then(()=>{
                setFilmData(null)
                setFilmResult(null)
                alert(`${name} has been deleted`)
            })
            .catch((error)=>{
                alert(`something went wrong. ${error.message}`)
            })
        }
        
    }

    const changeHandler = (e) =>{
        switch (e.target.name){
            case "year":{
                setFilter({...filter, year: e.target.value})
                break;
            }
            case "rating":{
                setFilter({...filter, rating: e.target.value})
                break;
            }
            case "duration":{
                setFilter({...filter, duration: e.target.value})
                break;
            }
            case "genre":{
                setFilter({...filter, genre: e.target.value})
                break;
            }
            default:
                break;
            
        }
    }

    const searchData = () =>{
        setFilmResult(filmData.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
    }

    const filterData = (e) =>{
        e.preventDefault()
        if(filter.rating > 10){
            return alert("Rating tidak ada yang melebihi 10!")
        }
        let filmSort = [...filmData]
        filmSort = filmSort.filter(item => item.year.toString().includes(filter.year.toString()))
        filmSort = filmSort.filter(item => item.rating.toString().includes(filter.rating.toString()))
        filmSort = filmSort.filter(item => item.duration.toString().includes(filter.duration.toString()))
        filmSort = filmSort.filter(item => item.genre.toString().includes(filter.genre.toString()))
        setFilmResult(filmSort)
    }

    const resetData = () =>{
        setFilmResult(null)
    }
    
    const sortingData = (head) =>{
        let filmSort = [...filmData]
        switch(head){
            case "title":{
                filmSort.sort(function(a, b){
                    var A = a.title.toUpperCase();
                    var B = b.title.toUpperCase();
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setFilmResult(filmSort)
                break;
            }
            case "description":{
                console.log("hehe")
                filmSort.sort(function(a, b){
                    var A = a.description.toUpperCase();
                    var B = b.description.toUpperCase();
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setFilmResult(filmSort)
                break;
            }
            case "year":{
                filmSort.sort(function(a, b){
                    var A = a.year;
                    var B = b.year;
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setFilmResult(filmSort)
                break;
            }
            case "duration":{
                filmSort.sort(function(a, b){
                    var A = a.duration;
                    var B = b.duration;
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setFilmResult(filmSort)
                break;
            }
            case "genre":{
                filmSort.sort(function(a, b){
                    var A = a.genre.toUpperCase();
                    var B = b.genre.toUpperCase();
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setFilmResult(filmSort)
                break;
            }
            case "review":{
                filmSort.sort(function(a, b){
                    var A = a.review.toUpperCase();
                    var B = b.review.toUpperCase();
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setFilmResult(filmSort)
                break;
            }
            case "image_url":{
                filmSort.sort(function(a, b){
                    var A = a.image_url.toUpperCase();
                    var B = b.image_url.toUpperCase();
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setFilmResult(filmSort)
                break;
            }
            case "rating":{
                filmSort.sort(function(a, b){
                    var A = a.rating;
                    var B = b.rating;
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setFilmResult(filmSort)
                break;
            }
            default:
                break;
            
        }

    }

    useEffect(()=>{
        if(filmData === null){
            fetchFilm()
        }
    },[filmData])

    return (
        <div>
            <h1 className="title-movie">Movie Editor</h1>
            <div>
                <div className="filter">
                    <form >
                        <h1 style={{fontWeight: "900"}}>Filter Data</h1>
                        <div className="div-filter">
                            <label>Year</label>
                            <input className="div-filter-input" type="number" name="year" onChange={changeHandler}/>
                        </div>
                        <div className="div-filter">
                            <label>Rating</label>
                            <input className="div-filter-input" type="number" name="rating" onChange={changeHandler}/>
                        </div>
                        <div className="div-filter">
                            <label>Duration</label>
                            <input className="div-filter-input" type="number" name="duration" onChange={changeHandler}/>
                        </div>
                        <div className="div-filter">
                        <label for="genre">Genre:</label>
                            <select name="genre" id="genre" onChange={changeHandler}>
                                <option value=""></option>
                                <option value="Action">Action</option>
                                <option value="Romantic">Romantic</option>
                                <option value="Cartoon">Cartoon</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Comedy">Comedy</option>
                            </select> 
                        </div>
                        <div style={{float:"right"}}>
                            <Button variant="contained" color="primary" onClick={filterData} style={{marginRight: "10px", backgroundColor: "#1a237e"}}>
                                filter
                            </Button>
                            < Button variant="contained" color="primary" style={{marginRight: "10px", backgroundColor: "#212121"}} onClick={resetData}>
                                Reset
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="table-movie-all">
                    <div className="util-table">
                    <Link to='/movie-editor/add'>
                    <Button variant="contained" color="primary">
                            add +
                    </Button>
                    </Link>
                        <div className="input-search">
                            <input onChange={event => {setSearch(event.target.value);}} type="text"/><button onClick={searchData}>Search</button>
                        </div>
                    </div>
                    <table className="table-movie" style={{tableLayout: "fixed", width: "100%"}}>
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>
                                <SortAscendingOutlined onClick={() =>sortingData("image_url")}/>
                                Image
                            </th>
                            <th>
                            <SortAscendingOutlined onClick={() => sortingData("title")}/>
                                Title
                            </th>
                            <th>
                                <SortAscendingOutlined onClick={() =>sortingData("year")}/>
                                Year
                            </th>
                            <th>
                                <SortAscendingOutlined onClick={() =>sortingData("duration")}/>
                                Duration
                            </th>
                            <th>
                                <SortAscendingOutlined onClick={() =>sortingData("rating")}/>
                                Rating
                            </th>
                            <th>
                                <SortAscendingOutlined onClick={() =>sortingData("genre")}/>
                                Genre
                            </th>
                            <th>
                                <SortAscendingOutlined onClick={() =>sortingData("description")}/>
                                Description
                            </th>
                            <th>
                                <SortAscendingOutlined onClick={() =>sortingData("review")}/>
                                Review
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        filmData ?
                        filmResult?
                        filmResult.length == 0 ?
                        (
                            <h1>
                                NOT FOUND
                            </h1>
                        ):
                            filmResult.map((item, index) =>(
                                <React.Fragment key={index}>
                                <tbody >
                                    <tr>
                                        <td>
                                            {index+1}
                                        </td>
                                        <td >
                                            <img src={item.image_url} style={{height:"10rem"}}/>
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>    
                                        <td>
                                            {item.year}  
                                        </td>
                                        <td>
                                            {item.duration}
                                        </td>
                                        <td>
                                            {item.rating}
                                        </td>
                                        <td>
                                            {item.genre}
                                        </td>
                                        <td style={{width: "50px", overflow: "hidden", wordWrap: "break-word"}}> 
                                            {
                                            item.description.length > 50 ?
                                            item.description.slice(0,50) + ("..."):
                                            item.description 
                                            }
                                        </td>
                                        <td>
                                        {item.review.length > 50 ?
                                        item.review.slice(0,50) + ("....."):
                                        item.review }
                                        </td>
                                        <td>
                                            <Link to={`/movie-editor/${item.id}/edit`}>
                                                <Button variant="contained" style={{backgroundColor: "#2196f3"}} color="primary">
                                                    edit
                                                </Button>
                                            </Link>
                                            <Button variant="contained" color="secondary" style={{marginTop: "2rem", backgroundColor: "#c62828"}} onClick={() =>deleteData(item.id, item.title)}>
                                                delete
                                            </Button>
                                        </td>
                                    </tr>      
                                </tbody>
                                </React.Fragment>
                            )):
                        filmData.map((item, index) =>(
                            <React.Fragment key={index}>
                            <tbody >
                                <tr>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td >
                                        <img src={item.image_url} style={{height:"10rem"}}/>
                                    </td>
                                    <td>
                                        <Link to={`/movies/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </td>    
                                    <td>
                                    {item.year}  
                                    </td>
                                    <td>
                                        {item.duration}
                                    </td>
                                    <td>
                                        {item.rating}
                                    </td>
                                    <td>
                                        {item.genre}
                                    </td>
                                    <td style={{width: "50px",height:"40px",overflow:"hidden"}}>
                                        {item.description.length > 50 ?
                                        item.description.slice(0,50) + ("....."):
                                        item.description 
                                        }
                                    </td>
                                    <td>
                                        {item.review.length > 50 ?
                                        item.review.slice(0,50) + ("....."):
                                        item.review }
                                    </td>
                                    <td>
                                        <Link to={`/movie-editor/${item.id}/edit`}>
                                        <Button variant="contained" color="primary" style={{backgroundColor: "#2196f3"}}>
                                            edit
                                        </Button>
                                        </Link>
                                        <Button variant="contained" color="secondary" style={{marginTop: "2rem", backgroundColor: "#c62828"}} onClick={() =>deleteData(item.id, item.title)}>
                                            delete
                                        </Button>
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
            </div>
        </div>
    )
}

export default MovieEditor
