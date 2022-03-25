import React from 'react';
import './Products.css'
import Product from './Product/Product';

const Products = ({products,addToCart}) => {
    const shoes = products.filter(product=> product.name.includes('SHOES'));

    return (
        <div className='products-container'>
            { shoes.map(shoe=>{
                return <Product key={shoe.id} product={shoe} addToCart={addToCart}></Product>
            })}

        </div>
    );
};

export default Products;