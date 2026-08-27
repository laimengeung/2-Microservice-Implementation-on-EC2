const e1 = require('express');
const app = e1();

app.get('/viewallrestaurant', (req, res) => (
    res.send('<html><body>INSIDE VIEW ALL RESTAURANT API..</body></html>')
));

app.get('/searchrestaurant', (req, res) => (
    res.send('<html><body>INSIDE SEARCH RESTAURANT API..</body></html>')
))

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5004, () =>
    console.log('Restaurant Server Started at Port No: 5004'));