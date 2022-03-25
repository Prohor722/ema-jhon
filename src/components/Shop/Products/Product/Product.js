import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({product, addToCart}) => {
    const {img, name, price, seller, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='name'>{name}</p>
                <p className='price'>Price : ${price}</p>
                <p className='other-info'>Manufacturer : {seller}</p>
                <p className='other-info'>Rating : {ratings}</p>
            </div>
            <button onClick={()=>addToCart(product)} className='btn-cart'>
                <p>Add to Cart</p><FontAwesomeIcon className='btn-icon' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;