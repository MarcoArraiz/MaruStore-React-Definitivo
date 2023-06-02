import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav class="navbar bg-dark border-bottom border-bottom-dark container-fluid" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">MaruStore</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        <CartWidget/>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NavLink class="nav-link" to={`/categoria/1`}>GPU</NavLink>
                                </li>

                                <li>
                                    <NavLink class="nav-link" to={`/categoria/2`}>Teclados</NavLink>
                                </li>

                                <li>
                                    <NavLink class="nav-link" to={`/categoria/3`}>Procesadores</NavLink>
                                </li>

                                <li>
                                    <NavLink class="nav-link" to={`/categoria/4`}>Mouses</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar