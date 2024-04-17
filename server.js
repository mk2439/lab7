const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 2700; // or any port you prefer

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname)); // Serve static files like HTML and CSS from the current directory

// Serve the mad lib form
app.get('/itc505/lab7', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the form submission
app.post('/itc505/lab7', (req, res) => {
  const { noun, verb, adjective, adverb, pluralNoun } = req.body;

 // Your mad lib template
const madLib = `Once upon a ${adjective} ${noun}, ${verb} ${adverb} with a group of ${pluralNoun}. It was a ${adjective} and ${adjective} day.`;

  // Send back the filled mad lib
  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});