import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import './css/Addtocart.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Addtocart = () => {

    const params = useParams();
    const [view, setView] = useState([]);
    const [addvalue, setAddvalue] = useState(0);

    const incrementval = () => {
        let val = addvalue + 1;
        setAddvalue(val);
    }

    const decrementval = () => {
        let val = addvalue - 1;
        setAddvalue(val);
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/addproduct/ShowOneProduct/${params.id}`)

            .then(function (response) {
                console.log(response.data);
                setView(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const deletehendle = (id) => {
        axios.delete(`http://localhost:5000/addproduct/DeleteProduct/${id}`)

            .then(function (response) {
                // console.log(response.data);
            })

            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <Header />


            <div className="container">
                <div className="row my-5 py-5 px-5" style={{ background: 'linear-gradient(90deg,#F5F7FA,#D3D3D3)', borderRadius: '20px' }}>
                    <div className="col-4">
                        <img src={view.image} width={250} style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="col-4 cart_product_name">
                        <h5>{view.name}</h5>
                        <h6>₹{view.price}</h6>
                    </div>
                    <div className='col cart_product_name'>
                        <div className='d-flex align-items-center'>
                            <button style={{ background: "#000", color: '#fff', padding: "2px 10px" }} onClick={incrementval}>+</button>
                            <span className='mx-2'><b>{addvalue}</b></span>
                            <button style={{ background: "#000", color: '#fff', padding: "2px 10px" }} onClick={decrementval}>-</button>
                        </div>
                        <div className="mt-1">
                            <button className="cart_button" onClick={deletehendle}>remove</button>
                        </div>
                    </div>
                    <div className="col-2 cart_product_name" >
                        <button style={{ background: 'black', color: 'white', padding: '8px 15px' }}>BUY IT NOW</button>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Addtocart