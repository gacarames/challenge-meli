import React from 'react';
import Resume from './Resume';

export default {
    title: 'ui/Resume',
    component: Resume,
};

const Template = (args) => <Resume {...args} />;

export const ProductResume = Template.bind({});
ProductResume.args = {
    resume: {
        title: 'Bajaj  Ns  160 0km   Financia Sin Interes 12 / 18 Cuotas',
        price: {
            currency: 'ARS',
            amount: 269990,
            decimals: 0,
        },
        free_shipping: false,
    },
};
