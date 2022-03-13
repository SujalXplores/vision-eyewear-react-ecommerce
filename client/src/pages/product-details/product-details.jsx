import './productdetails.css';

const ProductDetails = () => {
  return (
    <div className='pd-wrap'>
      <div className='container'>
        <div className='heading-section'>
          <h2>Product Details</h2>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='pd-img'>
              <img
                src='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Gold-Transparent-Full-Rim-Square-Lenskart-Air-Signia-LA-E14202-C1-Eyeglasses_lenskart-air-la-e14202-c1-eyeglasses_G_576907_02_2022.jpg'
                alt='product'
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='product-dtl'>
              <div className='product-info'>
                <div className='product-name'>
                  Gold Transparent Full Rim Square Eyeglasses
                </div>

                <div className='product-price-discount'>
                  <span>
                    <strong>₹999</strong>
                  </span>
                </div>
              </div>
              <ul className='product-dtl'>
                <li>
                  <strong>Brand Name:</strong> Vincent Chase Online
                </li>
                <li>
                  <strong>Product Type:</strong> Eyeglasses
                </li>
                <li>
                  <strong>Frame Type:</strong> Full Rim
                </li>
                <li>
                  <strong>Frame Shape:</strong> Rectangle
                </li>
                <li>
                  <strong>Frame Size:</strong> Lenskart Air
                </li>
                <li>
                  <strong>Frame Width:</strong> Lenskart Air
                </li>
                <li>
                  <strong>Frame Dimensions:</strong> Lenskart Air
                </li>
                <li>
                  <strong>Frame Colour:</strong> Lenskart Air
                </li>
              </ul>

              <div className='product-count'>
                <label htmlFor='size'>Quantity</label>
                <form action='#' className='display-flex'>
                  <div className='qtyminus'>-</div>
                  <input
                    type='text'
                    name='quantity'
                    defaultValue={1}
                    className='qty'
                  />
                  <div className='qtyplus'>+</div>
                </form>
                <a href='#' className='round-black-btn'>
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
