import React, {useContext, useEffect} from 'react'
import {QuizContext} from '../../Context'
import './Nav.css'
import logo from '../../staticfiles/logo.png'
import {
    Link
} from 'react-router-dom'

function Nav() {
    const {loginValue} = useContext(QuizContext)
    const [login, setLogin] = loginValue
    const doLogout = () => {
        localStorage.removeItem("Authorization")
        window.location.reload()
    }

    useEffect(()=>{
        if(localStorage.getItem("Authorization")){
            setLogin(true)
        }
        else(
            setLogin(false)
        )
    })
    return (
        <div className="Nav">
            <img src={logo} className="logo-nav"/>
            <div className="list-nav">    
                <ul className="nav-ul">
                    <Link to="/home">
                        <li className="nav-li">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-li">
                            About
                        </li>
                    </Link>
                    {
                        localStorage.getItem("Authorization") &&
                        <Link to="/Books">
                            <li className="nav-li">
                                Book List Editor
                            </li>
                        </Link>
                    }
                    {login ?
                        <li className="nav-li">
                            <button onClick={doLogout}>
                                logout
                            </button>
                        </li>:
                        <li>
                            <Link to="/login">
                                login
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav
