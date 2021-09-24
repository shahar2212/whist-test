import React from 'react';
import productService from '../services/productService';
import Joi from "joi-browser";
import Form from '../common/form';

class EditProduct extends Form {
    state = {
        data: {
            title: "", price: "", description: "", imageUrl: ""
        },
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().min(2).max(255).required(),
        price: Joi.number().min(1).max(99999).required(),
        description: Joi.string().min(2).max(1024).required(),
        imageUrl: Joi.string().min(2).max(2024).required(),
        cart: Joi.boolean().default(false)

    };

    async componentDidMount() {
        const productID = localStorage.getItem('productID');
        const { data } = await productService.getProduct(productID);
        this.setState({ data: this.mapToViewModel(data) })
    }

    mapToViewModel(product) {
        return {
            title: product.title,
            price: product.price,
            description: product.description,
            imageUrl: product.imageUrl,
            _id: product._id
        }
    }

    doSubmit = async () => {
        const { data } = this.state;
        await productService.editProduct(data);
        this.props.history.replace('/admin');
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit} method="POST">
                        {this.renderInput('title', 'Title', 'Title')}
                        {this.renderInput('price', 'Price', 'price')}
                        {this.renderTextArea('description', 'Description', 'description')}
                        {this.renderInput('imageUrl', 'Image url', 'ImageUrl')}
                        {this.renderButton('Upload product')}
                    </form>
                </div>
            </React.Fragment >
        );
    }
}

export default EditProduct;