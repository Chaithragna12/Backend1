const express = require('express');
const app = express();


app.get('/status/:code', (req, res) => {
    const statusCode = parseInt(req.params.code, 10); 
    const message = req.query.message || 'No message provided'; 
    res.status(statusCode).send(message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});