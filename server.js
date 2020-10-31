var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

const PORT_CONST = 5000;
const returnCodes = {
    'error': 500,
    'ok': 200,
}

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

var app = express();
var port = process.env.PORT || PORT_CONST;

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded);*/

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', "index.html"));
    });
}

app.listen(port,function whileRunning(error) {
    if (error) {
        throw error;
    }

    console.log('Server runign on port ' + port);
});

app.post('/payment', function serve(req, res) {
    var body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body,
        function(stripeError, stripeResponse) {
            if (stripeError) {
                res.status(returnCodes.error).send(
                    { error: stripeError }
                );
            } else {
                res.status(returnCodes.ok).send(
                    { success: stripeResponse })
            }
        });
});
