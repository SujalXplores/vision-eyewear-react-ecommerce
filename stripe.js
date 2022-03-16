const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createProduct(data) {
  const { name, imageUrl } = data;

  const product = await stripe.products.create({
    name,
    images: [imageUrl],
  });
  console.log('product', product);
  return product;
}

module.exports = {
  createProduct,
};
