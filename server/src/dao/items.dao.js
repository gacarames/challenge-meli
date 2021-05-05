const fetch = require('node-fetch');

module.exports = {
    async getItem(id) {
        return await Promise.all([
            fetch(`${process.env.ENDPOINT_PRODUCTS_ML}/${id}`).then((value) => value.json()),
            fetch(`${process.env.ENDPOINT_PRODUCTS_ML}/${id}/description`).then((value) => value.json()),
        ])
            .then((value) => value)
            .catch((err) => {
                console.log(err);
            });
    },
};
