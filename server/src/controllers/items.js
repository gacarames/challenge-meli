const { singleDto } = require('../dto/items.dto');
const itemsModel = require('../models/items.model');

const getItem = async (req, res) => {
    const { id } = req.params;
    const item = await itemsModel.getItem(id);
    res.status(200).json(singleDto(item));
};

module.exports = getItem;
