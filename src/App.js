
import Nav from "./Component/Nav";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";
import PrivateComponent from "./Component/PrivateComponent";
import Login from "./Component/Login";
import AddProduct from "./Component/AddProduct";
import ProductList from "./Component/ProductList";
import UpdateProduct from "./Component/UpdateProduct";
import './App.css';
function App(){
  
  return(
    <>
    <BrowserRouter>
    <h1 className="Heading">Ecommerce Dashboard</h1>
    <Nav/>
    <Routes>

    <Route element={<PrivateComponent/>}>

    <Route path="/" element={<ProductList/>}/>
    <Route path="/add" element={<AddProduct/>}/>
    <Route path="/update/:id" element={<UpdateProduct/>}/>
    <Route path="/logout" element={<h1>Logout</h1>}/>
    <Route path="/profile" element={<h1>Profile</h1>}/>
    </Route>

    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>


    </Routes>
    <Footer/>
    
    </BrowserRouter>
    </>
  )
}
export default App;