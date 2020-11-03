const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public/')));
app.use('/dist', express.static(path.join(__dirname, '../dist/')));

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Ssnake running at port : ${port}`);
})