var express = require('express');
var app = express();
app.get('concat',function (rep, res) {
    res.send('Hello node');
});
app.listen(3000,function (rep, res) {
    console.log('Hello node port 3000');
});