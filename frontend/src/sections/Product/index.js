import React from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Product from './Product.jsx';
import fetchProduct, { resetProduct } from '../../redux/actions/productActions';

const ProductContainer = (props) => <Product {...props} />;

const mapStateToProps = (state) => {
    return {
        item: state.product.item,
        isLoading: state.product.loading || isEmpty(state.product.item),
        error: state.product.error,
    };
};

const mapDispatchToProps = {
    fetchProduct,
    resetProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductContainer));
