import {useState, useEffect} from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoogsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';


export const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [quantity, setQuantity] = useState(1);



    useEffect(function getGoods (){

        fetch(API_URL,{
            headers:{
                Authorization: API_KEY,
            }
        }).then(response => {
            response.json().then(goods => {
                goods.featured && setGoods(goods.featured);
                setLoading(false);
            })
        })

    }, [] )

    const insertOrder = (id) => {
        const itemIndex = order.findIndex(product => product.id === id);
        const addOrder = goods.filter(product => product.id === id );

        if (itemIndex < 0) {
            const addProduct = {
                ...addOrder[0],
                quantity: 1
            }
            setOrder([...order, addProduct])
        }else {
            const replaceOrder = {
                ...order[itemIndex],
                quantity: order[itemIndex].quantity +1,
            }
            order[itemIndex] = replaceOrder;
            setOrder(order)
        }

        let sumEl = 0;
        order.forEach(item => {
            sumEl = sumEl+  item.quantity
        });

        setQuantity(sumEl);

    }



    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }



    return (
        <main className="container content">
            <Cart handleBasketShow={handleBasketShow} quantity={order.length}/>
            {
               loading ? <Preloader/>: <GoogsList goods={goods} insertOrder={insertOrder}/>
            }
            {
                isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow}/>
            }
        </main>
    )
}