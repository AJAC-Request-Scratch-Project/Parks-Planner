const path = require('path');
const express = require('express');

/*********************************************/

// Require in routers here.



app.use(express.json());



// Catch-all handler for unknown route.


// Global error handler.


// Start server.
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;