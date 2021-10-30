import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Cart from './shared/Cart';

//context
import { CartContext } from '../context/CartContextProvider';

//Style
import Style from './ShopCart.module.css';

const ShopCart = () => {
    const {state , dispatch} = useContext(CartContext);

    return (
        <div className={Style.container}>
            <div>
                {
                    state.selectedItem.map(item => <Cart key={item.id} data={item} />)
                }
            </div>
            <div className={Style.detail}>
                
                {
                    state.itemCounter > 0 && 
                    <div className={Style.sidebar}>
                        <p>total item : {state.itemCounter}</p>
                        <p>total price : {state.total} </p>    
                        <div className={Style.btn_container}>
                            <button className={Style.btn_Checkout} type="button" onClick={() => dispatch({type:"CHECKOUT"})}>Check Out</button>
                            <button className={Style.btn_Reset} type="button" onClick={() => dispatch({type:"RESET"})}>Reset</button>
                        </div>
                    
                    </div>
                }
                
                {
                    state.checkout && 
                    <div className={Style.centerDiv}>
                        <p>You Check out !!!!</p>
                        <Link className={Style.Link} to={'/products'}>Buy more ?</Link>
                    </div>
                }
                {
                    !state.checkout && state.itemCounter === 0 && 
                    <div className={Style.centerDiv}>
                        <p>This is Clear !!!!</p>
                        <Link className={Style.Link} to={'/products'}>Buy more ?</Link>
                    </div>
                }
            </div>
            
        </div>
    );
};

export default ShopCart;