import {GoodsItem} from './GoodsItem'

export const GoogsList = (props) => {
    const {goods = [],insertOrder} = props;


    if (!goods.length) {
        return (
            <h3>Nothing</h3>
        )
    }



    return (
        <>
        <div className="wrapper">
            {
                goods.map(good=> <GoodsItem key={good.id} insertOrder={insertOrder} {...good}/>)
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