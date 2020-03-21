const express = require('express');
const app = express();

var path = require("path");



// Server being ran on port 5000
const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // This is relative path
    });
}

app.listen(PORT, () => `Server running on port ${PORT}`);