import React, {useState, useContext} from 'react'
import {
    Link
} from 'react-router-dom'
import './Login.css'

function Login({history}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitData = (event) =>{
        if(username === "admin" && password === "admin"){
            localStorage.removeItem("Authorization")
            localStorage.setItem("Authorization", "ValidToken")
            history.push("/home")
            window.location.reload()
        }
        else{
            alert("wrong password")
        }
    }

    return (
        <div  className="Login">
            <form onSubmit={submitData}>
                <label>
                    Username :
                </label>
                <input type="text" onChange={event => {setUsername(event.target.value);}}/>
                <br/>
                <label>
                    Password :
                </label>
                <input type="password" onChange={event => {setPassword(event.target.value);}} />
                <br/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login
