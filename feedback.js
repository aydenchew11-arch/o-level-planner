const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join('/', 'tmp', 'feedback.json');

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS'
};

function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch { /* ignore */ }
  return [];
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  // POST — submit feedback (public)
  if (event.httpMethod === 'POST') {
    try {
      const { name, email, message } = JSON.parse(event.body);
      if (!message || !message.trim()) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Message is required.' }) };
      }
      const feedbacks = readData();
      feedbacks.push({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name?.trim() || 'Anonymous',
        email: email?.trim() || '',
        message: message.trim(),
        date: new Date().toISOString()
      });
      writeData(feedbacks);
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    } catch {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error.' }) };
    }
  }

  // GET — retrieve feedback (admin only)
  if (event.httpMethod === 'GET') {
    const key = event.headers['x-admin-key'];
    if (key !== process.env.ADMIN_KEY) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized.' }) };
    }
    try {
      return { statusCode: 200, headers, body: JSON.stringify(readData()) };
    } catch {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Could not read feedback.' }) };
    }
  }

  // DELETE — clear all feedback (admin only)
  if (event.httpMethod === 'DELETE') {
    const key = event.headers['x-admin-key'];
    if (key !== process.env.ADMIN_KEY) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized.' }) };
    }
    try {
      writeData([]);
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    } catch {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Could not clear feedback.' }) };
    }
  }

  return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed.' }) };
};
