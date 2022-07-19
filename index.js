const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT);

function handleHome (req, res) {
    console.log('Terminal Home');
    res.send('Browser Home');
  }
  
  app.get('/', handleHome)
  
  app.listen(PORT, handleListen);
  