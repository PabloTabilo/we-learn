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
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/notes" >Notes</Link>
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
                    </div>
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