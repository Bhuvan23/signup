
const express = require('express');
const connectDB = require('./config/db');

const app = eexpress();


app.use(express.json());


connectDB();


app.get('/', (req, res) => {
    res.send('Server is running!');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
