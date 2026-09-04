import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png' };
http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
    const filename = path.resolve(root, '.' + pathname);
    const relative = path.relative(root, filename);
    if (relative.startsWith('..') || relative.split(path.sep).some((part) => part.startsWith('.')) || !types[path.extname(filename)]) {
      res.writeHead(404).end('Not found');
      return;
    }
    const data = await readFile(filename);
    res.writeHead(200, { 'Content-Type': types[path.extname(filename)], 'Cache-Control': 'no-store' });
    res.end(data);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));
