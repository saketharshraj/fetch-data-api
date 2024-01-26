const express = require('express');
const fileHandler = require('./fileHandler');

const app = express();
const PORT = 8080;

app.get('/data', async (req, res) => {
    const fileName = req.query.n;
    const lineNumber = parseInt(req.query.m);

    if (!fileName) {
        return res.status(400).send('File name (n) is required');
    }

    const filePath = `/tmp/data/${fileName}.txt`;
    try {
        fileHandler.getFileContent(filePath, lineNumber, res);
    }catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
