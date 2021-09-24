import React from 'react';
import { useCart } from "react-use-cart"

const HomeProduct = (props) => {

    const { addItem } = useCart();

    return (

        <div className="col-lg-4 mt-3 mb-3" >
            <div className="col-13 ">
                <div className="col-md-11">
                    <div className="card-sl ">
                        <div className="card-image">
                            <img
                                src={props.img}
                                width="100%"
                                height="260"
                                alt={props.title}
                            />
                        </div>
                        <div className="card-heading">
                            {props.title}
                        </div>
                        <div className="card-text">
                            {props.desc}
                        </div>
                        <div className="card-text">
                            <b><span className="text-success">$</span>{props.price} </b>
                        </div>
                        <button onClick={() => { addItem(props.item) }} className="card-button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeProduct;