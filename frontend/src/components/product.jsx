import React from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/productService';

const Product = ({ product }) => {
    return (
        <tbody>
            <tr>
                <th scope="row">{product.title}</th>
                <td>{product.price}$</td>
                <td>
                    <p>{product.description}</p>
                </td>
                <td>
                    <img src={product.imageUrl} width="50px" height="50px" alt="" />
                </td>
                <td>
                    <Link to={`/edit-product/${product._id}`}> <button onClick={() => { ProductService.getProduct(product._id) }} className="btn btn-primary">Edit</button></Link>
                    <Link to={`/admin`}><button onClick={() => { ProductService.deleteProduct(product._id) }} className="btn btn-danger float-right">Delete</button></Link>
                </td>
            </tr>
        </tbody >
    );
}

export default Product;