const fetch = require('node-fetch');

module.exports = {
    async searchQuery(query) {
        return await Promise.all([
            fetch(`${process.env.ENDPOINT_SEARCH_ML}/search?q=${query}`).then((value) => value.json()),
        ])
            .then((value) => value)
            .catch((err) => {
                console.log(err);
            });
    },
};
