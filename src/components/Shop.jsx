import {useState, useEffect} from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoogsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';


export const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [nameToast, setNameToast] = useState('');



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

    const addToBasket = (id) => {
        const itemIndex = order.findIndex(product => product.id === id);
        const addOrder = goods.filter(product => product.id === id);

        if (itemIndex < 0) {
            const addProduct = {
                ...addOrder[0],
                quantity: 1
            }
            setOrder([...order, addProduct])
        } else {
            const replaceOrder = {
                ...order[itemIndex],
                quantity: order[itemIndex].quantity + 1,
            }
            order[itemIndex] = replaceOrder;
            setOrder(order)
        }

        setQuantity( order.reduce((sum, item) => (sum+  item.quantity),0) );
        setNameToast(addOrder[0].name)
    }


    const removeFromBasket = (id) => {
        const itemIndex = order.findIndex(product => product.id === id);
        if (order[itemIndex].quantity === 1) {

            if (!order.length) {
                setOrder([]);
                return;
            }

            setOrder(order.filter(el => el.id !== id));

        }else {

            const replaceOrder = {
                ...order[itemIndex],
                quantity: order[itemIndex].quantity -1,
            }
            order[itemIndex] = replaceOrder;
            setOrder(order)
        }

        setQuantity( order.reduce((sum, item) => (sum+  item.quantity),0) );

    }

    const clearToast = () => {
        setNameToast('');
    }

    const removeFromBasketAllProduct  = (id) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }



    return (
        <main className="container content">
            <Cart handleBasketShow={handleBasketShow} quantity={order.length}/>
            {
               nameToast && <Alert nameToast={nameToast} clearToast={clearToast}/>
            }

            {
               loading ? <Preloader/>: <GoogsList goods={goods} addToBasket={addToBasket}/>
            }
            {
                isBasketShow && <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasketAllProduct={removeFromBasketAllProduct}
                    removeFromBasket={removeFromBasket}
                    addToBasket={addToBasket}
                />
            }


        </main>
    )
}