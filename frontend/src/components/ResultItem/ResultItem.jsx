import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../Thumbnail';
import Price from '../Price';
import Shipping from '../Shipping';
import './ResultItem.scss';

function ResultItem(props) {
    const { id, title, picture, price, free_shipping, location } = props.itemData;
    return (
        <article className='item'>
            <Link
                className='item__link'
                to={{
                    pathname: `items/${id}`,
                    state: { fromDashboard: true },
                }}>
                <div className='item__wrapper'>
                    <div className='item__thumbnail'>
                        <Thumbnail src={picture} />
                    </div>
                    <div className='item__description'>
                        <div className='item__description-left'>
                            <div className='item__price'>
                                <Price price={price} result />
                                {free_shipping && <Shipping />}
                            </div>

                            <h2 className='item__title'>{title}</h2>
                        </div>
                        {location && (
                            <div className='item__description-rigth'>
                                <div className='item__location'>
                                    <span>{location}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default ResultItem;
