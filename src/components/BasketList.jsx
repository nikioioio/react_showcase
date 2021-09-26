import { BasketItem } from './BasketItem';

export const BasketList = (props) => {
    const {order = [],
        handleBasketShow = Function.prototype,
        removeFromBasketAllProduct = Function.prototype,
        removeFromBasket = Function.prototype,
        addToBasket = Function.prototype,
    }  = props;

    const getSum = () => {
        return order.reduce((sum, item) => (sum + (item.quantity * item.price)),0)
    }

    return(
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина<a onClick={()=>handleBasketShow()} className="material-icons right basket-close">close</a></li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id}
                                removeFromBasketAllProduct={removeFromBasketAllProduct}
                                removeFromBasket={removeFromBasket}
                                addToBasket={addToBasket}
                                {...item}
                    />
                )):<li className="collection-item">Корзина пуста</li>
            }

            <li className="collection-item active">Общая стоимость {getSum()} руб.
            <button className='secondary-content btn-small'>Заказ</button> </li>

        </ul>
    )
}