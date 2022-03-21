import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from './Products/Products'

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(
        ()=>{
            fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
        },[])

        // console.log(products)
    return (
        <div className='shop-container'>
            <div className="product-container">
                <Products products={products}></Products>
            </div>
            <div className="cart-container">
                <h4>This is for cart</h4> 
            </div>
        </div>
    );
};

export default Shop;