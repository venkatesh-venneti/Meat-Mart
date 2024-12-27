import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar3 from "./components/NavBar3";
import Register1 from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootCart from "./components/BootCart";

const App = () => { 
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]); // Add item to the cart
    };

    const deleteFromCart = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index)); // Remove item at the specified index
    };

    return (
        <Router>
            <NavBar3 />
            <Routes>
                <Route path="/" element={<Home 
                 imgSrc="https://picsum.photos/300/200"
                 imgAlt="card img"
                 title="Card Title"
                 description="This is the card description"
                 btnText="Add to Cart"
                 link="/"
                 addToCart={addToCart} />}/>
                <Route
                    path="/home" 
                    element={
                        <Home 
                            imgSrc="https://picsum.photos/300/200"
                            imgAlt="card img"
                            title="Card Title"
                            description="This is the card description"
                            btnText="Add to Cart"
                            link="/"
                            addToCart={addToCart} 
                        />
                    } 
                />
                <Route path="/register" element={<Register1 />} />
                <Route path="/login" element={<Login />} />
                <Route 
                    path="/cart" 
                    element={
                        <Cart 
                            cartItems={cartItems} 
                            onDelete={deleteFromCart} // Pass delete function
                        />
                    } 
                />
                <Route path="/about" element={<About />} />
                <Route path="/bootstrpcart" element={<BootCart />} />
            </Routes>
        </Router>
    );
};
export default App;