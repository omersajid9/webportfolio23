import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set Expires headers for static assets (before static middleware)
app.use((req, res, next) => {
  // Set cache headers for different file types
  const url = req.url.toLowerCase();
  
  // Images - cache for 1 year
  if (url.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
  }
  // CSS and JS - cache for 1 year (Vite adds hashes to filenames)
  else if (url.match(/\.(css|js)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
  }
  // Fonts - cache for 1 year
  else if (url.match(/\.(woff|woff2|ttf|eot)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
  }
  // HTML - cache for 1 hour
  else if (url.match(/\.html$/)) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Expires', new Date(Date.now() + 3600000).toUTCString());
  }
  // PDFs and other documents - cache for 1 month
  else if (url.match(/\.(pdf)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=2592000');
    res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString());
  }
  
  next();
});

// Serve pre-compressed .gz files if they exist (before static middleware)
app.get('*.(js|css)', (req, res, next) => {
  const gzPath = join(__dirname, 'dist', req.path + '.gz');
  if (existsSync(gzPath) && req.headers['accept-encoding']?.includes('gzip')) {
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Content-Type', req.path.endsWith('.js') ? 'application/javascript' : 'text/css');
    return res.sendFile(gzPath);
  }
  next();
});

// Enable gzip compression for other files
app.use(compression());

// Serve static files from dist directory
app.use(express.static(join(__dirname, 'dist')));

// Serve public directory for assets
app.use(express.static(join(__dirname, 'public')));

// Handle React Router - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
