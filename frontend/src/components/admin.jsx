import React, { Component } from 'react';
import Product from './product';
import { Link } from 'react-router-dom';
import productService from '../services/productService';
class Admin extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const { data } = await productService.getAllProducts();
        if (data.length > 0) this.setState({ products: data });
    }

    render() {
        const { products } = this.state;

        return (
            <React.Fragment>
                <div className="container shadow bg-white rounded">
                    <Link to="/add-product"><button className="btn btn-primary" >Add product</button></Link>

                    <table className="table table-striped mt-5 wh-100">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Descriptions</th>
                                <th scope="col">Image</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        {products.map(product => <Product product={product} key={product._id} />)}

                    </table>
                </div>
            </React.Fragment >
        );
    }
}

export default Admin;