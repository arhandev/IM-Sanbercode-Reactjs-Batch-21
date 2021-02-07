import React from 'react'
import {
    Link
  } from 'react-router-dom'

function SideNav() {
    return (
        <div>
            <ul>

                <Link to='/change-password'>
                    <li>Change Password</li>
                </Link>
                <Link to='/movie-editor'>
                    <li>Movie Editor</li>
                </Link>
                <Link to='/game-editor'>
                    <li>Game Editor</li>
                </Link>
            </ul>
        </div>
    )
}

export default SideNav
