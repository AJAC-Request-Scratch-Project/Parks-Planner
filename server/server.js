const path = require('path');
const express = require('express');

const routes = require('./routes/api');

const app = express();
const PORT = 3000; 
/*********************************************/

// Require in routers here.
app.use(express.json());

// might need to check bundle/build route after build folder is built

app.use('/api', routes);

app.get('/build/bundle.js', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js')))
app.get('/', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../index.html')));
app.get('/client/stylesheets/styles.css', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../client/stylesheets/styles.css')))

// Catch-all handler for unknown route.
app.use('/', (req, res)=> res.sendStatus(404));

// Global error handler.
app.use('/', (err, req, res, next)=> {
  let errorMessage = `you've found the global error handler`;
  if (err) errorMessage = err;

  console.log(err);
  return res.status(400).send(err);
})

// Start server.
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;