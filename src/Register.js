import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function Register() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [CPassword, setCPassword] = useState("");

    const register = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/registrationdata', {
            name: name,
            email: email,
            password: password,
        })
            .then(function (response) {
                console.log(response);
                setName('')
                setEmail('')
                setPassword('')
                setCPassword('')
                if (name==null || name==""){  
                    alert("Name can't be blank");  
                    return false;  
                  }
                  else if (email==null || email==""){  
                    alert("invalid email adrress");  
                    return false;  
                  }else if(password.length<6 || password==null){  
                    alert("Password must be at least 6 characters long.");  
                    return false;  
                    }   
                  else if(response.status === 422 || !response){
                              window.alert("Invalid Ragistration");
                              console.log("Invalid Ragistration");
                  }
                  else{
                      window.alert("Rgistration successful");
                      console.log("Ragistration successful");
                      navigate("/Login");
                  }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>
                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="form3Example1c">
                                                            Your Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            className="form-control"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="form3Example3c">
                                                            Your Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            className="form-control"
                                                            name={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="form3Example4c">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 register_page">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={register}>
                                                        Register
                                                    </button>
                                                    <Link to='/login'><button type="button" className="btn btn-primary btn-lg login_btn">
                                                        Login<i class="fa-solid fa-arrow-right"></i>
                                                    </button></Link>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Register;