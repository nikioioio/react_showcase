import {GoodsItem} from './GoodsItem'

export const GoogsList = (props) => {
    const {goods = [],addToBasket} = props;


    if (!goods.length) {
        return (
            <h3>Nothing</h3>
        )
    }



    return (
        <>
        <div className="wrapper">
            {
                goods.map(good=> <GoodsItem key={good.id} addToBasket={addToBasket} {...good}/>)
            }
        </div>
        </>
    )


}


// goods.map(good => {
//
//             <GoodsItem key={good.id} {...good}/>
//
//         })