const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('DEPLOY WEB APP HERE');
});

app.listen(8080, () => {
  console.log('Listening On Port 8080');
});
