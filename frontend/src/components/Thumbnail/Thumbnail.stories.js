import React from 'react';
import Thumbnail from './Thumbnail';

export default {
    title: 'ui/Thumbnail',
    component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const ProductThumbnail = Template.bind({});
ProductThumbnail.args = {
    src: 'http://http2.mlstatic.com/D_865452-MLA32227066157_092019-I.jpg',
};
