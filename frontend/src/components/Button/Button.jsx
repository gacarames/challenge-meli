import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Button.scss';

const Button = (props) => {
    const { children, type, onClick, fullWidth, outline } = props;

    const classBlock = clsx([
        'button',
        { 'button--full-width': fullWidth },
        outline ? 'button--outline' : 'button--filled',
    ]);

    return (
        <button type={type} className={classBlock} onClick={onClick}>
            <div className='button__label'>{children}</div>
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button']),
    onClick: PropTypes.func,
    fullWidth: PropTypes.bool,
    outline: PropTypes.bool,
    children: PropTypes.any,
};

Button.defaultProps = {
    type: 'button',
    onClick: null,
    fullWidth: false,
    outline: false,
};

export default Button;
