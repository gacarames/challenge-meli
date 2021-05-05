const searchDao = require('../dao/search.dao');

module.exports = {
    async searchQuery(query) {
        return searchDao.searchQuery(query);
    },
};
