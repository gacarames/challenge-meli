import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Results from './Results.jsx';
import fetchSearch, { resetSearch } from '../../redux/actions/searchActions';

const ResultsContainer = (props) => <Results {...props} />;

const mapStateToProps = (state) => {
    return {
        items: state.search.results.items,
        categories: state.search.results.categories,
        isLoading: state.search.loading,
        error: state.search.error,
    };
};

const mapDispatchToProps = {
    fetchSearch,
    resetSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResultsContainer));
