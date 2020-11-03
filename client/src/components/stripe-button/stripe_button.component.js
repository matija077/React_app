import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

function StripeCheckoutButton({ price }) {

    //100 for cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HRzHYHwWQ5lwCW3SIbKrFY4euvp1dgbtL45iPpuLTEgrU73vk2ntXTIZ4kwiU6P4pSQbDiDL99ZUt3kitT2XCj400eES8NIh9';

    const onToken = token => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(function resolved() {
            alert('succesfful');
        }, function rejected(error) {
            console.log(error);
            alert('ISSUE WITH PAYMENT');
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='APP'
            billingAdress
            shippingAdress
            image='../../assets/4.2 favicon.ico.ico'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        >
        </StripeCheckout>
    );
}

export default StripeCheckoutButton;