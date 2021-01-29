import React, {useContext} from 'react'
import {
    Link
} from 'react-router-dom'
import './nav.css'
import {ClickContext} from '../App'


function Nav() {
    const clickContext = useContext(ClickContext)

    var backStyles = {
        backgroundColor: clickContext.clickState ? "black": "white"
    }

    var listStyles={
        color: clickContext.clickState ? "white" : "grey"
    }

    return (
        <div className="Nav" style = {backStyles}>
            <ul className="NavUl">
                <li className="NavLi" >
                    <Link style = {listStyles} to="/">Tugas9</Link>
                </li>
                <li className="NavLi" >
                    <Link style = {listStyles} to="/Tugas10">Tugas10</Link>
                </li>
                <li className="NavLi" >
                    <Link style = {listStyles} to="/Tugas11">Tugas11</Link>
                </li>
                <li className="NavLi" >
                    <Link style = {listStyles} to="/Tugas12">Tugas12</Link>
                </li>
                <li className="NavLi" >
                    <Link style = {listStyles} to="/Tugas13">Tugas13</Link>
                </li>
                <li className="NavLi" >
                    <Link style = {listStyles} to="/Tugas14">Tugas14</Link>
                </li>
                <li className="NavLi" >
                    <Link style = {listStyles} to="/Tugas15">Tugas15</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
