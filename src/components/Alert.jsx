import {useEffect} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

export const Alert = (props) => {
    const {nameToast, clearToast} = props;

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