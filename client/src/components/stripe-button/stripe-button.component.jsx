import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H';

  const onToken = (token) => {
    // axios({
    //   url: 'payment',
    //   method: 'post',
    //   data: {
    //     amount: priceForStripe,
    //     token: token,
    //   },
    // })
    //   .then((response) => {
    //     alert('succesful payment');
    //   })
    //   .catch((error) => {
    //     console.log('Payment Error: ', error);
    //     alert(
    //       'There was an issue with your payment! Please make sure you use the provided credit card.'
    //     );
    //   });
    // Replace above axios call with fetch
    // fetch('payment', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     amount: priceForStripe,
    //     token: token,
    //   }),
    // })
    //   .then((response) => {
    //     console.log(response);
    //     alert('succesful payment');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert(
    //       'There was an issue with your payment! Please make sure you use the provided credit card.'
    //     );
    //   });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Vision Eyewear'
      billingAddress
      shippingAddress
      image='https://raw.githubusercontent.com/SujalShah3234/vision-eyewear-react-ecommerce/master/client/src/assets/brand-logo.svg'
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      alipay
      bitcoin
      allowRememberMe
      currency='INR'
    />
  );
};

export default StripeCheckoutButton;
