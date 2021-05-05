import React from 'react';
import shippingIcon from '../../assets/images/ic_shipping.png';
import './Shipping.scss';

function Shipping() {
    return (
        <span className='shipping'>
            <img src={shippingIcon} className='shipping__icon' alt='Envío gratis' />
        </span>
    );
}

export default Shipping;
