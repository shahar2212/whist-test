import React from 'react';
import { useCart } from "react-use-cart"
import statsService from '../services/statsService';


const Cart = () => {
    const { items, isEmpty, totalItems, /*totalUniqueItems,*/ cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
    if (isEmpty) return <div className="dropdown mb-5"> <button className="btn btn-primary"> Your cart is empty -_- </button></div>

    return (
        <React.Fragment>
            <div className="dropdown mb-5">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    cart ({totalItems})
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {items.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="mb-5">
                                    <p className="dropdown-item">
                                        <span className="float-left m-1">
                                            {item.title}
                                            <span className="m-2">
                                                <span className="text-success">$</span>{item.price}
                                            </span>
                                        </span>

                                        <span className="float-right">
                                            <span className="m-2">
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-info ms-2">-</button>
                                            </span>
                                            <span className="m-2">
                                                {item.quantity}
                                            </span>
                                            <span className="m-2">
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-info ms-2">+</button>
                                            </span>
                                            <button onClick={() => (removeItem(item.id))} className="btn btn-danger ms-2">Remove Item</button>
                                        </span>
                                    </p>
                                </div>
                            </React.Fragment>
                        )
                    })
                    }
                    <hr className="mt-3" />

                    <span className="dropdown-item float-left m-1"><b> total: </b> {cartTotal}$ <button onClick={() => {

                        //sends to mongo an array with item id that been sold.
                        let itemsID = items.map(item => item.id)
                        for (let x = 0; x < itemsID.length; x++) {
                            statsService.uniqueCounter(itemsID[x])
                        }

                        //gets items sold 
                        let itemsQuantity = items.map(item => item.quantity)
                        for (let x = 0; x < itemsQuantity.length; x++) {
                            statsService.regularCounter(itemsID[x], itemsQuantity[x]);
                        }
                        statsService.sells(cartTotal)
                        emptyCart()

                    }} className="btn btn-success float-right">Pay Now</button></span>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Cart;