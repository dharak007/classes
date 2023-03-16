import React from 'react';
import { Link } from "react-router-dom";


function AdminHome() {
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
                        <a href="C:\wamp\www\my Project\AdminHome.php" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="C:\wamp\www\my Project\AdminHome.php" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}
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
                            data-controlsidebar-slide="true"
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
                <a href="index3.html" className="brand-link">
                    <img
                        src="dist/img/AdminLTELogo.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">
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
                                            href="#"
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
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Book Tables</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>
                                            85<sup style={{ fontSize: 20 }}>%</sup>
                                        </h3>
                                        <p>Responses</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>100+</h3>
                                        <p>Customer Register</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>1000+</h3>
                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>100+</h3>
                                        <p>Food Items</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>
                                            100<sup style={{ fontSize: 20 }}>%</sup>
                                        </h3>
                                        <p>Accuracy</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>
                                            100<sup style={{ fontSize: 20 }}>%</sup>
                                        </h3>
                                        <p>FeedBack</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AdminHome;