import { BasketItem } from './BasketItem';

export const BasketList = (props) => {
    const {order,handleBasketShow}  = props;

    const getSum = () => {
        let sumEl = 0;
        order.forEach(item => {
            sumEl = sumEl + (item.quantity * item.price);
        })
        return sumEl;
    }

    return(
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина<button onClick={()=>handleBasketShow()} className="material-icons right">clear</button></li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item} />
                )):<li className="collection-item">Корзина пуста</li>
            }

            <li className="collection-item active">Общая стоимость {getSum()} руб.</li>
        </ul>
    )
}