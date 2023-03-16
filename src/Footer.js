import React from 'react';
import { FaFacebook, FaDribbble, FaTwitter, FaAngleRight, FaHeart } from "react-icons/fa";


function Footer() {
    return (
        <>

            {/* Start Footer */}

            <div className="website_footer">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h5>About eComart</h5>
                                <hr />
                                <p>Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed eiusmod tempor sit amet elit.</p>
                                <ul className="nav flex-row">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaFacebook className="footer_icon" />
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaDribbble className="footer_icon" />
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaTwitter className="footer_icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h5>Quick Links</h5>
                                <hr />
                                <ul className="nav flex-column footer_item">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight /> Get Started
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight /> It consultant
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight /> About Us
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight /> Need Helps
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight />  Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h5>Company</h5>
                                <hr />
                                <ul className="nav flex-column footer_item">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight /> Our Service
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight />  Our Privacy
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight /> Update News
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight /> Our Team
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-muted">
                                            <FaAngleRight />  Free Consult
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <form>
                                    <h5>Our Map</h5>
                                    <hr />
                                    <p>Monthly digest of whats new and exciting from us.</p>
                                    <div className="d-flex w-100 gap-2 footer_map">
                                        <a href="#">
                                            <img src={require('./image/map.png')}></img>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr className="hori_row" />
                    </footer>
                </div>
                <div className="bottom_footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 last_part">
                                <h6>©Copyright - All Right Reserved.Designed <FaHeart /> by <span>Theme Family</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End Footer */}

        </>
    )
}

export default Footer;