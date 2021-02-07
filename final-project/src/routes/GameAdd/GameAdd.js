import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import {DataListContext} from '../../context/DataListContext'
import { UserContext } from '../../context/UserContext'
import Button from '@material-ui/core/Button';


function GameAdd() {
    const [user, setUser] = useContext(UserContext)
    const {game} = useContext(DataListContext)
    const [gameData, setGameData] = game
    const [input, setInput] = useState({
        name: "",
        singlePlayer: "",
        release: "",
        multiPlayer: "",
        genre: "",
        platform: "",
        image_url: ""
    })

    const submitHandler = (e) =>{
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
        axios.post("https://backendexample.sanbersy.com/api/data-game",{
            name: input.name,
            singlePlayer: input.singlePlayer,
            release: input.release,
            multiPlayer: input.multiPlayer,
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
            multiPlayer: "",
            genre: "",
            platform: "",
            image_url: ""})
            setGameData(null)
            alert(`${response.data.name} has been added`)
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
            case "multiPlayer":{
                setInput({...input, multiPlayer: e.target.value})
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
            <form onSubmit={submitHandler} className="form-movie">
                <h1 className="title-add-movie">Add Games</h1>
                <div className="div-input-add-form">
                    <label>Name</label>
                    <input type="text" value={input.name} name="name" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>Release</label>
                    <input type="number" value={input.release} name="release" onChange={changeHandler}/>
                </div>
                <div className="div-input-add-form">
                    <label>SinglePlayer</label>
                    <select className="div-filter-input" name="singlePlayer" id="singlePlayer" onChange={changeHandler}>
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
            </form>
        </div>
    )
}

export default GameAdd
