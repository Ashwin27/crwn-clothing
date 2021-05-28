import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey = "pk_test_51Iw8A4Eo7uvfYAEnf79mGgRHR4NPVdlDCI5h9Rsk1XSml0C8iLxAL05ajYLzUI7Y8vbSNI1pSsAnsDPhUMtz4kmf00nS0hCAJz";

  onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN CLOTHING Ltd.'
      billingAddress
      shippingAddress
      image=''
      panelLabel='Pay Now'
      amount={priceInCents}
      description={`Your price is ${price}`}
      token={this.onToken}
      stripeKey={publishableKey}
      svgUrl='https://sendeyo.com/up/d/f3eb2117da'
    />
  );
}

export default StripeCheckoutButton;