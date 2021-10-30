import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//Context
import { ProductsContext } from '../context/ProductContextProvider';

//Style
import Style from './ProductDetail.module.css';

const ProductDetail = (props) => {
    const id = props.match.params.id;
    const Data = useContext(ProductsContext);

    const product = Data[id-1];

    const {image , title , description , price , category} = product;

    return (
        <div className={Style.container} >
            <img src={image} alt={title} />
            <div className={Style.detailcontainer}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{category}</p>
                <div className={Style.footer}>
                    <Link className={Style.btn} to={"/products"}>Back to Shop</Link>                
                    <p className={Style.price}>{price}$</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;