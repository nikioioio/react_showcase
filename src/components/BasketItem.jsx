

export const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasketAllProduct,
        removeFromBasket,
        addToBasket

    } = props;


    return (
        <li className="collection-item">
            {name} x
            <span>  <i onClick={() => removeFromBasket(id)} className="material-icons basket-add-remove">remove</i>    </span>
            {quantity}
            <span>  <i onClick={() => addToBasket(id)}  className="material-icons basket-add-remove">add</i>   </span>
            = {quantity * price}
            <a className="secondary-content"><i onClick={() => removeFromBasketAllProduct(id)} className="material-icons basket-item-close">clear</i></a>
        </li>
    )
}