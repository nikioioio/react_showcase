import { createContext, useReducer } from 'react';
import { reduser } from './reducer'


export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    quantity: 1,
    nameToast: '',
}


export const ContextProvider = ({children}) => {

    const [ value, dispatch ]  = useReducer(reduser, initialState);

    value.setGoods = (goods) => {
        dispatch({type: 'SET_GOODS', payload: {goods: goods}})
    }

    value.removeFromBasketAllProduct = (id) => {
        dispatch({type: 'REMOVE_FROM_BASKET_ALL_PRODUCT', payload: {id: id}})
    }

    value.setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }

    value.addToBasket = (id) => {
        dispatch({type: 'ADD_TO_BASKET', payload: {id: id}})
    }

    value.removeFromBasket = (id) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: id}})
    }

    value.clearToast = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }

    value.removeFromBasketAllProduct = (id) => {
        dispatch({type: 'REMOVE_FROM_BASKETP_ALL_PRODUCT', payload: {id: id}})
    }


    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )

}