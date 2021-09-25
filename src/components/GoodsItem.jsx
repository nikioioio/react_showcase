export const GoodsItem = (props) => {
    const {image, name, full_background, id, description, price,insertOrder} = props;


    return(
        <div className="col s12 m6">
            <div className="card" id={id}>
                <div className="card-image">

                    {
                        image === 'N/A' ? <img src={`https://via.placeholder.com/300x400?text=${name}`}/>
                        :
                            <img src={full_background} alt={name}/>
                    }



                </div>
                <div className="card-content">
                    <p>{description}</p>

                </div>
                <div className="card-action">
                    <span className="right" style={{fontSize: '1.8rem'}}>{price} </span>
                    <button onClick={() => {
                        insertOrder(id)
                    }} className="btn">Купить</button>
                </div>
            </div>
        </div>
    )
}