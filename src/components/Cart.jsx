export const Cart = (props) => {

    const {quantity = 0} = props;

    return (
        <div className="cart blue darken-4 white-text">
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    )
}