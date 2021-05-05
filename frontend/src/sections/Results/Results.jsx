import React, { useEffect } from 'react';
import { Section } from '../../layout';
import BreadcrumbList from '../../components/BreadcrumbList';
import Loading from '../../components/Loading';
import ResultItem from '../../components/ResultItem';
import './Results.scss';

const SearchResults = (props) => {
    const { items, categories, isLoading, error, fetchSearch } = props;

    const queryString = new URLSearchParams(window.location.search);

    const search = queryString.get('search');

    useEffect(() => {
        fetchSearch(search);
    }, [search]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        console.log(error);
    }

    return (
        <>
            <Section>
                <BreadcrumbList categories={categories} />
            </Section>
            <Section section='results'>
                <div className='results-list card'>
                    {items &&
                        items.map((item) => {
                            return <ResultItem itemData={item} key={item.id} />;
                        })}
                </div>
            </Section>
        </>
    );
};

export default SearchResults;
