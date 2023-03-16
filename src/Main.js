import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import carousel from './image/carousel-1.jpg';
import carousel1 from './image/carousel-2.jpg';
import carousel2 from './image/carousel-3.jpg';
import offer from './image/offer-1.jpg';
import offer1 from './image/offer-2.jpg';
import cat from './image/cat-1.jpg';
import cat1 from './image/cat-2.jpg';
import cat2 from './image/cat-3.jpg';
import cat3 from './image/cat-4.jpg';
import product from './image/product-1.jpg';
import product1 from './image/product-2.jpg';
import product2 from './image/product-3.jpg';
import product3 from './image/product-4.jpg';
import product4 from './image/product-5.jpg';
import product5 from './image/product-6.jpg';
import product6 from './image/product-7.jpg';
import product7 from './image/product-8.jpg';
import axios from 'axios';

function Main() {

    const [view, setView] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/addproduct/ShowProduct')

            .then(function (response) {
                console.log(response.data.data);
                setView(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    },[]);

    return (
        <>

            {/* Carousel Start */}
            <div className="container-fluid mb-3">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div
                            id="header-carousel"
                            className="carousel slide carousel-fade mb-30 mb-lg-0"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#header-carousel"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#header-carousel" data-slide-to={1} />
                                <li data-target="#header-carousel" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div
                                    className="carousel-item position-relative active"
                                    style={{ height: 430 }}
                                >
                                    <img
                                        className="position-absolute w-100 h-100"
                                        src={carousel}
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: 700 }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                                Men Fashion
                                            </h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                                Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                                duo stet amet amet ndiam elitr ipsum diam
                                            </p>
                                            <a
                                                className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                                href="#"
                                            >
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="carousel-item position-relative"
                                    style={{ height: 430 }}
                                >
                                    <img
                                        className="position-absolute w-100 h-100"
                                        src={carousel1}
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: 700 }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                                Women Fashion
                                            </h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                                Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                                duo stet amet amet ndiam elitr ipsum diam
                                            </p>
                                            <a
                                                className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                                href="#"
                                            >
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="carousel-item position-relative"
                                    style={{ height: 430 }}
                                >
                                    <img
                                        className="position-absolute w-100 h-100"
                                        src={carousel2}
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: 700 }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                                Kids Fashion
                                            </h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                                Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                                duo stet amet amet ndiam elitr ipsum diam
                                            </p>
                                            <a
                                                className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                                href="#"
                                            >
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-offer mb-30" style={{ height: 200 }}>
                            <img className="img-fluid" src={offer} alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div className="product-offer mb-30" style={{ height: 200 }}>
                            <img className="img-fluid" src={offer1} alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}
            {/* Featured Start */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center bg-light mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-check text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center bg-light mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center bg-light mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center bg-light mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured End */}
            {/* Categories Start */}
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Categories</span>
                </h2>
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat1} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat2} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat3} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat1} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat2} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat3} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat1} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat2} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat3} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <img className="img-fluid" src={cat} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Categories End */}
            {/* Products Start */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Featured Products</span>
                </h2>
                <div className="row px-xl-5 d-flex">
                    {
                        view.map((val, i) => {
                            return (

                                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                    <div className="product-item bg-light mb-4">
                                        <div className="product-img position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src={val.image} alt="" />
                                            <div className="product-action">
                                                <a className="btn btn-outline-dark btn-square" href="">
                                                    <i className="fa fa-shopping-cart" />
                                                </a>
                                                <a className="btn btn-outline-dark btn-square" href="">
                                                    <i className="far fa-heart" />
                                                </a>
                                                <a className="btn btn-outline-dark btn-square" href="">
                                                    <i className="fa fa-sync-alt" />
                                                </a>
                                                <a className="btn btn-outline-dark btn-square" href="">
                                                    <i className="fa fa-search" />
                                                </a>            
                                            </div>
                                        </div>
                                        <div className="text-center py-4">
                                            <Link to={`/Buynow/${val._id}`}> <a className="h6 text-decoration-none text-truncate" href="">
                                                {val.name}
                                            </a></Link>
                                            <div className="d-flex align-items-center justify-content-center mt-2">
                                                <h5>${val.price}</h5>
                                                <h6 className="text-muted ml-2">
                                                    {/* <del>$12300.00</del> */}
                                                </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa fa-star text-primary mr-1" />
                                                <small className="fa fa-star text-primary mr-1" />
                                                <small className="fa fa-star text-primary mr-1" />
                                                <small className="fa fa-star text-primary mr-1" />
                                                <small className="fa fa-star text-primary mr-1" />
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            {/* Products End */}

        </>
    )
}

export default Main;