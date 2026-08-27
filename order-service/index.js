const e1 = require('express');
const app = e1();

app.use(e1.json())

app.post('/addorder', async (req, res) => {
    try {
        const paymentRes = await fetch('http://localhost:5003/paymentprocess', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const paymentData = await paymentRes.text();

        const notificationRes = await fetch('http://localhost:5001/sendnotification', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const notificationData = await notificationRes.text();
        res.send(notificationData);
    } catch (error) {
        res.status(500).send("Error executing flow: " + error.message);
    }
});

app.get('/vieworder', (req, res) => (
    res.send('<html><body>INSIDE VIEW ORDER API..</body></html>')
))

app.delete('/cancelorder', (req, res) => (
    res.send('<html><body>INSIDE CANCEL ORDER API..</body></html>')
))

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5002, () =>
    console.log('Order Server Started at Port No: 5002'));