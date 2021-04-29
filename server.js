const express = require('express');
const app = express();
    let bodyParser = require('body-parser');

    let db = require('./db');

    port = 8080;

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    const routes = require('./routes');

    app.use('/api',routes.allRoutes);
    app.listen(port, () => console.log(`The Server is running on port ${port}`));