const e1 = require('express');
const app = e1();

app.post('/sendnotification', (req, res) => (
    res.send('<html><body>INSIDE SEND NOTIFICATION API..</body></html>')
))

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5001, () =>
    console.log('Notification Server Started at Port No: 5001'));