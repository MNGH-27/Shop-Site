import React ,{ useContext } from 'react';
import {Link} from 'react-router-dom';

// Functions
import { shorten , isInCart , Getnumberofitem } from '../../helper/functions';

//Context
import { CartContext } from '../../context/CartContextProvider';

import Styles from './Product.module.css';

const Product = ({productData}) => {
    const {state , dispatch} = useContext(CartContext)
    const selectedItem = state.selectedItem.find(item => item.id === productData.id);
    return (
        <div className={Styles.productContainer}>
            <img src={productData.image} alt="product" style={{width: "200px"}} />
            <div className={Styles.p_detail}>   
                <h3 className={Styles.p_title} >{shorten(productData.title)}</h3>
                <p className={Styles.p_price} >{productData.price}${ selectedItem ?  ' - ' + selectedItem.quantity : '' }</p>
            </div>
            <div className={Styles.p_more}>
                <Link className={Styles.p_link} to={`/products/${productData.id}`}>Details</Link>
                <div className={Styles.btn_container}>
                    {
                        Getnumberofitem(state , productData.id) === 1 ? <button className={`${Styles.btn_remove} ${Styles.btn}`} onClick={() => dispatch({type:"DELETE_ITEM" , payload:productData})}type="button">Remove</button> : ''
                    }
                    {
                        Getnumberofitem(state , productData.id) > 1 ? <button className={`${Styles.btn_decrease} ${Styles.btn}`} onClick={() => dispatch({type:"DECREASE_ITEM" , payload:productData})}type="button">-</button> : ''
                    }
                    {
                        isInCart(state , productData.id) ? 
                        <button className={`${Styles.btn_increase} ${Styles.btn}`} onClick={() => dispatch({type:"INCREASE_ITEM" , payload:productData})} type="button">+</button>:
                        <button className={`${Styles.btn_add} ${Styles.btn}`} onClick={() => dispatch({type:"NEW_ITEM" , payload:productData})} type="button">Add New Item</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;