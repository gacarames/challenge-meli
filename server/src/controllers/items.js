const { singleDto } = require("../dto/items.dto");
const itemsModel = require("../models/items.model");

const getItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await itemsModel.getItem(id);
    res.status(200).json(singleDto(item)).end();
  } catch (error) {
    next(error);
  }
};

module.exports = getItem;
