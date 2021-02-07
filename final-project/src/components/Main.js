import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from './SideNav'
import Nav from "./Nav"
import Core from "./Core"
import Footer from "./Footer"
import {UserContext} from '../context/UserContext'


export class Main extends Component {

    static contextType = UserContext

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Nav/>
                    <Core/>
                    <Footer/>
                </Router>
            </React.Fragment>
        )
    }
}

export default Main
