const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors'); // Import the CORS middleware

const app = express();

// Middleware for enabling CORS
app.use(cors());

// Middleware for file uploads
app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ msg: 'No file uploaded' }); // Return the response to terminate function execution
  }

  const file = req.files.file;

  // Move the uploaded file to a specific folder
  file.mv(path.join(__dirname, 'uploads', file.name), err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err); // Return the response to terminate function execution
    }

    // Send response with file details
    return res.json({ fileName: file.name, filePath: `/uploads/${file.name}` }); // Return the response to terminate function execution
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
