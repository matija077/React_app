import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {

    //100 for cents
    const priceFroStripe = price * 100;
    const publishableKey = 'pk_test_51HRzHYHwWQ5lwCW3SIbKrFY4euvp1dgbtL45iPpuLTEgrU73vk2ntXTIZ4kwiU6P4pSQbDiDL99ZUt3kitT2XCj400eES8NIh9';

    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='APP'
            billingAdress
            shippingAdress
            image='../../assets/4.2 favicon.ico.ico'
            description={`Your total is $${price}`}
            amount={priceFroStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        >
        </StripeCheckout>
    );
}

export default StripeCheckoutButton;