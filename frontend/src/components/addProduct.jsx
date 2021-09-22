import React from 'react';
import productService from '../services/productService';
import Joi from "joi-browser";
import Form from '../common/form';


class AddProducts extends Form {
    state = {
        data: {
            title: "", price: "", description: "", imageUrl: "",
        },
        errors: {}
    }

    schema = {
        title: Joi.string().min(2).max(255).required(),
        price: Joi.string().min(1).max(10).required(),
        description: Joi.string().min(2).max(1024).required(),
        imageUrl: Joi.string().min(2).max(2024).required(),
    };

    doSubmit = async () => {
        const data = { ...this.state.data };
        await productService.addProducts(data);
        this.props.history.replace("/admin");
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit} method="POST">
                        {this.renderInput('title', 'title', 'Title')}
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

export default AddProducts;