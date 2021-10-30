import React, { useContext } from 'react';
//Context
import { CartContext } from '../../context/CartContextProvider';

//function
import { shorten } from '../../helper/functions';

//Style
import Styles from './Cart.module.css';

const Cart = (props) => {
    const {dispatch} = useContext(CartContext);

    const {image , title , price , quantity} = props.data;

    return (
        <div className={Styles.container}>
            <img src={image} alt="image" />
            <div className={Styles.detail}>
                <span>{shorten(title)}</span>
                <span className={Styles.price}>{price}$</span>
            </div>
            <div className={Styles.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={Styles.btnContainer}>
                {
                  quantity > 1 ?
                  <button  type="button" className={`${Styles.btn_decrease} ${Styles.btn}`} onClick={()=> dispatch({type:"DECREASE_ITEM" , payload:props.data}) }> - </button>
                  :
                  <button className={`${Styles.btn_remove} ${Styles.btn}`} type="button" onClick={()=> dispatch({type:"DELETE_ITEM" , payload:props.data})}> Delete </button>  
                }
                <button className={`${Styles.btn_increase} ${Styles.btn}`} type="button" onClick={()=>dispatch({type:"INCREASE_ITEM" ,payload:props.data})}> + </button>
            </div>
        </div>
    );
};

export default Cart;    