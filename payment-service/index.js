const e1 = require('express');
const app = e1();

app.post('/paymentprocess', (req, res) => (
    res.send('<html><body>INSIDE PAYMENT PROCESS API..</body></html>')
))

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5003, () =>
    console.log('Payment Server Started at Port No: 5003'));