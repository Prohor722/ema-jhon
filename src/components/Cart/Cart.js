import React from 'react';
import './Cart.css'

const Cart = ({cartProducts}) => {

        console.log(cartProducts);
        let total = 0;
        let shipping = 0;
        let quantity = 0;
        for(const product of cartProducts){
            quantity += product.quantity
            total += product.price*product.quantity;
            shipping += product.shipping;
        }
        const tax = parseFloat(total*0.1);
        const grandTotal = total+shipping+tax;

    return (
        <div className='cart'>
            <p className='order-summary'>Order Summary</p>
            <p className='order-info'>Selected Items: {quantity}</p>
            <p className='order-info'>Total Price: ${total}</p>
            <p className='order-info'>Total Shipping Charge: ${shipping}</p>
            <p className='order-info'>Tax: ${tax.toFixed(2)}</p>
            <p className='grand-total'>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;