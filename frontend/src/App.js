import './App.css';
import Navbar from './components/navbar';
import { Route, Switch } from 'react-router';
import React from 'react';
import Admin from './components/admin';
import Home from './components/home';
import Stats from './components/stats'
import AddProducts from './components/addProduct';
import EditProduct from './components/editProduct';
import { CartProvider } from "react-use-cart"


function App() {
    return (
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <Switch>
                <Route path="/add-product" component={AddProducts} />
                <Route path="/edit-product" component={EditProduct} />
                <Route path="/admin" component={Admin} />
                <CartProvider>
                    <Route path="/home" component={Home} />
                    <Route path="/stats" component={Stats} />
                </CartProvider>


            </Switch>
        </React.Fragment>
    );
}

export default App;
