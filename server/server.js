const path = require('path');
const express = require('express');


/*********************************************/

// Require in routers here.



// Catch-all handler for unknown route.


// Global error handler.


// Start server.
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;