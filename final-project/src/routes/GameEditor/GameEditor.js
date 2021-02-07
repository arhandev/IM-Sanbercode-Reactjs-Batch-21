import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import {DataListContext} from '../../context/DataListContext'
import { UserContext } from '../../context/UserContext'
import {
    Link
  } from 'react-router-dom'
import {
SortAscendingOutlined
} from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green} from '@material-ui/core/colors';
import { createMuiTheme, withStyles,  } from '@material-ui/core/styles';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';


function GameEditor() {
    const [user, setUser] = useContext(UserContext)
    const {game} = useContext(DataListContext)
    const [gameData, setGameData] = game
    const [gameResult, setGameResult] = useState(null)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState({release: '', singlePlayer: '', multiplayer: '', platform: '', genre: ''})


    const searchData = () =>{
        setGameResult(gameData.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
    }

    const fetchGame = () =>{
        axios.get("https://backendexample.sanbersy.com/api/data-game")
        .then(response =>{
            setGameData(response.data)

        })
        .catch(error =>
            console.log(error.messages))
    }

    const sortingData = (head) =>{
        let gameSort = [...gameData]
        switch(head){
            case "name":{
                gameSort.sort(function(a, b){
                    var A = a.name.toUpperCase();
                    var B = b.name.toUpperCase();
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setGameResult(gameSort)
                break;
            }
            case "singlePlayer":{
                gameSort.sort(function(a, b){
                    var A = a.singlePlayer;
                    var B = b.singlePlayer;
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setGameResult(gameSort)
                break;
            }
            case "release":{
                gameSort.sort(function(a, b){
                    var A = a.release;
                    var B = b.release;
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setGameResult(gameSort)
                break;
            }
            case "multiplayer":{
                gameSort.sort(function(a, b){
                    var A = a.multiplayer;
                    var B = b.multiplayer;
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setGameResult(gameSort)
                break;
            }
            case "genre":{
                gameSort.sort(function(a, b){
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
                setGameResult(gameSort)
                break;
            }
            case "platform":{
                gameSort.sort(function(a, b){
                    var A = a.platform.toUpperCase();
                    var B = b.platform.toUpperCase();
                    if (A < B) {
                        return -1;
                    }
                    if (A > B) {
                        return 1;
                    }
                    return 0;
                })
                setGameResult(gameSort)
                break;
            }
            case "image_url":{
                gameSort.sort(function(a, b){
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
                setGameResult(gameSort)
                break;
            }

            default:
                break;
            
        }

    }
    const filterData = (e) =>{
        e.preventDefault()
        if(filter.rating > 10){
            return alert("Rating tidak ada yang melebihi 10!")
        }
        let gameSort = [...gameData]
        gameSort = gameSort.filter(item => item.release.toString().includes(filter.release.toString()))
        gameSort = gameSort.filter(item => item.platform.toLowerCase().includes(filter.platform.toLowerCase()))
        gameSort = gameSort.filter(item => item.genre.toLowerCase().includes(filter.genre.toLowerCase()))
        gameSort = gameSort.filter(item => item.singlePlayer.toString().includes(filter.singlePlayer.toString()))
        gameSort = gameSort.filter(item => item.multiplayer.toString().includes(filter.multiplayer.toString()))
        console.log(filter)
        setGameResult(gameSort)
    }

    const changeHandler = (e) =>{
        switch (e.target.name){
            case "release":{
                setFilter({...filter, release: e.target.value})
                break;
            }
            case "singlePlayer":{
                setFilter({...filter, singlePlayer: e.target.value})
                break;
            }
            case "multiplayer":{
                setFilter({...filter, multiplayer: e.target.value})
                break;
            }
            case "platform":{
                setFilter({...filter, platform: e.target.value})
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
    const resetData = () =>{
        setGameResult(null)
    }

    const deleteData = (id, name) =>{
        if(window.confirm(`Are You sure want to delete ${name}?`)){
                axios.delete(`https://backendexample.sanbersy.com/api/data-game/${id}`,
            {
                headers:{
                    "Authorization": `Bearer ${user.token}`
                }
            })
            .then(()=>{
                setGameData(null)
                alert(`${name} has been deleted`)
            })
            .catch((error)=>{
                alert(`something went wrong. ${error.message}`)
            })
        }
        
    }

    useEffect(()=>{
        if(gameData === null){
            fetchGame()
        }
    },[gameData])

    return (
        <div>
            <h1 className="title-movie">Game Editor</h1>
            <div>
            
                <div className="filter">
                    <form >
                        <h1 style={{fontWeight: "900"}}>Filter Data</h1>
                        <div className="div-filter">
                            <label>Release</label>
                            <input className="div-filter-input" type="number" name="release" onChange={changeHandler}/>
                        </div>
                        <div className="div-filter">
                            <label>SinglePlayer</label>
                            <select className="div-filter-input" name="singlePlayer" id="singlePlayer" onChange={changeHandler}>
                                <option value=""></option>
                                <option value={0}>No</option>
                                <option value={1}>Yes</option>
                            </select> 
                        </div>
                        <div className="div-filter">
                            <label>Multiplayer</label>
                            <select name="multiplayer" id="multiplayer" className="div-filter-input" onChange={changeHandler}>
                                <option value=""></option>
                                <option value={0}>No</option>
                                <option value={1}>Yes</option>
                            </select> 
                        </div>
                        <div className="div-filter">
                            <label for="platform">Platform:</label>
                            <select name="platform" id="platform" onChange={changeHandler} className="div-filter-input">
                                <option value=""></option>
                                <option value={"android"}>Android</option>
                                <option value={"ios"}>IOS</option>
                                <option value="">Others</option>
                            </select> 
                        </div>
                        <div className="div-filter">
                            <label for="genre">Genre:</label>
                            <select name="genre" id="genre" onChange={changeHandler}>
                                <option value=""></option>
                                <option value="Mini">Mini</option>
                                <option value="Indie">Indie</option>
                                <option value="Puzzle">Cartoon</option>
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
                    <Link to='/game-editor/add'>
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
                                Image Url
                            </th>
                            <th>
                                <SortAscendingOutlined onClick={() =>sortingData("name")}/>
                                Name
                            </th>
                            <th>
                            <SortAscendingOutlined onClick={() =>sortingData("release")}/>
                                Release
                            </th>
                            <th>
                            <SortAscendingOutlined onClick={() =>sortingData("genre")}/>
                                Genre
                            </th>
                            <th>
                            <SortAscendingOutlined onClick={() =>sortingData("singlePlayer")}/>
                                Singleplayer
                            </th>
                            <th>
                            <SortAscendingOutlined onClick={() =>sortingData("multiplayer")}/>
                                Multiplayer
                            </th>
                            <th>
                            <SortAscendingOutlined onClick={() =>sortingData("platform")}/>
                                Platform
                            </th>
                        </tr>
                    </thead>
                    {
                        gameData ?
                        gameResult?
                        gameResult.length == 0 ?
                        (
                            <h1>
                                NOT FOUND
                            </h1>
                        ):
                        gameResult.map((item, index) =>(
                            <React.Fragment key={index}>
                            <tbody >
                                <tr>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td style={{width: "50px", overflow: "hidden"}}>
                                        <img src={item.image_url} style={{width: "5rem",height:"10rem"}}/>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>    
                                    <td>
                                        {item.release}  
                                    </td>
                                    <td>
                                        {item.genre}
                                    </td>
                                    <td>
                                        {item.singlePlayer}
                                    </td>
                                    <td>
                                        {item.multiplayer}
                                    </td>
                                    <td>
                                        {item.platform}
                                    </td>
                                    <td>
                                        <Link to={`/game-editor/${item.id}/edit`}>
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
                        gameData.map((item, index) =>(
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
                                        <Link to={`/games/${item.id}`}>
                                            {item.name}
                                        </Link>
                                    </td>    
                                    <td>
                                        {item.release}  
                                    </td>
                                    <td>
                                        {item.genre}
                                    </td>
                                    <td>
                                        {item.singlePlayer == 0 ? <CheckOutlinedIcon/> : <CloseOutlinedIcon/>}
                                    </td>
                                    <td>
                                        {item.multiplayer == 0 ? <CheckOutlinedIcon/> : <CloseOutlinedIcon/>}
                                    </td>
                                    <td>
                                        {item.platform}
                                    </td>
                                    <td>
                                        <Link to={`/game-editor/${item.id}/edit`}>
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

export default GameEditor
