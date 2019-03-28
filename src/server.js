const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../build')));

app.listen(port, err => {
  console.log(`Server started on port ${port}`);
});
