import React, { useState } from 'react';
import './Search.scss';
import { useHistory } from 'react-router-dom';
import searchImg from '../../assets/images/ic_Search.png';

function Search() {
    const [submitSearch, setSubmitSearch] = useState('');

    let history = useHistory();

    function handleChange(event) {
        let { value } = event.target;
        setSubmitSearch(value);
    }

    function handleSubmit(event) {
        let idRegex = /([A-Z]{3})+(\d+$)/g;
        if (submitSearch.match(idRegex)) {
            history.push(`/items/${submitSearch}`);
        } else {
            history.push(`/items?search=${submitSearch}`);
        }
        event.preventDefault();
    }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit} className='search__form'>
                <input
                    type='text'
                    value={submitSearch}
                    onChange={handleChange}
                    placeholder='Nunca dejes de buscar...'
                    className='search__input'
                />
                <button type='submit' className='search__submit'>
                    <img src={searchImg} className='search__icon' alt='Busqueda' />
                </button>
            </form>
        </div>
    );
}

export default Search;
