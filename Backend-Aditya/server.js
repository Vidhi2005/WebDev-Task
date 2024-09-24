const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const mainRoutes = require('./routes/mainRoutes');

app.use(mainRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
