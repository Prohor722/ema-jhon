import React from 'react';
import './CartItems.css'

const CartItems = ({products}) => {
    // console.log(products)
    return (
        <div>
            {products.map(product=>{
                // console.log(product);
                return <div className='item' key={product.id}>
                    <img src={product.img} alt=""/>
                    <p>{product.quantity} X ${product.price}</p>
                </div>
            })}
        </div>
    );
};

export default CartItems;