import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

//Style
import Styles from './Store.module.css';

const Store = () => {

    const products = useContext(ProductsContext)
    return (
        <div className={Styles.container}>
            {
                products.map(item => (
                    <Product 
                        key={item.id}
                        productData={item}
                    />
                ))
            }
        </div>
    );
};

export default Store;