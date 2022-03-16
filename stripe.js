const { db } = require('./firebase.utils');
const dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createProduct(data) {
  console.log('----->', data);
  const { name, image, price } = data;
  // update firebase doc items array where doc title is 'Mens'
  // db.collection('demo')
  //   .where('title', '==', 'Kids')
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       const { items } = doc.data();
  //       items.push({
  //         name,
  //         image,
  //         price,
  //       });
  //       db.collection('demo').doc(doc.id).update({
  //         items,
  //       });
  //     });
  //   })
  //   .catch((err) => {
  //     console.log('Error getting documents', err);
  //   });

  console.log(name, image);

  const product = await stripe.products.create({
    name,
    images: [image],
  });

  const priceResponse = await stripe.prices.create({
    unit_amount: price * 100,
    currency: 'inr',
    product: product.id,
  });

  console.log('product-->', product);
  console.log('price-->', priceResponse);
  return { product, priceResponse };
}

module.exports = {
  createProduct,
};
