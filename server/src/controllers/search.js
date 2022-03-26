const { multipleDto } = require("../dto/search.dto");
const searchModel = require("../models/search.model");

const search = async (req, res, next) => {
  try {
    const query = req.query.q;
    const results = await searchModel.searchQuery(query, next);
    res.status(200).json(multipleDto(results)).end();
  } catch (error) {
      next(error)
  }
};

module.exports = search;
