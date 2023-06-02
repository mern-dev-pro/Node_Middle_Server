const express = require('express')
const app = express();
const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const host = "https://tradevill.online";
// const host = "https://5a11-189-165-75-242.ngrok.io";

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function (req, res) {
    const method = req.method;
    const url = host + req.url;
    const headers = req.headers;
    delete headers.host;
    delete headers.referer;
    var data = JSON.stringify(req.body);

    var config = {
        method,
        url,
        headers,
        data
    };

    axios(config)
        .then(function (response) {
            console.log(url + " success => ", response?.data);
            return res.send(JSON.stringify(response?.data));
        })
        .catch(function (error) {
            console.log('error: ', error);
            return res.status(error?.response?.status ?? 500).send(error?.response?.data);
        });
})

app.post('*', function (req, res) {
    const method = req.method;
    const url = host + req.url;
    const headers = req.headers;
    delete headers.host;
    delete headers.referer;
    var data = JSON.stringify(req.body);

    var config = {
        method,
        url,
        headers,
        data
    };

    axios(config)
        .then(function (response) {
            console.log(url + " success =>", response?.data);
            return res.send(JSON.stringify(response?.data));
        })
        .catch(function (error) {
            console.log(error);
            return res.status(error?.response?.status ?? 500).send(error?.response?.data);
        });
})

app.options('*', function (req, res) {
    const method = req.method;
    const url = host + req.url;
    const headers = req.headers;
    delete headers.host;
    delete headers.referer;
    var data = JSON.stringify(req.body);

    var config = {
        method,
        url,
        headers,
        data
    };

    console.log(url);

    axios(config)
        .then(function (response) {
            return res.send(JSON.stringify(response?.data));
        })
        .catch(function (error) {
            console.log('error: ', error);
            return res.send(error);
        });
})

app.delete('*', function (req, res) {
    const method = req.method;
    const url = host + req.url;
    const headers = req.headers;
    delete headers.host;
    delete headers.referer;
    var data = JSON.stringify(req.body);

    var config = {
        method,
        url,
        headers,
        data
    };

    console.log(url);

    axios(config)
        .then(function (response) {
            return res.send(JSON.stringify(response?.data));
        })
        .catch(function (error) {
            console.log('error: ', error);
            return res.send(error);
        });
})

// app.listen(80, () => console.log("app is runing on 8080"))
app.listen(5000, () => console.log("app is runing on 5000"))