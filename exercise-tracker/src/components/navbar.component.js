import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link">Exercise</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link">Creat User</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}