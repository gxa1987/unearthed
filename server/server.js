// IMPORT:

import express from 'express';

// Initialization of Express app:
const app = express();

// Middleware:
app.use('/public', express.static('./public'));
// to serve files from scripts directory:
app.use('/scripts', express.static('./public/scripts'));


// Routes:
// Root Routes
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
});



// Starting Server on a port:
const PORT = process.env.PORT || 3001;
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
