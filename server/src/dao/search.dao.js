const fetch = require("node-fetch");

module.exports = {
  async searchQuery(query) {
    try {
      const response = await fetch(
        `${process.env.ENDPOINT_SEARCH_ML}/search?q=${query}`
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  },
};
