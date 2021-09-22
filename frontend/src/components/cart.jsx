import React from 'react';
import { useCart } from "react-use-cart"
import statsService from '../services/statsService';


const Cart = () => {
    const { items, isEmpty, totalItems, /*totalUniqueItems,*/ cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
    if (isEmpty) return <btn to="/add-product"><button className="btn btn-primary mb-5" >Your cart is empty</button></btn>



    return (

        <React.Fragment>

            <div class="dropdown mb-5">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    cart ({totalItems})
                </button>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {items.map((item, index) => {
                        return (
                            <React.Fragment>
                                <div className="mb-5" key={item.id}>
                                    <p key={item.id} class="dropdown-item">
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

                    <a class="dropdown-item float-left m-1"><b> total: </b> {cartTotal}$ <button onClick={() => {
                        let itemsID = items.map(item => item.id)
                        for (let x = 0; x < itemsID.length; x++) {
                            statsService.uniqueCounter(itemsID[x])
                        }

                        let itemsQuantity = items.map(item => item.quantity)
                        for (let x = 0; x < itemsQuantity.length; x++) {
                            statsService.regularCounter(itemsID[x], itemsQuantity[x]);
                        }

                        statsService.sells(cartTotal)


                        emptyCart()
                    }} className="btn btn-success float-right">Pay Now</button></a>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Cart;