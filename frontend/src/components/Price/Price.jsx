import React from 'react';
import clsx from 'clsx';
import './Price.scss';

function Price(props) {
    const { price, resume, result } = props;

    function numberThousands(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
    }

    const blockClass = clsx(['price', { 'price--resume': resume }, { 'price--result': result }]);

    return (
        <span className={blockClass}>
            <span className='price__currency'>{price.currency && price.currency === 'ARS' ? '$' : price.currency}</span>
            <span className='price__value'>
                {numberThousands(price.amount)}
                {price.decimals > 0 && (
                    <sup className='price__decimal'>{(price.decimals.toFixed(2) + '').split('.')[1]}</sup>
                )}
            </span>
        </span>
    );
}

export default Price;
