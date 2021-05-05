import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

export default {
    title: 'ui/Breadcrumb',
    component: Breadcrumb,
};

const Template = (args) => (
    <Router>
        <Breadcrumb {...args} />
    </Router>
);

export const ProductBreadcrumb = Template.bind({});
ProductBreadcrumb.args = {
    category: 'MLA47769',
};
