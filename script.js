const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  // Access user IP address from request object
  const userIp = req.ip;

  // Log IP address with timestamp (example)
  const logEntry = `${new Date().toISOString()} - ${userIp}\n`;
  fs.appendFileSync('ip_log.txt', logEntry);

  // Send a response to the client (optional)
  res.send('IP address received');
});

app.listen(3000, () => console.log('Server listening on port 3000'));
