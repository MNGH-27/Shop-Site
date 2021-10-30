import React , { useContext } from 'react';
import {Link} from 'react-router-dom';
//Context
import { CartContext } from '../../context/CartContextProvider';

//Style
import Style from './Navbar.module.css';


const Navbar = () => {

    const {state} = useContext(CartContext);


    return (
        <div>
            <div className={Style.container}>
                <Link className={Style.Link} to="/products"><h1>Navbar</h1></Link>
                <div className={Style.shopCart}>
                    <i className="fas fa-shopping-cart"></i>
                    {
                        state.itemCounter > 0 ? <Link className={Style.itemCounter} to={'/cart'}><span>{state.itemCounter}</span></Link> : ''
                    }  
                </div>
            </div>        
        </div>
    );
};

export default Navbar;