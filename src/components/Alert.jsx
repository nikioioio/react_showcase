import {useEffect, useContext} from 'react';
import { ShopContext } from './context';


export const Alert = (props) => {
    const {clearToast} = useContext(ShopContext);
    const {nameToast} = props;

    useEffect(() => {

        const timerId = setTimeout(clearToast, 3000)

        return () => {
            clearTimeout(timerId);
        }

    }, [nameToast])

    return (


        <div className="cart toast alert">
            {nameToast} добавлен в корзину
        </div>
    )

}