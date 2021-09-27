import { ShopContext } from './context';
import { useContext } from 'react';

export const Cart = () => {
    const {order,handleBasketShow} = useContext(ShopContext);
    const quantity = order.length;

    return (
        <div onClick={handleBasketShow} className="cart blue darken-4 white-text">
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    )
}