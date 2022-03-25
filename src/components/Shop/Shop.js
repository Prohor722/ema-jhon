import React, { useEffect, useState } from 'react';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import Products from './Products/Products'
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(
        ()=>{
            fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
        },[])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for( const id in storedCart){
            const addedProduct = products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const addToCart = (selectedProduct) =>{
        let newCart = [];
        const exits = cart.find(product=>product.quantity===selectedProduct.id);
        if(!exits){
            selectedProduct.quantity=1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product=>product.id!==exits.id);
            exits.quantity+=1;
            newCart=[...rest, exits]
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <Products products={products} addToCart={addToCart}></Products>
            </div>
            <div className="cart-container">
                <Cart cartProducts={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;