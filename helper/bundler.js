const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');

const options = {
    open: true,
};

let bundler = new Bundler('src/client/index.html', options);
let app = express();

app.use(
    '/api',
    proxy({
        target: 'http://localhost:3000'
    })
);

app.use(bundler.middleware());
const port = Number(1234);
console.log(`App is starting up on port ${port}`);
app.listen(port, () => console.log(`Parcel bundled app listening on port ${port}`));
