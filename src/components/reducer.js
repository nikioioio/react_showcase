export const reduser = (state, {type, payload}) => {

    switch (type) {

        case 'SET_GOODS':
            return {
                ...state,
                goods: payload.goods,
            }
        case 'ADD_TO_BASKET': {

            const itemIndex = state.order.findIndex(product => product.id === payload.id);
            const addOrder = state.goods.filter(product => product.id === payload.id);

            let newOrder = null;

            if (itemIndex < 0) {
                const addProduct = {
                    ...addOrder[0],
                    quantity: 1
                }
                newOrder = [...state.order, addProduct];
            } else {
                newOrder = state.order.map((currEl, index) => {
                    if (index === itemIndex) {
                        return {
                            ...currEl,
                            quantity: currEl.quantity + 1,
                        }
                    }else{
                        return {
                            ...currEl,
                        }
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                quantity: state.order.reduce((sum, item) => (sum + item.quantity), 0),
                nameToast: addOrder[0].name
            }
        }
        case 'REMOVE_FROM_BASKET': {
            const itemIndex = state.order.findIndex(product => product.id === payload.id);

            let replaceOrders = null;

            if (state.order[itemIndex].quantity === 1) {

                if (!state.order.length) {
                    return {
                        ...state,
                        order: [],
                    }
                    return;
                }

                replaceOrders = state.order.filter(el => el.id !== payload.id)

            } else {

                replaceOrders = state.order.map((currEl, index) => {
                    if (index === itemIndex) {
                        return {
                            ...currEl,
                            quantity: currEl.quantity - 1,
                        }
                    }else {
                        return {
                            ...currEl,
                        }
                    }
                });
            }

            return {
                ...state,
                order: replaceOrders,
                quantity: state.order.reduce((sum, item) => (sum + item.quantity), 0)
            }

        }
        case 'REMOVE_FROM_BASKETP_ALL_PRODUCT':
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id),
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: false,
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                nameToast: '',
            };
        case 'REMOVE_FROM_BASKET_ALL_PRODUCT':
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }
        default:
            return state;
    }

}