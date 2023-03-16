import { Row, Col, Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { FcCheckmark } from 'react-icons/fc'
import './css/Buynow.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Buynow() {

    const navigate = useNavigate();

    const params = useParams();
    const [view, setView] = useState([]);

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


    return (
        <>
            <Header />

            <Container>
                <Row>
                    <Col className="product_view view" lg={7} md={6}>
                        <img src={view.image} />
                    </Col>
                    <Col className='product_view' lg={5} md={6}>
                        <h5>{view.name}</h5>
                        <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><br></br>
                        <p>Rs. {view.price}</p>
                        <Link to={`/addtocart/${params.id}`}><button>ADD TO CART</button></Link>
                        <button id="buynow">BUY IT NOW</button>
                        <h6><BsTruck className='me-2' />Spent <b>Rs. 23,214.11</b> more for free shipping</h6>
                        <h6><BiTimeFive className='me-2' />Estimated Delivery between <b>Friday 10 June</b> and <b>Thursday 16 June</b>.</h6>
                        <h6><FcCheckmark className='me-2' />Free Shipping & Return <FcCheckmark className='ms-4 me-2' />  Money back guarantee</h6>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
}
export default Buynow;