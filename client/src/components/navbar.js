import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import { useState, useEffect } from "react";

import Register from "./register";
import Login from "./login";
import Home from "./home";
import Notes from "./user/notes";

const Navbar = () => {
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const logout = () => {
        localStorage.setItem("token", null);
        localStorage.setItem("user", null);
        window.location.href = "/";
    }

    return(
        <Router>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" >HOME</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/register" >Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/login" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/notes" >Notes</Link>
                            </li>
                        </ul>
                    </div>
                    {(isUser || isAdmin) && (
                    <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Options
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        {isUser && (
                        <li>
                            <Link to="/transactions" className="dropdown-item">Trx</Link>
                        </li>
                        )}
                        {isAdmin && (
                            <li>
                                <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                            </li>
                        )}
                        <div className="dropdown-divider"></div>
                        <li><button className="dropdown-item" onClick={logout}>Log out</button></li>
                    </ul>
                </li>
                )}
                </nav>
            </header>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/notes" element={<Notes />} />
            </Routes>
        </Router>
    );
}

export default Navbar;