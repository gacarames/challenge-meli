import React from 'react';
import logoMeli from '../../assets/images/Logo_ML.png';
import './Logo.scss';

const Logo = () => (
    <div className='logo'>
        <img src={logoMeli} className='logo__icon' alt='Envío gratis' />
    </div>
);

export default Logo;
