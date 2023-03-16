import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import './Main.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './Admin/AdminLogin';
import AdminRegister from './Admin/AdminRegister';
import AddProduct from './Admin/AddProduct';
import ShowProduct from './Admin/ShowProduct';
import EditProduct from './Admin/EditProduct';
import AdminHome from './Admin/AdminHome';
import AddCategory from './Admin/AddCategory';
import ShowCategory from './Admin/ShowCategory';
import EditCategory from './Admin/EditCategory';
import AddSubCategory from './Admin/AddSubCategory';
import ShowSubCategory from './Admin/ShowSubCategory';
import EditSubCategory from './Admin/EditSubCategory';
import AddBrand from './Admin/AddBrand';
import ShowBrand from './Admin/ShowBrand';
import EditBrand from './Admin/EditBrand';
import Buynow from './Buynow';
import Addtocart from './Addtocart';
import Payment from './Payment';

function App() {
    return (
        <>

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin/adminlogin" element={<AdminLogin />} />
                    <Route path="/admin/adminregister" element={<AdminRegister />} />
                    <Route path="/adminaddproduct" element={<AddProduct />} />
                    <Route path="/adminshowproduct" element={<ShowProduct />} />
                    <Route path="/editproduct/:id" element={<EditProduct />} />
                    <Route path="/adminhome" element={<AdminHome />} />
                    <Route path="/adminaddcategory" element={<AddCategory />} />
                    <Route path="/adminshowcategory" element={<ShowCategory />} />
                    <Route path="/editcategory/:id" element={<EditCategory />} />
                    <Route path="/adminaddsubcategory" element={<AddSubCategory />} />
                    <Route path="/adminshowsubcategory" element={<ShowSubCategory />} />
                    <Route path="/editsubcategory/:id" element={<EditSubCategory />} />
                    <Route path="/adminaddbrand" element={<AddBrand />} />
                    <Route path="/adminshowbrand" element={<ShowBrand />} />
                    <Route path="/editbrand/:id" element={<EditBrand />} />
                    <Route path="/buynow/:id" element={<Buynow />} />
                    <Route path="/addtocart/:id" element={<Addtocart />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>

            </div>

        </>
    );
}

export default App;
