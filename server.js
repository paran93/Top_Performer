const express = require('express');
const path = require('path');
const basicAuth = require('express-basic-auth');

const app = express();

// Add Basic Authentication
app.use(
  basicAuth({
    users: { 'admin': 'yourpassword123' }, // 🔐 Change this!
    challenge: true, // Triggers browser prompt
  })
);

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

