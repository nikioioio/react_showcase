import {useState, useEffect} from 'react';
import { API_URL, API_KEY } from '../config';
import {Preloader} from './Preloader';
import {GoogsList} from './GoodsList';
import {Cart} from './Cart'


export const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [uniqOrder, setUniqOrder] = useState(0)



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
        const addOrder = goods.filter(product => product.id === id );
        setOrder([...order, addOrder[0]])
    }

    useEffect(() => {
        setUniqOrder([...new Set(order.map(product => product.id))].length)
    },[order])



    return (
        <main className="container content">
            <Cart quantity={uniqOrder}/>
            {
               loading ? <Preloader/>: <GoogsList goods={goods} insertOrder={insertOrder}/>
            }
        </main>
    )
}