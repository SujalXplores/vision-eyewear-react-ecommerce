const { db } = require('./firebase.utils');
const dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createProduct(data) {
  console.log('----->', data);
  const {
    name,
    imageUrl,
    price,
    category,
    frame_size,
    frame_shape,
    frame_width,
    frame_dimensions,
  } = data;

  const product = await stripe.products.create({
    name,
    images: [imageUrl],
  });

  const priceResponse = await stripe.prices.create({
    unit_amount: price * 100,
    currency: 'inr',
    product: product.id,
  });

  // update firebase doc items array where doc title is 'Mens'
  const snapshot = await db
    .collection('collections')
    .where('title', '==', category)
    .get();

  snapshot.forEach((doc) => {
    const { items } = doc.data();
    items.push({
      frame_size,
      frame_shape,
      frame_width,
      frame_dimensions,
      id: product.id,
      imageUrl,
      name,
      price,
      price_id: priceResponse.id,
    });
    db.collection('collections').doc(doc.id).update({
      items,
    });
  });

  return { product, priceResponse };
}

const deleteProduct = async (data) => {
  const { id, price_id, category } = data;

  const res1 = await stripe.prices.update(price_id, {
    active: false,
  });

  const res2 = await stripe.products.update(id, {
    active: false,
  });

  const snapshot = await db
    .collection('collections')
    .where('title', '==', category)
    .get();

  snapshot.forEach((doc) => {
    const { items } = doc.data();
    const newItems = items.filter((item) => item.id !== id);
    db.collection('collections').doc(doc.id).update({
      items: newItems,
    });
  });
  return { res1, res2 };
};

module.exports = {
  createProduct,
  deleteProduct,
};
