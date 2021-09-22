import React, { Component } from 'react';
import homeService from '../services/homeService';
import HomeProduct from './home-product';
import Cart from './cart';

class Home extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const { data } = await homeService.getAllProducts();
        if (data.length > 0) this.setState({ products: data });
    }

    render() {
        const { products } = this.state;

        return (

            <div className="container shadow p-3 mb-5 bg-white rounded">
                <div className="row p-5 ">
                    <Cart />

                    {products.map((item, index) => {
                        return (
                            <HomeProduct
                                id={item.id}
                                img={item.imageUrl}
                                title={item.title}
                                desc={item.description}
                                price={item.price}
                                item={item}
                                key={index}

                            />)
                    })}
                </div>
            </div>

        );
    }
}

export default Home;