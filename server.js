const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

const path = require('path');

require('./config/mongoose')

app.use(express.urlencoded());


app.use('/', require('./routes/index'))

app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('server listening on port : ' + PORT);
});



