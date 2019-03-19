const express = require('express');
const app = express();
const path = require('path'); // NodeJS Package for file pathss


app.use(express.static(__dirname + '/public')); // Provide static directory for frontend

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});