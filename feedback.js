const { getStore } = require('@netlify/blobs');

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS'
};

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  const store = getStore('feedback-data');

  // POST /api/feedback — submit feedback (public)
  if (event.httpMethod === 'POST') {
    try {
      const { name, email, message } = JSON.parse(event.body);
      if (!message || !message.trim()) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Message is required.' }) };
      }

      const current = JSON.parse(await store.get('all', { type: 'text' }) || '[]');
      current.push({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name?.trim() || 'Anonymous',
        email: email?.trim() || '',
        message: message.trim(),
        date: new Date().toISOString()
      });
      await store.set('all', JSON.stringify(current));

      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    } catch (err) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error.' }) };
    }
  }

  // GET /api/feedback — retrieve feedback (admin only)
  if (event.httpMethod === 'GET') {
    const key = event.headers['x-admin-key'];
    if (key !== process.env.ADMIN_KEY) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized.' }) };
    }
    try {
      const data = await store.get('all', { type: 'text' });
      return { statusCode: 200, headers, body: data || '[]' };
    } catch {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Could not read feedback.' }) };
    }
  }

  // DELETE /api/feedback — clear all feedback (admin only)
  if (event.httpMethod === 'DELETE') {
    const key = event.headers['x-admin-key'];
    if (key !== process.env.ADMIN_KEY) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized.' }) };
    }
    try {
      await store.set('all', '[]');
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    } catch {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Could not clear feedback.' }) };
    }
  }

  return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed.' }) };
};
