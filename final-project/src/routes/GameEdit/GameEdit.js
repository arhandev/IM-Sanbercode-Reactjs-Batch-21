import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import {DataListContext} from '../../context/DataListContext'
import { UserContext } from '../../context/UserContext'
import Button from '@material-ui/core/Button';

// setState itu lama dan tidak bsa langsung di assign
// required

function GameEdit({match, history}) {
    const [user, setUser] = useContext(UserContext)
    const {game} = useContext(DataListContext)
    const [gameData, setGameData] = game
    const [gameDataDetail, setGameDataDetail] = useState(null)
    const [input, setInput] = useState({
        name: "",
        singlePlayer: "",
        release: "",
        multiplayer: "",
        genre: "",
        platform: "",
        image_url: ""
    })

    const fetchGame = (id) =>{
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
        .then(response =>{
            setGameDataDetail(response.data)
            setInput({
                name: response.data.name,
                singlePlayer: response.data.singlePlayer,
                release: response.data.release,
                multiplayer: response.data.multiplayer,
                genre: response.data.genre,
                platform: response.data.platform,
                image_url: response.data.image_url
            })
        })
        .catch(error =>
            console.log(error.messages))
    }

    useEffect(()=>{
        if(gameDataDetail === null){
            fetchGame(match.params.id)
        }
    },[gameDataDetail])

    const submitHandler = (e) =>{
        setGameDataDetail(null)
        e.preventDefault()
        
        if (input.name == '' ||
            input.singlePlayer == '' ||
            input.release == '' ||
            input.multiplayer == '' ||
            input.genre == '' ||
            input.genre == '' ||
            input.platform == '' ||
            input.image_url == ''){
            return alert("Please fill all the required Field")
        }

        if(input.release <= 1980){
            return alert("Cannot add game under 1980")
        }

        axios.put(`https://backendexample.sanbersy.com/api/data-game/${match.params.id}`,{
            name: input.name,
            singlePlayer: input.singlePlayer,
            release: input.release,
            multiplayer: input.multiplayer,
            genre: input.genre,
            platform: input.platform,
            image_url: input.image_url
        },{
            headers:{
                "Authorization": `Bearer ${user.token}`
            }
        })
        .then((response) =>{
            setInput({name: "",
            singlePlayer: "",
            release: "",
            multiplayer: "",
            genre: "",
            platform: "",
            image_url: ""})
            setGameData(null)
            alert(`${response.data.name} has been edited`)
            history.push('/game-editor')
        })
        .catch((error) =>{
            alert(`something went wrong. ${error.message}`)
        })
    }

    const changeHandler = (e) =>{
        switch (e.target.name){
            case "name":{
                setInput({...input, name: e.target.value})
                break;
            }
            case "singlePlayer":{
                setInput({...input, singlePlayer: e.target.value})
                break;
            }
            case "release":{
                setInput({...input, release: e.target.value})
                break;
            }
            case "multiplayer":{
                setInput({...input, multiplayer: e.target.value})
                break;
            }
            case "genre":{
                setInput({...input, genre: e.target.value})
                break;
            }
            case "platform":{
                setInput({...input, platform: e.target.value})
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
            {gameDataDetail ? <form onSubmit={submitHandler} className="form-movie">
                <h1>Edit Movie</h1>
                <div className="div-input-add-form">
                    <label>Name</label>
                    <input type="text" value={input.name} name="name" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Release</label>
                    <input type="text"  value={input.release} name="release" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>SinglePlayer</label>
                    <select className="div-filter-input" value={input.singlePlayer} name="singlePlayer" id="singlePlayer" onChange={changeHandler}>
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                    </select>
                </div>
                <div className="div-input-add-form">
                    <label>MultiPlayer</label>
                    <select className="div-filter-input" name="multiplayer" id="multiplayer" onChange={changeHandler}>
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                    </select>
                </div>
                <div className="div-input-add-form">
                    <label>Genre</label>
                    <input type="text" value={input.genre} name="genre" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Platform</label>
                    <input type="text"  value={input.platform} name="platform" onChange={changeHandler}/>
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

export default GameEdit
