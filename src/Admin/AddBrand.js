import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

function AddBrand() {

    const navigate = useNavigate();
    const [subcategoryname, setsubcategoryname] = useState("");
    const [selectcategoryname, setselectcategoryname] = useState([]);
    const [categoryname, setcategoryname] = useState("");
    const [selectsubcategoryname, setselectsubcategoryname] = useState([]);
    const [brandname, setbrandname] = useState("");

    const addBrand = () => {
        if (brandname !== "") {
            axios
                .post("http://localhost:5000/brand/AddBrand", {
                    categoryname: categoryname,
                    subcategoryname: subcategoryname,
                    brandname: brandname,
                })
                .then((res) => {
                    let data = res.data;
                    console.log(data);
                    setbrandname("");
                    toast.success(" Brand Add Successfully !", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    navigate("/adminshowbrand");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            toast.error("Please Fill All Boxes !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };
    useEffect(() => {
        axios
            .get("http://localhost:5000/category/ShowCategory")
            .then((res) => {
                let data = res.data;
                console.log(data);
                setselectcategoryname(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:5000/subcategory/ShowSubCategory")
            .then((res) => {
                let data = res.data;
                console.log(data);
                setselectsubcategoryname(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                            <i className="fas fa-bars" />
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="../../index3.html" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="navbar-search"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-search" />
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input
                                        className="form-control form-control-navbar"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        <button
                                            className="btn btn-navbar"
                                            type="button"
                                            data-widget="navbar-search"
                                        >
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="fullscreen"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="control-sidebar"
                            data-slide="true"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-th-large" />
                        </a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="../../index3.html" className="brand-link">
                    <img
                        src="../../dist/img/AdminLTELogo.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="../../dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">
                                Alexander Pierce
                            </a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Brand
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/adminaddbrand'><a
                                            href="./pages/forms/RegShowTables.php"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Brand</p>
                                        </a></Link>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/adminshowbrand'><a
                                            href="./pages/forms/RegShowTables.php"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show Brand</p>
                                        </a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie" />
                                    <p>
                                        Category
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/adminaddcategory'><a
                                            href="./pages/forms/BookShowTables.php"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Category</p>
                                        </a></Link>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/adminshowcategory'><a
                                            href="#"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show Category</p>
                                        </a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-tree" />
                                    <p>
                                        Sub Category
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/adminaddsubcategory'><a href="./pages/forms/ContactShow.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add SubCategory</p>
                                        </a></Link>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/adminshowsubcategory'><a href="./pages/forms/ContactShow.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show SubCategory</p>
                                        </a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Add Product
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/adminaddproduct'><a href="./pages/forms/AddProduct.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add</p>
                                        </a></Link>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/adminshowproduct'><a href="./pages/forms/ShowProduct.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show</p>
                                        </a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        Buy Now
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./pages/forms/BuyNow.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show Tables</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        New Sletter
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a
                                            href="./pages/forms/NewsletterShow.php"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show Tables</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>


            <div className="wrapper bg-white">
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2 text-center">
                                <div className="col-sm-6 m-auto">
                                    <h1>ADD YOUR PRODUCT BRAND</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-6 m-auto">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Product Brand</h3>
                                        <div className="card-tools">
                                            <button
                                                type="button"
                                                className="btn btn-tool"
                                                data-card-widget="collapse"
                                                title="Collapse"
                                            >
                                                <i className="fas fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Category Name :</label>
                                            <select
                                                className="form-control"
                                                value={categoryname}
                                                onChange={(e) => {
                                                    setcategoryname(e.target.value);
                                                }}
                                            >
                                                <option
                                                    className="text-center text-dark"
                                                    selected={"selected"}
                                                    hidden
                                                >
                                                    --------Select Categoryname--------
                                                </option>
                                                {
                                                    selectcategoryname.map((item, index) => {
                                                        return (
                                                            <option
                                                                key={index}
                                                                // value={categoryname}
                                                                className="nav-item"
                                                            >
                                                                {item.categoryname}
                                                            </option>
                                                        );
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="inputName">Sub Category Name :</label>
                                            <select
                                                className="form-control"
                                                value={subcategoryname}
                                                onChange={(e) => {
                                                    setsubcategoryname(e.target.value);
                                                }}
                                            >
                                                <option
                                                    className="text-center text-dark"
                                                    selected={"selected"}
                                                    hidden
                                                >
                                                    --------Select SubCategoryname--------
                                                </option>
                                                {
                                                    selectsubcategoryname.map((item, index) => {
                                                        return (
                                                            <option
                                                                key={index}
                                                                // value={category}
                                                                className="nav-item"
                                                            >
                                                                {item.subcategoryname}
                                                            </option>
                                                        );
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputName">Brand Name :</label>
                                            <input
                                                type="text"
                                                id="inputName"
                                                className="form-control"
                                                value={brandname}
                                                onChange={(e) => {
                                                    setbrandname(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 m-auto text-center">
                                <a className="btn btn-success mb-3" onClick={addBrand}>
                                    Add Brand
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AddBrand;