const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const mainRoutes = require('./routes/mainRoutes');

app.use(mainRoutes);

app.listen(PORT, () => {
    console.log(`Hello! The server is running on port ${PORT}`);
});
