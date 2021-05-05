import React from 'react';
import Image from './Image';

export default {
    title: 'ui/Image',
    component: Image,
};

const Template = (args) => <Image {...args} />;

export const ProductImage = Template.bind({});
ProductImage.args = {
    picture: {
        id: '865452-MLA32227066157_092019',
        url: 'http://http2.mlstatic.com/D_865452-MLA32227066157_092019-O.jpg',
        secure_url: 'https://http2.mlstatic.com/D_865452-MLA32227066157_092019-O.jpg',
        size: '500x351',
        max_size: '1200x844',
        quality: '',
    },
};
