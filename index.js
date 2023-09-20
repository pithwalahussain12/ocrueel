const express = require('express');
const app = express();
const PORT = 3000;

// Without middleware
app.get('/', function (req, res) {
    res.redirect('https://zecue.com/');
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});