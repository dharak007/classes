import React from 'react';
import { FaAlignJustify, FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            {/* Start Navigation */}

            <div className="container-fluid main_header">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img src={require('./image/main.png')}></img>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo02"
                                aria-controls="navbarTogglerDemo02"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <FaAlignJustify className="toggle_icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 first_menu">
                                    <li className="nav-item">
                                        <a className="nav-link active home_name" aria-current="page" href="#">
                                            Home <FaAngleDown />
                                        </a>
                                        <ul class="second_menu">
                                            <li><a href="#"> Home Slider </a></li>
                                            <li><a href="#"> Home Default </a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Pages <FaAngleDown />
                                        </a>
                                        <ul class="second_menu">
                                            <li><a href="#"> About Us </a></li>
                                            <li><a href="#"> Service </a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Service
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./Gallery.js">
                                            Gallery
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Blog <FaAngleDown />
                                        </a>
                                        <ul class="second_menu">
                                            <li><a href="#"> Blog Grid </a></li>
                                            <li><a href="#"> Blog Details </a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav mb-lg-0 first_menu">
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link'>
                                            <i class="fa-solid fa-user"></i>
                                        </a>
                                        <ul className='second_item'>
                                            <Link to="/register"><li><a href="#">Registration</a></li></Link>
                                            <Link to="/login"><li><a href="#">Login</a></li></Link>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* End Navigation */}

        </>
    )
}

export default Header;