import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import axios from 'axios';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isget, issetget] = useState(false);


    var data = "";
    const btnhandler = () => {
        axios.post('http://localhost:5000/logindata', {
            email: email,
            password: password
        })
            .then(function (response) {
                data = response.data

                if (data._id != '') {
                    issetget(true)
                }
                console.log(response);
                if(response.data.value){
                    window.alert("login successfull");
                    navigate("/");
                }
                else{
                    window.alert("invalid user data");
                  }
            })
            .catch(function (error) {
                console.log(error);
            });
   
    }
            return (
                <>
                
                    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-xl-10">
                                    <div className="card" style={{ borderRadius: "1rem" }}>
                                        <div className="row g-0">
                                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                                <img
                                                    src="https://burninghut.ru/wp-content/uploads/2022/07/23-385x578.jpg"
                                                    alt="login form"
                                                    className="img-fluid"
                                                    style={{ borderRadius: "1rem 0 0 1rem" }}
                                                />
                                            </div>
                                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                                <div className="card-body p-4 p-lg-5 text-black">
                                                    <form>
                                                        <div className="d-flex align-items-center mb-3 pb-1">
                                                            <i
                                                                className="fas fa-cubes fa-2x me-3"
                                                                style={{ color: "#ff6219" }}
                                                            />
                                                            <span className="h1 fw-bold mb-0">Logo</span>
                                                        </div>
                                                        <h5
                                                            className="fw-normal mb-3 pb-3"
                                                            style={{ letterSpacing: 1 }}
                                                        >
                                                            Sign into your account
                                                        </h5>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form2Example17">
                                                                Email address
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="form2Example17"
                                                                className="form-control form-control-lg"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form2Example27">
                                                                Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="form2Example27"
                                                                className="form-control form-control-lg"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="pt-1 mb-4">
                                                            <button
                                                                className="btn btn-dark btn-lg btn-block"
                                                                type="button"
                                                                onClick={btnhandler}
                                                            >
                                                                Login
                                                            </button>
                                                        </div>
                                                        <a className="small text-muted" href="#!">
                                                            Forgot password?
                                                        </a>
                                                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                            Don't have an account?{" "}
                                                            <Link to='/register'><a href="#!" style={{ color: "#393f81" }}>
                                                                Register here
                                                            </a></Link>
                                                        </p>
                                                        <a href="#!" className="small text-muted">
                                                            Terms of use.
                                                        </a>
                                                        <a href="#!" className="small text-muted">
                                                            Privacy policy
                                                        </a>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </>
            );
}

export default Login;