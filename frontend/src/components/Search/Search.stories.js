import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from '../Search';

export default {
    title: 'ui/Search',
    component: Search,
};

const Template = (args) => (
    <Router>
        <Search {...args} />
    </Router>
);

export const Default = Template.bind({});

Default.args = {
    category: 'MLA47769',
};
