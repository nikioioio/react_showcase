

export const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
    } = props;


    return (
        <li className="collection-item">
            {name} x {quantity} = {price}
            <button className="secondary-content"><i className="material-icons">clear</i></button>
        </li>
    )
}