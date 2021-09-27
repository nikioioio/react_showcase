import {useState, useEffect, useContext} from 'react';
import { API_URL, API_KEY } from '../config';
import { Preloader } from './Preloader';
import { GoogsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

import { ShopContext } from './context';


export const Shop = () => {

    const {isBasketShow, nameToast, setGoods, setLoading, loading} = useContext(ShopContext);


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



    return (
        <main className="container content">
            <Cart/>
            {
               nameToast && <Alert nameToast={nameToast} />
            }

            {
               loading ? <Preloader/>: <GoogsList/>
            }
            {
                isBasketShow && <BasketList/>
            }


        </main>
    )
}