const { multipleDto } = require('../dto/search.dto');
const searchModel = require('../models/search.model');

const search = async (req, res) => {
    const query = req.query.q;
    const results = await searchModel.searchQuery(query);
    res.status(200).json(multipleDto(results));
};

module.exports = search;
