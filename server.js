const express = require('express');
const fs = require('fs');

const app = express();
app.listen(3000, () => console.log('Server is running on port 3000'));

app.get('/', (req, res) => {
  fs.createReadStream(__dirname + '/public/index.html').pipe(res);
});