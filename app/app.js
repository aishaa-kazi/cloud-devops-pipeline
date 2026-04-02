const express = require('express');

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Cloud DevOps App is Running!');
});

// Health check route (important for DevOps)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});