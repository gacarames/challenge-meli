const Router = require('express');
const router = Router();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const fetch = require('node-fetch');

var schema = buildSchema(`
  type Product {
    id: String,
    title: String
    category: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Int,
    price: Price,
    picture: Picture,
    description: String,
  },

  type Price {
    currency: String,
    amount: Int,
    decimals: Float
  },

  type Picture {
    id: String,
    url: String,
    secure_url: String,
    size: String,
    max_size: String,
    quality: String
  },

  type Query {
    root: String,
    product(id: String): Product,
    search(query: String): [Product]
  }  
`);

var root = {

  root: () => 'GraphQL Server',

  product: (args) => {
    const { id } = args
    return fetch(`${process.env.ENDPOINT_APP}/items/${id}`)
      .then(res => res.json())
      .then(data => data.item)
      .catch(err => {
        console.log(err);
      });
  },

  search: (args) => {
    const { query } = args
    return fetch(`${process.env.ENDPOINT_APP}/items?q=${query}`)
      .then(res => res.json())
      .then(data => data.items)
      .catch(err => {
        console.log(err);
      });
  }
};

router.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = router;
