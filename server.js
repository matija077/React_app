var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

const PORT_CONST = 5000;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

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
