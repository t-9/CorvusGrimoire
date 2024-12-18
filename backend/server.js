const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('frontend')); // frontendフォルダを静的ファイル配信

app.post('/submit', (req, res) => {
  const { code } = req.body;
  let result = 'fail';
  try {
    eval(code);
    if (typeof f === 'function' && f(1) === 2) {
      result = 'pass';
    }
  } catch (e) {
    result = 'fail';
  }
  res.json({ result });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
