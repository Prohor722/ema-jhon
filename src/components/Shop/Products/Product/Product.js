import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className="product-info">
                <p className='name'>{name}</p>
                <p className='price'>Price : ${price}</p>
                <p className='other-info'>Manufacturer : {seller}</p>
                <p className='other-info'>Rating : {ratings}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;