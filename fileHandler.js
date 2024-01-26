const fs = require('fs');
const readline = require('readline');

const getFileContent = (filePath, lineNumber, res) => {
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File not found');
    }

    if (lineNumber) {
        const stream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: stream,
            crlfDelay: Infinity,
        });
        let currentLine = 0;

        rl.on('line', (line) => {
            currentLine += 1;
            if (currentLine === lineNumber) {
                rl.close();
                res.send(line);
            }
        }).on('close', () => {
            if (currentLine < lineNumber) {
                res.status(404).send('Line number not found');
            }
        });
    } else {
        const stream = fs.createReadStream(filePath);
        stream.on('error', (err) => {
            console.error(err);
            res.status(500).send(err.message);
        });

        res.setHeader('Content-Type', 'text/plain');

        stream.pipe(res);
    }
};

module.exports = {
    getFileContent,
};

