const itemsDao = require('../dao/items.dao');

module.exports = {
    async getItem(id) {
        return itemsDao.getItem(id);
    },
};
