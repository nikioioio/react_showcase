import {GoodsItem} from './GoodsItem'
import { ShopContext } from '../components/context';
import {useContext} from "react";

export const GoogsList = () => {

    const {goods} = useContext(ShopContext);

    if (!goods.length) {
        return (
            <h3>Nothing</h3>
        )
    }

    return (
        <>
        <div className="wrapper">
            {
                goods.map(good=> <GoodsItem key={good.id} {...good}/>)
            }
        </div>
        </>
    )

}

