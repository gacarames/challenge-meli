import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.scss';
import PropTypes from 'prop-types';
import { loadCategory } from '../../api';
import ToBack from '../ToBack';

const Breadcrumb = (props) => {
    const { category } = props;

    const [categoryData, setSategoryData] = useState('');

    useEffect(() => {
        loadCategory(category).then((value) => {
            setSategoryData(value);
        });
    }, [category]);

    return (
        <div className='breadcrumb'>
            <ToBack>Volver al listado</ToBack>
            <Link to='' className='breadcrumb__link'>
                {categoryData.name}
            </Link>
        </div>
    );
};

Breadcrumb.propTypes = {
    category: PropTypes.string.isRequired,
};

export default Breadcrumb;
