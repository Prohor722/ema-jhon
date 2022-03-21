import React from 'react';
import './Products.css'
import Product from './Product/Product';

const Products = ({products}) => {
    const shoes = products.filter(product=> product.name.includes('SHOES'));
    console.log("Products:",shoes);
    return (
        <div className='products-container'>
            { shoes.map(shoe=>{
                return <Product key={shoe.id} product={shoe}></Product>
            })}

        </div>
    );
};

export default Products;