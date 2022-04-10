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

const editProduct = async (data) => {
  const {
    id,
    price_id,
    name,
    imageUrl,
    price,
    category,
    frame_size,
    frame_shape,
    frame_width,
    frame_dimensions,
    old_category,
  } = data;

  const productResponse = await stripe.products.update(id, {
    name,
    images: [imageUrl],
  });

  await stripe.prices.update(price_id, {
    active: false,
  });

  const createPrice = await stripe.prices.create({
    unit_amount: price * 100,
    currency: 'inr',
    product: productResponse.id,
  });

  // if category is changed then delete product from that category
  const old_snapshot = await db
    .collection('collections')
    .where('title', '==', old_category)
    .get();

  old_snapshot.forEach((doc) => {
    const { items } = doc.data();
    const newItems = items.filter((item) => item.id !== id);
    db.collection('collections').doc(doc.id).update({
      items: newItems,
    });
  });

  // adding product in updated category
  const snapshot = await db
    .collection('collections')
    .where('title', '==', category)
    .get();

  snapshot.forEach((doc) => {
    const { items } = doc.data();
    const newItems = items.filter((item) => item.id !== id);
    newItems.push({
      frame_size,
      frame_shape,
      frame_width,
      frame_dimensions,
      imageUrl,
      name,
      price,
      id: productResponse.id,
      price_id: createPrice.id,
    });
    db.collection('collections').doc(doc.id).update({
      items: newItems,
    });
  });

  return { priceResponse, productResponse };
};

const deleteProduct = async (data) => {
  const { id, price_id, category } = data;

  const priceResponse = await stripe.prices.update(price_id, {
    active: false,
  });

  const productResponse = await stripe.products.update(id, {
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
  return { priceResponse, productResponse };
};

module.exports = {
  createProduct,
  deleteProduct,
  editProduct,
};
